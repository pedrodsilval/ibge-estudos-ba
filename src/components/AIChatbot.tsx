import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  Send, 
  Lightbulb, 
  User, 
  RotateCcw,
  Zap
} from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  bizu?: string;
  timestamp: string;
}

const PRESET_QUESTIONS = [
  'Diferença entre SSH e Telnet?',
  'Como funciona o comando chmod 755?',
  'Qual a diferença entre Criptografia Simétrica e Assimétrica?',
  'O que é Ransomware e como cai em prova?',
  'Como aplicar a Regra do Mané na negação do "Se...Então"?',
  'Quais são as 4 regras de Crase Proibida?',
  'Diferença de INNER JOIN para LEFT JOIN em SQL?'
];

// Respostas inteligentes instantâneas para os tópicos do edital IBGE
const KNOWLEDGE_BASE: Record<string, { answer: string; bizu?: string }> = {
  'ssh': {
    answer: 'O **SSH (Secure Shell)** opera na **porta 22 TCP** e fornece acesso remoto criptografado a servidores. O **Telnet** opera na **porta 23 TCP** e envia dados em texto puro (sem criptografia), sendo considerado totalmente inseguro.',
    bizu: '💡 Telnet (Porta 23 = Texto Puro/Inseguro) vs SSH (Porta 22 = Criptografado/Seguro).'
  },
  'chmod': {
    answer: 'O comando `chmod 755` altera as permissões de um arquivo no Linux:\n- **7 (Dono):** Leitura(4) + Escrita(2) + Execução(1) = rwx\n- **5 (Grupo):** Leitura(4) + Execução(1) = r-x\n- **5 (Outros):** Leitura(4) + Execução(1) = r-x',
    bizu: '💡 chmod = MODifica Permissões | chown = Altera o OWNER (Proprietário).'
  },
  'criptografia': {
    answer: 'A **Criptografia Simétrica** usa a MESMA chave para cifrar e decifrar (muito rápida, ex: AES). A **Criptografia Assimétrica** usa um PAR de chaves: a Chave Pública (cifra) e a Chave Privada (decifra) (mais lenta, ex: RSA).',
    bizu: '💡 SIMÉTRICA = 1 Chave Única | ASSIMÉTRICA = 2 Chaves (Pública + Privada).'
  },
  'ransomware': {
    answer: 'O **Ransomware** é um código malicioso que criptografa os arquivos da vítima e exige o pagamento de um **resgate** (geralmente em Bitcoin/criptomoedas) para fornecer a chave de descriptografia.',
    bizu: '💡 Ransom = Resgate! Ransomware sequestra dados e cobra resgate.'
  },
  'mané': {
    answer: 'Para negar a condicional $P \\rightarrow Q$ ("Se P, então Q"), usa-se a **Regra do MANÉ**:\n1. **MA**ntém a primeira proposição ($P$).\n2. Troca o "Se...Então" pelo conectivo **E** ($\\land$).\n3. **NE**ga a segunda proposição ($\\neg Q$).',
    bizu: '💡 Negação de "Se estuda, passa" $\\rightarrow$ "Estuda E NÃO passa".'
  },
  'crase': {
    answer: 'Principais casos de **Crase Proibida** para a prova:\n1. Antes de **Verbos** (ex: "Passou a estudar").\n2. Antes de palavras **Masculinas** (ex: "Andar a pé").\n3. Antes de **Uma/Todas** (ex: "Chegou a uma conclusão").\n4. Entre palavras **Repetidas** (ex: "Dia a dia").',
    bizu: '💡 NUNCA use crase antes de verbo, palavra masculina ou expressão repetida!'
  },
  'join': {
    answer: 'Em SQL:\n- **INNER JOIN:** Retorna apenas as linhas que possuem correspondência em AMBAS as tabelas.\n- **LEFT JOIN:** Retorna TODAS as linhas da tabela da esquerda, preenchendo com NULL onde não houver correspondência na tabela da direita.',
    bizu: '💡 LEFT JOIN = Prioriza e preserva 100% dos dados da tabela da esquerda.'
  }
};

