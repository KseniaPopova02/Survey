'use client';
import { usePathname } from 'next/navigation';
import { QuestionBlock } from '@/modules';
import { useAppDispatch, useAppSelector, setAnswer } from '@/Redux';
import {
  usePageReloadRedirect,
  useQuestionState,
  useSpecialPageEffect,
  useSurveyRouting,
} from './hooks';
import { IQuestionPage } from './types';
import { IOption } from '@/generalTypes';

const QuestionPage: React.FC<IQuestionPage> = ({ question }) => {
  usePageReloadRedirect();

  const dispatch = useAppDispatch();
  const answers = useAppSelector((state) => state.survey.answers);
  const pathname = usePathname() || '';
  useSpecialPageEffect(pathname);

  const questionText = useQuestionState(question, answers);

  const handleSetAnswer = (option: IOption) => {
    dispatch(
      setAnswer({
        questionId: question.id,
        answer: option.text,
      })
    );
  };

  const { handleOptionClick } = useSurveyRouting(answers, handleSetAnswer);

  return (
    <QuestionBlock
      questionId={question.id}
      questionText={questionText}
      options={question.options}
      additionalText={question.additionalText}
      onClick={handleOptionClick}
    />
  );
};

export default QuestionPage;
