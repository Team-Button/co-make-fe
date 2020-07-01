import React from "react";
import { Switch, Route } from "react-router-dom";
import {
  Login,
  Register,
  Dashboard,
  SinglePost,
  EditPost,
  AddPost,
  MyPosts,
} from "./pages";
import { PrivateRoute } from "./utils";

import "./styling/css/styles.min.css";
function App() {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/login"]} component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/report-issue" component={AddPost} />
        <PrivateRoute path="/edit/:id" component={EditPost} />
        <PrivateRoute path="/my-post" component={MyPosts} />
        <PrivateRoute path="/posts/:id" component={SinglePost} />
      </Switch>
    </>
  );
}

export default App;
