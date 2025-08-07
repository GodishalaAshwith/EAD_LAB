import React from "react";
import Button from "./Components/Button";
import FirstComp from "./Components/FirstComp";
import Profile from "./Components/Profile";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
let content;

const App = () => {
  return (
    <>
      <FirstComp age="20" />
      <br />
      <Profile />
      <Button />
      if (LoggedIn) {(content = <Dashboard />)} else {(content = <Login />)}
    </>
  );
};

export default App;
