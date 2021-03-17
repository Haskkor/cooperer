import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listLocations } from '../../../graphql/queries';
import { Location } from '../../../types/location';

interface Data {
  listLocations: {
    items: Location[];
  };
}

const useLocations = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listLocations'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listLocations));
      return result.data as Data;
    }
  );

  const locations = data ? data.listLocations.items : [];

  return {
    error,
    isLoading,
    locations,
    refetch
  };
};

export default useLocations;
