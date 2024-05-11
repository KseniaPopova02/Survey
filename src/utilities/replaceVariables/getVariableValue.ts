import { IAnswer, QuestionId } from '@/generalTypes';
import { variableDictionary } from './variableDictionary';

export function getGender(answers: IAnswer[]): string {
  const genderAnswer = answers.find(
    (a) => a.questionId === QuestionId.GenderSelection
  );
  return genderAnswer ? genderAnswer.answer : 'your gender';
}

export function getWhoHaveChildren(answers: IAnswer[]): string {
  const parentAnswer = answers.find(
    (a) =>
      a.questionId === QuestionId.SingleParent ||
      a.questionId === QuestionId.Parent
  );
  return parentAnswer && parentAnswer.answer === 'Yes'
    ? 'who have children'
    : '';
}

export const getVariableValue = (
  varName: string,
  answers: IAnswer[]
): string => {
  const getVarFunc = variableDictionary[varName.toLowerCase()];
  return getVarFunc ? getVarFunc(answers) : '';
};
