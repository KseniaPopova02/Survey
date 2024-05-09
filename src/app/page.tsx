// 'use client';

// import { QuestionBlock } from '@/modules';
// import { useEffect, useState } from 'react';
// import questionData from '@/survey-config.json';
// import { ButtonClassName, QuestionId, QuestionType } from './types';

// const SurveyStarter = () => {
//   const [currentQuestion, setCurrentQuestion] =
//     useState<QuestionType>(undefined);

//   useEffect(() => {
//     const question = questionData.find(
//       (q) => q.id === QuestionId.GenderSelection
//     );
//     if (question) {
//       setCurrentQuestion({
//         ...question,
//         id: QuestionId[question.id as keyof typeof QuestionId],
//       });
//     }
//   }, []);

//   return (
//     currentQuestion && (
//       <QuestionBlock
//         questionText={currentQuestion.question}
//         options={currentQuestion.options}
//         additionalText={currentQuestion.additionalText}
//         onSelect={(option) => console.log('Selected:', option)}
//         btnClassName={ButtonClassName.Base}
//       />
//     )
//   );
// };

// export default SurveyStarter;
