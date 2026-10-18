import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle2, 
  Check, 
  X, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft,
  Filter,
  ArrowRight,
  Zap,
  Play,
  Terminal,
  Database,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import type { Question, UserProfile, SubjectType } from '../types/study';

interface SimuladoModeProps {
  questions: Question[];
  activeProfile: UserProfile;
  onUpdateProfile: (profile: UserProfile) => void;
  onReviewErrors: () => void;
}

export const SimuladoMode: React.FC<SimuladoModeProps> = ({
  questions,
  activeProfile,
  onUpdateProfile,
  onReviewErrors
}) => {
  const [examState, setExamState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [simuladoQuestions, setSimuladoQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(1200);
  const [currentSimuladoLabel, setCurrentSimuladoLabel] = useState<string>('');
  
  // Filtros de Correção do Simulado Finalizado
  const [reviewFilter, setReviewFilter] = useState<'all' | 'errors' | 'correct'>('all');

  const [scoreResult, setScoreResult] = useState<{
    total: number;
    correct: number;
    percentage: number;
    subjectStats: Record<SubjectType, { total: number; correct: number }>;
  } | null>(null);

  // Inicializar questões para o simulado
  const startSimulado = (mode: 'qs' | 'bd' | 'completo') => {
    let selected: Question[] = [];

    if (mode === 'qs') {
      selected = questions.filter(q => q.subject === 'Qualidade de Software');
    } else if (mode === 'bd') {
      selected = questions.filter(q => q.subject === 'Banco de Dados');
    } else {
      selected = [...questions].sort(() => 0.5 - Math.random());
    }

    const now = new Date();
    const dateStr = `${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}`;
    const labelTitle = mode === 'qs' 
      ? 'Qualidade de Software (Terça)' 
      : mode === 'bd' 
      ? 'Banco de Dados (Quarta)' 
      : 'Completo UNIFACS';
    const label = `Simulado: ${labelTitle} - ${selected.length}q (${dateStr})`;
    
    setCurrentSimuladoLabel(label);
    setSimuladoQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    setTimeLeftSeconds(selected.length * 120); // 2 min por questão
    setExamState('running');
    setReviewFilter('all');
  };

  // Contagem regressiva do timer
  useEffect(() => {
    if (examState !== 'running') return;

    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          finishSimulado();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examState, userAnswers, simuladoQuestions]);

  const handleSelectOption = (key: string) => {
    if (examState !== 'running') return;
    const current = simuladoQuestions[currentIndex];
    if (!current) return;

    setUserAnswers(prev => ({
      ...prev,
      [current.id]: key
    }));
  };

  const finishSimulado = () => {
    let correctCount = 0;
    const subjectStats: Record<SubjectType, { total: number; correct: number }> = {
      'Qualidade de Software': { total: 0, correct: 0 },
      'Banco de Dados': { total: 0, correct: 0 }
    };

    let updatedProfile = activeProfile;
    const allSimuladoQuestionIds = simuladoQuestions.map(q => q.id);

    simuladoQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctOption;

      if (subjectStats[q.subject]) {
        subjectStats[q.subject].total += 1;
        if (isCorrect) subjectStats[q.subject].correct += 1;
      }

      if (selected) {
        if (isCorrect) correctCount++;
        
        const existingHistory = updatedProfile.answers[q.id];
        updatedProfile = {
          ...updatedProfile,
          answers: {
            ...updatedProfile.answers,
            [q.id]: {
              selectedOption: selected,
              isCorrect,
              answeredAt: new Date().toISOString(),
              attemptsCount: (existingHistory?.attemptsCount || 0) + 1,
              sourceContext: currentSimuladoLabel
            }
          }
        };
      }
    });

    updatedProfile = {
      ...updatedProfile,
      lastSimuladoQuestionIds: allSimuladoQuestionIds,
      lastSimuladoDate: currentSimuladoLabel
    };

    onUpdateProfile(updatedProfile);

    const total = simuladoQuestions.length;
    const percentage = total > 0 ? Math.round((correctCount / total) * 100) : 0;

    setScoreResult({
      total,
      correct: correctCount,
      percentage,
      subjectStats
    });

    setExamState('finished');

    if (percentage >= 75) {
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        console.error(e);
      }
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = simuladoQuestions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;

  // TELA DE SELEÇÃO INICIAL (IDLE)
  if (examState === 'idle') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-center">
          
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-indigo-400 animate-pulse" />
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Simulador de Prova Presencial UNIFACS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Treino Cronometrado de Prova
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-sm sm:text-base leading-relaxed">
            Simule o tempo real das provas presenciais. Escolha focar na prova de terça (Qualidade de Software) ou na prova de quarta (Banco de Dados):
          </p>

          {/* ESCOLHA DA PROVA */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto">
            
            <button
              onClick={() => startSimulado('qs')}
              className="px-5 py-5 bg-slate-950 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 rounded-2xl text-left transition-all group shadow-lg"
            >
              <div className="p-2.5 bg-indigo-500/10 text-indigo-400 rounded-xl w-fit mb-3">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-white group-hover:text-indigo-300">
                Qualidade de Software
              </div>
              <div className="text-xs text-amber-400 font-semibold mt-1">
                Terça (20/10) • Lab 22
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                15 questões da folha oficial + desafios de JUnit 5.
              </p>
            </button>

            <button
              onClick={() => startSimulado('bd')}
              className="px-5 py-5 bg-slate-950 hover:bg-emerald-600/20 border border-slate-800 hover:border-emerald-500/50 rounded-2xl text-left transition-all group shadow-lg"
            >
              <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit mb-3">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-white group-hover:text-emerald-300">
                Banco de Dados
              </div>
              <div className="text-xs text-emerald-400 font-semibold mt-1">
                Quarta (21/10) • Lab 235
              </div>
              <p className="text-[11px] text-slate-500 mt-2">
                1FN/2FN/3FN, SQL DDL/DML e Clínica Veterinária.
              </p>
            </button>

            <button
              onClick={() => startSimulado('completo')}
              className="px-5 py-5 bg-indigo-950/80 hover:bg-indigo-600/30 border border-indigo-500/40 hover:border-indigo-400 rounded-2xl text-left transition-all group ring-2 ring-indigo-500/30 shadow-xl"
            >
              <div className="p-2.5 bg-indigo-500/20 text-indigo-300 rounded-xl w-fit mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-base font-bold text-indigo-300 group-hover:text-white">
                Simulado Geral
              </div>
              <div className="text-xs text-indigo-200/80 font-semibold mt-1">
                Todas as Matérias
              </div>
              <p className="text-[11px] text-slate-400 mt-2">
                Treino completo com todas as 28 questões do banco.
              </p>
            </button>

          </div>

          <button
            onClick={() => startSimulado('qs')}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-base rounded-2xl shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all flex items-center space-x-2 mx-auto"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>Iniciar Simulado Prioridade 1 (Qualidade de Software)</span>
          </button>
        </div>
      </div>
    );
  }

  // TELA DE RESULTADOS DO SIMULADO (FINISHED)
  if (examState === 'finished' && scoreResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
        
        {/* CARD DO RESULTADO PRINCIPAL */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
          <div className="w-20 h-20 rounded-3xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6 shadow-inner">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>

          <h2 className="text-3xl font-black text-white mb-2">
            Simulado Concluído!
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mb-6">
            {currentSimuladoLabel}
          </p>

          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono">
                {scoreResult.correct} / {scoreResult.total}
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                Acertos Finais
              </div>
            </div>

            <div className="h-12 w-px bg-slate-800" />

            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-black text-indigo-400 font-mono">
                {scoreResult.percentage}%
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mt-1">
                Aproveitamento
              </div>
            </div>
          </div>

          {/* STATS POR MATÉRIA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto mb-8">
            {(Object.entries(scoreResult.subjectStats) as [SubjectType, { total: number; correct: number }][]).map(([subj, stats]) => {
              if (stats.total === 0) return null;
              const pct = Math.round((stats.correct / stats.total) * 100);
              return (
                <div key={subj} className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-left space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-200">
                    <span>{subj}</span>
                    <span className="font-mono text-indigo-400">{stats.correct}/{stats.total} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full ${pct >= 70 ? 'bg-emerald-500' : 'bg-rose-500'}`} 
                      style={{ width: `${pct}%` }} 
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setExamState('idle')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-sm rounded-xl transition-all flex items-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Fazer Outro Simulado</span>
            </button>

            <button
              onClick={onReviewErrors}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center space-x-2"
            >
              <span>Ver Caderno de Erros</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* LISTAGEM DE CORREÇÃO COM FILTRO */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-2xl">
            <span className="text-xs font-bold text-slate-300 flex items-center space-x-2">
              <Filter className="w-4 h-4 text-indigo-400" />
              <span>Filtrar Gabarito do Simulado:</span>
            </span>

            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setReviewFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  reviewFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Todas ({simuladoQuestions.length})
              </button>
              <button
                onClick={() => setReviewFilter('errors')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  reviewFilter === 'errors' ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Erros ({scoreResult.total - scoreResult.correct})
              </button>
              <button
                onClick={() => setReviewFilter('correct')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${
                  reviewFilter === 'correct' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Acertos ({scoreResult.correct})
              </button>
            </div>
          </div>

          {/* ITENS DAS QUESTÕES DO SIMULADO */}
          <div className="space-y-4">
            {simuladoQuestions.map((q, idx) => {
              const userSel = userAnswers[q.id];
              const isCorrect = userSel === q.correctOption;

              if (reviewFilter === 'errors' && isCorrect) return null;
              if (reviewFilter === 'correct' && !isCorrect) return null;

              return (
                <div key={q.id} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-lg">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-slate-800 text-slate-300 text-xs font-bold rounded">Q{idx + 1}</span>
                      <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded">{q.subject}</span>
                      <span className="text-xs text-slate-400">{q.topic}</span>
                    </div>

                    <div className={`px-2.5 py-1 rounded-lg text-xs font-bold flex items-center space-x-1.5 ${
                      isCorrect ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30' : 'bg-rose-500/10 text-rose-400 border border-rose-500/30'
                    }`}>
                      {isCorrect ? <Check className="w-3.5 h-3.5" /> : <X className="w-3.5 h-3.5" />}
                      <span>{isCorrect ? `Acertou (Opção ${userSel})` : `Marcou ${userSel || 'vazio'} (Certo: ${q.correctOption})`}</span>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 font-medium leading-relaxed">
                    {q.statement}
                  </p>

                  <div className="space-y-1.5">
                    {q.options.map(opt => {
                      const isUserChoice = userSel === opt.key;
                      const isOptionCorrect = opt.key === q.correctOption;

                      let style = "bg-slate-950/60 border-slate-800 text-slate-400";
                      if (isOptionCorrect) {
                        style = "bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-semibold";
                      } else if (isUserChoice && !isOptionCorrect) {
                        style = "bg-rose-950/40 border-rose-500/50 text-rose-300 line-through";
                      }

                      return (
                        <div key={opt.key} className={`p-3 rounded-xl border text-xs flex items-center space-x-2.5 ${style}`}>
                          <span className="font-bold font-mono px-1.5 py-0.5 rounded bg-slate-900 border border-slate-800">{opt.key}</span>
                          <span className="flex-1">{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>

                  {q.explanation.bizu && (
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-300 font-semibold">
                      {q.explanation.bizu}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    );
  }

  // TELA DO SIMULADO EM ANDAMENTO (RUNNING)
  if (!currentQ) return null;

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* BARRA SUPERIOR DE TEMPO & PROGRESSO */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center justify-between shadow-xl">
        <div className="flex items-center space-x-3">
          <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-bold rounded-lg font-mono">
            {currentIndex + 1} / {simuladoQuestions.length}
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline font-semibold">
            {answeredCount} respondidas
          </span>
        </div>

        <div className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold font-mono ${
          timeLeftSeconds < 300 
            ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
            : 'bg-slate-950 text-slate-300 border-slate-800'
        }`}>
          <Clock className="w-4 h-4 text-indigo-400" />
          <span>{formatTime(timeLeftSeconds)}</span>
        </div>

        <button
          onClick={finishSimulado}
          className="px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-emerald-600/30"
        >
          Finalizar Simulado
        </button>
      </div>

      {/* CARD DA QUESTÃO ATUAL */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
        
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 text-xs font-semibold rounded-lg">
              {currentQ.subject}
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 text-xs rounded-lg">
              {currentQ.topic}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-mono">
            {currentQ.source}
          </span>
        </div>

        <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed">
          {currentQ.statement}
        </p>

        {/* ALTERNATIVAS */}
        <div className="space-y-3">
          {currentQ.options.map(opt => {
            const isSelected = userAnswers[currentQ.id] === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center space-x-3 ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-600/10'
                    : 'bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:border-slate-700'
                }`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-mono font-bold text-xs shrink-0 border ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-400'
                    : 'bg-slate-900 text-slate-400 border-slate-800'
                }`}>
                  {opt.key}
                </span>
                <span className="text-xs sm:text-sm leading-relaxed">{opt.text}</span>
              </button>
            );
          })}
        </div>

        {/* NAVEGAÇÃO ANTERIOR / PRÓXIMA */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 text-slate-300 text-xs font-bold rounded-xl border border-slate-800 transition-all flex items-center space-x-1.5"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <span className="text-xs text-slate-500 font-mono">
            {currentIndex + 1} de {simuladoQuestions.length}
          </span>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(simuladoQuestions.length - 1, prev + 1))}
            disabled={currentIndex === simuladoQuestions.length - 1}
            className="px-4 py-2 bg-slate-950 hover:bg-slate-800 disabled:opacity-30 text-slate-300 text-xs font-bold rounded-xl border border-slate-800 transition-all flex items-center space-x-1.5"
          >
            <span>Próxima</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
