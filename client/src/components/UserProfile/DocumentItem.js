import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const DocumentItem = ({ docName, docDate, docLink }) => {
  const timestampInDate = new Date(docDate); // creation d'une instance date
  const DateInLocalString = timestampInDate.toLocaleString(); // date convertie en string

  return (
    <li className="">
      <a href={docLink}>{docName}</a> <span className="document__item_updateDate">Mis à jour le {DateInLocalString}</span>
    </li>
  );
};

DocumentItem.propTypes = {
  docName: PropTypes.string.isRequired,
  docDate: PropTypes.number.isRequired,
  docLink: PropTypes.string.isRequired,
};

// DocumentItem.defaultProps = {

// };

export default DocumentItem;
