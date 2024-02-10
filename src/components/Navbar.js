// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Your Navbar styles

const Navbar = () => {
    return (
        <nav className="navbar">
            {/* Other navigation links */}
            <Link to="/login" className="nav-link">Log In</Link>
        </nav>
    );
};

export default Navbar;
