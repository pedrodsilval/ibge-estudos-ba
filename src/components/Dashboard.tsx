import React, { useState } from 'react';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  AlertTriangle, 
  XCircle, 
  Database, 
  Terminal,
  BookOpen,
  Calendar,
  CheckSquare,
  Square,
  Sparkles,
  PenTool
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
  const [dailyGoals, setDailyGoals] = useState<Record<string, boolean>>(() => {
    try {
      const saved = localStorage.getItem('ufba_daily_goals');
      return saved ? JSON.parse(saved) : { q15: false, teoria: false, redacao: false };
    } catch {
      return { q15: false, teoria: false, redacao: false };
    }
  });

  const toggleGoal = (k: string) => {
    const updated = { ...dailyGoals, [k]: !dailyGoals[k] };
    setDailyGoals(updated);
    localStorage.setItem('ufba_daily_goals', JSON.stringify(updated));
  };
  const answeredEntries = Object.entries(activeProfile.answers);
  const totalAnswered = answeredEntries.length;
  const correctCount = answeredEntries.filter(([_, h]) => h.isCorrect).length;
  const accuracyPercentage = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Estatísticas por disciplina
  const subjectStats: Record<SubjectType, { total: number; answered: number; correct: number }> = {
    'Língua Portuguesa': { total: 0, answered: 0, correct: 0 },
    'Noções de Informática': { total: 0, answered: 0, correct: 0 },
    'Administração Pública': { total: 0, answered: 0, correct: 0 },
    'Conhecimentos Específicos': { total: 0, answered: 0, correct: 0 }
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
              <span>Painel de Rendimento Oficial • Concurso UFBA 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Olá, {activeProfile.name}! 🚀
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
              Plano de aprovação para o Concurso da UFBA (Cargo 201: Assistente em Administração). Treine questões, domine os bizus e pratique a redação de 30 linhas!
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
              <span>Metas Oficiais do Concurso UFBA</span>
            </h3>
            <p className="text-xs text-slate-400">
              Prova Objetiva & Redação: 20 de dezembro de 2026 (4h) • Meta de rendimento: $\ge 85\%$ de acertos.
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

        {/* CARDS DAS 4 MATÉRIAS UFBA */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* LÍNGUA PORTUGUESA */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-blue-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-blue-300 flex items-center space-x-1.5">
                <BookOpen className="w-4 h-4" />
                <span>Português</span>
              </span>
              <span className="text-[10px] font-mono text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded-md font-bold">
                11 Tópicos
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-black text-white">
                {subjectStats['Língua Portuguesa'].correct} / {subjectStats['Língua Portuguesa'].answered} acertos
              </div>
              <div className="text-xs text-slate-400">
                Banco: {subjectStats['Língua Portuguesa'].total}
              </div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-blue-500 h-full rounded-full transition-all"
                style={{ 
                  width: `${subjectStats['Língua Portuguesa'].answered > 0 
                    ? Math.round((subjectStats['Língua Portuguesa'].correct / subjectStats['Língua Portuguesa'].answered) * 100) 
                    : 0}%` 
                }}
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Crase, concordância, regência e Redação Oficial (Manual PR).
            </p>
          </div>

          {/* INFORMÁTICA */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-cyan-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-cyan-300 flex items-center space-x-1.5">
                <Terminal className="w-4 h-4" />
                <span>Informática</span>
              </span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-1.5 py-0.5 rounded-md font-bold">
                12 Tópicos
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-black text-white">
                {subjectStats['Noções de Informática'].correct} / {subjectStats['Noções de Informática'].answered} acertos
              </div>
              <div className="text-xs text-slate-400">
                Banco: {subjectStats['Noções de Informática'].total}
              </div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-cyan-500 h-full rounded-full transition-all"
                style={{ 
                  width: `${subjectStats['Noções de Informática'].answered > 0 
                    ? Math.round((subjectStats['Noções de Informática'].correct / subjectStats['Noções de Informática'].answered) * 100) 
                    : 0}%` 
                }}
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Windows, Office 365, Excel fórmulas e Segurança CIDAL.
            </p>
          </div>

          {/* ADM PÚBLICA */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-amber-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-amber-300 flex items-center space-x-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Adm. Pública</span>
              </span>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-1.5 py-0.5 rounded-md font-bold">
                20 Tópicos
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-black text-white">
                {subjectStats['Administração Pública'].correct} / {subjectStats['Administração Pública'].answered} acertos
              </div>
              <div className="text-xs text-slate-400">
                Banco: {subjectStats['Administração Pública'].total}
              </div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-amber-500 h-full rounded-full transition-all"
                style={{ 
                  width: `${subjectStats['Administração Pública'].answered > 0 
                    ? Math.round((subjectStats['Administração Pública'].correct / subjectStats['Administração Pública'].answered) * 100) 
                    : 0}%` 
                }}
              />
            </div>
            <p className="text-[10px] text-slate-400">
              CF/88, Lei 8.112/90, Licitações 14.133 e Estatuto UFBA.
            </p>
          </div>

          {/* ESPECÍFICAS */}
          <div className="p-4 bg-slate-950 rounded-2xl border border-emerald-500/30 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-emerald-300 flex items-center space-x-1.5">
                <Database className="w-4 h-4" />
                <span>Específicas</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded-md font-bold">
                Cargo 201
              </span>
            </div>
            <div className="flex items-baseline justify-between">
              <div className="text-lg font-black text-white">
                {subjectStats['Conhecimentos Específicos'].correct} / {subjectStats['Conhecimentos Específicos'].answered} acertos
              </div>
              <div className="text-xs text-slate-400">
                Banco: {subjectStats['Conhecimentos Específicos'].total}
              </div>
            </div>
            <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all"
                style={{ 
                  width: `${subjectStats['Conhecimentos Específicos'].answered > 0 
                    ? Math.round((subjectStats['Conhecimentos Específicos'].correct / subjectStats['Conhecimentos Específicos'].answered) * 100) 
                    : 0}%` 
                }}
              />
            </div>
            <p className="text-[10px] text-slate-400">
              Arquivologia (3 idades), Estoques (ABC/XYZ) e PODC.
            </p>
          </div>

        </div>
      </div>

      {/* META DIÁRIA DE ESTUDOS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex items-center space-x-2">
            <span className="p-2 bg-amber-500/10 text-amber-400 rounded-xl border border-amber-500/20">
              <CheckSquare className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-1.5">
                Metas de Estudo Diário de Gilvania
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h3>
              <p className="text-xs text-slate-400">
                Mantenha a constância diária para cobrir o edital completo da UFBA
              </p>
            </div>
          </div>

          <div className="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-xl font-mono">
            {Object.values(dailyGoals).filter(Boolean).length} / 3 concluídas
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            { key: 'q15', label: '15 Questões Resolvidas', desc: 'Nos Flashcards ou Simulado' },
            { key: 'teoria', label: '1 Caderno Lido / Podcast', desc: 'No Estudo Teórico ou Bizus' },
            { key: 'redacao', label: '1 Treino na Folha 30 Linhas', desc: 'Na aba Redação & Discursivas' }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => toggleGoal(item.key)}
              className={`p-4 rounded-2xl border text-left transition-all flex items-start space-x-3 ${
                dailyGoals[item.key]
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                  : 'bg-slate-950 border-slate-800 text-slate-400 hover:bg-slate-800/60'
              }`}
            >
              {dailyGoals[item.key] ? (
                <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              ) : (
                <Square className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
              )}
              <div>
                <span className={`text-xs font-bold block ${dailyGoals[item.key] ? 'text-white' : 'text-slate-300'}`}>
                  {item.label}
                </span>
                <span className="text-[11px] text-slate-500">
                  {item.desc}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* CICLO SEMANAL DE ESTUDOS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
        <div className="flex items-center space-x-2 border-b border-slate-800 pb-3">
          <span className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
            <Calendar className="w-5 h-5" />
          </span>
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-1.5">
              Trilha e Ciclo Semanal de Estudos da UFBA
            </h3>
            <p className="text-xs text-slate-400">
              Distribuição semanal equilibrada das 4 matérias do cargo de Assistente em Administração
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { dia: 'Segunda-feira', m1: '🇧🇷 Português (Crase & Concordância)', m2: '🏛️ Lei 8.112/90 (Prazos de Posse)' },
            { dia: 'Terça-feira', m1: '💻 Informática (Excel 365 & Fórmulas)', m2: '📂 Materiais (Curva ABC & Estoque)' },
            { dia: 'Quarta-feira', m1: '🏛️ CF/88 (LIMPE e Art. 37 a 41)', m2: '📂 Arquivologia (3 Idades Documentais)' },
            { dia: 'Quinta-feira', m1: '🏛️ Estatuto da UFBA (CONSUNI/CONSEPE)', m2: '🇧🇷 Redação Oficial (Manual PR 3ª ed.)' },
            { dia: 'Sexta-feira', m1: '🏛️ Ética (Dec. 1.171) & Licitações', m2: '📖 Revisão Geral no Caderno de Erros' },
            { dia: 'Sábado & Domingo', m1: '⏱️ Sáb: Simulado 4h + 1 Redação', m2: '🎧 Dom: Descanso & Podcast de Bizus' }
          ].map((item, idx) => (
            <div key={idx} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-400 block">
                {item.dia}
              </span>
              <p className="text-xs font-semibold text-slate-200">
                {item.m1}
              </p>
              <p className="text-xs text-slate-400">
                {item.m2}
              </p>
            </div>
          ))}
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
          onClick={() => onNavigateTab('discursive')}
          className="p-5 bg-slate-900 hover:bg-slate-800/80 border border-slate-800 rounded-3xl text-left transition-all hover:scale-[1.02] shadow-xl group"
        >
          <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-2xl w-fit mb-3">
            <PenTool className="w-6 h-6" />
          </div>
          <h4 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
            Redação & Discursivas
          </h4>
          <p className="text-xs text-slate-400 mt-1">
            Simulador de folha de 30 linhas com avaliação pedagógica automática.
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
