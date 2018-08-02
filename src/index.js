import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import reducers from "./redux/reducers";

const options = [reducers, {}];

const middleware = [applyMiddleware(thunk)];

// Si el browser es Chrome y no es movil
// var ua = navigator.userAgent;
// if (
//   !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(
//     ua
//   )
// ) {
//   if (
//     navigator.userAgent.indexOf("Chrome") &&
//     process.env.NODE_ENV === "development"
//   ) {
//     middleware.push(
//       window.__REDUX_DEVTOOLS_EXTENSION__ &&
//         window.__REDUX_DEVTOOLS_EXTENSION__()
//     );
//   }
// }

options.push(compose(...middleware));

const store = createStore(...options);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
