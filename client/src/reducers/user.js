import { CHANGE_FIELD_VALUE, SAVE_USER, SET_ERROR } from 'src/actions/user';

const initialState = {
  loggedIn: false,
  session: null,
  error: null,
  login: {
    email: '',
    password: '',
    remember: true,
  },
  signup: {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
  },
  profile: {
    firstName: '',
    lastName: '',
  },
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.field]: action.value,
        },
      };
    case SAVE_USER:
      return {
        ...state,
        loggedIn: true,
        session: action.user,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default user;
