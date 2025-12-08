export type Difficulty = 'easy' | 'medium' | 'hard';

export interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  rule?: string;
  difficulty: Difficulty;
  explanation: string;
}

export interface ExampleWithExplanation {
  sentence: string;
  subject: string;
  verb: string;
  reason: string;
}

export interface Rule {
  id: number;
  name: string;
  formula: string;
  explanation: string;
  examples: (string | ExampleWithExplanation)[];
  quiz?: QuizQuestion[];
}

export interface RuleCategory {
  title: string;
  borderColor: string;
  icon: string;
  rules: Rule[];
}

export type RuleQuestions = Record<number, QuizQuestion[]>;

export interface InitialQuizQuestions {
  easy: QuizQuestion[];
  medium: QuizQuestion[];
  hard: QuizQuestion[];
}