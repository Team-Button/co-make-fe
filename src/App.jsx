import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Register, Dashboard } from "./pages";
import { PrivateRoute } from "./utils";

import "./styling/css/styles.css";
function App() {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
}

export default App;
