import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Clock, 
  BookOpen, 
  Award, 
  BookMarked,
  Bot,
  Play,
  Pause,
  RotateCcw,
  Timer,
  Download,
  Upload,
  Flame,
  Calendar,
  Terminal,
  GraduationCap,
  PenTool
} from 'lucide-react';
import type { UserProfile, SubjectType } from '../types/study';
import { exportAllDataJSON, importAllDataJSON } from '../services/storageService';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  selectedSubject: SubjectType;
  onSelectSubject: (subj: SubjectType) => void;
  profiles: UserProfile[];
  activeProfile: UserProfile;
  onSwitchProfile: (id: string) => void;
  onRefreshData: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  selectedSubject,
  onSelectSubject,
  profiles,
  activeProfile,
  onSwitchProfile,
  onRefreshData
}) => {
  const [daysLeftExam1, setDaysLeftExam1] = useState<number>(0);
  const [hoursLeftExam1, setHoursLeftExam1] = useState<number>(0);
  const [isExporting, setIsExporting] = useState(false);

  // POMODORO DE FOCO
  const [showPomodoro, setShowPomodoro] = useState<boolean>(false);
  const [pomodoroSeconds, setPomodoroSeconds] = useState<number>(1500); // 25 min
  const [isPomodoroRunning, setIsPomodoroRunning] = useState<boolean>(false);
  const [pomodoroMode, setPomodoroMode] = useState<'focus' | 'break'>('focus');

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPomodoroRunning) {
      interval = setInterval(() => {
        setPomodoroSeconds(prev => {
          if (prev <= 1) {
            if (pomodoroMode === 'focus') {
              alert('🔔 Tempo de foco concluído! Faça uma pausa de 5 minutos.');
              setPomodoroMode('break');
              return 300;
            } else {
              alert('⚡ Pausa concluída! De volta aos estudos de reta final.');
              setPomodoroMode('focus');
              return 1500;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPomodoroRunning, pomodoroMode]);

  // CONTADOR REGRESSIVO DINÂMICO
  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      // Prova 1: Terça 20/10/2026 às 08h50 | Prova 2: Quarta 21/10/2026 às 08h50
      const examDate = selectedSubject === 'Qualidade de Software'
        ? new Date(2026, 9, 20, 8, 50, 0)
        : new Date(2026, 9, 21, 8, 50, 0);
      const diffMs = examDate.getTime() - now.getTime();
      
      if (diffMs > 0) {
        const totalHours = Math.floor(diffMs / (1000 * 60 * 60));
        const days = Math.floor(totalHours / 24);
        const hours = totalHours % 24;
        setDaysLeftExam1(days);
        setHoursLeftExam1(hours);
      } else {
        setDaysLeftExam1(0);
        setHoursLeftExam1(0);
      }
    };

    calculateCountdown();
    const interval = setInterval(calculateCountdown, 60000);
    return () => clearInterval(interval);
  }, [selectedSubject]);

  const formatPomodoro = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleExport = () => {
    setIsExporting(true);
    const jsonStr = exportAllDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `UNIFACS_Estudos_${activeProfile.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setIsExporting(false), 800);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = importAllDataJSON(content);
        if (success) {
          alert('✅ Progresso importado com sucesso!');
          onRefreshData();
        } else {
          alert('❌ Erro ao importar arquivo de backup.');
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0d1322]/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        
        {/* BARRA SUPERIOR */}
        <div className="flex items-center justify-between h-16 gap-3">
          
          {/* LOGO & TITULO */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('discursive')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-emerald-400 p-0.5 shadow-lg shadow-indigo-600/20 shrink-0">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
              </div>
            </div>
            
            <div className="leading-tight">
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                  UNIFACS <span className="text-indigo-400 text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30">2026.2</span>
                </h1>
              </div>
              
              <div className="flex items-center space-x-1.5 text-[11px] text-slate-400">
                <Calendar className="w-3 h-3 text-amber-400 shrink-0" />
                <span className="text-amber-300 font-semibold whitespace-nowrap">
                  {selectedSubject === 'Qualidade de Software' ? 'Prova de Qualidade:' : 'Prova de Banco:'}
                </span>
                <span className="text-emerald-400 font-mono font-bold">{daysLeftExam1}d {hoursLeftExam1}h</span>
                <span className="text-slate-500 hidden sm:inline">
                  {selectedSubject === 'Qualidade de Software' ? '• Banco na Quarta!' : '• Qualidade na Terça!'}
                </span>
              </div>
            </div>
          </div>

          {/* SELETOR PRINCIPAL DE DISCIPLINA (SEPARAÇÃO RÍGIDA) */}
          <div className="hidden md:flex items-center bg-slate-950 p-1 rounded-2xl border border-slate-800 shadow-inner">
            <button
              onClick={() => onSelectSubject('Qualidade de Software')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                selectedSubject === 'Qualidade de Software'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 ring-1 ring-indigo-400/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🔬 Qualidade (Terça 20/10)</span>
            </button>
            <button
              onClick={() => onSelectSubject('Banco de Dados')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                selectedSubject === 'Banco de Dados'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30 ring-1 ring-emerald-400/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🗄️ Banco de Dados (Quarta 21/10)</span>
            </button>
          </div>

          {/* PERFIL & POMODORO FOCO */}
          <div className="flex items-center space-x-2 shrink-0">
            
            {/* POMODORO CONTROLLER */}
            <div className="relative">
              <button
                onClick={() => setShowPomodoro(!showPomodoro)}
                className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-bold transition-all ${
                  isPomodoroRunning 
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 animate-pulse'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
                title="Cronômetro Pomodoro de Foco (25 min)"
              >
                <Timer className="w-3.5 h-3.5 text-indigo-400" />
                <span className="font-mono">{formatPomodoro(pomodoroSeconds)}</span>
              </button>

              {showPomodoro && (
                <div className="absolute right-0 top-10 mt-2 w-56 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-2xl z-50 text-xs space-y-3">
                  <div className="flex justify-between items-center font-bold text-slate-200">
                    <span>{pomodoroMode === 'focus' ? '🎯 Foco Absoluto' : '☕ Pausa'}</span>
                    <span className="font-mono text-indigo-400 text-sm">{formatPomodoro(pomodoroSeconds)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsPomodoroRunning(!isPomodoroRunning)}
                      className="flex-1 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl font-bold flex items-center justify-center space-x-1"
                    >
                      {isPomodoroRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                      <span>{isPomodoroRunning ? 'Pausar' : 'Iniciar'}</span>
                    </button>
                    <button
                      onClick={() => {
                        setIsPomodoroRunning(false);
                        setPomodoroSeconds(1500);
                        setPomodoroMode('focus');
                      }}
                      className="p-2 bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl"
                      title="Reiniciar Pomodoro"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* STREAK */}
            <div className="hidden md:flex items-center space-x-1.5 px-2.5 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl text-xs font-bold shadow-inner">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
              <span>{activeProfile.streakDays}d</span>
            </div>

            {/* SELETOR DE PERFIL (Gilvania / Pedro) */}
            <div className="flex items-center bg-slate-950 rounded-xl px-2 py-1 border border-slate-800">
              <span className="text-base mr-1" title="Avatar">{activeProfile.avatar}</span>
              <select
                value={activeProfile.id}
                onChange={(e) => onSwitchProfile(e.target.value)}
                className="bg-transparent text-xs font-semibold text-slate-200 py-1 pr-1 cursor-pointer focus:outline-none"
              >
                {profiles.map(p => (
                  <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* BACKUP */}
            <div className="flex items-center space-x-1">
              <button
                onClick={handleExport}
                disabled={isExporting}
                title="Exportar Progresso (JSON)"
                className="p-1.5 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800"
              >
                <Download className="w-4 h-4" />
              </button>

              <label
                title="Importar Progresso (JSON)"
                className="p-1.5 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition-colors border border-slate-800 cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <input
                  type="file"
                  accept=".json"
                  onChange={handleImportFile}
                  className="hidden"
                />
              </label>
            </div>

          </div>

        </div>

        {/* NAVEGAÇÃO DE TABS */}
        <div className="border-t border-slate-800/80 py-2">
          <nav className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none pb-0.5">
            
            {/* TAB: CADERNOS DE TEORIA & SLIDES (ESTUDO DEDICADO DO ASSUNTO) */}
            <button
              onClick={() => setActiveTab('teoria')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'teoria'
                  ? 'bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-600/40 ring-1 ring-indigo-400/50'
                  : 'text-indigo-300/90 hover:text-white hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
              <span>📚 Estudo Teórico</span>
              <span className="px-1.5 py-0.2 rounded-full bg-indigo-400/20 text-indigo-300 text-[10px]">Slides</span>
            </button>

            {/* TAB 1: TREINO DISCURSIVO (FOCO PRINCIPAL PEDIDO PELO USUÁRIO) */}
            <button
              onClick={() => setActiveTab('discursive')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                activeTab === 'discursive'
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-600/30 ring-1 ring-emerald-400/50'
                  : 'text-emerald-300/80 hover:text-emerald-200 hover:bg-slate-800/60'
              }`}
            >
              <PenTool className="w-3.5 h-3.5 text-emerald-400" />
              <span>✍️ Treino Discursivo</span>
              <span className="px-1.5 py-0.2 rounded-full bg-emerald-400/20 text-emerald-300 text-[10px]">Oficial</span>
            </button>

            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Questões Objetivas</span>
            </button>

            <button
              onClick={() => setActiveTab('lab_pratico')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'lab_pratico'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>Laboratório Prático (Java & SQL)</span>
            </button>

            <button
              onClick={() => setActiveTab('simulado')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'simulado'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Simulado Cronometrado</span>
            </button>

            <button
              onClick={() => setActiveTab('bizus')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'bizus'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Paredão de Bizus</span>
            </button>

            <button
              onClick={() => setActiveTab('caderno_erros')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'caderno_erros'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <BookMarked className="w-3.5 h-3.5" />
              <span>Caderno de Erros</span>
            </button>

            <button
              onClick={() => setActiveTab('tutor_ia')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'tutor_ia'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Bot className="w-3.5 h-3.5 text-emerald-400" />
              <span>Tutor IA UNIFACS</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Desempenho</span>
            </button>

          </nav>
        </div>

      </div>
    </header>
  );
};
