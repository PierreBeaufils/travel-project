import React from 'react';
// import PropTypes from 'prop-types';
import './userdashboard.scss';
import { PlusCircle } from 'react-feather';
import TravelCard from './TravelCard';

const UserDashboard = () => {
  const onSubmit = (data) => console.log(data);
  return (
    <div className="userdashboard">
      <h2>Tableau de bord</h2>
      <div className="userdashboard-travels">
        <div className="userdashboard-travels-header">
          <h3>Mes voyages</h3>
          <div className="create-travel--button">
            <PlusCircle color="#fff" />
            <p>Créer un voyage</p>
          </div>
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
