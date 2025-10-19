import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export const Basketball3D = ({ position = [0, 0, 0], scale = 1 }: { position?: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1 * scale, 32, 32]} position={position}>
      <meshStandardMaterial 
        color="#FF6B35" 
        roughness={0.3}
        metalness={0.1}
        emissive="#FF6B35"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};
