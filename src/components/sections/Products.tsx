import { useRef } from "react";
import gsap from "gsap";
import { products } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import { Button } from "@/components/ui/button";

function ProductCard({ index }: { index: number }) {
  const product = products[index];
  const cardRef = useRef<HTMLDivElement>(null);

  if (!product) return null;

  const onMove = (e: React.PointerEvent) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(el, {
      rotateY: x * 10,
      rotateX: -y * 10,
      duration: 0.6,
      ease: "power3.out",
      transformPerspective: 900,
    });
    gsap.to(el.querySelector("[data-float]"), {
      x: x * 26,
      y: y * 20,
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const onLeave = () => {
    const el = cardRef.current;
    if (!el) return;
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.9, ease: "elastic.out(1,0.6)" });
    gsap.to(el.querySelector("[data-float]"), { x: 0, y: 0, duration: 0.9 });
  };

  return (
    <article
      ref={cardRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      data-cursor
      className="reveal-up group relative flex flex-col overflow-hidden rounded-sm border border-border bg-card p-8 shadow-[var(--shadow-soil)] transition-colors hover:border-moss/50"
    >
      <span className="eyebrow text-moss">{product.category}</span>

      <div className="relative mt-8 flex h-64 items-end justify-center">
        <div
          className="absolute bottom-2 h-6 w-40 rounded-[100%] bg-forest-deep/20 blur-xl"
          aria-hidden="true"
        />
        <img
          data-float
          src={product.image}
          alt={`${product.name} — ${product.category}`}
          loading="lazy"
          width={768}
          height={1024}
          className="h-full w-auto object-contain drop-shadow-2xl transition-transform duration-700 group-hover:-translate-y-2"
        />
      </div>

      <h3 className="mt-8 font-display text-3xl">{product.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.detail}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {product.facts.map((fact) => (
          <li
            key={fact}
            className="rounded-full border border-border px-3 py-1 text-[0.65rem] tracking-[0.16em] text-muted-foreground uppercase"
          >
            {fact}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Products() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="products" ref={scope} className="relative bg-background py-28 sm:py-40">
      <div className="mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="eyebrow reveal-up text-moss">What we make</p>
            <h2 className="reveal-up mt-5 text-[clamp(2.25rem,5vw,4rem)] leading-[1.03]">
              Three inputs. One living system.
            </h2>
          </div>
          <p className="reveal-up max-w-sm text-sm leading-relaxed text-muted-foreground">
            Each product does one job well, and each one is designed to leave the field
            healthier than it found it.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.id} index={i} />
          ))}
        </div>

        <div className="reveal-up mt-14 flex justify-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href="#contact">Request the full catalogue</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
