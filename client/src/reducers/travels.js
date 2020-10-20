import { TEST } from 'src/actions/test';

const initialState = {
  travels: [],
  loading: false,
};

const travels = (state = initialState, action = {}) => {
  switch (action.type) {
    case TEST:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default travels;
