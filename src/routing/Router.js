import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import RegisterPage from "../views/RegisterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route path="/register" component={RegisterPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
