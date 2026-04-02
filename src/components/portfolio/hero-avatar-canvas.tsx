"use client";

import { Sparkles, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, memo } from "react";
import * as THREE from "three";

function AvatarGroup() {
  const group = useRef<THREE.Group>(null);
  const core = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const g = group.current;
    const c = core.current;
    if (!g || !c) return;
    const t = state.clock.elapsedTime;
    g.position.y = Math.sin(t * 0.9) * 0.12;
    const targetY = state.pointer.x * 0.45;
    const targetX = -state.pointer.y * 0.28;
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.06);
    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.06);
    c.rotation.y = t * 0.35;
    c.rotation.x = Math.sin(t * 0.4) * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={1.6} rotationIntensity={0.35} floatIntensity={0.55}>
        <mesh ref={core} castShadow>
          <icosahedronGeometry args={[1.15, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#7c3aed"
            emissiveIntensity={0.45}
            metalness={0.65}
            roughness={0.22}
          />
        </mesh>
      </Float>
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
        <torusGeometry args={[1.55, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#22d3ee"
          emissiveIntensity={0.35}
          transparent
          opacity={0.85}
        />
      </mesh>
      <Sparkles
        count={48}
        scale={5.5}
        size={2.5}
        speed={0.35}
        opacity={0.55}
        color="#67e8f9"
      />
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <directionalLight position={[4, 6, 4]} intensity={1.35} castShadow />
      <pointLight position={[-4, -2, 4]} intensity={22} color="#a855f7" />
      <pointLight position={[3, 2, -3]} intensity={18} color="#22d3ee" />
      <AvatarGroup />
    </>
  );
}

export const HeroAvatarCanvas = memo(function HeroAvatarCanvas() {
  return (
    <div className="relative h-[min(56vh,420px)] w-full max-w-lg md:h-[min(62vh,480px)]">
      <Canvas
        camera={{ position: [0, 0, 4.2], fov: 45 }}
        dpr={[1, 2]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
        }}
        aria-label="Interactive 3D hero visual"
        role="img"
      >
        <Scene />
      </Canvas>
    </div>
  );
});
