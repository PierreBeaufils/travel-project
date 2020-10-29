/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MapPin, CheckSquare, Trash2, Calendar, Clock, Info,
} from 'react-feather';
import ModalDelete from './Modals/ModalDelete';
import ModalCardDescription from './Modals/ModalCardDescription';
import useModal from './useModal';

import './styles.scss';

const CardActivity = (activity) => {
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
    <div className="card__container" style={{ order: `${activity.timestamp}` }}>
      {(activity.EditAllowed) ? (
        <ModalDelete
          isShowing={isShowingModalDeleteCard}
          hide={toggleModalDeleteCard}
          oneThingName={activity.name}
          categoryName="Activité"
          cardID={activity.id}
        />
      ) : null}
      <ModalCardDescription
        isShowing={isShowingModalCardDescription}
        hide={toggleModalCardDescription}
        categoryName="Activité"
        oneThingData={activity}
      />
      <div className="card">
        <div
          className="card__text"
          onClick={() => handleTextCardCLick('1')}
        >
          <h3>Activité: {activity.name}</h3>
          <h4><MapPin color="#2B7AFD" size={15} /> {activity.place}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> {transformDateISOtoString(activity.date)}</h4>
          <h4><Clock color="#2B7AFD" size={15} /> durée: {activity.duration.minutes} minutes</h4>
          <p><Info color="#2B7AFD" size={15} /> {activity.description}</p>
        </div>
        {(activity.EditAllowed) ? (
          <div className="card__footer">
            <CheckSquare
              onClick={() => handleAddCardCLick(activity.id)}
              color="#80CC24"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(activity.id)}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
CardActivity.propTypes = {
  activity: PropTypes.object.isRequired,
};

export default CardActivity;
