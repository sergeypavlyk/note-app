import React from 'react';

const About = () => (
  <div className="jumbotron">
    <h1 className="display-4">Hi there!</h1>
    <p className="lead">
      You can now try to add your personal note on the Home page interface.
      Just enter whatever You want in the input box and click enter. Congrats!
      <span>{'\u2728'}</span>
    </p>
    <hr className="my-4" />
    <p className="lead">
      <a className="btn btn-primary btn-lg" href="/" role="button">Try to add Note</a>
    </p>
  </div>
);

export default About;
