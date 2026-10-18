import React from 'react';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  XCircle, 
  Database, 
  Terminal
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
    'Qualidade de Software': { total: 0, answered: 0, correct: 0 },
    'Banco de Dados': { total: 0, answered: 0, correct: 0 }
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

  const targetPct = 85;
  const isApprovalZone = accuracyPercentage >= targetPct;
  const isAttentionZone = accuracyPercentage >= 60 && accuracyPercentage < targetPct;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* BOAS VINDAS & COUNTER */}
      <div className="bg-gradient-to-r from-indigo-900/50 via-slate-900 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-bold mb-3">
              <Trophy className="w-3.5 h-3.5" />
              <span>Painel de Rendimento Acadêmico • UNIFACS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Olá, {activeProfile.name}! 🚀
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Foco cirúrgico nas duas provas da semana. Seu objetivo é fixar as 15 questões oficiais e o laboratório para fechar com nota 10!
            </p>
          </div>

          <div className="flex items-center space-x-4 bg-slate-950/80 p-4 rounded-2xl border border-slate-800">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400 font-mono">
                {totalAnswered} / {questions.length}
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                Questões Feitas
              </div>
            </div>
            <div className="h-8 w-px bg-slate-800" />
            <div className="text-center">
              <div className={`text-2xl sm:text-3xl font-black font-mono ${
                accuracyPercentage >= 80 ? 'text-emerald-400' : accuracyPercentage >= 60 ? 'text-amber-400' : 'text-rose-400'
              }`}>
                {accuracyPercentage}%
              </div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                Taxa de Acerto
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* METAS DAS DUAS PROVAS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center space-x-2">
              <Target className="w-5 h-5 text-indigo-400" />
              <span>Meta das Avaliações Presenciais</span>
            </h3>
            <p className="text-xs text-slate-400">
              Campus Tancredo Neves • Média esperada para aprovação direta $\ge 8.5$.
            </p>
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
                <span>🏆 ZONA DE DOMÍNIO COMPLETO</span>
              </>
            ) : isAttentionZone ? (
              <>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>⚠️ ZONA DE FIXAÇÃO ATIVA</span>
              </>
            ) : (
              <>
                <XCircle className="w-4 h-4 text-rose-400" />
                <span>🚨 INICIAR ESTUDOS URGENTE</span>
              </>
            )}
          </div>
        </div>

        {/* CARDS DAS MATÉRIAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* QUALIDADE DE SOFTWARE */}
          <div className="p-5 bg-slate-950 rounded-2xl border border-indigo-500/30 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-indigo-300 flex items-center space-x-1.5">
                <Terminal className="w-4 h-4" />
                <span>Garantia da Qualidade de Software</span>
              </span>
              <span className="text-[11px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md font-bold">
                Terça (20/10) • Lab 22
              </span>
            </div>
            
            <div className="flex items-baseline justify-between">
              <div className="text-xl font-black text-white">
                {subjectStats['Qualidade de Software'].correct} / {subjectStats['Qualidade de Software'].answered} acertos
              </div>
              <div className="text-xs text-slate-400">
                Total no banco: {subjectStats['Qualidade de Software'].total}
              </div>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-indigo-500 h-full rounded-full transition-all"
                style={{ 
                  width: `${subjectStats['Qualidade de Software'].answered > 0 
                    ? Math.round((subjectStats['Qualidade de Software'].correct / subjectStats['Qualidade de Software'].answered) * 100) 
                    : 0}%` 
                }}
              />
            </div>

            <p className="text-[11px] text-slate-400">
              Prof. Enderson Nobre Santos • RTF, Caixa-Preta, Caminho Básico (McCabe) e JUnit 5.
            </p>
          </div>

          {/* BANCO DE DADOS */}
          <div className="p-5 bg-slate-950 rounded-2xl border border-emerald-500/30 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-emerald-300 flex items-center space-x-1.5">
                <Database className="w-4 h-4" />
                <span>Banco de Dados</span>
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md font-bold">
                Quarta (21/10) • Lab 235
              </span>
            </div>
            
            <div className="flex items-baseline justify-between">
              <div className="text-xl font-black text-white">
                {subjectStats['Banco de Dados'].correct} / {subjectStats['Banco de Dados'].answered} acertos
              </div>
              <div className="text-xs text-slate-400">
                Total no banco: {subjectStats['Banco de Dados'].total}
              </div>
            </div>

            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all"
                style={{ 
                  width: `${subjectStats['Banco de Dados'].answered > 0 
                    ? Math.round((subjectStats['Banco de Dados'].correct / subjectStats['Banco de Dados'].answered) * 100) 
                    : 0}%` 
                }}
              />
            </div>

            <p className="text-[11px] text-slate-400">
              Prof. Luiz Henrique Souza • 1FN/2FN/3FN, DER Clínica Veterinária e SQL (DDL/DML).
            </p>
          </div>

        </div>
      </div>

      {/* AÇÕES RÁPIDAS DE ESTUDO */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        
        <button
          onClick={() => onNavigateTab('flashcards')}
          className="p-5 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-3xl text-left transition-all hover:scale-[1.02] shadow-xl group"
        >
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl w-fit mb-3">
            <TrendingUp className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white group-hover:text-indigo-300 transition-colors">
            Questões Flashcards
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Treine uma a uma com feedback instantâneo e Bizus de Ouro.
          </p>
        </button>

        <button
          onClick={() => onNavigateTab('lab_pratico')}
          className="p-5 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-3xl text-left transition-all hover:scale-[1.02] shadow-xl group"
        >
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl w-fit mb-3">
            <Terminal className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
            Oficina Prática & SQL
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Ache o Bug em Java e copie o script DDL da Clínica Veterinária.
          </p>
        </button>

        <button
          onClick={() => onNavigateTab('simulado')}
          className="p-5 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-3xl text-left transition-all hover:scale-[1.02] shadow-xl group"
        >
          <div className="p-3 bg-amber-500/10 text-amber-400 rounded-2xl w-fit mb-3">
            <Trophy className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
            Simulado Cronometrado
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Teste suas respostas no cronômetro igualzinho ao dia da prova.
          </p>
        </button>

      </div>

    </div>
  );
};
