export const SUBMIT_TRAVEL_FORM = 'SUBMIT_TRAVEL_FORM';
export const EDIT_TRAVEL_FORM = 'EDIT_TRAVEL_FORM';
export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const SAVE_TRAVELS = 'SAVE_TRAVELS';
export const SET_LOADING_STATE = 'SET_LOADING_STATE';

export const submitTravelForm = (data) => ({
  type: SUBMIT_TRAVEL_FORM,
  data,
});

export const editTravelForm = (data) => ({
  type: EDIT_TRAVEL_FORM,
  data,
});

export const fetchTravels = () => ({
  type: FETCH_TRAVELS,
});

export const saveTravels = (travels) => ({
  type: SAVE_TRAVELS,
  travels,
});

export const setLoadingState = (loading) => ({
  type: SET_LOADING_STATE,
  loading,
});
