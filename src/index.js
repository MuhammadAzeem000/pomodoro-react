import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import SettingModal from "./Components/SettingModal/SettingModal";
import { GlobalStyle } from "./globalStyle";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
