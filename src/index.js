import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import { GlobalStyle } from "./globalStyle";
import { GlobalProvider } from "./GlobalContext/Context";

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <GlobalStyle />
      <App />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
