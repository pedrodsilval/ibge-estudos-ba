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
    ],
    promptType: 'padrao_oficio',
    templateSkeleton: `UNIVERSIDADE FEDERAL DA BAHIA
[Identificação da Unidade Emitente - Ex: FACED/UFBA]

Ofício nº [Número]/2026/[Sigla da Unidade]/UFBA
Salvador, [Dia] de [Mês] de 2026.

A Sua Senhoria o Senhor
[Nome do Destinatário ou Cargo]
[Órgão/Pró-Reitoria de Destino]
40170-110 – Salvador – BA

Assunto: [Resumo sucinto do conteúdo em destaque]

Senhor Pró-Reitor,

1. [Introdução: Apresentação do objetivo da comunicação oficial de forma clara e objetiva].

2. [Desenvolvimento: Justificativa com dados, fatos e fundamentação no interesse público universitário].

3. [Conclusão: Ratificação da solicitação ou proposta formal de encaminhamento].

Respeitosamente,

[NOME DO SIGNATÁRIO EM MAIÚSCULAS]
Assistente em Administração`
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
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. ILEGALIDADE DO DESCARTE SUMÁRIO:
O descarte imediato pretendido contraria a Lei nº 8.159/1991. Documentos públicos só podem ser eliminados com base em Tabela de Temporalidade aprovada pela Comissão Permanente de Avaliação de Documentos (CPAD).

2. CICLO VITAL DOS DOCUMENTOS (TRÊS IDADES):
• Arquivo Corrente (1ª Idade): Documentos em tramitação frequente, guardados junto à secretaria;
• Arquivo Intermediário (2ª Idade): Documentos de consulta rara que aguardam prazos legais de precaução;
• Arquivo Permanente (3ª Idade): Documentos de valor histórico, probatório e cultural (atas, diplomas).

3. REGRA DE INALIENABILIDADE:
Os documentos de 3ª idade são inalienáveis, imprescritíveis e NUNCA podem ser eliminados, devendo ser recolhidos para preservação definitiva na UFBA.`
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
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. VIOLAÇÃO AOS DEVERES LEGAIS (LEI Nº 8.112/1990):
A conduta do servidor afronta diretamente o Estatuto dos Servidores Federais, violando o dever de urbanidade (Art. 116, XI), a obrigação de agir com zelo e presteza (Art. 116, I e V) e desrespeitando o princípio da impessoalidade ao conceder privilégio indevido em detrimento do atendimento prioritário legal (Lei 10.048/2000).

2. INFRAÇÃO ÉTICA (DECRETO Nº 1.171/1994):
Sob a ótica do Código de Ética do Poder Executivo Federal, a recusa ou mau atendimento causa dano moral irreparável à Administração Pública. A conduta é passível de representação perante a Comissão de Ética da UFBA, com cominação da penalidade de Censura Ética.

3. RESPONSABILIZAÇÃO DISCIPLINAR:
No âmbito correcional da Lei nº 8.112/1990, o descumprimento de dever funcional sujeita o agente à instauração de procedimento disciplinar e à aplicação de Advertência por escrito (ou Suspensão em caso de reincidência).`
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
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. CLASSIFICAÇÃO ABC (VALOR) E XYZ (CRITICIDADE):
A Curva ABC segmenta os estoques com base no Princípio de Pareto (impacto financeiro): Classe A (alto valor monetário, controle diário), Classe B (intermediário) e Classe C (baixo valor financeiro, controle simplificado). Por sua vez, a Classificação XYZ avalia o risco operacional da ausência do item: Classe X (baixa criticidade), Classe Y (média) e Classe Z (imprescindível; cuja falta paralisa serviços essenciais da UFBA).

2. PRIORIDADE DA CLASSE Z:
A criticidade operacional independe do preço. Itens de baixo custo unitário (Classe C) podem ser Classe Z (ex: reagentes laboratoriais ou fusíveis), exigindo estoque de segurança preventivo absoluto para evitar descontinuidade acadêmica.

3. INVENTÁRIO ROTATIVO VERSUS GERAL:
O inventário rotativo envolve contagens contínuas e programadas sem paralisar o funcionamento do almoxarifado universitário, ao passo que o inventário geral periódico exige a interrupção completa das operações no encerramento do exercício para fins de balanço contábil.`
  },

  // =========================================================================
  // TEMA 5: SEGURANÇA DA INFORMAÇÃO, PHISHING & LGPD NA UNIVERSIDADE
  // =========================================================================
  {
    id: 'ufba-disc-05',
    subject: 'Noções de Informática',
    topic: 'Segurança da Informação: Phishing, Ransomware e Proteção de Dados (LGPD)',
    source: 'Edital UFBA • Segurança da Informação & Lei nº 13.709/2018',
    difficulty: 'Médio',
    statement: 'Um Assistente em Administração que atua no Colegiado de Graduação da UFBA recebeu um e-mail com remetente aparente "suporte-ti@ufba-atendimento.com" com o assunto "URGENTE: Sua conta institucional será desativada em 2 horas. Clique no link para revalidar sua senha e planilha de matrículas". Ao clicar desavisadamente no link e abrir o arquivo baixado, as pastas de documentos de alunos começaram a ficar com extensões desconhecidas e surgiu uma mensagem exigindo pagamento para desbloqueio (ransomware). Descreva qual modalidade de ataque cibernético ocorreu, quais providências técnicas imediatas o servidor deve tomar para contenção de danos e quais princípios da LGPD e regras de boas práticas de segurança institucional foram vulnerados.',
    contextHint: 'Identifique engenharia social / phishing seguido de ransomware. Imediata desconexão física da rede (cabo/Wi-Fi), acionamento do Núcleo de TI e backup 3-2-1.',
    expectedAnswer: `1. IDENTIFICAÇÃO DO ATAQUE (ENGENHARIA SOCIAL / PHISHING & RANSOMWARE):
