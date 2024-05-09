export interface Answer {
  questionId: string;
  answer: string;
}

export type TInitialStateSurvey = {
  answers: Answer[];
};
