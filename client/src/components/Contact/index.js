import React from 'react';
import { useForm } from 'react-hook-form';
import './contact.scss';

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="contact">
      <div className="main-form">
        <h2>Nous contacter</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Nom
            <input name="name" ref={register({ required: true })} type="text" />
          </label>
          {errors.name && <span className="warning-text">Veuillez saisir votre nom</span>}
          <label htmlFor="email">Email
            <input name="email" ref={register({ required: true })} type="email" />
          </label>
          {errors.email && <span className="warning-text">Veuillez saisir votre email</span>}
          <label htmlFor="message">Message
            <textarea name="message" ref={register({ required: true })} minLength="50" rows="10" />
          </label>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
