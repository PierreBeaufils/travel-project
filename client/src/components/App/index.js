import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Homepage from 'src/components/Homepage';
import Mentions from 'src/components/Mentions';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import LoginForm from 'src/components/LoginForm';
import RegisterForm from 'src/components/RegisterForm';
import NotFound from 'src/components/NotFound';
import UserDashboard from 'src/components/UserDashboard';
import Travel from 'src/components/Travel';

// == Composant
const App = () => (
  <div className="app">
    <Navbar />
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/connexion" component={LoginForm} />
      <Route path="/inscription" component={RegisterForm} />
      <Route path="/mentions-legales" component={Mentions} />
      <Route path="/contact" component={Contact} />
      <Route path="/a-propos" component={About} />
      <Route path="/tableau-de-bord" component={UserDashboard} />
      <Route path="/voyage/:id" component={Travel} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
