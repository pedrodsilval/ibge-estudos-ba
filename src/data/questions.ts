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
        "text": "Registradores"
      },
      {
        "key": "B",
        "text": "Memória RAM DDR4"
      },
      {
        "key": "C",
        "text": "Unidade Lógica e Aritmética (ULA)"
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
    "correctOption": "A",
    "explanation": {
      "summary": "Os Registradores são pequenas unidades de memória integradas ao próprio núcleo da CPU. Possuem a menor capacidade e a maior velocidade de acesso de toda a arquitetura de computadores.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Registradores = Maior velocidade de acesso, integrados ao núcleo da CPU."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. A RAM fica fora do núcleo do processador e é mais lenta que os registradores."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. A ULA realiza cálculos matemáticos e testes lógicos, mas não armazena dados."
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
        "text": "Armazena dados em chips de memória flash NAND sem partes mecânicas móveis."
      },
      {
        "key": "D",
        "text": "É uma memória de trabalho volátil que apaga ao reiniciar o Windows."
      },
      {
        "key": "E",
        "text": "Conecta-se exclusivamente através da porta de áudio P2."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. SSD = Chips de memória flash NAND sem peças móveis."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. SSD é armazenamento permanente (não volátil)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Conecta-se via SATA, M.2 ou NVMe."
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
        "text": "Scanner de mesa para digitalização"
      },
      {
        "key": "D",
        "text": "Caixa de som estéreo USB"
      },
      {
        "key": "E",
        "text": "Projetor datashow HDMI"
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Scanner de mesa = Periférico exclusivo de ENTRADA."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Caixa de som é dispositivo de SAÍDA de áudio."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Projetor é dispositivo de SAÍDA de imagem."
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
        "text": "Teclado numérico USB, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "Monitor de tela sensível ao toque (Touchscreen)"
      },
      {
        "key": "C",
        "text": "Mouse óptico sem fio"
      },
      {
        "key": "D",
        "text": "Plotter de impressão de mapas em grande formato"
      },
      {
        "key": "E",
        "text": "Microfone de lapela analógico"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O monitor Touchscreen exibe informações (Saída) e aceita comandos ao tocar na tela (Entrada), sendo um periférico misto (Input/Output).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Teclado é exclusivo de Entrada."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Touchscreen = Exibe imagem (Saída) e recebe toques do usuário (Entrada)."
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
        "text": "Substitui a necessidade da memória ROM no momento de carregar a BIOS, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "É uma memória intermediária ultrarrápida localizada entre os registradores/núcleo da CPU e a memória RAM."
      },
      {
        "key": "D",
        "text": "É gravada permanentemente na fábrica e não pode ter seu conteúdo alterado."
      },
      {
        "key": "E",
        "text": "Opera na mesma velocidade de leitura de uma fita magnética de backup."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": false,
          "reason": "Incorreto. Não substitui a ROM."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Cache = Memória estática SRAM ultrarrápida entre a CPU e a RAM."
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
        "text": "Compatibilidade mecânica exclusiva com discos disquetes de 3,5 polegadas, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "Encaixe reversível (pode ser inserido em qualquer orientação) e capacidade de transmitir dados, vídeo e energia no mesmo cabo."
      },
      {
        "key": "C",
        "text": "Necessidade de utilizar adaptador de alta voltagem de 220V obrigatoriamente."
      },
      {
        "key": "D",
        "text": "Transmissão analógica de dados limitada a 56 Kbps."
      },
      {
        "key": "E",
        "text": "Uso exclusivo em impressoras matriciais de formulário contínuo."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. USB-C = Reversível, dados de alta velocidade, vídeo e alimentação elétrica."
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
        "text": "Conecta-se através do cabo telefônico RJ-11 padrão dial-up, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "B",
        "text": "Exige que o computador esteja conectado a uma rede Wi-Fi de 5 GHz."
      },
      {
        "key": "C",
        "text": "Funciona apenas em sistemas operacionais descontinuados como Windows XP."
      },
      {
        "key": "D",
        "text": "Utiliza o barramento PCI Express (PCIe) de alta velocidade, permitindo menor latência e taxas de transferência superiores a 3000 MB/s."
      },
      {
        "key": "E",
        "text": "Utiliza o leitor de cartão magnético da placa de som."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. NVMe utiliza o barramento PCIe, oferecendo baixíssima latência e altíssimas velocidades."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "Placa de captura de vídeo HDMI"
      },
      {
        "key": "C",
        "text": "Modem ADSL2+"
      },
      {
        "key": "D",
        "text": "Extensão elétrica de tomada comum, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "E",
        "text": "Nobreak (UPS - Uninterruptible Power Supply)"
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. Nobreak / UPS = Fornece energia temporária por baterias e filtra picos de tensão."
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
        "text": "Suporta no máximo 128 Terabytes (TB) de memória RAM, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "Não permite a instalação de nenhum tipo de memória RAM."
      },
      {
        "key": "C",
        "text": "Exige o uso exclusivo de monitores em preto e branco."
      },
      {
        "key": "D",
        "text": "Suporta no máximo 4 Gigabytes (GB) de memória RAM endereçável."
      },
      {
        "key": "E",
        "text": "Impede o salvamento de arquivos de texto no disco rígido."
      }
    ],
    "correctOption": "D",
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
          "reason": "CORRETA. 32 bits (x86) = Limite máximo de 4 GB de RAM."
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
        "text": "Fonte de Alimentação ATX, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "D",
        "text": "Gabinete Mid-Tower"
      },
      {
        "key": "E",
        "text": "Cabo de Rede UTP Cat6"
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
        "text": "Tecla de espaço dividida em três partes físicas."
      },
      {
        "key": "B",
        "text": "Ausência completa das teclas de função de F1 a F12, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "Presença de uma tela LCD colorida sobre a tecla Enter."
      },
      {
        "key": "D",
        "text": "Eliminação da barra de espaço inferior."
      },
      {
        "key": "E",
        "text": "Tecla exclusiva Alt Gr e da tecla com o caractere 'Ç'."
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. ABNT2 = Possui tecla 'Ç' física e tecla 'Alt Gr'."
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
        "text": "Excluir o arquivo permanentemente sem enviá-lo para a Lixeira."
      },
      {
        "key": "B",
        "text": "Mover o arquivo para a Lixeira, onde poderá ser recuperado posteriormente."
      },
      {
        "key": "C",
        "text": "Criar uma cópia oculta do arquivo no diretório Raiz C:\\."
      },
      {
        "key": "D",
        "text": "Renomear o arquivo com a extensão .TMP automaticamente."
      },
      {
        "key": "E",
        "text": "Compactar o arquivo no formato .ZIP."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A combinação `Shift + Delete` apaga o arquivo diretamente do armazenamento, ignorando a Lixeira do Windows.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Shift + Delete` = Exclusão permanente direta sem Lixeira."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. A tecla `Delete` isolada envia para a Lixeira."
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
        "text": "Ctrl + Shift + Esc"
      },
      {
        "key": "B",
        "text": "Alt + F4"
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
        "text": "Ctrl + P, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "`Ctrl + Shift + Esc` abre instantaneamente o Gerenciador de Tarefas no Windows.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + Shift + Esc` = Gerenciador de Tarefas direto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Alt + F4` fecha janela."
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
        "text": "Alt + V"
      },
      {
        "key": "C",
        "text": "Win + V"
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
    "correctOption": "C",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. `Win + V` = Histórico da Área de Transferência (Múltiplos Copiar/Colar)."
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
        "text": "F2"
      },
      {
        "key": "B",
        "text": "F5"
      },
      {
        "key": "C",
        "text": "F11"
      },
      {
        "key": "D",
        "text": "F1"
      },
      {
        "key": "E",
        "text": "F12"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A tecla `F2` ativa a edição do nome do arquivo selecionado.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `F2` = Renomear arquivo ou pasta."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `F5` atualiza a janela (Refresh)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `F11` alterna para Tela Cheia."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `F1` abre Ajuda."
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
        "text": "Alt + Tab"
      },
      {
        "key": "B",
        "text": "Ctrl + N"
      },
      {
        "key": "C",
        "text": "Win + L"
      },
      {
        "key": "D",
        "text": "Alt + Enter"
      },
      {
        "key": "E",
        "text": "Win + D"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "`Win + D` alterna para a Área de Trabalho (Desktop), minimizando ou restaurando todas as janelas ativas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Alt + Tab` alterna janelas."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Win + L` bloqueia a tela."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. `Win + D` = Mostrar/Ocultar a Área de Trabalho (Desktop)."
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
        "text": "Win + E"
      },
      {
        "key": "C",
        "text": "Alt + E"
      },
      {
        "key": "D",
        "text": "Win + F"
      },
      {
        "key": "E",
        "text": "Ctrl + Shift + E"
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. `Win + E` = Explorador de Arquivos (File Explorer)."
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
        "text": "Win + L"
      },
      {
        "key": "B",
        "text": "Win + E"
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
    "correctOption": "A",
    "explanation": {
      "summary": "O atalho `Win + L` ('L' de Lock) bloqueia a tela do computador, exigindo a senha ou biometria para retornar à sessão atual.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Win + L` = Bloquear a sessão/computador instantaneamente."
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
        "text": "Ctrl + Shift + N"
      },
      {
        "key": "D",
        "text": "Alt + Shift + S"
      },
      {
        "key": "E",
        "text": "Win + Shift + S"
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. `Win + Shift + S` = Atalho da Ferramenta de Captura de Tela do Windows."
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
        "text": "O Alt + Tab desliga o computador e o Win + Tab fecha todas as janelas."
      },
      {
        "key": "B",
        "text": "O Win + Tab funciona apenas com a internet desligada, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "O Alt + Tab alterna rapidamente entre as janelas abertas; já o Win + Tab abre a Visão de Tarefas, permitindo gerenciar Desktops Virtuais e a linha do tempo."
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
    "correctOption": "C",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Alt + Tab = Alterna janelas | Win + Tab = Visão de Tarefas e Desktops Virtuais."
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
        "text": "Substituir gradualmente o Painel de Controle tradicional, oferecendo uma interface moderna para personalização, redes, contas e atualizações."
      },
      {
        "key": "C",
        "text": "Impedir a instalação de antivírus terceiros."
      },
      {
        "key": "D",
        "text": "Gerenciar a velocidade do cooler da placa de vídeo em tempo real, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "E",
        "text": "Excluir o registro do Windows permanentemente."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Configurações (`Win + I`) = Central moderna de ajustes que substitui gradualmente o Painel de Controle."
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
        "text": "Planilha do Microsoft Excel = .PDF"
      },
      {
        "key": "C",
        "text": "Documento do Microsoft Word = .DOCX"
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
    "correctOption": "C",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. .DOCX = Documento do Microsoft Word."
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
        "text": "Guia Exibir -> Marcar a caixa de seleção 'Itens Ocultos'."
      },
      {
        "key": "B",
        "text": "Guia Inserir -> Clicar no botão 'Revelar Segredos'."
      },
      {
        "key": "C",
        "text": "Guia Arquivo -> Selecionar 'Formatar Unidade'."
      },
      {
        "key": "D",
        "text": "Pressionar as teclas Alt + F4 três vezes."
      },
      {
        "key": "E",
        "text": "Desligar o monitor de vídeo por 10 segundos, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Na guia 'Exibir' da faixa de opções do Explorador de Arquivos do Windows 10/11, basta marcar a caixa 'Itens Ocultos' para tornar visíveis os arquivos protegidos com esse atributo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Guia Exibir -> Marcar a opção 'Itens Ocultos'."
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
        "text": "Formatar o SSD em FAT16 a cada 15 dias, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "C",
        "text": "Mergulhar o drive SSD em água destilada para resfriamento."
      },
      {
        "key": "D",
        "text": "Executar a Otimização com o comando TRIM habilitado, evitando a desfragmentação pesada que desgasta a memória flash."
      },
      {
        "key": "E",
        "text": "Desativar permanentemente todas as atualizações de drivers."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. SSD = Utiliza TRIM para otimização; NÃO deve sofrer desfragmentação pesada."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "Os arquivos na Lixeira continuam ocupando espaço no disco até que a Lixeira seja esvaziada."
      },
      {
        "key": "B",
        "text": "Arquivos apagados de pen drives externos entram automaticamente para a Lixeira do C:."
      },
      {
        "key": "C",
        "text": "A Lixeira é capaz de armazenar arquivos sem nenhum limite de tamanho, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "D",
        "text": "A Lixeira limpa o computador contra todos os vírus de macro."
      },
      {
        "key": "E",
        "text": "Os arquivos da Lixeira são impressos automaticamente em papel."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A Lixeira é uma pasta especial do sistema. Enquanto os arquivos permanecerem nela, eles continuam consumindo espaço no HD até a exclusão definitiva ('Esvaziar Lixeira'). Arquivos de pen drives são excluídos diretamente.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Arquivos na Lixeira continuam ocupando espaço em disco até o esvaziamento."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Pen drives/mídias removíveis NÃO enviam para a Lixeira (são apagados direto)."
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
        "text": "Hibernar apaga todos os documentos sem salvar."
      },
      {
        "key": "B",
        "text": "Suspender consome mais energia que deixar o computador ligado em 100%."
      },
      {
        "key": "C",
        "text": "Suspender salva os dados na memória RAM (baixo consumo); Hibernar salva os dados no Disco Rígido (SSD/HD) e desliga o computador completamente."
      },
      {
        "key": "D",
        "text": "Hibernar é usado apenas quando o notebook está conectado à impressora, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "E",
        "text": "Ambos realizam a formatação completa do sistema."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Suspender coloca a máquina em estado de baixo consumo mantendo a RAM energizada. Hibernar salva a imagem da memória RAM no arquivo `hiberfil.sys` do SSD/HD e desliga a energia por completo.",
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
          "reason": "CORRETA. Suspender = Salva estado na RAM (gasta pouca luz) | Hibernar = Salva estado no SSD/HD e desliga 100%."
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
        "text": "Exigir senha de administrador a cada foto tirada pela câmera, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "Permitir ao usuário compartilhar apenas fotos e vídeos específicos com um aplicativo, sem conceder acesso a toda a sua galeria de mídias."
      },
      {
        "key": "E",
        "text": "Impedir o envio de imagens via WhatsApp."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Seletor de Fotos = Compartilha apenas fotos escolhidas sem expor toda a galeria."
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
        "text": "A localização precisa utiliza sinal de satélite GPS exato (com margem de poucos metros), enquanto a aproximada utiliza torres de celular e Wi-Fi para estimar a região sem expor a posição exata."
      },
      {
        "key": "B",
        "text": "A localização aproximada formata a memória do aparelho."
      },
      {
        "key": "C",
        "text": "A localização precisa funciona apenas com a bateria acima de 90%."
      },
      {
        "key": "D",
        "text": "A localização aproximada impede o uso do aplicativo de chamadas telefônicas."
      },
      {
        "key": "E",
        "text": "Ambas fornecem exatamente as mesmas coordenadas geográficas milimétricas, respeitando as diretrizes de governança de dados e controle de acessos."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Android 13+ reforça a privacidade oferecendo a escolha entre a localização 'Precisa' (GPS exato) me 'Aproximada' (estimativa por rede/Wi-Fi).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Precisa = GPS exato de metros | Aproximada = Estimativa por Wi-Fi/Torres sem expor posição exata."
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
        "text": "Formatador de fábrica ativado por voz."
      },
      {
        "key": "B",
        "text": "Alterar o plano da operadora de telefonia móvel sem pagar taxas."
      },
      {
        "key": "C",
        "text": "Acelerar a velocidade do processador do celular em 300%."
      },
      {
        "key": "D",
        "text": "Visualizar um histórico detalhado das últimas 24 horas informando quais aplicativos acessaram a câmera, microfone e localização."
      },
      {
        "key": "E",
        "text": "Substituir o cartão de memória SIM, de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "D",
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
          "reason": "CORRETA. Painel de Privacidade = Histórico das 24h de uso da Câmera, Microfone e Localização."
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
        "text": "Lixeira, Sistema e BIOS, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "C",
        "text": "Wi-Fi, Bluetooth e GPS."
      },
      {
        "key": "D",
        "text": "Download, Upload e Streaming."
      },
      {
        "key": "E",
        "text": "Fotos/Imagens (`READ_MEDIA_IMAGES`), Vídeos (`READ_MEDIA_VIDEO`) e Áudios (`READ_MEDIA_AUDIO`)."
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Acesso granular a mídias: Imagens, Vídeos e Áudios separados."
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
        "text": "Traduzir chamadas de voz em tempo real via rádio amador."
      },
      {
        "key": "B",
        "text": "Bloquear a digitação de palavras com acento, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "Converter o idioma do celular em código Morse."
      },
      {
        "key": "D",
        "text": "Definir idiomas diferentes para cada aplicativo individualmente sem alterar o idioma global do sistema operacional."
      },
      {
        "key": "E",
        "text": "Impedir o uso de dicionários virtuais."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Com o Android 13, o usuário pode configurar, por exemplo, o sistema em Português, mas manter um app de leitura em Inglês e outro em Espanhol.",
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
          "reason": "CORRETA. Idioma por aplicativo independente do sistema principal."
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
        "text": "Atualizam módulos críticos de segurança e privacidade diretamente pela nuvem do Google sem depender da aprovação da fabricante."
      },
      {
        "key": "B",
        "text": "Exigem a troca física do chip da operadora, respeitando as diretrizes de governança de dados e controle de acessos."
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
    "correctOption": "A",
    "explanation": {
      "summary": "O Projeto Mainline do Google permite atualizar partes centrais de segurança do sistema operacional Android via Play Store diretamente aos usuários.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Google Play System Updates = Atualizações diretas de segurança sem esperar a fabricante."
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
        "text": "File-Based Encryption (FBE - Criptografia Baseada em Arquivos)"
      },
      {
        "key": "B",
        "text": "Desfragmentação Óptica FAT32"
      },
      {
        "key": "C",
        "text": "Compressão ZIP com senha fraca"
      },
      {
        "key": "D",
        "text": "Protocolo HTTP sem SSL, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "E",
        "text": "Backup em fita magnética digital"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Android utiliza a Criptografia Baseada em Arquivos (FBE), que permite encriptar arquivos individuais com chaves diferentes vinculadas à credencial do usuário.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. FBE (File-Based Encryption) = Criptografia forte por arquivo no Android."
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
        "text": "Um ponto verde (ou ícone verde) na barra de status."
      },
      {
        "key": "B",
        "text": "Uma lâmpada vermelha piscante cobrindo 50% da tela, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "O desligamento automático da tela."
      },
      {
        "key": "D",
        "text": "Um aviso sonoro de sirene contínua."
      },
      {
        "key": "E",
        "text": "A reinicialização do smartphone."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Android exibe um ponto verde no canto superior direito sempre que a câmera ou o microfone são ativados por qualquer app.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Ponto verde na barra de status = Câmera ou Microfone em uso."
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
        "text": "IPv4 possui 32 bits e IPv6 possui 128 bits."
      },
      {
        "key": "E",
        "text": "Ambos possuem exatamente 64 bits."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. IPv4 = 32 bits | IPv6 = 128 bits."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "SMTP para baixar e-mails; POP3 para enviar e-mails; IMAP para formatar anexos."
      },
      {
        "key": "B",
        "text": "SMTP para criptografar o HD; POP3 para navegar na web; IMAP para imprimir e-mails, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "SMTP para enviar e-mails; POP3 para baixar e-mails removendo do servidor; IMAP para sincronizar e-mails mantendo-os no servidor."
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
    "correctOption": "C",
    "explanation": {
      "summary": "SMTP (Sua Mensagem Tá Partindo) envia e-mails. POP3 baixa as mensagens retirando do servidor. IMAP sincroniza as pastas em tempo real mantendo o histórico no servidor.",
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
          "reason": "CORRETA. SMTP = Enviar | POP3 = Baixar e remover | IMAP = Sincronizar no servidor."
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
        "text": "HTTP (Hypertext Transfer Protocol), de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "DHCP (Dynamic Host Configuration Protocol)"
      },
      {
        "key": "D",
        "text": "FTP (File Transfer Protocol)"
      },
      {
        "key": "E",
        "text": "ICMP (Internet Control Message Protocol)"
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. DHCP = Atribuição dinâmica e automática de endereços IP."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. FTP transfere arquivos."
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
        "text": "Conectar a impressora USB à tomada de luz."
      },
      {
        "key": "D",
        "text": "Traduzir nomes de domínio legíveis (como www.ibge.gov.br) em endereços IP numéricos correspondentes."
      },
      {
        "key": "E",
        "text": "Aumentar a carga da bateria do smartphone."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. DNS = Converte Nome/Domínio (URL) em Endereço IP numérico."
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
        "text": "A Intranet é uma rede privada restrita aos funcionários de uma organização que utiliza os mesmos protocolos e tecnologias da Internet (TCP/IP)."
      },
      {
        "key": "B",
        "text": "A Internet é uma rede de computadores aberta exclusivamente para os moradores da Bahia, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "C",
        "text": "A Extranet impede qualquer tipo de acesso externo, mesmo para parceiros autorizados com senha."
      },
      {
        "key": "D",
        "text": "Intranet e Internet são termos idênticos sem nenhuma diferença de acesso."
      },
      {
        "key": "E",
        "text": "A Intranet funciona sem a necessidade de nenhuma placa de rede."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Intranet = Rede privada corporativa baseada em TCP/IP. Extranet = Acesso externo autorizado de parceiros/clientes à Intranet. Internet = Rede pública mundial.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Intranet = Rede privada que usa tecnologias web (TCP/IP) restrita à empresa."
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
        "text": "A localização física informada pelos satélites de GPS, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "O histórico de navegação, cookies e dados inseridos em formulários."
      },
      {
        "key": "C",
        "text": "As mensagens enviadas no aplicativo WhatsApp Web."
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
        "text": "Vírus destructores de memória RAM."
      },
      {
        "key": "B",
        "text": "Programas executáveis de alto desempenho em formato .EXE, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "C",
        "text": "Filtros físicos acoplados ao cabo de rede UTP."
      },
      {
        "key": "D",
        "text": "Imagens de alta resolução em formato 4K."
      },
      {
        "key": "E",
        "text": "Pequenos arquivos de texto salvos pelo site no computador do usuário para armazenar preferências, sessões de login e rastreamento."
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. Cookies = Pequenos arquivos de texto com preferências e dados de sessão."
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
        "text": "Formatação automática de planilhas Excel, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "Filtro físico de ruídos no microfone."
      },
      {
        "key": "C",
        "text": "Conversão de arquivos em formato MP3."
      },
      {
        "key": "D",
        "text": "Criptografia SSL/TLS, exibindo o ícone de um cadeado na barra de endereços."
      },
      {
        "key": "E",
        "text": "Bloqueio do teclado numérico."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. HTTPS = HTTP + Criptografia SSL/TLS (Cadeado de Segurança)."
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
        "text": "3 camadas (Entrada, Processamento e Saída), visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "5 camadas (Hardware, Software, Firmware, Malware e Spyware)."
      },
      {
        "key": "C",
        "text": "10 camadas completas."
      },
      {
        "key": "D",
        "text": "2 camadas únicas."
      },
      {
        "key": "E",
        "text": "7 camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação e Aplicação)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O modelo OSI possui exatamente 7 camadas organizadas do nível físico ao nível de aplicativo.",
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
          "reason": "CORRETA. Modelo OSI = 7 Camadas (Física, Enlace, Rede, Transporte, Sessão, Apresentação, Aplicação)."
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
        "text": "Baixar o código-fonte completo do site em formato .ZIP."
      },
      {
        "key": "C",
        "text": "Instalar o aplicativo do IBGE no computador, conforme as especificações técnicas de homologação do ambiente de redes."
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
        "text": "FTP (File Transfer Protocol)"
      },
      {
        "key": "C",
        "text": "DNS (Domain Name System)"
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
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. FTP = Transferência de Arquivos entre cliente e servidor."
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
        "text": "FTP Anônimo"
      },
      {
        "key": "D",
        "text": "Telnet sem senha"
      },
      {
        "key": "E",
        "text": "WPA3 (Wi-Fi Protected Access 3)"
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. WPA3 = Padrão mais forte de segurança para redes sem fio Wi-Fi."
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
        "text": "Lógico alterado dinamicamente a cada reinicialização pelo servidor DHCP, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "Virtual que muda dependendo do navegador utilizado."
      },
      {
        "key": "C",
        "text": "Físico gravado na placa de rede pelo fabricante, composto por 48 bits (6 pares hexadecimais)."
      },
      {
        "key": "D",
        "text": "Temporário que expira a cada 24 horas."
      },
      {
        "key": "E",
        "text": "De texto correspondente à URL da página inicial."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Endereço MAC = Endereço FÍSICO de hardware (48 bits / Hexadecimal)."
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
        "text": "VPN (Virtual Private Network)"
      },
      {
        "key": "B",
        "text": "Conexão Bluetooth de curta distância"
      },
      {
        "key": "C",
        "text": "Lixeira compartilhada"
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
    "correctOption": "A",
    "explanation": {
      "summary": "Uma VPN cria um túnel virtual criptografado sobre a Internet, garantindo confidencialidade nos dados entre o computador remoto e a rede privada da empresa.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. VPN = Túnel Criptografado seguro sobre a Internet pública para acesso remoto."
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
        "text": "Apenas o backup realizado na quinta-feira."
      },
      {
        "key": "B",
        "text": "Apenas o backup Full realizado na segunda-feira, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "C",
        "text": "Apenas o último backup incremental de quinta-feira."
      },
      {
        "key": "D",
        "text": "A formatação completa de todas as unidades sem possibilidade de restauração."
      },
      {
        "key": "E",
        "text": "O backup Full de segunda-feira E TODOS os backups incrementais (terça, quarta e quinta)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Para restaurar um plano de backup Incremental, necessita-se do último backup FULL mais TODOS os backups incrementais gerados em ordem cronológica até a data da falha.",
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
          "reason": "CORRETA. Restaurar Incremental = ÚLTIMO FULL + TODOS OS INCREMENTAIS."
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
        "text": "Todos os arquivos do sistema novamente todos os dias."
      },
      {
        "key": "B",
        "text": "Apenas os arquivos de fotos e vídeos em formato JPG."
      },
      {
        "key": "C",
        "text": "Apenas os arquivos da lixeira do Windows, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "Apenas os arquivos alterados desde o ÚLTIMO backup do tipo FULL (Completo), acumulando as alterações."
      },
      {
        "key": "E",
        "text": "Dados exclusivos armazenados em fitas cassete de áudio."
      }
    ],
    "correctOption": "D",
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
          "reason": "CORRETA. Diferencial = Copia dados alterados desde o último backup FULL (acumulativo)."
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
        "text": "Código malicioso que criptografa os arquivos do sistema e exige o pagamento de um resgate para disponibilizar a chave de decodificação."
      },
      {
        "key": "B",
        "text": "Programa que se oculta no sistema para exibir anúncios publicitários indesejados."
      },
      {
        "key": "C",
        "text": "Software legítimo que acelera o desempenho do processador."
      },
      {
        "key": "D",
        "text": "Dispositivo físico utilizado para filtrar pacotes de rede de dados."
      },
      {
        "key": "E",
        "text": "Técnica de invasão que altera o endereço IP da placa de rede, respeitando as diretrizes de governança de dados e controle de acessos."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Ransomware ('Ransom' = resgate) é o malware que sequestra dados bloqueando o acesso por meio de criptografia forte e exigindo resgate.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Ransomware = Criptografia de arquivos com cobrança de resgate."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Adware."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Firewall."
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
        "text": "Firewall"
      },
      {
        "key": "B",
        "text": "Defragmentação de Disco"
      },
      {
        "key": "C",
        "text": "Backup Diferencial"
      },
      {
        "key": "D",
        "text": "Spyware Keylogger"
      },
      {
        "key": "E",
        "text": "Phishing"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Phishing ('pescaria') é uma fraude eletrônica baseada em engenharia social que engana o usuário usando mensagens/sites clonados persuasivos para roubar senhas e dados confidenciais.",
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
          "reason": "CORRETA. Phishing = E-mail/site falso para induzir o usuário a entregar dados sigilosos."
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
        "text": "O Antivírus protege apenas redes sem fio Wi-Fi, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "D",
        "text": "Ambos são nomes diferentes para o mesmo programa de impressão."
      },
      {
        "key": "E",
        "text": "O Firewall serve unicamente para acelerar jogos eletrônicos."
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
        "text": "Keylogger"
      },
      {
        "key": "D",
        "text": "Ransomware"
      },
      {
        "key": "E",
        "text": "Trojan Horse"
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Keylogger = Registrador das teclas digitadas no teclado."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Ransomware é criptografia de resgate."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Trojan é cavalo de tróia."
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
        "text": "Duplicar-se automaticamente explorando vulnerabilidades de rede sem precisar de hospedeiro."
      },
      {
        "key": "C",
        "text": "Criptografar arquivos e pedir resgate em Bitcoin, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
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
        "text": "3 computadores conectados, 2 impressoras e 1 escêner."
      },
      {
        "key": "B",
        "text": "3 cópias dos dados, em 2 mídias de tipos diferentes, com 1 cópia armazenada fora do local de trabalho (offsite/nuvem)."
      },
      {
        "key": "C",
        "text": "3 senhas diferentes para 2 usuários em 1 único arquivo."
      },
      {
        "key": "D",
        "text": "3 dias de teste, 2 meses de garantia e 1 formato PDF."
      },
      {
        "key": "E",
        "text": "3 antivírus rodando ao mesmo tempo em 2 sistemas operacionais, respeitando as diretrizes de governança de dados e controle de acessos."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Regra 3-2-1: 3 Cópias | 2 Mídias distintas | 1 Fora da empresa (Offsite/Nuvem)."
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
        "text": "A Assimétrica não utiliza nenhuma chave matemática, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "A Simétrica exige autorização prévia da operadora de telefonia."
      },
      {
        "key": "D",
        "text": "Ambas utilizam exatamente 10 chaves simultâneas."
      },
      {
        "key": "E",
        "text": "A Simétrica utiliza a mesma chave secreta para cifrar e decifrar; a Assimétrica utiliza um par de chaves diferentes (Chave Pública e Chave Privada)."
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Simétrica = 1 Chave igual | Assimétrica = Par de Chaves (Pública e Privada)."
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
        "text": "Duas provas de identidade de categorias distintas (ex: Algo que você sabe [Senha] + Algo que você possui [Celular/Token])."
      },
      {
        "key": "C",
        "text": "Ter dois monitores de vídeo conectados ao computador."
      },
      {
        "key": "D",
        "text": "Aprovação prévia do sindicato dos trabalhadores."
      },
      {
        "key": "E",
        "text": "Cadastrar duas contas de e-mail com o mesmo nome, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. 2FA = Exige 2 fatores de categorias distintas (Senha + Token/Celular/Biometria)."
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
        "text": "Multiplicar as células A1 e A10 pelo fator 50."
      },
      {
        "key": "D",
        "text": "Substituir os números maiores que 50 por zero."
      },
      {
        "key": "E",
        "text": "Excluir as linhas de A1 a A10 do arquivo, conforme as especificações técnicas de homologação do ambiente de redes."
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
        "text": "Converter o valor numérico para a moeda Dólar Americano."
      },
      {
        "key": "B",
        "text": "Multiplicar a célula B2 por 100 automaticamente, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "C",
        "text": "Indicar que a célula B2 contém um erro de sintaxe."
      },
      {
        "key": "D",
        "text": "Ocultar o resultado do cálculo para outros usuários."
      },
      {
        "key": "E",
        "text": "Fixar/Travar a referência da célula B2 (coluna B e linha 2), impedindo que ela mude ao copiar ou arrastar a fórmula para outras células."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O cifrão `$` é o operador de fixação de referência absoluta no Excel. `$B$2` fixa tanto a coluna quanto a linha ao arrastar a alça de preenchimento.",
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
          "reason": "CORRETA. Cifrão (`$`) = Fixa a referência de linha/coluna (Referência Absoluta)."
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
        "text": "Procurar por uma correspondência aproximada ordenada, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "Retornar uma mensagem de erro em todos os casos."
      },
      {
        "key": "C",
        "text": "Procurar por uma correspondência EXATA do valor desejado na primeira coluna da tabela."
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
    "correctOption": "C",
    "explanation": {
      "summary": "`PROCV` com parâmetro final `FALSO` (ou `0`) exige busca por correspondência exata. Se não encontrar o valor idêntico, retorna o erro `#N/A`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Correspondência aproximada é usada com VERDADEIRO/1."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. PROCV com FALSO/0 = Busca correspondência EXATA."
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
        "text": "Ctrl + S"
      },
      {
        "key": "B",
        "text": "Ctrl + G"
      },
      {
        "key": "C",
        "text": "Ctrl + A"
      },
      {
        "key": "D",
        "text": "Ctrl + B"
      },
      {
        "key": "E",
        "text": "Ctrl + P, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "No Word em Português: `Ctrl + B` = Salvar ('B' de Backup). No Word em Inglês que é `Ctrl + S` (Save).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + S` no Word em português aplica Sublinhado!"
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + G` alinha à direita."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + A` abre documento."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Word Português: `Ctrl + B` = Salvar documento."
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
        "text": "Ctrl + Z e Ctrl + Y"
      },
      {
        "key": "B",
        "text": "Ctrl + X e Ctrl + C"
      },
      {
        "key": "C",
        "text": "Ctrl + V e Ctrl + P"
      },
      {
        "key": "D",
        "text": "Alt + Z e Alt + Y, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "E",
        "text": "Ctrl + A e Ctrl + B"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "`Ctrl + Z` desfaz a última alteração. `Ctrl + Y` refaz a ação desfeita no Word.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + Z` = Desfazer | `Ctrl + Y` = Refazer."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + X` recorta, `Ctrl + C` copia."
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
        "text": "Verificar vírus no documento."
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
        "text": "Gerar em lote documentos personalizados (como cartas, etiquetas ou e-mails) mesclando um modelo com uma base de dados externa (como uma lista do Excel)."
      },
      {
        "key": "E",
        "text": "Formatador de discos rígidos em rede, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. Mala Direta = Cria documentos personalizados em lote fundindo modelo + base de dados."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "Quebra de Linha simples (Shift + Enter)."
      },
      {
        "key": "B",
        "text": "Quebra de Coluna."
      },
      {
        "key": "C",
        "text": "Quebra de Parágrafo."
      },
      {
        "key": "D",
        "text": "Quebra de Seção (Próxima Página)."
      },
      {
        "key": "E",
        "text": "Formatação de fonte em negrito."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Formatamentos de página distintos (como orientação Retrato/Paisagem, margens ou cabeçalhos diferentes) dentro do mesmo arquivo EXIGEM o uso de Quebra de Seção.",
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
          "reason": "CORRETA. Quebra de Seção = Permite diferentes orientações/cabeçalhos no mesmo arquivo."
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
        "text": "Entregamos o relatório à ele durante a reunião de planejamento."
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
        "text": "O agente referiu-se à todas as pesquisas realizadas, de acordo com a norma-padrão da Língua Portuguesa."
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
        "text": "A reunião do IBGE terá início pontualmente às 14 horas."
      },
      {
        "key": "C",
        "text": "O posto funciona de 8a 18 horas."
      },
      {
        "key": "D",
        "text": "Permanecemos na sala por a mais de três horas."
      },
      {
        "key": "E",
        "text": "A prova começará a uma hora da tarde de domingo, segundo os preceitos da gramática normativa pátria."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Horas exatas = Uso de crase obrigatório (às 14 horas)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Na expressão 'de... a...', se não há artigo no início, não há crase."
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
        "text": "A aluna dedicou-se à leitura dos manuais do IBGE."
      },
      {
        "key": "C",
        "text": "O pagamento do subsídio foi efetuado a prazo."
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
    "correctOption": "C",
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
          "isCorrect": false,
          "reason": "Incorreto. 'À leitura' tem crase correta."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'Prazo' é palavra masculina = Crase PROIBIDA."
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
        "text": "Apenas 'à', sendo o uso rigorosamente obrigatório, considerando o sentido denotativo e a coesão textual da frase."
      },
      {
        "key": "B",
        "text": "Tanto 'a' quanto 'à', pois o uso da crase é facultativo antes de pronomes possessivos femininos singulares."
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
        "text": "Apenas 'às', no plural."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Antes de pronomes possessivos femininos no singular (minha, tua, sua, nossa), o uso do artigo é facultativo, tornando a crase facultativa (a minha / à minha).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Antes de pronome possessivo feminino singular (minha/sua), a crase é FACULTATIVA."
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
        "text": "O recenseador agiu às pressas para concluir as entrevistas do setor."
      },
      {
        "key": "B",
        "text": "O candidato respondeu a todas as perguntas sem hesitar, respeitando a pontuação e a estrutura sintática das orações."
      },
      {
        "key": "C",
        "text": "Eles caminharam a passos lentos durante a tarde."
      },
      {
        "key": "D",
        "text": "Entregou o documento a uma funcionária do posto."
      },
      {
        "key": "E",
        "text": "Ela viajou a serviço da empresa."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Locuções adverbiais, conjuntivas ou prepositivas femininas exigem crase obrigatória: 'às pressas', 'à noite', 'às vezes', 'à medida que', 'à procura de'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. 'Às pressas' = Locução adverbial feminina (exige crase)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'A todas' não leva crase."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. 'Passos' é masculino."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. 'Uma' é artigo indefinido."
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
        "text": "a"
      },
      {
        "key": "B",
        "text": "à"
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
    "correctOption": "B",
    "explanation": {
      "summary": "O verbo ASSISTIR no sentido de ver/presenciar é Transitivo Indireto e exige a preposição 'a'. Juntando com o artigo 'a' de 'palestra', resulta em 'à palestra'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Sem crase violaria a regência com o artigo feminino."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Assistir (sentido de ver/presenciar) exige preposição A (assistir à palestra)."
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
        "text": "O novo concurso do IBGE visa ao provimento de vagas na Bahia."
      },
      {
        "key": "C",
        "text": "O diretor visou a aprovação dos novos orçamentos censitários."
      },
      {
        "key": "D",
        "text": "Todas as medidas visam o bem-estar dos cidadãos."
      },
      {
        "key": "E",
        "text": "O projeto visa em melhorar o atendimento."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Visar (sentido de almejar/ter por objetivo) exige preposição A (visa ao provimento)."
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
        "text": "Chegamos no posto de coleta do IBGE no primeiro horário, em conformidade com as regras de regência e concordância culta."
      },
      {
        "key": "B",
        "text": "Vou no cinema assistir ao filme sobre estatística."
      },
      {
        "key": "C",
        "text": "Fomos na capital para resolver pendências administrativas."
      },
      {
        "key": "D",
        "text": "Nós chegamos em Salvador às 8 horas da manhã."
      },
      {
        "key": "E",
        "text": "Chegamos ao posto de coleta do IBGE logo no primeiro horário da manhã."
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto. Deve ser 'Fomos à capital'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Verbo Chegar exige a preposição A (Chegamos ao posto)."
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
        "text": "O candidato esqueceu-se do comprovante de inscrição no dia da prova."
      },
      {
        "key": "D",
        "text": "Nós esquecemos das orientações passadas pelo supervisor."
      },
      {
        "key": "E",
        "text": "Eles lembraram-se o código de acesso, considerando o sentido denotativo e a coesão textual da frase."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Pronomial = Exige DE (Esqueceu-se DO comprovante)."
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
        "text": "O agente estava ansioso por obter o resultado definitivo do processo seletivo."
      },
      {
        "key": "C",
        "text": "O documento é compatível de todas as normas do IBGE."
      },
      {
        "key": "D",
        "text": "O supervisor mostrou-se imune de críticas destrutivas, respeitando a pontuação e a estrutura sintática das orações."
      },
      {
        "key": "E",
        "text": "O relatório é equivalente com os dados anteriores."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Ansioso POR obter resultado."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Compatível COM."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Imune A."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Equivalente A."
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
        "text": "Haviam muitos candidatos aguardando a abertura dos portões do local de prova."
      },
      {
        "key": "B",
        "text": "Havia muitos candidatos aguardando a abertura dos portões do local de prova."
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
    "correctOption": "B",
    "explanation": {
      "summary": "O verbo HAVER no sentido de existir ou ocorrer é IMPESSOAL, devendo permanecer sempre no singular (3ª pessoa do singular), independente do complemento.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Haviam' no plural é erro grave."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Haver (sentido de existir) = Impessoal (Fica sempre no singular: Havia muitos candidatos)."
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
        "text": "Fazem três anos que o concurso do IBGE foi homologado."
      },
      {
        "key": "B",
        "text": "Fazem dois meses que não chove no sertão baiano."
      },
      {
        "key": "C",
        "text": "Vão fazer cinco dias que os agentes estão em campo."
      },
      {
        "key": "D",
        "text": "Faz três anos que o concurso do IBGE foi homologado."
      },
      {
        "key": "E",
        "text": "Fazeriam dez anos desde o último recenseamento."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O verbo FAZER indicando tempo decorrido ou clima é IMPESSOAL e permanece rigorosamente no singular (3ª pessoa do singular).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Fazem três anos' é erro de concordância."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. O auxiliar também fica no singular: 'Vai fazer cinco dias'."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Faz três anos (tempo decorrido = singular)."
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
        "text": "Apenas 'realizou', pois o núcleo do sujeito é singular, em conformidade com as regras de regência e concordância culta."
      },
      {
        "key": "B",
        "text": "Tanto 'realizou' quanto 'realizaram', pois com expressões partitivas a concordância pode ser no singular ou no plural."
      },
      {
        "key": "C",
        "text": "Apenas 'realizaram', concordando com o termo no plural."
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
    "correctOption": "B",
    "explanation": {
      "summary": "Diante de expressões partitivas ('a maioria de', 'a grande parte de', 'a metade de') seguidas de termo no plural, a concordância é FACULTATIVA (concorda com a maioria = realizou, ou com candidatos = realizaram).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Expressão partitiva + plural = Concordância facultativa (singular ou plural)."
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
        "text": "É necessário paciência para responder aos questionários longos, considerando o sentido denotativo e a coesão textual da frase."
      },
      {
        "key": "D",
        "text": "Água de coco é boa para a saúde durante o trabalho no campo."
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
        "text": "Salvador, capital da Bahia, receberá novos postos de atendimento, de acordo com a norma-padrão da Língua Portuguesa."
      },
      {
        "key": "C",
        "text": "Embora estivesse chovendo, o recenseador cumpriu a meta diária."
      },
      {
        "key": "D",
        "text": "Estudamos bastante; portanto, seremos aprovados."
      },
      {
        "key": "E",
        "text": "Os candidatos mais bem preparados, obtiveram as melhores notas no concurso."
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. 'Os candidatos mais bem preparados, obtiveram...' separa sujeito do verbo com vírgula (ERRO GRAVE)."
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
        "text": "Durante a realização das pesquisas de campo em Salvador, os agentes coletaram dados valiosos."
      },
      {
        "key": "B",
        "text": "Pedro, venha pegar seu cartão de confirmação."
      },
      {
        "key": "C",
        "text": "O IBGE é uma grande instituição, todavia precisa de investimentos, considerando o sentido denotativo e a coesão textual da frase."
      },
      {
        "key": "D",
        "text": "Comprei lápis, borracha e caneta."
      },
      {
        "key": "E",
        "text": "Ele é um professor dedicado, inteligente e pontual."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Quando o adjunto adverbial é longo e vem anteposto (deslocado para o início da frase), a vírgula é OBRIGATÓRIA.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Adjunto adverbial longo anteposto ('Durante a realização das pesquisas de campo em Salvador,')."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Isola vocativo."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Oração adversativa."
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
        "text": "É proibido usar vírgula antes da conjunção 'mas'."
      },
      {
        "key": "B",
        "text": "A vírgula deve ser colocada após a palavra 'mas' obrigatoriamente."
      },
      {
        "key": "C",
        "text": "As conjunções adversativas dispensam qualquer sinal de pontuação."
      },
      {
        "key": "D",
        "text": "A vírgula é OBRIGATÓRIA antes das conjunções adversativas (mas, porém, contudo, todavia, no entanto)."
      },
      {
        "key": "E",
        "text": "O ponto e vírgula é proibido em frases com 'contudo', respeitando a pontuação e a estrutura sintática das orações."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Antes de conjunções adversativas (*mas, porém, contudo, todavia, no entanto, entretanto*), o uso da vírgula é OBRIGATÓRIO na norma-padrão.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Não se usa vírgula LOGO APÓS o 'mas' (a menos que haja termo intercalado)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Vírgula obrigatória antes de conjunção adversativa (mas, porém, contudo)."
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
        "text": "Consequência (resultado da ação), de acordo com a norma-padrão da Língua Portuguesa."
      },
      {
        "key": "D",
        "text": "Condição (requisito necessário)."
      },
      {
        "key": "E",
        "text": "Comparação (igualdade de fatos)."
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
        "text": "Como estava chovendo, não saímos de casa."
      },
      {
        "key": "B",
        "text": "Caso você precise de ajuda, chame o supervisor."
      },
      {
        "key": "C",
        "text": "Ele trabalhou tanto que ficou exausto."
      },
      {
        "key": "D",
        "text": "Fizemos o censo conforme as instruções do manual, segundo os preceitos da gramática normativa pátria."
      },
      {
        "key": "E",
        "text": "O candidato estudou muito, CONTUDO não obteve a pontuação mínima."
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto. 'Tanto que' é Consecutiva."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. 'Conforme' é Conformativa."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Contudo = Adversativa (Oposição / Contraste)."
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
        "text": "Sem vírgulas, a frase torna-se gramaticalmente errada, em conformidade com as regras de regência e concordância culta."
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
        "text": "Ambas são conjunções concessivas equivalentes a *embora*."
      },
      {
        "key": "C",
        "text": "Ambas indicam dúvida ou incerteza, considerando o sentido denotativo e a coesão textual da frase."
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
        "text": "Metonímia (substituição do autor pela obra)."
      },
      {
        "key": "D",
        "text": "Eufemismo (suavização de uma ideia desagradável)."
      },
      {
        "key": "E",
        "text": "Pleonasmo (redundância vocabular)."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Metonímia = Troca do Autor pela Obra ('Ler Machado de Assis')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Eufemismo é suavização."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "Se o agente obtém a aprovação, então ele estuda."
      },
      {
        "key": "D",
        "text": "O agente não estuda e não obtém a aprovação."
      },
      {
        "key": "E",
        "text": "O agente estuda E não obtém a aprovação."
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. Mantém a 1ª ('o agente estuda') E nega a 2ª ('não obtém a aprovação')."
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
        "text": "Se o trânsito fica lento, então chove em Salvador."
      },
      {
        "key": "B",
        "text": "Se não chove em Salvador, então o trânsito não fica lento."
      },
      {
        "key": "C",
        "text": "Chove em Salvador e o trânsito não fica lento."
      },
      {
        "key": "D",
        "text": "Não chove em Salvador e o trânsito fica lento, segundo as regras formais das tabelas-verdade e conectivos."
      },
      {
        "key": "E",
        "text": "Se o trânsito NÃO fica lento, então NÃO chove em Salvador."
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto. Apenas negou sem inverter."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Essa é a negação lógica."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. Contrapositiva: Inverteu a ordem e negou ambos os termos ('Se o trânsito não fica lento, então não chove em Salvador')."
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
        "text": "Se Pedro é agente de informática, então a prova é fácil, considerando a valoração lógica e o conjunto universo dos elementos."
      },
      {
        "key": "C",
        "text": "Pedro é agente de informática OU a prova é fácil."
      },
      {
        "key": "D",
        "text": "Pedro não é agente de informática e a prova é fácil."
      },
      {
        "key": "E",
        "text": "Pedro não é agente de informática OU a prova não é fácil."
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. Negou a 1ª ('Pedro não é agente'), trocou 'E' por 'OU' e negou a 2ª ('a prova não é fácil')."
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
        "text": "O candidato não faz o simulado E não revisa os bizus."
      },
      {
        "key": "B",
        "text": "O candidato não faz o simulado OU não revisa os bizus."
      },
      {
        "key": "C",
        "text": "Se o candidato faz o simulado, então revisa os bizus."
      },
      {
        "key": "D",
        "text": "O candidato faz o simulado E revisa os bizus."
      },
      {
        "key": "E",
        "text": "O candidato revisa os bizus ou faz o simulado."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Negar a disjunção (P ou Q) exige negar a primeira (~P), trocar o 'OU' por 'E', e negar a segunda (~Q): ~P e ~Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Negou a 1ª, trocou 'OU' por 'E' e negou a 2ª."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Não trocou o conectivo."
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
        "text": "Não estudo OU passo."
      },
      {
        "key": "D",
        "text": "Estudo e não passo."
      },
      {
        "key": "E",
        "text": "Não estudo se e somente se passo."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Regra do Neumar: NEga a 1ª ('Não estudo') OU MAntém a 2ª ('passo')."
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
        "text": "Nenhum candidato foi aprovado."
      },
      {
        "key": "C",
        "text": "ALGUM candidato foi reprovado."
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
    "correctOption": "C",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Negação do 'Nenhum' = 'Algum / Pelo menos um / Existe' (sem o não)."
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
        "text": "NENHUM recenseador fala inglês."
      },
      {
        "key": "E",
        "text": "Todos os recenseadores não falam espanhol."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. Negação do 'Algum é' = 'Nenhum é'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "Se o servidor é promovido, então não atinge a meta, conforme os postulados da teoria dos conjuntos e quantificadores."
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
        "text": "Apenas a segunda proposição Q for verdadeira."
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
        "text": "Ambas as proposições forem falsas obrigatoriamente, de acordo com os princípios da lógica proposicional."
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
        "text": "Quando ambas P e Q são falsas."
      },
      {
        "key": "C",
        "text": "Quando P é falsa e Q é verdadeira."
      },
      {
        "key": "D",
        "text": "Quando P é VERDADEIRA e Q é FALSA (V -> F = F)."
      },
      {
        "key": "E",
        "text": "Em nenhum caso, pois a condicional é sempre verdadeira."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": false,
          "reason": "Incorreto. F -> F = V."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. F -> V = V."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. V -> F = FALSO (Regra da Vera Fischer)."
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
        "text": "Pelo menos uma das proposições for verdadeira, considerando a valoração lógica e o conjunto universo dos elementos."
      },
      {
        "key": "B",
        "text": "Ambas as proposições forem falsas."
      },
      {
        "key": "C",
        "text": "A primeira for falsa e a segunda for verdadeira."
      },
      {
        "key": "D",
        "text": "Ambas as proposições P e Q forem simultaneamente VERDADEIRAS."
      },
      {
        "key": "E",
        "text": "Nenhuma proposição for avaliada."
      }
    ],
    "correctOption": "D",
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
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Conjunção E = Exige V e V para ser VERDADEIRO."
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
        "text": "Ambas as proposições forem verdadeiras, respeitando as leis de equivalência e dedução matemática."
      },
      {
        "key": "B",
        "text": "A primeira for verdadeira e a segunda falsa."
      },
      {
        "key": "C",
        "text": "Ambas as proposições P e Q forem simultaneamente FALSAS."
      },
      {
        "key": "D",
        "text": "A primeira for falsa e a segunda verdadeira."
      },
      {
        "key": "E",
        "text": "Uma das proposições for verdadeira."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. Disjunção OU = Só dá FALSO se ambos os lados forem FALSOS (F ou F = F)."
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
        "text": "Contingência"
      },
      {
        "key": "C",
        "text": "Equivocação"
      },
      {
        "key": "D",
        "text": "Falácia Informal"
      },
      {
        "key": "E",
        "text": "Tautologia"
      }
    ],
    "correctOption": "E",
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
          "isCorrect": false,
          "reason": "Incorreto. Contingência tem V e F."
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
          "reason": "CORRETA. Tautologia = Tabela-verdade 100% VERDADEIRA."
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
        "text": "O agente é baiano E o agente não é baiano (P ^ ~P)."
      },
      {
        "key": "B",
        "text": "Se o agente é baiano, então ele é baiano e não é baiano."
      },
      {
        "key": "C",
        "text": "O agente é baiano se e somente se é paulista."
      },
      {
        "key": "D",
        "text": "O agente não é baiano nem brasileiro."
      },
      {
        "key": "E",
        "text": "O agente é baiano OU o agente não é baiano (P v ~P)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O princípio do terceiro excluído (P ou ~P) é uma Tautologia clássica: ou uma proposição é verdadeira ou sua negação é verdadeira. O resultado final da tabela é sempre V.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. (P ^ ~P) é uma Contradição (sempre falsa)."
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
          "reason": "CORRETA. (P v ~P) = Tautologia (Lei do Terceiro Excluído)."
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
        "text": "10 candidatos."
      },
      {
        "key": "B",
        "text": "20 candidatos, segundo as regras formais das tabelas-verdade e conectivos."
      },
      {
        "key": "C",
        "text": "30 candidatos."
      },
      {
        "key": "D",
        "text": "40 candidatos."
      },
      {
        "key": "E",
        "text": "50 candidatos."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Usando o Diagrama de Venn: Apenas Excel = 60 - 20 = 40. Apenas Word = 50 - 20 = 30. Ambos = 20. Total que domina ao menos um = 40 + 30 + 20 = 90. Nenhum = 100 - 90 = 10.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Total = 100 - (40 + 30 + 20) = 10 candidatos."
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
        "text": "{1, 2, 3}"
      },
      {
        "key": "D",
        "text": "{1, 2, 3, 4, 5, 6, 7}"
      },
      {
        "key": "E",
        "text": "{ } (conjunto vazio)"
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. A - B = {1, 2, 3}."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. União (A U B)."
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
        "text": "35, respeitando as leis de equivalência e dedução matemática."
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
        "text": "37"
      },
      {
        "key": "E",
        "text": "32"
      }
    ],
    "correctOption": "D",
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
          "isCorrect": true,
          "reason": "CORRETA. Diferenças ímpares (+3, +5, +7, +9, +11). X = 26 + 11 = 37."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
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
        "text": "50% (ou 1/2), conforme os postulados da teoria dos conjuntos e quantificadores."
      },
      {
        "key": "C",
        "text": "20% (ou 2/10)"
      },
      {
        "key": "D",
        "text": "80% (ou 8/10)"
      },
      {
        "key": "E",
        "text": "40% (ou 4/10)"
      }
    ],
    "correctOption": "E",
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
          "reason": "CORRETA. Probabilidade = 4 / 10 = 40%."
        }
      ],
      "bizu": "💡 BIZU IBFC: Probabilidade = (Quero / Total). Quero 4 azuis de um total de 10 = 4/10 = 40%."
    }
  },
  {
    "id": "inf-hw-013",
    "subject": "Informática",
    "topic": "1. Hardware - Barramentos PCI Express (PCIe)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Nos slots de expansão da placa-mãe de um computador moderno, o barramento PCI Express x16 é utilizado preferencialmente para a instalação de:",
    "options": [
      {
        "key": "A",
        "text": "Cartões de memória RAM adicionais."
      },
      {
        "key": "B",
        "text": "Módulos de memória ROM de fábrica, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "Cabos de alimentação de energia da fonte."
      },
      {
        "key": "D",
        "text": "Conectores de áudio analógico P2."
      },
      {
        "key": "E",
        "text": "Placas de vídeo de alto desempenho gráfico (GPU)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O slot PCIe x16 possui 16 linhas de transmissão de dados bidirecionais simultâneas, oferecendo a maior largura de banda da placa-mãe, ideal para placas de vídeo dedicadas.",
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
          "reason": "CORRETA. PCIe x16 = Slot de altíssima largura de banda dedicado a placas de vídeo (GPU)."
        }
      ],
      "bizu": "💡 BIZU IBFC: PCIe x16 = Placa de Vídeo dedicada | PCIe x1 = Placas de Som/Rede simples."
    }
  },
  {
    "id": "inf-hw-014",
    "subject": "Informática",
    "topic": "1. Hardware - Memórias DDR4 vs DDR5",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação à evolução das memórias RAM padrão DDR4 e DDR5 nos novos desktops corporativos, assinale a afirmação verdadeira:",
    "options": [
      {
        "key": "A",
        "text": "A memória DDR5 opera em frequências de clock significativamente maiores e consome menor voltagem que a DDR4."
      },
      {
        "key": "B",
        "text": "A memória DDR4 é física e eletricamente compatível com os mesmos slots da DDR5."
      },
      {
        "key": "C",
        "text": "A memória DDR5 armazena dados em discos magnéticos giratórios."
      },
      {
        "key": "D",
        "text": "A memória DDR4 perde a função de leitura de dados ao desligar o monitor."
      },
      {
        "key": "E",
        "text": "Ambas possuem o encaixe físico exatamente idêntico sem nenhuma diferença no chanfro, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A tecnologia DDR5 traz maior largura de banda, frequências mais altas (acima de 4800 MHz) e menor tensão (1,1V vs 1,2V da DDR4), além de chanfro físico diferente que impede o encaixe incorreto.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. DDR5 = Maior velocidade, menor consumo elétrico (1.1V) e chanfro físico diferente."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Não são compatíveis no mesmo slot."
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
      "bizu": "💡 BIZU IBFC: Memórias DDR4 e DDR5 NÃO possuem compatibilidade física no mesmo slot (possuem chanfros diferentes)."
    }
  },
  {
    "id": "inf-hw-015",
    "subject": "Informática",
    "topic": "2. Hardware - Leitor Biométrico",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "O leitor de impressão digital acoplado aos notebooks e tablets de coleta do IBGE é classificado como um dispositivo de:",
    "options": [
      {
        "key": "A",
        "text": "Saída de dados (Output), encarregado de imprimir o comprovante de presença."
      },
      {
        "key": "B",
        "text": "Armazenamento secundário óptico em formato de disco."
      },
      {
        "key": "C",
        "text": "Entrada de dados (Input), responsável por capturar a imagem da digital e enviá-la ao sistema de verificação."
      },
      {
        "key": "D",
        "text": "Processamento lógico e aritmético das fórmulas do Excel."
      },
      {
        "key": "E",
        "text": "Comunicação analógica via fita de vídeo, conforme as especificações técnicas de homologação do ambiente de redes."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Leitores biométricos capturam a informação biológica externa e a convertem em sinais digitais enviados PARA o computador (Entrada de dados).",
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
          "reason": "CORRETA. Leitor Biométrico = Dispositivo exclusivo de ENTRADA de dados."
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
      "bizu": "💡 BIZU IBFC: Leitor Biométrico / Câmera / Scanner / Microfone = Periféricos de ENTRADA."
    }
  },
  {
    "id": "inf-hw-016",
    "subject": "Informática",
    "topic": "1. Hardware - Firmware UEFI e Secure Boot",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "O padrão UEFI (Unified Extensible Firmware Interface), que substituiu a antiga BIOS nos computadores modernos, inclui o recurso 'Secure Boot' (Inicialização Segura), cuja função principal é:",
    "options": [
      {
        "key": "A",
        "text": "Impedir a execução de sistemas operacionais e drivers não assinados digitalmente ou maliciosos durante o boot da máquina."
      },
      {
        "key": "B",
        "text": "Aumentar a velocidade da conexão de internet sem fio Wi-Fi."
      },
      {
        "key": "C",
        "text": "Formatador de arquivos do Word em modo automático."
      },
      {
        "key": "D",
        "text": "Apagar as fotos do celular do usuário a cada inicialização."
      },
      {
        "key": "E",
        "text": "Desativar o uso do teclado físico durante a digitação de senhas, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Secure Boot verifica a assinatura digital do bootloader e dos drivers do sistema operacional antes de carregá-los, bloqueando rootkits de inicialização.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Secure Boot (UEFI) = Bloqueia softwares e drivers sem assinatura digital autorizada no boot."
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
      "bizu": "💡 BIZU IBFC: UEFI = Substituto moderno da BIOS | Secure Boot = Protege a inicialização verificando assinaturas digitais."
    }
  },
  {
    "id": "inf-hw-017",
    "subject": "Informática",
    "topic": "2. Hardware - Cartão de Memória MicroSD e Classes",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Os agentes de campo do IBGE utilizam cartões de memória MicroSD para gravação de dados nos dispositivos móveis. A especificação 'Classe 10' impressa no cartão garante:",
    "options": [
      {
        "key": "A",
        "text": "A capacidade total fixa de 10 Gigabytes de armazenamento."
      },
      {
        "key": "B",
        "text": "Uma taxa mínima de gravação contínua de 10 Megabytes por segundo (10 MB/s)."
      },
      {
        "key": "C",
        "text": "A compatibilidade exclusiva com 10 computadores de marcas diferentes, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "D",
        "text": "A presença de 10 anos de garantia do fabricante."
      },
      {
        "key": "E",
        "text": "O desligamento automático após 10 horas de uso contínuo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A classificação por Classe (Class 2, 4, 6, 10) em cartões SD indica a velocidade mínima de gravação contínua em MB/s. Classe 10 = Mínimo 10 MB/s.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Classe indica velocidade de gravação, não a capacidade total."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Classe 10 = Velocidade mínima de gravação contínua de 10 MB/s."
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
      "bizu": "💡 BIZU IBFC: Classe do Cartão SD (Class 2/4/6/10) = Velocidade MÍNIMA de gravação contínua em MB/s."
    }
  },
  {
    "id": "inf-so-016",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Atalho Propriedades do Sistema (Win + Pause/Break)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Windows 10 e 11, qual a combinação de teclas utilizada para abrir rapidamente a janela 'Sobre / Propriedades do Sistema', exibindo o nome do computador, processador e quantidade de RAM instalada?",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + Alt + End"
      },
      {
        "key": "B",
        "text": "Win + Shift + P"
      },
      {
        "key": "C",
        "text": "Ctrl + F12"
      },
      {
        "key": "D",
        "text": "Win + Pause/Break"
      },
      {
        "key": "E",
        "text": "Alt + Shift + Enter"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "`Win + Pause/Break` abre a tela de Informações do Sistema (Sobre) do Windows.",
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
          "reason": "CORRETA. `Win + Pause/Break` = Abre a janela de Especificações do Sistema / Sobre."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + Pause/Break` = Especificações do Computador (Processador, RAM, Nome do PC)."
    }
  },
  {
    "id": "inf-so-017",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Central de Ações (Win + A)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "O atalho de teclado `WIN + A` no Windows 10 e 11 tem a função de abrir:",
    "options": [
      {
        "key": "A",
        "text": "O Gerenciador de Dispositivos."
      },
      {
        "key": "B",
        "text": "A Central de Ações / Configurações Rápidas (painel lateral de notificações, Wi-Fi e Bluetooth)."
      },
      {
        "key": "C",
        "text": "O Prompt de Comando em modo administrador."
      },
      {
        "key": "D",
        "text": "A Lixeira do sistema."
      },
      {
        "key": "E",
        "text": "O leitor de arquivos em PDF, visando garantir a integridade total das informações e a segurança do usuário."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "`Win + A` ('A' de Action Center) abre a Central de Ações no Windows 10 e as Configurações Rápidas no Windows 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Win + A` = Central de Ações (Action Center) / Configurações Rápidas."
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
      "bizu": "💡 BIZU IBFC: `Win + A` = Action Center (Central de Ações e Notificações do Windows)."
    }
  },
  {
    "id": "inf-so-018",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Painel de Conexão Sem Fio (Win + K)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Para conectar rapidamente o notebook a uma tela externa ou projetor sem fio (via Miracast / Bluetooth), o agente do IBGE deve utilizar o atalho:",
    "options": [
      {
        "key": "A",
        "text": "Win + K"
      },
      {
        "key": "B",
        "text": "Ctrl + K"
      },
      {
        "key": "C",
        "text": "Alt + K"
      },
      {
        "key": "D",
        "text": "Win + Shift + K"
      },
      {
        "key": "E",
        "text": "Ctrl + Alt + K"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "`Win + K` abre o painel 'Conectar', permitindo buscar e emparelhar monitores, TVs e projetores sem fio.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Win + K` = Painel Conectar (Displays e Áudio sem fio)."
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
      "bizu": "💡 BIZU IBFC: `Win + K` = Conectar (Dispositivos sem fio / Miracast) | `Win + P` = Projetar telas."
    }
  },
  {
    "id": "inf-so-019",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Gerenciador de Tarefas e Inicialização",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Gerenciador de Tarefas do Windows 10/11, a aba 'Inicializar' (ou 'Aplicativos de Inicialização') permite ao usuário:",
    "options": [
      {
        "key": "A",
        "text": "Alterar o papel de parede do sistema operacional, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "Formatar a partição do disco rígido."
      },
      {
        "key": "C",
        "text": "Aumentar a memória RAM física do computador."
      },
      {
        "key": "D",
        "text": "Habilitar ou desabilitar programas que são executados automaticamente junto com a inicialização do Windows."
      },
      {
        "key": "E",
        "text": "Trocar a senha da conta de e-mail."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "A aba Inicializar permite gerenciar quais aplicativos iniciam junto com o Windows, mostrando o impacto na velocidade do boot.",
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
          "reason": "CORRETA. Aba Inicializar = Gerencia programas que iniciam junto com o Windows."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Gerenciador de Tarefas -> Aba Inicializar = Desativa programas pesados no boot do Windows."
    }
  },
  {
    "id": "inf-so-020",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Sistema de Arquivos NTFS vs FAT32",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa que apresenta uma vantagem exclusiva do sistema de arquivos NTFS em relação ao antigo FAT32 no Windows:",
    "options": [
      {
        "key": "A",
        "text": "Limite máximo de tamanho de arquivo fixado em 2 MB."
      },
      {
        "key": "B",
        "text": "Incompatibilidade proposital com discos SSD, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "C",
        "text": "Eliminação da necessidade do uso de senhas no Windows."
      },
      {
        "key": "D",
        "text": "Funcionamento exclusivo em computadores desligados."
      },
      {
        "key": "E",
        "text": "Suporte a arquivos individuais com tamanho superior a 4 Gigabytes (GB) e permissões de segurança por usuário (ACL)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "FAT32 possui o limite estrito de no máximo 4 GB por arquivo individual e não suporta permissões de segurança NTFS (ACLs) ou criptografia nativa (EFS).",
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
          "reason": "CORRETA. NTFS = Suporta arquivos maiores que 4GB, permissões de segurança e criptografia."
        }
      ],
      "bizu": "💡 BIZU IBFC: FAT32 = Arquivo individual no máximo 4 GB | NTFS = Sem limite de 4GB + Permissões de Segurança (ACL)."
    }
  },
  {
    "id": "inf-so-021",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Controle de Conta de Usuário (UAC)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O recurso de segurança Controle de Conta de Usuário (UAC - User Account Control) no Windows 10/11 tem por objetivo:",
    "options": [
      {
        "key": "A",
        "text": "Notificar e solicitar confirmação administrativa antes que programas realizem alterações que exijam privilégios no sistema."
      },
      {
        "key": "B",
        "text": "Excluir automaticamente arquivos temporários da Lixeira."
      },
      {
        "key": "C",
        "text": "Bloquear a navegação na internet durante a noite."
      },
      {
        "key": "D",
        "text": "Impedir o uso da tecla de espaço do teclado."
      },
      {
        "key": "E",
        "text": "Acelerar a velocidade de rotação do cooler do computador, de acordo com as configurações padrão estabelecidas no sistema operacional."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O UAC exibe um aviso de confirmação na tela (com fundo escurecido) sempre que um aplicativo tenta instalar algo ou alterar configurações de nível de administrador.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. UAC = Notifica e exige confirmação antes de alterações administrativas."
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
      "bizu": "💡 BIZU IBFC: UAC (User Account Control) = Solicita permissão de administrador para alterar o sistema."
    }
  },
  {
    "id": "inf-so-022",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Criptografia de Disco BitLocker",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O BitLocker é uma funcionalidade integrada às edições corporativas do Windows 10/11 desenvolvida para:",
    "options": [
      {
        "key": "A",
        "text": "Criar tabelas e gráficos automáticos no Excel, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "B",
        "text": "Criptografar unidades inteiras de disco (HD, SSD ou pen drives), protegendo os dados caso o equipamento seja roubado."
      },
      {
        "key": "C",
        "text": "Imprimir documentos em alta resolução em rede."
      },
      {
        "key": "D",
        "text": "Converter arquivos de som em vídeo."
      },
      {
        "key": "E",
        "text": "Instalar jogos eletrônicos sem permissão."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O BitLocker criptografa todo o volume do disco rígido/SSD (e pen drives com BitLocker To Go), impedindo que estranhos acessem os arquivos mesmo removendo o HD do computador.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. BitLocker = Criptografia de disco completo para proteção contra roubo físico do equipamento."
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
      "bizu": "💡 BIZU IBFC: BitLocker = Criptografia de Volume/Disco Inteiro no Windows | BitLocker To Go = Para Pen Drives/Mídias removíveis."
    }
  },
  {
    "id": "inf-so-023",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Ponto de Restauração do Sistema",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O recurso 'Restauração do Sistema' no Windows 10/11 permite retornar o computador a um Ponto de Restauração anterior. Esse procedimento afeta:",
    "options": [
      {
        "key": "A",
        "text": "Arquivos de sistema, programas e configurações de registro instaladas recentemente, sem apagar os documentos pessoais do usuário."
      },
      {
        "key": "B",
        "text": "Exclusivamente as fotos e vídeos pessoais do usuário."
      },
      {
        "key": "C",
        "text": "Apenas o saldo bancário cadastrado no navegador."
      },
      {
        "key": "D",
        "text": "A memória física do monitor de vídeo."
      },
      {
        "key": "E",
        "text": "O contrato de garantia do fabricante, conforme as especificações técnicas de homologação do ambiente de redes."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Pontos de Restauração revertem alterações de arquivos de sistema, drivers e registros alterados por instalações recentes, preservando os arquivos pessoais (PDFs, DOCX, fotos) do usuário.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Restauração do Sistema = Reverte arquivos de sistema/drivers sem apagar documentos pessoais."
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
      "bizu": "💡 BIZU IBFC: Ponto de Restauração = Reverte drivers/sistema | NÃO apaga arquivos e documentos pessoais do usuário."
    }
  },
  {
    "id": "inf-and-011",
    "subject": "Informática",
    "topic": "4. Android 13+ - Gerenciamento de Bateria (Doze Mode)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O recurso de otimização de energia 'Doze Mode' em smartphones Android 13+ atua para:",
    "options": [
      {
        "key": "A",
        "text": "Reduzir o consumo de bateria suspendendo tarefas de fundo de aplicativos quando o aparelho permanece imóvel e sem uso por um período."
      },
      {
        "key": "B",
        "text": "Aumentar a velocidade de carregamento da tomada para 500V."
      },
      {
        "key": "C",
        "text": "Desligar a tela permanentemente sem poder religar."
      },
      {
        "key": "D",
        "text": "Excluir as mensagens de texto de forma irreversível, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "E",
        "text": "Bloquear o sinal de GPS dos satélites."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Doze Mode detecta quando o aparelho está fora da tomada, com tela desligada e parado, reduzindo acessos à rede e tarefas em segundo plano dos apps para economizar bateria.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Doze Mode = Economia de bateria reduzindo tarefas em segundo plano em repouso."
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
      "bizu": "💡 BIZU IBFC: Doze Mode (Android) = Otimização de bateria reduzindo atividades de fundo quando o aparelho está parado."
    }
  },
  {
    "id": "inf-and-012",
    "subject": "Informática",
    "topic": "4. Android 13+ - Armazenamento Escopado (Scoped Storage)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "No Android 13+, a arquitetura 'Armazenamento Escopado' (Scoped Storage) reforça a segurança do dispositivo ao:",
    "options": [
      {
        "key": "A",
        "text": "Exigir formatação de fábrica quinzenal no dispositivo de coleta."
      },
      {
        "key": "B",
        "text": "Isolar o espaço de armazenamento de cada aplicativo, impedindo que um app acesse diretamente a pasta privada de outro aplicativo."
      },
      {
        "key": "C",
        "text": "Impedir o salvamento de arquivos de texto no celular."
      },
      {
        "key": "D",
        "text": "Converter fotos de formulários em arquivos de áudio."
      },
      {
        "key": "E",
        "text": "Conectar o smartphone à rede elétrica de 220V, respeitando as diretrizes de governança de dados e controle de acessos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Scoped Storage restringe o acesso irrestrito ao armazenamento. Cada app possui seu diretório isolado e precisa de permissões estritas para acessar pastas públicas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Scoped Storage = Isolamento de arquivos e pastas privadas entre aplicativos."
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
      "bizu": "💡 BIZU IBFC: Scoped Storage = Isolamento de diretórios por app para privacidade e segurança."
    }
  },
  {
    "id": "inf-and-013",
    "subject": "Informática",
    "topic": "4. Android 13+ - Modos de Conexão USB (MTP vs PTP)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao conectar um smartphone Android 13+ a um computador via cabo USB, qual o modo de transferência padrão utilizado para copiar arquivos em geral entre o celular e o PC?",
    "options": [
      {
        "key": "A",
        "text": "PTP (Picture Transfer Protocol)"
      },
      {
        "key": "B",
        "text": "MTP (Media Transfer Protocol)"
      },
      {
        "key": "C",
        "text": "Apenas Carregamento MIDI"
      },
      {
        "key": "D",
        "text": "Protocolo POP3 de e-mail"
      },
      {
        "key": "E",
        "text": "Conexão de Impressora Serial"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "MTP (Media Transfer Protocol) permite explorar a memória do celular no computador como uma unidade de mídia para transferir todo tipo de arquivo. PTP limita-se a fotos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. PTP é exclusivo para transferência de imagens/câmera."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. MTP = Transferência geral de arquivos entre celular Android e computador."
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
      "bizu": "💡 BIZU IBFC: USB Android: MTP = Transferência Geral de Arquivos | PTP = Transferência Exclusiva de Fotos."
    }
  },
  {
    "id": "inf-and-014",
    "subject": "Informática",
    "topic": "4. Android 13+ - Google Play Protect",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A ferramenta de segurança nativa 'Google Play Protect' presente nos dispositivos Android 13+ realiza a função de:",
    "options": [
      {
        "key": "A",
        "text": "Substituir a necessidade de senha de rede Wi-Fi."
      },
      {
        "key": "B",
        "text": "Aumentar a resolução da câmera fotográfica do celular."
      },
      {
        "key": "C",
        "text": "Analisar continuamente aplicativos em busca de malwares antes e depois do download na Google Play Store."
      },
      {
        "key": "D",
        "text": "Traduzir ligações telefônicas em tempo real, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "E",
        "text": "Bloquear a tela quando a bateria atinge 100%."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O Google Play Protect é o antivírus nativo do Android que escaneia apps da loja e fontes externas (APKs) para proteger contra comportamentos maliciosos.",
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
          "reason": "CORRETA. Google Play Protect = Antivírus e verificador nativo de malwares no Android."
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
      "bizu": "💡 BIZU IBFC: Google Play Protect = Segurança nativa que escaneia apps em busca de malwares no Android."
    }
  },
  {
    "id": "inf-and-015",
    "subject": "Informática",
    "topic": "4. Android 13+ - API BiometricPrompt",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A API BiometricPrompt padronizada no Android 13+ permite aos desenvolvedores de aplicativos do IBGE:",
    "options": [
      {
        "key": "A",
        "text": "Formatador de arquivos em lote."
      },
      {
        "key": "B",
        "text": "Integrar a autenticação segura por leitura de impressão digital ou reconhecimento facial de forma unificada."
      },
      {
        "key": "C",
        "text": "Excluir o histórico de chamadas recebidas."
      },
      {
        "key": "D",
        "text": "Imprimir relatórios em papel via cabo USB."
      },
      {
        "key": "E",
        "text": "Desativar o leitor de cartão SIM, conforme as especificações técnicas de homologação do ambiente de redes."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A BiometricPrompt centraliza a validação biométrica (Digital ou Rosto), sem que o aplicativo precise acessar os dados biométricos brutos do usuário.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. BiometricPrompt = Interface unificada para autenticação biométrica (Digital / Rosto)."
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
      "bizu": "💡 BIZU IBFC: BiometricPrompt (Android) = Autenticação segura por Biometria (Digital e Reconhecimento Facial)."
    }
  },
  {
    "id": "inf-net-016",
    "subject": "Informática",
    "topic": "5. Redes - Protocolo TELNET vs SSH",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em relação ao acesso e gerenciamento remoto de servidores, qual a desvantagem crítica do protocolo TELNET em relação ao protocolo SSH?",
    "options": [
      {
        "key": "A",
        "text": "O TELNET só funciona em computadores desligados."
      },
      {
        "key": "B",
        "text": "O SSH não permite o envio de comandos pelo terminal."
      },
      {
        "key": "C",
        "text": "O TELNET transmite dados e senhas em texto puro (sem criptografia), enquanto o SSH criptografa todo o tráfego de comunicação."
      },
      {
        "key": "D",
        "text": "O TELNET exige o uso exclusivo de fibra óptica."
      },
      {
        "key": "E",
        "text": "Nenhum dos dois protocolos é utilizado em redes de computadores, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O TELNET (Porta 23) é inseguro por trafegar dados em texto claro. O SSH (Porta 22 - Secure Shell) utiliza criptografia assimétrica forte para garantir confidencialidade.",
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
          "reason": "CORRETA. TELNET = Inseguro (Texto puro / Porta 23) | SSH = Seguro (Criptografado / Porta 22)."
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
      "bizu": "💡 BIZU IBFC: TELNET = Porta 23 (Texto puro / Sem criptografia) | SSH = Porta 22 (Seguro / Criptografado)."
    }
  },
  {
    "id": "inf-net-017",
    "subject": "Informática",
    "topic": "5. Redes - Modelo TCP/IP e Camada de Aplicação",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No modelo de referência TCP/IP de 4 camadas, em qual camada atuam os protocolos HTTP, HTTPS, SMTP, FTP e DNS?",
    "options": [
      {
        "key": "A",
        "text": "Camada de Transporte"
      },
      {
        "key": "B",
        "text": "Camada de Internet (Rede)"
      },
      {
        "key": "C",
        "text": "Camada de Acesso à Rede (Física/Enlace)"
      },
      {
        "key": "D",
        "text": "Camada de Aplicação"
      },
      {
        "key": "E",
        "text": "Camada de Hardware Estático"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Os protocolos com os quais os aplicativos do usuário interagem diretamente (HTTP, HTTPS, SMTP, FTP, DNS, SSH) pertencem à Camada de Aplicação.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Camada de Transporte é onde atuam TCP e UDP."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Camada de Internet é onde atua o protocolo IP."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Camada de Aplicação (TCP/IP) = HTTP, HTTPS, SMTP, FTP, DNS."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (CAMADAS TCP/IP): 1. Aplicação (HTTP/SMTP/DNS) | 2. Transporte (TCP/UDP) | 3. Internet (IP) | 4. Acesso à Rede."
    }
  },
  {
    "id": "inf-net-018",
    "subject": "Informática",
    "topic": "5. Redes - Classificação por Abrangência (LAN, MAN, WAN)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que classifica corretamente uma rede de computadores que interconecta prédios públicos espalhados por uma mesma região metropolitana de uma cidade:",
    "options": [
      {
        "key": "A",
        "text": "LAN (Local Area Network)"
      },
      {
        "key": "B",
        "text": "MAN (Metropolitan Area Network)"
      },
      {
        "key": "C",
        "text": "PAN (Personal Area Network), de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "D",
        "text": "WAN (Wide Area Network)"
      },
      {
        "key": "E",
        "text": "SAN (Storage Area Network)"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "PAN = Área Pessoal (Bluetooth/metro). LAN = Local (escritório/prédio). MAN = Metropolitana (cidade). WAN = Longa distância (país/globo/Internet).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. LAN é rede local (escritório)."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. MAN = Rede de Abrangência Metropolitana (Cidade/Região)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. PAN é rede pessoal."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. WAN é rede mundial/longa distância."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (ABRANGÊNCIA): PAN (Pessoal) < LAN (Local/Prédio) < MAN (Cidade/Metropolitana) < WAN (Mundial/País)."
    }
  },
  {
    "id": "inf-net-019",
    "subject": "Informática",
    "topic": "5. Redes - Topologia em Estrela vs Barramento",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A topologia física de rede mais utilizada nas instalações locais do IBGE é a Topologia em Estrela. A principal característica dessa estrutura é:",
    "options": [
      {
        "key": "A",
        "text": "Os computadores são ligados em um único cabo linear em série."
      },
      {
        "key": "B",
        "text": "Se um computador falhar, toda a rede física para de funcionar imediatamente, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "Não permite o uso de cabos de par trançado UTP."
      },
      {
        "key": "D",
        "text": "Exige obrigatoriamente a presença de um satélite dedicado."
      },
      {
        "key": "E",
        "text": "Todos os nós da rede são conectados individualmente a um ponto central concentrador (Switch ou Roteador)."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Na topologia em Estrela, cada computador possui seu cabo ligado diretamente ao Switch central. Se um cabo romper, apenas aquela máquina perde a conexão.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ligados em cabo linear é a topologia em Barramento."
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
          "reason": "CORRETA. Topologia em Estrela = Dispositivos conectados a um equipamento central (Switch)."
        }
      ],
      "bizu": "💡 BIZU IBFC: Topologia em ESTRELA = Equipamento Central (Switch) | Falha em 1 cabo não derruba os outros."
    }
  },
  {
    "id": "inf-net-020",
    "subject": "Informática",
    "topic": "5. Redes - Roteador vs Switch",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença operacional entre um ROTEADOR e um SWITCH em uma rede corporativa?",
    "options": [
      {
        "key": "A",
        "text": "O Switch é utilizado para imprimir documentos e o Roteador para armazenar arquivos."
      },
      {
        "key": "B",
        "text": "O Roteador funciona apenas sem energia elétrica."
      },
      {
        "key": "C",
        "text": "O Switch conecta dispositivos dentro da mesma rede local (Camada 2 - MAC), enquanto o Roteador interconecta redes diferentes (Camada 3 - IP)."
      },
      {
        "key": "D",
        "text": "Ambos são nomes diferentes para o mesmo cabo de rede, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "E",
        "text": "O Switch bloqueia o acesso a todas as páginas web."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Switch opera na Camada 2 (Enlace) encaminhando quadros por endereço MAC entre máquinas da mesma LAN. Roteador opera na Camada 3 (Rede) roteando pacotes por endereço IP entre redes distintas.",
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
          "reason": "CORRETA. Switch = Conecta dispositivos na mesma LAN (MAC) | Roteador = Interconecta redes distintas (IP)."
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
      "bizu": "💡 BIZU IBFC: Switch = Camada 2 (Endereço MAC / Mesma Rede) | Roteador = Camada 3 (Endereço IP / Redes Diferentes)."
    }
  },
  {
    "id": "inf-net-021",
    "subject": "Informática",
    "topic": "5. Redes - Endereço IP Privado vs Público",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção que indica um intervalo de endereços IPv4 reservado exclusivamente para redes privadas internas (não roteáveis diretamente na Internet):",
    "options": [
      {
        "key": "A",
        "text": "192.168.0.0 a 192.168.255.255"
      },
      {
        "key": "B",
        "text": "8.8.8.0 a 8.8.8.255"
      },
      {
        "key": "C",
        "text": "200.180.0.0 a 200.180.255.255, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "D",
        "text": "1.1.1.1 a 1.1.1.255"
      },
      {
        "key": "E",
        "text": "255.255.255.255"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Faixas de IP Privado (RFC 1918): Classe A (10.0.0.0/8), Classe B (172.16.0.0/12), Classe C (192.168.0.0/16). Não são roteáveis na Internet pública.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. 192.168.x.x = Faixa padrão de IP Privado corporativo/residencial."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 8.8.8.8 é IP Público do Google."
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
      "bizu": "💡 BIZU IBFC (IPS PRIVADOS): 10.x.x.x | 172.16.x.x a 172.31.x.x | 192.168.x.x (NÃO navegam direto na Internet sem NAT)."
    }
  },
  {
    "id": "inf-net-022",
    "subject": "Informática",
    "topic": "5. Redes - Navegadores e Preenchimento Automático",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Nos navegadores de internet modernos (como Google Chrome e Microsoft Edge), a funcionalidade de 'Preenchimento Automático' (Autofill) destina-se a:",
    "options": [
      {
        "key": "A",
        "text": "Formatador de arquivos de texto em formato PDF, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "B",
        "text": "Apagar as senhas salvas ao fechar o navegador."
      },
      {
        "key": "C",
        "text": "Preencher automaticamente formulários web com dados salvos de endereço, nome e cartões autorizados."
      },
      {
        "key": "D",
        "text": "Limpar os arquivos do histórico de navegação."
      },
      {
        "key": "E",
        "text": "Converter o idioma da página em áudio MP3."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O Autofill agiliza o preenchimento de cadastros repetitivos inserindo dados previamente salvos pelo usuário mediante autorização.",
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
          "reason": "CORRETA. Preenchimento Automático (Autofill) = Agiliza formulários com dados predefinidos."
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
      "bizu": "💡 BIZU IBFC: Autofill / Preenchimento Automático = Armazena dados de formulários para inserção rápida."
    }
  },
  {
    "id": "inf-seg-011",
    "subject": "Informática",
    "topic": "6. Segurança - Ataque Man-in-the-Middle (MitM)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O ataque de segurança da informação classificado como Man-in-the-Middle (MitM) ocorre quando um invasor:",
    "options": [
      {
        "key": "A",
        "text": "Criptografa o disco e pede resgate em criptomoedas, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "B",
        "text": "Intercepta, lê ou altera secretamente a comunicação entre duas partes sem que elas saibam."
      },
      {
        "key": "C",
        "text": "Inunda um servidor com acessos falsos para derrubá-lo."
      },
      {
        "key": "D",
        "text": "Envia um e-mail de propaganda de produtos de beleza."
      },
      {
        "key": "E",
        "text": "Funda uma empresa concorrente de tecnologia."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "No ataque Man-in-the-Middle ('Homem no Meio'), o hacker posiciona-se entre a vítima e o servidor (ex: em Wi-Fi público falso) para espiar ou modificar os pacotes transmitidos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Criptografia com resgate é Ransomware."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Man-in-the-Middle = Interceptação secreta da comunicação entre duas partes."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Inundação para derrubar servidor é DoS / DDoS."
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
      "bizu": "💡 BIZU IBFC: Man-in-the-Middle (MitM) = Interceptação de dados na comunicação | Prevenção = Criptografia HTTPS / VPN."
    }
  },
  {
    "id": "inf-seg-012",
    "subject": "Informática",
    "topic": "6. Segurança - Rootkit",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em segurança de sistemas operacionais, um 'Rootkit' é um conjunto de ferramentas maliciosas projetado para:",
    "options": [
      {
        "key": "A",
        "text": "Limpar o pó interno dos componentes do computador."
      },
      {
        "key": "B",
        "text": "Formatar pen drives em modo de alta velocidade."
      },
      {
        "key": "C",
        "text": "Converter planilhas de Excel em apresentações de slides, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "D",
        "text": "Acelerar a velocidade da placa de rede."
      },
      {
        "key": "E",
        "text": "Manter acesso profundo e oculto no nível de núcleo (Kernel) do sistema operacional, mascarando a presença de outros malwares e processos."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Rootkits operam nos níveis mais privilegiados do SO (Ring 0 / Kernel), escondendo arquivos, chaves de registro e processos do Gerenciador de Tarefas e de antivírus comuns.",
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
          "reason": "CORRETA. Rootkit = Garante acesso oculto e privilegiado no nível de Kernel do sistema."
        }
      ],
      "bizu": "💡 BIZU IBFC: Rootkit = Malware de Nível de Núcleo (Kernel) que se esconde dos antivírus tradicionais."
    }
  },
  {
    "id": "inf-seg-013",
    "subject": "Informática",
    "topic": "6. Segurança - Worm vs Vírus",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A diferença essencial entre um WORM e um VÍRUS tradicional de computador é que o Worm:",
    "options": [
      {
        "key": "A",
        "text": "Exige que o usuário clique em um arquivo executável infectado para se ativar, conforme as especificações técnicas de homologação do ambiente de redes."
      },
      {
        "key": "B",
        "text": "Não consome memória RAM nem tráfego de rede."
      },
      {
        "key": "C",
        "text": "Funciona apenas em impressoras matriciais."
      },
      {
        "key": "D",
        "text": "É um programa de proteção aprovado pelo governo."
      },
      {
        "key": "E",
        "text": "Propaga-se de forma autônoma pelas redes de computadores sem necessitar de um arquivo hospedeiro ou de intervenção do usuário."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Vírus necessita de um arquivo hospedeiro e da ação do usuário para ser executado. Worm é autossuficiente e se replica sozinho explorando falhas de rede.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Exigir clique no hospedeiro é característica do Vírus."
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
          "reason": "CORRETA. Worm = Autônomo e auto-replicável pela rede sem arquivo hospedeiro."
        }
      ],
      "bizu": "💡 BIZU IBFC: VÍRUS = Precisa de Hospedeiro + Ação do Usuário | WORM = Autônomo + Auto-replicável pela Rede."
    }
  },
  {
    "id": "inf-seg-014",
    "subject": "Informática",
    "topic": "6. Segurança - Antivírus por Heurística",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Nos softwares antivírus modernos, a técnica de 'Análise Heurística' permite detectar novos malwares através de:",
    "options": [
      {
        "key": "A",
        "text": "Consulta ao valor comercial do computador, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "Comparação da cor do gabinete do computador."
      },
      {
        "key": "C",
        "text": "Contagem do número de teclas do teclado."
      },
      {
        "key": "D",
        "text": "Identificação de padrões de comportamentos suspeitos e estruturas de código semelhantes a vírus conhecidos, mesmo sem assinatura prévia."
      },
      {
        "key": "E",
        "text": "Leitura do código de barras da caixa do produto."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Heurística analisa o comportamento do programa (ex: tentar modificar arquivos de sistema) para identificar ameaças 'Zero-Day' que ainda não possuem vacina registrada.",
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
          "reason": "CORRETA. Heurística = Detecção por comportamento suspeito sem precisar de vacina/assinatura prévia."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Antivírus: Assinatura = Vacina conhecida (Banco de dados) | Heurística = Análise de Comportamento Suspeito."
    }
  },
  {
    "id": "inf-seg-015",
    "subject": "Informática",
    "topic": "6. Segurança - Engenharia Social (Pretexting)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na segurança da informação, a técnica de Engenharia Social denominada 'Pretexting' consiste em:",
    "options": [
      {
        "key": "A",
        "text": "Instalar um filtro físico no cabo de energia da tomada."
      },
      {
        "key": "B",
        "text": "Formatador de disco rígido via comando de voz."
      },
      {
        "key": "C",
        "text": "Criar um cenário ou história falsa (um pretexto elaborado) para enganar a vítima e levá-la a revelar informações confidenciais."
      },
      {
        "key": "D",
        "text": "Trocar a placa-mãe do computador à noite."
      },
      {
        "key": "E",
        "text": "Imprimir relatórios em papel reciclado, respeitando as diretrizes de governança de dados e controle de acessos."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Pretexting envolve personificar um papel (ex: funcionário do suporte de TI) criando uma justificativa plausível para extrair senhas ou dados sigilosos da vítima.",
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
          "reason": "CORRETA. Pretexting = História/Cenário falso para induzir a vítima a entregar dados."
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
      "bizu": "💡 BIZU IBFC: Engenharia Social: Phishing = E-mail/Site Falso | Pretexting = História/Cenário elaborado | Shoulder Surfing = Olhar por cima do ombro."
    }
  },
  {
    "id": "inf-off-009",
    "subject": "Informática",
    "topic": "3. Excel - Função MÉDIA",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Microsoft Excel em português, qual o resultado correto da fórmula `=MÉDIA(10; 20; 30)` inserida em uma célula?",
    "options": [
      {
        "key": "A",
        "text": "60"
      },
      {
        "key": "B",
        "text": "30, de acordo com as configurações padrão estabelecidas no sistema operacional."
      },
      {
        "key": "C",
        "text": "10"
      },
      {
        "key": "D",
        "text": "15"
      },
      {
        "key": "E",
        "text": "20"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "A função `MÉDIA` calcula a média aritmética simples dos argumentos: (10 + 20 + 30) / 3 = 60 / 3 = 20.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 60 é a SOMA."
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
          "reason": "CORRETA. Média aritmética = (10 + 20 + 30) / 3 = 20."
        }
      ],
      "bizu": "💡 BIZU IBFC: `=SOMA(10;20;30)` = 60 | `=MÉDIA(10;20;30)` = 20 | `=MÁXIMO(10;20;30)` = 30."
    }
  },
  {
    "id": "inf-off-010",
    "subject": "Informática",
    "topic": "3. Excel - Alça de Preenchimento",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Microsoft Excel, o pequeno quadrado preto localizado no canto inferior direito da célula selecionada é denominado:",
    "options": [
      {
        "key": "A",
        "text": "Alça de Preenchimento"
      },
      {
        "key": "B",
        "text": "Barra de Fórmulas, visando garantir a integridade total das informações e a segurança do usuário."
      },
      {
        "key": "C",
        "text": "Caixa de Nome"
      },
      {
        "key": "D",
        "text": "Guia de Planilhas"
      },
      {
        "key": "E",
        "text": "Botão de AutoSoma"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A Alça de Preenchimento permite arrastar e copiar fórmulas ou preencher sequências lógicas (dias da semana, meses, números progressivos).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Alça de Preenchimento = Quadrado no canto da célula para copiar/estender sequências."
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
      "bizu": "💡 BIZU IBFC: Alça de Preenchimento = Arrasta fórmulas e gera sequências automáticas (Jan, Fev, Mar...)."
    }
  },
  {
    "id": "inf-off-011",
    "subject": "Informática",
    "topic": "3. Excel - Função SE Condicional",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Dada a fórmula `=SE(B2>=60; 'Aprovado'; 'Reprovado')` no Excel, se a célula B2 contiver a nota 75, a célula exibirá o texto:",
    "options": [
      {
        "key": "A",
        "text": "Reprovado"
      },
      {
        "key": "B",
        "text": "Aprovado"
      },
      {
        "key": "C",
        "text": "60"
      },
      {
        "key": "D",
        "text": "75"
      },
      {
        "key": "E",
        "text": "#VALOR!"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A função `=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)` testa 75 >= 60 (Verdadeiro), retornando a primeira opção: 'Aprovado'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. 75 >= 60 é Verdadeiro -> Retorna 'Aprovado'."
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
      "bizu": "💡 BIZU IBFC: `=SE(condição; Se_Verdadeiro; Se_Falso)`. Cuidado com o ponto e vírgula de separação!"
    }
  },
  {
    "id": "inf-off-012",
    "subject": "Informática",
    "topic": "3. Word - Pincel de Formatação (Ctrl + Shift + C / V)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Microsoft Word, o recurso 'Pincel de Formatação' serve para:",
    "options": [
      {
        "key": "A",
        "text": "Excluir o texto selecionado permanentemente, considerando a arquitetura padrão dos componentes e seus respectivos drivers."
      },
      {
        "key": "B",
        "text": "Copiar o estilo e a formatação gráfica (fonte, cor, tamanho) de um texto e aplicá-lo em outro trecho do documento."
      },
      {
        "key": "C",
        "text": "Desenhar figuras geométricas tridimensionais."
      },
      {
        "key": "D",
        "text": "Converter documentos em formato de áudio MP3."
      },
      {
        "key": "E",
        "text": "Imprimir em papel colorido."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Pincel de Formatação copia apenas o formato (estilo) do texto sem alterar o conteúdo escrito. Atalhos: `Ctrl+Shift+C` (copiar formato) e `Ctrl+Shift+V` (colar formato).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Pincel de Formatação = Copia e aplica a formatação gráfica (fonte/cor/estilo) em outro trecho."
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
      "bizu": "💡 BIZU IBFC: Pincel de Formatação = Copia o ESTILO do texto | Atalho Copiar Formato = `Ctrl + Shift + C` | Colar Formato = `Ctrl + Shift + V`."
    }
  },
  {
    "id": "inf-off-013",
    "subject": "Informática",
    "topic": "3. Word - Atalhos de Alinhamento de Parágrafo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Microsoft Word em português, a combinação de teclas de atalho para JUSTIFICAR um parágrafo (alinhar o texto em ambas as margens esquerda e direita) é:",
    "options": [
      {
        "key": "A",
        "text": "Ctrl + E"
      },
      {
        "key": "B",
        "text": "Ctrl + Q, respeitando as diretrizes de governança de dados e controle de acessos."
      },
      {
        "key": "C",
        "text": "Ctrl + G"
      },
      {
        "key": "D",
        "text": "Ctrl + L"
      },
      {
        "key": "E",
        "text": "Ctrl + J"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Alinhamentos no Word Português: `Ctrl + J` = Justificado | `Ctrl + E` = Centralizado | `Ctrl + Q` = Esquerda | `Ctrl + G` = Direita.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + E` alinha no Centro."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Q` alinha à Esquerda."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + G` alinha à Direita."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "E",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + J` = Justificar parágrafo nas duas margens."
        }
      ],
      "bizu": "💡 BIZU IBFC (ALINHAMENTO WORD): `Ctrl + J` = Justificar | `Ctrl + E` = CEntro | `Ctrl + Q` = EsQuerda | `Ctrl + G` = Direita (riGht)."
    }
  },
  {
    "id": "port-cra-006",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Pronomes Demonstrativos (Aquele/Aquela/Aquilo)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a frase em que o sinal indicativo de crase está empregado CORRETAMENTE diante de pronome demonstrativo:",
    "options": [
      {
        "key": "A",
        "text": "Entregamos a documentação à todos os presentes, de acordo com a norma-padrão da Língua Portuguesa."
      },
      {
        "key": "B",
        "text": "Refiro-me àquele relatório estatístico que foi publicado na semana passada."
      },
      {
        "key": "C",
        "text": "Ele dirigiu-se à esta sala com rapidez."
      },
      {
        "key": "D",
        "text": "Voltamos à esta cidade baiana no sábado."
      },
      {
        "key": "E",
        "text": "Assisti à este filme com os estudantes."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A crase ocorre com 'àquele(s)', 'àquela(s)' e 'àquilo' quando o termo regente exige a preposição 'a' (Refiro-me A + aquele = àquele). Antes dos demonstrativos 'esta', 'este' e 'isto', a crase é proibida.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Todos' é masculino no plural."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Refiro-me A + aquele = àquele."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Antes de 'esta/este' a crase é proibida."
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
      "bizu": "💡 BIZU IBFC: Crase com ÀQUELE / ÀQUELA / ÀQUILO é permitida se o verbo exigir preposição A | Antes de ESTA/ESTE/ISTO é PROIBIDA!"
    }
  },
  {
    "id": "port-cra-007",
    "subject": "Língua Portuguesa",
    "topic": "1. Uso da Crase - Expressão 'À Moda De'",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que a crase é OBRIGATÓRIA devido à elipse da expressão 'à moda de':",
    "options": [
      {
        "key": "A",
        "text": "Ele escrevia a Machado de Assis com dedicação, segundo os preceitos da gramática normativa pátria."
      },
      {
        "key": "B",
        "text": "Eles foram a pé até o centro histórico."
      },
      {
        "key": "C",
        "text": "O restaurante servia filete à parmegiana e bacalhau à Zé do Pipo."
      },
      {
        "key": "D",
        "text": "Caminhamos a passo rápido pela praia."
      },
      {
        "key": "E",
        "text": "Entregou a proposta a duas empresas."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Mesmo diante de palavra masculina ou oculta, usa-se crase se a expressão 'à moda de' estiver subentendida: 'bacalhau à [moda de] Zé do Pipo', 'estilo à [moda de] Caetano Veloso'.",
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
          "reason": "CORRETA. Crase por subentender a expressão 'à moda de'."
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
      "bizu": "💡 BIZU IBFC: Subentendendo a expressão 'À MODA DE' = Usa-se CRASE mesmo antes de termo masculino!"
    }
  },
  {
    "id": "port-reg-006",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Verbal - Verbo Preferir",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa que apresenta a regência CORRETA do verbo PREFERIR conforme a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "O candidato prefere mais estudar do que trabalhar."
      },
      {
        "key": "B",
        "text": "O candidato prefere estudar a ficar inativo."
      },
      {
        "key": "C",
        "text": "O candidato prefere antes estudar do que trabalhar."
      },
      {
        "key": "D",
        "text": "O candidato prefere mil vezes o curso do que a apostila."
      },
      {
        "key": "E",
        "text": "O candidato prefere estudar do que descansar."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O verbo PREFERIR exige a preposição 'a' e rejeita expressões de intensidade como 'mais', 'antes' ou a conjunção 'do que'. O correto é: 'Preferir X A Y'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Prefere mais... do que' é desvio gramatical gravíssimo."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Prefere estudar A ficar inativo."
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
      "bizu": "💡 BIZU IBFC (VERBO PREFERIR): Preferir X A Y! NUNCA use 'mais que', 'do que' ou 'antes'. (Ex: Prefiro café a chá)."
    }
  },
  {
    "id": "port-reg-007",
    "subject": "Língua Portuguesa",
    "topic": "2. Regência Verbal - Verbo Aspirar",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: 'Os jovens baianos aspiram ___ cargos de relevância no censo do IBGE', a lacuna deve ser preenchida por:",
    "options": [
      {
        "key": "A",
        "text": "aos"
      },
      {
        "key": "B",
        "text": "os"
      },
      {
        "key": "C",
        "text": "nos"
      },
      {
        "key": "D",
        "text": "pelos"
      },
      {
        "key": "E",
        "text": "dos"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O verbo ASPIRAR no sentido de almejar/desejar é Transitivo Indireto e exige a preposição 'a' (aspirar aos cargos). No sentido de sorver/respirar o ar, é VTD (aspirar o ar puro).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Aspirar (desejar/almejar) = Transitivo Indireto com A (aspirar aos cargos)."
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
      "bizu": "💡 BIZU IBFC (VERBO ASPIRAR): Sorver/Cheirar = VTD (Aspirou o ar) | Desejar/Almejar = VTI com A (Aspirou ao cargo)."
    }
  },
  {
    "id": "port-con-006",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Verbal - Verbos Faltar, Bastar, Sobrar",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que a concordância do verbo está CORRETA:",
    "options": [
      {
        "key": "A",
        "text": "Falta apenas dois dias para a realização do processo seletivo do IBGE."
      },
      {
        "key": "B",
        "text": "Basta alguns minutos para revisar os conceitos principais, respeitando a pontuação e a estrutura sintática das orações."
      },
      {
        "key": "C",
        "text": "Sobra razões para manter a dedicação aos estudos."
      },
      {
        "key": "D",
        "text": "Faltam apenas dois dias para a realização do processo seletivo do IBGE."
      },
      {
        "key": "E",
        "text": "Resta poucos formulários para serem preenchidos."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Os verbos faltar, bastar, sobra e restar CONCORDAM normalmente com o seu sujeito pós-posto no plural: 'Faltam dois dias', 'Bastam alguns minutos', 'Sobram razões'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Falta dois dias' é erro de concordância."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Bastam'."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'Sobram'."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Faltam (verbo) dois dias (sujeito plural)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Verbos Faltar, Bastar, Sobrar e Restar CONCORDAM com o sujeito! (Faltam 2 dias / Sobram vagas)."
    }
  },
  {
    "id": "port-con-007",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Verbal com Numerais Percentuais",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: '80% da população baiana ___ do censo demográfico', a lacuna pode ser preenchida CORRETAMENTE por:",
    "options": [
      {
        "key": "A",
        "text": "Apenas 'participaram', obrigatoriamente."
      },
      {
        "key": "B",
        "text": "Apenas 'participou', obrigatoriamente."
      },
      {
        "key": "C",
        "text": "Tanto 'participou' quanto 'participaram', pois pode concordar com a porcentagem ou com o especificador."
      },
      {
        "key": "D",
        "text": "Apenas 'participariam', no futuro."
      },
      {
        "key": "E",
        "text": "Nenhuma das alternativas, de acordo com a norma-padrão da Língua Portuguesa."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Em porcentagens acompanhadas de especificador ('80% da população'), a concordância é FACULTATIVA: pode concordar com o numeral (80% = participaram) ou com o termo especificador (população = participou).",
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
          "reason": "CORRETA. Numeral percentual + especificador = Concordância facultativa."
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
      "bizu": "💡 BIZU IBFC: Porcentagem com especificador = Concordância Facultativa! (1% dos alunos faltou/faltaram)."
    }
  },
  {
    "id": "port-con-008",
    "subject": "Língua Portuguesa",
    "topic": "3. Concordância Nominal - Mesmo e Próprio",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que preenche CORREMENTE as lacunas da frase: 'Elas ___ organizaram as planilhas e enviaram os documentos ___ ao relatório'.",
    "options": [
      {
        "key": "A",
        "text": "mesmo / anexo"
      },
      {
        "key": "B",
        "text": "mesmas / em anexo"
      },
      {
        "key": "C",
        "text": "mesmo / anexas"
      },
      {
        "key": "D",
        "text": "mesmas / anexo"
      },
      {
        "key": "E",
        "text": "mesmas / anexos"
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "'Mesmo' (no sentido de próprio) concorda com o pronome ('Elas mesmas'). 'Anexo' concorda com o substantivo masculino plural documentos ('documentos anexos').",
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
          "reason": "CORRETA. 'Elas mesmas' e 'documentos anexos'."
        }
      ],
      "bizu": "💡 BIZU IBFC: Eles mesmos / Elas mesmas | Documentos anexos / Cartas anexas."
    }
  },
  {
    "id": "port-pon-006",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego do Ponto e Vírgula",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "O sinal de PONTO E VÍRGULA (;) é utilizado adequadamente na norma-padrão para:",
    "options": [
      {
        "key": "A",
        "text": "Substituir o ponto final no término de qualquer parágrafo, em conformidade com as regras de regência e concordância culta."
      },
      {
        "key": "B",
        "text": "Isolar o vocativo no início das cartas formais."
      },
      {
        "key": "C",
        "text": "Indicar a fala direta de um personagem em diálogo."
      },
      {
        "key": "D",
        "text": "Unir duas palavras compostas por hífen."
      },
      {
        "key": "E",
        "text": "Separar itens de uma enumeração em decretos/leis ou dividir orações coordenadas extensas que já possuem vírgulas internas."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O ponto e vírgula serve para organizar itens enumerados (a; b; c;) ou pausar orações longas que já contêm vírgulas internas.",
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
          "reason": "CORRETA. Ponto e Vírgula = Separa itens de enumeração ou orações extensas com vírgulas internas."
        }
      ],
      "bizu": "💡 BIZU IBFC: Ponto e Vírgula (;) = Pausa intermediária entre a vírgula e o ponto final. Usado em enumerações e listas."
    }
  },
  {
    "id": "port-pon-007",
    "subject": "Língua Portuguesa",
    "topic": "4. Emprego da Vírgula antes da Conjunção 'E'",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a frase em que o uso da vírgula antes da conjunção 'E' é CORRETO por haver sujeitos diferentes nas orações:",
    "options": [
      {
        "key": "A",
        "text": "O aluno comprou o livro, e leu todo o conteúdo no mesmo dia."
      },
      {
        "key": "B",
        "text": "O professor explicou a matéria, e tirou as dúvidas dos alunos, considerando o sentido denotativo e a coesão textual da frase."
      },
      {
        "key": "C",
        "text": "O recenseador colheu os dados, e salvou o arquivo no sistema."
      },
      {
        "key": "D",
        "text": "A aluna estudou bastante, e passou no concurso."
      },
      {
        "key": "E",
        "text": "O supervisor elaborou as metas do setor, e os agentes iniciaram as pesquisas no bairro."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "Usa-se vírgula antes do 'E' quando as orações coordenadas possuírem SUJEITOS DIFERENTES (1ª oração sujeito 'o supervisor' / 2ª oração sujeito 'os agentes').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Mesmo sujeito nas duas orações."
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
          "reason": "CORRETA. Sujeitos diferentes nas orações ligadas por 'E' = Vírgula facultativa/recomendada."
        }
      ],
      "bizu": "💡 BIZU IBFC: Vírgula antes do 'E' = PERMITIDA se os sujeitos das duas orações forem DIFERENTES!"
    }
  },
  {
    "id": "port-sin-006",
    "subject": "Língua Portuguesa",
    "topic": "5. Conjunções Causais vs Consecutivas",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na frase: 'A chuva foi tão intensa QUE as ruas do setor censitário ficaram alagadas', a oração destacada possui valor sintático-semântico de:",
    "options": [
      {
        "key": "A",
        "text": "Consequência (Oração Subordinada Adverbial Consecutiva)."
      },
      {
        "key": "B",
        "text": "Causa (Oração Subordinada Adverbial Causal), respeitando a pontuação e a estrutura sintática das orações."
      },
      {
        "key": "C",
        "text": "Concessão (Oração Subordinada Adverbial Concessiva)."
      },
      {
        "key": "D",
        "text": "Condição (Oração Subordinada Adverbial Condicional)."
      },
      {
        "key": "E",
        "text": "Comparação."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A estrutura intensificadora 'TÃO... QUE' (ou tanto... que / tal... que) introduz uma oração subordinada adverbial CONSECUTIVA (expressa a consequência/resultado do fato).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Tão... que = Consequência (Consecutiva)."
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
      "bizu": "💡 BIZU IBFC: Tão / Tanto / Tal ... QUE = Oração Adverbial CONSECUTIVA (Consequência de algo)."
    }
  },
  {
    "id": "port-sin-007",
    "subject": "Língua Portuguesa",
    "topic": "5. Conjunções Conformativas",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que apresenta uma conjunção SUBORDINATIVA CONFORMATIVA (ideia de acordo/conformidade):",
    "options": [
      {
        "key": "A",
        "text": "Eles saíram cedo para que chegassem a tempo, de acordo com a norma-padrão da Língua Portuguesa."
      },
      {
        "key": "B",
        "text": "Embora estivesse frio, fomos à praia."
      },
      {
        "key": "C",
        "text": "Caso faça sol, faremos o recenseamento."
      },
      {
        "key": "D",
        "text": "Os agentes atuaram CONFORME as orientações do manual do IBGE."
      },
      {
        "key": "E",
        "text": "Ele fala tanto quanto o irmão."
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "As conjunções conformativas (*conforme, segundo, consoante, como*) indicam acordo/conformidade com um fato ou regra.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. 'Para que' é Final."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 'Embora' é Concessiva."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. 'Caso' é Condicional."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. Conforme = Conjunção Conformativa."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. 'Tanto quanto' é Comparativa."
        }
      ],
      "bizu": "💡 BIZU IBFC (CONFORMATIVAS): Conforme, Segundo, Consoante, Como (= conforme)."
    }
  },
  {
    "id": "port-sin-008",
    "subject": "Língua Portuguesa",
    "topic": "5. Colocação Pronominal - Próclise Obrigatória",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que a ocorrência da PRÓCLISE (pronome oblíquo antes do verbo) é OBRIGATÓRIA devido à presença de palavra atrativa de sentido negativo:",
    "options": [
      {
        "key": "A",
        "text": "Apresentaram-me os relatórios finais do recenseamento."
      },
      {
        "key": "B",
        "text": "Apresentar-me-ão os relatórios no próximo mês."
      },
      {
        "key": "C",
        "text": "NÃO me apresentaram os relatórios finais do recenseamento."
      },
      {
        "key": "D",
        "text": "Desejo que me apresentem os relatórios."
      },
      {
        "key": "E",
        "text": "Haviam me apresentado os relatórios, segundo os preceitos da gramática normativa pátria."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Palavras de sentido negativo (*não, nunca, jamais, ninguém, nada*) são atratores gramaticais fortíssimos que EXIGEM a próclise (pronome antes do verbo).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Ênclise no início de frase."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Mesóclise."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'Não me apresentaram' (palavra negativa 'não' atrai o pronome 'me')."
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
      "bizu": "💡 BIZU IBFC (PRÓCLISE OBRIGATÓRIA): Palavras negativas (Não, Nunca, Jamais) + Pronomes Relativos (Que) + Advérbios = Atraem o pronome para ANTES do verbo!"
    }
  },
  {
    "id": "port-ort-001",
    "subject": "Língua Portuguesa",
    "topic": "6. Ortografia - Novo Acordo Ortográfico e Acentuação",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com base nas regras do Novo Acordo Ortográfico da Língua Portuguesa, assinale a opção em que a palavra está grafada CORRETAMENTE sem acento gráfico:",
    "options": [
      {
        "key": "A",
        "text": "idéia"
      },
      {
        "key": "B",
        "text": "assembléia"
      },
      {
        "key": "C",
        "text": "heróico"
      },
      {
        "key": "D",
        "text": "ideia"
      },
      {
        "key": "E",
        "text": "jibóia"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "O Novo Acordo Ortográfico eliminou o acento agudo nos ditongos abertos paroxítonos 'ei' e 'oi' (ideia, assembleia, heroico, jiboia). Os ditongos abertos oxítonos continuam acentuados (herói, papéis, constrói).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Grafia antiga obsoleta."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Grafia antiga obsoleta."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Grafia antiga obsoleta."
        },
        {
          "key": "D",
          "isCorrect": true,
          "reason": "CORRETA. 'ideia' não possui acento pela nova regra dos ditongos abertos paroxítonos."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Ditongos abertos paroxítonos perderam o acento: ideia, assembleia, heroico, jiboia, paranoia!"
    }
  },
  {
    "id": "port-ort-002",
    "subject": "Língua Portuguesa",
    "topic": "6. Ortografia - Uso dos Porquês",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa que preenche CORREMENTE as lacunas: '___ você não fez a inscrição? Não entendi o ___ de tanta dúvida.'",
    "options": [
      {
        "key": "A",
        "text": "Porque / por que"
      },
      {
        "key": "B",
        "text": "Por quê / porque"
      },
      {
        "key": "C",
        "text": "Porquê / por quê, considerando o sentido denotativo e a coesão textual da frase."
      },
      {
        "key": "D",
        "text": "Por que / porquê"
      },
      {
        "key": "E",
        "text": "Por que / porque"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "1. 'Por que' (separado e sem acento) = Início de frases interrogativas. 2. 'porquê' (junto e com acento) = Substantivo antecedido de artigo ('o porquê' = o motivo).",
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
          "reason": "CORRETA. 'Por que' (pergunta início) e 'o porquê' (substantivo motivo)."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC (PORQUÊS): Por que = Pergunta/Início | Por quê = Fim de frase | Porque = Resposta/Pois | O porquê = Substantivo (O motivo)."
    }
  },
  {
    "id": "port-fig-001",
    "subject": "Língua Portuguesa",
    "topic": "6. Figuras de Linguagem - Eufemismo vs Hipérbole",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Na frase: 'O velhinho partiu desta para a melhor e descansou em paz', a figura de linguagem utilizada para suavizar uma notícia desagradável é o:",
    "options": [
      {
        "key": "A",
        "text": "Hipérbole"
      },
      {
        "key": "B",
        "text": "Eufemismo"
      },
      {
        "key": "C",
        "text": "Ironia"
      },
      {
        "key": "D",
        "text": "Paradoxo, respeitando a pontuação e a estrutura sintática das orações."
      },
      {
        "key": "E",
        "text": "Metáfora"
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Eufemismo consiste no emprego de palavras ou expressões suaves para atenuar o impacto de um fato desagradável, doloroso ou chocante (como a morte).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Hipérbole é exagero."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Eufemismo = Suavização de ideia desagradável."
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
      "bizu": "💡 BIZU IBFC: Eufemismo = Suavizar / Atenuar (Ex: 'Partiu para a melhor' = Morreu) | Hipérbole = Exagerar (Ex: 'Chorei um rio de lágrimas')."
    }
  },
  {
    "id": "rlm-neg-011",
    "subject": "Raciocínio Lógico",
    "topic": "1. Negação de Condicional com Conjunção P -> (Q e R)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Qual a NEGAÇÃO LÓGICA da proposição composta: 'Se o agente trabalha, então ele recebe o salário E ganha a bonificação'?",
    "options": [
      {
        "key": "A",
        "text": "Se o agente não trabalha, então não recebe o salário e não ganha a bonificação."
      },
      {
        "key": "B",
        "text": "O agente não trabalha ou recebe o salário e ganha a bonificação."
      },
      {
        "key": "C",
        "text": "O agente trabalha E (não recebe o salário OU não ganha a bonificação)."
      },
      {
        "key": "D",
        "text": "Se o agente recebe o salário, então trabalha."
      },
      {
        "key": "E",
        "text": "O agente não trabalha e não ganha a bonificação."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Regra do MANÉ no P -> (Q e R): Mantém a 1ª (P = 'o agente trabalha') E nega a 2ª parte. A negação de (Q e R) é (~Q ou ~R) por De Morgan.",
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
          "reason": "CORRETA. P e (~Q ou ~R): Mantém a 1ª E nega o consequente trocando E por OU."
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
      "bizu": "💡 BIZU IBFC RLM: Negação de P -> (Q e R) = P E (~Q OU ~R). Mantém a 1ª E nega o resto com De Morgan!"
    }
  },
  {
    "id": "rlm-neg-012",
    "subject": "Raciocínio Lógico",
    "topic": "2. Equivalência de Quantificador 'Todo A é B'",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A afirmação categórica 'TODO candidato aprovado é dedicado' é logicamente equivalente a:",
    "options": [
      {
        "key": "A",
        "text": "Nenhum candidato aprovado é dedicado."
      },
      {
        "key": "B",
        "text": "Algum candidato aprovado não é dedicado, segundo as regras formais das tabelas-verdade e conectivos."
      },
      {
        "key": "C",
        "text": "Se o indivíduo é dedicado, então ele é um candidato aprovado."
      },
      {
        "key": "D",
        "text": "Todo dedicado é candidato aprovado."
      },
      {
        "key": "E",
        "text": "Se o indivíduo é um candidato aprovado, então ele é dedicado."
      }
    ],
    "correctOption": "E",
    "explanation": {
      "summary": "O quantificador universal 'TODO A é B' é uma condicional implícita do tipo: 'Se é A, então é B' (Se é candidato aprovado, então é dedicado).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Essa seria a negação, não a equivalência."
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
          "reason": "CORRETA. 'Todo A é B' ≡ 'Se é A, então é B'."
        }
      ],
      "bizu": "💡 BIZU IBFC: 'TODO A é B' equivale a dizer: 'SE É A, ENTÃO É B'."
    }
  },
  {
    "id": "rlm-neg-013",
    "subject": "Raciocínio Lógico",
    "topic": "1. Negação do 'Existe pelo menos um'",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a NEGAÇÃO LÓGICA da proposição: 'Existe pelo menos um servidor do IBGE que fala alemão'?",
    "options": [
      {
        "key": "A",
        "text": "Todos os servidores do IBGE falam alemão."
      },
      {
        "key": "B",
        "text": "Nenhum servidor do IBGE fala alemão."
      },
      {
        "key": "C",
        "text": "Pelo menos um servidor do IBGE não fala alemão."
      },
      {
        "key": "D",
        "text": "Algum servidor do IBGE fala inglês."
      },
      {
        "key": "E",
        "text": "Existe algum servidor que fala alemão."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Negar a existência de 'pelo menos um' (quantificador existencial) é afirmar que NENHUM elemento possui aquela propriedade.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Negação de 'Existe pelo menos um' = 'Nenhum é'."
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
      "bizu": "💡 BIZU IBFC: Negação de 'Existe pelo menos um A que é B' = 'NENHUM A é B'."
    }
  },
  {
    "id": "rlm-diag-011",
    "subject": "Raciocínio Lógico",
    "topic": "1. Tabela Verdade da Disjunção Exclusiva (OU...OU)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A proposição composta por disjunção exclusiva 'OU P OU Q' (P <u>v</u> Q) apresenta valor lógico VERDADEIRO quando:",
    "options": [
      {
        "key": "A",
        "text": "As proposições P e Q possuírem valores lógicos DIFERENTES (uma verdadeira e a outra falsa)."
      },
      {
        "key": "B",
        "text": "Ambas as proposições P e Q forem verdadeiras."
      },
      {
        "key": "C",
        "text": "Ambas as proposições P e Q forem falsas."
      },
      {
        "key": "D",
        "text": "Apenas a primeira proposição for falsa, respeitando as leis de equivalência e dedução matemática."
      },
      {
        "key": "E",
        "text": "Nenhuma proposição for analisada."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "A disjunção exclusiva (Ou P ou Q) exige exclusividade: é VERDADEIRA se e somente se exatamente UMA proposição for verdadeira e a outra falsa (valores lógicos distintos).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Disjunção Exclusiva (OU...OU) = Verdadeira quando os valores forem DIFERENTES (V-F ou F-V)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Se ambas forem V, dá FALSO."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Se ambas forem F, dá FALSO."
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
      "bizu": "💡 BIZU IBFC: OU...OU (Exclusiva) = Valores DIFERENTES dá VERDADEIRO | Valores IGUAIS dá FALSO!"
    }
  },
  {
    "id": "rlm-diag-012",
    "subject": "Raciocínio Lógico",
    "topic": "3. Silogismo Categórico Válido",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Considere as premissas: P1: 'Todos os recenseadores usam colete azul'. P2: 'João é um recenseador'. A conclusão LOGICAMENTE VÁLIDA é:",
    "options": [
      {
        "key": "A",
        "text": "João não usa colete azul."
      },
      {
        "key": "B",
        "text": "Todos que usam colete azul são recenseadores."
      },
      {
        "key": "C",
        "text": "João usa colete azul."
      },
      {
        "key": "D",
        "text": "Alguns recenseadores não usam colete azul."
      },
      {
        "key": "E",
        "text": "João é um supervisor de informática."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Estrutura do silogismo clássico (Modus Ponens): Se Todo A é B e x pertence a A, então x pertence a B. João é recenseador, logo usa colete azul.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Não se pode inverter a premissa universal."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Conclusão dedutiva válida: João usa colete azul."
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
      "bizu": "💡 BIZU IBFC: Silogismo Válido = Respeita rigorosamente a dedução das premissas dadas no enunciado!"
    }
  },
  {
    "id": "rlm-diag-013",
    "subject": "Raciocínio Lógico",
    "topic": "3. Diagramas de Venn com 3 Conjuntos",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em um grupo de 100 agentes: 40 usam notebook, 30 usam tablet, 20 usam smartphone. 10 usam notebook e tablet, 5 usam notebook e smartphone, 5 usam tablet e smartphone, e 2 usam OS TRÊS dispositivos. Quantos usam APENAS notebook?",
    "options": [
      {
        "key": "A",
        "text": "40 agentes."
      },
      {
        "key": "B",
        "text": "30 agentes, de acordo com os princípios da lógica proposicional."
      },
      {
        "key": "C",
        "text": "27 agentes."
      },
      {
        "key": "D",
        "text": "15 agentes."
      },
      {
        "key": "E",
        "text": "20 agentes."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Apenas Notebook = Total Notebook (40) - (Interseção Not+Tab exclusiva) - (Interseção Not+Smart exclusiva) - (Três simultâneos). Not+Tab ex = 10 - 2 = 8. Not+Smart ex = 5 - 2 = 3. Apenas Notebook = 40 - 8 - 3 - 2 = 27.",
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
          "reason": "CORRETA. Apenas Notebook = 40 - 8 - 3 - 2 = 27 agentes."
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
      "bizu": "💡 BIZU IBFC (3 CONJUNTOS): Comece SEMPRE preenchendo a interseção central dos 3 conjuntos!"
    }
  },
  {
    "id": "rlm-diag-014",
    "subject": "Raciocínio Lógico",
    "topic": "4. Princípio Fundamental da Contagem (PFC)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Um agente do IBGE precisa escolher sua farda de trabalho. Ele dispõe de 3 opções de camisas (azul, branca e cinza) e 4 opções de calças (preta, jeans, caqui e azul). De quantas maneiras distintas ele pode se vestir combinando 1 camisa e 1 calça?",
    "options": [
      {
        "key": "A",
        "text": "12 maneiras distintas."
      },
      {
        "key": "B",
        "text": "7 maneiras distintas."
      },
      {
        "key": "C",
        "text": "1 caminho único."
      },
      {
        "key": "D",
        "text": "24 maneiras distintas, segundo as regras formais das tabelas-verdade e conectivos."
      },
      {
        "key": "E",
        "text": "10 maneiras distintas."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Pelo Princípio Fundamental da Contagem (PFC), multiplica-se o número de opções de cada decisão independente: 3 camisas * 4 calças = 12 combinações distintas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. PFC = 3 * 4 = 12 combinações distintas."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. 3 + 4 = 7 é soma, não multiplicação."
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
      "bizu": "💡 BIZU IBFC: Princípio Fundamental da Contagem (PFC) = Multiplica o número de opções de cada escolha!"
    }
  },
  {
    "id": "rlm-diag-015",
    "subject": "Raciocínio Lógico",
    "topic": "4. Arranjo vs Combinação Simples",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Qual a diferença conceitual básica entre ARRANJO SIMPLES e COMBINAÇÃO SIMPLES na análise combinatória?",
    "options": [
      {
        "key": "A",
        "text": "Na Combinação a ordem importa e no Arranjo não importa."
      },
      {
        "key": "B",
        "text": "No Arranjo a ordem dos elementos IMPORTA (gerando grupos diferentes); na Combinação a ordem NÃO importa."
      },
      {
        "key": "C",
        "text": "Ambos são fórmulas exclusivas para adição de matrizes."
      },
      {
        "key": "D",
        "text": "O Arranjo calcula apenas números ímpares."
      },
      {
        "key": "E",
        "text": "A Combinação exige que os elementos sejam idênticos, considerando a valoração lógica e o conjunto universo dos elementos."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Arranjo = A ordem importa (ex: senhas, pódios de corrida, cargos de Presidente e Vice). Combinação = A ordem NÃO importa (ex: comissão de 3 pessoas, duplas de trabalho).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Inverteu os conceitos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Arranjo = Ordem IMPORTA | Combinação = Ordem NÃO importa."
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
      "bizu": "💡 BIZU IBFC: Ordem importa? SIM -> ARRANJO (Senha/Pódio) | NÃO -> COMBINAÇÃO (Comissão/Equipe)."
    }
  },
  {
    "id": "rlm-diag-016",
    "subject": "Raciocínio Lógico",
    "topic": "4. Probabilidade da União de Eventos P(A u B)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Ao lançar um dado não viciado de 6 faces, qual a probabilidade de sair um número PAR OU um número MAIOR que 4?",
    "options": [
      {
        "key": "A",
        "text": "50% (ou 3/6)"
      },
      {
        "key": "B",
        "text": "33,3% (ou 2/6), respeitando as leis de equivalência e dedução matemática."
      },
      {
        "key": "C",
        "text": "100% (ou 6/6)"
      },
      {
        "key": "D",
        "text": "66,6% (ou 4/6)"
      },
      {
        "key": "E",
        "text": "16,6% (ou 1/6)"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Pares = {2, 4, 6} (3 casos). Maior que 4 = {5, 6} (2 casos). União = {2, 4, 5, 6} (4 casos distintos). Probabilidade = 4 / 6 = 2/3 = 66,6%.",
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
          "reason": "CORRETA. Casos favoráveis = {2, 4, 5, 6} -> 4/6 = 66,6%."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: P(A U B) = P(A) + P(B) - P(Interseção). Cuidado para não contar a interseção {6} duas vezes!"
    }
  },
  {
    "id": "rlm-diag-017",
    "subject": "Raciocínio Lógico",
    "topic": "4. Sequência Lógica Alfanumérica",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Observe a sequência de pares alfanuméricos: A1, C3, E5, G7, X. Seguindo a mesma regra de formação, qual deve ser o par X?",
    "options": [
      {
        "key": "A",
        "text": "H8"
      },
      {
        "key": "B",
        "text": "I8"
      },
      {
        "key": "C",
        "text": "J10"
      },
      {
        "key": "D",
        "text": "I9"
      },
      {
        "key": "E",
        "text": "H9"
      }
    ],
    "correctOption": "D",
    "explanation": {
      "summary": "Letras: A (1ª), C (3ª), E (5ª), G (7ª) -> pula de 2 em 2 letras no alfabeto. A próxima é I (9ª letra). Números: 1, 3, 5, 7 -> próximo ímpar é 9. Logo, X = I9.",
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
          "reason": "CORRETA. Letras pulam de 2 em 2 (A, C, E, G -> I); números ímpares (1, 3, 5, 7 -> 9). Par = I9."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Em sequências alfanuméricas, analise a regra das letras e dos números separadamente!"
    }
  }
];
