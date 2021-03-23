import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import useSkills, { FormSkill } from '../../hooks/projects/useSkills/useSkills';
import { Skill } from '../../types/skill';

const SKILLS: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { createSkill, skills, error, isLoading } = useSkills();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  return (
    <div className={'widget'}>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add skill</button>
      )}
      {skills.map((s: Skill) => (
        <div key={s.id}>{s.description}</div>
      ))}
      {showCreate && (
        <div>
          <h1>Category</h1>
          <Formik
            initialValues={{
              description: '',
              name: '',
              proficiency: ''
            }}
            onSubmit={(values: FormSkill) => {
              createSkill(values);
            }}
          >
            <Form>
              <label htmlFor="description">Skill description</label>
              <Field id="description" name="description" placeholder="Desc" />
              <label htmlFor="name">Skill name</label>
              <Field id="name" name="name" placeholder="Name" />
              <label htmlFor="proficiency">Category proficiency</label>
              <Field
                id="proficiency"
                name="proficiency"
                placeholder="Beginner"
              />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default SKILLS;
