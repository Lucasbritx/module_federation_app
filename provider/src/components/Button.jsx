import React from "react";
//import { sharedStore } from "consumer/sharedStore";

const Button = () => {
  const handleClick = () => {
    //sharedStore.increment();
    //console.log("Count:", sharedStore.getState().count);
  };
  return <button>Provider Increment</button>;
};

export default Button;
