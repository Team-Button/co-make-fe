import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login, Register } from './pages';

import './styling/css/styles.css';
function App() {
  return (
    <>
    <Switch>
      <Route exact path={["/","/login"]} component={Login}/>
      <Route path="/register" component={Register} />
    </Switch>
    </>
  );
}

export default App;
