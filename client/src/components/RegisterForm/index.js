import React from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';

import './styles.scss';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="register">
      <div className="main-form">
        <h2>Inscription</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email
            <input name="email" ref={register({ required: true })} type="email" />
          </label>
          <label htmlFor="firstName">Prénom
            <input name="firstName" ref={register({ required: true })} />
          </label>
          <label htmlFor="lastName">Nom
            <input name="lastName" ref={register({ required: true })} />
          </label>
          <label htmlFor="password">Mot de passe
            <input name="password" ref={register({ required: true})} type="password" />
          </label>
          <label htmlFor="password-second">Retapez votre mot de passe
            <input name="password-second" ref={register({ required: true })} type="password" />
          </label>
          <label htmlFor="gender">Genre
            <select name="gender" ref={register({ required: true })}>
              <option value="female">Femme</option>
              <option value="male">Homme</option>
              <option value="other">Autre</option>
            </select>
          </label>
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default RegisterForm;
