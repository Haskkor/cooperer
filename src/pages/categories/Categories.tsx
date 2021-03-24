import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import useCategories from '../../hooks/projects/useCategories/useCategories';
import { Category } from '../../types/category';
import useCategory, {
  FormCategory
} from '../../hooks/projects/useCategory/useCategory';

const CATEGORIES: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { categories, error, isLoading } = useCategories();
  const { createCategory } = useCategory();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  return (
    <div className={'widget'}>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add category</button>
      )}
      {categories.map((c: Category) => (
        <div key={c.id}>{c.name}</div>
      ))}
      {showCreate && (
        <div>
          <h1>Category</h1>
          <Formik
            initialValues={{
              description: '',
              image: '',
              name: ''
            }}
            onSubmit={(values: FormCategory) => {
              createCategory(values);
            }}
          >
            <Form>
              <label htmlFor="description">Category description</label>
              <Field id="description" name="description" placeholder="Desc" />
              <label htmlFor="image">Category image url</label>
              <Field id="image" name="image" placeholder="Img" />
              <label htmlFor="name">Category name</label>
              <Field id="name" name="name" placeholder="Name" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default CATEGORIES;
