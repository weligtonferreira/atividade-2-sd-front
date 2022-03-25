import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./contexts/Auth";
import "./index.css";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.getElementById("root")
);
