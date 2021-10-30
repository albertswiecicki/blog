import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/molecules/NavBar";
import BlogPage from "../views/BlogPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import { routes } from "./routes";
import AboutMePage from "../views/AboutMePage";
import BookPage from "../views/BooksPage";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={routes.homePage} />
        <Route path={routes.registerPage} component={RegisterPage} />
        <Route path={routes.loginPage} component={LoginPage} />
        <Route path={routes.blogPage} component={BlogPage} />
        <Route path={routes.aboutMePage} component={AboutMePage} />
        <Route path={routes.booksPage} component={BookPage} />
        {/* <Route path={routes.postPage + "/:postId"} component={Post} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
