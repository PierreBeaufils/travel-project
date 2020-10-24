import {
  SAVE_TRAVELS, SET_LOADING_STATE, CHANGE_FIELD_VALUE, ERROR_MESSAGE,
} from 'src/actions/travels';

const initialState = {
  errorMessage: null,
  travels: [],
  loadingDatas: false,
  travelFields: {},
};

const travels = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_TRAVELS:
      return {
        ...state,
        travels: action.travels,
      };
    case SET_LOADING_STATE:
      return {
        ...state,
        loadingDatas: action.loading,
      };
    case CHANGE_FIELD_VALUE:
      return {
        ...state,
        [action.field]: action.value,
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
