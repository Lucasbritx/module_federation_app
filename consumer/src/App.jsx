import React, { Suspense } from "react";
import Button from "../../vue-provider/src/components/Button.vue";
const RemoteButton = React.lazy(() => import("provider/Button"));

function App() {
  return (
    <div>
      <span>Hello from Consumer Application</span>
      <RemoteButton onClick={() => alert("Federated button clicked!")}>
        Federated Button
      </RemoteButton>
      <Button onClick={() => alert("Vue button clicked!")}>Vue Button</Button>
    </div>
  );
}

export default App;
