import {
  CHANGE_FIELD_VALUE,
  SAVE_USER,
  SET_LOGGED,
  SET_ERROR,
  SET_LOADING_STATE,
  SET_LOADING_USER,
  FILL_PROFILE,
  LOGOUT,
} from 'src/actions/user';

const initialState = {
  loading: true,
  loadingUser: true,
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
      };
    case SET_LOGGED:
      return {
        ...state,
        loggedIn: action.logged,
      };
    case FILL_PROFILE:
      return {
        ...state,
        profile: {
          first_name: action.infos.first_name,
          last_name: action.infos.last_name,
          email: action.infos.email,
        },
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
    case SET_LOADING_USER:
      return {
        ...state,
        loadingUser: action.loading,
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
