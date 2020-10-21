export const CHANGE_FIELD = 'CHANGE_FIELD';
export const HANDLE_LOGIN = 'HANDLE_LOGIN';
export const SAVE_USER = 'SAVE_USER';

export const changeFieldValue = (name, value) => ({
  type: CHANGE_FIELD,
  name,
  value,
});

export const handleLogin = () => ({
  type: HANDLE_LOGIN,
});

export const saveUser = (user) => ({
  type: SAVE_USER,
  user,
});
