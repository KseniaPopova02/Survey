import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TInitialStateSurvey } from './types';
import { QuestionId } from '@/generalTypes';
import { IAnswer } from '@/generalTypes';

const initialState: TInitialStateSurvey = {
  answers: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<IAnswer>) {
      if (action.payload.questionId === QuestionId.HowItWork) {
        return;
      }

      const conflictingQuestions = [QuestionId.SingleParent, QuestionId.Parent];

      if (conflictingQuestions.includes(action.payload.questionId)) {
        state.answers = state.answers.filter(
          (answer) =>
            !conflictingQuestions.includes(answer.questionId) ||
            answer.questionId === action.payload.questionId
        );
      }

      const index = state.answers.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );

      if (index !== -1) {
        state.answers[index] = action.payload;
      } else {
        state.answers.push(action.payload);
      }
    },
  },
});

export const { setAnswer } = surveySlice.actions;
export const surveyReducer = surveySlice.reducer;
