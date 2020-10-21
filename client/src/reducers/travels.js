import { SAVE_TRAVELS, SET_LOADING_STATE } from 'src/actions/travels';

const initialState = {
  travels: [],
  loading: false,
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
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default travels;
