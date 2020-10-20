import React from 'react';
import PropTypes from 'prop-types';
import DocumentItem from './DocumentItem';


import './styles.scss';

const Documents = ({dataUser}) => {

  return (
    <div className="documents frame">
        <h2>Vos documents</h2>
        <ul>
          {dataUser.documents.map((document) => ( // voir pour gestion de message si 0 document
            <DocumentItem
              key={document.link}
              {...document}
            />
          ))}
        </ul>
      </div>
  );
};

export default Documents;
