import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import { Location } from '../../types/location';
import useLocations from '../../hooks/projects/useLocations/useLocations';
import useLocation, {
  FormLocation
} from '../../hooks/projects/useLocation/useLocation';

const LOCATIONS: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { locations, error, isLoading } = useLocations();
  const { createLocation } = useLocation();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  return (
    <div className={'widget'}>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add location</button>
      )}
      {locations.map((s: Location) => (
        <div key={s.id}>{s.town}</div>
      ))}
      {showCreate && (
        <div>
          <h1>Location</h1>
          <Formik
            initialValues={{
              country: '',
              postalCode: '',
              suburb: '',
              town: ''
            }}
            onSubmit={(values: FormLocation) => {
              createLocation(values);
            }}
          >
            <Form>
              <label htmlFor="country">Location country</label>
              <Field id="country" name="country" placeholder="Country" />
              <label htmlFor="postalCode">Location postal code</label>
              <Field
                id="postalCode"
                name="postalCode"
                placeholder="Postal Code"
              />
              <label htmlFor="suburb">Location suburb</label>
              <Field id="suburb" name="suburb" placeholder="Suburb" />
              <label htmlFor="town">Location town</label>
              <Field id="town" name="town" placeholder="Town" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default LOCATIONS;
