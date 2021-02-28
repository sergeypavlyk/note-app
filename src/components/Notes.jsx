import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { AlertContext } from '../context/alert/alertContext';

const Notes = ({ notes, onRemoveNote }) => {
  const { show, hide } = useContext(AlertContext);

  const removeNote = (id) => () => {
    onRemoveNote(id);
    show('Your note has been successfully deleted', 'success');
    setTimeout(() => hide(), 5000);
  };

  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map(({
        title,
        id,
        date,
        time,
      }) => (
        <CSSTransition
          key={id}
          classNames="note"
          timeout={800}
        >
          <li className="list-group-item note">
            <div>
              <strong className="noteTitle">{title}</strong>
              <small>{date}</small>
              &nbsp;
              <small>{time}</small>
            </div>
            <button onClick={removeNote(id)} type="button" className="btn btn-outline-danger btn-sm">&times;</button>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemoveNote: PropTypes.func.isRequired,
};

export default Notes;
