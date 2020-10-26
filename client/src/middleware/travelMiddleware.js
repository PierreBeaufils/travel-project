/* eslint-disable no-case-declarations */
import {
  SUBMIT_TRAVEL_FORM,
  FETCH_TRAVELS,
<<<<<<< HEAD
  FETCH_USER_TRAVELS_DATA,
  setLoadingState,
  fetchTravels,
  saveTravels,
} from 'src/actions/travels';
import { fetchUserData } from 'src/actions/user';
=======
  loadingTravels,
  saveTravels,
  errorMessage,
} from 'src/actions/travels';
>>>>>>> client

import { baseURL } from 'src/config';
import axios from 'axios';

const travelMiddleware = (store) => (next) => (action) => {
  const { id } = store.getState().user.session;
  switch (action.type) {
<<<<<<< HEAD
    case SUBMIT_TRAVEL_FORM:
      console.log(action.data);
=======
    case SUBMIT_TRAVEL_FORM: // REDIRECTION ET ERREUR A LA SOUMISSION DU FORMULAIRE A AJOUTER
>>>>>>> client
      axios.post(`${baseURL}/create-travel`, action.data)
        .then((res) => {
          console.log(`voyage créé : ${res.data}`);
          next(action);
        })
        .catch((e) => {
          store.dispatch(errorMessage(e));
        });
      break;
<<<<<<< HEAD
    case FETCH_USER_TRAVELS_DATA: // NE FONCTIONNE PAS A REFAIRE !!
      store.dispatch(setLoadingState(true));
      store.dispatch(fetchTravels());
      store.dispatch(fetchUserData());
      store.dispatch(setLoadingState(false));
      next(action);
      break;
    case FETCH_TRAVELS:
=======
    case FETCH_TRAVELS:
      store.dispatch(loadingTravels(true));
>>>>>>> client
      axios.get(`${baseURL}/user-travels/${id}`)
        .then((res) => {
          console.log(`récupération des voyages: ${res.data}`);
          store.dispatch(saveTravels(res.data));
<<<<<<< HEAD
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
=======
        })
        .catch((e) => {
          store.dispatch(errorMessage(e));
        })
        .finally(() => {
          store.dispatch(loadingTravels(false));
        });
      next(action);
>>>>>>> client
      break;
    default:
      next(action);
      break;
  }
};

export default travelMiddleware;
