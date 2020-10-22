import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './userdashboard.scss';
import { PlusCircle } from 'react-feather';
import ProfileCard from 'src/components/UserDashboard/ProfileCard';
import TravelCard from './TravelCard';

const UserDashboard = ({ user, travels, loadingUser, fetchUserData, fetchTravels }) => {
  const travelsList = travels.map((travel) => (
    <TravelCard key={travel.id} {...travel} />
  ));

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="userdashboard">
      {!loadingUser && (
        <>
          <h2>Tableau de bord</h2>
          <div className="user-container">
            <ProfileCard user={user} />
          </div>
          <div className="userdashboard-travels">
            <div className="userdashboard-travels-header">
              <h3>Mes voyages</h3>

              <Link to="/creer-un-voyage" className="create--button">
                <PlusCircle color="#fff" />
                <p>Créer un voyage</p>
              </Link>

            </div>
            {travelsList}
            <TravelCard />
            <TravelCard />
          </div>
        </>
      )}
    </div>
  );
};

UserDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  travels: PropTypes.array.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  fetchTravels: PropTypes.func.isRequired,
  loadingUser: PropTypes.bool.isRequired,
};

export default UserDashboard;
