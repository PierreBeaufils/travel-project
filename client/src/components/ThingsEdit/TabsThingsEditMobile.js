import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import CategoryFrame from './CategoryFrame';

import useModal from './useModal';
import ModalAddAccomodation from './Modals/ModalAddAccomodation';
import ModalAddTransport from './Modals/ModalAddTransport';
import ModalAddActivity from './Modals/ModalAddActivity';

import './styles.scss';

const TabsThingsEditMobile = ({ data, handleAddAccommodationCLick }) => (
  <div>
    <div>
      <button className="tab-mobile" onClick={() => console.log('accommodation')}>
        Hébergements
      </button>
      <button className="tab-mobile" onClick={() => console.log('transports')}>
        Transports
      </button>
      <button className="tab-mobile" onClick={() => console.log('activities')}>
        Activités
      </button>
    </div>
  </div>
);

// TabsThingsEditMobile.propTypes = {
//   docName: PropTypes.string.isRequired,
//   docDate: PropTypes.number.isRequired,
//   docLink: PropTypes.string.isRequired,
// };

// TabsThingsEditMobile.defaultProps = {

// };

export default TabsThingsEditMobile;
