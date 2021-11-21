import React from "react";
import Router from "../routing/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple, grey, orange } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { loadUser } from "../redux/actions/authActions";
import { loadPosts } from "../redux/actions/blogActions";
import CssBaseline from "@mui/material/CssBaseline";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: grey[800],
    },
    secondary: {
      main: orange[500],
    },
    background: {
      default: "#FFF",
    },
  },
  typography: {
    // fontFamily: "Quicksand",
  },
});

const Root = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(loadUser(currentUser));
    });
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      {/* <h1>Process env: {process.env.NODE_ENV}</h1>
      <h1>env test : {process.env.REACT_APP_TEST_V}</h1> */}
      <Router>
        <h1>Hello world</h1>
      </Router>
    </ThemeProvider>
  );
};

export default Root;
