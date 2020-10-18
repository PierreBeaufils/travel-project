import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/">
            <p className="logo-title">O'Voyage</p>
          </Link>
        </div>

        <div className="hamburger" onClick={handleToggle}>
          <div className="line" style={{ transform: toggleMenu ? 'rotate(-45deg) translate(-5px,6px)' : null }} />
          <div className="line" style={toggleMenu ? { transform: 'translateX(100%)', opacity: '0' } : {}} />
          <div className="line" style={{ transform: toggleMenu ? 'rotate(45deg) translate(-5px,-6px)' : null }} />
        </div>
        <ul className={toggleHamburger()}>
          <Link to="contact"><li className={toggleFade()} onClick={handleToggle}>Contact</li></Link>
          <Link to="connexion"><li className={toggleFade()} onClick={handleToggle}>Connexion</li></Link>
          <Link to="inscription"><li className={toggleFade()} onClick={handleToggle}>Inscription</li></Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
