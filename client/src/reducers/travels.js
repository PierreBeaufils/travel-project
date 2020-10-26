<<<<<<< HEAD
import { SAVE_TRAVELS, SET_LOADING_STATE, CHANGE_FIELD_VALUE } from 'src/actions/travels';
=======
import {
  SAVE_TRAVELS, LOADING_TRAVELS, CHANGE_FIELD_VALUE, ERROR_MESSAGE,
} from 'src/actions/travels';
>>>>>>> client

const initialState = {
  errorMessage: null,
  travels: [],
<<<<<<< HEAD
  loadingDatas: false,
=======
  loadingTravels: false,
>>>>>>> client
  travelFields: {},
};

const travels = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TRAVELS:
      return {
        ...state,
        travels: action.travels,
      };
    case LOADING_TRAVELS:
      return {
        ...state,
<<<<<<< HEAD
        loadingDatas: action.loading,
=======
        loadingTravels: action.loading,
>>>>>>> client
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
<<<<<<< HEAD
=======
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
>>>>>>> client
      };
    default:
      return state;
  }
};

export default travels;
