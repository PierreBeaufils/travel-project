import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const RegisterForm = ({ handleSignup, changeFieldValue, fields }) => {
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
          <label htmlFor="firstName">Prénom
            <input name="firstName" type="text" value={fields.firstName} onChange={handleChange} required />
          </label>
          <label htmlFor="lastName">Nom
            <input name="lastName" type="text" value={fields.lastName} onChange={handleChange} required />
          </label>
          <label htmlFor="password">Mot de passe
            <input name="password" type="password" value={fields.password} onChange={handleChange} required />
          </label>
          <label htmlFor="passwordConfirm">Confirmez votre mot de passe
            <input name="passwordConfirm" type="password" value={fields.passwordConfirm} onChange={handleChange} required />
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
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

RegisterForm.propTypes = {
  handleSignup: PropTypes.func.isRequired,
  changeFieldValue: PropTypes.func.isRequired,
  fields: PropTypes.shape({
    email: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    passwordConfirm: PropTypes.string.isRequired,
  }),
};

RegisterForm.defaultProps = {
  fields: null,
};

export default RegisterForm;
