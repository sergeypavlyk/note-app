import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <div className="container pt-4">
      <Switch>
        <Route exact />
        <Route />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
