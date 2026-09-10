import { useEffect, useMemo, useRef } from "react";
import { products, signposts } from "@/data/site";
import {
  forestLayers,
  frameSequence,
  heroAssets,
} from "@/components/hero/heroConfig";
import { useFrameSequence, useImageSet } from "@/hooks/useFrameSequence";
import type { PointerState } from "@/hooks/usePointer";

type Props = {
  /** Raw scroll progress of the pinned hero, 0..1, updated by ScrollTrigger. */
  progressRef: React.MutableRefObject<number>;
  pointerRef: React.MutableRefObject<PointerState>;
  reducedMotion: boolean;
  onReady?: () => void;
};

const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));

/** Smooth 0→1→0 window around `center`. */
function bell(p: number, center: number, width: number) {
  const d = Math.abs(p - center) / width;
  if (d >= 1) return 0;
  return Math.cos(d * Math.PI * 0.5) ** 2;
}

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  w: number,
  h: number,
  scale: number,
  dx: number,
  dy: number,
  anchor: number,
  alpha: number,
) {
  if (!img.naturalWidth) return;
  const ratio = img.naturalWidth / img.naturalHeight;
  let dw = w * scale;
  let dh = dw / ratio;
  if (dh < h * scale) {
    dh = h * scale;
    dw = dh * ratio;
  }
  const x = (w - dw) / 2 + dx;
  const y = (h - dh) * anchor + dy;
  ctx.globalAlpha = alpha;
  ctx.drawImage(img, x, y, dw, dh);
  ctx.globalAlpha = 1;
}