O incidente iniciou-se por meio de Phishing (engenharia social): o atacante utilizou uma mensagem ardilosa com senso de urgência e um domínio falso (@ufba-atendimento.com em vez do domínio oficial @ufba.br) para enganar o servidor. O arquivo executado continha um Ransomware (código malicioso de extorsão que sequestra e criptografa os dados da instituição, exigindo resgate).

2. PROVIDÊNCIAS TÉCNICAS IMEDIATAS DO SERVIDOR (CONTENÇÃO DO DANO):
Ao perceber o ataque, o servidor deve agir com rapidez para mitigar o dano:
• Desconexão Física Imediata da Rede: Desplugar imediatamente o cabo de rede Ethernet ou desligar o Wi-Fi do computador para impedir que o ransomware se propague pela rede local e infecte os servidores e estações de outros setores da UFBA;
• NÃO Desligar abruptamente na tomada se for possível apenas desconectar da rede (a fim de preservar logs de memória volátil para perícia técnica do órgão);
• Acionamento Imediato da Superintendência de Tecnologia da Informação (STI/UFBA): Notificar imediatamente a equipe de segurança cibernética da universidade e a chefia imediata;
• JAMAIS Pagar o Resgate: Órgãos públicos são expressamente proibidos de pagar resgates de extorsão cibernética. A recuperação dos sistemas deve ser realizada exclusivamente a partir de rotinas de cópias de segurança (Backup 3-2-1 seguro e isolado).

