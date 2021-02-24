import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listAddresss } from '../../../graphql/queries';
import { Address } from '../../../types/address';

interface Data {
  listProjects: {
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
  // const addresses = data ? data.listProjects.items : [];

  return {
    addresses: data,
    error,
    isLoading,
    refetch
  }
};

export default useAddresses;
