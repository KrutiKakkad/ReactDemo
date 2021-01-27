import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Currency } from "./componenets/Currecny";

function App() {
  let value: number = 127.2566,
    symbol: string = "INR";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Currency value={value} symbol={value > 100 ? "$" : "INR"} />
      </header>
    </div>
  );
}

export default App;
