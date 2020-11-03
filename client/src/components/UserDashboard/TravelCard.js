import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './userdashboard.scss';
import { MapPin } from 'react-feather';
import thumbnail from 'src/assets/images/ile-maurice.jpg';

const TravelCard = ({ travel }) => (
  <div className="travel-card">
    <img src={thumbnail} className="travel-card-image" alt="thumbnail" />
    <div className="travel-card-content">
      <div className="travel-card-content-title">{travel.title}</div>
      <div className="travel-card-content-destination">
        <MapPin color="grey" size={15} />
        {travel.destination}
      </div>
      <div className="travel-card-content-date">Du {travel.departure_date} au {travel.return_date}</div>
      <Link to={`/voyage/${travel.travel_id}`} className="travel-card-content-more">
        Voir ce voyage
      </Link>
    </div>
  </div>
);

TravelCard.propTypes = {
  travel: PropTypes.object.isRequired,
};

export default TravelCard;
