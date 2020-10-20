import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './styles.scss';

const LoginForm = ({ email, password, changeField, handleLogin }) => {
  const {
    register, errors,
  } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin();
  };

  return (
    <div className="login">
      <div className="main-form">
        <h2>Connexion</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email
            <input name="email" ref={register({ required: true })} type="email" value={email} onChange={changeField} />
            {errors.email && <span className="warning-text">Veuillez saisir votre email</span>}
          </label>
          <label htmlFor="password">Mot de passe
            <input name="password" ref={register({ required: true })} type="password" value={password} onChange={changeField} />
            {errors.password && <span className="warning-text">Veuillez saisir un mot de passe valide</span>}
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

LoginForm.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default LoginForm;
