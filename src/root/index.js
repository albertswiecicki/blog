import React from "react";
import Router from "../routing/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { loadUser } from "../redux/reducers/authReducer";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
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
  }, [dispatch]);

  return (
    <ThemeProvider theme={mainTheme}>
      <Router />
    </ThemeProvider>
  );
};

export default Root;
