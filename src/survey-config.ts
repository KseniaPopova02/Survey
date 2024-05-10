import { QuestionId, SurveyVariables } from './generalTypes';

export const questions = [
  {
    id: QuestionId.GenderSelection,
    question: 'Select your gender:',
    options: [
      { text: 'Female', next: 'relationship-status' },
      { text: 'Male', next: 'relationship-status' },
    ],
  },
  {
    id: QuestionId.RelationshipStatus,
    question:
      'So we can get to know you better, tell us about your relationship status.',
    options: [
      { text: 'Single', next: 'single-parent' },
      { text: 'In a relationship', next: 'parent' },
    ],
  },
  {
    id: QuestionId.SingleParent,
    question: 'Are you a single parent?',
    options: [
      { text: 'Yes', next: 'single-relationship-self-assessment' },
      { text: 'No', next: 'single-relationship-self-assessment' },
    ],
  },
  {
    id: QuestionId.SingleRelationshipSelfAssessment,
    question:
      'Single {gender} {who have children} need a slightly different approach to find their perfect partner. But first, how did you feel in your last relationship?',
    options: [
      {
        text: 'I was unhappy with how things were going in my relationship',
        next: 'overthink',
      },
      {
        text: 'I was unhappy with parts of my relationship, but some things were working',
        next: 'overthink',
      },
      {
        text: 'I was generally happy with my relationship',
        next: 'overthink',
      },
      { text: 'I’ve never been in a relationship', next: 'overthink' },
    ],

    variables: [SurveyVariables.Gender, SurveyVariables.WhoHaveChildren],
  },
  {
    id: QuestionId.Overthink,
    question: 'Do you tend to overthink?',
    options: [
      {
        text: 'Yes',
        next: 'how-it-work',
        finalDestination: 'important-to-you',
      },
      {
        text: 'No',
        next: 'how-it-work',
        finalDestination: 'emotional-control',
      },
    ],
  },
  {
    id: QuestionId.ImportantToYou,
    question: 'What is most important to you?',
    options: [
      { text: 'Success', next: 'about-us' },
      { text: 'Romance', next: 'about-us' },
      { text: 'Stability', next: 'about-us' },
      { text: 'Freedom', next: 'about-us' },
    ],
  },
  {
    id: QuestionId.EmotionalControl,
    question: 'Is emotional control tricky for you?',
    options: [
      { text: 'Yes', next: 'about-us' },
      { text: 'Sometimes', next: 'about-us' },
      { text: 'Rarely', next: 'about-us' },
      { text: 'Not at all', next: 'about-us' },
    ],
  },
  {
    id: QuestionId.Parent,
    question: 'Are you a parent?',
    options: [
      { text: 'Yes', next: 'relationship-self-assessment' },
      { text: 'No', next: 'relationship-self-assessment' },
    ],
  },
  {
    id: QuestionId.RelationshipSelfAssessment,
    question:
      '{Gender} {who have children} need a slightly different approach to improve their relationship. Which statement best describes you?',

    options: [
      {
        text: 'I’m very unhappy with how things are going in my relationship',
        next: 'partner-introvert-extrovert',
      },
      {
        text: 'I’m unhappy with parts of my relationship, but some things are working well',
        next: 'partner-introvert-extrovert',
      },
      {
        text: 'I’m generally happy in my relationship',
        next: 'partner-introvert-extrovert',
      },
    ],
    variables: [SurveyVariables.Gender, SurveyVariables.WhoHaveChildren],
  },
  {
    id: QuestionId.PartnerIntrovertExtrovert,
    question: 'Is your partner an introvert or extrovert?',
    options: [
      { text: 'Introvert', next: 'partner-gender' },
      { text: 'Extrovert', next: 'partner-gender' },
      { text: 'A bit of both', next: 'partner-gender' },
    ],
  },
  {
    id: QuestionId.PartnerGender,
    question: 'What is your partner’s gender?',
    options: [
      { text: 'Male', next: 'partner-priority' },
      { text: 'Female', next: 'partner-priority' },
    ],
  },
  {
    id: QuestionId.PartnerPriority,
    question: 'Do you agree with the statement below?',
    additionalText: 'My partner and I make sex a priority in our relationship',
    options: [
      { text: 'Strongly agree', next: 'relationship-goal' },
      { text: 'Agree', next: 'relationship-goal' },
      { text: 'Neutral', next: 'relationship-goal' },
      { text: 'Disagree', next: 'relationship-goal' },
      { text: 'Strongly disagree', next: 'relationship-goal' },
    ],
  },
  {
    id: QuestionId.RelationshipGoal,
    question: 'When you think about your relationship goals, you feel...?',

    options: [
      {
        text: 'Optimistic! They are totally doable, with some guidance.',
        next: 'about-us',
      },
      {
        text: 'Cautious. I’ve struggled before, but I’m hopeful.',
        next: 'about-us',
      },
      { text: 'I’m feeling a little anxious, honestly.', next: 'about-us' },
    ],
  },
  {
    id: QuestionId.AboutUs,
    question: 'Where did you hear about us?',
    options: [
      { text: 'Poster or Billboard', next: 'end' },
      { text: 'Friend or Family', next: 'end' },
      { text: 'Instagram', next: 'end' },
      { text: 'Direct Mail or Package Insert', next: 'end' },
      { text: 'Online TV or Streaming TV', next: 'end' },
      { text: 'TV', next: 'end' },
      { text: 'Radio', next: 'end' },
      { text: 'Search Engine (Google, Bing, etc.)', next: 'end' },
      { text: 'Newspaper or Magazine', next: 'end' },
      { text: 'Facebook', next: 'end' },
      { text: 'Blog Post or Website Review', next: 'end' },
      { text: 'Podcast', next: 'end' },
      { text: 'Influencer', next: 'end' },
      { text: 'Youtube', next: 'end' },
      { text: 'Pinterest', next: 'end' },
      { text: 'Other', next: 'end' },
    ],
  },
  {
    id: QuestionId.HowItWork,
    question: 'So how does it work?',
    additionalText:
      'We analyze hundreds of data points to create your unique astrological blueprint. This is combined with AI to tailor-make your astrological insights, based on your answers. We’re going to change your relationship with astrology.',
    options: [{ text: 'Next', next: 'handleDynamicRouting' }],
  },
];
