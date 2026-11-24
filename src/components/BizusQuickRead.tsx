import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Terminal, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  CheckCircle, 
  Lightbulb,
  Headphones,
  Play,
  Pause
} from 'lucide-react';

export const BizusQuickRead: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'port' | 'info' | 'adm' | 'esp'>('port');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);
  const [audioSpeed, setAudioSpeed] = useState<number>(1.1);
  const [isPlayingPlaylist, setIsPlayingPlaylist] = useState<boolean>(false);
  const [playlistCategory, setPlaylistCategory] = useState<'port' | 'info' | 'adm' | 'esp'>('port');

  const BIZUS_TEXTS: Record<'port' | 'info' | 'adm' | 'esp', { title: string; text: string }> = {
    port: {
      title: 'Língua Portuguesa',
      text: "Bizus de Língua Portuguesa para o Concurso da UFBA. Regra da crase: troque a palavra feminina por masculina; se virar AO, tem crase obrigatória. Antes de verbo e palavra masculina a crase é proibida. Crase facultativa antes de pronome possessivo feminino singular, nome próprio feminino e após a palavra até. Na redação oficial do Manual da Presidência, aviso e memorando foram extintos, tudo agora é padrão ofício. Fechos oficiais são apenas dois: Respeitosamente para autoridades de hierarquia superior, e Atenciosamente para mesma hierarquia ou subordinados. Concordância verbal: verbo haver no sentido de existir e fazer indicando tempo decorrido ficam sempre no singular."
    },
    info: {
      title: 'Noções de Informática',
      text: "Bizus de Noções de Informática para a UFBA. Os cinco pilares da segurança são: Confidencialidade, Integridade, Disponibilidade, Autenticidade e Legalidade. Vírus precisa de hospedeiro e do clique do usuário. Worm se espalha sozinho pela rede sem precisar de ninguém. Ransomware sequestra e criptografa arquivos exigindo pagamento de resgate. Phishing é a pescaria de dados por e-mail falso. No Excel 365, o cifrão trava e congela referências absolutas. Na função PROCV, o quarto argumento deve ser FALSO ou zero para busca exata de matrículas e CPFs. A regra três dois um de backup exige três cópias, em duas mídias distintas, com uma cópia fora do prédio na nuvem."
    },
    adm: {
      title: 'Administração Pública',
      text: "Bizus de Administração Pública para a UFBA. Princípios constitucionais do artigo trinta e sete: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Na Lei oito mil cento e doze: da nomeação para a posse são trinta dias; da posse para o exercício são quinze dias. Estabilidade após três anos de efetivo exercício e avaliação de desempenho. Na estrutura da UFBA: o CONSUNI é o órgão deliberativo supremo máximo; o CONSEPE cuida das matérias acadêmicas de ensino, pesquisa e extensão; e o Conselho de Curadores fiscaliza o patrimônio financeiro e contábil. A Nova Lei de Licitações extinguiu Convite e Tomada de Preços; as cinco modalidades oficiais são Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. A Comissão de Ética do Decreto um mil cento e setenta e um só aplica a pena de censura."
    },
    esp: {
      title: 'Conhecimentos Específicos',
      text: "Bizus de Conhecimentos Específicos de Assistente em Administração. Na Arquivologia, a Teoria das Três Idades define: arquivo corrente para documentos em uso frequente; arquivo intermediário para documentos aguardando prazos na tabela de temporalidade; e arquivo permanente para guarda histórica perpétua, que nunca pode ser eliminado. Na gestão de estoques, a Curva ABC baseia-se em Pareto: Classe A são vinte por cento dos itens que concentram oitenta por cento do valor financeiro investido. A classificação XYZ mede criticidade: Classe Z é o item vital cuja falta paralisa a operação. As quatro funções administrativas do processo organizacional são Planejar, Organizar, Dirigir e Controlar. No atendimento ao público, empatia é colocar-se no lugar do cidadão com presteza e cortesia."
    }
  };

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setIsPlayingPlaylist(false);
  };

  const playSingle = (category: 'port' | 'info' | 'adm' | 'esp') => {
    if (!('speechSynthesis' in window)) return;
    stopAudio();

    const utterance = new SpeechSynthesisUtterance(BIZUS_TEXTS[category].text);
    utterance.lang = 'pt-BR';
    utterance.rate = audioSpeed;
    utterance.onend = () => {
      setIsSpeaking(false);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const playContinuousPodcast = () => {
    if (!('speechSynthesis' in window)) return;
    if (isPlayingPlaylist) {
      stopAudio();
      return;
    }

    stopAudio();
    setIsPlayingPlaylist(true);
    setIsSpeaking(true);

    const categories: ('port' | 'info' | 'adm' | 'esp')[] = ['port', 'info', 'adm', 'esp'];
    let idx = 0;

    const playNext = () => {
      if (idx >= categories.length) {
        setIsPlayingPlaylist(false);
        setIsSpeaking(false);
        return;
      }

      const cat = categories[idx];
      setPlaylistCategory(cat);
      setActiveCategory(cat);

      const utterance = new SpeechSynthesisUtterance(BIZUS_TEXTS[cat].text);
      utterance.lang = 'pt-BR';
      utterance.rate = audioSpeed;
      utterance.onend = () => {
        idx++;
        setTimeout(playNext, 800);
      };
      utterance.onerror = () => {
        setIsPlayingPlaylist(false);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    };

    playNext();
  };

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      
      {/* HEADER & PODCAST PLAYER CARD */}
      <div className="text-center mb-8 space-y-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Memorização Relâmpago • Concurso UFBA 2026</span>
        </div>
        
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Paredão de Bizus de Alta Incidência
        </h2>
        
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Resumos mnemônicos ultracondensados com áudio narrado para estudar com fones de ouvido no dia a dia.
        </p>

        {/* REPRODUTOR DE PODCAST CONTÍNUO */}
        <div className="max-w-2xl mx-auto bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-3xl p-5 shadow-2xl space-y-4 text-left">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center space-x-3">
              <div className={`p-3 rounded-2xl border transition-all ${
                isSpeaking 
                  ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 animate-pulse' 
                  : 'bg-indigo-600/20 text-indigo-400 border-indigo-500/30'
              }`}>
                <Headphones className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold text-white flex items-center gap-1.5">
                  Modo Podcast de Estudos
                  {isSpeaking && (
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                      ● Reproduzindo
                    </span>
                  )}
                </span>
                <p className="text-[11px] text-slate-400">
                  {isPlayingPlaylist 
                    ? `Playlist em andamento: ${BIZUS_TEXTS[playlistCategory].title}`
                    : `Áudio individual: ${BIZUS_TEXTS[activeCategory].title}`}
                </p>
              </div>
            </div>

            {/* SELETOR DE VELOCIDADE (1.0x / 1.25x / 1.5x) */}
            <div className="flex items-center space-x-1 bg-slate-950 border border-slate-800 rounded-xl p-1 text-xs">
              <span className="text-[10px] text-slate-500 px-1 font-bold">Vel:</span>
              {[1.0, 1.2, 1.4].map(spd => (
                <button
                  key={spd}
                  onClick={() => setAudioSpeed(spd)}
                  className={`px-2 py-0.5 rounded-lg font-bold text-[10px] transition-all ${
                    audioSpeed === spd 
                      ? 'bg-indigo-600 text-white shadow-sm' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>
          </div>

          {/* BOTÕES DE CONTROLE DO PODCAST */}
          <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/60">
            <button
              onClick={playContinuousPodcast}
              className={`flex-1 min-w-[200px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-2 shadow-lg ${
                isPlayingPlaylist
                  ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-600/30'
                  : 'bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-emerald-600/30'
              }`}
            >
              {isPlayingPlaylist ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isPlayingPlaylist ? 'Pausar Podcast Completo' : '🎧 Tocar Todas as Matérias em Sequência'}</span>
            </button>

            <button
              onClick={() => {
                if (isSpeaking && !isPlayingPlaylist) {
                  stopAudio();
                } else {
                  playSingle(activeCategory);
                }
              }}
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-slate-950 hover:bg-slate-800 text-slate-200 border border-slate-800 transition-all flex items-center justify-center space-x-1.5"
            >
              {isSpeaking && !isPlayingPlaylist ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-indigo-400" />}
              <span>{isSpeaking && !isPlayingPlaylist ? 'Parar Áudio' : 'Ouvir Apenas Esta Matéria'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* SELETOR DE ABAS */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex flex-wrap gap-2 justify-center">
          
          <button
            onClick={() => {
              setActiveCategory('port');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'port'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>🇧🇷 Português & Redação</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('info');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'info'
                ? 'bg-gradient-to-r from-cyan-600 to-teal-600 text-white shadow-lg shadow-cyan-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span>💻 Informática</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('adm');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'adm'
                ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>🏛️ Adm. Pública & UFBA</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('esp');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'esp'
                ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>📂 Específicas (Arquivos/Estoques)</span>
          </button>

        </div>
      </div>

      {/* CONTEÚDO: PORTUGUÊS */}
      {activeCategory === 'port' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Regras de Ouro da Crase</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Troca pelo masculino:</strong> Se virou <em>AO</em>, tem crase (Fui ao cinema $\to$ Fui à praia). Se virou <em>O</em>, passa longe (Conheço o parque $\to$ Conheço a praça).</li>
              <li>• <strong>Proibições absolutas:</strong> Antes de verbo (a partir de), palavra masculina (a prazo), e palavras repetidas (dia a dia).</li>
              <li>• <strong>Facultativas:</strong> Antes de possessivo feminino singular (à minha mãe), nome próprio feminino (à Maria) e após a preposição <em>até</em>.</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-blue-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Redação Oficial (Manual PR 3ª ed.)</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Aviso e Memorando NÃO existem mais:</strong> Todas as comunicações foram unificadas no <strong>Padrão Ofício</strong>.</li>
              <li>• <strong>Fechos oficiais:</strong> Apenas dois: <em>"Respeitosamente,"</em> (para autoridades superiores) e <em>"Atenciosamente,"</em> (para mesma hierarquia ou subordinados).</li>
              <li>• <strong>Pronomes de tratamento:</strong> <em>Vossa Excelência</em> para Reitores e Chefes de Poder; verbo SEMPRE em 3ª pessoa do singular.</li>
            </ul>
          </div>
        </div>
      )}

      {/* CONTEÚDO: INFORMÁTICA */}
      {activeCategory === 'info' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Pragas Virtuais (Malware)</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Vírus:</strong> Precisa de arquivo hospedeiro e de clique/execução do usuário para infectar.</li>
              <li>• <strong>Worm:</strong> Não precisa de hospedeiro nem de ação humana! Propaga-se sozinho pela rede.</li>
              <li>• <strong>Ransomware:</strong> Criptografa arquivos da vítima e exige resgate ($) em Bitcoin.</li>
              <li>• <strong>Phishing:</strong> Pescaria de dados e senhas por meio de e-mails e páginas clonadas falsas.</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Excel 365: O Poder do Cifrão ($)</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>$A$1:</strong> Trava coluna e linha completamente. Ao arrastar, não se mexe!</li>
              <li>• <strong>PROCV:</strong> Procura sempre na vertical e o dado procurado DEVE estar na 1ª coluna à esquerda.</li>
              <li>• <strong>Backup 3-2-1:</strong> 3 cópias, 2 mídias diferentes, 1 cópia fora da empresa (nuvem).</li>
            </ul>
          </div>
        </div>
      )}

      {/* CONTEÚDO: ADM PÚBLICA */}
      {activeCategory === 'adm' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Lei 8.112/1990 (RJU Federal)</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Nomeação $\to$ Posse:</strong> 30 dias (se não tomar posse, nomeação é tornada sem efeito).</li>
              <li>• <strong>Posse $\to$ Exercício:</strong> 15 dias (se não entrar em exercício, o servidor é EXONERADO!).</li>
              <li>• <strong>Estabilidade:</strong> 3 anos (36 meses) de efetivo exercício + avaliação especial de desempenho.</li>
              <li>• <strong>Reversão:</strong> Retorno do aposentado. <strong>Reintegração:</strong> Retorno do demitido ilegalmente (com indenização total!).</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-amber-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>UFBA & Licitações (Lei 14.133/21)</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>CONSUNI:</strong> Órgão supremo da UFBA (política geral e administração). <strong>CONSEPE:</strong> Órgão acadêmico (ensino, pesquisa e extensão).</li>
              <li>• <strong>Modalidades da Lei 14.133:</strong> Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. (Convite e Tomada de Preços foram EXTINTOS!).</li>
              <li>• <strong>Inexigibilidade:</strong> Inviabilidade de competição (exclusivo, artista consagrado). <strong>Dispensa:</strong> Pequeno valor ou emergência.</li>
            </ul>
          </div>
        </div>
      )}

      {/* CONTEÚDO: ESPECÍFICAS */}
      {activeCategory === 'esp' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Arquivologia: As Três Idades</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Corrente (1ª Idade):</strong> Uso frequente nos setores, valor primário administrativo.</li>
              <li>• <strong>Intermediário (2ª Idade):</strong> Uso raro, aguarda prazos na Tabela de Temporalidade.</li>
              <li>• <strong>Permanente (3ª Idade):</strong> Valor histórico e cultural. <strong>NUNCA PODE SER ELIMINADO!</strong></li>
              <li>• <strong>Alfabetação:</strong> Último sobrenome primeiro (SILVA, Maria; SOUZA JÚNIOR, Carlos).</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Gestão de Recursos Materiais & PODC</span>
            </div>
            <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <li>• <strong>Curva ABC (Pareto):</strong> Classe A = ~20% dos itens físicos que custam ~80% do dinheiro (controle rígido!). Classe C = muitos itens baratos.</li>
              <li>• <strong>Classificação XYZ:</strong> Criticidade operacional. Classe Z é vital (a falta paralisa o hospital ou a universidade).</li>
              <li>• <strong>Inventário Rotativo:</strong> Contagens contínuas programadas sem paralisar o atendimento do setor.</li>
              <li>• <strong>PODC:</strong> Planejar (metas), Organizar (recursos), Dirigir (pessoas/liderança), Controlar (comparar e corrigir).</li>
            </ul>
          </div>
        </div>
      )}

    </div>
  );
};
