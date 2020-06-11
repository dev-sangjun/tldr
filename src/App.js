import React from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { GlobalStyle } from "./global";
import { Home } from "./routes";
import { Navbar, Modal } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Modal />
        <GlobalStyle />
      </Router>
    </div>
  );
}

export default App;
