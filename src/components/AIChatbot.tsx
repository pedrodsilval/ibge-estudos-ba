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
  'Quais as regras de ouro da Crase (proibida, obrigatória e facultativa)?',
  'Quais os prazos da Lei 8.112 para posse e exercício?',
  'Qual a diferença entre CONSUNI, CONSEPE e Curadores da UFBA?',
  'Como funciona a Teoria das Três Idades na Arquivologia?',
  'Qual a diferença entre Vírus, Worm e Ransomware em Informática?',
  'Como interpretar a Curva ABC e a Classificação XYZ de materiais?',
  'Quais as modalidades de licitação da Lei 14.133/2021?',
  'Quais são os fechos oficiais segundo o Manual de Redação da PR?'
];

// Base de conhecimento calibrada com o Edital UFBA 2026 - Assistente em Administração
const KNOWLEDGE_BASE: Record<string, { answer: string; bizu?: string }> = {
  'crase': {
    answer: 'A **Crase** é a fusão da preposição "a" com o artigo definido feminino "a" (ou pronomes aquele/aquela/aquilo):\n\n1. **Regra de Troca Prática:** Troque a palavra feminina por uma masculina equivalente. Se virar "AO", tem crase! (Ex: Fui à praia ➔ Fui ao clube).\n2. **Casos Proibidos:** Antes de verbo ("disposto a lutar"), palavra masculina ("a pé", "a prazo"), pronomes de tratamento e indefinidos ("a ela", "a todos"), e entre palavras repetidas ("cara a cara").\n3. **Casos Facultativos (Mnemônico "Até Minha Maria"):**\n   - Após a preposição **Até**;\n   - Antes de pronome possessivo feminino singular (**Minha, tua, sua**);\n   - Antes de nome próprio feminino (**Maria, Paula**).',
    bizu: '💡 Decore: "Antes de verbo e masculino, crase é veneno! Se trocou por masculino e deu AO, crase no A sem medo!"'
  },
  'fecho': {
    answer: 'Segundo a **3ª edição do Manual de Redação da Presidência da República (2018)**, existem **APENAS DOIS FECHOS** em toda a correspondência oficial federal:\n\n1. **Respeitosamente,** ➔ Para autoridades de hierarquia SUPERIOR à do emissor (incluindo o Presidente da República).\n2. **Atenciosamente,** ➔ Para autoridades de MESMA hierarquia ou hierarquia INFERIOR, ou entre particulares.\n\n⚠️ Foram totalmente extintos fechos como "Cordialmente", "Saudações acadêmicas", "Sem mais para o momento", etc.',
    bizu: '💡 Hierarquia superior = Respeitosamente. Mesma hierarquia ou subordinado = Atenciosamente. Só existem esses dois!'
  },
  'manual': {
    answer: 'O **Manual de Redação da Presidência da República (3ª Edição)** unificou as comunicações federais:\n- **Padrão Ofício:** Substituiu e unificou o antigo Aviso, Memorando e Ofício sob uma única estrutura diagramada.\n- **Princípios Fundamentais:** Clareza, concisão, impessoalidade, formalidade e padronização.\n- **Pronomes de Tratamento:** Concordância gramatical SEMPRE em 3ª pessoa ("Vossa Excelência solicitou...", e nunca "solicitastes"). "Vossa Excelência" é reservado aos chefes dos 3 Poderes, ministros, governadores e reitores de universidades federais.',
    bizu: '💡 O pronome de tratamento é de 2ª pessoa, mas os verbos e pronomes possessivos vão SEMPRE para a 3ª pessoa!'
  },
  'posse': {
    answer: 'Na **Lei nº 8.112/1990** (Regime Jurídico dos Servidores Federais):\n- **Nomeação ➔ Posse:** Prazo improrrogável de **30 DIAS** contados da publicação oficial. Se não tomar posse, o ato de nomeação é tornado sem efeito!\n- **Posse ➔ Exercício:** Prazo de **15 DIAS** contados da posse. Se não entrar em exercício, o servidor é **EXONERADO**!\n\n⚠️ Atenção de prova: A posse pode ocorrer por procuração específica; o exercício exige presença física no cargo.',
    bizu: '💡 Linha do tempo: Nomeação ➔ [30 dias] ➔ Posse ➔ [15 dias] ➔ Exercício efetivo.'
  },
  '8112': {
    answer: 'Pontos mais cobrados da **Lei 8.112/1990** na UFBA:\n- **Formas de Provimento (Mnemônico PANRRRA):** Promoção, Aproveitamento, Nomeação (única originária!), Readaptação, Recondução, Reintegração e Reversão.\n- **Estabilidade:** Exige **3 anos de efetivo exercício** + aprovação em Avaliação Especial de Desempenho.\n- **Penalidades Disciplinares:** Advertência (prescreve em 180 dias), Suspensão de até 90 dias (prescreve em 2 anos) e Demissão/Cassação de aposentadoria (prescreve em 5 anos).',
    bizu: '💡 Demissão é punição disciplinar (perda do cargo por falta grave). Exoneração NÃO é punição (é mero desligamento a pedido ou de ofício)!'
  },
  'consuni': {
    answer: 'Estrutura máxima da **Universidade Federal da Bahia (UFBA)** conforme seu Estatuto e Regimento:\n\n1. **CONSUNI (Conselho Universitário):** É o **ÓRGÃO SUPREMO** e soberano de deliberação coletiva e supervisão geral da UFBA. Fixa a política universitária, diretrizes econômico-financeiras e alterações estatutárias.\n2. **CONSEPE (Conselho de Ensino, Pesquisa e Extensão):** Órgão superior de deliberação em matéria puramente **ACADÊMICA**, pedagógica e curricular.\n3. **Conselho de Curadores:** Órgão deliberativo e de fiscalização **ECONÔMICA E FINANCEIRA** (analisa contas, patrimônio e balanço anual).\n4. **Reitoria:** Órgão executivo superior administrado pelo Reitor.',
    bizu: '💡 Não confunda: CONSUNI = Política Geral e Deliberação Máxima. CONSEPE = Ensino, Pesquisa e Extensão. Curadores = Dinheiro e Fiscalização Contábil!'
  },
  'ufba': {
    answer: 'A **UFBA** é uma autarquia federal vinculada ao Ministério da Educação (MEC), dotada de autonomia didático-científica, administrativa e de gestão financeira e patrimonial (CF/88 Art. 207).\n- **Estrutura de topo:** Reitor e Vice-Reitor nomeados pelo Presidente da República a partir de lista tríplice.\n- **Órgãos Deliberativos Superiores:** CONSUNI (máximo), CONSEPE (acadêmico) e Conselho de Curadores (fiscalização financeira).',
    bizu: '💡 O CONSUNI é presidido pelo Reitor e reúne representação de professores, servidores técnico-administrativos e estudantes!'
  },
  'arquivologia': {
    answer: 'A **Teoria das Três Idades (Ciclo Vital dos Documentos)** é o coração da Arquivologia:\n\n1. **Arquivo Corrente (1ª Idade):** Documentos em tramitação, frequentemente consultados e de uso contínuo (fica no setor de trabalho imediato).\n2. **Arquivo Intermediário (2ª Idade):** Documentos que perderam a frequência de consulta, mas aguardam prazos prescricionais/jurídicos da Tabela de Temporalidade. Ficam em depósito central.\n3. **Arquivo Permanente ou Histórico (3ª Idade):** Documentos de valor histórico, cultural, probatório ou de pesquisa. **NUNCA PODEM SER ELIMINADOS!** São imprescritíveis e inalienáveis.',
    bizu: '💡 O descarte só acontece nas fases corrente ou intermediária, de acordo com a Tabela de Temporalidade. Documento de 3ª idade é ETERNO!'
  },
  'curva abc': {
    answer: 'A **Curva ABC (Princípio de Pareto ou Regra 80/20)** classifica estoques por valor financeiro investido:\n- **Classe A:** Poucos itens (~20% do total de itens), mas que concentram a maior parte do investimento financeiro (~80% do valor). Exigem controle diário e rigoroso!\n- **Classe B:** Itens intermediários (~30% dos itens e ~15% do valor financeiro).\n- **Classe C:** Grande quantidade de itens (~50% do total), mas com baixíssimo impacto financeiro (~5% do valor). Podem ter controles mais flexíveis.\n\n⚠️ Não confunda com a **Classificação XYZ**, que mede a **CRITICIDADE** (X = não crítico; Y = média criticidade; Z = vital cuja falta para a operação).',
    bizu: '💡 ABC mede VALOR FINANCEIRO (custo). XYZ mede CRITICIDADE (parada de operação).'
  },
  'podc': {
    answer: 'As **Funções Administrativas (Processo Organizacional - PODC)**:\n\n1. **Planejar:** Definir a missão, visão, objetivos e determinar os cursos de ação para o futuro.\n2. **Organizar:** Distribuir tarefas, autoridade e alocar recursos entre departamentos e cargos.\n3. **Dirigir (Liderar):** Coordenar, liderar, motivar e orientar as pessoas na execução diária.\n4. **Controlar:** Monitorar o desempenho atual, comparar com os padrões planejados e aplicar ações corretivas caso haja desvios.',
    bizu: '💡 Se a questão falar em "comparar o padrão com o executado e corrigir desvios", a resposta é SEMPRE a função CONTROLE!'
  },
  'licitacao': {
    answer: 'A **Nova Lei de Licitações (Lei nº 14.133/2021)** extinguiu Convite e Tomada de Preços. Agora existem **5 MODALIDADES OFICIAIS**:\n1. **Pregão:** Obrigatório para bens e serviços comuns (critério: menor preço ou maior desconto);\n2. **Concorrência:** Para contratações de grande complexidade técnica ou obras de engenharia;\n3. **Concurso:** Escolha de trabalho técnico, científico ou artístico (concessão de prêmio ou remuneração);\n4. **Leilão:** Alienação de bens móveis ou imóveis inservíveis (maior lance);\n5. **Diálogo Competitivo:** Inovação onde a administração dialoga previamente com licitantes para encontrar a solução técnica.',
    bizu: '💡 Licitação na Nova Lei = Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Convite e Tomada de Preços NÃO existem mais!'
  },
  'seguranca': {
    answer: 'Na **Segurança da Informação**, os 5 Princípios Básicos formam o mnemônico **CIDAL**:\n- **Confidencialidade:** Sigilo contra acesso não autorizado;\n- **Integridade:** Garantia de que a informação não foi alterada ou adulterada;\n- **Disponibilidade:** Informação acessível sempre que o usuário legítimo precisar;\n- **Autenticidade:** Garantia da identidade de quem enviou ou gerou a informação;\n- **Legalidade / Não Repúdio (Irretratabilidade):** O autor não pode negar a autoria da transação.',
    bizu: '💡 Guarde o CIDAL: Confidencialidade, Integridade, Disponibilidade, Autenticidade e Legalidade.'
  },
  'malware': {
    answer: 'Diferenças essenciais de **Ameaças Virtuais** para a prova:\n- **Vírus:** Precisa de um arquivo HOSPEDEIRO e de execução humana explícita para se propagar.\n- **Worm:** É autossuficiente e NÃO precisa de hospedeiro nem de ação do usuário; replica-se automaticamente pela rede explorando vulnerabilidades.\n- **Cavalo de Troia (Trojan):** Disfarça-se de programa útil (jogo, utilitário), mas carrega código malicioso em segundo plano.\n- **Ransomware:** Sequestra e CRIPTOGRAFA arquivos do disco, exigindo pagamento de resgate (geralmente em Bitcoin/criptomoedas).\n- **Spyware:** Programa espião que monitora atividades (keylogger captura teclas, screenlogger telas).',
    bizu: '💡 Worm anda sozinho na rede; Vírus pega carona em outro arquivo; Ransomware criptografa e cobra resgate!'
  },
  'excel': {
    answer: 'Pontos vitais de **Excel 365** em concursos:\n- **Cifrão `$ ` (Trava / Fixação):** `$A$1` fixa coluna e linha (absoluta). `$A1` fixa apenas a coluna A. `A$1` fixa apenas a linha 1.\n- **Função SE:** `=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)`.\n- **PROCV:** `=PROCV(valor_procurado; matriz_tabela; num_indice_coluna; [procurar_intervalo])`. Use `FALSO` ou `0` para correspondência EXATA!\n- Se arrastar a fórmula `=$A$1+B1` da linha 1 para a linha 2, vira `=$A$1+B2` (o `$A$1` não muda, mas B1 vira B2).',
    bizu: '💡 Onde tem cifrão `$`, fica congelado ao arrastar a alça de preenchimento!'
  },
  'etica': {
    answer: 'No **Decreto Federal nº 1.171/1994** (Código de Ética do Servidor Civil Federal):\n- **Penalidade Máxima da Comissão de Ética:** É EXCLUSIVAMENTE a pena de **CENSURA ÉTICA**. A comissão de ética NÃO pode demitir, suspender ou multar ninguém! Para punição grave, encaminha ao órgão disciplinar competente.\n- **Primados Maiores:** Dignidade, decoro, zelo, eficácia e consciência dos princípios morais.\n- A publicidade dos atos é a regra; o sigilo é exceção justificada por segurança da sociedade e do Estado.',
    bizu: '💡 Cai sempre em prova: Comissão de Ética só aplica a pena de CENSURA e nada mais!'
  }
};

