import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const TokenValidation = ({ token, verifyToken, tokenMessage }) => {
  useEffect(() => {
    verifyToken(token);
  }, []);

  return (
    <div className="register-token-validation">
      <p>{tokenMessage}</p>
    </div>
  );
};

TokenValidation.defaultProps = {
  tokenMessage: null,
};

TokenValidation.propTypes = {
  token: PropTypes.string.isRequired,
  verifyToken: PropTypes.func.isRequired,
  tokenMessage: PropTypes.string,
};

export default TokenValidation;
