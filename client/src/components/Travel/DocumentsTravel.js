import React, { useState } from 'react';
import axios, { post } from 'axios';
import PropTypes from 'prop-types';
import { baseURL } from 'src/config';
import {
  PlusSquare,
} from 'react-feather';
import DocumentItem from './DocumentsItemTravel.js';

import './travel.scss';

const Documents = ({ documents, isEditingAllowed, travelID }) => {
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [fileToUpload, setFileToUpload] = useState({ file: { name: '' } });

  const fileUpload = (file) => {
    const url = `${baseURL}/travel/${travelID}/document`;
    const formData = new FormData();
    formData.append('file', file);
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    };
    return post(url, formData, config);
  };
  const onFormSubmit = (e) => {
    e.preventDefault(); // Stop form submit
    console.log(fileToUpload);
    fileUpload(fileToUpload).then((response) => {
      console.log(response.data);
    });
  };
  const onChange = (e) => {
    setFileToUpload({ file: e.target.files[0] });
  };

  return (
    <div className="documents frame card__container prices_card">
      <h2>Documents du voyage</h2>
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
          {(fileToUpload.file.name !== "") ? (<button type="submit" className="validate--button">Upload {fileToUpload.file.name}</button>): null}
          
        </form>
      ) : null}

      <ul>
        {documents.map((document) => ( // voir pour gestion de message si 0 document
          <DocumentItem
            key={document.id}
            {...document}
          />
        ))}
      </ul>
    </div>
  );
};

Documents.propTypes = {
  documents: PropTypes.object.isRequired,
};

export default Documents;
