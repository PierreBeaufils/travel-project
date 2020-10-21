import React from 'react';
import { MapPin, CheckSquare, Trash2, Calendar, Info } from 'react-feather';
import ModalDelete from './ModalDelete';
import ModalCardDescription from './ModalCardDescription';
import useModal from './useModal';
// import PropTypes from 'prop-types';
import './styles.scss';

const CardAccommodation = (oneAccomodation) => {
  const { isShowingModalDeleteCard, toggleModalDeleteCard } = useModal('ModalDeleteCard');
  const { isShowingModalCardDescription, toggleModalCardDescription } = useModal('ModalCardDescription');

  const todayDateISOString = new Date('2020-05-13T12:23:08.000Z').toLocaleString('fr-FR', { timeZone: 'UTC' }); // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  const transformDateISOtoString = (ISOdate) => {
    return new Date(ISOdate).toLocaleString('fr-FR', { timeZone: 'UTC' });
  };

  const handleAddThingCLick = (ClickedCategoryName) => { // gere le click sur bouton + d'ajouter une chose à la catégorie
    console.log('Click sur ajout d\'une chose à la categorie', ClickedCategoryName);
  };
  const handleTextCardCLick = (targetID) => { // gere le click sur le texte d'une carte
    console.log('Click sur le texte de la carte', targetID);
    toggleModalCardDescription(targetID);
  };
  const handleAddCardCLick = (clickedCardId) => { // gere le click sur bouton + d'ajouter une carte à la selection
    console.log('Click sur ajout', clickedCardId);
  };
  const handleDeleteCardCLick = (clickedCardId) => { // gere le click sur bouton supprimer d'une carte du stock
    toggleModalDeleteCard();
    console.log('Click sur corbeille', clickedCardId);
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
        data="jgjgjjjg"
      />
      <div className="card">
        <div
          className="card__text"
          onClick={() => handleTextCardCLick('ceci est ma target 1')}
        >
          <h3>Séjour à l'établisement {oneAccomodation.name}</h3>
          <h4><MapPin color="#2B7AFD" size={15} /> {oneAccomodation.adress} {oneAccomodation.city}</h4>
          <h4><Calendar color="#2B7AFD" size={15} /> Du {transformDateISOtoString(oneAccomodation.arrival_date)} au
           {transformDateISOtoString(oneAccomodation.departure_date)}</h4>
          <p><Info color="#2B7AFD" size={15} /> Mémo: feffzef efezffeezf ezfezf ezfezf ezfez fezfe fe f ezf ezfezf exsx</p>
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
// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default CardAccommodation;
