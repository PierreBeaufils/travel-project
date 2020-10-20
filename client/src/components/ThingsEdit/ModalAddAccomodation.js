import React from 'react';
import ReactDOM from 'react-dom';
import { AlertTriangle, XSquare, Trash2 } from 'react-feather';
// import PropTypes from 'prop-types';
import './styles.scss';

const ModalAddAccomodation = ({ isShowing, hide }) => (isShowing ? ReactDOM.createPortal(
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
          <AlertTriangle
            color="#FF7A32"
          />
          <p>
            ICI MODALE AJOUT HEBERGEMENT
          </p>
          <div className="modal_buttons_container">
            <div
              className="create--button"
            >
              <Trash2
                color="#FF7A32"
              />
              <p>Supprimer</p>
            </div>
            <div
              className="create--button"
            >
              <XSquare
                color="#fff"
              />
              <p>Annuler</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </>, document.body,
) : null);

// ModalAddAccomodation.propTypes = {

// };

// ModalAddAccomodation.defaultProps = {

// };

export default ModalAddAccomodation;
