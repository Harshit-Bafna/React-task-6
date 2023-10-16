// Header.js

import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <header className="header">
      <h1 className="header-title">Harshit Bafna</h1>
      <button className="menu-icon" onClick={toggleNav}>
        <i className={`fas ${showNav ? 'fa-times' : 'fa-bars'}`}></i>
      </button>
      <nav className={`header-nav ${showNav ? 'active' : ''}`}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#experiences">Experiences</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
