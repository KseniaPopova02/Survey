import { IAnswer, IQuestion, QuestionId } from '@/generalTypes';

export const replaceVariables = (
  question: IQuestion,
  answers: IAnswer[]
): string => {
  let questionText = question.question;
  const variables = question.variables || [];

  variables.forEach((variable) => {
    let value = '';
    switch (variable.toLowerCase()) {
      case 'gender':
        const genderAnswer = answers.find(
          (a) => a.questionId === QuestionId.GenderSelection
        );
        value = genderAnswer ? genderAnswer.answer : 'your gender';
        break;
      case 'who have children':
        const parentAnswer = answers.find(
          (a) =>
            a.questionId === QuestionId.SingleParent ||
            a.questionId === 'parent'
        );
        value =
          parentAnswer && parentAnswer.answer === 'Yes'
            ? 'who have children'
            : '';
        break;
    }
    const regex = new RegExp(`{${variable}}`, 'gi');
    questionText = questionText.replace(regex, value);
  });

  return questionText;
};
