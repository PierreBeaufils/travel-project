import React from 'react';
import { PlusCircle, CheckSquare, Trash2 } from 'react-feather';
import CategoryFrame from './CategoryFrame';

import useModal from './useModal';
import ModalAddAccomodation from './Modals/ModalAddAccomodation';
import ModalAddTransport from './Modals/ModalAddTransport';
import ModalAddActivity from './Modals/ModalAddActivity';
import TabsThingsEditMobile from './TabsThingsEditMobile';

import data from './data.json';
// import PropTypes from 'prop-types';
import './styles.scss';

const ThingsEdit = () => {
  const { isShowingModalAddAccomodation, toggleModalAddAccomodation } = useModal('ModalAddAccomodation');
  const { isShowingModalAddTransport, toggleModalAddTransport } = useModal('ModalAddTransport');
  const { isShowingModalAddActivity, toggleModalAddActivity } = useModal('ModalAddActivity');

  const handleAddAccommodationCLick = () => { // gere le click sur l'ajout d'un hebergement
    console.log('ouvre modale add accomodation');
    toggleModalAddAccomodation();
  };
  const handleAddTransportCLick = () => { // gere le click sur l'ajout d'un transport
    console.log('ouvre modale add Transport');
    toggleModalAddTransport();
  };
  const handleAddActivityCLick = () => { // gere le click sur l'ajout d'une activité
    console.log('ouvre modale add activity');
    toggleModalAddActivity();
  };

  const isMobile = window.innerWidth <= 500;
  const isEditingAllowed = true; // booleen permettant d'afficher les options d'édition
  // (pour page edition d'un voyage), contrairement à la page visualisation d'un
  // voyage qui permet que la lecture des données.

  return (

    <div className="">
      {(isMobile === true) ? (<TabsThingsEditMobile />) : null}
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
      <div
        className="validate--button validate_selection"
      // onClick={() => handleAddThing()}
      >
        <CheckSquare
          color="#fff"
        />
        <p>Valider</p>
      </div>
      <CategoryFrame
        categoryName="Hébergement"
        textButton="Ajouter un hébergement"
        handleAddThing={handleAddAccommodationCLick}
        data={data.accomodation}
        isEditingAllowed={isEditingAllowed}

      />
      <CategoryFrame
        categoryName="Transport"
        textButton="Ajouter un Transport"
        handleAddThing={handleAddTransportCLick}
        data={data.transport}
        isEditingAllowed={isEditingAllowed}
      />
      <CategoryFrame
        categoryName="Activité"
        textButton="Ajouter une Activité"
        handleAddThing={handleAddActivityCLick}
        data={data.activity}
        isEditingAllowed={isEditingAllowed}
      />
    </div>
  );
};
// ThingsEdit.propTypes = {

// };

// ThingsEdit.defaultProps = {

// };

export default ThingsEdit;
