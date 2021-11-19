import React, { useState, useEffect } from "react";

import LoginPage from "./Components/Login/LoginPage";
import HomePage from "./Components/Home/HomePage";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.isLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleAuthentication = (isUserLoggedIn) => {
    setIsLoggedIn(isUserLoggedIn);
  };

  return (
    <div className="App">
      {!isLoggedIn ? (
        <LoginPage onAuthenticate={handleAuthentication} />
      ) : (
        <HomePage onAuthenticate={handleAuthentication} />
      )}
    </div>
  );
}

export default App;
