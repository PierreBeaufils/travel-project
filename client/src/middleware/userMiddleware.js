/* eslint-disable no-case-declarations */
import { HANDLE_LOGIN, saveUser } from 'src/actions/user';

import { baseURL } from 'src/config';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_LOGIN:
      store.dispatch(saveUser());
      /* Get the user state from the store and post request to the server
      const state = store.getState();
      const { email, password } = state.user;
      axios.post(`${baseURL}/login`, { email, password }, { withCredentials: true })
        .then((response) => {
          store.dispatch(saveUser(response.data));
          console.log(response.data);
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
        */
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
