import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ notes, onRemoveNote }) => (
  <ul className="list-group">
    {notes.map(({ title, id }) => (
      <li className="list-group-item note" key={id}>
        <div>
          <strong className="noteTitle">{title}</strong>
          <small>{notes.date}</small>
        </div>
        <button onClick={() => onRemoveNote(id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
      </li>
    ))}
  </ul>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveNote: PropTypes.func.isRequired,
};

export default Notes;
