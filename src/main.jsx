import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: Module-1 , createElement returns simple JS object

// const element = React.createElement("div", { id: "box" }, "this is the box");

// const root = createRoot(document.querySelector("#root"));

// console.log(element);

// root.render(element);

// TODO: Module -2 : creating our own render function

// const reactElement = {
//   type: "p",
//   props: {
//     id: "text",
//     "data-id": "para",
//   },
//   children: "this is the paragraph text",
// };

// function render(reactElement, containerElement) {
//   const element = document.createElement(reactElement.type);

//   for (let key in reactElement.props) {
//     let value = reactElement.props[key];
//     element.setAttribute(key, value);
//   }

//   element.innerHTML = reactElement.children;

//   console.log("React Element", element);
//   console.log(" container ELement : ", containerElement);

//   containerElement.appendChild(element);
// }

// render(reactElement, document.querySelector("#root"));
