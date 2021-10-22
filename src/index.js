import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
//import Rss from "./components/feed";
//import CardGrid from "./components/trial";

//import CardDesign from "./components/feed2"
import CardG from "./components/trial2";

ReactDOM.render(
  <React.StrictMode>
    <CardG />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
