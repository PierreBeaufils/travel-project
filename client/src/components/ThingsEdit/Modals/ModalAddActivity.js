/* eslint-disable max-len */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { Users, XSquare, Info, MapPin, DollarSign, LogIn, LogOut, Map, Send, FileText, Home, Calendar, Clock, } from 'react-feather';
// import PropTypes from 'prop-types';
import '../styles.scss';

const ModalAddActivity = ({ isShowing, hide }) => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const todayDateISOString = new Date().toISOString().slice(0, -8); // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  console.log(watch('example')); // watch input value by passing the name of it

  const [startDate, setStartDate] = useState(todayDateISOString);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(e.target.value);
  };

  // fonction permettant d'ajouter un jour (en sortie) à une date en entrée
  function addOneDay(dateString) {
    const result = new Date(dateString);
    result.setDate(result.getDate() + 1);
    return result.toISOString().split('T')[0];
  }

  return (isShowing ? ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">

            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true"><XSquare
                color="#FF7A32"
              />
              </span>

            </button>
          </div>
          <div className="modal_content">
            <div>
              <h3>Ajouter une activité</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="main-form addThingDesktop">
                <label htmlFor="name">Nom de l'activité
                  <input name="name" ref={register()} type="text" />
                </label>
                <label htmlFor="topic">Type d'activité
                  <input name="topic" ref={register()} type="text" />
                </label>
                <label htmlFor="date"><Calendar color="#2B7AFD" size={15} />Date
                  <input
                    name="date"
                    ref={register()}
                    type="datetime-local"
                    value={startDate}
                    min={todayDateISOString}
                    onChange={(e) => handleStartDateChange(e)}
                  />
                </label>
                <label htmlFor="duration"><Clock color="#2B7AFD" size={15} />Durée prévisionnelle
                  <input name="duration" ref={register()} type="time" />
                </label>
                <label htmlFor="place"><MapPin color="#2B7AFD" size={15} />Lieu
                  <input name="place" ref={register()} type="text" />
                </label>
                <label htmlFor="description"><Info color="#2B7AFD" size={15} />Description
                  <input name="description" ref={register()} type="text" />
                </label>
                <label htmlFor="unit_price"><DollarSign color="#2B7AFD" size={15} />Prix unitaire (€)
                  <input
                    name="unit_price"
                    ref={register()}
                    type="number"
                    min="0"
                  />
                </label>
                <label htmlFor="quantity"><Users color="#2B7AFD" size={15} />Nombre prévu de participants
                  <input
                    name="quantity"
                    ref={register({ required: true })}
                    type="number"
                    step="1"
                    min="0"
                  />
                </label>
                <input
                  type="submit"
                  value="Ajouter l'activité"
                />
              </form>
            </div>
            <div className="modal_buttons_container">
              <p>ici eventuellement boutons</p>
            </div>
          </div>
        </div>
      </div>
    </>, document.body,
  ) : null);
};

// ModalAddActivity.propTypes = {

// };

// ModalAddActivity.defaultProps = {

// };

export default ModalAddActivity;