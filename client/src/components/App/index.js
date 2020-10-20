import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles.css';

import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';
import Homepage from 'src/components/Homepage';
import Mentions from 'src/components/Mentions';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/components/RegisterForm';
import NotFound from 'src/components/NotFound';
import UserProfile from 'src/components/UserProfile';
import CreateTravelForm from 'src/components/CreateTravelForm';
import UserDashboard from 'src/components/UserDashboard';
import Travel from 'src/components/Travel';

const dataUserTest = {
  firstname: 'Monprenom',
  lastname: 'Monnomdefamille',
  address: '1 Rue Demarue',
  postcode: '0123456',
  city: 'Maville',
  phone: '+33123456789',
  mail: 'monmail@monfai.fr',
  documents: [{
    docName: 'Le nom de mon document1',
    docDate: 1603111990,
    docLink: 'http://test1.fr',
  }, {
    docName: 'Le nom de mon document2',
    docDate: 1503111990,
    docLink: 'http://test2.fr',
  }],

};
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
      <Route
        path="/profil"
        render={(props) => (
          <UserProfile {...props} dataUser={dataUserTest} />
        )}
      />
      <Route path="/creer-un-voyage" component={CreateTravelForm} />
      <Route path="/tableau-de-bord" component={UserDashboard} />
      <Route path="/voyage/:id" component={Travel} />
      <Route component={NotFound} />
    </Switch>
    <Footer />
  </div>
);

export default App;
