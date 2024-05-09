import { IQuestion } from './types';
import './styles.css';

export const Question: React.FC<IQuestion> = ({
  questionText,
  additionalText,
}) => (
  <div className={additionalText ? 'question-wrapper' : ''}>
    <h1>{questionText}</h1>
    {additionalText && <p>{additionalText}</p>}
  </div>
);
