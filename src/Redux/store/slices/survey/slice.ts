import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Answer, TInitialStateSurvey } from './types';
import { QuestionId } from '@/generalTypes';

const initialState: TInitialStateSurvey = {
  answers: [],
};

const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setAnswer(state, action: PayloadAction<Answer>) {
      if (action.payload.questionId === QuestionId.HowItWork) {
        return;
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
