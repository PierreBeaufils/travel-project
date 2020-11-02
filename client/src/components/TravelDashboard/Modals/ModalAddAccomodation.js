import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useForm } from 'react-hook-form';
import {
  XSquare, MapPin, LogIn, LogOut, DollarSign, Info, Users,
} from 'react-feather';
import { baseURL } from 'src/config';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import AlgoLeaflet from '../../AlgoLeaflet';

// import PropTypes from 'prop-types';
import '../styles.scss';

const ModalAddAccomodation = ({ isShowing, hide, oneAccomodation, travelID, fetchOneTravel }) => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const history = useHistory();


  const onSubmit = (data) => {
    console.log(data);
    // data.selected = false;
    axios.post(`${baseURL}/travel/${travelID}/accommodation`, data)
      .then((res) => {
        console.log(`voyage envoyé vers back : ${res.data}`);
        console.log(data);
        hide();
        fetchOneTravel(travelID);
        //history.push(`/voyage/${travelID}`);
      })
      .catch((e) => {
        // store.dispatch(errorMessage(e));
        console.log(`erreur : ${e}`);
      });
    console.log(data);
  };
  const todayDateISOString = new Date().toISOString().split('T')[0]; // variable qui contient la date sauvegardée en string ISO (format géré par le formulaire HTML)

  console.log(watch('example')); // watch input value by passing the name of it

  const [startDate, setStartDate] = useState(todayDateISOString);
  const [endDate, setEndDate] = useState(addOneDay(startDate));
  const [locationData, setLocationData] = useState({
    city: '',
    latLong: '{"lat":0.000,"lng":0.000}',
    address: '',
  });

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
    setEndDate(addOneDay(startDate));
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
              <h3>Ajouter un hébergement</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="main-form addThingDesktop">
                <label htmlFor="name">Nom de l'établissement
                  <input name="name" ref={register()} type="text" />
                </label>
                <label htmlFor="address"><MapPin color="#2B7AFD" size={15} />Adresse de l'établissement
                  {/* <input name="address" ref={register()} type="text" à effacer car utilisation l'input d'Algolia*/}
                  <AlgoLeaflet
                    isMapRequired={false}
                    isAdressInputRequired
                    setLocationData={setLocationData}
                  />
                </label>
                <label htmlFor="city"><MapPin color="#2B7AFD" size={15} />Ville
                  <input name="city" ref={register({ required: true })} type="text" value={locationData.city} />
                  <input name="address" ref={register()} type="hidden" value={locationData.address} />
                  <input name="coordinate" ref={register()} type="hidden" value={`${locationData.latLong.lat}, ${locationData.latLong.lng}`} />
                  {errors.city && <span className="warning-text">Veuillez saisir une ville</span>}
                </label>
                <label htmlFor="availability">Nombre de places disponibles
                  <input name="availability" ref={register()} type="number" />
                </label>
                <label htmlFor="arrival_date"><LogIn color="#2B7AFD" size={15} />Date d'arrivée
                  <input
                    name="arrival_date"
                    ref={register({ required: true })}
                    type="date"
                    value={startDate}
                    min={todayDateISOString}
                    onChange={(e) => handleStartDateChange(e)}
                  />
                  {errors.startDate && <span className="warning-text">Veuillez selectionner une date de d'arrivée</span>}
                </label>
                <label htmlFor="departure_date"><LogOut color="#2B7AFD" size={15} />Date de départ
                  <input
                    name="departure_date"
                    ref={register({ required: true })}
                    type="date"
                    min={addOneDay(startDate)}
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                  {errors.finishDate && <span className="warning-text">Veuillez selectionner une date de départ</span>}
                </label>

                <label htmlFor="unit_price"><DollarSign color="#2B7AFD" size={15} />Prix unitaire (€)
                  <input name="unit_price" ref={register()} type="number" />
                </label>
                <label htmlFor="quantity"><Users color="#2B7AFD" size={15} />Nombre prévu de voyageurs
                  <input name="quantity" ref={register()} type="number" />
                </label>
                <label htmlFor="information"><Info color="#2B7AFD" size={15} />Informations
                  <input name="information" ref={register()} type="text" />
                </label>
                <input
                  type="submit"
                  value="Ajouter l'hébergement"
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

// ModalAddAccomodation.propTypes = {

// };

// ModalAddAccomodation.defaultProps = {

// };

export default ModalAddAccomodation;
