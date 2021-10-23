import { onAuthStateChanged } from "@firebase/auth";
import Button from "../../atoms/Button";
import React from "react";
import { useState } from "react";
import { auth } from "../../../firebase/config";
import { logout } from "../../../utils/Auth";

const Footer = () => {
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
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
      footer section here :)
      {getUserPanel()}
    </div>
  );
};

export default Footer;
