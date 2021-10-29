import React from "react";
import { logout } from "../../../utils/Auth";
import { auth } from "../../../firebase/config";
import UserPanel from "../../../utils/Auth";

const NavBar = () => {
  return (
    <div>
      NavBar section here :)
      {/* {getUserPanel()} */}
      <UserPanel />
    </div>
  );
};

export default NavBar;