export const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Olá! Sou o seu **Tutor IA da Reta Final IBGE**. Pode me fazer qualquer pergunta sobre Informática/TI, Português ou Raciocínio Lógico do edital!',
      bizu: '💡 Dica: Clique nas perguntas rápidas sugeridas abaixo ou digite sua dúvida.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (questionText?: string) => {
    const textToSend = questionText || input;
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!questionText) setInput('');
    setIsTyping(true);

    // Simular busca de resposta inteligente da IA
    setTimeout(() => {
      const queryLower = textToSend.toLowerCase();
      let matchKey = Object.keys(KNOWLEDGE_BASE).find(key => queryLower.includes(key));

      let aiText = '';
      let aiBizu: string | undefined = undefined;

      if (matchKey && KNOWLEDGE_BASE[matchKey]) {
        aiText = KNOWLEDGE_BASE[matchKey].answer;
        aiBizu = KNOWLEDGE_BASE[matchKey].bizu;
      } else if (queryLower.includes('linux')) {
        aiText = 'No Linux para o IBGE, os comandos mais cobrados são:\n- `chmod`: Altera permissões\n- `chown`: Altera proprietário\n- `grep`: Busca padrões em texto\n- `find`: Localiza arquivos no sistema\n- `ps / top`: Processos';
        aiBizu = '💡 Diretório `/etc` = Configurações | `/var` = Logs variáveis | `/home` = Usuários.';
      } else if (queryLower.includes('portas') || queryLower.includes('rede')) {
        aiText = 'Principais portas de rede para a prova do IBGE:\n- **SSH:** 22 (TCP)\n- **Telnet:** 23 (TCP)\n- **SMTP:** 25/587 (Envio de email)\n- **POP3:** 110 (Recebimento)\n- **IMAP:** 143 (Sincronização de email)\n- **DNS:** 53 (UDP/TCP)\n- **HTTP/HTTPS:** 80 / 443';
      } else {
        aiText = `Para **"${textToSend}"**: no contexto da banca do IBGE, mantenha o foco nos conceitos fundamentais. Verifique se sua dúvida envolve os protocolos de rede (TCP/IP), comandos Linux de segurança ou regras de crase e concordância!`;
        aiBizu = '💡 Consulte a aba "Paredão de Bizus" para rever as tabelas de alta incidência.';
      }

      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: aiText,
        bizu: aiBizu,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* CABEÇALHO DA IA */}
      <div className="flex items-center justify-between bg-gradient-to-r from-indigo-950 via-slate-900 to-indigo-950 border border-indigo-500/30 rounded-3xl p-6 shadow-2xl mb-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center">
            <Bot className="w-7 h-7 text-indigo-400 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold text-white flex items-center gap-2">
              Tutor IA Reta Final IBGE
              <span className="px-2 py-0.5 text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full">
                Online
              </span>
            </h2>
            <p className="text-xs text-slate-300">
              Tire dúvidas de Informática, Português e Raciocínio Lógico em segundos.
            </p>
          </div>
        </div>

        <button
          onClick={() => setMessages([messages[0]])}
          className="p-2.5 text-slate-400 hover:text-slate-200 bg-slate-950 border border-slate-800 rounded-xl transition-all"
          title="Limpar Conversa"
        >
          <RotateCcw className="w-4 h-4" />
        </button>
      </div>

      {/* CHIPS DE PERGUNTAS RÁPIDAS */}
      <div className="mb-6">
        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5 flex items-center gap-1">
          <Zap className="w-3.5 h-3.5 text-amber-400" /> Dúvidas Frequentes do Edital:
        </span>
        <div className="flex flex-wrap gap-2">
          {PRESET_QUESTIONS.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 bg-slate-900 hover:bg-indigo-600/20 border border-slate-800 hover:border-indigo-500/50 rounded-xl text-xs text-slate-300 hover:text-indigo-200 transition-all text-left"
            >
              {q}
            </button>
          ))}
        </div>
      </div>

      {/* ÁREA DE MENSAGENS */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl min-h-[420px] max-h-[550px] overflow-y-auto space-y-4 mb-4">
        {messages.map((msg) => {
          const isUser = msg.sender === 'user';
          return (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs ${
                isUser ? 'bg-indigo-600 text-white' : 'bg-slate-800 text-indigo-400 border border-indigo-500/30'
              }`}>
                {isUser ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[80%] rounded-2xl p-4 text-sm leading-relaxed ${
                isUser 
                  ? 'bg-indigo-600 text-white rounded-tr-none' 
                  : 'bg-slate-950 border border-slate-800 text-slate-200 rounded-tl-none'
              }`}>
                <div className="whitespace-pre-wrap">{msg.text}</div>

                {msg.bizu && (
                  <div className="mt-3 p-3 bg-indigo-950/70 border border-indigo-500/30 rounded-xl text-xs text-indigo-200 flex items-start space-x-2">
                    <Lightbulb className="w-4 h-4 text-amber-300 shrink-0 mt-0.5 animate-pulse" />
                    <span>{msg.bizu}</span>
                  </div>
                )}

                <span className="text-[10px] text-slate-500 block text-right mt-1.5 font-mono">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="flex items-center space-x-2 text-xs text-slate-400 italic bg-slate-950 px-4 py-2 rounded-xl w-fit border border-slate-800">
            <Bot className="w-4 h-4 text-indigo-400 animate-spin" />
            <span>Tutor IA digitando resposta...</span>
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      {/* CAMPO DE DIGITAÇÃO DE MENSAGEM */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="flex items-center space-x-2 bg-slate-900 border border-slate-800 p-2 rounded-2xl shadow-xl"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite sua dúvida sobre o edital do IBGE..."
          className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
        />
        <button
          type="submit"
          disabled={!input.trim()}
          className="p-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white rounded-xl transition-all shadow-md shadow-indigo-600/30"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
