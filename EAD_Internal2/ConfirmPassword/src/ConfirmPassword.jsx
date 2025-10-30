import React, { useState } from 'react';

const ConfirmPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isStrong = /(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(password);
  const passwordsMatch = password && password === confirmPassword;

  return (
    <div>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      {!isStrong && password && <p style={{ color: 'red' }}>Password is weak (min 8 chars, 1 uppercase, 1 number).</p>}
      <br />
      <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Confirm Password" />
      {confirmPassword && !passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match.</p>}
    </div>
  );
};

export default ConfirmPassword;