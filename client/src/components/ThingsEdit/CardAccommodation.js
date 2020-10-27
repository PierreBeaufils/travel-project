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
  console.log(`${oneAccomodation.timestamp}timestamp`);
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
  // Timestamp is used to order by date in CSS rendering
    <div className="card__container" style={{ order: `${oneAccomodation.timestamp}` }}>
      {(oneAccomodation.isEditingAllowed) ? (
        <ModalDelete
          isShowing={isShowingModalDeleteCard}
          hide={toggleModalDeleteCard}
          oneThingName={oneAccomodation.name}
          categoryName="Hébergement"
          cardID={oneAccomodation.id}
        />
      ) : null}

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
        {(oneAccomodation.isEditingAllowed) ? (
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
        ) : null}

      </div>
    </div>
  );
};
// CardAccommodation.propTypes = {

// };

// CardAccommodation.defaultProps = {

// };

export default CardAccommodation;
