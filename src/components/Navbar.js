import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/login">Login</Link> 
            <Link to="/signup">Signup</Link> 
        </nav>
    );
}

export default Navbar;
