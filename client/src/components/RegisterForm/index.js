import React from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './styles.scss';

const RegisterForm = ({ handleRegister }) => {
  const { register } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    for (let pair of data.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }
    handleRegister(data);
  };

  return (
    <div className="register">
      <div className="main-form">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Email
            <input name="email" ref={register({ required: true })} type="email" />
          </label>
          <label htmlFor="firstname">Prénom
            <input name="firstname" type="text" ref={register({ required: true })} />
          </label>
          <label htmlFor="lastname">Nom
            <input name="lastname" type="text" ref={register({ required: true })} />
          </label>
          <label htmlFor="password">Mot de passe
            <input name="password" ref={register({ required: true })} type="password" />
          </label>
          <label htmlFor="passwordConfirm">Retapez votre mot de passe
            <input name="passwordConfirm" ref={register({ required: true })} type="password" />
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
  handleRegister: PropTypes.func.isRequired,
};

// LoginForm.defaultProps = {

// };

export default RegisterForm;
