import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { chapters, products } from "@/data/site";
import { journeyLength, journeyLengthMobile } from "@/components/hero/heroConfig";
import { ForestCanvas } from "@/components/hero/ForestCanvas";
import { Pollen } from "@/components/hero/Pollen";
import { usePointer } from "@/hooks/usePointer";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/use-mobile";

gsap.registerPlugin(ScrollTrigger);

export function HeroJourney() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef(0);
  const barRef = useRef<HTMLSpanElement>(null);
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const isMobile = useIsMobile();
  const pointer = usePointer(!reduced);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const length = isMobile ? journeyLengthMobile : journeyLength;

      const tl = gsap.timeline();
      chapters.forEach((chapter, i) => {
        const el = section.querySelector<HTMLElement>(`[data-chapter="${i}"]`);
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, y: 40, filter: "blur(8px)" },
          { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.6 },
          chapter.at * 10,
        ).to(el, { autoAlpha: 0, y: -30, filter: "blur(6px)", duration: 0.6 }, chapter.at * 10 + 1.5);
      });

      products.forEach((product, i) => {
        const el = section.querySelector<HTMLElement>(`[data-product-label="${i}"]`);
        if (!el) return;
        tl.fromTo(
          el,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.5 },
          product.anchor * 10 - 0.3,
        ).to(el, { autoAlpha: 0, y: -18, duration: 0.5 }, product.anchor * 10 + 1.1);
      });

      tl.set({}, {}, 10.5);

      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${length * 100}%`,
        pin: true,
        scrub: reduced ? true : 1,
        animation: tl,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${self.progress})`;
          }
        },
      });
    }, section);

    return () => ctx.revert();
  }, [isMobile, reduced]);

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-forest-deep grain"
      aria-label="The Namo Organic forest journey"
    >
      <ForestCanvas
        progressRef={progressRef}
        pointerRef={pointer}
        reducedMotion={reduced}
        onReady={() => setReady(true)}
      />

      {!reduced && !isMobile && <Pollen />}

      {/* Chapter copy */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
        {chapters.map((chapter, i) => (
          <div
            key={chapter.title}
            data-chapter={i}
            className={`absolute left-1/2 w-[min(92vw,48rem)] -translate-x-1/2 text-center text-bone ${
              i === 0 ? "top-1/2 -translate-y-1/2" : "top-[13vh]"
            }`}
            style={{ opacity: 0 }}
          >
            <p className="eyebrow text-gold">{chapter.eyebrow}</p>
            <h1
              className={
                i === 0
                  ? "mt-6 text-[clamp(2.75rem,10vw,8rem)] leading-[0.92] [text-shadow:0_8px_40px_rgba(6,20,12,0.55)]"
                  : "mt-5 font-display text-[clamp(1.9rem,5vw,4rem)] leading-[1.04] [text-shadow:0_8px_40px_rgba(6,20,12,0.6)]"
              }
            >
              {chapter.title}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-bone/80 [text-shadow:0_4px_20px_rgba(6,20,12,0.7)] sm:text-base">
              {chapter.body}
            </p>
          </div>
        ))}

        {/* Product name plates that appear as each product is reached */}
        {products.map((product, i) => (
          <div
            key={product.id}
            data-product-label={i}
            className="absolute bottom-[7vh] left-1/2 w-[min(90vw,26rem)] -translate-x-1/2 rounded-sm bg-forest-deep/40 px-6 py-3 text-center text-bone backdrop-blur-[2px]"
            style={{ opacity: 0 }}
          >
            <p className="eyebrow text-gold">{product.category}</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl">{product.name}</h2>
            <p className="mt-2 text-sm text-bone/70">{product.summary}</p>
          </div>
        ))}
      </div>

      {/* Journey progress rail */}
      <div className="absolute bottom-8 left-1/2 w-[min(60vw,22rem)] -translate-x-1/2">
        <div className="h-px w-full bg-bone/25">
          <span
            ref={barRef}
            className="block h-px w-full origin-left bg-gold"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
        <p className="mt-3 text-center text-[0.6rem] tracking-[0.32em] text-bone/50 uppercase">
          {ready ? "Scroll to travel" : "Preparing the forest"}
        </p>
      </div>
    </section>
  );
}
