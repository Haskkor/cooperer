import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { useQuery } from 'react-query';

import { listCategorys } from '../../../graphql/queries';
import { Category } from '../../../types/category';

interface Data {
  listCategorys: {
    items: Category[];
  };
}

const useCategories = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listCategorys'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listCategorys));
      return result.data as Data;
    }
  );

  const categories = pathOr([], ['listCategorys', 'items'])(data);

  return {
    categories,
    error,
    isLoading,
    refetch
  };
};

export default useCategories;
