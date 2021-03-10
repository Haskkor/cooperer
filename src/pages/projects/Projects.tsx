import React, { useState } from 'react';

import { createProject as createProjectMutation } from '../../graphql/mutations';
import useProjects from '../../hooks/projects/useProjects/useProjects';
import { API } from 'aws-amplify';
import { Project } from '../../types/project';

const initialCreationFormState = {
  creationDate: new Date(),
  description: '',
  photos: []
};

const PROJECTS: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const [formData, setFormData] = useState(initialCreationFormState);
  const { projects, error, isLoading } = useProjects();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  const createProject = async () => {
    if (!formData.description) return;
    setFormData(initialCreationFormState);
    await API.graphql({
      query: createProjectMutation,
      variables: { input: formData }
    });
  };

  return (
    <div>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add project</button>
      )}
      {projects.map((p: Project) => (
        <div key={p.id}>{p.name}</div>
      ))}
      {showCreate && (
        <>
          <input
            onChange={e =>
              setFormData({ ...formData, description: e.target.value })
            }
            placeholder="Project description"
            value={formData.description}
          />
          <button onClick={createProject}>Create Project</button>
        </>
      )}
    </div>
  );
};

export default PROJECTS;
