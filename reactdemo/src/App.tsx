import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Currency } from './componenets/Currecny';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
       <Currency value="12" symbol="INR"></Currency>
      </header>
    </div>
  );
}

export default App;
