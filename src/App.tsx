import type { Component } from "solid-js";
import P2PCF from "p2pcf";

const clientId = "MyUsername";
const roomId = "MyRoom";

const p2pcf = new P2PCF(clientId, roomId);

const App: Component = () => {
  return <div>yo!</div>;
};

export default App;
