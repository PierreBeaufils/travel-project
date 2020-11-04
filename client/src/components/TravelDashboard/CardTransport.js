import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, CheckSquare, Trash2, Calendar, Info, Edit,
} from 'react-feather';

import ModalDelete from './Modals/ModalDelete';
import ModalCardDescription from './Modals/ModalCardDescription';
import useModal from './useModal';
import './styles.scss';

const CardTransport = (transport) => {
  const { isShowingModalDeleteCard, toggleModalDeleteCard } = useModal('ModalDeleteCard');
  const { isShowingModalCardDescription, toggleModalCardDescription } = useModal('ModalCardDescription');

  const transformDateISOtoString = (ISOdate) => new Date(ISOdate).toLocaleString('fr-FR', { timeZone: 'UTC' });

  const handleTextCardCLick = () => { // gere le click sur le texte d'une carte
    toggleModalCardDescription();
  };
  const handleAddCardCLick = (e) => { // gere le click sur bouton + d'ajouter une carte à la selection
    console.log(e);
    // si l'élément (id) est déjà présent dans le tableau je renvois un tableau neuf sans l'élément
    if (transport.checkedTransports.find((element) => element === transport.id)) { // si c'est TRUE c'est que présent dans tableau
      transport.setcheckedTransports(transport.checkedTransports.filter((e) => e !== transport.id));
    }
    else { // j'ajoute dans le tableau si l'id de la carte pas présent
      transport.setcheckedTransports([...transport.checkedTransports, transport.id]);
    }
  };
  const handleDeleteCardCLick = () => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard();
  };

  return (
    // Timestamp is used to order by date in CSS rendering
    <div className="card__container" style={{ order: `${transport.timestamp}` }}>
      {/* {(transport.EditAllowed) ? ( */}
      <ModalDelete
        isShowing={isShowingModalDeleteCard}
        hide={toggleModalDeleteCard}
        elementName={transport.from}
        category="transport"
        elementId={transport.id}
        travelId={transport.travel_id}
        fetchOneTravel={transport.fetchOneTravel}
      />
      {/* ) : null} */}
      <ModalCardDescription
        isShowing={isShowingModalCardDescription}
        hide={toggleModalCardDescription}
        categoryName="Transport"
        oneThingData={transport}
      />
      <div className="card">
        <div
          className="card__text"
          onClick={() => handleTextCardCLick('1')}
        >
          <h3><Map size={32} className="travel-menu-logo" /> Trajet de {transport.from} à {transport.to}</h3>
          <h4>Moyen de transport: {transport.type}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> Du {transformDateISOtoString(transport.departure_date)} au {transformDateISOtoString(transport.arrival_date)}
          </h4>

          <p><Info color="#2B7AFD" size={15} /> {transport.memo}</p>
        </div>
        {(transport.EditAllowed) ? (
          <div className="card__footer">
            {(transport.checkedTransports.find((element) => element === transport.id)) ? ( // ternaire pour definir couleur du checkbox
              <CheckSquare
                onClick={() => handleAddCardCLick(transport.id)}
                color="#80CC24"
                className="display__pointer"
              />
            ) : (
              <CheckSquare
                onClick={() => handleAddCardCLick(transport.id)}
                color="#F5F5F5"
                className="display__pointer"
              />
            )}
            <Edit
              onClick={() => transport.handleAddThing(transport)}
              color="#80CC24"
              className="display__pointer"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(transport.id)}
              className="display__pointer"
            />
          </div>
        ) : null}
        {(transport.isEditingAllowed) ? (
          <div className="card__footer">
            <Edit
              onClick={() => transport.handleAddThing(transport)}
              color="#80CC24"
              className="display__pointer"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(transport.id)}
              className="display__pointer"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};
CardTransport.propTypes = {
  transport: PropTypes.object.isRequired,
};

export default CardTransport;
