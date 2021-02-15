import React, { useState } from 'react';

import './App.css';
import useProjects from '../../hooks/projects/useProjects/useProjects';
import { Storage } from 'aws-amplify';

const initialFormState = { name: '', description: '', image: '' as Object | string }

const Projects = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState(initialFormState);
  const { projects, error, isLoading } = useProjects();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  // fixme any
  const onChange = (e: any) => {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
  }

  const createNote = () => {
    if (!formData.name || !formData.description) return;
    setFormData(initialFormState);
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
        <input
          type="file"
          onChange={onChange}
        />
        <button onClick={createNote}>Create Note</button>
      </>
      }
    </div>
  );
}

export default Projects;
