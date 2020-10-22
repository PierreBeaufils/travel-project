/* eslint-disable no-case-declarations */
import {
  HANDLE_SIGNUP,
  HANDLE_LOGIN,
  LOGIN_CHECK,
  LOGOUT,
  setError,
  saveUser,
  setLoadingState,
} from 'src/actions/user';

import { baseURL } from 'src/config';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case HANDLE_SIGNUP:
      const { signup } = store.getState().user;
      axios.post(`${baseURL}/signup`, signup)
        .then((response) => {
          if (response.status !== 200) {
            store.dispatch(setError(response.data));
          }
          else {
            store.dispatch(saveUser(response.data));
            store.dispatch(setError(null));
          }
        })
        .catch((e) => {
          console.error(e);
        });
      next(action);
      break;
    case HANDLE_LOGIN:
      const { login } = store.getState().user;
      axios.post(`${baseURL}/login`, login, { withCredentials: true })
        .then((response) => {
          if (response.status !== 200) {
            store.dispatch(setError(response.data));
          }
          else {
            store.dispatch(saveUser(response.data));
            store.dispatch(setError(null));
          }
        })
        .catch((e) => {
          console.error(e);
        });
      next(action);
      break;
    case LOGIN_CHECK:
      store.dispatch(setLoadingState(true));
      axios.post(`${baseURL}/isLogged`, {}, { withCredentials: true })
        .then((response) => {
          store.dispatch(saveUser(response.data));
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          store.dispatch(setLoadingState(false));
        });
      next(action);
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
