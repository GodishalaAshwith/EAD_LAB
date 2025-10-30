import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PasswordChecklist from "./PasswordChecklist";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PasswordChecklist />
    </>
  );
}

export default App;
