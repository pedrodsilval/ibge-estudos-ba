export interface TheoryTopic {
  id: string;
  subject: 'Língua Portuguesa' | 'Noções de Informática' | 'Administração Pública' | 'Conhecimentos Específicos';
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
  // =========================================================================
  // 1. LÍNGUA PORTUGUESA (UFBA - CARGO 201)
  // =========================================================================
  {
    id: 'lp-crase-regras',
    subject: 'Língua Portuguesa',
    title: 'Crase Definitiva para Concursos: Casos Proibidos, Obrigatórios e Facultativos',
    subtitle: 'O guia prático para gabaritar crase no estilo de provas federais',
    iconName: 'BookOpen',
    badge: 'Tópico de Ouro • Português',
    readingTime: '8 min de leitura',
    sections: [
      {
        title: '1. O Que É a Crase e a Regra Geral de Ocorrência',
        content: `A crase não é um acento, mas sim o fenômeno fonético da fusão (contração) de duas vogais idênticas: a preposição "a" exigida por um termo regente (verbo ou nome) + o artigo definido feminino "a/as" ou o pronome demonstrativo iniciado por "a" (aquele, aquela, aquilo).

MACETE INFALÍVEL DE PROVA (Troca pelo Masculino):
Substitua a palavra feminina por um termo masculino equivalente:
• Se antes da masculina surgir "AO" ou "AOS" -> HAVERÁ CRASE no feminino (à / às)!
  Exemplo: "Fui à feira" -> "Fui AO mercado" (tem crase!).
• Se antes da masculina surgir apenas "O" ou "A" -> NÃO HÁ CRASE!
  Exemplo: "Conheço a praia" -> "Conheço O parque" (sem crase, apenas artigo!).`
      },
      {
        title: '2. Casos Onde a Crase É ESTRITAMENTE PROIBIDA (Pegadinhas de Prova)',
        content: `A banca costuma testar se você decora as proibições absolutas. NUNCA utilize crase nos seguintes casos:
1. Antes de palavras masculinas: "Andar a cavalo", "pagamento a prazo", "escrito a lápis".
2. Antes de verbos no infinitivo: "Disposto a ajudar", "começou a chorar", "a partir de hoje".
3. Antes de pronomes pessoais e de tratamento: "Dirigi-me a ela", "pedi a você", "entreguei a Vossa Senhoria" (Exceções: Senhora, Senhorita e Dona aceitam crase!).
4. Entre palavras repetidas: "Cara a cara", "dia a dia", "frente a frente", "gota a gota".
5. Quando o "a" está no singular diante de palavra no plural: "Refiro-me a pessoas honestas" (sem crase; se fosse "às pessoas", teria crase!).
6. Antes de pronomes indefinidos que não aceitam artigo: "Disse a qualquer pessoa", "não dê atenção a ninguém".`,
        alert: {
          type: 'warning',
          title: 'Pegadinha Clássica da Expressão "A Partir De"',
          message: '"A partir de" NUNCA tem crase, pois "partir" é verbo no infinitivo! Marcar crase em "a partir de" zera a questão.'
        }
      },
      {
        title: '3. Casos Onde a Crase É FACULTATIVA (Mnemônico: "NÃO ATÉ A MINHA MARIA")',
        content: `O uso do acento grave é opcional (tanto faz colocar ou não) em exatamente 3 situações clássicas:
1. Antes de pronomes possessivos femininos no SINGULAR (minha, tua, sua, nossa, vossa):
   - "Entreguei o ofício a minha chefe" OU "Entreguei o ofício à minha chefe" (Ambos corretos!).
   ⚠️ CUIDADO: Se o pronome for plural ("minhas"), a crase dependerá da presença do artigo ("às minhas").
2. Antes de nomes próprios femininos comuns (sem especificador):
   - "Refiro-me a Maria" OU "Refiro-me à Maria" (Ambos corretos!).
3. Depois da preposição "ATÉ":
   - "Caminhou até a reitoria" OU "Caminhou até à reitoria" (Ambos corretos!).`
      },
      {
        title: '4. Casos Obrigatórios: Locuções Femininas & Expressões Subentendidas',
        content: `A crase é SEMPRE OBRIGATÓRIA em:
1. Locuções adverbiais femininas: "À tarde", "à noite", "às pressas", "às vezes", "à toa".
2. Locuções prepositivas e conjuntivas femininas: "À medida que", "à proporção que", "à espera de", "à custa de".
3. Diante de horas exatas e determinadas: "A aula começará às 08h50", "chegamos às 14h".
   (Atenção: com as preposições "para", "desde" ou "entre", não há crase: "Reunião marcada para as 14h").
4. Expressão "à moda de" ou "à maneira de" (mesmo antes de palavra masculina): "Bife à milanesa", "gol à Pelé", "escrita à Machado de Assis".`
      }
    ],
    bizus: [
      'Troca por masculino: deu "AO", crase no "A"! Deu "O", crase passa longe!',
      'Antes de verbo, palavra masculina e "a" singular antes de plural: CRASE PROIBIDA!',
      'Crase facultativa: "Minha Maria vai até": possessivo feminino singular, nome próprio feminino e após a preposição "até".'
    ]
  },

  {
    id: 'lp-redacao-oficial-manual-pr',
    subject: 'Língua Portuguesa',
    title: 'Redação Oficial: Manual da Presidência da República (3ª Edição)',
    subtitle: 'Princípios da impessoalidade, o Padrão Ofício unificado e pronomes de tratamento',
    iconName: 'BookOpen',
    badge: 'Cai em Todo Concurso Federal',
    readingTime: '7 min de leitura',
    sections: [
      {
        title: '1. Os Princípios Fundamentais da Redação Oficial',
        content: `Segundo a 3ª edição do Manual de Redação da Presidência da República (MRPR), a redação oficial é a maneira pela qual o Poder Público redige atos normativos e comunicações. Ela é regida por 5 atributos essenciais:
• Impessoalidade:
  - Não há espaço para impressões individuais, vaidades ou posicionamentos pessoais de quem redige.
  - O emissor é sempre a Administração Pública (o serviço público fala pelo órgão).
  - O receptor é o cidadão ou outro órgão público, sempre tratado com respeito e isenção.
• Clareza: O texto deve ser compreendido de imediato por qualquer cidadão. Evitar jargões desnecessários e termos rebuscados.
• Concisão: Transmitir o máximo de conteúdo com o mínimo de palavras, eliminando redundâncias e rodeios ("encher linguiça").
• Formalidade e Padronização: Obediência às regras gramaticais e uniformidade visual nos documentos oficiais.
• Uso do padrão culto da Língua Portuguesa.`
      },
      {
        title: '2. A Grande Mudança da 3ª Edição: O Fim do Aviso e do Memorando',
        content: `⚠️ ATENÇÃO MÁXIMA PARA A PROVA:
Na 3ª edição do Manual, foram ABOLIDOS o "Aviso" (usado entre Ministros) e o "Memorando" (usado internamente)!
Hoje, todas as comunicações oficiais externas e internas são UNIFICADAS sob uma única nomenclatura: **OFÍCIO** (Padrão Ofício).

Estrutura Básica do Padrão Ofício:
1. Cabeçalho com o Brasão das Armas da República (no topo, centralizado).
2. Identificação do Expediente: Tipo de documento + número + ano + sigla do órgão (ex: Ofício nº 123/2026/UFBA).
3. Local e data alinhados à esquerda (ex: Salvador, 20 de dezembro de 2026).
4. Endereçamento: Cargo do destinatário precedido do pronome adequado (ex: A Sua Senhoria o Senhor Diretor...).
5. Assunto: Resumo sucinto do conteúdo em destaque (em negrito).
6. Texto: Introdução (apresenta o motivo), Desenvolvimento (argumenta e detalha) e Conclusão (afirma o desfecho).
7. Fecho para comunicações oficiais.
8. Identificação do signatário (Nome em maiúsculas e cargo centralizados, SEM traço para assinatura!).`
      },
      {
        title: '3. Os Únicos Dois Fechos Oficiais Permitidos',
        content: `O Manual da Presidência simplificou e padronizou os fechos para correspondências oficiais em apenas DOIS:
1. "Respeitosamente," -> Empregado para autoridades SUPERIORES à do signatário (inclusive o Presidente da República, Governadores, Ministros e Reitores).
2. "Atenciosamente," -> Empregado para autoridades de MESMA HIERARQUIA ou de HIERARQUIA INFERIOR.

❌ Expressões como "Cordialmente", "Sem mais para o momento", "Abraços" ou "Saudações Fraternas" são PROIBIDAS na redação oficial!`
      },
      {
        title: '4. Pronomes de Tratamento e Concordância',
        content: `• Vossa Excelência (V. Ex.ª): Destinado aos Chefes de Poder, Ministros, Magistrados, Parlamentares, Governadores, Prefeitos e aos **Reitores das Universidades Federais (UFBA)**!
  - Vocativo no envelope e início: "A Sua Excelência o Senhor..." e vocativo "Senhor Reitor," ou "Senhor Ministro,".
• Vossa Senhoria (V. Sa.): Destinado às demais autoridades, chefes de departamento, coordenadores e servidores públicos em geral.
  - Vocativo: "Senhor Coordenador," ou "Senhor Chefe,".

REGRA DE CONCORDÂNCIA GRAMATICAL DE OURO:
Os pronomes de tratamento concordam SEMPRE em 3ª PESSOA do singular ("Vossa Excelência designou seus assessores", e NUNCA "vossos assessores")!`
      }
    ],
    bizus: [
      'Aviso e Memorando NÃO existem mais! Tudo agora é OFÍCIO (Padrão Ofício).',
      'Fecho só tem 2: "Respeitosamente" (para quem manda mais que você) e "Atenciosamente" (para quem é igual ou abaixo).',
      'Pronome de tratamento: gramaticalmente é 2ª pessoa na conversa, mas o verbo e os pronomes vão SEMPRE para a 3ª pessoa!'
    ]
  },

  // =========================================================================
  // 2. NOÇÕES DE INFORMÁTICA (UFBA - CARGO 201)
  // =========================================================================
  {
    id: 'info-seguranca-ameacas',
    subject: 'Noções de Informática',
    title: 'Segurança da Informação: Princípios CIDAL, Tipos de Malware e Ataques',
    subtitle: 'Vírus vs. Worm vs. Trojan vs. Ransomware e a Engenharia Social',
    iconName: 'ShieldCheck',
    badge: 'Certeza de Prova • Informática',
    readingTime: '8 min de leitura',
    sections: [
      {
        title: '1. Os 5 Pilares da Segurança da Informação (Mnemônico CIDAL)',
        content: `• C - Confidencialidade: Garante que a informação só é acessível por pessoas expressamente autorizadas. A ferramenta clássica para garantir confidencialidade é a CRIPTOGRAFIA.
• I - Integridade: Garante que a informação não foi alterada, corrompida ou destruída de forma não autorizada (ex: verificação por HASH ou assinatura digital).
• D - Disponibilidade: Garante que a informação e os sistemas estão sempre operacionais e acessíveis para os usuários autorizados quando necessário (ex: backups e redundância).
• A - Autenticidade: Garante a identidade real de quem enviou ou gerou a informação (certeza de autoria).
• L - Legalidade / Não-Repúdio (Irretratabilidade): Garante que o autor de uma ação ou transação não pode negar que a realizou (assegurada pela assinatura digital).`
      },
      {
        title: '2. A Família dos Malwares: Quem é Quem no Crime Cibernético',
        content: `As bancas adoram trocar as definições de pragas virtuais. Decore as diferenças fundamentais:

1. VÍRUS:
   • PRECISA DE UM HOSPEDEIRO (arquivo executável ou documento) e depende da EXECUÇÃO PELO USUÁRIO (ex: dar dois cliques no anexo) para infectar a máquina e se replicar.

2. WORM (Verme):
   • NÃO precisa de hospedeiro e NÃO precisa de ação humana! Ele se propaga sozinho pela rede, explorando vulnerabilidades de portas e sistemas, consumindo banda e recursos.

3. TROJAN (Cavalo de Troia):
   • Programa que se passa por legítimo ou útil (ex: um jogo, protetor de tela ou cartão de aniversário), mas que, ao ser instalado, abre uma porta traseira (*backdoor*) para o invasor controlar a máquina.

4. RANSOMWARE (O Sequestrador de Dados):
   • Malware que CRIPTOGRAFA os arquivos da vítima no disco e exige o pagamento de um RESGATE (geralmente em Bitcoin/criptomoeda) para fornecer a chave de descriptografia.

5. SPYWARE (Espião):
   • Software espião que coleta informações do usuário sem consentimento. Subtipos:
     - *Keylogger:* grava tudo o que é digitado no teclado físico.
     - *Screenlogger:* captura fotos da tela onde o mouse clica (muito usado para burlar teclados virtuais de bancos).`
      },
      {
        title: '3. Golpes Virtuais: Phishing, Engenharia Social e a Regra do Backup 3-2-1',
        content: `• Phishing (Pescaria): Golpe que utiliza mensagens fraudulentas com tom de urgência (falso e-mail do banco, cobrança judicial, suspensão de conta) contendo links que direcionam para sites falsos idênticos aos originais para roubar senhas e dados do usuário.
• Engenharia Social: Técnica de persuasão e manipulação psicológica em que o criminoso engana uma pessoa para obter senhas ou acessos privilegiados.
• Firewall: Dispositivo de segurança (hardware ou software) que funciona como uma cancela/porteiro, filtrando o tráfego de rede (bloqueando portas e conexões não autorizadas). O firewall NÃO substitui o antivírus (ele não caça vírus em arquivos baixados!).
• A Regra de Ouro do Backup 3-2-1:
  - 3 cópias de segurança de cada dado importante;
  - 2 tipos de mídias diferentes (ex: disco rígido externo e servidor local);
  - 1 cópia armazenada fora do local (off-site ou nuvem).`
      }
    ],
    bizus: [
      'Vírus precisa de hospedeiro e de clique do usuário. Worm se espalha sozinho pela rede sem precisar de ninguém!',
      'Ransomware sequestra e criptografa arquivos pedindo resgate ($).',
      'Phishing é pescaria de senhas com páginas e e-mails falsos.',
      'Firewall é a cancela da rede (filtra portas e conexões); Antivírus caça o arquivo malicioso.'
    ]
  },

  {
    id: 'info-excel-formulas',
    subject: 'Noções de Informática',
    title: 'Microsoft Excel 365: Fórmulas PROCV, SE, SOMASE e Referências Absolutas',
    subtitle: 'As fórmulas que sempre caem em provas federais e o segredo do cifrão ($)',
    iconName: 'Cpu',
    badge: 'Prático & Direto',
    readingTime: '6 min de leitura',
    sections: [
      {
        title: '1. O Segredo das Referências: O que o Cifrão ($) Realmente Faz',
        content: `No Excel, quando você copia ou arrasta uma fórmula, as células mudam automaticamente (referência relativa: A1 vira A2, B1, etc.).
O símbolo cifrão ($) serve exclusivamente para CONGELAR / TRAVAR uma linha ou coluna:

• $A$1 (Referência Absoluta Total): Trava a coluna A e a linha 1. Se você arrastar para qualquer lado, continua sempre apontando para $A$1!
• A$1 (Referência Mista de Linha): A coluna A varia, mas a linha 1 fica travada.
• $A1 (Referência Mista de Coluna): A coluna A fica travada, mas a linha 1 varia ao arrastar para baixo.

Dica de prova: Se arrastar para o lado (direita/esquerda), varia a letra da coluna. Se arrastar para baixo/cima, varia o número da linha. Quem estiver precedido por "$" NÃO MUDA!`
      },
      {
        title: '2. A Função Lógica SE e Condições Compostas',
        content: `Sintaxe Oficial:
=SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)

Exemplo:
=SE(B2 >= 7; "Aprovado"; "Reprovado")
- Se a nota em B2 for 8,0 -> Exibe "Aprovado".
- Se a nota em B2 for 5,0 -> Exibe "Reprovado".

Combinada com a função E (todas as condições obrigatórias):
=SE(E(B2>=7; C2>=75%); "Aprovado"; "Reprovado")`
      },
      {
        title: '3. A Função de Busca PROCV (Procura Vertical)',
        content: `Sintaxe:
=PROCV(valor_procurado; matriz_tabela; número_índice_coluna; [procurar_intervalo])

Onde:
• valor_procurado: O que você está buscando (ex: CPF do servidor).
• matriz_tabela: O intervalo de células onde a busca será feita. A coluna onde o valor está DEVE ser a primeira coluna à esquerda!
• número_índice_coluna: Qual coluna você quer que ele devolva como resposta (1, 2, 3...).
• procurar_intervalo:
  - 0 ou FALSO: Busca EXATA (quase sempre usada em concursos!).
  - 1 ou VERDADEIRO: Busca aproximada.`
      }
    ],
    bizus: [
      'Cifrão ($) na frente da letra trava a coluna; cifrão na frente do número trava a linha!',
      'PROCV procura na vertical (de cima para baixo) e só encontra se o valor procurado estiver na 1ª coluna à esquerda!',
      'No PROCV, o último parâmetro "FALSO" ou "0" exige correspondência EXATA.'
    ]
  },

  // =========================================================================
  // 3. ADMINISTRAÇÃO PÚBLICA & LEGISLAÇÃO FEDERAL (UFBA - CARGO 201)
  // =========================================================================
  {
    id: 'adm-constituicao-limpe',
    subject: 'Administração Pública',
    title: 'CF/88 Art. 37 a 41: Princípios Constitucionais LIMPE & Regras Gerais',
    subtitle: 'Legalidade, Impessoalidade, Moralidade, Publicidade, Eficiência e Acumulação de Cargos',
    iconName: 'ShieldCheck',
    badge: 'Base de Todo o Direito Administrativo',
    readingTime: '8 min de leitura',
    sections: [
      {
        title: '1. Os 5 Princípios Constitucionais Expressos (Mnemônico LIMPE)',
        content: `O caput do Art. 37 da Constituição Federal de 1988 estabelece os cinco princípios expressos que regem a Administração Pública Direta e Indireta de qualquer dos Poderes da União, dos Estados, do DF e dos Municípios:

• L - Legalidade:
  - O particular pode fazer tudo o que a lei não proíbe.
  - O SERVIDOR PÚBLICO só pode fazer aquilo que a lei expressamente autoriza e determina!
• I - Impessoalidade:
  - O ato administrativo deve visar sempre ao INTERESSE PÚBLICO geral, sem favorecer amigos ou perseguir inimigos.
  - Proíbe a promoção pessoal de autoridades: nomes, símbolos ou imagens que caracterizem promoção pessoal são proibidos em obras e propagandas públicas (§ 1º do art. 37).
• M - Moralidade:
  - Atuação com ética, probidade, lealdade e boa-fé. Não basta ser legal, tem que ser moralmente aceitável.
• P - Publicidade:
  - Os atos administrativos devem ser transparentes e públicos para conhecimento da sociedade e controle social.
  - Exceções legítimas: segurança da sociedade e do Estado e intimidade/vida privada das pessoas.
• E - Eficiência (incluído pela EC 19/1998):
  - Busca por produtividade, celeridade, redução de desperdícios e qualidade na prestação dos serviços públicos.`
      },
      {
        title: '2. Regras de Acesso ao Cargo Público e Estabilidade',
        content: `• Concurso Público:
  - De provas ou de provas e títulos.
  - Validade: até 2 anos, prorrogável UMA única vez por igual período (máximo total de 4 anos se o edital fixar 2 anos).
• Cargos em Comissão e Funções de Confiança:
  - Função de Confiança: exercida EXCLUSIVAMENTE por servidores ocupantes de cargo efetivo.
  - Cargo em Comissão: preenchido por servidores de carreira nos casos e condições previstos em lei, e também por pessoas de fora (livre nomeação e livre exoneração).
• Estabilidade do Servidor (Art. 41):
  - São estáveis após TRÊS ANOS (36 meses) de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público.
  - Requisito obrigatório: aprovação em Avaliação Especial de Desempenho por comissão instituída para essa finalidade.`
      },
      {
        title: '3. Acumulação Remunerada de Cargos Públicos (Atenção Máxima!)',
        content: `A regra geral constitucional é que a acumulação remunerada de cargos públicos é ESTRITAMENTE VEDADA (estendida a empregos e funções na administração direta, autarquias, fundações e empresas estatais).

AS ÚNICAS 3 EXCEÇÕES CONSTITUCIONAIS (Desde que haja compatibilidade de horários):
1. A de dois cargos de professor;
2. A de um cargo de professor com outro técnico ou científico;
3. A de dois cargos ou empregos privativos de profissionais de saúde, com profissões regulamentadas.`
      }
    ],
    bizus: [
      'LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (Eficiência foi o último a entrar, em 1998).',
      'Estabilidade = 3 anos de efetivo exercício + avaliação especial de desempenho.',
      'Acumulação de cargos: regra é PROIBIDA. Só pode: 2 de professor, 1 de professor + 1 técnico, ou 2 de saúde.'
    ]
  },

  {
    id: 'adm-lei-8112-rju',
    subject: 'Administração Pública',
    title: 'Lei nº 8.112/1990: Regime Jurídico dos Servidores Públicos Federais',
    subtitle: 'Provimento, vacância, os prazos fatais da posse e exercício, e o regime disciplinar',
    iconName: 'ShieldCheck',
    badge: 'Coração da Prova UFBA',
    readingTime: '9 min de leitura',
    sections: [
      {
        title: '1. Formas de Provimento (Mnemônico PANRRRA)',
        content: `Provimento é o ato de preenchimento de um cargo público vago:
1. NOMEAÇÃO: A única forma originária (para quem passou em concurso público ou cargo em comissão).
2. PROMOÇÃO: Ascensão na carreira (é provimento e vacância ao mesmo tempo).
3. READAPTAÇÃO: Ajuste do servidor em cargo compatível com limitação física ou mental que tenha sofrido.
4. REVERSÃO: O retorno do APOSENTADO ao serviço ativo (invalidez insubsistente ou no interesse da administração).
5. REINTEGRAÇÃO: O retorno do servidor estável que foi DEMITIDO ILEGALMENTE, após anulação da demissão por decisão judicial ou administrativa (com ressarcimento de todas as vantagens!).
6. RECONDUÇÃO: O retorno do servidor estável ao cargo anteriormente ocupado (por inabilitação em estágio probatório de outro cargo ou reintegração do ocupante anterior).
7. APROVEITAMENTO: O retorno do servidor que estava em DISPONIBILIDADE.`
      },
      {
        title: '2. Prazos Cruciais da Posse e Exercício (Decore para a Prova!)',
        content: `A sequência de entrada no serviço público federal segue dois prazos estritos:

1. NOMEAÇÃO -> POSSE:
   • Prazo: Até **30 DIAS** contados da publicação do ato de nomeação no Diário Oficial.
   • O que acontece se o candidato NÃO tomar posse em 30 dias?
     -> O ato de nomeação é TORNADO SEM EFEITO (ele simplesmente não entra no serviço público).

2. POSSE -> EXERCÍCIO (Começar a trabalhar):
   • Prazo: Até **15 DIAS** contados da data da posse.
   • O que acontece se o servidor empossado NÃO entrar em exercício em 15 dias?
     -> O servidor é **EXONERADO** de ofício! (Ele já é servidor desde a posse, então tem que ser exonerado).`
      },
      {
        title: '3. Penalidades Disciplinares e Prazos Prescricionais',
        content: `As penalidades previstas no art. 127 da Lei 8.112/90:
• Advertência: Falhas leves; cancelamento do registro após 3 anos se não reincidir. Prescreve em 180 dias.
• Suspensão: De até 90 dias (pode ser convertida em multa de 50% por dia de remuneração). Cancela após 5 anos. Prescreve em 2 anos.
• Demissão, Cassação de aposentadoria e Destituição de cargo em comissão: Penalidades capitais. Prescrevem em 5 anos.

Casos graves que geram DEMISSÃO DIRETA:
- Improbidade administrativa;
- Abandono de cargo (ausência intencional por mais de 30 dias consecutivos);
- Inassiduidade habitual (falta sem justificativa por 60 dias interpolados no período de 12 meses);
- Corrupção, aplicação irregular de dinheiros públicos, revelação de segredo conhecido em razão do cargo.`
      }
    ],
    bizus: [
      'Nomeação até Posse: 30 dias (não tomou posse? Nomeação sem efeito).',
      'Posse até Exercício: 15 dias (não entrou em exercício? É EXONERADO!).',
      'Reversão é do velhinho aposentado (V de vovô); Reintegração é do injustiçado demitido (I de indenizado com tudo que perdeu).',
      'Abandono de cargo = mais de 30 dias CONSECUTIVOS. Inassiduidade habitual = 60 dias INTERPOLADOS em 12 meses.'
    ]
  },

  {
    id: 'adm-estatuto-regimento-ufba',
    subject: 'Administração Pública',
    title: 'Estatuto e Regimento Geral da UFBA: Estrutura, Governança e Colegiados',
    subtitle: 'CONSUNI, CONSEPE, Reitoria e a autonomia universitária na Bahia',
    iconName: 'Activity',
    badge: 'Específico da UFBA • Conhecimento Local',
    readingTime: '7 min de leitura',
    sections: [
      {
        title: '1. A Universidade Federal da Bahia (UFBA) e sua Missão',
        content: `A UFBA é uma instituição pública autárquica federal de ensino superior, dotada de autonomia didático-científica, administrativa e de gestão financeira e patrimonial (art. 207 da CF/88), vinculada ao Ministério da Educação (MEC).
Seus campi principais situam-se em Salvador (Canela, Federação, Ondina) e Vitória da Conquista (Campus Anísio Teixeira).

A gestão universitária é descentralizada e colegiada, assentada na indissociabilidade entre Ensino, Pesquisa e Extensão.`
      },
      {
        title: '2. Os Três Órgãos Colegiados Superiores da UFBA',
        content: `A cúpula deliberativa da UFBA divide-se em 3 conselhos fundamentais:

1. CONSUNI (Conselho Universitário):
   • É o ÓRGÃO SUPREMO de deliberação coletiva, normativa e recursal da UFBA.
   • Presidido pelo Reitor.
   • Competências: planejar as diretrizes gerais da instituição, aprovar reformas estatutárias, aprovar orçamentos e contas anuais e decidir recursos finais em matéria administrativa.

2. CONSEPE (Conselho Superior de Ensino, Pesquisa e Extensão):
   • É o órgão deliberativo superior em matérias estritamente ACADÊMICAS e PEDAGÓGICAS.
   • Competências: fixar diretrizes pedagógicas, criar e reformular cursos de graduação e pós-graduação, calendários acadêmicos e normas de matrícula.

3. CONSELHO DE CURADORES:
   • Órgão deliberativo e fiscalizador em matéria ECONÔMICO-FINANCEIRA e PATRIMONIAL.
   • Acompanha a execução orçamentária e fiscaliza a aplicação de recursos e doações.`
      },
      {
        title: '3. A Administração Executiva: Reitoria e Unidades Universitárias',
        content: `• Reitor e Vice-Reitor: Escolhidos e nomeados pelo Presidente da República a partir de lista tríplice elaborada pelo colegiado universitário.
• Pró-Reitorias (Órgãos de Administração Central):
  - PROGRAD (Graduação), PROPG (Pós-Graduação), PROEXT (Extensão Universitária);
  - PROAD (Administração) e PROPLAN (Planejamento e Orçamento);
  - PRODEP (Desenvolvimento de Pessoas - setor onde os Assistentes em Administração atuam diretamente na gestão de servidores).
• Unidades Universitárias:
  - São as Faculdades, Escolas e Institutos (ex: Escola de Administração, Instituto de Letras, Faculdade de Medicina).
  - Cada unidade é gerida por uma Congregação (órgão colegiado da unidade) e por um Diretor.`
      }
    ],
    bizus: [
      'CONSUNI manda em tudo (política geral e administração). CONSEPE cuida do acadêmico (ensino, pesquisa e extensão). Curadores fiscalizam o dinheiro.',
      'A UFBA é uma AUTARQUIA FEDERAL regida pelo princípio da indissociabilidade entre ensino, pesquisa e extensão.',
      'Reitor e Vice-Reitor são nomeados pelo Presidente da República a partir de lista tríplice.'
    ]
  },

  // =========================================================================
  // 4. CONHECIMENTOS ESPECÍFICOS: ASSISTENTE EM ADMINISTRAÇÃO (UFBA)
  // =========================================================================
  {
    id: 'esp-processo-organizacional-podc',
    subject: 'Conhecimentos Específicos',
    title: 'Processo Organizacional (PODC) & Critérios de Departamentalização',
    subtitle: 'Planejar, Organizar, Dirigir e Controlar e a divisão do trabalho na administração',
    iconName: 'Database',
    badge: 'Teoria Geral da Administração',
    readingTime: '7 min de leitura',
    sections: [
      {
        title: '1. As Quatro Funções Administrativas Clássicas (PODC)',
        content: `A administração de qualquer organização pública ou privada estrutura-se em um ciclo contínuo de 4 funções interdependentes:

1. PLANEJAR:
   • Estabelecer objetivos, metas e definir com antecedência o que deve ser feito e como.
   • Os 3 Níveis de Planejamento:
     - Estratégico: Longo prazo, visão macro da cúpula (Reitoria), projeta a organização para o futuro.
     - Tático: Médio prazo, nível intermediário ou departamental (Pró-Reitorias, Diretorias de Unidades).
     - Operacional: Curto prazo, foco nas tarefas do dia a dia e procedimentos operacionais dos assistentes.

2. ORGANIZAR:
   • Alocar recursos (humanos, materiais e financeiros), dividir o trabalho, definir hierarquias e agrupar órgãos e tarefas em departamentos.

3. DIRIGIR:
   • Conduzir pessoas, exercer liderança, motivar equipes e facilitar a comunicação para alcançar as metas planejadas.

4. CONTROLAR:
   • Monitorar as atividades, mensurar os resultados obtidos, comparar com os padrões planejados e aplicar ações corretivas caso haja desvios.`
      },
      {
        title: '2. Critérios de Departamentalização (Como Organizar a Estrutura)',
        content: `Departamentalização é o agrupamento de atividades semelhantes em unidades administrativas:
• Funcional: Agrupa por funções especializadas (ex: Departamento de Finanças, Departamento de RH, Departamento de Compras). Muito comum no serviço público pela alta especialização.
• Territorial / Geográfica: Agrupa por região ou praça de atuação (ex: Campus Salvador, Campus Vitória da Conquista).
• Por Clientes: Foco no público-alvo atendido (ex: Setor de Atendimento ao Aluno, Setor de Atendimento ao Professor).
• Por Produtos ou Serviços: Agrupa pela entrega final.
• Por Processos: Agrupa pelas etapas de um fluxo de trabalho (ex: Triagem -> Análise -> Parecer -> Expedição).
• Matricial: Estrutura híbrida que cruza a departamentalização funcional com projetos temporários específicos.`
      }
    ],
    bizus: [
      'PODC: Planejar (olha pro futuro), Organizar (distribui recursos e tarefas), Dirigir (lidera e motiva pessoas), Controlar (mede e corrige desvios).',
      'Níveis de planejamento: Estratégico (longo prazo/cúpula), Tático (médio prazo/departamentos), Operacional (curto prazo/tarefa diária).',
      'Departamentalização funcional foca nas competências técnicas (RH, finanças, compras).'
    ]
  },

  {
    id: 'esp-arquivologia-3-idades',
    subject: 'Conhecimentos Específicos',
    title: 'Arquivologia: A Teoria das Três Idades & Métodos de Arquivamento',
    subtitle: 'Arquivos correntes, intermediários e permanentes, e as regras de alfabetação',
    iconName: 'Database',
    badge: 'Assunto Mais Cobrado para Assistente',
    readingTime: '8 min de leitura',
    sections: [
      {
        title: '1. A Teoria das Três Idades (ou Ciclo Vital dos Documentos)',
        content: `Segundo a Lei nº 8.159/1991 (Lei dos Arquivos) e a doutrina arquivística, os documentos passam por três fases sucessivas ao longo de sua vida:

1. PRIMEIRA IDADE — ARQUIVO CORRENTE (ou de Gestão):
   • Documentos em tramitação ou consultados com frequência pelas atividades rotineiras da repartição.
   • Ficam guardados perto de quem trabalha com eles (nos próprios setores).
   • Possuem VALOR PRIMÁRIO (administrativo, legal, fiscal).

2. SEGUNDA IDADE — ARQUIVO INTERMEDIÁRIO (ou Purgatório):
   • O documento não é mais consultado no dia a dia, mas NÃO pode ser destruído porque ainda aguarda prazos de guarda legais ou prescricionais definidos na TABELA DE TEMPORALIDADE.
   • Ficam em depósitos mais distantes e baratos.
   • Mantêm apenas VALOR PRIMÁRIO. Ao final do prazo, o documento só tem dois destinos possíveis: ELIMINAÇÃO ou RECOLHIMENTO ao arquivo permanente.

3. TERCEIRA IDADE — ARQUIVO PERMANENTE (ou Histórico):
   • Documentos cujo valor administrativo prescreveu, mas que adquiriram VALOR SECUNDÁRIO (histórico, probatório, cultural ou de pesquisa científica para a sociedade).
   • ⚠️ REGRA DE OURO DE PROVA: Os documentos do arquivo permanente são INALIENÁVEIS, IMPRESCRITÍVEIS e NUNCA PODEM SER ELIMINADOS!`
      },
      {
        title: '2. Métodos de Arquivamento e Ordenação de Pastas',
        content: `• Método Alfabético (Direto):
  - Ordena os documentos pelo nome das pessoas ou instituições.
  - Regras de Alfabetação para Pessoas Físicas: O último sobrenome vem primeiro, seguido pelo prenome e outros sobrenomes (Ex: Pedro Henrique Santos -> SANTOS, Pedro Henrique).
  - Sobrenomes compostos por adjetivo ou substantivo não se separam (Ex: Castelo Branco -> CASTELO BRANCO, Camilo).
  - Parentesco (Filho, Júnior, Sobrinho, Neto) acompanha o sobrenome anterior (Ex: Antonio Silva Júnior -> SILVA JÚNIOR, Antonio).
• Método Geográfico (Direto):
  - Ordenação por localidade: Estado -> Cidade -> Pessoa (ou País -> Cidade -> Pessoa).
• Método Numérico (Indireto):
  - Exige um índice auxiliar para localizar o número da pasta (Numérico Simples, Cronológico ou Dígito-Terminal).
• Método Ideográfico (Por Assunto):
  - Alfabético (Dicionário ou Enciclopédico) ou Numérico (Decimal ou Duplex).`
      }
    ],
    bizus: [
      'Corrente (1ª idade): uso frequente, fica na mão do servidor. Intermediário (2ª idade): uso raro, aguarda prazo na Tabela de Temporalidade.',
      'Permanente (3ª idade): valor histórico/cultural. NUNCA PODE SER ELIMINADO!',
      'Alfabetação: Sobrenome de família primeiro (SILVA, Maria). Se tiver "Júnior/Filho", acompanha o sobrenome (SOUZA FILHO, Carlos).'
    ]
  },

  {
    id: 'esp-recursos-materiais-curva-abc',
    subject: 'Conhecimentos Específicos',
    title: 'Recursos Materiais: Curva ABC de Estoques & Classificação XYZ',
    subtitle: 'Importância financeira (Princípio de Pareto) versus criticidade operacional',
    iconName: 'Database',
    badge: 'Prático & Estratégico',
    readingTime: '7 min de leitura',
    sections: [
      {
        title: '1. A Curva ABC (Classificação por Valor Financeiro - Princípio de Pareto)',
        content: `A Curva ABC agrupa os itens do estoque de acordo com o seu VALOR MONETÁRIO DE CONSUMO anual (baseada na regra 80-20 de Vilfredo Pareto):

• CLASSE A (Alta relevância financeira):
  - Poucos itens em quantidade física (~10% a 20% do estoque), mas que representam a MAIOR PARTE DO VALOR FINANCEIRO (~70% a 80% do investimento total).
  - Exige controle rígido e diário, contagens frequentes e compras sob demanda para não imobilizar capital.

• CLASSE B (Média relevância financeira):
  - Quantidade intermediária de itens (~30% do estoque) representando valor intermediário (~15% a 20% do valor total).
  - Controle padrão.

• CLASSE C (Baixa relevância financeira):
  - Grande quantidade de itens físicos (~50% a 60% do total de itens), mas que representam uma FATIA MÍNIMA DO VALOR (~5% a 10% do dinheiro investido).
  - Exemplos: clipes, canetas, borrachas. O controle é simples e por lote para não gastar tempo administrativo precioso.`
      },
      {
        title: '2. A Classificação XYZ (Classificação por Criticidade Operacional)',
        content: `Enquanto a Curva ABC olha para o DINHEIRO, a classificação XYZ avalia a VITALIDADE / GRAU DE IMPORTÂNCIA do material para a operação:

• Classe X (Baixa Criticidade): Materiais de fácil obtenção no mercado local. A falta não paralisa nenhuma atividade essencial do hospital ou da universidade.
• Classe Y (Média Criticidade): Materiais importantes, mas que admitem itens substitutos ou têm fornecimento razoável.
• Classe Z (Máxima Criticidade / Imprescindíveis): Materiais cuja falta provoca PARALISAÇÃO IMEDIATA de atividades vitais, risco à vida ou graves prejuízos operacionais. Não possuem substitutos imediatos (ex: reagentes raros de laboratório, peças de manutenção de tomógrafos universitários).`
      },
      {
        title: '3. Parâmetros de Gestão: Ponto de Pedido e Tipos de Inventário',
        content: `• Ponto de Pedido (PP): É o nível de estoque que, ao ser atingido, aciona automaticamente uma nova ordem de compra para que o novo lote chegue antes do estoque acabar:
  PP = (Consumo Médio Diário × Tempo de Reposição) + Estoque Mínimo.
• Inventário Físico:
  - Rotativo (Contínuo): Os itens são contados aos poucos ao longo do ano de acordo com sua classe (itens Classe A são contados mensalmente; Classe C uma vez por ano). Não exige paralisação das atividades da repartição!
  - Periódico (Geral): Contagem de 100% dos itens do almoxarifado de uma só vez no encerramento do exercício contábil (exige paralisação do atendimento).`
      }
    ],
    bizus: [
      'Curva ABC = Dinheiro! Classe A: poucos itens (20%) que custam muito (80%). Classe C: muitos itens (50%) que custam quase nada (5%).',
      'Classificação XYZ = Criticidade! Classe Z é vital, se faltar para o hospital ou o laboratório da UFBA.',
      'Inventário rotativo conta aos poucos sem parar a instituição; inventário periódico para tudo para contar no fim do ano.'
    ]
  }
];
