import React, { Suspense } from "react";
const RemoteButton = React.lazy(() => import("provider/Button"));

function App() {
  return (
    <div>
      <span>Hello from Consumer Application</span>
      <RemoteButton onClick={() => alert("Federated button clicked!")}>
        Federated Button
      </RemoteButton>
    </div>
  );
}

export default App;
