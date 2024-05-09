import { useAppSelector } from '@/Redux';
import { IAnswer } from '@/generalTypes';

export const useCurrentAnswer = (questionId: string): string | undefined => {
  const answers = useAppSelector((state) => state.survey.answers as IAnswer[]);
  return answers.find((answer) => answer.questionId === questionId)?.answer;
};
