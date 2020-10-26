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
<<<<<<< HEAD
  loadingDatas,
  fetchUserTravelsData,
=======
  loadingTravels,
  loadingUser,
  fetchTravels,
  fetchUserData,
>>>>>>> client
}) => {
  const travelsList = travels.map((travel) => (
    <TravelCard key={travel.id} {...travel} />
  ));

<<<<<<< HEAD
  useEffect(() => { // NE FONCTIONNE PAS A REFAIRE !!
    fetchUserTravelsData();
    // fetchUserData();
    // fetchTravels();
=======
  useEffect(() => {
    fetchUserData();
    fetchTravels();
>>>>>>> client
  }, []);

  return (
    <div className="userdashboard">
<<<<<<< HEAD
      {!loadingDatas && (
=======
      {!loadingTravels && !loadingUser && (
>>>>>>> client
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
<<<<<<< HEAD
  fetchUserTravelsData: PropTypes.func.isRequired,
  loadingDatas: PropTypes.bool.isRequired,
=======
  fetchTravels: PropTypes.func.isRequired,
  fetchUserData: PropTypes.func.isRequired,
  loadingUser: PropTypes.bool.isRequired,
  loadingTravels: PropTypes.bool.isRequired,
>>>>>>> client
};

export default UserDashboard;
