// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Content from './components/Content'; // Make sure the path matches the location of your file
import axios from 'axios';
import Login from './components/Login'; // Import the Login component

const Login = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post('/api/login', { email, password });
        const token = response.data.token;
        localStorage.setItem('token', token); // Store token in local storage
        onLogin(); // Callback to inform parent component about successful login
      } catch (error) {
        setError('Invalid email or password');
      }
    };
  
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
          {error && <p>{error}</p>}
        </form>
      </div>
    );
  };
  
  const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
  
    const handleLogin = () => {
      setLoggedIn(true);
    };
  
    return (
      <div>
        {loggedIn ? (
          <div>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
            {/* Render your authenticated components here */}
          </div>
        ) : (
          <Login onLogin={handleLogin} />
        )}
      </div>
    );
  };

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={
                        <main className="content">
                            <Content /> {/* This is where the WhoWeAre component is used */}
                            <MainSection />
                        </main>
                    } />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
