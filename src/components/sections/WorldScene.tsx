import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Lightformer } from "@react-three/drei";
import { ClientOnly } from "@tanstack/react-router";
import * as THREE from "three";
import { benefits } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";

function Seed() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  const orbit = useMemo(
    () =>
      Array.from({ length: 26 }, (_, i) => {
        const a = (i / 26) * Math.PI * 2;
        const r = 2.3 + Math.sin(i * 2.4) * 0.35;
        return {
          angle: a,
          radius: r,
          y: Math.sin(i * 1.7) * 0.9,
          size: 0.05 + Math.random() * 0.07,
        };
      }),
    [],
  );

  useFrame((state, delta) => {
    const dt = Math.min(delta, 0.05);
    if (group.current) group.current.rotation.y += dt * 0.22;
    if (core.current) {
      core.current.rotation.x += dt * 0.12;
      const t = state.clock.elapsedTime;
      core.current.position.y = Math.sin(t * 0.7) * 0.12;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={core} castShadow>
        <icosahedronGeometry args={[1.25, 4]} />
        <meshStandardMaterial
          color="#3f6b45"
          roughness={0.35}
          metalness={0.1}
          flatShading
        />
      </mesh>

      {orbit.map((o, i) => (
        <mesh
          key={i}
          position={[Math.cos(o.angle) * o.radius, o.y, Math.sin(o.angle) * o.radius]}
        >
          <sphereGeometry args={[o.size, 12, 12]} />
          <meshStandardMaterial color="#d9b871" roughness={0.4} />
        </mesh>
      ))}

      <mesh rotation-x={Math.PI / 2}>
        <torusGeometry args={[2.9, 0.012, 8, 128]} />
        <meshBasicMaterial color="#d9b871" transparent opacity={0.4} />
      </mesh>
    </group>
  );
}

function SeedCanvas() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 1.6, 6.5], fov: 45 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.45} />
      <directionalLight position={[4, 6, 3]} intensity={1.6} castShadow />
      <Suspense fallback={null}>
        <Seed />
        <ContactShadows position={[0, -1.8, 0]} opacity={0.45} scale={12} blur={2.6} far={5} />
        <Environment>
          <Lightformer intensity={2} position={[0, 5, 2]} scale={[8, 8, 1]} />
          <Lightformer
            intensity={1.1}
            color="#9fd0a3"
            position={[-5, 1, -2]}
            rotation-y={Math.PI / 2}
            scale={[16, 2, 1]}
          />
        </Environment>
      </Suspense>
    </Canvas>
  );
}

export function WorldScene() {
  const scope = useReveal<HTMLElement>();

  return (
    <section
      ref={scope}
      className="surface-canopy grain relative overflow-hidden py-24 sm:py-32"
      aria-label="What organic means to us"
    >
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative h-[380px] sm:h-[520px]">
          <ClientOnly fallback={<div className="h-full w-full" />}>
            <SeedCanvas />
          </ClientOnly>
        </div>

        <div>
          <p className="eyebrow reveal-up text-gold">The standard</p>
          <h2 className="reveal-up mt-5 text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05] text-bone">
            Everything orbits the soil.
          </h2>
          <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="reveal-up border-t border-bone/15 pt-5">
                <h3 className="font-display text-xl text-bone">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-bone/65">{benefit.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
