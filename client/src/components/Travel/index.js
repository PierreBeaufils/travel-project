import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import Documents from '../UserProfile/Documents';

import './travel.scss';
import {
  MapPin, FileText, Users, Map, Home, Briefcase, Calendar,
} from 'react-feather';

import thumbnail from 'src/assets/images/ile-maurice.jpg';
import CardAccommodation from '../ThingsEdit/CardAccommodation';
import CardTransport from '../ThingsEdit/CardTransport';
import CardActivity from '../ThingsEdit/CardActivity';
import data from './data.json';

const Travel = ({ travel }) => (
  <div className="travel-details-container ">
    <div className="card-container travel-card travel-details">
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
          <Link to={`/voyage/${travel.id}/modifer`} className="travel-card-content-more card-details">
            Modifier les détails
          </Link>
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
      {/* <Documents userData={[{}]} /> */}
      <div className="cards__container travel__view">
        {/* Timestamp is sent to order by date in CSS rendering */}
        {data.accomodation.map((oneAccomodation) => <CardAccommodation key={oneAccomodation.id} {...oneAccomodation} isEditingAllowed={false} timestamp={new Date(`${oneAccomodation.arrival_date}`).getTime() / 1000} />)}
        {data.activity.map((oneActivity) => <CardActivity key={oneActivity.id} {...oneActivity} isEditingAllowed={false} timestamp={new Date(`${oneActivity.date}`).getTime() / 1000} />)}
        {data.transport.map((oneTransport) => <CardTransport key={oneTransport.id} {...oneTransport} isEditingAllowed={false} timestamp={new Date(`${oneTransport.departure_date}`).getTime() / 1000} />)}
      </div>
    </div>
  </div>
);

Travel.propTypes = {
  travel: PropTypes.object,
};

Travel.defaultProps = {
  travel: {},
};

export default Travel;
