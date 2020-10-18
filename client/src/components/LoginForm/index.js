import React from 'react';
import { useForm } from 'react-hook-form';
// import PropTypes from 'prop-types';

import './styles.scss';

const LoginForm = () => {
  const {
    register, handleSubmit, watch, errors,
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch('example')); // watch input value by passing the name of it

  return (
    <div className="login-form">
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">Email
          <input name="email" ref={register({ required: true })} type="email" />
          {errors.email && <span className="warning-text">Veuillez saisir votre email</span>}
        </label>
        <label htmlFor="password">Mot de passe
          <input name="password" ref={register({ required: true })} type="password" />
          {errors.password && <span className="warning-text">Veuillez saisir un mot de passe valide</span>}
        </label>

        <input type="submit" />
      </form>
    </div>
  );
};
// LoginForm.propTypes = {

// };

// LoginForm.defaultProps = {

// };

export default LoginForm;
