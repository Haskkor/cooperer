import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listAddresss } from '../../../graphql/queries';
import { Address } from '../../../types/address';

interface Data {
  listAddresses: {
    items: Address[]
  }
}

const useAddresses = () => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listAddresss));
      return result.data as Data;
    }
  );

  console.log('test', data)
  const addresses = data ? data.listAddresses.items : [];

  return {
    addresses,
    error,
    isLoading,
    refetch
  }
};

export default useAddresses;
