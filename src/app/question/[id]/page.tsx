import React from 'react';
import ClientQuestionPage from '../../../pages/QuestionPage/QuestionPage';
import { questions } from '@/survey-config';
import { IPage } from './types';

export async function generateStaticParams() {
  const paths = questions.map((question) => ({
    params: { id: question.id },
  }));

  return paths;
}

const Page: React.FC<IPage> = ({ params }) => {
  const { id } = params;
  const question = questions.find((q) => q.id === id);

  if (!question) {
    throw new Error('Question not found');
  }

  return (
    <div>
      <ClientQuestionPage question={question} />
    </div>
  );
};

export default Page;
