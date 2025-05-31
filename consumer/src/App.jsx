import React, { useEffect, useState } from "react";
import VueWrapper from "./VueWrapper.jsx";
const RemoteButton = React.lazy(() => import("provider/Button"));
import { sharedStore } from "../../shared/sharedStore.js";
import "./index.css";

const loadVueComponent = async () => {
  const module = await import("vueApp/Button");
  return module.default;
};

function App() {
  const [VueButton, setVueButton] = useState(null);
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
        <button onClick={() => sharedStore.getState().increment()}>
          Increment count inside Consumer
        </button>
      </div>
      {/* TODO add remote button to clear store */}
      <RemoteButton onClick={() => alert("Federated button clicked!")}>
        Federated Button
      </RemoteButton>
      {/* TODO add vueButton to decrement counter  */}
      {VueButton ? (
        <VueWrapper component={VueButton} props={{ label: "Click here to decrement" }} />
      ) : (
        <p>Carregando botão Vue...</p>
      )}
    </div>
  );
}

export default App;
