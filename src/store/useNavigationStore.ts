import { create } from 'zustand';

type Section = 'hero' | 'tournaments' | 'skills' | 'trophies' | 'certificates' | 'contact';

interface NavigationState {
  currentSection: Section;
  setCurrentSection: (section: Section) => void;
  isTransitioning: boolean;
  setIsTransitioning: (transitioning: boolean) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  currentSection: 'hero',
  setCurrentSection: (section) => set({ currentSection: section }),
  isTransitioning: false,
  setIsTransitioning: (transitioning) => set({ isTransitioning: transitioning }),
}));
