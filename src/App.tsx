import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
import Addresses from './pages/addresses/Addresses';
import Categories from './pages/categories/Categories';
import Locations from './pages/locations/Locations';
import Skills from './pages/skills/Skills';
import Users from './pages/users/Users';
// import Projects from './pages/projects/Projects';

const APP = () => (
  <div className="App">
    <Addresses />
    <Categories />
    <Locations />
    <Skills />
    <Users />
    {/* <Projects /> */}
    <AmplifySignOut />
  </div>
);

export default withAuthenticator(APP);
