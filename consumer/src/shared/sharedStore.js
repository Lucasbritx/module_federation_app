import { createStore } from "zustand/vanilla";

const sharedStore = createStore((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setCount: (newCount) => set({ count: newCount }),
}));

// Custom subscription mechanism without recursion
const originalSubscribe = sharedStore.subscribe; // Save the original subscribe method
sharedStore.subscribe = (listener) => {
  return originalSubscribe((newState) => {
    listener(newState); // Call the listener with the new state
  });
};

export default sharedStore;
