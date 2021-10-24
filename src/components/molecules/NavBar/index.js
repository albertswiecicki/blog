import { onAuthStateChanged } from "@firebase/auth";
import Button from "../../atoms/Button";
import React from "react";
import { useState } from "react";
import { auth } from "../../../firebase/config";
import { logout } from "../../../utils/Auth";

const NavBar = () => {
  // ToDo
  // The user info and handling should be done by / with / in redux
  // redux should provide all necessery informations to related comonents

  // who is going to store posts?

  const [user, setUser] = useState({});

  // it should be somewhere and call some action to reducer
  onAuthStateChanged(auth, (currentUser) => {
    // here we could just add currentUser.nick = getUserData(collestion).data[nick]
    setUser(currentUser);
  });
  const getUserPanel = () => {
    if (user && Object.keys(user).length !== 0) {
      return (
        <>
          Hey {user.email}
          <Button onClickFn={logout}>Logout</Button>
        </>
      );
    }
    return <Button> To do go to login page</Button>;
  };
  return (
    <div>
      NavBar section here :)
      {getUserPanel()}
    </div>
  );
};

export default NavBar;
