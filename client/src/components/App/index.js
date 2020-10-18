import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Homepage from 'src/components/Homepage';
import Mentions from 'src/components/Mentions';
import Contact from 'src/components/Contact';
import About from 'src/components/About';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/mentions-legales" component={Mentions} />
      <Route path="/contact" component={Contact} />
      <Route path="/a-propos" component={About} />
    </Switch>
    <Footer />
  </div>
);

export default App;
