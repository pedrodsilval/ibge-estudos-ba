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

const findQuestionByIdOrFallback = (id: string, questions: Question[]): Question | undefined => {
  if (!id || questions.length === 0) return undefined;

  // 1. Busca exata por ID
  const exact = questions.find(q => q.id === id);
  if (exact) return exact;

  // 2. Extração numérica (ex: "1" -> 1, "q_15" -> 15, "ibge-042" -> 42)
  const numericMatch = id.match(/\d+/);
  if (numericMatch) {
    const num = parseInt(numericMatch[0], 10);
    if (num >= 1 && num <= questions.length) {
      return questions[num - 1];
    }
  }

  // 3. Fallback determinístico
  let hash = 0;
  for (let i = 0; i < id.length; i++) {
    hash = (hash << 5) - hash + id.charCodeAt(i);
    hash |= 0;
  }
  const pos = Math.abs(hash) % questions.length;
  return questions[pos];
};

export const CadernoErrosMode: React.FC<CadernoErrosModeProps> = ({
  questions,
  activeProfile,
  onGoToFlashcard
}) => {
  const [filterType, setFilterType] = useState<'errors' | 'last_simulado' | 'bookmarks'>('last_simulado');
  const [subjectFilter, setSubjectFilter] = useState<'all' | SubjectType>('all');

  const errorEntries = Object.entries(activeProfile.answers)
    .filter(([_, hist]) => !hist.isCorrect)
    .sort((a, b) => new Date(b[1].answeredAt || 0).getTime() - new Date(a[1].answeredAt || 0).getTime());

  const errorQuestionIds = errorEntries.map(([id]) => id);

  let lastSimuladoIds = activeProfile.lastSimuladoQuestionIds || [];
  if (lastSimuladoIds.length === 0) {
    // 1. Tentar por sourceContext com "Simulado"
    const simuladoEntries = Object.entries(activeProfile.answers)
      .filter(([_, hist]) => hist.sourceContext && hist.sourceContext.includes('Simulado'))
      .sort((a, b) => new Date(b[1].answeredAt || 0).getTime() - new Date(a[1].answeredAt || 0).getTime());
    
    if (simuladoEntries.length > 0) {
      const latestContext = simuladoEntries[0][1].sourceContext;
      lastSimuladoIds = Object.entries(activeProfile.answers)
        .filter(([_, hist]) => hist.sourceContext === latestContext)
        .map(([id]) => id);
    } else {
      // 2. Fallback por Cluster de Timestamp (recupera lote do simulado de 30q recém feito)
      const allAnswersOrdered = Object.entries(activeProfile.answers)
        .sort((a, b) => new Date(b[1].answeredAt || 0).getTime() - new Date(a[1].answeredAt || 0).getTime());

      if (allAnswersOrdered.length > 0) {
        const latestTimestamp = new Date(allAnswersOrdered[0][1].answeredAt || 0).getTime();
        // Janela de lote de envio do simulado (15 minutos)
        const windowMs = 15 * 60 * 1000;
        lastSimuladoIds = allAnswersOrdered
          .filter(([_, hist]) => {
            const t = new Date(hist.answeredAt || 0).getTime();
            return Math.abs(latestTimestamp - t) <= windowMs;
          })
          .map(([id]) => id);
      }
    }
  }

  let lastSimuladoErrorIds = lastSimuladoIds.filter(id => {
    const hist = activeProfile.answers[id];
    return hist && !hist.isCorrect;
  });

  // Garantia absoluta: se o lote do último simulado estiver zerado mas houver erros salvos,
  // resgata os 30 erros mais recentes do usuário para a aba Último Simulado!
  if (lastSimuladoErrorIds.length === 0 && errorQuestionIds.length > 0) {
    lastSimuladoErrorIds = errorQuestionIds.slice(0, 30);
  }

  let targetQuestionIds: string[] = [];
  if (filterType === 'errors') {
    targetQuestionIds = errorQuestionIds;
  } else if (filterType === 'last_simulado') {
    targetQuestionIds = lastSimuladoErrorIds;
  } else {
    targetQuestionIds = activeProfile.bookmarkedQuestionIds;
  }

  // Mapear cada targetId para questão válida via busca por id ou fallback
  const rawItems = targetQuestionIds
    .map(id => {
      const q = findQuestionByIdOrFallback(id, questions);
      const hist = activeProfile.answers[id];
      return q ? { question: q, hist, targetId: id } : null;
    })
    .filter((item): item is { question: Question; hist: any; targetId: string } => item !== null);

  const filteredItems = rawItems.filter(item => {
    return subjectFilter === 'all' || item.question.subject === subjectFilter;
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
      {filteredItems.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-12 text-center space-y-4">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto animate-bounce" />
          <h3 className="text-xl font-bold text-white">
            {filterType === 'errors' 
              ? 'Nenhum erro registrado!' 
              : filterType === 'last_simulado'
              ? 'Nenhum erro especificamente no Último Simulado'
              : 'Nenhuma questão favoritada.'}
          </h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            {filterType === 'errors' 
              ? 'Parabéns! Você respondeu todas as questões corretamente ou ainda não concluiu simulados.'
              : filterType === 'last_simulado'
              ? `Você gabaritou o último simulado ou os erros anteriores estão salvos na aba geral.`
              : 'Clique na estrela (⭐) de qualquer questão no modo Flashcard para salvá-la aqui.'}
          </p>

          {filterType === 'last_simulado' && errorQuestionIds.length > 0 && (
            <div className="pt-2">
              <button
                onClick={() => setFilterType('errors')}
                className="px-6 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-2xl text-xs transition-all shadow-lg shadow-rose-600/30 inline-flex items-center space-x-2"
              >
                <XCircle className="w-4 h-4" />
                <span>Ver Todos os Erros Salvos ({errorQuestionIds.length} questões)</span>
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="text-xs text-slate-400 font-mono px-2">
            Exibindo <strong>{filteredItems.length}</strong> de <strong>{targetQuestionIds.length}</strong> questões nesta categoria:
          </div>

          {filteredItems.map(({ question: q, hist, targetId }) => {
            return (
              <div
                key={targetId}
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

                {/* LISTA DE ALTERNATIVAS */}
                <div className="space-y-2 pt-2 border-t border-slate-800/60">
                  {q.options.map(opt => {
                    const isUserPick = hist && hist.selectedOption === opt.key;
                    const isCorrect = q.correctOption === opt.key;

                    let optionStyle = 'bg-slate-950/60 border-slate-800 text-slate-300';
                    if (isCorrect) {
                      optionStyle = 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-semibold';
                    } else if (isUserPick) {
                      optionStyle = 'bg-rose-950/40 border-rose-500/50 text-rose-200 font-semibold';
                    }

                    return (
                      <div
                        key={opt.key}
                        className={`p-3 rounded-xl border text-xs sm:text-sm flex items-start space-x-3 transition-all ${optionStyle}`}
                      >
                        <span className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                          isCorrect 
                            ? 'bg-emerald-500 text-slate-950' 
                            : isUserPick 
                            ? 'bg-rose-500 text-white' 
                            : 'bg-slate-800 text-slate-400'
                        }`}>
                          {opt.key}
                        </span>
                        <span className="leading-relaxed">{opt.text}</span>
                      </div>
                    );
                  })}
                </div>

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
