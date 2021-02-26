import React, { useContext, useEffect } from 'react';
import Alert from '../components/Alert';
import Form from '../components/Form';
import Loader from '../components/Loader';
import Notes from '../components/Notes';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Home = () => {
  const {
    notes,
    loading,
    fetchNotes,
    removeNote,
  } = useContext(FirebaseContext);

  useEffect(() => { fetchNotes(); }, []);

  return (
    <>
      <Alert />
      <Form />
      <hr />
      {loading
        ? <Loader />
        : <Notes notes={notes} onRemoveNote={removeNote} />}
    </>
  );
};
export default Home;
