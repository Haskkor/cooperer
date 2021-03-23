import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';

import useAddresses from '../../hooks/projects/useAddresses/useAddresses';
import { Address } from '../../types/address';
import useAddress, {
  FormAddress
} from '../../hooks/projects/useAddress/useAddress';

const ADDRESSES: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { addresses, error, isLoading } = useAddresses();
  const { createAddress } = useAddress();

  if (error) return <div>error</div>;
  if (isLoading) return <div>loading</div>;

  return (
    <div className={'widget'}>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add skill</button>
      )}
      {addresses.map((s: Address) => (
        <div key={s.id}>{s.town}</div>
      ))}
      {showCreate && (
        <div>
          <h1>Category</h1>
          <Formik
            initialValues={{
              country: '',
              postalCode: '',
              suburb: '',
              town: ''
            }}
            onSubmit={(values: FormAddress) => {
              createAddress(values);
            }}
          >
            <Form>
              <label htmlFor="country">Address country</label>
              <Field id="country" name="country" placeholder="Country" />
              <label htmlFor="postalCode">Address postal code</label>
              <Field
                id="postal-code"
                name="postal-code"
                placeholder="Postal Code"
              />
              <label htmlFor="suburb">Suburb</label>
              <Field id="suburb" name="suburb" placeholder="Suburb" />
              <button type="submit">Submit</button>
            </Form>
          </Formik>
        </div>
      )}
    </div>
  );
};

export default ADDRESSES;
