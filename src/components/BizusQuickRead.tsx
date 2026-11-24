import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Database, 
  Terminal, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export const BizusQuickRead: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'port' | 'info' | 'adm' | 'esp'>('port');
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 animate-fadeIn">
      
      {/* HEADER */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold mb-3">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Memorização Relâmpago • Concurso UFBA 2026</span>
        </div>
        
        <div className="flex items-center justify-center space-x-3 mb-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Paredão de Bizus de Alta Incidência
          </h2>
          
          <button
            onClick={() => {
              const textToSpeak = activeCategory === 'port'
                ? "Bizus de Língua Portuguesa: Troca por masculino, se deu AO tem crase. Antes de verbo e palavra masculina a crase é proibida. Crase facultativa antes de pronome possessivo feminino singular, nome próprio feminino e após até. Na redação oficial, memorando e aviso foram extintos, tudo agora é ofício. Fechos são apenas dois: respeitosamente para autoridades superiores e atenciosamente para iguais ou subordinados."
                : activeCategory === 'info'
                ? "Bizus de Informática: Pilares da segurança são confidencialidade, integridade, disponibilidade e autenticidade. Vírus precisa de hospedeiro e de clique do usuário. Worm se espalha sozinho pela rede sem precisar de ninguém. Ransomware sequestra e criptografa arquivos exigindo resgate. Phishing é pescaria de senhas. No Excel, quem tem cifrão fica travado e não muda ao arrastar."
                : activeCategory === 'adm'
                ? "Bizus de Administração Pública: Princípios expressos são Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência. Na Lei 8112, nomeação para posse são 30 dias; posse para exercício são 15 dias. Estabilidade após 3 anos. CONSUNI é o órgão máximo da UFBA; CONSEPE cuida do acadêmico. As modalidades de licitação da 14133 são Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo."
                : "Bizus de Conhecimentos Específicos: Arquivo corrente é uso diário. Arquivo intermediário aguarda prazos na tabela de temporalidade. Arquivo permanente tem valor histórico e NUNCA pode ser eliminado. Curva ABC mede valor financeiro; Classe A são 20 por cento dos itens que custam 80 por cento do estoque. Classificação XYZ mede criticidade operacional; Classe Z é vital e não pode faltar. PODC é planejar, organizar, dirigir e controlar.";
              speakText(textToSpeak);
            }}
            className={`p-2 rounded-xl border transition-all ${
              isSpeaking 
                ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse' 
                : 'bg-slate-800 text-slate-300 border-slate-700 hover:text-white'
            }`}
            title="Ouvir Narração em Áudio do Bizu"
          >
            {isSpeaking ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
        </div>
        
        <p className="text-slate-400 text-sm max-w-2xl mx-auto">
          Resumos mnemônicos ultracondensados para memorizar as pegadinhas das bancas federais.
        </p>
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
