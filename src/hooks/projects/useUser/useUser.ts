import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getUser } from '../../../graphql/queries';
import { User } from '../../../types/user';

interface Data {
  getUser: {
    item: User;
  };
}

const useUser = (id: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getUser'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getUser, { id }));
      return result.data as Data;
    }
  );

  const user = data ? data.getUser.item : [];

  return {
    error,
    isLoading,
    refetch,
    user
  };
};

export default useUser;
