import {
  IAnswer,
  IQuestion,
  QuestionId,
  SurveyVariables,
} from '@/generalTypes';

export const replaceVariables = (
  question: IQuestion,
  answers: IAnswer[]
): string => {
  let questionText = question.question;
  const variables = question.variables || [];

  variables.forEach((variable) => {
    let value = '';
    switch (variable.toLowerCase()) {
      case SurveyVariables.Gender:
        const genderAnswer = answers.find(
          (a) => a.questionId === QuestionId.GenderSelection
        );
        value = genderAnswer ? genderAnswer.answer : 'your gender';
        break;
      case SurveyVariables.WhoHaveChildren:
        const parentAnswer = answers.find(
          (a) =>
            a.questionId === QuestionId.SingleParent ||
            a.questionId === QuestionId.Parent
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
