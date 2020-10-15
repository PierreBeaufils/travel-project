import { TEST } from '../actions';

const initialState = {
  name: 'The Counter',
  value: 0,
};

const counter = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default counter;
