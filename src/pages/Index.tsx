import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { TrophyRoom } from '@/components/TrophyRoom';
import { SocialLinks } from '@/components/SocialLinks';
import { PlaceholderSection } from '@/components/PlaceholderSection';
import { Trophy, Flame, Award } from 'lucide-react';

const Index = () => {
  return (
    <main className="relative">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>

      <PlaceholderSection
        id="tournaments"
        title="THE PATH TO VICTORY"
        subtitle="An interactive 3D timeline of tournament achievements"
        icon={Trophy}
      />

      <PlaceholderSection
        id="skills"
        title="MASTER THE GAME"
        subtitle="Explore my basketball skills in a virtual 3D court"
        icon={Flame}
      />

      <div id="trophies">
        <TrophyRoom />
      </div>

      <PlaceholderSection
        id="certificates"
        title="GALLERY OF RECOGNITION"
        subtitle="Certificates and achievements displayed in 3D"
        icon={Award}
      />

      <SocialLinks />
    </main>
  );
};

export default Index;
