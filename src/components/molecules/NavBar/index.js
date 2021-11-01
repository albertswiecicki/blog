import React from "react";
import { NavLink } from "react-router-dom";
import { routes } from "../../../routing/routes";
import { useSelector } from "react-redux";
import Button from "../../atoms/Button";
import { logout } from "../../../utils/Auth";
import "./index.css";

// ToDo
// Do we want Buttons / Navlinks / (combined?)
// or smth different form material ui

// ToDo
// add links to social media

const NavBar = () => {
  const user = useSelector(({ auth }) => auth.user);
  const getUserPanel = () => {
    if (user && Object.keys(user).length !== 0) {
      //logged in
      return (
        <>
          <li className="topListItem">Good to see you: {user.login}</li>
          <li className="topListItem">
            <Button onClickFn={logout}>Logout</Button>
          </li>
        </>
      );
    }
    return (
      <>
        <li className="topListItem">
          <NavLink to={routes.loginPage}>
            <Button>Login </Button>
          </NavLink>
        </li>
        <li className="topListItem">
          <NavLink to={routes.registerPage}> Register </NavLink>
        </li>
      </>
    );
  };

  return (
    <div className="top">
      <ul className="topList">
        <li className="topListItem">
          <NavLink activeClassName="activeLink" to={routes.homePage}>
            <Button>Home Page</Button>
          </NavLink>
        </li>
        <li className="topListItem">
          <NavLink activeClassName="activeLink" to={routes.blogPage}>
            <Button>Blog</Button>
          </NavLink>
        </li>
        <li className="topListItem">
          <NavLink activeClassName="activeLink" to={routes.booksPage}>
            Books
          </NavLink>
        </li>
        <li className="topListItem">
          <NavLink activeClassName="activeLink" to={routes.aboutMePage}>
            About me
          </NavLink>
        </li>
        {getUserPanel()}
      </ul>
    </div>
  );
};

export default NavBar;
