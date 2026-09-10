import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { approach } from "@/data/site";
import soil from "@/assets/soil-roots.jpg";

gsap.registerPlugin(ScrollTrigger);

export function Approach() {
  const scope = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (!reduced) {
        gsap.to("[data-approach-image]", {
          yPercent: -14,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      gsap.utils.toArray<HTMLElement>("[data-step]").forEach((step) => {
        gsap.fromTo(
          step,
          { autoAlpha: reduced ? 1 : 0.25, x: reduced ? 0 : 30 },
          {
            autoAlpha: 1,
            x: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: step, start: "top 82%" },
          },
        );
      });

      gsap.fromTo(
        "[data-approach-rail]",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",
          scrollTrigger: {
            trigger: "[data-approach-list]",
            start: "top 70%",
            end: "bottom 70%",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="approach"
      ref={scope}
      className="surface-canopy grain relative overflow-hidden py-28 sm:py-40"
    >
      <img
        data-approach-image
        src={soil}
        alt=""
        aria-hidden="true"
        loading="lazy"
        width={1400}
        height={1000}
        className="absolute inset-0 h-[130%] w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-forest-deep/70" aria-hidden="true" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:h-fit">
          <p className="eyebrow text-gold">The approach</p>
          <h2 className="mt-5 text-[clamp(2.25rem,5vw,4rem)] leading-[1.03] text-bone">
            Slow science, done in the soil.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-bone/70">
            We do not formulate in a lab and hope. Every input is grown, fermented and
            proven in the same fields it is made for.
          </p>
        </div>

        <div data-approach-list className="relative pl-10">
          <span
            data-approach-rail
            className="absolute top-2 bottom-2 left-0 w-px origin-top bg-gold/60"
            aria-hidden="true"
          />
          <ol className="space-y-14">
            {approach.map((item) => (
              <li key={item.step} data-step className="relative">
                <span
                  className="absolute top-2 -left-10 size-2 -translate-x-1/2 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <p className="font-display text-sm tracking-[0.3em] text-gold">{item.step}</p>
                <h3 className="mt-3 font-display text-3xl text-bone sm:text-4xl">{item.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-bone/70">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
