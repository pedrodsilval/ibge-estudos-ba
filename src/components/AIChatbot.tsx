import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Lightbulb, 
  User, 
  RotateCcw,
  Zap,
  GraduationCap
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  bizu?: string;
  timestamp: string;
}

const PRESET_QUESTIONS = [
  'Quais são as 3 decisões formais e os 2 documentos de uma RTF?',
  'Como calcular a Complexidade Ciclomática V(G)?',
  'Qual a diferença entre STUB e DRIVER nos testes de integração?',
  'Como identificar 1FN, 2FN e 3FN em Banco de Dados?',
  'Por que a divisão (9 / 5) falha em Java?',
  'Qual a diferença entre DELETE e DROP TABLE?',
  'Por que telefone é VARCHAR e dinheiro é DECIMAL?'
];

// Base de conhecimento acadêmica para as provas da UNIFACS (Prof. Enderson Nobre e Prof. Luiz Henrique Souza)
const KNOWLEDGE_BASE: Record<string, { answer: string; bizu?: string }> = {
  'rtf': {
    answer: 'Uma **Revisão Técnica Formal (RTF)** é uma reunião estática de controle de qualidade:\n- **Duração e Pessoas:** 3 a 5 participantes e menos de 2 horas.\n- **Papéis:** Produtor (apresenta o produto), Líder (controla o tempo e a agenda), Revisores (apontam defeitos) e Registrador (anota tudo na ata).\n- **3 Decisões Formais:** 1. Aceitar sem modificações; 2. Rejeitar por erros graves (exige nova RTF); 3. Aceitar provisoriamente (apenas correções pontuais).\n- **2 Documentos:** *Lista de Problemas de Revisão* (para o desenvolvedor corrigir) e *Relatório Sintetizado da RTF* (para a gestão).',
    bizu: '💡 Diretriz clássica de Pressman: "Revisa-se o produto, nunca o produtor! Aponte o defeito, mas não tente consertá-lo na reunião."'
  },
  'mccabe': {
    answer: 'A **Complexidade Ciclomática V(G)** de Tom McCabe fornece uma métrica da complexidade lógica e define o conjunto-base de caminhos linearmente independentes a serem testados. É calculada de 3 formas equivalentes:\n1. **V(G) = Número de Regiões** (fechadas + 1 externa)\n2. **V(G) = E - N + 2** (Arestas menos Nós mais 2)\n3. **V(G) = P + 1** (Nós predicados de decisão mais 1)',
    bizu: '💡 Decore a tríade: Regiões, E - N + 2, e P + 1. O resultado é rigorosamente o mesmo!'
  },
  'ciclomática': {
    answer: 'A **Complexidade Ciclomática V(G)** de Tom McCabe fornece uma métrica da complexidade lógica e define o conjunto-base de caminhos linearmente independentes a serem testados. É calculada de 3 formas equivalentes:\n1. **V(G) = Número de Regiões** (fechadas + 1 externa)\n2. **V(G) = E - N + 2** (Arestas menos Nós mais 2)\n3. **V(G) = P + 1** (Nós predicados de decisão mais 1)',
    bizu: '💡 Decore a tríade: Regiões, E - N + 2, e P + 1. O resultado é rigorosamente o mesmo!'
  },
  'integracao': {
    answer: 'No teste de integração incremental, diferenciam-se duas estratégias principais:\n- **Top-Down (Descendente):** Começa no topo (controladores/telas) e desce. Exige **STUBS** (submódulos falsos/simulados que retornam respostas estáticas para isolar a base).\n- **Bottom-Up (Ascendente):** Começa na base (repositórios/utilitários) e sobe. Exige **DRIVERS** (módulos chamadores que disparam as execuções).',
    bizu: '💡 Top-Down (cima pra baixo) usa STUB. Bottom-Up (baixo pra cima) usa DRIVER.'
  },
  'stub': {
    answer: 'Um **STUB** é um módulo auxiliar fictício (fake/mock) utilizado na integração **Descendente (Top-Down)** para substituir temporariamente módulos inferiores que ainda não foram desenvolvidos ou conectados.',
    bizu: '💡 Top-Down usa STUB para simular o que está embaixo!'
  },
  'driver': {
    answer: 'Um **DRIVER** é um programa chamador utilizado na integração **Ascendente (Bottom-Up)** para disparar chamadas e passar parâmetros para módulos da base que estão sendo testados antes dos módulos superiores existirem.',
    bizu: '💡 Bottom-Up usa DRIVER para pilotar por cima!'
  },
  'caixa-preta': {
    answer: 'O **Teste Caixa-Preta (Funcional)** avalia o software com base nos requisitos e interfaces, sem analisar o código-fonte interno. Principais técnicas: **Particionamento de Equivalência** e **Análise do Valor Limite**. Erros expostos (Mnemônico **F-I-B-D-T**): Funções incorretas/ausentes, Interface, Banco de dados/estruturas externas, Desempenho e Término/inicialização.',
    bizu: '💡 Caixa-preta testa o "quê" o sistema faz (entradas e saídas).'
  },
  'caixa-branca': {
    answer: 'O **Teste Caixa-Branca (Estrutural)** analisa o código-fonte interno, desvios e fluxos lógicos. Seus 4 pilares são: 1. Exercitar todos os caminhos independentes; 2. Testar decisões nos estados Verdadeiro e Falso; 3. Executar ciclos em seus limites operacionais; 4. Validar estruturas de dados internas.',
    bizu: '💡 Caixa-branca testa "como" o código foi construído internamente.'
  },
  '1fn': {
    answer: 'A **Primeira Forma Normal (1FN)** exige **ATOMICIDADE**: nenhum atributo pode armazenar múltiplos valores, listas ou arrays numa única célula (como vários telefones juntos), nem colunas repetitivas (tel1, tel2). Toda tabela na 1FN possui uma Chave Primária (PK) definida.',
    bizu: '💡 1FN = Tudo atômico e indivisível. Nada de listas numa célula só!'
  },
  '2fn': {
    answer: 'A **Segunda Forma Normal (2FN)** exige estar na 1FN e **eliminar Dependências Parciais**. Um atributo não-chave não pode depender de apenas uma parte de uma Chave Primária COMPOSTA. Toda tabela com PK simples (uma coluna só) já está automaticamente na 2FN!',
    bizu: '💡 2FN só se aplica a Chave Composta: nenhum campo comum pode depender de só "um pedaço" da chave.'
  },
  '3fn': {
    answer: 'A **Terceira Forma Normal (3FN)** exige estar na 2FN e **eliminar Dependências Transitivas**. Um atributo não-chave não pode depender de outro atributo que também não é chave (A ➔ B ➔ C). Por exemplo: nome e ramal de departamento não podem ficar na tabela de Funcionários se dependerem de id_departamento.',
    bizu: '💡 3FN = Coluna comum não pode ser "dona" de outra coluna comum.'
  },
  'delete': {
    answer: 'Diferença entre DELETE e DROP:\n- `DELETE FROM tabela WHERE id = 1;`: Comando **DML** que apaga apenas as linhas (tuplas). A estrutura e o esqueleto da tabela permanecem intactos.\n- `DROP TABLE tabela;`: Comando **DDL** que destrói a tabela por completo, removendo sua estrutura, colunas, índices e dados do banco.',
    bizu: '💡 DELETE tira a mobília de dentro. DROP explode o prédio inteiro!'
  },
  'drop': {
    answer: '`DROP TABLE tabela;` é um comando DDL que remove o objeto tabela permanentemente do esquema do banco de dados, excluindo estrutura e dados simultaneamente.',
    bizu: '💡 Cuidado: DROP não tem volta!'
  },
  'telefone': {
    answer: 'Campos como Telefone, CPF e CEP devem ser armazenados como **VARCHAR** e não como INT porque:\n1. O tipo INT descarta o zero à esquerda (o DDD 071 vira 71);\n2. Telefones possuem caracteres de máscara (parênteses, hifens);\n3. Não realizam operações matemáticas (ninguém soma dois telefones).',
    bizu: '💡 Se não faz conta matemática e pode começar com zero, guarde sempre como VARCHAR!'
  },
  'dinheiro': {
    answer: 'Valores financeiros devem ser armazenados com o tipo **DECIMAL(10,2)** (e nunca FLOAT ou DOUBLE) porque tipos de ponto flutuante sofrem de imprecisão binária cumulativa, causando perda de centavos em saldos bancários e faturas.',
    bizu: '💡 Dinheiro em banco de dados relacional = SEMPRE DECIMAL!'
  },
  'divisao': {
    answer: 'Em Java, `(9 / 5)` é avaliado como divisão inteira porque ambos os números são inteiros literais. O compilador descarta as casas decimais e retorna `1` (em vez de `1.8`). A expressão `celsius * (9 / 5) + 32` vira `celsius * 1 + 32`.\n\n**Correção:** Use literais double: `(9.0 / 5.0)`.',
    bizu: '💡 Em Java, divisão de int com int dá int! Use 9.0 / 5.0 para obter 1.8.'
  },
  'fatorial': {
    answer: 'No cálculo de fatorial acumulado, a variável deve ser inicializada com `fat = 1` (elemento neutro da multiplicação). Começar com `fat = 0` faz qualquer produto resultar em 0 (`0 * 1 = 0`, `0 * 2 = 0`...).',
    bizu: '💡 Multiplicação acumulada começa sempre em 1!'
  }
};

