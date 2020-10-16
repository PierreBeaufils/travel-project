import React, { useState } from 'react';
import './navbar.scss';
import logo from 'src/assets/images/logo.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [fade, setFade] = useState(false);

  const toggleHamburger = () => {
    if (toggleMenu) {
      return 'nav-links open';
    } return 'nav-links';
  };

  const toggleFade = () => {
    if (fade) {
      return 'test fade';
    } return 'test';
  };

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
    setFade(!fade);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" className="logo-image" />
          <p className="logo-title">O'Voyage</p>
        </div>
        <div className="hamburger" onClick={handleToggle}>
          <div className="line" style={{ transform: toggleMenu ? 'rotate(-45deg) translate(-5px,6px)' : null }} />
          <div className="line" style={toggleMenu ? { transform: 'translateX(100%)', opacity: '0' } : {}} />
          <div className="line" style={{ transform: toggleMenu ? 'rotate(45deg) translate(-5px,-6px)' : null }} />
        </div>
        <ul className={toggleHamburger()}>
          <li className={toggleFade()}>Contact</li>
          <li className={toggleFade()}>Connexion</li>
          <li className={toggleFade()}>Inscription</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
