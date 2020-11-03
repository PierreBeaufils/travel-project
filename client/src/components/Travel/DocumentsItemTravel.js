import React from 'react';
import PropTypes from 'prop-types';
import {
  Download,
} from 'react-feather';

import './travel.scss';

const DocumentItem = ({ name, LastModified, url, Bucket, Key, Size }) => {
  const timestampInDate = new Date(LastModified); // creation d'une instance date
  const DateInLocalString = timestampInDate.toLocaleString(); // date convertie en string
  

  return (
    <li className="document_item">
      <a href={url}><Download />  {name}</a>
      <p className="document__item_details">Mis à jour le: {DateInLocalString}</p>
      <p className="document__item_details">Taille:  {Size/8000} Ko</p>
    </li>
  );
};

DocumentItem.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default DocumentItem;
