import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './createTravelForm.scss';

const TravelForm = ({ travel, submitTravelForm, editTravelForm }) => {
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

  const handleCreate = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    submitTravelForm(data);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    editTravelForm(data);
  };

  return (
    <div className="travel__create-form">
      <div className="main-form">
        <h2>Créer un voyage</h2>
        <form onSubmit={travel ? handleUpdate : handleCreate}>

          <label htmlFor="title">Titre du voyage
            <input name="title" type="text" id="title" ref={register({ required: true })} />
            {errors.title && <span className="warning-text">Veuillez saisir un titre</span>}
          </label>

          <label htmlFor="destination">Destination
            <input name="destination" id="destination" type="text" ref={register({ required: true })} />
            {errors.destination && <span className="warning-text">Veuillez saisir une destination</span>}
          </label>

          <label htmlFor="theme">Thème
            <select name="theme" id="theme" ref={register({ required: true })} placeholder="Veuillez choisir un thème">
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
};

TravelForm.propTypes = {
  travel: PropTypes.object,
  submitTravelForm: PropTypes.func.isRequired,
  editTravelForm: PropTypes.func.isRequired,
};

export default TravelForm;
