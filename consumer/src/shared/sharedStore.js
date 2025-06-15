import { createStore } from "zustand/vanilla";

let storeInstance = null;

const createSharedStore = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
  setCount: (newCount) => set({ count: newCount }),
});

if (!storeInstance) {
  storeInstance = createStore(createSharedStore);
  
  const originalSubscribe = storeInstance.subscribe;
  storeInstance.subscribe = (listener) => {
    return originalSubscribe((newState) => {
      listener(newState);
    });
  };
}

if (typeof window !== 'undefined') {
  window.__SHARED_STORE__ = window.__SHARED_STORE__ || storeInstance;
  storeInstance = window.__SHARED_STORE__;
}

export default storeInstance;
