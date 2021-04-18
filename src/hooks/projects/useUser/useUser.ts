import { API, Auth, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { getUser } from '../../../graphql/queries';
import { User } from '../../../types/user';
import { createUser as createUserMutation } from '../../../graphql/mutations';
import { Address } from '../../../types/address';
import useAddress from '../useAddress/useAddress';

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
  const { createAddress } = useAddress();
  const { data, isLoading, refetch, error } = useQuery(
    ['getUser'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getUser, { id }));
      return result.data as Data;
    },
    { enabled: !!id }
  );

  const userData = pathOr(undefined, ['getUser', 'item'])(data);

  const awsUser = useQuery(['getAuthUser'], async () => {
    return await Auth.currentAuthenticatedUser({
      bypassCache: false
    });
  });

  const createUser = async (user: FormUser) => {
    const address = await createAddress(user.address);
    const input = {
      addressId: address.data.createAddress.id,
      description: user.description,
      userName: awsUser.data.username,
      email: awsUser.data.attributes.email
    };
    await API.graphql({
      query: createUserMutation,
      variables: { input }
    });
  };

  return {
    createUser,
    error,
    isLoading,
    refetch,
    user: userData
  };
};

export default useUser;
