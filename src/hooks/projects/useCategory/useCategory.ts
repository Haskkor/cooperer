import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getCategory } from '../../../graphql/queries';
import { Category } from '../../../types/category';

interface Data {
  getCategory: {
    item: Category
  }
}

const useCategory = (id: string) => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getCategory, { id }));
      return result.data as Data;
    }
  );

  const category = data ? data.getCategory.item : [];

  return {
    category,
    error,
    isLoading,
    refetch
  }
};

export default useCategory;
