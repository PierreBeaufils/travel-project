import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import TabsUserProfileMobile from './TabsUserProfileMobile';
import Documents from './Documents';

import './styles.scss';

const UserProfile = ({ dataUser }) => {
  const isMobile = window.innerWidth <= 500;
  if (isMobile) {
    return (
      <TabsUserProfileMobile dataUser={dataUser}/>
    );
  } else {
  return (
    <div className="profil-main">
    <Profile dataUser={dataUser}/>
    <Documents dataUser={dataUser}/>
    </div>
  );
          }
};

UserProfile.propTypes = {
  dataUser: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    documents: PropTypes.array.isRequired,
  }),
};

// LoginForm.defaultProps = {

// };

export default UserProfile;
