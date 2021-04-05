import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { getUser } from '../../../graphql/queries';
import { User } from '../../../types/user';
import { createUser as createUserMutation } from '../../../graphql/mutations';
import { Address } from '../../../types/address';

interface Data {
  getUser: {
    item: User;
  };
}

export interface FormUser {
  address: Address;
  description?: string;
  email: string;
  userName: string;
}

interface UseUser {
  user?: User;
  error: unknown;
  isLoading: boolean;
  createUser(input: FormUser): void;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useUser: (id?: string) => UseUser = (id?: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getUser'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getUser, { id }));
      return result.data as Data;
    },
    { enabled: !!id }
  );

  const user = pathOr(undefined, ['getUser', 'item'])(data);

  const createUser = async (input: FormUser) =>
    await API.graphql({
      query: createUserMutation,
      variables: { input }
    });

  return {
    createUser,
    error,
    isLoading,
    refetch,
    user
  };
};

export default useUser;
