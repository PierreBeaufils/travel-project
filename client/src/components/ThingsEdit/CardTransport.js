import React from 'react';
import {
  Map, CheckSquare, Trash2, Calendar, Info,
} from 'react-feather';
// import PropTypes from 'prop-types';
import './styles.scss';

const CardTransport = (oneTransport) => {
  const test = 'test';
  const transformDateISOtoString = (ISOdate) => new Date(ISOdate).toLocaleString('fr-FR', { timeZone: 'UTC' });

  const handleAddThingCLick = (ClickedCategoryName) => { // gere le click sur bouton + d'ajouter une chose à la catégorie
    console.log('Click sur ajout d\'une chose à la categorie', ClickedCategoryName);
  };
  const handleTextCardCLick = (clickedCardId) => { // gere le click sur le texte d'une carte
    console.log('Click sur le texte de la carte', clickedCardId);
  };
  const handleAddCardCLick = (clickedCardId) => { // gere le click sur bouton + d'ajouter une carte à la selection
    console.log('Click sur ajout', clickedCardId);
  };
  const handleDeleteCardCLick = (clickedCardId) => { // gere le click sur bouton supprimer d'une carte du stock
    console.log('Click sur corbeille', clickedCardId);
  };

  return (
    <div className="card__container">
      <div className="card">
        <div
          className="card__text"
          onClick={() => handleTextCardCLick('1')}
        >
          <h3><Map size={32} className="travel-menu-logo" /> Trajet de {oneTransport.from} à {oneTransport.to}</h3>
          <h4>Moyen de transport: {oneTransport.type}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> Du {transformDateISOtoString(oneTransport.departure_date)} au
            {transformDateISOtoString(oneTransport.arrival_date)}
          </h4>

          <p><Info color="#2B7AFD" size={15} /> {oneTransport.memo}</p>
        </div>
        <div className="card__footer">
          <CheckSquare
            onClick={() => handleAddCardCLick('1')}
            color="#80CC24"
          />
          <Trash2
            color="#FF7A32"
            onClick={() => handleDeleteCardCLick('1')}
          />
        </div>
      </div>
    </div>
  );
};
// CardTransport.propTypes = {

// };

// CardTransport.defaultProps = {

// };

export default CardTransport;
