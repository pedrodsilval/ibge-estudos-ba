import React, { useState } from 'react';
import { 
  BookMarked, 
  XCircle, 
  Star, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight
} from 'lucide-react';
import type { Question, UserProfile } from '../types/study';

interface CadernoErrosModeProps {
  questions: Question[];
  activeProfile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  onGoToFlashcard: (questionId: string) => void;
}

export const CadernoErrosMode: React.FC<CadernoErrosModeProps> = ({
  questions,
  activeProfile,
  onGoToFlashcard
}) => {
  const [filterType, setFilterType] = useState<'errors' | 'bookmarks'>('errors');

  const errorQuestionIds = Object.entries(activeProfile.answers)
    .filter(([_, hist]) => !hist.isCorrect)
    .map(([id, _]) => id);

  const targetQuestionIds = filterType === 'errors' 
    ? errorQuestionIds 
    : activeProfile.bookmarkedQuestionIds;

  const filteredQuestions = questions.filter(q => targetQuestionIds.includes(q.id));

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2">
            <BookMarked className="w-7 h-7 text-rose-400" />
            Caderno de Erros & Favoritos
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Foque nos seus pontos fracos para zerar os erros até domingo.
          </p>
        </div>

        {/* ALTERNADOR DE FILTRO */}
        <div className="flex items-center space-x-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setFilterType('errors')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'errors'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>Erradas ({errorQuestionIds.length})</span>
          </button>
          <button
            onClick={() => setFilterType('bookmarks')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'bookmarks'
                ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Star className="w-4 h-4" />
            <span>Favoritas ({activeProfile.bookmarkedQuestionIds.length})</span>
          </button>
        </div>
      </div>

      {/* LISTAGEM DE QUESTÕES */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-white mb-2">
            {filterType === 'errors' ? 'Nenhum erro registrado!' : 'Nenhuma questão favoritada.'}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {filterType === 'errors' 
              ? 'Parabéns! Você respondeu todas as questões corretamente ou ainda não fez o simulado.'
              : 'Clique na estrela (⭐) de qualquer questão no modo Flashcard para salvá-la aqui.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredQuestions.map(q => {
            const hist = activeProfile.answers[q.id];
            return (
              <div
                key={q.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all shadow-xl space-y-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-lg text-xs font-semibold">
                      {q.subject}
                    </span>
                    <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium">
                      {q.topic}
                    </span>
                    <span className="px-2 py-1 bg-slate-950 text-slate-400 rounded-lg text-[11px] font-mono border border-slate-800">
                      {q.source}
                    </span>
                  </div>

                  {hist && (
                    <span className="text-xs font-mono text-slate-400">
                      Sua última resposta: <span className="text-rose-400 font-bold">Opção {hist.selectedOption}</span> (Gabarito: {q.correctOption})
                    </span>
                  )}
                </div>

                {/* ENUNCIADO RESUMIDO */}
                <p className="text-sm sm:text-base text-slate-200 line-clamp-2">
                  {q.statement}
                </p>

                {/* BIZU DA QUESTÃO */}
                <div className="p-3 bg-indigo-950/60 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Bizu da Prova:</strong> {q.explanation.bizu}</span>
                </div>

                {/* AÇÕES */}
                <div className="flex justify-end pt-2">
                  <button
                    onClick={() => onGoToFlashcard(q.id)}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all flex items-center space-x-2 shadow-md shadow-indigo-600/30"
                  >
                    <span>Refazer no Flashcard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

    </div>
  );
};
