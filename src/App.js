// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Content from './components/Content'; // Make sure the path matches the location of your file
import Signup from './components/Signup'; // Adjust the path to where your Signup component is located
import axios from 'axios';
import Login from './components/Login'; // Import the Login component

function App() {
  return (
      <Router>
          <div className="App">
              <Navbar />
              <Routes>
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<Signup />} /> {/* Add this line */}
                  <Route path="/" element={
                      <main className="content">
                          <Content /> {/* Main content */}
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
