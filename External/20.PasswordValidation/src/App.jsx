import React, { useState } from "react";

const App = () => {
  const [password, setPassword] = useState("");

  const getStrength = (pass) => {
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;
    return score;
  };

  const strength = getStrength(password);
  const borderColor = strength < 2 ? "red" : strength < 4 ? "orange" : "green";
  const label = strength < 2 ? "Weak" : strength < 4 ? "Medium" : "Strong";

  return (
    <div style={{ padding: "20px" }}>
      <h3>Password Validator</h3>

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ border: `3px solid ${borderColor}`, padding: "5px" }}
      />

      <p style={{ color: borderColor }}>
        Strength: {password && label}
      </p>
    </div>
  );
};

export default App;
