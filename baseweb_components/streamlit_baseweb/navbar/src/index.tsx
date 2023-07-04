import React from "react"
import ReactDOM from "react-dom"
import BaseWebNavigationBar from "./Navbar"
import { Provider as StyletronProvider } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";


const engine = new Styletron();

ReactDOM.render(
  <React.StrictMode>
    <StyletronProvider value={engine}>
        <BaseWebNavigationBar />
    </StyletronProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
