import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';

import './createTravelForm.scss';
import axios from 'axios';
import { baseURL } from 'src/config';

const TravelForm = ({
  travel, ownerId, editOrCreate,
}) => {
  const setTitle = () => {
    if (editOrCreate === 'edit') {
      return <h2>Modifier un voyage</h2>;
    }
    return <h2>Créer un voyage</h2>;
  };

  const initialValues = () => {
    if (editOrCreate === 'edit') {
      return {
        owner: ownerId,
        title: travel.infos.title,
        destination: travel.infos.destination,
        departure_date: travel.infos.departure_date,
        return_date: travel.infos.return_date,
      };
    }
    return {
      owner: ownerId,
    };
  };

  const {
    register, handleSubmit, errors,
  } = useForm({ defaultValues: initialValues() });

  const [startDate, setStartDate] = useState('');
  const [redirection, setRedirection] = useState(false);
  const [redirectionUrl, setRedirectionUrl] = useState('');

  const onSubmit = (data) => {
    console.log(data);
    if (editOrCreate === 'create') {
      axios.post(`${baseURL}/create-travel`, data)
        .then(() => {
          setRedirectionUrl('/tableau-de-bord');
          setRedirection(true);
        });
    }
    else {
      axios.patch(`${baseURL}/travel/${travel.infos.id}`, data)
        .then(() => {
          setRedirectionUrl(`/voyage/${travel.infos.id}`);
          setRedirection(true);
        });
    }
  };

  if (redirection) {
    return <Redirect to={redirectionUrl} />;
  }
  return (
    <div className="travel__create-form">
      <div className="main-form">
        {setTitle()}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input name="owner" type="hidden" id="owner" ref={register} />
          <label htmlFor="title">
            <span>Titre du voyage</span>
            <span className="required-asterisk">*</span>
            <input name="title" type="text" id="title" ref={register({ required: true })} />
            {errors.title && <span className="warning-text">Veuillez saisir un titre</span>}
          </label>

          <label htmlFor="destination">
            <span>Destination</span>
            <span className="required-asterisk">*</span>
            <input name="destination" id="destination" type="text" ref={register} />
            {errors.destination && <span className="warning-text">Veuillez saisir une destination</span>}
          </label>
          {/*
          <label htmlFor="theme">Thème
            <select name="theme" id="theme" ref={register({ required: true })}
            value={theme} onChange={(e) => setTheme(e.target.value)}
            placeholder="Veuillez choisir un thème">
              <option value="" disabled>Veuillez choisir un thème</option>
              <option value="Professionnel">Professionnel</option>
              <option value="Loisir">Loisir</option>
              <option value="Autre">Autre</option>
            </select>
            {errors.theme && <span className="warning-text">Veuillez selectionner un thème</span>}
          </label>
          */}

          <label htmlFor="departure_date">
            <span>Date de début</span>
            <input
              name="departure_date"
              ref={register}
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label htmlFor="return_date">Date de fin
            <input
              name="return_date"
              ref={register}
              type="date"
              min={startDate}
            />
          </label>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

TravelForm.defaultProps = {
  travel: null,
  editOrCreate: 'create',
};

TravelForm.propTypes = {
  ownerId: PropTypes.number.isRequired,
  editOrCreate: PropTypes.string,
  travel: PropTypes.object,
};

export default TravelForm;
