import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Profile from './Profile';
import Documents from './Documents';

import './styles.scss';

const TabsUserProfileMobile = ({ dataUser }) => {
  const tabs = {
    profile: <Profile dataUser={dataUser} />,
    documents: <Documents dataUser={dataUser} />,
  };
  const [activeTab, setActiveTab] = useState('profile');
  return (
    <div>
      <div>
        <button className="tab-mobile" onClick={() => setActiveTab('profile')}>
          Mon Profil
        </button>
        <button className="tab-mobile" onClick={() => setActiveTab('documents')}>
          Mes documents
        </button>
      </div>
      {tabs[activeTab]}

    </div>
  );
};

// DocumentItem.propTypes = {
//   docName: PropTypes.string.isRequired,
//   docDate: PropTypes.number.isRequired,
//   docLink: PropTypes.string.isRequired,
// };

// DocumentItem.defaultProps = {

// };

export default TabsUserProfileMobile;
