import type { DiscursiveQuestion } from '../types/study';

export const DISCURSIVE_QUESTIONS: DiscursiveQuestion[] = [
  // =========================================================================
  // TEMA 1: REDAÇÃO OFICIAL & COMUNICAÇÃO ADMINISTRATIVA (PADRÃO OFÍCIO)
  // =========================================================================
  {
    id: 'ufba-disc-01',
    subject: 'Língua Portuguesa',
    topic: 'Redação Oficial: Estrutura do Padrão Ofício (Manual da Presidência 3ª ed.)',
    source: 'Edital UFBA • Manual de Redação da Presidência da República',
    difficulty: 'Médio',
    statement: 'Na condição de Assistente em Administração da Universidade Federal da Bahia (UFBA), você recebeu a incumbência de redigir uma correspondência oficial ao Pró-Reitor de Administração (PROAD) solicitando a aquisição de novos equipamentos de informática para os laboratórios didáticos da faculdade. Apresente os elementos obrigatórios da estrutura formal do Padrão Ofício (conforme a 3ª edição do Manual de Redação da Presidência da República), indique o fecho correto a ser utilizado e explique por que a impessoalidade deve nortear o texto.',
    contextHint: 'Lembre-se da unificação de aviso/memorando em Ofício, dos únicos 2 fechos válidos e da regra de ouro da impessoalidade (o órgão fala, não a pessoa).',
    expectedAnswer: `1. ESTRUTURA FORMAL DO PADRÃO OFÍCIO (Manual da Presidência da República - 3ª Edição):
O documento oficial deve conter obrigatoriamente os seguintes elementos padronizados:
• Cabeçalho: Brasão das Armas da República centralizado no topo da página, acompanhado da identificação do órgão (Universidade Federal da Bahia - UFBA).
• Identificação do Expediente: Tipo do documento por extenso, número sequencial, ano e sigla da unidade emitente alinhados à margem esquerda (Ex: Ofício nº 45/2026/FACED/UFBA).
• Local e Data: Por extenso, alinhados à margem esquerda (Ex: Salvador, 20 de dezembro de 2026).
• Endereçamento: Título, cargo e órgão do destinatário alinhados à esquerda (Ex: "A Sua Senhoria o Senhor Pró-Reitor de Administração da UFBA").
• Assunto: Resumo sucinto do conteúdo do expediente em destaque (Ex: "Assunto: Solicitação de aquisição de equipamentos de informática para laboratórios didáticos").
• Texto do Ofício: Estruturado em três partes claras:
  - Introdução: Apresenta o objetivo da comunicação e a demanda.
  - Desenvolvimento: Justifica a necessidade com dados, demonstrando o interesse público.
  - Conclusão: Ratifica a solicitação ou propõe o encaminhamento formal.
• Fecho para Comunicações Oficiais: Encerramento padronizado.
• Identificação do Signatário: Nome da autoridade em letras maiúsculas e cargo centralizados, sem linha ou traço para assinatura.

2. FECHO CORRETO A SER UTILIZADO:
Como o expediente é destinado ao Pró-Reitor de Administração, autoridade de hierarquia superior à do servidor emitente, o fecho obrigatório é:
"Respeitosamente," (seguido de vírgula).

3. O PRINCÍPIO DA IMPESSOALIDADE NA REDAÇÃO:
A impessoalidade decorre do artigo 37 da Constituição Federal e implica que:
• O emitente não é a pessoa física do servidor, mas sim o próprio serviço público/órgão;
• O texto deve ser isento de impressões pessoais, vaidades, emoções ou gírias;
• O destinatário é considerado sempre como cidadão ou autoridade pública em igualdade de tratamento;
• O interesse público é a única finalidade do ato administrativo.`,
    keywords: [
      'Padrão Ofício unificado (3ª edição do Manual da Presidência)',
      'Cabeçalho com Brasão das Armas da República',
      'Identificação do expediente (tipo, número, ano, sigla)',
      'Local e data alinhados à esquerda',
      'Endereçamento e vocativo adequados',
      'Assunto em negrito sintetizando a demanda',
      'Texto com introdução, desenvolvimento e conclusão',
      'Fecho: Respeitosamente para autoridade superior',
      'Identificação do signatário (nome e cargo centralizados)',
      'Princípio da impessoalidade (CF/88 Art. 37, voz do órgão público)'
    ],
    goldenBizu: 'Padrão Ofício tem 8 partes sagradas. Destinatário manda mais que você? Fecho = "Respeitosamente,". Texto é impessoal porque quem fala é a UFBA, não você!',
    gradingCriteria: [
      'Listar corretamente os elementos constitutivos do Padrão Ofício da 3ª edição.',
      'Indicar com exatidão o fecho "Respeitosamente," para autoridade superior.',
      'Conceituar a impessoalidade sob a perspectiva constitucional e do Manual da Presidência.'
    ]
  },

  // =========================================================================
  // TEMA 2: ARQUIVOLOGIA & GESTÃO DOCUMENTAL NA UNIVERSIDADE
  // =========================================================================
  {
    id: 'ufba-disc-02',
    subject: 'Conhecimentos Específicos',
    topic: 'Arquivologia: A Teoria das Três Idades e o Descarte de Documentos',
    source: 'Edital UFBA • Lei nº 8.159/1991',
    difficulty: 'Médio',
    statement: 'Um novo coordenador de curso da UFBA solicitou que a secretaria acadêmica fizesse uma "limpeza geral" nos armários, descartando imediatamente caixas de diários de classe, atas de congregação e históricos escolares antigos para liberar espaço físico. Como Assistente em Administração com conhecimentos de Arquivologia e Legislação Arquivística (Lei nº 8.159/1991), que orientação técnica você deve apresentar ao coordenador a respeito da Teoria das Três Idades, da Tabela de Temporalidade e do destino dos documentos permanentes?',
    contextHint: 'Diferencie arquivo corrente, intermediário e permanente. Destaque que documento de valor histórico/permanente NUNCA pode ser eliminado!',
    expectedAnswer: `1. ORIENTAÇÃO TÉCNICA E ILEGALIDADE DO DESCARTE IMEDIATO:
O descarte sumário e indiscriminado de documentos públicos é expressamente vedado pela legislação federal (Lei nº 8.159/1991 e Código Penal, crime contra o patrimônio arquivístico público). A eliminação só pode ocorrer mediante critérios formais estabelecidos na Tabela de Temporalidade de Documentos aprovada pelo Arquivo Nacional e pela Comissão Permanente de Avaliação de Documentos (CPAD) da UFBA.

2. APLICAÇÃO DA TEORIA DAS TRÊS IDADES (CICLO VITAL DOS DOCUMENTOS):
Os documentos da universidade devem ser classificados e tratados conforme a fase do seu ciclo de vida:
• Arquivo Corrente (1ª Idade):
  - Documentos em tramitação ou consultados com frequência pela secretaria acadêmica (ex: históricos de alunos ativos, requerimentos do semestre).
  - Devem permanecer próximos ao setor de atendimento para uso imediato.
• Arquivo Intermediário (2ª Idade):
  - Documentos cujo uso frequente cessou, mas que devem ser preservados por razões legais, fiscais ou comprobatórias durante prazos pré-fixados na Tabela de Temporalidade.
  - Podem ser transferidos para o depósito central de arquivo da UFBA. Ao fim do prazo, são avaliados para descarte ou recolhimento.
• Arquivo Permanente ou Histórico (3ª Idade):
  - Documentos dotados de valor secundário (histórico, probatório, cultural, de pesquisa e memória institucional).
  - Exemplos: Atas de congregação, atas de colação de grau, registros de fundação de cursos e livros de diplomas.

3. REGRA ABSOLUTA DOS DOCUMENTOS PERMANENTES:
Os documentos de valor permanente são INALIENÁVEIS, IMPRESCRITÍVEIS e NUNCA PODEM SER ELIMINADOS sob qualquer pretexto. Eles devem ser recolhidos e preservados em definitivo para acesso de pesquisadores e de toda a sociedade.`,
    keywords: [
      'Lei nº 8.159/1991 (Lei dos Arquivos Públicos)',
      'Vedação ao descarte sumário sem respaldo técnico',
      'Tabela de Temporalidade de Documentos (TTD)',
      'Comissão Permanente de Avaliação de Documentos (CPAD)',
      'Arquivo Corrente (1ª idade, valor primário e uso frequente)',
      'Arquivo Intermediário (2ª idade, prazos de guarda precaucionais)',
      'Arquivo Permanente (3ª idade, valor secundário/histórico/cultural)',
      'Documentos permanentes são inalienáveis e NUNCA podem ser eliminados'
    ],
    goldenBizu: 'Nenhum servidor pode jogar documento público fora sem Tabela de Temporalidade! Documento do Arquivo Permanente (atas, diplomas) tem valor histórico e NUNCA pode ser destruído!',
    gradingCriteria: [
      'Apontar a ilegalidade do descarte sem critérios arquivísticos (Lei 8.159/91).',
      'Diferenciar com precisão as três idades (corrente, intermediário e permanente).',
      'Afirmar enfaticamente a inalienabilidade e a proibição de eliminação dos documentos de arquivo permanente.'
    ]
  },

  // =========================================================================
  // TEMA 3: ADMINISTRAÇÃO PÚBLICA, ÉTICA E LEI 8.112/1990
  // =========================================================================
  {
    id: 'ufba-disc-03',
    subject: 'Administração Pública',
    topic: 'Regime Jurídico Único (Lei 8.112/90) & Ética no Atendimento Universitário',
    source: 'Edital UFBA • Lei nº 8.112/1990 e Decreto nº 1.171/1994',
    difficulty: 'Médio',
    statement: 'Durante o período de matrícula na UFBA, um servidor público técnico-administrativo atendeu um estudante com grosseria, recusou-se a prestar informações sobre o calendário acadêmico alegando que "o horário de expediente estava quase no fim" e priorizou o atendimento de um conhecido pessoal em detrimento de uma fila de espera prioritária (com gestantes e idosos). Analise essa conduta à luz dos deveres e proibições da Lei nº 8.112/1990 e do Código de Ética Profissional do Servidor Público Civil (Decreto nº 1.171/1994).',
    contextHint: 'Relacione com os princípios da impessoalidade, moralidade, urbanidade, atendimento prioritário e as penalidades disciplinares cabíveis.',
    expectedAnswer: `1. VIOLAÇÃO AOS DEVERES E PRINCÍPIOS DA LEI Nº 8.112/1990:
A conduta do servidor incorreu em graves infrações disciplinares previstas no Regime Jurídico Único:
• Dever de Urbanidade (Art. 116, XI): O servidor tem a obrigação legal de tratar o público, alunos, colegas e cidadãos com respeito, civilidade e educação. Tratar o estudante com grosseria viola diretamente esse dever.
• Dever de Exercer com Zelo e Dedicação as Atribuições do Cargo (Art. 116, I): Recusar atendimento dentro do horário de expediente constitui negligência funcional.
• Dever de Atender com Presteza (Art. 116, V): O servidor deve expedir certidões e prestar informações com celeridade ao público.
• Violação ao Princípio da Impessoalidade (Art. 37, CF/88): Furar a fila para favorecer um conhecido pessoal representa privilégio indevido e quebra da isonomia, conduta reprovável no serviço público.
• Desrespeito ao Atendimento Prioritário (Lei nº 10.048/2000): Gestantes, idosos e pessoas com deficiência têm prioridade legal assegurada.

2. VIOLAÇÃO AO CÓDIGO DE ÉTICA PROFISSIONAL (DECRETO Nº 1.171/1994):
O Decreto nº 1.171/1994 estabelece que:
• O servidor não pode jamais desprezar o elemento ético de sua conduta;
• Toda ausência injustificada, atraso ou recusa no atendimento ao cidadão causa dano moral irreparável à Administração Pública;
• O atendimento ao público é considerado de prioridade cívica, sendo a cortesia e a tempestividade deveres indeclináveis;
• A atitude do servidor é passível de apuração pela Comissão de Ética da UFBA, com aplicação da penalidade de CENSURA ÉTICA (que fica registrada no assentamento funcional do servidor).

3. PENALIDADES DISCIPLINARES CABÍVEIS:
Na esfera disciplinar da Lei nº 8.112/1990, por se tratar de falta de urbanidade e descumprimento de dever funcional, o servidor está sujeito à instauração de sindicância ou processo administrativo com aplicação de ADVERTÊNCIA por escrito (ou SUSPENSÃO em caso de reincidência).`,
    keywords: [
      'Dever de urbanidade (Art. 116 da Lei 8.112/1990)',
      'Dever de exercer o cargo com zelo e presteza',
      'Violação ao Princípio da Impessoalidade (CF/88 Art. 37)',
      'Violação à Lei de Atendimento Prioritário (Lei 10.048/2000)',
      'Código de Ética do Servidor Federal (Decreto 1.171/1994)',
      'Comissão de Ética da UFBA e penalidade de Censura Ética',
      'Penalidade disciplinar de Advertência por escrito na Lei 8.112'
    ],
    goldenBizu: 'No serviço público, grosseria com aluno e favorecimento de amigo violam a Lei 8.112 (dá Advertência) e o Código de Ética Dec. 1.171 (dá Censura Ética pela Comissão de Ética)!',
    gradingCriteria: [
      'Identificar o descumprimento dos deveres de urbanidade e presteza da Lei 8.112/90.',
      'Fundamentar a infração ética sob o Decreto 1.171/94 e citar a penalidade de Censura.',
      'Destacar a violação ao princípio da impessoalidade e ao direito de atendimento prioritário.'
    ]
  },

  // =========================================================================
  // TEMA 4: ADMINISTRAÇÃO DE MATERIAIS & LOGÍSTICA DE ESTOQUES
  // =========================================================================
  {
    id: 'ufba-disc-04',
    subject: 'Conhecimentos Específicos',
    topic: 'Administração de Recursos Materiais: Gestão de Almoxarifado na UFBA',
    source: 'Edital UFBA • Gestão de Recursos Materiais e Patrimoniais',
    difficulty: 'Médio',
    statement: 'A UFBA possui um almoxarifado central responsável pelo suprimento de centenas de departamentos, laboratórios e pró-reitorias. Diante de restrições orçamentárias, o diretor administrativo solicitou um plano de otimização de estoques com base na Curva ABC e na Classificação XYZ. Explique o fundamento de cada uma dessas classificações, diferencie inventário rotativo de inventário geral periódico e justifique por que itens de alta criticidade (Classe Z) não podem faltar mesmo que possuam baixo valor financeiro.',
    contextHint: 'Curva ABC = valor monetário (Pareto). Classificação XYZ = criticidade operacional (impacto da falta). Diferencie contagem contínua sem parar o órgão de contagem anual.',
    expectedAnswer: `1. FUNDAMENTO DA CURVA ABC E CLASSIFICAÇÃO XYZ:
• Curva ABC (Classificação por Valor Financeiro):
  Baseia-se no Princípio de Pareto (80/20) para escalonar os itens do estoque segundo seu impacto monetário no orçamento:
  - Classe A: Itens que representam aproximadamente 80% do valor financeiro total do estoque, concentrados em apenas cerca de 20% da quantidade física de itens. Exigem controle acirrado e compras sob demanda.
  - Classe B: Itens intermediários (~15% do valor financeiro e ~30% da quantidade).
  - Classe C: A grande maioria dos itens físicos (~50% a 60%), mas que representam menos de 10% do dinheiro investido (ex: clipes, canetas, formulários). Controle simples e por lotes.

• Classificação XYZ (Classificação por Criticidade Operacional):
  Avalia o impacto da falta do material nas operações da universidade:
  - Classe X: Baixa criticidade (a falta não causa paralisações; itens de fácil reposição no mercado).
  - Classe Y: Criticidade média (materiais com substitutos disponíveis).
  - Classe Z: Alta criticidade (materiais vitais e imprescindíveis; a falta paralisa aulas laboratoriais, cirurgias no hospital universitário ou pesquisas científicas).

2. POR QUE ITENS DA CLASSE Z SÃO PRIORITÁRIOS MESMO COM BAIXO VALOR:
A criticidade não tem relação obrigatória com o preço de compra. Um reagente químico simples de R$ 5,00 ou um filtro de autoclave de R$ 20,00 podem ser itens da Classe C (baratos) na curva ABC, mas são Classe Z em criticidade. Se faltarem, paralisam uma pesquisa de milhões de reais ou impedem o funcionamento de um laboratório de análises clínicas. Portanto, o estoque de segurança de itens Z deve ser mantido rigorosamente abastecido.

3. DIFERENCIAÇÃO ENTRE INVENTÁRIO ROTATIVO E INVENTÁRIO GERAL PERIÓDICO:
• Inventário Rotativo (Contínuo):
  - Os itens são contados e verificados de forma programada e contínua ao longo de todo o ano (ex: itens da Classe A são contados mensalmente; itens C semestralmente).
  - Vantagem: Não exige o fechamento do almoxarifado nem paralisação no atendimento dos setores da UFBA, e permite a correção imediata de divergências contábeis.
• Inventário Geral ou Periódico:
  - Consiste na contagem física de 100% dos materiais de uma única vez no encerramento do exercício financeiro anual para fechamento de balanço contábil.
  - Exige a paralisação completa das entradas e saídas de materiais no almoxarifado por vários dias.`,
    keywords: [
      'Curva ABC: Princípio de Pareto (valor financeiro)',
      'Classe A: 20% dos itens que custam 80% do dinheiro',
      'Classe C: maioria dos itens de baixo custo',
      'Classificação XYZ: criticidade operacional e impacto da falta',
      'Classe Z: material imprescindível que paralisa a operação',
      'Itens Classe Z baratos (reagentes/peças) exigem estoque de segurança',
      'Inventário Rotativo: contagem contínua sem paralisação do órgão',
      'Inventário Geral Periódico: contagem anual com paralisação das atividades'
    ],
    goldenBizu: 'Curva ABC mede DINHEIRO (Classe A custa caro). Classificação XYZ mede PERIGO DA FALTA (Classe Z paralisa tudo se faltar). Inventário rotativo conta aos poucos sem parar a UFBA!',
    gradingCriteria: [
      'Definir a Curva ABC e suas porcentagens teóricas de Pareto.',
      'Definir a Classificação XYZ por criticidade operacional.',
      'Justificar a prioridade dos itens Z independente do valor financeiro.',
      'Diferenciar inventário rotativo e periódico destacando o impacto na rotina da repartição.'
    ]
  }
];
