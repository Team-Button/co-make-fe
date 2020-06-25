import React from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Register, Dashboard, SinglePost, EditPost } from "./pages";
import { PrivateRoute } from "./utils";

import "./styling/css/styles.css";
function App() {
  return (
    <>
      <SinglePost />
      {/* <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/single" component={SinglePost} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch> */}
    </>
  );
}

export default App;
