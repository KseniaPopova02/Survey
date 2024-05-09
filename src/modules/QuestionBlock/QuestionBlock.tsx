import { Button, Question } from '@/components';
import { IQuestionBlock } from './types';
import './styles.css';
import { useId } from 'react';
import { useAppSelector } from '@/Redux';
import { ButtonClassName } from '@/generalTypes';

export const QuestionBlock: React.FC<IQuestionBlock> = ({
  questionText,
  options,
  additionalText,
  onClick,
  questionId,
}) => {
  const idBase = useId();

  const answers = useAppSelector((state) => state.survey.answers);

  const currentAnswer = answers.find(
    (answer) => answer.questionId === questionId
  )?.answer;

  const getButtonClassName = (optionText: string) => {
    return optionText === currentAnswer
      ? ButtonClassName.Active
      : ButtonClassName.Base;
  };

  return (
    <div className="question-block-wrapper">
      <Question questionText={questionText} additionalText={additionalText} />
      <div className="question-block-btn-wrapper">
        {options.map((option, index) => (
          <Button
            key={`${idBase}-${index}`}
            innerText={option.text}
            className={getButtonClassName(option.text)}
            onClick={() => onClick(option)}
          />
        ))}
      </div>
    </div>
  );
};
