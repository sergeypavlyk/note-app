import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ alert }) => (
  alert ? (
    <div className={`alert alert-${alert.type ?? 'warning'} alert-dismissible fade show`} role="alert">
      <strong>Warning!</strong>
      {' '}
      {alert.text}
      You should check in on some of those fields below.
      <button type="button" className="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  ) : null
);

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
};

export default Alert;
