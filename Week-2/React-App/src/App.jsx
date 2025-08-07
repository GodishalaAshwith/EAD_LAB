import React from "react";
import Button from "./Components/Button";
import FirstComp from "./Components/FirstComp";
import Profile from "./Components/Profile";

const App = () => {
  return (
    <>
      <FirstComp age="20" />
      <br />
      <Profile />
      <Button />
    </>
  );
};

export default App;
