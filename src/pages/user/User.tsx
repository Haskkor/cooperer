import React, { useState } from 'react';
import useUser from '../../hooks/projects/useUser/useUser';

const USERS: React.FC = () => {
  const [showCreate, setShowCreate] = useState(false);
  const { isLoading } = useUser();
  console.log('is', isLoading);

  return (
    <div className={'widget'}>
      {!showCreate && (
        <button onClick={() => setShowCreate(true)}>Add skill</button>
      )}
      {showCreate && (
        <div>
          <h1>Category</h1>
        </div>
      )}
    </div>
  );
};

export default USERS;
