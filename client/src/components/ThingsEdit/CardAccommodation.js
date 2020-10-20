import React from 'react';
import { PlusCircle, CheckSquare, Trash2 } from 'react-feather';
import ModalDelete from './ModalDelete';
import ModalCardDescription from './ModalCardDescription';
import useModal from './useModal';
// import PropTypes from 'prop-types';
import './styles.scss';

const CardAccommodation = () => {
  const { isShowingModalDeleteCard, toggleModalDeleteCard } = useModal('ModalDeleteCard');
  const { isShowingModalCardDescription, toggleModalCardDescription } = useModal('ModalCardDescription');

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

    <div className="cards__container">
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
          <h3>Séjour à l'établisement Hotel machin</h3>
          <h4>Lieu Ville De machin</h4>
          <h4>Du 01/01/2002 au 02/05/2020</h4>
          <p>Mémo: feffzef efezffeezf ezfezf ezfezf ezfez fezfe fe f ezf ezfezf exsx</p>
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
