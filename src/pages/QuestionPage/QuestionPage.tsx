'use client';
import { usePathname, useRouter } from 'next/navigation';
import { QuestionBlock } from '@/modules';
import { IOption, QuestionId } from '@/generalTypes';
import { useAppDispatch, setAnswer, useAppSelector } from '@/Redux';
import { useEffect, useState } from 'react';
import { IQuestionPage } from './types';
import { replaceVariables } from '@/utilities';
import { SURVEY_PATHS } from '@/routes';

const QuestionPage: React.FC<IQuestionPage> = ({ question }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const answers = useAppSelector((state) => state.survey.answers);
  const [questionText, setQuestionText] = useState(question.question);

  const pathname = usePathname();

  useEffect(() => {
    const updatedQuestionText = replaceVariables(question, answers);
    setQuestionText(updatedQuestionText);
  }, [question, answers]);

  useEffect(() => {
    const isSpecialPage = pathname === SURVEY_PATHS.HOW_IT_WORK;
    if (isSpecialPage) {
      document.body.classList.add('how-it-work');
    } else {
      document.body.classList.remove('how-it-work');
    }

    return () => {
      document.body.classList.remove('how-it-work');
    };
  }, [pathname]);

  const handleOptionClick = (option: IOption) => {
    dispatch(
      setAnswer({
        questionId: question.id,
        answer: option.text,
      })
    );
    if (option.next === 'end') {
      router.push(SURVEY_PATHS.END);
    } else if (option.next === 'handleDynamicRouting') {
      const overthinkAnswerObj = answers.find(
        (answer) => answer.questionId === QuestionId.Overthink
      );
      const overthinkAnswer = overthinkAnswerObj
        ? overthinkAnswerObj.answer
        : null;

      const dynamicRoute =
        overthinkAnswer === 'Yes'
          ? QuestionId.ImportantToYou
          : QuestionId.EmotionalControl;
      router.push(`${SURVEY_PATHS.BASE}/${dynamicRoute}`);
    } else if (option.next) {
      router.push(`${SURVEY_PATHS.BASE}/${option.next}`);
    }
  };

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
