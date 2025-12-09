import { useState } from "react";
import "./App.css";

function App() {
  const [pwd, setPwd] = useState("");

  const getStrength = (s) => {
    if (!s) return { label: "", color: "#ccc" };
    const hasLength = s.length >= 8;
    const hasUpper = /[A-Z]/.test(s);
    const hasNumber = /\d/.test(s);
    const hasSpecial = /[^A-Za-z0-9]/.test(s);
    const count = [hasLength, hasUpper, hasNumber, hasSpecial].filter(
      Boolean
    ).length;

    if (count === 4) return { label: "Strong", color: "#10b981" };
    if (count >= 2) return { label: "Medium", color: "#f59e0b" };
    return { label: "Weak", color: "#ef4444" };
  };

  const { label, color } = getStrength(pwd);

  return (
    <div className="pwd-app">
      <input
        type="password"
        placeholder="Enter password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        style={{ borderColor: pwd ? color : "#ccc" }}
      />
      {label && <p style={{ color }}>{label}</p>}
    </div>
  );
}

export default App;
