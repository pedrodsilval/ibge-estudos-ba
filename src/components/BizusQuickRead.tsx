import React, { useState } from 'react';
import { 
  Zap, 
  CheckCircle, 
  AlertOctagon,
  Sparkles,
  Database,
  Code2,
  Layers,
  Volume2,
  VolumeX,
  ShieldCheck
} from 'lucide-react';

export const BizusQuickRead: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'qs' | 'bd' | 'java'>('qs');
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
    <div className="max-w-5xl mx-auto px-4 py-8">
      
      {/* CABEÇALHO */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold mb-3">
          <Zap className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span>UNIFACS 2026.2 • Reta Final Gilvania</span>
        </div>
        
        <div className="flex items-center justify-center space-x-3 mb-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Paredão de Bizus de Alta Incidência
          </h2>
          
          <button
            onClick={() => {
              const textToSpeak = activeCategory === 'qs'
                ? "Bizus de Qualidade de Software: RTF tem de 3 a 5 participantes, dura menos de 2 horas e gera relatório sintetizado e lista de problemas. As três decisões são: aceitar, rejeitar por erros graves ou aceitar provisoriamente. Caixa-preta foca em entradas e saídas. Mnemônico F-I-B-D-T: funções, interface, banco de dados, desempenho e término. Caixa-branca foca no código interno: caminhos independentes, decisões verdadeiro e falso, ciclos e estruturas de dados. Complexidade ciclomática é igual ao número de regiões, ou arestas menos nós mais 2, ou nós predicados mais 1. No teste de integração, Top-down usa STUB para baixo e Bottom-up usa DRIVER para cima. Teste de fumaça verifica se a build fica de pé; teste de regressão verifica se alterações não quebraram o que já funcionava."
                : activeCategory === 'bd'
                ? "Bizus de Banco de Dados: Primeira forma normal exige atomicidade, nenhum campo pode ter listas ou múltiplos telefones. Segunda forma normal elimina dependência parcial em chaves compostas. Terceira forma normal elimina dependência transitiva entre colunas não-chave. DDL altera o esqueleto: CREATE, ALTER, DROP. DML altera os dados: INSERT, UPDATE, DELETE. UPDATE sem WHERE altera todas as linhas da tabela. DROP destrói a tabela inteira, DELETE apaga apenas os dados. Telefone é sempre VARCHAR para preservar o zero à esquerda e máscaras. Dinheiro é sempre DECIMAL para não perder centavos."
                : "Bizus de Laboratório Java: Divisão 9 dividido por 5 resulta em 1 porque os literais são int; use 9.0 dividido por 5.0. No cálculo de fatorial, comece sempre com fat igual a 1, pois começar com 0 zera todo o produto. No laço de repetição, parar em tamanho menos um ignora o último caractere da string. Em anos bissextos, anos múltiplos de 400 são bissextos mesmo sendo múltiplos de 100. No JUnit 5, use assertEquals com delta de tolerância para números com ponto flutuante.";
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
          Resumos mnemônicos ultra condensados para memorizar as pegadinhas e regras de ouro das duas provas.
        </p>
      </div>

      {/* SELETOR DE ABAS */}
      <div className="flex justify-center mb-8">
        <div className="bg-slate-900 p-1.5 rounded-2xl border border-slate-800 flex space-x-2">
          
          <button
            onClick={() => {
              setActiveCategory('qs');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'qs'
                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>🔬 Qualidade de Software (Terça)</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('bd');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'bd'
                ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Database className="w-4 h-4" />
            <span>🗄️ Banco de Dados (Quarta)</span>
          </button>

          <button
            onClick={() => {
              setActiveCategory('java');
              if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); }
            }}
            className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeCategory === 'java'
                ? 'bg-gradient-to-r from-rose-600 to-amber-600 text-white shadow-lg shadow-rose-600/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Code2 className="w-4 h-4" />
            <span>⚡ Pegadinhas Java / Lab 22</span>
          </button>

        </div>
      </div>

      {/* CONTEÚDO: QUALIDADE DE SOFTWARE */}
      {activeCategory === 'qs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>Revisão Técnica Formal (RTF) — Regras de Ouro</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Tamanho & Tempo:</strong> 3 a 5 participantes; duração de menos de 2 horas.<br/>
              • <strong>Papéis:</strong> Produtor (apresenta o artefato, nunca preside a reunião), Líder (controla tempo e agenda), Revisores (apontam defeitos) e Registrador (anota tudo na ata).<br/>
              • <strong>3 Decisões:</strong> Aceitar sem modificação, Rejeitar por erros graves (nova RTF) ou Aceitar provisoriamente.<br/>
              • <strong>2 Documentos:</strong> Lista de Problemas de Revisão (para o dev) e Relatório Sintetizado (para a gestão).
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-semibold">
              💡 Diretriz mágica de Pressman: "Revisa-se o produto, NUNCA o produtor! Aponte o erro, não tente consertá-lo na reunião."
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
              <Sparkles className="w-5 h-5 shrink-0" />
              <span>Caixa-Preta vs Caixa-Branca</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Caixa-Preta (Funcional):</strong> Foca nos requisitos (entradas e saídas), ignorando o código interno. Erros expostos (Mnemônico <strong>F-I-B-D-T</strong>): <strong>F</strong>unções, <strong>I</strong>nterfaces, <strong>B</strong>anco/Estruturas, <strong>D</strong>esempenho, <strong>T</strong>érmino.<br/>
              • <strong>Caixa-Branca (Estrutural):</strong> Foca no código-fonte interno. Os 4 pilares: caminhos independentes exercitados, decisões em V e F, ciclos em seus limites e estruturas internas válidas.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-semibold">
              💡 Caixa-preta testa o "quê". Caixa-branca testa o "como".
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
              <AlertOctagon className="w-5 h-5 shrink-0" />
              <span>Complexidade Ciclomática V(G) — Tom McCabe</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              O teste de caminho básico fornece o conjunto-base de caminhos independentes. A complexidade é calculada por 3 fórmulas equivalentes:<br/>
              1. <strong>V(G) = Regiões</strong> (fechadas + 1 aberta externa).<br/>
              2. <strong>V(G) = E - N + 2</strong> (Arestas menos Nós mais 2).<br/>
              3. <strong>V(G) = P + 1</strong> (Nós de decisão predicados + 1).
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-semibold">
              💡 O número V(G) dá o teto máximo de casos de teste necessários para cobrir 100% dos comandos do código.
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-indigo-400 font-bold text-sm">
              <Layers className="w-5 h-5 shrink-0" />
              <span>Testes de Integração & Fumaça</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Top-Down (Descendente):</strong> Começa no topo (controladores) e desce. Usa <strong>STUBS</strong> (módulos falsos que retornam dados simulados para isolar a base).<br/>
              • <strong>Bottom-Up (Ascendente):</strong> Começa na base (repositórios/utilitários) e sobe. Usa <strong>DRIVERS</strong> (programas chamadores).<br/>
              • <strong>Fumaça (Smoke Test):</strong> Bateria rápida para verificar se a nova build sequer inicia e fica de pé.<br/>
              • <strong>Regressão:</strong> Retestar funcionalidades já existentes para garantir que uma correção nova não quebrou nada antigo.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-semibold">
              💡 Top-Down usa STUB. Bottom-Up usa DRIVER.
            </div>
          </div>

        </div>
      )}

      {/* CONTEÚDO: BANCO DE DADOS */}
      {activeCategory === 'bd' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <Layers className="w-5 h-5 shrink-0" />
              <span>Formas Normais (1FN, 2FN, 3FN)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>1FN (Atomicidade):</strong> Nada de listas, arrays ou múltiplos telefones na mesma célula. Exige chave primária.<br/>
              • <strong>2FN (Dependência Total):</strong> Estar na 1FN E eliminar <em>dependências parciais</em> (nenhum atributo não-chave pode depender de apenas uma parte de uma PK composta).<br/>
              • <strong>3FN (Não-Transitividade):</strong> Estar na 2FN E eliminar <em>dependências transitivas</em> (nenhum atributo não-chave pode depender de outro atributo não-chave).
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              💡 Frase célebre: "Cada atributo deve depender da chave (1FN), de toda a chave (2FN) e de nada além da chave (3FN)."
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <CheckCircle className="w-5 h-5 shrink-0" />
              <span>DDL vs DML vs DQL</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>DDL (Esqueleto / Estrutura):</strong> <code className="text-emerald-300">CREATE</code>, <code className="text-emerald-300">ALTER</code>, <code className="text-emerald-300">DROP</code>.<br/>
              • <strong>DML (Dados / Registros):</strong> <code className="text-emerald-300">INSERT INTO</code>, <code className="text-emerald-300">UPDATE</code>, <code className="text-emerald-300">DELETE</code>.<br/>
              • <strong>DQL (Consulta):</strong> <code className="text-emerald-300">SELECT</code>.<br/>
              • <strong>Diferença Crítica:</strong> <code className="text-emerald-300">DELETE FROM cliente</code> apaga apenas as linhas (a tabela continua lá). <code className="text-emerald-300">DROP TABLE cliente</code> destrói a tabela inteira do schema.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              💡 CUIDADO: Rodar UPDATE ou DELETE sem a cláusula WHERE afeta 100% de todas as linhas da tabela!
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <Sparkles className="w-5 h-5 shrink-0" />
              <span>Tipos de Dados: Armadilhas Clássicas</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Telefone e CEP:</strong> Devem ser <code className="text-emerald-300">VARCHAR</code> (e NUNCA INT), porque o tipo INT descarta o zero à esquerda (071 vira 71), não suporta caracteres de máscara e telefones não entram em cálculos aritméticos.<br/>
              • <strong>Valores Financeiros:</strong> Use SEMPRE <code className="text-emerald-300">DECIMAL(10,2)</code>. Tipos FLOAT e DOUBLE sofrem de erro de arredondamento em ponto flutuante binário.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              💡 Dinheiro é DECIMAL. Telefone, CPF e CEP são VARCHAR.
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
              <Database className="w-5 h-5 shrink-0" />
              <span>Clínica Veterinária (Slide de Sala)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              • <strong>Tutor (1) ➔ (N) Animal:</strong> A chave primária <code className="text-emerald-300">id_tutor</code> vai como FK na tabela Animal.<br/>
              • <strong>Animal e Veterinário ➔ Consulta:</strong> A tabela Consulta conecta os dois, recebendo <code className="text-emerald-300">id_animal</code> e <code className="text-emerald-300">id_veterinario</code> como FKs.<br/>
              • <strong>Diagnóstico Opcional:</strong> A especificação diz que a consulta em andamento pode não ter diagnóstico. Logo, a coluna deve aceitar <code className="text-emerald-300 font-bold">NULL</code>.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              💡 Chave de lado '1' migra como FK para o lado 'Muitos'.
            </div>
          </div>

        </div>
      )}

      {/* CONTEÚDO: LABORATÓRIO JAVA */}
      {activeCategory === 'java' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
              <AlertOctagon className="w-5 h-5 shrink-0" />
              <span>Divisão Inteira (9 / 5)</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Em Java, quando você divide dois números inteiros literais como <code className="text-rose-300">(9 / 5)</code>, o resultado é truncado para <code className="text-rose-300 font-bold">1</code>! A fórmula <code className="text-rose-300">celsius * (9 / 5) + 32</code> vira <code className="text-rose-300">celsius * 1 + 32</code>.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              ✅ Correção: Escreva sempre <code className="text-emerald-400">(9.0 / 5.0)</code> para forçar números double.
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
              <AlertOctagon className="w-5 h-5 shrink-0" />
              <span>Fatorial Inicializado com Zero</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Se você faz um acumulador de multiplicação com <code className="text-rose-300">int fat = 0;</code>, qualquer multiplicação por zero dá zero (<code className="text-rose-300">0 * 1 = 0, 0 * 2 = 0</code>...). O método retorna sempre 0.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              ✅ Correção: Inicialize com <code className="text-emerald-400">int fat = 1;</code> (elemento neutro do produto).
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
              <AlertOctagon className="w-5 h-5 shrink-0" />
              <span>Erro de Fronteira (Off-by-One) em Laços</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              A condição <code className="text-rose-300">i &lt; senha.length() - 1</code> faz o laço parar antes do último caractere. Se o único dígito da senha for o último (ex: "Senha1"), o validador retorna falso erroneamente.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              ✅ Correção: Use <code className="text-emerald-400">i &lt; senha.length()</code> para percorrer a string completa.
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-3">
            <div className="flex items-center space-x-2 text-rose-400 font-bold text-sm">
              <AlertOctagon className="w-5 h-5 shrink-0" />
              <span>Ano Bissexto: Regra dos 400</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Múltiplos de 100 NÃO são bissextos, A MENOS que também sejam múltiplos de 400! O ano 2000 foi bissexto. Códigos que apenas checam <code className="text-rose-300">ano % 100 == 0</code> erram no ano 2000.
            </p>
            <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-semibold">
              ✅ Correção: <code className="text-emerald-400">(ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)</code>.
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
