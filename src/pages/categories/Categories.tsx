import React, { useState } from 'react';
import { API } from 'aws-amplify';

import { createCategory as createCategoryMutation } from '../../graphql/mutations';
import useCategories from '../../hooks/projects/useCategories/useCategories';
import { Category } from '../../types/category';

const initialCreationFormState = {
  description: '',
  image: '',
  name: ''
}

const Categories = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState(initialCreationFormState);
  const { categories, error, isLoading } = useCategories();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  const createCategory = async () => {
    setFormData(initialCreationFormState);
    await API.graphql({ query: createCategoryMutation, variables: { input: formData } });
  }

  return (
    <div>
      {!showCreate && <button onClick={() => setShowCreate(true)}>Add category</button>}
      {categories.map((c: Category) => <div>{c.name}</div>)}
      {showCreate &&
      <>
        <input
          onChange={e => setFormData({ ...formData, description: e.target.value })}
          placeholder="Category description"
          value={formData.description}
        />
        <input
          onChange={e => setFormData({ ...formData, image: e.target.value })}
          placeholder="Category image url"
          value={formData.image}
        />
        <input
          onChange={e => setFormData({ ...formData, name: e.target.value })}
          placeholder="Category name"
          value={formData.name}
        />
        <button onClick={createCategory}>Create Category</button>
      </>
      }
    </div>
  );
}

export default Categories;
