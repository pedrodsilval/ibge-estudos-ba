// BANCO DE QUESTÕES OFICIAIS CONCURSO UFBA 2026
// Cargo 201: Assistente em Administração (Classe D - Nível Médio)
// Candidata: Gilvania | Salvador - BA

import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  // =========================================================================
  // 1. LÍNGUA PORTUGUESA (UFBA) - 10 QUESTÕES
  // =========================================================================
  {
    id: 'ufba-port-01',
    subject: 'Língua Portuguesa',
    topic: 'Emprego do Sinal Indicativo de Crase',
    source: 'Banca Federal • Concurso IFBA / UFBA',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que o uso do acento grave indicativo de crase está empregado em estrita conformidade com a norma-padrão da Língua Portuguesa:',
    options: [
      { key: 'A', text: 'A comissão de concurso começará a receber os recursos a partir de amanhã.' },
      { key: 'B', text: 'O candidato solicitou à assistente em administração o comprovante de inscrição.' },
      { key: 'C', text: 'O reitor dirigiu-se à todas as pessoas presentes na congregação universitária.' },
      { key: 'D', text: 'A entrega dos diplomas aos formandos foi realizada passo à passo pelo cerimonial.' },
      { key: 'E', text: 'O documento foi redigido à lápis pelo servidor antes de ser digitado no sistema.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Na alternativa B, o verbo "solicitar" (bitransitivo: solicitar algo a alguém) rege a preposição "a", que se funde com o artigo definido feminino "a" de "assistente", resultando em crase obrigatória: solicitou "à assistente" (troca pelo masculino: solicitou "ao assistente").',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. "A partir de" nunca leva crase, pois "partir" é verbo no infinitivo.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Fusão da preposição "a" exigida por "solicitar" + artigo "a" de "assistente" (troca: solicitou AO assistente).' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Não ocorre crase diante do pronome indefinido "todas" e o "a" está no singular diante de plural.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Não ocorre crase entre palavras repetidas ("passo a passo").' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não ocorre crase diante de palavras masculinas ("a lápis").' }
      ],
      bizu: 'Troca pelo masculino: solicitou AO assistente -> no feminino leva crase (À assistente)!'
    }
  },
  {
    id: 'ufba-port-02',
    subject: 'Língua Portuguesa',
    topic: 'Concordância Verbal & Verbos Impessoais',
    source: 'Banca FGV / Concurso Federal',
    difficulty: 'Médio',
    statement: 'A respeito da concordância verbal, assinale a frase gramaticalmente CORRETA de acordo com a norma culta:',
    options: [
      { key: 'A', text: 'Haviam muitos candidatos aguardando o início da prova nos portões da UFBA.' },
      { key: 'B', text: 'Fazem dois meses que a comissão organizadora publicou o edital do certame.' },
      { key: 'C', text: 'Aluga-se salas para a realização de eventos acadêmicos no campus de Ondina.' },
      { key: 'D', text: 'Trata-se de processos administrativos que exigem parecer imediato da reitoria.' },
      { key: 'E', text: 'Mais de um servidor faltaram ao plantão no hospital universitário ontem.' }
    ],
    correctOption: 'D',
    explanation: {
      summary: 'O verbo "tratar-se" acompanhado da preposição "de" é Transitivo Indireto (VTI), tornando a partícula "se" um Índice de Indeterminação do Sujeito. Nessa estrutura, o verbo fica OBRIGATORIAMENTE no singular na 3ª pessoa: "Trata-se de processos".',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. O verbo HAVER no sentido de existir é impessoal e fica SEMPRE no singular: "Havia muitos candidatos".' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. O verbo FAZER indicando tempo decorrido é impessoal e fica no singular: "Faz dois meses".' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. "Alugar" é VTD + se apassivador. "Salas" é sujeito paciente plural, logo o verbo deve ir ao plural: "Alugam-se salas".' },
        { key: 'D', isCorrect: true, reason: 'Correto. VTI + se (índice de indeterminação do sujeito) mantém o verbo sempre no singular.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. A locução "mais de um" exige verbo no singular: "Mais de um servidor faltou" (só vai ao plural se indicar reciprocidade ou repetição).' }
      ],
      bizu: 'Haver (existir) e Fazer (tempo) = SEMPRE no singular! VTI + se = SEMPRE no singular!'
    }
  },
  {
    id: 'ufba-port-03',
    subject: 'Língua Portuguesa',
    topic: 'Redação Oficial: Fechos de Comunicações',
    source: 'Manual de Redação da PR (3ª ed.) • Banca Cebraspe',
    difficulty: 'Fácil',
    statement: 'De acordo com as normas estritas da 3ª edição do Manual de Redação da Presidência da República, o fecho adequado a ser empregado por um Assistente em Administração da UFBA ao remeter um ofício ao Magnífico Reitor da Universidade é:',
    options: [
      { key: 'A', text: 'Cordialmente,' },
      { key: 'B', text: 'Atenciosamente,' },
      { key: 'C', text: 'Respeitosamente,' },
      { key: 'D', text: 'Saudações acadêmicas,' },
      { key: 'E', text: 'Sem mais para o momento, renovo protestos de estima.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O Manual de Redação da Presidência da República padronizou apenas dois fechos: "Respeitosamente," para autoridades de hierarquia SUPERIOR à do emissor; e "Atenciosamente," para autoridades de mesma hierarquia ou inferior. Como o Reitor é autoridade de hierarquia superior, emprega-se "Respeitosamente,".',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. "Cordialmente" foi totalmente banido da redação oficial federal.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. "Atenciosamente" é para mesma hierarquia ou hierarquia inferior.' },
        { key: 'C', isCorrect: true, reason: 'Correto. "Respeitosamente," é o único fecho para autoridades de hierarquia superior.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Fórmulas personalizadas ou informais são expressamente vedadas.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Fórmulas rebuscadas e arcaicas foram eliminadas pelo princípio da concisão.' }
      ],
      bizu: 'Só existem dois fechos no Manual da PR: Respeitosamente (para superior) e Atenciosamente (para igual ou inferior)!'
    }
  },
  {
    id: 'ufba-port-04',
    subject: 'Língua Portuguesa',
    topic: 'Pronomes de Tratamento & Concordância Gramatical',
    source: 'Banca FCC • Redação Oficial Federal',
    difficulty: 'Médio',
    statement: 'Ao endereçar um documento oficial ao Reitor de uma Universidade Federal utilizando o pronome de tratamento "Vossa Excelência", a concordância gramatical dos verbos e pronomes possessivos associados deve ser feita:',
    options: [
      { key: 'A', text: 'Exclusivamente em segunda pessoa do singular (tu), por se tratar de pronome de tratamento direto.' },
      { key: 'B', text: 'Exclusivamente em segunda pessoa do plural (vós), em virtude do vocábulo "Vossa".' },
      { key: 'C', text: 'Obrigatoriamente em terceira pessoa (ele/seu/sua), mantendo a concordância de gênero com a pessoa tratada.' },
      { key: 'D', text: 'Em primeira pessoa do plural (nós), para garantir a impessoalidade da administração pública.' },
      { key: 'E', text: 'Indiferentemente em segunda ou terceira pessoa, à escolha discricionária do redator.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Embora os pronomes de tratamento façam referência à 2ª pessoa do discurso (com quem se fala), a concordância gramatical é feita SEMPRE na 3ª pessoa ("Vossa Excelência solicitou...", "sua proposta"). O adjetivo concorda com o sexo da pessoa (Vossa Excelência está ocupado / ocupada).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Não se usa 2ª pessoa (tu) com pronomes de tratamento.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Jamais se usa vós/vosso com pronomes de tratamento na redação oficial.' },
        { key: 'C', isCorrect: true, reason: 'Correto. Pronome de tratamento exige verbo e possessivo em 3ª pessoa e adjetivo conforme o gênero real.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. A 1ª pessoa do plural é usada em certas mensagens coletivas, não na regência do pronome.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não há discricionariedade; a regra gramatical é estrita e cogente.' }
      ],
      bizu: 'Vossa Excelência se dirige à 2ª pessoa, mas os verbos e possessivos vão SEMPRE para a 3ª pessoa!'
    }
  },
  {
    id: 'ufba-port-05',
    subject: 'Língua Portuguesa',
    topic: 'Regência Verbal: Aspirar, Visar e Assistir',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Difícil',
    statement: 'Assinale a opção que atende integralmente à regência verbal culta em um texto administrativo:',
    options: [
      { key: 'A', text: 'O servidor aspira ao cargo de chefe de divisão com grande empenho.' },
      { key: 'B', text: 'O candidato visava o preenchimento da vaga de Assistente em Administração.' },
      { key: 'C', text: 'O pró-reitor assistiu o filme institucional exibido no auditório principal.' },
      { key: 'D', text: 'O relatório implica em sanções disciplinares graves ao servidor faltoso.' },
      { key: 'E', text: 'Obedecer o regimento interno da UFBA é dever funcional de todos os colaboradores.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O verbo "aspirar" no sentido de "almejar, pretender" é Transitivo Indireto e exige a preposição "a": aspira AO cargo. Na alternativa B, visar (pretender) também exige "a" (visava ao preenchimento). Na C, assistir (ver) exige "a" (assistiu ao filme). Na D, implicar (acarretar) é VTD direto (não aceita "em"). Na E, obedecer exige preposição "a" (obedecer ao regimento).',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Correto. Aspirar (almejar) é VTI com preposição "a": aspira ao cargo.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Visar (almejar) rege preposição "a": visava AO preenchimento.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Assistir (presenciar) rege preposição "a": assistiu AO filme.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Implicar (ter como consequência) é VTD: implica sanções (sem preposição "em").' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Obedecer exige preposição "a": obedecer AO regimento interno.' }
      ],
      bizu: 'Aspirar e Visar (almejar) = VTI com A! Assistir (ver) = VTI com A! Implicar (acarretar) = VTD puro sem "em"!'
    }
  },
  {
    id: 'ufba-port-06',
    subject: 'Língua Portuguesa',
    topic: 'Pontuação: Emprego da Vírgula',
    source: 'Banca IBFC / Concurso Universitário',
    difficulty: 'Médio',
    statement: 'Assinale o período em que a vírgula foi empregada em DESACORDO com as normas gramaticais da língua padrão:',
    options: [
      { key: 'A', text: 'No início do semestre letivo, os calouros participam da semana de acolhimento.' },
      { key: 'B', text: 'O Assistente em Administração, conferiu todos os formulários antes do arquivamento.' },
      { key: 'C', text: 'A UFBA, que foi fundada em 1946, é uma das maiores universidades do país.' },
      { key: 'D', text: 'A comissão analisou os recursos, mas não encontrou inconsistências nos gabaritos.' },
      { key: 'E', text: 'Salvador, 20 de dezembro de 2026.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'É expressamente proibido separar o sujeito de seu predicado por vírgula, independentemente da extensão do sujeito. Em "O Assistente em Administração, conferiu...", a vírgula separa indevidamente o sujeito do verbo.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Pontuação correta: adjunto adverbial de tempo deslocado ("No início do semestre letivo,") com vírgula correta.' },
        { key: 'B', isCorrect: true, reason: 'Erro crasso de pontuação: separou o sujeito ("O Assistente em Administração") do verbo ("conferiu").' },
        { key: 'C', isCorrect: false, reason: 'Pontuação correta: oração subordinada adjetiva explicativa isolada entre vírgulas.' },
        { key: 'D', isCorrect: false, reason: 'Pontuação correta: conjunção adversativa "mas" antecedida por vírgula.' },
        { key: 'E', isCorrect: false, reason: 'Pontuação correta: vírgula separando o topônimo da datação oficial.' }
      ],
      bizu: 'Regra de ouro número 1 da pontuação: NUNCA separe sujeito do verbo por vírgula!'
    }
  },
  {
    id: 'ufba-port-07',
    subject: 'Língua Portuguesa',
    topic: 'Coesão Textual: Anáfora, Catáfora e Conectores',
    source: 'Banca Cebraspe / Concurso Federal',
    difficulty: 'Médio',
    statement: 'Considere a frase: "A reitoria estabeleceu novas diretrizes orçamentárias. Isto surpreendeu os diretores das faculdades." O elemento coesivo em destaque (Isto) classifica-se como:',
    options: [
      { key: 'A', text: 'Catáfora, pois antecipa uma informação que ainda será desenvolvida no texto.' },
      { key: 'B', text: 'Anáfora, embora devesse ter sido grafado "Isso" para retomar fato já mencionado anteriormente.' },
      { key: 'C', text: 'Elipse, pois omite um termo facilmente subentendido pelo contexto institucional.' },
      { key: 'D', text: 'Hipônimo, por estabelecer uma relação de sentido específico para genérico.' },
      { key: 'E', text: 'Metonímia, por substituir a causa pelo efeito imediato.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Para retomar uma ideia ou oração inteira já expressa anteriormente (função anafórica), a norma culta prescreve o uso de "isso" / "esse". O pronome "isto" / "este" possui função catafórica (aponta para frente) ou faz referência ao que está presente no momento da fala.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Catáfora aponta para o que vem depois; no exemplo, a ação já foi mencionada na oração anterior.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Trata-se de referência a termo pretérito (anáfora), em que a norma prescreve o uso de "isso".' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Elipse é o apagamento de um termo, não uma substituição pronominal.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Hiponímia é relação semântica lexical (ex: maçã para fruta), não pronominal.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Metonímia é figura de linguagem de transposição de significado.' }
      ],
      bizu: 'ISSO retoma o que já passou (passado/anáfora). ISTO anuncia o que vai ser dito (futuro/catáfora)!'
    }
  },
  {
    id: 'ufba-port-08',
    subject: 'Língua Portuguesa',
    topic: 'Tipologia Textual & Atos Normativos',
    source: 'Banca FGV / Concurso Federal',
    difficulty: 'Fácil',
    statement: 'Um documento da UFBA que contém instruções passo a passo para os estudantes realizarem a matrícula semestral no portal acadêmico, estruturado predominantemente com verbos no imperativo ("acesse", "preencha", "anexe", "confirme"), enquadra-se tipologicamente como texto:',
    options: [
      { key: 'A', text: 'Narrativo.' },
      { key: 'B', text: 'Descritivo.' },
      { key: 'C', text: 'Dissertativo-argumentativo.' },
      { key: 'D', text: 'Injuntivo (instrucional).' },
      { key: 'E', text: 'Poético-expressivo.' }
    ],
    correctOption: 'D',
    explanation: {
      summary: 'O texto injuntivo (ou instrucional) caracteriza-se por orientar, instruir ou prescrever ações e comportamentos do interlocutor, empregando verbos no imperativo ou no infinitivo com valor imperativo (manuais, editais de instruções, receitas, tutoriais de sistemas).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Textos narrativos relatam sequência de fatos no tempo com personagens e enredo.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Textos descritivos retratam características de objetos, ambientes ou pessoas de forma estática.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Textos dissertativo-argumentativos defendem tese com argumentos lógicos.' },
        { key: 'D', isCorrect: true, reason: 'Correto. A injunção guia e instrui procedimentos com verbos de comando e orientação.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. O texto poético possui função estética da linguagem, alheia a atos administrativos.' }
      ],
      bizu: 'Mandou, instruiu, ensinou a fazer (receita, edital, manual de matrícula) = Texto INJUNTIVO!'
    }
  },
  {
    id: 'ufba-port-09',
    subject: 'Língua Portuguesa',
    topic: 'Colocação Pronominal: Próclise Obrigatória',
    source: 'Banca FCC / Concurso Federal',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que a colocação do pronome oblíquo átono atende rigorosamente às regras de colocação pronominal:',
    options: [
      { key: 'A', text: 'Não informaram-me sobre o cancelamento da reunião do departamento.' },
      { key: 'B', text: 'Em tratando-se de verbas públicas federais, o rigor contábil é indispensável.' },
      { key: 'C', text: 'Me disseram que o resultado do concurso sairá em janeiro de 2027.' },
      { key: 'D', text: 'O edital que se publicou ontem trouxe novidades no cronograma.' },
      { key: 'E', text: 'O reitor posicionou-se favorável, nunca calando-se diante dos desafios.' }
    ],
    correctOption: 'D',
    explanation: {
      summary: 'O pronome relativo "que" é palavra atrativa de PRÓCLISE obrigatória ("que se publicou"). Na A, palavra negativa ("Não") atrai próclise obrigatória (Não me informaram). Na B, a locução "Em + gerúndio" exige próclise (Em se tratando). Na C, é vedado iniciar oração com pronome oblíquo átono (Disseram-me). Na E, a palavra negativa "nunca" exige próclise (nunca se calando).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Palavra negativa atrai próclise: "Não me informaram".' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Em + gerúndio exige próclise: "Em se tratando".' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Nunca se inicia período com pronome átono: "Disseram-me".' },
        { key: 'D', isCorrect: true, reason: 'Correto. O pronome relativo "que" atrai obrigatoriamente o pronome oblíquo átono (próclise).' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Palavra negativa "nunca" atrai próclise: "nunca se calando".' }
      ],
      bizu: 'Palavras que atraem próclise: Negativas (não, nunca), Pronomes Relativos (que, quem), Conjunções Subordinativas e Em + Gerúndio!'
    }
  },
  {
    id: 'ufba-port-10',
    subject: 'Língua Portuguesa',
    topic: 'Padrão Ofício: Diagramação e Elementos Oficiais',
    source: 'Manual de Redação da PR (3ª ed.)',
    difficulty: 'Fácil',
    statement: 'Na estrutura padronizada do Padrão Ofício, conforme preconiza o Manual de Redação da Presidência da República, o campo destinado à identificação do signatário (quem assina o documento) deve conter:',
    options: [
      { key: 'A', text: 'Linha pontilhada para assinatura, nome completo em caixa alta, e-mail institucional e CPF.' },
      { key: 'B', text: 'Espaço para assinatura, nome do signatário e cargo ocupado, sem linha para assinatura sobreposta.' },
      { key: 'C', text: 'Apenas a rubrica digital, sendo expressamente proibido citar o cargo para preservar a impessoalidade.' },
      { key: 'D', text: 'Nome em caixa alta e o número da portaria de nomeação no Diário Oficial da União.' },
      { key: 'E', text: 'Assinatura por extenso seguida unicamente do número de matrícula SIAPE.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'De acordo com o Manual da PR, a identificação do signatário é composta por: espaço para assinatura, nome do signatário em letras maiúsculas/minúsculas padrão e o cargo. Não se deve utilizar linha tracejada ou pontilhada acima do nome!',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. O Manual condena expressamente o uso de linhas para assinar sobre o nome.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Espaço limpo para assinatura + Nome + Cargo (sem linha pontilhada).' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Citar o cargo é elemento obrigatório da autoria administrativa.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Não se exige portaria de nomeação no fecho do documento.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. O nome e o cargo são obrigatórios; matrícula SIAPE não substitui o cargo.' }
      ],
      bizu: 'Identificação do signatário no padrão ofício: Nome + Cargo. Nada de traço ou pontilhado em cima do nome!'
    }
  },

  // =========================================================================
  // 2. NOÇÕES DE INFORMÁTICA (UFBA) - 10 QUESTÕES
  // =========================================================================
  {
    id: 'ufba-info-01',
    subject: 'Noções de Informática',
    topic: 'Segurança da Informação: Engenharia Social & Ransomware',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Médio',
    statement: 'Um Assistente em Administração da UFBA recebe um e-mail com logotipo institucional falso, informando sobre uma suposta pendência cadastral no contracheque e solicitando que o servidor clique em um link para "regularizar a senha do portal". Ao clicar, o computador tem seus arquivos bloqueados com uma extensão estranha e surge uma tela exigindo pagamento em criptomoedas para liberação dos dados. Os dois conceitos de segurança envolvidos são, respectivamente:',
    options: [
      { key: 'A', text: 'Phishing e Ransomware.' },
      { key: 'B', text: 'Spyware e Adware.' },
      { key: 'C', text: 'Worm e Trojan Downloader.' },
      { key: 'D', text: 'DDoS e Keylogger.' },
      { key: 'E', text: 'Spoofing e Rootkit.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O golpe do e-mail falso para induzir a vítima a clicar em links maliciosos e entregar credenciais chama-se Phishing (engenharia social). O sequestro de arquivos por meio de criptografia forte com cobrança de resgate é denominado Ransomware.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Correto. Phishing (isca por e-mail falso) + Ransomware (sequestro de dados mediante criptografia e cobrança de resgate).' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Spyware espiona silenciosamente; Adware exibe propagandas invasivas.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Worm se propaga pela rede sem hospedeiro.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. DDoS é negação de serviço para derrubar servidores; Keylogger grava teclas digitadas.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Rootkit mascara a presença de intrusos no sistema operacional.' }
      ],
      bizu: 'E-mail falso que pesca dados = PHISHING. Criptografou arquivos e cobrou resgate = RANSOMWARE!'
    }
  },
  {
    id: 'ufba-info-02',
    subject: 'Noções de Informática',
    topic: 'Microsoft Excel 365: Fórmulas & Referências Absolutas',
    source: 'Banca Quadrix / Concurso Federal',
    difficulty: 'Médio',
    statement: 'No Microsoft Excel 365, a célula A1 contém o valor 100 e a célula B1 contém o valor 5. Na célula C1 foi inserida a fórmula "=$A$1+B1". Se o usuário copiar a célula C1 e colá-la na célula C2, a fórmula resultante em C2 e o valor exibido (considerando que B2 contém o valor 20) serão, respectivamente:',
    options: [
      { key: 'A', text: '="=$A$2+B2" e o valor 120.' },
      { key: 'B', text: '="=$A$1+B2" e o valor 120.' },
      { key: 'C', text: '="=$A$1+B1" e o valor 105.' },
      { key: 'D', text: '="=A2+B2" e o valor 20.' },
      { key: 'E', text: '="=$B$2+C2" e o erro #REF!.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O caractere cifrão ($) fixa referências na fórmula. Como "$A$1" possui cifrão antes da coluna e antes da linha, trata-se de uma referência absoluta (não se altera ao colar). Já "B1" é referência relativa; ao descer uma linha (de C1 para C2), B1 vira B2. Logo, a fórmula vira "=$A$1+B2". Como A1=100 e B2=20, o resultado é 120.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. O cifrão travou a linha 1 do A, logo não vira $A$2.' },
        { key: 'B', isCorrect: true, reason: 'Correto. $A$1 permanece congelado e B1 incrementa uma linha virando B2. Cálculo: 100 + 20 = 120.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. B1 é relativo e muda para B2 ao descer a linha.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. O cifrão não desaparece na cópia.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não ocorre erro de referência nessa operação.' }
      ],
      bizu: 'Tem cifrão ($) na frente? Congela e não muda nunca ao arrastar ou copiar!'
    }
  },
  {
    id: 'ufba-info-03',
    subject: 'Noções de Informática',
    topic: 'Excel 365: Função PROCV & Correspondência Exata',
    source: 'Banca FCC / Concurso Federal',
    difficulty: 'Difícil',
    statement: 'Para localizar com precisão o salário de um servidor da UFBA a partir do seu número de matrícula SIAPE em uma planilha de cadastro, o Assistente em Administração utiliza a função PROCV. Qual argumento deve ser colocado como quarto parâmetro da função para garantir uma busca EXATA (e não aproximada)?',
    options: [
      { key: 'A', text: 'VERDADEIRO (ou omitido).' },
      { key: 'B', text: 'FALSO (ou o número 0).' },
      { key: 'C', text: 'O valor numérico 1.' },
      { key: 'D', text: '"EXATO".' },
      { key: 'E', text: 'O caractere asterisco (*).' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A sintaxe da função é: =PROCV(valor_procurado; matriz_tabela; num_indice_coluna; [procurar_intervalo]). O quarto argumento define o tipo de busca: VERDADEIRO (ou 1) busca correspondência aproximada; FALSO (ou 0) busca correspondência EXATA. Se omitido, o Excel adota VERDADEIRO por padrão!',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. VERDADEIRO realiza busca aproximada e exige tabela ordenada.' },
        { key: 'B', isCorrect: true, reason: 'Correto. FALSO ou 0 força o Excel a encontrar o valor idêntico (busca exata).' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. O valor 1 é equivalente a VERDADEIRO (aproximada).' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. O argumento aceita apenas valores booleanos (VERDADEIRO/FALSO) ou numéricos (1/0).' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Asterisco é caractere curinga, não argumento booleano.' }
      ],
      bizu: 'PROCV para cadastro, matrícula ou CPF: quarto argumento SEMPRE FALSO ou 0 para não puxar dado errado!'
    }
  },
  {
    id: 'ufba-info-04',
    subject: 'Noções de Informática',
    topic: 'Malware: Vírus vs Worm',
    source: 'Banca Cebraspe / Concurso Federal',
    difficulty: 'Médio',
    statement: 'A principal característica técnica que diferencia um Worm (verme virtual) de um Vírus de computador tradicional é que o Worm:',
    options: [
      { key: 'A', text: 'Necessita obrigatoriamente de um arquivo hospedeiro e da execução explícita do usuário para se propagar.' },
      { key: 'B', text: 'É autorreplicável e propaga-se de forma autônoma pelas redes de computadores, explorando falhas sem precisar de hospedeiro.' },
      { key: 'C', text: 'Apenas exibe anúncios publicitários na tela sem causar lentidão de conexão.' },
      { key: 'D', text: 'Opera exclusivamente em celulares e tablets, sendo inofensivo a redes institucionais de computadores.' },
      { key: 'E', text: 'Substitui a BIOS da máquina tornando o hardware inutilizável de forma irreversível.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O Vírus é dependente: precisa infectar um arquivo existente (hospedeiro) e precisa que o usuário o execute. O Worm é independente e autossuficiente: não precisa de hospedeiro nem de ação do usuário, propagando-se automaticamente pela rede ao explorar vulnerabilidades de sistemas.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Essa é a definição clássica de VÍRUS, não de Worm.' },
        { key: 'B', isCorrect: true, reason: 'Correto. O Worm é autônomo, não precisa de hospedeiro e se multiplica sozinho pela rede.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Essa é a descrição de Adware.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Worms afetam servidores, redes e estações de trabalho de grande porte.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Danos físicos em BIOS costumam ser associados a malwares específicos do tipo wipers.' }
      ],
      bizu: 'Vírus = precisa de carona (hospedeiro) e de clique. Worm = viaja sozinho na rede sem precisar de ninguém!'
    }
  },
  {
    id: 'ufba-info-05',
    subject: 'Noções de Informática',
    topic: 'Princípios Básicos da Segurança da Informação (CIDAL)',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Fácil',
    statement: 'Garantir que um memorando eletrônico da UFBA não sofra nenhuma alteração, adulteração ou corrupção indevida desde o momento em que foi assinado digitalmente até a sua recepção final atende prioritariamente ao princípio da:',
    options: [
      { key: 'A', text: 'Confidencialidade.' },
      { key: 'B', text: 'Integridade.' },
      { key: 'C', text: 'Disponibilidade.' },
      { key: 'D', text: 'Interoperabilidade.' },
      { key: 'E', text: 'Elasticidade.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Integridade assegura que a informação não foi modificada, corrompida ou fraudada em seu armazenamento ou transmissão. A Confidencialidade garante sigilo; a Disponibilidade garante acesso aos autorizados.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Confidencialidade diz respeito a sigilo e proteção contra visualização não autorizada.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Integridade é a garantia de que o dado está completo, exato e não foi adulterado.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Disponibilidade garante que o sistema esteja no ar quando necessário.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Interoperabilidade é a capacidade de sistemas conversarem entre si.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Elasticidade é característica de computação em nuvem.' }
      ],
      bizu: 'Informação não foi alterada nem adulterada = INTEGRIDADE! Ninguém fofoqueiro leu = CONFIDENCIALIDADE!'
    }
  },
  {
    id: 'ufba-info-06',
    subject: 'Noções de Informática',
    topic: 'Rotinas de Backup: Estratégia 3-2-1',
    source: 'Banca IBFC / Concurso Federal',
    difficulty: 'Médio',
    statement: 'A estratégia de segurança para rotinas de cópias de segurança (backup) amplamente recomendada para órgãos públicos, conhecida como Regra 3-2-1, preconiza que a organização deve manter:',
    options: [
      { key: 'A', text: '3 dias de backup por semana, em 2 computadores diferentes, com 1 funcionário responsável.' },
      { key: 'B', text: '3 senhas mestras, renovadas a cada 2 meses, com 1 chave física criptográfica.' },
      { key: 'C', text: '3 cópias dos dados (1 original + 2 backups), em 2 tipos diferentes de mídias, com 1 cópia armazenada fora do local (offsite/nuvem).' },
      { key: 'D', text: '3 antivírus instalados simultaneamente na máquina, em 2 partições, com 1 firewall de hardware.' },
      { key: 'E', text: '3 backups completos por dia, em 2 pen drives, com 1 cópia impressa em papel.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'A regra 3-2-1 de backup é o padrão-ouro de segurança de dados: manter 3 cópias dos dados (o original e 2 backups); armazenar em 2 tipos diferentes de suportes/mídias (ex: storage local e fita/SSD); e manter 1 cópia fora das instalações da instituição (em nuvem ou data center secundário).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Não se refere a dias da semana nem a funcionários.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Não é regra de gestão de senhas.' },
        { key: 'C', isCorrect: true, reason: 'Correto. 3 cópias, 2 mídias diferentes, 1 cópia offsite (fora do prédio).' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Instalar mais de um antivírus na mesma máquina causa conflitos graves.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Pen drive não é mídia recomendada para política institucional de backup.' }
      ],
      bizu: 'Regra 3-2-1: 3 cópias de tudo, em 2 mídias distintas, com 1 cópia fora do prédio (nuvem)!'
    }
  },
  {
    id: 'ufba-info-07',
    subject: 'Noções de Informática',
    topic: 'Navegação Segura & Protocolo HTTPS',
    source: 'Banca Quadrix / Concurso Federal',
    difficulty: 'Fácil',
    statement: 'Ao acessar o sistema acadêmico da UFBA pelo Google Chrome, o Assistente em Administração visualiza na barra de endereços o prefixo "https://" acompanhado de um ícone de cadeado. Isso indica tecnicamente que:',
    options: [
      { key: 'A', text: 'O site está livre de qualquer vírus e o computador não pode ser infectado por malwares ao baixar arquivos.' },
      { key: 'B', text: 'A comunicação entre o navegador do usuário e o servidor web é criptografada (SSL/TLS), impedindo a interceptação dos dados em texto claro.' },
      { key: 'C', text: 'O acesso à internet está sendo fornecido diretamente pelo provedor governamental sem uso de roteador.' },
      { key: 'D', text: 'O usuário está autenticado com privilégios de administrador supremo do sistema universitário.' },
      { key: 'E', text: 'Todas as páginas daquele site foram auditadas e aprovadas pelo Comitê Gestor da Internet no Brasil.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O HTTPS (Hypertext Transfer Protocol Secure) combina o HTTP com o protocolo de criptografia TLS/SSL. Ele garante canal seguro e criptografado de comunicação; no entanto, NÃO garante que o site seja honesto ou que arquivos baixados não contenham vírus.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. HTTPS apenas criptografa a viagem dos dados; sites fraudulentos ou maliciosos também podem usar HTTPS.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Criptografia em trânsito impede que terceiros na rede leiam senhas ou dados enviados.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Não tem relação com o tipo de provedor ou infraestrutura de rede.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Cadeado do navegador não indica privilégio de usuário em sistemas.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Certificados digitais são emitidos por autoridades certificadoras privadas ou públicas.' }
      ],
      bizu: 'HTTPS = tráfego criptografado e seguro contra escutas. Mas cuidado: site com HTTPS também pode ser falso/golpe!'
    }
  },
  {
    id: 'ufba-info-08',
    subject: 'Noções de Informática',
    topic: 'Windows 10/11: Atalhos e Gerenciador de Tarefas',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Médio',
    statement: 'Em um computador com sistema operacional Windows 10, o atalho de teclado que permite abrir DIRETAMENTE o Gerenciador de Tarefas para finalizar um programa travado, sem passar por menus intermediários, é:',
    options: [
      { key: 'A', text: 'Ctrl + Alt + Del' },
      { key: 'B', text: 'Ctrl + Shift + Esc' },
      { key: 'C', text: 'Windows + R' },
      { key: 'D', text: 'Alt + F4' },
      { key: 'E', text: 'Windows + Pause/Break' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O atalho "Ctrl + Shift + Esc" abre o Gerenciador de Tarefas de forma IMEDIATA e direta. O famoso "Ctrl + Alt + Del" abre uma tela de segurança intermediária com opções como Bloquear, Trocar Usuário, Sair e Gerenciador de Tarefas.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Abre tela de opções de segurança do Windows, não o gerenciador direto.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Ctrl + Shift + Esc abre instantaneamente o Gerenciador de Tarefas.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Windows + R abre a caixa de diálogo "Executar".' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Alt + F4 fecha a janela ativa.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Windows + Pause/Break abre as propriedades do sistema.' }
      ],
      bizu: 'Pegadinha clássica: Gerenciador de Tarefas DIRETO é Ctrl + Shift + Esc! (Ctrl + Alt + Del abre tela azul de opções).'
    }
  },
  {
    id: 'ufba-info-09',
    subject: 'Noções de Informática',
    topic: 'Ferramentas de Proteção: Firewall de Rede',
    source: 'Banca FCC / Concurso Federal',
    difficulty: 'Médio',
    statement: 'A respeito do funcionamento de um Firewall em um ambiente de rede corporativa, é CORRETO afirmar:',
    options: [
      { key: 'A', text: 'Sua função principal é varrer o disco rígido para desinfectar arquivos que já contenham vírus.' },
      { key: 'B', text: 'Atua como barreira de segurança que monitora e filtra o tráfego de dados de entrada e saída, bloqueando conexões não autorizadas com base em regras pré-definidas.' },
      { key: 'C', text: 'Substitui integralmente a necessidade de programas antivírus e de rotinas de backup.' },
      { key: 'D', text: 'Serve unicamente para aumentar a velocidade da conexão de banda larga da instituição.' },
      { key: 'E', text: 'Impede a ocorrência de spams nas caixas de correio eletrônico dos servidores.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O Firewall (parede de fogo) pode ser de software ou hardware. Sua missão é controlar e filtrar o tráfego de portas e pacotes de rede entre a rede interna e a internet. Ele NÃO é antivírus, não escaneia arquivos em busca de pragas internas e não substitui backups.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Varrer disco e eliminar vírus é papel exclusivo do Antivírus.' },
        { key: 'B', isCorrect: true, reason: 'Correto. O Firewall atua como porteiro da rede, filtrando tráfego e bloqueando portas não autorizadas.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Antivírus, backup e firewall são complementares.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. O firewall inspeciona pacotes e não acelera conexão.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Filtragem de spam é função de filtros antispam específicos de e-mail.' }
      ],
      bizu: 'Firewall é o porteiro da rede (controla quem entra e sai pelas portas). Antivírus é o médico (cura e elimina infecções nos arquivos)!'
    }
  },
  {
    id: 'ufba-info-10',
    subject: 'Noções de Informática',
    topic: 'Computação em Nuvem: Modelos de Serviço',
    source: 'Banca Cebraspe / Concurso Federal',
    difficulty: 'Médio',
    statement: 'Quando a UFBA disponibiliza aos servidores o pacote Microsoft Office 365 ou Google Workspace acessados diretamente pela internet através do navegador, sem necessidade de instalar programas ou gerenciar servidores locais, a universidade está utilizando o modelo de computação em nuvem denominado:',
    options: [
      { key: 'A', text: 'IaaS (Infraestrutura como Serviço).' },
      { key: 'B', text: 'PaaS (Plataforma como Serviço).' },
      { key: 'C', text: 'SaaS (Software como Serviço).' },
      { key: 'D', text: 'DaaS (Dados como Serviço).' },
      { key: 'E', text: 'BaaS (Backup como Serviço).' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'No modelo SaaS (Software as a Service), o usuário consome o aplicativo final pronto pela web (ex: Gmail, Office 365, Trello, Google Drive). No PaaS, o foco é em ambiente de desenvolvimento (ex: banco de dados gerenciado). No IaaS, contratam-se máquinas virtuais e servidores puros (ex: AWS EC2).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. IaaS entrega servidores brutos, armazenamento e redes virtuais.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. PaaS entrega plataformas de execução para desenvolvedores criarem sistemas.' },
        { key: 'C', isCorrect: true, reason: 'Correto. SaaS entrega o software final pronto para uso pelo usuário comum pelo navegador.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. DaaS não é a categoria padrão para suítes de escritório.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. BaaS refere-se a cópias de segurança em nuvem.' }
      ],
      bizu: 'Usuário usando programa final pronto no navegador (Gmail, Office 365) = SaaS (Software as a Service)!'
    }
  },

  // =========================================================================
  // 3. ADMINISTRAÇÃO PÚBLICA (UFBA) - 11 QUESTÕES
  // =========================================================================
  {
    id: 'ufba-adm-01',
    subject: 'Administração Pública',
    topic: 'Lei nº 8.112/1990: Prazos de Posse e Exercício',
    source: 'Banca Federal • Regime Jurídico Único',
    difficulty: 'Fácil',
    statement: 'Nos termos expressos da Lei nº 8.112/1990, a posse em cargo público federal ocorrerá no prazo de até quantos dias contados da publicação do ato de provimento (nomeação), e o início do efetivo exercício em até quantos dias contados da posse?',
    options: [
      { key: 'A', text: '15 dias para a posse e 15 dias para o exercício.' },
      { key: 'B', text: '30 dias para a posse e 15 dias para o exercício.' },
      { key: 'C', text: '30 dias para a posse e 30 dias para o exercício.' },
      { key: 'D', text: '15 dias para a posse e 30 dias para o exercício.' },
      { key: 'E', text: '45 dias para a posse e 10 dias para o exercício.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Segundo os Arts. 13 e 15 da Lei 8.112/90: A posse dar-se-á no prazo de 30 (trinta) dias contados da publicação do ato de provimento. É de 15 (quinze) dias o prazo para o servidor empossado entrar em exercício, contados da data da posse.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. A posse tem prazo de 30 dias, e não de 15.' },
        { key: 'B', isCorrect: true, reason: 'Correto. 30 dias para tomar posse; 15 dias para entrar em exercício.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. O exercício tem prazo de 15 dias, e não de 30.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Inverteu a ordem dos prazos.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não existem prazos de 45 ou 10 dias para essas fases.' }
      ],
      bizu: 'Nomeação -> [30 dias] -> Posse -> [15 dias] -> Exercício! Não tomou posse: sem efeito. Não entrou em exercício: exonerado!'
    }
  },
  {
    id: 'ufba-adm-02',
    subject: 'Administração Pública',
    topic: 'Estatuto da UFBA: Conselho Universitário (CONSUNI)',
    source: 'Estatuto e Regimento Geral da UFBA • Art. 12',
    difficulty: 'Médio',
    statement: 'De acordo com o Estatuto da Universidade Federal da Bahia, qual é o ÓRGÃO MÁXIMO de deliberação coletiva e supervisão geral da universidade, competente para fixar a política universitária, diretrizes econômico-financeiras e aprovar alterações estatutárias?',
    options: [
      { key: 'A', text: 'Conselho de Ensino, Pesquisa e Extensão (CONSEPE).' },
      { key: 'B', text: 'Conselho de Curadores.' },
      { key: 'C', text: 'Conselho Universitário (CONSUNI).' },
      { key: 'D', text: 'Gabinete do Reitor.' },
      { key: 'E', text: 'Assembleia Geral dos Servidores.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O CONSUNI (Conselho Universitário) é o órgão supremo e soberano de deliberação coletiva da UFBA, presidido pelo Reitor. O CONSEPE trata de assuntos acadêmicos; o Conselho de Curadores fiscaliza o patrimônio financeiro.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. O CONSEPE é superior apenas nas matérias didático-científicas e de extensão.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. O Conselho de Curadores é órgão de fiscalização financeira e patrimonial.' },
        { key: 'C', isCorrect: true, reason: 'Correto. O CONSUNI é o órgão de deliberação máxima e de supervisão geral da UFBA.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. A Reitoria é órgão executivo de administração, não o órgão colegiado máximo.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não é órgão com assento formal deliberativo estatutário de cúpula.' }
      ],
      bizu: 'Órgão supremo de deliberação máxima da UFBA = CONSUNI!'
    }
  },
  {
    id: 'ufba-adm-03',
    subject: 'Administração Pública',
    topic: 'Estatuto da UFBA: Competências do CONSEPE e Curadores',
    source: 'Estatuto e Regimento Geral da UFBA',
    difficulty: 'Médio',
    statement: 'No âmbito da UFBA, compete privativamente ao Conselho de Ensino, Pesquisa e Extensão (CONSEPE) e ao Conselho de Curadores, respectivamente:',
    options: [
      { key: 'A', text: 'Administrar as finanças da Reitoria E nomear os diretores de institutos.' },
      { key: 'B', text: 'Deliberar sobre matérias estritamente acadêmicas, curriculares e de extensão E fiscalizar a gestão econômica, financeira e patrimonial da universidade.' },
      { key: 'C', text: 'Promover sindicâncias disciplinares E julgar recursos trabalhistas de professores terceirizados.' },
      { key: 'D', text: 'Aprovar o Estatuto da instituição E definir a lista tríplice para escolha do Reitor.' },
      { key: 'E', text: 'Gerenciar os restaurantes universitários E organizar o vestibular e o SiSU.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A divisão tripartite superior da UFBA é clara: 1. CONSUNI (órgão supremo de política geral); 2. CONSEPE (órgão superior para ensino, pesquisa, currículo e extensão); 3. Conselho de Curadores (órgão superior de fiscalização orçamentária, financeira e contábil).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Administração financeira diária cabe à Pró-Reitoria de Administração e Planejamento.' },
        { key: 'B', isCorrect: true, reason: 'Correto. CONSEPE = Ensino, Pesquisa e Extensão. Conselho de Curadores = Fiscalização Econômica e Patrimonial.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Processos disciplinares cabem a comissões sindicantes e à corregedoria.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Aprovação de estatuto e lista tríplice são atribuições do CONSUNI.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Gestão de restaurantes cabe à PROAE (Pró-Reitoria de Ações Afirmativas e Assistência Estudantil).' }
      ],
      bizu: 'CONSEPE = Vida Acadêmica (Ensino/Pesquisa/Extensão). Curadores = Dinheiro e Patrimônio (Contábil/Financeiro)!'
    }
  },
  {
    id: 'ufba-adm-04',
    subject: 'Administração Pública',
    topic: 'Constituição Federal de 1988: Princípios do LIMPE (Art. 37)',
    source: 'CF/88 Art. 37, caput • Banca Federal',
    difficulty: 'Fácil',
    statement: 'A publicidade dos atos, programas, obras e campanhas dos órgãos públicos federais, conforme o § 1º do Art. 37 da CF/88, deve possuir caráter educativo, informativo ou de orientação social, não podendo conter nomes, símbolos ou imagens que caracterizem promoção pessoal de autoridades ou servidores. Esse mandamento decorre diretamente da conjunção dos princípios da:',
    options: [
      { key: 'A', text: 'Eficiência e Razoabilidade.' },
      { key: 'B', text: 'Impessoalidade e Moralidade.' },
      { key: 'C', text: 'Autotutela e Continuidade.' },
      { key: 'D', text: 'Supremacia do Interesse Público e Motivação.' },
      { key: 'E', text: 'Segurança Jurídica e Ampla Defesa.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A proibição de utilizar publicidade oficial para auto-elogio e promoção de agentes públicos é a manifestação direta do princípio da IMPESSOALIDADE (a atuação é do órgão público, não da pessoa física) conjugado com a MORALIDADE administrativa.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Eficiência diz respeito ao rendimento, celeridade e produtividade com menores custos.' },
        { key: 'B', isCorrect: true, reason: 'Correto. A vedação à promoção pessoal é o núcleo da Impessoalidade e da Moralidade pública.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Autotutela é o poder da administração anular seus atos ilegais ou revogar os inoportunos.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Supremacia estabelece prerrogativas públicas sobre o particular.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Segurança jurídica protege a estabilidade das relações no tempo.' }
      ],
      bizu: 'Proibido fazer propaganda pessoal com dinheiro público = Princípio da IMPESSOALIDADE!'
    }
  },
  {
    id: 'ufba-adm-05',
    subject: 'Administração Pública',
    topic: 'CF/88 Art. 37: Acumulação Remunerada de Cargos Públicos',
    source: 'CF/88 Art. 37, XVI • Banca Cebraspe',
    difficulty: 'Médio',
    statement: 'A regra geral na Administração Pública brasileira é a proibição de acumulação remunerada de cargos públicos. No entanto, a CF/88 elenca exceções taxativas quando houver compatibilidade de horários. Um Assistente em Administração da UFBA (cargo técnico de nível médio) poderá acumular legitimamente seu cargo com:',
    options: [
      { key: 'A', text: 'Outro cargo técnico de Assistente em Administração em outra autarquia federal.' },
      { key: 'B', text: 'Um cargo de Professor, se houver compatibilidade de horários comprovada.' },
      { key: 'C', text: 'Dois outros cargos de natureza exclusivamente administrativa.' },
      { key: 'D', text: 'Qualquer cargo em comissão no setor privado que pague honorários superiores.' },
      { key: 'E', text: 'Um cargo privativo de médico com jornada de 40 horas semanais sobreposta.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Constituição Federal (Art. 37, XVI) autoriza a acumulação de apenas: a) dois cargos de professor; b) um cargo de professor com outro técnico ou científico; c) dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas. Como Assistente em Administração é cargo técnico, ele só pode acumular com UM de professor.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. É vedada a acumulação de dois cargos puramente técnicos ou administrativos.' },
        { key: 'B', isCorrect: true, reason: 'Correto. A CF/88 permite expressamente a acumulação de 1 cargo de professor com 1 cargo técnico/científico.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Não se pode acumular dois cargos administrativos.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. A dedicação integral ao serviço público veda gestão de empresas privadas incompatíveis.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Além de exigir profissão regulamentada de saúde, a sobreposição de horários anula qualquer acumulação.' }
      ],
      bizu: 'As 3 únicas acumulações permitidas na CF/88: 1. Prof + Prof; 2. Prof + Técnico; 3. Saúde + Saúde (sempre com horários compatíveis)!'
    }
  },
  {
    id: 'ufba-adm-06',
    subject: 'Administração Pública',
    topic: 'Lei nº 8.112/1990: Formas de Provimento (PANRRRA)',
    source: 'Lei nº 8.112/1990 Art. 8º',
    difficulty: 'Médio',
    statement: 'Nos termos da Lei nº 8.112/1990, são formas de provimento de cargo público federal, EXCETO:',
    options: [
      { key: 'A', text: 'Nomeação.' },
      { key: 'B', text: 'Recondução.' },
      { key: 'C', text: 'Readaptação.' },
      { key: 'D', text: 'Transferência.' },
      { key: 'E', text: 'Aproveitamento.' }
    ],
    correctOption: 'D',
    explanation: {
      summary: 'O Art. 8º da Lei 8.112/90 traz as formas de provimento (Mnemônico PANRRRA: Promoção, Aproveitamento, Nomeação, Readaptação, Recondução, Reintegração, Reversão). A "Transferência" e a "Ascensão" funcional foram declaradas INCONSTITUCIONAIS pelo STF (Súmula Vinculante 43) e revogadas.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'É provimento (a única forma originária).' },
        { key: 'B', isCorrect: false, reason: 'É provimento (retorno do servidor estável ao cargo anterior após reprovação em estágio probatório).' },
        { key: 'C', isCorrect: false, reason: 'É provimento (investidura em cargo compatível com limitação física ou mental sofrida).' },
        { key: 'D', isCorrect: true, reason: 'NÃO é mais forma de provimento. Transferência foi extinta e banida por violar o concurso público.' },
        { key: 'E', isCorrect: false, reason: 'É provimento (retorno do servidor em disponibilidade ao serviço ativo).' }
      ],
      bizu: 'Mnemônico do Provimento: PANRRRA (Promoção, Aproveitamento, Nomeação, Readaptação, Recondução, Reintegração, Reversão). Transferência e Ascensão NÃO existem mais!'
    }
  },
  {
    id: 'ufba-adm-07',
    subject: 'Administração Pública',
    topic: 'Lei nº 8.112/1990: Regime Disciplinar & Prescrição',
    source: 'Lei nº 8.112/1990 Art. 142',
    difficulty: 'Difícil',
    statement: 'A ação disciplinar contra um servidor público federal prescreverá em prazos diferenciados a depender da gravidade da pena aplicável. Segundo a Lei nº 8.112/1990, as infrações puníveis com DEMISSÃO, SUSPENSÃO e ADVERTÊNCIA prescrevem, respectivamente, em:',
    options: [
      { key: 'A', text: '5 anos, 2 anos e 180 dias.' },
      { key: 'B', text: '10 anos, 5 anos e 1 ano.' },
      { key: 'C', text: '5 anos, 3 anos e 1 ano.' },
      { key: 'D', text: '2 anos, 1 ano e 90 dias.' },
      { key: 'E', text: 'Imprescritíveis em qualquer hipótese.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O Art. 142 da Lei 8.112/90 determina que a ação disciplinar prescreverá: I - em 5 (cinco) anos, quanto às infrações puníveis com demissão, cassação de aposentadoria ou disponibilidade e destituição de cargo em comissão; II - em 2 (dois) anos, quanto à suspensão; III - em 180 (cento e oitenta) dias, quanto à advertência.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Correto. 5 anos (demissão/cassação), 2 anos (suspensão), 180 dias (advertência).' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Prazos muito superiores aos da lei.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. A suspensão prescreve em 2 anos e a advertência em 180 dias.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Valores inferiores e sem respaldo no Art. 142.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. O poder disciplinar da Administração é sujeito à prescrição extintiva.' }
      ],
      bizu: 'Prescrição Disciplinar: Demissão = 5 anos | Suspensão = 2 anos | Advertência = 180 dias!'
    }
  },
  {
    id: 'ufba-adm-08',
    subject: 'Administração Pública',
    topic: 'Ética no Serviço Público Federal (Decreto nº 1.171/1994)',
    source: 'Decreto nº 1.171/1994 • Código de Ética Profissional',
    difficulty: 'Fácil',
    statement: 'A Comissão de Ética instituída em uma autarquia federal como a UFBA, encarregada de orientar e aconselhar sobre a ética profissional do servidor, pode aplicar a penalidade de:',
    options: [
      { key: 'A', text: 'Demissão a bem do serviço público.' },
      { key: 'B', text: 'Suspensão de até 30 dias sem remuneração.' },
      { key: 'C', text: 'Censura, sendo esta a sua única sanção aplicável.' },
      { key: 'D', text: 'Multa pecuniária de até 2 salários mínimos.' },
      { key: 'E', text: 'Destituição de cargo em comissão e perda de direitos políticos.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Nos termos do Capítulo II, item XXII, do Decreto nº 1.171/1994: "A pena aplicável ao servidor público pela Comissão de Ética é a de CENSURA e sua fundamentação constará do respectivo parecer, assinado por todos os seus integrantes". A comissão de ética NÃO aplica advertência, suspensão ou demissão.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Demissão é penalidade disciplinar da autoridade instauradora de PAD.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Suspensão é penalidade disciplinar da Lei 8.112.' },
        { key: 'C', isCorrect: true, reason: 'Correto. A única penalidade que uma Comissão de Ética do Dec. 1.171/94 pode aplicar é a CENSURA.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Não existe previsão de multa pelo Código de Ética.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Perda de direitos políticos exige decisão judicial transitada em julgado em ação de improbidade.' }
      ],
      bizu: 'Cai em toda prova de universidade: Comissão de Ética do Dec. 1.171/94 SÓ APLICA CENSURA e mais nada!'
    }
  },
  {
    id: 'ufba-adm-09',
    subject: 'Administração Pública',
    topic: 'Nova Lei de Licitações (Lei nº 14.133/2021)',
    source: 'Lei nº 14.133/2021 Art. 28',
    difficulty: 'Médio',
    statement: 'Com a entrada em vigor definitiva da Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), duas modalidades clássicas da legislação anterior (Lei 8.666/93) deixaram de existir. As modalidades EXTINTAS foram:',
    options: [
      { key: 'A', text: 'Pregão e Concorrência.' },
      { key: 'B', text: 'Tomada de Preços e Convite.' },
      { key: 'C', text: 'Concurso e Leilão.' },
      { key: 'D', text: 'Diálogo Competitivo e RDC.' },
      { key: 'E', text: 'Pregão Eletrônico e Consulta.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Lei nº 14.133/2021 extinguiu as modalidades "Tomada de Preços" e "Convite". As 5 modalidades atuais expressas no Art. 28 são: Pregão, Concorrência, Concurso, Leilão e a novidade do Diálogo Competitivo.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Pregão e Concorrência continuam existindo com grande destaque.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Tomada de Preços e Carta Convite foram extintas do direito administrativo brasileiro.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Concurso e Leilão permanecem vigentes na nova lei.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Diálogo Competitivo foi criado pela Nova Lei de Licitações.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. O pregão segue sendo a modalidade prioritária para bens e serviços comuns.' }
      ],
      bizu: 'Na Nova Lei de Licitações (14.133): Adeus a Convite e Tomada de Preços! As 5 oficiais são: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo!'
    }
  },
  {
    id: 'ufba-adm-10',
    subject: 'Administração Pública',
    topic: 'Lei de Acesso à Informação (LAI - Lei nº 12.527/2011)',
    source: 'Lei nº 12.527/2011 • Transparência Ativa e Passiva',
    difficulty: 'Fácil',
    statement: 'Na Lei de Acesso à Informação (LAI), a disponibilização obrigatória e rotineira, em sítio oficial da internet, de dados institucionais, repasses financeiros, despesas, licitações e remuneração de servidores, INDEPENDENTEMENTE de requerimento prévio de qualquer cidadão, caracteriza a:',
    options: [
      { key: 'A', text: 'Transparência passiva.' },
      { key: 'B', text: 'Transparência ativa.' },
      { key: 'C', text: 'Reserva de jurisdição.' },
      { key: 'D', text: 'Informação ultrassecreta.' },
      { key: 'E', text: 'Sigilo procedimental.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Transparência Ativa é a obrigação legal do órgão público divulgar espontaneamente as informações de interesse geral em seu portal (Portal da Transparência da UFBA). Já a Transparência Passiva é quando o órgão responde a um pedido formal específico feito pelo cidadão (SIC).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Transparência passiva ocorre quando o cidadão solicita e a administração responde.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Divulgação proativa e contínua no site sem ninguém pedir = Transparência Ativa.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Reserva de jurisdição é competência de atos exclusivos de magistrados.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Dados públicos comuns não possuem grau de classificação sigilosa.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. A publicidade é o preceito geral; o sigilo é a exceção estrita.' }
      ],
      bizu: 'Divulgou no site sem ninguém pedir = Transparência ATIVA! O cidadão pediu pelo protocolo e o órgão respondeu = Transparência PASSIVA!'
    }
  },
  {
    id: 'ufba-adm-11',
    subject: 'Administração Pública',
    topic: 'Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)',
    source: 'LGPD Art. 5º • Dados Pessoais Sensíveis',
    difficulty: 'Médio',
    statement: 'De acordo com a Lei Geral de Proteção de Dados Pessoais (LGPD - Lei nº 13.709/2018), são considerados DADOS PESSOAIS SENSÍVEIS aqueles relativos a:',
    options: [
      { key: 'A', text: 'Nome completo, CPF e endereço residencial.' },
      { key: 'B', text: 'E-mail funcional, número de telefone corporativo e cargo público ocupado.' },
      { key: 'C', text: 'Origem racial ou étnica, convicção religiosa, opinião política, dado genético ou biométrico e dados referentes à saúde ou vida sexual.' },
      { key: 'D', text: 'Número do cartão de transporte municipal e data de expedição da carteira de trabalho.' },
      { key: 'E', text: 'Valor da remuneração bruta mensal publicado em transparência pública.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'A LGPD (Art. 5º, II) traz um rol fechado de Dados Pessoais Sensíveis, que exigem tratamento e proteção redobrada: dados sobre origem racial/étnica, convicção religiosa, opinião política, filiação a sindicato ou organização religiosa/filosófica/política, dado referente à saúde ou à vida sexual, dado genético ou biométrico.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Nome, CPF e endereço são dados pessoais comuns, não sensíveis.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Dados cadastrais funcionais são comuns e públicos.' },
        { key: 'C', isCorrect: true, reason: 'Correto. É o rol legal expresso do Art. 5º, II da LGPD.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Não compõem a categoria de sensibilidade discriminatória.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Remuneração de servidores públicos é de transparência pública obrigatória.' }
      ],
      bizu: 'Dado Sensível na LGPD: crença, etnia, política, saúde, biometria e vida sexual (dados que podem gerar discriminação)!'
    }
  },

  // =========================================================================
  // 4. CONHECIMENTOS ESPECÍFICOS (ASSISTENTE EM ADMINISTRAÇÃO) - 11 QUESTÕES
  // =========================================================================
  {
    id: 'ufba-esp-01',
    subject: 'Conhecimentos Específicos',
    topic: 'Arquivologia: Teoria das Três Idades (Ciclo Vital)',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Fácil',
    statement: 'Na gestão de documentos arquivísticos universitários, os documentos que perderam o valor administrativo e probatório imediato, mas que devem ser preservados definitivamente em razão de seu valor histórico, probatório, científico ou cultural, compõem a fase denominada:',
    options: [
      { key: 'A', text: 'Arquivo Corrente (1ª Idade).' },
      { key: 'B', text: 'Arquivo Intermediário (2ª Idade).' },
      { key: 'C', text: 'Arquivo Permanente ou Histórico (3ª Idade).' },
      { key: 'D', text: 'Arquivo Temporário de Expurgos.' },
      { key: 'E', text: 'Arquivo de Protocolo Setorial.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'A Teoria das Três Idades divide os arquivos em: 1ª Idade (Corrente: consulta frequente, vigência administrativa); 2ª Idade (Intermediário: consulta esporádica, aguarda prazos prescricionais); e 3ª Idade (Permanente: guarda perpétua e definitiva pelo valor histórico/cultural). Os documentos permanentes NUNCA podem ser eliminados!',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Arquivo corrente guarda documentos em tramitação e de uso constante.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Arquivo intermediário guarda documentos que aguardam destinação final (eliminação ou recolhimento).' },
        { key: 'C', isCorrect: true, reason: 'Correto. O arquivo permanente ou histórico é definitivo, inalienável e imprescritível (guarda perpétua).' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Não existe essa denominação na arquivística técnica.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Protocolo é unidade de recebimento e tramitação corrente.' }
      ],
      bizu: 'Regra de ouro: Documento de 3ª Idade (Permanente) NUNCA é jogado fora nem eliminado! A guarda é perpétua!'
    }
  },
  {
    id: 'ufba-esp-02',
    subject: 'Conhecimentos Específicos',
    topic: 'Administração de Materiais: Curva ABC (Princípio de Pareto)',
    source: 'Banca FGV / Concurso Federal',
    difficulty: 'Médio',
    statement: 'No almoxarifado central da UFBA, o Assistente em Administração aplica a metodologia da Curva ABC para classificar os itens em estoque. A respeito dos itens classificados como CLASSE A, é correto afirmar:',
    options: [
      { key: 'A', text: 'Representam a maior quantidade física de itens estocados (cerca de 80%), porém com baixo valor financeiro investido (cerca de 20%).' },
      { key: 'B', text: 'Representam um pequeno percentual da quantidade física de itens (cerca de 20%), mas concentram a maior parte do investimento financeiro (cerca de 80%).' },
      { key: 'C', text: 'São materiais sem nenhuma importância operacional que devem ser doados ou descartados imediatamente.' },
      { key: 'D', text: 'Demandam controle flexível e dispensam a realização de inventários periódicos.' },
      { key: 'E', text: 'São itens com valor intermediário tanto em quantidade física quanto em valor monetário.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Curva ABC baseia-se no Princípio de Pareto (80/20): Classe A = pouca quantidade de itens (~20%), mas altíssimo valor financeiro acumulado (~80%), exigindo controle diário e rigoroso; Classe B = intermediários (~30% itens e ~15% valor); Classe C = muitos itens (~50%), mas de baixíssimo impacto financeiro (~5%).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Essa descrição corresponde à Classe C (muitos itens e pouco valor).' },
        { key: 'B', isCorrect: true, reason: 'Correto. Classe A concentra a maior fatia financeira (~80%) em poucos itens (~20%).' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. São os itens mais caros e valiosos do estoque.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Exigem o controle mais rigoroso e prioritário de todos.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Essa descrição corresponde à Classe B.' }
      ],
      bizu: 'Curva ABC: Classe A = 20% das peças, 80% do dinheiro! Controle rigoroso e inventário frequente!'
    }
  },
  {
    id: 'ufba-esp-03',
    subject: 'Conhecimentos Específicos',
    topic: 'Administração de Materiais: Classificação XYZ (Criticidade)',
    source: 'Banca IBFC / Concurso Universitário',
    difficulty: 'Médio',
    statement: 'Enquanto a Curva ABC avalia o valor monetário dos estoques, a Classificação XYZ avalia a CRITICIDADE do material. Um medicamento vital utilizado no Hospital Universitário da UFBA cuja falta paralisa cirurgias imediatas e que não possui substituto direto no mercado classifica-se como:',
    options: [
      { key: 'A', text: 'Classe X.' },
      { key: 'B', text: 'Classe Y.' },
      { key: 'C', text: 'Classe Z.' },
      { key: 'D', text: 'Classe W.' },
      { key: 'E', text: 'Classe Alfa.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Na Classificação de Criticidade XYZ: Classe X = materiais não críticos, de fácil obtenção e cuja falta não interrompe a operação; Classe Y = materiais com grau moderado de criticidade; Classe Z = materiais vitais, cuja falta provoca a paralisação de atividades essenciais e que não possuem substitutos fáceis.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Classe X reúne materiais não críticos (ex: clips, papel comum).' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Classe Y reúne criticidade intermediária.' },
        { key: 'C', isCorrect: true, reason: 'Correto. Classe Z é a de máxima criticidade: sua falta paralisa a instituição e não há substitutos.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. A classificação técnica adota apenas as letras X, Y e Z.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não existe essa nomenclatura técnica.' }
      ],
      bizu: 'ABC = Dinheiro (Custo). XYZ = Criticidade (Parada da operação). Classe Z = Vital, se faltar para tudo!'
    }
  },
  {
    id: 'ufba-esp-04',
    subject: 'Conhecimentos Específicos',
    topic: 'Funções Administrativas (PODC): A Função Controle',
    source: 'Banca Cebraspe / Concurso Federal',
    difficulty: 'Fácil',
    statement: 'No âmbito da Teoria Geral da Administração, o processo administrativo compõe-se de quatro funções clássicas (Planejar, Organizar, Dirigir e Controlar). A função administrativa que tem por objetivo monitorar as atividades realizadas, comparar o desempenho executado com os padrões previamente estabelecidos e adotar medidas corretivas quando necessário é o:',
    options: [
      { key: 'A', text: 'Planejamento.' },
      { key: 'B', text: 'Direção.' },
      { key: 'C', text: 'Controle.' },
      { key: 'D', text: 'Organização.' },
      { key: 'E', text: 'Comando.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'As funções do PODC são: Planejar (definir objetivos e rumos); Organizar (distribuir recursos e autoridade); Dirigir (liderar e coordenar pessoas); e Controlar (medir o desempenho, comparar com o padrão e aplicar correções).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Planejamento define objetivos, metas e estratégias futuras.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Direção lidera, motiva e orienta as equipes na execução diária.' },
        { key: 'C', isCorrect: true, reason: 'Correto. O Controle mede o executado, compara com a meta e corrige os desvios.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Organização divide o trabalho e distribui responsabilidades.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Comando é termo fayolista antigo substituído por Direção.' }
      ],
      bizu: 'Falou em "medir desempenho, comparar com padrão e corrigir desvios" = FUNÇÃO CONTROLE!'
    }
  },
  {
    id: 'ufba-esp-05',
    subject: 'Conhecimentos Específicos',
    topic: 'Níveis de Planejamento: Estratégico, Tático e Operacional',
    source: 'Banca FGV / Concurso Federal',
    difficulty: 'Médio',
    statement: 'O Plano de Desenvolvimento Institucional (PDI) da UFBA estabelece os objetivos e metas globais da universidade para um horizonte de 5 a 10 anos, englobando a instituição como um todo e sendo deliberado pela cúpula máxima (CONSUNI). Esse plano enquadra-se no nível de planejamento:',
    options: [
      { key: 'A', text: 'Operacional, focado em tarefas do dia a dia.' },
      { key: 'B', text: 'Estratégico, com foco no longo prazo e visão sistêmica global.' },
      { key: 'C', text: 'Tático, restrito ao âmbito de um único departamento.' },
      { key: 'D', text: 'Contingencial, voltado apenas a crises imediatas.' },
      { key: 'E', text: 'Orçamentário mensal.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Os 3 níveis de planejamento são: 1. Estratégico (longo prazo, alta cúpula, abrange a instituição inteira, ambiente externo/macro); 2. Tático (médio prazo, nível gerencial/departamental, conecta as unidades); 3. Operacional (curto prazo, chão de fábrica, rotinas e tarefas imediatas).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Operacional é de curto prazo e focado em atividades imediatas.' },
        { key: 'B', isCorrect: true, reason: 'Correto. O PDI é o planejamento estratégico maior da universidade (longo prazo e macro).' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Tático é setorial (ex: plano da pró-reitoria de pesquisa).' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Contingencial é plano de reserva para imprevistos.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Planejamento orçamentário mensal é de nível operacional.' }
      ],
      bizu: 'Estratégico = Cúpula, longo prazo e a organização inteira! Tático = Departamentos e médio prazo! Operacional = Tarefas do dia a dia e curto prazo!'
    }
  },
  {
    id: 'ufba-esp-06',
    subject: 'Conhecimentos Específicos',
    topic: 'Arquivologia: Método Alfabético & Regras de Alfabetação',
    source: 'Banca Quadrix / Concurso Federal',
    difficulty: 'Médio',
    statement: 'Na organização alfabética dos prontuários de servidores da UFBA pelo Método Alfabético convencional, como deve ser arquivado o nome do servidor "João Paulo da Silva Sobrinho"?',
    options: [
      { key: 'A', text: 'Silva Sobrinho, João Paulo da.' },
      { key: 'B', text: 'Sobrinho, João Paulo da Silva.' },
      { key: 'C', text: 'João Paulo da Silva Sobrinho.' },
      { key: 'D', text: 'Da Silva, João Paulo Sobrinho.' },
      { key: 'E', text: 'Silva, João Paulo da (Sobrinho).' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'Pelas regras oficiais de alfabetação arquivística: sobrenomes acompanhados de palavras que indicam parentesco (Filho, Júnior, Neto, Sobrinho) não são separados do sobrenome anterior que os precede! Assim, "Silva Sobrinho" vai junto para a frente como cabeça de entrada: "Silva Sobrinho, João Paulo da".',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Correto. O grau de parentesco (Sobrinho) atrai o sobrenome anterior (Silva Sobrinho).' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. "Sobrinho" sozinho não pode ser a cabeça de entrada.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. No método alfabético, a entrada é pelo sobrenome da família, não pelo prenome.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Partículas como "da", "de" não iniciam a entrada.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não se usa parênteses para parentescos na alfabetação técnica.' }
      ],
      bizu: 'Júnior, Filho, Neto e Sobrinho NÃO ficam sozinhos! Eles puxam o sobrenome anterior junto: Silva Sobrinho, João Paulo da!'
    }
  },
  {
    id: 'ufba-esp-07',
    subject: 'Conhecimentos Específicos',
    topic: 'Gestão de Estoques: Ponto de Pedido & Estoque Mínimo',
    source: 'Banca IBFC / Concurso Universitário',
    difficulty: 'Difícil',
    statement: 'Em um almoxarifado universitário, o consumo médio diário de papel A4 é de 10 resmas e o tempo de reposição do fornecedor contratado é de 5 dias úteis. Para evitar riscos de desabastecimento em caso de atrasos na entrega, a chefia fixou um Estoque de Segurança (Estoque Mínimo) de 20 resmas. O PONTO DE PEDIDO (momento em que o assistente deve emitir novo pedido de compras) ocorre quando o estoque atingir:',
    options: [
      { key: 'A', text: '30 resmas.' },
      { key: 'B', text: '50 resmas.' },
      { key: 'C', text: '70 resmas.' },
      { key: 'D', text: '100 resmas.' },
      { key: 'E', text: '25 resmas.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'A fórmula clássica do Ponto de Pedido (PP) é: PP = (Consumo Médio Diário x Tempo de Reposição) + Estoque de Segurança. Cálculo: (10 resmas/dia x 5 dias) + 20 resmas = 50 + 20 = 70 resmas. Ao atingir 70 resmas, o pedido deve ser disparado.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. 30 resmas não cobriria o consumo do tempo de reposição.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. 50 resmas é apenas o consumo de reposição, esquecendo o estoque de segurança.' },
        { key: 'C', isCorrect: true, reason: 'Correto. PP = (10 x 5) + 20 = 50 + 20 = 70 resmas.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Valor excessivo geraria custo de estocagem desnecessário.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Valor muito abaixo do limiar de segurança.' }
      ],
      bizu: 'Fórmula do Ponto de Pedido: PP = (Consumo x Prazo do Fornecedor) + Estoque de Segurança!'
    }
  },
  {
    id: 'ufba-esp-08',
    subject: 'Conhecimentos Específicos',
    topic: 'Gestão de Pessoas: Teorias Motivacionais (Maslow e Herzberg)',
    source: 'Banca Cebraspe / Concurso Federal',
    difficulty: 'Médio',
    statement: 'Na Teoria dos Dois Fatores de Frederick Herzberg, amplamente aplicada na gestão pública de pessoas, os fatores responsáveis por EVITAR a insatisfação no ambiente de trabalho (como salário regular, estabilidade no cargo, segurança física e condições de trabalho), mas que NÃO são capazes de gerar motivação plena duradoura por si sós, são denominados:',
    options: [
      { key: 'A', text: 'Fatores Motivacionais (ou intrínsecos).' },
      { key: 'B', text: 'Fatores Higiênicos (ou extrínsecos).' },
      { key: 'C', text: 'Fatores de Autorrealização.' },
      { key: 'D', text: 'Fatores Afetivos.' },
      { key: 'E', text: 'Fatores de Estima.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Herzberg separou: 1. Fatores Higiênicos (extrínsecos: salário, benefícios, ambiente, relações com chefia) — se ausentes causam insatisfação, mas se presentes apenas neutralizam a insatisfação (não motivam); 2. Fatores Motivacionais (intrínsecos: reconhecimento, autonomia, responsabilidade, crescimento profissional) — estes sim geram motivação profunda.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Fatores motivacionais são o reconhecimento e desafios do cargo.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Fatores higiênicos (salário, condições físicas) apenas evitam insatisfação.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Autorrealização é o topo da pirâmide de Maslow, não de Herzberg.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Fatores afetivos não compõem a teoria bifatorial.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Estima pertence à teoria das necessidades humanas de Maslow.' }
      ],
      bizu: 'Teoria de Herzberg: Salário e ar-condicionado = Higiênicos (só evitam queixa). Reconhecimento e crescimento = Motivacionais (dão vontade de produzir)!'
    }
  },
  {
    id: 'ufba-esp-09',
    subject: 'Conhecimentos Específicos',
    topic: 'Atendimento ao Público: Qualidade e Conduta no Serviço Público',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Fácil',
    statement: 'No atendimento ao público em uma secretaria acadêmica universitária, a atitude profissional do servidor que demonstra capacidade de se colocar no lugar do cidadão, compreendendo suas dificuldades e buscando atendê-lo com presteza, urbanidade e clareza, denomina-se:',
    options: [
      { key: 'A', text: 'Discricionariedade.' },
      { key: 'B', text: 'Empatia.' },
      { key: 'C', text: 'Impunidade.' },
      { key: 'D', text: 'Formalismo estrito.' },
      { key: 'E', text: 'Centralização.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A empatia é a competência interpessoal essencial no atendimento ao cidadão no serviço público: consiste na capacidade psicológica de se colocar no lugar do outro, compreendendo suas necessidades e viabilizando o atendimento com urbanidade e eficiência.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Discricionariedade é margem de escolha conferida por lei ao administrador.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Empatia é a capacidade de se colocar no lugar do outro com respeito e presteza.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Impunidade é falta de punição.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. O formalismo excessivo prejudica a celeridade e o acolhimento ao usuário.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Centralização diz respeito à concentração decisória no topo da estrutura.' }
      ],
      bizu: 'Colocar-se no lugar do usuário para resolver o problema com cortesia e presteza = EMPATIA!'
    }
  },
  {
    id: 'ufba-esp-10',
    subject: 'Conhecimentos Específicos',
    topic: 'Gestão de Documentos: Fases do Protocolo Universitário',
    source: 'Banca IBFC / Concurso Universitário',
    difficulty: 'Médio',
    statement: 'O setor de protocolo é a porta de entrada e controle das comunicações em uma instituição federal. A sequência lógica das operações técnicas básicas executadas pelo protocolo sobre uma correspondência externa oficial recebida é:',
    options: [
      { key: 'A', text: 'Eliminação, digitalização, microfilmagem e encadernação.' },
      { key: 'B', text: 'Recebimento, registro, autuação (quando couber), classificação e expedição/distribuição.' },
      { key: 'C', text: 'Guarda permanente imediata, descarte de cópias e avaliação histórica.' },
      { key: 'D', text: 'Arquivamento intermediário, remessa ao arquivo nacional e expurgo.' },
      { key: 'E', text: 'Publicação no Diário Oficial, emissão de nota fiscal e protocolo de saída.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'As atividades básicas do protocolo compreendem: 1. Recebimento (e conferência); 2. Registro (cadastramento no sistema); 3. Autuação (formação de processo administrativo com capa e número, quando for o caso); 4. Classificação (atribuição de código); e 5. Expedição/Distribuição ao setor competente.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. O protocolo não realiza eliminação sumária nem encadernação.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Trata-se do fluxo canônico das operações de protocolo na administração pública.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Documento novo recém-chegado não vai para arquivo permanente.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. O protocolo não opera fases do arquivo intermediário.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não cabe ao protocolo publicar atos no DOU.' }
      ],
      bizu: 'Ciclo do Protocolo: Recebe -> Registra -> Autua processo -> Classifica -> Distribui ao setor de destino!'
    }
  },
  {
    id: 'ufba-esp-11',
    subject: 'Conhecimentos Específicos',
    topic: 'Organização Administrativa: Descentralização vs Desconcentração',
    source: 'Direito Administrativo Federal • Banca Cebraspe',
    difficulty: 'Médio',
    statement: 'A Universidade Federal da Bahia (UFBA) é uma autarquia federal criada por lei, dotada de personalidade jurídica de direito público própria, patrimônio e receitas próprios para gerir o ensino superior público na Bahia. Sob a ótica da organização administrativa brasileira, a criação da UFBA pela União constitui um exemplo de:',
    options: [
      { key: 'A', text: 'Desconcentração administrativa, com a criação de órgãos subordinados sem personalidade jurídica própria.' },
      { key: 'B', text: 'Descentralização administrativa por serviços (ou outorga), integrando a Administração Pública Indireta.' },
      { key: 'C', text: 'Delegação contratual por concessão a uma entidade privada com fins lucrativos.' },
      { key: 'D', text: 'Desestatização e privatização com controle acionário do Ministério da Educação.' },
      { key: 'E', text: 'Centralização absoluta do Poder Executivo da União.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Descentralização ocorre quando o Estado transfere a titularidade e execução de um serviço para uma nova pessoa jurídica autônoma (autarquias, fundações, empresas públicas), integrando a Administração Indireta. Já a Desconcentração é a mera divisão interna de competências dentro da MESMA pessoa jurídica (criação de órgãos/departamentos). Como a UFBA tem personalidade jurídica própria de autarquia, é fruto de Descentralização.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Desconcentração cria órgãos internos (sem CNPJ próprio). A UFBA tem CNPJ e personalidade jurídica própria.' },
        { key: 'B', isCorrect: true, reason: 'Correto. A criação de autarquia como a UFBA é caso clássico de descentralização por outorga legal para a Administração Indireta.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. A UFBA é entidade pública e estatal, não privada concessionária.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Universidades federais são 100% públicas e gratuitas.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Centralização seria se a Presidência executasse as aulas diretamente.' }
      ],
      bizu: 'Mnemônico infalível: DesCOncentração = cria Órgãos (mesma pessoa jurídica). DesCENtralização = cria Entidades com CNPJ próprio (Autarquias, Fundações)!'
    }
  }
];
