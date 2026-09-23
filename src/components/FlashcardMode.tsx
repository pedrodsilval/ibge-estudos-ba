import React, { useState, useEffect, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCw, 
  ChevronRight, 
  ChevronLeft, 
  Star, 
  Lightbulb, 
  BookOpen, 
  HelpCircle,
  Volume2,
  VolumeX,
  ThumbsUp,
  Meh,
  AlertTriangle
} from 'lucide-react';
import type { Question, UserProfile } from '../types/study';
import { recordQuestionAnswer, toggleBookmarkQuestion } from '../services/storageService';

interface FlashcardModeProps {
  questions: Question[];
  activeProfile: UserProfile;
  onUpdateProfile: (updated: UserProfile) => void;
}

export const FlashcardMode: React.FC<FlashcardModeProps> = ({
  questions,
  activeProfile,
  onUpdateProfile
}) => {
  const [selectedSubject, setSelectedSubject] = useState<string>('TODAS');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [filterMode, setFilterMode] = useState<'all' | 'unanswered' | 'errors'>('all');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Filtrar lista de questões conforme seleção
  const filteredQuestions = React.useMemo(() => {
    return questions.filter(q => {
      const matchSubject = selectedSubject === 'TODAS' || q.subject === selectedSubject;
      if (!matchSubject) return false;

      const history = activeProfile.answers[q.id];

      if (filterMode === 'errors') {
        return history && !history.isCorrect;
      }
      if (filterMode === 'unanswered') {
        return !history;
      }
      return true;
    });
  }, [questions, selectedSubject, filterMode, activeProfile.answers]);

  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setSelectedOption(null);
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsSpeaking(false);
  }, [selectedSubject, filterMode]);

  const currentQuestion = filteredQuestions[currentIndex] || null;
  const isBookmarked = currentQuestion ? activeProfile.bookmarkedQuestionIds.includes(currentQuestion.id) : false;
  const existingAnswer = currentQuestion ? activeProfile.answers[currentQuestion.id] : null;

  useEffect(() => {
    if (existingAnswer) {
      setSelectedOption(existingAnswer.selectedOption);
    } else {
      setSelectedOption(null);
      setIsFlipped(false);
    }
  }, [currentIndex, currentQuestion, existingAnswer]);

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[*_#$`\\~]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.05;
    
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSelectOption = (key: string) => {
    if (!currentQuestion) return;
    setSelectedOption(key);
    const isCorrect = key === currentQuestion.correctOption;

    if (isCorrect) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    }

    const updated = recordQuestionAnswer(currentQuestion.id, key, isCorrect);
    onUpdateProfile(updated);
    setIsFlipped(true);
  };

  const handleRateDifficulty = (rating: 'easy' | 'medium' | 'hard') => {
    if (!currentQuestion || !selectedOption) return;
    const isCorrect = selectedOption === currentQuestion.correctOption;
    const updated = recordQuestionAnswer(currentQuestion.id, selectedOption, isCorrect, rating);
    onUpdateProfile(updated);
    handleNext();
  };

  const handleToggleBookmark = () => {
    if (!currentQuestion) return;
    const updated = toggleBookmarkQuestion(currentQuestion.id);
    onUpdateProfile(updated);
  };

  const handleNext = useCallback(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsSpeaking(false);
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
      setSelectedOption(null);
    }
  }, [currentIndex, filteredQuestions.length]);

  const handlePrev = useCallback(() => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    setIsSpeaking(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
      setSelectedOption(null);
    }
  }, [currentIndex]);

  // Suporte a Atalhos de Teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes((e.target as HTMLElement).tagName)) return;
      if (!currentQuestion) return;

      const key = e.key.toUpperCase();
      const optionMap: Record<string, string> = {
        '1': 'A', '2': 'B', '3': 'C', '4': 'D', '5': 'E',
        'A': 'A', 'B': 'B', 'C': 'C', 'D': 'D', 'E': 'E'
      };

      if (optionMap[key] && !isFlipped) {
        handleSelectOption(optionMap[key]);
      } else if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight' || key === 'N') {
        handleNext();
      } else if (e.code === 'ArrowLeft' || key === 'P') {
        handlePrev();
      } else if (key === 'F' || key === 'S') {
        handleToggleBookmark();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestion, isFlipped, handleNext, handlePrev]);

  if (!currentQuestion) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 shadow-2xl">
          <BookOpen className="w-16 h-16 text-indigo-400 mx-auto mb-4 animate-bounce" />
          <h2 className="text-2xl font-bold text-white mb-2">
            {filterMode === 'unanswered'
              ? '🎉 Parabéns! Você já respondeu todas as questões disponíveis neste filtro!'
              : 'Nenhuma questão encontrada para este filtro'}
          </h2>
          <p className="text-slate-400 mb-6">
            {filterMode === 'unanswered'
              ? 'Você zerou o banco de questões inéditas! Alterne para "Todas" ou pratique com as que você errou.'
              : 'Tente alterar os filtros de disciplina acima ou visualizar todas as questões.'}
          </p>
          <button
            onClick={() => {
              setSelectedSubject('TODAS');
              setFilterMode('all');
            }}
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-600/30"
          >
            Ver Todas as Questões
          </button>
        </div>
      </div>
    );
  }

  const isAnswered = selectedOption !== null;
  const isCorrect = selectedOption === currentQuestion.correctOption;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
      
      {/* BARRA SUPERIOR DE FILTROS & NAVEGAÇÃO */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        
        {/* FILTRO DE SUBJECT */}
        <div className="flex flex-wrap items-center gap-2">
          {['TODAS', 'Informática', 'Língua Portuguesa', 'Raciocínio Lógico'].map(sub => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                selectedSubject === sub
                  ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-md shadow-indigo-600/30 border border-indigo-400/30'
                  : 'bg-slate-900/90 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {sub === 'Informática' ? '⚡ Informática (Peso 35)' : sub}
            </button>
          ))}
        </div>

        {/* CONTROLES DIREITOS DE FILTRO */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="bg-slate-900 p-1 rounded-xl border border-slate-800 flex">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                filterMode === 'all'
                  ? 'bg-slate-800 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Todas
            </button>
            <button
              onClick={() => setFilterMode('unanswered')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                filterMode === 'unanswered'
                  ? 'bg-indigo-600 text-white shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              🆕 Inéditas / Não Feitas
            </button>
            <button
              onClick={() => setFilterMode('errors')}
              className={`px-3 py-1 rounded-lg font-medium transition-all ${
                filterMode === 'errors'
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ❌ Somente Erradas
            </button>
          </div>

          <span className="text-slate-400 font-mono bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
            {filteredQuestions.length > 0 ? currentIndex + 1 : 0} / {filteredQuestions.length}
          </span>
        </div>

      </div>

      {/* CARD PRINCIPAL DA QUESTÃO */}
      <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        
        {/* CABEÇALHO DO CARD */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4 mb-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-lg text-xs font-semibold">
              {currentQuestion.subject}
            </span>
            <span className="px-2.5 py-1 bg-slate-800 text-slate-300 rounded-lg text-xs font-medium">
              {currentQuestion.topic}
            </span>
            <span className="px-2 py-1 bg-slate-950 text-slate-400 rounded-lg text-[11px] font-mono border border-slate-800">
              {currentQuestion.source}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            
            {/* BOTÃO NARRAR ÁUDIO (TEXT-TO-SPEECH) */}
            <button
              onClick={() => {
                const textToRead = isFlipped
                  ? `Bizu da Prova: ${currentQuestion.explanation.bizu}. Explicação: ${currentQuestion.explanation.summary}`
                  : `${currentQuestion.statement}. Alternativas: ${currentQuestion.options.map(o => `${o.key}: ${o.text}`).join('. ')}`;
                speakText(textToRead);
              }}
              className={`p-2 rounded-xl border transition-all ${
                isSpeaking 
                  ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400 animate-pulse'
                  : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title="Ouvir Áudio da Questão / Bizu (Estudo Auditivo)"
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            {/* BOOKMARK */}
            <button
              onClick={handleToggleBookmark}
              className={`p-2 rounded-xl border transition-all ${
                isBookmarked
                  ? 'bg-amber-500/20 border-amber-500/50 text-amber-400 shadow-md shadow-amber-500/20'
                  : 'bg-slate-950/60 border-slate-800 text-slate-500 hover:text-slate-300'
              }`}
              title="Marcar para Revisar (Atalho: F)"
            >
              <Star className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400' : ''}`} />
            </button>

            {/* VIRAR CARD */}
            <button
              onClick={() => setIsFlipped(!isFlipped)}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-xl text-xs font-semibold transition-all"
              title="Virar Card (Atalho: Espaço)"
            >
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'Ver Enunciado' : 'Virar / Resposta'}</span>
            </button>
          </div>
        </div>

        {/* FRENTE DO CARD (ENUNCIADO E ALTERNATIVAS) */}
        {!isFlipped ? (
          <div>
            <div className="mb-6">
              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                {currentQuestion.statement}
              </p>
            </div>

            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((opt, idx) => {
                const isSelected = selectedOption === opt.key;
                let optStyles = "bg-slate-950/80 border-slate-800/90 text-slate-300 hover:border-indigo-500/50 hover:bg-slate-800/50";

                if (isAnswered) {
                  if (opt.key === currentQuestion.correctOption) {
                    optStyles = "bg-emerald-500/15 border-emerald-500/60 text-emerald-200 font-medium";
                  } else if (isSelected && !isCorrect) {
                    optStyles = "bg-rose-500/15 border-rose-500/60 text-rose-200 font-medium";
                  } else {
                    optStyles = "bg-slate-950/40 border-slate-800/50 text-slate-500 opacity-60";
                  }
                }

                return (
                  <button
                    key={opt.key}
                    onClick={() => handleSelectOption(opt.key)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start space-x-3 group relative ${optStyles}`}
                  >
                    <span className={`w-7 h-7 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                      isSelected 
                        ? (isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-rose-500 text-white') 
                        : 'bg-slate-800 text-indigo-300 group-hover:bg-indigo-600 group-hover:text-white'
                    }`}>
                      {opt.key}
                    </span>
                    <span className="text-sm sm:text-base pt-0.5 leading-snug flex-1">
                      {opt.text}
                    </span>
                    <span className="hidden sm:inline-block text-[10px] font-mono text-slate-600 px-2 py-0.5 border border-slate-800 rounded-md">
                      [{idx + 1}]
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          /* VERSO DO CARD - CORREÇÃO DIDÁTICA E BIZU DA PROVA */
          <div className="space-y-6 animate-fadeIn">
            
            {/* STATUS DO RATING DA RESPOSTA */}
            {selectedOption ? (
              <div className={`p-4 rounded-2xl border flex items-center justify-between ${
                isCorrect 
                  ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300' 
                  : 'bg-rose-500/10 border-rose-500/30 text-rose-300'
              }`}>
                <div className="flex items-center space-x-3">
                  {isCorrect ? (
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 shrink-0" />
                  ) : (
                    <XCircle className="w-8 h-8 text-rose-400 shrink-0" />
                  )}
                  <div>
                    <h3 className="font-bold text-base">
                      {isCorrect ? 'Excelente! Você acertou a questão!' : 'Ops! Alternativa incorreta.'}
                    </h3>
                    <p className="text-xs opacity-90">
                      Gabarito Oficial: <span className="font-bold underline">Alternativa {currentQuestion.correctOption}</span>
                    </p>
                  </div>
                </div>
                
                {/* BOTÃO OUVIR BIZU */}
                <button
                  onClick={() => speakText(`Bizu da Prova IBGE: ${currentQuestion.explanation.bizu}`)}
                  className="hidden sm:flex items-center space-x-1 px-3 py-1.5 bg-slate-950 hover:bg-slate-800 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-semibold"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Ouvir Bizu</span>
                </button>
              </div>
            ) : (
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl text-amber-300 flex items-center space-x-3">
                <HelpCircle className="w-6 h-6 text-amber-400 shrink-0" />
                <span className="text-sm">Você virou o card antes de selecionar uma resposta. Confira a explicação abaixo:</span>
              </div>
            )}

            {/* RESUMO DIDÁTICO */}
            <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-indigo-400" />
                Explicação Conceitual
              </h4>
              <p className="text-sm text-slate-200 leading-relaxed">
                {currentQuestion.explanation.summary}
              </p>
            </div>

            {/* ANÁLISE ALTERNATIVA POR ALTERNATIVA */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                Análise das Alternativas
              </h4>
              {currentQuestion.explanation.optionsAnalysis.map((opt) => (
                <div
                  key={opt.key}
                  className={`p-3.5 rounded-xl border text-xs sm:text-sm leading-relaxed flex items-start space-x-3 ${
                    opt.isCorrect
                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                    opt.isCorrect ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {opt.key}
                  </span>
                  <div className="flex-1">
                    <span className="font-semibold">{opt.isCorrect ? 'CORRETA: ' : 'INCORRETA: '}</span>
                    {opt.reason}
                  </div>
                </div>
              ))}
            </div>

            {/* BOX DE BIZU DA PROVA */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/90 via-slate-900 to-indigo-950/90 border border-indigo-500/40 shadow-xl glow-pulse">
              <div className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-amber-300 animate-pulse" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-1 flex items-center gap-1">
                    Bizu da Prova IBGE
                  </h4>
                  <p className="text-xs sm:text-sm text-indigo-100 leading-relaxed font-medium">
                    {currentQuestion.explanation.bizu}
                  </p>
                </div>
              </div>
            </div>

            {/* RATING DE REPETIÇÃO ESPAÇADA */}
            {isAnswered && (
              <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-400 font-semibold">Como foi essa questão para você?</span>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => handleRateDifficulty('easy')}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-bold transition-all"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Fácil</span>
                  </button>
                  <button
                    onClick={() => handleRateDifficulty('medium')}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-xl text-xs font-bold transition-all"
                  >
                    <Meh className="w-3.5 h-3.5" />
                    <span>Médio</span>
                  </button>
                  <button
                    onClick={() => handleRateDifficulty('hard')}
                    className="flex items-center space-x-1 px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 border border-rose-500/30 rounded-xl text-xs font-bold transition-all"
                  >
                    <AlertTriangle className="w-3.5 h-3.5" />
                    <span>Difícil</span>
                  </button>
                </div>
              </div>
            )}

          </div>
        )}

        {/* RODAPÉ DO CARD */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          
          <div className="hidden md:flex items-center space-x-3 text-[11px] text-slate-500 font-mono">
            <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">1-5</kbd> Responder</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">Espaço</kbd> Virar Card</span>
            <span><kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">N / →</kbd> Próxima</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto justify-end">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-1 px-4 py-2.5 bg-slate-950 hover:bg-slate-800 text-slate-300 disabled:opacity-40 border border-slate-800 rounded-xl text-xs font-semibold transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={handleNext}
              disabled={currentIndex === filteredQuestions.length - 1}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white disabled:opacity-40 border border-indigo-400/30 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
            >
              <span>Próxima Questão</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
