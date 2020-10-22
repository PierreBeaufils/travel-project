import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './createTravelForm.scss';

const TravelForm = ({ submitTravelForm, changeFieldValue, travelFields }) => {
  const {
    register, errors,
  } = useForm();
  const todayDateISOString = new Date().toISOString().split('T')[0]; // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  const [startDate, setStartDate] = useState(todayDateISOString);
  const [endDate, setEndDate] = useState(addOneDay(startDate));

  // fonction permettant d'ajouter un jour (en sortie) à une date en entrée
  function addOneDay(dateString) {
    const result = new Date(dateString);
    result.setDate(result.getDate() + 1);
    return result.toISOString().split('T')[0];
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    submitTravelForm();
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    changeFieldValue(event.target.name, event.target.value);
  };

  return (
    <div className="travel__create-form">
      <div className="main-form">
        <h2>Créer un voyage</h2>
        <form onSubmit={handleSubmit}>

          <label htmlFor="title">Titre du voyage
            <input name="title" type="text" id="title" onChange={handleChange} ref={register({ required: true })} />
            {errors.title && <span className="warning-text">Veuillez saisir un titre</span>}
          </label>

          <label htmlFor="destination">Destination
            <input name="destination" id="destination" type="text" onChange={handleChange} ref={register({ required: true })} />
            {errors.destination && <span className="warning-text">Veuillez saisir une destination</span>}
          </label>

          <label htmlFor="theme">Thème
            <select name="theme" id="theme" ref={register({ required: true })} onChange={handleChange} placeholder="Veuillez choisir un thème">
              <option value="" disabled>Veuillez choisir un thème</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Loisir">Loisir</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.theme && <span className="warning-text">Veuillez selectionner un thème</span>}
          </label>

          <label htmlFor="departure_date">Date de départ
            <input
              name="departure_date"
              ref={register({ required: true })}
              type="date"
              value={startDate}
              min={todayDateISOString}
              onChange={(e) => console.log(e.target.value)}
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

TravelForm.propTypes = {
  submitTravelForm: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  travelFields: PropTypes.object.isRequired,
};

export default TravelForm;
