import React, { useReducer } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { FirebaseContext } from './firebaseContext';
import { firebaseReducer } from './firebaseReducer';
import {
  ADD_NOTE,
  REMOVE_NOTE,
  SHOW_LOADER,
  FETCH_NOTES,
  HIDE_LOADER,
} from '../types';

const initialState = {
  notes: [],
  loading: false,
};

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });
  const hideLoader = () => dispatch({ type: HIDE_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`);

    if (res.data) {
      const payload = Object.keys(res.data).map((key) => ({
        ...res.data[key],
        id: key,
      }));

      dispatch({ type: FETCH_NOTES, payload });
    } else hideLoader();
  };

  const addNote = async (title) => {
    const note = {
      title,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    };

    try {
      const res = await axios.post(`${url}/notes.json`, note);

      const payload = { ...note, id: res.data.name };
      dispatch({ type: ADD_NOTE, payload });
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const removeNote = async (id) => {
    await axios.delete(`${url}/notes/${id}.json`);

    dispatch({ type: REMOVE_NOTE, payload: id });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader,
        fetchNotes,
        addNote,
        removeNote,
        loading: state.loading,
        notes: state.notes,
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

FirebaseState.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FirebaseState;
