import React from 'react';
import { PlusCircle, CheckSquare, Trash2 } from 'react-feather';
import CategoryFrame from './CategoryFrame';

import useModal from './useModal';
import ModalAddAccomodation from './ModalAddAccomodation';
import ModalAddTransport from './ModalAddTransport';
import ModalAddActivity from './ModalAddActivity';
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
  if (isMobile) {
    return (
      <div className="">
        <p>version mobile</p>
      </div>
    );
  // eslint-disable-next-line no-else-return
  }

  return (
    <div className="">
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
      <p>versiondesktop</p>
      <CategoryFrame
        categoryName="Hébergement"
        textButton="Ajouter un hébergement"
        handleAddThing={handleAddAccommodationCLick}
      />
      <CategoryFrame
        categoryName="Transport"
        textButton="Ajouter un Transport"
        handleAddThing={handleAddTransportCLick}
      />
      <CategoryFrame
        categoryName="Activité"
        textButton="Ajouter une Activité"
        handleAddThing={handleAddActivityCLick}
      />
    </div>
  );
};
// ThingsEdit.propTypes = {

// };

// ThingsEdit.defaultProps = {

// };

export default ThingsEdit;
