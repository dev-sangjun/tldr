import React, { useEffect, useState } from "react";
import "./css/App.css";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./reducers";
import { fetch } from "./api";
import { GlobalStyle } from "./global";
import { Home, Public } from "./routes";
import { Navbar, Modal } from "./components";

/*
  TODO:
  1. Public page (DONE)
  3. Error message, Form validation (ON ALL FORMS)
*/
function App() {
  const { user } = useSelector(state => state);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    const init = async () => {
      try {
        const res = await fetch();
        dispatch(setUser(res.data));
        setLoading(false);
      } catch (e) {
        console.log(e);
        setLoading(false);
      }
    };
    if (!user) init();
  }, [dispatch, user]);
  return loading ? null : (
    <div className="App">
      <Navbar />
      {user ? <Home /> : <Public />}
      <Modal />
      <GlobalStyle />
    </div>
  );
}

export default App;
