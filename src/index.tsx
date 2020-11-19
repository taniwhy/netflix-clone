import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./provider";
import   App from "./App";
import "./global-style.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
