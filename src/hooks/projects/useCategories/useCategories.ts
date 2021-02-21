import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listCategorys } from '../../../graphql/queries';
import { Category } from '../../../types/category';

interface Data {
  listCategorys: {
    items: Category[]
  }
}

const useProjects = () => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listCategorys));
      return result.data as Data;
    }
  );

  const categories = data ? data.listCategorys.items : [];

  return {
    categories,
    error,
    isLoading,
    refetch
  }
};

export default useProjects;
