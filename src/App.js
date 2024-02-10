// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSection from './components/MainSection';
import Footer from './components/Footer';
import Content from './components/Content'; // Make sure the path matches the location of your file
import axios from 'axios';
import Login from './components/Login'; // Import the Login component

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
