/* eslint-disable no-case-declarations */
import {
  SUBMIT_TRAVEL_FORM,
  FETCH_TRAVELS,
  FETCH_USER_TRAVELS_DATA,
  setLoadingState,
  fetchTravels,
  saveTravels,
} from 'src/actions/travels';
import { fetchUserData } from 'src/actions/user';

import { baseURL } from 'src/config';
import axios from 'axios';

const travelMiddleware = (store) => (next) => (action) => {
  const { id } = store.getState().user.session;
  switch (action.type) {
    case SUBMIT_TRAVEL_FORM:
      console.log(action.data);
      axios.post(`${baseURL}/create-travel`, action.data)
        .then((res) => {
          console.log(`voyage créé : ${res.data}`);
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case FETCH_USER_TRAVELS_DATA:
      store.dispatch(setLoadingState(true));
      store.dispatch(fetchTravels());
      store.dispatch(fetchUserData());
      store.dispatch(setLoadingState(false));
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
          console.error(e);
        });
      break;
    default:
      next(action);
      break;
  }
};

export default travelMiddleware;
