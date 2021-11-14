import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { routes } from "../../../routing/routes";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { logout } from "../../../utils/Auth";

export default function NavBar() {
  const user = useSelector(({ auth }) => auth.user);
  let history = useHistory();

  const getAdminPanel = () => {
    if (user && user.isAdmin === true) {
      return (
        <>
          <Button
            color="inherit"
            onClick={() => history.push(routes.addPostPage)}
          >
            Add Post
          </Button>
        </>
      );
    }
    return <></>;
  };

  const getLoginLogout = () => {
    if (user) {
      return (
        <>
          {user.login}
          <Button color="inherit" onClick={logout} edge="end">
            logout
          </Button>
        </>
      );
    }
    return (
      <>
        <Button
          color="inherit"
          onClick={() => history.push(routes.loginPage)}
          edge="end"
        >
          login
        </Button>
        <Button
          color="inherit"
          onClick={() => history.push(routes.registerPage)}
          edge="end"
        >
          register
        </Button>
      </>
    );
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <a
          href="https://www.facebook.com/albert.swiecicki"
          target="_blank"
          rel="noreferrer"
        >
          <FacebookIcon sx={{ m: 1 }} />
        </a>
        <a
          href="https://www.instagram.com/albert_swiecicki/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon sx={{ m: 1 }} />
        </a>
        <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
          <Button color="inherit" onClick={() => history.push(routes.blogPage)}>
            Blog
          </Button>
          <Button color="inherit" onClick={() => history.push(routes.homePage)}>
            Home
          </Button>
          {getAdminPanel()}
        </Typography>
        {getLoginLogout()}
      </Toolbar>
    </AppBar>
  );
}
