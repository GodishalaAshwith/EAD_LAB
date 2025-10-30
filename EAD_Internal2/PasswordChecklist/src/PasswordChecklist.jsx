import React, { useState } from "react";

const PasswordChecklist = () => {
  const [password, setPassword] = useState("");

  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    number: /[0-9]/.test(password),
    special: /[^A-Za-z0-9]/.test(password),
  };

  const Rule = ({ text, valid }) => (
    <li style={{ color: valid ? "green" : "red" }}>{text}</li>
  );

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
      />
      <ul>
        <Rule valid={checks.length} text="At least 8 characters" />
        <Rule valid={checks.uppercase} text="Contains an uppercase letter" />
        <Rule valid={checks.number} text="Contains a number" />
        <Rule valid={checks.special} text="Contains a special character" />
      </ul>
    </div>
  );
};

export default PasswordChecklist;
