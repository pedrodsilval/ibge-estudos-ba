import type { Question } from '../types/study';

export const QUESTIONS_DATABASE: Question[] = [
  // --- INFORMÁTICA: REDES DE COMPUTADORES ---
  {
    id: 'inf-net-01',
    subject: 'Informática',
    topic: 'Redes - Protocolos e Portas TCP/IP',
    source: 'FGV - IBGE (Agente de TI)',
    difficulty: 'Médio',
    statement: 'Um agente de informática do IBGE precisa configurar o acesso seguro via terminal remoto a um servidor Linux na rede interna da agência. Qual protocolo da camada de aplicação do modelo TCP/IP utiliza criptografia por padrão e opera nativamente na porta TCP 22?',
    options: [
      { key: 'A', text: 'Telnet' },
      { key: 'B', text: 'FTP' },
      { key: 'C', text: 'SSH (Secure Shell)' },
      { key: 'D', text: 'HTTP' },
      { key: 'E', text: 'SNMP' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O SSH (Secure Shell) é o protocolo padrão para administração remota segura com criptografia na porta 22.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Telnet usa a porta 23 e envia dados em texto claro (sem criptografia), sendo inseguro.' },
        { key: 'B', isCorrect: false, reason: 'FTP (portas 20/21) é utilizado para transferência de arquivos, não acesso a terminal.' },
        { key: 'C', isCorrect: true, reason: 'SSH opera na porta 22 e substitui o Telnet fornecendo tunelamento criptografado.' },
        { key: 'D', isCorrect: false, reason: 'HTTP opera na porta 80 para navegação web não criptografada.' },
        { key: 'E', isCorrect: false, reason: 'SNMP (portas 161/162) é voltado para gerenciamento e monitoramento de dispositivos de rede.' }
      ],
      bizu: '💡 BIZU DA PROVA: Telnet = Porta 23 (Texto Puro/Inseguro) | SSH = Porta 22 (Seguro/Criptografado). Decorar portas: HTTP=80, HTTPS=443, SSH=22, DNS=53.'
    }
  },
  {
    id: 'inf-net-02',
    subject: 'Informática',
    topic: 'Redes - Camadas OSI e Equipamentos',
    source: 'Cesgranrio - IBGE',
    difficulty: 'Médio',
    statement: 'Dispositivos de rede operam em diferentes camadas do modelo OSI. Em qual camada o Switch tradicional (L2) e o Roteador operam, respectivamente?',
    options: [
      { key: 'A', text: 'Camada Física (1) e Camada de Enlace (2)' },
      { key: 'B', text: 'Camada de Enlace (2) e Camada de Rede (3)' },
      { key: 'C', text: 'Camada de Rede (3) e Camada de Transporte (4)' },
      { key: 'D', text: 'Camada de Transporte (4) e Camada de Aplicação (7)' },
      { key: 'E', text: 'Camada Física (1) e Camada de Rede (3)' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Switches L2 analisam endereços MAC (Enlace - Camada 2) e Roteadores analisam endereços IP (Rede - Camada 3).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Hub e Repetidor operam na Camada Física (1).' },
        { key: 'B', isCorrect: true, reason: 'Switch L2 = Enlace (MAC Address); Roteador = Rede (IP Address).' },
        { key: 'C', isCorrect: false, reason: 'A camada de Transporte lida com TCP/UDP e portas, não roteamento direto de pacotes IP.' },
        { key: 'D', isCorrect: false, reason: 'Camada 7 é a camada do usuário/aplicações (HTTP, SMTP).' },
        { key: 'E', isCorrect: false, reason: 'Switch não é dispositivo estritamente físico (Hub é que é de camada 1).' }
      ],
      bizu: '💡 BIZU DA PROVA: Hub = Camada 1 (Física/Quadro cego) | Switch L2 = Camada 2 (Enlace/MAC) | Roteador = Camada 3 (Rede/IP).'
    }
  },
  {
    id: 'inf-net-03',
    subject: 'Informática',
    topic: 'Redes - IPv4 e Sub-redes',
    source: 'FGV - Reta Final',
    difficulty: 'Difícil',
    statement: 'Dada a máscara de sub-rede decimal pontuada 255.255.255.0, assinale a representação correta na notação CIDR (Classless Inter-Domain Routing):',
    options: [
      { key: 'A', text: '/8' },
      { key: 'B', text: '/16' },
      { key: 'C', text: '/24' },
      { key: 'D', text: '/28' },
      { key: 'E', text: '/32' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Cada octeto 255 possui 8 bits 1 ativados no formato binário (11111111). 255.255.255.0 possui 8 + 8 + 8 = 24 bits 1.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '/8 corresponde a 255.0.0.0.' },
        { key: 'B', isCorrect: false, reason: '/16 corresponde a 255.255.0.0.' },
        { key: 'C', isCorrect: true, reason: '255.255.255.0 = 24 bits de rede contínuos de valor 1, logo /24.' },
        { key: 'D', isCorrect: false, reason: '/28 corresponde a 255.255.255.240.' },
        { key: 'E', isCorrect: false, reason: '/32 é um único IP de host (255.255.255.255).' }
      ],
      bizu: '💡 BIZU DA PROVA: 255 = 8 bits. Três octetos 255 = 3 x 8 = 24. Portanto 255.255.255.0 $\\rightarrow$ /24 (254 IPs válidos para hosts).'
    }
  },

  // --- INFORMÁTICA: SISTEMAS OPERACIONAIS (LINUX & WINDOWS) ---
  {
    id: 'inf-so-01',
    subject: 'Informática',
    topic: 'Linux - Comandos de Arquivos e Permissões',
    source: 'FGV - Agente de TI',
    difficulty: 'Médio',
    statement: 'No sistema operacional Linux, qual comando é utilizado para alterar as permissões de acesso (leitura, escrita e execução) de um arquivo ou diretório?',
    options: [
      { key: 'A', text: 'chown' },
      { key: 'B', text: 'chmod' },
      { key: 'C', text: 'chgrp' },
      { key: 'D', text: 'grep' },
      { key: 'E', text: 'umask' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O comando `chmod` (change mode) altera permissões de leitura (r), escrita (w) e execução (x).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`chown` altera o PROPRIETÁRIO (owner) do arquivo.' },
        { key: 'B', isCorrect: true, reason: '`chmod` altera as PERMISSÕES (mode) do arquivo.' },
        { key: 'C', isCorrect: false, reason: '`chgrp` altera apenas o grupo proprietário.' },
        { key: 'D', isCorrect: false, reason: '`grep` pesquisa padrões de texto dentro de arquivos.' },
        { key: 'E', isCorrect: false, reason: '`umask` define a máscara padrão de permissões ao criar novos arquivos.' }
      ],
      bizu: '💡 BIZU DA PROVA: `chmod` = MODifica Permissões | `chown` = OWNER (Proprietário). chmod 755 = Dono rwx, Grupo r-x, Outros r-x.'
    }
  },
  {
    id: 'inf-so-02',
    subject: 'Informática',
    topic: 'Linux - Estrutura de Diretórios',
    source: 'Cesgranrio - IBGE',
    difficulty: 'Fácil',
    statement: 'Na árvore de diretórios padrão do Linux (FHS), em qual diretório ficam armazenados os arquivos de configuração globais do sistema e das aplicações?',
    options: [
      { key: 'A', text: '/home' },
      { key: 'B', text: '/var' },
      { key: 'C', text: '/etc' },
      { key: 'D', text: '/dev' },
      { key: 'E', text: '/tmp' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O diretório `/etc` contém os arquivos de configuração editáveis em texto plano do sistema operacional Linux.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`/home` guarda as pastas pessoais dos usuários comuns.' },
        { key: 'B', isCorrect: false, reason: '`/var` armazena arquivos de dados variáveis (logs, filas de impressão, spool).' },
        { key: 'C', isCorrect: true, reason: '`/etc` = Arquivos de CONFIGURAÇÃO do sistema.' },
        { key: 'D', isCorrect: false, reason: '`/dev` armazena arquivos especiais que representam dispositivos de hardware (devices).' },
        { key: 'E', isCorrect: false, reason: '`/tmp` armazena arquivos temporários limpos na inicialização.' }
      ],
      bizu: '💡 BIZU DA PROVA: `/etc` = ETCétera (Configurações) | `/var` = VARiáveis (Logs) | `/home` = Usuários comuns | `/root` = Home do Superusuário.'
    }
  },
  {
    id: 'inf-so-03',
    subject: 'Informática',
    topic: 'Windows 11 - Atalhos de Teclado',
    source: 'FGV - Reta Final',
    difficulty: 'Fácil',
    statement: 'Um usuário do Windows 11 deseja abrir rapidamente o Explorador de Arquivos (File Explorer). Qual atalho de teclado realiza essa função diretamente?',
    options: [
      { key: 'A', text: 'Tecla Windows + R' },
      { key: 'B', text: 'Tecla Windows + E' },
      { key: 'C', text: 'Tecla Windows + L' },
      { key: 'D', text: 'Ctrl + Shift + Esc' },
      { key: 'E', text: 'Tecla Windows + D' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'Win + E abre o Explorador de Arquivos no Windows.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Win + R abre a caixa de diálogo Run (Executar).' },
        { key: 'B', isCorrect: true, reason: 'Win + E (Explorer) abre o Explorador de Arquivos.' },
        { key: 'C', isCorrect: false, reason: 'Win + L (Lock) bloqueia a sessão do computador.' },
        { key: 'D', isCorrect: false, reason: 'Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas.' },
        { key: 'E', isCorrect: false, reason: 'Win + D (Desktop) minimiza todas as janelas e exibe a Área de Trabalho.' }
      ],
      bizu: '💡 BIZU DA PROVA: Win+E = Explorer | Win+R = Run (Executar) | Win+L = Lock (Bloquear) | Win+D = Desktop | Ctrl+Shift+Esc = Gerenciador de Tarefas.'
    }
  },

  // --- INFORMÁTICA: SEGURANÇA DA INFORMAÇÃO & LGPD ---
  {
    id: 'inf-seg-01',
    subject: 'Informática',
    topic: 'Segurança - Criptografia Simétrica vs Assimétrica',
    source: 'FGV - IBGE Agente TI',
    difficulty: 'Médio',
    statement: 'Sobre os conceitos de criptografia na Segurança da Informação, assinale a alternativa correta a respeito da Criptografia Assimétrica (Chave Pública):',
    options: [
      { key: 'A', text: 'Utiliza a mesma chave secreta tanto para cifrar quanto para decifrar a mensagem.' },
      { key: 'B', text: 'Utiliza um par de chaves matematicamente relacionadas: uma Chave Pública para cifrar e uma Chave Privada para decifrar.' },
      { key: 'C', text: 'É consideravelmente mais rápida para grandes volumes de dados do que a criptografia simétrica.' },
      { key: 'D', text: 'Exemplo clássico de algoritmo assimétrico é o AES (Advanced Encryption Standard).' },
      { key: 'E', text: 'Não exige gerenciamento de chaves nem proteção da chave privada.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A criptografia assimétrica utiliza duas chaves: a pública (compartilhada) e a privada (secreta e individual).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Utilizar a mesma chave é o conceito da criptografia SIMÉTRICA (ex: AES, DES).' },
        { key: 'B', isCorrect: true, reason: 'Assimétrica = Par de chaves (Chave Pública para cifrar, Chave Privada correspondente para decifrar).' },
        { key: 'C', isCorrect: false, reason: 'A criptografia assimétrica é mais LENTA e exige maior processamento que a simétrica.' },
        { key: 'D', isCorrect: false, reason: 'AES é um algoritmo SIMÉTRICO. O algoritmo assimétrico famoso é o RSA.' },
        { key: 'E', isCorrect: false, reason: 'A chave privada DEVE ser mantida em segredo absoluto pelo proprietário.' }
      ],
      bizu: '💡 BIZU DA PROVA: SIMÉTRICA = 1 Chave Única (Rápida, AES) | ASSIMÉTRICA = 2 Chaves (Pública+Privada, Lenta, RSA).'
    }
  },
  {
    id: 'inf-seg-02',
    subject: 'Informática',
    topic: 'Segurança - Tipos de Malware (Ransomware)',
    source: 'Cesgranrio - IBGE',
    difficulty: 'Fácil',
    statement: 'Qual tipo de código malicioso sequestra os dados do usuário criptografando os arquivos do sistema e exigindo o pagamento de um resgate (normalmente em criptomoedas) para fornecer a chave de descriptografia?',
    options: [
      { key: 'A', text: 'Spyware' },
      { key: 'B', text: 'Adware' },
      { key: 'C', text: 'Ransomware' },
      { key: 'D', text: 'Keylogger' },
      { key: 'E', text: 'Rootkit' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O Ransomware vem da palavra "Ransom" (Resgate). Ele bloqueia/criptografa dados e cobra resgate.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Spyware monitora e espiona atividades do usuário.' },
        { key: 'B', isCorrect: false, reason: 'Adware exibe propagandas não solicitadas.' },
        { key: 'C', isCorrect: true, reason: 'Ransomware = Criptografa arquivos + exige RESGATE.' },
        { key: 'D', isCorrect: false, reason: 'Keylogger captura as teclas digitadas no teclado.' },
        { key: 'E', isCorrect: false, reason: 'Rootkit esconde e mantém a presença de invasores no núcleo do SO.' }
      ],
      bizu: '💡 BIZU DA PROVA: Ransom = Resgate! Ransomware = Criptografia forçada dos seus arquivos + Chantagem/Resgate.'
    }
  },

  // --- INFORMÁTICA: BANCO DE DADOS & SQL ---
  {
    id: 'inf-bd-01',
    subject: 'Informática',
    topic: 'Banco de Dados - SQL JOINs',
    source: 'FGV - Agente de TI',
    difficulty: 'Médio',
    statement: 'Considere duas tabelas SQL: `agentes` (id, nome, setor_id) e `setores` (id, nome_setor). Qual comando SQL retorna TODOS os registros da tabela `agentes`, juntamente com os dados do setor correspondente, mantendo os agentes mesmo que eles não estejam vinculados a nenhum setor?',
    options: [
      { key: 'A', text: 'SELECT * FROM agentes INNER JOIN setores ON agentes.setor_id = setores.id;' },
      { key: 'B', text: 'SELECT * FROM agentes LEFT JOIN setores ON agentes.setor_id = setores.id;' },
      { key: 'C', text: 'SELECT * FROM agentes RIGHT JOIN setores ON agentes.setor_id = setores.id;' },
      { key: 'D', text: 'SELECT * FROM agentes CROSS JOIN setores;' },
      { key: 'E', text: 'SELECT * FROM agentes FULL OUTER JOIN setores WHERE agentes.id IS NULL;' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'O `LEFT JOIN` (ou `LEFT OUTER JOIN`) preserva todos os registros da tabela à esquerda (`agentes`), preenchendo com NULL onde não houver correspondência.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: '`INNER JOIN` retorna apenas registros com correspondência em AMBAS as tabelas (ignoraria agentes sem setor).' },
        { key: 'B', isCorrect: true, reason: '`LEFT JOIN` mantém TUDO da tabela da esquerda (`agentes`), combinando com a da direita se existir.' },
        { key: 'C', isCorrect: false, reason: '`RIGHT JOIN` manteria todos os setores, e não todos os agentes.' },
        { key: 'D', isCorrect: false, reason: '`CROSS JOIN` faz o produto cartesiano de todas as linhas de uma tabela com a outra.' },
        { key: 'E', isCorrect: false, reason: 'Sintaxe incorreta para a finalidade pedida.' }
      ],
      bizu: '💡 BIZU DA PROVA: LEFT JOIN = Prioriza a Tabela da ESQUERDA (Tudo dela aparece) | INNER JOIN = Apenas a INTERSECÇÃO (ambas combinam).'
    }
  },
  {
    id: 'inf-bd-02',
    subject: 'Informática',
    topic: 'Banco de Dados - Comandos DDL vs DML',
    source: 'FGV - IBGE',
    difficulty: 'Médio',
    statement: 'Na linguagem SQL, os comandos são divididos em sublinguagens (DDL, DML, DCL, TCL). Qual das opções a seguir contém apenas comandos da Data Manipulation Language (DML)?',
    options: [
      { key: 'A', text: 'CREATE, ALTER, DROP' },
      { key: 'B', text: 'SELECT, INSERT, UPDATE, DELETE' },
      { key: 'C', text: 'GRANT, REVOKE' },
      { key: 'D', text: 'COMMIT, ROLLBACK, SAVEPOINT' },
      { key: 'E', text: 'TRUNCATE, CREATE, INSERT' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'DML (Data Manipulation Language) lida com a manipulação de dados contidos nas tabelas: SELECT, INSERT, UPDATE, DELETE.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'CREATE, ALTER e DROP são comandos DDL (Data Definition Language - estrutura).' },
        { key: 'B', isCorrect: true, reason: 'SELECT, INSERT, UPDATE, DELETE manipulam dados dentro das tabelas $\\rightarrow$ DML.' },
        { key: 'C', isCorrect: false, reason: 'GRANT e REVOKE são DCL (Data Control Language - permissões).' },
        { key: 'D', isCorrect: false, reason: 'COMMIT e ROLLBACK são TCL (Transaction Control Language).' },
        { key: 'E', isCorrect: false, reason: 'CREATE é DDL.' }
      ],
      bizu: '💡 BIZU DA PROVA: DDL (Definição da Estrutura) = CREATE, ALTER, DROP, TRUNCATE | DML (Manipulação de Dados) = INSERT, UPDATE, DELETE, SELECT.'
    }
  },

  // --- INFORMÁTICA: HARDWARE & ARQUITETURA ---
  {
    id: 'inf-hw-01',
    subject: 'Informática',
    topic: 'Hardware - Hierarquia de Memória',
    source: 'FGV - Agente TI',
    difficulty: 'Fácil',
    statement: 'Qual dos componentes de memória abaixo possui a MENOR capacidade de armazenamento, porém a MAIOR velocidade de acesso (menor tempo de latência) na arquitetura de um computador moderno?',
    options: [
      { key: 'A', text: 'Disco Rígido (HDD SATA)' },
      { key: 'B', text: 'Memória RAM (DDR4/DDR5)' },
      { key: 'C', text: 'Registradores da CPU' },
      { key: 'D', text: 'Unidade de Estado Sólido (SSD NVMe)' },
      { key: 'E', text: 'Memória Secundária Externa' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Os registradores ficam localizados dentro do próprio núcleo da CPU, sendo os mais rápidos e menores da pirâmide de memória.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'HDD é muito lento comparado às memórias internas.' },
        { key: 'B', isCorrect: false, reason: 'RAM é mais rápida que SSD/HDD, porém mais lenta que a Cache e os Registradores.' },
        { key: 'C', isCorrect: true, reason: 'Registradores = Menor capacidade e MAIOR VELOCIDADE (topo da pirâmide).' },
        { key: 'D', isCorrect: false, reason: 'SSD NVMe é armazenamento secundário rápido, mas muito inferior aos registradores.' },
        { key: 'E', isCorrect: false, reason: 'Discos externos são extremamente lentos para a CPU.' }
      ],
      bizu: '💡 BIZU DA PROVA: PIRÂMIDE DE MEMÓRIA (Do mais rápido/menor para o mais lento/maior): 1º Registradores $\\rightarrow$ 2º Cache (L1/L2/L3) $\\rightarrow$ 3º RAM $\\rightarrow$ 4º SSD/HDD.'
    }
  },

  // --- LÍNGUA PORTUGUESA ---
  {
    id: 'port-crase-01',
    subject: 'Língua Portuguesa',
    topic: 'Sintaxe - Uso do Sinal Indicativo de Crase',
    source: 'FGV - IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a opção em que o uso do sinal indicativo de crase está CORRETO segundo a norma-padrão da Língua Portuguesa:',
    options: [
      { key: 'A', text: 'O candidato começou à estudar logo após a publicação do edital.' },
      { key: 'B', text: 'Entregamos os questionários do IBGE à uma funcionária da agência.' },
      { key: 'C', text: 'O agente respondeu às perguntas do supervisor com absoluta clareza.' },
      { key: 'D', text: 'Fomos à pé até a zona rural para realizar a entrevista de campo.' },
      { key: 'E', text: 'O relatório referia-se à todas as cidades da Bahia.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'Respondeu [preposição A] + [artigo AS perguntas] = "às perguntas".',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'NUNCA há crase antes de verbo no infinitivo ("à estudar" é incorreto).' },
        { key: 'B', isCorrect: false, reason: 'NUNCA há crase antes do artigo indefinido "uma".' },
        { key: 'C', isCorrect: true, reason: 'Quem responde, responde A algo. "As perguntas" é feminino plural. A + AS = às perguntas.' },
        { key: 'D', isCorrect: false, reason: 'NUNCA há crase antes de palavras masculinas ("pé" é masculino).' },
        { key: 'E', isCorrect: false, reason: 'NUNCA há crase antes de pronomes indefinidos no plural como "todas".' }
      ],
      bizu: '💡 BIZU DA PROVA: NUNCA USAR CRASE: 1. Antes de verbo | 2. Antes de palavra masculina | 3. Antes de "uma" ou "todas" | 4. Palavras repetidas (dia a dia).'
    }
  },
  {
    id: 'port-concordancia-01',
    subject: 'Língua Portuguesa',
    topic: 'Concordância Verbal (Verbo Haver e Fazer)',
    source: 'FGV - IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a frase que cumpre rigorosamente as regras de concordância verbal da norma-padrão:',
    options: [
      { key: 'A', text: 'Houveram muitos problemas no envio dos relatórios do censo.' },
      { key: 'B', text: 'Fazem três meses que o edital do concurso foi publicado.' },
      { key: 'C', text: 'Deve haver soluções mais eficientes para o banco de dados.' },
      { key: 'D', text: 'Haviam vários questionários pendentes de validação.' },
      { key: 'E', text: 'Aluga-se apartamentos para os agentes temporários.' }
    ],
    correctOption: 'C',
    explanation: {
      summary: 'O verbo HAVER no sentido de existir ou ocorrer é IMPESSOAL (fica no singular). Em locução verbal ("deve haver"), transmite a impessoalidade ao auxiliar.',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Haver no sentido de existir é impessoal: o correto seria "Houve muitos problemas".' },
        { key: 'B', isCorrect: false, reason: 'Fazer indicando tempo decorrido é impessoal: o correto é "Faz três meses".' },
        { key: 'C', isCorrect: true, reason: 'Em locução verbal com Haver impessoal, o auxiliar fica no singular: "Deve haver soluções".' },
        { key: 'D', isCorrect: false, reason: 'Incorreto: deveria ser "Havia vários questionários".' },
        { key: 'E', isCorrect: false, reason: 'Voz passiva sintética com sujeito no plural: "Alugam-se apartamentos".' }
      ],
      bizu: '💡 BIZU DA PROVA: HAVER (existir/ocorrer) e FAZER (tempo decorrido) SÃO IMPESSOAIS = FICAM SEMPRE NO SINGULAR! Ex: "Havia problemas", "Faz 2 anos".'
    }
  },

  // --- RACIOCÍNIO LÓGICO-MATEMÁTICO ---
  {
    id: 'rlm-logica-01',
    subject: 'Raciocínio Lógico',
    topic: 'Proposições - Negação da Implicação (Se... Então)',
    source: 'FGV - Agente IBGE',
    difficulty: 'Médio',
    statement: 'Considere a proposição composta P: "Se o agente estuda informática, então ele é aprovado no IBGE". Qual é a NEGAÇÃO LÓGICA equivalente desta proposição?',
    options: [
      { key: 'A', text: 'Se o agente não estuda informática, então ele não é aprovado no IBGE.' },
      { key: 'B', text: 'O agente estuda informática e não é aprovado no IBGE.' },
      { key: 'C', text: 'O agente não estuda informática ou é aprovado no IBGE.' },
      { key: 'D', text: 'Se o agente é aprovado no IBGE, então ele estuda informática.' },
      { key: 'E', text: 'O agente não estuda informática e não é aprovado no IBGE.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A negação da condicional $P \\rightarrow Q$ é feita pela REGRA DO MANÉ: MANTÉM a primeira (P) E NEGA a segunda (não Q).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Isso é uma nova condicional, não a negação de $P \\rightarrow Q$.' },
        { key: 'B', isCorrect: true, reason: 'Regra $\\neg (P \\rightarrow Q) \\equiv P \\land \\neg Q$: Mantém "estuda informática" E Nega "não é aprovado".' },
        { key: 'C', isCorrect: false, reason: 'Isso é a EQUIVALÊNCIA da condicional ($\\\\neg P \\\\lor Q$), não a negação.' },
        { key: 'D', isCorrect: false, reason: 'Esta é a recíproca da proposição original.' },
        { key: 'E', isCorrect: false, reason: 'Nega ambas com o conectivo E, o que está incorreto.' }
      ],
      bizu: '💡 BIZU DA PROVA: NEGAÇÃO DO "SE... ENTÃO": Regra do MANÉ $\\rightarrow$ MANTÉM a primeira E NEGA a segunda! ($P \\land \\neg Q$).'
    }
  },
  {
    id: 'rlm-logica-02',
    subject: 'Raciocínio Lógico',
    topic: 'Proposições - Equivalência da Condicional',
    source: 'Cesgranrio - IBGE',
    difficulty: 'Médio',
    statement: 'Assinale a proposição logicamente EQUIVALENTE à frase: "Se chove na Bahia, então o tráfego fica lento".',
    options: [
      { key: 'A', text: 'Se o tráfego fica lento, então chove na Bahia.' },
      { key: 'B', text: 'Se não o tráfego não fica lento, então não chove na Bahia.' },
      { key: 'C', text: 'Se não chove na Bahia, então o tráfego não fica lento.' },
      { key: 'D', text: 'Chove na Bahia e o tráfego não fica lento.' },
      { key: 'E', text: 'Não chove na Bahia e o tráfego fica lento.' }
    ],
    correctOption: 'B',
    explanation: {
      summary: 'A equivalência da condicional $P \\rightarrow Q$ pode ser feita por CONTRAPOSITIVA: inverte e nega ambas ($\\\\neg Q \\\\rightarrow \\\\neg P$).',
      optionsAnalysis: [
        { key: 'A', isCorrect: false, reason: 'Apenas inverteu sem negar (Recíproca não é equivalente).' },
        { key: 'B', isCorrect: true, reason: 'Contrapositiva: Inverte e nega: "Se o tráfego NÃO fica lento, então NÃO chove na Bahia".' },
        { key: 'C', isCorrect: false, reason: 'Apenas negou sem inverter (Inversa não é equivalente).' },
        { key: 'D', isCorrect: false, reason: 'Esta é a NEGAÇÃO da condicional, não a equivalência.' },
        { key: 'E', isCorrect: false, reason: 'Combinação incorreta.' }
      ],
      bizu: '💡 BIZU DA PROVA: EQUIVALÊNCIA DO "SE... ENTÃO": 1º CONTRAPOSITIVA (Volta Negando: $\\neg Q \\rightarrow \\neg P$) | 2º REGRA DO NEUMAR (Nega a 1ª OU Mantém a 2ª: $\\neg P \\lor Q$).'
    }
  }
];
