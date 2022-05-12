import React from "react";
import { render } from "react-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import Layout from "./Layout";
import theme from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  );
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
