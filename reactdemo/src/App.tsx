import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Currency } from "./componenets/Currecny";
import { UserList } from "./componenets/UserList";
import { User } from "./service/user";
import { IUser } from "./models";

function App() {
  let value: number = 127.25664,
    symbol: string = "INR";
  let users: IUser[] = User.getUser();

  const currecnyClick = (testvalue: number) => {
    console.log(testvalue);
  };
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <Currency
            value={value}
            symbol={symbol}
            currencyClicked={(testvalue) => currecnyClick(testvalue)}
          />
        </header>
      </div>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
