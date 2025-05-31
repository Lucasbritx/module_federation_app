import { createStore } from "zustand/vanilla";

export const sharedStore = createStore((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
