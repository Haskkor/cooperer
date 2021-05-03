import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';
import { Router as ReactRouter, useHistory } from 'react-router-dom';

import './App.css';
import Header from './components/header/Header';
import Router from './routes/Router/Router';

const APP = () => {
  const history = useHistory();

  return (
    <div className="App">
      <ReactRouter history={history}>
        <Header />
        <Router />
      </ReactRouter>
    </div>
  );
};

export default withAuthenticator(APP);
