import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
import Projects from './pages/projects/Projects';

const App = () => (
  <div className="App">
    <Projects />
    <AmplifySignOut />
  </div>
);

export default withAuthenticator(App);
