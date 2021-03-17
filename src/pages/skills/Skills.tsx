import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { API } from 'aws-amplify';

import { createSkill as createSkillMutation } from '../../graphql/mutations';
import useSkills from '../../hooks/projects/useSkills/useSkills';
import { Skill } from '../../types/skill';

interface FormSkill {
  description: string;
  name: string;
  proficiency: string;
}

const SKILLS: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { skills, error, isLoading } = useSkills();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  // todo put on the hook
  const createSkill = async (input: FormSkill) =>
    await API.graphql({
      query: createSkillMutation,
      variables: { input }
    });

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