export const AIChatbot: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Olá, Gilvania! Sou seu **Tutor Especialista no Concurso UFBA 2026** para o cargo de **Assistente em Administração (Classe D)**.\n\nEstou calibrado com todo o conteúdo programático do edital:\n- 🇧🇷 **Língua Portuguesa** (Crase, Concordância, Regência, Manual da Presidência 3ª ed.)\n- 💻 **Noções de Informática** (Excel 365, Segurança CIDAL, Malware, Backup)\n- 🏛️ **Administração Pública** (CF/88 Art. 37-41, Lei 8.112/90, Estatuto da UFBA, Lei 14.133, LAI/LGPD)\n- 📂 **Conhecimentos Específicos** (PODC, Gestão de Materiais / Curva ABC, Arquivologia 3 Idades, Atendimento ao Público)\n\nQual dúvida ou conceito você gostaria de revisar agora?',
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
      } else if (lower.includes('ufba') || lower.includes('estatuto') || lower.includes('reitor')) {
        aiResponseText = 'Sobre a organização interna da **UFBA**:\n- **CONSUNI:** Órgão deliberativo superior máximo da Universidade, responsável pelas diretrizes políticas e orçamentárias gerais.\n- **CONSEPE:** Responsável pelas diretrizes acadêmicas (ensino de graduação/pós, pesquisa e projetos de extensão).\n- **Conselho de Curadores:** Responsável pela fiscalização orçamentária, financeira e contábil do patrimônio da instituição.\n- **Reitoria:** Órgão executivo central chefiado pelo Reitor.';
        aiBizu = '💡 Lembre-se: O CONSUNI é o órgão superior máximo da UFBA!';
      } else {
        aiResponseText = `Excelente pergunta para o concurso da UFBA! Para o cargo de Assistente em Administração, recomendo focar nas 4 disciplinas fundamentais:\n- **Língua Portuguesa:** Crase (troca pelo masculino "AO"), concordância verbal com partícula "se", e Padrão Ofício do Manual da PR 3ª ed.\n- **Informática:** Fórmulas no Excel (cifrão $, PROCV exato com 0), malware (Ransomware vs Worm vs Trojan) e backup 3-2-1.\n- **Administração Pública:** Prazos da Lei 8.112 (posse 30d, exercício 15d) e os 3 conselhos da UFBA (CONSUNI, CONSEPE e Curadores).\n- **Específicas:** Teoria das 3 Idades na Arquivologia e Curva ABC na gestão de materiais.\n\nExperimente clicar em uma das perguntas rápidas acima ou digite palavras-chave como **crase**, **8112**, **consuni**, **fecho**, **curva abc** ou **arquivologia**!`;
        aiBizu = '💡 Dica: Pratique a redação oficial na aba "Redação & Discursivas" e faça simulados cronometrados!';
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiResponseText,
        bizu: aiBizu,
        timestamp: new Date().toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMsg]);
    }, 350);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6 animate-fadeIn">
      
      {/* CABEÇALHO */}
      <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl shadow-xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-3 bg-indigo-600/20 text-indigo-400 rounded-2xl border border-indigo-500/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              Tutor IA UFBA 2026
              <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                Assistente em Administração
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              Calibrado com o conteúdo programático oficial do Concurso da UFBA.
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
          <span>Tópicos de Maior Incidência no Edital UFBA:</span>
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
          placeholder="Pergunte sobre Crase, Fecho de Ofício, Lei 8.112, CONSUNI, Curva ABC, Arquivologia..."
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
