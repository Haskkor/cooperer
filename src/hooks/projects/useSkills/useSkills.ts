import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listSkills } from '../../../graphql/queries';
import { Skill } from '../../../types/skill';

interface Data {
  listSkills: {
    items: Skill[];
  };
}

interface UseSkills {
  error: unknown;
  isLoading: boolean;
  skills: Skill[];
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useSkills: () => UseSkills = () => {
  const { data, isLoading, refetch, error } = useQuery(
    ['listSkills'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listSkills));
      return result.data as Data;
    }
  );

  const skills = pathOr([], ['listSkills', 'items'])(data);

  return {
    error,
    isLoading,
    refetch,
    skills
  };
};

export default useSkills;
