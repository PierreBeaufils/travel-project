import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './createTravelForm.scss';

const TravelForm = ({
  submitTravelForm, changeFieldValue, travel, ownerId,
}) => {
  const {
    register, errors,
  } = useForm();
  const todayDateISOString = new Date().toISOString().split('T')[0]; // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  // Function to add 1 day from a starting date
  function addOneDay(dateString) {
    const result = new Date(dateString);
    result.setDate(result.getDate() + 1);
    return result.toISOString().split('T')[0];
  }

  const [title, setTitle] = useState(travel.title || '');
  const [destination, setDestination] = useState(travel.destination || '');
  // const [theme, setTheme] = useState(travel.theme || '');
  const [startDate, setStartDate] = useState(travel.departure_date || todayDateISOString);
  const [endDate, setEndDate] = useState(travel.return_date || addOneDay(startDate));

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append('owner', ownerId);
    data.set('departure_date', new Date(startDate).toISOString());
    data.set('return_date', new Date(endDate).toISOString());

    for (const pair of data.entries()) {
      console.log(`${pair[0]}, ${pair[1]}`);
    }

    submitTravelForm(data);
  };
  /*
    const handleChange = (event) => {
      console.log(event.target.value);
      changeFieldValue(event.target.name, event.target.value);
    };
  */
  return (
    <div className="travel__create-form">
      <div className="main-form">
        <h2>Créer un voyage</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="title">Titre du voyage
            <input name="title" type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} ref={register({ required: true })} />
            {errors.title && <span className="warning-text">Veuillez saisir un titre</span>}
          </label>

          <label htmlFor="destination">Destination
            <input name="destination" id="destination" type="text" value={destination} onChange={(e) => setDestination(e.target.value)} ref={register({ required: true })} />
            {errors.destination && <span className="warning-text">Veuillez saisir une destination</span>}
          </label>
          {/*
          <label htmlFor="theme">Thème
            <select name="theme" id="theme" ref={register({ required: true })}
            value={theme} onChange={(e) => setTheme(e.target.value)}
            placeholder="Veuillez choisir un thème">
              <option value="" disabled>Veuillez choisir un thème</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Loisir">Loisir</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.theme && <span className="warning-text">Veuillez selectionner un thème</span>}
          </label>
          */}

          <label htmlFor="departure_date">Date de départ
            <input
              name="departure_date"
              ref={register({ required: true })}
              type="date"
              value={startDate}
              min={todayDateISOString}
              onChange={(e) => setStartDate(e.target.value)}
            />
            {errors.startDate && <span className="warning-text">Veuillez selectionner une date de départ</span>}
          </label>

          <label htmlFor="return_date">Date de fin
            <input
              name="return_date"
              ref={register({ required: true })}
              type="date"
              min={addOneDay(startDate)}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            {errors.return_date && <span className="warning-text">Veuillez selectionner une date de fin</span>}
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

TravelForm.defaultProps = {
  travel: null,
  changeFieldValue: null,
};

TravelForm.propTypes = {
  submitTravelForm: PropTypes.func.isRequired,
  ownerId: PropTypes.number.isRequired,
  changeFieldValue: PropTypes.func,
  travel: PropTypes.object,
};

export default TravelForm;
