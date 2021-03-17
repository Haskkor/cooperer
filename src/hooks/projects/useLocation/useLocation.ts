import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getLocation } from '../../../graphql/queries';
import { Location } from '../../../types/location';

interface Data {
  getLocation: {
    item: Location;
  };
}

const useLocation = (id: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getLocation'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(getLocation, { id })
      );
      return result.data as Data;
    }
  );

  const location = data ? data.getLocation.item : [];

  return {
    error,
    isLoading,
    location,
    refetch
  };
};

export default useLocation;
