import React, { useState, useEffect } from 'react';
import { 
  PenTool, 
  CheckCircle2, 
  HelpCircle, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Sparkles,
  Lightbulb,
  AlertTriangle,
  Award,
  Bot,
  Check,
  XCircle,
  ThumbsUp,
  Sliders,
  RefreshCw
} from 'lucide-react';
import type { DiscursiveQuestion, SubjectType, UserProfile } from '../types/study';
import { DISCURSIVE_QUESTIONS } from '../data/discursiveQuestions';
import { recordDiscursiveAnswer } from '../services/storageService';
import { evaluateDiscursiveAnswer, type EvaluationResult } from '../utils/discursiveEvaluator';

interface DiscursiveModeProps {
  selectedSubject: SubjectType;
  onSelectSubject: (subj: SubjectType) => void;
  activeProfile: UserProfile;
  onUpdateProfile: (p: UserProfile) => void;
}

export const DiscursiveMode: React.FC<DiscursiveModeProps> = ({
  selectedSubject,
  onSelectSubject,
  activeProfile,
  onUpdateProfile
}) => {
  const [filterClassroomOnly, setFilterClassroomOnly] = useState<boolean>(true);
  
  // Filtrar questões pela disciplina selecionada e se é foco da folha de sala
  const filteredQuestions = DISCURSIVE_QUESTIONS.filter(q => {
    if (q.subject !== selectedSubject) return false;
    if (selectedSubject === 'Qualidade de Software' && filterClassroomOnly) {
      return Boolean(q.isFromClassroomReview);
    }
    return true;
  });
  
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState<boolean>(false);
  const [draft, setDraft] = useState<string>('');
  const [checkedKeywords, setCheckedKeywords] = useState<string[]>([]);
  const [selfScore, setSelfScore] = useState<number | null>(null);
  const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [saveStatus, setSaveStatus] = useState<string>('idle');
  const [isEvaluating, setIsEvaluating] = useState<boolean>(false);
  const [showScoreSlider, setShowScoreSlider] = useState<boolean>(false);

  // Ajustar índice se mudar disciplina
  useEffect(() => {
    setCurrentIdx(0);
    setShowAnswer(false);
    setShowHint(false);
    setShowScoreSlider(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [selectedSubject]);

  const currentQ: DiscursiveQuestion | undefined = filteredQuestions[currentIdx];

  // Helper para resgatar resposta salva sem risco de perda por ID ou legacyId
  const getSavedAnswer = (q: DiscursiveQuestion | undefined) => {
    if (!q) return undefined;
    return activeProfile.discursiveAnswers?.[q.id] || 
      (q.legacyId ? activeProfile.discursiveAnswers?.[q.legacyId] : undefined);
  };

  // Carregar rascunho salvo do perfil de forma 100% segura sem perder nada
  useEffect(() => {
    if (!currentQ) return;
    const saved = getSavedAnswer(currentQ);
    if (saved) {
      const savedDraft = saved.userDraft || '';
      setDraft(savedDraft);
      setCheckedKeywords(saved.checkedKeywords || []);
      setSelfScore(saved.selfScore !== undefined ? saved.selfScore : null);
      
      // Se já tem rascunho salvo, pré-avalia para ter o resultado pronto
      if (savedDraft.trim().length > 0) {
        const evalRes = evaluateDiscursiveAnswer(savedDraft, currentQ);
        setEvaluation(evalRes);
      } else {
        setEvaluation(null);
      }
    } else {
      setDraft('');
      setCheckedKeywords([]);
      setSelfScore(null);
      setEvaluation(null);
    }
    setShowAnswer(false);
    setShowHint(false);
    setShowScoreSlider(false);
    setSaveStatus('idle');
  }, [currentIdx, currentQ?.id]);

  // Salvar rascunho com debounce automático sem perder histórico
  useEffect(() => {
    if (!currentQ) return;
    const timer = setTimeout(() => {
      if (draft.trim() || checkedKeywords.length > 0 || selfScore !== null) {
        let updated = recordDiscursiveAnswer(
          currentQ.id,
          draft,
          selfScore !== null ? selfScore : undefined,
          checkedKeywords,
          evaluation?.suggestedScore,
          evaluation?.pedagogicalFeedback
        );
        if (currentQ.legacyId) {
          updated = recordDiscursiveAnswer(
            currentQ.legacyId,
            draft,
            selfScore !== null ? selfScore : undefined,
            checkedKeywords,
            evaluation?.suggestedScore,
            evaluation?.pedagogicalFeedback
          );
        }
        onUpdateProfile(updated);
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
      }
    }, 800);

    return () => clearTimeout(timer);
  }, [draft, checkedKeywords, selfScore, evaluation, currentQ?.id]);

  // Executar correção inteligente automática
  const handleAutoEvaluate = () => {
    if (!currentQ) return;
    setIsEvaluating(true);

    setTimeout(() => {
      const evalRes = evaluateDiscursiveAnswer(draft, currentQ);
      setEvaluation(evalRes);
      
      // Mesclar palavras-chave encontradas automaticamente com as já marcadas
      const mergedKeywords = Array.from(new Set([...checkedKeywords, ...evalRes.matchedKeywords]));
      setCheckedKeywords(mergedKeywords);

      // Se ainda não tinha nota definida ou se solicitou correção, sugere a nota calculada
      if (selfScore === null) {
        setSelfScore(evalRes.suggestedScore);
      }

      // Salva no perfil com os dados da correção (em id e legacyId se houver)
      let updated = recordDiscursiveAnswer(
        currentQ.id,
        draft,
        selfScore !== null ? selfScore : evalRes.suggestedScore,
        mergedKeywords,
        evalRes.suggestedScore,
        evalRes.pedagogicalFeedback
      );
      if (currentQ.legacyId) {
        updated = recordDiscursiveAnswer(
          currentQ.legacyId,
          draft,
          selfScore !== null ? selfScore : evalRes.suggestedScore,
          mergedKeywords,
          evalRes.suggestedScore,
          evalRes.pedagogicalFeedback
        );
      }
      onUpdateProfile(updated);

      setShowAnswer(true);
      setIsEvaluating(false);
    }, 400);
  };

  const toggleKeyword = (kw: string) => {
    const next = checkedKeywords.includes(kw)
      ? checkedKeywords.filter(k => k !== kw)
      : [...checkedKeywords, kw];
    setCheckedKeywords(next);
  };

  const handleSetScore = (score: number) => {
    setSelfScore(score);
    if (currentQ) {
      let updated = recordDiscursiveAnswer(
        currentQ.id, 
        draft, 
        score, 
        checkedKeywords,
        evaluation?.suggestedScore,
        evaluation?.pedagogicalFeedback
      );
      if (currentQ.legacyId) {
        updated = recordDiscursiveAnswer(
          currentQ.legacyId, 
          draft, 
          score, 
          checkedKeywords,
          evaluation?.suggestedScore,
          evaluation?.pedagogicalFeedback
        );
      }
      onUpdateProfile(updated);
    }
  };

  const handleAcceptSuggestedScore = () => {
    if (!evaluation || !currentQ) return;
    handleSetScore(evaluation.suggestedScore);
  };

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    window.speechSynthesis.cancel();
    const clean = text.replace(/[*_#$`\\~•-]/g, ' ');
    const u = new SpeechSynthesisUtterance(clean);
    u.lang = 'pt-BR';
    u.rate = 1.05;
    u.onend = () => setIsSpeaking(false);
    u.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(u);
  };

  if (!currentQ) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center text-slate-400">
        Nenhuma questão discursiva encontrada para esta matéria.
      </div>
    );
  }

  const keywordPercentage = currentQ.keywords.length > 0
    ? Math.round((checkedKeywords.length / currentQ.keywords.length) * 100)
    : 0;

  const currentAnswerSaved = getSavedAnswer(currentQ);
  const hasUserWritten = Boolean(draft.trim());

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-6 animate-fadeIn">
      
      {/* SELETOR DE MATÉRIA NO TOPO (SEPARAÇÃO RÍGIDA) */}
      <div className="bg-slate-900/90 border border-slate-800 p-2 sm:p-3 rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center space-x-2 text-xs font-bold text-slate-300 px-2">
          <PenTool className="w-4 h-4 text-emerald-400" />
          <span>Caderno Discursivo:</span>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button
            onClick={() => onSelectSubject('Qualidade de Software')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
              selectedSubject === 'Qualidade de Software'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🔬 Qualidade de Software (Terça 20/10)</span>
            <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">16 Qs</span>
          </button>

          <button
            onClick={() => onSelectSubject('Banco de Dados')}
            className={`flex-1 sm:flex-initial px-4 py-2 rounded-2xl text-xs font-bold transition-all flex items-center justify-center space-x-2 ${
              selectedSubject === 'Banco de Dados'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <span>🗄️ Banco de Dados (Quarta 21/10)</span>
            <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">10 Qs</span>
          </button>
        </div>
      </div>

      {/* SELETOR DE FOCO: FOLHA DE HOJE VS TODAS AS QUESTÕES */}
      {selectedSubject === 'Qualidade de Software' && (
        <div className="bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/40 p-3 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
          <div className="flex items-center space-x-2.5 text-xs font-bold text-amber-300 px-1">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
            <span className="uppercase tracking-wider">Foco na Prova de Amanhã (Aula de Hoje):</span>
          </div>
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={() => { setFilterClassroomOnly(true); setCurrentIdx(0); }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center justify-center space-x-1.5 ${
                filterClassroomOnly
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-md shadow-amber-500/30 font-black scale-105'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>🔥 10 Questões da Folha de Exercício (PDF 1)</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/30 text-[10px]">10 Qs</span>
            </button>
            <button
              onClick={() => { setFilterClassroomOnly(false); setCurrentIdx(0); }}
              className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
                !filterClassroomOnly
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-bold scale-105'
                  : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              <span>📑 As 15 Questões do Gabarito do Professor (PDF 2)</span>
              <span className="px-1.5 py-0.5 rounded-full bg-black/20 text-[10px]">16 Qs</span>
            </button>
          </div>
        </div>
      )}

      {/* BANNER PEDAGÓGICO: COMO FUNCIONA A CORREÇÃO AUTOMÁTICA */}
      <div className="bg-gradient-to-r from-indigo-950/80 via-slate-900 to-purple-950/80 border border-indigo-500/30 rounded-3xl p-4 sm:p-5 shadow-xl">
        <div className="flex items-start space-x-3.5">
          <div className="w-10 h-10 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shrink-0 mt-0.5 text-indigo-300">
            <Bot className="w-5 h-5 animate-pulse" />
          </div>
          <div className="space-y-1.5 text-xs sm:text-sm">
            <h4 className="font-extrabold text-white flex items-center gap-2">
              <span>Como Funciona o Corretor de Questões Abertas?</span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                Correção Inteligente Ativa
              </span>
            </h4>
            <p className="text-slate-300 leading-relaxed">
              Escreva sua resposta como se estivesse na prova. Quando clicar em <strong className="text-emerald-300 font-bold">"Corrigir Minha Resposta"</strong>, o robô examinador analisa seu texto, identifica os conceitos e termos-chave que o professor exige, calcula sua nota sugerida (0 a 10) e mostra detalhadamente o que você acertou e o que faltou mencionar. Você tem liberdade total para aceitar a nota ou ajustá-la!
            </p>
          </div>
        </div>
      </div>

      {/* CARROSSEL DE SELEÇÃO NUMÉRICA DAS QUESTÕES */}
      <div className="bg-slate-900/70 border border-slate-800 p-4 rounded-3xl space-y-2">
        <div className="flex justify-between items-center text-xs text-slate-400 font-semibold px-1">
          <span>Selecione a Questão Discursiva:</span>
          <span>{currentIdx + 1} de {filteredQuestions.length}</span>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filteredQuestions.map((q, idx) => {
            const isCurrent = idx === currentIdx;
            const qAns = getSavedAnswer(q);
            const hasDraft = Boolean(qAns?.userDraft?.trim());
            const hasScore = qAns?.selfScore !== undefined && qAns?.selfScore !== null;

            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`flex-shrink-0 px-3 py-2 rounded-2xl text-xs font-bold transition-all border flex items-center space-x-1.5 ${
                  isCurrent
                    ? 'bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/40 scale-105'
                    : hasScore
                    ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40 hover:bg-emerald-900/30'
                    : hasDraft
                    ? 'bg-amber-950/40 text-amber-300 border-amber-500/40 hover:bg-amber-900/30'
                    : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200'
                }`}
                title={`Questão ${idx + 1}: ${q.topic}`}
              >
                <span>Q{(idx + 1).toString().padStart(2, '0')}</span>
                {q.isFromClassroomReview && (
                  <span className="text-[10px]" title="Folha de Sala">🔥</span>
                )}
                {hasScore ? (
                  <span className="text-[10px] text-emerald-400 font-mono">[{qAns?.selfScore}]</span>
                ) : hasDraft ? (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" title="Rascunho salvo pronto para correção" />
                ) : null}
              </button>
            );
          })}
        </div>
      </div>

      {/* CARD DA QUESTÃO ATUAL */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative">
        
        {/* CABEÇALHO DO ENUNCIADO */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
          <div className="flex flex-wrap items-center gap-2">
            {currentQ.isFromClassroomReview && (
              <span className="px-3 py-1 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 text-xs font-black flex items-center gap-1.5 shadow-sm">
                <span>🔥 Folha de Sala #{currentQ.classroomOrder}</span>
              </span>
            )}
            {currentQ.pdfMapping && (
              <span className="px-3 py-1 rounded-xl bg-purple-500/15 border border-purple-500/30 text-purple-200 text-xs font-semibold flex items-center gap-1.5 shadow-sm">
                <span>📄 {currentQ.pdfMapping}</span>
              </span>
            )}
            <span className="px-3 py-1 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-bold font-mono">
              Questão {(currentIdx + 1).toString().padStart(2, '0')}
            </span>
            <span className="px-3 py-1 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
              {currentQ.topic}
            </span>
            <span className="px-2.5 py-0.5 rounded-lg bg-emerald-500/10 text-emerald-400 text-[11px] font-bold">
              {currentQ.difficulty}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {saveStatus === 'saved' && (
              <span className="text-[11px] text-emerald-400 font-medium flex items-center gap-1 animate-fadeIn">
                <CheckCircle2 className="w-3.5 h-3.5" /> Resposta Salva
              </span>
            )}

            <button
              onClick={() => setShowHint(!showHint)}
              className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1 ${
                showHint 
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40' 
                  : 'bg-slate-950 text-slate-400 border-slate-800 hover:text-amber-300'
              }`}
              title="Dica de Abordagem do Professor"
            >
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Dica do Prof</span>
            </button>
          </div>
        </div>

        {/* ENUNCIADO OFICIAL */}
        <div className="space-y-3">
          <h3 className="text-lg sm:text-xl font-bold text-white leading-relaxed">
            {currentQ.statement}
          </h3>
          <p className="text-xs text-slate-500 font-mono">
            Origem: {currentQ.source}
          </p>
        </div>

        {/* BOX DE DICA DO PROFESSOR (SE ABERTO) */}
        {showHint && currentQ.contextHint && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs sm:text-sm flex items-start space-x-3 animate-fadeIn">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <span className="font-bold text-amber-300">Dica de Prova: </span>
              {currentQ.contextHint}
            </div>
          </div>
        )}

        {/* ÁREA DE RESPOSTA DA GILVANIA */}
        <div className="space-y-2">
          <div className="flex justify-between items-center text-xs text-slate-400 font-semibold px-1">
            <span className="flex items-center gap-1.5 text-indigo-300">
              <PenTool className="w-3.5 h-3.5" /> Sua Resposta Escrita:
            </span>
            <div className="flex items-center space-x-3">
              {currentAnswerSaved?.selfScore !== undefined && currentAnswerSaved?.selfScore !== null && (
                <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-lg">
                  Nota Registrada: {currentAnswerSaved.selfScore}/10
                </span>
              )}
              <span className="font-mono text-slate-500">
                {draft.trim() ? `${draft.trim().split(/\s+/).length} palavras` : '0 palavras'}
              </span>
            </div>
          </div>

          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={7}
            placeholder="Escreva aqui sua resposta discursiva com suas próprias palavras... Ao terminar, clique no botão 'Corrigir Minha Resposta Automaticamente' abaixo."
            className="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-2xl p-4 text-sm text-slate-100 placeholder-slate-600 leading-relaxed outline-none transition-all resize-y shadow-inner"
          />
        </div>

        {/* BARRA DE AÇÃO PRINCIPAL: BOTÃO DE CORREÇÃO AUTOMÁTICA */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleAutoEvaluate}
              disabled={!hasUserWritten || isEvaluating}
              className={`px-6 py-3.5 rounded-2xl font-extrabold text-sm transition-all flex items-center justify-center space-x-2 shadow-xl ${
                !hasUserWritten
                  ? 'bg-slate-800 text-slate-500 border border-slate-700/60 cursor-not-allowed'
                  : isEvaluating
                  ? 'bg-indigo-600 text-white animate-pulse'
                  : 'bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white shadow-emerald-500/25 hover:scale-[1.02]'
              }`}
            >
              {isEvaluating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span>Avaliando sua resposta...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span>{evaluation ? '🔄 Recalcular Correção Automática' : '✨ Corrigir Minha Resposta Automaticamente'}</span>
                </>
              )}
            </button>

            <button
              onClick={() => setShowAnswer(!showAnswer)}
              className="px-4 py-3.5 rounded-2xl font-bold text-xs bg-slate-950 hover:bg-slate-800 text-slate-300 border border-slate-800 transition-all flex items-center justify-center space-x-1.5"
            >
              <span>{showAnswer ? 'Ocultar Gabarito' : 'Ver Gabarito Completo'}</span>
            </button>
          </div>

          {/* NAVEGAÇÃO ANTERIOR / PRÓXIMA */}
          <div className="flex items-center space-x-2 justify-end">
            <button
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-white disabled:opacity-30 disabled:hover:text-slate-400 text-xs font-bold transition-all flex items-center space-x-1"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={() => setCurrentIdx(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
              disabled={currentIdx === filteredQuestions.length - 1}
              className="px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-white text-xs font-bold transition-all flex items-center space-x-1 shadow-md shadow-indigo-600/30"
            >
              <span>Próxima</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* RELATÓRIO DO CORRETOR INTELIGENTE (QUANDO AVALIADO OU QUANDO GABARITO ESTIVER ABERTO) */}
        {showAnswer && (
          <div className="space-y-6 pt-4 border-t border-slate-800/80 animate-fadeIn">
            
            {/* BOX DO DIAGNÓSTICO DO CORRETOR AUTOMÁTICO */}
            {evaluation && hasUserWritten && (
              <div className="bg-gradient-to-b from-slate-950 to-slate-900 border border-indigo-500/40 rounded-3xl p-6 space-y-5 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

                {/* TOPO DO DIAGNÓSTICO: NOTA & CLASSIFICAÇÃO */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                      <Bot className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                        <span>Resultado da Correção Automática:</span>
                      </div>
                      <h4 className="text-base sm:text-lg font-extrabold text-white">
                        {evaluation.scoreTitle}
                      </h4>
                    </div>
                  </div>

                  {/* NOTA CALCULADA & AÇÕES */}
                  <div className="flex items-center space-x-3 bg-slate-900/90 border border-slate-800 p-2 sm:px-4 sm:py-2.5 rounded-2xl">
                    <div className="text-right">
                      <div className="text-[10px] uppercase font-bold text-slate-400">Nota Sugerida:</div>
                      <div className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
                        {evaluation.suggestedScore.toFixed(1)} <span className="text-xs text-slate-500 font-normal">/ 10</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1">
                      {selfScore !== evaluation.suggestedScore ? (
                        <button
                          onClick={handleAcceptSuggestedScore}
                          className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md flex items-center space-x-1"
                        >
                          <Check className="w-3.5 h-3.5" />
                          <span>Aceitar Nota</span>
                        </button>
                      ) : (
                        <span className="px-2.5 py-1 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[11px] font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Nota Salva
                        </span>
                      )}

                      <button
                        onClick={() => setShowScoreSlider(!showScoreSlider)}
                        className="text-[11px] text-indigo-300 hover:text-white underline text-center font-medium"
                      >
                        {showScoreSlider ? 'Ocultar Ajuste' : 'Ajustar Nota'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* PAINEL OPCIONAL DE AJUSTE MANUAL DE NOTA */}
                {showScoreSlider && (
                  <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 animate-fadeIn">
                    <div className="flex items-center justify-between text-xs text-slate-300 font-bold">
                      <span className="flex items-center gap-1.5">
                        <Sliders className="w-4 h-4 text-indigo-400" />
                        Ajuste Manual da Nota (0 a 10):
                      </span>
                      <span className="text-slate-400 text-[11px] font-normal">
                        Você tem autonomia total para definir sua nota final.
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5 pt-1">
                      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                        <button
                          key={num}
                          onClick={() => handleSetScore(num)}
                          className={`w-9 h-9 rounded-xl text-xs font-bold font-mono transition-all border ${
                            selfScore === num
                              ? num >= 7
                                ? 'bg-emerald-600 text-white border-emerald-400 scale-110 shadow-lg shadow-emerald-600/30'
                                : 'bg-rose-600 text-white border-rose-400 scale-110'
                              : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                          }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* FEEDBACK PEDAGÓGICO EM TEXTO */}
                <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 text-xs sm:text-sm text-indigo-100 leading-relaxed">
                  <span className="font-bold text-indigo-300">Diagnóstico do Examinador: </span>
                  {evaluation.pedagogicalFeedback}
                </div>

                {/* PONTOS FORTES E PONTOS A MELHORAR */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* PONTOS FORTES (ACERTOS) */}
                  <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-300">
                      <span className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                        Conceitos Identificados na Sua Resposta:
                      </span>
                      <span className="text-emerald-400 font-mono">
                        {evaluation.matchedKeywords.length}
                      </span>
                    </div>

                    {evaluation.matchedKeywords.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {evaluation.matchedKeywords.map((kw, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-emerald-500/15 text-emerald-200 border border-emerald-500/30 leading-snug flex items-center gap-1"
                          >
                            <Check className="w-3 h-3 text-emerald-400 shrink-0" />
                            {kw}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-slate-400 italic">
                        Nenhum termo-chave central foi detectado ainda. Tente enriquecer seu vocabulário técnico com base no gabarito abaixo.
                      </p>
                    )}
                  </div>

                  {/* PONTOS QUE FALTARAM (MELHORIAS) */}
                  <div className="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold text-rose-300">
                      <span className="flex items-center gap-1.5">
                        <XCircle className="w-4 h-4 text-rose-400" />
                        O que faltou para fechar o 10 na prova:
                      </span>
                      <span className="text-rose-400 font-mono">
                        {evaluation.missingKeywords.length}
                      </span>
                    </div>

                    {evaluation.missingKeywords.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {evaluation.missingKeywords.map((kw, idx) => (
                          <span
                            key={idx}
                            className="text-[11px] font-medium px-2.5 py-1 rounded-xl bg-rose-500/15 text-rose-200 border border-rose-500/30 leading-snug flex items-center gap-1"
                          >
                            <span className="text-rose-400 shrink-0 font-bold">•</span>
                            {kw}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-xs text-emerald-300 font-bold flex items-center gap-1.5 pt-1">
                        <ThumbsUp className="w-4 h-4" />
                        Você cobriu todos os conceitos obrigatórios da banca!
                      </div>
                    )}
                  </div>
                </div>

              </div>
            )}

            {/* CABEÇALHO DO GABARITO + BOTÃO ÁUDIO */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <h4 className="text-base font-extrabold text-white">
                  Resposta Padrão Esperada (Padrão Nota 10 UNIFACS)
                </h4>
              </div>

              <button
                onClick={() => speakText(currentQ.expectedAnswer)}
                className={`p-2 rounded-xl border text-xs font-bold transition-all flex items-center space-x-1.5 ${
                  isSpeaking
                    ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:text-white'
                }`}
                title="Ouvir Resposta Padrão em Áudio"
              >
                {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                <span className="hidden sm:inline">{isSpeaking ? 'Pausar Áudio' : 'Ouvir Gabarito'}</span>
              </button>
            </div>

            {/* TEXTO DA RESPOSTA PADRÃO */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 sm:p-6 text-sm text-slate-200 leading-relaxed whitespace-pre-line shadow-inner">
              {currentQ.expectedAnswer}
            </div>

            {/* CHECKLIST DE PALAVRAS-CHAVE OBRIGATÓRIAS */}
            <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Checklist de Palavras-Chave da Banca:
                </h5>
                <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full font-mono ${
                  keywordPercentage >= 80 ? 'bg-emerald-500/20 text-emerald-300' : 'bg-amber-500/20 text-amber-300'
                }`}>
                  {checkedKeywords.length} / {currentQ.keywords.length} marcadas ({keywordPercentage}%)
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Os termos detectados pelo corretor já estão marcados. Você também pode marcar ou desmarcar manualmente:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {currentQ.keywords.map((kw, i) => {
                  const isChecked = checkedKeywords.includes(kw);
                  return (
                    <button
                      key={i}
                      onClick={() => toggleKeyword(kw)}
                      className={`p-2.5 rounded-xl border text-left text-xs transition-all flex items-start space-x-2.5 ${
                        isChecked
                          ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-200 font-semibold shadow-inner'
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] mt-0.5 shrink-0 ${
                        isChecked ? 'bg-emerald-500 text-slate-950 font-bold' : 'border border-slate-700'
                      }`}>
                        {isChecked ? '✓' : ''}
                      </span>
                      <span className="leading-snug">{kw}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* BIZU DE OURO DA QUESTÃO */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-950/90 via-slate-900 to-indigo-950/90 border border-indigo-500/40 shadow-xl flex items-start space-x-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0 mt-0.5">
                <Lightbulb className="w-5 h-5 text-amber-300 animate-pulse" />
              </div>
              <div className="space-y-1">
                <h5 className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                  Bizu de Ouro para a Prova Escrita
                </h5>
                <p className="text-xs sm:text-sm text-indigo-100 font-medium leading-relaxed">
                  {currentQ.goldenBizu}
                </p>
              </div>
            </div>

            {/* CRITÉRIOS DE CORREÇÃO DO PROFESSOR */}
            <div className="bg-slate-950/60 border border-slate-800 rounded-2xl p-5 space-y-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-rose-300 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                Critérios de Correção & Onde o Professor Tira Ponto:
              </h5>
              <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                {currentQ.gradingCriteria.map((c, i) => (
                  <li key={i} className="leading-relaxed">{c}</li>
                ))}
              </ul>
            </div>

            {/* AUTOAVALIAÇÃO / AJUSTE FINAL DA NOTA */}
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5 text-indigo-400" />
                  <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                    Sua Nota Registrada nesta Questão:
                  </span>
                </div>
                {selfScore !== null && (
                  <span className="text-xs font-mono font-bold px-3 py-1 bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-xl">
                    Nota Atual: {selfScore} / 10
                  </span>
                )}
              </div>

              <p className="text-xs text-slate-400">
                Se concordar com a nota calculada pelo corretor, ela já foi aplicada. Caso deseje alterá-la para mais ou para menos, clique em um dos números abaixo:
              </p>

              <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 pt-1">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleSetScore(num)}
                    className={`w-9 h-9 rounded-xl text-xs font-bold font-mono transition-all border ${
                      selfScore === num
                        ? num >= 7
                          ? 'bg-emerald-600 text-white border-emerald-400 scale-110 shadow-lg shadow-emerald-600/30'
                          : 'bg-rose-600 text-white border-rose-400 scale-110'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-white'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
