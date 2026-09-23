import React from 'react';
import { 
  Award, 
  Flame, 
  CheckCircle2, 
  XCircle, 
  BarChart2, 
  BookOpen, 
  Sparkles,
  Target,
  ShieldCheck,
  AlertTriangle
} from 'lucide-react';
import type { Question, UserProfile, SubjectType } from '../types/study';

interface DashboardProps {
  questions: Question[];
  activeProfile: UserProfile;
  onNavigateTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  questions,
  activeProfile,
  onNavigateTab
}) => {
  const answeredEntries = Object.entries(activeProfile.answers);
  const totalAnswered = answeredEntries.length;
  const correctCount = answeredEntries.filter(([_, h]) => h.isCorrect).length;
  const accuracyPercentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Estatísticas por disciplina
  const subjectStats: Record<SubjectType, { total: number; answered: number; correct: number }> = {
    'Informática': { total: 0, answered: 0, correct: 0 },
    'Língua Portuguesa': { total: 0, answered: 0, correct: 0 },
    'Raciocínio Lógico': { total: 0, answered: 0, correct: 0 }
  };

  questions.forEach(q => {
    if (subjectStats[q.subject]) {
      subjectStats[q.subject].total += 1;
      const history = activeProfile.answers[q.id];
      if (history) {
        subjectStats[q.subject].answered += 1;
        if (history.isCorrect) subjectStats[q.subject].correct += 1;
      }
    }
  });

  // Region target (Salvador default: 83% / 50q)
  const [selectedRegion, setSelectedRegion] = React.useState<'salvador' | 'interior'>('salvador');

  const targetPct = selectedRegion === 'salvador' ? 83 : 75;
  const isApprovalZone = accuracyPercentage >= targetPct;
  const isAttentionZone = accuracyPercentage >= (targetPct - 20) && accuracyPercentage < targetPct;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* BOAS VINDAS & COUNTER */}
      <div className="bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-3xl shadow-inner">
            {activeProfile.avatar}
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-white">
              Olá, {activeProfile.name}! 👋
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Reta final para o Concurso do IBGE (Agente Censitário de Informática - Salvador / Bahia).
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-slate-950/80 px-4 py-3 rounded-2xl border border-slate-800 text-center">
            <span className="text-[10px] text-slate-400 font-semibold uppercase block">Streak de Estudos</span>
            <div className="text-xl font-extrabold text-amber-400 flex items-center justify-center gap-1 mt-0.5">
              <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
              <span>{activeProfile.streakDays} Dia(s)</span>
            </div>
          </div>
        </div>
      </div>

      {/* METRICAS CHAVE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Aproveitamento</span>
            <Award className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="text-3xl font-extrabold text-white mt-2">{accuracyPercentage}%</div>
          <p className="text-xs text-slate-500 mt-1">Taxa geral de acertos</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Questões Feitas</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-400 mt-2">{totalAnswered}</div>
          <p className="text-xs text-slate-500 mt-1">Total acumulado</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Acertos</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
          <div className="text-3xl font-extrabold text-emerald-400 mt-2">{correctCount}</div>
          <p className="text-xs text-slate-500 mt-1">Questões dominadas</p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase">Erros para Refazer</span>
            <XCircle className="w-5 h-5 text-rose-400" />
          </div>
          <div className="text-3xl font-extrabold text-rose-400 mt-2">{totalAnswered - correctCount}</div>
          <p className="text-xs text-slate-500 mt-1">Pontos de atenção</p>
        </div>

      </div>

      {/* CALCULADORA DA ZONA DE APROVAÇÃO IBFC (60 QUESTÕES) */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <Target className="w-5 h-5 text-amber-400" />
                Simulador da Zona de Aprovação (Banca IBFC)
              </h3>
            </div>
            <p className="text-xs text-slate-400 mt-1">
              Metas calculadas com base na nota de corte histórica para o polo escolhido.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            {/* Seletor de Polo */}
            <div className="bg-slate-950 p-1 rounded-xl border border-slate-800 flex text-xs">
              <button
                onClick={() => setSelectedRegion('salvador')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedRegion === 'salvador'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                📍 Salvador (83% / 50q)
              </button>
              <button
                onClick={() => setSelectedRegion('interior')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedRegion === 'interior'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                🌾 Interior (75% / 45q)
              </button>
            </div>

            <div className={`px-4 py-2 rounded-2xl border text-xs font-bold flex items-center space-x-2 ${
              isApprovalZone 
                ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300' 
                : isAttentionZone 
                ? 'bg-amber-500/10 border-amber-500/40 text-amber-300' 
                : 'bg-rose-500/10 border-rose-500/40 text-rose-300'
            }`}>
              {isApprovalZone ? (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>🏆 ZONA DE APROVAÇÃO</span>
                </>
              ) : isAttentionZone ? (
                <>
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>⚠️ ZONA DE ATENÇÃO</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-400" />
                  <span>🚨 ZONA DE REFORÇO URGENTE</span>
                </>
              )}
            </div>
          </div>
        </div>

        {/* METAS POR MATÉRIA (DINÂMICAS) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <div className="p-4 bg-slate-950 rounded-2xl border border-indigo-500/30">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-indigo-300">⚡ Informática</span>
              <span className="text-xs font-mono text-slate-400">Peso 35q</span>
            </div>
            <div className="text-lg font-extrabold text-white">
              Meta: {selectedRegion === 'salvador' ? '30+' : '28+'} acertos
            </div>
            <p className="text-[11px] text-slate-400 mt-1">
              {selectedRegion === 'salvador' ? '85%+ em Informática é essencial!' : 'Representa 58% do total da prova.'}
            </p>
          </div>

          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-300">📝 Português</span>
              <span className="text-xs font-mono text-slate-400">Peso 15q</span>
            </div>
            <div className="text-lg font-extrabold text-white">
              Meta: {selectedRegion === 'salvador' ? '12+' : '11+'} acertos
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Foco em Crase e Concordância.</p>
          </div>

          <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800">
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-slate-300">📐 Raciocínio Lógico</span>
              <span className="text-xs font-mono text-slate-400">Peso 10q</span>
            </div>
            <div className="text-lg font-extrabold text-white">
              Meta: {selectedRegion === 'salvador' ? '8+' : '7+'} acertos
            </div>
            <p className="text-[11px] text-slate-400 mt-1">Foco em Negação do Se...Então.</p>
          </div>

        </div>

      </div>

      {/* TERMÔMETRO DE DESEMPENHO POR MATÉRIA */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-6">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-indigo-400" />
          Termômetro de Domínio por Disciplina
        </h3>

        <div className="space-y-5">
          {Object.entries(subjectStats).map(([subj, stat]) => {
            const pct = stat.answered > 0 ? Math.round((stat.correct / stat.answered) * 100) : 0;
            return (
              <div key={subj} className="space-y-2">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-slate-200">{subj}</span>
                  <span className="font-mono text-slate-400">
                    {stat.correct} acertos de {stat.answered} feitas (Total edital: {stat.total})
                  </span>
                </div>
                <div className="w-full bg-slate-950 h-3 rounded-full overflow-hidden border border-slate-800">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      pct >= 75 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BOTÕES DE AÇÃO RÁPIDA */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => onNavigateTab('flashcards')}
          className="flex-1 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold rounded-2xl shadow-xl shadow-indigo-600/30 border border-indigo-400/30 flex items-center justify-center space-x-2 transition-all"
        >
          <Sparkles className="w-5 h-5" />
          <span>Continuar Treino em Flashcards</span>
        </button>

        <button
          onClick={() => onNavigateTab('simulado')}
          className="flex-1 py-4 bg-slate-900 hover:bg-slate-800 text-slate-200 font-bold rounded-2xl border border-slate-800 flex items-center justify-center space-x-2 transition-all"
        >
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <span>Fazer Simulado Completo IBFC</span>
        </button>
      </div>

    </div>
  );
};
