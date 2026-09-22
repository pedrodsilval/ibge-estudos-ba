import React, { useState } from 'react';
import { 
  Globe, 
  ShieldCheck, 
  Zap, 
  CheckCircle, 
  AlertOctagon,
  Sparkles,
  Monitor,
  FileSpreadsheet
} from 'lucide-react';

export const BizusQuickRead: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'inf' | 'port' | 'rlm'>('inf');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold mb-3">
          <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span>Edital Oficial IBGE • Reta Final</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Paredão de Bizus de Alta Incidência (100% Edital)
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
          Resumos focados estritamente no edital: Noções de Informática (Windows 10/11, Android 13+, Word, Excel, Hardware, Segurança, Redes), Português e RLM.
        </p>
      </div>

      {/* TABS DAS MATÉRIAS */}
      <div className="flex justify-center space-x-2 mb-8">
        <button
          onClick={() => setActiveCategory('inf')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeCategory === 'inf'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
          }`}
        >
          💻 Noções de Informática
        </button>
        <button
          onClick={() => setActiveCategory('port')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeCategory === 'port'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
          }`}
        >
          📝 Língua Portuguesa
        </button>
        <button
          onClick={() => setActiveCategory('rlm')}
          className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all ${
            activeCategory === 'rlm'
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400/30'
              : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
          }`}
        >
          📐 Raciocínio Lógico
        </button>
      </div>

      {/* CONTEÚDO DOS BIZUS DE INFORMÁTICA */}
      {activeCategory === 'inf' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          
          {/* CARD 1: HARDWARE & SISTEMAS (WINDOWS 10/11 E ANDROID 13+) */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Monitor className="w-5 h-5 text-indigo-400" />
              Hardware, Windows 10/11 & Android 13+
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              <p><strong className="text-indigo-300">CPU (Processador):</strong> Cérebro do microcomputador.</p>
              <p><strong className="text-indigo-300">RAM:</strong> Memória temporária de trabalho (volátil).</p>
              <p><strong className="text-indigo-300">Windows (Atalhos):</strong> `Ctrl+Shift+N` = Nova Pasta | `Win+E` = Explorador | `F2` = Renomear | `Shift+Del` = Excluir definitivo.</p>
              <p><strong className="text-indigo-300">Android 13+:</strong> Gerenciamento granular de permissões (Localização, Câmera, Microfone e Notificações).</p>
            </div>
          </div>

          {/* CARD 2: WORD & EXCEL */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <FileSpreadsheet className="w-5 h-5 text-emerald-400" />
              Word & Excel (Padrão PT-BR)
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              <p><strong className="text-emerald-300">Word (Atalhos):</strong> `Ctrl+N` = Negrito | `Ctrl+I` = Itálico | `Ctrl+S` = Sublinhado | `Ctrl+B` = Salvar.</p>
              <p><strong className="text-emerald-300">Excel (Fórmulas):</strong> `=MÉDIA(A1:A3)` = Média Aritmética | `=MED(A1:A3)` = Mediana.</p>
              <p><strong className="text-emerald-300">Sintaxe de Intervalos:</strong> Dois pontos `:` = ATÉ (ex: A1:A10). Ponto e vírgula `;` = E (ex: A1;A10).</p>
              <p><strong className="text-emerald-300">Cifrão `$`:</strong> Trava a referência celular no Excel (ex: `$A$1`).</p>
            </div>
          </div>

          {/* CARD 3: SEGURANÇA DA INFORMAÇÃO, VÍRUS E BACKUP */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              Segurança, Vírus, Antivírus & Backup
            </h3>
            <div className="space-y-2 text-xs leading-relaxed text-slate-300">
              <p><strong className="text-amber-300">Backup Completo (Full):</strong> Copia 100% dos dados selecionados.</p>
              <p><strong className="text-amber-300">Backup Incremental:</strong> Copia apenas o alterado desde o último backup.</p>
              <p><strong className="text-amber-300">Backup Diferencial:</strong> Copia o alterado desde o último backup FULL.</p>
              <p><strong className="text-amber-300">Senhas Fortes:</strong> Mistura maiúsculas, minúsculas, números e símbolos (!@#$).</p>
            </div>
          </div>

          {/* CARD 4: REDES, INTRANET, INTERNET E CORREIO ELETRÔNICO */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Globe className="w-5 h-5 text-sky-400" />
              Navegadores, E-mail & Intranet
            </h3>
            <div className="space-y-2 text-xs text-slate-300">
              <p><strong className="text-sky-300">Campos de E-mail:</strong> `Para` e `Cc` = Visíveis | `Cco` = Com Cópia Oculta (Ninguém no Para/Cc descobre).</p>
              <p><strong className="text-sky-300">Cookies:</strong> Arquivos de texto com preferências e dados de login.</p>
              <p><strong className="text-sky-300">Cache do Navegador:</strong> Guarda páginas/imagens locais para carregar mais rápido.</p>
              <p><strong className="text-sky-300">Intranet:</strong> Rede privada corporativa usando tecnologias de Internet (HTTP/HTTPS).</p>
            </div>
          </div>

        </div>
      )}

      {/* CONTEÚDO DOS BIZUS DE PORTUGUÊS */}
      {activeCategory === 'port' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <AlertOctagon className="w-5 h-5 text-rose-400" />
              Crase Proibida (4 Regras de Ouro)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
              <li>1. Antes de <strong>Verbos</strong> (ex: "Passou a estudar").</li>
              <li>2. Antes de palavras <strong>Masculinas</strong> (ex: "Andar a pé", "A prazo").</li>
              <li>3. Antes de <strong>Uma / Todas</strong> (ex: "Chegou a uma conclusão").</li>
              <li>4. Entre palavras <strong>Repetidas</strong> (ex: "Dia a dia", "Gota a gota").</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
              Verbos Haver e Fazer (Impessoais)
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <p>O verbo <strong>HAVER</strong> no sentido de <i>existir, ocorrer ou tempo decorrido</i> fica <strong>SEMPRE NO SINGULAR</strong>!</p>
              <div className="p-3 bg-slate-950 rounded-xl font-mono text-emerald-300 border border-slate-800">
                ✅ CORRETO: "Havia muitos candidatos."<br />
                ❌ ERRADO: "Haviam muitos candidatos."
              </div>
              <div className="p-3 bg-slate-950 rounded-xl font-mono text-emerald-300 border border-slate-800">
                ✅ CORRETO: "Faz dois anos..."<br />
                ❌ ERRADO: "Fazem dois anos..."
              </div>
            </div>
          </div>

        </div>
      )}

      {/* CONTEÚDO DOS BIZUS DE RACIOCÍNIO LÓGICO */}
      {activeCategory === 'rlm' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5 text-amber-400" />
              Negação do "SE... ENTÃO" ($P \rightarrow Q$)
            </h3>
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs sm:text-sm space-y-2">
              <p className="font-bold text-amber-300">REGRA DO MANÉ:</p>
              <p className="text-slate-200 font-mono">1. MANTÉM a 1ª proposição ($P$)</p>
              <p className="text-slate-200 font-mono">2. Troca o SE...ENTÃO pelo conectivo <strong>E</strong> ($\land$)</p>
              <p className="text-slate-200 font-mono">3. NEGA a 2ª proposição ($\neg Q$)</p>
              <div className="p-2 bg-indigo-950/60 rounded-lg border border-indigo-500/30 text-indigo-200 mt-2 font-mono">
                Ex: "Se estuda, passa" $\rightarrow$ Negação: "Estuda E NÃO passa".
              </div>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Sparkles className="w-5 h-5 text-indigo-400" />
              Equivalência do "SE... ENTÃO"
            </h3>
            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs sm:text-sm space-y-3">
              <div>
                <p className="font-bold text-indigo-300">1. CONTRAPOSITIVA (Volta Negando):</p>
                <p className="text-slate-300 font-mono">$P \rightarrow Q \equiv \neg Q \rightarrow \neg P$</p>
              </div>
              <div>
                <p className="font-bold text-emerald-300">2. REGRA DO NEUMAR ($\neg P \lor Q$):</p>
                <p className="text-slate-300 font-mono">Nega a 1ª OU Mantém a 2ª.</p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
