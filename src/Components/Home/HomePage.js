import React, { Fragment } from "react";

import HomeHeader from "./HomeHeader";
import Card from "../UI/Card";

import "./HomePage.css";

const HomePage = ({ onAuthenticate }) => {
  const handelLogout = () => {
    onAuthenticate(false);
    localStorage.removeItem("isLoggedIn");
  };
  return (
    <Fragment>
      <HomeHeader onLogout={handelLogout} />
      <Card>
        <h1> Welcome Back! </h1>
        <button onClick={handelLogout}>Logout</button>
      </Card>
    </Fragment>
  );
};

export default HomePage;
