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
        "text": "A memória RAM é uma memória de leitura e escrita principal, de caráter volátil."
      },
      {
        "key": "D",
        "text": "A memória ROM permite a gravação constante de arquivos do usuário durante o uso do Windows."
      },
      {
        "key": "E",
        "text": "A memória RAM armazena o programa de inicialização da placa-mãe (BIOS/UEFI)."
      }
    ],
    "correctOption": "C",
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
          "isCorrect": true,
          "reason": "CORRETA. RAM = Leitura/Escrita, volátil, memória de trabalho."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. A ROM armazena instruções de fábrica e não arquivos do usuário."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A BIOS fica gravada na ROM, não na RAM."
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
        "text": "Armazena dados em chips de memória flash NAND sem partes mecânicas móveis."
      },
      {
        "key": "C",
        "text": "Utiliza feixe de luz laser para a leitura de células ópticas."
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
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. SSD = Chips de memória flash NAND sem peças móveis."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Laser é utilizado em mídias ópticas (CD/DVD/Blu-ray)."
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
    "topic": "2. Hardware - Conector USB Tipo-C",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "O conector USB Tipo-C (USB-C) tornou-se o padrão em notebooks e tablets modernos. Assinale a alternativa que apresenta uma vantagem do padrão USB-C:",
    "options": [
      {
        "key": "A",
        "text": "Possui um conector rígido que só se encaixa em uma posição única."
      },
      {
        "key": "B",
        "text": "É um conector reversível que permite a transferência de dados, sinais de vídeo e carregamento de energia em alta velocidade."
      },
      {
        "key": "C",
        "text": "Funciona apenas para transmissão analógica de rádio FM."
      },
      {
        "key": "D",
        "text": "Exige a instalação de pilhas internas no próprio cabo."
      },
      {
        "key": "E",
        "text": "Substitui a memória RAM do computador."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O conector USB-C é reversível (pode ser encaixado de qualquer lado) e suporta múltiplos protocolos simultâneos, incluindo dados em alta velocidade (USB 3.2/4), vídeo (DisplayPort) e energia (Power Delivery).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. O USB-C é REVERSÍVEL (não tem lado errado)."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. USB-C = Reversível + Dados + Vídeo + Energia."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Transmite dados digitais."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. É um cabo passivo ou ativo alimentado pela própria porta."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não é memória RAM."
        }
      ],
      "bizu": "💡 BIZU IBFC: USB-C = Reversível (pode virar de cabeça para baixo) + Dados + Vídeo + Energia."
    }
  },
  {
    "id": "inf-hw-006",
    "subject": "Informática",
    "topic": "1. Hardware - Memória Cache L1, L2 e L3",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "A memória Cache é uma memória estática intermediária posicionada entre o processador e a memória RAM. Qual a sua principal vantagem operacional?",
    "options": [
      {
        "key": "A",
        "text": "Substituir a necessidade de instalar uma fonte de alimentação no microcomputador."
      },
      {
        "key": "B",
        "text": "Evitar gargalos no processamento armazenando temporariamente os dados e instruções mais frequentemente utilizados pela CPU."
      },
      {
        "key": "C",
        "text": "Gravar permanentemente as fotos e arquivos do sistema operacional."
      },
      {
        "key": "D",
        "text": "Imprimir relatórios de erro da placa-mãe em tempo real."
      },
      {
        "key": "E",
        "text": "Converter conexões de cabo de rede em sinal de telefone fixo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Como a CPU roda em frequências muito mais altas que a memória RAM, a memória Cache (L1, L2, L3) armazena cópias das informações mais acessadas, reduzindo a ociosidade do processador.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. A fonte de alimentação continua sendo indispensável."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Memória Cache = Ponte rápida entre CPU e RAM para dados frequentes."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Cache é volátil e não armazena arquivos do usuário permanentemente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Não faz impressão de relatórios."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não altera sinal de telefonia."
        }
      ],
      "bizu": "💡 BIZU IBFC: Memória Cache = Estática (SRAM), ultra-rápida, volátil e dividida em níveis L1 (interna), L2 e L3."
    }
  },
  {
    "id": "inf-hw-007",
    "subject": "Informática",
    "topic": "2. Hardware - Dispositivos Mistos",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa que indica um periférico classificado como MISTO (dispositivo de Entrada e de Saída de dados simultaneamente):",
    "options": [
      {
        "key": "A",
        "text": "Teclado numérico USB"
      },
      {
        "key": "B",
        "text": "Mouse óptico sem fio"
      },
      {
        "key": "C",
        "text": "Monitor de tela sensível ao toque (Touchscreen)"
      },
      {
        "key": "D",
        "text": "Caixa de som estéreo"
      },
      {
        "key": "E",
        "text": "Scanner de mesa"
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Monitores Touchscreen são mistos porque exibem a imagem gerada pelo computador (Saída) e simultaneamente capturam os toques do usuário na tela (Entrada).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Teclado numérico é apenas Entrada."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Mouse óptico é apenas Entrada."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Touchscreen = Exibe imagem (Saída) + Recebe toques (Entrada)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Caixa de som é apenas Saída."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Scanner é apenas Entrada."
        }
      ],
      "bizu": "💡 BIZU IBFC: MISTO (Entrada/Saída) = Touchscreen, Impressora Multifuncional, Modem, Pendrive, Headset."
    }
  },
  {
    "id": "inf-hw-008",
    "subject": "Informática",
    "topic": "2. Hardware - Protocolo NVMe",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Em comparativo com os SSDs tradicionais conectados via interface SATA III (limite teórico de ~600 MB/s), os SSDs padrão NVMe (Non-Volatile Memory Express) conectam-se ao barramento PCIe e oferecem:",
    "options": [
      {
        "key": "A",
        "text": "Velocidades de leitura e escrita significativamente superiores, podendo ultrapassar 3.000 MB/s."
      },
      {
        "key": "B",
        "text": "Menor velocidade de leitura, porém com capacidade ilimitada em terabytes."
      },
      {
        "key": "C",
        "text": "Funcionamento volátil que apaga os dados a cada reinicialização."
      },
      {
        "key": "D",
        "text": "Leitura óptica por meio de feixes de laser infravermelho."
      },
      {
        "key": "E",
        "text": "Incompatibilidade total com qualquer sistema Windows."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O protocolo NVMe foi desenvolvido do zero para memórias flash de alta performance, comunicando-se via pistas PCIe diretamente com o processador, alcançando taxas de transferência de vários gigabytes por segundo.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. NVMe via PCIe = Taxas de transferência superiores a 3.000 MB/s."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. É muito mais rápido que o SATA III."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. É armazenamento não volátil permanente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Usa chips semicondutores, não laser."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. É totalmente compatível com Windows 10/11."
        }
      ],
      "bizu": "💡 BIZU IBFC: SSD SATA III = ~550 MB/s | SSD NVMe (PCIe) = +3.000 MB/s (Muito mais rápido!)."
    }
  },
  {
    "id": "inf-hw-009",
    "subject": "Informática",
    "topic": "1. Hardware - Unidade de Controle (UC)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Na CPU, a Unidade de Controle (UC) é o componente interno encarregado de:",
    "options": [
      {
        "key": "A",
        "text": "Realizar somas, subtrações e operações lógicas AND e OR."
      },
      {
        "key": "B",
        "text": "Buscar as instruções na memória, decodificá-las e gerenciar a sequência de execução do sistema."
      },
      {
        "key": "C",
        "text": "Fornecer energia elétrica para o cooler do processador."
      },
      {
        "key": "D",
        "text": "Armazenar os arquivos de planilhas do usuário."
      },
      {
        "key": "E",
        "text": "Exibir o cursor do mouse na tela do monitor."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A Unidade de Controle (UC) é o maestro da CPU: ela busca a instrução na memória principal, decodifica o comando e envia os sinais de controle aos demais componentes para a execução.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Quem faz cálculos aritméticos e comparações lógicas é a ULA."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. UC = Busca, decodifica e controla o fluxo de execução de instruções."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. A fonte de alimentação fornece energia."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos ficam no SSD/HD."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A placa de vídeo gera o cursor na tela."
        }
      ],
      "bizu": "💡 BIZU IBFC: CPU = ULA (Cálculos) + UC (Gerenciamento/Fluxo de Instruções) + Registradores (Memória interna)."
    }
  },
  {
    "id": "inf-hw-010",
    "subject": "Informática",
    "topic": "2. Hardware - Placa-Mãe (Motherboard)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "A Placa-Mãe (Motherboard) de um microcomputador desempenha o papel central de:",
    "options": [
      {
        "key": "A",
        "text": "Substituir a memória RAM quando o computador está sem energia."
      },
      {
        "key": "B",
        "text": "Interconectar fisicamente e eletricamente todos os componentes internos (CPU, Memória, Disco, Placas) e periféricos."
      },
      {
        "key": "C",
        "text": "Executar os cálculos matemáticos do sistema operacional."
      },
      {
        "key": "D",
        "text": "Imprimir documentos em papel térmico."
      },
      {
        "key": "E",
        "text": "Converter arquivos MP3 em textos do Word."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A Placa-Mãe é a placa de circuito impresso principal do computador. Nela estão os barramentos, soquete da CPU, slots de memória e conectores que interligam todos os periféricos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Não substitui a RAM."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Placa-Mãe = Interconecta fisicamente todos os componentes do sistema."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Quem faz cálculos é a CPU/ULA."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Impressora faz impressão."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não converte arquivos."
        }
      ],
      "bizu": "💡 BIZU IBFC: Placa-Mãe = Espinha dorsal do PC (Conecta CPU, RAM, SSD, Fonte e Periféricos)."
    }
  },
  {
    "id": "inf-so-001",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Atalho Nova Pasta",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Explorador de Arquivos do Windows 10/11, qual a combinação de teclas de atalho utilizada para criar instantaneamente uma NOVA PASTA no diretório aberto?",
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
      "summary": "O atalho `Ctrl + Shift + N` cria uma nova pasta no diretório atual do Explorador de Arquivos no Windows 10 e 11.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Ctrl + Shift + N` = Nova Pasta no Explorador de Arquivos."
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
          "reason": "Incorreto. `Ctrl + Alt + Del` exibe a tela de segurança do sistema."
        }
      ],
      "bizu": "💡 BIZU IBFC: Nova Pasta = `Ctrl + Shift + N` | Renomear = `F2` | Exclusão Definitiva = `Shift + Delete`."
    }
  },
  {
    "id": "inf-so-002",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Atalho Exclusão Definitiva",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao selecionar um arquivo no Windows 10/11 e acionar as teclas SHIFT + DELETE, qual o comportamento executado pelo sistema operacional?",
    "options": [
      {
        "key": "A",
        "text": "Mover o arquivo para a Lixeira, onde permanecerá por 30 dias."
      },
      {
        "key": "B",
        "text": "Excluir o arquivo permanentemente, sem enviá-lo para a Lixeira."
      },
      {
        "key": "C",
        "text": "Criar um atalho na Área de Trabalho."
      },
      {
        "key": "D",
        "text": "Compactar o arquivo em formato .ZIP."
      },
      {
        "key": "E",
        "text": "Ocultar o arquivo nas propriedades da pasta."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A combinação `Shift + Delete` ignora o envio para a Lixeira e efetua a exclusão definitiva do arquivo no sistema de arquivos.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas a tecla `Delete` envia o arquivo para a Lixeira."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Shift + Delete = Exclusão definitiva sem ir para a Lixeira."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não cria atalho."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Não compacta o arquivo."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não altera o atributo de oculto."
        }
      ],
      "bizu": "💡 BIZU IBFC: Delete = Vai para a Lixeira | Shift + Delete = EXCLUSÃO DEFINITIVA (Não passa pela Lixeira!)."
    }
  },
  {
    "id": "inf-so-003",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Histórico de Transferência",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "No Windows 10/11, a combinação de teclas WIN + V permite acessar qual importante recurso de produtividade?",
    "options": [
      {
        "key": "A",
        "text": "O Gerenciador de Dispositivos e Drivers."
      },
      {
        "key": "B",
        "text": "O Histórico da Área de Transferência, exibindo múltiplos textos e imagens copiados anteriormente."
      },
      {
        "key": "C",
        "text": "O Prompt de Comando em modo Administrador."
      },
      {
        "key": "D",
        "text": "O Painel de Controle clássico."
      },
      {
        "key": "E",
        "text": "A ferramenta de desfragmentação de disco."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O atalho `Win + V` abre o painel do Histórico da Área de Transferência do Windows, permitindo visualizar e colar múltiplos elementos copiados previamente (`Ctrl + C`).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Gerenciador de dispositivos é aberto pelas propriedades do sistema ou Win+X."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Win + V = Histórico da Área de Transferência."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Prompt de comando é aberto por 'cmd'."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Painel de controle abre pela busca."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Desfragmentador é ferramenta de otimização."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Ctrl + V` = Cola o último item | `Win + V` = Histórico de vários itens copiados!"
    }
  },
  {
    "id": "inf-so-004",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Gerenciador de Tarefas",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Quando um programa deixa de responder e trava a tela do Windows 10/11, qual atalho de teclado abre DIRETO o Gerenciador de Tarefas para encerrar o processo travado?",
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
      "summary": "O atalho `Ctrl + Shift + Esc` abre diretamente a janela do Gerenciador de Tarefas do Windows. `Ctrl + Alt + Del` exibe uma tela de segurança com várias opções.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Ctrl + Shift + Esc = Abre DIRETO o Gerenciador de Tarefas."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Ctrl + Alt + Del abre a tela intermediária de segurança (Bloquear, Alternar usuário, Gerenciador)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Win + Tab abre a Visão de Tarefas."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Alt + Tab alterna entre janelas abertas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Win + R abre o diálogo Executar."
        }
      ],
      "bizu": "💡 BIZU IBFC: Gerenciador de Tarefas DIRETO = `Ctrl + Shift + Esc` | Tela de Segurança = `Ctrl + Alt + Del`."
    }
  },
  {
    "id": "inf-so-005",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Lixeira do Windows",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Com relação às regras de funcionamento da Lixeira no Windows 10/11, assinale a afirmativa verdadeira:",
    "options": [
      {
        "key": "A",
        "text": "Arquivos excluídos de um pendrive USB conectado ao computador são enviados normalmente para a Lixeira."
      },
      {
        "key": "B",
        "text": "Ao esvaziar a Lixeira, o espaço em disco ocupado pelos arquivos é liberado para o sistema."
      },
      {
        "key": "C",
        "text": "Arquivos armazenados na Lixeira executam programas automaticamente em segundo plano."
      },
      {
        "key": "D",
        "text": "A Lixeira não permite restaurar arquivos para a sua pasta de origem."
      },
      {
        "key": "E",
        "text": "Arquivos excluídos via rede local de outro computador ficam salvos na Lixeira local."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Os arquivos na Lixeira continuam ocupando espaço em disco. Somente ao 'Esvaziar a Lixeira' esse espaço é liberado. Arquivos apagados de mídias removíveis (pendrives) ou unidades de rede NÃO vão para a Lixeira.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos excluídos de pendrives são apagados permanentemente (não vão para a Lixeira)."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Esvaziar a Lixeira libera o espaço no disco rígido."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Arquivos na Lixeira não podem ser executados diretamente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. O recurso 'Restaurar' devolve o arquivo à pasta original."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Exclusão pela rede ignora a Lixeira do computador remoto."
        }
      ],
      "bizu": "💡 BIZU IBFC (LIXEIRA): NÃO vão para a Lixeira: 1. Arquivos de Pen Drive / Cartão SD | 2. Arquivos de Rede | 3. Exclusão com Shift + Delete."
    }
  },
  {
    "id": "inf-so-006",
    "subject": "Informática",
    "topic": "4. Windows 10/11 - Tecla F2 (Renomear)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao selecionar um arquivo no Explorador de Arquivos do Windows e pressionar a tecla F2, o sistema operacional irá:",
    "options": [
      {
        "key": "A",
        "text": "Excluir o arquivo selecionado para a Lixeira."
      },
      {
        "key": "B",
        "text": "Ativar o modo de edição do nome do arquivo selecionado para RENOMEÁ-LO."
      },
      {
        "key": "C",
        "text": "Criar uma cópia duplicada do arquivo no Desktop."
      },
      {
        "key": "D",
        "text": "Imprimir o documento na impressora padrão."
      },
      {
        "key": "E",
        "text": "Abrir o arquivo no Bloco de Notas."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A tecla de atalho F2 no Explorador de Arquivos ativa a edição rápida do nome de arquivos ou pastas selecionadas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Excluir é feito com a tecla Delete."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. F2 = Editar/Renomear arquivo ou pasta selecionada."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Duplicar requer copiar e colar (Ctrl+C e Ctrl+V)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Imprimir é Ctrl+P."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Abrir é Enter ou duplo clique."
        }
      ],
      "bizu": "💡 BIZU IBFC: F2 = RENOMEAR | F3 = BUSCAR | F5 = ATUALIZAR | F11 = TELA CHEIA."
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
          "reason": "Incorreto. `Win + E` abre o Explorador de Arquivos."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + W` fecha a aba ou janela ativa."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Alt + F4` fecha o aplicativo ativo ou exibe o menu desligar."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Shift + Esc` abre o Gerenciador de Tarefas."
        }
      ],
      "bizu": "💡 BIZU IBFC: `Win + L` = Lock (Bloquear tela) | `Win + E` = Explorer (Explorador de Arquivos) | `Win + D` = Desktop (Mostrar Área de Trabalho)."
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
        "text": "Win + Shift + S"
      },
      {
        "key": "B",
        "text": "Ctrl + Alt + PrintScreen"
      },
      {
        "key": "C",
        "text": "Win + P"
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
    "correctOption": "A",
    "explanation": {
      "summary": "`Win + Shift + S` abre a barra de captura retangular, livre ou de tela cheia do Windows, salvando a imagem capturada diretamente na Área de Transferência.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `Win + Shift + S` = Atalho da Ferramenta de Captura de Tela do Windows."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Alt + PrintScreen` não é o atalho padrão da ferramenta de captura."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. `Win + P` abre a projeção de telas (duplicar/estender)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + Shift + N` cria nova pasta."
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
        "text": "O Alt + Tab desliga o computador e o Win + Tab fecha todas as janelas."
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
        "text": "Substituir gradualmente o Painel de Controle tradicional, oferecendo uma interface moderna para personalização, redes, contas e atualizações."
      },
      {
        "key": "B",
        "text": "Formatador exclusivo de pen drives em formato Linux EXT4."
      },
      {
        "key": "C",
        "text": "Impedir a instalação de antivírus terceiros."
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
    "correctOption": "A",
    "explanation": {
      "summary": "O aplicativo Configurações (`Win + I`) é a central moderna de ajustes do Windows 10/11, centralizando personalização, contas, atualizações (Windows Update) e privacidade.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Configurações (`Win + I`) = Central moderna de ajustes que substitui gradualmente o Painel de Controle."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Não é formatador exclusivo de EXT4."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Permite qualquer antivírus."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Ajustes de cooler dependem de softwares de hardware."
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
          "reason": "Incorreto. .EXE é executável de programa."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. .DOCX = Documento do Microsoft Word."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. .PDF é documento portátil Acrobat."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. .TXT é texto sem formatação."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. .XLSX é planilha Excel."
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
        "text": "Desligar o monitor de vídeo por 10 segundos."
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
          "reason": "Incorreto. Não existe esse botão na guia Inserir."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Formatar apaga os dados."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Alt + F4 fecha a janela."
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
        "text": "O envio de notificações passou a exigir autorização prévia e explícita do usuário (permissão runtime POST_NOTIFICATIONS)."
      },
      {
        "key": "C",
        "text": "As notificações são convertidas automaticamente em mensagens de SMS."
      },
      {
        "key": "D",
        "text": "É obrigatório conectar o smartphone à tomada para receber notificações."
      },
      {
        "key": "E",
        "text": "Notificações só funcionam com a tela desbloqueada."
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
        "text": "Permitir ao usuário compartilhar apenas fotos e vídeos específicos com um aplicativo, sem conceder acesso a toda a sua galeria de mídias."
      },
      {
        "key": "C",
        "text": "Apagar as fotos antigas após 24 horas de uso."
      },
      {
        "key": "D",
        "text": "Exigir senha de administrador a cada foto tirada pela câmera."
      },
      {
        "key": "E",
        "text": "Impedir o envio de imagens via WhatsApp."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Photo Picker reduz o acesso excessivo a dados. Em vez de dar permissão a toda a galeria (`READ_MEDIA_IMAGES`), o usuário seleciona somente as imagens necessárias para o app.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. O objetivo é justamente limitar o acesso ao armazenamento."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Seletor de Fotos = Compartilha apenas fotos escolhidas sem expor toda a galeria."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não apaga fotos."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Não exige senha de administrador."
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
        "text": "Ambas fornecem exatamente as mesmas coordenadas geográficas milimétricas."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O Android 13+ reforça a privacidade oferecendo a escolha entre a localização 'Precisa' (GPS exato) e a 'Aproximada' (estimativa por rede/Wi-Fi), ideal para apps que não necessitam de navegação exata metro a metro.",
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
        "text": "Visualizar um histórico detalhado das últimas 24 horas informando quais aplicativos acessaram a câmera, microfone e localização."
      },
      {
        "key": "B",
        "text": "Formatador de fábrica ativado por voz."
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
    "correctOption": "A",
    "explanation": {
      "summary": "O Painel de Privacidade mostra uma linha do tempo e gráficos claros revelando quais apps acessaram dados sensíveis (Câmera, Microfone, Localização) ao longo das últimas 24 horas.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Painel de Privacidade = Histórico das 24h de uso da Câmera, Microfone e Localização."
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
      "bizu": "💡 BIZU IBFC: Painel de Privacidade (Android 13+) = Mostra quais apps usaram Câmera, Microfone e GPS nas últimas 24 horas."
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
        "text": "Apenas o backup Full realizado na segunda-feira."
      },
      {
        "key": "C",
        "text": "O backup Full de segunda-feira E TODOS os backups incrementais (terça, quarta e quinta)."
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
    "correctOption": "C",
    "explanation": {
      "summary": "Para restaurar um plano de backup Incremental, necessita-se do último backup FULL mais TODOS os backups incrementais gerados em ordem cronológica até a data da falha.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas a quinta-feira deixaria de fora os dados de segunda a quarta."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Apenas o Full deixaria de fora as alterações de terça a quinta."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Restaurar Incremental = ÚLTIMO FULL + TODOS OS INCREMENTAIS."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. O incremental só guarda as mudanças do dia anterior."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A restauração é perfeitamente viável."
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
          "reason": "Incorreto. Copiar tudo novamente é o backup FULL."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Diferencial = Copia dados alterados desde o último backup FULL (acumulativo)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não se limita a JPG."
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
        "text": "Código malicioso que criptografa os arquivos do sistema e exige o pagamento de um resgate para disponibilizar a chave de decodificação."
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
        "text": "Técnica de invasão que altera o endereço IP da placa de rede."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Ransomware ('Ransom' = resgate) é o malware que sequestra dados bloqueando o acesso por meio de criptografia forte e exigindo resgate (geralmente em criptomoedas).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Exibir anúncios indesejados é função do Adware."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Ransomware = Criptografia de arquivos com cobrança de resgate."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Não é software legítimo."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Filtro de pacotes de rede é o Firewall."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Alterar endereço IP é Spoofing de IP."
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
          "reason": "Incorreto. Firewall é proteção de rede."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Defragmentar organiza arquivos no disco."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Backup é cópia de segurança."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Keylogger grava teclas digitadas."
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
    "statement": "A respeito das ferramentas de segurança de sistemas, assinale a opção que diferencia corretamente o FIREWALL do ANTIVÍRUS:",
    "options": [
      {
        "key": "A",
        "text": "O Firewall remove vírus do disco rígido e o Antivírus bloqueia portas de comunicação de rede."
      },
      {
        "key": "B",
        "text": "O Firewall atua filtrando o tráfego de rede (bloqueando ou liberando portas e conexões), enquanto o Antivírus detecta e elimina arquivos e programas maliciosos no computador."
      },
      {
        "key": "C",
        "text": "O Antivírus é um hardware instalado na placa-mãe e o Firewall é um cabo de dados."
      },
      {
        "key": "D",
        "text": "O Firewall substitui a necessidade de utilizar senhas nos sistemas."
      },
      {
        "key": "E",
        "text": "O Antivírus bloqueia o acesso físico de pessoas à sala de servidores."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O Firewall inspeciona e filtra pacotes de dados nas portas de comunicação de rede (entrada/saída). O Antivírus analisa arquivos no disco e memória para identificar e remover malwares.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. As atribuições estão invertidas na alternativa A."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Firewall = Filtro de tráfego de rede | Antivírus = Vacina contra malwares no sistema."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ambos são predominantemente softwares de segurança."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Não substitui senhas."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Controle de acesso físico é segurança patrimonial."
        }
      ],
      "bizu": "💡 BIZU IBFC: Firewall = Muro de proteção de REDE (Filtra portas/conexões) | Antivírus = Vacina contra PRAGAS no sistema."
    }
  },
  {
    "id": "inf-seg-006",
    "subject": "Informática",
    "topic": "6. Segurança - Keylogger",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Qual o tipo de spyware projetado especificamente para capturar e registrar sequencialmente todas as teclas digitadas pelo usuário no teclado físico do computador?",
    "options": [
      {
        "key": "A",
        "text": "Keylogger"
      },
      {
        "key": "B",
        "text": "Ransomware"
      },
      {
        "key": "C",
        "text": "Worm"
      },
      {
        "key": "D",
        "text": "Firewall de Filtro"
      },
      {
        "key": "E",
        "text": "Trojan Downloader"
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "Keylogger é um programa espião que monitora e grava todas as teclas digitadas no teclado físico, utilizado por criminosos para roubar senhas e dados de cartão.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Keylogger = Captura e registra as teclas digitadas."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Ransomware sequestra por criptografia."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Worm se autorreplica na rede."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Firewall é proteção de rede."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Trojan baixa outros malwares."
        }
      ],
      "bizu": "💡 BIZU IBFC: Keylogger = Grava Teclas digitadas | Screenlogger = Grava cliques e telas exibidas."
    }
  },
  {
    "id": "inf-wrd-001",
    "subject": "Informática",
    "topic": "7. MS Word PT-BR - Atalhos de Formatação",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "No Microsoft Word (em português do Brasil), qual combinação de teclas de atalho aplica a formatação NEGRITO ao texto selecionado?",
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
      "summary": "No Word em Português (PT-BR): `Ctrl + N` = Negrito, `Ctrl + I` = Itálico, `Ctrl + S` = Sublinhado, `Ctrl + B` = Salvar.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + B` SALVA o documento no Word PT-BR (B de Backup/Salvar)."
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
    "topic": "7. MS Word PT-BR - Alinhamento de Parágrafo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Para aplicar o alinhamento JUSTIFICADO (alinhado uniformemente entre as margens esquerda e direita) a um parágrafo selecionado no Word PT-BR, utiliza-se o atalho:",
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
      "summary": "No Word PT-BR: `Ctrl + J` = Justificado, `Ctrl + E` = cEntralizado, `Ctrl + Q` = EsQueldo (Esquerda), `Ctrl + G` = Direita.",
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
          "reason": "Incorreto. `Ctrl + Q` = Alinhado à Esquerda."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + G` = Alinhado à Direita."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. `Ctrl + T` = Selecionar Tudo."
        }
      ],
      "bizu": "💡 BIZU IBFC (ALINHAMENTO WORD PT-BR): `Ctrl + J` = Justificado | `Ctrl + E` = cEntralizado | `Ctrl + Q` = Esquerda | `Ctrl + G` = Direita."
    }
  },
  {
    "id": "inf-xls-001",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Função MÉDIA",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa que apresenta a fórmula correta no Microsoft Excel (idioma Português) para calcular a média aritmética simples das células B2 até B7 e D2 até D7:",
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
      "summary": "A função `=MÉDIA(intervalo1; intervalo2)` calcula a média aritmética. O ponto e vírgula (;) separa argumentos e intervalos distintos. Dois-pontos (:) indica intervalo contínuo ('até').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `=MÉDIA(B2:B7; D2:D7)` calcula a média aritmética simples dos dois intervalos."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Somou apenas 4 células soltas dividindo por 4."
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
          "reason": "Incorreto. `CONT.NÚM()` apenas conta a quantidade de células com números."
        }
      ],
      "bizu": "💡 BIZU IBFC (EXCEL): `=MÉDIA()` = Média Aritmética | `=MED()` = Mediana (Valor Central) | Dois-pontos `:` = ATÉ | Ponto e vírgula `;` = E."
    }
  },
  {
    "id": "inf-xls-002",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Referências Absolutas ($)",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Na célula B2 de uma planilha do Excel, foi digitada a fórmula `=$A$1 + B1`. Ao copiar essa célula B2 e colá-la na célula C3, a fórmula resultante em C3 será:",
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
      "summary": "O cifrão `$A$1` trava a coluna A e a linha 1 (referência absoluta). Ao deslocar a fórmula para C3 (uma coluna à direita e uma linha abaixo), a parte relativa `B1` se transforma em `C2`.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. `$A$1` fica travado. `B1` desloca-se para `C2`."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. O cifrão travou a célula A1."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Perderia as travas do cifrão."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. A parte relativa B1 precisava se deslocar."
        }
      ],
      "bizu": "💡 BIZU IBFC: Cifrão `$` TRAVA a linha/coluna! O termo que possui `$` não muda ao copiar e colar."
    }
  },
  {
    "id": "inf-xls-003",
    "subject": "Informática",
    "topic": "7. MS Excel PT-BR - Função CONT.SE",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Em uma planilha do Excel, a função `=CONT.SE(A1:A10; \">50\")` executa qual operação?",
    "options": [
      {
        "key": "A",
        "text": "Soma os valores contidos no intervalo A1:A10 que forem maiores que 50."
      },
      {
        "key": "B",
        "text": "Conta o número de células no intervalo A1:A10 que possuem valores estritamente maiores que 50."
      },
      {
        "key": "C",
        "text": "Calcula a média ponderada das células com valor 50."
      },
      {
        "key": "D",
        "text": "Multiplica os valores de A1 até A10 por 50."
      },
      {
        "key": "E",
        "text": "Substitui o conteúdo de A1:A10 por 50."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A função `CONT.SE(intervalo; critério)` conta a quantidade de células dentro do intervalo que atendem à condição estabelecida (`>50`).",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Somar com condição é a função `SOMASE()`."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `CONT.SE` = Conta a quantidade de células que atendem ao critério."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Calcular média com condição é `MÉDIASE()`."
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
    "id": "inf-net-001",
    "subject": "Informática",
    "topic": "8 e 9. Redes/E-mail - Campo Cco (Com Cópia Oculta)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao enviar um e-mail corporativo no IBGE, o remetente insere um endereço no campo 'Cco' (Com Cópia Oculta). Assinale a alternativa correta sobre o comportamento desse campo:",
    "options": [
      {
        "key": "A",
        "text": "O destinatário em 'Cco' recebe a mensagem, mas seu endereço fica OCULTO para os destinatários nos campos 'Para' e 'Cc'."
      },
      {
        "key": "B",
        "text": "O servidor de e-mail bloqueia o envio da mensagem por motivo de privacidade."
      },
      {
        "key": "C",
        "text": "Todos os destinatários no campo 'Para' conseguem ver quem estava listado no 'Cco'."
      },
      {
        "key": "D",
        "text": "O campo 'Cco' imprime uma cópia em formato físico de papel."
      },
      {
        "key": "E",
        "text": "A mensagem enviada no campo 'Cco' apaga-se automaticamente após 1 hora."
      }
    ],
    "correctOption": "A",
    "explanation": {
      "summary": "O campo Cco (Com Cópia Oculta) oculta o endereço do destinatário perante os campos 'Para' e 'Cc'. Nem o 'Para' nem o 'Cc' sabem que o 'Cco' recebeu o e-mail.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": true,
          "reason": "CORRETA. Cco = Com Cópia Oculta (O endereço fica invisível para os demais destinatários)."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. É um recurso padrão de e-mail."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Ninguém nos campos Para ou Cc enxerga o Cco."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. É um recurso eletrônico."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não apaga a mensagem."
        }
      ],
      "bizu": "💡 BIZU IBFC (E-MAIL): `Para` e `Cc` = Visíveis para todos | `Cco` = Oculto (Ninguém nos campos Para ou Cc enxerga o Cco)."
    }
  },
  {
    "id": "inf-net-002",
    "subject": "Informática",
    "topic": "8. Redes - Protocolos de E-mail (SMTP, POP3, IMAP)",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa que associa de forma correta o protocolo de comunicação de e-mail à sua função no servidor:",
    "options": [
      {
        "key": "A",
        "text": "SMTP é o protocolo responsável pelo RECEBIMENTO de mensagens no cliente local."
      },
      {
        "key": "B",
        "text": "POP3 é o protocolo responsável pelo ENVIO de e-mails para servidores externos."
      },
      {
        "key": "C",
        "text": "SMTP é utilizado para o ENVIO (saída) de e-mails, enquanto POP3 e IMAP são utilizados para o RECEBIMENTO (entrada)."
      },
      {
        "key": "D",
        "text": "IMAP apaga permanentemente as mensagens do servidor assim que são lidas no celular."
      },
      {
        "key": "E",
        "text": "DNS é o protocolo padrão para criptografar senhas de e-mail."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "SMTP (Simple Mail Transfer Protocol) é o protocolo de envio de e-mails. POP3 e IMAP são protocolos de recebimento de e-mails. O POP3 baixa e apaga do servidor; o IMAP sincroniza e mantém no servidor.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. SMTP é para ENVIO."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. POP3 é para RECEBIMENTO."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. SMTP = Envio (Saída) | POP3 e IMAP = Recebimento (Entrada)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. POP3 apaga do servidor; IMAP mantém sincronizado."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. DNS converte nomes em endereços IP."
        }
      ],
      "bizu": "💡 BIZU IBFC: SMTP = Sua Mensagem Tá Partindo (ENVIO) | POP3 = Baixa pro PC e apaga do servidor (RECEBER) | IMAP = Sincroniza na Nuvem (RECEBER)."
    }
  },
  {
    "id": "inf-net-003",
    "subject": "Informática",
    "topic": "8. Redes - Protocolo HTTPS (Porta 443)",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Ao navegar na internet, qual a principal garantia de segurança oferecida pelo protocolo HTTPS em relação ao HTTP simples?",
    "options": [
      {
        "key": "A",
        "text": "O HTTPS não necessita de conexão com provedor de internet."
      },
      {
        "key": "B",
        "text": "O HTTPS utiliza criptografia (SSL/TLS) para proteger o tráfego de dados confidenciais entre o navegador e o servidor web."
      },
      {
        "key": "C",
        "text": "O HTTPS impede a exibição de arquivos de imagem na tela."
      },
      {
        "key": "D",
        "text": "O HTTPS é exclusivo para acesso a redes de rádio amador."
      },
      {
        "key": "E",
        "text": "O HTTPS dispensa o uso de antivírus no computador."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O HTTPS (Hypertext Transfer Protocol Secure) adiciona uma camada de criptografia (TLS/SSL) ao protocolo HTTP tradicional, operando por padrão na porta 443 para garantir sigilo e integridade.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Necessita de conexão de rede normalmente."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. HTTPS = HTTP + Criptografia SSL/TLS (Segurança no navegador, porta 443)."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Exibe imagens e conteúdos normalmente."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. É o padrão web para navegação segura."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Não substitui o antivírus."
        }
      ],
      "bizu": "💡 BIZU IBFC: HTTP = Porta 80 (Sem criptografia) | HTTPS = Porta 443 (Com criptografia SSL/TLS, ícone de cadeado)."
    }
  },
  {
    "id": "port-cra-001",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Uso Correto e Proibições",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a frase em que o emprego do sinal indicativo de crase está CORRETO segundo a norma-padrão da Língua Portuguesa:",
    "options": [
      {
        "key": "A",
        "text": "O agente começou à preencher o formulário do censo."
      },
      {
        "key": "B",
        "text": "A equipe dirigiu-se à pé até o posto de atendimento."
      },
      {
        "key": "C",
        "text": "Entregamos a listagem de dados à supervisora regional."
      },
      {
        "key": "D",
        "text": "O pesquisador referia-se à uma cidade do interior."
      },
      {
        "key": "E",
        "text": "As reuniões ocorrem dia à dia na agência."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Ocorreu a crase pela junção da preposição A (exigida por 'entregamos') com o artigo definido feminino A que antecede 'supervisora regional'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. É PROIBIDO o uso da crase antes de verbos ('preencher')."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. É PROIBIDO o uso da crase antes de palavras masculinas ('pé')."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. Entregamos A + A supervisora = à supervisora."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. É PROIBIDO o uso da crase antes do artigo indefinido 'uma'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. É PROIBIDO o uso da crase entre palavras repetidas ('dia a dia')."
        }
      ],
      "bizu": "💡 BIZU IBFC (Crase Proibida): NUNCA use crase antes de: 1. Verbos | 2. Palavras masculinas | 3. Artigo 'uma' | 4. Palavras repetidas (dia a dia, passo a passo)."
    }
  },
  {
    "id": "port-cra-002",
    "subject": "Língua Portuguesa",
    "topic": "7. Crase - Casos Facultativos",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a alternativa em que o uso do sinal indicativo de crase é FACULTATIVO segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Entregou o relatório à diretora de operações."
      },
      {
        "key": "B",
        "text": "Enviei a notificação à minha supervisora de campo."
      },
      {
        "key": "C",
        "text": "O recenseador chegou à noite ao município."
      },
      {
        "key": "D",
        "text": "O relatório referia-se à professora de estatística."
      },
      {
        "key": "E",
        "text": "Todos os pesquisadores foram à praia no domingo."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "A crase é facultativa em três situações: 1) Antes de pronomes possessivos femininos no singular (minha, tua, sua); 2) Antes de nomes próprios femininos; 3) Após a preposição 'até'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória ('à diretora')."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Facultativa antes de pronome possessivo feminino no singular ('à minha' ou 'a minha')."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória em locução adverbial feminina de tempo ('à noite')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória ('à professora')."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Crase obrigatória ('à praia')."
        }
      ],
      "bizu": "💡 BIZU IBFC (Crase Facultativa): 1. Pronome Possessivo Feminino (minha/sua) | 2. Nome Próprio Feminino (Maria) | 3. Após a palavra 'Até'."
    }
  },
  {
    "id": "port-con-001",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal - Verbo Haver e Fazer Impessoais",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Assinale a opção em que a concordância verbal está inteiramente CORRETA segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Houveram muitos atrasos no envio dos relatórios mensais."
      },
      {
        "key": "B",
        "text": "Fazem dois anos que os pesquisadores atuam nesta região."
      },
      {
        "key": "C",
        "text": "Havia muitas dúvidas sobre o preenchimento dos formulários."
      },
      {
        "key": "D",
        "text": "Haviam vários documentos acumulados sobre a mesa."
      },
      {
        "key": "E",
        "text": "Aluga-se casas para a equipe de campo do IBGE."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "Os verbos HAVER (no sentido de existir ou ocorrer) e FAZER (indicando tempo decorrido) são IMPESSOAIS e devem obrigatoriamente permanecer na 3ª pessoa do SINGULAR.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. O correto é 'Houve muitos atrasos'."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. O correto é 'Faz dois anos'."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'Havia muitas dúvidas' (verbo haver impessoal no singular)."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. O correto é 'Havia vários documentos'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Na voz passiva sintética, a concordância é obrigatória no plural: 'Alugam-se casas'."
        }
      ],
      "bizu": "💡 BIZU IBFC PORTUGUÊS: HAVER (existir) e FAZER (tempo decorrido) = SEMPRE NO SINGULAR! ('Havia problemas', 'Faz 3 anos')."
    }
  },
  {
    "id": "port-con-002",
    "subject": "Língua Portuguesa",
    "topic": "6. Concordância Verbal - Partícula SE Apassivadora vs Indeterminação",
    "source": "IBFC / IBGE",
    "difficulty": "Difícil",
    "statement": "Assinale a alternativa em que a concordância verbal com a partícula SE foi empregada em conformidade com a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Vende-se casas populares no município."
      },
      {
        "key": "B",
        "text": "Precisa-se de agentes de informática qualificados."
      },
      {
        "key": "C",
        "text": "Aluga-se apartamentos no centro da cidade."
      },
      {
        "key": "D",
        "text": "Procura-se revisores de texto para o relatório."
      },
      {
        "key": "E",
        "text": "Conserta-se computadores antigos na agência."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "Quando o verbo é Transitivo Indireto + SE ('Precisa-se de...'), o SE atua como Índice de Indeterminação do Sujeito, mantendo o verbo obrigatoriamente no SINGULAR. Já em 'Alugam-se apartamentos' (VTD + SE), o sujeito é paciente e o verbo vai para o plural.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Verbo Transitivo Direto exige plural: 'Vendem-se casas'."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. VTI + SE = Verbo no singular ('Precisa-se de agentes...')."
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
      "bizu": "💡 BIZU IBFC: VTD + SE = Concorda com o Sujeito ('Alugam-se casas') | VTI + SE (com preposição) = Fica no SINGULAR ('Precisa-se de agentes')."
    }
  },
  {
    "id": "port-reg-001",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Verbo Assistir",
    "source": "IBFC / IBGE",
    "difficulty": "Médio",
    "statement": "Quanto à regência verbal de acordo com a norma-padrão, assinale a alternativa em que o verbo ASSISTIR foi empregado no sentido de 'ver / presenciar' com a regência adequada:",
    "options": [
      {
        "key": "A",
        "text": "Os técnicos assistiram o treinamento de sistemas na semana passada."
      },
      {
        "key": "B",
        "text": "Os técnicos assistiram ao treinamento de sistemas na semana passada."
      },
      {
        "key": "C",
        "text": "O médico assistiu ao paciente ferido com dedicação."
      },
      {
        "key": "D",
        "text": "Os alunos assistiram o documentário em sala de aula."
      },
      {
        "key": "E",
        "text": "Nós assistimos ele durante a conferência do IBGE."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "O verbo ASSISTIR no sentido de ver/presenciar é Transitivo Indireto e exige a preposição A ('Assistir AO treinamento', 'Assistir À palestra'). No sentido de socorrer, é Transitivo Direto ('Assistiu o paciente').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Falta a preposição A exigida pelo sentido de ver."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. `Assistir a` + `o treinamento` = `Assistiram ao treinamento`."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. No sentido de prestar socorro/ajuda, a norma gramatical prefere o uso sem preposição ('assistiu o paciente')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'assistiram ao documentário'."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Deveria ser 'assistimos a ele'."
        }
      ],
      "bizu": "💡 BIZU IBFC: ASSISTIR (Ver/Presenciar) = Exige Preposição A! ('Assistir AO jogo', 'Assistir À transmissão')."
    }
  },
  {
    "id": "port-reg-002",
    "subject": "Língua Portuguesa",
    "topic": "7. Regência Verbal - Verbo Preferir",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a opção em que a regência do verbo PREFERIR obedece rigorosamente à norma-padrão da Língua Portuguesa:",
    "options": [
      {
        "key": "A",
        "text": "Prefiro estudar informática do que fazer resumos em papel."
      },
      {
        "key": "B",
        "text": "Prefiro mais a teoria do que a prática no dia a dia."
      },
      {
        "key": "C",
        "text": "Prefiro estudar informática a fazer resumos em papel."
      },
      {
        "key": "D",
        "text": "Prefiro mil vezes resolver questões do que ler apostilas."
      },
      {
        "key": "E",
        "text": "Prefiro antes o curso presencial do que o curso EAD."
      }
    ],
    "correctOption": "C",
    "explanation": {
      "summary": "O verbo PREFERIR é Transitivo Direto e Indireto e exige a preposição A ('Preferir X A Y'). A norma-padrão proíbe o uso de 'do que', 'mais' ou 'antes'.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Uso de 'do que' é proibido pela norma-padrão com o verbo preferir."
        },
        {
          "key": "B",
          "isCorrect": false,
          "reason": "Incorreto. Uso de 'mais' e 'do que' é incorreto."
        },
        {
          "key": "C",
          "isCorrect": true,
          "reason": "CORRETA. 'Prefiro X A Y' (regência correta com preposição A, sem 'do que')."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Uso de 'mil vezes' e 'do que' é gramaticalmente incorreto."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Uso de 'antes' e 'do que' é incorreto."
        }
      ],
      "bizu": "💡 BIZU IBFC: PREFERIR = 'Prefiro X A Y'! Proibido usar 'do que', 'mais' ou 'antes'."
    }
  },
  {
    "id": "port-pon-001",
    "subject": "Língua Portuguesa",
    "topic": "3. Pontuação - Proibição de Vírgula entre Sujeito e Verbo",
    "source": "IBFC / IBGE",
    "difficulty": "Fácil",
    "statement": "Assinale a alternativa em que o uso da vírgula está INCORRETO segundo a norma-padrão:",
    "options": [
      {
        "key": "A",
        "text": "Salvador, capital do Estado da Bahia, sediou o evento."
      },
      {
        "key": "B",
        "text": "O agente censitário de informática, coletou todos os dados do setor."
      },
      {
        "key": "C",
        "text": "Pela manhã, os pesquisadores saíram a campo."
      },
      {
        "key": "D",
        "text": "Comprei pranchetas, canetas, papéis e formulários."
      },
      {
        "key": "E",
        "text": "Senhor supervisor, o relatório final foi enviado."
      }
    ],
    "correctOption": "B",
    "explanation": {
      "summary": "É proibido separar o Sujeito ('O agente censitário de informática') do seu Verbo ('coletou') por vírgula simples.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Aposto explicativo isolado entre vírgulas correto."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. INCORRETO: Vírgula separando o sujeito do verbo principal."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Adjunto adverbial de tempo deslocado entre vírgulas correto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Enumeração simples de termos da mesma função correta."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. Vocativo isolado por vírgula no início da frase correto."
        }
      ],
      "bizu": "💡 BIZU IBFC PORTUGUÊS: NUNCA separe o Sujeito do Verbo nem o Verbo do seu Complemento por vírgula!"
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
      "summary": "A negação da condicional P -> Q é obtida pela Regra do MANÉ: Mantém a primeira (P) E nega a segunda (~Q), resultando em P e ~Q.",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas negou ambas sem trocar a condicional."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Mantém a 1ª ('o agente estuda') E nega a 2ª ('não obtém a aprovação')."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Essa é a equivalência lógica (Regra do Neumar: ~P ou Q), não a negação."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Apenas inverteu os termos."
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
      "summary": "A equivalência por Contrapositiva da condicional P -> Q é ~Q -> ~P (Inverte a ordem das frases e nega ambas: 'Volta Negando').",
      "optionsAnalysis": [
        {
          "key": "A",
          "isCorrect": false,
          "reason": "Incorreto. Apenas inverteu a ordem sem negar os termos."
        },
        {
          "key": "B",
          "isCorrect": true,
          "reason": "CORRETA. Contrapositiva: Inverteu a ordem e negou ambos os termos ('Se o trânsito não fica lento, então não chove em Salvador')."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto. Apenas negou os termos sem inverter a ordem."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Essa é a negação lógica da frase."
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
        "text": "Pedro não é agente de informática OU a prova não é fácil."
      },
      {
        "key": "C",
        "text": "Se Pedro é agente de informática, então a prova é fácil."
      },
      {
        "key": "D",
        "text": "Pedro é agente de informática OU a prova é fácil."
      },
      {
        "key": "E",
        "text": "Pedro não é agente de informática e a prova é fácil."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Negou a 1ª ('Pedro não é agente'), trocou 'E' por 'OU' e negou a 2ª ('a prova não é fácil')."
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
      "bizu": "💡 BIZU IBFC RLM (Leis de De Morgan): Negação do 'E' = Nega tudo e troca por 'OU'! Negação do 'OU' = Nega tudo e troca por 'E'!"
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
        "text": "Ambas as proposições P e Q tiverem o MESMO valor lógico (ambas verdadeiras ou ambas falsas)."
      },
      {
        "key": "C",
        "text": "Apenas a segunda proposição Q for verdadeira."
      },
      {
        "key": "D",
        "text": "Uma proposição for verdadeira e a outra for falsa."
      },
      {
        "key": "E",
        "text": "Ambas as proposições forem falsas obrigatoriamente."
      }
    ],
    "correctOption": "B",
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
          "isCorrect": true,
          "reason": "CORRETA. Bicondicional = Verdadeira quando os valores lógicos de P e Q forem IGUAIS."
        },
        {
          "key": "C",
          "isCorrect": false,
          "reason": "Incorreto."
        },
        {
          "key": "D",
          "isCorrect": false,
          "reason": "Incorreto. Valores opostos resultam em FALSO."
        },
        {
          "key": "E",
          "isCorrect": false,
          "reason": "Incorreto. V e V também resulta em VERDADEIRO."
        }
      ],
      "bizu": "💡 BIZU IBFC RLM: BICONDICIONAL (P <-> Q) = Valores IGUAIS dá VERDADEIRO (V-V=V, F-F=V) | Valores DIFERENTES dá FALSO!"
    }
  }
];
