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
          <label>Email</label>
          <input name="email" ref={register({ required: true })} type="email" />
          <label>Prénom</label>
          <input name="firstName" ref={register({ required: true })} />
          <label>Nom</label>
          <input name="lastName" ref={register({ required: true })} />
          <label>Mot de passe</label>
          <input name="password" ref={register({ required: true })} type="password" />
          <label>Retapez votre mot de passe</label>
          <input name="password" ref={register({ required: true })} type="password" />
          <label>Genre</label>
          <select name="gender" ref={register({ required: true })}>
            <option value="female">Femme</option>
            <option value="male">Homme</option>
            <option value="other">Autre</option>
          </select>
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
