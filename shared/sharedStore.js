class SharedStore {
  constructor() {
    this.state = {
      count: 0,
    };
    this.listeners = new Set();
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notifyListeners();
  }

  subscribe(listener) {
    this.listeners.add(listener);

    return () => {
      this.listeners.delete(listener);
    };
  }

  notifyListeners() {
    this.listeners.forEach((listener) => listener(this.state));
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  reset() {
    this.setState({ count: 0 });
  }
}

let storeInstance = null;

export const getSharedStore = () => {
  if (!storeInstance) {
    storeInstance = new SharedStore();
  }
  return storeInstance;
};

export default getSharedStore();
