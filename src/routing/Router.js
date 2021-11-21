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
import DoesntExistPage from "../views/DoesntExistPage";
import { Container } from "@mui/material";
import { useTheme } from "@emotion/react";

const Router = () => {
  const theme = useTheme();
  return (
    <BrowserRouter>
      <NavBar />
      {/* <Container maxWidth="xl" sx={{ backgroundColor: "primary.light" }}> */}
      <Container maxWidth="xl">
        <Switch>
          <Route exact path={routes.homePage} component={HomePage} />
          <Route path={routes.registerPage} component={RegisterPage} />
          <Route path={routes.loginPage} component={LoginPage} />
          <Route path={routes.blogPage} component={BlogPage} />
          <Route path={routes.aboutMePage} component={AboutMePage} />
          <Route path={routes.addPostPage} component={AddPostPage} />
          <Route path={routes.booksPage} component={BookPage} />
          <Route path={routes.postPage + "/:postId"} component={PostPage} />
          <Route path={routes.doesntExistPage} component={DoesntExistPage} />
          <Route path={"/"} component={DoesntExistPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default Router;
