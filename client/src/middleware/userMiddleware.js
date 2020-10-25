/* eslint-disable no-case-declarations */
import {
  HANDLE_SIGNUP,
  HANDLE_LOGIN,
  LOGIN_CHECK,
  LOGOUT,
  HANDLE_EDIT_PROFILE,
  FETCH_USER_DATA,
  VERIFY_TOKEN,
  validateRegister,
  fillProfile,
  setError,
  saveUser,
  setLoadingState,
  loadingUser,
} from 'src/actions/user';
import { baseURL } from 'src/config';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  const { id } = store.getState().user.session;
  const { profile } = store.getState().user;
  const { signup } = store.getState().user;
  switch (action.type) {
    case HANDLE_SIGNUP:
      axios.post(`${baseURL}/signup`, signup)
        .then((response) => {
          if (response.status !== 200) {
            store.dispatch(setError(response.data));
          }
          else {
            store.dispatch(setError(null));
            store.dispatch(validateRegister(true));
          }
        })
        .catch((e) => {
          console.error(e);
        });
      next(action);
      break;
    case VERIFY_TOKEN:
      console.log(action.token);
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
    case HANDLE_EDIT_PROFILE:
      axios.patch(`${baseURL}/traveler/${id}`, profile)
        .then(() => {
          next(action);
        })
        .catch((e) => {
          console.error(e);
        });
      break;
    case FETCH_USER_DATA:
      store.dispatch(loadingUser(true));
      axios.get(`${baseURL}/traveler/${id}`)
        .then((response) => {
          store.dispatch(fillProfile(response.data));
        })
        .catch((e) => {
          console.error(e);
        })
        .then(() => {
          store.dispatch(loadingUser(false));
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
