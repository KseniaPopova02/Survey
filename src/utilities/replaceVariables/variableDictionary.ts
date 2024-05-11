import { IAnswer, SurveyVariables } from '@/generalTypes';
import { getGender, getWhoHaveChildren } from './getVariableValue';

export const variableDictionary: Record<
  string,
  (answers: IAnswer[]) => string
> = {
  [SurveyVariables.Gender]: getGender,
  [SurveyVariables.WhoHaveChildren]: getWhoHaveChildren,
};
