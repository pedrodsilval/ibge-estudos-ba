import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  {
    "id": "inf-hw-001",
    "subject": "Informática",
    "topic": "1. Hardware - Processador (CPU)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito dos componentes da Unidade Central de Processamento (CPU) de um microcomputador, assinale a alternativa que indica o elemento responsável por armazenar dados e instruções em uso imediato pelo próprio núcleo do processador, operando na mesma frequência do clock interno:",
    "options": [
      {
        "key": "A",
        "text": "Memória RAM DDR4"
      },
      {
        "key": "B",
        "text": "Unidade Lógica e Aritmética (ULA)"
      },
      {
        "key": "C",
        "text": "Registradores"
      },
      {
        "key": "D",
        "text": "Disco Rígido (HD)"
      },
      {
        "key": "E",
        "text": "Memória Flash ROM"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Os Registradores são pequenas unidades de memória integradas ao próprio núcleo da CPU. Possuem a menor capacidade e a maior velocidade de acesso de toda a arquitetura de computadores.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. A RAM fica fora do núcleo do processador e é mais lenta que os registradores."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. A ULA realiza cálculos matemáticos e testes lógicos, mas não armazena dados."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Registradores = Maior velocidade de acesso, integrados ao núcleo da CPU."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. O HD é unidade de armazenamento secundário magnética externa."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A memória ROM armazena o firmware da BIOS."
        }
      ],
      "bizu": "💡 BIZU IBFC: Registradores > Cache (L1/L2/L3) > RAM > SSD > HD (Do mais rápido ao mais lento)."
    }
  },
  {
    "id": "inf-hw-002",
    "subject": "Informática",
    "topic": "1. Hardware - Memória RAM vs ROM",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No que tange às características técnicas das memórias RAM e ROM em microcomputadores padrão PC, assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A memória RAM é não volátil e mantém seus dados preservados mesmo sem energia elétrica."
      },
      {
        "key": "B",
        "text": "A memória ROM é volátil e perde seus dados quando o computador é desligado."
      },
      {
        "key": "C",
        "text": "A memória ROM permite a gravação constante de arquivos do usuário durante o uso do Windows."
      },
      {
        "key": "D",
        "text": "A memória RAM armazena o programa de inicialização da placa-mãe (BIOS/UEFI)."
      },
      {
        "key": "E",
        "text": "A memória RAM é uma memória de leitura e escrita principal, de caráter volátil."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A memória RAM (Random Access Memory) é a memória principal de trabalho, volátil (perde o conteúdo sem energia) e permite leitura e escrita. A ROM (Read Only Memory) é não volátil e armazena a BIOS.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. A RAM é volátil (perde os dados ao desligar)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. A ROM é NÃO volátil."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. A ROM armazena instruções de fábrica e não arquivos do usuário."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. A BIOS fica gravada na ROM, não na RAM."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. RAM = Leitura/Escrita, volátil, memória de trabalho."
        }
      ],
      "bizu": "💡 BIZU IBFC: RAM = Volátil (Apaga sem luz) | ROM = Read Only (Não volátil, grava a BIOS/UEFI)."
    }
  },
  {
    "id": "inf-hw-003",
    "subject": "Informática",
    "topic": "2. Hardware - Armazenamento SSD vs HD",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Os discos de estado sólido (SSD) vêm substituindo os discos rígidos tradicionais (HD) nos computadores do IBGE. Qual das alternativas apresenta uma característica exclusiva e correta do SSD?",
    "options": [
      {
        "key": "A",
        "text": "Possui um prato magnético giratório que necessita de desfragmentação semanal."
      },
      {
        "key": "B",
        "text": "Utiliza feixe de luz laser para a leitura de células ópticas."
      },
      {
        "key": "C",
        "text": "É uma memória de trabalho volátil que apaga ao reiniciar o Windows."
      },
      {
        "key": "D",
        "text": "Conecta-se exclusivamente através da porta de áudio P2."
      },
      {
        "key": "E",
        "text": "Armazena dados em chips de memória flash NAND sem partes mecânicas móveis."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Os SSDs utilizam memórias semicondutoras do tipo Flash (NAND). Por não possuírem partes mecânicas (ao contrário do HD magnético), são mais rápidos, silenciosos e resistentes a choques físicos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. HDs possuem pratos magnéticos; SSDs não possuem discos e NUNCA devem ser desfragmentados."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Laser é utilizado em mídias ópticas (CD/DVD/Blu-ray)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. SSD é armazenamento permanente (não volátil)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Conecta-se via SATA, M.2 ou NVMe."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. SSD = Chips de memória flash NAND sem peças móveis."
        }
      ],
      "bizu": "💡 BIZU IBFC: SSD = Memória Flash | Sem partes móveis | Não Volátil | Alta resistência física."
    }
  },
  {
    "id": "inf-hw-004",
    "subject": "Informática",
    "topic": "2. Hardware - Dispositivos de Entrada e Saída",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No manuseio de periféricos conectados a um computador de trabalho, assinale a opção que indica um dispositivo classificado EXCLUSIVAMENTE como de Entrada de dados:",
    "options": [
      {
        "key": "A",
        "text": "Monitor de vídeo LED comum (sem função de toque)"
      },
      {
        "key": "B",
        "text": "Impressora Multifuncional jato de tinta"
      },
      {
        "key": "C",
        "text": "Caixa de som estéreo USB"
      },
      {
        "key": "D",
        "text": "Projetor datashow HDMI"
      },
      {
        "key": "E",
        "text": "Scanner de mesa para digitalização"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Dispositivos de Entrada (Input) enviam dados do mundo externo para o computador. O Scanner capta imagens/documentos e os envia ao sistema. Monitor comum, impressora simples e caixas de som são de saída.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Monitor comum é dispositivo de SAÍDA."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Multifuncional possui scanner (entrada) e impressora (saída), sendo MISTO."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Caixa de som é dispositivo de SAÍDA de áudio."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Projetor é dispositivo de SAÍDA de imagem."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Scanner de mesa = Periférico exclusivo de ENTRADA."
        }
      ],
      "bizu": "💡 BIZU IBFC: ENTRADA = Teclado, Mouse, Scanner, Microfone | SAÍDA = Monitor comum, Impressora comum, Caixas de som | MISTO = Touchscreen, Multifuncional."
    }
  },
  {
    "id": "inf-hw-005",
    "subject": "Informática",
    "topic": "2. Hardware - Dispositivo Misto (Input/Output)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que indica um periférico classificado como MISTO (dispositivo de Entrada e de Saída de dados simultaneamente):",
    "options": [
      {
        "key": "A",
        "text": "Monitor de tela sensível ao toque (Touchscreen)"
      },
      {
        "key": "B",
        "text": "Teclado numérico USB"
      },
      {
        "key": "C",
        "text": "Mouse óptico sem fio"
      },
      {
        "key": "D",
        "text": "Plotter de impressão de mapas em grande formato, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "E",
        "text": "Microfone de lapela analógico"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O monitor Touchscreen exibe informações (Saída) e aceita comandos ao tocar na tela (Entrada), sendo um periférico misto (Input/Output).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Touchscreen = Exibe imagem (Saída) e recebe toques do usuário (Entrada)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é exclusivo de Entrada."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Mouse é exclusivo de Entrada."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Plotter é impressora de grande porte (exclusivo de Saída)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Microfone é exclusivo de Entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: MISTOS (E/S) = Touchscreen, Impressora Multifuncional, Pendrive/HD Externo, Placa de Rede, Headset (Fone + Mic)."
    }
  },
  {
    "id": "inf-hw-006",
    "subject": "Informática",
    "topic": "1. Hardware - Memória Cache (L1, L2, L3)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A respeito da memória Cache presente nos processadores modernos de arquitetura x86/x64, assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "Possui capacidade de armazenamento medida em Terabytes (TB) para guardar arquivos do usuário."
      },
      {
        "key": "B",
        "text": "É uma memória intermediária ultrarrápida localizada entre os registradores/núcleo da CPU e a memória RAM."
      },
      {
        "key": "C",
        "text": "Substitui a necessidade da memória ROM no momento de carregar a BIOS."
      },
      {
        "key": "D",
        "text": "É gravada permanentemente na fábrica e não pode ter seu conteúdo alterado."
      },
      {
        "key": "E",
        "text": "Opera na mesma velocidade de leitura de uma fita magnética de backup, de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A memória Cache diminui o gargalo de velocidade entre o processador (muito rápido) e a RAM (mais lenta). Divide-se em níveis L1 (mais rápida/menor), L2 e L3 (maior/compartilhada).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Cache mede-se em Megabytes (MB)."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Cache = Memória estática SRAM ultrarrápida entre a CPU e a RAM."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não substitui a ROM."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. É memória RAM estática (volátil)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. É incomparavelmente mais rápida que fitas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Hierarquia de Memória Cache: L1 (Mais rápida, integrada ao núcleo) < L2 < L3 (Maior capacidade, compartilhada)."
    }
  },
  {
    "id": "inf-hw-007",
    "subject": "Informática",
    "topic": "1. Hardware - Barramentos USB-C e Thunderbolt",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual das alternativas apresenta uma vantagem tecnológica do conector USB Tipo-C (USB-C) adotado nos novos tablets e computadores de coleta do IBGE?",
    "options": [
      {
        "key": "A",
        "text": "Compatibilidade mecânica exclusiva com discos disquetes de 3,5 polegadas."
      },
      {
        "key": "B",
        "text": "Necessidade de utilizar adaptador de alta voltagem de 220V obrigatoriamente."
      },
      {
        "key": "C",
        "text": "Transmissão analógica de dados limitada a 56 Kbps."
      },
      {
        "key": "D",
        "text": "Encaixe reversível (pode ser inserido em qualquer orientação) e capacidade de transmitir dados, vídeo e energia no mesmo cabo."
      },
      {
        "key": "E",
        "text": "Uso exclusivo em impressoras matriciais de formulário contínuo, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O conector USB-C é simétrico/reversível e suporta os protocolos USB 3.2/4 e Thunderbolt, permitindo altas taxas de transferência de dados, carregamento (Power Delivery) e saída de vídeo (DisplayPort).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. USB-C = Reversível, dados de alta velocidade, vídeo e alimentação elétrica."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: USB-C = Conector reversível | Suporta dados, energia (Power Delivery) e sinal de vídeo."
    }
  },
  {
    "id": "inf-hw-008",
    "subject": "Informática",
    "topic": "2. Hardware - SSD NVMe vs SATA III",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos padrões de conexão dos discos SSD em computadores corporativos, o protocolo NVMe (Non-Volatile Memory Express) supera o padrão SATA III porque:",
    "options": [
      {
        "key": "A",
        "text": "Conecta-se através do cabo telefônico RJ-11 padrão dial-up."
      },
      {
        "key": "B",
        "text": "Exige que o computador esteja conectado a uma rede Wi-Fi de 5 GHz."
      },
      {
        "key": "C",
        "text": "Funciona apenas em sistemas operacionais descontinuados como Windows XP, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "D",
        "text": "Utiliza o leitor de cartão magnético da placa de som."
      },
      {
        "key": "E",
        "text": "Utiliza o barramento PCI Express (PCIe) de alta velocidade, permitindo menor latência e taxas de transferência superiores a 3000 MB/s."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O NVMe foi desenvolvido especificamente para memórias flash utilizando as linhas diretas do barramento PCI Express (PCIe), eliminando o gargalo do antigo controlador SATA III (limitado a ~550 MB/s).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. NVMe utiliza o barramento PCIe, oferecendo baixíssima latência e altíssimas velocidades."
        }
      ],
      "bizu": "💡 BIZU IBFC: SATA III = Máximo ~550 MB/s | NVMe (PCIe) = Ultrapassa 3500 a 7000 MB/s."
    }
  },
  {
    "id": "inf-hw-009",
    "subject": "Informática",
    "topic": "2. Hardware - Nobreak (UPS) Senoidal",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Para proteger os servidores de banco de dados do IBGE contra quedas repentinas de energia elétrica e picos de voltagem, utiliza-se o equipamento denominado:",
    "options": [
      {
        "key": "A",
        "text": "Switch gerenciável L2"
      },
      {
        "key": "B",
        "text": "Nobreak (UPS - Uninterruptible Power Supply)"
      },
      {
        "key": "C",
        "text": "Placa de captura de vídeo HDMI, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "Modem ADSL2+"
      },
      {
        "key": "E",
        "text": "Extensão elétrica de tomada comum"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Nobreak (UPS) contém baterias internas que fornecem energia elétrica ininterrupta aos equipamentos durante apagões, permitindo salvar dados e desligar o sistema com segurança.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Nobreak / UPS = Fornece energia temporária por baterias e filtra picos de tensão."
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
      "bizu": "💡 BIZU IBFC: Nobreak (UPS) = Alimentação de emergência por bateria + Proteção contra surtos elétricos."
    }
  },
  {
    "id": "inf-hw-010",
    "subject": "Informática",
    "topic": "1. Hardware - Arquitetura 32 bits vs 64 bits",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A principal limitação prática de um sistema operacional rodando em arquitetura de 32 bits (x86) em relação à quantidade de memória RAM reconhecida é:",
    "options": [
      {
        "key": "A",
        "text": "Suporta no máximo 128 Terabytes (TB) de memória RAM."
      },
      {
        "key": "B",
        "text": "Suporta no máximo 4 Gigabytes (GB) de memória RAM endereçável."
      },
      {
        "key": "C",
        "text": "Não permite a instalação de nenhum tipo de memória RAM, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "D",
        "text": "Exige o uso exclusivo de monitores em preto e branco."
      },
      {
        "key": "E",
        "text": "Impede o salvamento de arquivos de texto no disco rígido."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Sistemas de 32 bits possuem o limite teórico de endereçamento de 2^32 bytes, o que equivale a exatamente 4 GB de memória RAM. Para utilizar 8 GB, 16 GB ou mais, é obrigatório utilizar sistema de 64 bits (x64).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. 32 bits (x86) = Limite máximo de 4 GB de RAM."
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
      "bizu": "💡 BIZU IBFC: 32 bits (x86) = Limite de 4 GB RAM | 64 bits (x64) = Reconhece acima de 4 GB RAM (Terabytes)."
    }
  },
  {
    "id": "inf-hw-011",
    "subject": "Informática",
    "topic": "2. Hardware - Placa-Mãe e Chipset",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na placa-mãe de um microcomputador, o componente responsável por interconectar o processador, a memória RAM e os slots de expansão aos demais periféricos é denominado:",
    "options": [
      {
        "key": "A",
        "text": "Chipset (Ponte Norte / Ponte Sul ou Hub de Controladores)"
      },
      {
        "key": "B",
        "text": "Cooler de Cobre"
      },
      {
        "key": "C",
        "text": "Fonte de Alimentação ATX"
      },
      {
        "key": "D",
        "text": "Gabinete Mid-Tower"
      },
      {
        "key": "E",
        "text": "Cabo de Rede UTP Cat6, de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Chipset é o conjunto de circuitos integrados da placa-mãe encarregado de controlar a comunicação entre a CPU, memórias, barramentos de expansão e periféricos I/O.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Chipset = Circuito integrado que gerencia o fluxo de dados na placa-mãe."
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
      "bizu": "💡 BIZU IBFC: Placa-Mãe (Motherboard) = Placa principal | Chipset = Gerenciador de comunicação dos barramentos."
    }
  },
  {
    "id": "inf-hw-012",
    "subject": "Informática",
    "topic": "2. Hardware - Teclado Padrão ABNT2",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A característica física que diferencia o teclado brasileiro padrão ABNT2 do padrão ABNT (ou americano US) é a presença da:",
    "options": [
      {
        "key": "A",
        "text": "Tecla de espaço dividida em três partes físicas, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "Ausência completa das teclas de função de F1 a F12."
      },
      {
        "key": "C",
        "text": "Tecla exclusiva Alt Gr e da tecla com o caractere 'Ç'."
      },
      {
        "key": "D",
        "text": "Presença de uma tela LCD colorida sobre a tecla Enter."
      },
      {
        "key": "E",
        "text": "Eliminação da barra de espaço inferior."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O layout ABNT2 brasileiro possui a tecla dedicada do 'Ç' (ao lado do L) e a tecla 'Alt Gr' (para caracteres terceiros como ª, º, ²), ao contrário do teclado americano que exige acento cedilha + C.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. ABNT2 = Possui tecla 'Ç' física e tecla 'Alt Gr'."
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
      "bizu": "💡 BIZU IBFC: Teclado ABNT2 = Possui a tecla física Ç ao lado do 'L' e suporte a Alt Gr."
    }
  },
  {
    "id": "inf-so-001",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Exclusão Definitiva (Shift + Delete)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao selecionar um arquivo no Explorador de Arquivos do Windows 10/11 e pressionar a combinação de teclas SHIFT + DELETE, o sistema operacional irá:",
    "options": [
      {
        "key": "A",
        "text": "Mover o arquivo para a Lixeira, onde poderá ser recuperado posteriormente."
      },
      {
        "key": "B",
        "text": "Criar uma cópia oculta do arquivo no diretório Raiz C:\\."
      },
      {
        "key": "C",
        "text": "Renomear o arquivo com a extensão .TMP automaticamente."
      },
      {
        "key": "D",
        "text": "Compactar o arquivo no formato .ZIP."
      },
      {
        "key": "E",
        "text": "Excluir o arquivo permanentemente sem enviá-lo para a Lixeira."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A combinação `Shift + Delete` apaga o arquivo diretamente do armazenamento, ignorando a Lixeira do Windows.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. A tecla `Delete` isolada envia para a Lixeira."
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
          "isCorrect": true,
          "reason": "CORRETA. `Shift + Delete` = Exclusão permanente direta sem Lixeira."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Delete` = Envia para Lixeira | `Shift + Delete` = Apaga direto permanentemente."
    }
  },
  {
    "id": "inf-so-002",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Gerenciador de Tarefas (Ctrl + Shift + Esc)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O atalho de teclado direto para abrir o Gerenciador de Tarefas no Windows 10 e 11 sem passar por telas intermediárias de segurança é:",
    "options": [
      {
        "key": "A",
        "text": "Alt + F4, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "Ctrl + Shift + Esc"
      },
      {
        "key": "C",
        "text": "Ctrl + Alt + Del"
      },
      {
        "key": "D",
        "text": "Win + Tab"
      },
      {
        "key": "E",
        "text": "Ctrl + P"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "`Ctrl + Shift + Esc` abre instantaneamente o Gerenciador de Tarefas no Windows.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Alt + F4` fecha janela."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + Shift + Esc` = Gerenciador de Tarefas direto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Alt + Del` abre a tela azul de opções de segurança."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Win + Tab` é Visão de Tarefas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + P` imprime."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Shift + Esc` = Abre Gerenciador de Tarefas DIRETO! | `Ctrl + Alt + Del` = Tela de Opções de Segurança."
    }
  },
  {
    "id": "inf-so-003",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Historico da Area de Transferencia (Win + V)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Windows 10 e 11, o recurso que permite visualizar e colar múltiplos itens copiados anteriormente (textos e imagens) é ativado pelo atalho:",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + V"
      },
      {
        "key": "B",
        "text": "Win + V"
      },
      {
        "key": "C",
        "text": "Alt + V"
      },
      {
        "key": "D",
        "text": "Shift + V"
      },
      {
        "key": "E",
        "text": "Ctrl + Shift + V"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "`Win + V` abre o Histórico da Área de Transferência do Windows, permitindo selecionar entre vários textos/imagens copiados recentemente.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + V` cola apenas o último item copiado."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Win + V` = Histórico da Área de Transferência (Múltiplos Copiar/Colar)."
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
      "bizu": "💡 BIZU IBFC: `Ctrl + V` = Cola o ÚLTIMO item | `Win + V` = Abre HISTÓRICO da Área de Transferência."
    }
  },
  {
    "id": "inf-so-004",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Atalho Renomear Arquivo (F2)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Explorador de Arquivos do Windows 10/11, a tecla de atalho utilizada para RENOMEAR um arquivo ou pasta selecionado é:",
    "options": [
      {
        "key": "A",
        "text": "F5"
      },
      {
        "key": "B",
        "text": "F11"
      },
      {
        "key": "C",
        "text": "F1"
      },
      {
        "key": "D",
        "text": "F2"
      },
      {
        "key": "E",
        "text": "F12"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "A tecla `F2` ativa a edição do nome do arquivo selecionado.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `F5` atualiza a janela (Refresh)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `F11` alterna para Tela Cheia."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `F1` abre Ajuda."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. `F2` = Renomear arquivo ou pasta."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `F12` costuma ser Salvar Como."
        }
      ],
      "bizu": "💡 BIZU IBFC: `F2` = Renomear | `F5` = Atualizar | `F11` = Tela Cheia | `F1` = Ajuda."
    }
  },
  {
    "id": "inf-so-005",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Minimizar Todas as Janelas (Win + D)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Qual a combinação de teclas no Windows 10/11 que oculta/minimiza todas as janelas abertas e exibe imediatamente a Área de Trabalho (Desktop)?",
    "options": [
      {
        "key": "A",
        "text": "Win + D"
      },
      {
        "key": "B",
        "text": "Alt + Tab"
      },
      {
        "key": "C",
        "text": "Ctrl + N"
      },
      {
        "key": "D",
        "text": "Win + L"
      },
      {
        "key": "E",
        "text": "Alt + Enter"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "`Win + D` alterna para a Área de Trabalho (Desktop), minimizando ou restaurando todas as janelas ativas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Win + D` = Mostrar/Ocultar a Área de Trabalho (Desktop)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Alt + Tab` alterna janelas."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Win + L` bloqueia a tela."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + D` = Desktop (Mostrar Área de Trabalho) | `Win + M` = Minimizar todas as janelas."
    }
  },
  {
    "id": "inf-so-006",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Abrir Explorador de Arquivos (Win + E)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que indica o atalho de teclado para abrir o Explorador de Arquivos (File Explorer) no Windows 10 e 11:",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + E"
      },
      {
        "key": "B",
        "text": "Alt + E"
      },
      {
        "key": "C",
        "text": "Win + F"
      },
      {
        "key": "D",
        "text": "Ctrl + Shift + E"
      },
      {
        "key": "E",
        "text": "Win + E"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "`Win + E` ('E' de Explorer) abre a janela do Explorador de Arquivos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. `Win + E` = Explorador de Arquivos (File Explorer)."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + E` = Explorer (Explorador de Arquivos)."
    }
  },
  {
    "id": "inf-so-007",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Atalho Bloquear Tela (Win + L)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao se ausentar temporariamente de sua mesa de trabalho no IBGE, qual atalho de teclado o agente deve utilizar para BLOQUEAR rapidamente a sessão do Windows sem fechar seus programas abertos?",
    "options": [
      {
        "key": "A",
        "text": "Win + E"
      },
      {
        "key": "B",
        "text": "Win + L"
      },
      {
        "key": "C",
        "text": "Ctrl + W"
      },
      {
        "key": "D",
        "text": "Alt + F4"
      },
      {
        "key": "E",
        "text": "Ctrl + Shift + Esc"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O atalho `Win + L` ('L' de Lock) bloqueia a tela do computador, exigindo a senha ou biometria para retornar à sessão atual.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Win + L` = Bloquear a sessão/computador instantaneamente."
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
      "bizu": "💡 BIZU IBFC: `Win + L` = Lock (Bloquear tela) | `Win + E` = Explorer | `Win + D` = Desktop."
    }
  },
  {
    "id": "inf-so-008",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Ferramenta de Captura (Win + Shift + S)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Windows 10 e 11, qual a combinação de teclas utilizada para abrir a Ferramenta de Captura (Snip & Sketch), permitindo recortar uma área personalizada da tela?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + Alt + PrintScreen"
      },
      {
        "key": "B",
        "text": "Win + P"
      },
      {
        "key": "C",
        "text": "Win + Shift + S"
      },
      {
        "key": "D",
        "text": "Ctrl + Shift + N"
      },
      {
        "key": "E",
        "text": "Alt + Shift + S"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "`Win + Shift + S` abre a barra de captura retangular, livre ou de tela cheia do Windows, salvando a imagem capturada diretamente na Área de Transferência.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. `Win + Shift + S` = Atalho da Ferramenta de Captura de Tela do Windows."
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
      "bizu": "💡 BIZU IBFC: `Win + Shift + S` = Captura de Tela / Print Recortado | `Win + P` = Projeção em Monitores/Datashow."
    }
  },
  {
    "id": "inf-so-009",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Visão de Tarefas (Win + Tab)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença principal entre as combinações de atalho ALT + TAB e WIN + TAB no Windows 10/11?",
    "options": [
      {
        "key": "A",
        "text": "O Alt + Tab desliga o computador e o Win + Tab fecha todas as janelas, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "O Alt + Tab alterna rapidamente entre as janelas abertas; já o Win + Tab abre a Visão de Tarefas, permitindo gerenciar Desktops Virtuais e a linha do tempo."
      },
      {
        "key": "C",
        "text": "O Win + Tab funciona apenas com a internet desligada."
      },
      {
        "key": "D",
        "text": "Ambos realizam exatamente a mesma função sem nenhuma diferença visual."
      },
      {
        "key": "E",
        "text": "O Alt + Tab altera a resolução gráfica do monitor."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "`Alt + Tab` exibe uma miniatura rápida das janelas para alternância simples. `Win + Tab` abre a Visão de Tarefas (Task View), onde é possível criar e alternar entre múltiplas Áreas de Trabalho Virtuais.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Alt + Tab = Alterna janelas | Win + Tab = Visão de Tarefas e Desktops Virtuais."
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
      "bizu": "💡 BIZU IBFC: `Alt + Tab` = Alternar janelas rápida | `Win + Tab` = Visão de Tarefas (Desktops Virtuais)."
    }
  },
  {
    "id": "inf-so-010",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Configurações vs Painel de Controle",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Windows 10 e 11, o aplicativo 'Configurações' (acessado pelo atalho WIN + I) foi projetado para:",
    "options": [
      {
        "key": "A",
        "text": "Formatador exclusivo de pen drives em formato Linux EXT4."
      },
      {
        "key": "B",
        "text": "Impedir a instalação de antivírus terceiros, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "Substituir gradualmente o Painel de Controle tradicional, oferecendo uma interface moderna para personalização, redes, contas e atualizações."
      },
      {
        "key": "D",
        "text": "Gerenciar a velocidade do cooler da placa de vídeo em tempo real."
      },
      {
        "key": "E",
        "text": "Excluir o registro do Windows permanentemente."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O aplicativo Configurações (`Win + I`) é a central moderna de ajustes do Windows 10/11, centralizando personalização, contas, atualizações (Windows Update) e privacidade.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Configurações (`Win + I`) = Central moderna de ajustes que substitui gradualmente o Painel de Controle."
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
      "bizu": "💡 BIZU IBFC: Atalho das Configurações = `Win + I` (I de Iniciar/Informações de Configuração)."
    }
  },
  {
    "id": "inf-so-011",
    "subject": "Informática",
    "topic": "10. Extensões de Arquivos Padrão",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que associa corretamente o tipo de arquivo à sua extensão padrão no ambiente Windows:",
    "options": [
      {
        "key": "A",
        "text": "Arquivo de texto sem formatação = .EXE"
      },
      {
        "key": "B",
        "text": "Documento do Microsoft Word = .DOCX"
      },
      {
        "key": "C",
        "text": "Planilha do Microsoft Excel = .PDF"
      },
      {
        "key": "D",
        "text": "Arquivo compactado de dados = .TXT"
      },
      {
        "key": "E",
        "text": "Documento do Adobe Acrobat = .XLSX"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": ".DOCX é a extensão padrão dos documentos do Word. .TXT é texto simples, .XLSX é planilha do Excel, .PDF é documento portátil do Acrobat, .ZIP/.RAR são arquivos compactados.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. .DOCX = Documento do Microsoft Word."
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
      "bizu": "💡 BIZU IBFC (EXTENSÕES): Word = .DOCX | Excel = .XLSX | Texto Simples = .TXT | Leitor PDF = .PDF | Executável = .EXE | Compactado = .ZIP / .RAR."
    }
  },
  {
    "id": "inf-so-012",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Atributo de Arquivo Oculto",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Explorador de Arquivos do Windows 10/11, para visualizar os arquivos e pastas marcados com o atributo 'Oculto', o usuário deve acessar o menu superior de navegação e selecionar:",
    "options": [
      {
        "key": "A",
        "text": "Guia Inserir -> Clicar no botão 'Revelar Segredos'."
      },
      {
        "key": "B",
        "text": "Guia Arquivo -> Selecionar 'Formatar Unidade', considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "Guia Exibir -> Marcar a caixa de seleção 'Itens Ocultos'."
      },
      {
        "key": "D",
        "text": "Pressionar as teclas Alt + F4 três vezes."
      },
      {
        "key": "E",
        "text": "Desligar o monitor de vídeo por 10 segundos."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Na guia 'Exibir' da faixa de opções do Explorador de Arquivos do Windows 10/11, basta marcar a caixa 'Itens Ocultos' para tornar visíveis os arquivos protegidos com esse atributo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Guia Exibir -> Marcar a opção 'Itens Ocultos'."
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
      "bizu": "💡 BIZU IBFC: Para ver pastas ocultas no Windows: Guia Exibir -> Caixa de seleção 'Itens Ocultos'."
    }
  },
  {
    "id": "inf-so-013",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Otimizador de Drive TRIM em SSD",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação à manutenção de discos de armazenamento no Windows 10/11, qual o procedimento correto recomendado para discos SSD (Solid State Drive)?",
    "options": [
      {
        "key": "A",
        "text": "Executar o comando de Desfragmentação tradicional de disco diariamente."
      },
      {
        "key": "B",
        "text": "Formatar o SSD em FAT16 a cada 15 dias."
      },
      {
        "key": "C",
        "text": "Mergulhar o drive SSD em água destilada para resfriamento."
      },
      {
        "key": "D",
        "text": "Desativar permanentemente todas as atualizações de drivers, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "E",
        "text": "Executar a Otimização com o comando TRIM habilitado, evitando a desfragmentação pesada que desgasta a memória flash."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Discos SSD não possuem partes mecânicas e não se beneficiam da desfragmentação tradicional (que desgasta os ciclos de escrita). O Windows aplica o comando TRIM para otimizar os blocos vagos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. SSD = Utiliza TRIM para otimização; NÃO deve sofrer desfragmentação pesada."
        }
      ],
      "bizu": "💡 BIZU IBFC: HD = Pode ser Desfragmentado | SSD = Utiliza comando TRIM para otimização (NÃO desfragmentar)."
    }
  },
  {
    "id": "inf-so-014",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Lixeira do Windows",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Quando um arquivo armazenado no Disco Rígido interno (C:) é deletado pressionando apenas a tecla DELETE, ele é enviado para a Lixeira. Sobre o comportamento da Lixeira, assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "Arquivos apagados de pen drives externos entram automaticamente para a Lixeira do C:, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "A Lixeira é capaz de armazenar arquivos sem nenhum limite de tamanho."
      },
      {
        "key": "C",
        "text": "A Lixeira limpa o computador contra todos os vírus de macro."
      },
      {
        "key": "D",
        "text": "Os arquivos da Lixeira são impressos automaticamente em papel."
      },
      {
        "key": "E",
        "text": "Os arquivos na Lixeira continuam ocupando espaço no disco até que a Lixeira seja esvaziada."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A Lixeira é uma pasta especial do sistema. Enquanto os arquivos permanecerem nela, eles continuam consumindo espaço no HD até a exclusão definitiva ('Esvaziar Lixeira'). Arquivos de pen drives são excluídos diretamente.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Pen drives/mídias removíveis NÃO enviam para a Lixeira (são apagados direto)."
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
          "isCorrect": true,
          "reason": "CORRETA. Arquivos na Lixeira continuam ocupando espaço em disco até o esvaziamento."
        }
      ],
      "bizu": "💡 BIZU IBFC (LIXEIRA): Discos internos = Envia para Lixeira | Pen Drives/Cartões de Memória = Apaga DIRETO sem Lixeira!"
    }
  },
  {
    "id": "inf-so-015",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Modos de Economia (Suspender vs Hibernar)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No gerenciamento de energia do Windows 10/11 em notebooks, a diferença principal entre HIBERNAR e SUSPENDER é:",
    "options": [
      {
        "key": "A",
        "text": "Suspender salva os dados na memória RAM (baixo consumo); Hibernar salva os dados no Disco Rígido (SSD/HD) e desliga o computador completamente."
      },
      {
        "key": "B",
        "text": "Hibernar apaga todos os documentos sem salvar."
      },
      {
        "key": "C",
        "text": "Suspender consome mais energia que deixar o computador ligado em 100%."
      },
      {
        "key": "D",
        "text": "Hibernar é usado apenas quando o notebook está conectado à impressora."
      },
      {
        "key": "E",
        "text": "Ambos realizam a formatação completa do sistema, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Suspender coloca a máquina em estado de baixo consumo mantendo a RAM energizada. Hibernar salva a imagem da memória RAM no arquivo `hiberfil.sys` do SSD/HD e desliga a energia por completo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Suspender = Salva estado na RAM (gasta pouca luz) | Hibernar = Salva estado no SSD/HD e desliga 100%."
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
      "bizu": "💡 BIZU IBFC: Suspender = Dados na RAM | Hibernar = Dados no SSD/HD (`hiberfil.sys`) e desliga a alimentação."
    }
  },
  {
    "id": "inf-and-001",
    "subject": "Informática",
    "topic": "4. Android 13+ - Permissão de Notificações",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No sistema operacional móvel Android 13 (ou superior), utilizado nos dispositivos de coleta do IBGE, qual a alteração de segurança implementada em relação às Notificações?",
    "options": [
      {
        "key": "A",
        "text": "Os aplicativos são proibidos de enviar notificações sonoras."
      },
      {
        "key": "B",
        "text": "As notificações são convertidas automaticamente em mensagens de SMS."
      },
      {
        "key": "C",
        "text": "É obrigatório conectar o smartphone à tomada para receber notificações."
      },
      {
        "key": "D",
        "text": "O envio de notificações passou a exigir autorização prévia e explícita do usuário (permissão runtime POST_NOTIFICATIONS)."
      },
      {
        "key": "E",
        "text": "Notificações só funcionam com a tela desbloqueada, conforme as especificações técnicas de homologação do ambiente de redes."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. No Android 13+, apps precisam de autorização prévia para enviar notificações."
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
    "topic": "4. Android 13+ - Seletor de Fotos (Photo Picker)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O recurso 'Seletor de Fotos' (Photo Picker), aprimorado no Android 13+, tem como principal objetivo de privacidade:",
    "options": [
      {
        "key": "A",
        "text": "Permitir que o aplicativo acesse todos os arquivos e documentos da memória interna do celular."
      },
      {
        "key": "B",
        "text": "Apagar as fotos antigas após 24 horas de uso."
      },
      {
        "key": "C",
        "text": "Permitir ao usuário compartilhar apenas fotos e vídeos específicos com um aplicativo, sem conceder acesso a toda a sua galeria de mídias."
      },
      {
        "key": "D",
        "text": "Exigir senha de administrador a cada foto tirada pela câmera."
      },
      {
        "key": "E",
        "text": "Impedir o envio de imagens via WhatsApp, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O Photo Picker reduz o acesso excessivo a dados. Em vez de dar permissão a toda a galeria (`READ_MEDIA_IMAGES`), o usuário seleciona somente as imagens necessárias para o app.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Seletor de Fotos = Compartilha apenas fotos escolhidas sem expor toda a galeria."
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
      "bizu": "💡 BIZU IBFC (ANDROID 13+): Photo Picker = Proteção de Privacidade. O app acessa APENAS as fotos selecionadas."
    }
  },
  {
    "id": "inf-and-003",
    "subject": "Informática",
    "topic": "4. Android 13+ - Localização Precisa vs Aproximada",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao conceder permissão de localização a um aplicativo no Android 13+, o sistema oferece duas opções ao usuário: Localização 'Precisa' e Localização 'Aproximada'. Qual a diferença prática entre elas?",
    "options": [
      {
        "key": "A",
        "text": "A localização aproximada formata a memória do aparelho."
      },
      {
        "key": "B",
        "text": "A localização precisa funciona apenas com a bateria acima de 90%."
      },
      {
        "key": "C",
        "text": "A localização aproximada impede o uso do aplicativo de chamadas telefônicas, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "D",
        "text": "A localização precisa utiliza sinal de satélite GPS exato (com margem de poucos metros), enquanto a aproximada utiliza torres de celular e Wi-Fi para estimar a região sem expor a posição exata."
      },
      {
        "key": "E",
        "text": "Ambas fornecem exatamente as mesmas coordenadas geográficas milimétricas."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O Android 13+ reforça a privacidade oferecendo a escolha entre a localização 'Precisa' (GPS exato) me 'Aproximada' (estimativa por rede/Wi-Fi).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Precisa = GPS exato de metros | Aproximada = Estimativa por Wi-Fi/Torres sem expor posição exata."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ANDROID 13+): Permissão de Localização: Precisa (GPS exato) vs Aproximada (Torres/Wi-Fi por privacidade)."
    }
  },
  {
    "id": "inf-and-004",
    "subject": "Informática",
    "topic": "4. Android 13+ - Painel de Privacidade",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Android 13+, o 'Painel de Privacidade' (Privacy Dashboard) localizado nas configurações do sistema permite:",
    "options": [
      {
        "key": "A",
        "text": "Formatador de fábrica ativado por voz, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "Visualizar um histórico detalhado das últimas 24 horas informando quais aplicativos acessaram a câmera, microfone e localização."
      },
      {
        "key": "C",
        "text": "Alterar o plano da operadora de telefonia móvel sem pagar taxas."
      },
      {
        "key": "D",
        "text": "Acelerar a velocidade do processador do celular em 300%."
      },
      {
        "key": "E",
        "text": "Substituir o cartão de memória SIM."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Painel de Privacidade mostra uma linha do tempo e gráficos claros revelando quais apps acessaram dados sensíveis (Câmera, Microfone, Localização) ao longo das últimas 24 horas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Painel de Privacidade = Histórico das 24h de uso da Câmera, Microfone e Localização."
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
      "bizu": "💡 BIZU IBFC: Painel de Privacidade (Android 13+) = Mostra quais apps usaram Câmera, Microfone e GPS nas últimas 24 horas."
    }
  },
  {
    "id": "inf-and-005",
    "subject": "Informática",
    "topic": "4. Android 13+ - Limpeza Automática da Área de Transferência",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Como medida de segurança para proteger senhas e dados confidenciais copiados pelo usuário, o Android 13 implementou um recurso automático na Área de Transferência que:",
    "options": [
      {
        "key": "A",
        "text": "Envia todas as senhas copiadas diretamente para a polícia, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "Bloqueia a tela do telefone para cada caractere copiado."
      },
      {
        "key": "C",
        "text": "Imprime o texto copiado via Bluetooth."
      },
      {
        "key": "D",
        "text": "Limpa automaticamente os dados copiados após 1 hora sem uso."
      },
      {
        "key": "E",
        "text": "Apaga os aplicativos instalados."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "No Android 13+, caso o usuário copie uma informação sigilosa (como senhas ou números de cartão), a Área de Transferência limpa o histórico automaticamente após cerca de 60 minutos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Limpeza automática do Clipboard após 1 hora por privacidade."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ANDROID 13+): Clipboard / Área de transferência é apagada automaticamente após 1h de inatividade."
    }
  },
  {
    "id": "inf-and-006",
    "subject": "Informática",
    "topic": "4. Android 13+ - Permissão de Mídia Separada (Imagens vs Áudios)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Android 13+, a antiga permissão genérica `READ_EXTERNAL_STORAGE` foi dividida em três permissões de mídia granulares. Quais são elas?",
    "options": [
      {
        "key": "A",
        "text": "Textos, PDFs e Planilhas."
      },
      {
        "key": "B",
        "text": "Lixeira, Sistema e BIOS."
      },
      {
        "key": "C",
        "text": "Wi-Fi, Bluetooth e GPS, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "D",
        "text": "Fotos/Imagens (`READ_MEDIA_IMAGES`), Vídeos (`READ_MEDIA_VIDEO`) e Áudios (`READ_MEDIA_AUDIO`)."
      },
      {
        "key": "E",
        "text": "Download, Upload e Streaming."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Para evitar que um aplicativo de música acesse suas fotos pessoais, o Android 13 dividiu o acesso a mídias em três categorias distintas: Imagens, Vídeos e Áudio.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Acesso granular a mídias: Imagens, Vídeos e Áudios separados."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ANDROID 13+): Permissões de Mídia divididas: Imagens | Vídeos | Áudios."
    }
  },
  {
    "id": "inf-and-007",
    "subject": "Informática",
    "topic": "4. Android 13+ - Idioma Independente por App",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "O Android 13 introduziu uma funcionalidade conveniente para usuários multilíngues. Trata-se da capacidade de:",
    "options": [
      {
        "key": "A",
        "text": "Definir idiomas diferentes para cada aplicativo individualmente sem alterar o idioma global do sistema operacional."
      },
      {
        "key": "B",
        "text": "Traduzir chamadas de voz em tempo real via rádio amador."
      },
      {
        "key": "C",
        "text": "Bloquear a digitação de palavras com acento."
      },
      {
        "key": "D",
        "text": "Converter o idioma do celular em código Morse, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "E",
        "text": "Impedir o uso de dicionários virtuais."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Com o Android 13, o usuário pode configurar, por exemplo, o sistema em Português, mas manter um app de leitura em Inglês e outro em Espanhol.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Idioma por aplicativo independente do sistema principal."
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
      "bizu": "💡 BIZU IBFC: Android 13 = Permite escolher um idioma diferente para CADA aplicativo."
    }
  },
  {
    "id": "inf-and-008",
    "subject": "Informática",
    "topic": "4. Android 13+ - Google Play System Updates",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No ecossistema Android 13+, as atualizações do 'Google Play System' diferem das atualizações de firmware da fabricante do celular porque:",
    "options": [
      {
        "key": "A",
        "text": "Exigem a troca física do chip da operadora, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "Atualizam módulos críticos de segurança e privacidade diretamente pela nuvem do Google sem depender da aprovação da fabricante."
      },
      {
        "key": "C",
        "text": "Servem apenas para mudar o papel de parede."
      },
      {
        "key": "D",
        "text": "Desinstalam o navegador Chrome obrigatoriamente."
      },
      {
        "key": "E",
        "text": "Funcionam apenas em computadores de mesa com Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Projeto Mainline do Google permite atualizar partes centrais de segurança do sistema operacional Android via Play Store diretamente aos usuários.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Google Play System Updates = Atualizações diretas de segurança sem esperar a fabricante."
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
      "bizu": "💡 BIZU IBFC: Google Play System Updates = Atualiza módulos de segurança direto pelo Google via nuvem."
    }
  },
  {
    "id": "inf-and-009",
    "subject": "Informática",
    "topic": "4. Android 13+ - Criptografia de Dados em Repouso (FBE)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A tecnologia de criptografia padrão utilizada em smartphones modernos Android para proteger os arquivos do usuário enquanto o aparelho está desligado denomina-se:",
    "options": [
      {
        "key": "A",
        "text": "Desfragmentação Óptica FAT32"
      },
      {
        "key": "B",
        "text": "Compressão ZIP com senha fraca"
      },
      {
        "key": "C",
        "text": "Protocolo HTTP sem SSL, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "D",
        "text": "File-Based Encryption (FBE - Criptografia Baseada em Arquivos)"
      },
      {
        "key": "E",
        "text": "Backup em fita magnética digital"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O Android utiliza a Criptografia Baseada em Arquivos (FBE), que permite encriptar arquivos individuais com chaves diferentes vinculadas à credencial do usuário.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. FBE (File-Based Encryption) = Criptografia forte por arquivo no Android."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Criptografia Android = FBE (File-Based Encryption) com chaves individuais por arquivo."
    }
  },
  {
    "id": "inf-and-010",
    "subject": "Informática",
    "topic": "4. Android 13+ - Indicadores Visuais de Microfone e Câmera",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Quando um aplicativo está utilizando ativamente o microfone ou a câmera no Android 13+, qual indicador visual é exibido no canto superior da tela?",
    "options": [
      {
        "key": "A",
        "text": "Uma lâmpada vermelha piscante cobrindo 50% da tela."
      },
      {
        "key": "B",
        "text": "O desligamento automático da tela."
      },
      {
        "key": "C",
        "text": "Um ponto verde (ou ícone verde) na barra de status."
      },
      {
        "key": "D",
        "text": "Um aviso sonoro de sirene contínua."
      },
      {
        "key": "E",
        "text": "A reinicialização do smartphone, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O Android exibe um ponto verde no canto superior direito sempre que a câmera ou o microfone são ativados por qualquer app.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Ponto verde na barra de status = Câmera ou Microfone em uso."
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
      "bizu": "💡 BIZU IBFC: Ponto verde na tela do Android = Câmera ou Microfone ativados."
    }
  },
  {
    "id": "inf-net-001",
    "subject": "Informática",
    "topic": "5. Redes - Endereçamento IPv4 vs IPv6",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação ao endereçamento IP utilizado na Internet e nas redes corporativas do IBGE, assinale a opção correta que indica o tamanho em BITS dos endereços IPv4 e IPv6, respectivamente:",
    "options": [
      {
        "key": "A",
        "text": "IPv4 possui 64 bits e IPv6 possui 32 bits."
      },
      {
        "key": "B",
        "text": "IPv4 possui 16 bits e IPv6 possui 32 bits."
      },
      {
        "key": "C",
        "text": "IPv4 possui 128 bits e IPv6 possui 256 bits."
      },
      {
        "key": "D",
        "text": "Ambos possuem exatamente 64 bits."
      },
      {
        "key": "E",
        "text": "IPv4 possui 32 bits e IPv6 possui 128 bits."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O IPv4 utiliza endereços de 32 bits (4 octetos decimais separados por ponto). O IPv6 utiliza 128 bits (8 grupos hexadecimais separados por dois-pontos).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. IPv4 = 32 bits | IPv6 = 128 bits."
        }
      ],
      "bizu": "💡 BIZU IBFC (BITS DO IP): IPv4 = 32 bits (Notação decimal: 192.168.1.1) | IPv6 = 128 bits (Notação hexadecimal)."
    }
  },
  {
    "id": "inf-net-002",
    "subject": "Informática",
    "topic": "5. Redes - Protocolos de Correio Eletrônico (SMTP vs POP3 vs IMAP)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No envio e recebimento de correio eletrônico, qual a função correta dos protocolos SMTP, POP3 e IMAP?",
    "options": [
      {
        "key": "A",
        "text": "SMTP para enviar e-mails; POP3 para baixar e-mails removendo do servidor; IMAP para sincronizar e-mails mantendo-os no servidor."
      },
      {
        "key": "B",
        "text": "SMTP para baixar e-mails; POP3 para enviar e-mails; IMAP para formatar anexos."
      },
      {
        "key": "C",
        "text": "SMTP para criptografar o HD; POP3 para navegar na web; IMAP para imprimir e-mails, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "Ambos servem exclusivamente para transferência de arquivos via FTP."
      },
      {
        "key": "E",
        "text": "SMTP é protocolo de rede sem fio Wi-Fi 6."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "SMTP (Sua Mensagem Tá Partindo) envia e-mails. POP3 baixa as mensagens retirando do servidor. IMAP sincroniza as pastas em tempo real mantendo o histórico no servidor.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. SMTP = Enviar | POP3 = Baixar e remover | IMAP = Sincronizar no servidor."
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
      "bizu": "💡 BIZU IBFC: SMTP = Envio (Saída) | POP3 = Download e exclusão do servidor | IMAP = Sincronização online mantendo no servidor."
    }
  },
  {
    "id": "inf-net-003",
    "subject": "Informática",
    "topic": "5. Redes - Portas Padrão de Comunicação (HTTP, HTTPS, SSH, FTP)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa que associa corretamente o protocolo de rede à sua porta TCP padrão de comunicação:",
    "options": [
      {
        "key": "A",
        "text": "HTTP = Porta 443 | HTTPS = Porta 80 | SSH = Porta 8080 | FTP = Porta 25."
      },
      {
        "key": "B",
        "text": "HTTP = Porta 21 | HTTPS = Porta 22 | SSH = Porta 80 | FTP = Porta 443."
      },
      {
        "key": "C",
        "text": "Todos utilizam obrigatoriamente a porta 110."
      },
      {
        "key": "D",
        "text": "Nenhum protocolo de rede utiliza portas numéricas."
      },
      {
        "key": "E",
        "text": "HTTP = Porta 80 | HTTPS = Porta 443 | SSH = Porta 22 | FTP = Porta 21."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Portas padrão TCP: HTTP (80 sem criptografia), HTTPS (443 seguro SSL/TLS), SSH (22 acesso remoto seguro), FTP (21 transferência de arquivos).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. HTTP (80), HTTPS (443), SSH (22), FTP (21)."
        }
      ],
      "bizu": "💡 BIZU IBFC (PORTAS TCP): HTTP = 80 | HTTPS = 443 | SSH = 22 | FTP = 21 | SMTP = 587 / 25 | POP3 = 995 / 110 | IMAP = 993 / 143."
    }
  },
  {
    "id": "inf-net-004",
    "subject": "Informática",
    "topic": "5. Redes - Protocolo DHCP",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Quando um computador do IBGE se conecta à rede local via cabo ou Wi-Fi e recebe automaticamente um endereço IP válido, máscara de sub-rede e gateway, o protocolo responsável por essa atribuição dinâmica é o:",
    "options": [
      {
        "key": "A",
        "text": "DNS (Domain Name System)"
      },
      {
        "key": "B",
        "text": "HTTP (Hypertext Transfer Protocol)"
      },
      {
        "key": "C",
        "text": "FTP (File Transfer Protocol)"
      },
      {
        "key": "D",
        "text": "DHCP (Dynamic Host Configuration Protocol)"
      },
      {
        "key": "E",
        "text": "ICMP (Internet Control Message Protocol), de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O DHCP distribui endereços IP de forma dinâmica e automática para os dispositivos que entram na rede.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. DNS traduz nomes de domínio em IPs."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. HTTP carrega páginas web."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. FTP transfere arquivos."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. DHCP = Atribuição dinâmica e automática de endereços IP."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. ICMP testa conectividade (ping)."
        }
      ],
      "bizu": "💡 BIZU IBFC: DHCP = Distribui IP Automático | DNS = Traduz URL (site.com) em IP (192.168.1.1)."
    }
  },
  {
    "id": "inf-net-005",
    "subject": "Informática",
    "topic": "5. Redes - Servidor DNS (Domain Name System)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a função primordial de um servidor DNS (Domain Name System) na arquitetura da Internet?",
    "options": [
      {
        "key": "A",
        "text": "Criptografar arquivos de texto no Word, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "Limpar o histórico do navegador a cada 10 minutos."
      },
      {
        "key": "C",
        "text": "Traduzir nomes de domínio legíveis (como www.ibge.gov.br) em endereços IP numéricos correspondentes."
      },
      {
        "key": "D",
        "text": "Conectar a impressora USB à tomada de luz."
      },
      {
        "key": "E",
        "text": "Aumentar a carga da bateria do smartphone."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O DNS é a 'lista telefônica' da Internet: converte nomes de domínio compreensíveis por humanos nos respectivos endereços IP que os roteadores utilizam.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. DNS = Converte Nome/Domínio (URL) em Endereço IP numérico."
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
      "bizu": "💡 BIZU IBFC: DNS = Traduz nome de site em IP (Ex: ibge.gov.br -> 191.232.1.5)."
    }
  },
  {
    "id": "inf-net-006",
    "subject": "Informática",
    "topic": "5. Redes - Intranet vs Internet vs Extranet",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Sobre os conceitos de Internet, Intranet e Extranet, assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A Internet é uma rede de computadores aberta exclusivamente para os moradores da Bahia."
      },
      {
        "key": "B",
        "text": "A Extranet impede qualquer tipo de acesso externo, mesmo para parceiros autorizados com senha."
      },
      {
        "key": "C",
        "text": "Intranet e Internet são termos idênticos sem nenhuma diferença de acesso, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "D",
        "text": "A Intranet funciona sem a necessidade de nenhuma placa de rede."
      },
      {
        "key": "E",
        "text": "A Intranet é uma rede privada restrita aos funcionários de uma organização que utiliza os mesmos protocolos e tecnologias da Internet (TCP/IP)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Intranet = Rede privada corporativa baseada em TCP/IP. Extranet = Acesso externo autorizado de parceiros/clientes à Intranet. Internet = Rede pública mundial.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Intranet = Rede privada que usa tecnologias web (TCP/IP) restrita à empresa."
        }
      ],
      "bizu": "💡 BIZU IBFC: Internet = Pública / Mundial | Intranet = Privada / Interna da empresa | Extranet = Acesso externo autorizado à Intranet."
    }
  },
  {
    "id": "inf-net-007",
    "subject": "Informática",
    "topic": "5. Redes - Navegação Privada / Anônima",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao abrir uma janela de 'Navegação Anônima' no Google Chrome (ou 'Navegação Privativa' no Firefox), o navegador deixa de salvar no computador local:",
    "options": [
      {
        "key": "A",
        "text": "A localização física informada pelos satélites de GPS."
      },
      {
        "key": "B",
        "text": "O histórico de navegação, cookies e dados inseridos em formulários."
      },
      {
        "key": "C",
        "text": "As mensagens enviadas no aplicativo WhatsApp Web, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "O consumo de energia elétrica do monitor."
      },
      {
        "key": "E",
        "text": "As atualizações pendentes do sistema Windows."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A Navegação Anônima não salva histórico, cookies ou dados de formulários no computador local. Ela NÃO torna o usuário invisível para o provedor de internet ou para o site visitado.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Navegação Anônima = Não guarda Histórico, Cookies e Formulários no PC LOCAL."
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
      "bizu": "💡 BIZU IBFC: Navegação Anônima = Limpa Histórico, Cookies e Formulários LOCAIS. NÃO esconde IP do Provedor ou do Site!"
    }
  },
  {
    "id": "inf-net-008",
    "subject": "Informática",
    "topic": "5. Redes - Conceito de Cookies",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No ambiente web, os 'Cookies' gravados pelos navegadores de internet são caracterizados como:",
    "options": [
      {
        "key": "A",
        "text": "Vírus destructores de memória RAM, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "Programas executáveis de alto desempenho em formato .EXE."
      },
      {
        "key": "C",
        "text": "Pequenos arquivos de texto salvos pelo site no computador do usuário para armazenar preferências, sessões de login e rastreamento."
      },
      {
        "key": "D",
        "text": "Filtros físicos acoplados ao cabo de rede UTP."
      },
      {
        "key": "E",
        "text": "Imagens de alta resolução em formato 4K."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Cookies são arquivos de texto criados pelos sites para lembrar de preferências, manter o usuário logado e analisar hábitos de navegação.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Cookies = Pequenos arquivos de texto com preferências e dados de sessão."
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
      "bizu": "💡 BIZU IBFC: Cookies = Arquivos de TEXTO que guardam preferências/login no navegador. NÃO são vírus por si sós."
    }
  },
  {
    "id": "inf-net-009",
    "subject": "Informática",
    "topic": "5. Redes - Protocolo HTTPS e Cadeado de Segurança",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "O protocolo HTTPS (Hypertext Transfer Protocol Secure) garante que a comunicação entre o navegador do usuário e o site seja protegida por:",
    "options": [
      {
        "key": "A",
        "text": "Formatação automática de planilhas Excel."
      },
      {
        "key": "B",
        "text": "Filtro físico de ruídos no microfone."
      },
      {
        "key": "C",
        "text": "Criptografia SSL/TLS, exibindo o ícone de um cadeado na barra de endereços."
      },
      {
        "key": "D",
        "text": "Conversão de arquivos em formato MP3, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "E",
        "text": "Bloqueio do teclado numérico."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "HTTPS une o protocolo HTTP ao protocolo de segurança SSL/TLS, garantindo confidencialidade, integridade e autenticidade dos dados transmitidos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. HTTPS = HTTP + Criptografia SSL/TLS (Cadeado de Segurança)."
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
      "bizu": "💡 BIZU IBFC: HTTPS = HTTP + Criptografia (SSL/TLS) | Porta 443 | Exibe o Cadeado de Segurança."
    }
  },
  {
    "id": "inf-net-010",
    "subject": "Informática",
    "topic": "5. Redes - Modelo OSI e Camadas",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "O modelo de referência OSI (Open Systems Interconnection) da ISO é estruturado em quantas camadas lógicas?",
    "options": [
      {
        "key": "A",
        "text": "7 camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação)."
      },
      {
        "key": "B",
        "text": "3 camadas (Entrada, Processamento e Saída)."
      },
      {
        "key": "C",
        "text": "5 camadas (Hardware, Software, Firmware, Malware e Spyware), visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "D",
        "text": "10 camadas completas."
      },
      {
        "key": "E",
        "text": "2 camadas únicas."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O modelo OSI possui exatamente 7 camadas organizadas do nível físico ao nível de aplicativo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Modelo OSI = 7 Camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação)."
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
      "bizu": "💡 BIZU IBFC (MODELO OSI): 7 Camadas: 1-Física, 2-Enlace, 3-Rede (IP), 4-Transporte (TCP/UDP), 5-Sessão, 6-Apresentação, 7-Aplicação (HTTP/SMTP)."
    }
  },
  {
    "id": "inf-net-011",
    "subject": "Informática",
    "topic": "5. Redes - Comando PING (ICMP)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao abrir o Prompt de Comando (cmd) do Windows e digitar `ping www.ibge.gov.br`, o usuário está executando um teste para:",
    "options": [
      {
        "key": "A",
        "text": "Formatar a partição do servidor remoto."
      },
      {
        "key": "B",
        "text": "Baixar o código-fonte completo do site em formato .ZIP, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "C",
        "text": "Instalar o aplicativo do IBGE no computador."
      },
      {
        "key": "D",
        "text": "Verificar se o servidor de destino está acessível na rede e medir o tempo de resposta (latência) em milissegundos."
      },
      {
        "key": "E",
        "text": "Desligar o roteador da operadora."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O comando `ping` envia pacotes ICMP Echo Request ao destino e mede o tempo de resposta (RTT) para checar conectividade.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. PING = Testa conectividade de rede e mede a latência em milissegundos (ms)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Command `ping` = Usa protocolo ICMP para testar se um IP/site está vivo na rede."
    }
  },
  {
    "id": "inf-net-012",
    "subject": "Informática",
    "topic": "5. Redes - Protocolo FTP (File Transfer Protocol)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "O protocolo padrão de rede utilizado especificamente para a transferência e upload de arquivos grandes entre um cliente e um servidor na Internet é o:",
    "options": [
      {
        "key": "A",
        "text": "SMTP (Simple Mail Transfer Protocol)"
      },
      {
        "key": "B",
        "text": "DNS (Domain Name System)"
      },
      {
        "key": "C",
        "text": "FTP (File Transfer Protocol)"
      },
      {
        "key": "D",
        "text": "POP3 (Post Office Protocol)"
      },
      {
        "key": "E",
        "text": "HTTP (Hypertext Transfer Protocol)"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "FTP (Portas 20 e 21) é o protocolo encarregado do envio e download de arquivos em redes TCP/IP.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. FTP = Transferência de Arquivos entre cliente e servidor."
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
      "bizu": "💡 BIZU IBFC: FTP = File Transfer Protocol (Porta 21)."
    }
  },
  {
    "id": "inf-net-013",
    "subject": "Informática",
    "topic": "5. Redes - Wi-Fi e Segurança (WPA2 / WPA3)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao configurar o acesso sem fio (Wi-Fi) dos dispositivos do IBGE, o protocolo de segurança sem fio mais moderno e seguro atualmente recomendado para evitar invasões é o:",
    "options": [
      {
        "key": "A",
        "text": "WEP (Wired Equivalent Privacy - obsoleto)"
      },
      {
        "key": "B",
        "text": "HTTP sem SSL"
      },
      {
        "key": "C",
        "text": "WPA3 (Wi-Fi Protected Access 3)"
      },
      {
        "key": "D",
        "text": "FTP Anônimo"
      },
      {
        "key": "E",
        "text": "Telnet sem senha"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "WPA3 é o padrão de segurança Wi-Fi mais recente, superando o antigo WPA2 e o vulnerável WEP.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. WEP é antigo e vulnerável."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. WPA3 = Padrão mais forte de segurança para redes sem fio Wi-Fi."
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
      "bizu": "💡 BIZU IBFC: Segurança Wi-Fi: WPA3 (Mais moderno/seguro) > WPA2 > WPA > WEP (Vulnerável/Obsoleto)."
    }
  },
  {
    "id": "inf-net-014",
    "subject": "Informática",
    "topic": "5. Redes - Endereço MAC (Media Access Control)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O endereço MAC (Media Access Control) de uma placa de rede é caracterizado por ser um endereço:",
    "options": [
      {
        "key": "A",
        "text": "Lógico alterado dinamicamente a cada reinicialização pelo servidor DHCP."
      },
      {
        "key": "B",
        "text": "Virtual que muda dependendo do navegador utilizado."
      },
      {
        "key": "C",
        "text": "Temporário que expira a cada 24 horas, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "D",
        "text": "Físico gravado na placa de rede pelo fabricante, composto por 48 bits (6 pares hexadecimais)."
      },
      {
        "key": "E",
        "text": "De texto correspondente à URL da página inicial."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O endereço MAC é a identificação física única gravada no hardware da placa de rede (48 bits / 6 octetos hexadecimais, ex: `00:1A:2B:3C:4D:5E`).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Endereço Lógico dinâmico é o IP."
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
          "isCorrect": true,
          "reason": "CORRETA. Endereço MAC = Endereço FÍSICO de hardware (48 bits / Hexadecimal)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Endereço MAC = Físico / Placa de Rede (48 bits) | Endereço IP = Lógico / Protocolo de Rede (32 ou 128 bits)."
    }
  },
  {
    "id": "inf-net-015",
    "subject": "Informática",
    "topic": "5. Redes - VPN (Virtual Private Network)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Para que um agente do IBGE trabalhe de forma remota em sua residência e acesse com segurança os sistemas internos do instituto através de um túnel criptografado pela Internet pública, deve-se utilizar uma:",
    "options": [
      {
        "key": "A",
        "text": "Conexão Bluetooth de curta distância"
      },
      {
        "key": "B",
        "text": "Lixeira compartilhada"
      },
      {
        "key": "C",
        "text": "VPN (Virtual Private Network)"
      },
      {
        "key": "D",
        "text": "Planilha Excel com macro"
      },
      {
        "key": "E",
        "text": "Porta de impressora paralela"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Uma VPN cria um túnel virtual criptografado sobre a Internet, garantindo confidencialidade nos dados entre o computador remoto e a rede privada da empresa.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. VPN = Túnel Criptografado seguro sobre a Internet pública para acesso remoto."
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
      "bizu": "💡 BIZU IBFC: VPN = Virtual Private Network (Túnel seguro criptografado para acesso remoto à Intranet)."
    }
  },
  {
    "id": "inf-seg-001",
    "subject": "Informática",
    "topic": "6. Segurança - Tipos de Backup (Full, Incremental, Diferencial)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Uma organização realiza backup semanal. Na segunda-feira é feito um Backup FULL (Completo). Na terça, quarta e quinta são feitos backups INCREMENTAIS. Caso o sistema falhe na sexta-feira, o processo de restauração completa exigirá:",
    "options": [
      {
        "key": "A",
        "text": "O backup Full de segunda-feira E TODOS os backups incrementais (terça, quarta e quinta)."
      },
      {
        "key": "B",
        "text": "Apenas o backup realizado na quinta-feira."
      },
      {
        "key": "C",
        "text": "Apenas o backup Full realizado na segunda-feira, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "D",
        "text": "Apenas o último backup incremental de quinta-feira."
      },
      {
        "key": "E",
        "text": "A formatação completa de todas as unidades sem possibilidade de restauração."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Para restaurar um plano de backup Incremental, necessita-se do último backup FULL mais TODOS os backups incrementais gerados em ordem cronológica até a data da falha.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Restaurar Incremental = ÚLTIMO FULL + TODOS OS INCREMENTAIS."
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
      "bizu": "💡 BIZU IBFC (RESTAURAÇÃO): Incremental = Último FULL + TODOS os incrementais | Diferencial = Último FULL + ÚLTIMO diferencial."
    }
  },
  {
    "id": "inf-seg-002",
    "subject": "Informática",
    "topic": "6. Segurança - Backup Diferencial vs Incremental",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Diferente do Backup Incremental, o Backup DIFERENCIAL caracteriza-se por copiar:",
    "options": [
      {
        "key": "A",
        "text": "Todos os arquivos do sistema novamente todos os dias, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "Apenas os arquivos alterados desde o ÚLTIMO backup do tipo FULL (Completo), acumulando as alterações."
      },
      {
        "key": "C",
        "text": "Apenas os arquivos de fotos e vídeos em formato JPG."
      },
      {
        "key": "D",
        "text": "Apenas os arquivos da lixeira do Windows."
      },
      {
        "key": "E",
        "text": "Dados exclusivos armazenados em fitas cassete de áudio."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Backup Diferencial copia tudo o que foi alterado desde o último backup FULL. Cada backup diferencial subsequente contém todas as modificações acumuladas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Diferencial = Copia dados alterados desde o último backup FULL (acumulativo)."
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
      "bizu": "💡 BIZU IBFC: Incremental = Copia desde o último backup realizado | Diferencial = Copia desde o último FULL."
    }
  },
  {
    "id": "inf-seg-003",
    "subject": "Informática",
    "topic": "6. Segurança - Ransomware",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que descreve corretamente o ataque de malware do tipo RANSOMWARE:",
    "options": [
      {
        "key": "A",
        "text": "Programa que se oculta no sistema para exibir anúncios publicitários indesejados."
      },
      {
        "key": "B",
        "text": "Software legítimo que acelera o desempenho do processador."
      },
      {
        "key": "C",
        "text": "Dispositivo físico utilizado para filtrar pacotes de rede de dados, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "D",
        "text": "Código malicioso que criptografa os arquivos do sistema e exige o pagamento de um resgate para disponibilizar a chave de decodificação."
      },
      {
        "key": "E",
        "text": "Técnica de invasão que altera o endereço IP da placa de rede."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Ransomware ('Ransom' = resgate) é o malware que sequestra dados bloqueando o acesso por meio de criptografia forte e exigindo resgate.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Adware."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Firewall."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Ransomware = Criptografia de arquivos com cobrança de resgate."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. IP Spoofing."
        }
      ],
      "bizu": "💡 BIZU IBFC: Ransomware = Criptografia + Cobrança de Resgate | Keylogger = Captura Teclas | Phishing = Pescaria de senhas."
    }
  },
  {
    "id": "inf-seg-004",
    "subject": "Informática",
    "topic": "6. Segurança - Phishing",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Um funcionário do IBGE recebe uma mensagem de e-mail informando que sua conta será cancelada caso ele não clique em um link para atualizar seus dados bancários. O link direciona para uma página falsa idêntica à do banco. Trata-se de um golpe de:",
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
        "text": "Defragmentação de Disco"
      },
      {
        "key": "D",
        "text": "Backup Diferencial"
      },
      {
        "key": "E",
        "text": "Spyware Keylogger"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Phishing ('pescaria') é uma fraude eletrônica baseada em engenharia social que engana o usuário usando mensagens/sites clonados persuasivos para roubar senhas e dados confidenciais.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Phishing = E-mail/site falso para induzir o usuário a entregar dados sigilosos."
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
      "bizu": "💡 BIZU IBFC: Phishing = Pescaria de credenciais/senhas usando clonagem de e-mails ou sites institucionais."
    }
  },
  {
    "id": "inf-seg-005",
    "subject": "Informática",
    "topic": "6. Segurança - Firewall vs Antivírus",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença fundamental entre um FIREWALL e um software ANTIVÍRUS?",
    "options": [
      {
        "key": "A",
        "text": "O Firewall desinstala o Windows e o Antivírus formata o HD."
      },
      {
        "key": "B",
        "text": "O Firewall monitora e filtra o tráfego de dados de rede (portas e conexões), enquanto o Antivírus detecta e remove programas maliciosos em arquivos e memória."
      },
      {
        "key": "C",
        "text": "O Antivírus protege apenas redes sem fio Wi-Fi."
      },
      {
        "key": "D",
        "text": "Ambos são nomes diferentes para o mesmo programa de impressão."
      },
      {
        "key": "E",
        "text": "O Firewall serve unicamente para acelerar jogos eletrônicos, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Firewall = Filtro de tráfego de rede baseado em regras (barreira de proteção). Antivírus = Varredura de assinaturas e comportamentos de malware em arquivos e memória local.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Firewall = Filtro de Tráfego de Rede | Antivírus = Detecção/Remoção de Arquivos Infectados."
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
      "bizu": "💡 BIZU IBFC: Firewall = Filtro de Conexões de Rede (Portas/Tráfego) | Antivírus = Varredura de Malwares em arquivos/memória."
    }
  },
  {
    "id": "inf-seg-006",
    "subject": "Informática",
    "topic": "6. Segurança - Keylogger e Spyware",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O tipo de software espião (Spyware) projetado especificamente para capturar e registrar todas as teclas digitadas pelo usuário no teclado físico é chamado de:",
    "options": [
      {
        "key": "A",
        "text": "Screenlogger"
      },
      {
        "key": "B",
        "text": "Adware"
      },
      {
        "key": "C",
        "text": "Ransomware"
      },
      {
        "key": "D",
        "text": "Trojan Horse"
      },
      {
        "key": "E",
        "text": "Keylogger"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Keylogger armazena o histórico de teclas digitadas (capturando senhas, números de cartão, etc.). Screenlogger captura cliques e imagens da tela em volta do cursor.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Screenlogger grava cliques e print da tela."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Adware é anúncios."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ransomware é criptografia de resgate."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Trojan é cavalo de tróia."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Keylogger = Registrador das teclas digitadas no teclado."
        }
      ],
      "bizu": "💡 BIZU IBFC: Keylogger = Captura TECLAS do teclado | Screenlogger = Captura TELA/Cliques do mouse."
    }
  },
  {
    "id": "inf-seg-007",
    "subject": "Informática",
    "topic": "6. Segurança - Cavalo de Tróia (Trojan)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em segurança da informação, um Cavalo de Tróia (Trojan Horse) caracteriza-se por:",
    "options": [
      {
        "key": "A",
        "text": "Apresentar-se como um programa inofensivo ou útil (como um jogo ou utilitário), mas que executa funções maliciosas ocultas sem o consentimento do usuário."
      },
      {
        "key": "B",
        "text": "Duplicar-se automaticamente explorando vulnerabilidades de rede sem precisar de hospedeiro, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "Criptografar arquivos e pedir resgate em Bitcoin."
      },
      {
        "key": "D",
        "text": "Ser um equipamento físico de proteção contra surtos elétricos."
      },
      {
        "key": "E",
        "text": "Limpar os arquivos da Lixeira a cada hora."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Trojan exige ação do usuário para ser executado (vem 'disfarçado' de algo legítimo). Diferente do Worm, ele não se autorreplica pela rede autonomamente.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Trojan = Disfarçado de programa útil/legítimo com carga maliciosa oculta."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Quem se auto-replica pela rede sem hospedeiro é o WORM."
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
      "bizu": "💡 BIZU IBFC: Trojan (Cavalo de Tróia) = Programa disfarçado de legítimo | Worm = Auto-replicável pela rede autonomamente."
    }
  },
  {
    "id": "inf-seg-008",
    "subject": "Informática",
    "topic": "6. Segurança - Regra de Backup 3-2-1",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A boa prática internacional de segurança conhecida como 'Regra de Backup 3-2-1' orienta que a organização deve possuir:",
    "options": [
      {
        "key": "A",
        "text": "3 computadores conectados, 2 impressoras e 1 escêner, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "3 senhas diferentes para 2 usuários em 1 único arquivo."
      },
      {
        "key": "C",
        "text": "3 dias de teste, 2 meses de garantia e 1 formato PDF."
      },
      {
        "key": "D",
        "text": "3 antivírus rodando ao mesmo tempo em 2 sistemas operacionais."
      },
      {
        "key": "E",
        "text": "3 cópias dos dados, em 2 mídias de tipos diferentes, com 1 cópia armazenada fora do local de trabalho (offsite/nuvem)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Regra 3-2-1: 3 Cópias no total (1 principal + 2 backups), em 2 Tipos de mídias diferentes (ex: HD externo e Fita), e 1 Cópia fora da empresa (nuvem/offsite).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Regra 3-2-1: 3 Cópias | 2 Mídias distintas | 1 Fora da empresa (Offsite/Nuvem)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Regra 3-2-1 = 3 cópias de dados, 2 mídias diferentes, 1 cópia fora da empresa (Offsite)."
    }
  },
  {
    "id": "inf-seg-009",
    "subject": "Informática",
    "topic": "6. Segurança - Criptografia Simétrica vs Assimétrica",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em relação aos conceitos de criptografia, assinale a opção que diferencia corretamente a Criptografia Simétrica da Assimétrica:",
    "options": [
      {
        "key": "A",
        "text": "A Simétrica é usada apenas no formato impresso e a Assimétrica em arquivos MP3."
      },
      {
        "key": "B",
        "text": "A Assimétrica não utiliza nenhuma chave matemática."
      },
      {
        "key": "C",
        "text": "A Simétrica exige autorização prévia da operadora de telefonia, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "D",
        "text": "A Simétrica utiliza a mesma chave secreta para cifrar e decifrar; a Assimétrica utiliza um par de chaves diferentes (Chave Pública e Chave Privada)."
      },
      {
        "key": "E",
        "text": "Ambas utilizam exatamente 10 chaves simultâneas."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Criptografia Simétrica = 1 chave única compartilhada (ex: AES). Criptografia Assimétrica = Par de chaves (Chave Pública para cifrar / Chave Privada para decifrar, ex: RSA).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Simétrica = 1 Chave igual | Assimétrica = Par de Chaves (Pública e Privada)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Criptografia Simétrica = 1 Chave Única | Criptografia Assimétrica = Par de Chaves (Pública + Privada)."
    }
  },
  {
    "id": "inf-seg-010",
    "subject": "Informática",
    "topic": "6. Segurança - Autenticação de Dois Fatores (2FA)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A Autenticação de Dois Fatores (2FA - Two-Factor Authentication) melhora a segurança do acesso aos sistemas do IBGE porque exige:",
    "options": [
      {
        "key": "A",
        "text": "Digitar a mesma senha duas vezes seguidas na mesma caixa de texto."
      },
      {
        "key": "B",
        "text": "Ter dois monitores de vídeo conectados ao computador."
      },
      {
        "key": "C",
        "text": "Duas provas de identidade de categorias distintas (ex: Algo que você sabe [Senha] + Algo que você possui [Celular/Token])."
      },
      {
        "key": "D",
        "text": "Aprovação prévia do sindicato dos trabalhadores, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "E",
        "text": "Cadastrar duas contas de e-mail com o mesmo nome."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O 2FA exige a combinação de 2 dos 3 fatores de autenticação: Fator de Conhecimento (senha/PIN), Fator de Posse (celular/token OTP) ou Fator de Inerência (biometria/digital).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 2FA = Exige 2 fatores de categorias distintas (Senha + Token/Celular/Biometria)."
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
      "bizu": "💡 BIZU IBFC (FATORES DE AUTENTICAÇÃO): 1. Conhecimento (Senha) | 2. Posse (Token/Celular) | 3. Inerência (Biometria/Digital)."
    }
  },
  {
    "id": "inf-off-001",
    "subject": "Informática",
    "topic": "3. Excel - Função CONT.SE",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Microsoft Excel em português, a fórmula `=CONT.SE(A1:A10; \">50\")` tem a finalidade de:",
    "options": [
      {
        "key": "A",
        "text": "Somar todos os valores do intervalo A1 a A10 e dividir por 50."
      },
      {
        "key": "B",
        "text": "Contar a quantidade de células no intervalo de A1 a A10 cujo valor numérico seja estritamente maior que 50."
      },
      {
        "key": "C",
        "text": "Multiplicar as células A1 e A10 pelo fator 50, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "D",
        "text": "Substituir os números maiores que 50 por zero."
      },
      {
        "key": "E",
        "text": "Excluir as linhas de A1 a A10 do arquivo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A função `CONT.SE(intervalo; condição)` conta quantas células atendem a um critério especificado.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `CONT.SE(A1:A10; \">50\")` = Conta quantas células possuem valor maior que 50."
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
      "bizu": "💡 BIZU IBFC: `CONT.SE` = Conta quantidade de células que atendem a um critério | `SOMASE` = Soma os valores das células que atendem ao critério."
    }
  },
  {
    "id": "inf-off-002",
    "subject": "Informática",
    "topic": "3. Excel - Referência Absoluta ($)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao elaborar uma planilha no Microsoft Excel em português, o símbolo do cifrão (`$`) inserido na fórmula `=$B$2 * C4` serve para:",
    "options": [
      {
        "key": "A",
        "text": "Fixar/Travar a referência da célula B2 (coluna B e linha 2), impedindo que ela mude ao copiar ou arrastar a fórmula para outras células."
      },
      {
        "key": "B",
        "text": "Converter o valor numérico para a moeda Dólar Americano, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "Multiplicar a célula B2 por 100 automaticamente."
      },
      {
        "key": "D",
        "text": "Indicar que a célula B2 contém um erro de sintaxe."
      },
      {
        "key": "E",
        "text": "Ocultar o resultado do cálculo para outros usuários."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O cifrão `$` é o operador de fixação de referência absoluta no Excel. `$B$2` fixa tanto a coluna quanto a linha ao arrastar a alça de preenchimento.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Cifrão (`$`) = Fixa a referência de linha/coluna (Referência Absoluta)."
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
      "bizu": "💡 BIZU IBFC: `A1` = Relativa | `$A$1` = Absoluta (Travada em linha e coluna) | `$A1` / `A$1` = Mista."
    }
  },
  {
    "id": "inf-off-003",
    "subject": "Informática",
    "topic": "3. Excel - Função PROCV",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "A sintaxe correta da função `PROCV` no Microsoft Excel em português é `=PROCV(valor_procurado; matriz_tabela; número_índice_coluna; [procurar_intervalo])`. Caso o último parâmetro seja definido como `FALSO` (ou `0`), a função irá:",
    "options": [
      {
        "key": "A",
        "text": "Procurar por uma correspondência EXATA do valor desejado na primeira coluna da tabela."
      },
      {
        "key": "B",
        "text": "Procurar por uma correspondência aproximada ordenada."
      },
      {
        "key": "C",
        "text": "Retornar uma mensagem de erro em todos os casos, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "D",
        "text": "Inverter a ordem de busca da direita para a esquerda."
      },
      {
        "key": "E",
        "text": "Apagar a coluna de busca."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "`PROCV` com parâmetro final `FALSO` (ou `0`) exige busca por correspondência exata. Se não encontrar o valor idêntico, retorna o erro `#N/A`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. PROCV com FALSO/0 = Busca correspondência EXATA."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Correspondência aproximada é usada com VERDADEIRO/1."
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
      "bizu": "💡 BIZU IBFC: `PROCV` = Procura na Vertical (Primeira coluna) | FALSO = Busca Exata | VERDADEIRO = Busca Aproximada."
    }
  },
  {
    "id": "inf-off-004",
    "subject": "Informática",
    "topic": "3. Excel - Erro #N/A vs #VALOR!",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Microsoft Excel, a exibição do erro `#N/A` em uma célula indica que:",
    "options": [
      {
        "key": "A",
        "text": "Houve uma divisão por zero na fórmula, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "O texto inserido contém caracteres em maiúsculo."
      },
      {
        "key": "C",
        "text": "A largura da coluna é pequena demais para exibir o número."
      },
      {
        "key": "D",
        "text": "Um valor procurado por uma função de busca (como PROCV ou CORRESP) não está disponível ou não foi encontrado."
      },
      {
        "key": "E",
        "text": "O disco rígido está cheio."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "`#N/A` significa 'Não Disponível' (Not Available). Significa que a função de busca não encontrou o item solicitado. Largura pequena exibe `#####`. Divisão por zero exibe `#DIV/0!`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Divisão por zero é `#DIV/0!`."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Largura pequena é `#####`."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. `#N/A` = Valor procurado não encontrado/não disponível."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ERROS EXCEL): `#N/A` = Não encontrado | `#DIV/0!` = Divisão por zero | `#####` = Coluna estreita | `#VALOR!` = Tipo de dado incompatível."
    }
  },
  {
    "id": "inf-off-005",
    "subject": "Informática",
    "topic": "3. Word - Atalho Salvar Documento (Ctrl + B)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Microsoft Word configurado em Português do Brasil, qual a combinação de teclas de atalho utilizada para SALVAR o documento ativo?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + B"
      },
      {
        "key": "B",
        "text": "Ctrl + S, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "Ctrl + G"
      },
      {
        "key": "D",
        "text": "Ctrl + A"
      },
      {
        "key": "E",
        "text": "Ctrl + P"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "No Word em Português: `Ctrl + B` = Salvar ('B' de Backup). No Word em Inglês que é `Ctrl + S` (Save).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Word Português: `Ctrl + B` = Salvar documento."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + S` no Word em português aplica Sublinhado!"
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + G` alinha à direita."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + A` abre documento."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + P` imprime."
        }
      ],
      "bizu": "💡 BIZU IBFC (WORD EM PORTUGUÊS): `Ctrl + B` = Salvar | `Ctrl + S` = Sublinhado | `Ctrl + N` = Negrito | `Ctrl + I` = Itálico."
    }
  },
  {
    "id": "inf-off-006",
    "subject": "Informática",
    "topic": "3. Word - Desfazer e Refazer (Ctrl + Z / Ctrl + Y)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Os atalhos de teclado padrão utilizados no Microsoft Word para DESFAZER a última ação realizada e REFAZER a ação desfeita são, respectivamente:",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + X e Ctrl + C"
      },
      {
        "key": "B",
        "text": "Ctrl + V e Ctrl + P"
      },
      {
        "key": "C",
        "text": "Alt + Z e Alt + Y"
      },
      {
        "key": "D",
        "text": "Ctrl + Z e Ctrl + Y"
      },
      {
        "key": "E",
        "text": "Ctrl + A e Ctrl + B, conforme as especificações técnicas de homologação do ambiente de redes."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "`Ctrl + Z` desfaz a última alteração. `Ctrl + Y` refaz a ação desfeita no Word.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + X` recorta, `Ctrl + C` copia."
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
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer (ou F4)."
    }
  },
  {
    "id": "inf-off-007",
    "subject": "Informática",
    "topic": "3. Word - Mala Direta (Mail Merge)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O recurso 'Mala Direta' (Mail Merge) do Microsoft Word é utilizado principalmente para:",
    "options": [
      {
        "key": "A",
        "text": "Verificar vírus no documento, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "Converter arquivos Word em vídeos MP4."
      },
      {
        "key": "C",
        "text": "Traduzir o texto para o código Braille."
      },
      {
        "key": "D",
        "text": "Formatador de discos rígidos em rede."
      },
      {
        "key": "E",
        "text": "Gerar em lote documentos personalizados (como cartas, etiquetas ou e-mails) mesclando um modelo com uma base de dados externa (como uma lista do Excel)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A Mala Direta permite criar centenas de cartas ou etiquetas personalizadas combinando um documento base com uma lista de contatos do Excel ou Access.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Mala Direta = Cria documentos personalizados em lote fundindo modelo + base de dados."
        }
      ],
      "bizu": "💡 BIZU IBFC: Mala Direta (Mail Merge) = Mescla modelo principal com banco de dados/Excel para personalizar em massa."
    }
  },
  {
    "id": "inf-off-008",
    "subject": "Informática",
    "topic": "3. Word - Quebra de Seção vs Quebra de Página",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Microsoft Word, para aplicar uma orientação de página Paisagem (horizontal) apenas em uma página específica do meio do documento, mantendo as demais em Retrato (vertical), o usuário deve inserir uma:",
    "options": [
      {
        "key": "A",
        "text": "Quebra de Seção (Próxima Página)."
      },
      {
        "key": "B",
        "text": "Quebra de Linha simples (Shift + Enter)."
      },
      {
        "key": "C",
        "text": "Quebra de Coluna."
      },
      {
        "key": "D",
        "text": "Quebra de Parágrafo."
      },
      {
        "key": "E",
        "text": "Formatação de fonte em negrito."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Formatamentos de página distintos (como orientação Retrato/Paisagem, margens ou cabeçalhos diferentes) dentro do mesmo arquivo EXIGEM o uso de Quebra de Seção.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Quebra de Seção = Permite diferentes orientações/cabeçalhos no mesmo arquivo."
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
      "bizu": "💡 BIZU IBFC: Quebra de Página = Apenas pula para a próxima página | Quebra de SeÇÃO = Permite alterar a orientação (Retrato/Paisagem) e cabeçalhos independentes."
    }
  },
  {
    "id": "port-cra-001",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Regra Geral",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que o sinal indicativo de crase está empregado CORRETAMENTE de acordo com a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "O recenseador caminhava à pé por todo o bairro de Salvador."
      },
      {
        "key": "B",
        "text": "Entregamos o relatório à ele durante a reunião de planejamento, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "O candidato entregou a documentação à professora do curso preparatório."
      },
      {
        "key": "D",
        "text": "Ela começou à chorar após ler o resultado do concurso."
      },
      {
        "key": "E",
        "text": "O agente referiu-se à todas as pesquisas realizadas."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Ocorrendo a junção da preposição 'a' (exigida por 'entregou a algo/alguém') com o artigo definido feminino 'a' (de 'a professora'), o uso da crase é OBRIGATÓRIO.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Pé' é palavra masculina; crase proibida."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Ele' é pronome pessoal masculino; crase proibida."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Entregou a + a professora = à professora."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. 'Chorar' é verbo; jamais ocorre crase antes de verbo."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. 'Todas' é pronome indefinido no plural; crase proibida."
        }
      ],
      "bizu": "💡 BIZU IBFC (CRASE PROIBIDA): Antes de verbo, palavra masculina, pronomes pessoais e palavras no plural."
    }
  },
  {
    "id": "port-cra-002",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Horas Determinadas",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a crase é OBRIGATÓRIA devido à indicação de horas exatas:",
    "options": [
      {
        "key": "A",
        "text": "Ele vai chegar daqui a duas horas no escritório."
      },
      {
        "key": "B",
        "text": "O posto funciona de 8a 18 horas, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "Permanecemos na sala por a mais de três horas."
      },
      {
        "key": "D",
        "text": "A reunião do IBGE terá início pontualmente às 14 horas."
      },
      {
        "key": "E",
        "text": "A prova começará a uma hora da tarde de domingo."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Diante de horas determinadas (exatas), o uso do sinal grave indicativo de crase é obrigatório: 'às 14 horas', 'às 8h'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'A duas horas' indica tempo futuro; usa-se apenas preposição."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Na expressão 'de... a...', se não há artigo no início, não há crase."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Horas exatas = Uso de crase obrigatório (às 14 horas)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Horas exatas = Com crase (às 8h, às 14h) | 'De X a Y' = Sem crase (De 8 a 18h)."
    }
  },
  {
    "id": "port-cra-003",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Palavras Masculinas",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a frase em que o uso da crase é PROIBIDO por anteceder palavra masculina:",
    "options": [
      {
        "key": "A",
        "text": "Voltamos àquela cidade histórica no final de semana."
      },
      {
        "key": "B",
        "text": "O pagamento do subsídio foi efetuado a prazo."
      },
      {
        "key": "C",
        "text": "A aluna dedicou-se à leitura dos manuais do IBGE."
      },
      {
        "key": "D",
        "text": "Refiro-me à diretora de pesquisas censitárias."
      },
      {
        "key": "E",
        "text": "As informações foram prestadas à supervisora."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Em 'a prazo', 'prazo' é substantivo masculino; portanto, não aceita artigo feminino 'a', tornando a crase proibida.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Àquela' leva crase pela fusão de a + aquela."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. 'Prazo' é palavra masculina = Crase PROIBIDA."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. 'À leitura' tem crase correta."
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
      "bizu": "💡 BIZU IBFC: Crase antes de palavra masculina é ERRO GRAVE em prova! (A prazo, a pé, a cavalo)."
    }
  },
  {
    "id": "port-cra-004",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Pronomes Possessivos Femininos",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No trecho: 'Enviei os formulários do censo ___ minha supervisora', a lacuna pode ser preenchida de forma CORRETA por:",
    "options": [
      {
        "key": "A",
        "text": "Tanto 'a' quanto 'à', pois o uso da crase é facultativo antes de pronomes possessivos femininos singulares."
      },
      {
        "key": "B",
        "text": "Apenas 'à', sendo o uso rigorosamente obrigatório."
      },
      {
        "key": "C",
        "text": "Apenas 'a', sendo a crase expressamente proibida."
      },
      {
        "key": "D",
        "text": "Apenas 'há', indicando tempo decorrido."
      },
      {
        "key": "E",
        "text": "Apenas 'às', no plural, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Antes de pronomes possessivos femininos no singular (minha, tua, sua, nossa), o uso do artigo é facultativo, tornando a crase facultativa (a minha / à minha).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Antes de pronome possessivo feminino singular (minha/sua), a crase é FACULTATIVA."
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
      "bizu": "💡 BIZU IBFC (CRASE FACULTATIVA): 1. Antes de nome próprio feminino (à/a Maria) | 2. Antes de possessivo feminino singular (à/a minha mãe) | 3. Após a preposição 'até' (até à/a praia)."
    }
  },
  {
    "id": "port-cra-005",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Expressões Adverbiais Femininas",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa que apresenta uma locução adverbial feminina em que a crase é OBRIGATÓRIA:",
    "options": [
      {
        "key": "A",
        "text": "O candidato respondeu a todas as perguntas sem hesitar."
      },
      {
        "key": "B",
        "text": "Eles caminharam a passos lentos durante a tarde, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "C",
        "text": "Entregou o documento a uma funcionária do posto."
      },
      {
        "key": "D",
        "text": "O recenseador agiu às pressas para concluir as entrevistas do setor."
      },
      {
        "key": "E",
        "text": "Ela viajou a serviço da empresa."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Locuções adverbiais, conjuntivas ou prepositivas femininas exigem crase obrigatória: 'às pressas', 'à noite', 'às vezes', 'à medida que', 'à procura de'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'A todas' não leva crase."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Passos' é masculino."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. 'Uma' é artigo indefinido."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. 'Às pressas' = Locução adverbial feminina (exige crase)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. 'Serviço' é masculino."
        }
      ],
      "bizu": "💡 BIZU IBFC: Locuções Adverbiais Femininas levas crase: às pressas, à noite, à tarde, às vezes, à toa, à direita."
    }
  },
  {
    "id": "port-reg-001",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Verbal - Verbo Assistir",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: 'Os agentes do IBGE assistiram ___ palestra de treinamento com grande atenção', assinale a alternativa que preenche a lacuna em conformidade com a regência culta do verbo ASSISTIR no sentido de ver/presenciar:",
    "options": [
      {
        "key": "A",
        "text": "à"
      },
      {
        "key": "B",
        "text": "a"
      },
      {
        "key": "C",
        "text": "na"
      },
      {
        "key": "D",
        "text": "com a"
      },
      {
        "key": "E",
        "text": "da"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O verbo ASSISTIR no sentido de ver/presenciar é Transitivo Indireto e exige a preposição 'a'. Juntando com o artigo 'a' de 'palestra', resulta em 'à palestra'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Assistir (sentido de ver/presenciar) exige preposição A (assistir à palestra)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Sem crase violaria a regência com o artigo feminino."
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
      "bizu": "💡 BIZU IBFC (VERBO ASSISTIR): 1. Ver/Presenciar = VTI com A (Assistiu ao jogo / à palestra) | 2. Socorrer/Ajudar = VTD (Assistiu o doente)."
    }
  },
  {
    "id": "port-reg-002",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Verbal - Verbo Visar",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a frase em que o verbo VISAR foi empregado na regência correta conforme a norma-padrão da Língua Portuguesa:",
    "options": [
      {
        "key": "A",
        "text": "O agente visava o objetivo de terminar o censo em um mês sem ajuda."
      },
      {
        "key": "B",
        "text": "O diretor visou a aprovação dos novos orçamentos censitários."
      },
      {
        "key": "C",
        "text": "Todas as medidas visam o bem-estar dos cidadãos."
      },
      {
        "key": "D",
        "text": "O projeto visa em melhorar o atendimento."
      },
      {
        "key": "E",
        "text": "O novo concurso do IBGE visa ao provimento de vagas na Bahia."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O verbo VISAR no sentido de almejar/objetivar é Transitivo Indireto e exige a preposição 'a' ('visar ao provimento'). No sentido de assinar/mirar, é VTD.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Faltou a preposição 'a'."
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
          "isCorrect": true,
          "reason": "CORRETA. Visar (sentido de almejar/ter por objetivo) exige preposição A (visa ao provimento)."
        }
      ],
      "bizu": "💡 BIZU IBFC (VERBO VISAR): Almejar/Objetivar = VTI com A (Visa ao cargo) | Dar visto/Assinar = VTD (Visou o documento)."
    }
  },
  {
    "id": "port-reg-003",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Verbal - Verbos Chegar e Ir",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "De acordo com a regência verbal culta, assinale a alternativa gramaticalmente CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "Chegamos no posto de coleta do IBGE no primeiro horário."
      },
      {
        "key": "B",
        "text": "Vou no cinema assistir ao filme sobre estatística."
      },
      {
        "key": "C",
        "text": "Chegamos ao posto de coleta do IBGE logo no primeiro horário da manhã."
      },
      {
        "key": "D",
        "text": "Fomos na capital para resolver pendências administrativas, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "E",
        "text": "Nós chegamos em Salvador às 8 horas da manhã."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Os verbos de movimento como CHEGAR e IR exigem a preposição 'a' (e não 'em'). O correto é 'Chegar AO posto', 'Ir AO cinema', 'Chegar A Salvador'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Na linguagem culta, 'chegar em' é considerado desvio gramatical."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Deve ser 'Vou ao cinema'."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Verbo Chegar exige a preposição A (Chegamos ao posto)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deve ser 'Fomos à capital'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Verbos de movimento (Ir, Chegar, Voltar) exigem preposição A! (Vou ao shopping / Cheguei a Salvador)."
    }
  },
  {
    "id": "port-reg-004",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Verbal - Verbos Esquecer e Lembrar",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Sobre a regência dos verbos ESQUECER e LEMBRAR, assinale a opção gramaticalmente CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "O candidato esqueceu do comprovante de inscrição no dia da prova."
      },
      {
        "key": "B",
        "text": "O agente lembrou dos detalhes da entrevista sem relatório."
      },
      {
        "key": "C",
        "text": "Nós esquecemos das orientações passadas pelo supervisor."
      },
      {
        "key": "D",
        "text": "O candidato esqueceu-se do comprovante de inscrição no dia da prova."
      },
      {
        "key": "E",
        "text": "Eles lembraram-se o código de acesso, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Quando pronominais (esquecer-se / lembrar-se), exigem a preposição 'de' ('esquecer-se de algo'). Quando não pronominais, são VTD (esquecer algo).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Sem pronome não pode usar preposição 'de' (O correto seria: Esqueceu o comprovante)."
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
          "isCorrect": true,
          "reason": "CORRETA. Pronomial = Exige DE (Esqueceu-se DO comprovante)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Com pronome = Com preposição DE (Lembrou-se DE algo) | Sem pronome = Sem preposição (Lembrou algo)."
    }
  },
  {
    "id": "port-reg-005",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Nominal",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que a regência nominal do substantivo ou adjetivo está CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "Ela é passível em receber punições administrativas gravíssimas."
      },
      {
        "key": "B",
        "text": "O documento é compatível de todas as normas do IBGE, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "C",
        "text": "O supervisor mostrou-se imune de críticas destrutivas."
      },
      {
        "key": "D",
        "text": "O relatório é equivalente com os dados anteriores."
      },
      {
        "key": "E",
        "text": "O agente estava ansioso por obter o resultado definitivo do processo seletivo."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O adjetivo 'ansioso' rege a preposição 'por' (ou 'de'). Ansioso por/de algo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Passível DE."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Compatível COM."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Imune A."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Equivalente A."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Ansioso POR obter resultado."
        }
      ],
      "bizu": "💡 BIZU IBFC (REGÊNCIA NOMINAL): Ansioso POR/DE | Compatível COM | Imune A | Passível DE | Equivalente A."
    }
  },
  {
    "id": "port-con-001",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Verbal - Verbo Haver (Impessoal)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa em que a concordância do verbo HAVER está CORRETA de acordo com a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Havia muitos candidatos aguardando a abertura dos portões do local de prova."
      },
      {
        "key": "B",
        "text": "Haviam muitos candidatos aguardando a abertura dos portões do local de prova."
      },
      {
        "key": "C",
        "text": "Houveram sérios problemas durante a aplicação do exame censitário."
      },
      {
        "key": "D",
        "text": "Haviam de existir mais oportunidades de trabalho na região."
      },
      {
        "key": "E",
        "text": "Podem haver novas chamadas de aprovados no concurso do IBGE."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O verbo HAVER no sentido de existir ou ocorrer é IMPESSOAL, devendo permanecer sempre no singular (3ª pessoa do singular), independente do complemento.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Haver (sentido de existir) = Impessoal (Fica sempre no singular: Havia muitos candidatos)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Haviam' no plural é erro grave."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. 'Houveram' no plural é erro grave."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Em locução verbal, o verbo auxiliar também fica no singular: 'Pode haver'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Verbo HAVER (Sentido de Existir/Ocorrer) = SEMPRE SINGULAR (Havia, Houve, Pode haver). Jamais vai para o plural!"
    }
  },
  {
    "id": "port-con-002",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Verbal - Verbo Fazer (Tempo Decorrido)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a frase gramaticalmente CORRETA quanto à concordância do verbo FAZER:",
    "options": [
      {
        "key": "A",
        "text": "Faz três anos que o concurso do IBGE foi homologado."
      },
      {
        "key": "B",
        "text": "Fazem três anos que o concurso do IBGE foi homologado."
      },
      {
        "key": "C",
        "text": "Fazem dois meses que não chove no sertão baiano."
      },
      {
        "key": "D",
        "text": "Vão fazer cinco dias que os agentes estão em campo."
      },
      {
        "key": "E",
        "text": "Fazeriam dez anos desde o último recenseamento."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O verbo FAZER indicando tempo decorrido ou clima é IMPESSOAL e permanece rigorosamente no singular (3ª pessoa do singular).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Faz três anos (tempo decorrido = singular)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Fazem três anos' é erro de concordância."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. O auxiliar também fica no singular: 'Vai fazer cinco dias'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Verbo FAZER (Tempo decorrido/clima) = SEMPRE SINGULAR (Faz 3 anos / Vai fazer 5 dias)."
    }
  },
  {
    "id": "port-con-003",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Verbal - Expressões Partitivas",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: 'A maioria dos candidatos ___ a prova do IBGE com tranquilidade', a lacuna pode ser preenchida CORRETAMENTE por:",
    "options": [
      {
        "key": "A",
        "text": "Tanto 'realizou' quanto 'realizaram', pois com expressões partitivas a concordância pode ser no singular ou no plural."
      },
      {
        "key": "B",
        "text": "Apenas 'realizou', pois o núcleo do sujeito é singular."
      },
      {
        "key": "C",
        "text": "Apenas 'realizaram', concordando com o termo no plural, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "D",
        "text": "Apenas 'realizariam', no futuro do pretérito."
      },
      {
        "key": "E",
        "text": "Nenhuma das alternativas."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Diante de expressões partitivas ('a maioria de', 'a grande parte de', 'a metade de') seguidas de termo no plural, a concordância é FACULTATIVA (concorda com a maioria = realizou, ou com candidatos = realizaram).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Expressão partitiva + plural = Concordância facultativa (singular ou plural)."
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
      "bizu": "💡 BIZU IBFC: Expressões partitivas (A maioria dos / A maioria de) = Aceitam verbo no SINGULAR ou PLURAL!"
    }
  },
  {
    "id": "port-con-004",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Nominal - É Bom / É Necessário / É Proibido",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa que apresenta a concordância nominal CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "É proibida a entrada de pessoas não autorizadas na sala de computadores."
      },
      {
        "key": "B",
        "text": "É proibido a entrada de pessoas não autorizadas na sala de computadores."
      },
      {
        "key": "C",
        "text": "É necessário paciência para responder aos questionários longos."
      },
      {
        "key": "D",
        "text": "Água de coco é boa para a saúde durante o trabalho no campo, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "E",
        "text": "É bom a leitura diária de jornais de economia."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Com as expressões 'é proibido', 'é bom', 'é necessário': se o sujeito tiver determinante (artigo 'a'), a concordância varia ('É proibida A entrada'). Se não tiver determinante, fica no masculino inflexível ('É proibido entrada').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. 'É proibida A entrada' (o artigo 'a' força a flexão no feminino)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Sem flexionar com o artigo 'a' é erro."
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
      "bizu": "💡 BIZU IBFC: Com artigo A = Flexiona (É proibida A entrada) | Sem artigo = Masculino (É proibido entrada)."
    }
  },
  {
    "id": "port-con-005",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Nominal - Anexo, Incluso, Bastante",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que as palavras destacadas estão empregadas com a concordância nominal CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "Seguem em anexo as planilhas de dados censitários solicitadas pela chefia."
      },
      {
        "key": "B",
        "text": "As servidoras ficaram bastantes satisfeitas com o treinamento."
      },
      {
        "key": "C",
        "text": "Seguem anexas as planilhas de dados censitários solicitadas pela chefia."
      },
      {
        "key": "D",
        "text": "A documentação segue incluso na pasta de arquivos."
      },
      {
        "key": "E",
        "text": "Elas mesmas disseram que estavam meio cansadas."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "'Anexo' é adjetivo e concorda em gênero e número com o substantivo ('anexas as planilhas'). A expressão 'em anexo' é invariável.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Em anexo' é invariável, mas 'anexas' sem preposição concorda."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Bastante' como advérbio (modificando adjetivo satisfeitas) é INVARIÁVEL: 'bastante satisfeitas'."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Anexas as planilhas (concordância correta)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'inclusa'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Anexo/Incluso = Varia (Anexas as cartas) | Em anexo = Invariável | Meio (Advérbio) = Invariável (Meio cansada)."
    }
  },
  {
    "id": "port-pon-001",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego da Vírgula - Proibição Sujeito e Verbo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa em que o emprego da vírgula representa um ERRO GRAMATICAL por separar o sujeito do verbo:",
    "options": [
      {
        "key": "A",
        "text": "No domingo de manhã, os candidatos realizaram a prova do IBGE."
      },
      {
        "key": "B",
        "text": "Salvador, capital da Bahia, receberá novos postos de atendimento."
      },
      {
        "key": "C",
        "text": "Embora estivesse chovendo, o recenseador cumpriu a meta diária."
      },
      {
        "key": "D",
        "text": "Os candidatos mais bem preparados, obtiveram as melhores notas no concurso."
      },
      {
        "key": "E",
        "text": "Estudamos bastante; portanto, seremos aprovados, de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "É terminantemente PROIBIDO separar o sujeito do seu verbo correspondente por meio de uma única vírgula.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Adjunto adverbial deslocado corretamente isolado por vírgula."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo entre vírgulas."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. 'Os candidatos mais bem preparados, obtiveram...' separa sujeito do verbo com vírgula (ERRO GRAVE)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: NUNCA se separa com UMA vírgula: 1. Sujeito do Verbo | 2. Verbo do Objeto!"
    }
  },
  {
    "id": "port-pon-002",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego da Vírgula - Aposto Explicativo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Na frase: 'O IBGE, órgão responsável pelas pesquisas estatísticas do país, divulgou novos dados', a dupla de vírgulas foi utilizada para isolar um:",
    "options": [
      {
        "key": "A",
        "text": "Vocativo direto."
      },
      {
        "key": "B",
        "text": "Adjunto adnominal restritivo."
      },
      {
        "key": "C",
        "text": "Complemento nominal."
      },
      {
        "key": "D",
        "text": "Aposto explicativo."
      },
      {
        "key": "E",
        "text": "Predicado verbo-nominal."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O termo 'órgão responsável pelas pesquisas estatísticas do país' explica o substantivo anterior (IBGE), tratando-se de um aposto explicativo obrigatoriamente isolado por vírgulas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo é um chamamento."
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
          "isCorrect": true,
          "reason": "CORRETA. Aposto explicativo é sempre isolado por vírgulas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Aposto Explicativo = Explica o nome anterior e vem ISOLADO POR VÍRGULAS (ou travessões)."
    }
  },
  {
    "id": "port-pon-003",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego da Vírgula - Vocativo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a vírgula é empregada para isolar um VOCATIVO (termo de chamamento):",
    "options": [
      {
        "key": "A",
        "text": "Salvador, cidade histórica, atrai muitos turistas."
      },
      {
        "key": "B",
        "text": "Quando chegar a hora, faremos a inscrição."
      },
      {
        "key": "C",
        "text": "Atenção, candidatos, iniciem a prova agora!"
      },
      {
        "key": "D",
        "text": "Comprei livros, canetas, papéis e borrachas."
      },
      {
        "key": "E",
        "text": "O aluno estuda, mas não revisa os bizus."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Vocativo é o chamamento direto ao interlocutor ('candidatos') e deve ser obrigatoriamente isolado por vírgula.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É aposto explicativo."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Oração subordinada adverbial anteposta."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'candidatos' é chamamento direto = Vocativo isolado por vírgula."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Enumeração."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Oração coordenada adversativa."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vocativo = Chamamento (Ex: 'Maria, venha cá!'). Sempre isolado por vírgula!"
    }
  },
  {
    "id": "port-pon-004",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego da Vírgula - Adjunto Adverbial Deslocado",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a frase em que o uso da vírgula justifica-se pelo deslocamento de um adjunto adverbial de longa extensão:",
    "options": [
      {
        "key": "A",
        "text": "Pedro, venha pegar seu cartão de confirmação."
      },
      {
        "key": "B",
        "text": "O IBGE é uma grande instituição, todavia precisa de investimentos."
      },
      {
        "key": "C",
        "text": "Comprei lápis, borracha e caneta, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "Durante a realização das pesquisas de campo em Salvador, os agentes coletaram dados valiosos."
      },
      {
        "key": "E",
        "text": "Ele é um professor dedicado, inteligente e pontual."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Quando o adjunto adverbial é longo e vem anteposto (deslocado para o início da frase), a vírgula é OBRIGATÓRIA.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Isola vocativo."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Oração adversativa."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Adjunto adverbial longo anteposto ('Durante a realização das pesquisas de campo em Salvador,')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Adjunto Adverbial Longo no início da frase = Vírgula OBRIGATÓRIA!"
    }
  },
  {
    "id": "port-pon-005",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego da Vírgula - Orações Adversativas",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação à pontuação nas orações coordenadas adversativas, assinale a opção correta:",
    "options": [
      {
        "key": "A",
        "text": "A vírgula é OBRIGATÓRIA antes das conjunções adversativas (mas, porém, contudo, todavia, no entanto)."
      },
      {
        "key": "B",
        "text": "É proibido usar vírgula antes da conjunção 'mas'."
      },
      {
        "key": "C",
        "text": "A vírgula deve ser colocada após a palavra 'mas' obrigatoriamente."
      },
      {
        "key": "D",
        "text": "As conjunções adversativas dispensam qualquer sinal de pontuação."
      },
      {
        "key": "E",
        "text": "O ponto e vírgula é proibido em frases com 'contudo', respeitando as diretrizes de governança de dados e controle de acessos."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Antes de conjunções adversativas (*mas, porém, contudo, todavia, no entanto, entretanto*), o uso da vírgula é OBRIGATÓRIO na norma-padrão.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Vírgula obrigatória antes de conjunção adversativa (mas, porém, contudo)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não se usa vírgula LOGO APÓS o 'mas' (a menos que haja termo intercalado)."
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
      "bizu": "💡 BIZU IBFC: Vírgula OBRIGATÓRIA ANTES de: mas, porém, contudo, todavia, no entanto!"
    }
  },
  {
    "id": "port-sin-001",
    "subject": "Língua Portuguesa",
    "topic": "5. Conjunções Subordinativas Concessivas",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: 'EMBORA o ritmo de trabalho fosse intenso, o recenseador manteve a precisão nos dados', a conjunção destacada introduz uma ideia de:",
    "options": [
      {
        "key": "A",
        "text": "Causa (motivo do fato principal)."
      },
      {
        "key": "B",
        "text": "Concessão (fato contrário que não impede a realização da ação principal)."
      },
      {
        "key": "C",
        "text": "Consequência (resultado da ação)."
      },
      {
        "key": "D",
        "text": "Condição (requisito necessário)."
      },
      {
        "key": "E",
        "text": "Comparação (igualdade de fatos), de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A conjunção 'EMBORA' (junto com *ainda que, mesmo que, posto que, conquanto*) introduz orações subordinadas adverbiais CONCESSIVAS.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Causa = porque, visto que."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. 'Embora' = Conjunção Concessiva (Ideia de Concessão)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Consequência = de modo que, tanto que."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Condição = se, caso."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (CONJUNÇÕES CONCESSIVAS): Embora, Ainda que, Mesmo que, Posto que, Conquanto + Verbo no Subjuntivo!"
    }
  },
  {
    "id": "port-sin-002",
    "subject": "Língua Portuguesa",
    "topic": "5. Conjunções Coordenadas Adversativas",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que apresenta uma conjunção COORDENADA ADVERSATIVA (ideia de oposição/contraste):",
    "options": [
      {
        "key": "A",
        "text": "Como estava chovendo, não saímos de casa, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "Caso você precise de ajuda, chame o supervisor."
      },
      {
        "key": "C",
        "text": "O candidato estudou muito, CONTUDO não obteve a pontuação mínima."
      },
      {
        "key": "D",
        "text": "Ele trabalhou tanto que ficou exausto."
      },
      {
        "key": "E",
        "text": "Fizemos o censo conforme as instruções do manual."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "'CONTUDO' é conjunção coordenada adversativa (indica oposição, contraste, ressalva), equivalente a *mas, porém, todavia, no entanto*.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Como' no início é Causal."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Caso' é Condicional."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Contudo = Adversativa (Oposição / Contraste)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. 'Tanto que' é Consecutiva."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. 'Conforme' é Conformativa."
        }
      ],
      "bizu": "💡 BIZU IBFC (ADVERSATIVAS): Mas, Porém, Contudo, Todavia, No entanto, Entretanto!"
    }
  },
  {
    "id": "port-sin-003",
    "subject": "Língua Portuguesa",
    "topic": "5. Orações Adjetivas Restritivas vs Explicativas",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença semântica provocada pela presença de vírgulas na oração adjetiva do exemplo: 'Os agentes do IBGE, que foram treinados em Salvador, realizaram a coleta'?",
    "options": [
      {
        "key": "A",
        "text": "Com vírgulas, a oração é RESTRITIVA e indica que apenas ALGUNS agentes foram treinados em Salvador."
      },
      {
        "key": "B",
        "text": "Sem vírgulas, a frase torna-se gramaticalmente errada, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "C",
        "text": "Com vírgulas, a oração é EXPLICATIVA e indica que TODOS os agentes do IBGE foram treinados em Salvador."
      },
      {
        "key": "D",
        "text": "As vírgulas alteram a classe gramatical da palavra IBGE."
      },
      {
        "key": "E",
        "text": "A presença de vírgulas transforma o verbo em substantivo."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Oração adjetiva COM vírgulas = Explicativa (refere-se à totalidade dos elementos). Sem vírgulas = Restritiva (limita/restringe a um grupo específico).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Sem vírgula é que seria restritiva."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Com vírgula = Explicativa (Aplica-se à TOTALIDADE dos elementos)."
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
      "bizu": "💡 BIZU IBFC: Com Vírgulas = Adjetiva EXPLICATIVA (Todos) | Sem Vírgulas = Adjetiva RESTRITIVA (Apenas alguns)."
    }
  },
  {
    "id": "port-sin-004",
    "subject": "Língua Portuguesa",
    "topic": "5. Conjunção Porquanto vs Portanto",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Na Língua Portuguesa culta, as conjunções 'PORQUANTO' e 'PORTANTO' possuem sentidos bem distintos. Assinale a opção correta quanto ao significado delas:",
    "options": [
      {
        "key": "A",
        "text": "'Porquanto' é Conclusivo e 'Portanto' é Causal."
      },
      {
        "key": "B",
        "text": "Ambas são conjunções concessivas equivalentes a *embora*, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "Ambas indicam dúvida ou incerteza."
      },
      {
        "key": "D",
        "text": "Ambas são pronomes relativos de lugar."
      },
      {
        "key": "E",
        "text": "'Porquanto' é Causal/Explicativo (equivalente a *porque*); 'Portanto' é Conclusivo (equivalente a *logo, por conseguinte*)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "PORQUANTO = Por causa de / Visto que / Porque (Causal). PORTANTO = Logo / Por conseguinte / Assim (Conclusivo). Pegadinha clássica de concurso!",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Inverteu os papéis."
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
          "isCorrect": true,
          "reason": "CORRETA. Porquanto = Porque/Causal | Portanto = Logo/Conclusivo."
        }
      ],
      "bizu": "💡 BIZU IBFC (CUIDADO!): PORQUANTO = Por causa de / Porque (Causal) | PORTANTO = Logo / Por isso (Conclusivo)."
    }
  },
  {
    "id": "port-sin-005",
    "subject": "Língua Portuguesa",
    "topic": "5. Figuras de Linguagem - Metonímia vs Metáfora",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: 'O agente leu todo o Machado de Assis antes de fazer a prova de Português', a figura de linguagem presente é a:",
    "options": [
      {
        "key": "A",
        "text": "Metáfora (comparação implícita sem elemento comparativo)."
      },
      {
        "key": "B",
        "text": "Hipérbole (exagero intencional)."
      },
      {
        "key": "C",
        "text": "Eufemismo (suavização de uma ideia desagradável)."
      },
      {
        "key": "D",
        "text": "Pleonasmo (redundância vocabular)."
      },
      {
        "key": "E",
        "text": "Metonímia (substituição do autor pela obra)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Metonímia é a substituição de uma palavra por outra com a qual mantém relação de contiguidade (no caso, leu a obra de Machado de Assis, e não a pessoa física do autor).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Metáfora é comparação implícita."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Hipérbole é exagero."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Eufemismo é suavização."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Metonímia = Troca do Autor pela Obra ('Ler Machado de Assis')."
        }
      ],
      "bizu": "💡 BIZU IBFC: Metonímia = Troca da Causa pelo Efeito, do Autor pela Obra, do Continente pelo Conteúdo (Ex: Bebeu um copo de água / Leu Shakespeare)."
    }
  },
  {
    "id": "rlm-neg-001",
    "subject": "Raciocínio Lógico",
    "topic": "1 e 2. Negação da Condicional (Regra do MANÉ)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Dada a proposição composta: 'Se o agente estuda, então ele obtém a aprovação', assinale a sua NEGAÇÃO LÓGICA equivalente:",
    "options": [
      {
        "key": "A",
        "text": "Se o agente não estuda, então ele não obtém a aprovação."
      },
      {
        "key": "B",
        "text": "O agente não estuda ou obtém a aprovação."
      },
      {
        "key": "C",
        "text": "O agente estuda E não obtém a aprovação."
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
    "correctOption": "C",
    "explanation": {
      "summary": "A negação da condicional P -> Q é obtida pela Regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q), resultando em P e ~Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas negou ambas sem trocar a condicional."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Essa é a equivalência lógica (Regra do Neumar: ~P ou Q), não a negação."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Mantém a 1ª ('o agente estuda') E nega a 2ª ('não obtém a aprovação')."
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
    "topic": "2. Equivalência da Condicional (Contrapositiva)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a proposição que é logicamente EQUIVALENTE à afirmação: 'Se chove em Salvador, então o trânsito fica lento'.",
    "options": [
      {
        "key": "A",
        "text": "Se o trânsito fica lento, então chove em Salvador, visando garantir a integridade total das informações e a segurança do usuário."
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
      "summary": "A equivalência por Contrapositiva da condicional P -> Q é ~Q -> ~P (Inverte a ordem das frases e nega ambas: 'Volta Negando').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas inverteu a ordem sem negar."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Contrapositiva: Inverteu a ordem e negou ambos os termos ('Se o trânsito não fica lento, então não chove em Salvador')."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Apenas negou sem inverter."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Essa é a negação lógica."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM: EQUIVALÊNCIA DO SE...ENTÃO = 1º Contrapositiva (Volta Negando: ~Q -> ~P) | 2º Regra do Neumar (~P v Q)."
    }
  },
  {
    "id": "rlm-neg-003",
    "subject": "Raciocínio Lógico",
    "topic": "2. Negação do E e do OU (Leis de De Morgan)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a NEGAÇÃO LÓGICA correta da proposição composta: 'Pedro é agente de informática E a prova é fácil'.",
    "options": [
      {
        "key": "A",
        "text": "Pedro não é agente de informática E a prova não é fácil."
      },
      {
        "key": "B",
        "text": "Se Pedro é agente de informática, então a prova é fácil."
      },
      {
        "key": "C",
        "text": "Pedro não é agente de informática OU a prova não é fácil."
      },
      {
        "key": "D",
        "text": "Pedro é agente de informática OU a prova é fácil, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "E",
        "text": "Pedro não é agente de informática e a prova é fácil."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Segundo as Leis de De Morgan, para negar uma conjuntiva (P e Q), nega-se a primeira (~P), troca-se o 'E' pelo 'OU', e nega-se a segunda (~Q), obtendo ~P ou ~Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Esqueceu de trocar a conjunção 'E' pela disjunção 'OU'."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Negou a 1ª ('Pedro não é agente'), trocou 'E' por 'OU' e negou a 2ª ('a prova não é fácil')."
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
      "bizu": "💡 BIZU IBFC RLM (Leis de De Morgan): Negação do 'E' = Nega tudo e troca por 'OU'! Negação do 'OU' = Nega tudo e troca por 'E'!"
    }
  },
  {
    "id": "rlm-neg-004",
    "subject": "Raciocínio Lógico",
    "topic": "2. Negação da Disjunção OU (De Morgan)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a NEGAÇÃO LÓGICA da frase: 'O candidato faz o simulado OU revisa os bizus'?",
    "options": [
      {
        "key": "A",
        "text": "O candidato não faz o simulado OU não revisa os bizus."
      },
      {
        "key": "B",
        "text": "Se o candidato faz o simulado, então revisa os bizus."
      },
      {
        "key": "C",
        "text": "O candidato faz o simulado E revisa os bizus."
      },
      {
        "key": "D",
        "text": "O candidato revisa os bizus ou faz o simulado."
      },
      {
        "key": "E",
        "text": "O candidato não faz o simulado E não revisa os bizus."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Negar a disjunção (P ou Q) exige negar a primeira (~P), trocar o 'OU' por 'E', e negar a segunda (~Q): ~P e ~Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Não trocou o conectivo."
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
          "isCorrect": true,
          "reason": "CORRETA. Negou a 1ª, trocou 'OU' por 'E' e negou a 2ª."
        }
      ],
      "bizu": "💡 BIZU IBFC: Negação do OU = Nega a 1ª E nega a 2ª (troca OU por E)."
    }
  },
  {
    "id": "rlm-neg-005",
    "subject": "Raciocínio Lógico",
    "topic": "2. Equivalência da Condicional (Regra do Neumar)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Além da contrapositiva, qual outra proposição é logicamente EQUIVALENTE à condicional 'Se estudo, então passo'?",
    "options": [
      {
        "key": "A",
        "text": "Não estudo E passo."
      },
      {
        "key": "B",
        "text": "Se passo, então estudo."
      },
      {
        "key": "C",
        "text": "Estudo e não passo."
      },
      {
        "key": "D",
        "text": "Não estudo se e somente se passo."
      },
      {
        "key": "E",
        "text": "Não estudo OU passo."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A equivalência da condicional P -> Q pela regra do Neumar (Silogismo Disjuntivo) é: NEga a primeira (~P) OU MAntém a segunda (Q). ~P ou Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Regra do Neumar: NEga a 1ª ('Não estudo') OU MAntém a 2ª ('passo')."
        }
      ],
      "bizu": "💡 BIZU IBFC (EQUIVALÊNCIA DO SE...ENTÃO): 1. Volta Negando (~Q -> ~P) | 2. Regra do NEUMAR (~P v Q)."
    }
  },
  {
    "id": "rlm-neg-006",
    "subject": "Raciocínio Lógico",
    "topic": "1. Negação de Quantificadores (Todo A é B)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A negação lógica da proposição categórica: 'TODO agente do IBGE é dedicado' é:",
    "options": [
      {
        "key": "A",
        "text": "ALGUM agente do IBGE NÃO é dedicado."
      },
      {
        "key": "B",
        "text": "Nenhum agente do IBGE é dedicado."
      },
      {
        "key": "C",
        "text": "Todos os agentes do IBGE não são dedicados."
      },
      {
        "key": "D",
        "text": "Algum agente do IBGE é dedicado."
      },
      {
        "key": "E",
        "text": "Se é agente do IBGE, então não é dedicado."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Para negar o quantificador universal 'TODO A é B', utiliza-se a regra do PEA + NÃO (Pelo menos um / Existe / Algum A NÃO é B). Jamais se nega 'Todo' usando 'Nenhum'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Negação do 'Todo A é B' = 'Algum A NÃO é B' (ou Existe pelo menos um A que não é B)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Nenhum' NÃO é a negação de 'Todo' em lógica proposicional!"
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
      "bizu": "💡 BIZU IBFC: NEGAÇÃO DO 'TODO' = PEA + NÃO (Pelo menos um... não é | Existe... não é | Algum... não é). NUNCA use 'Nenhum'!"
    }
  },
  {
    "id": "rlm-neg-007",
    "subject": "Raciocínio Lógico",
    "topic": "1. Negação de Quantificadores (Nenhum A é B)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a NEGAÇÃO LÓGICA da proposição: 'NENHUM candidato foi reprovado':",
    "options": [
      {
        "key": "A",
        "text": "Todos os candidatos foram reprovados."
      },
      {
        "key": "B",
        "text": "ALGUM candidato foi reprovado."
      },
      {
        "key": "C",
        "text": "Nenhum candidato foi aprovado."
      },
      {
        "key": "D",
        "text": "Pelo menos um candidato não foi reprovado."
      },
      {
        "key": "E",
        "text": "Todos os candidatos não foram reprovados."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Para negar o quantificador 'NENHUM A é B', basta afirmar a existência de pelo menos um caso: 'ALGUM A é B' (ou Existe/Pelo menos um A é B).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todos' não nega 'Nenhum' diretamente."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Negação do 'Nenhum' = 'Algum / Pelo menos um / Existe' (sem o não)."
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
      "bizu": "💡 BIZU IBFC: Negação do 'NENHUM' = PEA (Pelo menos um / Existe / Algum é!)."
    }
  },
  {
    "id": "rlm-neg-008",
    "subject": "Raciocínio Lógico",
    "topic": "1. Negação de Quantificadores (Algum A é B)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a NEGAÇÃO LÓGICA da sentença: 'ALGUM recenseador fala inglês'?",
    "options": [
      {
        "key": "A",
        "text": "Todos os recenseadores falam inglês."
      },
      {
        "key": "B",
        "text": "Algum recenseador não fala inglês."
      },
      {
        "key": "C",
        "text": "Pelo menos um recenseador fala francês."
      },
      {
        "key": "D",
        "text": "Todos os recenseadores não falam espanhol."
      },
      {
        "key": "E",
        "text": "NENHUM recenseador fala inglês."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A negação de 'ALGUM A é B' (quantificador existencial) é a negação universal total: 'NENHUM A é B' (ou Todo A NÃO é B).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Negação do 'Algum é' = 'Nenhum é'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Negação de 'Algum é' = 'Nenhum é' | Negação de 'Nenhum é' = 'Algum é'."
    }
  },
  {
    "id": "rlm-neg-009",
    "subject": "Raciocínio Lógico",
    "topic": "2. Equivalência da Disjunção (OU para SE...ENTÃO)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Dada a proposição: 'Ou o candidato estuda ou ele trabalha', sabendo que a disjunção é inclusiva ('Estudo OU trabalho'), qual proposição condicional é logicamente equivalente?",
    "options": [
      {
        "key": "A",
        "text": "Se o candidato estuda, então ele não trabalha."
      },
      {
        "key": "B",
        "text": "Se o candidato não estuda, então ele trabalha."
      },
      {
        "key": "C",
        "text": "Se o candidato trabalha, então ele estuda."
      },
      {
        "key": "D",
        "text": "Se o candidato não trabalha, então ele não estuda."
      },
      {
        "key": "E",
        "text": "O candidato não estuda e não trabalha."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A regra do Neumar (~P v Q ≡ P -> Q) também funciona na ordem inversa: P v Q ≡ ~P -> Q (Nega a primeira e mantém a segunda transformando em condicional).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. ~P -> Q ('Se não estuda, então trabalha') é equivalente a P ou Q."
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
      "bizu": "💡 BIZU IBFC: P ou Q ≡ ~P -> Q (Nega a 1ª, coloca SE...ENTÃO e mantém a 2ª)."
    }
  },
  {
    "id": "rlm-neg-010",
    "subject": "Raciocínio Lógico",
    "topic": "2. Negação de Dupla Condicional (Bicondicional)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a NEGAÇÃO LÓGICA da proposição bicondicional: 'O servidor é promovido SE E SOMENTE SE atinge a meta':",
    "options": [
      {
        "key": "A",
        "text": "Se o servidor é promovido, então não atinge a meta, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "OU o servidor é promovido OU atinge a meta (Disjunção Exclusiva)."
      },
      {
        "key": "C",
        "text": "O servidor não é promovido se e somente se não atinge a meta."
      },
      {
        "key": "D",
        "text": "O servidor é promovido e atinge a meta."
      },
      {
        "key": "E",
        "text": "Se o servidor atinge a meta, então é promovido."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A negação da Bicondicional (P <-> Q) é a Disjunção Exclusiva (Ou P ou Q), pois a bicondicional exige valores iguais e a exclusiva exige valores opostos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Negação de (P <-> Q) = Ou P ou Q (Disjunção Exclusiva)."
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
      "bizu": "💡 BIZU IBFC: Negação do SE E SOMENTE SE (Bicondicional) = OU...OU (Disjunção Exclusiva)."
    }
  },
  {
    "id": "rlm-diag-001",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tabela Verdade da Bicondicional",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Uma proposição bicondicional do tipo 'P se e somente se Q' (P <-> Q) apresenta valor lógico VERDADEIRO quando:",
    "options": [
      {
        "key": "A",
        "text": "Apenas a primeira proposição P for verdadeira."
      },
      {
        "key": "B",
        "text": "Apenas a segunda proposição Q for verdadeira, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "Uma proposição for verdadeira e a outra for falsa."
      },
      {
        "key": "D",
        "text": "Ambas as proposições P e Q tiverem o MESMO valor lógico (ambas verdadeiras ou ambas falsas)."
      },
      {
        "key": "E",
        "text": "Ambas as proposições forem falsas obrigatoriamente."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "A bicondicional (P <-> Q) é VERDADEIRA quando ambas as proposições possuem valorações idênticas (V e V = V; F e F = V). Se possuírem valorações opostas, a bicondicional é FALSA.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Bicondicional = Verdadeira quando os valores lógicos de P e Q forem IGUAIS."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM: BICONDICIONAL (P <-> Q) = Valores IGUAIS dá VERDADEIRO (V-V=V, F-F=V) | Valores DIFERENTES dá FALSO!"
    }
  },
  {
    "id": "rlm-diag-002",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tabela Verdade da Condicional (Vera Fischer)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A proposição condicional 'Se P, então Q' (P -> Q) só é FALSA em um único caso. Qual é esse caso?",
    "options": [
      {
        "key": "A",
        "text": "Quando ambas P e Q são verdadeiras."
      },
      {
        "key": "B",
        "text": "Quando P é VERDADEIRA e Q é FALSA (V -> F = F)."
      },
      {
        "key": "C",
        "text": "Quando ambas P e Q são falsas."
      },
      {
        "key": "D",
        "text": "Quando P é falsa e Q é verdadeira."
      },
      {
        "key": "E",
        "text": "Em nenhum caso, pois a condicional é sempre verdadeira."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A condicional só dá FALSO no caso da Vera Fischer: Primeira Verdadeira (V) e Segunda Falsa (F). Em todos os outros 3 casos (V->V, F->V, F->F), o resultado é VERDADEIRO.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. V -> V = V."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. V -> F = FALSO (Regra da Vera Fischer)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F -> F = V."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. F -> V = V."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: CONDICIONAL (P -> Q) = Só dá FALSO se V -> F ('Vera Fischer = Falsa'). Nesses casos: F -> V = VERDADEIRO! F -> F = VERDADEIRO!"
    }
  },
  {
    "id": "rlm-diag-003",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tabela Verdade da Conjunção E",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A proposição composta por conjuntiva 'P E Q' (P ^ Q) só apresenta valor lógico VERDADEIRO quando:",
    "options": [
      {
        "key": "A",
        "text": "Pelo menos uma das proposições for verdadeira."
      },
      {
        "key": "B",
        "text": "Ambas as proposições forem falsas, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "C",
        "text": "Ambas as proposições P e Q forem simultaneamente VERDADEIRAS."
      },
      {
        "key": "D",
        "text": "A primeira for falsa e a segunda for verdadeira."
      },
      {
        "key": "E",
        "text": "Nenhuma proposição for avaliada."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "A conjunção 'E' exige que TODAS as proposições constituintes sejam verdadeiras para que o resultado final seja verdadeiro (V e V = V). Basta uma ser falsa para dar FALSO.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Pelo menos uma verdadeira é o 'OU'."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Conjunção E = Exige V e V para ser VERDADEIRO."
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
      "bizu": "💡 BIZU IBFC: Conjunção (E) = É EXIGENTE! Só dá VERDADEIRO se ambas forem V (V e V = V)."
    }
  },
  {
    "id": "rlm-diag-004",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tabela Verdade da Disjunção OU",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A proposição disjuntiva inclusiva 'P OU Q' (P v Q) só apresenta valor lógico FALSO quando:",
    "options": [
      {
        "key": "A",
        "text": "Ambas as proposições forem verdadeiras, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "A primeira for verdadeira e a segunda falsa."
      },
      {
        "key": "C",
        "text": "A primeira for falsa e a segunda verdadeira."
      },
      {
        "key": "D",
        "text": "Ambas as proposições P e Q forem simultaneamente FALSAS."
      },
      {
        "key": "E",
        "text": "Uma das proposições for verdadeira."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "A disjunção 'OU' é boazinha: basta haver pelo menos UMA proposição verdadeira para o resultado ser VERDADEIRO. Só é FALSA quando ambas forem falsas (F ou F = F).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Disjunção OU = Só dá FALSO se ambos os lados forem FALSOS (F ou F = F)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Disjunção (OU) = É BOAZINHA! Só dá FALSO se ambas forem FALSAS (F ou F = F)."
    }
  },
  {
    "id": "rlm-diag-005",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tautologia, Contradição e Contingência",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em lógica proposicional, uma proposição composta cuja tabela-verdade resulta SEMPRE em valor VERDADEIRO, independentemente dos valores lógicos das proposições simples, é chamada de:",
    "options": [
      {
        "key": "A",
        "text": "Contradição"
      },
      {
        "key": "B",
        "text": "Tautologia"
      },
      {
        "key": "C",
        "text": "Contingência"
      },
      {
        "key": "D",
        "text": "Equivocação"
      },
      {
        "key": "E",
        "text": "Falácia Informal"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Tautologia = Sempre VERDADEIRO em todas as linhas. Contradição = Sempre FALSO em todas as linhas. Contingência = Mistura de linhas verdadeiras e falsas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Contradição é 100% Falsa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Tautologia = Tabela-verdade 100% VERDADEIRA."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Contingência tem V e F."
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
      "bizu": "💡 BIZU IBFC: Tautologia = 100% VERDADEIRA | Contradição = 100% FALSA | Contingência = Mistura (V e F)."
    }
  },
  {
    "id": "rlm-diag-006",
    "subject": "Raciocínio Lógico",
    "topic": "1. Exemplo Clássico de Tautologia (P ou ~P)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual das alternativas abaixo representa uma TAUTOLOGIA (afirmação sempre verdadeira)?",
    "options": [
      {
        "key": "A",
        "text": "O agente é baiano OU o agente não é baiano (P v ~P)."
      },
      {
        "key": "B",
        "text": "O agente é baiano E o agente não é baiano (P ^ ~P)."
      },
      {
        "key": "C",
        "text": "Se o agente é baiano, então ele é baiano e não é baiano."
      },
      {
        "key": "D",
        "text": "O agente é baiano se e somente se é paulista."
      },
      {
        "key": "E",
        "text": "O agente não é baiano nem brasileiro."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O princípio do terceiro excluído (P ou ~P) é uma Tautologia clássica: ou uma proposição é verdadeira ou sua negação é verdadeira. O resultado final da tabela é sempre V.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. (P v ~P) = Tautologia (Lei do Terceiro Excluído)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. (P ^ ~P) é uma Contradição (sempre falsa)."
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
      "bizu": "💡 BIZU IBFC: (P v ~P) = TAUTOLOGIA Clássica | (P ^ ~P) = CONTRADIÇÃO Clássica."
    }
  },
  {
    "id": "rlm-diag-007",
    "subject": "Raciocínio Lógico",
    "topic": "3. Conjuntos e Diagramas de Venn",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em um posto do IBGE com 100 candidatos: 60 dominam Excel, 50 dominam Word e 20 dominam AMBOS os programas. Quantos candidatos NÃO dominam nenhum dos dois programas?",
    "options": [
      {
        "key": "A",
        "text": "20 candidatos, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "30 candidatos."
      },
      {
        "key": "C",
        "text": "40 candidatos."
      },
      {
        "key": "D",
        "text": "50 candidatos."
      },
      {
        "key": "E",
        "text": "10 candidatos."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Usando o Diagrama de Venn: Apenas Excel = 60 - 20 = 40. Apenas Word = 50 - 20 = 30. Ambos = 20. Total que domina ao menos um = 40 + 30 + 20 = 90. Nenhum = 100 - 90 = 10.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Total = 100 - (40 + 30 + 20) = 10 candidatos."
        }
      ],
      "bizu": "💡 BIZU IBFC (CONJUNTOS): União (A U B) = N(A) + N(B) - N(Interseção). N(A U B) = 60 + 50 - 20 = 90. Fora do conjunto = 100 - 90 = 10."
    }
  },
  {
    "id": "rlm-diag-008",
    "subject": "Raciocínio Lógico",
    "topic": "3. Conjuntos - Interseção e Diferença",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Dados os conjuntos A = {1, 2, 3, 4, 5} e B = {4, 5, 6, 7}, o conjunto diferença A - B é representado por:",
    "options": [
      {
        "key": "A",
        "text": "{4, 5}"
      },
      {
        "key": "B",
        "text": "{6, 7}"
      },
      {
        "key": "C",
        "text": "{1, 2, 3, 4, 5, 6, 7}"
      },
      {
        "key": "D",
        "text": "{1, 2, 3}"
      },
      {
        "key": "E",
        "text": "{ } (conjunto vazio)"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "A diferença A - B consiste nos elementos que pertencem exclusivamente a A e NÃO pertencem a B. Elementos de A: 1,2,3,4,5. Removendo 4 e 5 (que estão em B), sobram {1, 2, 3}.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. {4, 5} é a Interseção (A ∩ B)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. {6, 7} é a diferença B - A."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. União (A U B)."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. A - B = {1, 2, 3}."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: A - B = O que tem em A que NÃO tem em B! Interseção (A ∩ B) = O que tem nos dois!"
    }
  },
  {
    "id": "rlm-diag-009",
    "subject": "Raciocínio Lógico",
    "topic": "4. Sequência Lógica de Números",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Observe a sequência numérica lógica: 2, 5, 10, 17, 26, X. Qual o valor do próximo termo X?",
    "options": [
      {
        "key": "A",
        "text": "35, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "36"
      },
      {
        "key": "C",
        "text": "40"
      },
      {
        "key": "D",
        "text": "32"
      },
      {
        "key": "E",
        "text": "37"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Analisando as diferenças entre os termos consecutivos: (5-2)=+3, (10-5)=+5, (17-10)=+7, (26-17)=+9. A diferença aumenta de 2 em 2 (números ímpares). O próximo acréscimo será +11. X = 26 + 11 = 37.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
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
          "isCorrect": true,
          "reason": "CORRETA. Diferenças ímpares (+3, +5, +7, +9, +11). X = 26 + 11 = 37."
        }
      ],
      "bizu": "💡 BIZU IBFC: Em sequências numéricas, calcule sempre a diferença entre termos vizinhos!"
    }
  },
  {
    "id": "rlm-diag-010",
    "subject": "Raciocínio Lógico",
    "topic": "4. Probabilidade Simples",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em uma urna há 6 bolas vermelhas e 4 bolas azuis idênticas no tátil. Ao retirar uma bola ao acaso, qual a probabilidade de ela ser AZUL?",
    "options": [
      {
        "key": "A",
        "text": "60% (ou 6/10)"
      },
      {
        "key": "B",
        "text": "40% (ou 4/10)"
      },
      {
        "key": "C",
        "text": "50% (ou 1/2), respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "D",
        "text": "20% (ou 2/10)"
      },
      {
        "key": "E",
        "text": "80% (ou 8/10)"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Probabilidade = Casos Favoráveis / Total de Casos. Casos favoráveis (azuis) = 4. Total de bolas = 6 + 4 = 10. P = 4/10 = 0,40 = 40%.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 60% é a chance de sair vermelha."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Probabilidade = 4 / 10 = 40%."
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
      "bizu": "💡 BIZU IBFC: Probabilidade = (Quero / Total). Quero 4 azuis de um total de 10 = 4/10 = 40%."
    }
  }
];
