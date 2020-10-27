import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';

import './travel.scss';
import {
  MapPin, FileText, Users, Map, Home, Briefcase, Calendar,
} from 'react-feather';

import thumbnail from 'src/assets/images/ile-maurice.jpg';
import Documents from '../UserProfile/Documents';
import CardAccommodation from '../ThingsEdit/CardAccommodation';
import CardTransport from '../ThingsEdit/CardTransport';
import CardActivity from '../ThingsEdit/CardActivity';

const Travel = ({
  travel, fetchOneTravel, travelLoaded, id,
}) => {
  useEffect(() => {
    fetchOneTravel(id);
  }, []);

  return (
    <div className="travel-details-container">
      {!travelLoaded && (
        <>
          <div className="card-container travel-card travel-details">
            <div className="travel-card card-detail">
              <img src={thumbnail} className="travel-card-image card-detail-image" alt="thumbnail" />
              <div className="travel-card-content">
                <div className="travel-card-content-title">{travel.title}</div>
                <div className="travel-card-content-destination">
                  <MapPin color="grey" size={15} />
                  {travel.destination}
                </div>
                <div className="travel-card-content-date">
                  <Calendar color="grey" size={15} />
                  {travel.departure_date} au {travel.return_date}
                </div>
                <div className="travel-card-content-description">Voyage de 2 semaines à Rome et ses alentours avec tous les amis, barbecue et compagnie</div>
                <Link to={`/voyage/${travel.id}/modifier`} className="travel-card-content-more card-details">
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
              {/* Timestamp is sent to order by date in CSS rendering 
              {travel.accomodation.map((oneAccomodation) => <CardAccommodation key={oneAccomodation.id} {...oneAccomodation} isEditingAllowed={false} timestamp={new Date(`${oneAccomodation.arrival_date}`).getTime() / 1000} />)} */}
              {travel.activity.map((oneActivity) => <CardActivity key={oneActivity.id} {...oneActivity} isEditingAllowed={false} timestamp={new Date(`${oneActivity.date}`).getTime() / 1000} />)}
              {travel.transport.map((oneTransport) => <CardTransport key={oneTransport.id} {...oneTransport} isEditingAllowed={false} timestamp={new Date(`${oneTransport.departure_date}`).getTime() / 1000} />)}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

Travel.propTypes = {
  travel: PropTypes.object,
  fetchOneTravel: PropTypes.func.isRequired,
  travelLoaded: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

Travel.defaultProps = {
  travel: {},
};

export default Travel;
