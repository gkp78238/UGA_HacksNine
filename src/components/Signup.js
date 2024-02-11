import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(''); // Define email state
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords don't match");
      return;
    }

    try {
      // Replace 'http://localhost:3000/register' with the correct URL to your backend endpoint
      const response = await axios.post('http://localhost:5001/register', { username, email, password });
      console.log('User registered successfully:', response.data);
      navigate('/chatbot'); // This will redirect the user to the chatbot page
    } catch (error) {
      navigate('/chatbot');
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      {error && <div className="error">{error}</div>}
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
