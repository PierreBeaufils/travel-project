import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';

import './createTravelForm.scss';

const CreateTravelForm = () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const todayDateISOString = new Date().toISOString().split('T')[0]; // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  console.log(watch('example')); // watch input value by passing the name of it
  const [startDate, setStartDate] = useState(todayDateISOString);
  const [endDate, setEndDate] = useState(addOneDay(startDate));

  // fonction permettant d'ajouter un jour (en sortie) à une date en entrée
  function addOneDay(dateString) {
    const result = new Date(dateString);
    result.setDate(result.getDate() + 1);
    return result.toISOString().split('T')[0];
  }

  return (
    <div className="travel__create-form">
      <div className="main-form">
        <h2>Créer un voyage</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="destination">Destination
            <input name="destination" ref={register({ required: true })} />
            {errors.destination && <span className="warning-text">Veuillez saisir une destination</span>}
          </label>
          <label htmlFor="theme">Thème
            <select name="theme" ref={register({ required: true })}>
              <option value="">Veuillez choisir un thème</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Loisir">Loisir</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.theme && <span className="warning-text">Veuillez selectionner un thème</span>}
          </label>
          <label htmlFor="startDate">Date de départ
            <input
              name="startDate"
              ref={register({ required: true })}
              type="date"
              value={startDate}
              min={todayDateISOString}
            // max="2017-04-30"
              onChange={(e) => setStartDate(e.target.value)}
            />
            {errors.startDate && <span className="warning-text">Veuillez selectionner une date de départ</span>}
          </label>
          <label htmlFor="finishDate">Date de fin
            <input
              name="finishDate"
              ref={register({ required: true })}
              type="date"
              min={addOneDay(startDate)}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            {errors.finishDate && <span className="warning-text">Veuillez selectionner une date de fin</span>}
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
// CreateTravelForm.propTypes = {

// };

// CreateTravelForm.defaultProps = {

// };

export default CreateTravelForm;
