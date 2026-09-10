import { useEffect, useRef } from "react";

export type PointerState = { x: number; y: number };

/**
 * Normalised pointer position (-1..1) kept in a ref so render loops can read it
 * without triggering React re-renders.
 */
export function usePointer(enabled = true) {
  const pointer = useRef<PointerState>({ x: 0, y: 0 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [enabled]);

  return pointer;
}
