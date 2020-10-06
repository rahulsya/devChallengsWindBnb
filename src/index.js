import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "./assets/style/main.css";
import "material-design-icons";
import { StaysContextProvider } from "./context/stays-context";

ReactDOM.render(
  <React.StrictMode>
    <StaysContextProvider>
      <App />
    </StaysContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
