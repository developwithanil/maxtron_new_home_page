import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
// import { Helmet } from "react-helmet";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      {/* <Helmet> */}
      <App />
      {/* </Helmet> */}
    </HelmetProvider>
  </React.StrictMode>
);
