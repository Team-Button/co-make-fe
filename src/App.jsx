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
  Landing,
} from "./pages";
import { PrivateRoute } from "./utils";

import "./styling/scss/styles.scss";
function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route path={"/login"} component={Login} />
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
