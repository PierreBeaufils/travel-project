import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const RegisterForm = ({
  handleSignup,
  changeFieldValue,
  fields,
  error,
}) => {
  const handleChange = (event) => {
    changeFieldValue('signup', event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

  return (
    <div className="register">
      <div className="main-form">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email
            <input name="email" type="email" value={fields.email} onChange={handleChange} required />
          </label>
          <label htmlFor="first_name">Prénom
            <input name="first_name" type="text" value={fields.first_name} onChange={handleChange} required />
          </label>
          <label htmlFor="last_name">Nom
            <input name="last_name" type="text" value={fields.last_name} onChange={handleChange} required />
          </label>
          <label htmlFor="password">Mot de passe
            <input name="password" type="password" value={fields.password} onChange={handleChange} required />
          </label>
          <label htmlFor="password_nonfirm">Confirmez votre mot de passe
            <input name="password_confirm" type="password" value={fields.password_confirm} onChange={handleChange} required />
          </label>
          {/*
          <label htmlFor="gender">Genre
            <select name="gender" ref={register({ required: true })}>
              <option value="female">Femme</option>
              <option value="male">Homme</option>
              <option value="other">Autre</option>
            </select>
          </label>
          */}
          {error && (<div className="form-error">{error}</div>)}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  error: PropTypes.string,
  handleSignup: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    email: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    password_confirm: PropTypes.string.isRequired,
  }),
};

RegisterForm.defaultProps = {
  fields: null,
  error: null,
};

export default RegisterForm;
