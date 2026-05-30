'use client';

import React, { useRef, useState, useEffect, startTransition } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

interface ShapeData {
  position: [number, number, number];
  scale: number;
  speed: number;
  distort: number;
}

function FloatingElements() {
  const group = useRef<THREE.Group>(null);
  const [shapes, setShapes] = useState<ShapeData[]>([]);

  // Animate the group slightly based on mouse or scroll
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = Math.sin(t / 4) / 8;
    group.current.rotation.x = Math.cos(t / 4) / 8;
    group.current.position.y = Math.sin(t / 2) / 10;
  });

  useEffect(() => {
    // Generate shapes once on client mount to avoid SSR mismatch and satisfy purity rules
    const generated = Array.from({ length: 15 }, () => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5 - 5,
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 2 + 1,
      distort: Math.random() * 0.4 + 0.2,
    }));
    
    startTransition(() => {
      setShapes(generated);
    });
  }, []);

  if (shapes.length === 0) return null;

  return (
    <group ref={group}>
      {shapes.map((props, i) => (
        <Float
          key={i}
          speed={props.speed}
          rotationIntensity={2}
          floatIntensity={2}
          position={props.position}
        >
          <Sphere args={[1, 32, 32]} scale={props.scale}>
            <MeshDistortMaterial
              color="#406093"
              attach="material"
              distort={props.distort}
              speed={2}
              roughness={0.2}
              metalness={0.8}
              opacity={0.15}
              transparent
            />
          </Sphere>
        </Float>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
        <FloatingElements />
      </Canvas>
    </div>
  );
}
