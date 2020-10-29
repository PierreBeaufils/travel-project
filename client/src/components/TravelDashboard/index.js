import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckSquare } from 'react-feather';

import CategoryFrame from './CategoryFrame';
import useModal from './useModal';
import ModalAddAccomodation from './Modals/ModalAddAccomodation';
import ModalAddTransport from './Modals/ModalAddTransport';
import ModalAddActivity from './Modals/ModalAddActivity';

import './styles.scss';

const TravelDashboard = ({ travel }) => {
  const { isShowingModalAddAccomodation, toggleModalAddAccomodation } = useModal('ModalAddAccomodation');
  const { isShowingModalAddTransport, toggleModalAddTransport } = useModal('ModalAddTransport');
  const { isShowingModalAddActivity, toggleModalAddActivity } = useModal('ModalAddActivity');
  const [oneAccomodationDataToEdit, setOneAccomodationDataToEdit] = useState();

  const handleAddModal = (event) => { // gere le click sur l'ajout d'un hebergement
    if (event.currentTarget.value === 'accommodation') {
      toggleModalAddAccomodation();
    }
    if (event.currentTarget.value === 'transport') {
      toggleModalAddTransport();
    }
    if (event.currentTarget.value === 'activity') {
      toggleModalAddActivity();
    }
  };

  const EditAllowed = true;

  return (
    <div className="travel-dashboard-container">
      <ModalAddAccomodation
        isShowing={isShowingModalAddAccomodation}
        hide={toggleModalAddAccomodation}
      />
      <ModalAddTransport
        isShowing={isShowingModalAddTransport}
        hide={toggleModalAddTransport}
      />
      <ModalAddActivity
        isShowing={isShowingModalAddActivity}
        hide={toggleModalAddActivity}
      />
      <div className="validate--button validate_selection">
        <CheckSquare color="#fff" />
        <p>Valider</p>
      </div>
      <CategoryFrame
        category="accommodation"
        textButton="Ajouter un hébergement"
        handleAddElement={handleAddModal}
        data={travel.accommodation}
        EditAllowed={EditAllowed}
      />
      <CategoryFrame
        category="transport"
        textButton="Ajouter un Transport"
        handleAddElement={handleAddModal}
        data={travel.transport}
        EditAllowed={EditAllowed}
      />
      <CategoryFrame
        category="activity"
        textButton="Ajouter une Activité"
        handleAddElement={handleAddModal}
        data={travel.activity}
        EditAllowed={EditAllowed}
      />
    </div>
  );
};
TravelDashboard.propTypes = {
  travel: PropTypes.object.isRequired,
};

export default TravelDashboard;
