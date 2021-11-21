import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { routes } from "../../routing/routes";

const DoesntExistPage = () => {
  return (
    <>
      <h1>Page doesn't exist</h1>
      <Button>
        <Link to={routes.homePage}>Take me home</Link>
      </Button>
    </>
  );
};

export default DoesntExistPage;
