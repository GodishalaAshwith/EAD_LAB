import React, { useState } from "react";
import Button from "./Components/Button";
import FirstComp from "./Components/FirstComp";
import Profile from "./Components/Profile";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import RenderingListItems from "./Pages/RenderingListItems";
import ShoppingList from "./Pages/ShoppingList";
import Ofe from "./Components/Ofe";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // initial state: not logged in
  function handleClick() {
    alert("You clicked me!");
  }

  let content;
  if (isLoggedIn) {
    content = <Dashboard />;
  } else {
    content = <Login />;
  }

  return (
    <>
      <FirstComp age="20" />
      <br />
      <Profile />
      <br />
      <Button
        onClick={() => setIsLoggedIn((prev) => !prev)}
        text="Toggle Login"
      />
      <br />
      <div>
        Ternary Conditional Rendering {isLoggedIn ? <Dashboard /> : <Login />}
      </div>

      <div>Simple if-else Conditional Rendering {content}</div>
      <p>And Operator Conditional Rendering {isLoggedIn && <Dashboard />}</p>
      <br />
      <RenderingListItems />
      <ShoppingList />
      <button
        className="btn btn-secondary"
        onClick={handleClick}
        onMouseOver={() => console.log("Mouse over!")}
      >
        Click me
      </button>
      <Ofe />
    </>
  );
};

export default App;
