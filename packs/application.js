import React from "react"
import ReactDOM from "react-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import $ from "jquery"
import Popper from "popper.js"
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from "../components/app"

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.body.appendChild(document.createElement("div")))
});

