import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => (
  <footer>
    <Link to="/">Home</Link>
    <Link to="/dashboard">Dashboard</Link>
  </footer>
);

export default Footer;
