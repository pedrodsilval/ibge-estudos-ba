import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  // ==========================================
  // --- INFORMÁTICA (100% CONFORME EDITAL) ---
  // ==========================================
  
  // 1. Hardware, CPU, Memória e Periféricos
  {
    id: 'inf-hw-01',
    subject: 'Informática',
    topic: '1. Conceitos Básicos e Hardware (CPU, Memórias, Periféricos)',
    source: 'IBGE / Cesgranrio',
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
      bizu: '💡 BIZU DO EDITAL: CPU = Cérebro/Processador | RAM = Memória Temporária de Trabalho (Volátil) | SSD/HD = Armazenamento Permanente (Não Volátil).'
    }
  },
  {
    id: 'inf-hw-02',
    subject: 'Informática',
    topic: '2. Dispositivos de Armazenamento e Periféricos',
    source: 'IBGE / FGV',
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
      bizu: '💡 BIZU DO EDITAL: ENTRADA = Teclado, Mouse, Scanner, Microfone | SAÍDA = Monitor comum, Impressora, Caixa de Som | MISTO = Monitor Touchscreen, Multifuncional.'
    }
  },

  // 3. Sistemas Operacionais (Windows 10/11 e Android 13+)
  {
    id: 'inf-so-01',
    subject: 'Informática',
    topic: '4. Sistemas Operacionais (Windows 10/11 e Android 13+)',
    source: 'IBGE / FGV',
    difficulty: 'Fácil',
    statement: 'No Sistema Operacional Windows 10 ou superior, o usuário pode organizar seus documentos em pastas. Qual o atalho padrão de teclado para criar uma NOVA PASTA na janela do Explorador de Arquivos?',
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
      bizu: '💡 BIZU DO EDITAL: Nova Pasta no Windows = `Ctrl + Shift + N` | Renomear arquivo = Tecla `F2` | Excluir sem ir para a Lixeira = `Shift + Delete`.'
    }
  },
  {
    id: 'inf-so-02',
    subject: 'Informática',
    topic: '4. Sistemas Operacionais (Android 13 ou superior)',
    source: 'IBGE / FGV',
    difficulty: 'Médio',
    statement: 'Em dispositivos móveis com sistema operacional Android 13 ou superior, utilizados pelos agentes em pesquisas de campo, o recurso de permissão de aplicativos exige que o usuário conceda acesso a funcionalidades sensíveis. Qual das opções abaixo representa uma permissão de privacidade gerenciável no Android 13?',
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
        { key: 'B', isCorrect: false, reason: 'O botão físico de energia não depende de permissão de software.' },
        { key: 'C', isCorrect: false, reason: 'Bateria é componente físico de energia.' },
        { key: 'D', isCorrect: false, reason: 'Cartão SIM não é formatado por permissão de app comum.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU DO EDITAL (Android 13+): Permissões granulares de mídia (Fotos/Vídeos/Áudio) e Notificações exigem autorização expressa do usuário.'
    }
  },

  // 6. Segurança da Informação, Vírus, Antivírus e Backup
  {
    id: 'inf-seg-01',
    subject: 'Informática',
    topic: '6. Segurança de Sistemas Computacionais (Vírus, Antivírus, Backup e Senhas)',
    source: 'IBGE / Cesgranrio',
    difficulty: 'Médio',
    statement: 'Para garantir a segurança dos dados computacionais e evitar a perda de informações do censo, os agentes realizam cópias de segurança (backup). Qual tipo de backup copia TODOS os arquivos selecionados, independentemente de terem sido alterados ou não, servindo de base para os demais backups?',
    options: [
      { key: 'A', text: 'Backup Completo (Full)' },
      { key: 'B', text: 'Backup Incremental' },
      { key: 'C', text: 'Backup Diferencial' },
      { key: 'D', text: 'Backup Espelho (Mirror)' },
      { key: 'E', text: 'Backup Nuvem Parcial' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O Backup Completo (Full) copia todos os dados selecionados. O Incremental copia apenas o que mudou desde o último backup (qualquer tipo). O Diferencial copia o que mudou desde o último Full.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Backup Completo (Full) = Copia 100% dos dados selecionados.' },
        { key: 'B', isCorrect: false, reason: 'Incremental copia apenas o alterado desde o último backup (mais rápido para salvar, mais lento para restaurar).' },
        { key: 'C', isCorrect: false, reason: 'Diferencial copia o alterado desde o último backup FULL.' },
        { key: 'D', isCorrect: false, reason: 'Espelho cria réplica exata excluindo o que foi apagado na origem.' },
        { key: 'E', isCorrect: false, reason: 'Termo genérico.' }
      ],
      bizu: '💡 BIZU DO EDITAL: FULL = Copia TUDO | INCREMENTAL = Copia o que mudou desde o ÚLTIMO backup | DIFERENCIAL = Copia o que mudou desde o último FULL.'
    }
  },
  {
    id: 'inf-seg-02',
    subject: 'Informática',
    topic: '6. Segurança de Sistemas Computacionais (Práticas de Senhas Fortes)',
    source: 'IBGE / FGV',
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
      summary: 'Senhas fortes devem ter tamanho adequado (mínimo 8-12 caracteres) e misturar letras maiúsculas, minúsculas, números e símbolos especiais.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Informações pessoais são fáceis de adivinhar por engenharia social.' },
        { key: 'B', isCorrect: false, reason: 'Sequências comuns estão em listas de dicionário de ataque.' },
        { key: 'C', isCorrect: true, reason: 'Combinação de maiúsculas, minúsculas, números e símbolos = Senha Forte.' },
        { key: 'D', isCorrect: false, reason: 'Anotar fisicamente viola a confidencialidade.' },
        { key: 'E', isCorrect: false, reason: 'Reaproveitar senhas expõe todas as contas caso uma seja vazada.' }
      ],
      bizu: '💡 BIZU DO EDITAL: Senha Forte = Maiúsculas + Minúsculas + Números + Caracteres Especiais (!@#$). Nunca reutilizar!'
    }
  },

  // 7. Aplicativos Computacionais Básicos (Word e Excel)
  {
    id: 'inf-app-01',
    subject: 'Informática',
    topic: '7. Aplicativos Computacionais (Microsoft Excel - Fórmulas)',
    source: 'IBGE / FGV',
    difficulty: 'Médio',
    statement: 'Em uma planilha do Microsoft Excel, um agente do IBGE possui os valores de população nas células A1=100, A2=200 e A3=300. Qual fórmula deve ser inserida na célula A4 para calcular a MÉDIA aritmética desses valores?',
    options: [
      { key: 'A', text: '=MED(A1:A3)' },
      { key: 'B', text: '=MEDIA(A1:A3)' },
      { key: 'C', text: '=SUM(A1:A3)/3' },
      { key: 'D', text: '=CALCULAR.MEDIA(A1;A3)' },
      { key: 'E', text: '=AVERAGE.PT(A1:A3)' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A função `=MÉDIA(início:fim)` calcula a média aritmética do intervalo no Excel em português. `=MED()` calcula a mediana.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`MED()` calcula a Mediana estatística, não a Média.' },
        { key: 'B', isCorrect: true, reason: '`=MÉDIA(A1:A3)` soma os valores e divide pela quantidade (100+200+300)/3 = 200.' },
        { key: 'C', isCorrect: false, reason: 'No Excel em português a função de soma é `SOMA()`, não `SUM()`.' },
        { key: 'D', isCorrect: false, reason: 'Função inexistente.' },
        { key: 'E', isCorrect: false, reason: 'Função inexistente.' }
      ],
      bizu: '💡 BIZU DO EDITAL (EXCEL): `=MÉDIA()` = Média Aritmética | `=MED()` = Mediana (Valor Central) | Dois pontos `:` significa ATÉ (ex: A1 até A3). Ponto e vírgula `;` significa E (ex: A1 e A3).'
    }
  },
  {
    id: 'inf-app-02',
    subject: 'Informática',
    topic: '7. Aplicativos Computacionais (Microsoft Word - Atalhos e Formatação)',
    source: 'IBGE / FGV',
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
      summary: 'No Microsoft Word em Português: `Ctrl + N` = Negrito, `Ctrl + I` = Itálico, `Ctrl + S` = Sublinhado.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`Ctrl + B` SALVA o documento no Word em Português (Bold é no inglês).' },
        { key: 'B', isCorrect: true, reason: '`Ctrl + N` = NEGRITO no Word em Português.' },
        { key: 'C', isCorrect: false, reason: '`Ctrl + S` = SUBLINHADO no Word em Português.' },
        { key: 'D', isCorrect: false, reason: '`Ctrl + I` = ITÁLICO.' },
        { key: 'E', isCorrect: false, reason: '`Ctrl + K` insere um Hiperlink.' }
      ],
      bizu: '💡 BIZU DO EDITAL (WORD PT-BR): `Ctrl + N` = Negrito | `Ctrl + I` = Itálico | `Ctrl + S` = Sublinhado | `Ctrl + B` = Salvar!'
    }
  },

  // 8 & 9. Redes, Internet, Intranet e Correio Eletrônico
  {
    id: 'inf-net-01',
    subject: 'Informática',
    topic: '8 e 9. Redes, Internet, Intranet e Correio Eletrônico (Campos de E-mail)',
    source: 'IBGE / FGV',
    difficulty: 'Fácil',
    statement: 'Ao enviar um e-mail corporativo no IBGE, o remetente adiciona um destinatário no campo "Cco" (Com Cópia Oculta). O que acontece com o endereço listado no campo "Cco"?',
    options: [
      { key: 'A', text: 'O destinatário em "Cco" recebe a mensagem, mas seu endereço fica OCULTO para os demais destinatários.' },
      { key: 'B', text: 'O e-mail é bloqueado pelo servidor de envio por motivo de segurança.' },
      { key: 'C', text: 'Todos os destinatários dos campos "Para" e "Cc" conseguem ver quem estava no "Cco".' },
      { key: 'D', text: 'O campo "Cco" envia a mensagem exclusivamente em formato impresso via fax.' },
      { key: 'E', text: 'A mensagem é apagada da caixa de saída do remetente após 24 horas.' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'O campo Cco (Com Cópia Oculta / BCC em inglês) entrega o e-mail ao destinatário sem revelar seu endereço para os campos "Para" e "Cc".',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Cco = Com Cópia Oculta (Nenhum outro destinatário vê este e-mail).' },
        { key: 'B', isCorrect: false, reason: 'Recurso padrão e seguro de e-mail.' },
        { key: 'C', isCorrect: false, reason: 'Os campos Para e Cc NÃO enxergam os endereços do Cco.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU DO EDITAL (E-MAIL): `Para` e `Cc` = Visíveis a todos | `Cco` = Oculto! Ninguém no Para ou Cc sabe que o Cco recebeu.'
    }
  },
  {
    id: 'inf-net-02',
    subject: 'Informática',
    topic: '9. Organização de Intranet e Internet (Navegadores e Cookies)',
    source: 'IBGE / Cesgranrio',
    difficulty: 'Médio',
    statement: 'Ao navegar na Internet ou na Intranet do IBGE usando navegadores como Google Chrome ou Microsoft Edge, pequenos arquivos de texto são gravados no computador para armazenar preferências do usuário e dados de sessão. Como são chamados esses arquivos?',
    options: [
      { key: 'A', text: 'Cookies' },
      { key: 'B', text: 'Firewalls' },
      { key: 'C', text: 'Backdoors' },
      { key: 'D', text: 'Plugins de PDF' },
      { key: 'E', text: 'Spam' }
    ],
    correctOption: 'A',
    explanation: {
      summary: 'Cookies são pequenos arquivos gravados pelos navegadores para manter sessões ativas, logins e preferências de navegação.',
      optionsAnalysis: [
        { key: 'A', isCorrect: true, reason: 'Cookies = Arquivos de texto armazenados no navegador para preferências e sessão.' },
        { key: 'B', isCorrect: false, reason: 'Firewall é mecanismo de proteção de rede.' },
        { key: 'C', isCorrect: false, reason: 'Backdoor é vulnerabilidade/porta dos fundos usada por malwares.' },
        { key: 'D', isCorrect: false, reason: 'Plugin é extensão de software.' },
        { key: 'E', isCorrect: false, reason: 'Spam é e-mail não solicitado enviado em massa.' }
      ],
      bizu: '💡 BIZU DO EDITAL: Cookies = Guardam preferências/login no navegador | Cache = Guarda cópias de imagens/páginas para carregar mais rápido.'
    }
  },

  // ===============================================
  // --- LÍNGUA PORTUGUESA (100% CONFORME EDITAL) ---
  // ===============================================
  {
    id: 'port-crase-01',
    subject: 'Língua Portuguesa',
    topic: '7. Regência Nominal/Verbal e Sinal Indicativo de Crase',
    source: 'IBGE / FGV',
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
      summary: 'Entregamos [A alguma coisa / preposição A] + [A supervisora / artigo A] = à supervisora.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'NUNCA há crase antes de verbo ("preencher").' },
        { key: 'B', isCorrect: false, reason: 'NUNCA há crase antes de palavra masculina ("pé").' },
        { key: 'C', isCorrect: true, reason: 'Entregar A + A supervisora = à supervisora.' },
        { key: 'D', isCorrect: false, reason: 'NUNCA há crase antes de "uma".' },
        { key: 'E', isCorrect: false, reason: 'NUNCA há crase em expressões com palavras repetidas ("dia a dia").' }
      ],
      bizu: '💡 BIZU DE PORTUGUÊS: Proibido usar crase antes de: 1. Verbo | 2. Palavra Masculina | 3. Artigo "uma" | 4. Palavras repetidas.'
    }
  },
  {
    id: 'port-concordancia-01',
    subject: 'Língua Portuguesa',
    topic: '6. Concordância Nominal e Verbal (Verbo Haver e Fazer)',
    source: 'IBGE / FGV',
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
      summary: 'O verbo HAVER (sentido de existir) e FAZER (tempo decorrido) são impessoais e ficam SEMPRE NO SINGULAR.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Incorreto: deveria ser "Houve muitos atrasos".' },
        { key: 'B', isCorrect: false, reason: 'Incorreto: deveria ser "Faz dois anos".' },
        { key: 'C', isCorrect: true, reason: 'Correto: "Havia dúvidas" (singular obrigatorio).' },
        { key: 'D', isCorrect: false, reason: 'Incorreto: deveria ser "Havia vários relatórios".' },
        { key: 'E', isCorrect: false, reason: 'Incorreto: "Alugam-se casas" (sujeito no plural).' }
      ],
      bizu: '💡 BIZU DE PORTUGUÊS: HAVER (existir) e FAZER (tempo) = SEMPRE SINGULAR! "Havia problemas", "Faz 3 meses".'
    }
  },

  // =========================================================
  // --- RACIOCÍNIO LÓGICO QUANTITATIVO (100% CONFORME EDITAL) ---
  // =========================================================
  {
    id: 'rlm-01',
    subject: 'Raciocínio Lógico',
    topic: '1 e 2. Estruturas Lógicas e Negação de Proposições',
    source: 'IBGE / FGV',
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
        { key: 'A', isCorrect: false, reason: 'Não é a negação.' },
        { key: 'B', isCorrect: true, reason: 'Mantém "o agente estuda" E nega "não obtém a aprovação".' },
        { key: 'C', isCorrect: false, reason: 'Esta é a equivalência (Regra do Neumar), não a negação.' },
        { key: 'D', isCorrect: false, reason: 'Incorreto.' },
        { key: 'E', isCorrect: false, reason: 'Incorreto.' }
      ],
      bizu: '💡 BIZU DE RLM: NEGAÇÃO DO SE...ENTÃO = Regra do MANÉ (MAntém a 1ª E NEga a 2ª).'
    }
  }
];
