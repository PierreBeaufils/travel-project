/* eslint-disable no-case-declarations */
import {
  SUBMIT_TRAVEL_FORM,
  FETCH_TRAVELS,
  loadingTravels,
  saveTravels,
  errorMessage,
} from 'src/actions/travels';
import { fetchUserData } from 'src/actions/user';
import { useHistory } from 'react-router-dom';

import { baseURL } from 'src/config';
import axios from 'axios';

const travelMiddleware = (store) => (next) => (action) => {
  const { id } = store.getState().user.session;
  switch (action.type) {
    case SUBMIT_TRAVEL_FORM: // REDIRECTION ET ERREUR A LA SOUMISSION DU FORMULAIRE A AJOUTER
      axios.post(`${baseURL}/create-travel`, action.data)
        .then((res) => {
          console.log(`voyage créé : ${res.data}`);
          next(action);
        })
        .catch((e) => {
          store.dispatch(errorMessage(e));
        });
      break;
    case FETCH_TRAVELS:
      store.dispatch(loadingTravels(true));
      axios.get(`${baseURL}/user-travels/${id}`)
        .then((res) => {
          console.log(`récupération des voyages: ${res.data}`);
          store.dispatch(saveTravels(res.data));
        })
        .catch((e) => {
          store.dispatch(errorMessage(e));
        })
        .finally(() => {
          store.dispatch(loadingTravels(false));
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default travelMiddleware;
