/* eslint-disable max-len */
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './travel.scss';
import {
  MapPin, Calendar, PlusSquare,
} from 'react-feather';

import thumbnail from 'src/assets/images/ile-maurice.jpg';
import Documents from '../UserProfile/Documents';
import CardAccommodation from '../TravelDashboard/CardAccommodation';
import CardTransport from '../TravelDashboard/CardTransport';
import CardActivity from '../TravelDashboard/CardActivity';

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
          <Link to={`/voyage/${travel.id}/dashboard`}>
            <div className="validate--button validate_selection">
              <PlusSquare color="#fff" />
              <p>Ajouter un hébergement, trajet ou activité au voyage (s'affiche que pour organisateur)</p>
            </div>
          </Link>

          <div className="travel-container">
            <div className="cards__container travel__view">
              {travel.accommodation.map((accomodation) => (
                <CardAccommodation
                  key={accomodation.id}
                  {...accomodation}
                  EditAllowed={false}
                  timestamp={new Date(`${accomodation.arrival_date}`).getTime() / 1000}
                />
              ))}
              {travel.activity.map((activity) => (
                <CardActivity
                  key={activity.id}
                  {...activity}
                  EditAllowed={false}
                  timestamp={new Date(`${activity.date}`).getTime() / 1000}
                />
              ))}
              {travel.transport.map((transport) => (
                <CardTransport
                  key={transport.id}
                  {...transport}
                  EditAllowed={false}
                  timestamp={new Date(`${transport.departure_date}`).getTime() / 1000}
                />
              ))}
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
  travel: null,
};

export default Travel;
