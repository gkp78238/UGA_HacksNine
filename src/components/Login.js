// Login.js

import React, { useState } from 'react';
import axios from 'axios';
import './Login.css'; // Make sure you create a corresponding CSS file for styling

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('/api/login', { username, password });
      console.log('Login successful');
      // Here you might want to handle the successful login, such as redirecting to another page or setting a login state
    } catch (error) {
      setError('Invalid username or password');
      console.error('Login failed:', error);
    }
    console.log('Login attempted with:', username, password);
    // After login logic, you might want to set the username and password back to empty strings
    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Log In</button>
      </form>
    </div>
  );
};

export default Login;
