import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ContextApiProvider from "./Components/contextApi/ContextApi.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </BrowserRouter>
);
