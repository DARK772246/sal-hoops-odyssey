import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Trophy3D } from './Trophy3D';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const trophies = [
  { id: 1, title: 'Tournament Champion', year: '2023', description: 'First place in the Regional Basketball Championship', position: [-3, 0, 0] as [number, number, number] },
  { id: 2, title: 'MVP Award', year: '2022', description: 'Most Valuable Player of the season', position: [0, 0, 0] as [number, number, number] },
  { id: 3, title: 'Skills Challenge', year: '2021', description: 'Winner of the Annual Skills Challenge', position: [3, 0, 0] as [number, number, number] },
];

export const TrophyRoom = () => {
  const [selectedTrophy, setSelectedTrophy] = useState<typeof trophies[0] | null>(null);

  return (
    <section className="relative h-screen w-full bg-background">
      <Canvas className="h-full w-full">
        <PerspectiveCamera makeDefault position={[0, 2, 8]} />
        <OrbitControls 
          enableZoom={true}
          enablePan={false}
          minDistance={5}
          maxDistance={15}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
        
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FFD700" />
        <pointLight position={[-10, 5, -10]} intensity={0.5} color="#FF6B35" />
        <spotLight 
          position={[0, 10, 0]} 
          angle={0.3} 
          penumbra={1} 
          intensity={2}
          castShadow
        />
        
        <Environment preset="warehouse" />
        
        {trophies.map((trophy) => (
          <Trophy3D
            key={trophy.id}
            position={trophy.position}
            title={trophy.title}
            year={trophy.year}
            onClick={() => setSelectedTrophy(trophy)}
          />
        ))}
        
        {/* Floor */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]} receiveShadow>
          <planeGeometry args={[20, 20]} />
          <meshStandardMaterial color="#2A2A3E" metalness={0.4} roughness={0.8} />
        </mesh>
      </Canvas>
      
      <AnimatePresence>
        {selectedTrophy && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-card border border-primary/20 rounded-xl p-8 max-w-md w-full mx-4 shadow-elegant"
          >
            <button
              onClick={() => setSelectedTrophy(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              ✕
            </button>
            <h3 className="text-2xl font-bold text-primary mb-2">{selectedTrophy.title}</h3>
            <p className="text-secondary text-lg mb-3">{selectedTrophy.year}</p>
            <p className="text-foreground">{selectedTrophy.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="absolute top-8 left-1/2 -translate-x-1/2 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-primary mb-4">Hall of Champions</h2>
        <p className="text-muted-foreground text-lg">Click and drag to explore • Click trophies to learn more</p>
      </div>
    </section>
  );
};
