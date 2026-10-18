import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Sparkles, 
  Copy, 
  Check, 
  Bug, 
  CheckCircle2, 
  AlertTriangle,
  Layers,
  ChevronRight,
  ShieldCheck,
  Terminal
} from 'lucide-react';

export const LabPraticoMode: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'bugs' | 'clinica' | 'normalizacao'>('bugs');
  const [selectedBugId, setSelectedBugId] = useState<string>('bug-1');
  const [revealedBugs, setRevealedBugs] = useState<Record<string, boolean>>({});
  const [copiedSQL, setCopiedSQL] = useState<boolean>(false);

  const toggleRevealBug = (id: string) => {
    setRevealedBugs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const BUGS_DATA = [
    {
      id: 'bug-1',
      title: 'Conversor de Temperatura',
      subtitle: 'Divisão Inteira em Java',
      topic: 'Expressões Aritméticas',
      brokenCode: `public class ConversorTemperatura {
    public double celsiusParaFahrenheit(double celsius) {
        // BUG: 9 e 5 são int. (9 / 5) é avaliado como 1!
        return celsius * (9 / 5) + 32; 
    }
}`,
      explanation: 'Em Java, a divisão de dois inteiros literais (9 / 5) trunca as casas decimais e resulta no número inteiro 1. Logo, a expressão executada torna-se `celsius * 1 + 32`. Para 100°C, o método retorna 132.0 em vez dos 212.0 esperados!',
      fixedCode: `public class ConversorTemperatura {
    public double celsiusParaFahrenheit(double celsius) {
        // CORREÇÃO: Forçar ponto flutuante usando literais double
        return celsius * (9.0 / 5.0) + 32; 
    }
}`,
      junitTest: `@Test
void deveConverter100CelsiusPara212Fahrenheit() {
    ConversorTemperatura conv = new ConversorTemperatura();
    // Delta de tolerância 0.01 exigido para double no JUnit 5
    assertEquals(212.0, conv.celsiusParaFahrenheit(100.0), 0.01);
}`
    },
    {
      id: 'bug-2',
      title: 'Cálculo de Fatorial',
      subtitle: 'Inicialização Incorreta do Acumulador',
      topic: 'Laços & Inicialização',
      brokenCode: `public class CalculadoraFatorial {
    public int calcular(int n) {
        if (n < 0) throw new IllegalArgumentException("Número deve ser >= 0");
        int fat = 0; // BUG: Inicializado com zero!
        for (int i = 1; i <= n; i++) {
            fat *= i; // Qualquer número multiplicado por zero dá zero!
        }
        return fat;
    }
}`,
      explanation: 'Para acumular produtos sucessivos, a variável acumuladora deve começar no elemento neutro da multiplicação, que é 1. Ao iniciar com `fat = 0`, cada iteração calcula `0 * i = 0`, retornando 0 para qualquer número.',
      fixedCode: `public class CalculadoraFatorial {
    public int calcular(int n) {
        if (n < 0) throw new IllegalArgumentException("Número deve ser >= 0");
        int fat = 1; // CORREÇÃO: Elemento neutro da multiplicação
        for (int i = 1; i <= n; i++) {
            fat *= i;
        }
        return fat;
    }
}`,
      junitTest: `@Test
void deveRetornar120ParaFatorialDe5() {
    CalculadoraFatorial calc = new CalculadoraFatorial();
    assertEquals(120, calc.calcular(5));
}`
    },
    {
      id: 'bug-3',
      title: 'Validador de Senha Forte',
      subtitle: 'Erro de Fronteira (Off-by-One)',
      topic: 'Análise de Limite em Laços',
      brokenCode: `public class ValidadorSenha {
    public boolean isSenhaForte(String senha) {
        if (senha == null || senha.length() < 8) return false;
        
        boolean temNumero = false;
        // BUG: senha.length() - 1 faz o laço parar antes do último caractere!
        for (int i = 0; i < senha.length() - 1; i++) {
            if (Character.isDigit(senha.charAt(i))) {
                temNumero = true;
                break;
            }
        }
        return temNumero;
    }
}`,
      explanation: 'Como a condição é `i < senha.length() - 1`, o último caractere da string nunca é avaliado. Se o único dígito da senha estiver na última posição (ex: "SenhaForte1"), o método retorna false erroneamente.',
      fixedCode: `public class ValidadorSenha {
    public boolean isSenhaForte(String senha) {
        if (senha == null || senha.length() < 8) return false;
        
        boolean temNumero = false;
        // CORREÇÃO: Avalia todos os índices de 0 até length - 1
        for (int i = 0; i < senha.length(); i++) {
            if (Character.isDigit(senha.charAt(i))) {
                temNumero = true;
                break;
            }
        }
        return temNumero;
    }
}`,
      junitTest: `@Test
void deveAceitarSenhaComDigitoNaUltimaPosicao() {
    ValidadorSenha val = new ValidadorSenha();
    // Teste de valor limite com o dígito no final:
    assertTrue(val.isSenhaForte("SenhaForte1"));
}`
    },
    {
      id: 'bug-4',
      title: 'Identificador de Ano Bissexto',
      subtitle: 'Regra dos Múltiplos de 400 Esquecida',
      topic: 'Condições Lógicas Compostas',
      brokenCode: `public class Calendario {
    public boolean isBissexto(int ano) {
        if (ano % 4 == 0) {
            if (ano % 100 == 0) {
                // BUG: Anos múltiplos de 100 NÃO são bissextos,
                // A MENOS que também sejam múltiplos de 400!
                return false; 
            }
            return true;
        }
        return false;
    }
}`,
      explanation: 'O ano 2000 foi bissexto porque é divisível por 400. O código acima cai na condição `ano % 100 == 0` e retorna false imediatamente, violando a regra astronômica e do calendário gregoriano.',
      fixedCode: `public class Calendario {
    public boolean isBissexto(int ano) {
        // CORREÇÃO: Divisível por 400 OU (divisível por 4 e NÃO por 100)
        return (ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0);
    }
}`,
      junitTest: `@Test
void ano2000DeveSerBissexto() {
    Calendario cal = new Calendario();
    assertTrue(cal.isBissexto(2000), "Ano 2000 é múltiplo de 400, logo é bissexto!");
}`
    },
    {
      id: 'bug-5',
      title: 'Regras Acadêmicas (Projeto do Lab)',
      subtitle: 'Divisão por Contagem de Registros em Média Ponderada',
      topic: 'RegraAcademicaService.java',
      brokenCode: `public double calcularCR(List<MatriculaDisciplina> historico) {
    double somaNotasComPeso = 0;
    int totalCreditos = 0;

    for (MatriculaDisciplina m : historico) {
        double notaFinal = (m.getNota1() + m.getNota2()) / 2.0;
        somaNotasComPeso += notaFinal * m.getCreditos();
        totalCreditos += m.getCreditos();
    }

    // BUG NO CÓDIGO DO PROFESSOR:
    // Está dividindo por historico.size() em vez de totalCreditos!
    return somaNotasComPeso / historico.size(); 
}`,
      explanation: 'A fórmula do Coeficiente de Rendimento (CR) Ponderado exige que a soma das notas ponderadas pelos créditos seja dividida pelo SOMATÓRIO TOTAL DE CRÉDITOS, e não pela quantidade de matérias cursadas.',
      fixedCode: `public double calcularCR(List<MatriculaDisciplina> historico) {
    if (historico == null || historico.isEmpty()) return 0.0;
    
    double somaNotasComPeso = 0;
    int totalCreditos = 0;

    for (MatriculaDisciplina m : historico) {
        double notaFinal = (m.getNota1() + m.getNota2()) / 2.0;
        somaNotasComPeso += notaFinal * m.getCreditos();
        totalCreditos += m.getCreditos();
    }

    // CORREÇÃO: Dividir pelo total de créditos
    return totalCreditos > 0 ? (somaNotasComPeso / totalCreditos) : 0.0;
}`,
      junitTest: `@Test
void deveCalcularCRPonderadoDividindoPorTotalDeCreditos() {
    RegraAcademicaService service = new RegraAcademicaService();
    // Disc A: Nota 10, 4 créditos | Disc B: Nota 8, 2 créditos
    // CR Esperado = (10*4 + 8*2) / (4+2) = (40 + 16) / 6 = 56 / 6 = 9.33
    // Com o bug dividiria por 2 dando 28.0!
    assertEquals(9.33, service.calcularCR(historicoExemplo), 0.01);
}`
    }
  ];

  const CLINICA_SQL = `-- CRIAÇÃO DO BANCO DE DADOS
CREATE DATABASE IF NOT EXISTS clinica_veterinaria;
USE clinica_veterinaria;

-- 1. TABELA TUTOR
CREATE TABLE tutor (
    id_tutor INT AUTO_INCREMENT PRIMARY KEY,
    cpf VARCHAR(14) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    endereco VARCHAR(200),
    telefone VARCHAR(20) NOT NULL
);

-- 2. TABELA ANIMAL (1 Tutor -> N Animais)
CREATE TABLE animal (
    id_animal INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(80) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    raca VARCHAR(50),
    data_nascimento DATE,
    id_tutor INT NOT NULL,
    CONSTRAINT fk_animal_tutor FOREIGN KEY (id_tutor) 
        REFERENCES tutor(id_tutor) 
        ON DELETE RESTRICT ON UPDATE CASCADE
);

-- 3. TABELA VETERINARIO
CREATE TABLE veterinario (
    id_veterinario INT AUTO_INCREMENT PRIMARY KEY,
    crmv VARCHAR(20) NOT NULL UNIQUE,
    nome VARCHAR(100) NOT NULL,
    especialidade VARCHAR(80)
);

-- 4. TABELA CONSULTA (Resolve a relação N:N com atributos da transação)
CREATE TABLE consulta (
    id_consulta INT AUTO_INCREMENT PRIMARY KEY,
    data_consulta DATE NOT NULL,
    horario TIME NOT NULL,
    motivo VARCHAR(255) NOT NULL,
    diagnostico TEXT NULL, -- Aceita NULL até que a consulta seja finalizada
    valor_cobrado DECIMAL(10,2) NOT NULL, -- Precisão financeira
    id_animal INT NOT NULL,
    id_veterinario INT NOT NULL,
    CONSTRAINT fk_consulta_animal FOREIGN KEY (id_animal) 
        REFERENCES animal(id_animal) 
        ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT fk_consulta_veterinario FOREIGN KEY (id_veterinario) 
        REFERENCES veterinario(id_veterinario) 
        ON DELETE RESTRICT ON UPDATE CASCADE
);`;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedSQL(true);
    setTimeout(() => setCopiedSQL(false), 2000);
  };

  const selectedBug = BUGS_DATA.find(b => b.id === selectedBugId) || BUGS_DATA[0];
  const isSelectedBugRevealed = !!revealedBugs[selectedBug.id];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 space-y-8">
      
      {/* CABEÇALHO */}
      <div className="bg-slate-900 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-full text-xs font-bold mb-3">
              <Terminal className="w-4 h-4" />
              <span>Laboratório Prático UNIFACS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Oficina Prática de Código & Banco
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Desafios reais com os códigos do Prof. Enderson (Lab 22) e a modelagem da Clínica do Prof. Luiz Henrique (Lab 235).
            </p>
          </div>

          {/* ABAS DO LABORATÓRIO */}
          <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveSubTab('bugs')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'bugs'
                  ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Bug className="w-4 h-4" />
              <span>Ache o Bug (Java)</span>
            </button>

            <button
              onClick={() => setActiveSubTab('clinica')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'clinica'
                  ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Clínica Vet & SQL</span>
            </button>

            <button
              onClick={() => setActiveSubTab('normalizacao')}
              className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeSubTab === 'normalizacao'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>1FN, 2FN e 3FN</span>
            </button>
          </div>
        </div>
      </div>

      {/* ABA 1: ACHE O BUG EM JAVA */}
      {activeSubTab === 'bugs' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* LISTA LATERAL DE CÓDIGOS */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 px-2">
              Códigos dos Exercícios do Prof. Enderson:
            </span>
            {BUGS_DATA.map((bug) => {
              const isSelected = bug.id === selectedBugId;
              const isRevealed = revealedBugs[bug.id];
              return (
                <button
                  key={bug.id}
                  onClick={() => setSelectedBugId(bug.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'bg-slate-800 border-indigo-500/80 shadow-lg shadow-indigo-500/10'
                      : 'bg-slate-900/60 border-slate-800 hover:bg-slate-800/60 hover:border-slate-700'
                  }`}
                >
                  <div className="space-y-1 pr-2">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-white">{bug.title}</span>
                      {isRevealed && (
                        <span className="px-1.5 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] rounded font-mono">
                          Resolvido
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-400">{bug.subtitle}</p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-indigo-400 translate-x-1' : 'text-slate-600'}`} />
                </button>
              );
            })}
          </div>

          {/* ÁREA DE ANÁLISE DO CÓDIGO SELECIONADO */}
          <div className="lg:col-span-8 space-y-6">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4">
                <div>
                  <span className="px-2.5 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/30 text-xs font-bold rounded-lg">
                    {selectedBug.topic}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-2">{selectedBug.title}</h3>
                  <p className="text-xs text-slate-400">{selectedBug.subtitle}</p>
                </div>

                <button
                  onClick={() => toggleRevealBug(selectedBug.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md ${
                    isSelectedBugRevealed
                      ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
                      : 'bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white shadow-rose-600/30 animate-bounce'
                  }`}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{isSelectedBugRevealed ? 'Ocultar Resposta' : '💡 Onde está o Bug?'}</span>
                </button>
              </div>

              {/* CÓDIGO COM DEFEITO */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-rose-400 flex items-center space-x-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>Código com Defeito Proposital:</span>
                </span>
                <pre className="bg-slate-950 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-rose-200 overflow-x-auto leading-relaxed">
                  <code>{selectedBug.brokenCode}</code>
                </pre>
              </div>

              {/* EXPLICAÇÃO & CORREÇÃO REVELADA */}
              {isSelectedBugRevealed && (
                <div className="space-y-4 pt-2 animate-fadeIn">
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl space-y-2 text-xs">
                    <span className="font-bold text-emerald-400 flex items-center space-x-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Diagnóstico Clínico do Bug:</span>
                    </span>
                    <p className="text-slate-300 leading-relaxed">{selectedBug.explanation}</p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-emerald-400 flex items-center space-x-1.5">
                      <Code2 className="w-3.5 h-3.5" />
                      <span>Código Corrigido:</span>
                    </span>
                    <pre className="bg-slate-950 p-4 rounded-2xl border border-emerald-500/30 font-mono text-xs text-emerald-300 overflow-x-auto leading-relaxed">
                      <code>{selectedBug.fixedCode}</code>
                    </pre>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-indigo-400 flex items-center space-x-1.5">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Teste Automatizado no JUnit 5:</span>
                    </span>
                    <pre className="bg-slate-950 p-4 rounded-2xl border border-indigo-500/30 font-mono text-xs text-indigo-200 overflow-x-auto leading-relaxed">
                      <code>{selectedBug.junitTest}</code>
                    </pre>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      )}

      {/* ABA 2: CLÍNICA VETERINÁRIA & SQL */}
      {activeSubTab === 'clinica' && (
        <div className="space-y-8">
          
          {/* MAPA DAS CARDINALIDADES */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Database className="w-6 h-6 text-emerald-400" />
              <span>Modelagem Relacional da Clínica Veterinária (Slide da Aula)</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <span className="px-2 py-0.5 bg-indigo-500/20 text-indigo-400 text-xs font-bold rounded">1:N (Um para Muitos)</span>
                <h4 className="font-bold text-slate-200 text-sm">Tutor ➡️ Animal</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  1 Tutor pode cadastrar <strong>vários animais</strong>. Cada animal tem <strong>apenas 1 tutor</strong>. A PK <code className="text-indigo-300">id_tutor</code> vai para a tabela <code className="text-indigo-300">animal</code> como Chave Estrangeira (FK).
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-xs font-bold rounded">1:N (Um para Muitos)</span>
                <h4 className="font-bold text-slate-200 text-sm">Animal ➡️ Consulta</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  1 Animal realiza <strong>várias consultas</strong>. Cada consulta pertence a <strong>apenas 1 animal</strong>. A FK <code className="text-emerald-300">id_animal</code> vai para <code className="text-emerald-300">consulta</code>.
                </p>
              </div>

              <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 space-y-2">
                <span className="px-2 py-0.5 bg-amber-500/20 text-amber-400 text-xs font-bold rounded">1:N (Um para Muitos)</span>
                <h4 className="font-bold text-slate-200 text-sm">Veterinário ➡️ Consulta</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  1 Veterinário realiza <strong>várias consultas</strong>. Cada consulta é feita por <strong>1 veterinário</strong>. A FK <code className="text-amber-300">id_veterinario</code> vai para <code className="text-amber-300">consulta</code>.
                </p>
              </div>
            </div>

            {/* PEGADINHAS DO SLIDE */}
            <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-amber-400 flex items-center space-x-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Pegadinhas Cruciais da Especificação do Professor:</span>
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-300">
                <li><strong>Diagnóstico opcional:</strong> A especificação diz que a consulta pode estar em andamento sem diagnóstico. Logo, a coluna <code className="text-amber-300 font-bold">diagnostico TEXT NULL</code> aceita nulo!</li>
                <li><strong>Valores Financeiros:</strong> NUNCA use FLOAT em dinheiro. Use sempre <code className="text-amber-300 font-bold">valor_cobrado DECIMAL(10,2) NOT NULL</code>.</li>
                <li><strong>Nomes repetidos:</strong> Animais diferentes podem ter o mesmo nome (ex: dois 'Rex'). Por isso, o nome NUNCA pode ser chave única nem PK.</li>
              </ul>
            </div>
          </div>

          {/* SCRIPT DDL COMPLETO */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">Script SQL DDL Pronto (MySQL)</h4>
                <p className="text-xs text-slate-400">Pronto para colar e executar no MySQL Workbench.</p>
              </div>

              <button
                onClick={() => copyToClipboard(CLINICA_SQL)}
                className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                  copiedSQL 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30'
                }`}
              >
                {copiedSQL ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedSQL ? 'Copiado!' : 'Copiar Script SQL'}</span>
              </button>
            </div>

            <pre className="bg-slate-950 p-5 rounded-2xl border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
              <code>{CLINICA_SQL}</code>
            </pre>
          </div>

        </div>
      )}

      {/* ABA 3: NORMALIZAÇÃO 1FN, 2FN, 3FN */}
      {activeSubTab === 'normalizacao' && (
        <div className="space-y-6">
          
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2">
              <Layers className="w-6 h-6 text-indigo-400" />
              <span>Regras de Ouro das Três Formas Normais</span>
            </h3>

            {/* 1FN */}
            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 bg-indigo-500/20 text-indigo-300 font-bold text-xs rounded-lg">1FN</span>
                <h4 className="font-bold text-white text-base">Primeira Forma Normal — Atomicidade</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Nenhuma coluna pode guardar múltiplos valores separados por vírgula (como vários telefones numa célula só) nem campos repetidos (<code className="text-indigo-300">tel1, tel2</code>). Cada valor deve ser indivisível (atômico) e a tabela deve possuir uma Chave Primária (PK).
              </p>
              <div className="text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400">
                <strong className="text-indigo-400">Como resolver no exame:</strong> Quebre a coluna de múltiplos valores em linhas separadas ou crie uma tabela filha ligada por Chave Estrangeira (<code className="text-indigo-300">cliente_telefone(id_cliente, telefone)</code>).
              </div>
            </div>

            {/* 2FN */}
            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 bg-emerald-500/20 text-emerald-300 font-bold text-xs rounded-lg">2FN</span>
                <h4 className="font-bold text-white text-base">Segunda Forma Normal — Fim da Dependência Parcial</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estar na 1FN <strong>E</strong> todos os atributos não-chave devem depender da Chave Primária <strong>INTEIRA</strong>. Só se aplica quando a tabela tem <strong>PK COMPOSTA</strong> (duas ou mais colunas formando a chave). Se a PK é simples, ela já está na 2FN!
              </p>
              <div className="text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400">
                <strong className="text-emerald-400">Exemplo clássico:</strong> Tabela <code className="text-emerald-300">Matricula(id_aluno, id_disciplina, nome_aluno, nota)</code>. A coluna <code className="text-emerald-300">nome_aluno</code> depende só de <code className="text-emerald-300">id_aluno</code> (dependência parcial). Solução: Mover <code className="text-emerald-300">nome_aluno</code> para a tabela Aluno.
              </div>
            </div>

            {/* 3FN */}
            <div className="p-5 bg-slate-950 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-1 bg-amber-500/20 text-amber-300 font-bold text-xs rounded-lg">3FN</span>
                <h4 className="font-bold text-white text-base">Terceira Forma Normal — Fim da Dependência Transitiva</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Estar na 2FN <strong>E</strong> nenhum atributo não-chave pode depender de outro atributo que também não é chave (<code className="text-amber-300">A ➔ B ➔ C</code>).
              </p>
              <div className="text-xs bg-slate-900 p-3 rounded-xl border border-slate-800 text-slate-400">
                <strong className="text-amber-400">Exemplo clássico:</strong> Tabela <code className="text-amber-300">Funcionario(id_func PK, nome, id_depto, nome_depto, ramal)</code>. O nome e ramal do departamento dependem de <code className="text-amber-300">id_depto</code> (que não é a chave da tabela). Solução: Criar a tabela Departamento e manter apenas o <code className="text-amber-300">id_depto</code> como FK no Funcionário.
              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};
