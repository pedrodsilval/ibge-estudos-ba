import React from 'react';
import { 
  Printer, 
  ShieldCheck, 
  BookOpen, 
  CheckCircle2, 
  FileText
} from 'lucide-react';

export const FichasImpressaoMode: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 animate-fadeIn print:p-0 print:m-0 print:max-w-full">
      
      {/* BARRA SUPERIOR DE AÇÃO (OCULTA NA IMPRESSÃO) */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
        <div>
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-amber-500/10 border border-amber-500/30 text-amber-300 rounded-full text-xs font-bold mb-2">
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Material de Revisão Offline & Imprimível</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            Fichas de Bolso e Tabelas de Prazos (UFBA 2026)
          </h2>
          <p className="text-xs text-slate-400 max-w-xl">
            Resumos ultracompactos formatados para leitura rápida ou para imprimir em folha A4 com caneta marca-texto antes de dormir.
          </p>
        </div>

        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-white font-extrabold text-sm rounded-2xl shadow-xl shadow-indigo-600/30 flex items-center space-x-2 transition-all hover:scale-105 shrink-0"
        >
          <Printer className="w-4 h-4" />
          <span>Imprimir / Salvar em PDF</span>
        </button>
      </div>

      {/* ÁREA IMPRIMÍVEL (FORMATO A4 CLEAN) */}
      <div className="space-y-6 print:space-y-4 print:text-black">
        
        {/* CABEÇALHO DE IMPRESSÃO */}
        <div className="border-b-2 border-slate-700 print:border-black pb-4 text-center">
          <h1 className="text-2xl font-black text-white print:text-black">
            UNIVERSIDADE FEDERAL DA BAHIA • CONCURSO PÚBLICO 2026
          </h1>
          <p className="text-sm font-bold text-indigo-400 print:text-gray-800">
            Cargo 201: Assistente em Administração • Fichas Mnemônicas de Reta Final (Gilvania)
          </p>
        </div>

        {/* FICHA 1: TABELA MESTRA DE PRAZOS DA LEI 8.112/1990 */}
        <div className="bg-slate-900 print:bg-white border border-slate-800 print:border-gray-400 rounded-2xl p-5 print:p-3 shadow-md space-y-3">
          <div className="flex items-center space-x-2 text-amber-400 print:text-black font-extrabold text-base border-b border-slate-800 print:border-gray-300 pb-2">
            <ShieldCheck className="w-5 h-5 print:hidden" />
            <span>1. TABELA MESTRA DE PRAZOS: LEI Nº 8.112/1990 (RJU FEDERAL)</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse print:text-black">
              <thead>
                <tr className="bg-slate-950 print:bg-gray-200 text-slate-300 print:text-black border-b border-slate-800 print:border-gray-400">
                  <th className="p-2.5 font-bold">Ato / Fase</th>
                  <th className="p-2.5 font-bold">Prazo Legal</th>
                  <th className="p-2.5 font-bold">Consequência do Não Cumprimento</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 print:divide-gray-300 text-slate-300 print:text-black">
                <tr>
                  <td className="p-2.5 font-bold text-white print:text-black">Nomeação ➔ Posse</td>
                  <td className="p-2.5 font-mono font-bold text-amber-300 print:text-black">30 DIAS (improrrogável)</td>
                  <td className="p-2.5">O ato de nomeação é tornado <strong>SEM EFEITO</strong>.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white print:text-black">Posse ➔ Exercício</td>
                  <td className="p-2.5 font-mono font-bold text-emerald-300 print:text-black">15 DIAS (improrrogável)</td>
                  <td className="p-2.5">O servidor empossado é <strong>EXONERADO</strong> (de ofício).</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white print:text-black">Estabilidade</td>
                  <td className="p-2.5 font-mono font-bold text-cyan-300 print:text-black">3 ANOS de efetivo exercício</td>
                  <td className="p-2.5">Exige aprovação em <strong>Avaliação Especial de Desempenho</strong>.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white print:text-black">Prescrição: Advertência</td>
                  <td className="p-2.5 font-mono font-bold text-indigo-300 print:text-black">180 DIAS</td>
                  <td className="p-2.5">Extinção da punibilidade disciplinar.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white print:text-black">Prescrição: Suspensão</td>
                  <td className="p-2.5 font-mono font-bold text-indigo-300 print:text-black">2 ANOS (suspensão até 90 dias)</td>
                  <td className="p-2.5">Extinção da punibilidade disciplinar.</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-bold text-white print:text-black">Prescrição: Demissão</td>
                  <td className="p-2.5 font-mono font-bold text-rose-300 print:text-black">5 ANOS</td>
                  <td className="p-2.5">Aplica-se a demissão, cassação de aposentadoria e destituição.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="p-2.5 bg-slate-950 print:bg-gray-100 rounded-xl text-xs text-amber-300 print:text-black font-semibold">
            💡 Mnemônico do Provimento (PANRRRA): Promoção, Aproveitamento, Nomeação (única originária!), Readaptação, Recondução, Reintegração e Reversão.
          </div>
        </div>

        {/* FICHA 2: ESTRUTURA DELIBERATIVA DA UFBA (CONSUNI vs CONSEPE vs CURADORES) */}
        <div className="bg-slate-900 print:bg-white border border-slate-800 print:border-gray-400 rounded-2xl p-5 print:p-3 shadow-md space-y-3">
          <div className="flex items-center space-x-2 text-cyan-400 print:text-black font-extrabold text-base border-b border-slate-800 print:border-gray-300 pb-2">
            <BookOpen className="w-5 h-5 print:hidden" />
            <span>2. ESTRUTURA DOS ÓRGÃOS DE CÚPULA DA UFBA (ESTATUTO)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs print:grid-cols-3">
            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1">
              <span className="font-black text-amber-300 print:text-black text-sm block">CONSUNI</span>
              <span className="font-bold text-white print:text-black">Conselho Universitário</span>
              <p className="text-slate-300 print:text-black leading-relaxed">
                <strong>Órgão Supremo e Soberano</strong> de deliberação coletiva e supervisão geral. Fixa a política universitária, aprova o PDI, delibera sobre o estatuto e aprova lista tríplice.
              </p>
            </div>

            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1">
              <span className="font-black text-cyan-300 print:text-black text-sm block">CONSEPE</span>
              <span className="font-bold text-white print:text-black">Conselho de Ensino, Pesquisa e Extensão</span>
              <p className="text-slate-300 print:text-black leading-relaxed">
                <strong>Órgão Superior Acadêmico</strong> de deliberação didático-científica. Cuida dos currículos, calendários letivos, normas pedagógicas e projetos de extensão.
              </p>
            </div>

            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1">
              <span className="font-black text-emerald-300 print:text-black text-sm block">Conselho de Curadores</span>
              <span className="font-bold text-white print:text-black">Fiscalização Financeira</span>
              <p className="text-slate-300 print:text-black leading-relaxed">
                <strong>Órgão Superior Fiscalizador</strong> econômico, financeiro, contábil e patrimonial. Analisa as contas anuais, balanços e a destinação de bens da universidade.
              </p>
            </div>
          </div>
        </div>

        {/* FICHA 3: LÍNGUA PORTUGUESA & REDAÇÃO OFICIAL */}
        <div className="bg-slate-900 print:bg-white border border-slate-800 print:border-gray-400 rounded-2xl p-5 print:p-3 shadow-md space-y-3">
          <div className="flex items-center space-x-2 text-indigo-400 print:text-black font-extrabold text-base border-b border-slate-800 print:border-gray-300 pb-2">
            <FileText className="w-5 h-5 print:hidden" />
            <span>3. LÍNGUA PORTUGUESA & REDAÇÃO OFICIAL (MANUAL DA PR 3ª ED.)</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1.5">
              <span className="font-bold text-amber-300 print:text-black block text-sm">Regras de Ouro da Crase:</span>
              <p className="text-slate-300 print:text-black">
                • <strong>Troca Prática:</strong> Troque a palavra feminina por masculina. Se virar <em>AO</em>, crase no A! (Fui à praia = Fui ao parque).<br/>
                • <strong>Proibida:</strong> Antes de verbo (a partir), palavra masculina (a pé, a prazo), pronomes de tratamento e entre palavras repetidas.<br/>
                • <strong>Facultativa (Até Minha Maria):</strong> Após "até", antes de possessivo feminino singular (minha/sua) e antes de nome próprio feminino.
              </p>
            </div>

            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1.5">
              <span className="font-bold text-indigo-300 print:text-black block text-sm">Fechos de Correspondência Oficial:</span>
              <p className="text-slate-300 print:text-black">
                • <strong>Respeitosamente,</strong> ➔ Apenas para autoridades de hierarquia SUPERIOR (inclui Presidente e Reitor).<br/>
                • <strong>Atenciosamente,</strong> ➔ Para autoridades de MESMA hierarquia ou hierarquia INFERIOR.<br/>
                • <em>Atenção:</em> "Cordialmente", "Saudações" e fórmulas arcaicas foram completamente EXTINTAS.
              </p>
            </div>
          </div>
        </div>

        {/* FICHA 4: CONHECIMENTOS ESPECÍFICOS & INFORMÁTICA */}
        <div className="bg-slate-900 print:bg-white border border-slate-800 print:border-gray-400 rounded-2xl p-5 print:p-3 shadow-md space-y-3">
          <div className="flex items-center space-x-2 text-emerald-400 print:text-black font-extrabold text-base border-b border-slate-800 print:border-gray-300 pb-2">
            <CheckCircle2 className="w-5 h-5 print:hidden" />
            <span>4. GESTÃO DE MATERIAIS, ARQUIVOLOGIA & EXCEL</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1">
              <span className="font-bold text-emerald-300 print:text-black block">Curva ABC vs XYZ:</span>
              <p className="text-slate-300 print:text-black">
                • <strong>Curva ABC (Pareto):</strong> Mede VALOR FINANCEIRO (Classe A = 20% peças, 80% custo).<br/>
                • <strong>Classificação XYZ:</strong> Mede CRITICIDADE (Classe Z = vital, se faltar para a universidade).
              </p>
            </div>

            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1">
              <span className="font-bold text-cyan-300 print:text-black block">Teoria das 3 Idades:</span>
              <p className="text-slate-300 print:text-black">
                • <strong>1ª Corrente:</strong> Em uso constante.<br/>
                • <strong>2ª Intermediário:</strong> Aguarda prazos.<br/>
                • <strong>3ª Permanente:</strong> Histórico/definitivo. <strong>NUNCA PODE SER ELIMINADO!</strong>
              </p>
            </div>

            <div className="p-3 bg-slate-950 print:bg-gray-100 rounded-xl border border-slate-800 print:border-gray-300 space-y-1">
              <span className="font-bold text-amber-300 print:text-black block">Excel 365 & Segurança:</span>
              <p className="text-slate-300 print:text-black">
                • <strong>Cifrão ($):</strong> Trava linha e coluna ($A$1).<br/>
                • <strong>PROCV exato:</strong> 4º parâmetro = FALSO ou 0.<br/>
                • <strong>Worm vs Vírus:</strong> Worm anda sozinho pela rede sem hospedeiro. Ransomware sequestra com cripto.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
