import React, { useEffect } from "react";
import Button from "./components/Button.jsx";
import store from "consumer/sharedStore.js";

function App() {
  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      setCount(newState.count);
    });
    return () => unsubscribe();
  }, []);

  const handleIncrement = () => {
    store.getState().increment();
  };

  const handleDecrement = () => {
    store.getState().decrement();
  };

  const handleReset = () => {
    store.getState().reset();
  };
  return (
    <>
      <span>Provider Application</span>
      <Button>Provider increment</Button>
    </>
  );
}

export default App;