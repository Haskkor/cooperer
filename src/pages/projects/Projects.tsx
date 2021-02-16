import React, { useState } from 'react';

import { createProject as createProjectMutation } from '../../graphql/mutations';
import useProjects from '../../hooks/projects/useProjects/useProjects';

const initialCreationFormState = { completionDate: new Date(), description: '', photos: [] }

// input CreateProjectInput {
//   completionDate: AWSDateTime
//   creationDate: AWSDateTime!
//   description: String!
//   id: ID
//   photos: [String]
//   projectOwnerId: ID
// }

const Projects = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState(initialCreationFormState);
  const { projects, error, isLoading } = useProjects();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  const createNote = () => {
    if (!formData.name || !formData.description) return;
    setFormData(formData);
  }

  // fixme any
  return (
    <div className="App">
      <button onClick={() => setShowCreate(true)}>Add project</button>
      {projects.map((p: any) => <div>{p.name}</div>)}
      {showCreate &&
      <>
        <input
          onChange={e => setFormData({ ...formData, 'name': e.target.value })}
          placeholder="Note name"
          value={formData.name}
        />
        <input
          onChange={e => setFormData({ ...formData, 'description': e.target.value })}
          placeholder="Note description"
          value={formData.description}
        />
        <button onClick={createNote}>Create Note</button>
      </>
      }
    </div>
  );
}

export default Projects;
