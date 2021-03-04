import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { API } from 'aws-amplify';

import { createCategory as createCategoryMutation } from '../../graphql/mutations';
import useCategories from '../../hooks/projects/useCategories/useCategories';
import { Category } from '../../types/category';

interface FormCategory {
  description: string;
  image: string;
  name: string;
}

const Categories = () => {
  const [showCreate, setShowCreate] = useState(false)
  const { categories, error, isLoading } = useCategories();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  const createCategory = async (input: FormCategory) => await API.graphql({
    query: createCategoryMutation,
    variables: { input }
  });

  return (
    <div>
      {!showCreate && <button onClick={() => setShowCreate(true)}>Add category</button>}
      {categories.map((c: Category) => <div>{c.name}</div>)}
      {showCreate && <div>
        <h1>Category</h1>
        <Formik
          initialValues={{
            description: '',
            image: '',
            name: ''
          }}
          onSubmit={(
            values: FormCategory
          ) => {
            createCategory(values)
          }}
        >
          <Form>
            <label htmlFor="categoryDescription">Category description</label>
            <Field id="categoryDescription" name="categoryDescription" placeholder="Desc" />
            <label htmlFor="categoryImageUrl">Category image url</label>
            <Field id="categoryImageUrl" name="categoryImageUrl" placeholder="Img" />
            <label htmlFor="categoryName">Category name</label>
            <Field
              id="categoryName"
              name="categoryName"
              placeholder="Name"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>}
    </div>
  );
}

export default Categories;
