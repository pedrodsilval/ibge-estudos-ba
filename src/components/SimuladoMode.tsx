import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  Clock, 
  Play, 
  RotateCcw, 
  Award, 
  BarChart2, 
  ChevronRight, 
  ChevronLeft,
  BookOpen,
  Zap
} from 'lucide-react';
import type { Question, UserProfile, SubjectType } from '../types/study';
import { recordQuestionAnswer } from '../services/storageService';

interface SimuladoModeProps {
  questions: Question[];
  activeProfile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
  onReviewErrors: () => void;
}

export const SimuladoMode: React.FC<SimuladoModeProps> = ({
  questions,
  activeProfile,
  onUpdateProfile,
  onReviewErrors
}) => {
  const [examState, setExamState] = useState<'idle' | 'running' | 'finished'>('idle');
  const [examQuestionCount, setExamQuestionCount] = useState<number>(15);
  const [simuladoQuestions, setSimuladoQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [timeLeftSeconds, setTimeLeftSeconds] = useState<number>(1200); // 20 minutos
  const [scoreResult, setScoreResult] = useState<{
    total: number;
    correct: number;
    percentage: number;
    subjectStats: Record<SubjectType, { total: number; correct: number }>;
  } | null>(null);

  // Inicializar questões para o simulado
  const startSimulado = (count: number) => {
    let selected: Question[] = [];

    if (count === 60) {
      // Estrutura Oficial Proporcional IBFC: 35 Informática, 15 Português, 10 RLM
      const infQs = questions.filter(q => q.subject === 'Informática').sort(() => 0.5 - Math.random()).slice(0, 35);
      const portQs = questions.filter(q => q.subject === 'Língua Portuguesa').sort(() => 0.5 - Math.random()).slice(0, 15);
      const rlmQs = questions.filter(q => q.subject === 'Raciocínio Lógico').sort(() => 0.5 - Math.random()).slice(0, 10);
      selected = [...infQs, ...portQs, ...rlmQs];
    } else {
      // Seleção proporcional rápida para outros tamanhos (ex: 15, 30)
      const infCount = Math.round(count * 0.58);
      const portCount = Math.round(count * 0.25);
      const rlmCount = Math.max(1, count - infCount - portCount);

      const infQs = questions.filter(q => q.subject === 'Informática').sort(() => 0.5 - Math.random()).slice(0, infCount);
      const portQs = questions.filter(q => q.subject === 'Língua Portuguesa').sort(() => 0.5 - Math.random()).slice(0, portCount);
      const rlmQs = questions.filter(q => q.subject === 'Raciocínio Lógico').sort(() => 0.5 - Math.random()).slice(0, rlmCount);
      selected = [...infQs, ...portQs, ...rlmQs];
    }

    // Se por acaso alguma lista tiver menos, completa com embaralhamento geral
    if (selected.length < count) {
      const remainingNeeded = count - selected.length;
      const selectedIds = new Set(selected.map(q => q.id));
      const extras = questions.filter(q => !selectedIds.has(q.id)).sort(() => 0.5 - Math.random()).slice(0, remainingNeeded);
      selected = [...selected, ...extras];
    }
    
    setExamQuestionCount(selected.length);
    setSimuladoQuestions(selected);
    setCurrentIndex(0);
    setUserAnswers({});
    // Tempo oficial IBFC: ~3 a 3.5 minutos por questão (60q = 180 min / 3 horas)
    setTimeLeftSeconds(selected.length * 180); 
    setExamState('running');
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
      'Informática': { total: 0, correct: 0 },
      'Língua Portuguesa': { total: 0, correct: 0 },
      'Raciocínio Lógico': { total: 0, correct: 0 }
    };

    let updatedProfile = activeProfile;

    simuladoQuestions.forEach(q => {
      const selected = userAnswers[q.id];
      const isCorrect = selected === q.correctOption;

      if (subjectStats[q.subject]) {
        subjectStats[q.subject].total += 1;
        if (isCorrect) subjectStats[q.subject].correct += 1;
      }

      if (selected) {
        updatedProfile = recordQuestionAnswer(q.id, selected, isCorrect);
        if (isCorrect) correctCount += 1;
      }
    });

    onUpdateProfile(updatedProfile);

    const percentage = Math.round((correctCount / simuladoQuestions.length) * 100);
    setScoreResult({
      total: simuladoQuestions.length,
      correct: correctCount,
      percentage,
      subjectStats
    });

    setExamState('finished');

    if (percentage >= 70) {
      confetti({
        particleCount: 80,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) {
      return `${h}h ${m.toString().padStart(2, '0')}m ${s.toString().padStart(2, '0')}s`;
    }
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // TELA INICIAL DO SIMULADO (IDLE)
  if (examState === 'idle') {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 text-center shadow-2xl">
          <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8 text-indigo-400 animate-pulse" />
          </div>

          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 rounded-full text-xs font-bold mb-4">
            <Zap className="w-3.5 h-3.5 text-emerald-400" />
            <span>Estrutura Oficial Banca IBFC (60 Questões)</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Simulado IBGE - Agente Censitário de Informática
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto mb-6 text-sm sm:text-base leading-relaxed">
            Prova oficial da banca **IBFC** com 60 questões no total: **35 de Noções de Informática** (peso principal), **15 de Língua Portuguesa** e **10 de Raciocínio Lógico**.
          </p>

          {/* ESTRUTURA DA PROVA IBFC */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto mb-8 text-xs font-semibold">
            <div className="p-3 bg-indigo-950/60 border border-indigo-500/30 rounded-xl text-indigo-200">
              ⚡ 35 Questões<br/><span className="text-slate-400 font-normal">Informática (60% da Prova)</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-300">
              📝 15 Questões<br/><span className="text-slate-400 font-normal">Língua Portuguesa</span>
            </div>
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-300">
              📐 10 Questões<br/><span className="text-slate-400 font-normal">Raciocínio Lógico</span>
            </div>
          </div>

          {/* ESCOLHA DA QUANTIDADE DE QUESTÕES */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 max-w-2xl mx-auto">
            <button
              onClick={() => startSimulado(15)}
              className="px-4 py-4 bg-slate-950 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 rounded-2xl text-left transition-all group"
            >
              <div className="text-base font-bold text-white group-hover:text-indigo-300">
                15 Questões
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                Treino Rápido (~45 min)
              </div>
            </button>

            <button
              onClick={() => startSimulado(30)}
              className="px-4 py-4 bg-slate-950 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 rounded-2xl text-left transition-all group"
            >
              <div className="text-base font-bold text-white group-hover:text-indigo-300">
                30 Questões
              </div>
              <div className="text-xs text-slate-500 font-mono mt-0.5">
                Meio Simulado (~1h 30m)
              </div>
            </button>

            <button
              onClick={() => startSimulado(60)}
              className="px-4 py-4 bg-indigo-950/80 hover:bg-indigo-600/30 border border-indigo-500/40 hover:border-indigo-400 rounded-2xl text-left transition-all group ring-2 ring-indigo-500/30"
            >
              <div className="text-base font-bold text-indigo-300 group-hover:text-white flex items-center gap-1">
                🏆 60 Questões
              </div>
              <div className="text-xs text-indigo-200/70 font-mono mt-0.5">
                Prova Completa (3 horas)
              </div>
            </button>
          </div>

          <button
            onClick={() => startSimulado(60)}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-base rounded-2xl shadow-xl shadow-indigo-600/30 border border-indigo-400/30 transition-all flex items-center space-x-2 mx-auto"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>🏆 Iniciar Simulado Completo (60 Questões Prova Real IBFC)</span>
          </button>
        </div>
      </div>
    );
  }

  // TELA DE RESULTADOS DO SIMULADO (FINISHED)
  if (examState === 'finished' && scoreResult) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8">
          
          {/* HEADER DO DESEMPENHO */}
          <div className="text-center">
            <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center border-4 mb-4 ${
              scoreResult.percentage >= 70 
                ? 'bg-emerald-500/10 border-emerald-500 text-emerald-400' 
                : 'bg-amber-500/10 border-amber-500 text-amber-400'
            }`}>
              <Award className="w-10 h-10" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">Simulado Concluído!</h2>
            <p className="text-slate-400 text-sm mt-1">Confira seu relatório detalhado da banca IBFC:</p>
          </div>

          {/* BIG STATS CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-500 uppercase font-semibold">Nota Final</span>
              <div className="text-3xl font-extrabold text-white mt-1">{scoreResult.percentage}%</div>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-500 uppercase font-semibold">Acertos</span>
              <div className="text-3xl font-extrabold text-emerald-400 mt-1">{scoreResult.correct} / {scoreResult.total}</div>
            </div>
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 text-center">
              <span className="text-xs text-slate-500 uppercase font-semibold">Erros</span>
              <div className="text-3xl font-extrabold text-rose-400 mt-1">{scoreResult.total - scoreResult.correct}</div>
            </div>
          </div>

          {/* DESEMPENHO POR DISCIPLINA */}
          <div className="bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-indigo-400" />
              Desempenho por Disciplina (Banca IBFC)
            </h3>
            {Object.entries(scoreResult.subjectStats).map(([subj, stat]) => {
              if (stat.total === 0) return null;
              const pct = Math.round((stat.correct / stat.total) * 100);
              return (
                <div key={subj} className="space-y-1.5">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-300">{subj}</span>
                    <span className="text-slate-400 font-mono">{stat.correct}/{stat.total} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
                    <div
                      className={`h-full rounded-full transition-all ${
                        pct >= 70 ? 'bg-emerald-500' : pct >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* AÇÕES FINAIS */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <button
              onClick={() => startSimulado(examQuestionCount)}
              className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl transition-all border border-slate-700 flex items-center justify-center space-x-2"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Refazer Simulado</span>
            </button>
            <button
              onClick={onReviewErrors}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center space-x-2"
            >
              <BookOpen className="w-4 h-4" />
              <span>Revisar Erros nos Flashcards</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  // INTERFACE DO SIMULADO EM EXECUÇÃO (RUNNING)
  const currentQ = simuladoQuestions[currentIndex];
  const selectedOpt = userAnswers[currentQ?.id] || null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
      
      {/* BARRA SUPERIOR DO SIMULADO */}
      <div className="flex items-center justify-between bg-slate-900 border border-slate-800 p-4 rounded-2xl mb-6 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="px-3 py-1 bg-indigo-500/10 text-indigo-400 font-mono text-xs font-bold rounded-lg border border-indigo-500/30">
            Questão {currentIndex + 1} de {simuladoQuestions.length}
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline">{currentQ.subject}</span>
        </div>

        {/* TIMER */}
        <div className={`flex items-center space-x-2 px-4 py-1.5 rounded-xl font-mono text-sm font-bold border ${
          timeLeftSeconds < 180 ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' : 'bg-slate-950 text-amber-400 border-slate-800'
        }`}>
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeLeftSeconds)}</span>
        </div>

        <button
          onClick={finishSimulado}
          className="px-4 py-1.5 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-xl transition-all shadow-md shadow-rose-600/20"
        >
          Finalizar Prova
        </button>
      </div>

      {/* GRADE DE NAVEGAÇÃO DE QUESTÕES */}
      <div className="flex flex-wrap gap-2 mb-6 bg-slate-950 p-3 rounded-2xl border border-slate-800/80">
        {simuladoQuestions.map((q, idx) => {
          const isCurrent = idx === currentIndex;
          const isAnswered = userAnswers[q.id] !== undefined;
          return (
            <button
              key={q.id}
              onClick={() => setCurrentIndex(idx)}
              className={`w-8 h-8 rounded-lg font-mono text-xs font-bold transition-all border ${
                isCurrent
                  ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/40 ring-2 ring-indigo-400/50'
                  : isAnswered
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-900 text-slate-500 border-slate-800 hover:bg-slate-800'
              }`}
            >
              {idx + 1}
            </button>
          );
        })}
      </div>

      {/* CARD DA QUESTÃO DO SIMULADO */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <div className="mb-6">
          <p className="text-base sm:text-lg text-slate-100 leading-relaxed">
            {currentQ.statement}
          </p>
        </div>

        <div className="space-y-3 mb-8">
          {currentQ.options.map(opt => {
            const isSelected = selectedOpt === opt.key;
            return (
              <button
                key={opt.key}
                onClick={() => handleSelectOption(opt.key)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3 ${
                  isSelected
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-100 font-semibold'
                    : 'bg-slate-950/80 border-slate-800/90 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                  isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {opt.key}
                </span>
                <span className="text-sm sm:text-base pt-0.5 leading-snug flex-1">
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>

        {/* NAVEGAÇÃO DE RODAPÉ */}
        <div className="flex items-center justify-between border-t border-slate-800/80 pt-6">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 disabled:opacity-40 border border-slate-800 rounded-xl text-xs font-semibold flex items-center space-x-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Anterior</span>
          </button>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(simuladoQuestions.length - 1, prev + 1))}
            disabled={currentIndex === simuladoQuestions.length - 1}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white border border-indigo-400/30 rounded-xl text-xs font-bold flex items-center space-x-1 shadow-lg shadow-indigo-600/30"
          >
            <span>Próxima</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
