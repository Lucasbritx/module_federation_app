import React, { useState, useEffect } from "react";
import store from "consumer/sharedStore";

const Button = () => {
  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      setCount(newState.count);
    });
    return () => unsubscribe();
  }, []);

  const handleClick = () => {
    store.getState().increment();
  };

  return (
    <button onClick={handleClick}>
      Provider Increment {count}
    </button>
  );
};

export default Button;
