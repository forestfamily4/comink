import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";
import reportWebVitals from "./lib/reportWebVitals";
import initLang from "./lib/lang/lang";

initLang("ja");

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);

