export interface IOption {
  text: string;
  next: string;
}

import { ReactNode } from 'react';

export interface IRootLayout {
  children: ReactNode;
}

export enum SurveyVariables {
  Gender = 'gender',
  WhoHaveChildren = 'who have children',
}

export enum QuestionId {
  GenderSelection = 'gender-selection',
  RelationshipStatus = 'relationship-status',
  SingleParent = 'single-parent',
  SingleRelationshipSelfAssessment = 'single-relationship-self-assessment',
  Overthink = 'overthink',
  ImportantToYou = 'important-to-you',
  EmotionalControl = 'emotional-control',
  Parent = 'parent',
  RelationshipSelfAssessment = 'relationship-self-assessment',
  PartnerIntrovertExtrovert = 'partner-introvert-extrovert',
  PartnerGender = 'partner-gender',
  PartnerPriority = 'partner-priority',
  RelationshipGoal = 'relationship-goal',
  AboutUs = 'about-us',
  HowItWork = 'how-it-work',
}

export enum ButtonClassName {
  Base = 'base-button',
  Active = 'base-button-active base-button',
}

export interface IQuestion {
  id: QuestionId;
  question: string;
  options: IOption[];
  variables?: SurveyVariables[];
  additionalText?: string;
}

export interface IAnswer {
  questionId: QuestionId;
  answer: string;
}
