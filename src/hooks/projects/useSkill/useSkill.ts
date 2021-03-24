import { API, graphqlOperation } from 'aws-amplify';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { getSkill } from '../../../graphql/queries';
import { Skill } from '../../../types/skill';
import { createSkill as createSkillMutation } from '../../../graphql/mutations';
import { pathOr } from 'ramda';

interface Data {
  getSkill: {
    item: Skill;
  };
}

export interface FormSkill {
  description: string;
  name: string;
  proficiency: string;
}

interface UseSkill {
  error: unknown;
  isLoading: boolean;
  skill?: Skill;
  createSkill(input: FormSkill): void;
  refetch(
    options?: RefetchOptions
  ): Promise<QueryObserverResult<Data, unknown>>;
}

const useSkill: (id?: string) => UseSkill = (id?: string) => {
  const { data, isLoading, refetch, error } = useQuery(
    ['getSkill'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(getSkill, { id }));
      return result.data as Data;
    },
    { enabled: !!id }
  );

  const skill = pathOr(undefined, ['getSkill', 'item'])(data);

  const createSkill = async (input: FormSkill) =>
    await API.graphql({
      query: createSkillMutation,
      variables: { input }
    });

  return {
    createSkill,
    error,
    isLoading,
    refetch,
    skill
  };
};

export default useSkill;
