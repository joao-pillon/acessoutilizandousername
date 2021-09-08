import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {isLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}></WelcomePage>
        ) : (
          <GetUserComponent
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          ></GetUserComponent>
        )}
      </header>
    </div>
  );
}

export default App;
