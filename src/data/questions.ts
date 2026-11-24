// BANCO DE QUESTÕES OFICIAIS CONCURSO UFBA 2026
// Cargo 201: Assistente em Administração (Classe D - Nível Médio)
// Candidata: Gilvania | Salvador - BA

import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  // =========================================================================
  // 1. LÍNGUA PORTUGUESA (UFBA)
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
      bizu: 'VTI + SE = Verbo no SINGULAR obrigatório! "Haver" de existir e "Fazer" de tempo NUNCA vão para o plural!'
    }
  },
  {
    id: 'ufba-port-03',
    subject: 'Língua Portuguesa',
    topic: 'Redação Oficial (Manual da Presidência 3ª ed.)',
    source: 'Concurso UFBA • Manual de Redação da PR',
    difficulty: 'Fácil',
    statement: 'De acordo com as normas da 3ª edição do Manual de Redação da Presidência da República, assinale a opção correta quanto ao fecho e aos padrões de comunicação oficial:',
    options: [
      { key: 'A', text: 'O Memorando e o Aviso continuam sendo os instrumentos formais adequados para comunicações internas entre setores da Universidade.' },
      { key: 'B', text: 'O fecho "Respeitosamente," deve ser empregado em correspondências dirigidas a autoridades de hierarquia superior à do remetente, inclusive o Reitor da UFBA.' },
      { key: 'C', text: 'É facultado ao redator utilizar expressões fraternas de encerramento, tais como "Cordialmente," e "Com os melhores cumprimentos,".' },
      { key: 'D', text: 'Ao dirigir-se ao Presidente da República ou a Ministros de Estado, deve-se empregar o vocativo "Vossa Excelência Ilustríssima".' },
      { key: 'E', text: 'Os pronomes de tratamento exigem que a concordância verbal e pronominal seja feita na segunda pessoa do plural (vós).' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Segundo o Manual da Presidência da República (3ª edição), existem apenas dois fechos: "Respeitosamente," para autoridades superiores, e "Atenciosamente," para mesma hierarquia ou inferior. O Reitor é autoridade superior, exigindo "Respeitosamente,".',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. O Memorando e o Aviso foram extintos na 3ª edição, sendo unificados no Padrão Ofício.' },
        { key: 'B', isCorrect: true, reason: 'Correto. "Respeitosamente," é o fecho canônico para autoridades de hierarquia superior.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Expressões como "Cordialmente" foram banidas dos documentos oficiais.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. O vocativo adequado para Chefes de Poder e Ministros é simplesmente "Excelentíssimo Senhor [Cargo]," ou "Senhor [Cargo],". "Ilustríssimo" foi abolido.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. A concordância com pronomes de tratamento é SEMPRE em 3ª pessoa do singular.' }
      ],
      bizu: 'Fecho só tem 2 no Brasil: Respeitosamente (para superiores) e Atenciosamente (para iguais e subordinados)!'
    }
  },

  // =========================================================================
  // 2. NOÇÕES DE INFORMÁTICA (UFBA)
  // =========================================================================
  {
    id: 'ufba-info-01',
    subject: 'Noções de Informática',
    topic: 'Segurança da Informação & Tipos de Malware',
    source: 'Banca AOCP / Concurso UFBA',
    difficulty: 'Fácil',
    statement: 'Um servidor da UFBA recebeu um e-mail com aparência legítima da reitoria solicitando a atualização imediata de sua senha funcional por meio de um link externo. Ao clicar no link, foi direcionado a uma página idêntica à do portal da universidade. Esse tipo de golpe cibernético e o malware que sequestra arquivos criptografando-os em troca de resgate são denominados, respectivamente:',
    options: [
      { key: 'A', text: 'Worm e Spyware.' },
      { key: 'B', text: 'Phishing e Ransomware.' },
      { key: 'C', text: 'Trojan e Adware.' },
      { key: 'D', text: 'Keylogger e Firewall.' },
      { key: 'E', text: 'Spoofing e Rootkit.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O golpe que cria páginas ou e-mails falsos com o objetivo de pescar credenciais de usuários é o PHISHING. Já o malware que bloqueia e criptografa dados exigindo pagamento de resgate é o RANSOMWARE.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Worm propaga-se sozinho pela rede; Spyware apenas monitora e espiona.' },
        { key: 'B', isCorrect: true, reason: 'Phishing é a "pescaria" de senhas com páginas falsas; Ransomware é o sequestrador de arquivos que exige resgate.' },
        { key: 'C', isCorrect: false, reason: 'Trojan é cavalo de troia (presente grego); Adware exibe anúncios invasivos.' },
        { key: 'D', isCorrect: false, reason: 'Keylogger grava digitação; Firewall é barreira de proteção de rede.' },
        { key: 'E', isCorrect: false, reason: 'Spoofing é mascaramento de endereço IP; Rootkit esconde processos maliciosos no núcleo.' }
      ],
      bizu: 'Phishing = pescaria de senha com página falsa. Ransomware = sequestro de dados pedindo resgate em dinheiro!'
    }
  },
  {
    id: 'ufba-info-02',
    subject: 'Noções de Informática',
    topic: 'Microsoft Excel 365: Referências e Fórmulas',
    source: 'Banca Federal • Noções de Informática',
    difficulty: 'Médio',
    statement: 'No Microsoft Excel 365 em português, um assistente em administração elaborou uma planilha onde a célula B5 contém a fórmula: =$A$1+B$2. Se essa fórmula for copiada e colada na célula D7, qual será a fórmula resultante na célula de destino?',
    options: [
      { key: 'A', text: '=$A$1+B$2' },
      { key: 'B', text: '=$A$1+D$2' },
      { key: 'C', text: '=$C$3+D$4' },
      { key: 'D', text: '=$A$1+D$4' },
      { key: 'E', text: '=$B$2+D$2' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O termo "$A$1" tem referência absoluta tanto na coluna quanto na linha (dois cifrões), logo permanece rigorosamente idêntico: =$A$1. Já o termo "B$2" possui cifrão travando a linha 2, mas a coluna B é relativa. Ao mover de B5 para D7 (duas colunas para a direita: B -> C -> D), a coluna B vira D, mas a linha 2 continua travada. Resultado final: =$A$1+D$2.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. A coluna B de "B$2" não estava travada por cifrão, logo sofreu deslocamento horizontal.' },
        { key: 'B', isCorrect: true, reason: 'Correto. $A$1 permanece intacto; em B$2, a coluna B desloca duas posições virando D, enquanto a linha 2 permanece congelada pelo cifrão ($2).' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. $A$1 não pode se alterar pois está completamente absoluto.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. A linha 2 estava travada com "$" e não pode virar 4.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. $A$1 não vira $B$2.' }
      ],
      bizu: 'Quem tem cifrão na frente NÃO MUDA NUNCA! $A$1 continua $A$1; B$2 mudou de coluna virando D$2.'
    }
  },

  // =========================================================================
  // 3. ADMINISTRAÇÃO PÚBLICA & LEGISLAÇÃO (UFBA)
  // =========================================================================
  {
    id: 'ufba-adm-01',
    subject: 'Administração Pública',
    topic: 'Regime Jurídico dos Servidores Federais (Lei 8.112/1990)',
    source: 'Concurso UFBA • Lei 8.112/1990',
    difficulty: 'Médio',
    statement: 'Gilvania foi aprovada no concurso público da UFBA para o cargo de Assistente em Administração e teve sua nomeação publicada no Diário Oficial da União. De acordo com a Lei nº 8.112/1990, quais são os prazos legais máximos para a posse e, posteriormente, para a entrada em efetivo exercício?',
    options: [
      { key: 'A', text: 'Posse em até 15 dias contados da nomeação; exercício em até 30 dias contados da posse.' },
      { key: 'B', text: 'Posse em até 30 dias contados da nomeação; exercício em até 15 dias contados da posse.' },
      { key: 'C', text: 'Posse em até 30 dias contados da nomeação; exercício em até 30 dias contados da posse.' },
      { key: 'D', text: 'Posse em até 20 dias contados da nomeação; exercício em até 10 dias contados da posse.' },
      { key: 'E', text: 'Posse imediata em 5 dias; exercício em até 15 dias prorrogáveis por igual período.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Conforme os artigos 13 e 15 da Lei nº 8.112/1990: A posse ocorrerá no prazo de 30 (trinta) dias contados da publicação do ato de provimento (nomeação). O prazo para o servidor empossado entrar em exercício é de 15 (quinze) dias contados da data da posse.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto. Inverteu os prazos: posse é 30 dias e exercício é 15 dias.' },
        { key: 'B', isCorrect: true, reason: 'Correto. Nomeação -> Posse = 30 dias; Posse -> Exercício = 15 dias.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. O prazo de exercício não é de 30 dias, mas sim de 15 dias.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Prazos inventados.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Não existe posse imediata em 5 dias no RJU federal.' }
      ],
      bizu: 'Decore a dobradinha federal: 30 dias para TOMAR POSSE, 15 dias para COMEÇAR A TRABALHAR (exercício)!'
    }
  },
  {
    id: 'ufba-adm-02',
    subject: 'Administração Pública',
    topic: 'Estatuto e Regimento Geral da UFBA',
    source: 'Estatuto da UFBA • Concurso Técnico-Administrativo',
    difficulty: 'Fácil',
    statement: 'No âmbito da Universidade Federal da Bahia (UFBA), o órgão colegiado superior de deliberação máxima, normativa e recursal em matéria de administração, planejamento geral e finanças da instituição é o:',
    options: [
      { key: 'A', text: 'CONSEPE (Conselho Superior de Ensino, Pesquisa e Extensão).' },
      { key: 'B', text: 'CONSUNI (Conselho Universitário).' },
      { key: 'C', text: 'Conselho de Curadores.' },
      { key: 'D', text: 'Gabinete da Reitoria.' },
      { key: 'E', text: 'Colégio de Diretores de Unidades.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Segundo o Estatuto da UFBA, o CONSUNI (Conselho Universitário) é o órgão supremo de deliberação coletiva e recursal de toda a universidade, responsável por fixar diretrizes gerais de gestão e planejar a instituição. O CONSEPE cuida do acadêmico (ensino/pesquisa/extensão) e o Conselho de Curadores fiscaliza o patrimônio e as contas.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'CONSEPE é o órgão superior estritamente em matéria acadêmica, didática e de extensão.' },
        { key: 'B', isCorrect: true, reason: 'CONSUNI é o órgão máximo de deliberação coletiva da UFBA, presidido pelo Reitor.' },
        { key: 'C', isCorrect: false, reason: 'Conselho de Curadores é órgão fiscalizador econômico-financeiro.' },
        { key: 'D', isCorrect: false, reason: 'A Reitoria é o órgão executivo da universidade, e não colegiado deliberativo superior.' },
        { key: 'E', isCorrect: false, reason: 'Órgão de coordenação setorial das unidades, subordinado ao CONSUNI.' }
      ],
      bizu: 'CONSUNI é o "Supremo Tribunal" da UFBA: manda na política geral e no planejamento. CONSEPE cuida das aulas e pesquisas.'
    }
  },
  {
    id: 'ufba-adm-03',
    subject: 'Administração Pública',
    topic: 'Nova Lei de Licitações (Lei nº 14.133/2021)',
    source: 'Lei nº 14.133/2021 • Concurso Federal',
    difficulty: 'Médio',
    statement: 'Com o advento da Nova Lei de Licitações e Contratos Administrativos (Lei nº 14.133/2021), algumas modalidades licitatórias tradicionais da antiga lei foram extintas e uma nova modalidade foi introduzida. Assinale a alternativa que apresenta CORRETAMENTE as modalidades oficiais da Lei 14.133/2021:',
    options: [
      { key: 'A', text: 'Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo.' },
      { key: 'B', text: 'Convite, Tomada de Preços, Concorrência, Leilão e Pregão.' },
      { key: 'C', text: 'Tomada de Preços, Pregão, Concorrência, Concurso e Consulta.' },
      { key: 'D', text: 'Pregão, Concorrência, Convite, Diálogo Competitivo e RDC.' },
      { key: 'E', text: 'Concorrência, Pregão Eletrônico, Leilão Presencial e Carta-Convite.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'A Lei nº 14.133/2021 estabelece exatamente 5 modalidades licitatórias em seu art. 28: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. As modalidades "Convite" e "Tomada de Preços" da Lei 8.666/93 foram expressamente EXTINTAS.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Correto. São exatamente as 5 modalidades oficiais da Lei 14.133/2021.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto. Convite e Tomada de Preços foram extintos.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto. Tomada de Preços e Consulta não constam na nova lei.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto. Convite e RDC foram revogados pela 14.133.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto. Carta-Convite não existe mais no ordenamento.' }
      ],
      bizu: 'Decore as 5 modalidades da 14.133: Pregão, Concorrência, Concurso, Leilão e Diálogo Competitivo. Convite e Tomada de Preços morreram!'
    }
  },

  // =========================================================================
  // 4. CONHECIMENTOS ESPECÍFICOS (UFBA - CARGO 201)
  // =========================================================================
  {
    id: 'ufba-esp-01',
    subject: 'Conhecimentos Específicos',
    topic: 'Arquivologia: A Teoria das Três Idades Documentais',
    source: 'Concurso UFBA • Assistente em Administração',
    difficulty: 'Fácil',
    statement: 'No âmbito da gestão documental universitária, um lote de pastas funcionais de servidores aposentados há décadas, contendo registros históricos da fundação de faculdades da UFBA, possui valor histórico e cultural inestimável para a memória da instituição. De acordo com a Teoria das Três Idades da Arquivologia, esses documentos pertencem ao arquivo:',
    options: [
      { key: 'A', text: 'Corrente (1ª idade), sendo permitida sua microfilmagem para posterior eliminação física.' },
      { key: 'B', text: 'Intermediário (2ª idade), devendo aguardar no depósito até a prescrição jurídica de 5 anos.' },
      { key: 'C', text: 'Permanente (3ª idade), possuindo valor secundário e sendo estritamente PROIBIDA sua eliminação.' },
      { key: 'D', text: 'Setorial, podendo ser incinerado pela comissão de descarte após publicação no DOU.' },
      { key: 'E', text: 'Temporário, cuja guarda é facultativa e delegada ao centro acadêmico dos estudantes.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Os documentos de valor histórico, probatório, cultural e de pesquisa pertencem à 3ª Idade (Arquivo Permanente ou Histórico). Segundo a Lei 8.159/1991, os documentos de guarda permanente são inalienáveis, imprescritíveis e NUNCA podem ser destruídos ou eliminados.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Arquivo corrente guarda documentos em uso diário imediato com valor primário.' },
        { key: 'B', isCorrect: false, reason: 'Arquivo intermediário guarda documentos que aguardam prazos legais da tabela de temporalidade.' },
        { key: 'C', isCorrect: true, reason: 'Documentos históricos pertencem ao Arquivo Permanente (3ª idade) e JAMAIS podem ser eliminados.' },
        { key: 'D', isCorrect: false, reason: 'Documentos históricos não podem ser incinerados ou descartados sob hipótese alguma.' },
        { key: 'E', isCorrect: false, reason: 'Não existe essa categoria e a guarda de documentos públicos federais é obrigatória e regulada por lei.' }
      ],
      bizu: 'Arquivo Permanente (3ª idade) = Guardar para SEMPRE! Valor histórico/secundário nunca se joga fora!'
    }
  },
  {
    id: 'ufba-esp-02',
    subject: 'Conhecimentos Específicos',
    topic: 'Administração de Recursos Materiais: Curva ABC',
    source: 'Concurso UFBA • Gestão de Recursos Materiais',
    difficulty: 'Médio',
    statement: 'O almoxarifado central da UFBA realizou a classificação de seus itens de estoque com base no método da Curva ABC (Princípio de Pareto). A respeito das características dos itens classificados como "Classe A", assinale a afirmativa correta:',
    options: [
      { key: 'A', text: 'Correspondem à maioria dos itens físicos estocados (mais de 70%), com baixo impacto financeiro no orçamento.' },
      { key: 'B', text: 'Representam itens de controle simplificado e dispensam registros informatizados de movimentação diária.' },
      { key: 'C', text: 'Compreendem um número reduzido de itens em quantidade física (~10% a 20%), mas que concentram a maior parte do valor financeiro do estoque (~70% a 80%).' },
      { key: 'D', text: 'São materiais de consumo banal e descartável, tais como clipes de papel, canetas e copos plásticos.' },
      { key: 'E', text: 'Possuem demanda imprevisível e devem ser comprados em quantidades gigantescas para obter descontos.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Na Curva ABC (Princípio de Pareto), os itens da Classe A são poucos em quantidade de itens (~10% a 20%), mas concentram a maior parte do capital financeiro investido no estoque (~70% a 80%). Por terem altíssimo valor financeiro, exigem controle rigoroso, contagens frequentes e compras precisas.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Isso descreve a Classe C (muitos itens físicos de baixo valor financeiro).' },
        { key: 'B', isCorrect: false, reason: 'Classe A exige o controle mais rigoroso e detalhado possível.' },
        { key: 'C', isCorrect: true, reason: 'Definição clássica da Classe A: poucos itens (~20%) que representam a maior parte do valor (~80%).' },
        { key: 'D', isCorrect: false, reason: 'Clipes e canetas pertencem à Classe C.' },
        { key: 'E', isCorrect: false, reason: 'Estocar grandes volumes de Classe A imobiliza capital precioso e gera alto risco de perdas.' }
      ],
      bizu: 'Curva ABC: Classe A = Poucos itens (20%), mas custam UMA FORTUNA (80% do dinheiro)!'
    }
  },
  {
    id: 'ufba-esp-03',
    subject: 'Conhecimentos Específicos',
    topic: 'Processo Administrativo (PODC) & Funções da Administração',
    source: 'Teoria Geral da Administração • Concurso Classe D',
    difficulty: 'Fácil',
    statement: 'Um Assistente em Administração da UFBA foi encarregado de acompanhar o andamento dos processos de matrícula, comparar o tempo médio de resposta com as metas estabelecidas pela Pró-Reitoria e propor medidas corretivas caso fossem identificados atrasos injustificados. A atividade exercida pelo servidor corresponde à função administrativa de:',
    options: [
      { key: 'A', text: 'Planejamento.' },
      { key: 'B', text: 'Organização.' },
      { key: 'C', text: 'Direção.' },
      { key: 'D', text: 'Controle.' },
      { key: 'E', text: 'Departamentalização.' }
    ],
    correctOption: 'D',
    explanation: {
      summary: 'A função administrativa de CONTROLE (do ciclo PODC: Planejar, Organizar, Dirigir e Controlar) consiste exatamente em monitorar as atividades em execução, comparar o desempenho real com os padrões e metas planejados e aplicar ações corretivas caso haja desvios.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Planejamento define os objetivos e metas com antecedência.' },
        { key: 'B', isCorrect: false, reason: 'Organização divide o trabalho e aloca recursos.' },
        { key: 'C', isCorrect: false, reason: 'Direção lidera pessoas e coordena esforços.' },
        { key: 'D', isCorrect: true, reason: 'Controle mede o desempenho, compara com os padrões e aplica correções.' },
        { key: 'E', isCorrect: false, reason: 'Departamentalização é técnica de organização de órgãos e setores.' }
      ],
      bizu: 'Comparou com a meta e aplicou ação corretiva? É CONTROLE (a 4ª função do PODC)!'
    }
  }
];
