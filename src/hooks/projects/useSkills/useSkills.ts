import { API, graphqlOperation } from 'aws-amplify';
import { pathOr } from 'ramda';
import { QueryObserverResult, RefetchOptions, useQuery } from 'react-query';

import { listSkills } from '../../../graphql/queries';
import { Skill } from '../../../types/skill';
import { createSkill as createSkillMutation } from '../../../graphql/mutations';

interface Data {
  listSkills: {
    items: Skill[];
  };
}

export interface FormSkill {
  description: string;
  name: string;
  proficiency: string;
}

interface UseSkills {
  error: unknown;
  isLoading: boolean;
  skills: Skill[];
  createSkill(input: FormSkill): void;
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
    skills
  };
};

export default useSkills;
