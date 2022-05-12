import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import proxyPath from "./Basepath";

export default function Router() {
  return (
    <BrowserRouter basename={proxyPath}>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
