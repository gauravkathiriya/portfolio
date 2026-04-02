"use client";

import { Text, TrackballControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { memo, useMemo, useRef } from "react";
import * as THREE from "three";
import { skillOrbitLabels } from "@/data/profile";

function OrbitLabels({ labels }: { labels: readonly string[] }) {
  const group = useRef<THREE.Group>(null);
  const radius = 1.85;

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
  });

  const positions = useMemo(() => {
    const n = labels.length || 1;
    return labels.map((_, i) => {
      const a = (i / n) * Math.PI * 2;
      return new THREE.Vector3(
        Math.cos(a) * radius,
        Math.sin(a * 1.3) * 0.35,
        Math.sin(a) * radius,
      );
    });
  }, [labels, radius]);

  return (
    <group ref={group}>
      {labels.map((label, i) => (
        <Text
          key={label}
          position={positions[i]}
          fontSize={0.18}
          color="#e2e8f0"
          outlineWidth={0.02}
          outlineColor="#020617"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

export const TechSphere = memo(function TechSphere() {
  return (
    <div className="h-[280px] w-full md:h-[320px]">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 50 }}
        dpr={[1, 1.75]}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 4, 3]} intensity={1} />
        <mesh>
          <sphereGeometry args={[1.05, 48, 48]} />
          <meshStandardMaterial
            color="#0f172a"
            wireframe
            emissive="#22d3ee"
            emissiveIntensity={0.25}
            transparent
            opacity={0.5}
          />
        </mesh>
        <OrbitLabels labels={skillOrbitLabels} />
        <TrackballControls rotateSpeed={1.2} noZoom noPan />
      </Canvas>
    </div>
  );
});
