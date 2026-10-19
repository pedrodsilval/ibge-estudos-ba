export type SubjectType = 'Qualidade de Software' | 'Banco de Dados';

export type DifficultyType = 'Fácil' | 'Médio' | 'Difícil';

export interface OptionAnalysis {
  key: string;
  isCorrect: boolean;
  reason: string;
}

export interface QuestionExplanation {
  summary: string;
  optionsAnalysis: OptionAnalysis[];
  bizu: string; // Dica relâmpago de retenção
}

export interface Question {
  id: string;
  subject: SubjectType;
  topic: string; // ex: "Revisões Técnicas (RTF)", "Caixa-Branca / McCabe", "JUnit 5", "Formas Normais", "SQL DDL/DML"
  source: string; // ex: "UNIFACS - Folha de Revisão Oficial", "Prof. Enderson Nobre", "Prof. Luiz Henrique", "Pressman / Sommerville"
  difficulty: DifficultyType;
  statement: string;
  options: { key: string; text: string }[];
  correctOption: string; // "A", "B", "C", "D" ou "E"
  explanation: QuestionExplanation;
}

export interface DiscursiveQuestion {
  id: string;
  subject: SubjectType;
  topic: string;
  source: string;
  difficulty: DifficultyType;
  statement: string;
  contextHint?: string;
  expectedAnswer: string;
  keywords: string[];
  goldenBizu: string;
  gradingCriteria: string[];
  isFromClassroomReview?: boolean;
  classroomOrder?: number;
  legacyId?: string;
  pdfMapping?: string;
}

export interface DiscursiveAnswerHistory {
  userDraft: string;
  selfScore?: number; // 0 a 10
  checkedKeywords: string[];
  savedAt: string;
  autoScore?: number;
  autoFeedback?: string;
}

export interface UserAnswerHistory {
  selectedOption: string;
  isCorrect: boolean;
  userRating?: 'easy' | 'medium' | 'hard';
  answeredAt: string;
  attemptsCount: number;
  sourceContext?: string; // ex: "Simulado UNIFACS"
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  streakDays: number;
  lastStudyDate: string;
  answers: Record<string, UserAnswerHistory>;
  discursiveAnswers?: Record<string, DiscursiveAnswerHistory>;
  bookmarkedQuestionIds: string[];
  lastSimuladoQuestionIds?: string[];
  lastSimuladoDate?: string;
}

export interface SimuladoResult {
  id: string;
  date: string;
  totalQuestions: number;
  correctAnswers: number;
  timeSpentSeconds: number;
  scorePercentage: number;
  subjectBreakdown: Record<SubjectType, { total: number; correct: number }>;
}

export interface BackupData {
  version: string;
  exportedAt: string;
  profiles: UserProfile[];
  activeProfileId: string;
}
