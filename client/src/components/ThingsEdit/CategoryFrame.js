import React from 'react';
import { PlusCircle, CheckSquare, Trash2 } from 'react-feather';
import CardAccommodation from './CardAccommodation';
import CardTransport from './CardTransport';
import CardActivity from './CardActivity';
// import PropTypes from 'prop-types';
import './styles.scss';

const CategoryFrame = ({ categoryName, textButton, handleAddThing }) => {
  const test = 'test';

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

    <div className="category-container">
      <div className="headerWithAddThingMenu">
        <h2>{categoryName}</h2>
        <div
          className="create--button"
          onClick={() => handleAddThing()}
        >
          <PlusCircle
            color="#fff"
          />
          <p>{textButton}</p>
        </div>
      </div>
      <CardAccommodation />
    </div>
  );
};
// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default CategoryFrame;
