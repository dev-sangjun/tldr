import React, { useEffect } from "react";
import "./css/App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./reducers";
import { fetch } from "./api";
import { GlobalStyle } from "./global";
import { Home } from "./routes";
import { Navbar, Modal } from "./components";

function App() {
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch();
        dispatch(setUser(res.data));
      } catch (e) {
        console.log(e);
      }
    };
    if (!user) init();
  }, [dispatch]);
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
