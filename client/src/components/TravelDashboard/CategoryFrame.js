import React from 'react';
import PropTypes from 'prop-types';
import { PlusCircle } from 'react-feather';
import CardAccommodation from './CardAccommodation';
import CardTransport from './CardTransport';
import CardActivity from './CardActivity';
import './styles.scss';

const CategoryFrame = ({
  category, textButton, handleAddElement, data, EditAllowed, setcheckedAccommodations, checkedAccommodations, setcheckedTransports, checkedTransports, setcheckedActivities, checkedActivities,
}) => (
    <div className="category-container">
      <div className="headerWithAddThingMenu">
        <h2>{category}</h2>
        <button
          type="button"
          className="validate--button"
          onClick={(event) => handleAddElement(event)}
          value={category}
        >
          <PlusCircle color="#fff" />
          <p>{textButton}</p>
        </button>
      </div>

      <div className="cards__container">
        {(category === 'accommodation') ? data.map((accomodation) => <CardAccommodation key={accomodation.id} {...accomodation} EditAllowed={EditAllowed} setcheckedAccommodations={setcheckedAccommodations} checkedAccommodations={checkedAccommodations} />) : null}
        {(category === 'transport') ? data.map((transport) => <CardTransport key={transport.id} {...transport} EditAllowed={EditAllowed} setcheckedTransports={setcheckedTransports} checkedTransports={checkedTransports} />) : null}
        {(category === 'activity') ? data.map((activity) => <CardActivity key={activity.id} {...activity} EditAllowed={EditAllowed} setcheckedActivities={setcheckedActivities} checkedActivities={checkedActivities} />) : null}
      </div>
    </div>
  );

CategoryFrame.propTypes = {
  category: PropTypes.string.isRequired,
  textButton: PropTypes.string.isRequired,
  handleAddElement: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  EditAllowed: PropTypes.bool.isRequired,
};

export default CategoryFrame;
