import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register, Dashboard } from './pages';

import './styling/css/styles.css';
function App() {
  return (
    <>
    <Switch>
      <Route exact path={["/","/login"]} component={Login}/>
      <Route path="/register" component={Register} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
    </>
  );
}

export default App;
