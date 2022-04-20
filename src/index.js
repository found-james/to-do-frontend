import React from "react";
import ReactDOM from "react-dom/client";
import { useBeforeunload } from "react-beforeunload";
import App from "./App";

const root = ReactDOM.createRoot(document.querySelector("#root"));


root.render(

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

