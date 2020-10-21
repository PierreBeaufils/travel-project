import React from 'react';
import {
  MapPin, CheckSquare, Trash2, Calendar, Info,
} from 'react-feather';
import ModalDelete from './Modals/ModalDelete';
import ModalCardDescription from './Modals/ModalCardDescription';
import useModal from './useModal';
// import PropTypes from 'prop-types';
import './styles.scss';

const CardAccommodation = (oneAccomodation) => {
  const { isShowingModalDeleteCard, toggleModalDeleteCard } = useModal('ModalDeleteCard');
  const { isShowingModalCardDescription, toggleModalCardDescription } = useModal('ModalCardDescription');

  const transformDateISOtoString = (ISOdate) => new Date(ISOdate).toLocaleString('fr-FR', { timeZone: 'UTC' });

  
  const handleTextCardCLick = () => { // gere le click sur le texte d'une carte
    toggleModalCardDescription();
  };
  const handleAddCardCLick = () => { // gere le click sur bouton + d'ajouter une carte à la selection
  };
  const handleDeleteCardCLick = () => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard();
  };

  return (

    <div className="card__container">
      <ModalDelete
        isShowing={isShowingModalDeleteCard}
        hide={toggleModalDeleteCard}
      />
      <ModalCardDescription
        isShowing={isShowingModalCardDescription}
        hide={toggleModalCardDescription}
        categoryName="Hébergement"
        oneThingData={oneAccomodation}
      />
      <div className="card">
        <div
          className="card__text"
          onClick={() => handleTextCardCLick('ceci est ma target 1')}
        >
          <h3>Séjour à l'établisement {oneAccomodation.name}</h3>
          <h4><MapPin color="#2B7AFD" size={15} /> {oneAccomodation.adress} {oneAccomodation.city}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> Du {transformDateISOtoString(oneAccomodation.arrival_date)} au {transformDateISOtoString(oneAccomodation.departure_date)}</h4>
          {(oneAccomodation.information != null) ? <p><Info color="#2B7AFD" size={15} /> {oneAccomodation.information}</p> : null }
        </div>
        <div className="card__footer">
          <CheckSquare
            onClick={() => handleAddCardCLick(oneAccomodation.id)}
            color="#80CC24"
          />
          <Trash2
            color="#FF7A32"
            onClick={() => handleDeleteCardCLick(oneAccomodation.id)}
          />
        </div>
      </div>
    </div>
  );
};
// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default CardAccommodation;
