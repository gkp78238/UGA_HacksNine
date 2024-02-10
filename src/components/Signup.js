import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to your backend endpoint for user registration
      const response = await axios.post('/api/register', { username, email, password });
      console.log('User registered successfully:', response.data);
      // Optionally, you can redirect the user to a different page after successful registration
    } catch (error) {
      setError('Failed to register user');
      console.error('Registration failed:', error);
    }
    console.log('Submitted:', { username, email, password, passwordConfirm });
    // You would typically want to validate the inputs and then send them to your server here
    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Confirm Password"
        value={passwordConfirm}
        onChange={(e) => setPasswordConfirm(e.target.value)}
        required
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
