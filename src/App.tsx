import { AmplifySignOut, withAuthenticator } from '@aws-amplify/ui-react';
import React from 'react';

import './App.css';
// import Projects from './pages/projects/Projects';
import Addresses from './pages/addresses/Addresses';
// import useProjects from './hooks/projects/useProjects/useProjects';
// import useAddresses from './hooks/projects/useAddresses/useAddresses';
// import useCategories from './hooks/projects/useCategories/useCategories';
// import useLocations from './hooks/projects/useLocations/useLocations';
// import useProjectComments from './hooks/projects/useProjectComments/useProjectComments';
// import useSkills from './hooks/projects/useSkills/useSkills';
// import useUsers from './hooks/projects/useUsers/useUsers';

const App = () => {
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
      {/*<Projects />*/}
      <Addresses />
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
