import React, { useState } from 'react';

import { createProject as createProjectMutation } from '../../graphql/mutations';
import useProjects from '../../hooks/projects/useProjects/useProjects';
import { API } from 'aws-amplify';

const initialCreationFormState = {
  creationDate: new Date(),
  description: '',
  photos: []
}

const Projects = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState(initialCreationFormState);
  const { projects, error, isLoading } = useProjects();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  const createProject = async () => {
    if (!formData.description) return;
    setFormData(initialCreationFormState);
    await API.graphql({ query: createProjectMutation, variables: { input: formData } });
  }

  // fixme any
  return (
    <div>
      {!showCreate && <button onClick={() => setShowCreate(true)}>Add project</button>}
      {projects.map((p: any) => <div>{p.name}</div>)}
      {showCreate &&
      <>
        <input
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          placeholder="Project description"
          value={formData.description}
        />
        <button onClick={createProject}>Create Project</button>
      </>
      }
    </div>
  );
}

export default Projects;
