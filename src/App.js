import React from "react";
import logo from "./logo.svg";
import "./style/index.scss";
import {connect} from "react-redux";
import {Route} from "react-router-dom";
import Home from "./components/pages/Home";

function App() {
    return (
        <div className="App">
            <Route path="/" exact component={Home} />
        </div>
    );
}

const mapStateFromProps = (state) => ({
    state: state,
});

export default connect(mapStateFromProps, null)(App);
