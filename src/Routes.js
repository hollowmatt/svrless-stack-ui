import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import NotFound from "./containers/NotFound";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      {/* This next route needs to be the last one - catch all */}
      <Route>
          <NotFound />
      </Route>
    </Switch>
  );
}