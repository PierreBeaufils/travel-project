import React from 'react';
import PropTypes from 'prop-types';
import {
  Download,
} from 'react-feather';

import './travel.scss';

const DocumentItem = ({
  travel_id, Bucket, Key, LastModified, Size, url, name,
}) => {
  const timestampInDate = new Date(LastModified); // creation d'une instance date
  const DateInLocalString = timestampInDate.toLocaleString(); // date convertie en string

  return (
    <li className="document_item">
      <a href={url}><Download />  {name}</a>
      <p className="document__item_details">Mis à jour le: {DateInLocalString}</p>
      <p className="document__item_details">Taille:  {Size / 8000} Ko</p>
    </li>
  );
};

DocumentItem.propTypes = {
  travel_id: PropTypes.string.isRequired,
  Bucket: PropTypes.string.isRequired,
  Key: PropTypes.string.isRequired,
  LastModified: PropTypes.string.isRequired,
  Size: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default DocumentItem;
