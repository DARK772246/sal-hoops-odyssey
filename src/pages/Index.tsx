import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { TrophyRoom } from '@/components/TrophyRoom';
import { SocialLinks } from '@/components/SocialLinks';
import { ContentSection } from '@/components/ContentSection';
import { CertificateGallery } from '@/components/CertificateGallery';
import { MasteryGallery } from '@/components/MasteryGallery';

const Index = () => {
  const path_to_victory_content = `Every sunrise begins the same — quiet, ordinary, unpromising.
But champions know: greatness hides in repetition.
It’s in the rhythm of the dribble echoing through an empty court,
in the sweat that falls long before the crowd ever cheers.

The path to victory isn’t paved with luck.
It’s carved through failure, discipline, and unbreakable belief.
Every missed shot becomes a lesson.
Every defeat, a new beginning.
Because true victory isn’t a scoreboard — it’s transformation.

This is where passion meets purpose.
Where pain meets progress.
Where a player becomes more than a name — a legacy.

The path to victory is not walked. It’s fought for. Every. Single. Day.
— Salman Khan`;





  return (
    <main className="relative">
      <Navigation />
      
      <div id="hero">
        <Hero />
      </div>

      <ContentSection
        id="tournaments"
        title="THE PATH TO VICTORY"
        content={path_to_victory_content}
      />

      <MasteryGallery />

      <div id="trophies">
        <TrophyRoom />
      </div>

      <CertificateGallery />

      <SocialLinks />
    </main>
  );
};

export default Index;
