import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware } from "redux";
<<<<<<< HEAD
import { appReducers } from "./redux/reducers";
=======
import { Reducers } from "./redux/reducers";
>>>>>>> 6974f7dd1da2e17cb83afb7d0e6496a6090488f5
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

<<<<<<< HEAD
const store = createStore(appReducers, applyMiddleware(thunk, logger));
=======
const store = createStore(Reducers, applyMiddleware(thunk, logger));
>>>>>>> 6974f7dd1da2e17cb83afb7d0e6496a6090488f5

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
