import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Currency } from "./componenets/Currecny";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Currency value={125.56123} symbol="$" />
      </header>
    </div>
  );
}

export default App;
