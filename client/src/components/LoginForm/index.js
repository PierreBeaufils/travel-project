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
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
        <input name="email" ref={register({ required: true })} type="email" />
        {errors.email && <span className="warning-text">Merci de remplir votre e-mail</span>}
        <label>Mot de passe</label>
        <input name="password" ref={register({ required: true })} type="password" />
        {errors.password && <span className="warning-text">Merci de remplir le mot de passe</span>}

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
