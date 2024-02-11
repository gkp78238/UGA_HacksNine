import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
    return (
        <nav className="navbar">
            <Link to="/" class="title">Superhero Care</Link>
            <Link to="/login" className="nav-link">Login</Link> 
            <Link to="/signup" className="nav-link">Signup</Link> 
        </nav>
    );
}

export default Navbar;
