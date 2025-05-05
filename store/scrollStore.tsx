import { create } from 'zustand';

export const useScrollStore = create((set) => ({
  scrollPosition: 0,
  setScrollPosition: (position) => set({ scrollPosition: position }),
}));


