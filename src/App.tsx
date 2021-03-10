import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
// import Addresses from './pages/addresses/Addresses';
import Categories from './pages/categories/Categories';
import Skills from './pages/skills/Skills';
// import Projects from './pages/projects/Projects';

// import useProjects from './hooks/projects/useProjects/useProjects';
// import useAddresses from './hooks/projects/useAddresses/useAddresses';
// import useCategories from './hooks/projects/useCategories/useCategories';
// import useLocations from './hooks/projects/useLocations/useLocations';
// import useProjectComments from './hooks/projects/useProjectComments/useProjectComments';
// import useSkills from './hooks/projects/useSkills/useSkills';
// import useUsers from './hooks/projects/useUsers/useUsers';

const APP = () => {
  // const { projects } = useProjects();
  // console.log('projects', projects)
  // const { addresses } = useAddresses();
  // console.log('addresses', addresses)
  // const { categories } = useCategories();
  // console.log('categories', categories)
  // const { locations } = useLocations();
  // console.log('locations', locations)
  // const { comments } = useProjectComments();
  // console.log('comments', comments)
  // const { skills } = useSkills();
  // console.log('skills', skills)
  // const { users } = useUsers();
  // console.log('users', users)

  return (
    <div className="App">
      <Categories />
      <Skills />
      {/* <Projects /> */}
      {/* <Addresses /> */}
      <AmplifySignOut />
    </div>
  );
};

export default withAuthenticator(APP);
