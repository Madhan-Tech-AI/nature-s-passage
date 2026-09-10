import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { brand } from "@/data/site";
import { Button } from "@/components/ui/button";
import fields from "@/assets/fields-sunrise.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-cta-image]",
        { yPercent: -10, scale: 1.12 },
        {
          yPercent: 8,
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
      gsap.fromTo(
        "[data-cta-copy]",
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 70%" },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={scope}
      className="relative flex min-h-[85vh] items-center overflow-hidden"
    >
      <img
        data-cta-image
        src={fields}
        alt="Terraced organic fields at sunrise with mist in the valleys"
        loading="lazy"
        width={1920}
        height={1080}
        className="absolute inset-0 h-[120%] w-full object-cover"
      />
      <div className="absolute inset-0 bg-forest-deep/70" aria-hidden="true" />

      <div data-cta-copy className="relative mx-auto w-full max-w-3xl px-6 text-center">
        <p className="eyebrow text-gold">Start the season right</p>
        <h2 className="mt-6 text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.02] text-bone">
          Let&rsquo;s grow with nature.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-bone/75 sm:text-base">
          Tell us about your crop, your soil and your season. Our agronomists will map a
          programme for your field — no obligation.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" className="rounded-full px-8">
            <a href={`mailto:${brand.email}`}>Email our team</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-bone/40 bg-transparent px-8 text-bone hover:bg-bone/10 hover:text-bone"
          >
            <a href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
