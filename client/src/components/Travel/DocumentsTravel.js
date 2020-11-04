import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { baseURL } from 'src/config';
import {
  PlusSquare,
} from 'react-feather';
import DocumentItem from './DocumentsItemTravel';

import './travel.scss';

const Documents = ({ documents, isEditingAllowed, travelID }) => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [fileToUpload, setFileToUpload] = useState(null);
  const [message, setMessage] = useState(null);

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    axios.post(`${baseURL}/travel/${travelID}/document`, formData)
      .then(() => {
        setMessage('fichié uploadé !');
      });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    uploadFile(fileToUpload);
  };
  const onChange = (event) => {
    setFileToUpload(event.target.files[0]);
  };

  return (
    <div className="documents frame card__container prices_card">
      <h2>Documents du voyage</h2>
      {message && (
        <div className="upload-message">{message}</div>
      )}
      {(isEditingAllowed && !showFileUpload) ? (
        <div
          className="validate--button"
          onClick={() => {
            setShowFileUpload(true);
          }}
        >
          <PlusSquare color="#fff" />
          <p>Ajouter</p>

        </div>
      ) : null}
      {(showFileUpload) ? (
        <form onSubmit={onFormSubmit}>
          <label className="label-file validate--button">
            Choisir un fichier
            <input name="file" type="file" className="input-file" onChange={onChange} />
          </label>
          {fileToUpload ? (<button type="submit" className="validate--button">Upload {fileToUpload.name}</button>) : null}

        </form>
      ) : null}

      <ul>
        {documents.map((document) => ( // voir pour gestion de message si 0 document
          <DocumentItem
            key={document.Key}
            {...document}
          />
        ))}
      </ul>
    </div>
  );
};

Documents.propTypes = {
  documents: PropTypes.array.isRequired,
  isEditingAllowed: PropTypes.bool.isRequired,
  travelID: PropTypes.number.isRequired,
};

export default Documents;
