import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listSkills } from '../../../graphql/queries';
import { Skill } from '../../../types/skill';

interface Data {
  listSkills: {
    items: Skill[];
  };
}

const useSkills = () => {
  const { data, isLoading, refetch, error } = useQuery(['post'], async () => {
    const result: any = await API.graphql(graphqlOperation(listSkills));
    return result.data as Data;
  });

  const skills = data ? data.listSkills.items : [];

  return {
    error,
    isLoading,
    refetch,
    skills
  };
};

export default useSkills;
