export type SubjectType = 'Informática' | 'Língua Portuguesa' | 'Raciocínio Lógico';

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
  topic: string; // ex: "Redes - TCP/IP", "Linux - Comandos", "SQL", "Crase"
  source: string; // ex: "FGV / IBGE", "Cesgranrio", "Questão Inédita Reta Final"
  difficulty: DifficultyType;
  statement: string;
  options: { key: string; text: string }[];
  correctOption: string; // "A", "B", "C", "D" ou "E"
  explanation: QuestionExplanation;
}

export interface UserAnswerHistory {
  selectedOption: string;
  isCorrect: boolean;
  userRating?: 'easy' | 'medium' | 'hard';
  answeredAt: string;
  attemptsCount: number;
}

export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
  streakDays: number;
  lastStudyDate: string;
  answers: Record<string, UserAnswerHistory>;
  bookmarkedQuestionIds: string[];
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
