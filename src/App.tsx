import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
import Header from './components/header/Header';
import Router from './routes/Router/Router';

const APP = () => (
  <div className="App">
    <Header />
    <Router />
  </div>
);

export default withAuthenticator(APP);
