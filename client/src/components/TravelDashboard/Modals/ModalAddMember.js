import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import {
  XSquare, Mail,
} from 'react-feather';
import { baseURL } from 'src/config';
import '../styles.scss';

const ModalAddMembers = ({
  isShowing, hide, travelID,
}) => {
  const {
    register, handleSubmit, errors,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`${baseURL}/${travelID}`, data) // route à définir !!
      .then((res) => {
        console.log(res.data);
        hide();
        // fetchOneTravel(travelID);
      });
  };

  return (isShowing ? ReactDOM.createPortal(
    <>
      <div className="modal-overlay" />
      <div className="modal-wrapper" aria-modal aria-hidden tabIndex={-1} role="dialog">
        <div className="modal">
          <div className="modal-header">

            <button type="button" className="modal-close-button" data-dismiss="modal" aria-label="Close" onClick={hide}>
              <span aria-hidden="true">
                <XSquare color="#FF7A32" />
              </span>

            </button>
          </div>
          <div className="modal_content">
            <div>
              <h3 style={{ textAlign: 'center' }}>Ajouter un voyageur</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="main-form addThingDesktop"> {/* Changer le nom de la classe ! */}

                <label htmlFor="memo">
                  <Mail color="#2B7AFD" size={15} />
                  <span className="fieldName">Email </span>
                  <input name="email" ref={register({ required: true })} type="email" />
                </label>

                <input
                  type="submit"
                  value="Envoyer l'invitation"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>, document.body,
  ) : null);
};

ModalAddMembers.propTypes = {
  travelID: PropTypes.number,
};

ModalAddMembers.defaultProps = {
  travelID: null,
};

export default ModalAddMembers;
