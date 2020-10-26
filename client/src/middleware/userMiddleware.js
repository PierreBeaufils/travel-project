/* eslint-disable no-case-declarations */
import {
  HANDLE_SIGNUP,
  HANDLE_LOGIN,
  LOGIN_CHECK,
  LOGOUT,
  HANDLE_EDIT_PROFILE,
  FETCH_USER_DATA,
<<<<<<< HEAD
=======
  VERIFY_TOKEN,
  validateRegister,
  setTokenVerified,
  setTokenMessage,
>>>>>>> client
  fillProfile,
  setError,
  saveUser,
  setLoadingState,
<<<<<<< HEAD
  setLoadingUser,
} from 'src/actions/user';

=======
  loadingUser,
} from 'src/actions/user';
>>>>>>> client
import { baseURL } from 'src/config';
import axios from 'axios';

const userMiddleware = (store) => (next) => (action) => {
  const { id } = store.getState().user.session;
  const { profile } = store.getState().user;
  const { signup } = store.getState().user;
  switch (action.type) {
    case HANDLE_SIGNUP:
<<<<<<< HEAD
      console.log(signup);
=======
>>>>>>> client
      axios.post(`${baseURL}/signup`, signup)
        .then((response) => {
          if (response.status !== 200) {
            store.dispatch(setError(response.data));
          }
          else {
<<<<<<< HEAD
            store.dispatch(saveUser(response.data)); // A voir si on enlève cette action !!
            store.dispatch(setError(null));
          }
=======
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
      store.dispatch(setTokenVerified(false));
      axios.get(`${baseURL}/mail`, action.token)
        .then((response) => {
          store.dispatch(setTokenMessage(response.data));
>>>>>>> client
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          store.dispatch(setTokenVerified(true));
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
<<<<<<< HEAD
=======
      store.dispatch(loadingUser(true));
>>>>>>> client
      axios.get(`${baseURL}/traveler/${id}`)
        .then((response) => {
          store.dispatch(fillProfile(response.data));
        })
        .catch((e) => {
          console.error(e);
<<<<<<< HEAD
=======
        })
        .then(() => {
          store.dispatch(loadingUser(false));
>>>>>>> client
        });
      next(action);
      break;
    default:
      next(action);
      break;
  }
};

export default userMiddleware;
