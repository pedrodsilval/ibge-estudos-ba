import type { DiscursiveQuestion } from '../types/study';

export const DISCURSIVE_QUESTIONS: DiscursiveQuestion[] = [
  // ==========================================
  // DISCIPLINA 1: QUALIDADE DE SOFTWARE (TERÇA)
  // ==========================================
  {
    id: 'disc-qs-01',
    subject: 'Qualidade de Software',
    topic: 'Revisões Técnicas (RTF)',
    source: 'UNIFACS - Folha de Revisão Oficial (Q01) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Explique as diferenças entre revisões técnicas formais e informais, destacando suas principais características e a maneira como cada uma contribui para a garantia da qualidade do software.',
    contextHint: 'Lembre-se da definição de atividade estática e do contraste entre o dia a dia ágil e as reuniões estruturadas de auditoria.',
    expectedAnswer: `As revisões técnicas são atividades de controle estático de qualidade (realizadas sem executar o código) voltadas para a detecção precoce de defeitos. Elas se dividem em:

1. Revisões Técnicas Informais:
• Características: Não exigem agendamento formal prévio, formulários padronizados ou papéis rígidos. Exemplos incluem o teste de mesa individual, o pair programming (programação em pares) e a leitura cruzada rápida de código entre colegas.
• Contribuição: Oferecem feedback em tempo real com custo e atrito mínimos, agilidade para sanar dúvidas imediatas e melhoria contínua da qualidade no fluxo diário de desenvolvimento.

2. Revisões Técnicas Formais (RTF):
• Características: São reuniões estruturadas, convocadas e planejadas com antecedência. Seguem regras rígidas: equipe pequena de 3 a 5 membros, duração máxima de 2 horas, material distribuído previamente com checklists de inspeção, e papéis bem definidos (produtor, líder, revisores e registrador). Produzem atas e relatórios oficiais assinados.
• Contribuição: Filtram defeitos graves de concepção, arquitetura, lógica e especificação antes que avancem para as fases de teste e homologação (onde o custo de correção pode ser até 100 vezes maior), garantindo rigor técnico e padronização institucional.`,
    keywords: [
      'Atividade estática (sem execução)',
      'Informal: teste de mesa / pair programming',
      'Informal: sem formulários / feedback imediato',
      'RTF Formal: estruturada / planejada',
      '3 a 5 participantes / duração < 2 horas',
      'Checklists antecipados / papéis definidos',
      'Custo da correção precoce (amplificação de defeitos)',
      'Ata oficial / relatório sintetizado'
    ],
    goldenBizu: 'Informal = dia a dia sem cerimônia (teste de mesa, pair programming). Formal (RTF) = reunião militar (3-5 pessoas, <2h, checklist, papéis definidos e ata oficial).',
    gradingCriteria: [
      'Conceituação de revisão estática (sem execução do código).',
      'Diferenciação clara quanto à cerimônia, planejamento e papéis.',
      'Citar exemplos reais (pair programming vs reunião com checklist e ata).',
      'Explicar o impacto no custo de correção precoce dos defeitos.'
    ]
  },
  {
    id: 'disc-qs-02',
    subject: 'Qualidade de Software',
    topic: 'Revisões Técnicas (RTF)',
    source: 'UNIFACS - Folha de Revisão Oficial (Q02) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Identifique os principais participantes de uma revisão técnica formal e descreva as responsabilidades desempenhadas por cada um deles durante o processo de revisão.',
    contextHint: 'São exatamente 4 papéis essenciais. Lembre-se da regra de ouro: "Revisa-se o produto, nunca o produtor".',
    expectedAnswer: `Em uma Revisão Técnica Formal (RTF), o grupo é restrito a 3 a 5 pessoas, distribuídas em 4 papéis fundamentais:

1. Produtor:
• É o desenvolvedor ou engenheiro que elaborou o artefato (código, diagrama de classes, especificação de requisitos).
• Responsabilidade: Apresenta uma visão geral do artefato no início e esclarece dúvidas dos colegas.
• Regra crucial: O produtor NÃO preside nem lidera a reunião, e deve adotar postura receptiva, lembrando que o foco da análise é a qualidade do artefato e não a sua competência pessoal.

2. Líder da Revisão:
• Responsabilidade: Planeja a reunião, convoca os participantes, distribui os artefatos e checklists com antecedência mínima, modera as discussões para manter o foco na pauta e garante que o tempo limite de 2 horas não seja ultrapassado.

3. Revisores:
• Responsabilidade: Especialistas técnicos que recebem e inspecionam o artefato previamente. Na reunião, apontam defeitos, inconsistências, omissões e desvios de conformidade com os padrões adotados.

4. Registrador (Secretário):
• Responsabilidade: Papel assumido por um dos revisores. Tem a função exclusiva de registrar por escrito todas as pendências e problemas identificados, gerando a "Lista de Problemas de Revisão" e a ata da sessão.`,
    keywords: [
      'Produtor (autor do artefato, nunca lidera)',
      'Líder (planeja, convoca, controla o tempo < 2h)',
      'Revisores (analisam com checklists, apontam defeitos)',
      'Registrador / Secretário (anota problemas na ata)',
      'Revisa-se o produto, nunca o produtor'
    ],
    goldenBizu: 'Produtor apresenta o código; Líder vigia o relógio e a pauta; Revisores caçam os erros; Registrador anota as pendências na ata.',
    gradingCriteria: [
      'Nomear os 4 papéis canônicos de Pressman.',
      'Ressaltar que o produtor não lidera a reunião.',
      'Destacar que a função do registrador garante que nenhum defeito seja esquecido.'
    ]
  },
  {
    id: 'disc-qs-03',
    subject: 'Qualidade de Software',
    topic: 'Revisões Técnicas (RTF)',
    source: 'UNIFACS - Folha de Revisão Oficial (Q03) • Pressman 9ª ed.',
    difficulty: 'Médio',
    statement: 'Quais são as possíveis decisões formais que podem ser tomadas ao final de uma Revisão Técnica Formal (RTF)? Identifique os principais documentos produzidos durante esse processo e explique suas finalidades.',
    contextHint: 'Existem exatamente 3 decisões consensuais e 2 documentos oficiais produzidos.',
    expectedAnswer: `Ao término de uma RTF, os participantes tomam em consenso uma das 3 DECISÕES FORMAIS:
1. Aceitar o artefato sem modificações: O artefato atingiu os padrões de qualidade exigidos e está aprovado para a próxima etapa do ciclo de vida.
2. Rejeitar o artefato devido a erros graves: O artefato possui falhas conceituais ou arquiteturais críticas. O produtor deve refazê-lo e submetê-lo a uma nova RTF plenária completa.
3. Aceitar o artefato provisoriamente (com modificações menores): Foram identificados apenas erros pontuais. O produtor realiza os ajustes e um revisor ou o líder confere as correções individualmente, sem necessidade de reconvocar todo o grupo.

DOCUMENTOS PRODUZIDOS:
1. Lista de Problemas de Revisão (Issues List):
• Finalidade: Documento técnico interno que cataloga item a item os defeitos, inconsistências e trechos a corrigir. Serve como guia de trabalho direto para o produtor.
2. Relatório Sintetizado da Revisão (Ata da RTF):
• Finalidade: Documento executivo formal assinado por todos os membros. Contém o artefato revisado, data, membros presentes, tempo gasto, a decisão tomada (Aceito/Rejeitado/Provisório) e é encaminhado à gerência do projeto para auditoria e controle de qualidade.`,
    keywords: [
      '3 Decisões: Aceitar, Rejeitar, Aceitar Provisoriamente',
      'Aceitar sem modificações',
      'Rejeitar por erros graves (exige nova RTF)',
      'Aceitar provisoriamente (modificações menores, sem nova RTF)',
      'Lista de Problemas de Revisão (guia do desenvolvedor)',
      'Relatório Sintetizado da Revisão (ata para a gerência)'
    ],
    goldenBizu: 'Decisões: Aprovado, Reprovado (faz outra RTF) ou Provisório (corrige pontinhos e mostra pro líder). Documentos: Lista de Problemas (pro dev consertar) e Relatório Sintetizado (pra chefia arquivar).',
    gradingCriteria: [
      'Citar as 3 decisões exatas de Pressman.',
      'Diferenciar o destino da rejeição (nova reunião) do aceite provisório (apenas conferência).',
      'Distinguir os 2 documentos e seus públicos-alvo (dev vs gerência).'
    ]
  },
  {
    id: 'disc-qs-04',
    subject: 'Qualidade de Software',
    topic: 'Revisões Técnicas (RTF)',
    source: 'UNIFACS - Folha de Revisão Oficial (Q04) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Quais são os principais objetivos das revisões técnicas formais no processo de garantia da qualidade?',
    contextHint: 'Pense em detecção precoce, redução de custos de retrabalho e nivelamento do time.',
    expectedAnswer: `Os principais objetivos das Revisões Técnicas Formais (RTF) são:
1. Descoberta Precoce de Defeitos: Localizar erros de especificação, lógica, cálculo e omissões ainda nas etapas de engenharia (requisitos, modelagem e codificação), impedindo o efeito de amplificação de defeitos.
2. Redução Drástica dos Custos de Retrabalho: Corrigir um erro durante a revisão custa de 10 a 100 vezes menos do que corrigi-lo em fase de homologação ou após o deploy em produção.
3. Garantia de Conformidade com Padrões: Assegurar que o código e artefatos sigam os padrões de arquitetura, legibilidade, segurança e boas práticas da organização.
4. Nivelamento e Disseminação do Conhecimento: Funciona como treinamento prático contínuo, fazendo com que desenvolvedores aprendam com os artefatos revisados e ninguém seja o único detentor do conhecimento sobre um módulo.
5. Melhoria Contínua do Processo de Software: O histórico de defeitos catalogados nas revisões serve como métrica para aprimorar os checklists e treinamentos futuros da empresa.`,
    keywords: [
      'Descoberta precoce de defeitos',
      'Redução de custo de retrabalho',
      'Evitar amplificação de defeitos',
      'Garantir conformidade com padrões e normas',
      'Disseminação de conhecimento técnico na equipe'
    ],
    goldenBizu: 'RTF serve para achar erro antes que vire desastre caro, garantir que o código segue o padrão da empresa e nivelar o conhecimento da equipe.',
    gradingCriteria: [
      'Mencionar a redução de custo associada à detecção precoce.',
      'Citar padronização e manutenção do código.',
      'Mencionar o ganho pedagógico/compartilhamento de conhecimento no time.'
    ]
  },
  {
    id: 'disc-qs-05',
    subject: 'Qualidade de Software',
    topic: 'Testes de Sistema',
    source: 'UNIFACS - Folha de Revisão Oficial (Q05) • Pressman / Sommerville',
    difficulty: 'Médio',
    statement: 'Quais os tipos de testes que compõem os testes de sistema? Explique cada um deles.',
    contextHint: 'Testes de sistema avaliam o software integrado com hardware, rede e dados. Lembre-se de Recuperação, Segurança, Estresse e Desempenho.',
    expectedAnswer: `Os testes de sistema avaliam o software em sua totalidade, integrado com o hardware, sistemas operacionais e infraestrutura de rede. Os 4 principais tipos descritos por Pressman são:

1. Teste de Recuperação (Recovery Testing):
• Objetivo: Força a falha intencional do sistema (queda de energia, desconexão de rede, encerramento abrupto do banco de dados) para verificar se o software consegue se recuperar sem perda de integridade dos dados e retornar ao estado operacional no tempo tolerável estabelecido (RTO/RPO).

2. Teste de Segurança (Security Testing):
• Objetivo: Valida os mecanismos de proteção contra acessos não autorizados, invasões, injeção de dados maliciosos (ex: SQL Injection, XSS) e vazamento de informações confidenciais.

3. Teste de Estresse (Stress Testing):
• Objetivo: Submete o sistema a cargas anormais e extremas, muito além de sua capacidade operacional máxima especificada (ex: 50.000 requisições simultâneas em um servidor dimensionado para 5.000). O objetivo é observar o comportamento de degradação graciosa ("graceful degradation") e assegurar que o sistema falhe sem corromper a base de dados.

4. Teste de Desempenho (Performance Testing):
• Objetivo: Avalia o tempo de resposta em tempo de execução, taxa de transferência (throughput) e o consumo de recursos (CPU, memória RAM, I/O de disco) sob condições normais e de pico planejadas.`,
    keywords: [
      'Teste de Recuperação: tolerância a falhas / reinício íntegro',
      'Teste de Segurança: blindagem contra invasão e acessos indevidos',
      'Teste de Estresse: além do limite / degradação suave sem corrupção',
      'Teste de Desempenho: tempo de resposta / throughput / consumo de memória e CPU'
    ],
    goldenBizu: 'Recuperação = se cair, levanta sem perder dados; Segurança = se tentarem invadir, bloqueia; Estresse = força além do limite pra ver onde quebra; Desempenho = mede velocidade e consumo.',
    gradingCriteria: [
      'Conceituar os 4 tipos clássicos de Pressman.',
      'Diferenciar claramente Estresse (além do limite) de Desempenho (dentro das especificações normais/pico).'
    ]
  },
  {
    id: 'disc-qs-06',
    subject: 'Qualidade de Software',
    topic: 'Caixa-Preta vs Caixa-Branca',
    source: 'UNIFACS - Folha de Revisão Oficial (Q06) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Diferencie testes de caixa-branca e testes de caixa-preta, destacando o foco de atuação e os tipos de defeitos que cada abordagem tem maior capacidade de revelar.',
    contextHint: 'Caixa-preta = funcional (olha entradas e saídas). Caixa-branca = estrutural (olha código, loops, branches).',
    expectedAnswer: `A diferença fundamental entre as duas abordagens reside na visibilidade e dependência da estrutura interna do código:

1. Teste de Caixa-Preta (Teste Funcional ou Comportamental):
• Foco de Atuação: Examina o software exclusivamente pela sua interface externa, tratando o código-fonte como uma "caixa opaca". Os casos de teste são derivados diretamente dos requisitos e casos de uso, aplicando entradas e comparando as saídas obtidas com as saídas esperadas.
• Defeitos Revelados (Mnemônico F-I-B-D-T):
  - Funções incorretas ou ausentes em relação aos requisitos;
  - Erros de interface com o usuário ou com sistemas externos;
  - Erros em estruturas de dados ou acesso a banco de dados;
  - Erros de desempenho e tempo de resposta;
  - Falhas de inicialização e término de processos.

2. Teste de Caixa-Branca (Teste Estrutural):
• Foco de Atuação: Baseia-se no conhecimento profundo e minucioso da arquitetura interna e do código-fonte. O analista projeta testes para exercitar caminhos lógicos específicos, instruções, condições verdadeiras/falsas e loops.
• Defeitos Revelados:
  - Erros de lógica e algoritmos internos;
  - Código morto ou caminhos inalcançáveis;
  - Erros de fronteira em condições lógicas (ex: "<" em vez de "<=");
  - Inicialização incorreta de variáveis acumuladoras e laços infinitos;
  - Vulnerabilidades de ponteiros e estouro de limites de memória.`,
    keywords: [
      'Caixa-Preta: funcional / entradas e saídas / ignora código interno',
      'Erros revelados Caixa-Preta: funções ausentes, interface, requisitos',
      'Caixa-Branca: estrutural / conhecimento do código-fonte',
      'Erros revelados Caixa-Branca: caminhos lógicos, decisões V/F, limites de loops, variáveis mal inicializadas'
    ],
    goldenBizu: 'Caixa-preta testa "o que" o sistema faz (requisitos e telas). Caixa-branca testa "como" o código está construído por dentro (ifs, whiles e caminhos).',
    gradingCriteria: [
      'Diferenciação clara entre funcional (externo) e estrutural (código).',
      'Indicação dos tipos específicos de defeitos que cada técnica é mais eficiente em encontrar.'
    ]
  },
  {
    id: 'disc-qs-07',
    subject: 'Qualidade de Software',
    topic: 'Caixa-Branca / Caminho Básico',
    source: 'UNIFACS - Folha de Revisão Oficial (Q07) • Tom McCabe',
    difficulty: 'Médio',
    statement: 'Qual a finalidade do teste de caminho básico na abordagem de testes de caixa-branca?',
    contextHint: 'Relacione com o grafo de fluxo do programa e a garantia de cobertura de comandos.',
    expectedAnswer: `A finalidade primordial da técnica de Teste de Caminho Básico (proposta por Tom McCabe) é permitir que o projetista de testes derive um conjunto-base de caminhos de execução independentes através do código-fonte.

Suas principais finalidades são:
1. Garantir Cobertura Mínima Completa: Assegura que cada comando e instrução executável dentro do módulo seja percorrido pelo menos uma vez durante a bateria de testes.
2. Exercitar Todas as Decisões Lógicas: Garante que cada condição condicional (if, switch, while) seja testada em ambos os seus desfechos lógicos possíveis (Verdadeiro e Falso).
3. Determinar o Teto de Testes Necessários: Fornece um critério matemático rigoroso (a Complexidade Ciclomática) que define exatamente o número mínimo de casos de teste necessários e suficientes para atingir 100% de cobertura de comandos, evitando tanto testes redundantes quanto lacunas críticas.`,
    keywords: [
      'Conjunto-base de caminhos independentes',
      'Executar cada comando ao menos uma vez',
      'Exercitar decisões em Verdadeiro e Falso',
      'Critério matemático (teto de casos de teste)',
      'Eliminar testes redundantes e cobrir lacunas'
    ],
    goldenBizu: 'Caminho básico serve para criar a menor quantidade de testes possível que consiga passar por 100% das linhas e decisões (V e F) do código sem esquecer nada.',
    gradingCriteria: [
      'Definir conjunto-base de caminhos independentes.',
      'Ressaltar a cobertura de 100% dos comandos e ramos (V/F).',
      'Citar o papel da complexidade ciclomática como métrica do número de testes.'
    ]
  },
  {
    id: 'disc-qs-08',
    subject: 'Qualidade de Software',
    topic: 'Complexidade Ciclomática',
    source: 'UNIFACS - Folha de Revisão Oficial (Q08) • Tom McCabe',
    difficulty: 'Médio',
    statement: 'O que mede a complexidade ciclomática na abordagem de testes de caminho básico? Como ela pode ser calculada?',
    contextHint: 'Lembre-se das 3 fórmulas equivalentes: Regiões, Arestas - Nós + 2, e Predicados + 1.',
    expectedAnswer: `A Complexidade Ciclomática, métrica desenvolvida por Thomas McCabe, mede a complexidade lógica quantitativa de um programa ou método, refletindo diretamente o número de caminhos linearmente independentes presentes no código. Na prática de testes, ela define o limite superior (o teto) de casos de teste que devem ser elaborados para garantir que todos os comandos sejam executados ao menos uma vez.

FORMAS EQUIVALENTES DE CÁLCULO:
Baseando-se no Grafo de Fluxo do programa, onde nós (N) representam comandos sequenciais e arestas (E) representam o fluxo de controle:

1. Método das Regiões:
V(G) = Número de Regiões planas delimitadas pelas arestas do grafo (contando todas as regiões fechadas + a região externa aberta).

2. Método Arestas e Nós:
V(G) = E - N + 2
Onde E = número de arestas (edges) e N = número de nós (nodes).

3. Método dos Nós Predicados:
V(G) = P + 1
Onde P é o número de nós predicados (nós de decisão condicional que bifurcam o fluxo, como ifs, whiles, for, cases).

INTERPRETAÇÃO: Se V(G) = 4, significa que existem exatamente 4 caminhos independentes e são necessários no mínimo 4 casos de teste distintos.`,
    keywords: [
      'Complexidade lógica quantitativa',
      'Número de caminhos linearmente independentes',
      'Teto máximo de casos de teste necessários',
      'V(G) = Regiões',
      'V(G) = E - N + 2',
      'V(G) = P + 1 (Nós de decisão + 1)'
    ],
    goldenBizu: 'V(G) é o número de testes que você TEM que fazer. Pode calcular por: Regiões (fechadas + 1 fora), Arestas - Nós + 2, ou Nós de Decisão (P) + 1.',
    gradingCriteria: [
      'Definir que mede a complexidade lógica e quantifica caminhos independentes.',
      'Apresentar corretamente as 3 fórmulas de McCabe.',
      'Explicar o significado prático do resultado para o planejamento de testes.'
    ]
  },
  {
    id: 'disc-qs-09',
    subject: 'Qualidade de Software',
    topic: 'Testes de Integração',
    source: 'UNIFACS - Folha de Revisão Oficial (Q09) • Pressman 9ª ed.',
    difficulty: 'Médio',
    statement: 'Explique a diferença entre abordagem top-down e bottom-up nos testes de integração e a função dos stubs e drivers em cada uma delas.',
    contextHint: 'Top-down começa no topo (controlador) e usa STUB. Bottom-up começa na base (utilitários) e usa DRIVER.',
    expectedAnswer: `Os testes de integração verificam a correta comunicação e integridade entre os módulos unitários do sistema. As duas estratégias clássicas diferem no sentido de montagem e no tipo de módulo falso utilizado:

1. Abordagem Top-Down (Descendente):
• Como funciona: A integração inicia no módulo principal (módulo de controle do topo da hierarquia) e desce progressivamente em direção aos módulos subordinados.
• Uso de STUBS: Como os módulos de nível inferior ainda não foram implementados ou integrados, o testador utiliza STUBS (módulos substitutos para baixo). O stub é uma função simulada ("casca") que recebe as chamadas do módulo de controle e devolve uma resposta estática ou fixa para permitir que o topo seja testado imediatamente.
• Vantagem: Demonstra as funções principais do sistema logo no início do projeto.

2. Abordagem Bottom-Up (Ascendente):
• Como funciona: A integração inicia na base da arquitetura (módulos utilitários, operacionais e de acesso a dados) e sobe progressivamente em direção aos módulos controladores superiores.
• Uso de DRIVERS: Como o controlador principal do topo ainda não foi acionado, o testador desenvolve DRIVERS (módulos condutores para cima). O driver é um programa temporário que simula a chamada ao módulo da base, passando argumentos de teste e capturando os retornos.
• Vantagem: Testa as partes mais críticas de cálculo e infraestrutura de dados primeiro, sem depender de telas prontas.`,
    keywords: [
      'Top-Down: do topo para a base / controladores primeiro',
      'STUBS: módulos substitutos subordinados (simulam para baixo)',
      'Bottom-Up: da base para o topo / utilitários primeiro',
      'DRIVERS: programas condutores simuladores de chamadas (simulam para cima)',
      'Verificação da interface e passagem de parâmetros'
    ],
    goldenBizu: 'Top-Down desce e usa STUB (módulo fantoche embaixo). Bottom-Up sobe e usa DRIVER (programa condutor em cima que chama a base).',
    gradingCriteria: [
      'Mapear corretamente: Top-Down usa STUB; Bottom-Up usa DRIVER.',
      'Explicar o sentido de navegação na árvore de módulos.',
      'Definir a função de simulação do stub vs driver.'
    ]
  },
  {
    id: 'disc-qs-10',
    subject: 'Qualidade de Software',
    topic: 'Testes de Unidade',
    source: 'UNIFACS - Folha de Revisão Oficial (Q10) • JUnit 5',
    difficulty: 'Fácil',
    statement: 'Qual o objetivo principal dos testes de unidade?',
    contextHint: 'Pense no menor componente testável (função, método, classe) e na facilidade de isolar a causa raiz do bug.',
    expectedAnswer: `O objetivo principal dos testes de unidade é verificar e validar o funcionamento isolado do menor componente testável do software (uma função individual, um método ou uma classe específica).

Seus objetivos fundamentais são:
1. Isolar a Causa Raiz: Ao testar um método de forma estritamente isolada (com mocks/stubs se necessário), qualquer falha detectada aponta com precisão cirúrgica a linha e a lógica com defeito, reduzindo drasticamente o tempo de depuração.
2. Garantir Correção Lógica das Regras de Negócio: Validar que os algoritmos, tratamentos de exceção, loops e estruturas de dados internas produzem a saída correta para qualquer entrada válida ou inválida.
3. Prover Rede de Segurança para Refatoração: Permitir que o desenvolvedor refatore e otimize o código com a garantia imediata de que nenhuma funcionalidade anterior foi quebrada.
4. Documentação Executável: Casos de teste de unidade bem estruturados (como no JUnit 5) atuam como uma especificação viva e executável de como aquele método deve se comportar.`,
    keywords: [
      'Menor componente testável (método, função, classe)',
      'Isolamento da causa raiz de defeitos',
      'Facilidade de depuração',
      'Rede de segurança para refatoração de código',
      'Validação de algoritmos e tratamento de exceções'
    ],
    goldenBizu: 'Teste de unidade foca na menor pecinha do sistema (método ou classe isolada) para achar o bug com precisão cirúrgica sem misturar com banco ou rede.',
    gradingCriteria: [
      'Definir o escopo atômico (menor parte testável).',
      'Destacar o isolamento e facilidade de localização de defeitos.',
      'Citar o papel de suporte à refatoração.'
    ]
  },
  {
    id: 'disc-qs-11',
    subject: 'Qualidade de Software',
    topic: 'Testes de Fumaça & Regressão',
    source: 'UNIFACS - Folha de Revisão Oficial (Q11) • Pressman 9ª ed.',
    difficulty: 'Médio',
    statement: 'Quais os papéis dos testes de regressão e dos testes de fumaça no ciclo de vida do software?',
    contextHint: 'Smoke test = teste rápido para ver se a nova build fica de pé. Regressão = garantir que novidades não quebraram o passado.',
    expectedAnswer: `Ambos os testes são vitais para a saúde contínua da aplicação, atuando em momentos complementares:

1. Teste de Fumaça (Smoke Testing):
• Papel: É uma bateria de testes rápida, abrangente e superficial executada logo após uma nova build (compilação) ser gerada.
• Finalidade: Verifica se as funções mais vitais do sistema operam o suficiente para manter a aplicação "de pé" (ex: sistema inicializa, conecta ao banco, permite login e abre a tela principal). Se o teste de fumaça falhar ("saiu fumaça"), a build é imediatamente rejeitada e devolvida aos desenvolvedores, economizando o tempo da equipe de testes que não perderá horas tentando testar um sistema que sequer carrega.

2. Teste de Regressão:
• Papel: É o reteste deliberado de funcionalidades que já estavam funcionando perfeitamente, executado após qualquer modificação de código (correção de um bug, refatoração ou adição de nova funcionalidade).
• Finalidade: Garantir que a inserção do novo código ou a correção de um defeito não tenha introduzido efeitos colaterais indesejados ("regressões") em partes não relacionadas do sistema.`,
    keywords: [
      'Teste de Fumaça: bateria rápida pós-build / checa funções vitais',
      'Fumaça: rejeição precoce de build instável',
      'Teste de Regressão: reteste de funcionalidades pré-existentes',
      'Regressão: evitar efeitos colaterais de novas alterações ou correções'
    ],
    goldenBizu: 'Fumaça = checagem rápida para ver se o paciente está respirando (se a build abre). Regressão = checar se consertar o braço não quebrou a perna que estava boa.',
    gradingCriteria: [
      'Diferenciar o momento de execução e objetivo de cada teste.',
      'Explicar a analogia/origem do Smoke Test (estabilidade inicial da build).',
      'Explicar o conceito de efeito colateral no Teste de Regressão.'
    ]
  },
  {
    id: 'disc-qs-12',
    subject: 'Qualidade de Software',
    topic: 'Testes de Integração',
    source: 'UNIFACS - Folha de Revisão Oficial (Q12) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Por que os testes de integração são fundamentais no desenvolvimento de software, mesmo quando todos os testes de unidade tiveram 100% de sucesso?',
    contextHint: 'Mesmo que cada módulo funcione perfeitamente sozinho, quando eles se conectam surgem problemas de protocolo, tipos de dados e concorrência.',
    expectedAnswer: `Os testes de integração são imprescindíveis porque "a soma das partes que funcionam bem isoladamente pode não funcionar quando combinada". O sucesso pleno dos testes de unidade não garante a integridade do sistema integrado pelas seguintes razões:

1. Incompatibilidade nas Interfaces e Contratos:
• Um módulo pode esperar um tipo de dado específico (ex: formato de data YYYY-MM-DD) e o módulo chamador enviar outro (DD/MM/YYYY), ou haver divergência na ordem dos parâmetros passados.
2. Perda de Dados e Efeitos Colaterais Globais:
• Dados podem se perder na passagem de parâmetros através de barramentos, filas ou chamadas HTTP/REST. Variáveis globais modificadas por um módulo podem desestabilizar silenciosamente outro componente.
3. Concorrência e Bloqueios (Deadlocks):
• Em ambiente integrado, múltiplos módulos disputam simultaneamente o mesmo recurso compartilhado (banco de dados, arquivos em disco, cache), gerando problemas de concorrência que nunca aparecem em testes de unidade isolados.
4. Acúmulo de Erros Numéricos:
• Pequenas imprecisões de arredondamento aceitáveis em um cálculo unitário podem se acumular exponencialmente ao trafegar por uma cadeia integrada de 5 ou 6 módulos.`,
    keywords: [
      'A soma de partes boas pode falhar quando combinada',
      'Incompatibilidade de interfaces e formatos de dados',
      'Perda de dados em chamadas entre módulos',
      'Problemas de concorrência, tempo de resposta e travamento de banco',
      'Efeitos colaterais e acúmulo de imprecisões'
    ],
    goldenBizu: 'Cada peça do motor pode estar perfeita na bancada, mas se o encaixe entre elas tiver folga, o motor funde. Integração testa o encaixe e a troca de dados.',
    gradingCriteria: [
      'Ressaltar a falha em interfaces como causa primordial.',
      'Citar exemplos reais (incompatibilidade de dados, concorrência, perda de dados).',
      'Concluir que testes de unidade e integração são complementares, não substitutos.'
    ]
  },
  {
    id: 'disc-qs-13',
    subject: 'Qualidade de Software',
    topic: 'Verificação vs Validação (V&V)',
    source: 'UNIFACS - Folha de Revisão Oficial (Q13) • Boehm / Pressman',
    difficulty: 'Fácil',
    statement: 'Diferencie teste de verificação e teste de validação, apresentando as perguntas fundamentais de Barry Boehm associadas a cada um.',
    contextHint: 'Verificação = conformidade com o projeto técnico. Validação = atender às necessidades reais do cliente/usuário.',
    expectedAnswer: `A distinção canônica estabelecida por Barry Boehm e adotada por Pressman resume-se em duas perguntas clássicas:

1. Verificação:
• Pergunta de Boehm: "Estamos construindo o produto corretamente?" (Are we building the product right?)
• Significado: Avalia se o software está sendo construído rigorosamente de acordo com as especificações técnicas, modelos arquiteturais, normas de codificação e documentos de requisitos definidos na fase anterior. É um processo voltado para a conformidade técnica formal.

2. Validação:
• Pergunta de Boehm: "Estamos construindo o produto correto?" (Are we building the right product?)
• Significado: Avalia se o software final atende às reais necessidades, expectativas e regras de negócio do cliente e dos usuários finais no ambiente operacional real. Mesmo que o software esteja 100% livre de bugs e siga toda a especificação (verificado com sucesso), se ele resolver o problema errado ou não servir para o usuário, ele falhou na validação.`,
    keywords: [
      'Verificação: "Estamos construindo o produto corretamente?" (Building the product right)',
      'Verificação: conformidade técnica com especificações e normas',
      'Validação: "Estamos construindo o produto correto?" (Building the right product)',
      'Validação: atender às necessidades reais do cliente e usuário final'
    ],
    goldenBizu: 'Verificação olha pro manual técnico (está feito do jeito certo?). Validação olha pro cliente (é exatamente isso que ele precisa?).',
    gradingCriteria: [
      'Citar as perguntas exatas de Barry Boehm.',
      'Diferenciar conformidade de especificação (verificação) de atendimento às necessidades do usuário (validação).'
    ]
  },
  {
    id: 'disc-qs-14',
    subject: 'Qualidade de Software',
    topic: 'Partição de Equivalência & Valor Limite',
    source: 'UNIFACS - Folha de Revisão Oficial (Q14) • Pressman 9ª ed.',
    difficulty: 'Médio',
    statement: 'Explique o conceito de partição de equivalência e a técnica de análise de valor limite na elaboração de casos de teste de caixa-preta.',
    contextHint: 'Pense em dividir o domínio de entrada em classes válidas/inválidas e testar os números exatamente na cerca (fronteira).',
    expectedAnswer: `São duas técnicas fundamentais e complementares de teste de caixa-preta:

1. Partição de Equivalência:
• Conceito: Divide o domínio infinito de entradas de um programa em classes de dados finitas ("partições de equivalência"), partindo do princípio de que todos os valores pertencentes a uma mesma partição serão processados de maneira idêntica pelo sistema.
• Aplicação: Se um teste com um valor representativo da classe tem sucesso, assume-se que todos os outros da mesma classe teriam. O analista identifica tanto partições válidas (dados aceitáveis) quanto partições inválidas (dados que devem disparar tratamento de erro), reduzindo o número total de testes sem perder qualidade.

2. Análise de Valor Limite (AVL):
• Conceito: É um refinamento da partição de equivalência baseado na constatação empírica de que a imensa maioria dos erros de programação ocorre exatamente nas bordas (fronteiras) das classes de equivalência, e não no seu centro.
• Aplicação: Em vez de escolher qualquer número do meio da classe, o projetista de testes escolhe deliberadamente os valores exatamente nos limites e imediatamente adjacentes a eles (mínimo, logo abaixo do mínimo, logo acima do mínimo, máximo, logo abaixo do máximo e logo acima do máximo).

Exemplo Prático: Um campo aceita notas inteiras de 0 a 10.
• Partição de Equivalência: Válida [0..10], Inválidas [<0] e [>10].
• Análise de Valor Limite: Testar -1, 0, 1 (fronteira inferior) e 9, 10, 11 (fronteira superior).`,
    keywords: [
      'Partição de Equivalência: dividir domínio em classes válidas e inválidas',
      'Comportamento idêntico de valores da mesma partição',
      'Análise de Valor Limite: foco nas bordas e extremos',
      'Erros ocorrem com maior frequência nas fronteiras (<=, >=)',
      'Exemplo numérico com valores limítrofes e adjacentes'
    ],
    goldenBizu: 'Equivalência separa em grupos (válidos e inválidos) pra não precisar testar número por número. Valor Limite testa exatamente na cerca (em cima da fronteira e um passo pra fora).',
    gradingCriteria: [
      'Conceituar partição de equivalência (classes válidas e inválidas).',
      'Conceituar valor limite e justificar por que defeitos se concentram nas bordas.',
      'Apresentar um exemplo numérico consistente de aplicação.'
    ]
  },
  {
    id: 'disc-qs-15',
    subject: 'Qualidade de Software',
    topic: 'Ciclo de Vida de Teste',
    source: 'UNIFACS - Folha de Revisão Oficial (Q15) • Pressman / Sommerville',
    difficulty: 'Fácil',
    statement: 'Descreva as etapas fundamentais que compõem o ciclo de vida do processo de teste de software.',
    contextHint: 'Vai desde o planejamento inicial até o relatório de encerramento.',
    expectedAnswer: `O Ciclo de Vida de Teste de Software (STLC - Software Testing Life Cycle) é um processo estruturado que compreende as seguintes etapas fundamentais:

1. Análise de Requisitos:
• A equipe de testes estuda a especificação de requisitos e regras de negócio para identificar o escopo testável e esclarecer ambiguidades com os analistas.
2. Planejamento de Testes:
• Elaboração do Plano de Testes (documento mestre), definindo escopo, estratégia, recursos humanos e de hardware, prazos, ferramentas (ex: JUnit 5, Postman) e critérios de início e término.
3. Projeto e Elaboração de Casos de Teste:
• Criação detalhada dos casos de teste (procedimentos, dados de entrada, pré-condições e saídas esperadas), além da automação de scripts.
4. Configuração do Ambiente de Testes:
• Montagem do ambiente integrado de homologação (servidores, bancos de dados com massa de testes populada, rede) simulando o ambiente de produção.
5. Execução dos Testes:
• Execução dos casos de teste manuais e automatizados. Registro dos defeitos encontrados em ferramentas de issue tracker (ex: Jira, Bugzilla) com evidências.
6. Encerramento e Relatório de Testes:
• Análise das métricas de cobertura, taxa de defeitos resolvidos vs pendentes e emissão do Relatório Sintetizado de Conclusão de Testes com parecer sobre a liberação (deploy) para produção.`,
    keywords: [
      '1. Análise de Requisitos',
      '2. Planejamento de Testes (Plano de Testes)',
      '3. Projeto e Casos de Teste (entradas/saídas esperadas)',
      '4. Configuração do Ambiente de Teste',
      '5. Execução de Testes e Registro de Defeitos',
      '6. Encerramento e Relatório Final de Teste'
    ],
    goldenBizu: 'Planejar -> Projetar casos de teste -> Preparar ambiente -> Executar e caçar bugs -> Emitir relatório de aprovação.',
    gradingCriteria: [
      'Apresentar a sequência lógica das fases do STLC.',
      'Destacar o planejamento prévio e a emissão do relatório final.'
    ]
  },

  // ==========================================
  // DISCIPLINA 2: BANCO DE DADOS (QUARTA)
  // ==========================================
  {
    id: 'disc-bd-01',
    subject: 'Banco de Dados',
    topic: 'Normalização (1FN, 2FN, 3FN)',
    source: 'UNIFACS - Prof. Luiz Henrique • Guia de Formas Normais',
    difficulty: 'Médio',
    statement: 'Explique detalhadamente as regras para que uma relação esteja na 1ª, 2ª e 3ª Formas Normais (1FN, 2FN e 3FN). Diferencie de forma clara Dependência Funcional Parcial de Dependência Funcional Transitiva.',
    contextHint: 'Lembre-se da regra de Kent Beck: "Cada atributo deve depender da chave (1FN), de toda a chave (2FN) e de nada além da chave (3FN)".',
    expectedAnswer: `As Formas Normais são critérios de projeto relacional que visam eliminar redundâncias desnecessárias e anomalias de inserção, alteração e exclusão:

1. Primeira Forma Normal (1FN) — Regra da Atomicidade:
• Exigência: Todos os atributos devem conter apenas valores atômicos (indivisíveis). Uma coluna não pode armazenar vetores, listas ou múltiplos valores separados por vírgula (ex: dois telefones na mesma célula), nem conter colunas repetitivas (ex: tel1, tel2). Cada tupla (linha) deve ser identificada por uma Chave Primária (PK).

2. Segunda Forma Normal (2FN) — Eliminação de Dependência Parcial:
• Exigência: Deve estar na 1FN E nenhum atributo não-chave pode depender de apenas uma PARTE da chave primária.
• Condição Crítica: Esta regra só se aplica quando a tabela tem Chave Primária COMPOSTA (duas ou mais colunas). Se a chave for simples (uma única coluna), a tabela já está automaticamente na 2FN!
• Dependência Parcial: Ocorre quando um atributo depende de apenas um dos componentes da chave primária composta (Ex: em Matricula(id_aluno, id_disciplina), o "nome_aluno" depende apenas de "id_aluno", e não da disciplina).
• Solução: Mover o atributo com dependência parcial para uma nova tabela própria (Aluno).

3. Terceira Forma Normal (3FN) — Eliminação de Dependência Transitiva:
• Exigência: Deve estar na 2FN E nenhum atributo não-chave pode depender de outro atributo não-chave.
• Dependência Transitiva: Ocorre quando A -> B e B -> C. Se A é a PK, C está dependendo de A de forma indireta através de B (Ex: em Funcionario(id_func PK, nome, id_depto, nome_depto), "nome_depto" depende de "id_depto", que não é chave primária da tabela).
• Solução: Criar a tabela Departamento(id_depto PK, nome_depto) e manter apenas a FK na tabela original.`,
    keywords: [
      '1FN: atomicidade de dados / sem listas multivaloradas',
      '2FN: estar na 1FN + eliminar Dependência Parcial',
      'Dependência Parcial: ocorre somente em Chave Composta',
      '3FN: estar na 2FN + eliminar Dependência Transitiva',
      'Dependência Transitiva: não-chave depende de outro não-chave',
      'Frase de ouro: depender da chave, de toda a chave e de nada além da chave'
    ],
    goldenBizu: '1FN = cada gaveta só guarda um objeto (atômico). 2FN = se a chave tem 2 pedaços, nada pode depender de meio pedaço só. 3FN = coluna comum não manda em coluna comum.',
    gradingCriteria: [
      'Conceituar atomicidade na 1FN.',
      'Explicar que dependência parcial só existe em tabelas com chave composta na 2FN.',
      'Definir dependência transitiva (atributo não-chave determinando outro não-chave) na 3FN.',
      'Citar soluções práticas de decomposição em tabelas separadas.'
    ]
  },
  {
    id: 'disc-bd-02',
    subject: 'Banco de Dados',
    topic: 'Modelagem da Clínica Veterinária',
    source: 'UNIFACS - Prof. Luiz Henrique • Atividade de Sala de Aula',
    difficulty: 'Fácil',
    statement: 'Com base no estudo de caso da "Clínica Veterinária", descreva as cardinalidades entre as entidades Tutor, Animal, Veterinário e Consulta, e explique por que a tabela Consulta atua como a entidade central do modelo.',
    contextHint: 'Identifique os lados 1 e N de cada relacionamento e para onde migram as chaves estrangeiras (FK).',
    expectedAnswer: `A modelagem da Clínica Veterinária estrutura-se a partir de três relacionamentos fundamentais do tipo Um-para-Muitos (1:N):

1. Tutor (1) ➔ (N) Animal:
• Regra: Um tutor pode possuir vários animais cadastrados, mas cada animal pertence a exatamente um tutor.
• Implementação: A Chave Primária do lado '1' (id_tutor) migra como Chave Estrangeira (FK) para a tabela Animal.

2. Animal (1) ➔ (N) Consulta:
• Regra: Um animal pode realizar múltiplas consultas ao longo da vida, mas cada consulta individual refere-se a um único animal.
• Implementação: id_animal migra como FK para a tabela Consulta.

3. Veterinário (1) ➔ (N) Consulta:
• Regra: Um veterinário realiza diversas consultas, mas cada atendimento é conduzido por um veterinário responsável.
• Implementação: id_veterinario migra como FK para a tabela Consulta.

POR QUE A CONSULTA É A ENTIDADE CENTRAL?
A tabela Consulta atua como a entidade associativa que resolve a relação Muitos-para-Muitos (N:N) entre Animais e Veterinários (um animal é atendido por vários veterinários ao longo do tempo, e um veterinário atende vários animais). A Consulta conecta essas duas pontas e armazena os atributos próprios da ocorrência do serviço: data, horário, motivo, valor cobrado e diagnóstico.`,
    keywords: [
      'Tutor 1:N Animal (FK id_tutor vai em animal)',
      'Animal 1:N Consulta (FK id_animal vai em consulta)',
      'Veterinário 1:N Consulta (FK id_veterinario vai em consulta)',
      'Chave do lado 1 migra como FK para o lado N',
      'Consulta resolve relação N:N com atributos de transação'
    ],
    goldenBizu: 'Regra de ouro relacional: O lado "1" empresta sua chave para o lado "N". Quem é atendido (Animal) e quem atende (Veterinário) se encontram na Consulta com suas FKs.',
    gradingCriteria: [
      'Identificar as 3 cardinalidades 1:N com precisão.',
      'Apontar corretamente a tabela que recebe a Chave Estrangeira (lado Muitos).',
      'Explicar o papel associativo da tabela Consulta.'
    ]
  },
  {
    id: 'disc-bd-03',
    subject: 'Banco de Dados',
    topic: 'Regras de Negócio & DDL',
    source: 'UNIFACS - Prof. Luiz Henrique • Pegadinha da Clínica Vet',
    difficulty: 'Fácil',
    statement: 'No projeto físico da tabela `consulta` da Clínica Veterinária, por que a coluna `diagnostico` deve ser declarada permitindo valores nulos (`NULL`) e como isso reflete a dinâmica do mundo real?',
    contextHint: 'Pense no ciclo de vida de uma consulta médica veterinária: do momento do agendamento até a conclusão dos exames.',
    expectedAnswer: `A coluna diagnostico DEVE ser declarada permitindo valores nulos (NULL) pelas seguintes razões de negócio e integridade:

1. Ciclo de Vida da Consulta Médica:
• O registro da consulta é criado no banco de dados no momento em que o tutor chega à recepção ou quando a consulta é iniciada.
• Naquele instante inicial, o médico veterinário ainda está examinando o paciente, solicitando exames complementares (raio-x, sangue) ou levantando hipóteses. Logo, o diagnóstico definitivo ainda NÃO EXISTE.

2. Impacto de uma restrição NOT NULL indevida:
• Se a coluna fosse configurada como NOT NULL, o sistema da clínica impediria a recepção de cadastrar a consulta no banco de dados antes que o diagnóstico já estivesse preenchido. Isso obrigaria os atendentes a preencherem valores fictícios ou sujos (como '.', 'teste', 'a definir'), violando gravemente a qualidade dos dados.

Portanto, a coluna é criada como "diagnostico TEXT NULL" (ou VARCHAR), permitindo que a consulta seja registrada e, somente após o atendimento ser concluído, o veterinário faça um comando UPDATE preenchendo o diagnóstico.`,
    keywords: [
      'Consulta em andamento ainda não possui diagnóstico',
      'Restrição NOT NULL impediria abertura do atendimento',
      'Evita preenchimento de dados fictícios ou lixo no banco',
      'Permite atualização posterior via UPDATE quando o exame sair'
    ],
    goldenBizu: 'Você não pode exigir o resultado do exame antes do médico atender o cachorro! A consulta abre sem diagnóstico (NULL) e o veterinário preenche depois.',
    gradingCriteria: [
      'Mencionar a cronologia real do atendimento (abertura vs finalização).',
      'Explicar o risco de forçar NOT NULL gerando dados inconsistentes.',
      'Citar o comando UPDATE como mecanismo de preenchimento posterior.'
    ]
  },
  {
    id: 'disc-bd-04',
    subject: 'Banco de Dados',
    topic: 'Tipos de Dados SQL (Precisão Monetária)',
    source: 'UNIFACS - Prof. Luiz Henrique • Padrões de Projeto',
    difficulty: 'Fácil',
    statement: 'Por que nunca se deve utilizar os tipos de dados `FLOAT` ou `DOUBLE` para representar colunas monetárias (como `valor_cobrado` na Clínica Veterinária), e qual é o tipo de dado correto a ser utilizado?',
    contextHint: 'Pense na representação binária IEEE 754 de ponto flutuante e na perda de centavos.',
    expectedAnswer: `Nunca se deve utilizar FLOAT ou DOUBLE para representar valores monetários pelas seguintes razões técnicas:

1. Natureza de Ponto Flutuante Impreciso (IEEE 754):
• Os tipos FLOAT e DOUBLE utilizam representação binária de ponto flutuante de precisão aproximada. Certas frações decimais simples (como 0.1 ou 0.01) não possuem representação binária exata finita, gerando dízimas como 0.10000000000000000555.
• Em sistemas contábeis e financeiros, somas repetidas dessas pequenas frações provocam erros cumulativos graves de arredondamento ("sumiço de centavos" em balanços contábeis e relatórios de faturamento).

2. O Tipo Correto: DECIMAL(M, D) ou NUMERIC:
• Para valores monetários, o padrão obrigatório é o DECIMAL(M, D) — ex: DECIMAL(10, 2).
• Significado: Armazena números na base decimal exata (ponto fixo). O primeiro número (M = 10) representa a quantidade total de dígitos suportados, e o segundo (D = 2) representa exatamente a quantidade de casas decimais após a vírgula (centavos).
• Vantagem: Garante 100% de precisão matemática em cálculos de somatório, troco, descontos e tributos sem nenhuma perda de centavos.`,
    keywords: [
      'FLOAT e DOUBLE são de precisão aproximada (ponto flutuante IEEE 754)',
      'Imprecisão em frações decimais (perda de centavos)',
      'Tipo correto: DECIMAL(M, D) ou NUMERIC',
      'DECIMAL(10,2) garante ponto fixo com 2 casas de centavos exatas',
      'Conformidade com auditoria contábil e financeira'
    ],
    goldenBizu: 'Dinheiro NUNCA é float! Float perde centavos em contas de padaria e dá cadeia em sistema contábil. Dinheiro é sempre DECIMAL(10,2).',
    gradingCriteria: [
      'Explicar a imprecisão intrínseca de FLOAT/DOUBLE.',
      'Identificar o tipo correto como DECIMAL(10,2) ou NUMERIC.',
      'Explicar o significado dos parâmetros (precisão e escala).'
    ]
  },
  {
    id: 'disc-bd-05',
    subject: 'Banco de Dados',
    topic: 'Comandos SQL: DDL vs DML',
    source: 'UNIFACS - Prof. Luiz Henrique • 25 Exercícios de Caderno',
    difficulty: 'Fácil',
    statement: 'Diferencie comandos DDL de comandos DML em SQL. Apresente os três principais exemplos de cada categoria e explique por que a omissão da cláusula `WHERE` em um comando `UPDATE` é considerada catastrófica.',
    contextHint: 'DDL mexe no esqueleto (estrutura). DML mexe no recheio (dados). O que acontece com um UPDATE sem WHERE?',
    expectedAnswer: `A linguagem SQL é dividida em sublinguagens de acordo com a finalidade de cada instrução:

1. DDL (Data Definition Language — Linguagem de Definição de Dados):
• Função: Responsável por criar, modificar e excluir a estrutura física e lógica dos objetos do banco de dados (tabelas, índices, visões, esquemas). Opera sobre o "esqueleto" do banco.
• Exemplos:
  - CREATE: Cria uma nova tabela ou banco (ex: CREATE TABLE tutor ...);
  - ALTER: Modifica a estrutura de uma tabela existente (ex: ALTER TABLE cliente ADD COLUMN email VARCHAR(100));
  - DROP: Exclui permanentemente um objeto e sua estrutura inteira do banco (ex: DROP TABLE consulta).

2. DML (Data Manipulation Language — Linguagem de Manipulação de Dados):
• Função: Responsável por gerenciar os registros e informações contidos DENTRO das tabelas. Opera sobre os "dados/recheio" do banco.
• Exemplos:
  - INSERT: Insere novas linhas na tabela (ex: INSERT INTO tutor ... VALUES ...);
  - UPDATE: Modifica dados de registros existentes;
  - DELETE: Exclui registros (linhas) de uma tabela.

O PERIGO DO UPDATE SEM WHERE:
A cláusula WHERE especifica o filtro que define quais linhas exatas devem ser alteradas. Quando o comando UPDATE é executado sem WHERE (ex: "UPDATE cliente SET telefone = '7199999-0000';"), o SGBD aplica a alteração a TODAS AS LINHAS da tabela indistintamente. Isso substitui os dados reais de todos os clientes por um único valor, corrompendo a base e causando perda irreversível se não houver backup ou transação aberta.`,
    keywords: [
      'DDL: estrutura / esqueleto do banco (CREATE, ALTER, DROP)',
      'DML: dados / manipulação de linhas (INSERT, UPDATE, DELETE)',
      'UPDATE sem WHERE altera 100% das linhas da tabela',
      'Corrupção catastrófica de dados em massa'
    ],
    goldenBizu: 'DDL cria ou destrói a casa (estrutura). DML coloca ou troca os móveis (dados). UPDATE sem WHERE pinta todas as paredes da cidade da mesma cor por engano.',
    gradingCriteria: [
      'Definir DDL e listar CREATE, ALTER, DROP.',
      'Definir DML e listar INSERT, UPDATE, DELETE.',
      'Explicar o impacto devastador do UPDATE sem WHERE sobre todas as linhas.'
    ]
  },
  {
    id: 'disc-bd-06',
    subject: 'Banco de Dados',
    topic: 'DELETE vs DROP',
    source: 'UNIFACS - Prof. Luiz Henrique • 25 Exercícios de Caderno (Ex 24)',
    difficulty: 'Fácil',
    statement: 'Qual a diferença essencial entre os comandos `DELETE FROM tabela;` e `DROP TABLE tabela;` no SQL?',
    contextHint: 'Pense em apagar as pessoas de uma sala vs implodir o prédio da sala.',
    expectedAnswer: `A diferença fundamental reside no que é destruído (apenas o conteúdo ou o próprio objeto):

1. Comando DELETE FROM tabela:
• É uma instrução DML (Data Manipulation Language).
• Remove apenas os DADOS (as linhas/registros) armazenados na tabela.
• A estrutura da tabela continua existindo intacta no banco de dados, com todas as suas colunas, restrições (PK, FK, CHECK), gatilhos e permissões de acesso. Após o DELETE, você pode imediatamente fazer um "INSERT INTO tabela" sem precisar recriá-la.

2. Comando DROP TABLE tabela:
• É uma instrução DDL (Data Definition Language).
• Remove a TABELA INTEIRA do catálogo do SGBD: apaga tanto todos os dados quanto a sua própria estrutura física, metadados, índices e dependências associadas.
• Após o DROP, a tabela deixa de existir. Qualquer tentativa posterior de consulta ("SELECT * FROM tabela") retornará o erro "Table does not exist", exigindo um CREATE TABLE completo para que ela volte a existir.`,
    keywords: [
      'DELETE: DML, apaga linhas/dados, mantém a estrutura da tabela',
      'DROP: DDL, destrói a tabela inteira e sua definição do catálogo',
      'Após DELETE: a tabela pode receber novos INSERTs',
      'Após DROP: a tabela deixa de existir no banco de dados'
    ],
    goldenBizu: 'DELETE limpa os dados de dentro da tabela (esvazia a gaveta). DROP implode a gaveta inteira com madeira e tudo.',
    gradingCriteria: [
      'Classificar DELETE como DML e DROP como DDL.',
      'Deixar explícito que DELETE mantém a estrutura e DROP remove estrutura + dados.'
    ]
  },
  {
    id: 'disc-bd-07',
    subject: 'Banco de Dados',
    topic: 'Junções SQL (JOINs)',
    source: 'UNIFACS - Prof. Luiz Henrique • Laboratório de Consultas',
    difficulty: 'Médio',
    statement: 'Explique a diferença de comportamento entre `INNER JOIN`, `LEFT JOIN` e `RIGHT JOIN`, utilizando como exemplo prático o relacionamento entre a tabela `veterinario` e a tabela `consulta`.',
    contextHint: 'Imagine veterinários recém-contratados que ainda não realizaram nenhuma consulta.',
    expectedAnswer: `As cláusulas JOIN combinam linhas de duas ou mais tabelas com base em uma condição de igualdade entre chaves (FK = PK). Seu comportamento difere em como tratam registros sem correspondência:

1. INNER JOIN (Junção Interna):
• Comportamento: Retorna SOMENTE as linhas que possuem correspondência mútua em ambas as tabelas envolvidas.
• No Exemplo: "SELECT * FROM veterinario v INNER JOIN consulta c ON v.id_veterinario = c.id_veterinario;"
  - Retornará apenas os veterinários que já realizaram pelo menos uma consulta. Se um veterinário for recém-contratado e ainda não tiver nenhuma consulta registrada, ele NÃO aparecerá no resultado.

2. LEFT JOIN (ou LEFT OUTER JOIN):
• Comportamento: Retorna TODAS as linhas da tabela da ESQUERDA (a primeira declarada), mesmo que não haja nenhuma consulta correspondente na tabela da direita. Quando não houver dados correspondentes na direita, as colunas da consulta virão preenchidas com valores NULL.
• No Exemplo: "SELECT * FROM veterinario v LEFT JOIN consulta c ON v.id_veterinario = c.id_veterinario;"
  - Trará todos os veterinários da clínica. Os que têm consultas exibirão seus dados; o veterinário novo sem consultas aparecerá na lista com as colunas da consulta exibindo NULL.

3. RIGHT JOIN (ou RIGHT OUTER JOIN):
• Comportamento: Retorna TODAS as linhas da tabela da DIREITA (a segunda declarada), preenchendo com NULL onde não houver correspondente na esquerda.
• No Exemplo: Se for "veterinario v RIGHT JOIN consulta c", trará todas as consultas registradas, mesmo que por alguma inconsistência uma consulta não tivesse veterinário vinculado.`,
    keywords: [
      'INNER JOIN: apenas interseção (correspondência em ambas as tabelas)',
      'LEFT JOIN: todos da esquerda + preenchimento com NULL se não houver na direita',
      'RIGHT JOIN: todos da direita + preenchimento com NULL',
      'Exemplo prático: veterinário sem consultas não aparece no INNER, mas aparece no LEFT com NULL'
    ],
    goldenBizu: 'INNER JOIN = só quem faz par (veterinário que já consultou). LEFT JOIN = traz todo mundo da esquerda sem deixar ninguém de fora, botando NULL pra quem não consultou.',
    gradingCriteria: [
      'Diferenciar interseção exclusiva (INNER) de preservação da tabela esquerda/direita com NULL.',
      'Aplicar corretamente no cenário de veterinário e consulta.'
    ]
  },
  {
    id: 'disc-bd-08',
    subject: 'Banco de Dados',
    topic: 'Integridade Referencial & Chaves Estrangeiras',
    source: 'UNIFACS - Prof. Luiz Henrique • DDL e Constraints',
    difficulty: 'Médio',
    statement: 'O que é o princípio da Integridade Referencial em bancos de dados relacionais? Explique o que ocorre ao tentar excluir um `tutor` que possui animais cadastrados sob as regras `ON DELETE RESTRICT` versus `ON DELETE CASCADE`.',
    contextHint: 'A Chave Estrangeira garante que não existam "órfãos" no banco de dados.',
    expectedAnswer: `A Integridade Referencial é uma regra fundamental do modelo relacional que garante que os relacionamentos entre tabelas permaneçam consistentes. Ela estabelece que o valor de uma Chave Estrangeira (FK) deve obrigatoriamente corresponder a uma Chave Primária (PK) válida e existente na tabela pai, ou então ser NULL (se permitido). Seu objetivo é impedir a existência de registros "órfãos" (ex: um animal apontando para um id_tutor que não existe).

COMPORTAMENTO AO EXCLUIR O PAI (TUTOR):

1. Com ON DELETE RESTRICT (ou NO ACTION):
• Comportamento: O SGBD BLOQUEIA imediatamente a exclusão e dispara um erro de violação de chave estrangeira.
• Resultado: O tutor não é apagado enquanto houver qualquer animal vinculado a ele. Para excluir o tutor, o operador deve primeiro transferir ou excluir todos os seus animais manualmente.
• Aplicação: Protege os dados contra deleções acidentais graves.

2. Com ON DELETE CASCADE:
• Comportamento: O SGBD autoriza a exclusão do tutor e AUTOMATICAMENTE apaga em cascata todos os animais vinculados a ele na tabela filha.
• Resultado: O tutor é removido e todos os seus animais cadastrados são deletados do banco sem aviso adicional.
• Aplicação: Usado em relacionamentos forte-fraco (ex: Pedido e Itens do Pedido, onde apagar o pedido deve sumir com os itens), mas perigoso em cadastros corporativos de clientes.`,
    keywords: [
      'Integridade Referencial: impede registros órfãos',
      'Toda FK deve apontar para uma PK válida e existente',
      'ON DELETE RESTRICT: bloqueia exclusão do pai se houver filhos vinculados',
      'ON DELETE CASCADE: apaga automaticamente o pai e todos os filhos em cascata'
    ],
    goldenBizu: 'RESTRICT é o segurança que diz: "Você não pode apagar o pai porque ele tem filhos dependendo dele!". CASCADE apaga o pai e leva todos os filhos juntos na mesma hora.',
    gradingCriteria: [
      'Definir Integridade Referencial e o problema de registros órfãos.',
      'Explicar o bloqueio de RESTRICT.',
      'Explicar a propagação automática de exclusão de CASCADE.'
    ]
  },
  {
    id: 'disc-bd-09',
    subject: 'Banco de Dados',
    topic: 'Tipagem de Dados (Telefone)',
    source: 'UNIFACS - Prof. Luiz Henrique • 25 Exercícios de Caderno (Ex 08)',
    difficulty: 'Fácil',
    statement: 'Em projetos de bancos de dados relacionais, por que atributos como número de telefone, CPF e CEP devem ser declarados como `VARCHAR` e NUNCA como tipos numéricos (`INT` ou `BIGINT`)?',
    contextHint: 'Lembre-se do zero à esquerda, da formatação de máscaras e da semântica matemática.',
    expectedAnswer: `Embora telefones, CPFs e CEPs sejam formados predominantemente por dígitos numéricos, eles devem ser sempre declarados como VARCHAR (texto) pelas seguintes razões técnicas e conceituais:

1. Descarte do Dígito Zero à Esquerda:
• Tipos numéricos (INT, BIGINT) tratam números matematicamente e descartam automaticamente os zeros à esquerda (ex: o CEP "01310-000" viraria 1310000; o telefone "0800-700-1234" viraria 8007001234; o DDD "071" viraria 71). Isso quebra a integridade e validação dos documentos.

2. Ausência de Semântica de Cálculo Matemático:
• Tipos numéricos devem ser reservados exclusivamente para grandezas que participam de operações aritméticas (soma, média, multiplicação). Ninguém soma dois telefones, nem calcula a média de dois CPFs.

3. Armazenamento de Caracteres Especiais e Formatação (Máscaras):
• Números de telefone e documentos frequentemente armazenam caracteres como parênteses, traços, pontos, barras e o sinal de mais para DDI internacional (ex: "+55 (71) 99999-8888", "123.456.789-00"). O tipo INT rejeita esses caracteres gerando erro de sintaxe.`,
    keywords: [
      'Descarte de zeros à esquerda em tipos numéricos',
      'Não participam de operações matemáticas (semântica)',
      'Suporte a caracteres especiais de máscara (+, -, parênteses)',
      'Declaração obrigatória como VARCHAR'
    ],
    goldenBizu: 'Se você não vai somar nem tirar média, não é número: é texto! Telefone com INT come o zero da frente e não aceita parênteses nem traço.',
    gradingCriteria: [
      'Citar a perda do zero à esquerda.',
      'Mencionar a ausência de cálculos matemáticos.',
      'Citar a necessidade de suportar máscaras de caracteres especiais.'
    ]
  },
  {
    id: 'disc-bd-10',
    subject: 'Banco de Dados',
    topic: 'Relacionamento N:N e Tabela Associativa',
    source: 'UNIFACS - Prof. Luiz Henrique • Modelagem Relacional',
    difficulty: 'Médio',
    statement: 'Como um relacionamento de cardinalidade Muitos-para-Muitos (N:N) do Modelo Entidade-Relacionamento (ex: Alunos e Cursos) é implementado fisicamente no Modelo Relacional? Explique o conceito de Tabela Associativa.',
    contextHint: 'O modelo relacional não suporta relação N:N direta entre duas tabelas. O que é criado no meio?',
    expectedAnswer: `No Modelo Entidade-Relacionamento (MER), entidades podem se relacionar na proporção Muitos-para-Muitos (N:N). Porém, no Modelo Relacional físico, é tecnicamente impossível implementar um relacionamento N:N direto entre duas tabelas usando apenas Chaves Estrangeiras simples sem violar as regras de normalização (1FN).

COMO É IMPLEMENTADO:
O relacionamento N:N é obrigatoriamente decomposto em dois relacionamentos 1:N através da criação de uma terceira tabela intermediária, denominada TABELA ASSOCIATIVA (ou Tabela de Ligação/Junção):

1. Estrutura da Tabela Associativa:
• A tabela intermediária (ex: matricula) recebe como Chaves Estrangeiras (FKs) as Chaves Primárias das duas tabelas originais:
  - id_aluno (FK apontando para aluno);
  - id_curso (FK apontando para curso).
2. Chave Primária da Tabela Associativa:
• Geralmente forma-se uma Chave Primária Composta pelo par (id_aluno, id_curso), garantindo que o mesmo aluno não possa ser matriculado duas vezes exatamente no mesmo curso, ou cria-se uma PK substituta (id_matricula).
3. Atributos Próprios do Relacionamento:
• A tabela associativa também é o local correto para guardar atributos que pertencem à relação e não a uma entidade isolada (ex: data_matricula, nota_final, status_conclusao).`,
    keywords: [
      'Decomposição de N:N em dois relacionamentos 1:N',
      'Tabela Associativa / Tabela de Ligação',
      'Herda Chaves Estrangeiras (FK) de ambas as tabelas',
      'Chave Primária Composta (id_aluno, id_curso)',
      'Armazena atributos próprios da relação (ex: data, nota)'
    ],
    goldenBizu: 'Relação N:N não cabe direto no banco. Cria-se uma tabela intermediária no meio do caminho com a FK de cada lado e os dados da transação.',
    gradingCriteria: [
      'Explicar que N:N se desdobra em dois relacionamentos 1:N.',
      'Definir tabela associativa/junção.',
      'Citar o uso das duas FKs formando a chave composta e atributos da relação.'
    ]
  }
];
