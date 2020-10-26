import React from 'react';
import { PlusCircle, CheckSquare, Trash2 } from 'react-feather';
import CardAccommodation from './CardAccommodation';
import CardTransport from './CardTransport';
import CardActivity from './CardActivity';
// import PropTypes from 'prop-types';
import './styles.scss';

const CategoryFrame = ({
  categoryName, textButton, handleAddThing, data,
}) => {
  const test = 'test';
  console.log(data);

  return (

    <div className="category-container">
      <div className="headerWithAddThingMenu">
        <h2>{categoryName}s</h2>
        <div
          className="validate--button"
          onClick={() => handleAddThing()}
        >
          <PlusCircle
            color="#fff"
          />
          <p>{textButton}</p>
        </div>
      </div>
      <div className="cards__container">
        {(categoryName === 'Hébergement') ? data.map((oneAccomodation) => <CardAccommodation key={oneAccomodation.id} {...oneAccomodation} />) : null}
        {(categoryName === 'Transport') ? data.map((oneTransport) => <CardTransport key={oneTransport.id} {...oneTransport} />) : null}
        {(categoryName === 'Activité') ? data.map((oneActivity) => <CardActivity key={oneActivity.id} {...oneActivity} />) : null}

      </div>
    </div>
  );
};
// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default CategoryFrame;
