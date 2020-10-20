import React from 'react';
// import PropTypes from 'prop-types';

import './travel.scss';
import { MapPin, FileText, Users, Map } from 'react-feather';
import thumbnail from 'src/assets/images/ile-maurice.jpg';

const Travel = () => (
  <>
    <div className="card-container">
      <div className="travel-card card-detail">
        <img src={thumbnail} className="travel-card-image card-detail-image" alt="thumbnail" />
        <div className="travel-card-content">
          <div className="travel-card-content-title">Voyage à Rome</div>
          <div className="travel-card-content-destination">
            <MapPin color="grey" size={15} />
            Rome, Italie
          </div>
          <div className="travel-card-content-date">Du 26/10/2020 au 01/11/2020</div>
          <div className="travel-card-content-description">Voyage de 2 semaines à Rome et ses alentours avec tous les amis, barbecue et compagnie</div>
          <button type="button" className="travel-card-content-more card-details">Modifier les détails</button>
        </div>
      </div>
    </div>
    <div className="travel-menu">
      <div className="travel-menu-icon">
        <Users size={32} className="travel-menu-logo" />
        <p>Participants</p>
      </div>
      <div className="travel-menu-icon">
        <Map size={32} className="travel-menu-logo" />
        <p>Activités</p>
      </div>
      <div className="travel-menu-icon">
        <FileText size={32} className="travel-menu-logo" />
        <p>Documents</p>
      </div>
    </div>
    <div className="travel-container">
      Charger Component içi
    </div>
  </>
);

// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default Travel;
