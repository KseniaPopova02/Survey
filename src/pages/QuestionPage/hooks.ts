import { useRouter } from 'next/navigation';
import { IAnswer, IOption, IQuestion, QuestionId } from '@/generalTypes';
import { SURVEY_PATHS } from '@/routes';
import { useState, useEffect } from 'react';
import { replaceVariables } from '@/utilities';

export const useSurveyRouting = (
  answers: IAnswer[],
  handleSetAnswer: (option: IOption) => void
) => {
  const router = useRouter();

  const handleOptionClick = (option: IOption) => {
    handleSetAnswer(option);
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

  return { handleOptionClick };
};

export const useQuestionState = (question: IQuestion, answers: IAnswer[]) => {
  const [questionText, setQuestionText] = useState(question.question);

  useEffect(() => {
    const updatedQuestionText = replaceVariables(question, answers);
    setQuestionText(updatedQuestionText);
  }, [question, answers]);

  return questionText;
};

export const useSpecialPageEffect = (pathname: string) => {
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
};
