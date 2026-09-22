import React, { useState, useEffect } from 'react';
import { 
  BrainCircuit, 
  Flame, 
  Calendar, 
  Download, 
  Upload, 
  Sparkles, 
  Clock, 
  BookOpen, 
  Award, 
  BookMarked,
  Bot
} from 'lucide-react';
import type { UserProfile } from '../types/study';
import { exportAllDataJSON, importAllDataJSON } from '../services/storageService';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  profiles: UserProfile[];
  activeProfile: UserProfile;
  onSwitchProfile: (id: string) => void;
  onRefreshData: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  profiles,
  activeProfile,
  onSwitchProfile,
  onRefreshData
}) => {
  const [daysLeft, setDaysLeft] = useState<number>(0);
  const [isExporting, setIsExporting] = useState(false);

  useEffect(() => {
    // Calcular dias até domingo (dia da prova)
    const now = new Date();
    const sunday = new Date();
    // Encontrar o próximo domingo
    const dayOfWeek = now.getDay();
    const distanceToSunday = (7 - dayOfWeek) % 7;
    sunday.setDate(now.getDate() + (distanceToSunday === 0 ? 0 : distanceToSunday));
    sunday.setHours(23, 59, 59, 999);

    const diffMs = sunday.getTime() - now.getTime();
    const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    setDaysLeft(diffDays <= 0 ? 0 : diffDays);
  }, []);

  const handleExport = () => {
    setIsExporting(true);
    const jsonStr = exportAllDataJSON();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `IBGE_Estudos_${activeProfile.name.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.json`;
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
          alert('❌ Formato de arquivo JSON inválido.');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* LOGO & REGLAGENS DA PROVA */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('flashcards')}>
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-tr from-indigo-600 to-emerald-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <BrainCircuit className="w-6 h-6 text-indigo-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-base sm:text-lg font-bold bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-transparent">
                  IBGE Reta Final
                </h1>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full">
                  Agente de Informática - BA
                </span>
              </div>
              <p className="text-xs text-slate-400 flex items-center gap-1.5">
                <Calendar className="w-3 h-3 text-amber-400" />
                <span className="text-amber-300 font-medium">Prova neste Domingo!</span>
                <span className="hidden sm:inline text-slate-500">• {daysLeft} dia(s) restantes</span>
              </p>
            </div>
          </div>

          {/* TABS DE NAVEGAÇÃO PRINCIPAL */}
          <nav className="hidden lg:flex items-center space-x-1 bg-slate-950/80 p-1.5 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveTab('flashcards')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'flashcards'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Questões Flashcards</span>
            </button>

            <button
              onClick={() => setActiveTab('simulado')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'simulado'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Clock className="w-4 h-4" />
              <span>Simulado Cronometrado</span>
            </button>

            <button
              onClick={() => setActiveTab('tutor_ia')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'tutor_ia'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Bot className="w-4 h-4 text-emerald-400" />
              <span>Tutor IA</span>
            </button>

            <button
              onClick={() => setActiveTab('caderno_erros')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'caderno_erros'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>Caderno de Erros</span>
            </button>

            <button
              onClick={() => setActiveTab('bizus')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'bizus'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Paredão de Bizus</span>
            </button>

            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Desempenho</span>
            </button>
          </nav>

          {/* PERFIL & PORTABILIDADE (EXPORT / IMPORT JSON) */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* STREAK */}
            <div className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-lg text-xs font-bold shadow-inner">
              <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-bounce" />
              <span>{activeProfile.streakDays} dia(s)</span>
            </div>

            {/* SELETOR DE PERFIL (Pedro / Namorada) */}
            <div className="relative flex items-center bg-slate-800 rounded-xl p-1 border border-slate-700">
              <span className="text-xl px-1 sm:px-2" title="Avatar">{activeProfile.avatar}</span>
              <select
                value={activeProfile.id}
                onChange={(e) => onSwitchProfile(e.target.value)}
                className="bg-transparent text-xs sm:text-sm font-semibold text-slate-200 py-1 pr-2 rounded-lg cursor-pointer focus:outline-none"
              >
                {profiles.map(p => (
                  <option key={p.id} value={p.id} className="bg-slate-900 text-white">
                    {p.name}
                  </option>
                ))}
              </select>
            </div>

            {/* BOTÕES DE EXPORTAR E IMPORTAR JSON */}
            <div className="flex items-center space-x-1">
              <button
                onClick={handleExport}
                disabled={isExporting}
                title="Exportar Progresso para Backup ou Outra Máquina (JSON)"
                className="p-2 text-slate-400 hover:text-emerald-400 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700"
              >
                <Download className="w-4 h-4" />
              </button>

              <label
                title="Importar Progresso de Arquivo JSON"
                className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-slate-800 rounded-lg transition-colors border border-slate-700 cursor-pointer"
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

        {/* NAVEGAÇÃO MOBILE */}
        <div className="flex lg:hidden overflow-x-auto py-2 space-x-2 border-t border-slate-800 scrollbar-none">
          <button
            onClick={() => setActiveTab('flashcards')}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'flashcards' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Flashcards
          </button>
          <button
            onClick={() => setActiveTab('simulado')}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'simulado' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Clock className="w-3.5 h-3.5 mr-1" /> Simulado
          </button>
          <button
            onClick={() => setActiveTab('tutor_ia')}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'tutor_ia' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Bot className="w-3.5 h-3.5 mr-1 text-emerald-400" /> Tutor IA
          </button>
          <button
            onClick={() => setActiveTab('caderno_erros')}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'caderno_erros' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <BookMarked className="w-3.5 h-3.5 mr-1" /> Caderno de Erros
          </button>
          <button
            onClick={() => setActiveTab('bizus')}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'bizus' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 mr-1" /> Bizus
          </button>
          <button
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold ${
              activeTab === 'dashboard' ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
            }`}
          >
            <Award className="w-3.5 h-3.5 mr-1" /> Desempenho
          </button>
        </div>

      </div>
    </header>
  );
};
