export const SUBMIT_TRAVEL_FORM = 'SUBMIT_TRAVEL_FORM';
export const EDIT_TRAVEL_FORM = 'EDIT_TRAVEL_FORM';
export const FETCH_TRAVELS = 'FETCH_TRAVELS';
export const SAVE_TRAVELS = 'SAVE_TRAVELS';
export const LOADING_TRAVELS = 'LOADING_TRAVELS';
export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

export const submitTravelForm = (data) => ({
  type: SUBMIT_TRAVEL_FORM,
  data,
});

export const changeFieldValue = (field, value) => ({
  type: CHANGE_FIELD_VALUE,
  field,
  value,
});

export const errorMessage = (error) => ({
  type: ERROR_MESSAGE,
  error,
});

export const fetchTravels = () => ({
  type: FETCH_TRAVELS,
});

export const saveTravels = (travels) => ({
  type: SAVE_TRAVELS,
  travels,
});

export const loadingTravels = (loading) => ({
  type: LOADING_TRAVELS,
  loading,
});
