import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AlertContext } from '../context/alert/alertContext';

const Notes = ({ notes, onRemoveNote }) => {
  const { show, hide } = useContext(AlertContext);

  const removeNote = (id) => () => {
    onRemoveNote(id);
    show('Your note has been successfully deleted', 'success');
    setTimeout(() => {
      hide();
    }, 5000);
  };

  return (
    <ul className="list-group">
      {notes.map(({ title, id, date }) => (
        <li className="list-group-item note" key={id}>
          <div>
            <strong className="noteTitle">{title}</strong>
            <small>{date}</small>
          </div>
          <button onClick={removeNote(id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
        </li>
      ))}
    </ul>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveNote: PropTypes.func.isRequired,
};

export default Notes;
