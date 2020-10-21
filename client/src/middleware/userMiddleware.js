/* eslint-disable no-case-declarations */
import { HANDLE_SIGNUP, HANDLE_LOGIN, LOGOUT, saveUser } from 'src/actions/user';

import { baseURL } from 'src/config';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNUP:
      const { signup } = store.getState().user;
      console.log(signup);
      axios.post(`${baseURL}/signup`, signup)
        .then((response) => {
          // store.dispatch(saveUser(response.data));
          console.log(response.data);
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case HANDLE_LOGIN:
      const { login } = store.getState().user;
      axios.post(`${baseURL}/login`, login, { withCredentials: true })
        .then((response) => {
          store.dispatch(saveUser(response.data));
          console.log('connexion réussie');
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case LOGOUT:
      axios.post(`${baseURL}/logout`, {}, { withCredentials: true })
        .then(() => {
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

export default userMiddleware;
