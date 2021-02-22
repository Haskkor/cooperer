import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { getSkill } from '../../../graphql/queries';
import { Skill } from '../../../types/skill';

interface Data {
  getSkill: {
    item: Skill
  }
}

const useSkill = (id: string) => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getSkill, { id }));
      return result.data as Data;
    }
  );

  const skill = data ? data.getSkill.item : [];

  return {
    error,
    isLoading,
    refetch,
    skill
  }
};

export default useSkill;
