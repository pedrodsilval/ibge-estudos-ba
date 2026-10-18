// BANCO DE QUESTÕES OFICIAIS UNIFACS 2026.2
// Disciplinas: Garantia da Qualidade de Software & Banco de Dados
// Aluna: Gilvania | Campus Tancredo Neves

import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  {
    "id": "qs-01",
    "subject": "Qualidade de Software",
    "topic": "Revisões Técnicas (RTF)",
    "source": "UNIFACS - Folha de Revisão Oficial (Q01)",
    "difficulty": "Médio",
    "statement": "No contexto da garantia da qualidade de software, as revisões técnicas são divididas em formais e informais. A respeito das diferenças entre essas duas abordagens, assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Revisões informais exigem a produção obrigatória de atas assinadas por todos os membros e uma agenda previamente distribuída."
      },
      {
        "key": "B",
        "text": "Revisões técnicas formais (RTF) constituem reuniões estruturadas, com 3 a 5 participantes, duração menor que 2 horas, papéis definidos e preparação antecipada com checklists."
      },
      {
        "key": "C",
        "text": "As revisões formais são dinâmicas, pois exigem a execução e compilação do código em ambiente de homologação para encontrar defeitos."
      },
      {
        "key": "D",
        "text": "A programação em pares (pair programming) e o teste de mesa individual são classificados como revisões técnicas formais de alta complexidade."
      },
      {
        "key": "E",
        "text": "As revisões informais substituem completamente a necessidade de testes de unidade e testes de integração no ciclo de vida."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Uma Revisão Técnica Formal (RTF) é uma atividade estática, rigorosamente planejada e controlada: grupo pequeno (3 a 5 pessoas), menos de 2h de reunião, papéis bem definidos e preparação prévia para maximizar a descoberta de defeitos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Atas assinadas e agendas formais são requisitos exclusivos de revisões FORMAIS, não informais."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Definição clássica de RTF nos slides do Prof. Enderson Nobre e em Pressman (3 a 5 participantes, preparação prévia, < 2h)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Revisões são testes ESTÁTICOS, ou seja, são realizadas SEM executar ou compilar o código."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Teste de mesa e programação em pares são exemplos típicos de revisões INFORMAIS."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Nenhuma revisão substitui a execução de testes dinâmicos (unidade, integração e sistema)."
        }
      ],
      "bizu": "💡 RTF é estática, planejada, com 3 a 5 pessoas, dura menos de 2h e gera relatório formal assinado."
    }
  },
  {
    "id": "qs-02",
    "subject": "Qualidade de Software",
    "topic": "Revisões Técnicas (RTF)",
    "source": "UNIFACS - Folha de Revisão Oficial (Q02)",
    "difficulty": "Fácil",
    "statement": "Durante uma Revisão Técnica Formal (RTF), diferentes participantes desempenham papéis cruciais. Sobre a responsabilidade de cada ator, é correto afirmar:",
    "options": [
      {
        "key": "A",
        "text": "O Produtor é o responsável por convocar a reunião, controlar o tempo de duração e redigir a ata final."
      },
      {
        "key": "B",
        "text": "O Registrador (Secretário) é o participante encarregado de documentar por escrito todos os apontamentos, inconsistências e problemas levantados durante a reunião."
      },
      {
        "key": "C",
        "text": "O Líder da Revisão é o desenvolvedor que escreveu o artefato e deve defender enfaticamente suas decisões técnicas."
      },
      {
        "key": "D",
        "text": "Os Revisores devem tentar refatorar e reescrever o código durante a própria reunião para agilizar as correções."
      },
      {
        "key": "E",
        "text": "O Produtor deve ser o único a votar sobre a aprovação ou rejeição do documento revisado."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Na RTF, o Produtor apresenta o artefato; o Líder gerencia a reunião e o tempo; os Revisores analisam e apontam falhas; e o Registrador (um dos revisores) anota tudo por escrito.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Quem convoca e controla a reunião é o Líder da Revisão."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "O Registrador tem a missão exclusiva de registrar por escrito os problemas para gerar a Lista de Problemas de Revisão."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "O Produtor escreveu o artefato e NUNCA preside a reunião. A regra de ouro é 'revisar o produto, não o produtor'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "A diretriz da RTF diz expressamente: apontar os problemas, mas NÃO tentar resolvê-los na reunião."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "A decisão é tomada por consenso entre todos os revisores."
        }
      ],
      "bizu": "💡 Produtor apresenta, Líder controla, Revisores apontam erros e Registrador anota na ata!"
    }
  },
  {
    "id": "qs-03",
    "subject": "Qualidade de Software",
    "topic": "Revisões Técnicas (RTF)",
    "source": "UNIFACS - Folha de Revisão Oficial (Q03)",
    "difficulty": "Médio",
    "statement": "Ao final de uma Revisão Técnica Formal (RTF), os participantes devem tomar uma decisão consensual sobre o artefato e produzir documentos oficiais. Quais são as três decisões possíveis e os dois documentos gerados?",
    "options": [
      {
        "key": "A",
        "text": "Decisões: Compilar, Executar ou Cancelar. Documentos: Código-fonte corrigido e Log de execução."
      },
      {
        "key": "B",
        "text": "Decisões: Aceitar sem modificações, Rejeitar por erros graves ou Aceitar provisoriamente. Documentos: Lista de Problemas e Relatório Sintetizado."
      },
      {
        "key": "C",
        "text": "Decisões: Arquivar, Deletar ou Reescrever. Documentos: Termo de Referência e Matriz de Rastreabilidade."
      },
      {
        "key": "D",
        "text": "Decisões: Publicar em produção, Testar em homologação ou Bloquear. Documentos: Relatório de Desempenho e Cobertura de Código."
      },
      {
        "key": "E",
        "text": "Decisões: Aceitar ou Recusar. Documentos: Plano de Testes IEEE 829 e Diagrama de Grafo de Fluxo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "As 3 decisões formais de uma RTF são: 1. Aceitar sem modificações; 2. Rejeitar por erros graves (exige nova RTF); 3. Aceitar provisoriamente (apenas ajustes pontuais). Os 2 documentos são a Lista de Problemas de Revisão e o Relatório Sintetizado.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "RTF não é execução de código."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Contempla com exatidão as 3 decisões formais e os 2 documentos gerados segundo Pressman e Prof. Enderson Nobre."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Terminologia incorreta."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Refere-se a implantação (deploy), não a revisão técnica de artefatos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Existem 3 decisões (não apenas 2), e o documento gerado é o Relatório Sintetizado da RTF."
        }
      ],
      "bizu": "💡 3 Decisões: Aceitar, Rejeitar (erros graves) ou Aceitar Provisoriamente. 2 Documentos: Lista de Problemas e Relatório Sintetizado."
    }
  },
  {
    "id": "qs-04",
    "subject": "Qualidade de Software",
    "topic": "Caixa-Preta vs Caixa-Branca",
    "source": "UNIFACS - Folha de Revisão Oficial (Q04)",
    "difficulty": "Fácil",
    "statement": "A respeito da comparação entre as abordagens de teste Caixa-Preta (funcional) e Caixa-Branca (estrutural), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "O teste caixa-branca avalia o sistema exclusivamente a partir das especificações de requisitos, sem olhar o código-fonte."
      },
      {
        "key": "B",
        "text": "O teste caixa-preta baseia-se na análise da lógica interna, na estrutura dos desvios condicionais e na complexidade ciclomática."
      },
      {
        "key": "C",
        "text": "O teste caixa-preta foca na interface e nos requisitos (entradas e saídas esperadas), enquanto o caixa-branca foca no fluxo de controle interno e execução de caminhos do código."
      },
      {
        "key": "D",
        "text": "O teste caixa-branca é conduzido exclusivamente por usuários finais durante os testes de aceitação."
      },
      {
        "key": "E",
        "text": "O teste caixa-preta torna obsoleta a necessidade de testes unitários em linguagens orientadas a objetos."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Caixa-Preta ignora a implementação interna e valida se as saídas atendem aos requisitos. Caixa-Branca analisa a anatomia interna do código: caminhos independentes, decisões e ciclos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Essa é a definição de Caixa-Preta, não Caixa-Branca."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Complexidade ciclomática e lógica interna são técnicas de Caixa-Branca."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "Diferenciação precisa: Caixa-preta = o que o software faz (funcional); Caixa-branca = como ele foi implementado (estrutural)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Usuários finais fazem teste de aceitação (caixa-preta). Caixa-branca é feito por desenvolvedores."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Testes unitários são prioritariamente caixa-branca e continuam essenciais."
        }
      ],
      "bizu": "💡 Caixa-Preta = Requisitos, Entradas/Saídas (Funcional). Caixa-Branca = Código, Caminhos e Decisões (Estrutural)."
    }
  },
  {
    "id": "qs-05",
    "subject": "Qualidade de Software",
    "topic": "Caixa-Branca / Filosofia",
    "source": "UNIFACS - Folha de Revisão Oficial (Q05)",
    "difficulty": "Médio",
    "statement": "Segundo Pressman e os slides de aula do Prof. Enderson Nobre, o teste caixa-branca é uma filosofia que busca derivar casos de teste para satisfazer quatro objetivos lógicos. NÃO faz parte desses quatro objetivos:",
    "options": [
      {
        "key": "A",
        "text": "Garantir que todos os caminhos independentes de um módulo foram exercitados pelo menos uma vez."
      },
      {
        "key": "B",
        "text": "Exercitar todas as decisões lógicas nos seus estados verdadeiro e falso."
      },
      {
        "key": "C",
        "text": "Executar todos os ciclos em seus limites e dentro de suas fronteiras operacionais."
      },
      {
        "key": "D",
        "text": "Exercitar estruturas de dados internas para assegurar a sua validade."
      },
      {
        "key": "E",
        "text": "Validar se a interface gráfica possui paleta de cores acessível aos usuários finais."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Os 4 objetivos lógicos da filosofia caixa-branca são: 1. Caminhos independentes executados pelo menos uma vez; 2. Decisões lógicas testadas em V e F; 3. Ciclos operados em seus limites; 4. Estruturas internas exercitadas. Acessibilidade visual é teste de interface/usabilidade (caixa-preta).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "É o 1º objetivo clássico do teste caixa-branca."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "É o 2º objetivo clássico (cobertura de desvios/ramos)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "É o 3º objetivo clássico (teste de laços/fronteiras)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "É o 4º objetivo clássico (integridade de variáveis e coleções)."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "Usabilidade e cores não fazem parte dos objetivos lógicos estruturais de caixa-branca."
        }
      ],
      "bizu": "💡 Os 4 pilares Caixa-Branca: Caminhos independentes, Decisões (V/F), Ciclos (fronteiras) e Estruturas internas."
    }
  },
  {
    "id": "qs-06",
    "subject": "Qualidade de Software",
    "topic": "Caixa-Branca / Técnicas",
    "source": "UNIFACS - Folha de Revisão Oficial (Q06)",
    "difficulty": "Médio",
    "statement": "Além do teste de caminho básico, quais são as outras três técnicas estruturais de teste caixa-branca amplamente descritas na literatura de Engenharia de Software?",
    "options": [
      {
        "key": "A",
        "text": "Teste de Condição, Teste de Fluxo de Dados e Teste de Ciclos (Laços)."
      },
      {
        "key": "B",
        "text": "Particionamento de Equivalência, Análise do Valor Limite e Tabela de Decisão."
      },
      {
        "key": "C",
        "text": "Teste de Carga, Teste de Estresse e Teste de Volume."
      },
      {
        "key": "D",
        "text": "Teste Alfa, Teste Beta e Teste Gama."
      },
      {
        "key": "E",
        "text": "Revisão por Pares, Inspeção Formal e Walkthrough."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "As técnicas de caixa-branca complementares ao caminho básico são: Teste de Condição (foca em expressões booleanas), Teste de Fluxo de Dados (definição e uso de variáveis) e Teste de Ciclo (laços simples, aninhados e concatenados).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "São exatamente as três técnicas de caixa-branca listadas no Slide 21 da Aula 4 (Pressman p. 768)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "São técnicas clássicas de Caixa-Preta (funcionais)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "São testes não-funcionais de desempenho."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "São fases de testes de aceitação em campo."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "São formas de revisões técnicas (testes estáticos)."
        }
      ],
      "bizu": "💡 Caixa-Branca além do caminho básico: Condição (if), Fluxo de Dados (variáveis) e Ciclos (loops)."
    }
  },
  {
    "id": "qs-07",
    "subject": "Qualidade de Software",
    "topic": "Caminho Básico",
    "source": "UNIFACS - Folha de Revisão Oficial (Q07)",
    "difficulty": "Médio",
    "statement": "O teste de caminho básico, proposto por Tom McCabe, é uma técnica fundamental de caixa-branca. O principal benefício que essa técnica oferece ao projetista de testes é:",
    "options": [
      {
        "key": "A",
        "text": "Garantir a execução automática de todos os possíveis caminhos existentes no programa em tempo constante."
      },
      {
        "key": "B",
        "text": "Calcular uma métrica quantitativa da complexidade lógica e determinar o número exato e a rota do conjunto-base de caminhos linearmente independentes a serem testados."
      },
      {
        "key": "C",
        "text": "Eliminar a necessidade de testar valores de entrada inválidos na interface com o usuário."
      },
      {
        "key": "D",
        "text": "Substituir a modelagem de classes pela modelagem de casos de uso na fase de requisitos."
      },
      {
        "key": "E",
        "text": "Comprovar matematicamente que o software é 100% livre de quaisquer falhas de segurança."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O caminho básico deriva um grafo de fluxo do código e calcula a Complexidade Ciclomática V(G). Esse valor define o número de caminhos linearmente independentes que formam a base. Executar esse conjunto garante que todo comando do código foi executado pelo menos uma vez.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Testar 'todos os caminhos possíveis' seria teste exaustivo, o que é impraticável e impossível na prática."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Definição literal do Slide 16 da Aula 4: guia para definir o conjunto-base de caminhos de execução linearmente independentes."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Não tem relação com validação de interface (que é caixa-preta)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Caminho básico é técnica de teste de código, não de levantamento de requisitos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Nenhum teste prova a ausência de defeitos (Princípio de Dijkstra)."
        }
      ],
      "bizu": "💡 Caminho básico usa grafo de fluxo para dar o número de testes essenciais e garantir 100% dos comandos executados."
    }
  },
  {
    "id": "qs-08",
    "subject": "Qualidade de Software",
    "topic": "Complexidade Ciclomática",
    "source": "UNIFACS - Folha de Revisão Oficial (Q08)",
    "difficulty": "Fácil",
    "statement": "A Complexidade Ciclomática V(G) de um grafo de fluxo pode ser calculada de três maneiras equivalentes. Assinale a alternativa que apresenta corretamente as três fórmulas:",
    "options": [
      {
        "key": "A",
        "text": "1. V(G) = Regiões; 2. V(G) = E - N + 2; 3. V(G) = P + 1 (onde P são os nós predicados)."
      },
      {
        "key": "B",
        "text": "1. V(G) = Nódulos; 2. V(G) = E + N - 2; 3. V(G) = P - 1."
      },
      {
        "key": "C",
        "text": "1. V(G) = Linhas de código; 2. V(G) = E * N; 3. V(G) = 2P + 1."
      },
      {
        "key": "D",
        "text": "1. V(G) = Classes; 2. V(G) = Métodos / 2; 3. V(G) = P * E."
      },
      {
        "key": "E",
        "text": "1. V(G) = Arestas / Nós; 2. V(G) = E - P; 3. V(G) = N + 2."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "As 3 maneiras equivalentes são: 1. Contagem direta de regiões fechadas + região externa; 2. V(G) = E - N + 2 (Arestas menos Nós mais 2); 3. V(G) = P + 1 (Nós de decisão/predicados mais 1).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "Tríade clássica de McCabe: Regiões, E - N + 2 e P + 1."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Sinais invertidos na fórmula (deve ser E - N + 2, e não E + N - 2)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Linhas de código não determinam diretamente V(G)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Fórmulas inventadas sem fundamento teórico."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Fórmulas incorretas."
        }
      ],
      "bizu": "💡 Decore: (1) Regiões; (2) E - N + 2; (3) P + 1. O resultado das 3 é sempre IGUAL!"
    }
  },
  {
    "id": "qs-09",
    "subject": "Qualidade de Software",
    "topic": "Caixa-Preta / Erros",
    "source": "UNIFACS - Folha de Revisão Oficial (Q09)",
    "difficulty": "Médio",
    "statement": "Segundo Pressman (Slide 22 da Aula 4 do Prof. Enderson Nobre), o teste caixa-preta tem como objetivo primordial expor defeitos concentrados em 5 categorias específicas. Assinale a opção que lista corretamente essas categorias:",
    "options": [
      {
        "key": "A",
        "text": "Erros de compilação, sintaxe, digitação, identação e ponteiros nulos."
      },
      {
        "key": "B",
        "text": "Funções incorretas ou ausentes; Erros de interface; Erros em estruturas de dados ou acesso a bases de dados externas; Erros de comportamento ou desempenho; Erros de inicialização e término."
      },
      {
        "key": "C",
        "text": "Erros de hardware, falhas de disco, queda de energia, falhas de cabo de rede e sobretensão."
      },
      {
        "key": "D",
        "text": "Erros de complexidade ciclomática, excesso de nós predicados, desvios goto, laços infinitos e classes aninhadas."
      },
      {
        "key": "E",
        "text": "Defeitos estéticos na interface, erros gramaticais em documentações, desvios de design pattern e violações de SOLID."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "As 5 categorias do teste caixa-preta (Mnemônico F-I-B-D-T): 1. Funções incorretas ou ausentes; 2. Interface; 3. Banco de dados/Estruturas externas; 4. Desempenho/Comportamento; 5. Término/Inicialização.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Erros de sintaxe e compilação são pegos pelo compilador, não por teste caixa-preta."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Lista literal descrita em Pressman 9ª ed. e nos slides do Prof. Enderson Nobre."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Falhas físicas de infraestrutura."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Conceitos de teste caixa-branca estrutural."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Questões de estilo de código e documentação (revisões estáticas)."
        }
      ],
      "bizu": "💡 Mnemônico F-I-B-D-T: Funções, Interface, Banco de dados, Desempenho e Término/Inicialização."
    }
  },
  {
    "id": "qs-10",
    "subject": "Qualidade de Software",
    "topic": "Particionamento de Equivalência",
    "source": "UNIFACS - Folha de Revisão Oficial (Q10)",
    "difficulty": "Fácil",
    "statement": "O método de particionamento de equivalência (Sommerville, 10ª ed., p. 211) consiste em:",
    "options": [
      {
        "key": "A",
        "text": "Dividir o código-fonte em blocos de 50 linhas para que cada membro do grupo teste um trecho equivalente."
      },
      {
        "key": "B",
        "text": "Dividir o domínio de entrada do programa em classes de dados válidas e inválidas, assumindo que qualquer valor da mesma partição produzirá o mesmo comportamento no software."
      },
      {
        "key": "C",
        "text": "Executar o mesmo caso de teste repetidas vezes até que o tempo de CPU seja equivalente entre as execuções."
      },
      {
        "key": "D",
        "text": "Testar apenas valores que resultam em números pares para garantir equivalência matemática."
      },
      {
        "key": "E",
        "text": "Garantir que a quantidade de testes unitários seja exatamente igual à quantidade de testes de sistema."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O particionamento de equivalência agrupa dados de entrada em classes onde todos os elementos são tratados de forma idêntica pelo sistema. Basta testar um elemento representativo de cada classe (válida ou inválida).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Não tem a ver com tamanho de código."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Conceito exato: divide as entradas em classes de equivalência válidas e inválidas para reduzir testes redundantes."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Isso seria teste de estresse/repetição."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Equivalência não significa paridade numérica."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "A pirâmide de testes recomenda muito mais testes de unidade do que de sistema."
        }
      ],
      "bizu": "💡 Partição de Equivalência = se funciona para um da classe, funciona para todos. Testa 1 valor válido e 1 de cada partição inválida."
    }
  },
  {
    "id": "qs-11",
    "subject": "Qualidade de Software",
    "topic": "Análise do Valor Limite",
    "source": "UNIFACS - Folha de Revisão Oficial (Q11)",
    "difficulty": "Médio",
    "statement": "Por que a Análise do Valor Limite (AVL) é considerada uma técnica que complementa o Particionamento de Equivalência?",
    "options": [
      {
        "key": "A",
        "text": "Porque a AVL testa o código em servidores na nuvem, enquanto o particionamento só roda localmente."
      },
      {
        "key": "B",
        "text": "Porque a maioria dos bugs ocorre nas bordas/fronteiras das partições (erros de <= vs <), e a AVL foca exatamente nos limites (L-1, L, L+1), além de explorar o domínio de saída."
      },
      {
        "key": "C",
        "text": "Porque a AVL elimina a necessidade de testar partições inválidas."
      },
      {
        "key": "D",
        "text": "Porque o particionamento analisa o código-fonte e a AVL analisa os diagramas UML."
      },
      {
        "key": "E",
        "text": "Porque a AVL só se aplica a bancos de dados NoSQL."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Desenvolvedores costumam errar nas bordas lógicas (off-by-one, esquecer o igual, zero). O particionamento escolhe qualquer valor no meio; a AVL foca cirurgicamente nas fronteiras (logo abaixo, no ponto exato e logo acima) tanto de entrada quanto de saída.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Técnicas de teste são agnósticas à infraestrutura."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Complementa porque direciona os testes exatamente onde os erros mais se concentram: nas fronteiras operacionais (Sommerville p. 212)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "A AVL testa tanto o limite válido quanto o limite inválido imediatamente adjacente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Ambas são técnicas de caixa-preta funcional."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Aplica-se a qualquer tipo de software."
        }
      ],
      "bizu": "💡 O particionamento pega o meio da partição; a AVL mira nas fronteiras (L-1, L, L+1) onde os bugs realmente moram!"
    }
  },
  {
    "id": "qs-12",
    "subject": "Qualidade de Software",
    "topic": "Testes Unitários Automatizados",
    "source": "UNIFACS - Folha de Revisão Oficial (Q12)",
    "difficulty": "Fácil",
    "statement": "Em relação aos testes unitários automatizados implementados com frameworks como o JUnit 5 em Java, qual das alternativas descreve corretamente seus principais benefícios?",
    "options": [
      {
        "key": "A",
        "text": "Eliminam a necessidade de documentar o código e dispensam os testes de integração."
      },
      {
        "key": "B",
        "text": "Oferecem feedback imediato após mudanças, reduzem o custo de correção na raiz, protegem contra regressões e servem como documentação viva e executável."
      },
      {
        "key": "C",
        "text": "Substituem a validação de regras de negócio por validações visuais feitas por inteligência artificial."
      },
      {
        "key": "D",
        "text": "São executados exclusivamente pelo cliente durante o período de homologação final."
      },
      {
        "key": "E",
        "text": "Aumentam o tempo de compilação em 1000%, devendo ser executados apenas uma vez ao ano."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Testes unitários verificam classes e métodos isolados. Eles rodam em milissegundos, dão confiança imediata para refatorar, detectam falhas quando custam centavos para corrigir e documentam como o código deve funcionar.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Não dispensam testes de integração (módulos conectados ainda podem falhar nas interfaces)."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Resumo perfeito dos 5 benefícios de testes unitários automatizados da Aula 5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Validam a lógica procedimental/orientada a objetos em nível de código."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "São escritos e executados pelos desenvolvedores durante a codificação diária."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Testes de unidade são extremamente leves e rápidos."
        }
      ],
      "bizu": "💡 Teste Unitário = Rápido, Barato, Feedback Imediato e Escudo contra Regressões."
    }
  },
  {
    "id": "qs-13",
    "subject": "Qualidade de Software",
    "topic": "Testes de Integração",
    "source": "UNIFACS - Folha de Revisão Oficial (Q13)",
    "difficulty": "Médio",
    "statement": "Dois componentes de software foram submetidos a testes unitários individuais e obtiveram 100% de sucesso. No entanto, ao serem conectados, o sistema apresentou falhas. A respeito do Teste de Integração, é correto afirmar:",
    "options": [
      {
        "key": "A",
        "text": "Se os testes unitários passaram, o teste de integração é dispensável, pois qualquer erro pós-integração é falha do sistema operacional."
      },
      {
        "key": "B",
        "text": "O objetivo primordial do teste de integração é descobrir defeitos nas interfaces e na comunicação entre componentes acoplados (como dados passados na ordem errada ou incompatibilidade de tipos)."
      },
      {
        "key": "C",
        "text": "O teste de integração visa testar exclusivamente o consumo de memória RAM do servidor."
      },
      {
        "key": "D",
        "text": "O teste de integração só pode ser realizado quando 100% de todas as telas da aplicação estiverem concluídas."
      },
      {
        "key": "E",
        "text": "A única estratégia existente de teste de integração é o Big Bang (integrar tudo de uma única vez)."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O teste de integração foca no 'tecido conjuntivo' do software. Mesmo que dois módulos estejam perfeitos isoladamente, ao se conectarem surgem problemas de conversão, suposições de nulos, timeouts e parâmetros trocados.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Módulos perfeitos isolados frequentemente falham ao conversar entre si."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Conceito central da Aula 6: o foco da integração é a interface, a transferência de dados e a sincronização entre partes acopladas."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Isso é teste não-funcional de recursos/capacidade."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Integração é incremental e ocorre módulo a módulo."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Existem abordagens incrementais: Top-Down (Descendente), Bottom-Up (Ascendente) e Sanduíche."
        }
      ],
      "bizu": "💡 Teste de Integração testa o aperto de mão (as interfaces) entre os módulos que já foram testados sozinhos."
    }
  },
  {
    "id": "qs-14",
    "subject": "Qualidade de Software",
    "topic": "Top-Down vs Bottom-Up",
    "source": "UNIFACS - Folha de Revisão Oficial (Q14)",
    "difficulty": "Médio",
    "statement": "No teste de integração incremental, diferencie as abordagens Descendente (top-down) e Ascendente (bottom-up):",
    "options": [
      {
        "key": "A",
        "text": "Top-Down começa na base com Drivers; Bottom-Up começa no topo com Stubs."
      },
      {
        "key": "B",
        "text": "Top-Down começa no módulo de controle principal (topo) e desce usando STUBS; Bottom-Up começa nos módulos subordinados (base) e sobe usando DRIVERS."
      },
      {
        "key": "C",
        "text": "Ambas utilizam exclusivamente stubs e não permitem a criação de drivers."
      },
      {
        "key": "D",
        "text": "Top-Down é exclusivo de linguagens funcionais e Bottom-Up de linguagens imperativas."
      },
      {
        "key": "E",
        "text": "O teste ascendente testa primeiro as telas de usuário e por último o banco de dados."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Top-Down (de cima para baixo): começa no controlador/módulo principal. Como os módulos de baixo não estão prontos, usa STUBS (substitutos simulados). Bottom-Up (de baixo para cima): começa nos módulos de base/repositórios. Como os módulos de cima não estão prontos, usa DRIVERS (módulos chamadores).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Inverteu os artefatos: Top-Down usa Stubs e Bottom-Up usa Drivers."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Distinção perfeita segundo Pressman e Aula 6 da UNIFACS."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Drivers são essenciais na abordagem ascendente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "São estratégias arquiteturais de integração agnósticas de paradigma."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Ascendente começa na base (repositórios/cálculos) e sobe até as telas."
        }
      ],
      "bizu": "💡 Top-Down (cima pra baixo) = STUB (substituto inferior). Bottom-Up (baixo pra cima) = DRIVER (motor chamador superior)."
    }
  },
  {
    "id": "qs-15",
    "subject": "Qualidade de Software",
    "topic": "Teste de Fumaça vs Regressão",
    "source": "UNIFACS - Folha de Revisão Oficial (Q15)",
    "difficulty": "Fácil",
    "statement": "Qual a diferença conceitual entre o Teste de Fumaça (Smoke Testing) e o Teste de Regressão?",
    "options": [
      {
        "key": "A",
        "text": "O teste de fumaça verifica se o hardware está superaquecendo; o teste de regressão volta o código para a versão do mês passado."
      },
      {
        "key": "B",
        "text": "O teste de fumaça é um conjunto rápido de testes para avaliar se uma nova build é estável o suficiente para testes aprofundados; o teste de regressão reexecuta testes para garantir que mudanças recentes não introduziram novos bugs em partes que já funcionavam."
      },
      {
        "key": "C",
        "text": "O teste de regressão é executado antes da compilação e o teste de fumaça é executado apenas pelos clientes."
      },
      {
        "key": "D",
        "text": "São termos idênticos para a mesma atividade de testes estáticos."
      },
      {
        "key": "E",
        "text": "O teste de fumaça é conduzido apenas em banco de dados e a regressão apenas no front-end."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Smoke Testing (Fumaça) é a checagem rápida de 'sobrevivência' da nova compilação. Se falhar, a build nem vai para teste. O teste de regressão é o retester de funções antigas para garantir que consertar um bug não quebrou outro módulo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Metáfora literal errônea de hardware."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Conceituação precisa de Smoke Test e Teste de Regressão da Aula 1 e 6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Regressão exige código executável."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Possuem objetivos e momentos de execução totalmente distintos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Aplicam-se a todo o sistema integrado."
        }
      ],
      "bizu": "💡 Fumaça = A nova versão sequer sobe e fica de pé? Regressão = A alteração recente não estragou nada do que já funcionava?"
    }
  },
  {
    "id": "qs-16",
    "subject": "Qualidade de Software",
    "topic": "Laboratório Java & JUnit 5",
    "source": "Prof. Enderson Nobre - Exercício Prático Lab 22",
    "difficulty": "Médio",
    "statement": "Analise o método Java abaixo, retirado da lista de exercícios de testes unitários do Prof. Enderson Nobre:\n\npublic double celsiusParaFahrenheit(double celsius) {\n    return celsius * (9 / 5) + 32;\n}\n\nAo executar o teste JUnit `assertEquals(212.0, c.celsiusParaFahrenheit(100.0), 0.01)`, o teste falha retornando 132.0. Qual é a causa desse defeito no código?",
    "options": [
      {
        "key": "A",
        "text": "O método usa o operador '+' em vez de '-' na soma final."
      },
      {
        "key": "B",
        "text": "A expressão (9 / 5) realiza uma divisão inteira em Java, truncando o resultado para 1 em vez de 1.8."
      },
      {
        "key": "C",
        "text": "A variável celsius deveria ter sido declarada como String."
      },
      {
        "key": "D",
        "text": "A fórmula matemática correta exige multiplicação por zero."
      },
      {
        "key": "E",
        "text": "O JUnit 5 não suporta comparações com tolerância delta para números double."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Em Java, a divisão de dois literais inteiros (9 / 5) resulta em 1 (int). A expressão vira `100.0 * 1 + 32 = 132.0`. A correção exige forçar ponto flutuante: `(9.0 / 5.0)`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "A fórmula de Fahrenheit soma 32."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Bug clássico de divisão inteira em Java. O compilador trunca 1.8 para 1."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Celsius deve ser numérico."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Multiplicação por zero zeraria o cálculo."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "O terceiro argumento do assertEquals é exatamente o delta de tolerância exigido pelo JUnit 5."
        }
      ],
      "bizu": "💡 Em Java, divisão de números inteiros descarta as casas decimais! Use sempre 9.0 / 5.0."
    }
  },
  {
    "id": "qs-17",
    "subject": "Qualidade de Software",
    "topic": "Laboratório Java & JUnit 5",
    "source": "Prof. Enderson Nobre - Exercício Prático Lab 22",
    "difficulty": "Fácil",
    "statement": "Observe o método de cálculo de fatorial abaixo:\n\npublic int calcular(int n) {\n    if (n < 0) throw new IllegalArgumentException();\n    int fat = 0;\n    for (int i = 1; i <= n; i++) {\n        fat *= i;\n    }\n    return fat;\n}\n\nQual é o comportamento anômalo observado e sua respectiva causa?",
    "options": [
      {
        "key": "A",
        "text": "Lança exceção infinita porque o laço for não tem condição de parada."
      },
      {
        "key": "B",
        "text": "O método sempre retorna 0 para qualquer n positivo, pois a variável 'fat' foi inicializada com 0 (e qualquer multiplicação por 0 resulta em 0)."
      },
      {
        "key": "C",
        "text": "Calcula corretamente o fatorial de números ímpares, mas falha para números pares."
      },
      {
        "key": "D",
        "text": "Ocorre estouro de pilha (StackOverflowError)."
      },
      {
        "key": "E",
        "text": "O método não compila porque int não aceita números negativos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Multiplicação acumulada exige elemento neutro igual a 1 (`int fat = 1`). Como começou em 0, `0 * 1 = 0`, `0 * 2 = 0`... sempre retorna 0.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "O laço para quando `i > n`."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Erro clássico de valor de inicialização. Deveria ser `fat = 1`."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Retorna 0 para todos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Não há recursão para causar StackOverflow."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Compila perfeitamente."
        }
      ],
      "bizu": "💡 Fatorial acumulado começa em 1! Começar em 0 zera todo o produto."
    }
  },
  {
    "id": "qs-18",
    "subject": "Qualidade de Software",
    "topic": "Laboratório Java & JUnit 5",
    "source": "Prof. Enderson Nobre - Exercício Prático Lab 22",
    "difficulty": "Médio",
    "statement": "No validador de senha a seguir, que exige pelo menos 1 número:\n\nfor (int i = 0; i < senha.length() - 1; i++) {\n    if (Character.isDigit(senha.charAt(i))) {\n        temNumero = true;\n        break;\n    }\n}\n\nQual caso de teste revelará imediatamente a falha (erro off-by-one) presente no código?",
    "options": [
      {
        "key": "A",
        "text": "Uma senha com número apenas na primeira posição: '1SenhaForte'"
      },
      {
        "key": "B",
        "text": "Uma senha sem nenhum número: 'SenhaSemNumero'"
      },
      {
        "key": "C",
        "text": "Uma senha onde o único número está exatamente na última posição: 'SenhaForte1'"
      },
      {
        "key": "D",
        "text": "Uma senha nula: null"
      },
      {
        "key": "E",
        "text": "Uma senha contendo apenas números: '12345678'"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O laço executa `i < senha.length() - 1`, ou seja, para antes do último caractere. Se o único número estiver no final (`'SenhaForte1'`), o laço é interrompido sem analisar o dígito `'1'` e retorna falso erroneamente.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "O primeiro caractere (índice 0) é checado e retorna true corretamente."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Retorna false corretamente."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "Expõe cirurgicamente o erro de fronteira (off-by-one) porque o último índice é ignorado pelo laço."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Nulo é tratado na linha anterior."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Como tem número logo no início, acha o dígito e retorna true."
        }
      ],
      "bizu": "💡 Erro Off-by-one: laço parando em `length - 1` ignora o último caractere da string!"
    }
  },
  {
    "id": "bd-01",
    "subject": "Banco de Dados",
    "topic": "Formas Normais (1FN)",
    "source": "UNIFACS - Prof. Luiz Henrique / Henrique Souza",
    "difficulty": "Fácil",
    "statement": "Uma tabela de cadastro de clientes armazena na coluna 'telefones' o valor '71999990001, 71988880001'. De acordo com a teoria relacional, qual regra de normalização está sendo violada e qual a solução?",
    "options": [
      {
        "key": "A",
        "text": "Viola a 2FN por dependência transitiva; a solução é criar um índice clustered."
      },
      {
        "key": "B",
        "text": "Viola a 1FN pela presença de atributo multivalorado (não atômico); a solução é decompor em registros atômicos e criar uma tabela própria de telefones associada pela FK id_cliente."
      },
      {
        "key": "C",
        "text": "Viola a 3FN por redundância cíclica; a solução é transformar os telefones em chaves primárias compostas."
      },
      {
        "key": "D",
        "text": "Não há violação, pois o padrão SQL permite arrays de strings em qualquer tabela relacional na 1FN."
      },
      {
        "key": "E",
        "text": "Viola a 2FN porque telefone deve ser obrigatoriamente do tipo FLOAT."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A Primeira Forma Normal (1FN) exige ATOMICIDADE: nenhum campo pode armazenar listas de valores ou atributos compostos/multivalorados. A solução é criar uma tabela cliente_telefone(id_cliente, telefone).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Dependência transitiva é assunto de 3FN, não de 2FN."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "1FN = campos atômicos indivisíveis. Múltiplos telefones na mesma célula violam frontalmente a 1FN."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Redundância de listas é 1FN."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "O modelo relacional clássico proíbe valores não atômicos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Telefone deve ser VARCHAR e a 2FN trata de dependência parcial."
        }
      ],
      "bizu": "💡 1FN = Atomicidade! Nada de listas ou múltiplos telefones na mesma coluna."
    }
  },
  {
    "id": "bd-02",
    "subject": "Banco de Dados",
    "topic": "Formas Normais (2FN)",
    "source": "UNIFACS - Prof. Luiz Henrique / Henrique Souza",
    "difficulty": "Médio",
    "statement": "Considere a tabela `Matricula(id_aluno, id_disciplina, nome_aluno, nome_disciplina, nota_final)`, cuja Chave Primária é composta por `(id_aluno, id_disciplina)`. Por que essa tabela NÃO está na Segunda Forma Normal (2FN)?",
    "options": [
      {
        "key": "A",
        "text": "Porque contém notas com casas decimais."
      },
      {
        "key": "B",
        "text": "Porque existem dependências funcionais parciais: 'nome_aluno' depende apenas de 'id_aluno' e 'nome_disciplina' depende apenas de 'id_disciplina', e não de toda a chave composta."
      },
      {
        "key": "C",
        "text": "Porque a tabela não possui chaves estrangeiras declaradas com o comando CASCADE."
      },
      {
        "key": "D",
        "text": "Porque a 2FN exige que a tabela tenha no máximo duas colunas."
      },
      {
        "key": "E",
        "text": "Porque 'nota_final' depende de forma transitiva de 'id_aluno'."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A 2FN exige que todos os atributos não-chave dependam da TOTALIDADE da chave primária. Quando um atributo depende apenas de uma parte da PK composta, ocorre Dependência Parcial (violação da 2FN).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Tipos numéricos decimais são válidos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Definição precisa de Dependência Parcial: o nome do aluno só precisa do id do aluno para ser determinado, violando a 2FN."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "CASCADE é regra de integridade referencial DDL, não critério de forma normal."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Não existe limite de colunas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Nota final depende de ambos (o aluno tirou a nota NAQUELA disciplina)."
        }
      ],
      "bizu": "💡 2FN = Fim da Dependência Parcial! Se a PK é composta, nenhum atributo pode depender de só 'um pedaço' dela."
    }
  },
  {
    "id": "bd-03",
    "subject": "Banco de Dados",
    "topic": "Formas Normais (3FN)",
    "source": "UNIFACS - Prof. Luiz Henrique / Henrique Souza",
    "difficulty": "Médio",
    "statement": "Uma tabela `Funcionario` possui como PK simples a coluna `id_funcionario` e as seguintes colunas: `nome, id_departamento, nome_departamento, ramal_departamento`. Essa tabela viola a 3FN porque:",
    "options": [
      {
        "key": "A",
        "text": "A chave primária é simples, o que é proibido na 3FN."
      },
      {
        "key": "B",
        "text": "Existe uma dependência funcional transitiva: 'nome_departamento' e 'ramal_departamento' dependem de 'id_departamento', que é um atributo não-chave."
      },
      {
        "key": "C",
        "text": "O ramal telefônico não foi tipado como INTEGER no banco."
      },
      {
        "key": "D",
        "text": "Um funcionário não pode pertencer a nenhum departamento."
      },
      {
        "key": "E",
        "text": "A tabela deveria estar na 1FN antes de ser avaliada para a 2FN."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A 3FN exige eliminação de dependências transitivas: atributos não-chave não podem depender de outros atributos não-chave. Aqui, id_funcionario determina id_departamento, e este determina nome e ramal.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "PK simples é perfeitamente permitida na 3FN."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Dependência transitiva clássica: A -> B -> C. Solução: mover departamento para uma tabela própria."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Ramal deve ser VARCHAR e tipo de dado não define dependência funcional."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Regra de negócio não dita a forma normal."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "A tabela já está na 1FN e 2FN (pois a PK é simples)."
        }
      ],
      "bizu": "💡 3FN = Fim da Dependência Transitiva! Coluna comum não pode ser 'dona' de outra coluna comum."
    }
  },
  {
    "id": "bd-04",
    "subject": "Banco de Dados",
    "topic": "Modelagem / Clínica Veterinária",
    "source": "UNIFACS - Atividade de Sala (Slide Projetado)",
    "difficulty": "Fácil",
    "statement": "Na atividade projetada em sala pelo professor ('Clínica Veterinária'), foi estipulado: 'Um tutor pode ser responsável por vários animais, mas cada animal pertence a apenas um tutor'. Qual é a cardinalidade e como ela é implementada no modelo relacional?",
    "options": [
      {
        "key": "A",
        "text": "Relacionamento N:N, exigindo uma tabela associativa intermediária chamada 'tutor_animal'."
      },
      {
        "key": "B",
        "text": "Relacionamento 1:N (Um para Muitos), implementado colocando a Chave Primária do Tutor (id_tutor) como Chave Estrangeira (FK) na tabela Animal."
      },
      {
        "key": "C",
        "text": "Relacionamento 1:1, colocando a chave primária de Animal na tabela de Tutor."
      },
      {
        "key": "D",
        "text": "Relacionamento N:1, colocando a chave estrangeira em ambas as tabelas reciprocamente."
      },
      {
        "key": "E",
        "text": "Relacionamento ternário envolvendo o CRMV do veterinário."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "No relacionamento 1:N (um tutor para muitos animais), a regra relacional dita que a chave primária do lado '1' (Tutor) migra para o lado 'N' (Animal) como Chave Estrangeira (FK).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Tabela associativa só é exigida em relacionamentos N:N."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Regra canônica do modelo relacional: a FK sempre vai para o lado 'Muitos' (Animal)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "O enunciado diz que o tutor pode ter vários animais, logo não é 1:1."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "FK mútua gera dependência circular e trava inserções."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Tutor e Animal não dependem de Veterinário para existir."
        }
      ],
      "bizu": "💡 Relacionamento 1:N: A chave do lado '1' migra como FK para o lado 'Muitos'!"
    }
  },
  {
    "id": "bd-05",
    "subject": "Banco de Dados",
    "topic": "Modelagem / Clínica Veterinária",
    "source": "UNIFACS - Atividade de Sala (Slide Projetado)",
    "difficulty": "Médio",
    "statement": "No slide da Clínica Veterinária, consta a seguinte especificação sobre as consultas: 'O diagnóstico pode ficar sem preenchimento enquanto a consulta não for concluída'. Além disso, valores monetários da consulta devem ser armazenados com precisão. Quais cláusulas DDL refletem fielmente essas duas exigências no MySQL?",
    "options": [
      {
        "key": "A",
        "text": "diagnostico TEXT NOT NULL e valor_cobrado FLOAT"
      },
      {
        "key": "B",
        "text": "diagnostico TEXT NULL e valor_cobrado DECIMAL(10,2) NOT NULL"
      },
      {
        "key": "C",
        "text": "diagnostico VARCHAR(50) DEFAULT 'VAZIO' e valor_cobrado INT NOT NULL"
      },
      {
        "key": "D",
        "text": "diagnostico BLOB NOT NULL e valor_cobrado DOUBLE"
      },
      {
        "key": "E",
        "text": "diagnostico ENUM('SIM', 'NAO') e valor_cobrado VARCHAR(20)"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Como o diagnóstico pode não estar preenchido, deve permitir NULL (ou omitir NOT NULL). Para dinheiro, NUNCA se usa FLOAT ou DOUBLE por causa de erros de precisão binária; usa-se sempre DECIMAL(10,2).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "NOT NULL impediria consultas em andamento sem diagnóstico, e FLOAT perde centavos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "diagnostico aceita NULL e valor monetário usa DECIMAL(10,2) NOT NULL."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "INT descarta centavos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "BLOB é para binários/imagens e DOUBLE sofre de imprecisão de ponto flutuante."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Valores monetários não devem ser VARCHAR pois impedem somas (SUM, AVG)."
        }
      ],
      "bizu": "💡 Campo opcional = NULL. Dinheiro em banco relacional = sempre DECIMAL(10,2)!"
    }
  },
  {
    "id": "bd-06",
    "subject": "Banco de Dados",
    "topic": "SQL / DDL vs DML",
    "source": "UNIFACS - 25 Exercícios de Caderno (Ex 2)",
    "difficulty": "Fácil",
    "statement": "Os comandos SQL são classificados em sublinguagens de acordo com sua função. Assinale a alternativa que associa corretamente os comandos às suas respectivas categorias:",
    "options": [
      {
        "key": "A",
        "text": "CREATE, ALTER, DROP pertencem à DML; INSERT, UPDATE, DELETE pertencem à DDL."
      },
      {
        "key": "B",
        "text": "CREATE, ALTER, DROP pertencem à DDL (Definição); INSERT, UPDATE, DELETE pertencem à DML (Manipulação); SELECT pertence à DQL (Consulta)."
      },
      {
        "key": "C",
        "text": "SELECT pertence à DDL e ALTER pertence à DQL."
      },
      {
        "key": "D",
        "text": "Todos os comandos SQL pertencem exclusivamente à DML."
      },
      {
        "key": "E",
        "text": "INSERT e DROP pertencem à DCL (Controle de Acesso)."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "DDL (Data Definition Language) altera a estrutura/esqueleto do banco: CREATE, ALTER, DROP. DML (Data Manipulation Language) altera os registros/dados: INSERT, UPDATE, DELETE. DQL (Data Query Language) consulta: SELECT.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Inverteu DDL e DML."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Classificação canônica cobrada no Exercício 2 da lista oficial."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "SELECT não define estrutura (não é DDL)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "SQL é subdividida em DDL, DML, DQL, DCL e TCL."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "DCL é GRANT e REVOKE."
        }
      ],
      "bizu": "💡 DDL mexe no esqueleto (CREATE, ALTER, DROP). DML mexe na carne (INSERT, UPDATE, DELETE). DQL lê (SELECT)."
    }
  },
  {
    "id": "bd-07",
    "subject": "Banco de Dados",
    "topic": "SQL / Segurança em UPDATE",
    "source": "UNIFACS - 25 Exercícios de Caderno (Ex 22)",
    "difficulty": "Fácil",
    "statement": "No Exercício 22 da lista de caderno, o professor pergunta qual é o risco de executar o comando `UPDATE cliente SET telefone = '0000';` sem uma cláusula WHERE. A resposta correta é:",
    "options": [
      {
        "key": "A",
        "text": "O comando não é executado e gera um erro de sintaxe imediato."
      },
      {
        "key": "B",
        "text": "O comando altera o telefone de TODAS as linhas da tabela cliente indiscriminadamente, apagando os números de todos os clientes cadastrados."
      },
      {
        "key": "C",
        "text": "O comando altera apenas a primeira linha inserida no banco."
      },
      {
        "key": "D",
        "text": "O comando exclui a tabela cliente do banco de dados."
      },
      {
        "key": "E",
        "text": "O banco de dados cria automaticamente um backup antes da execução."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Sem a cláusula WHERE para filtrar quais registros devem ser afetados, o comando UPDATE é aplicado a 100% das linhas da tabela, causando perda irrecuperável de dados.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "A sintaxe é perfeitamente válida no SQL padrão (a menos que o modo seguro do MySQL Workbench esteja ativo)."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Sem WHERE, o UPDATE atinge todas as tuplas da tabela."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Não existe limitação implícita para a primeira linha."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "UPDATE altera dados, não exclui a tabela (que seria DROP)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "O banco não cria backups automáticos de comandos isolados."
        }
      ],
      "bizu": "💡 UPDATE ou DELETE sem WHERE altera ou apaga A TABELA INTEIRA! Perigo número 1 do DBA."
    }
  },
  {
    "id": "bd-08",
    "subject": "Banco de Dados",
    "topic": "SQL / DELETE vs DROP",
    "source": "UNIFACS - 25 Exercícios de Caderno (Ex 24)",
    "difficulty": "Fácil",
    "statement": "Qual é a diferença fundamental entre executar `DELETE FROM cliente WHERE id_cliente = 2;` e `DROP TABLE cliente;`?",
    "options": [
      {
        "key": "A",
        "text": "O DELETE é um comando DDL e o DROP é um comando DML."
      },
      {
        "key": "B",
        "text": "O DELETE apaga apenas o registro selecionado, mantendo a estrutura da tabela intacta; o DROP destrói a tabela inteira (dados e estrutura) do banco de dados."
      },
      {
        "key": "C",
        "text": "O DROP apaga apenas dados vazios e o DELETE apaga dados preenchidos."
      },
      {
        "key": "D",
        "text": "O DELETE só funciona se o banco estiver desligado."
      },
      {
        "key": "E",
        "text": "Não há diferença; ambos são sinônimos no MySQL."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "DELETE (DML) remove linhas (tuplas) do interior da tabela. DROP TABLE (DDL) remove o objeto do banco de dados, excluindo tanto as linhas quanto as definições de colunas, índices e constraints.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "DELETE é DML e DROP é DDL."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "DELETE remove tuplas específicas; DROP apaga o esqueleto e a tabela inteira do schema."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "DROP apaga o objeto inteiro, independentemente do conteúdo."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Ambos exigem que o SGBD esteja em execução."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Comandos totalmente distintos."
        }
      ],
      "bizu": "💡 DELETE tira a mobília de dentro do quarto. DROP explode o prédio inteiro!"
    }
  },
  {
    "id": "bd-09",
    "subject": "Banco de Dados",
    "topic": "SQL / Tipos de Dados",
    "source": "UNIFACS - 25 Exercícios de Caderno (Ex 8)",
    "difficulty": "Fácil",
    "statement": "No Exercício 8 da lista de caderno, o professor questiona por que campos como 'telefone' e 'CEP' devem ser armazenados como VARCHAR e não como INT. Assinale a justificativa técnica correta:",
    "options": [
      {
        "key": "A",
        "text": "Porque números inteiros ocupam mais espaço em disco do que qualquer texto."
      },
      {
        "key": "B",
        "text": "Porque o tipo INT descarta zeros à esquerda (ex: DDD 071 vira 71), não permite caracteres de formatação (parênteses, traços) e telefones não participam de cálculos aritméticos."
      },
      {
        "key": "C",
        "text": "Porque o MySQL proíbe o uso de INT em tabelas normalizadas na 3FN."
      },
      {
        "key": "D",
        "text": "Porque números inteiros só aceitam valores até 999."
      },
      {
        "key": "E",
        "text": "Porque o comando SELECT não consegue filtrar números inteiros."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Telefones, CPFs e CEPs são códigos identificadores, não grandezas quantitativas. Em INT, `071999990001` perde o zero inicial virando `71999990001`, e não suporta máscaras como `(71) 99999-0001`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "VARCHAR geralmente ocupa tamanho variável e INT ocupa fixos 4 bytes."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Três razões clássicas: preservação do zero à esquerda, caracteres de máscara e ausência de operações matemáticas."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "A 3FN não proíbe tipos de dados numéricos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "INT comum em SQL suporta até ~2,14 bilhões (e BIGINT até 9 quintilhões)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "SELECT filtra qualquer tipo de dado."
        }
      ],
      "bizu": "💡 Se não faz conta matemática e pode começar com zero, guarde como VARCHAR!"
    }
  },
  {
    "id": "bd-10",
    "subject": "Banco de Dados",
    "topic": "SQL / Consultas",
    "source": "UNIFACS - 25 Exercícios de Caderno (Ex 5)",
    "difficulty": "Fácil",
    "statement": "No Exercício 5 da lista de caderno: 'Qual é a diferença entre SELECT * FROM cliente e SELECT nome FROM cliente?':",
    "options": [
      {
        "key": "A",
        "text": "O comando com asterisco consulta apenas os clientes VIP, enquanto o com 'nome' consulta todos."
      },
      {
        "key": "B",
        "text": "O comando `SELECT *` retorna todas as colunas existentes na tabela cliente, consumindo mais largura de banda e memória, enquanto `SELECT nome` projeta estritamente a coluna solicitada."
      },
      {
        "key": "C",
        "text": "O comando `SELECT nome` é mais lento porque precisa verificar a ortografia de cada nome no dicionário do servidor."
      },
      {
        "key": "D",
        "text": "O asterisco cria uma cópia física da tabela no disco rígido do cliente."
      },
      {
        "key": "E",
        "text": "Ambos geram exatamente o mesmo plano de execução e o mesmo tráfego de rede sempre."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O asterisco (*) é a projeção total (retorna todas as colunas). Especificar os nomes das colunas melhora a performance, reduz tráfego e evita que alterações futuras na estrutura da tabela quebrem aplicações consumidoras.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Asterisco projeta colunas, não filtra linhas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "Distinção técnica exata cobrada pelo professor em sala de aula."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Não há checagem ortográfica no SGBD."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "SELECT não cria tabelas físicas no disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "SELECT * traz muito mais dados se a tabela tiver muitas colunas ou campos texto pesados."
        }
      ],
      "bizu": "💡 SELECT * traz todas as colunas (pesado). SELECT coluna traz só o que você pediu (ágil e profissional)."
    }
  }
];
