import React, { useState } from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';
import { API } from 'aws-amplify';

import { createSkill as createSkillMutation } from '../../graphql/mutations';
import useSkills from '../../hooks/projects/useSkills/useSkills';
import { Skill } from '../../types/skill';

interface FormSkill {
  description: string;
  name: string;
  proficiency: string;
}

const Skills = () => {
  const [showCreate, setShowCreate] = useState(false)
  const { skills, error, isLoading } = useSkills();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  const createSkill = async (input: FormSkill) => await API.graphql({
    query: createSkillMutation,
    variables: { input }
  });

  return (
    <div>
      {!showCreate && <button onClick={() => setShowCreate(true)}>Add skill</button>}
      {skills.map((s: Skill) => <div>{s.description}</div>)}
      {showCreate && <div>
        <h1>Category</h1>
        <Formik
          initialValues={{
            description: '',
            name: '',
            proficiency: ''
          }}
          onSubmit={(
            values: FormSkill
          ) => {
            createSkill(values)
          }}
        >
          <Form>
            <label htmlFor="skillDescription">Skill description</label>
            <Field id="skillDescription" name="skillDescription" placeholder="Desc" />
            <label htmlFor="skillName">Skill name</label>
            <Field id="skillName" name="skillName" placeholder="Name" />
            <label htmlFor="categoryProficiency">Category proficiency</label>
            <Field
              id="categoryProficiency"
              name="categoryProficiency"
              placeholder="Beginner"
            />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </div>}
    </div>
  );
}

export default Skills;
