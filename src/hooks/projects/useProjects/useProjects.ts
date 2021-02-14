import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listProjects } from '../../../graphql/queries';

const useProjects = () => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listProjects));
      return result.data as any; // fixme any
    }
  );

  const projects = data ? data.listProjects.items : [];

  return {
    error,
    isLoading,
    projects,
    refetch
  }
};

export default useProjects;
