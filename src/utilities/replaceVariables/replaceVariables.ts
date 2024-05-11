import { IAnswer, IQuestion } from '@/generalTypes';
import { getVariableValue } from './getVariableValue';

export const replaceVariables = (
  question: IQuestion,
  answers: IAnswer[]
): string => {
  let questionText = question.question;
  const variables = question.variables || [];

  variables.forEach((variable) => {
    const value = getVariableValue(variable, answers);
    const regex = new RegExp(`{${variable}}`, 'gi');
    questionText = questionText.replace(regex, value);
  });

  return questionText;
};
