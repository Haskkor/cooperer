import { withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
import Router from './routes/Router/Router';

const APP = () => (
  <div className="App">
    <Router />
  </div>
);

export default withAuthenticator(APP);
