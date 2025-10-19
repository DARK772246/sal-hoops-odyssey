import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Cylinder, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface Trophy3DProps {
  position: [number, number, number];
  title: string;
  year: string;
  onClick: () => void;
}

export const Trophy3D = ({ position, title, year, onClick }: Trophy3DProps) => {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += hovered ? 0.02 : 0.005;
      const targetY = position[1] + (hovered ? 0.3 : 0) + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.1);
    }
  });

  return (
    <group 
      ref={groupRef} 
      position={position}
      onClick={onClick}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      scale={hovered ? 1.2 : 1}
    >
      {/* Trophy cup */}
      <Cylinder args={[0.3, 0.2, 0.6, 32]} position={[0, 0.6, 0]}>
        <meshStandardMaterial 
          color="#FFD700" 
          metalness={0.9}
          roughness={0.1}
          emissive="#FFD700"
          emissiveIntensity={hovered ? 0.5 : 0.2}
        />
      </Cylinder>
      
      {/* Trophy handles */}
      <Sphere args={[0.1, 16, 16]} position={[-0.35, 0.6, 0]}>
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </Sphere>
      <Sphere args={[0.1, 16, 16]} position={[0.35, 0.6, 0]}>
        <meshStandardMaterial color="#FFD700" metalness={0.9} roughness={0.1} />
      </Sphere>
      
      {/* Trophy base */}
      <Cylinder args={[0.4, 0.4, 0.2, 32]} position={[0, 0.1, 0]}>
        <meshStandardMaterial color="#B8860B" metalness={0.8} roughness={0.2} />
      </Cylinder>
      
      {/* Trophy text */}
      <Text
        position={[0, -0.3, 0]}
        fontSize={0.15}
        color="#FFD700"
        anchorX="center"
        anchorY="middle"
      >
        {year}
      </Text>
    </group>
  );
};
