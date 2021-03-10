import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { useQuery } from 'react-query';

import { listProjects } from '../../../graphql/queries';
import { Project } from '../../../types/project';

interface Data {
  listProjects: {
    items: Project[];
  };
}

const useProjects = () => {
  const { data, isLoading, refetch, error } = useQuery(['post'], async () => {
    const result: any = await API.graphql(graphqlOperation(listProjects));
    return result.data as Data;
  });

  const projects = pathOr([], ['listProjects', 'items'])(data);

  return {
    error,
    isLoading,
    projects,
    refetch
  };
};

export default useProjects;
