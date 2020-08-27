import React from "react";
import logo from "./logo.svg";
import "./style/index.scss";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import Home from "./components/pages/Home";
import withdraw from "./components/pages/withdraw";

function App() {
    return (
        <div className="App">
            <Route path="/" exact component={Home} />
            <Route path="/withdraw" exact component={withdraw} />
        </div>
    );
}

const mapStateFromProps = (state) => ({
    state: state,
});

export default connect(mapStateFromProps, null)(App);
