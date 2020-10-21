/* eslint-disable no-case-declarations */
import { SUBMIT_TRAVEL_FORM } from 'src/actions/travels';

import { baseURL } from 'src/config';
import axios from 'axios';

const travelMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_TRAVEL_FORM:
      const owner = store.getState().user;
      console.log(owner);
      axios.post(`${baseURL}/create-travel`, action.data)
        .then((res) => {
          console.log(`voyage créé : ${res.data}`);
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
