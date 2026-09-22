import React, { useState } from 'react';
import { 
  Terminal, 
  Globe, 
  ShieldCheck, 
  Database, 
  Zap, 
  CheckCircle, 
  AlertOctagon,
  Sparkles
} from 'lucide-react';

export const BizusQuickRead: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'inf' | 'port' | 'rlm'>('inf');

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold mb-3">
          <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span>Leitura Relâmpago Reta Final</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
          Paredão de Bizus de Alta Incidência IBGE
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
          Resumos de 5 segundos, tabelas de memorização e atalhos práticos para garantir pontos preciosos no domingo.
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
          ⚡ Informática / TI
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
          
          {/* CARD 1: PORTAS TCP/IP */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Globe className="w-5 h-5 text-indigo-400" />
              Tabela Decisiva de Portas TCP/UDP
            </h3>
            <div className="space-y-2 text-xs font-mono">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
                <span className="text-emerald-400 font-bold">SSH (Secure Shell)</span>
                <span className="text-slate-300">Porta 22 (TCP - Criptografado)</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
                <span className="text-rose-400 font-bold">Telnet</span>
                <span className="text-slate-300">Porta 23 (TCP - Inseguro/Puro)</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
                <span className="text-indigo-400 font-bold">DNS (Domain Name System)</span>
                <span className="text-slate-300">Porta 53 (UDP / TCP)</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
                <span className="text-amber-400 font-bold">HTTP / HTTPS</span>
                <span className="text-slate-300">Porta 80 / 443</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800 flex justify-between">
                <span className="text-sky-400 font-bold">SMTP / POP3 / IMAP</span>
                <span className="text-slate-300">25(587) / 110 / 143 (Email)</span>
              </div>
            </div>
          </div>

          {/* CARD 2: COMANDOS LINUX */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Terminal className="w-5 h-5 text-emerald-400" />
              Comandos Linux Cheat Sheet
            </h3>
            <div className="space-y-2 text-xs">
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-mono font-bold">chmod</span>
                <span className="text-slate-300 ml-2">Modifica permissões de arquivos (`chmod 755 arquivo`)</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-mono font-bold">chown</span>
                <span className="text-slate-300 ml-2">Altera o PROPRIETÁRIO (owner) do arquivo</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-mono font-bold">grep</span>
                <span className="text-slate-300 ml-2">Busca texto/padrão dentro de arquivos</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-xl border border-slate-800">
                <span className="text-emerald-300 font-mono font-bold">ps / top</span>
                <span className="text-slate-300 ml-2">Lista processos em execução / gerenciador em tempo real</span>
              </div>
            </div>
          </div>

          {/* CARD 3: SEGURANÇA DA INFORMAÇÃO */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              Criptografia & Malware
            </h3>
            <div className="space-y-2 text-xs leading-relaxed text-slate-300">
              <p><strong className="text-amber-300">Simétrica:</strong> 1 única chave compartilhada. Muito rápida (ex: AES).</p>
              <p><strong className="text-amber-300">Assimétrica:</strong> Par de chaves (Pública cifra, Privada decifra). Mais lenta (ex: RSA).</p>
              <p><strong className="text-amber-300">Ransomware:</strong> Malware que criptografa dados e cobra RESGATE.</p>
              <p><strong className="text-amber-300">Firewall:</strong> Filtra tráfego de rede (NÃO remove vírus do arquivo já baixado!).</p>
            </div>
          </div>

          {/* CARD 4: BANCO DE DADOS & SQL */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
              <Database className="w-5 h-5 text-sky-400" />
              SQL Quick Reference
            </h3>
            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="p-2 bg-slate-950 rounded-lg">
                <span className="text-sky-300 font-bold">DDL (Estrutura):</span> CREATE, ALTER, DROP, TRUNCATE
              </div>
              <div className="p-2 bg-slate-950 rounded-lg">
                <span className="text-emerald-300 font-bold">DML (Dados):</span> SELECT, INSERT, UPDATE, DELETE
              </div>
              <div className="p-2 bg-slate-950 rounded-lg">
                <span className="text-indigo-300 font-bold">JOINs:</span> LEFT JOIN = Prioriza tabela da esquerda completa!
              </div>
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
              NUNCA USAR CRASE (4 Regras de Ouro)
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside">
              <li>1. Antes de <strong>Verbos</strong> (ex: "Começou a estudar").</li>
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
                ✅ CORRETO: "Faz dois meses..."<br />
                ❌ ERRADO: "Fazem dois meses..."
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
