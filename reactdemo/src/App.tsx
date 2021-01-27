import logo from "./logo.svg";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Currency } from "./componenets/Currecny";

function App() {
  let value: number = 127.25664,
    symbol: string = "INR";

  const currecnyClick = (testvalue: number) => {
    console.log(testvalue);
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Currency
          value={value}
          symbol={symbol}
          currencyClicked={(testvalue) => currecnyClick(testvalue)}
        />
      </header>
    </div>
  );
}

export default App;
