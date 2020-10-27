import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './userdashboard.scss';
import { PlusCircle } from 'react-feather';
import ProfileCard from 'src/components/UserDashboard/ProfileCard';
import TravelCard from './TravelCard';

const UserDashboard = ({
  user,
  travels,
  loadingTravels,
  loadingUser,
  fetchTravels,
  fetchUserData,
}) => {
  const travelsList = travels.map((travel) => (
    <TravelCard key={travel.travel_id} {...travel} />
  ));
  console.log(typeof travelsList);

  useEffect(() => {
    fetchUserData();
    fetchTravels();
  }, []);

  return (
    <div className="userdashboard">
      {!loadingTravels && !loadingUser && (
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
          </div>
        </>
      )}
    </div>
  );
};

UserDashboard.propTypes = {
  user: PropTypes.object.isRequired,
  travels: PropTypes.array.isRequired,
  fetchTravels: PropTypes.func.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  loadingUser: PropTypes.bool.isRequired,
  loadingTravels: PropTypes.bool.isRequired,
};

export default UserDashboard;