export function ForestCanvas({
  progressRef,
  pointerRef,
  reducedMotion,
  onReady,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const smoothed = useRef(0);
  const pointerSmooth = useRef({ x: 0, y: 0 });

  const sources = useMemo(
    () => [
      ...forestLayers.map((l) => l.src),
      heroAssets.stone,
      heroAssets.signboard,
      heroAssets.leaf,
      ...products.map((p) => p.image),
    ],
    [],
  );

  const { images, ready } = useImageSet(sources);
  const sequence = useFrameSequence(
    frameSequence.enabled,
    frameSequence.frameCount,
    frameSequence.path,
  );

  useEffect(() => {
    if (ready) onReady?.();
  }, [ready, onReady]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let raf = 0;
    let last = performance.now();
    let width = 0;
    let height = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      raf = requestAnimationFrame(render);

      // Frame-rate independent easing: converges in the same wall-clock time
      // whether the device runs at 120fps or struggles at 10fps.
      const now = performance.now();
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const kScroll = 1 - Math.exp(-6 * dt);
      const kPointer = 1 - Math.exp(-4 * dt);

      // Frame-rate independent smoothing of the scroll position.
      const target = clamp(progressRef.current);
      smoothed.current += (target - smoothed.current) * (reducedMotion ? 1 : kScroll);
      const p = smoothed.current;

      const pt = pointerRef.current;
      pointerSmooth.current.x += (pt.x - pointerSmooth.current.x) * kPointer;
      pointerSmooth.current.y += (pt.y - pointerSmooth.current.y) * kPointer;
      const mx = reducedMotion ? 0 : pointerSmooth.current.x;
      const my = reducedMotion ? 0 : pointerSmooth.current.y;

      ctx.fillStyle = "#0d1a12";
      ctx.fillRect(0, 0, width, height);

      // --- Source A: real cinematic frame sequence -----------------------
      if (frameSequence.enabled && sequence.ready) {
        const frames = sequence.frames.current;
        const idx = Math.round(p * (frames.length - 1));
        const frame = frames[idx];
        if (frame) drawCover(ctx, frame, width, height, 1, 0, 0, 0.5, 1);
      } else {
        // --- Source B: layered parallax forest, dollied by scroll --------
        forestLayers.forEach((layer) => {
          const img = images.current[layer.src];
          if (!img) return;
          const dolly = 1 + layer.depth * p * 0.55;
          const dx = -mx * layer.depth * 26;
          const dy = -my * layer.depth * 16 + layer.depth * p * 40;
          drawCover(
            ctx,
            img,
            width,
            height,
            dolly,
            dx,
            dy,
            layer.anchor ?? 0.5,
            layer.opacity ?? 1,
          );
        });
      }

      // --- Wooden signboards planted along the path ---------------------
      const sign = images.current[heroAssets.signboard];
      if (sign?.naturalWidth) {
        signposts.forEach((post, i) => {
          const local = (p - post.at) / 0.14;
          if (Math.abs(local) > 1) return;
          const life = bell(p, post.at, 0.14);
          const side = i % 2 === 0 ? -1 : 1;
          const scale = 0.32 + local * 0.5;
          const w = height * clamp(scale, 0.05, 1.4);
          const h = w;
          const x =
            width / 2 + side * (width * (0.16 + local * 0.42)) - w / 2 - mx * 30;
          const y = height * 0.34 + local * height * 0.22 - my * 18;
          ctx.globalAlpha = life;
          ctx.drawImage(sign, x, y, w, h);
          ctx.save();
          ctx.globalAlpha = life;
          ctx.fillStyle = "#2c2318";
          ctx.textAlign = "center";
          ctx.font = `600 ${Math.max(11, w * 0.055)}px Manrope, sans-serif`;
          ctx.fillText(post.title.toUpperCase(), x + w * 0.5, y + h * 0.31);
          ctx.font = `500 ${Math.max(9, w * 0.038)}px Manrope, sans-serif`;
          ctx.fillText(post.meta, x + w * 0.5, y + h * 0.375);
          ctx.restore();
          ctx.globalAlpha = 1;
        });
      }

      // --- Products physically resting on mossy stones ------------------
      const stone = images.current[heroAssets.stone];
      products.forEach((product) => {
        const life = bell(p, product.anchor, 0.13);
        if (life <= 0.001) return;
        const local = (p - product.anchor) / 0.13; // -1 .. 1
        const rise = (1 - life) * height * 0.06;
        const groundY = height * 0.72 + local * height * 0.3 + rise - my * 10;
        const cx = width / 2 + -mx * 40 + local * width * 0.05;
        const stoneW = width * (0.34 + local * 0.16);

        if (stone?.naturalWidth) {
          const stoneH = stoneW * (stone.naturalHeight / stone.naturalWidth);
          ctx.globalAlpha = life;
          ctx.drawImage(stone, cx - stoneW / 2, groundY, stoneW, stoneH);
          ctx.globalAlpha = 1;
        }

        const img = images.current[product.image];
        if (img?.naturalWidth) {
          const ph = height * (0.3 + local * 0.14);
          const pw = ph * (img.naturalWidth / img.naturalHeight);
          const bob = reducedMotion ? 0 : Math.sin(Date.now() / 1400) * 4;
          const px = cx - pw / 2;
          const py = groundY - ph * 0.82 + bob;

          // contact shadow
          ctx.save();
          ctx.globalAlpha = life * 0.35;
          ctx.filter = "blur(10px)";
          ctx.fillStyle = "#08130c";
          ctx.beginPath();
          ctx.ellipse(cx, groundY + ph * 0.06, pw * 0.42, ph * 0.045, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          ctx.globalAlpha = life;
          ctx.drawImage(img, px, py, pw, ph);
          ctx.globalAlpha = 1;
        }
      });

      // --- Foreground leaves framing the lens ---------------------------
      const leaf = images.current[heroAssets.leaf];
      if (leaf?.naturalWidth) {
        const corners: [number, number, number, number][] = [
          [-0.12, -0.16, 0.62, 0.35],
          [0.78, -0.22, 0.7, -0.5],
          [-0.18, 0.62, 0.75, -0.2],
          [0.72, 0.66, 0.8, 0.9],
        ];
        corners.forEach(([fx, fy, fs, rot], i) => {
          const depth = 2.2 + i * 0.2;
          const size = height * fs * (1 + p * 0.5);
          const x = width * fx - mx * depth * 26 + p * (fx < 0.5 ? -60 : 60);
          const y = height * fy - my * depth * 18 + p * 40;
          ctx.save();
          ctx.globalAlpha = 0.85;
          ctx.translate(x + size / 2, y + size / 2);
          ctx.rotate(rot + (reducedMotion ? 0 : Math.sin(Date.now() / 2600 + i) * 0.02));
          ctx.filter = "blur(3px) brightness(0.6)";
          ctx.drawImage(leaf, -size / 2, -size / 2, size, size);
          ctx.restore();
        });
        ctx.globalAlpha = 1;
      }

      // --- Atmosphere: light shaft + depth vignette ---------------------
      const shaft = ctx.createLinearGradient(width * 0.62, 0, width * 0.3, height);
      shaft.addColorStop(0, "rgba(255, 236, 186, 0.22)");
      shaft.addColorStop(1, "rgba(255, 236, 186, 0)");
      ctx.fillStyle = shaft;
      ctx.fillRect(0, 0, width, height);

      const vignette = ctx.createRadialGradient(
        width / 2,
        height * 0.5,
        height * 0.25,
        width / 2,
        height * 0.5,
        height * 0.95,
      );
      vignette.addColorStop(0, "rgba(6, 20, 12, 0)");
      vignette.addColorStop(1, "rgba(6, 20, 12, 0.72)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);
    };

    raf = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [images, pointerRef, progressRef, reducedMotion, sequence]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
