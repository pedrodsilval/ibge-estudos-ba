import React, { useState } from 'react';
import { 
  BookMarked, 
  XCircle, 
  Star, 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Filter,
  Layers
} from 'lucide-react';
import type { Question, UserProfile, SubjectType } from '../types/study';

interface CadernoErrosModeProps {
  questions: Question[];
  activeProfile: UserProfile;
  onUpdateProfile?: (updated: UserProfile) => void;
  onGoToFlashcard: (questionId: string) => void;
}

export const CadernoErrosMode: React.FC<CadernoErrosModeProps> = ({
  questions,
  activeProfile,
  onGoToFlashcard
}) => {
  const [filterType, setFilterType] = useState<'errors' | 'last_simulado' | 'bookmarks'>('errors');
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectType>('all');

  const errorQuestionIds = Object.entries(activeProfile.answers)
    .filter(([_, hist]) => !hist.isCorrect)
    .map(([id, _]) => id);

  const lastSimuladoIds = activeProfile.lastSimuladoQuestionIds || [];
  const lastSimuladoErrorIds = lastSimuladoIds.filter(id => {
    const hist = activeProfile.answers[id];
    return hist && !hist.isCorrect;
  });

  let targetQuestionIds: string[] = [];
  if (filterType === 'errors') {
    targetQuestionIds = errorQuestionIds;
  } else if (filterType === 'last_simulado') {
    targetQuestionIds = lastSimuladoErrorIds;
  } else {
    targetQuestionIds = activeProfile.bookmarkedQuestionIds;
  }

  const filteredQuestions = questions.filter(q => {
    const matchesTarget = targetQuestionIds.includes(q.id);
    const matchesSubject = subjectFilter === 'all' || q.subject === subjectFilter;
    return matchesTarget && matchesSubject;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6">
      
      {/* CABEÇALHO */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl">
        <div>
          <h2 className="text-2xl font-extrabold text-white flex items-center gap-2.5">
            <BookMarked className="w-7 h-7 text-rose-400 shrink-0" />
            Caderno de Erros & Favoritos
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Revisão focalizada por origem e matéria para zerar as dúvidas da banca IBFC.
          </p>
        </div>

        {/* ALTERNADOR DE FILTRO PRINCIPAL */}
        <div className="flex flex-wrap items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setFilterType('errors')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'errors'
                ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <XCircle className="w-4 h-4" />
            <span>Todos os Erros ({errorQuestionIds.length})</span>
          </button>

          <button
            onClick={() => setFilterType('last_simulado')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              filterType === 'last_simulado'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Último Simulado ({lastSimuladoErrorIds.length} erros)</span>
          </button>

          <button
            onClick={() => setFilterType('bookmarks')}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
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

      {/* BARRA DE FILTRO POR DISCIPLINA */}
      <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800/80 px-5 py-3.5 rounded-2xl">
        <div className="flex items-center space-x-2 text-xs text-slate-400 font-semibold">
          <Filter className="w-4 h-4 text-indigo-400" />
          <span>Filtrar Disciplina:</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {(['all', 'Informática', 'Língua Portuguesa', 'Raciocínio Lógico'] as const).map(subj => (
            <button
              key={subj}
              onClick={() => setSubjectFilter(subj)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border ${
                subjectFilter === subj
                  ? 'bg-slate-800 text-indigo-300 border-indigo-500/50 shadow-sm'
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {subj === 'all' ? 'Todas as Matérias' : subj}
            </button>
          ))}
        </div>
      </div>

      {/* RÓTULO DO ÚLTIMO SIMULADO */}
      {filterType === 'last_simulado' && activeProfile.lastSimuladoDate && (
        <div className="px-4 py-3 bg-indigo-950/40 border border-indigo-500/30 rounded-2xl text-xs text-indigo-300 flex items-center space-x-2">
          <Layers className="w-4 h-4 text-indigo-400 shrink-0" />
          <span>Exibindo erros cometidos especificamente em: <strong>{activeProfile.lastSimuladoDate}</strong></span>
        </div>
      )}

      {/* LISTAGEM DE QUESTÕES */}
      {filteredQuestions.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4 animate-bounce" />
          <h3 className="text-xl font-bold text-white mb-2">
            {filterType === 'errors' 
              ? 'Nenhum erro registrado!' 
              : filterType === 'last_simulado'
              ? 'Nenhum erro registrado no último simulado!'
              : 'Nenhuma questão favoritada.'}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {filterType === 'errors' 
              ? 'Parabéns! Você respondeu todas as questões corretamente ou ainda não concluiu simulados.'
              : filterType === 'last_simulado'
              ? 'Você gabaritou o último simulado ou ainda não realizou um teste recente!'
              : 'Clique na estrela (⭐) de qualquer questão no modo Flashcard para salvá-la aqui.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs text-slate-400 font-mono px-2">
            Exibindo <strong>{filteredQuestions.length}</strong> de <strong>{targetQuestionIds.length}</strong> questões nesta categoria:
          </div>

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

                  {hist && hist.sourceContext && (
                    <span className="px-2.5 py-1 bg-slate-950 text-indigo-300 border border-slate-800 rounded-lg text-[11px] font-mono">
                      📍 {hist.sourceContext}
                    </span>
                  )}
                </div>

                {/* HISTÓRICO DE RESPOSTA */}
                {hist && (
                  <div className="p-3 bg-slate-950 rounded-xl text-xs flex items-center justify-between border border-slate-800">
                    <span className="text-slate-400">
                      Sua última marcação: <span className="text-rose-400 font-bold">Opção {hist.selectedOption}</span>
                    </span>
                    <span className="text-emerald-400 font-bold">
                      Gabarito Oficial: Opção {q.correctOption}
                    </span>
                  </div>
                )}

                {/* ENUNCIADO COMPLETO */}
                <p className="text-sm sm:text-base text-slate-100 font-medium leading-relaxed">
                  {q.statement}
                </p>

                {/* BIZU DA QUESTÃO */}
                <div className="p-3.5 bg-indigo-950/60 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 flex items-start space-x-2">
                  <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                  <span><strong>Bizu da Prova IBFC:</strong> {q.explanation.bizu}</span>
                </div>

                {/* AÇÕES */}
                <div className="flex justify-end pt-1">
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
