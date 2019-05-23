import React from "react";
import { Route, Switch } from "react-router-dom";
import SignIn from "./containers/auth/SignIn";
import AppliedRoute from "./components/AppliedRoute/AppliedRoute";
import NotFound from "./containers/PageNotFound/NotFound";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={SignIn} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;

