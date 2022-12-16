// 1) Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./handleForms/App";
import "./index.css";
import BooksContext from "./context/books";

// 2) Get a reference to the dic with ID root
const el = document.getElementById("root");
// 3) Tell React to take control of that elememt
const root = ReactDOM.createRoot(el);

// 4) Show the component on the screen
root.render(
  <BooksContext.Provider value={5}>
    <App></App>
  </BooksContext.Provider>
);
