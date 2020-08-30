import React from "react";
import logo from "./logo.svg";
import "./style/index.scss";
import {connect} from "react-redux";
import {Route, Switch} from "react-router-dom";
import Home from "./components/pages/home/Home";
import axios from "axios";
import withdraw from "./components/pages/withdraw";
import ChangePassword from "./components/pages/changePassword";
import {setCurrentUser} from "./redux/auth/authActions";
import PrivateRoute from "./components/utils/routes/privetaRoute";

import {useDispatch, useSelector} from "react-redux";

axios.defaults.baseURL = "https://app.gcar.ge/api/";

function App() {
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (localStorage.getItem("token") && localStorage.getItem("user")) {
            const user = JSON.parse(localStorage.getItem("user"));
            dispatch(setCurrentUser({token: localStorage.getItem("token"), user}));
        }
    }, []);

    return (
        <div className="App">
            <Switch>
                <Route path="/" exact component={Home} />
                <PrivateRoute path="/withdraw" exact component={withdraw} />
                <Route path="/ChangePassword" exact component={ChangePassword} />
            </Switch>
        </div>
    );
}

const mapStateFromProps = (state) => ({
    state: state,
});

export default connect(mapStateFromProps, null)(App);
