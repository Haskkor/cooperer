import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { getCategory } from '../../../graphql/queries';
import { Category } from '../../../types/category';
import { createCategory as createCategoryMutation } from '../../../graphql/mutations';

interface Data {
  getCategory: {
    item: Category;
  };
}

export interface FormCategory {
  description: string;
  image: string;
  name: string;
}

interface UseCategory {
  category?: Category;
  error: unknown;
  isLoading: boolean;
  createCategory(input: FormCategory): void;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useCategory: (id?: string) => UseCategory = (id?: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getCategory'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(getCategory, { id })
      );
      return result.data as Data;
    }
  );

  const category = pathOr(undefined, ['getCategory', 'items'])(data);

  const createCategory = async (input: FormCategory) =>
    await API.graphql({
      query: createCategoryMutation,
      variables: { input }
    });

  return {
    category,
    createCategory,
    error,
    isLoading,
    refetch
  };
};

export default useCategory;
