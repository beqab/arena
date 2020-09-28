import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Home from "../../pages/home/Home";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (!isAuth) {
    window.location.href = "/";
    return;
  }

  return <Route {...rest} component={Component} />;
};

export default PrivateRoute;
