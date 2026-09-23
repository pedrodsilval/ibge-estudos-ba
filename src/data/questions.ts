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
  },
  {
    id: 'inf-hw-04',
    subject: 'Informática',
    topic: '1 e 2. Armazenamento SSD vs HD Rígido',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Ao equipar as estações de trabalho do IBGE com SSDs (Solid State Drives) em substituição aos HDs mecânicos tradicionais, qual a principal vantagem física e de desempenho obtida?',
    options: [
      { key: 'A', text: 'Os SSDs utilizam discos magnéticos giratórios mais rápidos.' },
      { key: 'B', text: 'Os SSDs utilizam memória flash sem partes mecânicas móveis, oferecendo maior velocidade de leitura/escrita e maior resistência a impactos.' },
      { key: 'C', text: 'Os SSDs necessitam de constante desfragmentação semanal no Windows 11.' },
      { key: 'D', text: 'Os SSDs apagam todos os dados ao desligar o computador por serem voláteis.' },
      { key: 'E', text: 'Os SSDs só funcionam conectados diretamente a portas de som.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Os SSDs usam chips de memória Flash (NAND). Como não têm agulha ou discos giratórios como o HD, são muito mais rápidos e não sofrem danos mecânicos em quedas leves.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'HDs usam discos magnéticos, SSDs usam memória flash.' },
        { key: 'B', isCorrect: true, reason: 'Memória flash NAND = Sem partes móveis, mais rápido e resistente.' },
        { key: 'C', isCorrect: false, reason: 'SSDs NÃO devem ser desfragmentados (desgasta as células flash).' },
        { key: 'D', isCorrect: false, reason: 'SSDs são NÃO voláteis (armazenamento permanente).' },
        { key: 'E', isCorrect: false, reason: 'Conectam-se via portas SATA ou M.2 / NVMe.' }
      ],
      bizu: '💡 BIZU IBFC: SSD = Memória Flash | Não volátil | Sem partes móveis | NUNCA desfragmentar SSD!'
    }
  },
  {
    id: 'inf-hw-05',
    subject: 'Informática',
    topic: '2. Barramentos e Conectores Periféricos (USB-C)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Dentre as conexões físicas modernas presentes em notebooks e tablets institucionais do IBGE, o conector USB Tipo-C (USB-C) destaca-se por:',
    options: [
      { key: 'A', text: 'Permitir encaixe apenas em um sentido rígido, exigindo cuidado ao inserir.' },
      { key: 'B', text: 'Ser um conector reversível que suporta alta velocidade de transferência de dados, vídeo e alimentação de energia num único cabo.' },
      { key: 'C', text: 'Servir exclusivamente para transmissão de sinal analógico de rádio AM/FM.' },
      { key: 'D', text: 'Substituir a memória RAM interna dos celulares.' },
      { key: 'E', text: 'Ser incompatível com smartphones modernos.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O padrão USB-C é reversível (pode ser inserido de qualquer lado) e versátil (transmite dados, sinal de vídeo DisplayPort e recarrega bateria Power Delivery).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'O USB-C é REVERSÍVEL (não tem lado errado).' },
        { key: 'B', isCorrect: true, reason: 'USB-C = Reversível, transmite dados, vídeo e energia.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto.' },
        { key: 'D', isCorrect: false, reason: 'Conector de cabo não é memória RAM.' },
        { key: 'E', isCorrect: false, reason: 'É o padrão universal em dispositivos Android modernos.' }
      ],
      bizu: '💡 BIZU IBFC: USB-C = Reversível + Transmissão universal (Dados + Vídeo + Energia).'
    }
  },
  {
    id: 'inf-so-05',
    subject: 'Informática',
    topic: '4. Recursos do Windows 10/11 (Área de Transferência com Histórico)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'No Windows 10/11, qual atalho de teclado permite abrir o Histórico da Área de Transferência, exibindo múltiplos textos e imagens copiados anteriormente?',
    options: [
      { key: 'A', text: 'Ctrl + V' },
      { key: 'B', text: 'Win + V' },
      { key: 'C', text: 'Alt + V' },
      { key: 'D', text: 'Ctrl + Shift + V' },
      { key: 'E', text: 'Win + H' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O atalho `Win + V` abre a janela flutuante do Histórico da Área de Transferência no Windows 10/11, permitindo colar itens copiados no passado.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`Ctrl + V` cola apenas o ÚLTIMO item copiado.' },
        { key: 'B', isCorrect: true, reason: '`Win + V` abre o HISTÓRICO da área de transferência com vários itens salvos.' },
        { key: 'C', isCorrect: false, reason: 'Atalho não padrão do sistema.' },
        { key: 'D', isCorrect: false, reason: 'Usado em alguns apps para colar sem formatação.' },
        { key: 'E', isCorrect: false, reason: '`Win + H` ativa a Digitação por Voz.' }
      ],
      bizu: '💡 BIZU IBFC: `Ctrl + V` = Cola 1 item | `Win + V` = Histórico de vários itens copiados!'
    }
  },
  {
    id: 'inf-so-06',
    subject: 'Informática',
    topic: '4 e 10. Gerenciador de Tarefas no Windows 10/11',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Quando um aplicativo no Windows 10/11 trava e para de responder, qual o atalho direto de teclado para abrir diretamente o GERENCIADOR DE TAREFAS e finalizar a aplicação travada?',
    options: [
      { key: 'A', text: 'Ctrl + Shift + Esc' },
      { key: 'B', text: 'Ctrl + Alt + Del' },
      { key: 'C', text: 'Win + Tab' },
      { key: 'D', text: 'Alt + Tab' },
      { key: 'E', text: 'Win + R' }
    ],
    correctOption: 'A',
    explanation: {
      summary: '`Ctrl + Shift + Esc` abre DIRETO o Gerenciador de Tarefas sem passar por telas intermediárias. `Ctrl + Alt + Del` abre a tela de opções de segurança do sistema.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: '`Ctrl + Shift + Esc` = Abre DIRETO o Gerenciador de Tarefas.' },
        { key: 'B', isCorrect: false, reason: '`Ctrl + Alt + Del` abre a tela de segurança (Bloquear, Alternar usuário, Gerenciador).' },
        { key: 'C', isCorrect: false, reason: '`Win + Tab` abre a Visão de Tarefas (Desktops virtuais).' },
        { key: 'D', isCorrect: false, reason: '`Alt + Tab` alterna rapidamente entre janelas.' },
        { key: 'E', isCorrect: false, reason: '`Win + R` abre a caixa Executar.' }
      ],
      bizu: '💡 BIZU IBFC: Gerenciador de Tarefas DIRETO = `Ctrl + Shift + Esc` | Tela de Segurança = `Ctrl + Alt + Del`.'
    }
  },
  {
    id: 'inf-so-07',
    subject: 'Informática',
    topic: '4. Recursos do Android 13 ou superior',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'No sistema operacional móvel Android 13 ou superior, qual importante mudança de segurança em relação às NOTIFICAÇÕES de aplicativos foi introduzida?',
    options: [
      { key: 'A', text: 'As notificações são proibidas em qualquer aplicativo de mensagens.' },
      { key: 'B', text: 'Os aplicativos recém-instalados devem solicitar EXPLICITAMENTE permissão ao usuário antes de enviar notificações.' },
      { key: 'C', text: 'Todas as notificações são enviadas obrigatoriamente por e-mail.' },
      { key: 'D', text: 'O Bluetooth precisa ficar ligado para receber notificações.' },
      { key: 'E', text: 'Notificações só funcionam se o aparelho estiver carregando na tomada.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A partir do Android 13 (API 33), o envio de Notificações tornou-se uma permissão runtime explícita (`POST_NOTIFICATIONS`), exigindo aceite do usuário.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto.' },
        { key: 'B', isCorrect: true, reason: 'No Android 13+, apps precisam de autorização prévia para enviar notificações.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto.' },
        { key: 'D', isCorrect: false, reason: 'Notificação não depende de Bluetooth.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC (ANDROID 13+): Notificação agora é PERMISSÃO EXPLICITA! O usuário escolhe se autoriza ou bloqueia.'
    }
  },
  {
    id: 'inf-seg-04',
    subject: 'Informática',
    topic: '6. Pragas Virtuais e Malwares (Ransomware)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale o tipo de código malicioso (malware) que criptografa os arquivos do computador da vítima e exige o pagamento de um resgate (geralmente em criptomoedas) para fornecer a chave de descriptografia:',
    options: [
      { key: 'A', text: 'Adware' },
      { key: 'B', text: 'Ransomware' },
      { key: 'C', text: 'Spyware' },
      { key: 'D', text: 'Keylogger' },
      { key: 'E', text: 'Rootkit' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Ransomware vem da palavra "Ransom" (resgate). É um malware que sequestra arquivos usando criptografia forte e cobra resgate.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Adware exibe anúncios indesejados.' },
        { key: 'B', isCorrect: true, reason: 'Ransomware = Criptografa arquivos e exige resgate.' },
        { key: 'C', isCorrect: false, reason: 'Spyware espiona atividades do usuário.' },
        { key: 'D', isCorrect: false, reason: 'Keylogger captura teclas digitadas.' },
        { key: 'E', isCorrect: false, reason: 'Rootkit esconde a presença de ameaças no sistema.' }
      ],
      bizu: '💡 BIZU IBFC: Ransomware = Sequestro por Criptografia / Cobrança de Resgate | Keylogger = Captura Teclas | Phishing = Pescaria de Senhas.'
    }
  },
  {
    id: 'inf-seg-05',
    subject: 'Informática',
    topic: '6. Golpes na Internet e Engenharia Social (Phishing)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Um agente recebe um e-mail falso com o logotipo de um grande banco, informando que sua conta será bloqueada se ele não clicar num link para atualizar dados cadastrais. Essa técnica fraudulenta de engenharia social é conhecida como:',
    options: [
      { key: 'A', text: 'Phishing' },
      { key: 'B', text: 'Firewall' },
      { key: 'C', text: 'Defragmentação' },
      { key: 'D', text: 'Screenlogger' },
      { key: 'E', text: 'Spoofing de impressora' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'Phishing ("pescaria") induz a vítima a revelar dados confidenciais (senhas, dados bancários) através de mensagens/sites falsos persuasivos.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Phishing = E-mails/sites falsos que enganam o usuário para roubar credenciais.' },
        { key: 'B', isCorrect: false, reason: 'Firewall é ferramenta de proteção de rede.' },
        { key: 'C', isCorrect: false, reason: 'Desfragmentação é manutenção de disco.' },
        { key: 'D', isCorrect: false, reason: 'Screenlogger tira prints da tela.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC: Phishing = Pescaria de dados pessoais via e-mail ou link falso que imita site verdadeiro!'
    }
  },
  {
    id: 'inf-seg-06',
    subject: 'Informática',
    topic: '6. Ferramentas de Defesa (Firewall de Rede/Host)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa correta a respeito do funcionamento de um FIREWALL em um sistema operacional como o Windows 10/11:',
    options: [
      { key: 'A', text: 'O Firewall elimina vírus já instalados no disco rígido.' },
      { key: 'B', text: 'O Firewall atua como um filtro de tráfego, bloqueando ou permitindo conexões de rede de acordo com regras de segurança estabelecidas.' },
      { key: 'C', text: 'O Firewall substitui a necessidade de ter cópias de backup.' },
      { key: 'D', text: 'O Firewall serve para acelerar o tempo de inicialização do computador.' },
      { key: 'E', text: 'O Firewall é um dispositivo de entrada de dados como o teclado.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O Firewall é uma barreira de proteção de rede. Ele examina portas e pacotes de dados de entrada e saída, bloqueando acessos não autorizados.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Quem remove vírus é o Antivírus, não o Firewall.' },
        { key: 'B', isCorrect: true, reason: 'Firewall = Filtro de tráfego de rede (Portas e Protocolos de entrada/saída).' },
        { key: 'C', isCorrect: false, reason: 'Backup é cópia de segurança.' },
        { key: 'D', isCorrect: false, reason: 'Não acelera boot.' },
        { key: 'E', isCorrect: false, reason: 'Firewall é solução de segurança de rede.' }
      ],
      bizu: '💡 BIZU IBFC: Firewall = Muro de proteção de REDE (Filtra Portas/Pacotes) | Antivírus = Remove PRAGAS do sistema.'
    }
  },
  {
    id: 'inf-app-04',
    subject: 'Informática',
    topic: '7. Microsoft Word - Formatando Parágrafos (Atalho Justificar)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'No Microsoft Word (em português), qual a tecla de atalho utilizada para aplicar o alinhamento JUSTIFICADO (alinhado a ambas as margens esquerda e direita) a um parágrafo selecionado?',
    options: [
      { key: 'A', text: 'Ctrl + J' },
      { key: 'B', text: 'Ctrl + E' },
      { key: 'C', text: 'Ctrl + Q' },
      { key: 'D', text: 'Ctrl + G' },
      { key: 'E', text: 'Ctrl + T' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'No Word PT-BR: `Ctrl + J` = Justificado, `Ctrl + E` = Centralizado, `Ctrl + Q` = Alinhado à Esquerda, `Ctrl + G` = Alinhado à Direita.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: '`Ctrl + J` = Alinhamento JUSTIFICADO.' },
        { key: 'B', isCorrect: false, reason: '`Ctrl + E` = cEntralizado.' },
        { key: 'C', isCorrect: false, reason: '`Ctrl + Q` = Alinhado à Esquerda.' },
        { key: 'D', isCorrect: false, reason: '`Ctrl + G` = Alinhado à Direita.' },
        { key: 'E', isCorrect: false, reason: '`Ctrl + T` = Selecionar Tudo no Word PT-BR.' }
      ],
      bizu: '💡 BIZU IBFC (WORD ALINHAMENTO): `Ctrl + J` = Justificado | `Ctrl + E` = cEntralizado | `Ctrl + Q` = EsQueldo (Esquerda) | `Ctrl + G` = Direita | `Ctrl + T` = Tudo!'
    }
  },
  {
    id: 'inf-app-05',
    subject: 'Informática',
    topic: '7. Microsoft Excel - Função CONT.SE',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Em uma planilha do Microsoft Excel, a função `=CONT.SE(A1:A10; ">50")` tem como objetivo:',
    options: [
      { key: 'A', text: 'Somar todos os valores maiores que 50 no intervalo A1:A10.' },
      { key: 'B', text: 'Contar a quantidade de células no intervalo A1:A10 que contêm valores maiores que 50.' },
      { key: 'C', text: 'Calcular a média dos valores menores que 50.' },
      { key: 'D', text: 'Substituir os valores maiores que 50 pelo número 10.' },
      { key: 'E', text: 'Multiplicar todas as células por 50.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A função `CONT.SE(intervalo; critério)` CONTA o número de células que atendem à condição especificada.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Quem soma com condição é a função `SOMASE()`.' },
        { key: 'B', isCorrect: true, reason: '`CONT.SE` = Conta quantas células satisfazem o critério (`>50`).' },
        { key: 'C', isCorrect: false, reason: 'Quem calcula média com condição é `MÉDIASE()`.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC (EXCEL): `CONT.SE` = CONTA células com filtro | `SOMASE` = SOMA valores com filtro | `CONT.NÚM` = CONTA células que contêm números.'
    }
  },
  {
    id: 'inf-net-03',
    subject: 'Informática',
    topic: '8. Protocolos da Internet (HTTP vs HTTPS)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Ao navegar na web, qual a principal diferença de segurança entre o protocolo HTTP e o protocolo HTTPS?',
    options: [
      { key: 'A', text: 'O HTTP é mais rápido por utilizar criptografia de ponta a ponta.' },
      { key: 'B', text: 'O HTTPS utiliza camada de criptografia (SSL/TLS), garantindo confidencialidade e segurança na transmissão dos dados.' },
      { key: 'C', text: 'O HTTPS é exclusivo para envio de arquivos de vídeo via torrent.' },
      { key: 'D', text: 'O HTTP não necessita de conexão com a rede de internet.' },
      { key: 'E', text: 'Ambos os protocolos oferecem exatamente o mesmo nível de proteção sem nenhuma criptografia.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O HTTPS é a versão segura do HTTP. Ele utiliza protocolos TLS/SSL para criptografar o tráfego entre o navegador e o servidor web (porta 443).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'HTTP não usa criptografia.' },
        { key: 'B', isCorrect: true, reason: 'HTTPS = HTTP + Criptografia SSL/TLS (Seguro, ícone do cadeado).' },
        { key: 'C', isCorrect: false, reason: 'HTTPS é para navegação web segura.' },
        { key: 'D', isCorrect: false, reason: 'Ambos precisam de internet.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC: HTTPS = HTTP + Criptografia SSL/TLS | Porta 80 (HTTP) vs Porta 443 (HTTPS).'
    }
  },
  {
    id: 'inf-net-04',
    subject: 'Informática',
    topic: '8. Protocolos de Correio Eletrônico (SMTP, POP3, IMAP)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa que associa corretamente o protocolo de e-mail à sua função principal:',
    options: [
      { key: 'A', text: 'SMTP é utilizado para RECEBER mensagens e salvá-las no computador.' },
      { key: 'B', text: 'POP3 é utilizado para ENVIAR mensagens para outros servidores.' },
      { key: 'C', text: 'SMTP é o protocolo responsável pelo ENVIO (saída) de e-mails, enquanto POP3 e IMAP são para RECEBIMENTO (entrada).' },
      { key: 'D', text: 'IMAP impede a leitura de e-mails no navegador da web.' },
      { key: 'E', text: 'DNS é o protocolo padrão para anexo de imagens em e-mails.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'SMTP (Sua Mensagem Tá Partindo) = Envio. POP3 = Baixa o e-mail pro PC e apaga do servidor. IMAP = Sincroniza e mantém no servidor.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'SMTP é para ENVIO.' },
        { key: 'B', isCorrect: false, reason: 'POP3 é para RECEBER.' },
        { key: 'C', isCorrect: true, reason: 'SMTP = Envio (Saída) | POP3/IMAP = Recebimento (Entrada).' },
        { key: 'D', isCorrect: false, reason: 'IMAP permite sincronização em múltiplos aparelhos.' },
        { key: 'E', isCorrect: false, reason: 'DNS converte nomes de domínio em IPs.' }
      ],
      bizu: '💡 BIZU IBFC: SMTP = Sua Mensagem Tá Partindo (ENVIO) | POP3 = Baixa pro PC (RECEBER) | IMAP = Sincroniza na Nuvem (RECEBER).'
    }
  },

  // --- PORTUGUÊS COMPLEMENTAR IBFC ---
  {
    id: 'port-crase-02',
    subject: 'Língua Portuguesa',
    topic: '7. Casos Facultativos de Crase',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa em que o emprego do sinal indicativo de crase é FACULTATIVO segundo a norma-padrão:',
    options: [
      { key: 'A', text: 'Entreguei o documento à diretora do setor.' },
      { key: 'B', text: 'Enviei o relatório à minha supervisora.' },
      { key: 'C', text: 'O candidato chegou à noite para a prova.' },
      { key: 'D', text: 'Refiro-me à professora de informática.' },
      { key: 'E', text: 'Fomos à praia no domingo.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Crase é FACULTATIVA em 3 casos principais: 1) Antes de pronome possessivo feminino singular (minha, tua, sua); 2) Antes de nomes próprios femininos; 3) Após a preposição "até".',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Crase obrigatória (à diretora).' },
        { key: 'B', isCorrect: true, reason: 'FACULTATIVA antes de pronome possessivo feminino ("à minha supervisora" ou "a minha supervisora").' },
        { key: 'C', isCorrect: false, reason: 'Crase obrigatória em locução adverbial feminina ("à noite").' },
        { key: 'D', isCorrect: false, reason: 'Crase obrigatória.' },
        { key: 'E', isCorrect: false, reason: 'Crase obrigatória.' }
      ],
      bizu: '💡 BIZU IBFC PORTUGUÊS (Crase Facultativa): 1. Pronome Possessivo Feminino (minha/sua) | 2. Nome Próprio Feminino (Maria) | 3. Após "Até".'
    }
  },
  {
    id: 'port-regencia-01',
    subject: 'Língua Portuguesa',
    topic: '7. Regência Verbal do Verbo ASSISTIR',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Quanto à regência verbal da norma-padrão, assinale a opção em que o verbo ASSISTIR foi empregado no sentido de "ver / presenciar" com a regência correta:',
    options: [
      { key: 'A', text: 'Assistimos o treinamento de informática na semana passada.' },
      { key: 'B', text: 'Assistimos ao treinamento de informática na semana passada.' },
      { key: 'C', text: 'O médico assistiu ao paciente ferido com dedicação.' },
      { key: 'D', text: 'Os alunos assistiram o filme sem fazer barulho.' },
      { key: 'E', text: 'Nós assistimos ele durante a palestra do IBGE.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O verbo ASSISTIR no sentido de VER/PRESENCIAR é Transitivo Indireto e exige a preposição A ("Assistir AO jogo", "Assistir À aula").',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Falta a preposição A.' },
        { key: 'B', isCorrect: true, reason: '`Assistir a` + `o treinamento` = `Assistimos ao treinamento` (Correto).' },
        { key: 'C', isCorrect: false, reason: 'Assistir no sentido de prestar socorro é VTD (assistiu o paciente).' },
        { key: 'D', isCorrect: false, reason: 'Deveria ser "assistiram ao filme".' },
        { key: 'E', isCorrect: false, reason: 'Deveria ser "assistimos a ele".' }
      ],
      bizu: '💡 BIZU IBFC: ASSISTIR (Ver/Presenciar) = Exige Preposição A! "Assistir AO jogo", "Assistir À palestra".'
    }
  },
  {
    id: 'port-regencia-02',
    subject: 'Língua Portuguesa',
    topic: '7. Regência do Verbo PREFERIR',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Assinale a alternativa que apresenta a regência do verbo PREFERIR em conformidade com a norma-padrão da língua portuguesa:',
    options: [
      { key: 'A', text: 'Prefiro estudar informática do que fazer resumos longos.' },
      { key: 'B', text: 'Prefiro mais a teoria do que a prática.' },
      { key: 'C', text: 'Prefiro estudar informática a fazer resumos longos.' },
      { key: 'D', text: 'Prefiro mil vezes resolver simulados do que ler apostilas.' },
      { key: 'E', text: 'Prefiro antes o curso online do que o presencial.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O verbo PREFERIR exige a preposição A ("Preferir X A Y"). É erro gramatical usar "do que", "mais que" ou "mil vezes".',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Erro: "do que" não é aceito.' },
        { key: 'B', isCorrect: false, reason: 'Erro: "mais" e "do que" são redundantes/proibidos.' },
        { key: 'C', isCorrect: true, reason: 'Correto: "Prefiro X A Y" (Sem "do que").' },
        { key: 'D', isCorrect: false, reason: 'Erro: "mil vezes" e "do que".' },
        { key: 'E', isCorrect: false, reason: 'Erro.' }
      ],
      bizu: '💡 BIZU IBFC: PREFERIR = "Prefiro X A Y"! Proibido usar "do que", "mais" ou "antes".'
    }
  },

  // --- RACIOCÍNIO LÓGICO COMPLEMENTAR IBFC ---
  {
    id: 'rlm-03',
    subject: 'Raciocínio Lógico',
    topic: '2. Negação de Proposições Compostas (Leis de De Morgan)',
    source: 'IBFC / IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a alternativa que apresenta a NEGAÇÃO LÓGICA correta da proposição: "Pedro é agente de informática E a prova é fácil".',
    options: [
      { key: 'A', text: 'Pedro não é agente de informática E a prova não é fácil.' },
      { key: 'B', text: 'Pedro não é agente de informática OU a prova não é fácil.' },
      { key: 'C', text: 'Se Pedro é agente de informática, então a prova é fácil.' },
      { key: 'D', text: 'Pedro é agente de informática OU a prova é fácil.' },
      { key: 'E', text: 'Pedro não é agente de informática e a prova é fácil.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Lei de De Morgan para negar o "E": Nega a 1ª, Troca o "E" por "OU", e Nega a 2ª: $\neg(P \land Q) \equiv \neg P \lor \neg Q$.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Esqueceu de trocar o "E" pelo "OU".' },
        { key: 'B', isCorrect: true, reason: 'Negou a 1ª, trocou "E" por "OU" e negou a 2ª.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC RLM (Lei de De Morgan): Negação do "E" = Nega tudo e troca por "OU"! Negação do "OU" = Nega tudo e troca por "E"!'
    }
  },
  {
    id: 'rlm-04',
    subject: 'Raciocínio Lógico',
    topic: '1. Tabela Verdade da Bicondicional (Se e somente se)',
    source: 'IBFC / IBGE',
    difficulty: 'Fácil',
    statement: 'Uma proposição bicondicional do tipo "P se e somente se Q" ($P \leftrightarrow Q$) possui valor lógico VERDADEIRO quando:',
    options: [
      { key: 'A', text: 'Apenas a primeira proposição P for verdadeira.' },
      { key: 'B', text: 'Ambas as proposições P e Q tiverem o MESMO valor lógico (ambas verdadeiras ou ambas falsas).' },
      { key: 'C', text: 'Apenas a segunda proposição Q for verdadeira.' },
      { key: 'D', text: 'Uma for verdadeira e a outra for falsa.' },
      { key: 'E', text: 'Ambas as proposições forem obrigatoriamente falsas.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A bicondicional ($\leftrightarrow$) é Verdadeira se P e Q tiverem valorações IGUAIS (V e V = V; F e F = V). Se forem diferentes, é Falsa.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto.' },
        { key: 'B', isCorrect: true, reason: 'Bicondicional é V quando P e Q possuem o MESMO valor lógico.' },
        { key: 'C', isCorrect: false, reason: 'Incorreto.' },
        { key: 'D', isCorrect: false, reason: 'Valores diferentes resultam em FALSO (Ou Exclusivo).' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU IBFC RLM: BICONDICIONAL ($P \leftrightarrow Q$) = IGUAIS dá VERDADEIRO (V-V=V, F-F=V) | DIFERENTES dá FALSO!'
    }
  }
];

