import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "../components/molecules/NavBar";
import BlogPage from "../views/BlogPage";
import LoginPage from "../views/LoginPage";
import RegisterPage from "../views/RegisterPage";
import { routes } from "./routes";
import AboutMePage from "../views/AboutMePage";
import BookPage from "../views/BooksPage";
import HomePage from "../views/HomePage";
import PostPage from "../views/PostPage";
import AddPostPage from "../views/AddPostPage";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.registerPage} component={RegisterPage} />
        <Route path={routes.loginPage} component={LoginPage} />
        <Route path={routes.blogPage} component={BlogPage} />
        <Route path={routes.aboutMePage} component={AboutMePage} />
        <Route path={routes.addPostPage} component={AddPostPage} />
        <Route path={routes.booksPage} component={BookPage} />
        <Route path={routes.postPage + "/:postId"} component={PostPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
