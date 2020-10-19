import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './styles.scss';

const Profile = ({ dataUser }) => {
  const {
    register, errors, handleSubmit, watch,
  } = useForm();
  const password = useRef({});
  password.current = watch('password', '');
  const onSubmit = (data) => console.log(data);

  return (
    <div className="profil">
      <div className="main-form">
        <h2>Compléter votre profil : </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="firstName">Prénom
            <input
              name="firstName"
              ref={register({ required: true })}
              defaultValue={dataUser.firstname}
            />
          </label>
          <label htmlFor="lastName">Nom
            <input
              name="lastName"
              ref={register({ required: true })}
              defaultValue={dataUser.lastname}
            />
          </label>
          <label htmlFor="adresse">Adresse
            <input
              name="adresse"
              ref={register({ required: true })}
              defaultValue={dataUser.address}
            />
          </label>
          <label htmlFor="postcode">Code postal
            <input
              name="postcode"
              ref={register({ required: true })}
              defaultValue={dataUser.postcode}
            />
          </label>
          <label htmlFor="ville">Ville
            <input
              name="ville"
              ref={register({ required: true })}
              defaultValue={dataUser.city}
            />
          </label>
          <label htmlFor="phone">Téléphone
            <input
              name="phone"
              ref={register({ required: true })}
              defaultValue={dataUser.phone}
            />
          </label>
          <label htmlFor="email">Email
            <input
              name="email"
              ref={register({ required: true })}
              type="email"
              defaultValue={dataUser.mail}
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
          {errors.password_repeat && <p className="warning-text">{errors.password_repeat.message}</p>}
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

Profile.propTypes = {
  dataUser: PropTypes.shape({
    firstname: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    postcode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    mail: PropTypes.string.isRequired,
    documents: PropTypes.array.isRequired,
  }),
};

// LoginForm.defaultProps = {

// };

export default Profile;
