import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './styles.scss';

const Profile = ({ userData, changeFieldValue, handleEditProfile }) => {
  const {
    register, errors, watch,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');

  const handleChange = (event) => {
    changeFieldValue('profile', event.target.name, event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleEditProfile();
  };

  return (
    <div className="profil">
      <div className="main-form">
        <h2>Compléter votre profil : </h2>
        <p>Adresse email: {userData.email}</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first_name">Prénom
            <input
              name="first_name"
              ref={register({ required: true })}
              defaultValue={userData.first_name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="last_name">Nom
            <input
              name="last_name"
              ref={register({ required: true })}
              defaultValue={userData.last_name}
              onChange={handleChange}
            />
          </label>
          {/*
          <label htmlFor="adresse">Adresse
            <input
              name="adresse"
              ref={register({ required: true })}
              defaultValue={userData.address}
            />
          </label>
          <label htmlFor="postcode">Code postal
            <input
              name="postcode"
              ref={register({ required: true })}
              defaultValue={userData.postcode}
            />
          </label>
          <label htmlFor="ville">Ville
            <input
              name="ville"
              ref={register({ required: true })}
              defaultValue={userData.city}
            />
          </label>
          <label htmlFor="phone">Téléphone
            <input
              name="phone"
              ref={register({ required: true })}
              defaultValue={userData.phone}
            />
          </label>
          <label htmlFor="password">Mot de passe
            <input
              name="password"
              ref={register({
                minLength: {
                  value: 8,
                  message: 'Password must have at least 8 characters',
                },
              })}
              type="password"
              autoComplete="new-password"
            />
          </label>
          {errors.password && <p className="warning-text">{errors.password.message}</p>}
          <label htmlFor="password_repeat">Retapez votre mot de passe
            <input
              name="password_repeat"
              ref={register({
                validate: (value) => value === password.current || 'The passwords do not match',
              })}
              type="password"
            />
          </label>
          {errors.password_repeat &&
            <p className="warning-text">{errors.password_repeat.message}</p>}
          */}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

Profile.propTypes = {
  changeFieldValue: PropTypes.func.isRequired,
  handleEditProfile: PropTypes.func.isRequired,
  userData: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }).isRequired,
};

export default Profile;
