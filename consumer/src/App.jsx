import React, { useEffect, useState } from "react";
import VueWrapper from "./VueWrapper.jsx";
const RemoteButton = React.lazy(() => import("provider/Button"));
import { getSharedStore } from "../../shared/sharedStore.js";
import "./index.css";

const loadVueComponent = async () => {
  const module = await import("vueApp/Button");
  return module.default;
};

function App() {
  const [VueButton, setVueButton] = useState(null);

  const store = getSharedStore();

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
  return (
    <div>
      <div className="consumer-container">
        <span>Hello from Consumer Application</span>
        <p>Shared Count: {count}</p>
        <div className="buttons-container">
          <button onClick={() => store.reset()}>Reset count</button>
          <button onClick={() => store.increment()}>
            Increment count inside Consumer
          </button>
          <button onClick={() => store.decrement()}>
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
