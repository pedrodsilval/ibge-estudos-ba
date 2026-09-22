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
  'Quais os principais atalhos do Windows 10/11?',
  'O que mudou nas permissões do Android 13+?',
  'Diferença entre Backup Full, Incremental e Diferencial?',
  'Qual a diferença entre `=MÉDIA()` e `=MED()` no Excel?',
  'Diferença entre os campos Para, Cc e Cco no E-mail?',
  'Quais são as 4 regras de Crase Proibida?',
  'Como aplicar a Regra do Mané na negação do "Se...Então"?'
];

// Respostas inteligentes alinhadas 100% ao edital oficial do IBGE (Windows 10/11, Android 13+, Word, Excel, Hardware, Backup, Redes, Português, RLM)
const KNOWLEDGE_BASE: Record<string, { answer: string; bizu?: string }> = {
  'windows': {
    answer: 'Atalhos fundamentais do **Windows 10/11** para a prova:\n- `Ctrl + Shift + N`: Cria uma Nova Pasta\n- `Win + E`: Abre o Explorador de Arquivos\n- `F2`: Renomeia arquivo/pasta selecionada\n- `Shift + Delete`: Exclui arquivo permanentemente (sem mandar para a Lixeira)',
    bizu: '💡 Lixeira: Arquivos excluídos com `Delete` simples vão para a Lixeira. Com `Shift + Delete` são apagados direto!'
  },
  'android': {
    answer: 'No **Android 13 ou superior** (usado em pesquisas de campo), o foco do edital é a **Segurança e Permissões**:\n- Controle granular de privacidade para acesso à Câmera, Microfone e Localização (GPS).\n- Permissões específicas de fotos/vídeos e autorização prévia para notificações de aplicativos.',
    bizu: '💡 Android 13+: O usuário deve autorizar explicitamente cada permissão sensível de mídia e localização.'
  },
  'excel': {
    answer: 'Principais funções do **Microsoft Excel** no edital:\n- `=MÉDIA(A1:A3)`: Média Aritmética\n- `=MED(A1:A3)`: Mediana (Valor Central)\n- Sintaxe: Dois pontos `:` significa ATÉ. Ponto e vírgula `;` significa E.\n- O símbolo de cifrão `$` trava a referência (ex: `$A$1` não muda ao arrastar).',
    bizu: '💡 `=MÉDIA()` = Média Aritmética | `=MED()` = Mediana! Não confundir na prova.'
  },
  'word': {
    answer: 'Atalhos de formatação no **Microsoft Word em Português**:\n- `Ctrl + N`: NEGRITO\n- `Ctrl + I`: ITÁLICO\n- `Ctrl + S`: SUBLINHADO\n- `Ctrl + B`: SALVAR o documento',
    bizu: '💡 CUIDADO: `Ctrl + B` no Word PT-BR é para SALVAR (Bold é no inglês).'
  },
  'backup': {
    answer: 'Tipos de Backup de Segurança:\n- **Backup Completo (Full):** Copia 100% dos dados selecionados.\n- **Backup Incremental:** Copia apenas o que mudou desde o último backup de qualquer tipo.\n- **Backup Diferencial:** Copia o que mudou desde o último backup FULL.',
    bizu: '💡 FULL = Copia Tudo | INCREMENTAL = Copia alterado desde último backup | DIFERENCIAL = Copia alterado desde último FULL.'
  },
  'email': {
    answer: 'Campos de envio de Correio Eletrônico:\n- **Para:** Destinatário principal (Visível a todos).\n- **Cc (Com Cópia):** Destinatário secundário (Visível a todos).\n- **Cco (Com Cópia Oculta):** Recebe o e-mail sem revelar seu endereço para os demais.',
    bizu: '💡 Ninguém nos campos `Para` ou `Cc` consegue enxergar quem está no `Cco`.'
  },
  'mané': {
    answer: 'Para negar a condicional $P \\rightarrow Q$ ("Se P, então Q"), usa-se a **Regra do MANÉ**:\n1. **MA**ntém a primeira proposição ($P$).\n2. Troca o "Se...Então" pelo conectivo **E** ($\\land$).\n3. **NE**ga a segunda proposição ($\\neg Q$).',
    bizu: '💡 Negação de "Se estuda, passa" $\\rightarrow$ "Estuda E NÃO passa".'
  },
  'crase': {
    answer: 'Principais casos de **Crase Proibida** para a prova:\n1. Antes de **Verbos** (ex: "Passou a estudar").\n2. Antes de palavras **Masculinas** (ex: "Andar a pé").\n3. Antes de **Uma/Todas** (ex: "Chegou a uma conclusão").\n4. Entre palavras **Repetidas** (ex: "Dia a dia").',
    bizu: '💡 NUNCA use crase antes de verbo, palavra masculina ou expressão repetida!'
  }
};

export const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Olá! Sou o seu **Tutor IA Reta Final IBGE**. Estou 100% atualizado com o edital oficial de Noções de Informática (Windows 10/11, Android 13+, Word, Excel, Hardware, Backup, Redes), Português e Raciocínio Lógico!',
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

    setTimeout(() => {
      const queryLower = textToSend.toLowerCase();
      let matchKey = Object.keys(KNOWLEDGE_BASE).find(key => queryLower.includes(key));

      let aiText = '';
      let aiBizu: string | undefined = undefined;

      if (matchKey && KNOWLEDGE_BASE[matchKey]) {
        aiText = KNOWLEDGE_BASE[matchKey].answer;
        aiBizu = KNOWLEDGE_BASE[matchKey].bizu;
      } else if (queryLower.includes('hardware') || queryLower.includes('cpu')) {
        aiText = 'Conceitos de Hardware do Edital:\n- **CPU (Processador):** Executa os cálculos e instruções (Cérebro).\n- **Memória RAM:** Memória temporária volátil de trabalho.\n- **SSD / HD:** Armazenamento não volátil permanente.';
        aiBizu = '💡 Periféricos de Entrada: Teclado, Mouse, Scanner | Saída: Monitor comum, Impressora.';
      } else {
        aiText = `Para **"${textToSend}"**: no edital oficial de Noções de Informática, foque nos aspectos operacionais do **Windows 10/11**, permissões no **Android 13+**, fórmulas no **Excel**, formatação no **Word**, práticas de **Backup/Senhas** e regras de **Crase/Concordância**.`;
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
    }, 500);
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
              Perguntas e bizus 100% alinhados ao edital oficial do concurso.
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
