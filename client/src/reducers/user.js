import { CHANGE_FIELD, SAVE_USER } from 'src/actions/user';

const initialState = {
  email: '',
  password: '',
  logged: false,
  infos: {},
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SAVE_USER:
      return {
        ...state,
        logged: true,
      };
    default:
      return state;
  }
};

export default user;
