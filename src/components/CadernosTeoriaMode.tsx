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
  Calculator, 
  ChevronRight,
  Sparkles,
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
    return selectedSubject === 'Qualidade de Software' 
      ? 'qs-revisao-aula-de-hoje' 
      : 'bd-formas-normais';
  });

  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [copiedCodeId, setCopiedCodeId] = useState<string | null>(null);

  // ESTADO DA CALCULADORA INTERATIVA DE MCCABE
  const [calcP, setCalcP] = useState<number>(2);
  const [calcEdges, setCalcEdges] = useState<number>(9);
  const [calcNodes, setCalcNodes] = useState<number>(8);
  const [activeCodeExample, setActiveCodeExample] = useState<'ex1' | 'ex2' | 'ex3'>('ex1');

  // Sincronizar tópico ativo ao mudar disciplina
  useEffect(() => {
    if (selectedSubject === 'Qualidade de Software') {
      setActiveTopicId('qs-revisao-aula-de-hoje');
    } else {
      setActiveTopicId('bd-formas-normais');
    }
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedSubject]);

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
            Cadernos de Teoria, Slides & Bizus UNIFACS
          </h2>
          <p className="text-xs text-slate-400">
            Aprofunde os assuntos ponto a ponto, com foco nas explicações dos professores e exemplos reais dos slides.
          </p>
        </div>

        {/* BOTOES DE DISCIPLINA */}
        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button
            onClick={() => onSelectSubject('Qualidade de Software')}
            className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
              selectedSubject === 'Qualidade de Software'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30 ring-1 ring-indigo-400'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🔬 Qualidade de Software (Terça 20/10)</span>
          </button>

          <button
            onClick={() => onSelectSubject('Banco de Dados')}
            className={`flex-1 sm:flex-initial px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
              selectedSubject === 'Banco de Dados'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30 ring-1 ring-emerald-400'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🗄️ Banco de Dados (Quarta 21/10)</span>
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

          {/* ============================================================== */}
          {/* SEÇÃO ESPECIAL INTERATIVA: WORKSHOP DE COMPLEXIDADE CICLOMÁTICA */}
          {/* ============================================================== */}
          {activeTopic.id === 'qs-complexidade-ciclomatica' && (
            <div className="bg-gradient-to-b from-indigo-950/60 via-slate-900 to-slate-900 border-2 border-indigo-500/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
              
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-600/40">
                  <Calculator className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                    Laboratório Interativo de McCabe <Sparkles className="w-4 h-4 text-amber-400" />
                  </h3>
                  <p className="text-xs text-indigo-200">
                    Ferramenta prática para Gilvania nunca mais errar o cálculo em provas e exercícios!
                  </p>
                </div>
              </div>

              {/* CALCULADORA AO VIVO */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-slate-950 p-5 rounded-2xl border border-slate-800">
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                    <Lightbulb className="w-4 h-4 text-amber-400" />
                    Método dos Nós Predicados: V(G) = P + 1
                  </span>
                  <div className="flex items-center space-x-3">
                    <label className="text-xs text-slate-400">Nós de Decisão (P):</label>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={calcP}
                      onChange={(e) => setCalcP(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-16 bg-slate-900 border border-slate-700 rounded-xl px-2 py-1 text-center font-mono font-bold text-white text-sm"
                    />
                  </div>
                  <div className="p-3 bg-indigo-950/40 border border-indigo-500/30 rounded-xl text-xs text-indigo-200">
                    Resultado: <span className="text-emerald-400 font-mono font-black text-base">{calcP} + 1 = {calcP + 1}</span> casos de teste necessários.
                  </div>
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                    <Network className="w-4 h-4 text-cyan-400" />
                    Método do Grafo: V(G) = E - N + 2
                  </span>
                  <div className="flex items-center space-x-3 text-xs">
                    <label className="text-slate-400">Arestas (E):</label>
                    <input
                      type="number"
                      min={0}
                      max={40}
                      value={calcEdges}
                      onChange={(e) => setCalcEdges(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-14 bg-slate-900 border border-slate-700 rounded-xl px-1.5 py-1 text-center font-mono font-bold text-white text-sm"
                    />
                    <label className="text-slate-400">Nós (N):</label>
                    <input
                      type="number"
                      min={0}
                      max={40}
                      value={calcNodes}
                      onChange={(e) => setCalcNodes(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-14 bg-slate-900 border border-slate-700 rounded-xl px-1.5 py-1 text-center font-mono font-bold text-white text-sm"
                    />
                  </div>
                  <div className="p-3 bg-cyan-950/40 border border-cyan-500/30 rounded-xl text-xs text-cyan-200">
                    Resultado: <span className="text-emerald-400 font-mono font-black text-base">{calcEdges} - {calcNodes} + 2 = {calcEdges - calcNodes + 2}</span> casos de teste.
                  </div>
                </div>
              </div>

              {/* SELETOR DOS 3 EXEMPLOS REAIS DOS SLIDES DO PROF. ENDERSON */}
              <div className="space-y-4 pt-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-300">
                  <span>Os 3 Códigos Oficiais dos Slides (Aula 4):</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setActiveCodeExample('ex1')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeCodeExample === 'ex1'
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Slide 18: calcularDesconto
                  </button>

                  <button
                    onClick={() => setActiveCodeExample('ex2')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeCodeExample === 'ex2'
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Slide 19: verificarAcesso
                  </button>

                  <button
                    onClick={() => setActiveCodeExample('ex3')}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeCodeExample === 'ex3'
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                        : 'bg-slate-950 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    Slide 20: somarFaturasAtivas (Loop While)
                  </button>
                </div>

                {/* DETALHAMENTO DO EXEMPLO SELECIONADO */}
                {activeCodeExample === 'ex1' && (
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center text-xs text-indigo-300 font-bold">
                      <span>Exemplo 1: calcularDesconto(valorCompra, isClienteVip)</span>
                      <span className="font-mono text-emerald-400">V(G) = 3</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                      1. if (valorCompra &gt; 100.0) {"// Nó P1"}<br/>
                      2. &nbsp;&nbsp;if (isClienteVip) {"// Nó P2"}<br/>
                      3. &nbsp;&nbsp;&nbsp;&nbsp;desconto = 0.20;<br/>
                      4. &nbsp;&nbsp;else desconto = 0.10;<br/>
                      5. else desconto = 0.05;<br/>
                      6. return valorCompra * (1 - desconto);
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 1 (V, V):</span>
                        valor &gt; 100 e isVip=true.<br/>
                        <span className="text-emerald-400 font-mono">Entrada: (150, true) &rarr; 120.0</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 2 (V, F):</span>
                        valor &gt; 100 e isVip=false.<br/>
                        <span className="text-emerald-400 font-mono">Entrada: (150, false) &rarr; 135.0</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 3 (F):</span>
                        valor &le; 100.<br/>
                        <span className="text-emerald-400 font-mono">Entrada: (80, false) &rarr; 76.0</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeCodeExample === 'ex2' && (
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center text-xs text-indigo-300 font-bold">
                      <span>Exemplo 2: verificarAcesso(idade, temConvenio)</span>
                      <span className="font-mono text-emerald-400">V(G) = 3</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                      1. if (idade &gt;= 60) {"// Nó P1"}<br/>
                      2. &nbsp;&nbsp;if (temConvenio) {"// Nó P2"} aplicarIsencao();<br/>
                      3. &nbsp;&nbsp;else aplicarTaxaMinima();<br/>
                      4. else aplicarTaxaPadrao();<br/>
                      5. finalizarAtendimento(); {"// Convergência"}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 1:</span>
                        idade &ge; 60 e temConvenio=true.<br/>
                        <span className="text-emerald-400">Aplica Isenção.</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 2:</span>
                        idade &ge; 60 e temConvenio=false.<br/>
                        <span className="text-emerald-400">Aplica Taxa Mínima.</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 3:</span>
                        idade &lt; 60.<br/>
                        <span className="text-emerald-400">Aplica Taxa Padrão.</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeCodeExample === 'ex3' && (
                  <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 animate-fadeIn">
                    <div className="flex justify-between items-center text-xs text-indigo-300 font-bold">
                      <span>Exemplo 3: somarFaturasAtivas(int[] faturas) — Com Loop While</span>
                      <span className="font-mono text-emerald-400">V(G) = 3</span>
                    </div>

                    <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-300">
                      1. while (i &lt; faturas.length) {"// Nó P1 (Loop com aresta de retorno)"}<br/>
                      2. &nbsp;&nbsp;if (faturas[i] &gt; 0) {"// Nó P2 (Filtro)"} soma += faturas[i];<br/>
                      3. &nbsp;&nbsp;i++;<br/>
                      4. return soma;
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 1 (Pula Loop):</span>
                        Array vazio [] &rarr; o while dá Falso logo de início.<br/>
                        <span className="text-emerald-400 font-mono">Retorna 0</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 2 (Entra, pula if):</span>
                        Array [-10] &rarr; entra no loop, mas não soma.<br/>
                        <span className="text-emerald-400 font-mono">Retorna 0</span>
                      </div>
                      <div className="p-3 bg-slate-900/60 rounded-xl border border-slate-800">
                        <span className="font-bold text-amber-300 block mb-1">Caminho 3 (Entra e soma):</span>
                        Array [50] &rarr; entra no loop e soma.<br/>
                        <span className="text-emerald-400 font-mono">Retorna 50</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

            </div>
          )}

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
