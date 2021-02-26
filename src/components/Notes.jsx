import React from 'react';
import PropTypes from 'prop-types';

const Notes = ({ notes }) => (
  <ul className="list-group">
    {notes.map(({ title, id }) => (
      <li className="list-group-item note" key={id}>
        <div>
          <strong className="noteTitle">{title}</strong>
          <span>{new Date().toLocaleDateString()}</span>
        </div>
        <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
      </li>
    ))}
  </ul>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Notes;
