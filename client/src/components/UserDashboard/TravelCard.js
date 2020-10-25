import React from 'react';
// import PropTypes from 'prop-types';

import './userdashboard.scss';
import { MapPin } from 'react-feather';
import thumbnail from 'src/assets/images/ile-maurice.jpg';

const TravelCard = () => (
  <div className="travel-card">
    <img src={thumbnail} className="travel-card-image" alt="thumbnail" />
    <div className="travel-card-content">
      <div className="travel-card-content-title">Voyage à Rome</div>
      <div className="travel-card-content-destination">
        <MapPin color="grey" size={15} />
        Rome, Italie
      </div>
      <div className="travel-card-content-date">Du 26/10/2020 au 01/11/2020</div>
      <div className="travel-card-content-description">Voyage de 2 semaines à Rome et ses alentours avec tous les amis, barbecue et compagnie</div>
      <button type="button" className="travel-card-content-more">Voir ce voyage</button>

    </div>
  </div>
);

// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default TravelCard;
