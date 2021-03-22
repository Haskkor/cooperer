import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
// import Addresses from './pages/addresses/Addresses';
import Categories from './pages/categories/Categories';
import Skills from './pages/skills/Skills';
// import Projects from './pages/projects/Projects';

const APP = () => (
  <div className="App">
    <Categories />
    <Skills />
    {/* <Projects /> */}
    {/* <Addresses /> */}
    <AmplifySignOut />
  </div>
);

export default withAuthenticator(APP);
