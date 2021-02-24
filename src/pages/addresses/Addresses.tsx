import React, { useState } from 'react';
import { API } from 'aws-amplify';

import { createAddress as createAddressMutation } from '../../graphql/mutations';
import useAddresses from '../../hooks/projects/useAddresses/useAddresses';

const initialCreationFormState = {
  country: '',
  postalCode: '',
  suburb: '',
  town: ''
}

const Addresses = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [formData, setFormData] = useState(initialCreationFormState);
  const { error, isLoading } = useAddresses();

  if (error) return <div>error</div>
  if (isLoading) return <div>loading</div>

  const createProject = async () => {
    setFormData(initialCreationFormState);
    await API.graphql({ query: createAddressMutation, variables: { input: formData } });
  }

  return (
    <div>
      {!showCreate && <button onClick={() => setShowCreate(true)}>Add address</button>}
      {/*{addresses.map((a: Address) => <div>{a.town}</div>)}*/}
      {showCreate &&
      <>
        <input
          onChange={e => setFormData({ ...formData, country: e.target.value })}
          placeholder="Address country"
          value={formData.country}
        />
        <input
          onChange={e => setFormData({ ...formData, postalCode: e.target.value })}
          placeholder="Address postal code"
          value={formData.postalCode}
        />
        <input
          onChange={e => setFormData({ ...formData, suburb: e.target.value })}
          placeholder="Address suburb"
          value={formData.suburb}
        />
        <input
          onChange={e => setFormData({ ...formData, town: e.target.value })}
          placeholder="Address town"
          value={formData.town}
        />
        <button onClick={createProject}>Create Address</button>
      </>
      }
    </div>
  );
}

export default Addresses;
