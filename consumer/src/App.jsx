import React, { useEffect, useState } from "react";
import VueWrapper from "./VueWrapper.jsx";
const RemoteButton = React.lazy(() => import("provider/Button"));
import sharedStore from "./shared/sharedStore.js";
import "./index.css";

const loadVueComponent = async () => {
  const module = await import("vueApp/Button");
  return module.default;
};

function App() {
  const [VueButton, setVueButton] = useState(null);

  console.log("Shared Store:", sharedStore);

  const [count, setCount] = useState(sharedStore.getState().count);

  useEffect(() => {
    const unsubscribe = sharedStore.subscribe((newState) => {
      setCount(newState.count);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    loadVueComponent().then(setVueButton);
  }, []);
  return (
    <div>
      <div className="consumer-container">
        <span>Hello from Consumer Application</span>
        <p>Shared Count: {count}</p>
        <div className="buttons-container">
          <button onClick={() => sharedStore.reset()}>Reset count</button>
          <button onClick={() => sharedStore.increment()}>
            Increment count inside Consumer
          </button>
          <button onClick={() => sharedStore.decrement()}>
            Decrement count inside Consumer
          </button>
        </div>
      </div>
      {/* TODO add remote button to clear store */}
      <RemoteButton onClick={() => alert("Federated button clicked!")}>
        Federated Button
      </RemoteButton>
      {/* TODO add vueButton to decrement counter  */}
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
