import {
  CHANGE_FIELD_VALUE,
  SAVE_USER,
  SET_LOGGED,
  SET_ERROR,
  SET_LOADING_STATE,
  LOGOUT,
} from 'src/actions/user';

const initialState = {
  loading: true,
  loggedIn: false,
  session: {},
  error: null,
  login: {
    email: '',
    password: '',
    remember: true,
  },
  signup: {
    email: '',
    first_name: '',
    last_name: '',
    password: '',
    password_confirm: '',
  },
  profile: {
    first_name: '',
    last_name: '',
    email: '',
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
        loggedIn: action.user.logged,
        session: action.user.session,
        profile: {
          first_name: action.user.session.first_name,
          last_name: action.user.session.last_name,
          email: action.user.session.email,
        },
      };
    case SET_LOGGED:
      return {
        ...state,
        loggedIn: action.logged,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case SET_LOADING_STATE:
      return {
        ...state,
        loading: action.loading,
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        session: {},
      };
    default:
      return state;
  }
};

export default user;
