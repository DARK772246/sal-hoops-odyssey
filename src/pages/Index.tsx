import { Hero } from '@/components/Hero';
import { Navigation } from '@/components/Navigation';
import { TrophyRoom } from '@/components/TrophyRoom';
import { SocialLinks } from '@/components/SocialLinks';
import { ContentSection } from '@/components/ContentSection';
import { CertificateGallery } from '@/components/CertificateGallery';

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

  const master_the_game_content = `The game isn’t just played on the court —
it’s played in the mind.
Every move begins with vision,
every victory begins with control.

To master the game is to master yourself.
Patience in pressure.
Focus in chaos.
Confidence when the world doubts.

The greats don’t chase perfection —
they create it, one play at a time.
Every dribble, every shot, every setback —
a lesson written in motion.

Because mastery isn’t about knowing every rule,
it’s about rewriting them.

Don’t just play the game.
Own it. Live it. Master it.
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

      <ContentSection
        id="skills"
        title="MASTER THE GAME"
        content={master_the_game_content}
      />

      <div id="trophies">
        <TrophyRoom />
      </div>

      <CertificateGallery />

      <SocialLinks />
    </main>
  );
};

export default Index;
