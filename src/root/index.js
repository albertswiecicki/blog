import React from "react";
import Router from "../routing/Router";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import NavBar from "../components/molecules/NavBar";

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
  return (
    <ThemeProvider theme={mainTheme}>
      <NavBar />
      <h1>Hello world</h1>

      <Router />
    </ThemeProvider>
  );
};

export default Root;
