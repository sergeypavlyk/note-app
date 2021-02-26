import React, { useContext, useEffect } from 'react';
import { AlertContext } from '../context/alert/alertContext';

const Alert = () => {
  const { alert, hide } = useContext(AlertContext);

  useEffect(() => {
    if (alert.visible) {
      setTimeout(() => {
        hide();
      }, 5000);
    }
  }, [alert.visible]);

  return (
    alert.visible ? (
      <div className={`alert alert-${alert.type ?? 'warning'} alert-dismissible fade show`} role="alert">
        <strong style={{ textTransform: 'uppercase' }}>
          {alert.type}
          !
        </strong>
        {' '}
        {alert.text}
        <button onClick={hide} type="button" className="close" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    ) : null
  );
};

export default Alert;
