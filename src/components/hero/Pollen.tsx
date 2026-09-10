import { Canvas, useFrame } from "@react-three/fiber";
import { ClientOnly } from "@tanstack/react-router";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/** Soft round sprite so motes read as light, not as square pixels. */
function useMoteTexture() {
  return useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      const g = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
      g.addColorStop(0, "rgba(255,246,214,1)");
      g.addColorStop(0.35, "rgba(255,240,196,0.55)");
      g.addColorStop(1, "rgba(255,240,196,0)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, size, size);
    }
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, []);
}

function Motes({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const sprite = useMoteTexture();


  const { positions, speeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      speeds[i] = 0.1 + Math.random() * 0.35;
    }
    return { positions, speeds };
  }, [count]);

  useFrame((state, delta) => {
    const points = ref.current;
    if (!points) return;
    const dt = Math.min(delta, 0.05);
    const attr = points.geometry.getAttribute("position") as THREE.BufferAttribute;
    const arr = attr.array as Float32Array;
    for (let i = 0; i < count; i += 1) {
      const yi = i * 3 + 1;
      const speed = speeds[i] ?? 0.2;
      arr[yi] = (arr[yi] ?? 0) + speed * dt * 0.5;
      arr[i * 3] =
        (arr[i * 3] ?? 0) + Math.sin(state.clock.elapsedTime * 0.3 + i) * dt * 0.08;
      if ((arr[yi] ?? 0) > 4.5) arr[yi] = -4.5;
    }
    attr.needsUpdate = true;
    points.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.08;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.14}
        map={sprite}
        alphaMap={sprite}
        color="#f6ecc6"
        transparent
        opacity={0.55}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}

/** Floating pollen / light motes rendered over the forest canvas. */
export function Pollen() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <ClientOnly fallback={null}>
        <Canvas
          camera={{ position: [0, 0, 7], fov: 55 }}
          gl={{ antialias: false, alpha: true }}
          dpr={[1, 1.5]}
        >
          <Motes />
        </Canvas>
      </ClientOnly>
    </div>
  );
}
