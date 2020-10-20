import React from 'react';
import { PlusCircle, CheckSquare, Trash2 } from 'react-feather';
import CategoryFrame from './CategoryFrame';
// import PropTypes from 'prop-types';
import './styles.scss';

const ThingsEdit = () => {
  const isMobile = window.innerWidth <= 500;
  if (isMobile) {
    return (
      <div className="">
        <p>version mobile</p>
      </div>
    );
  // eslint-disable-next-line no-else-return
  }

  return (
    <div className="">
      <p>versiondesktop</p>
      <CategoryFrame
        categoryName="Hébergement"
        textButton="Ajouter un hébergement"
      />
      <CategoryFrame
        categoryName="Transport"
        textButton="Ajouter un Transport"
      />
      <CategoryFrame
        categoryName="Activité"
        textButton="Ajouter une Activité"
      />
    </div>
  );
};
// ThingsEdit.propTypes = {

// };

// ThingsEdit.defaultProps = {

// };

export default ThingsEdit;
