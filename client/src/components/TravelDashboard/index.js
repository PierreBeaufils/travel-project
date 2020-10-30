import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CheckSquare } from 'react-feather';
import axios from 'axios';
import { appId, apiKey, baseURL } from 'src/config';

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
  const [checkedAccommodations, setcheckedAccommodations] = useState([]);
  const [checkedTransports, setcheckedTransports] = useState([]);
  const [checkedActivities, setcheckedActivities] = useState([]);
  console.log('icciiiiiiiiiii');
  console.log(travel);
  console.log('icciiiiiiiiiii');
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
  const handleValidateSlection = () => { // gere le click sur le texte d'une carte
    console.log('cliqueeeeeeuuuuu');
    // console.log(data);
    // axios.post(`${baseURL}/travel/s${travelId}/transport`, data)
    //   .then((res) => {
    //     console.log(res.data);
    //   });
    checkedAccommodations.map((idToSelect) => {
      console.log(idToSelect);
      axios.patch(`${baseURL}/travel/${travel.infos.id}/accommodation/${idToSelect}`)
        .then((res) => {
          console.log(res.data);
        });
    });
  };
  const EditAllowed = true;

const filterNotSelectedCards = () => {
  travel.accommodation.map((item) => {
     
    console.log(item);
  })

}
console.log('testttttt');
filterNotSelectedCards();
console.log('testttttt');
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
      <div onClick={() => handleValidateSlection()} className="validate--button validate_selection">
        <CheckSquare
          color="#fff"
        />
        <p>Valider</p>
      </div>
      <CategoryFrame
        category="accommodation"
        textButton="Ajouter un hébergement"
        handleAddElement={handleAddModal}
        data={travel.accommodation}
        EditAllowed={EditAllowed}
        setcheckedAccommodations={setcheckedAccommodations}
        checkedAccommodations={checkedAccommodations}
      />
      <CategoryFrame
        category="transport"
        textButton="Ajouter un Transport"
        handleAddElement={handleAddModal}
        data={travel.transport}
        EditAllowed={EditAllowed}
        setcheckedTransports={setcheckedTransports}
        checkedTransports={checkedTransports}
      />
      <CategoryFrame
        category="activity"
        textButton="Ajouter une Activité"
        handleAddElement={handleAddModal}
        data={travel.activity}
        EditAllowed={EditAllowed}
        setcheckedActivities={setcheckedActivities}
        checkedActivities={checkedActivities}
      />
    </div>
  );
};
TravelDashboard.propTypes = {
  travel: PropTypes.object.isRequired,
};

export default TravelDashboard;
