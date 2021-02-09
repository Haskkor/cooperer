import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
import useProjects from './hooks/projects/useProjects/useProjects';

function App() {
  const { projects, error, isLoading } = useProjects();
  console.log('DATA', projects, error, isLoading)

  return (
    <div className="App">
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
