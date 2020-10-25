/* eslint-disable max-len */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import { Users, XSquare, MapPin, DollarSign, LogIn, LogOut, Send, FileText, Home, Info, Clock, } from 'react-feather';
// import PropTypes from 'prop-types';
import '../styles.scss';

const ModalAddTransport = ({ isShowing, hide }) => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const todayDateISOString = new Date().toISOString().slice(0, -8); // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  console.log(watch('example')); // watch input value by passing the name of it

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

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
              <h3>Ajouter un transport</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="main-form addThingDesktop">

                <label htmlFor="from"><MapPin color="#2B7AFD" size={15} />Lieu de départ
                  <input name="from" ref={register({ required: true })} type="text" />
                  {errors.from && <span className="warning-text">Veuillez selectionner un lieu de départ</span>}
                </label>
                <label htmlFor="to"><MapPin color="#2B7AFD" size={15} />Lieu d'arrivée
                  <input name="to" ref={register({ required: true })} type="text" />
                  {errors.to && <span className="warning-text">Veuillez selectionner un lieu d'arrivée</span>}
                </label>
                <label htmlFor="arrival_date"><LogIn color="#2B7AFD" size={15} />Date et heure de départ
                  <input
                    name="arrival_date"
                    ref={register({ required: true })}
                    type="datetime-local"
                    // value={startDate}
                    pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}T[0-9]{2}:[0-9]{2}"
                    min={todayDateISOString}
                    max={endDate}
                    onChange={(e) => setStartDate(new Date(e.target.value).toISOString().slice(0, -8))}
                  />
                  {errors.startDate && <span className="warning-text">Veuillez selectionner une date de départ</span>}
                </label>
                <label htmlFor="departure_date"><LogOut color="#2B7AFD" size={15} />Date et heure de départ d'arrivée
                  <input
                    name="departure_date"
                    ref={register()}
                    type="datetime-local"
                    min={startDate}
                    // value={endDate}
                    onChange={(e) => setEndDate(new Date(e.target.value).toISOString().slice(0, -8))}
                  />
                </label>
                <label htmlFor="type"><Send color="#2B7AFD" size={15} />Mode de transport
                  <input name="type" ref={register({ required: true })} type="text" />
                  {errors.type && <span className="warning-text">Veuillez saisir un type de transport</span>}
                </label>
                <label htmlFor="company"><Home color="#2B7AFD" size={15} />Société de transport
                  <input name="company" ref={register()} type="text" />
                </label>
                <label htmlFor="unit_price"><DollarSign color="#2B7AFD" size={15} />Prix unitaire (€)
                  <input
                    name="unit_price"
                    ref={register()}
                    type="number"
                    min="0"
                  />
                </label>
                <label htmlFor="quantity"><Users color="#2B7AFD" size={15} />Nombre prévu de voyageurs
                  <input
                    name="quantity"
                    ref={register({ required: true })}
                    type="number"
                    step="1"
                    min="0"
                  />
                  {errors.type && <span className="warning-text">Veuillez saisir un nombre prévu de voyageurs</span>}
                </label>
                <label htmlFor="memo"><Info color="#2B7AFD" size={15} />Informations complémentaires
                  <input name="memo" ref={register()} type="text" />
                </label>
                <label htmlFor="reservation_ref"><FileText color="#2B7AFD" size={15} />Référence de réservation
                  <input name="reservation_ref" ref={register()} type="text" />
                </label>

                <input
                  type="submit"
                  value="Ajouter le transport"
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

// ModalAddTransport.propTypes = {

// };

// ModalAddTransport.defaultProps = {

// };

export default ModalAddTransport;
