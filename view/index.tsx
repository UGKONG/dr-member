import _React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../lib/store";
import App from "./App";
import "./index.scss";

const rootNode = document.querySelector("#root");

if (rootNode) {
  createRoot(rootNode).render(
    <Router>
      <Provider store={store}>
        <title>닥터케어유니온</title>
        <App />
      </Provider>
    </Router>
  );
} else {
  console.error("RootNode is null!!");
}
