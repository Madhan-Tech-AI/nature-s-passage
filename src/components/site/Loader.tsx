import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/** Brief brand curtain while the forest imagery decodes. */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    // Hard fallback: the curtain never traps the page.
    const failsafe = window.setTimeout(() => setDone(true), 3200);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ onComplete: () => setDone(true) });
      tl.to("[data-loader-line]", { scaleX: 1, duration: 0.9, ease: "power2.inOut" })
        .to("[data-loader-word]", { autoAlpha: 0, y: -12, duration: 0.35 }, "-=0.15")
        .to(el, { yPercent: -100, duration: 0.7, ease: "power3.inOut" }, "-=0.1");
    }, el);
    return () => {
      window.clearTimeout(failsafe);
      ctx.revert();
    };
  }, []);

  if (done) return null;

  return (
    <div
      ref={root}
      className="surface-canopy fixed inset-0 z-[120] flex flex-col items-center justify-center gap-6"
    >
      <div data-loader-word className="text-center">
        <p className="eyebrow text-gold">Namo Organic</p>
        <p className="mt-4 font-display text-3xl text-bone sm:text-5xl">Grow With Nature</p>
      </div>
      <div className="h-px w-40 bg-bone/20">
        <span
          data-loader-line
          className="block h-px w-full origin-left scale-x-0 bg-gold"
        />
      </div>
    </div>
  );
}
