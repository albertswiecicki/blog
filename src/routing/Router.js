import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
