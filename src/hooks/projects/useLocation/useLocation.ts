import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { getLocation } from '../../../graphql/queries';
import { Location } from '../../../types/location';
import { createLocation as createLocationMutation } from '../../../graphql/mutations';

interface Data {
  getLocation: {
    item: Location;
  };
}

export interface FormLocation {
  country: string;
  postalCode: string;
  suburb: string;
  town: string;
}

interface UseAddress {
  error: unknown;
  isLoading: boolean;
  location?: Location;
  createLocation(input: FormLocation): void;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useLocation: (id?: string) => UseAddress = (id?: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getLocation'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(getLocation, { id })
      );
      return result.data as Data;
    },
    { enabled: !!id }
  );

  const location = pathOr(undefined, ['getLocation', 'item'])(data);

  const createLocation = async (input: FormLocation) =>
    await API.graphql({
      query: createLocationMutation,
      variables: { input }
    });

  return {
    createLocation,
    error,
    isLoading,
    location,
    refetch
  };
};

export default useLocation;
