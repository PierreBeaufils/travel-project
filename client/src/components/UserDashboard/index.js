import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import './userdashboard.scss';
import { PlusCircle } from 'react-feather';
import ProfileCard from 'src/containers/ProfileCard';
import TravelCard from './TravelCard';

const UserDashboard = () => {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="userdashboard">
      <h2>Tableau de bord</h2>
      <div className="user-container">
        <ProfileCard />
      </div>
      <div className="userdashboard-travels">
        <div className="userdashboard-travels-header">
          <h3>Mes voyages</h3>

          <Link to="/creer-un-voyage" className="create--button">
            <PlusCircle color="#fff" />
            <p>Créer un voyage</p>
          </Link>

        </div>
        <TravelCard />
        <TravelCard />
      </div>
    </div>
  );
};

// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default UserDashboard;
