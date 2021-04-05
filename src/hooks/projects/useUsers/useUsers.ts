import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listUsers } from '../../../graphql/queries';
import { User } from '../../../types/user';

interface Data {
  listUsers: {
    items: User[];
  };
}

interface UseUsers {
  users: User[];
  error: unknown;
  isLoading: boolean;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useUsers: () => UseUsers = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listUsers'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listUsers));
      return result.data as Data;
    }
  );

  const users = pathOr([], ['listUsers', 'items'])(data);

  return {
    error,
    isLoading,
    refetch,
    users
  };
};

export default useUsers;
