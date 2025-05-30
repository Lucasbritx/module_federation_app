import React, { useEffect, useState } from "react";
import VueWrapper from "./VueWrapper.jsx";
const RemoteButton = React.lazy(() => import("provider/Button"));

const loadVueComponent = async () => {
  const module = await import("vueApp/Button");
  return module.default;
};

function App() {
  const [VueButton, setVueButton] = useState(null);

  useEffect(() => {
    loadVueComponent().then(setVueButton);
  }, []);
  return (
    <div>
      <span>Hello from Consumer Application</span>
      <RemoteButton onClick={() => alert("Federated button clicked!")}>
        Federated Button
      </RemoteButton>
      {VueButton ? (
        <VueWrapper component={VueButton} props={{ text: "Clique aqui" }} />
      ) : (
        <p>Carregando botão Vue...</p>
      )}
    </div>
  );
}

export default App;
