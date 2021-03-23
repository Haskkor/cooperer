import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listCategorys } from '../../../graphql/queries';
import { Category } from '../../../types/category';
import { createCategory as createCategoryMutation } from '../../../graphql/mutations';

interface Data {
  listCategorys: {
    items: Category[];
  };
}

export interface FormCategory {
  description: string;
  image: string;
  name: string;
}

interface UseCategories {
  categories: Category[];
  error: unknown;
  isLoading: boolean;
  createCategory(input: FormCategory): void;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useCategories: () => UseCategories = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listCategorys'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listCategorys));
      return result.data as Data;
    }
  );

  const categories = pathOr([], ['listCategorys', 'items'])(data);

  const createCategory = async (input: FormCategory) =>
    await API.graphql({
      query: createCategoryMutation,
      variables: { input }
    });

  return {
    categories,
    createCategory,
    error,
    isLoading,
    refetch
  };
};

export default useCategories;
