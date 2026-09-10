/**
 * Hero journey configuration.
 *
 * The hero renders on a single HTML5 canvas and supports two sources:
 *
 * 1. `frameSequence.enabled = false` (default) — a layered parallax forest
 *    built from the images in `src/assets`, dollied by scroll progress.
 * 2. `frameSequence.enabled = true` — a real cinematic frame sequence.
 *    Drop the frames in `public/frames/` and switch the flag; nothing else
 *    in the codebase needs to change.
 */

import sky from "@/assets/layer-sky.jpg";
import plate from "@/assets/forest-plate.jpg";
import mountains from "@/assets/layer-mountains.png";
import far from "@/assets/layer-far.png";
import mid from "@/assets/layer-mid.png";
import veg from "@/assets/layer-veg.png";
import leaf from "@/assets/leaf.png";
import stone from "@/assets/stone.png";
import signboard from "@/assets/signboard.png";

export const frameSequence = {
  enabled: false,
  frameCount: 450,
  /** e.g. /frames/frame_0001.jpg */
  path: (index: number) =>
    `/frames/frame_${String(index + 1).padStart(4, "0")}.jpg`,
  format: "jpg" as const,
};

export type ForestLayer = {
  src: string;
  /** 0 = infinitely far, higher = closer to the lens (more dolly + parallax). */
  depth: number;
  /** Vertical anchor of the layer: 0 top, 0.5 centre, 1 bottom. */
  anchor?: number;
  opacity?: number;
  blur?: number;
};

export const forestLayers: ForestLayer[] = [
  { src: sky, depth: 0.04, anchor: 0.35 },
  { src: mountains, depth: 0.12, anchor: 0.55, opacity: 0.85 },
  { src: plate, depth: 0.28, anchor: 0.5, opacity: 0.96 },
  { src: far, depth: 0.5, anchor: 0.62, opacity: 0.75 },
  { src: mid, depth: 0.95, anchor: 0.62, opacity: 0.95 },
  { src: veg, depth: 1.7, anchor: 1, opacity: 1 },
];

export const heroAssets = { leaf, stone, signboard };

/** Total scroll length of the pinned hero, in viewport heights. */
export const journeyLength = 9;
/** Mobile gets a shorter, lighter journey. */
export const journeyLengthMobile = 5;
