import React from "react";
import "./css/App.css";
import { GlobalStyle } from "./global";
import { Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GlobalStyle />
    </div>
  );
}

export default App;
