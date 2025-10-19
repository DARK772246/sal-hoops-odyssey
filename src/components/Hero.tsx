import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, Environment } from '@react-three/drei';
import { Basketball3D } from './Basketball3D';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { useNavigationStore } from '@/store/useNavigationStore';

export const Hero = () => {
  const setCurrentSection = useNavigationStore((state) => state.setCurrentSection);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B35" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FFD700" />
          <Environment preset="sunset" />
          <Basketball3D position={[2, 0, 0]} scale={1.5} />
        </Canvas>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="mb-6 text-6xl md:text-8xl font-black tracking-tight">
            <span className="text-foreground">SALMAN</span>
            <br />
            <span className="text-primary animate-glow-pulse">KHAN</span>
          </h1>
          
          <p className="mb-8 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Step into my <span className="text-primary font-bold">3D Basketball Journey</span>
            <br />
            Explore tournaments, skills, and achievements
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground shadow-orange transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById('trophies')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Trophies
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-primary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Connect With Me
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <p className="text-muted-foreground text-sm">Scroll to explore</p>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-primary rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};
