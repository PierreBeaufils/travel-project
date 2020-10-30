import React from 'react';
import PropTypes from 'prop-types';
import {
  Map, CheckSquare, Trash2, Calendar, Info,
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
  const handleAddCardCLick = () => { // gere le click sur bouton + d'ajouter une carte à la selection
  };
  const handleDeleteCardCLick = () => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard();
  };

  return (
    // Timestamp is used to order by date in CSS rendering
    <div className="card__container" style={{ order: `${transport.timestamp}` }}>
      {(transport.EditAllowed) ? (
        <ModalDelete
          isShowing={isShowingModalDeleteCard}
          hide={toggleModalDeleteCard}
          oneThingName={transport.from}
          categoryName="Transport"
          cardID={transport.id}
        />
      ) : null}
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
            <CheckSquare
              onClick={() => handleAddCardCLick(transport.id)}
              color="#80CC24"
            />
            <Trash2
              color="#FF7A32"
              onClick={() => handleDeleteCardCLick(transport.id)}
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