import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';
import './styles.css';

import Navbar from 'src/containers/Navbar';
import Footer from 'src/components/Footer';
import Homepage from 'src/components/Homepage';
import Mentions from 'src/components/Mentions';
import Contact from 'src/components/Contact';
import About from 'src/components/About';
import LoginForm from 'src/containers/LoginForm';
import RegisterForm from 'src/containers/RegisterForm';
import NotFound from 'src/components/NotFound';
import UserProfile from 'src/components/UserProfile';
import TravelForm from 'src/containers/TravelForm';
import UserDashboard from 'src/containers/UserDashboard';
import Travel from 'src/containers/Travel';
import ThingsEdit from 'src/components/ThingsEdit';
import RegisterValidation from 'src/components/RegisterForm/RegisterValidation';
import TokenValidation from 'src/containers/TokenValidation';

// == Component
const App = ({ loggedIn, loginCheck, loading }) => {
  // Check if the user is connected
  useEffect(() => {
    loginCheck();
  }, []);

  return (
    <div className="app">
      {!loading && (
        <>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route exact path="/connexion">
              {loggedIn ? <Redirect to="/tableau-de-bord" /> : <LoginForm />}
            </Route>
            <Route exact path="/inscription">
              {loggedIn ? <Redirect to="/tableau-de-bord" /> : <RegisterForm />}
            </Route>
            <Route exact path="/inscription/validation" component={RegisterValidation} />
            <Route path="/mentions-legales" component={Mentions} />
            <Route path="/contact" component={Contact} />
            <Route path="/a-propos" component={About} />
            <Route path="/profil" component={UserProfile} />
            <Route path="/creer-un-voyage" component={TravelForm} />
            <Route path="/tableau-de-bord" component={UserDashboard} />
            <Route path="/voyage/:id" component={Travel} />
            <Route path="/voyage/:id/modifier" component={ThingsEdit} />
            <Route path="/validation" component={RegisterValidation} />
            <Route path="/verifier" component={TokenValidation} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </>
      )}
    </div>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  loginCheck: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default App;
