import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './travel.scss';
import {
  MapPin, FileText, Users, Map, Home, Briefcase, Calendar,
} from 'react-feather';
import thumbnail from 'src/assets/images/ile-maurice.jpg';

const Travel = ({ travel }) => (
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
          <div className="travel-card-content-date">
            <Calendar color="grey" size={15} />
            26/10/2020 au 01/11/2020
          </div>
          <div className="travel-card-content-description">Voyage de 2 semaines à Rome et ses alentours avec tous les amis, barbecue et compagnie</div>
          <button type="button" className="travel-card-content-more card-details">Modifier les détails</button>
        </div>
      </div>
    </div>
    <div className="travel-menu">
      <NavLink to={`/travel/${travel.id}/membres`} activeClassName="navlink-selected">
        <div className="travel-menu-icon">
          <Users size={24} className="travel-menu-logo" />
          <p>Participants</p>
        </div>
      </NavLink>
      <NavLink to={`/travel/${travel.id}/transport`} activeClassName="navlink-selected">
        <div className="travel-menu-icon">
          <Briefcase size={24} className="travel-menu-logo" />
          <p>Transport</p>
        </div>
      </NavLink>
      <NavLink to={`/travel/${travel.id}/hebergements`} activeClassName="navlink-selected">
        <div className="travel-menu-icon">
          <Home size={24} className="travel-menu-logo" />
          <p>Hébergement</p>
        </div>
      </NavLink>
      <NavLink to={`/travel/${travel.id}/activites`} activeClassName="navlink-selected">
        <div className="travel-menu-icon">
          <Map size={24} className="travel-menu-logo" />
          <p>Activités</p>
        </div>
      </NavLink>
      <NavLink to={`/travel/${travel.id}/documents`} activeClassName="navlink-selected">
        <div className="travel-menu-icon">
          <FileText size={24} className="travel-menu-logo" />
          <p>Documents</p>
        </div>
      </NavLink>
    </div>
    <div className="travel-container">
      Component içi
    </div>
  </>
);

Travel.propTypes = {
  travel: PropTypes.object,
};

Travel.defaultProps = {
  travel: {},
};

export default Travel;
