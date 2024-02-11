import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      setError("Passwords don't match");
      return; // Stop the function if passwords don't match
    }
    try {
      // Send a POST request to your backend endpoint for user registration
      const response = await axios.post('/api/register', { username, email, password });
      console.log('User registered successfully:', response.data);
      // Redirect the user to a different page after successful registration
      navigate('/chatbot'); // Adjust '/chatbot' to your desired route
    } catch (error) {
      setError('Failed to register user');
      console.error('Registration failed:', error);
    }
  };

  return (
    <form className="signup-form" onSubmit={handleSubmit}>
      {/* Form fields */}
      {error && <p className="error">{error}</p>} {/* Display any error */}
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
