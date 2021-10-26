import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import BlogPage from "../views/BlogPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import { routes } from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.home} />
        <Route path={routes.registerPage} component={RegisterPage} />
        <Route path={routes.loginPage} component={LoginPage} />
        <Route path={routes.blogPage} component={BlogPage} />
        {/* <Route path={routes.postPage + "/:postId"} component={Post} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
