export interface TheoryTopic {
  id: string;
  subject: 'Qualidade de Software' | 'Banco de Dados';
  title: string;
  subtitle: string;
  iconName: string;
  badge?: string;
  readingTime: string;
  sections: {
    title: string;
    content: string;
    codeSnippet?: {
      language: string;
      code: string;
      caption?: string;
    };
    alert?: {
      type: 'tip' | 'warning' | 'info';
      title: string;
      message: string;
    };
  }[];
  bizus: string[];
}

export const THEORY_TOPICS: TheoryTopic[] = [
  // ==========================================
  // QUALIDADE DE SOFTWARE: COMPLEXIDADE CICLOMÁTICA (ÊNFASE MÁXIMA)
  // ==========================================
  {
    id: 'qs-complexidade-ciclomatica',
    subject: 'Qualidade de Software',
    title: 'Complexidade Ciclomática & Caminho Básico (Tom McCabe)',
    subtitle: 'Domínio total do cálculo de V(G), grafos de fluxo, nós predicados e derivação de casos de teste',
    iconName: 'Cpu',
    badge: 'Tópico Mais Cobrado • Aula 4',
    readingTime: '8 min de leitura',
    sections: [
      {
        title: '1. O Que É o Teste de Caminho Básico e Por Que Ele É Usado?',
        content: `O Teste de Caminho Básico é uma técnica de teste estrutural (caixa-branca), proposta por Thomas McCabe em 1976 e adotada como padrão na literatura (Pressman, 9ª ed., p. 768).

Seu objetivo fundamental é responder a uma pergunta prática do desenvolvedor:
"Quantos testes e quais caminhos eu sou OBRIGADO a testar para garantir que nenhuma linha de código e nenhuma decisão lógica fique sem ser executada?"

A técnica se baseia no Grafo de Fluxo do programa:
• Nós (Nodes - N): Representam um ou mais comandos sequenciais em linha reta (sem desvios).
• Arestas (Edges - E): Representam as setas que indicam o fluxo de controle entre os comandos.
• Regiões (R): As áreas planas contornadas por nós e arestas (lembrando que a área externa aberta fora do grafo também conta como 1 região!).`
      },
      {
        title: '2. As Três Fórmulas de Cálculo de V(G) (Equivalentes)',
        content: `A métrica fundamental de McCabe é a Complexidade Ciclomática, denotada por V(G). Ela mede quantitativamente a complexidade lógica do método e define exatamente o NÚMERO DE CAMINHOS LINEARMENTE INDEPENDENTES que você precisa testar.

O Prof. Enderson cobra o cálculo através de TRÊS MÉTODOS que SEMPRE chegam ao mesmo resultado:

1. Método das Regiões do Grafo:
   V(G) = Número de Regiões Planas (R)
   *Dica de prova:* Conte todas as áreas cercadas por setas + 1 região para a parte de fora.

2. Método Arestas e Nós:
   V(G) = E - N + 2
   Onde: E = número de arestas (setas) e N = número de nós (círculos de comandos).

3. Método dos Nós Predicados (O Mais Rápido para a Prova Escrita!):
   V(G) = P + 1
   Onde: P é o número de Nós Predicados (nós de decisão onde o código se bifurca, como if, while, for).`,
        alert: {
          type: 'tip',
          title: 'Regra de Ouro da Prova',
          message: 'Se na prova pedir o cálculo, faça pelos dois métodos (E - N + 2 e P + 1). Se os dois derem o mesmo número, você tem 100% de certeza de que acertou a questão!'
        }
      },
      {
        title: '3. Como Identificar Nós Predicados (P) no Código Java',
        content: `Um Nó Predicado é qualquer ponto no código onde existe uma decisão condicional que gera dois ou mais caminhos alternativos.

Na prática de prova em Java, conte como NÓ PREDICADO (P = 1 cada):
• Cada instrução "if"
• Cada instrução "else if"
• Cada laço "while" ou "for"
• Cada cláusula "case" de um switch

⚠️ Cuidado com Operadores Lógicos Compostos (Pegadinha Clássica de Prova!):
Se a condição do if contiver conectivos booleanos ("&&" ou "||"), cada operador booleano gera uma condição adicional (duas bifurcações internas)!
Exemplo:
• if (idade >= 18 && temHabilitacao) -> Possui DUAS condições simples. Logo, gera P = 2 nós predicados!
• if (isVip || valor > 100) -> Gera P = 2 nós predicados!`,
        codeSnippet: {
          language: 'java',
          code: `// Exemplo com condição simples:
if (saldo >= valor) { ... } // P = 1 -> V(G) = 1 + 1 = 2

// Exemplo com condição composta (Pegadinha!):
if (saldo >= valor && contaAtiva) { ... } // P = 2 -> V(G) = 2 + 1 = 3`,
          caption: 'Operadores lógicos "&&" e "||" desdobram a decisão em múltiplos nós predicados.'
        }
      },
      {
        title: '4. Caso Real dos Slides: Exemplo 1 — calcularDesconto (Aula 4, p. 18)',
        content: `Vamos dissecar o código projetado em aula pelo Prof. Enderson:

Análise do Código:
1. Linha 3: primeiro if (valorCompra > 100.0) -> Nó Predicado 1 (P1).
2. Linha 4: segundo if aninhado (isClienteVip) -> Nó Predicado 2 (P2).
3. Não há outros desvios ou loops.

Cálculo de V(G):
• Nós Predicados (P): 2 (os dois ifs).
• V(G) = P + 1 = 2 + 1 = 3.
• Significado: Existem exatamente 3 caminhos linearmente independentes e você precisa de 3 casos de teste!

Derivação dos 3 Caminhos Independentes:
• Caminho 1: valorCompra > 100.0 (Verdadeiro) E isClienteVip (Verdadeiro) -> desconto = 0.20
• Caminho 2: valorCompra > 100.0 (Verdadeiro) E isClienteVip (Falso) -> desconto = 0.10
• Caminho 3: valorCompra <= 100.0 (Falso) -> desconto = 0.05

Tabela de Casos de Teste para Cobrir 100% do Grafo:
• Teste 1 (Caminho 1): valorCompra = 150.0, isClienteVip = true -> Saída esperada = 120.0 (desconto 20%)
• Teste 2 (Caminho 2): valorCompra = 150.0, isClienteVip = false -> Saída esperada = 135.0 (desconto 10%)
• Teste 3 (Caminho 3): valorCompra = 80.0, isClienteVip = false -> Saída esperada = 76.0 (desconto 5%)`,
        codeSnippet: {
          language: 'java',
          code: `public double calcularDesconto(double valorCompra, boolean isClienteVip) {
    double desconto;
    if (valorCompra > 100.0) {        // Nó Predicado 1
        if (isClienteVip) {           // Nó Predicado 2
            desconto = 0.20;
        } else {
            desconto = 0.10;
        }
    } else {
        desconto = 0.05;
    }
    double valorFinal = valorCompra * (1 - desconto);
    return valorFinal;
}`,
          caption: 'Código oficial do Slide 18 da Aula 4. Complexidade V(G) = 3.'
        }
      },
      {
        title: '5. Caso Real dos Slides: Exemplo 2 — verificarAcesso (Aula 4, p. 19)',
        content: `Análise do Código:
1. Linha 2: primeiro if (idade >= 60) -> Nó Predicado 1.
2. Linha 3: if aninhado (temConvenio) -> Nó Predicado 2.
3. Linha 9: saída comum que converge para finalizarAtendimento().

Cálculo de V(G):
• Nós Predicados: P = 2.
• V(G) = P + 1 = 2 + 1 = 3.
• Número de caminhos independentes necessários: 3.

Os 3 Caminhos Independentes:
• Caminho 1: idade >= 60 (V) -> temConvenio (V) -> aplicarIsencao() -> finalizarAtendimento()
• Caminho 2: idade >= 60 (V) -> temConvenio (F) -> aplicarTaxaMinima() -> finalizarAtendimento()
• Caminho 3: idade < 60 (F) -> aplicarTaxaPadrao() -> finalizarAtendimento()`,
        codeSnippet: {
          language: 'java',
          code: `public void verificarAcesso(int idade, boolean temConvenio) {
    if (idade >= 60) {          // Nó Predicado 1
        if (temConvenio) {      // Nó Predicado 2
            aplicarIsencao();
        } else {
            aplicarTaxaMinima();
        }
    } else {
        aplicarTaxaPadrao();
    }
    finalizarAtendimento();     // Nó de convergência final
}`,
          caption: 'Código oficial do Slide 19 da Aula 4. Complexidade V(G) = 3.'
        }
      },
      {
        title: '6. Caso Real dos Slides: Exemplo 3 — somarFaturasAtivas com Laço de Repetição (Aula 4, p. 20)',
        content: `Este exemplo é muito importante porque introduz um LAÇO DE REPETIÇÃO (while), que cria uma aresta de retorno no grafo de fluxo!

Análise do Código:
1. Linha 4: while (i < faturas.length) -> Nó Predicado 1 (controla se o loop continua ou encerra).
2. Linha 5: if (faturas[i] > 0) -> Nó Predicado 2 (decide se soma ou apenas avança o contador).

Cálculo de V(G):
• Nós Predicados: P = 2 (o while e o if interno).
• V(G) = P + 1 = 2 + 1 = 3.

Entendendo o Grafo de Fluxo com Loop:
• Nó 1: inicialização (soma = 0, i = 0)
• Nó 2: teste de condição do while (i < faturas.length)
• Nó 3: teste de condição do if (faturas[i] > 0)
• Nó 4: instrução de soma (soma = soma + faturas[i])
• Nó 5: incremento (i = i + 1) e aresta de retorno para o Nó 2
• Nó 6: saída do while e comando return soma

Derivação dos 3 Caminhos Independentes:
• Caminho 1 (Pula o loop): Array vazio (faturas.length == 0). A condição do while é Falsa de primeira -> vai direto para o return.
• Caminho 2 (Entra no loop, mas não soma): Array com fatura negativa/zero (ex: [-10]). Entra no while (V), o if dá Falso, incrementa i, sai do loop e retorna soma.
• Caminho 3 (Entra no loop e soma): Array com fatura positiva (ex: [50]). Entra no while (V), o if dá Verdadeiro, soma, incrementa i, sai do loop e retorna soma.`,
        codeSnippet: {
          language: 'java',
          code: `public int somarFaturasAtivas(int[] faturas) {
    int soma = 0;
    int i = 0;
    while (i < faturas.length) {  // Nó Predicado 1 (Loop)
        if (faturas[i] > 0) {     // Nó Predicado 2 (Filtro)
            soma = soma + faturas[i];
        }
        i = i + 1;                // Volta para o while (aresta de retorno)
    }
    return soma;
}`,
          caption: 'Código oficial do Slide 20 da Aula 4. Laço while + if -> V(G) = 3.'
        }
      }
    ],
    bizus: [
      'V(G) é o número exato de casos de teste que você precisa criar para cobrir 100% dos comandos.',
      'Fórmula ninja para prova escrita: conte os "ifs", "whiles", "fors" e "cases" (= P). O resultado é P + 1.',
      'Se o if tiver "&&" ou "||", cada operador soma +1 nó predicado.',
      'No grafo de fluxo desenhado, nunca esqueça de contar a região aberta de fora como 1 região!'
    ]
  },

  // ==========================================
  // QUALIDADE DE SOFTWARE: REVISÕES TÉCNICAS (RTF)
  // ==========================================
  {
    id: 'qs-revisoes-tecnicas-rtf',
    subject: 'Qualidade de Software',
    title: 'Revisões Técnicas Formais (RTF) & SQA',
    subtitle: 'Processo formal de inspeção estática, os 4 papéis canônicos, 3 decisões e documentos gerados',
    iconName: 'ShieldCheck',
    badge: 'Aula 1 e 2 • Pressman 9ª ed.',
    readingTime: '6 min de leitura',
    sections: [
      {
        title: '1. Revisões Formais vs Informais',
        content: `As revisões técnicas são atividades de controle ESTÁTICO da qualidade — ou seja, são realizadas analisando documentos, diagramas e códigos-fonte SEM executar o software em tempo de execução.

• Revisões Informais:
  - Não exigem agendamento prévio solene, formulários rígidos ou papéis formais.
  - Exemplos: o teste de mesa individual, o pair programming (programação em pares) e conversas rápidas de corredor entre desenvolvedores.
  - Vantagem: agilidade diária e feedback imediato a custo quase zero.

• Revisões Técnicas Formais (RTF):
  - São reuniões solenes e estruturadas, convocadas e planejadas com antecedência.
  - Regras rígidas de Pressman: grupo pequeno de 3 a 5 participantes, duração máxima inferior a 2 horas, uso obrigatório de checklists de defeitos distribuídos previamente e registro oficial de ata.
  - Vantagem: filtra erros graves de arquitetura, requisitos e lógica antes que cheguem aos testes dinâmicos (onde o custo de conserto pode ser até 100 vezes maior).`
      },
      {
        title: '2. Os Quatro Papéis Essenciais de uma RTF',
        content: `Em uma RTF, a equipe é enxuta (3 a 5 pessoas) e as responsabilidades são estritamente delimitadas:

1. Produtor:
   • É o desenvolvedor ou engenheiro que construiu o artefato (o código ou especificação).
   • Responsabilidade: Apresenta uma visão panorâmica do produto no início da reunião e esclarece dúvidas técnicas.
   • Regra crucial: O produtor NUNCA preside nem lidera a reunião, e não deve agir com defensividade pessoal ("Revisa-se o produto, nunca o produtor!").

2. Líder da Revisão:
   • Responsabilidade: Planeja a reunião, convoca os membros, distribui os artefatos com antecedência, modera as discussões para evitar desvios de foco e garante que o tempo limite de 2 horas não seja ultrapassado.

3. Revisores:
   • Responsabilidade: Especialistas que inspecionaram o material antecipadamente com seus checklists. Durante a sessão, apontam defeitos, inconsistências, omissões e desvios de conformidade com os padrões.

4. Registrador (Secretário):
   • Responsabilidade: Papel exercido por um dos revisores. Tem a missão exclusiva de anotar por escrito todas as pendências, falhas e itens discutidos, gerando a ata e a Lista de Problemas de Revisão.`
      },
      {
        title: '3. As Três Decisões Formais de Término',
        content: `Ao final da reunião de RTF, os participantes votam em consenso uma das 3 decisões canônicas:

1. Aceitar o artefato sem modificações:
   O artefato está totalmente em conformidade e é aprovado imediatamente para a próxima fase.

2. Rejeitar o artefato devido a erros graves:
   Foram identificados defeitos estruturais críticos. O produtor deve reconstruir o artefato e agendar uma nova RTF plenária completa.

3. Aceitar provisoriamente (com modificações menores):
   Foram encontrados apenas detalhes pontuais. O produtor faz os ajustes e um revisor designado ou o líder confere a correção individualmente, sem necessidade de reconvocar todo o grupo.`
      },
      {
        title: '4. Os Dois Documentos Oficiais Produzidos',
        content: `1. Lista de Problemas de Revisão (Issues List):
   Documento técnico detalhado que descreve cada defeito e trecho a corrigir. Serve como roteiro de trabalho para o desenvolvedor (produtor).

2. Relatório Sintetizado da Revisão (Ata da RTF):
   Documento formal executivo assinado por todos os presentes, contendo data, membros, tempo gasto e a decisão formal tomada. É arquivado e encaminhado à gerência para controle de SQA.`
      }
    ],
    bizus: [
      'RTF tem 3 a 5 pessoas e dura SEMPRE menos de 2 horas.',
      'Regra máxima de Pressman: "Revisa-se o produto, NUNCA o produtor". Aponte o erro, não tente consertá-lo na reunião.',
      '3 Decisões: Aceitar, Rejeitar (exige nova RTF), Aceitar Provisório (só conferência rápida).',
      '2 Documentos: Lista de Problemas (para o dev) e Relatório Sintetizado (para a chefia).'
    ]
  },

  // ==========================================
  // QUALIDADE DE SOFTWARE: CAIXA-PRETA VS CAIXA-BRANCA
  // ==========================================
  {
    id: 'qs-caixa-preta-vs-branca',
    subject: 'Qualidade de Software',
    title: 'Caixa-Preta vs Caixa-Branca & Técnicas de Teste',
    subtitle: 'Partição de equivalência, valor limite, testes funcionais vs estruturais e categorias de falhas',
    iconName: 'Box',
    badge: 'Aula 4 • Sommerville & Pressman',
    readingTime: '6 min de leitura',
    sections: [
      {
        title: '1. Comparativo Fundamental: Filosofia e Foco',
        content: `• Teste de Caixa-Preta (Funcional / Comportamental):
  O software é tratado como uma caixa opaca. O testador desconhece o código-fonte interno e projeta os casos de teste exclusivamente a partir dos requisitos e especificações, comparando as entradas fornecidas com as saídas obtidas.
  Foco: "O que o software faz?"

• Teste de Caixa-Branca (Estrutural):
  O testador possui visibilidade total do código-fonte e da arquitetura do sistema. Os testes são projetados para percorrer caminhos lógicos específicos, loops, decisões verdadeiras/falsas e avaliar estruturas internas.
  Foco: "Como o software está construído por dentro?"`
      },
      {
        title: '2. Categorias de Erros Revelados por Caixa-Preta (Mnemônico F-I-B-D-T)',
        content: `Segundo Pressman (9ª ed.), os testes de caixa-preta são os mais eficazes para revelar erros das seguintes naturezas:

1. F - Funções incorretas ou ausentes em relação aos requisitos.
2. I - Erros de Interface com o usuário ou entre componentes.
3. B - Erros em estruturas de dados ou acesso a Banco de dados.
4. D - Erros de Desempenho e comportamento sob carga.
5. T - Erros de Término ou inicialização de fluxos de processos.`
      },
      {
        title: '3. Partição de Equivalência (Técnica Caixa-Preta)',
        content: `Divide o domínio infinito de entradas de um programa em classes de dados finitas ("partições de equivalência").
Princípio: Se o sistema se comporta corretamente para um valor representativo de uma partição, assume-se que se comportará da mesma forma para todos os demais valores daquela mesma classe.

Existem dois tipos de partições:
• Partições Válidas: valores que representam dados aceitáveis pelo sistema.
• Partições Inválidas: valores que representam situações de erro e devem disparar exceções ou mensagens de validação.`
      },
      {
        title: '4. Análise do Valor Limite (Complemento da Equivalência)',
        content: `A experiência comprova que a vasta maioria dos erros de software ocorre exatamente nas BORDAS (fronteiras) das classes de equivalência (devido a operadores como "<", "<=", ">", ">=").

Técnica: Em vez de escolher valores centrais, testa-se exatamente os valores nos limites e imediatamente adjacentes a eles:
• O valor mínimo e o valor imediatamente abaixo do mínimo.
• O valor máximo e o valor imediatamente acima do máximo.

Exemplo Numérico de Prova:
Campo que aceita idades de 18 a 65 anos:
• Fronteira inferior: 17 (inválido), 18 (válido - limite), 19 (válido).
• Fronteira superior: 64 (válido), 65 (válido - limite), 66 (inválido).`
      }
    ],
    bizus: [
      'Caixa-preta testa requisitos e saídas (ignora o código). Caixa-branca testa caminhos, branches e código interno.',
      'Mnemônico Caixa-Preta: F-I-B-D-T (Funções, Interfaces, Banco de dados, Desempenho, Término).',
      'Partição de equivalência agrupa dados parecidos. Valor limite foca na fronteira exata e um passo para fora.'
    ]
  },

  // ==========================================
  // QUALIDADE DE SOFTWARE: INTEGRAÇÃO, FUMAÇA E REGRESSÃO
  // ==========================================
  {
    id: 'qs-integracao-fumaca-regressao',
    subject: 'Qualidade de Software',
    title: 'Estratégias de Integração, Fumaça & Regressão',
    subtitle: 'Top-Down vs Bottom-Up, Stubs vs Drivers, Smoke Testing e garantia de não-regressão',
    iconName: 'Network',
    badge: 'Aula 6 • Pressman 9ª ed.',
    readingTime: '5 min de leitura',
    sections: [
      {
        title: '1. Por Que o Teste de Unidade Não Basta?',
        content: `Mesmo que cada método individualmente tenha obtido 100% de sucesso nos testes unitários, quando os módulos são conectados podem ocorrer falhas catastróficas devido a:
• Incompatibilidade de interfaces e formatos de dados entre quem chama e quem é chamado.
• Efeitos colaterais em variáveis compartilhadas e concorrência no banco de dados.
• Perda de informações ao trafegar por camadas de rede ou barramentos.
O teste de integração verifica a comunicação e o contrato entre os módulos.`
      },
      {
        title: '2. Abordagem Top-Down (Descendente) e o Papel dos STUBS',
        content: `• Sentido: Começa no topo da arquitetura (no módulo de controle principal) e vai descendo progressivamente em direção aos módulos utilitários e de base.
• O que são STUBS?
  Como os módulos inferiores ainda não foram desenvolvidos ou integrados, o desenvolvedor cria STUBS (módulos substitutos "para baixo").
  O Stub é uma rotina simulada ("casca vazia") que recebe os parâmetros enviados pelo controlador e devolve uma resposta estática pré-programada, permitindo testar o fluxo de controle superior antes que a base esteja pronta.`
      },
      {
        title: '3. Abordagem Bottom-Up (Ascendente) e o Papel dos DRIVERS',
        content: `• Sentido: Começa na base da hierarquia (módulos operacionais, de cálculo e repositórios) e vai subindo em direção aos controladores.
• O que são DRIVERS?
  Como o módulo controlador do topo ainda não foi construído para acionar os módulos de base, o desenvolvedor programa DRIVERS (programas condutores "para cima").
  O Driver é um programa de teste temporário que envia dados de entrada para o módulo da base, aciona sua execução e imprime os resultados obtidos.`
      },
      {
        title: '4. Teste de Fumaça (Smoke Testing) vs Teste de Regressão',
        content: `• Teste de Fumaça (Smoke Test):
  - Momento: Executado imediatamente após a geração de uma nova compilação (build diária).
  - Escopo: Bateria rápida e superficial cobrindo apenas as funções vitais do sistema (ex: inicialização, login, conexão ao banco).
  - Objetivo: Verificar se a build "fica de pé" e pode ser entregue à equipe de testes. Se falhar ("saiu fumaça"), a compilação é imediatamente rejeitada.

• Teste de Regressão:
  - Momento: Executado após qualquer alteração no código (correção de um bug, refatoração ou adição de funcionalidade).
  - Escopo: Reexecução de baterias de testes existentes em módulos prévios.
  - Objetivo: Garantir que o novo código introduzido não tenha gerado efeitos colaterais indesejados ("regressões") em partes que já funcionavam.`
      }
    ],
    bizus: [
      'Top-Down: começa no topo e desce. Usa STUB (simulador para baixo).',
      'Bottom-Up: começa na base e sobe. Usa DRIVER (programa condutor para cima).',
      'Teste de fumaça: checagem rápida para ver se a nova build sequer abre.',
      'Teste de regressão: checa se mexer em uma coisa não quebrou o que já estava funcionando há meses.'
    ]
  },

  // ==========================================
  // QUALIDADE DE SOFTWARE: JUNIT 5 & CÓDIGOS DE LAB
  // ==========================================
  {
    id: 'qs-junit5-oficina-bugs',
    subject: 'Qualidade de Software',
    title: 'Framework JUnit 5 & Bateria de Testes do Lab 22',
    subtitle: 'Anotações essenciais, asserções, tolerância delta e as 5 pegadinhas propositais do laboratório',
    iconName: 'Terminal',
    badge: 'Lab 22 • Prof. Enderson',
    readingTime: '7 min de leitura',
    sections: [
      {
        title: '1. Estrutura e Anotações Principais do JUnit 5',
        content: `O JUnit 5 é o framework padrão da indústria para testes automatizados em Java. As anotações mais cobradas em provas são:
• @Test: Identifica que o método público é um caso de teste executável.
• @BeforeEach: Executado antes de CADA método de teste (ideal para instanciar objetos limpos).
• @AfterEach: Executado após cada teste (para liberar recursos).
• @BeforeAll / @AfterAll: Executado uma única vez antes/depois de todos os testes da classe (método estático).
• @DisplayName: Nome legível e descritivo para o relatório de execução do teste.`
      },
      {
        title: '2. Asserções Canônicas (Assertions)',
        content: `• assertEquals(esperado, obtido): Valida igualdade entre o resultado obtido e o esperado.
• assertEquals(double esperado, double obtido, double delta): OBRIGATÓRIO para tipos double/float! O delta é a margem de erro aceitável de arredondamento (ex: 0.001). Sem o delta, o JUnit gera aviso de depreciação ou falha por imprecisão binária.
• assertTrue(condicao) / assertFalse(condicao): Valida valores booleanos.
• assertNull(obj) / assertNotNull(obj): Valida se ponteiros são nulos.
• assertThrows(Excecao.class, () -> metodo()): Valida se uma exceção esperada foi disparada para dados inválidos.`
      },
      {
        title: '3. As 5 Pegadinhas Propositais de Código dos Laboratórios',
        content: `O Prof. Enderson preparou 5 códigos com falhas propositais nos exercícios do Lab 22:

1. Conversor de Temperatura (Divisão Inteira Truncada):
   - O código do lab continha "celsius * (9 / 5) + 32;".
   - Bug: em Java, 9 e 5 são literais inteiros. A divisão 9/5 resulta em 1!
   - Correção: "(9.0 / 5.0)".

2. Calculadora de Fatorial (Inicialização com Zero):
   - O código começava com "int fat = 0;".
   - Bug: qualquer número multiplicado por 0 é 0. O método sempre retornava 0!
   - Correção: "int fat = 1;" (elemento neutro da multiplicação).

3. Validador de Senha (Erro de Fronteira Off-by-One):
   - O loop usava "i < senha.length() - 1".
   - Bug: ignora o último caractere da senha. Se o dígito estivesse no final, a senha era recusada.
   - Correção: "i < senha.length()".

4. Ano Bissexto (Regra dos 400 Esquecida):
   - O código checava "ano % 4 == 0 && ano % 100 != 0", esquecendo que múltiplos de 400 SÃO bissextos (como o ano 2000).
   - Correção: "(ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)".

5. Regras Acadêmicas (Média Ponderada vs Quantidade de Matérias):
   - O código dividia o somatório de notas*créditos pelo número de disciplinas (size), e não pela soma dos créditos.`
      }
    ],
    bizus: [
      'Em JUnit 5 com double: use sempre assertEquals(esperado, atual, 0.001).',
      'Divisão em Java com inteiros: 9 / 5 = 1. Para dar 1.8, use 9.0 / 5.0.',
      'Fatorial começa em 1, nunca em 0.',
      'Loop em strings vai até i < str.length(), sem o "- 1".'
    ]
  },

  // ==========================================
  // BANCO DE DADOS: FORMAS NORMAIS (1FN, 2FN, 3FN)
  // ==========================================
  {
    id: 'bd-formas-normais',
    subject: 'Banco de Dados',
    title: 'Guia Completo de Normalização: 1FN, 2FN e 3FN',
    subtitle: 'Atomicidade, dependência funcional parcial, dependência transitiva e decomposição sem anomalias',
    iconName: 'Database',
    badge: 'Aula e Slides • Prof. Luiz Henrique',
    readingTime: '8 min de leitura',
    sections: [
      {
        title: '1. Por Que Normalizar e o Que São Anomalias?',
        content: `A normalização é o processo formal de decompor tabelas relacionais mal projetadas em tabelas menores e coesas.
Seu objetivo é eliminar três anomalias graves:
1. Anomalia de Inserção: impossibilidade de cadastrar uma informação sem antes inventar dados fictícios em outra coluna.
2. Anomalia de Exclusão: ao apagar um registro (ex: um curso), apaga-se acidentalmente outro dado independente (ex: os dados do professor que lecionava lá).
3. Anomalia de Alteração: ter que alterar a mesma informação repetida em centenas de linhas, gerando inconsistência quando uma linha é esquecida.

Frase canônica de Kent Beck e C.J. Date:
"Cada atributo deve depender da chave (1FN), de toda a chave (2FN) e de nada além da chave (3FN)."`
      },
      {
        title: '2. Primeira Forma Normal (1FN) — Regra da Atomicidade',
        content: `Para estar na 1FN, a tabela deve satisfazer três requisitos fundamentais:
1. Todos os atributos devem conter valores ATÔMICOS (indivisíveis). Nenhum campo pode armazenar listas de valores, arrays ou múltiplos itens separados por vírgula (ex: celular "719999-0001, 719888-0002" viola a 1FN).
2. Não deve haver colunas repetitivas da mesma natureza (ex: tel1, tel2, tel3).
3. Cada linha deve ser única e identificada por uma Chave Primária (PK).

Como Resolver Violações da 1FN:
Cria-se uma tabela separada para o atributo multivalorado, mantendo a Chave Estrangeira (FK) ligada à tabela principal.
Exemplo: cria-se a tabela "cliente_telefone(id_cliente, telefone)".`
      },
      {
        title: '3. Segunda Forma Normal (2FN) — Eliminação de Dependência Parcial',
        content: `Requisitos para estar na 2FN:
1. A tabela deve estar previamente na 1FN.
2. Nenhum atributo não-chave pode depender de apenas uma PARTE da chave primária (Eliminação da Dependência Funcional Parcial).

⚠️ ATENÇÃO MÁXIMA (Regra que 90% dos alunos erram na prova):
A 2FN SÓ SE APLICA a tabelas que possuem CHAVE PRIMÁRIA COMPOSTA (formada por duas ou mais colunas, como em matrículas ou tabelas associativas)!
Se a tabela possui uma Chave Primária Simples (uma única coluna, ex: id_cliente), ela já está AUTOMATICAMENTE na 2FN!

Exemplo de Violação da 2FN:
Tabela Matricula:
• Chave Composta: (id_aluno, id_disciplina)
• Colunas: nome_aluno, nome_disciplina, nota_final
• Problema: "nome_aluno" depende apenas de "id_aluno" (dependência parcial). "nome_disciplina" depende apenas de "id_disciplina" (dependência parcial).
• Solução: Quebrar em 3 tabelas: Aluno(id_aluno, nome), Disciplina(id_disciplina, nome) e Matricula(id_aluno, id_disciplina, nota_final).`
      },
      {
        title: '4. Terceira Forma Normal (3FN) — Eliminação de Dependência Transitiva',
        content: `Requisitos para estar na 3FN:
1. A tabela deve estar previamente na 2FN.
2. Nenhum atributo não-chave pode depender de outro atributo não-chave (Eliminação da Dependência Transitiva).

O que é Dependência Transitiva?
Ocorre quando A -> B e B -> C. Sendo A a Chave Primária, o atributo C depende indiretamente da chave através de B.

Exemplo Clássico de Prova:
Tabela Funcionario:
• Colunas: id_funcionario (PK), nome, id_departamento, nome_departamento, ramal_departamento.
• Problema: "nome_departamento" e "ramal" dependem de "id_departamento", que NÃO é chave primária da tabela de funcionários!
• Solução: Criar a tabela Departamento(id_departamento PK, nome_departamento, ramal) e manter na tabela Funcionario apenas a FK "id_departamento".`
      }
    ],
    bizus: [
      '1FN: cada célula guarda um único valor atômico (nada de listas com vírgula).',
      '2FN: só tem risco se a PK for COMPOSTA. Elimina atributos que dependem só de meio pedaço da chave.',
      '3FN: coluna comum não pode mandar em coluna comum (elimina trânsito entre não-chaves).'
    ]
  },

  // ==========================================
  // BANCO DE DADOS: CLÍNICA VETERINÁRIA
  // ==========================================
  {
    id: 'bd-clinica-veterinaria-der',
    subject: 'Banco de Dados',
    title: 'Modelagem da Clínica Veterinária (Slide da Aula)',
    subtitle: 'Estudo de caso oficial de sala de aula, mapeamento de cardinalidades 1:N e DDL pronto',
    iconName: 'Activity',
    badge: 'Atividade de Aula • Slide Projetado',
    readingTime: '6 min de leitura',
    sections: [
      {
        title: '1. O Cenário de Negócio do Exercício',
        content: `No slide projetado em sala pelo Prof. Luiz Henrique, o sistema da Clínica Veterinária possui as seguintes regras de negócio:
• A clínica cadastra tutores com seus dados pessoais e telefones.
• Cada tutor pode possuir vários animais de estimação cadastrados.
• A clínica conta com médicos veterinários identificados pelo CRMV e especialidade.
• As consultas médicas registram data, horário, motivo do atendimento, valor cobrado e diagnóstico.`
      },
      {
        title: '2. Mapeamento das Três Cardinalidades 1:N',
        content: `1. Tutor (1) ------ (N) Animal:
   - Um tutor cadastra 1 ou mais animais. Cada animal tem exatamente 1 tutor responsável.
   - Regra relacional: A PK "id_tutor" migra como Chave Estrangeira (FK) para a tabela "animal".

2. Animal (1) ------ (N) Consulta:
   - Um animal realiza diversas consultas ao longo do tempo. Cada consulta pertence a 1 único animal.
   - Regra relacional: A PK "id_animal" migra como FK para a tabela "consulta".

3. Veterinário (1) ------ (N) Consulta:
   - Um veterinário atende inúmeras consultas. Cada consulta é conduzida por 1 veterinário responsável.
   - Regra relacional: A PK "id_veterinario" migra como FK para a tabela "consulta".`
      },
      {
        title: '3. As Duas Grandes Pegadinhas da Especificação de Prova',
        content: `⚠️ Pegadinha 1: Diagnóstico DEVE permitir NULL
O enunciado especifica: "O diagnóstico pode ficar sem preenchimento enquanto a consulta não for concluída".
Logo, declarar "diagnostico TEXT NOT NULL" é ERRO GRAVE! O campo deve ser declarado como "diagnostico TEXT NULL" para permitir a abertura do atendimento na recepção.

⚠️ Pegadinha 2: Dinheiro é DECIMAL(10,2) e NUNCA FLOAT
Valores monetários (como "valor_cobrado") exigem precisão decimal exata. Float e Double provocam arredondamentos binários imprecisos que geram perdas de centavos em balanços contábeis.`
      },
      {
        title: '4. Script SQL DDL de Criação (MySQL Workbench)',
        content: `Abaixo está o script completo na ordem correta de criação (pais antes dos filhos para não violar chaves estrangeiras):`,
        codeSnippet: {
          language: 'sql',
          code: `CREATE DATABASE IF NOT EXISTS clinica_vet;
USE clinica_vet;

-- 1. Tutor (Pai de animal)
CREATE TABLE tutor (
    id_tutor INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200),
    telefone VARCHAR(20) NOT NULL
);

-- 2. Animal (Filho de tutor)
CREATE TABLE animal (
    id_animal INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(50),
    data_nascimento DATE,
    id_tutor INT NOT NULL,
    CONSTRAINT fk_animal_tutor FOREIGN KEY (id_tutor) 
        REFERENCES tutor(id_tutor) 
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- 3. Veterinario (Pai de consulta)
CREATE TABLE veterinario (
    id_veterinario INT AUTO_INCREMENT PRIMARY KEY,
    crmv VARCHAR(20) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(80)
);

-- 4. Consulta (Tabela central que conecta animal e veterinario)
CREATE TABLE consulta (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    data_consulta DATE NOT NULL,
    horario TIME NOT NULL,
    motivo VARCHAR(255) NOT NULL,
    diagnostico TEXT NULL, -- OBRIGATÓRIO PERMITIR NULL!
    valor_cobrado DECIMAL(10,2) NOT NULL, -- PRECISÃO MONETÁRIA
    id_animal INT NOT NULL,
    id_veterinario INT NOT NULL,
    CONSTRAINT fk_consulta_animal FOREIGN KEY (id_animal) 
        REFERENCES animal(id_animal) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_consulta_veterinario FOREIGN KEY (id_veterinario) 
        REFERENCES veterinario(id_veterinario) 
        ON DELETE RESTRICT ON UPDATE CASCADE
);`,
          caption: 'Script DDL completo e testado para MySQL Workbench.'
        }
      }
    ],
    bizus: [
      'A tabela Consulta é a intermediária que recebe as duas FKs: id_animal e id_veterinario.',
      'A coluna diagnostico DEVE permitir NULL (consulta aberta ainda não tem laudo médico final).',
      'Dinheiro é DECIMAL(10,2) sempre. Telefone é VARCHAR(20) sempre para não sumir com o zero à esquerda.'
    ]
  },

  // ==========================================
  // BANCO DE DADOS: SQL (DDL, DML, JOINS)
  // ==========================================
  {
    id: 'bd-sql-ddl-dml-joins',
    subject: 'Banco de Dados',
    title: 'SQL Essencial: DDL, DML, Perigos e Junções (JOINs)',
    subtitle: 'Classificação de comandos, risco do UPDATE sem WHERE, DELETE vs DROP e INNER vs LEFT JOIN',
    iconName: 'Code',
    badge: '25 Exercícios • Prof. Luiz Henrique',
    readingTime: '7 min de leitura',
    sections: [
      {
        title: '1. Classificação das Sublinguagens SQL',
        content: `• DDL (Data Definition Language - Definição):
  Mexe na estrutura e no esquema físico/lógico dos objetos.
  Comandos: CREATE (cria tabela), ALTER (adiciona/remove colunas), DROP (destrói tabela do banco).

• DML (Data Manipulation Language - Manipulação):
  Mexe nos registros e linhas contidos DENTRO das tabelas.
  Comandos: INSERT (adiciona linha), UPDATE (altera dados), DELETE (remove linhas).

• DQL (Data Query Language - Consulta):
  Comando SELECT (recupera e filtra dados).`
      },
      {
        title: '2. O Risco Catastrófico do UPDATE e DELETE sem WHERE',
        content: `A cláusula WHERE define a condição que restringe quais linhas devem sofrer a operação.
Quando você executa:
UPDATE cliente SET telefone = '7199999-0000';
O SGBD não pergunta se você tem certeza: ele aplica o novo telefone em TODAS as linhas da tabela cliente, sobrescrevendo os números de milhares de pessoas irreversivelmente!
A mesma catástrofe ocorre com "DELETE FROM cliente;": apaga todos os registros de uma só vez.`
      },
      {
        title: '3. A Diferença Cirúrgica entre DELETE e DROP',
        content: `• DELETE FROM tabela WHERE id = 1:
  É comando DML. Remove apenas os dados das linhas. A tabela continua existindo no banco com sua estrutura, índices e constraints preservados, pronta para receber novos INSERTs.

• DROP TABLE tabela:
  É comando DDL. Apaga a tabela inteira do catálogo do SGBD, destruindo sua estrutura, dados, permissões e histórico. Ela deixa de existir.`
      },
      {
        title: '4. Junções de Tabelas (JOINs) Explicadas com Clareza',
        content: `1. INNER JOIN (Junção Interna):
   Retorna apenas os registros que possuem correspondência mútua em AMBAS as tabelas.
   Exemplo: Traz apenas veterinários que já realizaram pelo menos 1 consulta. Veterinário novo sem consultas NÃO aparece no resultado.

2. LEFT JOIN (ou LEFT OUTER JOIN):
   Retorna TODOS os registros da tabela da ESQUERDA, independentemente de existirem dados correspondentes na tabela da direita.
   Exemplo: Traz todos os veterinários da clínica. Se um veterinário for novo e não tiver consultas, ele aparece na lista com os campos da consulta preenchidos com NULL.

3. RIGHT JOIN:
   Retorna todos os registros da tabela da DIREITA, preenchendo com NULL se não houver par na esquerda.`
      }
    ],
    bizus: [
      'DDL constrói e demole o prédio (CREATE, ALTER, DROP). DML coloca e troca os móveis dentro (INSERT, UPDATE, DELETE).',
      'Nunca aperte enter em UPDATE ou DELETE sem antes conferir a cláusula WHERE!',
      'INNER JOIN traz só quem tem par. LEFT JOIN traz todo mundo da esquerda e põe NULL para quem estiver solteiro.'
    ]
  }
];
