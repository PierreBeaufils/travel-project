import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckSquare, XSquare } from 'react-feather';
import axios from 'axios';
import { baseURL } from 'src/config';
import { useHistory } from 'react-router-dom';
import CategoryFrame from './CategoryFrame';
import useModal from './useModal';
import ModalAddAccomodation from './Modals/ModalAddAccomodation';
import ModalAddTransport from './Modals/ModalAddTransport';
import ModalAddActivity from './Modals/ModalAddActivity';
import ModalAddMember from './Modals/ModalAddMember';

import './styles.scss';

const TravelDashboard = ({
  travel, fetchOneTravel, id, loadingTravel,
}) => {
  const { isShowingModalAddAccomodation, toggleModalAddAccomodation } = useModal('ModalAddAccomodation');
  const { isShowingModalAddTransport, toggleModalAddTransport } = useModal('ModalAddTransport');
  const { isShowingModalAddActivity, toggleModalAddActivity } = useModal('ModalAddActivity');
  const { isShowingModalAddMembers, toggleModalAddMembers } = useModal('ModalAddMembers');
  const [oneAccomodationDataToEdit, setOneAccomodationDataToEdit] = useState();
  const [checkedAccommodations, setcheckedAccommodations] = useState([]);
  const [checkedTransports, setcheckedTransports] = useState([]);
  const [checkedActivities, setcheckedActivities] = useState([]);

  const history = useHistory();

  const handleAddModal = (event) => { // gere le click sur l'ajout d'un hebergement
    if (event.currentTarget.value === 'Hébergements') {
      toggleModalAddAccomodation();
    }
    if (event.currentTarget.value === 'Transports') {
      toggleModalAddTransport();
    }
    if (event.currentTarget.value === 'Activités') {
      toggleModalAddActivity();
    }
    if (event.target.value === 'members') {
      toggleModalAddMembers();
    }
  };

  const handleValidateSelection = () => { // gere le click sur le texte d'une carte
    checkedAccommodations.map((idToSelect) => {
      console.log(idToSelect);
      const options = {
        headers: { 'Content-Type': 'application/json' },
      };
      axios.patch(`${baseURL}/travel/${travel.id}/accommodation/${idToSelect}`, { selected: 'true' }, options)
        .then((res) => {
          console.log(res.data);

          history.push(`/voyage/${travel.id}`);
        });
    });

    checkedTransports.map((idToSelect) => {
      console.log(idToSelect);
      const options = {
        headers: { 'Content-Type': 'application/json' },
      };
      axios.patch(`${baseURL}/travel/${travel.id}/transport/${idToSelect}`, { selected: 'true' }, options)
        .then((res) => {
          console.log(res.data);
          history.push(`/voyage/${travel.id}`);
        });
    });
    checkedActivities.map((idToSelect) => {
      console.log(idToSelect);
      const options = {
        headers: { 'Content-Type': 'application/json' },
      };
      axios.patch(`${baseURL}/travel/${travel.id}/activity/${idToSelect}`, { selected: 'true' }, options)
        .then((res) => {
          console.log(res.data);
          history.push(`/voyage/${travel.id}`);
        });
    });
  };
  const EditAllowed = true;

  return (

    <div className="travel-dashboard-container">
      <ModalAddMember
        travelID={travel.id}
        isShowing={isShowingModalAddMembers}
        hide={toggleModalAddMembers}
      />

      <ModalAddAccomodation
        isShowing={isShowingModalAddAccomodation}
        hide={toggleModalAddAccomodation}
        travelID={travel.id}
        fetchOneTravel={fetchOneTravel}

      />
      <ModalAddTransport
        isShowing={isShowingModalAddTransport}
        hide={toggleModalAddTransport}
        travelID={travel.id}
        fetchOneTravel={fetchOneTravel}
      />
      <ModalAddActivity
        isShowing={isShowingModalAddActivity}
        hide={toggleModalAddActivity}
        travelID={travel.id}
        fetchOneTravel={fetchOneTravel}
      />
      <h1>Tableau de bord organisateur</h1>
      <div className="dashboard-header">
        <div className="validate_or_cancel_selection">
          <div onClick={() => history.push(`/voyage/${travel.id}`)} className="big-buttons cancel-button">
            <XSquare
              color="#fff"
            />
            <p>Annuler</p>
          </div>
          <div onClick={() => handleValidateSelection()} className="big-buttons">
            <CheckSquare
              color="#fff"
              className="display__pointer"
            />
            <p>Valider</p>
          </div>
        </div>
        <div>
          <button type="button" className="create--button add-traveler" onClick={handleAddModal} value="members">
            Ajouter des voyageurs
          </button>
        </div>
      </div>
      <div className="info-validate">
        Séléctionnez des éléments puis validez pour les ajouter au voyage
      </div>

      {
        !loadingTravel && (
          <>
            <CategoryFrame
              category="Hébergements"
              textButton="Ajouter un hébergement"
              handleAddElement={handleAddModal}
              data={travel.accommodation}
              EditAllowed={EditAllowed}
              setcheckedAccommodations={setcheckedAccommodations}
              checkedAccommodations={checkedAccommodations}
              fetchOneTravel={fetchOneTravel}
            />
            <CategoryFrame
              category="Transports"
              textButton="Ajouter un Transport"
              handleAddElement={handleAddModal}
              data={travel.transport}
              EditAllowed={EditAllowed}
              setcheckedTransports={setcheckedTransports}
              checkedTransports={checkedTransports}
              fetchOneTravel={fetchOneTravel}
            />
            <CategoryFrame
              category="Activités"
              textButton="Ajouter une Activité"
              handleAddElement={handleAddModal}
              data={travel.activity}
              EditAllowed={EditAllowed}
              setcheckedActivities={setcheckedActivities}
              checkedActivities={checkedActivities}
              fetchOneTravel={fetchOneTravel}
            />
          </>

        )
      }
    </div >

  );
};
TravelDashboard.propTypes = {
  travel: PropTypes.object.isRequired,
  loadingTravel: PropTypes.bool.isRequired,
};

export default TravelDashboard;
