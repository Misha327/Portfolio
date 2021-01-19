import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyles } from "./global-styles";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap');
    </style>
  </React.StrictMode>,
  document.getElementById("root")
);
