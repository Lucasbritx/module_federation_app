import React, { useEffect, useState } from "react";
import VueWrapper from "./VueWrapper.jsx";
const RemoteButton = React.lazy(() => import("provider/Button"));
import store from "./shared/sharedStore.js";
import "./index.css";

const loadVueComponent = async () => {
  const module = await import("vueApp/Button");
  return module.default;
};

function App() {
  const [VueButton, setVueButton] = useState(null);

  const [count, setCount] = useState(store.getState().count);

  useEffect(() => {
    const unsubscribe = store.subscribe((newState) => {
      setCount(newState.count);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadVueComponent().then(setVueButton);
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
    <div>
      <div className="consumer-container">
        <span>Hello from Consumer Application</span>
        <p>Shared Count: {count}</p>
        <div className="buttons-container">
          <button onClick={handleReset}>Reset count</button>
          <button onClick={handleIncrement}>
            Increment count inside Consumer
          </button>
          <button onClick={handleDecrement}>
            Decrement count inside Consumer
          </button>
        </div>
      </div>
      <RemoteButton onClick={() => alert("Federated button clicked!")}>
        Federated Button
      </RemoteButton>
      {VueButton ? (
        <VueWrapper
          component={VueButton}
          props={{ label: "Click here to decrement" }}
        />
      ) : (
        <p>Carregando botão Vue...</p>
      )}
    </div>
  );
}

export default App;
