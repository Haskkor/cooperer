import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getProjectComment } from '../../../graphql/queries';
import { ProjectComment } from '../../../types/projectComments';

interface Data {
  getProjectComment: {
    item: ProjectComment;
  };
}

const useProjectComment = (id: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getProjectComment'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(getProjectComment, { id })
      );
      return result.data as Data;
    }
  );

  const comment = data ? data.getProjectComment.item : [];

  return {
    comment,
    error,
    isLoading,
    refetch
  };
};

export default useProjectComment;
