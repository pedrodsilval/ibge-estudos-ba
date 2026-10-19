import type { DiscursiveQuestion } from '../types/study';

export const DISCURSIVE_QUESTIONS: DiscursiveQuestion[] = [
  // =========================================================================
  // DISCIPLINA 1: QUALIDADE DE SOFTWARE (TERÇA 20/10)
  // FOCO TOTAL: AS 10 QUESTÕES DA ATIVIDADE DE REVISÃO DE SALA (PDF 1)
  // + GABARITO OFICIAL UNIFACS (PDF 2 - PROF. ENDERSON NOBRE)
  // =========================================================================

  {
    id: 'disc-sala-01',
    pdfMapping: 'Folha de Sala (Q1) • Gabarito Oficial (Questão 01)',
    legacyId: 'disc-qs-01',
    isFromClassroomReview: true,
    classroomOrder: 1,
    subject: 'Qualidade de Software',
    topic: '1. Revisões Técnicas (Formal vs Informal)',
    source: 'Folha de Atividade de Sala (Q01) • Gabarito Oficial UNIFACS (Q01)',
    difficulty: 'Fácil',
    statement: 'Diferencie revisão técnica formal e revisão informal. Explique como cada uma pode contribuir para a qualidade do software.',
    contextHint: 'Lembre-se da definição de atividade de controle estático de qualidade (sem execução de código) e do contraste de cerimonial, papéis e atas.',
    expectedAnswer: `As revisões técnicas formais e informais são práticas de Garantia da Qualidade de Software utilizadas para identificar defeitos, inconsistências e problemas em artefatos (como documentos de requisitos, diagramas de projeto e códigos-fonte) antes que comprometam o produto final.

A principal diferença entre elas está no grau de planejamento, estruturação, documentação e controle empregado durante a revisão:

1. Revisões Técnicas Informais:
• Características: Realizadas de maneira mais flexível, com menor rigor processual e pouca ou nenhuma documentação obrigatória. Não exigem agendamento formal prévio nem formulários padronizados. Exemplos clássicos incluem o teste de mesa individual, o pair programming (programação em pares) e a leitura cruzada rápida de código entre colegas.
• Como contribui para a qualidade: Oferece feedback imediato em tempo real com custo e atrito mínimos, agilidade para sanar dúvidas pontuais e incentivo à melhoria contínua da qualidade no fluxo diário de desenvolvimento.

2. Revisões Técnicas Formais (RTF):
• Características: São reuniões estruturadas, convocadas e planejadas com antecedência, seguindo procedimentos previamente estabelecidos. Seguem regras rígidas: equipe pequena de 3 a 5 membros, duração máxima de 2 horas, material distribuído previamente com checklists de inspeção e papéis bem definidos (produtor, líder, revisores e registrador). Produzem atas e relatórios oficiais assinados.
• Como contribui para a qualidade: Filtra e remove defeitos graves de concepção, arquitetura, lógica e especificação ainda nas fases iniciais de engenharia. Isso evita a amplificação de defeitos e reduz drasticamente o custo de retrabalho (corrigir um defeito na revisão pode ser de 10 a 100 vezes mais barato do que corrigi-lo após a entrega em produção).`,
    keywords: [
      'Garantia da Qualidade de Software / controle estático',
      'Identificar defeitos em requisitos, diagramas e código',
      'Principal diferença: grau de planejamento, estruturação e documentação',
      'Revisões informais: flexíveis, menor rigor, sem documentação obrigatória',
      'Exemplos informais: teste de mesa / pair programming',
      'Contribuição informal: feedback imediato e agilidade no dia a dia',
      'Revisões formais (RTF): planejadas, estruturadas e documentadas',
      'Procedimentos prévios: 3 a 5 membros, até 2 horas, checklists e papéis',
      'Contribuição formal: filtragem precoce de defeitos e redução do custo de retrabalho'
    ],
    goldenBizu: 'Informal = dia a dia sem cerimônia (pair programming, teste de mesa, feedback rápido). Formal (RTF) = reunião estruturada (3-5 pessoas, <2h, checklist, papéis definidos e ata oficial). Ambas são estáticas!',
    gradingCriteria: [
      'Conceituação de prática de qualidade para identificação precoce de defeitos.',
      'Diferenciação clara quanto ao grau de planejamento, estrutura e documentação.',
      'Citação de características e exemplos de revisão informal (pair programming/teste de mesa).',
      'Citação de características da RTF formal (procedimentos, checklists, ata).',
      'Explicação da contribuição de cada uma para a redução de custos e qualidade.'
    ]
  },

  {
    id: 'disc-sala-02',
    pdfMapping: 'Folha de Sala (Q2) • Gabarito Oficial (Questão 04)',
    legacyId: 'disc-qs-06',
    isFromClassroomReview: true,
    classroomOrder: 2,
    subject: 'Qualidade de Software',
    topic: '2. Caixa-Preta vs Caixa-Branca',
    source: 'Folha de Atividade de Sala (Q02) • Gabarito Oficial UNIFACS (Q04)',
    difficulty: 'Fácil',
    statement: 'Explique a diferença entre teste de caixa-preta e teste de caixa-branca. Em seguida, dê um exemplo de uma mesma funcionalidade que possa ser testada pelas duas abordagens.',
    contextHint: 'Caixa-preta foca no comportamento externo (sem ver o código). Caixa-branca foca na estrutura interna (código e branches). Use a tela de Login ou Autenticação como exemplo.',
    expectedAnswer: `Os testes de caixa-preta e caixa-branca são técnicas fundamentais de teste de software utilizadas para identificar defeitos e verificar a qualidade de um sistema. A principal diferença entre elas está no conhecimento e na análise da estrutura interna do software durante a elaboração dos casos de teste:

1. Teste de Caixa-Preta (Funcional ou Comportamental):
• Avalia o comportamento externo do software, sem considerar sua implementação interna ou a estrutura do código-fonte.
• Os casos de teste são derivados diretamente dos requisitos, casos de uso e especificações, fornecendo dados de entrada e comparando as saídas obtidas com as saídas esperadas.

2. Teste de Caixa-Branca (Estrutural):
• Avalia a estrutura interna e a lógica de implementação do software, considerando o código-fonte e seus possíveis caminhos de execução.
• O projetista elabora testes para exercitar caminhos independentes, instruções, decisões condicionais (ramos verdadeiro/falso) e limites de laços de repetição.

EXEMPLO DE UMA MESMA FUNCIONALIDADE TESTADA PELAS DUAS ABORDAGENS:
• Funcionalidade Escolhida: "Autenticação de Usuário (Tela de Login)".
- Abordagem em Caixa-Preta: O testador acessa a tela de login sem olhar o código. Insere um e-mail válido com senha correta e verifica se o sistema redireciona com sucesso para a Home. Em seguida, insere senha incorreta e valida se o sistema exibe a mensagem de erro esperada.
- Abordagem em Caixa-Branca: O testador abre o método 'autenticar(email, senha)' no código-fonte. Ele analisa os branches do código e cria casos de teste para exercitar o caminho do 'if (usuario == null)', o caminho do 'if (!senhaEncoder.matches(...))' e o bloco 'catch (BancoDeDadosException e)', garantindo 100% de cobertura das instruções e ramos lógicos internos.`,
    keywords: [
      'Caixa-preta: avalia comportamento externo',
      'Sem considerar implementação interna ou código-fonte',
      'Caixa-branca: avalia estrutura interna e lógica',
      'Considerando código-fonte e caminhos de execução',
      'Exemplo de mesma funcionalidade citado (ex: Login / Autenticação / Cadastro)',
      'Teste caixa-preta da funcionalidade: entradas e saídas esperadas na tela',
      'Teste caixa-branca da funcionalidade: exercitar ifs, branches e caminhos do código'
    ],
    goldenBizu: 'Caixa-preta testa "o que" o sistema faz pela interface externa (requisitos). Caixa-branca testa "como" o código está construído por dentro (ifs, whiles e branches).',
    gradingCriteria: [
      'Definição precisa de teste caixa-preta (comportamento externo sem ver código).',
      'Definição precisa de teste caixa-branca (estrutura interna e caminhos do código).',
      'Apresentação de uma funcionalidade concreta (ex: Login/Autenticação).',
      'Demonstração clara de como essa mesma funcionalidade é abordada em caixa-preta e em caixa-branca.'
    ]
  },

  {
    id: 'disc-sala-03',
    pdfMapping: 'Folha de Sala (Q3) • Gabarito Oficial (Questão 07)',
    legacyId: 'disc-qs-07',
    isFromClassroomReview: true,
    classroomOrder: 3,
    subject: 'Qualidade de Software',
    topic: '3. Teste de Caminho Básico (Tom McCabe)',
    source: 'Folha de Atividade de Sala (Q03) • Gabarito Oficial UNIFACS (Q07)',
    difficulty: 'Médio',
    statement: 'O que é o teste de caminho básico? Explique a relação dessa técnica com a complexidade ciclomática e com a definição de casos de teste.',
    contextHint: 'Técnica caixa-branca de Tom McCabe. Relacione: grafo de fluxo -> caminhos linearmente independentes -> teto de casos de teste para 100% de cobertura.',
    expectedAnswer: `1. O que é o Teste de Caminho Básico:
O teste de caminho básico é uma técnica de teste de caixa-branca (proposta por Tom McCabe) que permite derivar uma medida quantitativa da complexidade lógica de um projeto procedimental (a complexidade ciclomática) e usá-la como guia rigoroso para definir um conjunto-base de caminhos de execução linearmente independentes através do código-fonte.

2. Relação com a Complexidade Ciclomática:
A complexidade ciclomática V(G) fornece o fundamento matemático da técnica. Ela calcula exatamente o número de caminhos linearmente independentes existentes no grafo de fluxo do programa. Qualquer outro caminho possível de execução no programa pode ser expresso como uma combinação linear dos caminhos desse conjunto-base.

3. Relação com a Definição de Casos de Teste:
O valor numérico de V(G) estabelece o limite superior (o teto) do número de casos de teste que devem ser obrigatoriamente planejados e executados. 
Essa definição garante que:
• Cada instrução/comando executável do código seja percorrido pelo menos uma vez (cobertura de comandos).
• Todas as decisões condicionais (ifs, loops) sejam exercitadas obrigatoriamente nos seus dois desfechos lógicos: Verdadeiro e Falso (cobertura de ramos).
• O projetista de testes evite testes redundantes e não deixe lacunas críticas sem verificação.`,
    keywords: [
      'Técnica de teste de caixa-branca (Tom McCabe)',
      'Medida quantitativa da complexidade lógica',
      'Conjunto-base de caminhos de execução linearmente independentes',
      'Complexidade ciclomática V(G) determina o número de caminhos independentes',
      'Limite superior / teto de casos de teste necessários',
      'Garantir que cada instrução/comando seja executado ao menos uma vez',
      'Exercitar todas as decisões lógicas nos estados Verdadeiro e Falso'
    ],
    goldenBizu: 'Caminho básico é o mapa; Complexidade Ciclomática V(G) é a conta de quantos caminhos existem; Casos de teste são as viagens que você tem que fazer pra passar por todas as linhas do código.',
    gradingCriteria: [
      'Definir teste de caminho básico como técnica caixa-branca baseada em caminhos independentes.',
      'Explicar que a complexidade ciclomática quantifica matematicamente os caminhos do conjunto-base.',
      'Explicar que V(G) dita o número mínimo/teto de casos de teste para cobertura total de comandos e decisões (V e F).'
    ]
  },

  {
    id: 'disc-sala-04',
    pdfMapping: 'Folha de Sala (Q4) • Gabarito Oficial (Questão 08 - Cálculo E=12, N=10)',
    legacyId: 'disc-qs-08',
    isFromClassroomReview: true,
    classroomOrder: 4,
    subject: 'Qualidade de Software',
    topic: '4. Complexidade Ciclomática (Cálculo Numérico E=12, N=10)',
    source: 'Folha de Atividade de Sala (Q04) • Gabarito Oficial UNIFACS (Q08)',
    difficulty: 'Médio',
    statement: 'Um grafo de fluxo possui 12 arestas (E) e 10 nós (N). Calcule V(G) pela fórmula E - N + 2. O que o resultado indica para o planejamento dos testes?',
    contextHint: 'Substitua E=12 e N=10 na fórmula. Interprete o valor 4 em relação a caminhos independentes e número mínimo de casos de teste.',
    expectedAnswer: `1. CÁLCULO DE V(G):
Aplicando a fórmula de arestas e nós de Tom McCabe:
V(G) = E - N + 2
Onde:
• E (Edges / Arestas) = 12
• N (Nodes / Nós) = 10

Substituindo os valores:
V(G) = 12 - 10 + 2
V(G) = 2 + 2
V(G) = 4

2. O QUE O RESULTADO INDICA PARA O PLANEJAMENTO DOS TESTES:
O resultado V(G) = 4 traz diretrizes quantitativas diretas para o projetista de testes:
• Existem exatamente 4 caminhos linearmente independentes no grafo de fluxo do módulo.
• O projetista deve elaborar e executar no mínimo 4 casos de teste distintos para cobrir o conjunto-base.
• A execução desses 4 casos de teste garante matematicamente a cobertura completa de comandos (100% das instruções do código serão executadas pelo menos uma vez) e a cobertura de todas as ramificações lógicas (todos os nós de decisão serão testados em seus desfechos Verdadeiro e Falso).
• Elaborar menos de 4 casos de teste significa que haverá caminhos ou decisões sem nenhuma cobertura; elaborar mais de 4 testes no caminho básico gerará redundância na cobertura estrutural.`,
    keywords: [
      'V(G) = E - N + 2',
      '12 - 10 + 2 = 4',
      'V(G) = 4',
      '4 caminhos linearmente independentes',
      'Mínimo de 4 casos de teste necessários',
      'Garantir 100% de cobertura de instruções / comandos',
      'Exercitar decisões em Verdadeiro e Falso',
      'Limite superior / teto de testes sem redundância'
    ],
    goldenBizu: 'V(G) = 12 - 10 + 2 = 4. Significa: 4 caminhos independentes no código e obrigação de criar 4 casos de teste para passar por todas as linhas.',
    gradingCriteria: [
      'Apresentar o cálculo correto: V(G) = 12 - 10 + 2 = 4.',
      'Indicar que existem 4 caminhos independentes no grafo.',
      'Afirmar que são necessários no mínimo 4 casos de teste.',
      'Explicar que isso garante a cobertura de todos os comandos e decisões lógicas.'
    ]
  },

  {
    id: 'disc-sala-05',
    pdfMapping: 'Folha de Sala (Q5) • Gabarito Oficial (Questão 10 - Idades 18 a 65)',
    legacyId: 'disc-qs-14',
    isFromClassroomReview: true,
    classroomOrder: 5,
    subject: 'Qualidade de Software',
    topic: '5. Particionamento de Equivalência (Idades 18 a 65)',
    source: 'Folha de Atividade de Sala (Q05) • Gabarito Oficial UNIFACS (Q10)',
    difficulty: 'Fácil',
    statement: 'Um sistema aceita idades entre 18 e 65 anos, inclusive. Defina as classes de equivalência válidas e inválidas e escolha um valor representativo para cada classe.',
    contextHint: 'Intervalo fechado [18..65]. Uma classe válida e duas classes inválidas (abaixo de 18 e acima de 65). Escolha um número representativo para cada.',
    expectedAnswer: `O método de particionamento de equivalência divide o domínio de entrada em partições de dados (classes), assumindo que qualquer valor de uma mesma classe gerará o mesmo comportamento pelo sistema.

Para a regra de negócio "Idades entre 18 e 65 anos, inclusive" (18 <= idade <= 65), definimos 3 classes de equivalência:

1. Classe de Equivalência Válida (CE1):
• Definição: Idades permitidas pelo sistema dentro da faixa legal.
• Intervalo: 18 <= idade <= 65 anos (números inteiros de 18 a 65).
• Valor Representativo: 30 anos (ou 25, 40).
• Resultado Esperado: Entrada aceita e processada com sucesso.

2. Classe de Equivalência Inválida 1 (CE2 — Abaixo do limite inferior):
• Definição: Idades de menores de idade, fora da faixa mínima.
• Intervalo: idade < 18 anos.
• Valor Representativo: 15 anos (ou 10, 12).
• Resultado Esperado: Entrada rejeitada com mensagem de erro ("Idade inferior ao mínimo permitido de 18 anos").

3. Classe de Equivalência Inválida 2 (CE3 — Acima do limite superior):
• Definição: Idades acima da faixa etária máxima permitida.
• Intervalo: idade > 65 anos.
• Valor Representativo: 70 anos (ou 75, 80).
• Resultado Esperado: Entrada rejeitada com mensagem de erro ("Idade superior ao limite máximo permitido de 65 anos").

(Opcional de robustez: entradas inválidas não numéricas, como letras, caracteres especiais ou valores nulos).`,
    keywords: [
      'Particionamento de equivalência',
      'Classe válida: 18 a 65 anos inclusive (18 <= idade <= 65)',
      'Valor representativo válido (ex: 30, 25, 40)',
      'Classe inválida abaixo: menor que 18 (idade < 18)',
      'Valor representativo inválido inferior (ex: 12, 15, 10)',
      'Classe inválida acima: maior que 65 (idade > 65)',
      'Valor representativo inválido superior (ex: 70, 75, 80)',
      'Comportamento esperado: aceitar válidos e rejeitar inválidos'
    ],
    goldenBizu: 'Equivalência para [18..65]: CE1 Válida = 18 a 65 (testa 30). CE2 Inválida = <18 (testa 12). CE3 Inválida = >65 (testa 70). Um teste por grupo!',
    gradingCriteria: [
      'Identificar corretamente a classe válida (18 <= idade <= 65) e escolher valor representativo.',
      'Identificar a classe inválida abaixo de 18 (idade < 18) e escolher valor representativo.',
      'Identificar a classe inválida acima de 65 (idade > 65) e escolher valor representativo.',
      'Indicar os resultados esperados para cada classe.'
    ]
  },

  {
    id: 'disc-sala-06',
    pdfMapping: 'Folha de Sala (Q6) • Gabarito Oficial (Questão 11 - Idades 18 a 65)',
    legacyId: 'disc-qs-14-avl',
    isFromClassroomReview: true,
    classroomOrder: 6,
    subject: 'Qualidade de Software',
    topic: '6. Análise de Valor Limite (Idades 18 a 65)',
    source: 'Folha de Atividade de Sala (Q06) • Gabarito Oficial UNIFACS (Q11)',
    difficulty: 'Médio',
    statement: 'Para o mesmo campo de idade de 18 a 65 anos, proponha casos de teste utilizando análise de valor limite e justifique sua escolha.',
    contextHint: 'Foque nas fronteiras exatas (limite inferior 18 e superior 65) e seus valores adjacentes imediatos. Justifique com a alta incidência de erros de borda (<= vs <).',
    expectedAnswer: `1. JUSTIFICATIVA DA ESCOLHA DA ANÁLISE DE VALOR LIMITE:
A Análise de Valor Limite (AVL) complementa o particionamento de equivalência ao focar nas fronteiras exatas das classes de entrada. A justificativa técnica para essa escolha fundamenta-se no fato empírico de que a esmagadora maioria dos defeitos de programação (como erros "off-by-one", confusão entre operadores relacionais '<' e '<=' ou '>' e '>=') ocorre exatamente nas bordas e nos pontos de transição entre o que é válido e o que é inválido, e raramente no centro das classes.

2. CASOS DE TESTE PROPOSTOS:
Para o intervalo fechado [18, 65], analisamos os valores limítrofes e seus vizinhos imediatamente adjacentes (mínimo - 1, mínimo, mínimo + 1, máximo - 1, máximo, máximo + 1):

A. Fronteira Inferior (Limite de 18 anos):
• Caso 1 (Valor = 17): Imediatamente abaixo da borda inferior -> Resultado Esperado: INVÁLIDO (Rejeitar).
• Caso 2 (Valor = 18): Exatamente sobre a borda inferior (limite) -> Resultado Esperado: VÁLIDO (Aceitar).
• Caso 3 (Valor = 19): Imediatamente acima da borda inferior -> Resultado Esperado: VÁLIDO (Aceitar).

B. Fronteira Superior (Limite de 65 anos):
• Caso 4 (Valor = 64): Imediatamente abaixo da borda superior -> Resultado Esperado: VÁLIDO (Aceitar).
• Caso 5 (Valor = 65): Exatamente sobre a borda superior (limite) -> Resultado Esperado: VÁLIDO (Aceitar).
• Caso 6 (Valor = 66): Imediatamente acima da borda superior -> Resultado Esperado: INVÁLIDO (Rejeitar).

Resumo dos Casos de Teste: { 17, 18, 19 } e { 64, 65, 66 }.`,
    keywords: [
      'Análise de Valor Limite (AVL)',
      'Justificativa: erros de programação ocorrem com maior frequência nas fronteiras / bordas',
      'Erros em operadores relacionais (<, <=, >, >=)',
      'Fronteira inferior: 17 (inválido), 18 (válido), 19 (válido)',
      'Fronteira superior: 64 (válido), 65 (válido), 66 (inválido)',
      'Valores limítrofes e adjacentes'
    ],
    goldenBizu: 'Valor Limite testa a cerca e um passo fora da cerca: No 18 -> testa 17 (fora), 18 (na cerca), 19 (dentro). No 65 -> testa 64 (dentro), 65 (na cerca), 66 (fora). Total: 6 testes!',
    gradingCriteria: [
      'Justificar a técnica com base na concentração de erros nas fronteiras/condicionais.',
      'Propor os valores da fronteira inferior: 17, 18 e 19 com seus respectivos resultados esperados.',
      'Propor os valores da fronteira superior: 64, 65 e 66 com seus respectivos resultados esperados.'
    ]
  },

  {
    id: 'disc-sala-07',
    pdfMapping: 'Folha de Sala (Q7) • Gabarito Oficial (Questão 12 - Testes Unitários)',
    legacyId: 'disc-qs-10',
    isFromClassroomReview: true,
    classroomOrder: 7,
    subject: 'Qualidade de Software',
    topic: '7. Testes Unitários Automatizados',
    source: 'Folha de Atividade de Sala (Q07) • Gabarito Oficial UNIFACS (Q12)',
    difficulty: 'Fácil',
    statement: 'Explique o que são testes unitários automatizados e cite três benefícios. Depois, descreva um exemplo simples de função que poderia ser testada unitariamente.',
    contextHint: 'Menor componente testável (funções/métodos). Benefícios: detecção precoce, manutenção/refatoração, documentação viva. Exemplo: calcularDesconto.',
    expectedAnswer: `1. O QUE SÃO TESTES UNITÁRIOS AUTOMATIZADOS:
São verificações automáticas das menores unidades testáveis isoladas do código-fonte (como métodos, funções ou classes individuais), sem envolver dependências externas complexas (como banco de dados real ou rede), utilizando frameworks de teste (como JUnit 5).

2. TRÊS BENEFÍCIOS PRINCIPAIS:
• Detecção Precoce de Erros: Identifica e corrige defeitos no exato momento da codificação, onde o custo de correção é exponencialmente mais baixo do que nas etapas posteriores.
• Facilitação da Manutenção e Refatoração: Oferece uma rede de segurança sólida e imediata; o desenvolvedor pode otimizar e reestruturar o código sabendo que a bateria automatizada confirmará em segundos se alguma funcionalidade existente quebrou.
• Documentação Viva do Comportamento Esperado: Auxilia desenvolvedores atuais e futuros a compreender com clareza o contrato, as entradas válidas e o comportamento esperado de cada função através dos próprios casos de teste.

3. EXEMPLO SIMPLES DE FUNÇÃO TESTÁVEL UNITARIAMENTE:
• Função em Java:
  double calcularDesconto(double valorCompra, boolean isClienteVip) {
      if (isClienteVip && valorCompra >= 100.0) {
          return valorCompra * 0.10; // 10% de desconto
      }
      return 0.0;
  }

• Cenários de Teste Unitário (JUnit 5):
  - Cenário 1 (Cliente VIP com compra de 150): assertEquals(15.0, calcularDesconto(150.0, true), 0.001);
  - Cenário 2 (Cliente VIP com compra de 80): assertEquals(0.0, calcularDesconto(80.0, true), 0.001);
  - Cenário 3 (Cliente não-VIP com compra de 200): assertEquals(0.0, calcularDesconto(200.0, false), 0.001);`,
    keywords: [
      'Verificações automáticas de pequenas partes isoladas do código',
      'Métodos ou classes individuais',
      'Detecção precoce de erros (redução de custo)',
      'Facilita manutenção e refatoração do código',
      'Documentação viva do comportamento esperado',
      'Exemplo de função simples (ex: calcularDesconto, somar, verificarMaioridade)',
      'Entradas, lógica e saídas esperadas (asserções / assertEquals)'
    ],
    goldenBizu: 'Unitário testa a menor peça isolada (método/função). Benefícios: acha erro cedo, dá coragem pra refatorar e serve como manual vivo. Exemplo: método calcularDesconto.',
    gradingCriteria: [
      'Conceituar teste unitário automatizado em escopo atômico (métodos/classes isoladas).',
      'Apresentar 3 benefícios consolidados (detecção precoce, manutenção/refatoração, documentação).',
      'Descrever um exemplo simples e funcional de método e seus respectivos casos de teste unitários.'
    ]
  },

  {
    id: 'disc-sala-08',
    pdfMapping: 'Folha de Sala (Q8) • Gabarito Oficial (Questão 13 - Integração e Interfaces)',
    legacyId: 'disc-qs-12',
    isFromClassroomReview: true,
    classroomOrder: 8,
    subject: 'Qualidade de Software',
    topic: '8. Teste de Integração (Defeitos de Interface)',
    source: 'Folha de Atividade de Sala (Q08) • Gabarito Oficial UNIFACS (Q13)',
    difficulty: 'Médio',
    statement: 'Defina teste de integração e explique qual tipo de defeito ele pode revelar mesmo quando os módulos, isoladamente, passam em seus testes unitários.',
    contextHint: 'Verifica interação e comunicação entre módulos. Explique que partes perfeitas sozinhas podem quebrar na interface, formatos de dados, concorrência ou ordem de execução.',
    expectedAnswer: `1. DEFINIÇÃO DE TESTE DE INTEGRAÇÃO:
O teste de integração é um nível de teste de software que tem como finalidade verificar se diferentes módulos, componentes ou subsistemas funcionam corretamente quando são combinados e integrados, avaliando principalmente a comunicação, a troca de dados e as interações entre eles. Seu objetivo primordial é identificar defeitos nas interfaces e conexões entre componentes.

2. TIPOS DE DEFEITOS QUE ELE REVELA (MESMO COM 100% DE SUCESSO NOS TESTES UNITÁRIOS):
Mesmo que cada módulo funcione com perfeição isolada em sua bancada, a integração pode revelar falhas graves que não são detectadas nos testes unitários:
• Incompatibilidades de Interface e Tipagem de Dados: Um módulo chamador passa dados em um formato ou unidade (ex: data como String 'DD/MM/YYYY' ou valor em dólares) e o módulo chamado espera outro formato (ex: LocalDate em 'YYYY-MM-DD' ou valor em centavos).
• Falhas de Comunicação e Perda de Parâmetros: Parâmetros truncados, nulos ou passados em ordem invertida através de chamadas de métodos, barramentos de mensageria ou APIs REST.
• Inconsistência na Sequência de Execução (Ordem Temporal): O módulo consumidor tenta processar ou ler dados antes que o módulo produtor tenha concluído a transação ou gravação no banco de dados.
• Concorrência e Bloqueios em Recursos Compartilhados: Disputas simultâneas por tabelas de banco de dados (deadlocks), corrupção de variáveis globais compartilhadas ou esgotamento de conexões de pool de dados que só se manifestam com múltiplos módulos operando juntos.`,
    keywords: [
      'Verificar comunicação e troca de dados entre módulos integrados',
      'Objetivo: identificar defeitos nas interfaces e interações',
      'Incompatibilidade entre interfaces e formatos de dados',
      'Falhas na comunicação / perda de parâmetros',
      'Erros na sequência de execução das operações',
      'Inconsistência de dados / concorrência em recursos compartilhados',
      'Módulos funcionam isolados, mas falham combinados'
    ],
    goldenBizu: 'Cada peça do motor pode estar perfeita sozinha, mas se o encaixe tiver folga ou o combustível for errado, o motor funde. Integração testa o encaixe, as interfaces e a troca de dados!',
    gradingCriteria: [
      'Definir teste de integração com foco em comunicação e interações entre módulos.',
      'Ressaltar o objetivo principal de identificar falhas em interfaces.',
      'Listar os defeitos específicos invisíveis ao teste unitário (incompatibilidade de formatos, sequência, concorrência).'
    ]
  },

  {
    id: 'disc-sala-09',
    pdfMapping: 'Folha de Sala (Q9) • Gabarito Oficial (Questão 14 - Top-Down e Bottom-Up)',
    legacyId: 'disc-qs-09',
    isFromClassroomReview: true,
    classroomOrder: 9,
    subject: 'Qualidade de Software',
    topic: '9. Top-Down vs Bottom-Up (Stubs e Drivers)',
    source: 'Folha de Atividade de Sala (Q09) • Gabarito Oficial UNIFACS (Q14)',
    difficulty: 'Médio',
    statement: 'Compare as estratégias de integração top-down e bottom-up. Explique o papel de stubs e drivers nessas abordagens.',
    contextHint: 'Top-down: desce na hierarquia e usa STUBS (módulos fictícios embaixo). Bottom-up: sobe na hierarquia e usa DRIVERS (pseudocontroladores em cima).',
    expectedAnswer: `As estratégias de integração estruturada definem a ordem cronológica em que os módulos são combinados:

1. INTEGRAÇÃO TOP-DOWN (DESCENDENTE):
• Como funciona: Os módulos são integrados deslocando-se para baixo na hierarquia de controle, iniciando pelo módulo principal (controlador do topo da arquitetura) e descendo progressivamente até os módulos subordinados.
• Papel dos STUBS: Como os módulos de nível inferior ainda não foram implementados ou integrados, utilizam-se STUBS (módulos fictícios ou "cascas" substitutas). O stub simula o comportamento dos componentes inferiores pendentes, recebendo chamadas do módulo de topo e devolvendo respostas estáticas pré-programadas, permitindo testar a lógica do controlador imediatamente.

2. INTEGRAÇÃO BOTTOM-UP (ASCENDENTE):
• Como funciona: Os módulos são integrados de baixo para cima, iniciando pelos componentes mais atômicos da base da hierarquia (módulos utilitários, rotinas de cálculo e acesso a dados), que são agrupados em agregados (clusters/builds).
• Papel dos DRIVERS: Como os módulos de nível superior (controladores) ainda não foram integrados para comandar os módulos da base, desenvolvem-se DRIVERS (pseudocontroladores ou "programas condutores"). O driver simula o módulo chamador, enviando dados de teste para a entrada do módulo subordinado e imprimindo ou validando suas saídas. Os drivers são descartados à medida que a integração sobe na hierarquia.

RESUMO COMPARATIVO:
• Top-Down: Desce na árvore | Inicia no Módulo Principal | Usa STUBS (simula para baixo).
• Bottom-Up: Sobe na árvore | Inicia nos Módulos Utilitários | Usa DRIVERS (simula para cima).`,
    keywords: [
      'Top-down: integração descendente / do topo para baixo',
      'Inicia pelo módulo principal / controlador',
      'Papel dos STUBS: módulos fictícios que simulam componentes inferiores pendentes',
      'Bottom-up: integração ascendente / de baixo para cima',
      'Inicia por componentes de nível inferior / utilitários da base',
      'Papel dos DRIVERS: pseudocontroladores que coordenam entradas e saídas para a base',
      'Drivers são removidos conforme a integração sobe na hierarquia'
    ],
    goldenBizu: 'Top-Down desce e usa STUB (módulo fantoche embaixo). Bottom-Up sobe e usa DRIVER (piloto temporário em cima). Top=Stub, Bottom=Driver!',
    gradingCriteria: [
      'Diferenciar o sentido de integração (Top-Down inicia no topo; Bottom-Up inicia na base).',
      'Explicar com precisão o papel dos STUBS na integração descendente.',
      'Explicar com precisão o papel dos DRIVERS na integração ascendente.'
    ]
  },

  {
    id: 'disc-sala-10',
    pdfMapping: 'Folha de Sala (Q10) • Gabarito Oficial (Questão 15 - Fumaça e Regressão)',
    legacyId: 'disc-qs-11',
    isFromClassroomReview: true,
    classroomOrder: 10,
    subject: 'Qualidade de Software',
    topic: '10. Fumaça e Regressão (Cenário em Loja Virtual)',
    source: 'Folha de Atividade de Sala (Q10) • Gabarito Oficial UNIFACS (Q15)',
    difficulty: 'Médio',
    statement: 'Diferencie teste de fumaça (smoke test) e teste de regressão. Crie um cenário de alteração em uma loja virtual e indique quando cada tipo de teste deveria ser executado.',
    contextHint: 'Fumaça = teste rápido diário na build para checar o básico. Regressão = reteste amplo após mudança para evitar novos defeitos. Cenário: alteração no cálculo de frete.',
    expectedAnswer: `1. DIFERENCIAÇÃO ENTRE OS TESTES:
• Teste de Fumaça (Smoke Test): É uma abordagem de integração contínua executada diariamente ou a cada nova build (versão compilada). Consiste em um conjunto rápido, abrangente e superficial de testes que verifica se as funções mais vitais do sistema operam o suficiente para mantê-lo "de pé". Seu objetivo é expor erros catastróficos que impeçam o funcionamento básico e justifiquem a rejeição imediata da build antes de testes mais profundos.
• Teste de Regressão: É a reexecução de um subconjunto amplo e detalhado de casos de teste para garantir que modificações recentes no código (correção de bugs, refatoração ou inclusão de novos recursos) não tenham introduzido novos defeitos ("regressões") ou quebrado comportamentos que antes funcionavam perfeitamente.

2. CENÁRIO PRÁTICO EM UMA LOJA VIRTUAL:
• Alteração Realizada: A equipe de engenharia modificou o módulo de "Cálculo de Frete" para integrar uma nova transportadora com cálculo de prazo por CEP.

• Quando executar o Teste de Fumaça:
Deve ser executado imediatamente após o pipeline de integração contínua (CI) gerar a nova build no servidor de homologação. O teste de fumaça roda em menos de 3 minutos validando os fluxos vitais: a página inicial carrega? A busca de produtos responde? O usuário consegue fazer login e colocar um item no carrinho? Se o sistema travar na inicialização, a build é imediatamente rejeitada e devolvida aos desenvolvedores.

• Quando executar o Teste de Regressão:
Deve ser executado após a aprovação no teste de fumaça. Roda-se a suíte completa de testes de regressão sobre todos os módulos adjacentes à compra: testa-se se a alteração no cálculo de frete não afetou o cálculo de cupons de desconto, não gerou divergência no total do pedido, não quebrou as formas de pagamento (cartão, Pix) e não corrompeu a emissão da nota fiscal.`,
    keywords: [
      'Teste de fumaça: executado diariamente em uma build para expor erros graves',
      'Verificar funcionamento básico / rejeição precoce da build',
      'Teste de regressão: reexecução de testes para garantir que modificações não criaram novos defeitos',
      'Cenário de loja virtual descrito (ex: alteração no cálculo de frete ou cupom)',
      'Momento da fumaça: logo após a compilação/build da alteração (login, vitrine, carrinho)',
      'Momento da regressão: após a fumaça, testando checkout, pagamento e total do pedido sem efeitos colaterais'
    ],
    goldenBizu: 'Fumaça = checagem rápida para ver se o paciente está vivo (a build abre sem cair). Regressão = checar se consertar o frete não quebrou o pagamento do carrinho!',
    gradingCriteria: [
      'Diferenciar formalmente teste de fumaça (saúde da build) e teste de regressão (ausência de efeitos colaterais).',
      'Apresentar um cenário realista de alteração em loja virtual (ex: módulo de frete).',
      'Indicar com precisão o momento da execução do smoke test (logo pós-build).',
      'Indicar com precisão o momento e abrangência do teste de regressão (pós-fumaça, cobrindo fluxos adjacentes).'
    ]
  },

  // =========================================================================
  // QUESTÕES TEÓRICAS COMPLEMENTARES DO GABARITO OFICIAL UNIFACS (PDF 2)
  // =========================================================================

  {
    id: 'disc-qs-02',
    pdfMapping: 'Exclusiva do Gabarito Oficial UNIFACS (Questão 02 - Participantes RTF)',
    legacyId: 'disc-qs-02',
    isFromClassroomReview: false,
    classroomOrder: 11,
    subject: 'Qualidade de Software',
    topic: 'Revisões Técnicas Formais (RTF)',
    source: 'Gabarito Oficial UNIFACS (Q02) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Identifique os principais participantes de uma revisão técnica formal e descreva as responsabilidades desempenhadas por cada um deles durante o processo de revisão.',
    contextHint: 'São exatamente 4 papéis essenciais: Produtor, Líder, Revisores e Registrador. Lembre-se da regra de ouro: "Revisa-se o produto, nunca o produtor".',
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
      'Líder da Revisão (planeja, convoca, controla o tempo < 2h)',
      'Revisores (examinam artefato com preparação prévia, apontam defeitos)',
      'Registrador / Secretário (anota problemas e descobertas na ata)',
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
    pdfMapping: 'Exclusiva do Gabarito Oficial UNIFACS (Questão 03 - Decisões e Documentos RTF)',
    legacyId: 'disc-qs-03',
    isFromClassroomReview: false,
    classroomOrder: 12,
    subject: 'Qualidade de Software',
    topic: 'Revisões Técnicas Formais (RTF)',
    source: 'Gabarito Oficial UNIFACS (Q03) • Pressman 9ª ed.',
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
    id: 'disc-qs-05-cb',
    pdfMapping: 'Exclusiva do Gabarito Oficial UNIFACS (Questão 05 - 4 Objetivos Caixa-Branca)',
    legacyId: 'disc-qs-05',
    isFromClassroomReview: false,
    classroomOrder: 13,
    subject: 'Qualidade de Software',
    topic: 'Caixa-Branca (Objetivos Lógicos)',
    source: 'Gabarito Oficial UNIFACS (Q05) • Pressman 9ª ed.',
    difficulty: 'Médio',
    statement: 'Quais são os quatro objetivos lógicos perseguidos pela filosofia do teste caixa-branca?',
    contextHint: 'Lembre-se dos 4 alvos: caminhos independentes, decisões verdadeiro/falso, limites de laços e estruturas de dados internas.',
    expectedAnswer: `O teste caixa-branca deriva casos de teste para atingir quatro objetivos lógicos fundamentais:
1. Garantir que todos os caminhos independentes de um módulo foram exercitados pelo menos uma vez;
2. Exercitar todas as decisões lógicas nos seus estados verdadeiro e falso;
3. Executar todos os ciclos (loops) em seus limites operacionais e dentro de suas fronteiras;
4. Exercitar estruturas de dados internas para garantir sua validade (ex: limites de vetores, ponteiros, variáveis de estado).`,
    keywords: [
      '1) Garantir que todos os caminhos independentes foram exercitados',
      '2) Exercitar todas as decisões lógicas nos estados verdadeiro e falso',
      '3) Executar todos os ciclos em seus limites e fronteiras',
      '4) Exercitar estruturas de dados internas'
    ],
    goldenBizu: 'Caixa-branca busca: 1) Passar por todos os caminhos; 2) Testar V e F de todo if; 3) Testar bordas de todo loop (while/for); 4) Testar memória/arrays internos.',
    gradingCriteria: [
      'Citar os 4 objetivos lógicos clássicos de Pressman.',
      'Enfatizar a cobertura de caminhos independentes e ramos V/F.'
    ]
  },

  {
    id: 'disc-qs-09-fibdt',
    pdfMapping: 'Exclusiva do Gabarito Oficial UNIFACS (Questão 09 - 5 Erros FIBDT Caixa-Preta)',
    legacyId: 'disc-qs-09-fibdt',
    isFromClassroomReview: false,
    classroomOrder: 14,
    subject: 'Qualidade de Software',
    topic: 'Caixa-Preta (Categorias de Erros - FIBDT)',
    source: 'Gabarito Oficial UNIFACS (Q09) • Pressman 9ª ed.',
    difficulty: 'Fácil',
    statement: 'Quais são as cinco categorias de erros que o teste caixa-preta busca expor?',
    contextHint: 'Use o mnemônico oficial F-I-B-D-T: Funções, Interface, Banco de dados, Desempenho, Término.',
    expectedAnswer: `O teste caixa-preta tenta encontrar erros em cinco categorias principais (Mnemônico F-I-B-D-T):
1. Funções incorretas ou ausentes (em relação aos requisitos especificados);
2. Erros de interface (com o usuário, APIs externas ou outros sistemas);
3. Erros em estruturas de dados ou acesso a bancos de dados externos;
4. Erros de comportamento ou desempenho (tempo de resposta, lentidão, sobrecarga);
5. Erros de inicialização e término (falha ao abrir o sistema ou fechamento anormal que deixa processos zumbis).`,
    keywords: [
      '1) Funções incorretas ou ausentes',
      '2) Erros de interface',
      '3) Erros em estruturas de dados ou bancos de dados externos',
      '4) Erros de comportamento ou desempenho',
      '5) Erros de inicialização e término',
      'Mnemônico FIBDT'
    ],
    goldenBizu: 'F-I-B-D-T: Funções ausentes, Interface com erros, Banco de dados/estruturas, Desempenho lento, Término/inicialização travados.',
    gradingCriteria: [
      'Listar com precisão as cinco categorias de erros de Pressman.'
    ]
  },

  {
    id: 'disc-qs-08-formulas',
    pdfMapping: 'Exclusiva do Gabarito Oficial UNIFACS (Questão 08 - As 3 Fórmulas de V(G))',
    legacyId: 'disc-qs-08-formulas',
    isFromClassroomReview: false,
    classroomOrder: 15,
    subject: 'Qualidade de Software',
    topic: 'Complexidade Ciclomática (As 3 Fórmulas)',
    source: 'Gabarito Oficial UNIFACS (Q08) • Tom McCabe',
    difficulty: 'Fácil',
    statement: 'Quais são as três formas equivalentes de calcular a complexidade ciclomática V(G) em um grafo de fluxo?',
    contextHint: 'Regiões, Arestas e Nós, Nós Predicados.',
    expectedAnswer: `A complexidade ciclomática V(G) pode ser calculada de três formas matematicamente equivalentes a partir do grafo de fluxo:
1. O número de regiões do grafo: V(G) = Regiões planas (contando todas as regiões fechadas mais a região externa aberta).
2. A fórmula de arestas e nós: V(G) = E - N + 2 (onde E é o número de arestas e N é o número de nós).
3. A fórmula dos nós predicados: V(G) = P + 1 (onde P é o número de pontos de decisão/nós predicados, como ifs e whiles).`,
    keywords: [
      '1. O número de regiões do grafo',
      '2. V(G) = E - N + 2 (arestas e nós)',
      '3. V(G) = P + 1 (nós predicados / pontos de decisão)'
    ],
    goldenBizu: '3 fórmulas que dão o mesmo resultado: Regiões (fechadas + 1 de fora), E - N + 2, e P + 1 (onde P é quantos ifs/whiles tem).',
    gradingCriteria: [
      'Apresentar corretamente as 3 fórmulas de McCabe.'
    ]
  },

  {
    id: 'disc-qs-13-vv',
    pdfMapping: 'Revisão Teórica Complementar (Verificação vs Validação - Boehm)',
    legacyId: 'disc-qs-13',
    isFromClassroomReview: false,
    classroomOrder: 16,
    subject: 'Qualidade de Software',
    topic: 'Verificação vs Validação (V&V)',
    source: 'Gabarito Oficial UNIFACS • Barry Boehm / Pressman',
    difficulty: 'Fácil',
    statement: 'Diferencie teste de verificação e teste de validação, apresentando as perguntas fundamentais de Barry Boehm associadas a cada um.',
    contextHint: 'Verificação: "Estamos construindo o produto corretamente?". Validação: "Estamos construindo o produto correto?".',
    expectedAnswer: `A distinção canônica estabelecida por Barry Boehm e adotada por Pressman resume-se em duas perguntas clássicas:

1. Verificação:
• Pergunta de Boehm: "Estamos construindo o produto corretamente?" (Are we building the product right?)
• Significado: Avalia se o software está sendo construído rigorosamente de acordo com as especificações técnicas, modelos arquiteturais e normas de codificação. É voltado para a conformidade técnica formal.

2. Validação:
• Pergunta de Boehm: "Estamos construindo o produto correto?" (Are we building the right product?)
• Significado: Avalia se o software final atende às reais necessidades e regras de negócio do cliente e dos usuários finais no ambiente operacional real.`,
    keywords: [
      'Verificação: "Estamos construindo o produto corretamente?" (Building the product right)',
      'Verificação: conformidade técnica com especificações',
      'Validação: "Estamos construindo o produto correto?" (Building the right product)',
      'Validação: atender às necessidades reais do cliente e usuário final'
    ],
    goldenBizu: 'Verificação olha pro manual técnico (está feito do jeito certo?). Validação olha pro cliente (é exatamente isso que ele precisa?).',
    gradingCriteria: [
      'Citar as perguntas exatas de Barry Boehm.',
      'Diferenciar conformidade de especificação (verificação) de atendimento às necessidades do usuário (validação).'
    ]
  },

  // ==========================================
  // DISCIPLINA 2: BANCO DE DADOS (QUARTA 21/10)
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
      'Conceituar atomicidade e unicidade de chave na 1FN.',
      'Definir dependência parcial na 2FN e esclarecer que só existe em chaves compostas.',
      'Definir dependência transitiva na 3FN (atributo não-chave determinando outro não-chave).'
    ]
  },
  {
    id: 'disc-bd-02',
    subject: 'Banco de Dados',
    topic: 'Modelagem da Clínica Veterinária',
    source: 'UNIFACS - Prof. Luiz Henrique • Estudo de Caso Oficial A3',
    difficulty: 'Difícil',
    statement: 'Com base no estudo de caso da Clínica Veterinária (VetCare), apresente as entidades principais, as regras de cardinalidade entre elas e justifique por que o relacionamento entre Consulta e Veterinário deve ser 1:N (ou N:1) e para onde migra a Chave Estrangeira (FK).',
    contextHint: 'Entidades: Veterinario, Cliente, Paciente, Consulta. Na cardinalidade 1:N, a chave primária do lado "1" migra como chave estrangeira (FK) para a tabela do lado "N".',
    expectedAnswer: `1. Entidades Principais da Clínica Veterinária:
• Veterinario (id_veterinario PK, nome, crmv, especialidade, telefone, email)
• Cliente (id_cliente PK, nome, cpf, telefone, email, endereco)
• Paciente (id_paciente PK, nome, especie, raca, data_nasc, peso, id_cliente FK)
• Consulta (id_consulta PK, data_hora, motivo, diagnostico, valor, id_paciente FK, id_veterinario FK)

2. Regras de Cardinalidade:
• Cliente - Paciente (1:N): Um Cliente pode cadastrar 1 ou muitos Pacientes; cada Paciente pertence obrigatoriamente a exatamente 1 Cliente. A PK 'id_cliente' migra como FK para 'Paciente'.
• Paciente - Consulta (1:N): Um Paciente pode realizar 0 ou muitas Consultas ao longo da vida; cada Consulta refere-se obrigatoriamente a 1 único Paciente. A PK 'id_paciente' migra como FK para 'Consulta'.
• Veterinario - Consulta (1:N): Um Veterinário pode realizar 0 ou muitas Consultas; cada Consulta é conduzida por exatamente 1 Veterinário responsável. A PK 'id_veterinario' migra como FK para 'Consulta'.

3. Justificativa da Migração de Chave Estrangeira (FK):
Pelas regras canônicas do Modelo Relacional, em um relacionamento de cardinalidade 1:N, a Chave Primária da entidade do lado "1" (Veterinario) migra obrigatoriamente para a entidade do lado "N" (Consulta) tornando-se Chave Estrangeira (FK).
Se colocássemos 'id_consulta' dentro de 'Veterinario', o veterinário só poderia fazer uma única consulta em toda a sua carreira, ou teríamos que violar a 1FN criando uma lista de consultas separadas por vírgula na mesma linha. Portanto, a FK 'id_veterinario' fica na tabela 'Consulta'.`,
    keywords: [
      'Entidades: Veterinario, Cliente, Paciente, Consulta',
      'Cardinalidade Cliente-Paciente 1:N (FK id_cliente em Paciente)',
      'Cardinalidade Veterinario-Consulta 1:N',
      'Regra relacional: PK do lado 1 migra como FK para o lado N',
      'FK id_veterinario fica na tabela Consulta',
      'Evitar violação da 1FN (múltiplas consultas por veterinário)'
    ],
    goldenBizu: 'Regra infalível do Modelo Relacional: O lado 1 é a mãe, o lado N são os filhos. O ID da mãe migra pro registro do filho. A FK sempre vai pro lado N (Consulta).',
    gradingCriteria: [
      'Listar as 4 entidades do domínio da clínica.',
      'Definir as cardinalidades 1:N com precisão.',
      'Justificar a migração da FK id_veterinario para a tabela Consulta sob as regras da 1FN.'
    ]
  },
  {
    id: 'disc-bd-03',
    subject: 'Banco de Dados',
    topic: 'Regras de Negócio & DDL',
    source: 'UNIFACS - Prof. Luiz Henrique • Script DDL Oficial',
    difficulty: 'Médio',
    statement: 'No projeto físico da tabela `consulta` da Clínica Veterinária, por que a coluna `diagnostico` DEVE permitir valores nulos (NULL), enquanto `data_hora` e `valor` devem ser declarados como NOT NULL?',
    contextHint: 'Pense no ciclo de vida de um agendamento: uma consulta nasce marcada antes do atendimento começar.',
    expectedAnswer: `A definição de restrições NULL e NOT NULL no comando DDL de criação da tabela 'consulta' reflete rigorosamente o ciclo de vida e as regras de negócio de um atendimento clínico:

1. Por que 'diagnostico' DEVE ser NULL:
• No momento em que uma consulta é AGENDADA pela recepcionista, o animal ainda não foi examinado pelo médico veterinário. O diagnóstico médico não existe fisicamente nesse instante inicial.
• Se a coluna 'diagnostico' fosse definida como NOT NULL, o sistema obrigaria a recepcionista a digitar um diagnóstico fictício ou prematuro apenas para conseguir salvar o agendamento, violando a integridade dos dados médicos.
• Somente após a realização da consulta é que o veterinário executará um comando SQL UPDATE para preencher o campo 'diagnostico' com o laudo definitivo.

2. Por que 'data_hora' e 'valor' DEVEM ser NOT NULL:
• 'data_hora': É impossível conceber um agendamento sem data e horário marcados. O sistema precisa da data/hora para controlar a agenda do veterinário e evitar overbooking (choque de horários).
• 'valor': Toda prestação de serviço veterinário possui um custo tabelado previamente acordado com o cliente. O campo financeiro não pode ser nulo para garantir o faturamento e a integridade contábil da clínica.`,
    keywords: [
      'Ciclo de vida do agendamento vs atendimento',
      'Diagnostico NULL: no agendamento o animal ainda não foi examinado',
      'NOT NULL forçaria dados fictícios na recepção',
      'UPDATE posterior pelo veterinário com o laudo',
      'Data_hora NOT NULL: controle de agenda e prevenção de choque de horários',
      'Valor NOT NULL: integridade financeira e contábil do serviço'
    ],
    goldenBizu: 'Você marca a consulta na recepção na segunda (não tem diagnóstico = NULL). Você vai na quarta e o médico escreve o laudo (dá UPDATE no diagnóstico).',
    gradingCriteria: [
      'Explicar a temporalidade do agendamento prévio (diagnóstico inexistente na criação).',
      'Alertar sobre o risco de dados fictícios caso fosse NOT NULL.',
      'Justificar a obrigatoriedade de data/hora (agenda) e valor (faturamento).'
    ]
  },
  {
    id: 'disc-bd-04',
    subject: 'Banco de Dados',
    topic: 'Tipos de Dados SQL (Precisão Monetária)',
    source: 'UNIFACS - Prof. Luiz Henrique • Padrões de Projeto SQL',
    difficulty: 'Fácil',
    statement: 'Por que nunca se deve utilizar os tipos de dados `FLOAT` ou `DOUBLE` para armazenar valores monetários (moeda/dinheiro) em um banco de dados relacional? Qual é o tipo de dado correto a ser utilizado em SQL e como ele deve ser especificado?',
    contextHint: 'Pense em ponto flutuante binário (IEEE 754), erros de arredondamento de centavos e precisão decimal exata.',
    expectedAnswer: `1. Por que NUNCA usar FLOAT ou DOUBLE para valores monetários:
• Os tipos FLOAT e DOUBLE implementam a representação de ponto flutuante baseada no padrão IEEE 754 (base binária). Em base binária, frações decimais simples (como 0.1 ou 0.01 centavos) não possuem representação finita exata, tornando-se dízimas periódicas binárias aproximadas.
• Essa aproximação gera pequenos erros de arredondamento cumulativos ao realizar somas, subtrações e multiplicações (ex: 0.1 + 0.2 resultando em 0.30000000000000004).
• Em sistemas financeiros, comerciais e bancários, a perda ou ganho cumulativo de frações de centavos gera quebra de auditoria contábil, divergência em balancetes fiscais e problemas jurídicos graves.

2. Tipo de Dado Correto em SQL:
• O tipo padrão canônico é o DECIMAL (ou NUMERIC).
• Especificação Correta: DECIMAL(p, s), tipicamente DECIMAL(10, 2).
  - '10' (precisão): Número total máximo de dígitos suportados (inteiros + decimais).
  - '2' (escala): Número exato de casas decimais após a vírgula (centavos fixos).
• Vantagem: O DECIMAL armazena os dígitos em formato decimal exato ("fixed-point arithmetic"), garantindo precisão matemática absoluta sem nenhum desvio em operações aritméticas.`,
    keywords: [
      'FLOAT e DOUBLE: ponto flutuante aproximado (IEEE 754 binário)',
      'Erros de arredondamento cumulativos em frações de centavos',
      'Incompatibilidade com auditoria financeira e contábil',
      'Tipo correto: DECIMAL ou NUMERIC',
      'Especificação: DECIMAL(10, 2)',
      '10 = precisão total / 2 = escala (centavos fixos)',
      'Armazenamento decimal exato (ponto fixo)'
    ],
    goldenBizu: 'FLOAT e DOUBLE são aproximados (engolem centavos e quebram a contabilidade). Dinheiro SEMPRE se grava com DECIMAL(10,2)!',
    gradingCriteria: [
      'Explicar o erro de representação binária aproximada do FLOAT/DOUBLE.',
      'Identificar o tipo correto: DECIMAL ou NUMERIC.',
      'Demonstrar a sintaxe correta DECIMAL(10,2) explicando precisão e escala.'
    ]
  },
  {
    id: 'disc-bd-05',
    subject: 'Banco de Dados',
    topic: 'Comandos SQL: DDL vs DML',
    source: 'UNIFACS - Prof. Luiz Henrique • Comandos SQL Básicos',
    difficulty: 'Fácil',
    statement: 'Diferencie comandos DDL de comandos DML em SQL. Apresente os três principais comandos de cada categoria e descreva sucintamente suas finalidades.',
    contextHint: 'DDL define a estrutura (tabelas, colunas). DML manipula os dados (linhas/tuplas).',
    expectedAnswer: `A linguagem SQL é dividida em sublinguagens especializadas de acordo com o objetivo da instrução:

1. DDL (Data Definition Language — Linguagem de Definição de Dados):
• Foco: Manipula a estrutura física, o esquema e os metadados dos objetos do banco de dados (tabelas, índices, visões). Altera o "esqueleto" do banco, não as linhas diretamente.
• Três Principais Comandos DDL:
  - CREATE: Cria novos objetos no banco de dados (Ex: CREATE TABLE paciente (...);).
  - ALTER: Modifica a estrutura de um objeto pré-existente, como adicionar uma nova coluna ou restrição (Ex: ALTER TABLE paciente ADD COLUMN cor VARCHAR(30);).
  - DROP: Remove permanentemente um objeto completo e toda a sua estrutura do banco de dados (Ex: DROP TABLE consulta;).

2. DML (Data Manipulation Language — Linguagem de Manipulação de Dados):
• Foco: Manipula o conteúdo e os dados armazenados dentro das tabelas (as linhas/tuplas), sem alterar a estrutura das colunas.
• Três Principais Comandos DML:
  - INSERT: Insere novas tuplas (linhas de registro) dentro de uma tabela (Ex: INSERT INTO veterinario (nome, crmv) VALUES ('Dr. Pedro', 'BA-1234');).
  - UPDATE: Altera os valores de registros pré-existentes (Ex: UPDATE consulta SET status = 'Realizada' WHERE id_consulta = 10;).
  - DELETE: Remove uma ou mais linhas de uma tabela com base em um critério (Ex: DELETE FROM paciente WHERE id_paciente = 5;).
  *(Nota: O SELECT é classificado por alguns autores como DQL - Data Query Language, mas frequentemente agrupado no DML).*`,
    keywords: [
      'DDL: Data Definition Language / estrutura e metadados',
      'Comandos DDL: CREATE, ALTER, DROP',
      'DML: Data Manipulation Language / manipulação de dados e tuplas',
      'Comandos DML: INSERT, UPDATE, DELETE',
      'Diferença: DDL mexe na estrutura da tabela; DML mexe nas linhas de dados'
    ],
    goldenBizu: 'DDL mexe na planta da casa (CREATE, ALTER, DROP a parede). DML mexe nos móveis dentro da casa (INSERT, UPDATE, DELETE o sofá).',
    gradingCriteria: [
      'Diferenciação clara entre estrutura (DDL) e dados (DML).',
      'Citação correta dos 3 comandos DDL (CREATE, ALTER, DROP).',
      'Citação correta dos 3 comandos DML (INSERT, UPDATE, DELETE).'
    ]
  },
  {
    id: 'disc-bd-06',
    subject: 'Banco de Dados',
    topic: 'DELETE vs DROP',
    source: 'UNIFACS - Prof. Luiz Henrique • Boas Práticas SQL',
    difficulty: 'Fácil',
    statement: 'Qual a diferença essencial entre os comandos `DELETE FROM tabela;` e `DROP TABLE tabela;`? O que acontece com a estrutura da tabela e com os dados em cada um desses comandos?',
    contextHint: 'DELETE limpa os dados da tabela (o esqueleto continua). DROP destrói os dados E o esqueleto da tabela.',
    expectedAnswer: `A diferença reside no nível de destruição do objeto no banco de dados:

1. Comando 'DELETE FROM tabela;':
• Categoria: Comando DML (Data Manipulation Language).
• O que acontece com os dados: Todas as linhas (tuplas) armazenadas na tabela são excluídas uma a uma.
• O que acontece com a estrutura: A ESTRUTURA DA TABELA É PRESERVADA INTACTA. As colunas, tipos de dados, chaves primárias, chaves estrangeiras, índices e permissões continuam existindo no catálogo do banco. A tabela continua existindo, porém completamente vazia (pronta para receber novos INSERTs).
• Controle transacional: Pode ser desfeito via ROLLBACK se estiver dentro de uma transação aberta.

2. Comando 'DROP TABLE tabela;':
• Categoria: Comando DDL (Data Definition Language).
• O que acontece com os dados: Todos os dados armazenados são destruídos e desalocados do disco permanentemente.
• O que acontece com a estrutura: A ESTRUTURA DA TABELA É COMPLETAMENTE DESTRUÍDA E APAGADA. O esquema da tabela é removido do dicionário de dados do SGBD.
• Consequência: A tabela deixa de existir fisicamente. Qualquer comando 'SELECT * FROM tabela' subsequente resultará em erro fatal ("Table doesn't exist").`,
    keywords: [
      'DELETE: comando DML / apaga as linhas/tuplas',
      'DELETE: preserva a estrutura da tabela intacta',
      'A tabela continua existindo vazia para novos INSERTs',
      'DROP: comando DDL / destrói estrutura e dados',
      'A tabela é apagada do catálogo do SGBD e deixa de existir',
      'SELECT após DROP resulta em erro de tabela inexistente'
    ],
    goldenBizu: 'DELETE limpa o quadro negro (o quadro continua na parede). DROP arranca o quadro negro da parede e joga no lixo.',
    gradingCriteria: [
      'Distinção precisa entre comando DML (DELETE) e DDL (DROP).',
      'Explicar o destino da estrutura da tabela em cada um (permanece no DELETE, morre no DROP).',
      'Explicar o destino dos dados em cada um.'
    ]
  },
  {
    id: 'disc-bd-07',
    subject: 'Banco de Dados',
    topic: 'Junções SQL (JOINs)',
    source: 'UNIFACS - Prof. Luiz Henrique • Consultas Relacionais Avançadas',
    difficulty: 'Médio',
    statement: 'Explique a diferença de comportamento entre `INNER JOIN`, `LEFT JOIN` e `RIGHT JOIN`. Dê um exemplo prático utilizando as tabelas `Veterinario` e `Consulta`.',
    contextHint: 'INNER JOIN traz apenas a interseção. LEFT JOIN traz todos da esquerda (mesmo sem consulta). RIGHT JOIN traz todos da direita.',
    expectedAnswer: `Os comandos de junção (JOIN) combinam linhas de duas ou mais tabelas com base em uma condição de relacionamento (geralmente PK = FK):

1. INNER JOIN (Junção Interna):
• Comportamento: Retorna APENAS as linhas que possuem correspondência exata em AMBAS as tabelas (a interseção dos conjuntos).
• Exemplo Prático:
  SELECT v.nome, c.data_hora
  FROM Veterinario v
  INNER JOIN Consulta c ON v.id_veterinario = c.id_veterinario;
• Resultado: Lista apenas os veterinários que possuem ao menos uma consulta realizada. Veterinários recém-contratados que ainda não atenderam nenhuma consulta NÃO aparecerão no resultado.

2. LEFT JOIN (ou LEFT OUTER JOIN — Junção Externa à Esquerda):
• Comportamento: Retorna TODAS as linhas da tabela da esquerda (a primeira tabela declarada), independentemente de haver correspondência na tabela da direita. Quando não houver consulta correspondente, as colunas da direita são preenchidas com 'NULL'.
• Exemplo Prático:
  SELECT v.nome, c.data_hora
  FROM Veterinario v
  LEFT JOIN Consulta c ON v.id_veterinario = c.id_veterinario;
• Resultado: Lista TODOS os veterinários cadastrados. Se o 'Dr. Carlos' ainda não atendeu nenhuma consulta, ele aparecerá na lista com 'nome = Dr. Carlos' e 'data_hora = NULL'.

3. RIGHT JOIN (ou RIGHT OUTER JOIN — Junção Externa à Direita):
• Comportamento: Retorna TODAS as linhas da tabela da direita, mais as correspondências da esquerda. Se uma consulta não tiver veterinário associado, os dados do veterinário virão como 'NULL'.`,
    keywords: [
      'INNER JOIN: apenas correspondências em ambas as tabelas (interseção)',
      'LEFT JOIN: todas as linhas da tabela da esquerda + correspondências',
      'Preenchimento com NULL quando não há correspondência à direita',
      'RIGHT JOIN: todas as linhas da tabela da direita',
      'Exemplo com Veterinario e Consulta explicando o caso de veterinário sem consultas'
    ],
    goldenBizu: 'INNER = só os casais (quem tem par nos dois lados). LEFT = todo mundo da esquerda, solteiro ou casado (quem não tem consulta ganha NULL).',
    gradingCriteria: [
      'Conceituação correta de INNER JOIN (interseção pura).',
      'Conceituação correta de LEFT JOIN (todos da esquerda + nulos).',
      'Exemplo prático contextualizado com Veterinario e Consulta.'
    ]
  },
  {
    id: 'disc-bd-08',
    subject: 'Banco de Dados',
    topic: 'Integridade Referencial & Chaves Estrangeiras',
    source: 'UNIFACS - Prof. Luiz Henrique • Teoria Relacional',
    difficulty: 'Fácil',
    statement: 'O que é o princípio da Integridade Referencial em bancos de dados relacionais e qual mecanismo do SQL é utilizado para garanti-lo? O que acontece ao tentar excluir um Cliente que possui Pacientes cadastrados sob a regra RESTRICT?',
    contextHint: 'Integridade referencial proíbe chave estrangeira órfã (apontando pro nada). FOREIGN KEY garante. RESTRICT impede exclusão da mãe.',
    expectedAnswer: `1. O PRINCÍPIO DA INTEGRIDADE REFERENCIAL:
É uma regra fundamental do modelo relacional que garante a consistência lógica entre tabelas relacionadas. Estabelece que um valor de Chave Estrangeira (FK) em uma tabela filha deve OBRIGATORIAMENTE corresponder a um valor de Chave Primária (PK) válido e existente na tabela pai, ou então ser NULL (quando permitido). Em hipótese alguma o banco pode admitir "registros órfãos" (uma FK apontando para uma PK que não existe).

2. MECANISMO SQL UTILIZADO:
A restrição de Chave Estrangeira: 'FOREIGN KEY (coluna_fk) REFERENCES tabela_pai(coluna_pk)'.

3. TENTATIVA DE EXCLUSÃO DE CLIENTE COM PACIENTES (REGRA RESTRICT):
• Sob a regra padrão 'ON DELETE RESTRICT' (ou NO ACTION), o SGBD bloqueia imediatamente a exclusão e dispara um erro de violação de integridade referencial.
• O SGBD não permite que o registro do Cliente seja apagado enquanto houver um ou mais Pacientes vinculados a ele.
• Justificativa: Se o cliente fosse excluído, os animais ficariam "órfãos" no banco, apontando para um 'id_cliente' inexistente. Para conseguir excluir o cliente, o operador precisaria primeiro excluir ou transferir todos os seus pacientes.`,
    keywords: [
      'Integridade Referencial: consistência entre tabelas relacionadas',
      'FK deve apontar para uma PK existente (proibição de registros órfãos)',
      'Mecanismo: restrição FOREIGN KEY ... REFERENCES',
      'Regra ON DELETE RESTRICT: bloqueia a exclusão do registro pai',
      'Dispara erro de violação de integridade referencial',
      'Evita que pacientes fiquem sem dono cadastrado'
    ],
    goldenBizu: 'Integridade referencial proíbe filho órfão. Com RESTRICT, você não pode deletar a mãe (Cliente) se ela ainda tiver filhos (Pacientes) dependendo dela.',
    gradingCriteria: [
      'Definir integridade referencial e o conceito de evitar registros órfãos.',
      'Identificar o mecanismo FOREIGN KEY ... REFERENCES.',
      'Explicar o bloqueio imposto pela regra RESTRICT.'
    ]
  },
  {
    id: 'disc-bd-09',
    subject: 'Banco de Dados',
    topic: 'Tipagem de Dados (Telefone)',
    source: 'UNIFACS - Prof. Luiz Henrique • Padrões de Modelagem Física',
    difficulty: 'Fácil',
    statement: 'Em projetos de bancos de dados relacionais, por que atributos como Telefone, CEP e CPF devem ser armazenados como `VARCHAR` e NUNCA como tipos numéricos (`INT` ou `BIGINT`)?',
    contextHint: 'Pense em: 1) zeros à esquerda; 2) formatação e máscaras; 3) ausência de operações matemáticas.',
    expectedAnswer: `Armazenar atributos como Telefone, CEP e CPF como tipos numéricos (INT/BIGINT) é um dos erros clássicos de modelagem física. Eles devem ser SEMPRE armazenados como tipos de texto (VARCHAR/CHAR) pelas seguintes razões técnicas:

1. Perda dos Zeros à Esquerda:
• Em tipos numéricos, os zeros à esquerda não possuem valor matemático e são automaticamente descartados pelo SGBD.
• Exemplo: O CEP de São Paulo "01310-100" gravado como INT viraria "1310100" (perda do primeiro dígito). Um telefone com DDD "071" viraria "71".

2. Preservação de Formatação, Máscaras e Símbolos:
• Documentos e contatos frequentemente utilizam máscaras padronizadas com parênteses, hifens, barras e pontos (ex: "(71) 99999-8888", "123.456.789-00", "+55 (11) 98888-7777"). Tipos numéricos rejeitam caracteres não dígitos.

3. Semântica de Operações Matemáticas:
• Regra de ouro da modelagem: Apenas utilize tipos numéricos (INT, FLOAT, DECIMAL) para valores que participarão de cálculos matemáticos (soma, média, multiplicação). Ninguém soma dois CPFs, calcula a média de telefones ou divide um CEP por dois. Eles são identificadores alfanuméricos categóricos.`,
    keywords: [
      'Perda de zeros à esquerda em tipos numéricos (ex: CEP 01310 vira 1310)',
      'Preservação de máscaras, hifens, parênteses e símbolos',
      'Ausência de sentido em operações matemáticas (não se soma CPF ou telefone)',
      'Regra semântica: números só para valores quantitativos / cálculos',
      'Tipo correto: VARCHAR ou CHAR'
    ],
    goldenBizu: 'Regra de ouro: Se você não vai somar, subtrair ou tirar média, NÃO é número! Telefone, CPF e CEP são textos (VARCHAR) para não perder o zero à esquerda nem os hifens.',
    gradingCriteria: [
      'Explicar a perda crítica do zero à esquerda em campos numéricos.',
      'Citar a necessidade de suportar máscaras de formatação.',
      'Apresentar a regra semântica de ausência de operações aritméticas.'
    ]
  },
  {
    id: 'disc-bd-10',
    subject: 'Banco de Dados',
    topic: 'Relacionamento N:N e Tabela Associativa',
    source: 'UNIFACS - Prof. Luiz Henrique • Modelagem Entidade-Relacionamento',
    difficulty: 'Médio',
    statement: 'Como um relacionamento de cardinalidade Muitos-para-Muitos (N:N) entre duas entidades (ex: `Consulta` e `Medicamento`) é implementado no Modelo Relacional? O que é uma tabela associativa e como é formada sua Chave Primária?',
    contextHint: 'O modelo relacional não suporta N:N direto. É obrigatório criar uma tabela associativa (junção) que herda as duas FKs formando uma PK composta.',
    expectedAnswer: `1. Como o Modelo Relacional implementa relacionamentos N:N:
O modelo relacional NÃO suporta a implementação física direta de cardinalidades N:N entre duas tabelas, pois isso violaria a 1ª Forma Normal (exigiria campos multivalorados em listas).
A regra canônica exige a DECOMPOSIÇÃO do relacionamento N:N em dois relacionamentos 1:N interligados por uma terceira tabela intermediária, denominada TABELA ASSOCIATIVA (ou Tabela de Junção/Interseção).

2. O que é a Tabela Associativa:
• É a tabela criada especificamente para materializar a relação N:N. No caso de 'Consulta' e 'Medicamento', cria-se a tabela associativa 'Item_Prescricao' (ou 'Consulta_Medicamento').
• Cada linha dessa tabela registra uma ocorrência específica de medicamento prescrito em uma determinada consulta, podendo conter atributos próprios da relação (como 'dosagem', 'frequencia', 'quantidade').

3. Como é formada sua Chave Primária (PK):
• A Chave Primária da tabela associativa é classicamente uma CHAVE PRIMÁRIA COMPOSTA formada pela junção das Chaves Estrangeiras (FKs) das duas tabelas originais:
  PRIMARY KEY (id_consulta, id_medicamento)
• Onde 'id_consulta' é FK para Consulta(id_consulta) e 'id_medicamento' é FK para Medicamento(id_medicamento).
• (Alternativamente, pode-se criar uma PK substituta simples artificial 'id_item_prescricao AUTO_INCREMENT', mantendo a combinação (id_consulta, id_medicamento) como restrição UNIQUE).`,
    keywords: [
      'Modelo relacional não suporta N:N direto (violação da 1FN)',
      'Decomposição do N:N em dois relacionamentos 1:N',
      'Criação de Tabela Associativa / Junção (ex: Item_Prescricao)',
      'Chave Primária Composta formada pelas duas FKs',
      'Atributos próprios do relacionamento (dosagem, quantidade, frequência)'
    ],
    goldenBizu: 'N:N vira uma tabela no meio! Pega a chave da Consulta e a chave do Medicamento, junta as duas e cria a tabela associativa (ItemPrescricao) com chave composta!',
    gradingCriteria: [
      'Explicar a impossibilidade técnica de N:N direto sob as regras relacionais.',
      'Conceituar a tabela associativa intermediária.',
      'Demonstrar a composição da Chave Primária Composta a partir das FKs de origem.'
    ]
  }
];
