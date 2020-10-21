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
  Home,
} from "./pages";
import { PrivateRoute } from "./utils";

import "./styling/scss/styles.scss";
function App() {
  return (
    <>
      <Switch>
        <Route exact path={"/"} component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route path={"/login"} component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/report-issue" component={AddPost} />
        <Route path="/edit/:id" component={EditPost} />
        <Route path="/my-post" component={MyPosts} />
        <Route path="/posts/:id" component={SinglePost} />
        {/* <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/report-issue" component={AddPost} />
        <PrivateRoute path="/edit/:id" component={EditPost} />
        <PrivateRoute path="/my-post" component={MyPosts} />
        <PrivateRoute path="/posts/:id" component={SinglePost} /> */}
      </Switch>
    </>
  );
}

export default App;
