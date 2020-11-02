import React from 'react';
import {
  MapPin, CheckSquare, Trash2, Calendar, Info, Edit,
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
  const handleAddCardCLick = (e) => { // gere le click sur bouton + d'ajouter une carte à la selection
    console.log(e);
    // si l'élément (id) est déjà présent dans le tableau je renvois un tableau neuf sans l'élément
    if (oneAccomodation.checkedAccommodations.find((element) => element === oneAccomodation.id)) { // si c'est TRUE c'est que présent dans tableau
      oneAccomodation.setcheckedAccommodations(oneAccomodation.checkedAccommodations.filter((e) => e !== oneAccomodation.id));
    }
    else { // j'ajoute dans le tableau si l'id de la carte pas présent
      oneAccomodation.setcheckedAccommodations([...oneAccomodation.checkedAccommodations, oneAccomodation.id]);
    }
  };
  const handleDeleteCardCLick = () => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard();
  };
  return (
    // Timestamp is used to order by date in CSS rendering
    <div className="card__container" style={{ order: `${oneAccomodation.timestamp}` }}>
      {/* {(oneAccomodation.EditAllowed) ? ( */}
      <ModalDelete
        isShowing={isShowingModalDeleteCard}
        hide={toggleModalDeleteCard}
        elementName={oneAccomodation.name}
        category="accommodation"
        elementId={oneAccomodation.id}
        travelId={oneAccomodation.travel_id}
        fetchOneTravel={oneAccomodation.fetchOneTravel}
      />
      {/* ) : null} */}

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
          <h4><MapPin color="#2B7AFD" size={15} /> {oneAccomodation.address} {oneAccomodation.city}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> Du {transformDateISOtoString(oneAccomodation.arrival_date)} au {transformDateISOtoString(oneAccomodation.departure_date)}</h4>
          {(oneAccomodation.information != null) ? <p><Info color="#2B7AFD" size={15} /> {oneAccomodation.information}</p> : null}
        </div>
        {(oneAccomodation.EditAllowed) ? (
          <div className="card__footer">

            {(oneAccomodation.checkedAccommodations.find((element) => element === oneAccomodation.id)) ? ( // ternaire pour definir couleur du checkbox
              <CheckSquare
                onClick={() => handleAddCardCLick(oneAccomodation.id)}
                color="#80CC24"
              />
            ) : (
              <CheckSquare
                onClick={() => handleAddCardCLick(oneAccomodation.id)}
                color="#F5F5F5"

              />
            )}
            <Edit
              onClick={() => oneAccomodation.handleAddThing(oneAccomodation)}
              color="#80CC24"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(oneAccomodation.id)}
            />
          </div>
        ) : null}
        {(oneAccomodation.isEditingAllowed) ? (
          <div className="card__footer">
            <Edit
              onClick={() => oneAccomodation.handleAddThing(oneAccomodation)}
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
