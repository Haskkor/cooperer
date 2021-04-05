import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import useUsers from '../../hooks/projects/useUsers/useUsers';
import { User } from '../../types/user';
import useUser, { FormUser } from '../../hooks/projects/useUser/useUser';

const USERS: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { error, isLoading, users } = useUsers();
  const { createUser } = useUser();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  return (
    <div className={'widget'}>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add user</button>
      )}
      {users.map((u: User) => (
        <div key={u.id}>{u.email}</div>
      ))}
      {showCreate && (
        <div>
          <h1>User</h1>
          <Formik
            initialValues={{
              address: {
                country: '',
                id: '',
                postalCode: '',
                suburb: '',
                town: ''
              },
              description: '',
              email: '',
              userName: ''
            }}
            onSubmit={(values: FormUser) => {
              createUser(values);
            }}
          >
            <Form>
              <label htmlFor="description">User description</label>
              <Field id="description" name="description" placeholder="Desc" />
              <label htmlFor="email">User email</label>
              <Field id="email" name="email" placeholder="Email" />
              <label htmlFor="address.country">User country</label>
              <Field
                id="address.country"
                name="address.country"
                placeholder="Country"
              />
              <label htmlFor="address.postalCode">User postal code</label>
              <Field
                id="address.postalCode"
                name="address.postalCode"
                placeholder="Postal Code"
              />
              <label htmlFor="address.suburb">User suburb</label>
              <Field
                id="address.suburb"
                name="address.suburb"
                placeholder="Suburb"
              />
              <label htmlFor="address.town">User town</label>
              <Field id="address.town" name="address.town" placeholder="Town" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default USERS;
