import { useEffect, useRef, useState } from "react";

/**
 * Preloads a numbered frame sequence for canvas scrubbing.
 * Inert (and free) when `enabled` is false.
 */
export function useFrameSequence(
  enabled: boolean,
  frameCount: number,
  path: (index: number) => string,
) {
  const frames = useRef<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(enabled ? 0 : 1);

  useEffect(() => {
    if (!enabled) return;
    let cancelled = false;
    let loaded = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < frameCount; i += 1) {
      const img = new Image();
      img.decoding = "async";
      img.src = path(i);
      img.onload = img.onerror = () => {
        if (cancelled) return;
        loaded += 1;
        setProgress(loaded / frameCount);
      };
      images[i] = img;
    }
    frames.current = images;

    return () => {
      cancelled = true;
      frames.current = [];
    };
  }, [enabled, frameCount, path]);

  return { frames, progress, ready: !enabled || progress >= 1 };
}

/** Loads a plain list of images and resolves when all have settled. */
export function useImageSet(sources: string[]) {
  const images = useRef<Record<string, HTMLImageElement>>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let settled = 0;
    const map: Record<string, HTMLImageElement> = {};

    if (sources.length === 0) {
      setReady(true);
      return;
    }

    sources.forEach((src) => {
      const img = new Image();
      img.decoding = "async";
      img.src = src;
      const done = () => {
        if (cancelled) return;
        settled += 1;
        if (settled === sources.length) setReady(true);
      };
      if (img.complete) done();
      else img.onload = img.onerror = done;
      map[src] = img;
    });

    images.current = map;
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sources.join("|")]);

  return { images, ready };
}
