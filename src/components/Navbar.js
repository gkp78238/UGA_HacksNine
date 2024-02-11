import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Assuming you have a CSS file for the Navbar

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/login">Login</Link> {/* Existing login link */}
            <Link to="/signup">Signup</Link> {/* Add this line for the signup link */}
            <Link to="/login2">Login2</Link> {/* Add this line for the signup link */}
        </nav>
    );
}

export default Navbar;
