import { Button, Question } from '@/components';
import { IQuestionBlock } from './types';
import './styles.css';
import { useId } from 'react';
import { getButtonClassName } from './helpers';
import { useCurrentAnswer } from './hooks';

export const QuestionBlock: React.FC<IQuestionBlock> = ({
  questionText,
  options,
  additionalText,
  onClick,
  questionId,
}) => {
  const idBase = useId();
  const currentAnswer = useCurrentAnswer(questionId);

  return (
    <div className="question-block-wrapper">
      <Question questionText={questionText} additionalText={additionalText} />
      <div className="question-block-btn-wrapper">
        {options.map((option, index) => (
          <Button
            key={`${idBase}-${index}`}
            innerText={option.text}
            className={getButtonClassName(option.text, currentAnswer)}
            onClick={() => onClick(option)}
          />
        ))}
      </div>
    </div>
  );
};
