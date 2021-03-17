import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listProjectComments } from '../../../graphql/queries';
import { ProjectComment } from '../../../types/projectComments';

interface Data {
  listProjectComments: {
    items: ProjectComment[];
  };
}

const useProjectComments = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listProjectComments'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(listProjectComments)
      );
      return result.data as Data;
    }
  );

  const comments = data ? data.listProjectComments.items : [];

  return {
    comments,
    error,
    isLoading,
    refetch
  };
};

export default useProjectComments;
