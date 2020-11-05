/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import {
  MapPin, CheckSquare, Trash2, Calendar, Clock, Info, Edit, Compass,
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
  const handleAddCardCLick = (e) => { // gere le click sur bouton + d'ajouter une carte à la selection
    console.log(e);
    // si l'élément (id) est déjà présent dans le tableau je renvois un tableau neuf sans l'élément
    if (activity.checkedActivities.find((element) => element === activity.id)) { // si c'est TRUE c'est que présent dans tableau
      activity.setcheckedActivities(activity.checkedActivities.filter((e) => e !== activity.id));
    }
    else { // j'ajoute dans le tableau si l'id de la carte pas présent
      activity.setcheckedActivities([...activity.checkedActivities, activity.id]);
    }
  };
  const handleDeleteCardCLick = () => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard();
  };

  return (
    // Timestamp is used to order by date in CSS rendering
    <div className="card__container" style={{ order: `${activity.timestamp}` }}>
      {/* {(activity.EditAllowed) ? ( */}
      <ModalDelete
        isShowing={isShowingModalDeleteCard}
        hide={toggleModalDeleteCard}
        elementName={activity.name}
        category="activity"
        elementId={activity.id}
        travelId={activity.travel_id}
        fetchOneTravel={activity.fetchOneTravel}
      />
      {/* ) : null} */}
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
          <h3><Compass size={32} className="travel-menu-logo" />Activité: {activity.name}</h3>
          <h4><MapPin color="#2B7AFD" size={15} /> {activity.place}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> {transformDateISOtoString(activity.date)}</h4>
          <h4><Clock color="#2B7AFD" size={15} /> durée: {activity.duration.minutes} minutes</h4>
          <p><Info color="#2B7AFD" size={15} /> {activity.description}</p>
        </div>
        {(activity.EditAllowed) ? (
          <div className="card__footer">
            {(activity.checkedActivities.find((element) => element === activity.id)) ? ( // ternaire pour definir couleur du checkbox
              <CheckSquare
                onClick={() => handleAddCardCLick(activity.id)}
                color="#80CC24"
                className="display__pointer"
              />
            ) : (
                <CheckSquare
                  onClick={() => handleAddCardCLick(activity.id)}
                  color="#F5F5F5"
                  className="display__pointer"
                />
              )}
            <Edit
              onClick={() => activity.handleAddThing(activity)}
              color="#80CC24"
              className="display__pointer"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(activity.id)}
              className="display__pointer"
            />
          </div>
        ) : null}
        {(activity.isEditingAllowed) ? (
          <div className="card__footer">
            <Edit
              onClick={() => activity.handleAddThing(activity)}
              color="#80CC24"
              className="display__pointer"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(activity.id)}
              className="display__pointer"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CardActivity;
