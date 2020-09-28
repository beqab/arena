import React from "react";
import logo from "./logo.svg";
import "./style/index.scss";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Home from "./components/pages/home/Home";
import axios from "axios";
import withdraw from "./components/pages/withdraw";
import changePassword from "./components/pages/changePassword";
import { setCurrentUser } from "./redux/auth/authActions";
import PrivateRoute from "./components/utils/routes/privetaRoute";
import { setAuthToken } from "./components/api/helpers";

import { useDispatch, useSelector } from "react-redux";

axios.defaults.baseURL = "https://masterswallet.com/api/";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (localStorage.getItem("token")) {
      let user = null;

      const token = localStorage.getItem("token");

      console.log(user, token);
      // debugger;
      setAuthToken(token);

      (function () {
        if (token) {
          axios.defaults.headers.common["Authorization"] = `Bearer   ${token}`;
        } else {
          axios.defaults.headers.common["Authorization"] = null;
        }
      })();
      dispatch(setCurrentUser({ token: token, user }));
    }
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={Home} />
        <PrivateRoute path="/ChangePassword" exact component={changePassword} />
        <PrivateRoute path="/withdraw" exact component={withdraw} />
      </Switch>
    </div>
  );
}

const mapStateFromProps = (state) => ({
  state: state,
});

export default connect(mapStateFromProps, null)(App);
