import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getProject } from '../../../graphql/queries';
import { Project } from '../../../types/project';

interface Data {
  getProject: {
    item: Project;
  };
}

const useProject = (id: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getProject'],
    async () => {
      const result: any = await API.graphql(
        graphqlOperation(getProject, { id })
      );
      return result.data as Data;
    }
  );

  const project = data ? data.getProject.item : [];

  return {
    error,
    isLoading,
    project,
    refetch
  };
};

export default useProject;
