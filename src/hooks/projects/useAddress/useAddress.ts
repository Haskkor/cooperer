import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getAddress } from '../../../graphql/queries';
import { Address } from '../../../types/address';

interface Data {
  getAddress: {
    item: Address
  }
}

const useAddress = (id: string) => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getAddress, { id }));
      return result.data as Data;
    }
  );

  const address = data ? data.getAddress.item : [];

  return {
    address,
    error,
    isLoading,
    refetch
  }
};

export default useAddress;
