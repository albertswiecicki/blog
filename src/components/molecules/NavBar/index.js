import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import { routes } from "../../../routing/routes";
import { useHistory } from "react-router-dom";

// const useStyles = styled((theme) => ({
//   links: {
//     flexGrow: 1,
//     textAlign: "center",
//   },
// }));

export default function NavBar() {
  //   const classes = useStyles();
  let history = useHistory();
  return (
    <AppBar position="sticky">
      <Toolbar>
        {/* <IconButton edge="start" aria-label="menu">
          <MenuIcon />
        </IconButton> */}

        {/* <Typography className={classes.links}> */}
        <Typography sx={{ flexGrow: 1, textAlign: "center" }}>
          <IconButton
            color="inherit"
            onClick={() => history.push(routes.blogPage)}
          >
            Blog
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => history.push(routes.homePage)}
          >
            Home
          </IconButton>
          <IconButton
            color="inherit"
            onClick={() => history.push(routes.addPostPage)}
          >
            Add Post
          </IconButton>
        </Typography>

        <IconButton edge="end">
          <FacebookIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
