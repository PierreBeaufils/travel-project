/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { baseURL } from 'src/config';
import timestampToDate from 'src/selectors/dates';

import './travel.scss';
import {
  MapPin, Calendar, PlusSquare,
} from 'react-feather';

import thumbnail from 'src/assets/images/ile-maurice.jpg';
import Documents from '../UserProfile/Documents';
import CardAccommodation from '../TravelDashboard/CardAccommodation';
import CardTransport from '../TravelDashboard/CardTransport';
import CardActivity from '../TravelDashboard/CardActivity';
import Price from './Prices';
import DocumentsTravel from './DocumentsTravel';

const Travel = ({
  travel, fetchOneTravel, id, saveOneTravel, userID, // fetchOneTravel à supprimer car fetch içi
}) => {
  const isEditingAllowed = userID === travel.owner ? true : false;

  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const fetchTravel = (travelId) => {
    axios.get(`${baseURL}/travel/${travelId}`, { withCredentials: true })
      .then((res) => {
        if (res.status === 200) {
          saveOneTravel(res.data);
          setLoading(false);
        }
      })
      .catch(() => {
        history.push('/');
      });
  };

  useEffect(() => {
    fetchTravel(id);
  }, []);

  
  console.log(userID);
  console.log('owner');
  console.log(travel.owner);
  console.log('owner');
  return (
    <div className="travel-details-container">
      {!loading && (
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
                  {timestampToDate(travel.departure_date)} au {timestampToDate(travel.return_date)}
                </div>
                {(isEditingAllowed) ? (
                  <Link to={`/voyage/${travel.id}/modifier`} className="travel-card-content-more card-details">
                    Modifier les détails
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          {(isEditingAllowed) ? (
            <Link to={`/voyage/${id}/dashboard`} {...fetchOneTravel} id={id}>
              <div className="validate--button validate_or_cancel_selection">
                <PlusSquare color="#fff" />
                <p>Ajouter un hébergement, trajet ou activité au voyage</p>
              </div>
            </Link>
          ) : null}
          <div className="travel-details-container-details">

            <div className="travel-container">
              <div className="cards__container travel__view">

                {/* Timestamp is sent to order by date in CSS rendering */}
                {/* {travel.accommodation.map((oneAccomodation) => <CardAccommodation key={oneAccomodation.id} {...oneAccomodation} isEditingAllowed={false} timestamp={new Date(`${oneAccomodation.arrival_date}`).getTime() / 1000} />)} */}

                {travel.accommodation.filter((item) => item.selected).map((oneAccomodation) => <CardAccommodation key={oneAccomodation.id} {...oneAccomodation} isEditingAllowed={isEditingAllowed} timestamp={new Date(`${oneAccomodation.arrival_date}`).getTime() / 1000} fetchOneTravel={fetchOneTravel} />)}
                {travel.activity.filter((item) => item.selected).map((oneActivity) => <CardActivity key={oneActivity.id} {...oneActivity} isEditingAllowed={isEditingAllowed} timestamp={new Date(`${oneActivity.date}`).getTime() / 1000} fetchOneTravel={fetchOneTravel} />)}
                {travel.transport.filter((item) => item.selected).map((oneTransport) => <CardTransport key={oneTransport.id} {...oneTransport} isEditingAllowed={isEditingAllowed} timestamp={new Date(`${oneTransport.departure_date}`).getTime() / 1000} fetchOneTravel={fetchOneTravel} />)}

              </div>
            </div>
            <div className="travel-details-container-right-side">
              <Price prices={travel.prices[0]} />
              <DocumentsTravel documents={travel.documents} isEditingAllowed={isEditingAllowed} travelID={id} />
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
  id: PropTypes.string.isRequired,
  saveOneTravel: PropTypes.func.isRequired,
};

Travel.defaultProps = {
  travel: null,
};

export default Travel;
