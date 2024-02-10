import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for the Navbar

function Navbar() {
    return (
        <nav className="navbar">
            {/* ... other nav items */}
            <Link to="/login">Login</Link> {/* Existing login link */}
            <Link to="/signup">Signup</Link> {/* Add this line for the signup link */}
            {/* ... other nav items */}
        </nav>
    );
}

export default Navbar;