export const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Olá, Gilvania! Sou seu **Tutor Acadêmico UNIFACS**. Estou calibrado com o conteúdo exato das aulas do **Prof. Enderson Nobre (Qualidade de Software)** e do **Prof. Luiz Henrique (Banco de Dados)**.\n\nQual conceito ou exercício você gostaria de revisar agora?',
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputText('');

    setTimeout(() => {
      const lower = text.toLowerCase();
      let match = Object.entries(KNOWLEDGE_BASE).find(([k]) => lower.includes(k));

      let aiResponseText = '';
      let aiBizu = '';

      if (match) {
        aiResponseText = match[1].answer;
        aiBizu = match[1].bizu || '';
      } else if (lower.includes('clinica') || lower.includes('veterinaria') || lower.includes('animal')) {
        aiResponseText = 'Na **Atividade da Clínica Veterinária** projetada em aula:\n- **Tutor (1) ➔ (N) Animal:** Um tutor pode ter vários animais; o animal pertence a um só tutor. A FK `id_tutor` fica na tabela Animal.\n- **Animal e Veterinário ➔ Consulta:** A tabela Consulta é o ponto de encontro das consultas com atributos próprios: data, horário, motivo, valor_cobrado (DECIMAL) e diagnóstico (que pode ser NULL enquanto a consulta não acabar!).';
        aiBizu = '💡 Lembre-se: Diagnóstico aceita NULL e valor monetário usa DECIMAL(10,2).';
      } else {
        aiResponseText = `Excelente pergunta para as provas da UNIFACS! Recomendo focar nos conceitos prioritários:\n- **Qualidade de Software:** As 15 questões da folha de revisão (RTF, Caixa-Preta F-I-B-D-T, McCabe V(G) = P + 1, e Stubs/Drivers).\n- **Banco de Dados:** As Formas Normais (1FN atômica, 2FN sem dependência parcial, 3FN sem dependência transitiva) e os scripts DDL da Clínica Veterinária.\n\nTente clicar em uma das perguntas rápidas sugeridas acima!`;
        aiBizu = '💡 Dica: Explore o "Paredão de Bizus" e a aba "Laboratório Prático" no menu superior!';
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        bizu: aiBizu,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 400);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      
      {/* CABEÇALHO */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Tutor Acadêmico UNIFACS
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                Online 24/7
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Pronto para tirar dúvidas de Qualidade de Software e Banco de Dados.
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="p-2 text-slate-400 hover:text-slate-200 border border-slate-800 rounded-xl hover:bg-slate-800 transition-colors"
          title="Limpar Conversa"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* ÁREA DE MENSAGENS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl h-[480px] overflow-y-auto space-y-4">
        {messages.map(m => {
          const isUser = m.sender === 'user';
          return (
            <div key={m.id} className={`flex items-start gap-3 ${isUser ? 'flex-row-reverse' : ''}`}>
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                isUser ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-indigo-400 border border-slate-700'
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] rounded-2xl p-4 text-xs sm:text-sm space-y-2 leading-relaxed ${
                isUser 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                <div className="whitespace-pre-line">{m.text}</div>
                
                {m.bizu && (
                  <div className="mt-2 p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-300 text-xs font-medium flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 shrink-0 text-amber-400" />
                    <span>{m.bizu}</span>
                  </div>
                )}

                <div className={`text-[10px] ${isUser ? 'text-indigo-200 text-right' : 'text-slate-500'}`}>
                  {m.timestamp}
                </div>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* PERGUNTAS RÁPIDAS PRESET */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 px-1">
          <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
          <span>Dúvidas Frequentes nas Provas da UNIFACS:</span>
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSendMessage(q)}
              className="px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-medium rounded-xl transition-all"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* INPUT BAR */}
      <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-xl">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="Pergunte sobre RTF, McCabe, 1FN/2FN/3FN, JUnit 5 ou SQL..."
          className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder-slate-500 focus:outline-none"
        />
        <button
          onClick={() => handleSendMessage()}
          disabled={!inputText.trim()}
          className="p-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-white rounded-xl transition-all shadow-md shadow-indigo-600/30"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
