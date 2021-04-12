import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { getAddress } from '../../../graphql/queries';
import { Address } from '../../../types/address';
import { createAddress as createAddressMutation } from '../../../graphql/mutations';

interface Data {
  getAddress: {
    item: Address;
  };
}

export interface FormAddress {
  country: string;
  postalCode: string;
  suburb: string;
  town: string;
}

interface UseAddress {
  address?: Address;
  error: unknown;
  isLoading: boolean;
  createAddress(
    input: FormAddress
  ): Promise<{ data: { createAddress: Address } }>;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useAddress: (id?: string) => UseAddress = (id?: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getAddress'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(getAddress, { id })
      );
      return result.data as Data;
    },
    { enabled: !!id }
  );

  const address = pathOr(undefined, ['getAddress', 'item'])(data);

  const createAddress = async (input: FormAddress) =>
    (await API.graphql({
      query: createAddressMutation,
      variables: { input }
    })) as { data: { createAddress: Address } };

  return {
    address,
    createAddress,
    error,
    isLoading,
    refetch
  };
};

export default useAddress;
