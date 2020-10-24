/* eslint-disable no-case-declarations */
import {
  SUBMIT_TRAVEL_FORM,
  FETCH_TRAVELS,
  FETCH_USER_TRAVELS_DATA,
  setLoadingState,
  fetchTravels,
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
    case SUBMIT_TRAVEL_FORM:
      axios.post(`${baseURL}/create-travel`, action.data)
        .then((res) => {
          console.log(`voyage créé : ${res.data}`);
          next(action);
        })
        .catch((e) => {
          store.dispatch(errorMessage(e));
        });
      break;
    case FETCH_USER_TRAVELS_DATA: // A VOIR CE CASE A MODIFIER !!!!
      const test = () => async () => {
        try {
          store.dispatch(setLoadingState(true));
          await store.dispatch(fetchTravels());
          await store.dispatch(fetchUserData());
          store.dispatch(setLoadingState(false));
        }
        catch (error) {
          store.dispatch(errorMessage(error));
        }
      };
      test();
      next(action);
      break;
    case FETCH_TRAVELS:
      axios.get(`${baseURL}/user-travels/${id}`)
        .then((res) => {
          console.log(`récupération des voyages: ${res.data}`);
          store.dispatch(saveTravels(res.data));
          next(action);
        })
        .catch((e) => {
          store.dispatch(errorMessage(e));
        });
      break;
    default:
      next(action);
      break;
  }
};

export default travelMiddleware;
