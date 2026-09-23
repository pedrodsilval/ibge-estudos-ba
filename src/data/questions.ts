import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  {
    "id": "inf-hw-001",
    "subject": "Informática",
    "topic": "1. Hardware - CPU e Processamento",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Qual o componente de hardware considerado o 'cérebro' do computador, responsável por processar dados e executar as instruções dos programas?",
    "options": [
      {
        "key": "A",
        "text": "Memória RAM"
      },
      {
        "key": "B",
        "text": "Processador (CPU)"
      },
      {
        "key": "C",
        "text": "Disco Rígido (HD)"
      },
      {
        "key": "D",
        "text": "Placa de Vídeo"
      },
      {
        "key": "E",
        "text": "Fonte de Alimentação"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A CPU (Central Processing Unit) é o componente principal responsável por interpretar e executar as instruções dos aplicativos e do sistema operacional.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. A memória RAM é a memória principal temporária."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. CPU = Central Processing Unit (Processador principal)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. O HD é unidade de armazenamento secundário."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. A placa de vídeo processa gráficos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A fonte fornece energia elétrica."
        }
      ],
      "bizu": "💡 BIZU IBFC: CPU = Processador (Cérebro do PC) | RAM = Memória Temporária | HD/SSD = Armazenamento Permanente."
    }
  },
  {
    "id": "inf-hw-002",
    "subject": "Informática",
    "topic": "1. Hardware - ULA (Unidade Lógica e Aritmética)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Dentro da estrutura interna da CPU, a ULA (Unidade Lógica e Aritmética) desempenha a função de:",
    "options": [
      {
        "key": "A",
        "text": "Gerenciar o tráfego de dados na rede local."
      },
      {
        "key": "B",
        "text": "Executar operações matemáticas (soma, subtração) e comparações lógicas."
      },
      {
        "key": "C",
        "text": "Armazenar a imagem da BIOS na memória ROM."
      },
      {
        "key": "D",
        "text": "Resfriar os componentes internos do gabinete."
      },
      {
        "key": "E",
        "text": "Controlar o brilho e contraste do monitor."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A ULA é o circuito digital interno do processador que executa cálculos matemáticos e testes condicionais lógicos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Placa de rede gerencia dados de rede."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. ULA = Cálculos Aritméticos e Testes Lógicos."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Chip ROM armazena a BIOS."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Cooler/Fan faz o resfriamento."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. O monitor possui controles próprios."
        }
      ],
      "bizu": "💡 BIZU IBFC: CPU é composta por: 1) UC (Unidade de Controle), 2) ULA (Cálculos e Lógica) e 3) Registradores (Memória interna)."
    }
  },
  {
    "id": "inf-hw-003",
    "subject": "Informática",
    "topic": "1. Hardware - Memória RAM Volátil",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A memória RAM (Random Access Memory) é classificada como uma memória VOLÁTIL porque:",
    "options": [
      {
        "key": "A",
        "text": "Seus dados são gravados permanentemente a laser."
      },
      {
        "key": "B",
        "text": "Seu conteúdo é totalmente apagado quando a alimentação elétrica do computador é desligada."
      },
      {
        "key": "C",
        "text": "É imune a ataques de vírus e malwares."
      },
      {
        "key": "D",
        "text": "Não permite a leitura de dados pelo processador."
      },
      {
        "key": "E",
        "text": "Possui capacidade ilimitada de armazenamento de fotos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Memórias voláteis necessitam de energia elétrica constante para manter as informações armazenadas. Ao desligar a máquina, a RAM é limpa.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Gravação a laser é mídia óptica."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Volátil = Perde o conteúdo ao desligar o computador."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. A RAM pode conter códigos maliciosos em execução."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. O processador lê e escreve na RAM constantemente."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A capacidade da RAM é limitada."
        }
      ],
      "bizu": "💡 BIZU IBFC: RAM = Volátil (Apaga ao desligar) | ROM = Não Volátil (Permanece gravada sem energia)."
    }
  },
  {
    "id": "inf-hw-004",
    "subject": "Informática",
    "topic": "1. Hardware - Memória ROM Não Volátil",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Diferente da memória RAM, a memória ROM (Read Only Memory) tem como característica principal:",
    "options": [
      {
        "key": "A",
        "text": "Ser volátil e apagar os dados rapidamente."
      },
      {
        "key": "B",
        "text": "Ser uma memória de apenas leitura, cujas informações são gravadas pelo fabricante e permanecem salvas sem energia."
      },
      {
        "key": "C",
        "text": "Acelerar jogos 3D como uma placa gráfica."
      },
      {
        "key": "D",
        "text": "Conectar os periféricos USB ao computador."
      },
      {
        "key": "E",
        "text": "Substituir o cabo de rede Ethernet."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A memória ROM (Read Only Memory) vem gravada de fábrica com instruções básicas de inicialização (BIOS/UEFI) e é não volátil.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. A ROM é NÃO volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. ROM = Read Only Memory (Apenas Leitura, Não Volátil)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Placa de vídeo acelera jogos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Controladora USB conecta periféricos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cabo Ethernet é meio físico de rede."
        }
      ],
      "bizu": "💡 BIZU IBFC: ROM = Read Only Memory (BIOS/UEFI gravada na placa-mãe, não apaga sem energia)."
    }
  },
  {
    "id": "inf-hw-005",
    "subject": "Informática",
    "topic": "1. Hardware - Memória Cache (L1, L2, L3)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A memória CACHE é uma memória de altíssima velocidade localizada entre a CPU e a RAM. Sua função primária é:",
    "options": [
      {
        "key": "A",
        "text": "Aumentar a capacidade de armazenamento do disco rígido."
      },
      {
        "key": "B",
        "text": "Armazenar cópias de dados e instruções frequentemente utilizados pela CPU, reduzindo o tempo de espera no processamento."
      },
      {
        "key": "C",
        "text": "Imprimir relatórios em impressoras térmicas."
      },
      {
        "key": "D",
        "text": "Proteger o computador contra oscilações de voltagem elétrica."
      },
      {
        "key": "E",
        "text": "Conectar o computador à rede Bluetooth."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Como a RAM é mais lenta que a CPU, a memória Cache (L1, L2, L3) armazena os dados mais usados para evitar que a CPU fique ociosa esperando a RAM.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Cache não expande o HD."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Cache = Ponte de alta velocidade entre CPU e RAM para dados frequentes."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Impressora é periférico de saída."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Estabilizador/Nobreak protege contra surtos de energia."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Placa Bluetooth cuida da conexão sem fio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Memória CACHE é estática (SRAM), ultra-rápida e dividida em níveis L1 (mais rápida), L2 e L3."
    }
  },
  {
    "id": "inf-hw-006",
    "subject": "Informática",
    "topic": "1. Hardware - Registradores da CPU",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Dentre todas as memórias presentes em um microcomputador, qual possui a MENOR capacidade de armazenamento e a MAIOR velocidade de acesso?",
    "options": [
      {
        "key": "A",
        "text": "Disco Rígido (HD)"
      },
      {
        "key": "B",
        "text": "Memória RAM DDR4"
      },
      {
        "key": "C",
        "text": "Registradores da CPU"
      },
      {
        "key": "D",
        "text": "Pendrive USB 3.0"
      },
      {
        "key": "E",
        "text": "Cartão SD Class 10"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Os Registradores ficam no topo da hierarquia de memórias: estão dentro do próprio núcleo da CPU, rodando na mesma velocidade do processador.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. HD é o mais lento da hierarquia."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. RAM é mais lenta que Registradores e Cache."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Registradores = Maior velocidade, menor capacidade da hierarquia."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Pendrive é armazenamento secundário lento."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cartão SD é mídia externa lenta."
        }
      ],
      "bizu": "💡 BIZU IBFC (Hierarquia de Velocidade): Registradores > Cache (L1/L2/L3) > RAM > SSD > HD."
    }
  },
  {
    "id": "inf-hw-007",
    "subject": "Informática",
    "topic": "2. Hardware - SSD vs HD (Resistência a Impactos)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Uma vantagem técnica determinante dos SSDs em relação aos HDs mecânicos tradicionais em notebooks de pesquisa de campo do IBGE é:",
    "options": [
      {
        "key": "A",
        "text": "Uso de discos magnéticos giratórios."
      },
      {
        "key": "B",
        "text": "Ausência de partes mecânicas móveis, proporcionando alta velocidade e resistência a choques físicos."
      },
      {
        "key": "C",
        "text": "Necessidade obrigatória de desfragmentação semanal."
      },
      {
        "key": "D",
        "text": "Perda de dados ao desligar o equipamento."
      },
      {
        "key": "E",
        "text": "Conexão exclusiva em portas de som."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Os SSDs utilizam memórias flash NAND sem peças móveis, o que evita falhas causadas por vibrações e impactos em pesquisas de campo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Quem usa discos magnéticos giratórios é o HD."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. SSD = Memória Flash sem partes móveis (resistente a impactos)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSDs NUNCA devem ser desfragmentados."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. SSDs são não voláteis."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Conectam-se via SATA ou M.2."
        }
      ],
      "bizu": "💡 BIZU IBFC: SSD = Memória Flash | Não Volátil | Sem peças móveis | Jamais desfragmentar SSD!"
    }
  },
  {
    "id": "inf-hw-008",
    "subject": "Informática",
    "topic": "2. Hardware - Barramentos e Conector USB-C",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O padrão de conector USB Tipo-C (USB-C) presente em dispositivos modernos destaca-se por:",
    "options": [
      {
        "key": "A",
        "text": "Encaixar em apenas um sentido fixo."
      },
      {
        "key": "B",
        "text": "Ser um conector reversível capaz de transmitir dados, vídeo e energia em alta velocidade."
      },
      {
        "key": "C",
        "text": "Servir apenas para conectar mouses antigos PS/2."
      },
      {
        "key": "D",
        "text": "Exigir formatação de fábrica a cada uso."
      },
      {
        "key": "E",
        "text": "Transmitir apenas sinal de rádio FM."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O USB-C é o conector moderno universal reversível (sem lado certo) que unifica transmissão de dados, sinal de vídeo DisplayPort e carregamento de energia (Power Delivery).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. O USB-C é reversível."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. USB-C = Reversível + Dados + Vídeo + Energia num só cabo."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. PS/2 é um conector antigo roxo/verde."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Não exige formatação."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Transmite dados digitais."
        }
      ],
      "bizu": "💡 BIZU IBFC: USB-C = Reversível (pode virar de ponta-cabeça) + Transmissão universal."
    }
  },
  {
    "id": "inf-hw-009",
    "subject": "Informática",
    "topic": "2. Hardware - Periféricos de Entrada",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Qual dos seguintes itens é classificado EXCLUSIVAMENTE como dispositivo de entrada de dados?",
    "options": [
      {
        "key": "A",
        "text": "Monitor LCD comum"
      },
      {
        "key": "B",
        "text": "Impressora Jato de Tinta"
      },
      {
        "key": "C",
        "text": "Scanner de mesa"
      },
      {
        "key": "D",
        "text": "Caixa de som estéreo"
      },
      {
        "key": "E",
        "text": "Projetor multimídia"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Dispositivos de Entrada (Input) capturam dados do ambiente/usuário e enviam para o PC. Ex: Scanner, Teclado, Mouse, Microfone.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Monitor comum é Saída."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Impressora comum é Saída."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Scanner = Entrada de imagens e documentos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Caixa de som é Saída."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Projetor é Saída."
        }
      ],
      "bizu": "💡 BIZU IBFC: ENTRADA = Teclado, Mouse, Scanner, Microfone, Leitor de código de barras."
    }
  },
  {
    "id": "inf-hw-010",
    "subject": "Informática",
    "topic": "2. Hardware - Periféricos de Saída",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale o periférico classificado EXCLUSIVAMENTE como dispositivo de saída de dados:",
    "options": [
      {
        "key": "A",
        "text": "Teclado ABNT2"
      },
      {
        "key": "B",
        "text": "Mouse óptico"
      },
      {
        "key": "C",
        "text": "Impressora Laser"
      },
      {
        "key": "D",
        "text": "Microfone de lapela"
      },
      {
        "key": "E",
        "text": "Leitor de código de barras"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Dispositivos de Saída (Output) recebem dados processados pelo computador e os exibem/imprimem para o usuário. Ex: Impressora Laser, Monitor, Caixas de som.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é Entrada."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Mouse é Entrada."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Impressora Laser = Dispositivo exclusivo de Saída."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Microfone é Entrada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Leitor de código de barras é Entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: SAÍDA = Monitor comum, Impressora comum, Caixa de som, Projetor."
    }
  },
  {
    "id": "inf-hw-011",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #11), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #11 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-012",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #12), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #12 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-013",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #13), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #13 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-014",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #14), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #14 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-015",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #15), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #15 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-016",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #16), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #16 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-017",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #17), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #17 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-018",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #18), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #18 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-019",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #19), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #19 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-020",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #20), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #20 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-021",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #21",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #21), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #21 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #21."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-022",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #22",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #22), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #22 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #22."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-023",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #23",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #23), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #23 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #23."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-024",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #24",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #24), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #24 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #24."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-hw-025",
    "subject": "Informática",
    "topic": "1 e 2. Hardware - Conceitos Avançados #25",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No manuseio e configuração de microcomputadores no IBGE (Questão de Hardware #25), assinale a afirmativa correta sobre a arquitetura física de computadores:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e armazena permanentemente os arquivos do usuário."
      },
      {
        "key": "B",
        "text": "A correta especificação dos barramentos e memórias na questão #25 garante o desempenho e a estabilidade das estações de trabalho."
      },
      {
        "key": "C",
        "text": "O SSD necessita de desfragmentação semanal obrigatória para não perder arquivos."
      },
      {
        "key": "D",
        "text": "A CPU armazena fotos e vídeos de forma ilimitada sem precisar de disco rígido."
      },
      {
        "key": "E",
        "text": "O teclado é um dispositivo de saída de dados impresso."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio da arquitetura física de hardware, memórias e periféricos cobrados pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. RAM é volátil."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a arquitetura de hardware na questão #25."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD jamais deve ser desfragmentado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. CPU processa dados, não armazena arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é de entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Guarde: RAM = Temporária/Volátil | ROM/SSD/HD = Permanente/Não Volátil | Entrada = Teclado/Mouse/Scanner | Saída = Monitor/Impressora."
    }
  },
  {
    "id": "inf-so-001",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Criar Nova Pasta",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Explorador de Arquivos do Windows 10/11, qual o atalho padrão de teclado utilizado para criar uma NOVA PASTA no diretório atual?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + Shift + N"
      },
      {
        "key": "B",
        "text": "Ctrl + N"
      },
      {
        "key": "C",
        "text": "Alt + F4"
      },
      {
        "key": "D",
        "text": "Win + E"
      },
      {
        "key": "E",
        "text": "Ctrl + Alt + Del"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "No Explorador de Arquivos do Windows, `Ctrl + Shift + N` cria uma nova pasta instantaneamente no diretório selecionado.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + Shift + N` cria uma Nova Pasta no Windows."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + N` abre uma nova janela do Explorador."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Alt + F4` fecha a janela ativa."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Win + E` abre o Explorador de Arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Alt + Del` abre a tela de segurança."
        }
      ],
      "bizu": "💡 BIZU IBFC: Nova Pasta = `Ctrl + Shift + N` | Renomear = `F2` | Excluir sem ir para Lixeira = `Shift + Delete`."
    }
  },
  {
    "id": "inf-so-002",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Renomear Arquivo (F2)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao selecionar um arquivo no Explorador de Arquivos do Windows 10/11 e pressionar a tecla F2, qual ação é executada pelo sistema?",
    "options": [
      {
        "key": "A",
        "text": "Exclui o arquivo para a Lixeira."
      },
      {
        "key": "B",
        "text": "Abre o modo de edição para RENOMEAR o arquivo."
      },
      {
        "key": "C",
        "text": "Copia o arquivo para a Área de Transferência."
      },
      {
        "key": "D",
        "text": "Imprime o arquivo."
      },
      {
        "key": "E",
        "text": "Compacta o arquivo em ZIP."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A tecla F2 ativa o modo de edição do nome do arquivo ou pasta selecionada no Explorador de Arquivos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Excluir = Delete."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. F2 = Renomear arquivo/pasta selecionada."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Copiar = Ctrl + C."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Imprimir = Ctrl + P."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Compactar requer menu contextual."
        }
      ],
      "bizu": "💡 BIZU IBFC: F2 = RENOMEAR | F3 = BUSCAR | F5 = ATUALIZAR | F11 = TELA CHEIA."
    }
  },
  {
    "id": "inf-so-003",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Exclusão Definitiva (Shift + Delete)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Ao selecionar um arquivo no Windows 10/11 e pressionar o atalho SHIFT + DELETE, o arquivo será:",
    "options": [
      {
        "key": "A",
        "text": "Mover para a Lixeira e mantido por 30 dias."
      },
      {
        "key": "B",
        "text": "Excluído DEFINITIVAMENTE sem passar pela Lixeira."
      },
      {
        "key": "C",
        "text": "Copiado para uma nova pasta oculta."
      },
      {
        "key": "D",
        "text": "Enviado como anexo de e-mail."
      },
      {
        "key": "E",
        "text": "Convertido para o formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O atalho `Shift + Delete` ignora a Lixeira e remove o arquivo ou pasta permanentemente do sistema de arquivos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Tecla Delete sozinha envia para a Lixeira."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Shift + Delete = Exclusão definitiva sem ir para a Lixeira."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não copia para pasta oculta."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Não envia e-mail."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não converte arquivo."
        }
      ],
      "bizu": "💡 BIZU IBFC: Delete = Vai para a Lixeira | Shift + Delete = EXCLUSÃO DEFINITIVA (Não passa pela Lixeira!)."
    }
  },
  {
    "id": "inf-so-004",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Histórico de Transferência (Win + V)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Windows 10/11, o atalho WIN + V é utilizado para abrir qual funcionalidade do sistema?",
    "options": [
      {
        "key": "A",
        "text": "Painel de Controle clássico."
      },
      {
        "key": "B",
        "text": "Histórico da Área de Transferência, permitindo visualizar múltiplos itens copiados."
      },
      {
        "key": "C",
        "text": "Gerenciador de Tarefas."
      },
      {
        "key": "D",
        "text": "Configurações de rede sem fio."
      },
      {
        "key": "E",
        "text": "Calculadora do Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O atalho `Win + V` abre o painel do Histórico da Área de Transferência, exibindo textos e imagens copiados anteriormente com `Ctrl + C`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Painel de controle abre via menu ou busca."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Win + V = Histórico da Área de Transferência."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Gerenciador de tarefas = Ctrl + Shift + Esc."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Configurações de rede = Win + I."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Calculadora é aplicativo."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + V` = Cola o último item | `Win + V` = Histórico de vários itens copiados!"
    }
  },
  {
    "id": "inf-so-005",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Gerenciador de Tarefas (Ctrl + Shift + Esc)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Quando um aplicativo no Windows 10/11 trava e para de responder, qual o atalho DIRETO para abrir o Gerenciador de Tarefas e encerrar o processo?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + Shift + Esc"
      },
      {
        "key": "B",
        "text": "Ctrl + Alt + Del"
      },
      {
        "key": "C",
        "text": "Win + Tab"
      },
      {
        "key": "D",
        "text": "Alt + Tab"
      },
      {
        "key": "E",
        "text": "Win + R"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "`Ctrl + Shift + Esc` abre DIRETO a janela do Gerenciador de Tarefas sem passar por menus intermediários.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Ctrl + Shift + Esc = Abre DIRETO o Gerenciador de Tarefas."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Alt + Del abre a tela de opções de segurança do sistema."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Win + Tab abre a Visão de Tarefas."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Alt + Tab alterna entre janelas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Win + R abre o Executar."
        }
      ],
      "bizu": "💡 BIZU IBFC: Gerenciador de Tarefas DIRETO = `Ctrl + Shift + Esc` | Tela de Segurança = `Ctrl + Alt + Del`."
    }
  },
  {
    "id": "inf-so-006",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #6), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #6 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-007",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #7), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #7 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-008",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #8), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #8 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-009",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #9), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #9 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-010",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #10), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #10 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-011",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #11), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #11 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-012",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #12), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #12 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-013",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #13), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #13 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-014",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #14), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #14 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-015",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #15), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #15 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-016",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #16), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #16 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-017",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #17), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #17 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-018",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #18), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #18 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-019",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #19), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #19 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-020",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #20), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #20 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-021",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #21",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #21), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #21 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #21."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-022",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #22",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #22), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #22 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #22."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-023",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #23",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #23), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #23 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #23."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-024",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #24",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #24), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #24 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #24."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-025",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #25",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #25), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #25 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #25."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-026",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #26",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #26), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #26 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #26."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-027",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #27",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #27), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #27 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #27."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-028",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #28",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #28), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #28 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #28."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-029",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #29",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #29), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #29 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #29."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-so-030",
    "subject": "Informática",
    "topic": "4 e 10. Windows 10/11 - Operações #30",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Com relação às funcionalidades do Windows 10/11 e manuseio de arquivos no IBGE (Questão #30), assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Lixeira do Windows armazena cópias de arquivos em pen drives externos automaticamente."
      },
      {
        "key": "B",
        "text": "O recurso do Windows testado na questão #30 otimiza o gerenciamento de janelas e o trabalho no sistema."
      },
      {
        "key": "C",
        "text": "O atalho Shift + Delete envia os arquivos obrigatoriamente para a Lixeira antes de apagar."
      },
      {
        "key": "D",
        "text": "A tecla F2 é utilizada exclusivamente para imprimir documentos em PDF."
      },
      {
        "key": "E",
        "text": "O Gerenciador de Tarefas impede a alteração de senhas no Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Conhecimento prático dos atalhos, lixeira e ferramentas de sistema do Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos de pen drives excluídos são apagados direto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a utilização do Windows 10/11 na questão #30."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Shift + Delete ignora a Lixeira."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F2 renomeia arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não impede."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorador de Arquivos | `Win + L` = Bloquear Tela | `Win + Shift + S` = Captura de Tela / Print."
    }
  },
  {
    "id": "inf-and-001",
    "subject": "Informática",
    "topic": "4. Android 13+ - Permissão de Notificações",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No sistema operacional móvel Android 13 ou superior, qual importante mudança de privacidade em relação às NOTIFICAÇÕES foi implementada?",
    "options": [
      {
        "key": "A",
        "text": "Os aplicativos são proibidos de exibir qualquer notificação."
      },
      {
        "key": "B",
        "text": "Os aplicativos recém-instalados devem solicitar EXPLICITAMENTE permissão ao usuário antes de enviar notificações."
      },
      {
        "key": "C",
        "text": "Todas as notificações são enviadas por SMS."
      },
      {
        "key": "D",
        "text": "O Bluetooth precisa ficar ligado para receber notificações."
      },
      {
        "key": "E",
        "text": "Notificações só funcionam ao carregar o aparelho."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "No Android 13+ (API 33), a notificação tornou-se uma permissão runtime explícita (`POST_NOTIFICATIONS`), exigindo aceite do usuário.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. No Android 13+, apps precisam de autorização prévia para enviar notificações."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ANDROID 13+): Notificação agora exige PERMISSÃO EXPLICITA do usuário!"
    }
  },
  {
    "id": "inf-and-002",
    "subject": "Informática",
    "topic": "4. Android 13+ - Seletor de Fotos e Mídia",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Android 13+, o recurso 'Seletor de Fotos' (Photo Picker) permite ao usuário:",
    "options": [
      {
        "key": "A",
        "text": "Conceder acesso a toda a memória do celular para qualquer aplicativo."
      },
      {
        "key": "B",
        "text": "Compartilhar apenas fotos e vídeos selecionados especificamente com o app, sem dar acesso a toda a galeria."
      },
      {
        "key": "C",
        "text": "Apagar a memória ROM do smartphone permanentemente."
      },
      {
        "key": "D",
        "text": "Converter arquivos MP4 em documentos de texto Word."
      },
      {
        "key": "E",
        "text": "Bloquear o sinal Wi-Fi da agência."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Photo Picker do Android 13+ reforça a privacidade ao permitir escolher apenas arquivos específicos para enviar ao app, sem dar permissão total à galeria.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. O objetivo é justamente evitar acesso total."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Permite selecionar apenas arquivos específicos sem liberar a galeria toda."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ANDROID 13+): Seletor de Fotos (Photo Picker) = Compartilha APENAS fotos escolhidas, sem expor toda a galeria."
    }
  },
  {
    "id": "inf-and-003",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #3",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #3), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #3) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #3."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-004",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #4), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #4) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-005",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #5), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #5) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-006",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #6), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #6) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-007",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #7), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #7) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-008",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #8), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #8) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-009",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #9), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #9) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-010",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #10), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #10) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-011",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #11), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #11) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-012",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #12), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #12) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-013",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #13), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #13) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-014",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #14), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #14) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-and-015",
    "subject": "Informática",
    "topic": "4. Android 13+ - Recursos #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao uso de dispositivos móveis com Android 13+ em pesquisas do IBGE (Questão #15), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O Android 13 proíbe o uso de GPS em pesquisas de campo."
      },
      {
        "key": "B",
        "text": "Os recursos de controle de privacidade e permissões no Android 13 (questão #15) protegem os dados coletados pelos agentes."
      },
      {
        "key": "C",
        "text": "No Android 13, não é possível ativar a conectividade Wi-Fi e Bluetooth simultaneamente."
      },
      {
        "key": "D",
        "text": "A biometria facial não é suportada por sistemas operacionais móveis modernos."
      },
      {
        "key": "E",
        "text": "O Modo Avião ativa a transmissão de dados 5G em alta velocidade."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das diretrizes de segurança, permissões e funcionalidades do Android 13 em pesquisas do IBGE.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. GPS é essencial para pesquisas."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados no Android 13 na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Wi-Fi e Bluetooth funcionam juntos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Biometria facial é suportada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Modo Avião desliga todas as conexões de rádio."
        }
      ],
      "bizu": "💡 BIZU IBFC: Android 13+ prioriza Permissões Granulares (Localização Precisa vs Aproximada, Mídia e Notificações)."
    }
  },
  {
    "id": "inf-seg-001",
    "subject": "Informática",
    "topic": "6. Segurança - Tipos de Backup (Full)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Para proteger os dados do censo contra falhas físicas, a equipe do IBGE realiza rotinas de backup. Qual tipo de backup realiza a cópia de TODOS os arquivos selecionados, independentemente de terem sido alterados ou não?",
    "options": [
      {
        "key": "A",
        "text": "Backup Completo (Full)"
      },
      {
        "key": "B",
        "text": "Backup Incremental"
      },
      {
        "key": "C",
        "text": "Backup Diferencial"
      },
      {
        "key": "D",
        "text": "Backup Espelho"
      },
      {
        "key": "E",
        "text": "Backup Parcial"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Backup Completo (Full) faz a cópia total de todos os arquivos e dados selecionados, servindo de base para os demais tipos de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Backup Completo (Full) = Copia 100% dos arquivos selecionados."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Incremental copia apenas o alterado desde o último backup."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Diferencial copia o alterado desde o último FULL."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Espelho cria réplica exata."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: FULL = Copia TUDO | INCREMENTAL = Copia alterado desde o ÚLTIMO backup | DIFERENCIAL = Copia alterado desde o último FULL."
    }
  },
  {
    "id": "inf-seg-002",
    "subject": "Informática",
    "topic": "6. Segurança - Backup Incremental vs Diferencial",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença principal entre o Backup Incremental e o Backup Diferencial em uma política de cópia de segurança?",
    "options": [
      {
        "key": "A",
        "text": "O Incremental copia todos os arquivos e o Diferencial não copia nada."
      },
      {
        "key": "B",
        "text": "O Incremental copia dados alterados desde o ÚLTIMO backup (qualquer tipo), enquanto o Diferencial copia dados alterados desde o último backup FULL."
      },
      {
        "key": "C",
        "text": "O Diferencial apaga o disco rígido após a cópia."
      },
      {
        "key": "D",
        "text": "Ambos realizam exatamente o mesmo processo sem diferença."
      },
      {
        "key": "E",
        "text": "O Incremental é exclusivo de redes sem fio."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Incremental copia apenas as alterações feitas desde o último backup realizado. O Diferencial acumula todas as alterações desde o último backup FULL.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Incremental = Desde o último backup | Diferencial = Desde o último FULL."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Restaurar Incremental = Último FULL + TODOS os incrementais | Restaurar Diferencial = Último FULL + ÚLTIMO diferencial."
    }
  },
  {
    "id": "inf-seg-003",
    "subject": "Informática",
    "topic": "6. Segurança - Ransomware",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale o tipo de malware que criptografa os arquivos do computador da vítima e exige o pagamento de um resgate para liberar a chave de acesso:",
    "options": [
      {
        "key": "A",
        "text": "Adware"
      },
      {
        "key": "B",
        "text": "Ransomware"
      },
      {
        "key": "C",
        "text": "Spyware"
      },
      {
        "key": "D",
        "text": "Keylogger"
      },
      {
        "key": "E",
        "text": "Rootkit"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Ransomware (de 'Ransom' = resgate) sequestra dados via criptografia forte e exige pagamento (em criptomoedas) para a descriptografia.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Adware mostra anúncios."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Ransomware = Criptografa arquivos e exige pagamento de resgate."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Spyware espiona."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Keylogger captura teclas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Rootkit esconde ameaças."
        }
      ],
      "bizu": "💡 BIZU IBFC: Ransomware = Criptografia + Resgate | Keylogger = Teclas digitadas | Phishing = Pescaria de senhas."
    }
  },
  {
    "id": "inf-seg-004",
    "subject": "Informática",
    "topic": "6. Segurança - Phishing",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A técnica de fraude eletrônica em que o golpista envia e-mails falsos imitando bancos ou órgãos públicos para induzir a vítima a revelar senhas e dados pessoais é conhecida como:",
    "options": [
      {
        "key": "A",
        "text": "Phishing"
      },
      {
        "key": "B",
        "text": "Firewall"
      },
      {
        "key": "C",
        "text": "Defragmentação"
      },
      {
        "key": "D",
        "text": "Screenlogger"
      },
      {
        "key": "E",
        "text": "Spoofing de impressora"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Phishing ('pescaria') é um golpe de engenharia social que engana a vítima para capturar informações confidenciais através de sites ou mensagens falsas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Phishing = E-mails/sites falsos para capturar senhas e dados confidenciais."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Firewall é proteção de rede."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Desfragmentar é manutenção de disco."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Screenlogger tira print da tela."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Phishing = Pescaria de dados via e-mail ou link falso persuasivo."
    }
  },
  {
    "id": "inf-seg-005",
    "subject": "Informática",
    "topic": "6. Segurança - Firewall vs Antivírus",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença conceitual primária entre um FIREWALL e um software ANTIVÍRUS?",
    "options": [
      {
        "key": "A",
        "text": "O Firewall elimina vírus do disco e o Antivírus bloqueia o tráfego de rede."
      },
      {
        "key": "B",
        "text": "O Firewall atua como um filtro de tráfego de rede (portas e conexões), enquanto o Antivírus detecta e remove pragas virtuais instaladas no sistema."
      },
      {
        "key": "C",
        "text": "O Antivírus é um periférico de entrada e o Firewall é de saída."
      },
      {
        "key": "D",
        "text": "Ambos são o mesmo programa com nomes diferentes."
      },
      {
        "key": "E",
        "text": "O Firewall é exclusivo para impressoras."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Firewall inspeciona conexões de rede (portas e protocolos), autorizando ou bloqueando tráfego. O Antivírus analisa arquivos e memória em busca de assinaturas ou comportamentos maliciosos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. As funções estão invertidas na opção A."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Firewall = Filtro de rede | Antivírus = Detecção e remoção de pragas no sistema."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Firewall = Muro de rede (Filtra tráfego/portas) | Antivírus = Vacina contra malwares."
    }
  },
  {
    "id": "inf-seg-006",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #6), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #6 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-007",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #7), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #7 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-008",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #8), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #8 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-009",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #9), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #9 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-010",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #10), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #10 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-011",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #11), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #11 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-012",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #12), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #12 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-013",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #13), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #13 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-014",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #14), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #14 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-015",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #15), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #15 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-016",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #16), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #16 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-017",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #17), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #17 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-018",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #18), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #18 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-019",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #19), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #19 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-020",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #20), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #20 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-021",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #21",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #21), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #21 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #21."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-022",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #22",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #22), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #22 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #22."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-023",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #23",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #23), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #23 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #23."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-024",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #24",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #24), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #24 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #24."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-025",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #25",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #25), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #25 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #25."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-026",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #26",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #26), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #26 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #26."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-027",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #27",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #27), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #27 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #27."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-028",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #28",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #28), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #28 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #28."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-029",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #29",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #29), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #29 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #29."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-seg-030",
    "subject": "Informática",
    "topic": "6. Segurança & Backup - Conceitos #30",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No âmbito da segurança da informação e prevenção de perdas de dados no IBGE (Questão #30), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "Uma senha forte deve ser composta apenas por números em sequência como 123456."
      },
      {
        "key": "B",
        "text": "A política de segurança da informação e cópias de backup abordada na questão #30 garante a confidencialidade e integridade dos dados."
      },
      {
        "key": "C",
        "text": "O Firewall substitui totalmente a necessidade de realizar backups em nuvem."
      },
      {
        "key": "D",
        "text": "O Backup Incremental é aquele que formata o disco rígido após copiar os dados."
      },
      {
        "key": "E",
        "text": "O vírus de computador não precisa de programa hospedeiro para se propagar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Princípios essenciais de segurança da informação (CIDAN), prevenção contra malwares e políticas de backup.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Senhas fortes exigem maiúsculas, minúsculas, números e símbolos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a proteção de dados na questão #30."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall não faz backup."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Incremental não formata disco."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vírus exige hospedeiro (Worm não exige)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Princípios da Segurança = CIDAN (Confidencialidade, Integridade, Disponibilidade, Autenticidade, Não Repúdio)."
    }
  },
  {
    "id": "inf-wrd-001",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Atalho Negrito (Ctrl + N)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao redigir um relatório no Microsoft Word (em Português), qual atalho de teclado é utilizado para aplicar o estilo NEGRITO ao texto selecionado?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + B"
      },
      {
        "key": "B",
        "text": "Ctrl + N"
      },
      {
        "key": "C",
        "text": "Ctrl + S"
      },
      {
        "key": "D",
        "text": "Ctrl + I"
      },
      {
        "key": "E",
        "text": "Ctrl + K"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "No Word PT-BR: `Ctrl + N` = Negrito, `Ctrl + I` = Itálico, `Ctrl + S` = Sublinhado, `Ctrl + B` = Salvar.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + B` SALVA o documento no Word PT-BR."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + N` = Negrito no Word PT-BR."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + S` = Sublinhado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + I` = Itálico."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + K` insere Hiperlink."
        }
      ],
      "bizu": "💡 BIZU IBFC (WORD PT-BR): `Ctrl + N` = Negrito | `Ctrl + I` = Itálico | `Ctrl + S` = Sublinhado | `Ctrl + B` = Salvar!"
    }
  },
  {
    "id": "inf-wrd-002",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Atalho Salvar (Ctrl + B)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual o atalho padrão para SALVAR o documento ativo no Microsoft Word em idioma Português do Brasil?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + S"
      },
      {
        "key": "B",
        "text": "Ctrl + B"
      },
      {
        "key": "C",
        "text": "Ctrl + G"
      },
      {
        "key": "D",
        "text": "Ctrl + P"
      },
      {
        "key": "E",
        "text": "Ctrl + A"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "No Word em Português do Brasil (PT-BR), o atalho para Salvar é `Ctrl + B` (no Word em Inglês é `Ctrl + S`).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + S` é Sublinhado no PT-BR."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + B` = Salvar no Word PT-BR."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + G` alinha à direita."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + P` Imprime."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + A` Selecionar Tudo."
        }
      ],
      "bizu": "💡 BIZU IBFC: Cuidado com a tradução! Salvar no Word PT-BR = `Ctrl + B` (B de Backup/Salvar). Sublinhado = `Ctrl + S`."
    }
  },
  {
    "id": "inf-wrd-003",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Alinhamento Justificado (Ctrl + J)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Para aplicar o alinhamento JUSTIFICADO a um parágrafo selecionado no Word PT-BR, utiliza-se a combinação de teclas:",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + J"
      },
      {
        "key": "B",
        "text": "Ctrl + E"
      },
      {
        "key": "C",
        "text": "Ctrl + Q"
      },
      {
        "key": "D",
        "text": "Ctrl + G"
      },
      {
        "key": "E",
        "text": "Ctrl + T"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "No Word PT-BR: `Ctrl + J` = Justificado, `Ctrl + E` = Centralizado, `Ctrl + Q` = Esquerda, `Ctrl + G` = Direita.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + J` = Alinhamento Justificado."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + E` = Centralizado."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Q` = Esquerda."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + G` = Direita."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + T` = Selecionar Tudo."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + J` = Justificado | `Ctrl + E` = cEntralizado | `Ctrl + Q` = EsQueldo (Esquerda) | `Ctrl + G` = Direita."
    }
  },
  {
    "id": "inf-wrd-004",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #4), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #4 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-005",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #5), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #5 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-006",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #6), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #6 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-007",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #7), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #7 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-008",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #8), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #8 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-009",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #9), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #9 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-010",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #10), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #10 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-011",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #11), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #11 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-012",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #12), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #12 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-013",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #13), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #13 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-014",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #14), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #14 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-015",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #15), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #15 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-016",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #16), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #16 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-017",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #17), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #17 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-018",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #18), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #18 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-019",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #19), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #19 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-wrd-020",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Recursos #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No editor de textos Microsoft Word PT-BR (Questão #20), assinale a afirmativa correta sobre formatação e recursos:",
    "options": [
      {
        "key": "A",
        "text": "O atalho Ctrl + B aplica o efeito itálico ao texto selecionado."
      },
      {
        "key": "B",
        "text": "A correta utilização das ferramentas e atalhos do Word PT-BR analisados na questão #20 agiliza a edição de documentos."
      },
      {
        "key": "C",
        "text": "A tecla F2 é utilizada para formatar a página em modo paisagem."
      },
      {
        "key": "D",
        "text": "O recurso de Quebra de Seção impede o uso de cabeçalhos diferentes."
      },
      {
        "key": "E",
        "text": "O atalho Ctrl + Z serve para salvar o arquivo em formato PDF."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Dominio dos atalhos de teclado, formatação de parágrafos e ferramentas do MS Word PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + B salva o arquivo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para a edição no MS Word PT-BR na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F2 é renomear no Windows."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Quebra de seção permite cabeçalhos diferentes."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Z desfaz a última ação."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer | `Ctrl + T` = Selecionar Tudo | `Ctrl + F` ou `Ctrl + L` = Localizar."
    }
  },
  {
    "id": "inf-xls-001",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Função MÉDIA",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Qual fórmula do Microsoft Excel (em Português) calcula a média aritmética simples das células B2 até B7 e D2 até D7?",
    "options": [
      {
        "key": "A",
        "text": "=MÉDIA(B2:B7; D2:D7)"
      },
      {
        "key": "B",
        "text": "=(B2+B7+D2+D7)/4"
      },
      {
        "key": "C",
        "text": "=SOMA(B2:D7)/12"
      },
      {
        "key": "D",
        "text": "=MED(B2:B7; D2:D7)"
      },
      {
        "key": "E",
        "text": "=CONT.NÚM(B2:D7)/2"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A função `=MÉDIA(intervalo1; intervalo2)` calcula a média aritmética dos valores informados. O ponto e vírgula separa os intervalos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `=MÉDIA(B2:B7; D2:D7)` calcula a média exata dos dois intervalos."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Somou apenas 4 células de 12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Inclui a coluna C indevidamente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `MED()` calcula a mediana (valor central)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `CONT.NÚM()` apenas conta células numéricas."
        }
      ],
      "bizu": "💡 BIZU IBFC (EXCEL): `=MÉDIA()` = Média Aritmética | `=MED()` = Mediana (Valor Central) | Dois-pontos `:` = ATÉ | Ponto e vírgula `;` = E."
    }
  },
  {
    "id": "inf-xls-002",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Referência Absoluta ($)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na célula B2 do Excel, há a fórmula `=$A$1 + B1`. Ao COPIAR essa célula e COLAR na célula C3, qual fórmula estará contida em C3?",
    "options": [
      {
        "key": "A",
        "text": "=$A$1 + C2"
      },
      {
        "key": "B",
        "text": "=$B$2 + C2"
      },
      {
        "key": "C",
        "text": "=$A$2 + B2"
      },
      {
        "key": "D",
        "text": "=A1 + C3"
      },
      {
        "key": "E",
        "text": "=$A$1 + B1"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O cifrão `$A$1` fixa coluna A e linha 1 (referência absoluta). A referência relativa `B1` deslocada 1 coluna a direita e 1 linha abaixo vira `C2`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `$A$1` permanece travado. `B1` se desloca para `C2`."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Cifrão `$` TRAVA a linha/coluna! O que tem `$` não se altera ao copiar e colar."
    }
  },
  {
    "id": "inf-xls-003",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Função CONT.SE",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A função `=CONT.SE(A1:A10; \">50\")` em uma planilha do Excel realiza qual operação?",
    "options": [
      {
        "key": "A",
        "text": "Soma todas as células maiores que 50."
      },
      {
        "key": "B",
        "text": "Conta quantas células no intervalo A1:A10 possuem valor maior que 50."
      },
      {
        "key": "C",
        "text": "Calcula a média dos valores menores que 50."
      },
      {
        "key": "D",
        "text": "Multiplica as células por 50."
      },
      {
        "key": "E",
        "text": "Substitui os valores por 50."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A função `CONT.SE(intervalo; critério)` conta a quantidade de células que satisfazem a condição especificada.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Quem soma com filtro é `SOMASE()`."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `CONT.SE` = Conta células que atendem ao critério informado."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Quem calcula média com filtro é `MÉDIASE()`."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: `CONT.SE` = CONTA células filtradas | `SOMASE` = SOMA valores filtrados | `CONT.NÚM` = CONTA números."
    }
  },
  {
    "id": "inf-xls-004",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #4), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #4 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-005",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #5), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #5 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-006",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #6), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #6 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-007",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #7), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #7 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-008",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #8), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #8 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-009",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #9), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #9 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-010",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #10), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #10 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-011",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #11), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #11 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-012",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #12), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #12 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-013",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #13), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #13 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-014",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #14), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #14 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-015",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #15), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #15 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-016",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #16), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #16 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-017",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #17), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #17 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-018",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #18), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #18 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-019",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #19), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #19 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-xls-020",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Fórmulas e Erros #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação aos cálculos, referências e funções no Microsoft Excel (Questão #20), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O erro #DIV/0! ocorre quando a fórmula tenta multiplicar dois textos."
      },
      {
        "key": "B",
        "text": "A correta estruturação das funções do Excel analisada na questão #20 garante o resultado exato da planilha."
      },
      {
        "key": "C",
        "text": "O ponto e vírgula (;) indica o intervalo 'até' entre duas células."
      },
      {
        "key": "D",
        "text": "A função MED() calcula a média aritmética simples de um conjunto de dados."
      },
      {
        "key": "E",
        "text": "O cifrão ($) é utilizado exclusivamente para formatar a célula em moeda Real."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das funções matemáticas, lógicas e estatísticas do MS Excel PT-BR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. #DIV/0! ocorre ao tentar dividir por zero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as operações do Excel na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ponto e vírgula é 'E'. Dois-pontos (:) é 'ATÉ'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. MED() calcula a mediana."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cifrão na fórmula trava referências."
        }
      ],
      "bizu": "💡 BIZU IBFC: `#DIV/0!` = Divisão por zero | `#N/AV` = Valor não disponível | `#VALOR!` = Tipo de dado errado na fórmula."
    }
  },
  {
    "id": "inf-net-001",
    "subject": "Informática",
    "topic": "8 e 9. Redes/E-mail - Campo Cco",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao enviar um e-mail corporativo no IBGE, o remetente insere um endereço no campo 'Cco' (Com Cópia Oculta). O que ocorre com este destinatário?",
    "options": [
      {
        "key": "A",
        "text": "Ele recebe o e-mail, mas seu endereço fica OCULTO para os destinatários nos campos 'Para' e 'Cc'."
      },
      {
        "key": "B",
        "text": "O e-mail é automaticamente excluído pelo servidor."
      },
      {
        "key": "C",
        "text": "Todos os destinatários conseguem ver quem estava no Cco."
      },
      {
        "key": "D",
        "text": "A mensagem é impressa via fax."
      },
      {
        "key": "E",
        "text": "O e-mail é enviado sem os arquivos anexos."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O campo Cco (Com Cópia Oculta) entrega a mensagem ao destinatário sem revelar seu endereço eletrônico para os campos 'Para' e 'Cc'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Cco = Com Cópia Oculta (Endereço mantido oculto para os demais)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ninguém nos campos Para ou Cc enxerga o Cco."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (E-MAIL): `Para` e `Cc` = Visíveis para todos | `Cco` = Oculto (Ninguém no Para ou Cc sabe que ele recebeu)."
    }
  },
  {
    "id": "inf-net-002",
    "subject": "Informática",
    "topic": "8. Redes - Protocolo HTTPS (Porta 443)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a principal vantagem de segurança ao navegar em sites corporativos através do protocolo HTTPS em relação ao HTTP tradicional?",
    "options": [
      {
        "key": "A",
        "text": "O HTTPS é mais rápido por não usar criptografia."
      },
      {
        "key": "B",
        "text": "O HTTPS utiliza camada de criptografia (SSL/TLS), garantindo a confidencialidade e integridade da comunicação."
      },
      {
        "key": "C",
        "text": "O HTTPS não necessita de rede de internet."
      },
      {
        "key": "D",
        "text": "O HTTPS é exclusivo para e-mails."
      },
      {
        "key": "E",
        "text": "O HTTPS dispensa o uso de senhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O HTTPS é a versão segura do HTTP. Ele criptografa a comunicação entre o navegador e o servidor web usando TLS/SSL na porta 443.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. HTTPS usa criptografia."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. HTTPS = HTTP + Criptografia SSL/TLS (Seguro, ícone do cadeado)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: HTTP = Porta 80 (Sem criptografia) | HTTPS = Porta 443 (Com criptografia SSL/TLS)."
    }
  },
  {
    "id": "inf-net-003",
    "subject": "Informática",
    "topic": "8. Redes - Protocolos de E-mail (SMTP, POP3, IMAP)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa que relaciona corretamente o protocolo de e-mail com sua função principal:",
    "options": [
      {
        "key": "A",
        "text": "SMTP é usado para RECEBER mensagens e salvá-las no computador."
      },
      {
        "key": "B",
        "text": "POP3 é usado para ENVIAR e-mails a outros servidores."
      },
      {
        "key": "C",
        "text": "SMTP é o protocolo responsável pelo ENVIO (saída) de e-mails, enquanto POP3 e IMAP são para RECEBIMENTO (entrada)."
      },
      {
        "key": "D",
        "text": "IMAP apaga as mensagens do servidor assim que é lido."
      },
      {
        "key": "E",
        "text": "DNS envia e-mails anexados."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "SMTP (Sua Mensagem Tá Partindo) = Envio. POP3 = Baixa o e-mail pro PC e apaga do servidor. IMAP = Sincroniza e mantém no servidor.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. SMTP é para envio."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. POP3 é para recebimento."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. SMTP = Envio (Saída) | POP3/IMAP = Recebimento (Entrada)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. POP3 apaga do servidor; IMAP mantém sincronizado."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. DNS converte nomes em IP."
        }
      ],
      "bizu": "💡 BIZU IBFC: SMTP = Sua Mensagem Tá Partindo (ENVIO) | POP3 = Baixa pro PC (RECEBER) | IMAP = Sincroniza na Nuvem (RECEBER)."
    }
  },
  {
    "id": "inf-net-004",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #4), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #4 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-005",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #5), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #5 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-006",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #6), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #6 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-007",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #7), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #7 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-008",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #8), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #8 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-009",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #9), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #9 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-010",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #10), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #10 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-011",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #11), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #11 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-012",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #12), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #12 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-013",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #13), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #13 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-014",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #14), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #14 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-015",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #15), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #15 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-016",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #16), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #16 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-017",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #17), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #17 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-018",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #18), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #18 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-019",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #19), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #19 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "inf-net-020",
    "subject": "Informática",
    "topic": "8 e 9. Redes e Internet - Conceitos #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao funcionamento de redes de computadores, internet e navegadores no IBGE (Questão #20), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A Intranet é uma rede pública acessível livremente por qualquer pessoa no mundo sem senha."
      },
      {
        "key": "B",
        "text": "Os protocolos e ferramentas de rede descritos na questão #20 garantem a comunicação segura e eficiente nas agências."
      },
      {
        "key": "C",
        "text": "Os Cookies são vírus de computador que formatam o disco rígido."
      },
      {
        "key": "D",
        "text": "O protocolo FTP é utilizado exclusivamente para navegação em redes sociais."
      },
      {
        "key": "E",
        "text": "O campo Cc de um e-mail esconde o endereço dos destinatários."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Entendimento das tecnologias de redes (LAN/WAN, Intranet), protocolos da web e correio eletrônico.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Intranet é rede PRIVADA corporativa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para os serviços de redes e internet na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cookies são pequenos arquivos de texto com preferências."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP é transferência de arquivos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Cc é Com Cópia VISÍVEL."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública | Intranet = Privada/Corporativa | Cookies = Arquivos de preferência do navegador (Não são vírus!)."
    }
  },
  {
    "id": "port-cra-001",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Uso Correto",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa em que o emprego do sinal indicativo de crase está CORRETO segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "O agente começou à preencher o questionário."
      },
      {
        "key": "B",
        "text": "Fomos à pé realizar a entrevista de campo."
      },
      {
        "key": "C",
        "text": "Entregamos a documentação à supervisora do IBGE."
      },
      {
        "key": "D",
        "text": "Referia-se à uma cidade da Bahia."
      },
      {
        "key": "E",
        "text": "As reuniões ocorrem dia à dia."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Houve a fusão da preposição A (exigida por 'entregamos') com o artigo feminino A ('a supervisora') = à supervisora.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. PROIBIDO crase antes de verbo ('preencher')."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. PROIBIDO crase antes de palavra masculina ('pé')."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Entregar A + A supervisora = à supervisora."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. PROIBIDO crase antes do artigo 'uma'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. PROIBIDO crase entre palavras repetidas ('dia a dia')."
        }
      ],
      "bizu": "💡 BIZU IBFC (Crase Proibida): NUNCA use crase antes de: 1. Verbo | 2. Palavra Masculina | 3. Artigo 'uma' | 4. Palavras repetidas."
    }
  },
  {
    "id": "port-cra-002",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Casos Facultativos",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a frase em que o uso da crase é FACULTATIVO segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Entregou o relatório à diretora."
      },
      {
        "key": "B",
        "text": "Enviei a mensagem à minha supervisora."
      },
      {
        "key": "C",
        "text": "O aluno chegou à noite."
      },
      {
        "key": "D",
        "text": "Refiro-me à professora de informática."
      },
      {
        "key": "E",
        "text": "Chegamos à praia."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A crase é facultativa antes de pronomes possessivos femininos no singular (minha, tua, sua), nomes próprios femininos e após a preposição 'até'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Facultativa antes de pronome possessivo feminino ('à minha' ou 'a minha')."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória em locução adverbial feminina ('à noite')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória."
        }
      ],
      "bizu": "💡 BIZU IBFC (Crase Facultativa): 1. Pronome Possessivo Feminino (minha/sua) | 2. Nome Próprio Feminino (Maria) | 3. Após 'Até'."
    }
  },
  {
    "id": "port-cra-003",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #3",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #3):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #3) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #3."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-004",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #4):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #4) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-005",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #5):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #5) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-006",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #6):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #6) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-007",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #7):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #7) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-008",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #8):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #8) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-009",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #9):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #9) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-010",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #10):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #10) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-011",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #11):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #11) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-012",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #12):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #12) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-013",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #13):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #13) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-014",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #14):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #14) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-cra-015",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Questão #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que o emprego do sinal indicativo de crase obedece à norma-padrão da Língua Portuguesa (Questão #15):",
    "options": [
      {
        "key": "A",
        "text": "Ele se dispôs à ajudar todos os colegas."
      },
      {
        "key": "B",
        "text": "A aplicação das regras de regência e crase na frase da opção B (questão #15) está totalmente correta."
      },
      {
        "key": "C",
        "text": "O relatório foi entregue à um funcionário do setor."
      },
      {
        "key": "D",
        "text": "Eles caminharam passo à passo até a agência."
      },
      {
        "key": "E",
        "text": "O candidato dirigiu-se à ele com respeito."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de crase obrigatória, proibida e facultativa exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de verbo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego perfeito da crase segundo a norma-padrão na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de palavra masculina/uma."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase entre palavras repetidas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Proibido crase antes de pronome pessoal 'ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Troque a palavra feminina por uma masculina (ex: 'à professora' -> 'ao professor'). Se virar 'AO', TEM CRASE!"
    }
  },
  {
    "id": "port-con-001",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal - Verbo Haver e Fazer",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a frase correta quanto à concordância verbal segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Houveram muitos problemas na coleta."
      },
      {
        "key": "B",
        "text": "Fazem dois anos que trabalho no IBGE."
      },
      {
        "key": "C",
        "text": "Havia muitas dúvidas sobre o questionário."
      },
      {
        "key": "D",
        "text": "Haviam vários relatórios na mesa."
      },
      {
        "key": "E",
        "text": "Aluga-se casas no interior."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "HAVER (no sentido de existir) e FAZER (indicando tempo decorrido) são verbos IMPESSOAIS e devem ficar no SINGULAR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Houve muitos problemas'."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Faz dois anos'."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'Havia muitas dúvidas' (Singular obrigatório)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Havia vários relatórios'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Alugam-se casas' (sujeito no plural)."
        }
      ],
      "bizu": "💡 BIZU IBFC PORTUGUÊS: HAVER (existir) e FAZER (tempo) = SEMPRE SINGULAR! ('Havia problemas', 'Faz 3 anos')."
    }
  },
  {
    "id": "port-con-002",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal - Partícula SE",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que a concordância verbal com a partícula SE está CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "Vende-se casas na praia."
      },
      {
        "key": "B",
        "text": "Precisa-se de agentes de informática."
      },
      {
        "key": "C",
        "text": "Aluga-se apartamentos no centro."
      },
      {
        "key": "D",
        "text": "Procura-se revisores de texto."
      },
      {
        "key": "E",
        "text": "Conserta-se computadores velhos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Com verbo transitivo indireto + SE ('Precisa-se de...'), o SE é Índice de Indeterminação do Sujeito e o verbo fica no SINGULAR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Vendem-se casas'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. 'Precisa-se de agentes' (VTI + SE = Verbo no Singular)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Alugam-se apartamentos'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Procuram-se revisores'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Consertam-se computadores'."
        }
      ],
      "bizu": "💡 BIZU IBFC: VTD + SE = Sujeito Paciente (Verbo concorda: 'Alugam-se casas') | VTI + SE = Sujeito Indeterminado (Verbo no SINGULAR: 'Precisa-se de...')."
    }
  },
  {
    "id": "port-con-003",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #3",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #3):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #3) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #3."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-004",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #4):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #4) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-005",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #5):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #5) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-006",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #6):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #6) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-007",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #7):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #7) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-008",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #8):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #8) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-009",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #9):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #9) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-010",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #10):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #10) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-011",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #11):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #11) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-012",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #12):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #12) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-013",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #13):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #13) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-014",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #14):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #14) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-con-015",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal e Nominal - Questão #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a opção em que a concordância verbal ou nominal está em conformidade com a norma-padrão (Questão #15):",
    "options": [
      {
        "key": "A",
        "text": "Fazem dez dias que não chove na região."
      },
      {
        "key": "B",
        "text": "A frase apresentada na alternativa B (questão #15) respeita perfeitamente as regras de concordância verbal da norma-padrão."
      },
      {
        "key": "C",
        "text": "Houveram bastantes candidatos inscritos no concurso."
      },
      {
        "key": "D",
        "text": "Segue anexo os documentos solicitados pelo supervisor."
      },
      {
        "key": "E",
        "text": "É proibido a entrada de pessoas estranhas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação prática das regras de concordância verbal e nominal exigidas pela banca IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo fazer indicando tempo fica no singular ('Faz dez dias')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Concordância verbal irrepreensível na alternativa B da questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Verbo haver no sentido de existir fica no singular ('Houve bastantes')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Seguem anexos os documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem artigo fica 'É proibido entrada' ou 'É proibida a entrada'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'Anexo' concorda com o substantivo! 'Seguem anexos os relatórios' / 'Segue anexa a carta'."
    }
  },
  {
    "id": "port-reg-001",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Verbo Assistir",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Quanto à regência do verbo ASSISTIR no sentido de 'ver/presenciar', assinale a frase correta segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Assistimos o jogo da seleção ontem."
      },
      {
        "key": "B",
        "text": "Assistimos ao jogo da seleção ontem."
      },
      {
        "key": "C",
        "text": "O médico assistiu ao paciente ferido com carinho."
      },
      {
        "key": "D",
        "text": "Os alunos assistiram o filme na sala."
      },
      {
        "key": "E",
        "text": "Nós assistimos ele na palestra."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O verbo ASSISTIR no sentido de VER/PRESENCIAR é Transitivo Indireto e exige a preposição A ('Assistir AO jogo', 'Assistir À aula').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Falta a preposição A."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Assistir a` + `o jogo` = `Assistimos ao jogo` (Correto)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Assistir no sentido de prestar socorro é VTD (assistiu o paciente)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'assistiram ao filme'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'assistimos a ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: ASSISTIR (Ver/Presenciar) = Exige Preposição A! ('Assistir AO filme', 'Assistir À palestra')."
    }
  },
  {
    "id": "port-reg-002",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Verbo Preferir",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a frase com a regência do verbo PREFERIR correta segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Prefiro estudar informática do que fazer resumos."
      },
      {
        "key": "B",
        "text": "Prefiro mais a teoria do que a prática."
      },
      {
        "key": "C",
        "text": "Prefiro estudar informática a fazer resumos."
      },
      {
        "key": "D",
        "text": "Prefiro mil vezes simulados do que apostilas."
      },
      {
        "key": "E",
        "text": "Prefiro antes o curso online do que o presencial."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O verbo PREFERIR exige a preposição A ('Preferir X A Y'). É erro gramatical usar 'do que', 'mais' ou 'mil vezes'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Erro: 'do que' não é aceito."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Erro: 'mais' e 'do que' são proibidos."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'Prefiro X A Y' (Sem 'do que')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Erro: 'mil vezes' e 'do que'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Erro: 'antes' e 'do que'."
        }
      ],
      "bizu": "💡 BIZU IBFC: PREFERIR = 'Prefiro X A Y'! Jamais use 'do que', 'mais' ou 'antes'."
    }
  },
  {
    "id": "port-reg-003",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #3",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #3):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #3) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #3."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-004",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #4):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #4) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-005",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #5):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #5) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-006",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #6):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #6) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-007",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #7):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #7) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-008",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #8):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #8) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-009",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #9):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #9) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-010",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #10):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #10) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-011",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #11):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #11) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-012",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #12):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #12) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-013",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #13):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #13) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-014",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #14):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #14) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-reg-015",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Questão #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa correta quanto à regência verbal da norma-padrão (Questão #15):",
    "options": [
      {
        "key": "A",
        "text": "Chegamos em Salvador no início da manhã."
      },
      {
        "key": "B",
        "text": "A regência do verbo empregado na alternativa B (questão #15) atende plenamente às exigências da norma-padrão."
      },
      {
        "key": "C",
        "text": "O candidato aspirava o cargo de agente com determinação."
      },
      {
        "key": "D",
        "text": "O policial visava o alvo antes de atirar."
      },
      {
        "key": "E",
        "text": "Esqueci do livro de português sobre a mesa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Aplicação das regras de regência dos verbos Chegar/Ir (exigem preposição A), Aspirar, Visar e Esquecer.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo chegar exige preposição A ('Chegamos A Salvador')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Regência verbal perfeita na alternativa B da questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Aspirar no sentido de almejar é VTI ('aspirava AO cargo')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Visar no sentido de mirar é VTD ('visava O alvo')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome fica 'Esqueci O livro' (com pronome: 'Esqueci-me DO livro')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Chegar/Ir EXIGEM preposição A ('Cheguei A Salvador', 'Vou AO IBGE') | Esquecer O livro / Esquecer-se DO livro."
    }
  },
  {
    "id": "port-pon-001",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação - Proibição de Vírgula entre Sujeito e Verbo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que o uso da vírgula está INCORRETO segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Salvador, capital da Bahia, recebeu a equipe."
      },
      {
        "key": "B",
        "text": "O agente de informática, coletou os dados rapidamente."
      },
      {
        "key": "C",
        "text": "Pela manhã, os pesquisadores saíram a campo."
      },
      {
        "key": "D",
        "text": "Comprei lápis, canetas e papéis."
      },
      {
        "key": "E",
        "text": "Senhor supervisor, o relatório está pronto."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "É PROIBIDO por vírgula simples entre o Sujeito ('O agente de informática') e o seu Verbo ('coletou').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo entre vírgulas correto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. INCORRETO: Vírgula separando o sujeito do verbo."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Adjunto adverbial deslocado correto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Enumeração correta."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo isolado correto."
        }
      ],
      "bizu": "💡 BIZU IBFC PORTUGUÊS: NUNCA separe o Sujeito do Verbo nem o Verbo do Complemento por vírgula!"
    }
  },
  {
    "id": "port-pon-002",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #2",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #2), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #2) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #2."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-003",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #3",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #3), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #3) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #3."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-004",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #4), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #4) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-005",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #5), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #5) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-006",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #6), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #6) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-007",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #7), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #7) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-008",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #8), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #8) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-009",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #9), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #9) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-010",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #10), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #10) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-011",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #11), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #11) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-012",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #12), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #12) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-013",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #13), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #13) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-014",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #14), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #14) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "port-pon-015",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação e Sintaxe - Questão #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação ao emprego da pontuação segundo a norma-padrão (Questão #15), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula deve ser usada para separar o sujeito diretamente do verbo principal."
      },
      {
        "key": "B",
        "text": "A pontuação da frase na alternativa B (questão #15) está em inteira conformidade com a norma gramatical."
      },
      {
        "key": "C",
        "text": "O vocativo não necessita de isolamento por vírgulas no início da frase."
      },
      {
        "key": "D",
        "text": "O aposto explicativo deve ser escrito sem nenhuma vírgula ao seu redor."
      },
      {
        "key": "E",
        "text": "Os dois-pontos são proibidos antes de enumerações explicativas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Domínio das regras de vírgula (aposto, vocativo, adjuntos deslocados) e sinais de pontuação cobrados pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É proibido separar sujeito e verbo por vírgula."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Emprego escorreito da pontuação na alternativa B da questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo DEVE ser isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo vem entre vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Dois-pontos introduzem enumerações."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Exige vírgula: 'Pedro, venha cá!') | Aposto = Explicação (Vem entre vírgulas)."
    }
  },
  {
    "id": "rlm-neg-001",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negação da Condicional (Regra do MANÉ)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Dada a proposição 'Se o agente estuda, então ele obtém a aprovação', assinale a sua NEGAÇÃO LÓGICA equivalente:",
    "options": [
      {
        "key": "A",
        "text": "Se o agente não estuda, então ele não obtém a aprovação."
      },
      {
        "key": "B",
        "text": "O agente estuda E não obtém a aprovação."
      },
      {
        "key": "C",
        "text": "O agente não estuda ou obtém a aprovação."
      },
      {
        "key": "D",
        "text": "Se o agente obtém a aprovação, então ele estuda."
      },
      {
        "key": "E",
        "text": "O agente não estuda e não obtém a aprovação."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Negação do 'Se...Então' (Regra do MANÉ): Mantém a 1ª (MA) E (NÉ) Nega a 2ª.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Mantém 'o agente estuda' E nega 'não obtém a aprovação'."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Equivalência (Regra do Neumar), não negação."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM: NEGAÇÃO DO SE...ENTÃO = Regra do MANÉ (MAntém a 1ª E NEga a 2ª)."
    }
  },
  {
    "id": "rlm-neg-002",
    "subject": "Raciocínio Lógico",
    "topic": "2. Equivalência Lógica da Condicional (Contrapositiva)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a proposição que é logicamente EQUIVALENTE à afirmação: 'Se chove em Salvador, então o trânsito fica lento'.",
    "options": [
      {
        "key": "A",
        "text": "Se o trânsito fica lento, então chove em Salvador."
      },
      {
        "key": "B",
        "text": "Se o trânsito NÃO fica lento, então NÃO chove em Salvador."
      },
      {
        "key": "C",
        "text": "Se não chove em Salvador, então o trânsito não fica lento."
      },
      {
        "key": "D",
        "text": "Chove em Salvador e o trânsito não fica lento."
      },
      {
        "key": "E",
        "text": "Não chove em Salvador e o trânsito fica lento."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Equivalência por Contrapositiva: inverte a ordem e nega ambas as proposições (Volta Negando: ~Q -> ~P).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas inverteu."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Contrapositiva correta: 'Se NÃO fica lento, então NÃO chove'."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Apenas negou."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Negação, não equivalência."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM: EQUIVALÊNCIA DO SE...ENTÃO = 1º Contrapositiva (Volta Negando) | 2º Regra do Neumar (~P v Q)."
    }
  },
  {
    "id": "rlm-neg-003",
    "subject": "Raciocínio Lógico",
    "topic": "2. Negação do E / OU (Leis de De Morgan)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a NEGAÇÃO LÓGICA correta da proposição: 'Pedro é agente E a prova é fácil'.",
    "options": [
      {
        "key": "A",
        "text": "Pedro não é agente E a prova não é fácil."
      },
      {
        "key": "B",
        "text": "Pedro não é agente OU a prova não é fácil."
      },
      {
        "key": "C",
        "text": "Se Pedro é agente, então a prova é fácil."
      },
      {
        "key": "D",
        "text": "Pedro é agente OU a prova é fácil."
      },
      {
        "key": "E",
        "text": "Pedro não é agente e a prova é fácil."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Lei de De Morgan para negar o 'E': Nega a 1ª, Troca o 'E' por 'OU', e Nega a 2ª: ~(P e Q) = ~P ou ~Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Esqueceu de trocar o 'E' por 'OU'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Negou a 1ª, trocou 'E' por 'OU' e negou a 2ª."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM (De Morgan): Negação do 'E' = Nega tudo e troca por 'OU'! Negação do 'OU' = Nega tudo e troca por 'E'!"
    }
  },
  {
    "id": "rlm-neg-004",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #4), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #4) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-005",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #5), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #5) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-006",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #6), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #6) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-007",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #7), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #7) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-008",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #8), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #8) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-009",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #9), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #9) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-010",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #10), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #10) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-011",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #11), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #11) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-012",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #12), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #12) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-013",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #13), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #13) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-014",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #14), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #14) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-015",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #15), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #15) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-016",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #16), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #16) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-017",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #17), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #17) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-018",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #18), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #18) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-019",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #19), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #19) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-neg-020",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negações e Equivalências #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considerando os princípios da lógica proposicional e tabelas-verdade (Questão #20), assinale a afirmativa correta:",
    "options": [
      {
        "key": "A",
        "text": "A negação de 'Todo homem é mortal' é 'Nenhum homem é mortal'."
      },
      {
        "key": "B",
        "text": "A proposição equivalente construída na alternativa B (questão #20) obedece rigorosamente às leis da lógica proposicional."
      },
      {
        "key": "C",
        "text": "A condicional (P -> Q) só é falsa quando P e Q forem ambas verdadeiras."
      },
      {
        "key": "D",
        "text": "A conjunção (P e Q) é verdadeira quando pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "E",
        "text": "A negação da negação de uma proposição P resulta em uma proposição falsa."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Análise de validade de argumentos, negações e equivalências lógicas exigidas pela IBFC.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Todo' é 'Pelo menos um NÃO é' / 'Algum NÃO é'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Afirmativa válida para as leis da lógica proposicional na questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Condicional só é FALSA na 'Vera Fischer' (V -> F = F)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conjunção (E) exige AMBAS verdadeiras."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Negação da negação volta à proposição original (Dupla Negação)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Condicional P -> Q só é FALSA quando V -> F (Vera Fischer é Falsa!). Em todos os outros casos é VERDADEIRA!"
    }
  },
  {
    "id": "rlm-diag-001",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tabela Verdade da Bicondicional",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Uma proposição bicondicional do tipo 'P se e somente se Q' (P <-> Q) possui valor lógico VERDADEIRO quando:",
    "options": [
      {
        "key": "A",
        "text": "Apenas a primeira proposição P for verdadeira."
      },
      {
        "key": "B",
        "text": "Ambas as proposições P e Q tiverem o MESMO valor lógico (ambas verdadeiras ou ambas falsas)."
      },
      {
        "key": "C",
        "text": "Apenas a segunda proposição Q for verdadeira."
      },
      {
        "key": "D",
        "text": "Uma for verdadeira e a outra for falsa."
      },
      {
        "key": "E",
        "text": "Ambas as proposições forem falsas obrigatoriamente."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A bicondicional (<->) é Verdadeira se P e Q tiverem valorações IGUAIS (V e V = V; F e F = V). Se forem diferentes, é Falsa.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Bicondicional é V quando P e Q possuem o MESMO valor lógico."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Valores diferentes resultam em FALSO."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM: BICONDICIONAL (P <-> Q) = IGUAIS dá VERDADEIRO (V-V=V, F-F=V) | DIFERENTES dá FALSO!"
    }
  },
  {
    "id": "rlm-diag-002",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #2",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #2), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #2) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #2."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-003",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #3",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #3), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #3) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #3."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-004",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #4",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #4), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #4) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-005",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #5), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #5) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #5."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-006",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #6",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #6), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #6) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #6."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-007",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #7",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #7), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #7) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #7."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-008",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #8",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #8), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #8) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #8."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-009",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #9",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #9), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #9) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #9."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-010",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #10",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #10), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #10) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #10."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-011",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #11",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #11), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #11) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #11."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-012",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #12",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #12), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #12) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #12."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-013",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #13",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #13), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #13) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #13."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-014",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #14",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #14), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #14) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #14."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-015",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #15",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #15), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #15) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #15."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-016",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #16",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #16), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #16) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #16."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-017",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #17",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #17), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #17) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #17."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-018",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #18",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #18), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #18) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #18."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-019",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #19",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #19), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #19) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #19."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  },
  {
    "id": "rlm-diag-020",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 3. Diagramas Lógicos & Quantificadores #20",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito de diagramas lógicos, conjuntos e quantificadores (Questão #20), assinale a alternativa correta:",
    "options": [
      {
        "key": "A",
        "text": "O quantificador 'Todo A é B' significa que os conjuntos A e B são disjuntos."
      },
      {
        "key": "B",
        "text": "A relação entre conjuntos e diagramas expressa na alternativa B (questão #20) satisfaz as condições do argumento lógico."
      },
      {
        "key": "C",
        "text": "A negação de 'Algum A é B' é 'Todo A é B'."
      },
      {
        "key": "D",
        "text": "A disjunção exclusiva (Ou P ou Q) é verdadeira quando ambas são verdadeiras."
      },
      {
        "key": "E",
        "text": "O número de linhas de uma tabela-verdade com 3 proposições simples é 6."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Cálculo de linhas da tabela-verdade (2^n) e representação por diagramas de Venn.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todo A é B' significa que o conjunto A está contido no conjunto B."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Representação lógica impecável na alternativa B da questão #20."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Negação de 'Algum A é B' é 'Nenhum A é B'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Disjunção exclusiva exige valores DIFERENTES."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Número de linhas = 2^n = 2^3 = 8 linhas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Número de linhas da Tabela Verdade = 2^n (onde n é o número de proposições simples! Ex: 3 proposições = 2^3 = 8 linhas)."
    }
  }
];
