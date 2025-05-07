import create from 'zustand';

interface ScrollStore {
  scrollPosition: number;
  setScrollPosition: (position: number) => void;
}

export const useScrollStore = create<ScrollStore>((set) => ({
  scrollPosition: 0,
  setScrollPosition: (position) => set({ scrollPosition: position }),
}));