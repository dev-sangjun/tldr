import React from "react";
import "./css/App.css";
import { GlobalStyle } from "./global";
import { Navbar, Modal } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Modal />
      <GlobalStyle />
    </div>
  );
}

export default App;
