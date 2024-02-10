import React from 'react';
import './Navbar.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header__top-bar">
                <span className="top-bar__notice">FILLER TEXT </span>
                <button className="top-bar__start-button">Start Now</button>
            </div>
            <div className="header__content">
                <nav className="header__nav">
                    <ul className="nav__list">
                        <li className="nav__item"><a href="/" className="nav__link">Home</a></li>
                        <li className="nav__item"><a href="/book-online" className="nav__link">Book Online</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
