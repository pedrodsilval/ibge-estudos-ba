import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  // ==========================================
  // --- INFORMÁTICA (35 QUESTÕES NA PROVA IBFC) ---
  // ==========================================
  
  // --- HARDWARE & MICROCOMPUTADORES ---
  {
    id: 'inf-hw-01',
    subject: 'Informática',
    topic: '1. Conceitos Básicos e Hardware (CPU, Memórias, Periféricos)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Um agente do IBGE precisa identificar os componentes de hardware do computador da agência. Qual componente é considerado a "unidade central de processamento" (CPU), responsável por executar os cálculos e instruções dos programas?',
    options: [
      { key: 'A', text: 'Placa-Mãe' },
      { key: 'B', text: 'Processador (CPU)' },
      { key: 'C', text: 'Memória RAM' },
      { key: 'D', text: 'Disco Rígido (HD/SSD)' },
      { key: 'E', text: 'Fonte de Alimentação' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A CPU (Central Processing Unit / Processador) é o "cérebro" do computador, responsável por processar dados e executar instruções.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Placa-Mãe interconecta todos os componentes físicos, mas não executa o processamento central.' },
        { key: 'B', isCorrect: true, reason: 'Processador (CPU) = Unidade Central de Processamento de cálculos e instruções.' },
        { key: 'C', isCorrect: false, reason: 'Memória RAM é memória principal temporária e volátil de trabalho.' },
        { key: 'D', isCorrect: false, reason: 'HD/SSD é dispositivo de armazenamento secundário não volátil.' },
        { key: 'E', isCorrect: false, reason: 'Fonte converte a energia elétrica da tomada para o computador.' }
      ],
      bizu: '💡 BIZU IBFC: CPU = Cérebro/Processador | RAM = Memória Temporária (Volátil) | SSD/HD = Armazenamento Permanente (Não Volátil).'
    }
  },
  {
    id: 'inf-hw-02',
    subject: 'Informática',
    topic: '2. Dispositivos de Armazenamento e Periféricos',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'No manuseio de equipamentos de informática no IBGE, assinale a opção que indica um periférico classificado EXCLUSIVAMENTE como dispositivo de entrada de dados:',
    options: [
      { key: 'A', text: 'Monitor de vídeo tradicional (não touch)' },
      { key: 'B', text: 'Impressora jato de tinta' },
      { key: 'C', text: 'Teclado' },
      { key: 'D', text: 'Caixa de som' },
      { key: 'E', text: 'Impressora Multifuncional com scanner' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Dispositivos de Entrada (Input) enviam dados DO usuário PARA o computador. O teclado envia comandos e caracteres.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Monitor comum é um dispositivo de SAÍDA (exibe dados).' },
        { key: 'B', isCorrect: false, reason: 'Impressora comum é um dispositivo de SAÍDA (imprime dados).' },
        { key: 'C', isCorrect: true, reason: 'Teclado e Mouse são dispositivos clássicos de ENTRADA.' },
        { key: 'D', isCorrect: false, reason: 'Caixa de som é dispositivo de SAÍDA de áudio.' },
        { key: 'E', isCorrect: false, reason: 'Multifuncional com scanner é de ENTRADA e SAÍDA (Misto).' }
      ],
      bizu: '💡 BIZU IBFC: ENTRADA = Teclado, Mouse, Scanner, Microfone | SAÍDA = Monitor comum, Impressora, Caixa de Som | MISTO = Touchscreen, Multifuncional.'
    }
  },
  {
    id: 'inf-hw-03',
    subject: 'Informática',
    topic: '2. Memória RAM vs ROM',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Dentre as memórias de um microcomputador, a memória RAM se diferencia da memória ROM principalmente porque a RAM é:',
    options: [
      { key: 'A', text: 'Apenas de leitura e permanente.' },
      { key: 'B', text: 'Volátil, perdendo seu conteúdo quando o computador é desligado.' },
      { key: 'C', text: 'Grava dados com feixes de laser como um DVD.' },
      { key: 'D', text: 'Utilizada exclusivamente para armazenar o programa da BIOS/UEFI.' },
      { key: 'E', text: 'Incapaz de ser lida pelo processador principal.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A memória RAM (Random Access Memory) é volátil: precisa de energia constante para manter os dados de execução.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Apenas leitura e permanente descreve a memória ROM.' },
        { key: 'B', isCorrect: true, reason: 'RAM é volátil (apaga ao desligar).' },
        { key: 'C', isCorrect: false, reason: 'Laser é mídia óptica (CD/DVD/Blu-ray).' },
        { key: 'D', isCorrect: false, reason: 'BIOS fica gravada na memória ROM/Flash.' },
        { key: 'E', isCorrect: false, reason: 'A RAM é lida diretamente pela CPU.' }
      ],
      bizu: '💡 BIZU IBFC: RAM = Volátil (Apaga ao desligar) | ROM = Read Only Memory (Não Volátil, Permanente).'
    }
  },

  // --- WINDOWS 10/11 & ANDROID 13+ ---
  {
    id: 'inf-so-01',
    subject: 'Informática',
    topic: '4 e 10. Windows 10/11 - Barra de Tarefas e Atalhos',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'No Windows 10/11, a barra localizada (geralmente) na parte inferior da tela, que permite alternar entre janelas abertas, fixar aplicativos de uso frequente e acessar a área de notificação é chamada de:',
    options: [
      { key: 'A', text: 'Barra de ferramentas' },
      { key: 'B', text: 'Barra de tarefas' },
      { key: 'C', text: 'Barra de trabalho' },
      { key: 'D', text: 'Barra de navegação' },
      { key: 'E', text: 'Barra de status' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A Barra de Tarefas é o componente principal do Windows para gerenciamento visual de janelas abertas e aplicativos fixados.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Barra de ferramentas é termo interno de aplicativos.' },
        { key: 'B', isCorrect: true, reason: 'Barra de Tarefas = Gerencia janelas ativas, menu iniciar e ícones fixados.' },
        { key: 'C', isCorrect: false, reason: 'Área de Trabalho é o Desktop.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Barra de status fica no rodapé de janelas.' }
      ],
      bizu: '💡 BIZU IBFC: Barra de Tarefas = Ícones fixados, janelas ativas, relógio e área de notificação.'
    }
  },
  {
    id: 'inf-so-02',
    subject: 'Informática',
    topic: '4. Atalhos de Teclado do Windows 10/11',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'No Sistema Operacional Windows 10 ou superior, qual o atalho padrão de teclado para criar uma NOVA PASTA na janela do Explorador de Arquivos?',
    options: [
      { key: 'A', text: 'Ctrl + Shift + N' },
      { key: 'B', text: 'Ctrl + N' },
      { key: 'C', text: 'Alt + F4' },
      { key: 'D', text: 'Win + E' },
      { key: 'E', text: 'Ctrl + Alt + Del' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'No Explorador de Arquivos do Windows, `Ctrl + Shift + N` cria uma nova pasta instantaneamente no diretório atual.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: '`Ctrl + Shift + N` cria uma Nova Pasta no Windows.' },
        { key: 'B', isCorrect: false, reason: '`Ctrl + N` abre uma nova janela do Explorador.' },
        { key: 'C', isCorrect: false, reason: '`Alt + F4` fecha a janela ativa.' },
        { key: 'D', isCorrect: false, reason: '`Win + E` abre o Explorador de Arquivos.' },
        { key: 'E', isCorrect: false, reason: '`Ctrl + Alt + Del` abre a tela de segurança/bloqueio do Windows.' }
      ],
      bizu: '💡 BIZU IBFC: Nova Pasta no Windows = `Ctrl + Shift + N` | Renomear arquivo = Tecla `F2` | Excluir sem ir para a Lixeira = `Shift + Delete`.'
    }
  },
  {
    id: 'inf-so-03',
    subject: 'Informática',
    topic: '4. Sistemas Operacionais (Android 13 ou superior)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Em dispositivos móveis com sistema operacional Android 13 ou superior, utilizados pelos agentes em pesquisas de campo, o recurso de permissão exige que o usuário conceda acesso a funcionalidades sensíveis. Qual das opções abaixo representa uma permissão de privacidade gerenciável no Android 13?',
    options: [
      { key: 'A', text: 'Acesso à Localização (GPS), Câmera e Microfone' },
      { key: 'B', text: 'Acesso exclusivo ao botão de ligar/desligar o aparelho' },
      { key: 'C', text: 'Aumento automático da carga de bateria pelo aplicativo' },
      { key: 'D', text: 'Formatação física obrigatória do cartão SIM' },
      { key: 'E', text: 'Bloqueio do sinal da operadora de telefonia' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O Android 13 trouxe controles avançados de privacidade, permitindo gerenciar permissões individuais de Localização, Câmera, Microfone e Notificações.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Localização, Câmera e Microfone são permissões fundamentais de privacidade no Android.' },
        { key: 'B', isCorrect: false, reason: 'Botão de energia não depende de permissão.' },
        { key: 'C', isCorrect: false, reason: 'Bateria é hardware de energia.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC (Android 13+): Permissões granulares de mídia (Fotos/Vídeos/Áudio) e Notificações exigem autorização expressa.'
    }
  },
  {
    id: 'inf-so-04',
    subject: 'Informática',
    topic: '10. Manuseio de Pastas e Atalhos no Windows 10/11',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Ao selecionar um arquivo no Explorador de Arquivos do Windows 10/11 e pressionar a tecla de atalho F2, o sistema operacional irá:',
    options: [
      { key: 'A', text: 'Excluir o arquivo selecionado para a Lixeira.' },
      { key: 'B', text: 'Abrir o modo de edição para RENOMEAR o arquivo.' },
      { key: 'C', text: 'Copiar o arquivo para a Área de Transferência.' },
      { key: 'D', text: 'Imprimir o arquivo na impressora padrão.' },
      { key: 'E', text: 'Compactar o arquivo em formato .ZIP.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A tecla F2 ativa o modo de edição do nome de um arquivo ou pasta selecionada no Windows.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Excluir = tecla Delete.' },
        { key: 'B', isCorrect: true, reason: 'F2 = Renomear arquivo/pasta.' },
        { key: 'C', isCorrect: false, reason: 'Copiar = Ctrl + C.' },
        { key: 'D', isCorrect: false, reason: 'Imprimir = Ctrl + P.' },
        { key: 'E', isCorrect: false, reason: 'Compactar requer menu de contexto.' }
      ],
      bizu: '💡 BIZU IBFC: F2 = RENOMEAR | F3 = BUSCAR | F5 = ATUALIZAR | F11 = TELA CHEIA | Shift + Delete = EXCLUIR DEFINITIVO.'
    }
  },

  // --- SEGURANÇA DA INFORMAÇÃO, BACKUP E VÍRUS ---
  {
    id: 'inf-seg-01',
    subject: 'Informática',
    topic: '6. Segurança de Sistemas Computacionais (Tipos de Backup)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Para evitar a perda de informações do censo, os agentes realizam cópias de segurança (backup). Qual tipo de backup copia TODOS os arquivos selecionados, independentemente de terem sido alterados ou não?',
    options: [
      { key: 'A', text: 'Backup Completo (Full)' },
      { key: 'B', text: 'Backup Incremental' },
      { key: 'C', text: 'Backup Diferencial' },
      { key: 'D', text: 'Backup Espelho (Mirror)' },
      { key: 'E', text: 'Backup Nuvem Parcial' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O Backup Completo (Full) copia todos os dados selecionados. O Incremental copia apenas o que mudou desde o último backup. O Diferencial copia o que mudou desde o último Full.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Backup Completo (Full) = Copia 100% dos dados selecionados.' },
        { key: 'B', isCorrect: false, reason: 'Incremental copia apenas o alterado desde o último backup.' },
        { key: 'C', isCorrect: false, reason: 'Diferencial copia o alterado desde o último backup FULL.' },
        { key: 'D', isCorrect: false, reason: 'Espelho cria réplica.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC: FULL = Copia TUDO | INCREMENTAL = Copia alterado desde o ÚLTIMO backup | DIFERENCIAL = Copia alterado desde o último FULL.'
    }
  },
  {
    id: 'inf-seg-02',
    subject: 'Informática',
    topic: '6. Segurança de Sistemas Computacionais (Práticas de Senhas Fortes)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Qual das alternativas a seguir apresenta uma boa prática recomendada para a criação de senhas seguras no acesso aos sistemas do IBGE?',
    options: [
      { key: 'A', text: 'Utilizar datas de aniversário ou nome de familiares conhecidos.' },
      { key: 'B', text: 'Usar a sequência numéricas simples como "123456" ou "qwerty".' },
      { key: 'C', text: 'Combinar letras maiúsculas, minúsculas, números e caracteres especiais (@, #, $).' },
      { key: 'D', text: 'Anotar a senha em um adesivo colado no monitor de trabalho.' },
      { key: 'E', text: 'Utilizar a mesma senha para todas as redes sociais e sistemas governamentais.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Senhas fortes combinam maiúsculas, minúsculas, números e símbolos especiais.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Fácil de adivinhar.' },
        { key: 'B', isCorrect: false, reason: 'Sequências comuns são vulneráveis.' },
        { key: 'C', isCorrect: true, reason: 'Maiúsculas + Minúsculas + Números + Símbolos = Senha Forte.' },
        { key: 'D', isCorrect: false, reason: 'Viola confidencialidade.' },
        { key: 'E', isCorrect: false, reason: 'Reaproveitar expõe contas.' }
      ],
      bizu: '💡 BIZU IBFC: Senha Forte = Maiúsculas + Minúsculas + Números + Símbolos (!@#$). Nunca reutilizar!'
    }
  },
  {
    id: 'inf-seg-03',
    subject: 'Informática',
    topic: '6. Segurança de Sistemas (Vírus vs Antivírus)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Um vírus de computador é um tipo de código malicioso (malware) que necessita de um programa ou arquivo hospedeiro para se propagar. Qual o papel do software Antivírus nesse contexto?',
    options: [
      { key: 'A', text: 'Aumentar a velocidade de download da internet.' },
      { key: 'B', text: 'Detectar, prevenir e remover pragas virtuais e malwares do sistema.' },
      { key: 'C', text: 'Gerar senhas automáticas para redes Wi-Fi sem criptografia.' },
      { key: 'D', text: 'Substituir a memória RAM do computador por armazenamento em nuvem.' },
      { key: 'E', text: 'Imprimir relatórios de erro da placa-mãe.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Antivírus monitoram o sistema através de assinaturas e heurística para detectar e eliminar malwares.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Não acelera internet.' },
        { key: 'B', isCorrect: true, reason: 'Antivírus = Detecta, previne e remove malwares.' },
        { key: 'C', isCorrect: false, reason: 'Não gera senhas Wi-Fi.' },
        { key: 'D', isCorrect: false, reason: 'Não substitui memória.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC: Antivírus identifica ameaças por Assinatura (vacinas conhecidas) ou Heurística (comportamento suspeito).'
    }
  },

  // --- WORD E EXCEL ---
  {
    id: 'inf-app-01',
    subject: 'Informática',
    topic: '7. Aplicativos Computacionais (Microsoft Excel - Fórmulas de Média)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa correta sobre qual fórmula do Microsoft Excel, idioma Português, calcula a média de gastos mensais considerando os valores nas células B2:B7 e D2:D7:',
    options: [
      { key: 'A', text: '=(B2+B3+B4+B5+B6+B7+D2+D3+D4+D5+D6+D7)/6' },
      { key: 'B', text: '=MÉDIA(B2:B7;D2:D7)' },
      { key: 'C', text: '=SOMA(A2:A7;C2:C7)/12' },
      { key: 'D', text: '=CONT.NÚM(A2:A7;C2:C7)/12' },
      { key: 'E', text: '=MED(B2:B7;D2:D7)' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A função `=MÉDIA(intervalo1; intervalo2)` calcula a média aritmética. O ponto e vírgula (;) separa os dois intervalos distintos.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Dividiu por 6 em vez de 12 células.' },
        { key: 'B', isCorrect: true, reason: '`=MÉDIA(B2:B7;D2:D7)` calcula a média aritmética exata dos dois intervalos.' },
        { key: 'C', isCorrect: false, reason: 'Intervalos errados A e C.' },
        { key: 'D', isCorrect: false, reason: '`CONT.NÚM()` conta células numéricas, não soma.' },
        { key: 'E', isCorrect: false, reason: '`MED()` calcula a mediana, não a média.' }
      ],
      bizu: '💡 BIZU IBFC (EXCEL): `=MÉDIA()` = Média Aritmética | `=MED()` = Mediana (Valor Central) | Ponto e vírgula `;` separa argumentos/intervalos distintos.'
    }
  },
  {
    id: 'inf-app-02',
    subject: 'Informática',
    topic: '7. Aplicativos Computacionais (Microsoft Word - Atalhos PT-BR)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Ao redigir um relatório no Microsoft Word em português, qual atalho de teclado é utilizado para aplicar o estilo NEGRITO ao texto selecionado?',
    options: [
      { key: 'A', text: 'Ctrl + B' },
      { key: 'B', text: 'Ctrl + N' },
      { key: 'C', text: 'Ctrl + S' },
      { key: 'D', text: 'Ctrl + I' },
      { key: 'E', text: 'Ctrl + K' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'No Word em Português: `Ctrl + N` = Negrito, `Ctrl + I` = Itálico, `Ctrl + S` = Sublinhado, `Ctrl + B` = Salvar.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`Ctrl + B` SALVA o documento no Word PT-BR.' },
        { key: 'B', isCorrect: true, reason: '`Ctrl + N` = NEGRITO no Word PT-BR.' },
        { key: 'C', isCorrect: false, reason: '`Ctrl + S` = SUBLINHADO.' },
        { key: 'D', isCorrect: false, reason: '`Ctrl + I` = ITÁLICO.' },
        { key: 'E', isCorrect: false, reason: '`Ctrl + K` insere Hiperlink.' }
      ],
      bizu: '💡 BIZU IBFC (WORD PT-BR): `Ctrl + N` = Negrito | `Ctrl + I` = Itálico | `Ctrl + S` = Sublinhado | `Ctrl + B` = Salvar!'
    }
  },
  {
    id: 'inf-app-03',
    subject: 'Informática',
    topic: '7. Microsoft Excel (Referências Relativas e Absolutas)',
    source: 'IBFC / IBGE',
    difficulty: 'Difícil',
    statement: 'Na célula B2 de uma planilha do Excel, há a fórmula `=$A$1 + B1`. Se esta fórmula for COPIADA e COLADA na célula C3, a fórmula na célula C3 passará a ser:',
    options: [
      { key: 'A', text: '=$A$1 + C2' },
      { key: 'B', text: '=$B$2 + C2' },
      { key: 'C', text: '=$A$2 + B2' },
      { key: 'D', text: '=A1 + C3' },
      { key: 'E', text: '=$A$1 + B1' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O cifrão `$A$1` fixa a coluna A e a linha 1 (não muda). A referência relativa `B1` deslocada para C3 (1 coluna a direita, 1 linha abaixo) vira `C2`.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: '`$A$1` permanece travado. `B1` se desloca para `C2`.' },
        { key: 'B', isCorrect: false, reason: 'Incorreto.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC: Cifrão `$` TRAVA a linha/coluna! O que tem `$` não muda ao copiar.'
    }
  },

  // --- REDES, INTRANET, INTERNET E CORREIO ELETRÔNICO ---
  {
    id: 'inf-net-01',
    subject: 'Informática',
    topic: '8 e 9. Redes e Correio Eletrônico (Campos de E-mail)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Ao enviar um e-mail corporativo no IBGE, o remetente adiciona um destinatário no campo "Cco" (Com Cópia Oculta). O que acontece com o endereço listado no campo "Cco"?',
    options: [
      { key: 'A', text: 'O destinatário em "Cco" recebe a mensagem, mas seu endereço fica OCULTO para os demais destinatários.' },
      { key: 'B', text: 'O e-mail é bloqueado pelo servidor por motivo de segurança.' },
      { key: 'C', text: 'Todos os destinatários dos campos "Para" e "Cc" conseguem ver quem estava no "Cco".' },
      { key: 'D', text: 'O campo "Cco" envia a mensagem exclusivamente em formato impresso via fax.' },
      { key: 'E', text: 'A mensagem é apagada da caixa de saída após 24 horas.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O campo Cco (Com Cópia Oculta) entrega o e-mail ao destinatário sem revelar seu endereço para "Para" e "Cc".',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Cco = Com Cópia Oculta (Outros destinatários não enxergam).' },
        { key: 'B', isCorrect: false, reason: 'Recurso padrão.' },
        { key: 'C', isCorrect: false, reason: 'Campos Para e Cc NÃO enxergam o Cco.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC (E-MAIL): `Para` e `Cc` = Visíveis | `Cco` = Oculto! Ninguém no Para ou Cc sabe que o Cco recebeu.'
    }
  },
  {
    id: 'inf-net-02',
    subject: 'Informática',
    topic: '9. Organização de Intranet e Internet (Intranet x Internet)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Com relação à comunicação através de redes computacionais nas agências do IBGE, assinale a alternativa verdadeira:',
    options: [
      { key: 'A', text: 'A Intranet é uma rede privada de uso exclusivo de uma instituição, acessada internamente com tecnologias de internet.' },
      { key: 'B', text: 'A Internet não utiliza endereços IP para identificação de computadores.' },
      { key: 'C', text: 'A Intranet é pública e acessível livremente por qualquer usuário do mundo sem senha.' },
      { key: 'D', text: 'O e-mail corporativo não funciona em redes de Intranet.' },
      { key: 'E', text: 'Spam são mensagens enviadas de forma individual e exclusiva para contatos salvos.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'Intranet é uma rede privada corporativa de acesso restrito que utiliza os mesmos protocolos e tecnologias da Internet (HTTP, TCP/IP).',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Intranet = Rede privada corporativa interna.' },
        { key: 'B', isCorrect: false, reason: 'Internet usa endereços IP obrigatoriamente.' },
        { key: 'C', isCorrect: false, reason: 'Intranet tem acesso restrito.' },
        { key: 'D', isCorrect: false, reason: 'E-mail funciona normalmente na Intranet.' },
        { key: 'E', isCorrect: false, reason: 'Spam é mensagem indesejada em massa.' }
      ],
      bizu: '💡 BIZU IBFC: Internet = Pública / Global | Intranet = Privada / Corporativa / Restrita.'
    }
  },

  // ===============================================
  // --- LÍNGUA PORTUGUESA (15 QUESTÕES NA PROVA IBFC) ---
  // ===============================================
  {
    id: 'port-crase-01',
    subject: 'Língua Portuguesa',
    topic: '7. Regência Nominal/Verbal e Sinal Indicativo de Crase',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a opção em que o uso da crase está CORRETO segundo a norma-padrão:',
    options: [
      { key: 'A', text: 'O agente começou à preencher o formulário do censo.' },
      { key: 'B', text: 'A equipe foi à pé realizar a pesquisa de campo.' },
      { key: 'C', text: 'Entregamos o relatório de dados à supervisora do IBGE.' },
      { key: 'D', text: 'Referia-se à uma cidade do interior da Bahia.' },
      { key: 'E', text: 'As entrevistas ocorreram dia à dia durante a semana.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Entregamos [preposição A] + [artigo A supervisora] = à supervisora.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'NUNCA há crase antes de verbo.' },
        { key: 'B', isCorrect: false, reason: 'NUNCA há crase antes de palavra masculina.' },
        { key: 'C', isCorrect: true, reason: 'Entregar A + A supervisora = à supervisora.' },
        { key: 'D', isCorrect: false, reason: 'NUNCA há crase antes de "uma".' },
        { key: 'E', isCorrect: false, reason: 'NUNCA há crase entre palavras repetidas.' }
      ],
      bizu: '💡 BIZU IBFC PORTUGUÊS: Proibido crase antes de: 1. Verbo | 2. Palavra Masculina | 3. Artigo "uma" | 4. Palavras repetidas.'
    }
  },
  {
    id: 'port-concordancia-01',
    subject: 'Língua Portuguesa',
    topic: '6. Concordância Nominal e Verbal (Verbo Haver e Fazer)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a frase correta quanto à concordância verbal segundo a norma-padrão:',
    options: [
      { key: 'A', text: 'Houveram muitos atrasos na coleta de dados.' },
      { key: 'B', text: 'Fazem dois anos que os agentes atuam na região.' },
      { key: 'C', text: 'Havia dúvidas sobre o preenchimento do questionário.' },
      { key: 'D', text: 'Haviam vários relatórios sobre a mesa.' },
      { key: 'E', text: 'Aluga-se casas para a equipe do IBGE.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'HAVER (existir) e FAZER (tempo decorrido) são impessoais e ficam no singular.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Deveria ser "Houve muitos atrasos".' },
        { key: 'B', isCorrect: false, reason: 'Deveria ser "Faz dois anos".' },
        { key: 'C', isCorrect: true, reason: '"Havia dúvidas" (singular obrigatório).' },
        { key: 'D', isCorrect: false, reason: 'Deveria ser "Havia vários relatórios".' },
        { key: 'E', isCorrect: false, reason: '"Alugam-se casas" (sujeito no plural).' }
      ],
      bizu: '💡 BIZU IBFC PORTUGUÊS: HAVER (existir) e FAZER (tempo) = SEMPRE SINGULAR! "Havia problemas", "Faz 3 anos".'
    }
  },
  {
    id: 'port-pontuacao-01',
    subject: 'Língua Portuguesa',
    topic: '3. Pontuação e Emprego da Vírgula',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Assinale a opção em que o uso da vírgula está INCORRETO segundo a norma-padrão:',
    options: [
      { key: 'A', text: 'Salvador, capital da Bahia, recebeu a equipe do IBGE.' },
      { key: 'B', text: 'O agente de informática, coletou todos os dados rapidamente.' },
      { key: 'C', text: 'Pela manhã, os pesquisadores saíram a campo.' },
      { key: 'D', text: 'Comprei lápis, canetas, papéis e pranchetas.' },
      { key: 'E', text: 'Senhor supervisor, o relatório final está pronto.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'É PROIBIDO separar o Sujeito ("O agente de informática") do seu Verbo ("coletou") por vírgula simples.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Aposto explicativo entre vírgulas correto.' },
        { key: 'B', isCorrect: true, reason: 'INCORRETO: Vírgula separando sujeito do verbo.' },
        { key: 'C', isCorrect: false, reason: 'Adjunto adverbial deslocado correto.' },
        { key: 'D', isCorrect: false, reason: 'Enumeração correta.' },
        { key: 'E', isCorrect: false, reason: 'Vocativo isolado correto.' }
      ],
      bizu: '💡 BIZU IBFC PORTUGUÊS: NUNCA separe o Sujeito do Verbo por vírgula!'
    }
  },

  // =========================================================
  // --- RACIOCÍNIO LÓGICO QUANTITATIVO (10 QUESTÕES NA PROVA IBFC) ---
  // =========================================================
  {
    id: 'rlm-01',
    subject: 'Raciocínio Lógico',
    topic: '1 e 2. Estruturas Lógicas e Negação de Proposições',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Dada a proposição "Se o agente estuda, então ele obtém a aprovação", assinale a sua NEGAÇÃO LÓGICA equivalente:',
    options: [
      { key: 'A', text: 'Se o agente não estuda, então ele não obtém a aprovação.' },
      { key: 'B', text: 'O agente estuda e não obtém a aprovação.' },
      { key: 'C', text: 'O agente não estuda ou obtém a aprovação.' },
      { key: 'D', text: 'Se o agente obtém a aprovação, então ele estuda.' },
      { key: 'E', text: 'O agente não estuda e não obtém a aprovação.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Negação do "Se...Então" (Regra do MANÉ): Mantém a 1ª E Nega a 2ª.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto.' },
        { key: 'B', isCorrect: true, reason: 'Mantém "o agente estuda" E nega "não obtém a aprovação".' },
        { key: 'C', isCorrect: false, reason: 'Equivalência (Regra do Neumar), não negação.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC RLM: NEGAÇÃO DO SE...ENTÃO = Regra do MANÉ (MAntém a 1ª E NEga a 2ª).'
    }
  },
  {
    id: 'rlm-02',
    subject: 'Raciocínio Lógico',
    topic: '2. Equivalência Lógica da Condicional (Contrapositiva)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a proposição que é logicamente EQUIVALENTE à afirmação: "Se chove em Salvador, então o trânsito fica lento".',
    options: [
      { key: 'A', text: 'Se o trânsito fica lento, então chove em Salvador.' },
      { key: 'B', text: 'Se o trânsito NÃO fica lento, então NÃO chove em Salvador.' },
      { key: 'C', text: 'Se não chove em Salvador, então o trânsito não fica lento.' },
      { key: 'D', text: 'Chove em Salvador e o trânsito não fica lento.' },
      { key: 'E', text: 'Não chove em Salvador e o trânsito fica lento.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Equivalência por Contrapositiva: inverte a ordem e nega ambas as proposições (Volta Negando).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Apenas inverteu.' },
        { key: 'B', isCorrect: true, reason: 'Contrapositiva correta: "Se NÃO fica lento, então NÃO chove".' },
        { key: 'C', isCorrect: false, reason: 'Apenas negou.' },
        { key: 'D', isCorrect: false, reason: 'Negação, não equivalência.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC RLM: EQUIVALÊNCIA DO SE...ENTÃO = 1º Contrapositiva (Volta Negando) | 2º Regra do Neumar ($\neg P \lor Q$).'
    }
  }
];
