import { API, graphqlOperation } from 'aws-amplify';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listLocations } from '../../../graphql/queries';
import { Location } from '../../../types/location';
import { pathOr } from 'ramda';

interface Data {
  listLocations: {
    items: Location[];
  };
}

interface UseLocations {
  locations: Location[];
  error: unknown;
  isLoading: boolean;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useLocations: () => UseLocations = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listLocations'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listLocations));
      return result.data as Data;
    }
  );

  const locations = pathOr([], ['listLocations', 'items'])(data);

  return {
    error,
    isLoading,
    locations,
    refetch
  };
};

export default useLocations;
