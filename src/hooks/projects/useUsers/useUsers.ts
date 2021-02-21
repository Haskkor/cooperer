import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listUsers } from '../../../graphql/queries';
import { User } from '../../../types/user';

interface Data {
  listUsers: {
    items: User[]
  }
}

const useProjects = () => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listUsers));
      return result.data as Data;
    }
  );

  const users = data ? data.listUsers.items : [];

  return {
    error,
    isLoading,
    refetch,
    users
  }
};

export default useProjects;
