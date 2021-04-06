import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listAddresss } from '../../../graphql/queries';
import { Address } from '../../../types/address';

interface Data {
  listAddresss: {
    items: Address[];
  };
}

interface UseAddresses {
  addresses: Address[];
  error: unknown;
  isLoading: boolean;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useAddresses: () => UseAddresses = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listAddresss'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listAddresss));
      return result.data as Data;
    }
  );

  const addresses = pathOr([], ['listAddresss', 'items'])(data);

  return {
    addresses,
    error,
    isLoading,
    refetch
  };
};

export default useAddresses;
