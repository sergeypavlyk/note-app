import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (value.trim()) {
      firebase.addNote(value.trim())
        .then(() => alert.show('Your note has been successfully created', 'success'))
        .catch(() => alert.show('Your note hasn\'t been created', 'danger'));
      setValue('');
    } else alert.show('Please enter your note');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Enter your note here ..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default Form;
