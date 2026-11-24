import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Cpu, 
  ShieldCheck, 
  Box, 
  Network, 
  Terminal, 
  Database, 
  Activity, 
  Code, 
  Lightbulb, 
  AlertTriangle, 
  Info, 
  Volume2, 
  VolumeX, 
  CheckCircle, 
  Copy, 
  ChevronRight,
  Flame
} from 'lucide-react';
import type { SubjectType } from '../types/study';
import { THEORY_TOPICS, type TheoryTopic } from '../data/theoryContent';

interface CadernosTeoriaModeProps {
  selectedSubject: SubjectType;
  onSelectSubject: (subj: SubjectType) => void;
}

export const CadernosTeoriaMode: React.FC<CadernosTeoriaModeProps> = ({
  selectedSubject,
  onSelectSubject
}) => {
  const filteredTopics = THEORY_TOPICS.filter(t => t.subject === selectedSubject);

  const [activeTopicId, setActiveTopicId] = useState<string>(() => {
    return filteredTopics[0]?.id || 'lp-crase-regras';
  });

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // Sincronizar tópico ativo ao mudar disciplina
  useEffect(() => {
    if (filteredTopics.length > 0 && !filteredTopics.some(t => t.id === activeTopicId)) {
      setActiveTopicId(filteredTopics[0].id);
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedSubject, filteredTopics]);

  const activeTopic = filteredTopics.find(t => t.id === activeTopicId) || filteredTopics[0];

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeId(id);
    setTimeout(() => setCopiedCodeId(null), 2000);
  };

  const speakTopic = (topic: TheoryTopic) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const fullText = `${topic.title}. ${topic.subtitle}. ` + 
      topic.sections.map(s => `${s.title}. ${s.content}`).join('. ') + 
      `. Bizus finais: ` + topic.bizus.join('. ');

    const clean = fullText.replace(/[*_#$`\\~•-]/g, ' ');
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'pt-BR';
    u.rate = 1.05;
    u.onend = () => setIsSpeaking(false);
    u.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  const getTopicIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400 animate-pulse" />;
      case 'Box': return <Box className="w-5 h-5 text-amber-400" />;
      case 'Network': return <Network className="w-5 h-5 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-rose-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Activity': return <Activity className="w-5 h-5 text-teal-400" />;
      case 'Code': return <Code className="w-5 h-5 text-indigo-400" />;
      default: return <BookOpen className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8 animate-fadeIn">
      
      {/* SELETOR SUPERIOR DE DISCIPLINA (SEPARAÇÃO RÍGIDA) */}
      <div className="bg-slate-900/90 border border-slate-800 p-3 sm:p-4 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Área de Estudo Conceitual Puro (Sem Questões)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Cadernos de Teoria & Bizus • Concurso UFBA 2026
          </h2>
          <p className="text-xs text-slate-400">
            Estudo direcionado para o Cargo 201 (Assistente em Administração) com foco no edital oficial.
          </p>
        </div>

        {/* BOTOES DE DISCIPLINA */}
        <div className="grid grid-cols-2 sm:flex items-center gap-2 w-full sm:w-auto">
          <button
            onClick={() => onSelectSubject('Língua Portuguesa')}
            className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              selectedSubject === 'Língua Portuguesa'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 ring-1 ring-blue-400'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🇧🇷 Português</span>
          </button>

          <button
            onClick={() => onSelectSubject('Noções de Informática')}
            className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              selectedSubject === 'Noções de Informática'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-600/30 ring-1 ring-cyan-400'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>💻 Informática</span>
          </button>

          <button
            onClick={() => onSelectSubject('Administração Pública')}
            className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              selectedSubject === 'Administração Pública'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/30 ring-1 ring-amber-400'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🏛️ Adm. Pública</span>
          </button>

          <button
            onClick={() => onSelectSubject('Conhecimentos Específicos')}
            className={`px-3 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
              selectedSubject === 'Conhecimentos Específicos'
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>📂 Específicas</span>
          </button>
        </div>
      </div>

      {/* LAYOUT PRINCIPAL: SIDEBAR DE TÓPICOS + CONTEÚDO */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* SIDEBAR COM A LISTA DE TÓPICOS */}
        <div className="lg:col-span-4 space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-2 flex items-center justify-between">
            <span>Tópicos da Disciplina ({filteredTopics.length})</span>
            <span className="text-[11px] text-slate-500 font-normal">Clique para estudar</span>
          </div>

          <div className="space-y-2">
            {filteredTopics.map((topic) => {
              const isActive = topic.id === activeTopicId;
              const isSpecial = topic.id === 'qs-complexidade-ciclomatica';

              return (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTopicId(topic.id);
                    if ('speechSynthesis' in window) {
                      window.speechSynthesis.cancel();
                      setIsSpeaking(false);
                    }
                  }}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3.5 relative overflow-hidden ${
                    isActive
                      ? isSpecial
                        ? 'bg-gradient-to-r from-indigo-900/60 to-slate-900 border-indigo-500 shadow-xl shadow-indigo-600/20 ring-1 ring-indigo-400'
                        : 'bg-slate-900 border-emerald-500/80 shadow-xl shadow-emerald-600/10'
                      : 'bg-slate-950/80 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40 text-slate-300'
                  }`}
                >
                  <div className={`p-2.5 rounded-xl shrink-0 ${
                    isActive ? 'bg-indigo-600/20 border border-indigo-500/30' : 'bg-slate-900 border border-slate-800'
                  }`}>
                    {getTopicIcon(topic.iconName)}
                  </div>

                  <div className="flex-1 min-w-0">
                    {topic.badge && (
                      <span className={`inline-block text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full mb-1 ${
                        isSpecial 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {topic.badge}
                      </span>
                    )}
                    <h3 className={`text-sm font-bold truncate leading-snug ${
                      isActive ? 'text-white' : 'text-slate-200'
                    }`}>
                      {topic.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-2 mt-0.5">
                      {topic.subtitle}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-slate-500 font-medium">
                      <span>⏱️ {topic.readingTime}</span>
                      <span>• {topic.sections.length} seções</span>
                    </div>
                  </div>

                  <ChevronRight className={`w-4 h-4 shrink-0 mt-3 transition-transform ${
                    isActive ? 'text-indigo-400 translate-x-1' : 'text-slate-600'
                  }`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* CONTEÚDO PRINCIPAL DO TÓPICO */}
        <div className="lg:col-span-8 space-y-8">
          
          {/* HEADER DO TÓPICO ATUAL */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold">
                  {activeTopic.subject}
                </span>
                {activeTopic.badge && (
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold">
                    {activeTopic.badge}
                  </span>
                )}
              </div>

              {/* BOTAO OUVIR AUDIO */}
              <button
                onClick={() => speakTopic(activeTopic)}
                className={`p-2 sm:px-3.5 sm:py-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isSpeaking
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
                }`}
                title="Ouvir Narração Didática do Tópico"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
                <span className="hidden sm:inline">{isSpeaking ? 'Pausar Áudio' : 'Ouvir Tópico'}</span>
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
              {activeTopic.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              {activeTopic.subtitle}
            </p>
          </div>

          {/* SEÇÕES FORMATADAS DO CONTEÚDO TEÓRICO */}
          <div className="space-y-6">
            {activeTopic.sections.map((section, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl"
              >
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                  <span className="w-2 h-2 rounded-full bg-indigo-500" />
                  {section.title}
                </h3>

                <div className="text-sm sm:text-base text-slate-300 leading-relaxed whitespace-pre-line">
                  {section.content}
                </div>

                {/* SNIPPET DE CÓDIGO (SE HOUVER) */}
                {section.codeSnippet && (
                  <div className="space-y-2 pt-2">
                    {section.codeSnippet.caption && (
                      <span className="text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                        <Code className="w-3.5 h-3.5 text-indigo-400" />
                        {section.codeSnippet.caption}
                      </span>
                    )}

                    <div className="relative rounded-2xl bg-slate-950 border border-slate-800 overflow-hidden shadow-inner">
                      <div className="flex justify-between items-center px-4 py-2 bg-slate-900/80 border-b border-slate-800 text-[11px] text-slate-400 font-mono">
                        <span>{section.codeSnippet.language.toUpperCase()}</span>
                        <button
                          onClick={() => handleCopyCode(section.codeSnippet!.code, `code-${idx}`)}
                          className="flex items-center space-x-1 hover:text-white transition-colors"
                        >
                          <Copy className="w-3.5 h-3.5" />
                          <span>{copiedCodeId === `code-${idx}` ? 'Copiado!' : 'Copiar'}</span>
                        </button>
                      </div>

                      <pre className="p-4 text-xs sm:text-sm font-mono text-emerald-300 overflow-x-auto leading-relaxed">
                        {section.codeSnippet.code}
                      </pre>
                    </div>
                  </div>
                )}

                {/* ALERT BOX (SE HOUVER) */}
                {section.alert && (
                  <div className={`p-4 rounded-2xl border text-xs sm:text-sm flex items-start space-x-3 mt-3 ${
                    section.alert.type === 'tip'
                      ? 'bg-amber-500/10 border-amber-500/30 text-amber-200'
                      : section.alert.type === 'warning'
                      ? 'bg-rose-500/10 border-rose-500/30 text-rose-200'
                      : 'bg-indigo-500/10 border-indigo-500/30 text-indigo-200'
                  }`}>
                    {section.alert.type === 'tip' && <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />}
                    {section.alert.type === 'warning' && <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />}
                    {section.alert.type === 'info' && <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />}
                    <div className="leading-relaxed">
                      <strong className="block font-bold mb-0.5">{section.alert.title}</strong>
                      {section.alert.message}
                    </div>
                  </div>
                )}

              </div>
            ))}
          </div>

          {/* PAREDÃO DE BIZUS DO TÓPICO */}
          {activeTopic.bizus.length > 0 && (
            <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-indigo-950/80 border border-indigo-500/40 rounded-3xl p-6 sm:p-8 space-y-4 shadow-2xl">
              <div className="flex items-center space-x-2 text-amber-300 font-extrabold text-sm uppercase tracking-wider">
                <Lightbulb className="w-5 h-5 text-amber-400 animate-pulse" />
                <span>Bizus de Fixação Imediata para este Tópico</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeTopic.bizus.map((bizu, bIdx) => (
                  <div 
                    key={bIdx}
                    className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-2xl text-xs sm:text-sm text-indigo-100 flex items-start space-x-2.5 shadow-inner"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{bizu}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
