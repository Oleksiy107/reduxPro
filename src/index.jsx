import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import rootReducer from "./components/Reducers.jsx";
import App from "./components/App.jsx";

const store = createStore(rootReducer);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <App />
  </Provider>
);
