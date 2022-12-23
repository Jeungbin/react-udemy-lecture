import "../src/10.Navigation and Routing/index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./10.Navigation and Routing/App";
import { NavigationProvider } from "./10.Navigation and Routing/context/navigation";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigationProvider>
    <App />
  </NavigationProvider>
);
