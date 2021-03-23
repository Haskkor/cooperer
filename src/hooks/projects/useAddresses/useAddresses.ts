import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listAddresss } from '../../../graphql/queries';
import { Address } from '../../../types/address';

interface Data {
  listAddresses: {
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
  const { data, isLoading, refetch, error } = useQuery(['post'], async () => {
    const result: any = await API.graphql(graphqlOperation(listAddresss));
    return result.data as Data;
  });

  const addresses = pathOr([], ['listAddresses', 'items'])(data);

  return {
    addresses,
    error,
    isLoading,
    refetch
  };
};

export default useAddresses;
