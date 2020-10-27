import {
  SAVE_TRAVELS, LOADING_TRAVELS, CHANGE_FIELD_VALUE, ERROR_MESSAGE, SAVE_ONE_TRAVEL,
} from 'src/actions/travels';

const initialState = {
  errorMessage: null,
  travels: [],
  loadingTravels: true,
  travelFields: {},
  currentTravel: null,
  travelLoaded: false,
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
        loadingTravels: action.loading,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
      };
    case SAVE_ONE_TRAVEL:
      return {
        ...state,
        currentTravel: action.travel,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.error,
      };
    default:
      return state;
  }
};

export default travels;
