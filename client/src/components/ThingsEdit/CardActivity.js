/* eslint-disable max-len */
import React from 'react';
import {
  MapPin, CheckSquare, Trash2, Calendar, Clock, Info,
} from 'react-feather';
import ModalDelete from './Modals/ModalDelete';
import ModalCardDescription from './Modals/ModalCardDescription';
import useModal from './useModal';
// import PropTypes from 'prop-types';
import './styles.scss';

const CardActivity = (oneActivity) => {
  const { isShowingModalDeleteCard, toggleModalDeleteCard } = useModal('ModalDeleteCard');
  const { isShowingModalCardDescription, toggleModalCardDescription } = useModal('ModalCardDescription');
  const transformDateISOtoString = (ISOdate) => new Date(ISOdate).toLocaleString('fr-FR', { timeZone: 'UTC' });

  const handleTextCardCLick = () => { // gere le click sur le texte d'une carte
    toggleModalCardDescription();
  };
  const handleAddCardCLick = (clickedCardId) => { // gere le click sur bouton + d'ajouter une carte à la selection
    console.log('Click sur ajout', clickedCardId);
  };
  const handleDeleteCardCLick = (clickedCardId) => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard(clickedCardId);
  };

  return (
  // Timestamp is used to order by date in CSS rendering
    <div className="card__container" style={{ order: `${oneActivity.timestamp}` }}>
      {(oneActivity.isEditingAllowed) ? (
        <ModalDelete
          isShowing={isShowingModalDeleteCard}
          hide={toggleModalDeleteCard}
          oneThingName={oneActivity.name}
          categoryName="Activité"
          cardID={oneActivity.id}
        />
      ) : null}
      <ModalCardDescription
        isShowing={isShowingModalCardDescription}
        hide={toggleModalCardDescription}
        categoryName="Activité"
        oneThingData={oneActivity}
      />
      <div className="card">
        <div
          className="card__text"
          onClick={() => handleTextCardCLick('1')}
        >
          <h3>Activité: {oneActivity.name}</h3>
          <h4><MapPin color="#2B7AFD" size={15} /> {oneActivity.place}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> {transformDateISOtoString(oneActivity.date)}</h4>
          <h4><Clock color="#2B7AFD" size={15} /> durée: {oneActivity.duration.minutes} minutes</h4>
          <p><Info color="#2B7AFD" size={15} /> {oneActivity.description}</p>
        </div>
        {(oneActivity.isEditingAllowed) ? (
          <div className="card__footer">
            <CheckSquare
              onClick={() => handleAddCardCLick(oneActivity.id)}
              color="#80CC24"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(oneActivity.id)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default CardActivity;
