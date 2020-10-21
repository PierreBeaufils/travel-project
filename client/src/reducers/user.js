import { CHANGE_FIELD_VALUE, SAVE_USER } from 'src/actions/user';

const initialState = {
  loggedIn: false,
  session: null,
  login: {
    email: '',
    password: '',
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
    default:
      return state;
  }
};

export default user;
