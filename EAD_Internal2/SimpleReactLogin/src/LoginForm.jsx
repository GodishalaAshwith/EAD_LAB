import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'password123') {
      setMessage({ text: 'Login Successful!', color: 'green' });
    } else {
      setMessage({ text: 'Error: Invalid credentials.', color: 'red' });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <br />
      <button type="submit">Login</button>
      {message && <p style={{ color: message.color }}>{message.text}</p>}
    </form>
  );
};

export default LoginForm;