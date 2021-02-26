import React from 'react';
import Alert from '../components/Alert';
import Form from '../components/Form';
import Notes from '../components/Notes';

const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, i) => ({ id: i, title: `Note ${i + 1}` }));

  return (
    <>
      <Alert />
      <Form />
      <hr />
      <Notes notes={notes} />
    </>
  );
};
export default Home;
