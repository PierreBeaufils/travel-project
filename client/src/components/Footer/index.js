import React from 'react';
import { Link, Route } from 'react-router-dom';
import './footer.scss';

import Mentions from 'src/components/Mentions';
import Team from 'src/components/Team';
import Contact from 'src/components/Contact';
import About from 'src/components/About';

const Footer = () => (
  <footer>
    <Link to="/mentions-legales" className="footer-link">Mentions légales</Link>
    <Link to="/contact" className="footer-link">Contact</Link>
    <Link to="/equipe" className="footer-link">Équipe</Link>
    <Link to="/a-propos" className="footer-link">À propos</Link>
    <Route
      path="/mentions-legales"
      component={Mentions}
    />
    <Route
      path="/equipe"
      component={Team}
    />
    <Route
      path="/contact"
      component={Contact}
    />
    <Route
      path="/a-propos"
      component={About}
    />
  </footer>
);

export default Footer;
