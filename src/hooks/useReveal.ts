import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Reveals every `.reveal-up` inside the returned ref on scroll.
 * Respects prefers-reduced-motion and cleans itself up.
 */
export function useReveal<T extends HTMLElement>() {
  const scope = useRef<T>(null);

  useEffect(() => {
    const el = scope.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      gsap.set(el.querySelectorAll(".reveal-up"), { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.batch(el.querySelectorAll(".reveal-up"), {
        start: "top 88%",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.09,
            ease: "power3.out",
            overwrite: true,
          }),
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return scope;
}
