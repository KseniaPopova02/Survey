import { IOption } from '@/generalTypes';

export interface IQuestionBlock {
  questionText: string;
  options: IOption[];
  additionalText?: string;
  onClick: (option: IOption) => void;
  questionId: string;
}
