import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./Login";

const Router = () => (
  <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route> */}
      </Switch>
  </BrowserRouter>
);

export default Router;
