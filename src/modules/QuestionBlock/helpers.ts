import { ButtonClassName } from '@/generalTypes';

export const getButtonClassName = (
  optionText: string,
  currentAnswer: string | undefined
): ButtonClassName =>
  optionText === currentAnswer ? ButtonClassName.Active : ButtonClassName.Base;