3. PRINCÍPIOS DA LGPD E REGRAS INSTITUCIONAIS VULNERADOS:
• Princípio da Segurança e da Prevenção (Art. 6º da Lei nº 13.709/2018 - LGPD): A universidade e seus agentes devem adotar medidas técnicas e administrativas aptas a proteger os dados pessoais de acessos não autorizados e de situações acidentais ou ilícitas de destruição, perda ou alteração.
• Princípio da Responsabilização e Prestação de Contas: Obrigação de comunicar o incidente de segurança à Autoridade Nacional de Proteção de Dados (ANPD) e aos titulares afetados (alunos cujos dados foram comprometidos).
• Regras de Navegação Segura: O servidor público jamais deve clicar em links externos suspeitos, deve sempre checar o domínio do remetente (apenas @ufba.br é legítimo) e utilizar autenticação em dois fatores (2FA).`,
    keywords: [
      'Engenharia social e Phishing (e-mail fraudulento com senso de urgência)',
      'Ransomware (malware de sequestro e criptografia de dados)',
      'Desconexão física imediata da rede (cabo/Wi-Fi para evitar propagação)',
      'Comunicação imediata à STI/UFBA e chefia imediata',
      'Vedação expressa ao pagamento de resgate',
      'Restauração de dados a partir de Backup (Estratégia 3-2-1)',
      'Princípio da Segurança e da Prevenção da LGPD (Lei 13.709/2018)',
      'Notificação de incidente de segurança à ANPD e aos titulares'
    ],
    goldenBizu: 'Clicou no link e pegou Ransomware? Despluga o cabo de rede NA HORA para o vírus não espalhar pela UFBA, chama a TI e restaura o Backup 3-2-1! Jamais pague resgate!',
    gradingCriteria: [
      'Identificar o ataque inicial como phishing/engenharia social e o malware como ransomware.',
      'Descrever a ação prioritária de isolamento (desconexão da rede) e acionamento da equipe de TI.',
      'Fundamentar a obrigação de proteção de dados pessoais conforme a LGPD e a importância do backup.'
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. MODALIDADE DE ATAQUE CIBERNÉTICO:
Trata-se de golpe de Engenharia Social na modalidade Phishing (uso de e-mail falso com domínio ardiloso e senso de urgência), vetor para contaminação por Ransomware (código malicioso de sequestro e cifragem de arquivos com exigência de resgate).

2. MEDIDAS EMERGENCIAIS DE CONTENÇÃO:
O servidor deve imediatamente:
• Desconectar o cabo de rede física e o Wi-Fi para isolar a estação e bloquear a propagação lateral pelo campus da UFBA;
• Acionar prontamente a Superintendência de TI (STI) e a chefia imediata;
• Abster-se terminantemente de efetuar qualquer pagamento de resgate, procedendo-se à recuperação dos dados por meio de cópias de segurança (Backup 3-2-1).

3. REGRAS DA LGPD E PREVENÇÃO:
Houve vulneração aos princípios da Segurança e da Prevenção (Lei nº 13.709/2018), gerando o dever de notificação de incidente à ANPD. É mandatório o uso de autenticação em dois fatores (2FA) e verificação atenta de remetentes oficiais.`
  },

  // =========================================================================
  // TEMA 6: NOVA LEI DE LICITAÇÕES (14.133/21) & COMPRAS DIRETAS NA UFBA
  // =========================================================================
  {
    id: 'ufba-disc-06',
    subject: 'Administração Pública',
    topic: 'Licitações e Contratos (Lei nº 14.133/2021): Fase Preparatória & Dispensa de Licitação',
    source: 'Edital UFBA • Lei nº 14.133/2021 (Nova Lei de Licitações)',
    difficulty: 'Médio',
    statement: 'A coordenação de um instituto da UFBA necessita adquirir materiais de consumo de escritório e didáticos para o início do semestre letivo, totalizando um valor estimado de R$ 38.000,00. O diretor solicitou que você, como Assistente em Administração, instrua o processo administrativo de aquisição. Esclareça se essa compra pode ser realizada por Dispensa de Licitação em razão do valor segundo a Lei nº 14.133/2021, cite os documentos essenciais que devem compor a fase preparatória da instrução processual (ETP e TR) e aponte a importância da pesquisa de preços no Painel de Preços do Governo Federal.',
    contextHint: 'Verifique o limite de dispensa para compras/serviços comuns (Art. 75, II da Lei 14.133/2021), a necessidade de Estudo Técnico Preliminar (ETP), Termo de Referência (TR) e pesquisa de preços.',
    expectedAnswer: `1. CABIMENTO DA DISPENSA DE LICITAÇÃO POR VALOR (LEI Nº 14.133/2021):
Sim, a contratação pode ser realizada mediante Dispensa de Licitação em razão do baixo valor:
• O Artigo 75, inciso II, da Nova Lei de Licitações autoriza a dispensa para a contratação de compras e outros serviços cujo valor total seja inferior ao teto legal (valor originário de R$ 50.000,00, atualizado periodicamente por Decreto Federal para mais de R$ 59.000,00).
• Como o montante estimado é de R$ 38.000,00, a aquisição enquadra-se com folga no limite legal, desde que não configure fracionamento indevido de despesa no mesmo exercício financeiro para o mesmo objeto no órgão.

2. DOCUMENTOS ESSENCIAIS DA FASE PREPARATÓRIA (INSTRUÇÃO PROCESSUAL):
Mesmo na contratação direta por dispensa, a Lei nº 14.133/2021 exige planejamento formal na fase preparatória:
• Documento de Formalização de Demanda (DFD): Registro inicial da necessidade pelo setor requisitante;
• Estudo Técnico Preliminar (ETP): Documento que caracteriza o interesse público envolvido e avalia a viabilidade técnica e econômica da melhor solução para suprir a demanda da universidade;
• Termo de Referência (TR): Documento que define de forma clara, precisa e impessoal as especificações do objeto (descrição dos itens de escritório, quantitativos, prazos e locais de entrega na UFBA, critérios de aceitação e garantias);
• Estimativa do Valor da Contratação: Elaborada com ampla pesquisa de preços.

3. IMPORTÂNCIA DA PESQUISA DE PREÇOS (PAINEL DE PREÇOS GOV.BR):
A pesquisa ampla de mercado é obrigatória para assegurar a vantajosidade e impedir sobrepreço ou superfaturamento do erário público (Art. 23 da Lei 14.133/2021):
• O servidor deve priorizar fontes oficiais, notadamente o Painel de Preços do Governo Federal e contratações similares de outros órgãos públicos da União;
• Permite estabelecer o valor de referência real e transparente, garantindo a economicidade e a conformidade aos princípios da moralidade e da eficiência administrativa.`,
    keywords: [
      'Dispensa de Licitação em razão do valor (Lei nº 14.133/2021, Art. 75, II)',
      'Valor estimado de R$ 38.000,00 dentro do limite legal',
      'Vedação ao fracionamento ilegal de despesas no exercício financeiro',
      'Fase preparatória do processo licitatório/contratação direta',
      'Estudo Técnico Preliminar (ETP) demonstrando a viabilidade',
      'Termo de Referência (TR) com especificação clara do objeto',
      'Pesquisa de preços ampla (Art. 23) via Painel de Preços do Governo Federal',
      'Princípios da economicidade, vantajosidade e eficiência'
    ],
    goldenBizu: 'Compra de material até o teto da Lei 14.133 (Art. 75, II) pode ser feita por DISPENSA de licitação, mas exige TR, ETP e pesquisa no Painel de Preços! Não pode fracionar despesa!',
    gradingCriteria: [
      'Identificar o fundamento da dispensa de licitação por valor (Art. 75, II da Lei 14.133/21).',
      'Mencionar a necessidade do Estudo Técnico Preliminar (ETP) e do Termo de Referência (TR).',
      'Explicar o papel da pesquisa ampla de preços e consulta ao Painel de Preços oficial.'
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. CABIMENTO LEGAL DA CONTRATAÇÃO DIRETA:
Em conformidade com a Lei nº 14.133/2021 (Artigo 75, inciso II), a aquisição pretendida de [descrever o objeto] enquadra-se como hipótese de Dispensa de Licitação em razão do valor, haja vista que o montante estimado de [inserir valor] situa-se abaixo do limite legal estabelecido para compras e serviços comuns. Ressalta-se a observância à vedação expressa ao fracionamento indevido de despesas no exercício financeiro.

2. ELEMENTOS OBRIGATÓRIOS DA FASE PREPARATÓRIA:
A instrução do processo administrativo deve conter os documentos indispensáveis de planejamento:
• Documento de Formalização da Demanda (DFD);
• Estudo Técnico Preliminar (ETP), demonstrando o interesse público e a viabilidade da contratação;
• Termo de Referência (TR), com a descrição clara, precisa e impessoal do objeto, prazos de entrega e critérios de recebimento;
• Pesquisa prévia de preços de mercado.

3. PESQUISA DE PREÇOS E PRINCÍPIOS DA ADMINISTRAÇÃO:
A estimativa do valor deve ser balizada preferencialmente pelo Painel de Preços do Governo Federal (Art. 23), garantindo a vantajosidade, a economicidade e a proteção ao erário público.`
  },

  // =========================================================================
  // TEMA 7: DISSERTAÇÃO-ARGUMENTATIVA: ACESSIBILIDADE & INCLUSÃO NA UFBA
  // =========================================================================
  {
    id: 'ufba-disc-07',
    subject: 'Língua Portuguesa',
    topic: 'Dissertação-Argumentativa: Acessibilidade, Inclusão Social e Atendimento Cidadão na UFBA',
    source: 'Edital UFBA • CF/88 Art. 205-206 & Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência)',
    difficulty: 'Médio',
    statement: 'A Constituição Federal de 1988 assegura a educação como direito fundamental de todos e estabelece a igualdade de condições para o acesso e a permanência na escola e na universidade. Não obstante, barreiras arquitetônicas, atitudinais e comunicacionais ainda impõem obstáculos à plena inclusão de pessoas com deficiência e estudantes em situação de vulnerabilidade nas instituições federais de ensino superior. Redija um texto dissertativo-argumentativo em norma-padrão (de 20 a 30 linhas) abordando: 1. A importância da acessibilidade e da inclusão como concretização da dignidade da pessoa humana e cidadania no âmbito da UFBA; 2. O papel do Assistente em Administração no acolhimento respeitoso, comunicação acessível e eliminação de barreiras burocráticas; 3. Propostas institucionais práticas para fortalecer a permanência estudantil e a equidade na universidade.',
    contextHint: 'Estruture em 4 parágrafos (Introdução + D1 Constitucional + D2 Prática do Servidor + Conclusão com proposta de intervenção). Use conectivos interparágrafos e mantenha rigorosa impessoalidade.',
    expectedAnswer: `1. INTRODUÇÃO (Contexto Constitucional & Tese):
A Constituição Cidadã de 1988 consagrou a educação como direito social inalienável e dever do Estado, assentada nos princípios da igualdade de condições de acesso e permanência e na dignidade da pessoa humana. No contexto das universidades públicas, em especial na Universidade Federal da Bahia (UFBA), a efetivação dessa garantia impõe a superação contínua de barreiras físicas e atitudinais. Nesse sentido, torna-se imperioso analisar tanto a responsabilidade funcional dos servidores públicos no acolhimento inclusivo quanto o papel de políticas institucionais articuladas para assegurar a equidade acadêmica.

2. DESENVOLVIMENTO 1 (Marco Legal da Acessibilidade & Dignidade):
Em primeiro plano, convém ressaltar que a inclusão transcende a mera previsão formal de cotas ou matrículas. Em consonância com a Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência), a acessibilidade constitui condição essencial para o exercício autônomo e seguro dos direitos fundamentais. Barreiras arquitetônicas em salas e laboratórios, somadas à escassez de recursos de tecnologia assistiva, vulneram o princípio da isonomia. Portanto, garantir rotas acessíveis, intérpretes de Libras e materiais didáticos adaptados é obrigação estatal indeclinável para erradicar a exclusão no ambiente universitário.

3. DESENVOLVIMENTO 2 (A Atuação do Assistente em Administração):
Ademais, destaca-se a centralidade da conduta do Assistente em Administração nas secretarias, colegiados e pró-reitorias. Sendo o primeiro elo de contato entre a instituição e a comunidade acadêmica, cabe ao servidor pautar sua prática pela urbanidade, empatia e presteza, preceitos expressos na Lei nº 8.112/1990 e no Decreto nº 1.171/1994. Eliminar o preconceito velado, simplificar procedimentos burocráticos e prestar atendimento prioritário humanizado são atitudes indispensáveis para que o estudante encontre na universidade um ambiente acolhedor e integrador.

4. CONCLUSÃO (Proposta Resolutiva & Perspectiva de Futuro):
Infere-se, portanto, que a consolidação de uma universidade verdadeiramente democrática exige ações concretas e permanentes. Cabe à Administração Superior da UFBA, por meio de dotação orçamentária específica e parcerias com o Núcleo de Apoio à Inclusão (NAPE), intensificar reformas de acessibilidade predial e oferecer capacitação periódica contínua aos técnico-administrativos em atendimento inclusivo e letramento sobre diversidade. Somente com a conjunção de infraestrutura adequada e sensibilidade humana a UFBA cumprirá integralmente sua missão social e emancipatória.`,
    keywords: [
      'Constituição Federal de 1988 (Direito social à educação e dignidade humana)',
      'Lei nº 13.146/2015 (Estatuto da Pessoa com Deficiência)',
      'Eliminação de barreiras arquitetônicas, comunicacionais e atitudinais',
      'Atuação do Assistente em Administração (atendimento humanizado e urbanidade)',
      'Deveres da Lei nº 8.112/1990 e Código de Ética (Decreto 1.171/1994)',
      'Acessibilidade e tecnologia assistiva (intérpretes de Libras, materiais adaptados)',
      'Permanência estudantil e equidade no ambiente universitário',
      'Proposta de intervenção com agente, ação, meio e finalidade'
    ],
    goldenBizu: 'Redação dissertativa nota 10: 4 parágrafos bem delimitados (Introdução, D1 Lei, D2 Servidor na prática, Conclusão com proposta). Jamais use 1ª pessoa ("eu acho")!',
    gradingCriteria: [
      'Respeito rigoroso à estrutura dissertativo-argumentativa em 4 parágrafos e limite de 20 a 30 linhas.',
      'Fundamentação sólida na CF/88, no Estatuto da Pessoa com Deficiência e na função pública.',
      'Apresentação de proposta de intervenção detalhada com agente, ação, meio e finalidade social.'
    ],
    promptType: 'dissertativa',
    templateSkeleton: `1. INTRODUÇÃO (Apresentação da tese e contexto - 4 a 5 linhas):
A Constituição Federal de 1988 consagra a educação como direito social fundamental, estabelecendo a igualdade de condições para acesso e permanência no ensino superior. Contudo, no contexto da Universidade Federal da Bahia (UFBA), desafios históricos relacionados a [tema central] ainda demandam superação. Nesse cenário, faz-se mister analisar [Argumento 1: dever estatal e legislação] e [Argumento 2: a atuação prática do servidor público].

2. DESENVOLVIMENTO 1 (Fundamentação jurídica e teórica - 6 a 8 linhas):
Em primeiro lugar, é fundamental destacar que [introduzir argumento 1 com base na lei ou princípio administrativo]. De acordo com a legislação vigente, a Administração Pública tem o dever de [explicar o impacto da lei no tema]. Logo, sem investimentos em [estruturas/políticas], perpetua-se um quadro de iniquidade incompatível com o Estado Democrático de Direito.

3. DESENVOLVIMENTO 2 (Rotina e responsabilidade funcional do servidor - 6 a 8 linhas):
Outrossim, cabe salientar o papel decisivo do Assistente em Administração no acolhimento ao cidadão. No exercício de suas atribuições (Lei nº 8.112/1990 e Decreto nº 1.171/1994), o servidor deve atuar com [urbanidade, impessoalidade e presteza], garantindo que [situação prática na secretaria ou órgão]. Dessa forma, a conduta ética e empática constitui pilar basilar da qualidade no serviço público universitário.

4. CONCLUSÃO (Proposta de intervenção e fechamento coeso - 5 a 6 linhas):
Infere-se, portanto, a necessidade de medidas contundentes para mitigar tais problemáticas. Cabe à Reitoria da UFBA, em articulação com [órgão/pró-reitoria competente], implementar [ação concreta], por meio de [meio ou recurso], com o fito de assegurar a plena efetivação do interesse público. Assim, a universidade consolidará seu compromisso cívico e social.`
  },

  // =========================================================================
  // TEMA 8: ESTUDO DE CASO: ACUMULAÇÃO DE CARGOS PÚBLICOS & SINDICÂNCIA
  // =========================================================================
  {
    id: 'ufba-disc-08',
    subject: 'Administração Pública',
    topic: 'Regime Jurídico Único (Lei 8.112/90): Acumulação de Cargos e Processo Disciplinar',
    source: 'Edital UFBA • CF/88 Art. 37, XVI e XVII & Lei nº 8.112/1990 Art. 118, 133',
    difficulty: 'Difícil',
    statement: 'Um servidor ocupante do cargo de provimento efetivo de Assistente em Administração da UFBA, com jornada de 40 horas semanais no turno diurno, foi aprovado e empossado em concurso público municipal para o cargo efetivo de Agente Administrativo, com jornada de 30 horas semanais em horário noturno, no município de Camaçari/BA. Notificado pela Pró-Reitoria de Desenvolvimento de Pessoas (PRODEP/UFBA) sobre a aparente ilicitude da situação funcional, o servidor alegou formalmente que inexiste sobreposição de horários e que suas atribuições na universidade continuam sendo desempenhadas sem qualquer prejuízo. Na condição de Assistente em Administração lotado no setor de gestão de pessoas e com base na Constituição Federal de 1988 e na Lei nº 8.112/1990: 1. Julgue a legalidade ou ilegalidade da acumulação de cargos pretendida pelo servidor; 2. Descreva o procedimento administrativo inicial obrigatório que a UFBA deve adotar para oportunizar o direito de opção (prazo e formalidade do Art. 133); 3. Esclareça qual rito processual e qual penalidade disciplinar serão aplicados caso o servidor recuse a opção ou fique comprovada má-fé.',
    contextHint: 'A regra constitucional é a PROIBIÇÃO de acumulação. As exceções da CF/88 não autorizam dois cargos técnicos/administrativos. Prazo de opção: 10 dias. Penalidade em má-fé: Demissão sob rito sumário.',
    expectedAnswer: `1. ILEGALIDADE ABSOLUTA DA ACUMULAÇÃO DE CARGOS:
A acumulação pretendida é manifestamente ILEGAL e inconstitucional:
• A regra geral estabelecida pelo Artigo 37, inciso XVI, da Constituição Federal de 1988 é a VEDAÇÃO à acumulação remunerada de cargos, empregos e funções públicas, estendida à administração direta, autárquica e fundacional de todos os entes da Federação (União, Estados e Municípios).
• As únicas três exceções constitucionais taxativas que admitem acumulação (desde que haja compatibilidade de horários) são:
  a) Dois cargos de professor;
  b) Um cargo de professor com outro técnico ou científico;
  c) Dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.
