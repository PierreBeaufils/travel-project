export const CHANGE_FIELD_VALUE = 'CHANGE_FIELD_VALUE';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SAVE_USER = 'SAVE_USER';
export const HANDLE_SIGNUP = 'HANDLE_SIGNUP';
export const LOGOUT = 'LOGOUT';
export const SET_ERROR = 'SET_ERROR';

export const changeFieldValue = (section, field, value) => ({
  type: CHANGE_FIELD_VALUE,
  section,
  field,
  value,
});

export const handleSignup = (data) => ({
  type: HANDLE_SIGNUP,
  data,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});

export const logout = () => ({
  type: LOGOUT,
});

export const setError = (error) => ({
  type: SET_ERROR,
  error,
});