• O caso em análise envolve dois cargos estritamente técnico-administrativos (Assistente em Administração da UFBA e Agente Administrativo Municipal). Portanto, mesmo que haja compatibilidade fática de horários, a acumulação é juridicamente VEDADA pelo texto constitucional.

2. PROCEDIMENTO INICIAL DE NOTIFICAÇÃO E PRAZO DE OPÇÃO (LEI Nº 8.112/1990):
Conforme determina o Artigo 133 da Lei nº 8.112/1990:
• Detectada a qualquer tempo a acumulação ilegal de cargos, a autoridade administrativa notificará formalmente o servidor, por intermédio de sua chefia imediata, para que apresente OPÇÃO por um dos cargos no prazo improrrogável de 10 (dez) dias corridos;
• Se o servidor fizer a opção tempestiva por um dos cargos no prazo legal e for comprovada a boa-fé, o procedimento é arquivado administrativamente, sem aplicação de sanção disciplinar, cabendo ao servidor exonerar-se do outro vínculo.

3. PROCESSO DISCIPLINAR SUMÁRIO E PENALIDADE DE DEMISSÃO:
Caso o servidor permaneça silente, recuse formalmente exercer a opção no prazo de 10 dias ou caso fique demonstrada má-fé:
• Rito Sumário: A autoridade instaurará Processo Administrativo Disciplinar submetido a Rito Sumário (conduzido por comissão composta por 2 servidores estáveis);
• O procedimento sumário observará as fases de instauração/instrução sumária, defesa no prazo de 5 dias e relatório conclusivo;
• Penalidade Disciplinar: Comprovada a infração e caracterizada a má-fé, a penalidade aplicável é a DEMISSÃO do cargo federal na UFBA (com comunicação imediata ao Município para adoção de providências cabíveis) e devolução aos cofres públicos dos valores indevidamente percebidos.`,
    keywords: [
      'Inconstitucionalidade da acumulação (CF/88 Artigo 37, inciso XVI)',
      'Regra geral da não acumulação remunerada de cargos públicos',
      'Exceções taxativas da CF/88 (dois de professor, professor + técnico, dois de saúde)',
      'Dois cargos técnicos/administrativos não podem ser acumulados em hipótese alguma',
      'Artigo 133 da Lei nº 8.112/1990 (notificação para opção)',
      'Prazo improrrogável de 10 dias corridos para opção de cargo',
      'Processo Administrativo Disciplinar sob Rito Sumário (comissão de 2 servidores)',
      'Penalidade de Demissão em caso de recusa ou má-fé com ressarcimento ao erário'
    ],
    goldenBizu: 'Dois cargos administrativos NÃO acumulam NUNCA, mesmo com horários compatíveis! A UFBA dá 10 dias para o servidor escolher um. Se teimar ou houver má-fé = Rito Sumário e DEMISSÃO!',
    gradingCriteria: [
      'Demonstrar a ilicitude da acumulação citando o rol taxativo do art. 37, XVI da CF/88.',
      'Indicar com exatidão o procedimento de notificação e o prazo de 10 dias para opção (art. 133 da Lei 8.112/90).',
      'Especificar o cabimento do Rito Sumário e a penalidade de Demissão na constatação de má-fé.'
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. DIAGNÓSTICO JURÍDICO DA SITUAÇÃO APRESENTADA:
Diante dos fatos narrados, constata-se a manifesta ilegalidade e inconstitucionalidade da acumulação pretendida. Com fulcro no Artigo 37, inciso XVI, da Carta Magna de 1988, a acumulação remunerada de cargos públicos é regra geral vedada, comportando exceções estritas (dois de professor, professor com técnico ou dois de saúde). Sendo ambos os cargos de natureza técnico-administrativa, a sobreposição ou compatibilidade de horários é irrelevante, mantendo-se a proibição jurídica.

2. MEDIDA ADMINISTRATIVA DA UFBA (DIREITO DE OPÇÃO):
Nos termos do Artigo 133 da Lei nº 8.112/1990, a Administração Pública deve notificar o servidor por escrito para que exerça, no prazo improrrogável de 10 (dez) dias, o direito de opção por um dos cargos. Havendo manifestação tempestiva e caracterizada a boa-fé, o servidor renuncia ao outro vínculo e o processo é saneado.

3. CONSEQUÊNCIAS PROCESSUAIS E PENALIDADES:
Na hipótese de inércia, recusa ou comprovada má-fé, a autoridade instaurará Processo Administrativo Disciplinar sob rito sumário (comissão de 2 servidores estáveis), culminando na aplicação da penalidade de demissão do cargo público federal e dever de ressarcimento ao erário.`
  },

  // =========================================================================
  // TEMA 9: ESTUDO DE CASO: LEI DE ACESSO À INFORMAÇÃO (LAI) NA UFBA
  // =========================================================================
  {
    id: 'ufba-disc-09',
    subject: 'Administração Pública',
    topic: 'Transparência Pública: Lei de Acesso à Informação (LAI - Lei 12.527/2011)',
    source: 'Edital UFBA • Lei nº 12.527/2011 e Decreto nº 7.724/2012',
    difficulty: 'Médio',
    statement: 'Um cidadão compareceu ao balcão de atendimento da Ouvidoria/Protocolo da UFBA solicitando cópia integral da relação nominal com os valores de remuneração bruta, gratificações e diárias pagas aos servidores e gestores lotados em determinada pró-reitoria no mês anterior. O servidor público que o atendeu negou oralmente a solicitação, afirmando que "os vencimentos dos servidores são dados estritamente pessoais e sigilosos" e que "o requerente não tem legitimidade, pois não justificou o motivo ou interesse particular da consulta". Com base na Lei de Acesso à Informação (Lei nº 12.527/2011) e no Decreto nº 7.724/2012: 1. Avalie a juridicidade da conduta do servidor e esclareça a distinção entre transparência ativa e transparência passiva no poder público; 2. Explique se a legislação exige que o solicitante apresente a motivação ou justificativa do pedido para ter acesso à informação pública; 3. Descreva os prazos legais de resposta (quando a informação não puder ser entregue imediatamente) e aponte as responsabilidades administrativas do servidor que obstrui imotivadamente o acesso à informação.',
    contextHint: 'Publicidade é a regra, sigilo é a exceção. Salários de servidores em órgãos públicos são de transparência ativa! É proibido exigir motivação. Prazos: imediato ou 20 dias (+10 com justificativa).',
    expectedAnswer: `1. ILEGALIDADE DA NEGATIVA E DISTINÇÃO ENTRE TRANSPARÊNCIA ATIVA E PASSIVA:
A conduta do servidor atenta diretamente contra os ditames da Lei nº 12.527/2011 (LAI) e os princípios constitucionais da publicidade e moralidade (CF/88 Art. 37):
• Princípio da Publicidade como Regra Geral: No serviço público, a publicidade é a regra e o sigilo é exceção taxativa. A remuneração paga com recursos do erário público, diárias e subsídios de agentes públicos não configuram segredo, possuindo natureza pública (STF - Tema 483 de Repercussão Geral).
• Transparência Ativa: Obrigação de os órgãos públicos divulgarem em seus sítios oficiais na internet, de ofício e independentemente de solicitação, informações de interesse coletivo ou geral (incluindo a tabela de remuneração nominal dos servidores, licitações, contratos e repasses).
• Transparência Passiva: Dever da instituição de atender tempestivamente às solicitações individuais ou coletivas de informações demandadas pelos cidadãos através do Serviço de Informação ao Cidadão (SIC).

2. DESNECESSIDADE ABSOLUTA DE MOTIVAÇÃO DO PEDIDO:
O Artigo 10, § 3º, da Lei nº 12.527/2011 expressamente VEDA que a Administração Pública faça exigências relativas aos motivos determinantes da solicitação de informações de interesse público.
• O cidadão não é obrigado a justificar "para que quer a informação" nem demonstrar interesse jurídico ou pessoal específico; basta a sua identificação civil básica e a delimitação clara da informação pretendida.

3. PRAZOS LEGAIS DE RESPOSTA E RESPONSABILIZAÇÃO FUNCIONAL:
• Prazos de Resposta (Art. 11 da LAI):
  - Regra: O acesso deve ser concedido de imediato, se a informação já estiver disponível.
  - Exceção: Não sendo possível o fornecimento imediato, o órgão tem o prazo de até 20 (vinte) dias para responder, prorrogável justificadamente por mais 10 (dez) dias mediante ciência expressa ao requerente.
• Responsabilidade Administrativa do Agente (Art. 32 da LAI):
  - Recusar-se a fornecer informação requerida nos termos da lei, retardar deliberadamente o seu fornecimento ou prestar informação falsa ou incompleta constitui CONDUTA ILÍCITA sujeita a processo disciplinar, punível com advertência, suspensão e, em caso de reincidência ou ato ímprobo, demissão do cargo.`,
    keywords: [
      'Princípio da publicidade como regra geral e sigilo como exceção (LAI)',
      'Remuneração e diárias de servidores públicos são dados públicos (STF)',
      'Transparência Ativa (divulgação espontânea em portal oficial/internet)',
      'Transparência Passiva (atendimento aos pedidos via SIC/Ouvidoria)',
      'Vedação expressa à exigência de motivação do pedido (Art. 10, § 3º)',
      'Prazo legal de resposta: imediato ou até 20 dias (prorrogável por mais 10)',
      'Responsabilização funcional e infração disciplinar do servidor (Art. 32 da LAI)'
    ],
    goldenBizu: 'Na LAI, publicidade é regra e sigilo é exceção. Salário de servidor público é público! Ninguém precisa justificar "para que quer a informação". Prazo: 20 dias (+10 com justificativa)!',
    gradingCriteria: [
      'Condenar a recusa do servidor com fundamento no princípio da publicidade e na LAI.',
      'Diferenciar com precisão transparência ativa e transparência passiva.',
      'Destacar a proibição de exigir motivos determinantes e os prazos de 20 (+10) dias.'
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. ANÁLISE DA CONDUTA E PRINCÍPIO DA PUBLICIDADE:
A negativa verbal manifestada pelo servidor viola frontalmente a Lei nº 12.527/2011 (LAI) e o artigo 37 da Constituição Federal. Na Administração Pública, a publicidade é a regra soberana, sendo o sigilo exceção restrita a hipóteses de segurança do Estado ou intimidade estrita. Remunerações, diárias e proventos custeados pelo erário são dados de transparência ativa obrigatória (STF), de divulgação pública permanente nos portais oficiais.

2. VEDAÇÃO À EXIGÊNCIA DE MOTIVAÇÃO:
Ressalta-se que o Artigo 10, § 3º, da LAI veda expressamente qualquer exigência sobre os motivos determinantes da solicitação de informações públicas. O cidadão possui direito subjetivo de acesso sem necessidade de justificar seu interesse particular.

3. PRAZOS LEGAIS E RESPONSABILIZAÇÃO DO SERVIDOR:
O fornecimento da informação deve ocorrer de imediato ou, impossibilitado este, no prazo de 20 dias (prorrogável por 10 dias com justificativa expressa). A recusa imotivada ou retardamento constitui infração disciplinar passível de penalidades na forma da Lei nº 8.112/1990 e responsabilização funcional do agente.`
  },

  // =========================================================================
  // TEMA 10: ESTUDO DE CASO: PROTOCOLO & TRAMITAÇÃO PROCESSUAL NA UFBA
  // =========================================================================
  {
    id: 'ufba-disc-10',
    subject: 'Conhecimentos Específicos',
    topic: 'Gestão de Documentos: Fases do Protocolo e Tramitação Processual na UFBA',
    source: 'Edital UFBA • Manual de Protocolo do Serviço Público & Lei nº 9.784/1999',
    difficulty: 'Médio',
    statement: 'O setor de Protocolo Geral da UFBA é a porta de entrada e saída das comunicações oficiais, petições de estudantes e processos administrativos da universidade. Um estudante deu entrada em um requerimento formal solicitando aproveitamento de estudos e validação de disciplinas cursadas no exterior. Como Assistente em Administração responsável pelo atendimento e triagem do setor: 1. Descreva as 4 etapas essenciais executadas pelo Protocolo (Recebimento, Registro/Autuação, Classificação/Distribuição e Expedição/Tramitação); 2. Explique a finalidade da atribuição do Número Único de Protocolo (NUP) e a importância do comprovante de entrega emitido ao interessado; 3. Relacione a correta gestão do protocolo aos princípios da celeridade, eficiência e segurança jurídica assegurados pela Lei do Processo Administrativo Federal (Lei nº 9.784/1999).',
    contextHint: 'Protocolo é o coração da tramitação. Diferencie Recebimento (conferência), Registro/Autuação (criação do processo com NUP), Distribuição (encaminhamento interno) e Expedição (saída externa).',
    expectedAnswer: `1. AS QUATRO ETAPAS ESSENCIAIS DO PROTOCOLO UNIVERSITÁRIO:
O setor de protocolo executa rotinas técnicas indispensáveis para a rastreabilidade e validade formal dos documentos:
• 1ª Etapa - Recebimento e Conferência: Exame físico ou digital da documentação entregue, verificação de anexos, integridade das folhas, autenticidade e triagem da correspondência (distinguindo correspondência oficial de correspondência ostensiva ou particular).
• 2ª Etapa - Registro e Autuação: Cadastramento dos metadados do documento no sistema eletrônico de informações (SIPAC/SEI), conferindo-lhe uma capa de processo, numeração sequencial e formalizando o requerimento como Processo Administrativo (autuação).
• 3ª Etapa - Classificação e Distribuição: Enquadramento do processo segundo o código do plano de classificação de documentos e encaminhamento físico ou eletrônico à unidade competente interna para instrução (no caso, o Colegiado de Curso ou a Pró-Reitoria de Graduação - PROGRAD).
• 4ª Etapa - Expedição e Tramitação: Controle de envio, movimentação e saída de documentos entre as unidades universitárias ou para órgãos externos, registrando a data, hora e servidor recebedor (guia de remessa).

2. FINALIDADE DO NÚMERO ÚNICO DE PROTOCOLO (NUP) E DO COMPROVANTE:
• Número Único de Protocolo (NUP): Código numérico padronizado nacionalmente no âmbito federal que individualiza e identifica o processo durante toda a sua existência física ou digital, impedindo duplicidades e viabilizando a consulta pública pelo portal da universidade.
• Comprovante de Protocolo (Recibo): Documento formal entregue ao interessado (estudante) que atesta a data, hora exata e setor em que o requerimento foi protocolado. Constitui prova jurídica irrefutável da tempestividade do pedido perante prazos regimentais e editalícios.

3. RELAÇÃO COM A LEI Nº 9.784/1999 E PRINCÍPIOS DA ADMINISTRAÇÃO:
A rotina célere e organizada do protocolo materializa diretamente os mandamentos da Lei do Processo Administrativo Federal:
• Princípio da Celeridade Processual e Eficiência: Garante que os requerimentos dos estudantes e cidadãos tramitem sem retenções indevidas ou extravios, assegurando uma resposta tempestiva da universidade.
• Princípio da Segurança Jurídica e Confiança Legítima: A numeração contínua e a autuação impedem a inserção ou supressão indevida de folhas e atos processuais, resguardando o direito ao contraditório, à ampla defesa e ao devido processo legal.`,
    keywords: [
      'Etapa 1: Recebimento e conferência de documentos e anexos',
      'Etapa 2: Registro e Autuação (formalização do processo administrativo)',
      'Etapa 3: Classificação documental e Distribuição interna',
      'Etapa 4: Expedição e Tramitação com guias de remessa',
      'Número Único de Protocolo (NUP) para rastreabilidade inalterável',
      'Comprovante de protocolo como garantia de tempestividade ao cidadão',
      'Princípios da Celeridade e Eficiência (Lei nº 9.784/1999)',
      'Segurança jurídica e integridade dos autos processuais'
    ],
    goldenBizu: 'As 4 fases do Protocolo são: Receber (confere) -> Registrar/Autuar (cria o NUP) -> Distribuir (manda pro setor certo) -> Expedir (tramita). O comprovante do aluno prova a data exata da entrega!',
    gradingCriteria: [
      'Descrever com precisão as quatro etapas do protocolo na sequência correta.',
      'Conceituar o NUP e o valor probatório do recibo de protocolo.',
      'Fundamentar a relevância na celeridade e na segurança jurídica sob a Lei nº 9.784/1999.'
    ],
    promptType: 'estudo_de_caso',
    templateSkeleton: `1. AS QUATRO FASES ESSENCIAIS DO PROTOCOLO UNIVERSITÁRIO:
A tramitação de documentos na UFBA rege-se por etapas técnicas padronizadas:
• Recebimento: Conferência documental, verificação de peças e integridade de anexos;
• Registro e Autuação: Cadastramento no sistema informatizado, geração da capa do processo e atribuição do número processual;
• Classificação e Distribuição: Enquadramento no plano de classificação e direcionamento ao setor técnico competente;
• Expedição e Tramitação: Registro de saída e movimentação entre as unidades mediante guia de controle.

2. PAPEL DO NUP E DO RECIBO DE PROTOCOLO:
O Número Único de Protocolo (NUP) garante a identificação unívoca e rastreabilidade vital do processo. Concomitantemente, a entrega do comprovante de protocolo ao estudante assegura prova irrefutável da tempestividade do requerimento frente aos calendários acadêmicos.

3. EFICIÊNCIA E SEGURANÇA JURÍDICA (LEI Nº 9.784/1999):
A gestão protocolar célere concretiza os princípios da eficiência, razoável duração do processo e segurança jurídica, resguardando os direitos dos administrados contra extravios e morosidade burocrática.`
  }
];
