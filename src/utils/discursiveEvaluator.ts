import type { DiscursiveQuestion } from '../types/study';

export interface EvaluationResult {
  matchedKeywords: string[];
  missingKeywords: string[];
  coveragePercent: number;
  wordCount: number;
  suggestedScore: number; // 0.0 a 10.0
  scoreTier: 'excellent' | 'good' | 'average' | 'insufficient';
  scoreTitle: string;
  pedagogicalFeedback: string;
  strengths: string[];
  improvements: string[];
}

const STOPWORDS = new Set([
  'a', 'o', 'as', 'os', 'um', 'uma', 'uns', 'umas',
  'de', 'da', 'do', 'das', 'dos', 'em', 'na', 'no', 'nas', 'nos',
  'por', 'para', 'pra', 'com', 'sem', 'e', 'ou', 'se', 'que',
  'como', 'mais', 'menos', 'onde', 'qual', 'quais', 'cada', 'tudo',
  'sobre', 'isso', 'esse', 'essa', 'estes', 'estas', 'aquele', 'aquela',
  'pelo', 'pela', 'pelos', 'pelas', 'sao', 'ser', 'foi', 'eram', 'tem', 'ter'
]);

const GENERIC_WORDS = new Set([
  'atividade', 'sistema', 'processo', 'forma', 'caso', 'exemplo',
  'teste', 'testes', 'diferenca', 'revisao', 'fase', 'etapa',
  'dados', 'banco', 'software', 'codigo', 'item', 'funcao'
]);

export function normalizeText(text: string): string {
  if (!text) return '';
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s]/g, ' ')   // remove pontuação
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Avalia se um conceito/palavra-chave chave está presente no texto do estudante.
 */
export function checkKeywordMatch(keyword: string, userText: string): boolean {
  const normText = normalizeText(userText);
  if (!normText) return false;

  // Quebra a linha de palavra-chave em fragmentos conceituais usando separadores
  const rawChunks = keyword.split(/[/,:()\-•]+/);
  
  for (const chunk of rawChunks) {
    const normChunk = normalizeText(chunk);
    if (!normChunk) continue;

    const words = normChunk.split(' ').filter(w => !STOPWORDS.has(w) && w.length > 2);
    if (words.length === 0) continue;

    // 1. Testa a frase inteira se tiver 2 ou mais palavras
    const phrase = words.join(' ');
    if (phrase.length >= 4 && normText.includes(phrase)) {
      return true;
    }

    // 2. Testa termos específicos compostos ou números (ex: "3 a 5", "2h", "1fn", "v(g)")
    if (/\d/.test(normChunk)) {
      const numbersInChunk: string[] = normChunk.match(/\d+/g) || [];
      const numbersInText: string[] = normText.match(/\d+/g) || [];
      const hasNumberMatch = numbersInChunk.some((n: string) => numbersInText.includes(n));
      if (hasNumberMatch && words.some(w => normText.includes(w))) {
        return true;
      }
    }

    // 3. Testa palavras técnicas específicas de alta relevância (mínimo 4 caracteres e não genéricas)
    const specificWords = words.filter(w => !GENERIC_WORDS.has(w) && w.length >= 4);
    for (const sw of specificWords) {
      // Correspondência exata da palavra ou radical/prefixo de pelo menos 5 letras
      if (normText.includes(sw)) {
        return true;
      }
      if (sw.length >= 5 && normText.includes(sw.slice(0, 5))) {
        return true;
      }
    }
  }

  return false;
}

/**
 * Realiza a avaliação inteligente completa de uma resposta discursiva.
 */
export function evaluateDiscursiveAnswer(
  draft: string,
  question: DiscursiveQuestion
): EvaluationResult {
  const trimmed = (draft || '').trim();
  const wordCount = trimmed ? trimmed.split(/\s+/).length : 0;

  if (wordCount === 0) {
    return {
      matchedKeywords: [],
      missingKeywords: [...question.keywords],
      coveragePercent: 0,
      wordCount: 0,
      suggestedScore: 0,
      scoreTier: 'insufficient',
      scoreTitle: 'Resposta em Branco',
      pedagogicalFeedback: 'Digite sua resposta no campo acima para que o corretor inteligente possa avaliar seu desempenho.',
      strengths: [],
      improvements: question.keywords.slice(0, 3).map(k => `Incluir: ${k}`)
    };
  }

  const matchedKeywords: string[] = [];
  const missingKeywords: string[] = [];

  for (const kw of question.keywords) {
    if (checkKeywordMatch(kw, draft)) {
      matchedKeywords.push(kw);
    } else {
      missingKeywords.push(kw);
    }
  }

  const totalKw = question.keywords.length || 1;
  const coveragePercent = Math.round((matchedKeywords.length / totalKw) * 100);

  // Cálculo da nota sugerida (0 a 10)
  // 75% baseado na cobertura dos conceitos-chave da banca
  // 25% baseado na densidade/extensão textual adequada para uma discursiva de graduação
  let rawScore = (matchedKeywords.length / totalKw) * 7.5;

  if (wordCount < 15) {
    // Muito curta para discursiva universitária
    rawScore = Math.min(rawScore, 4.0);
  } else if (wordCount >= 15 && wordCount < 35) {
    rawScore += 1.5;
  } else if (wordCount >= 35) {
    rawScore += 2.5;
  }

  // Limitar entre 0.5 e 10.0
  let finalScore = Math.min(10, Math.max(0.5, Math.round(rawScore * 10) / 10));

  // Se acertou todas as palavras-chave e tem bom tamanho, garante 10.0
  if (matchedKeywords.length === totalKw && wordCount >= 30) {
    finalScore = 10.0;
  }

  let scoreTier: EvaluationResult['scoreTier'];
  let scoreTitle: string;
  let pedagogicalFeedback: string;

  if (finalScore >= 9.0) {
    scoreTier = 'excellent';
    scoreTitle = '🏆 Excelente! Padrão Nota 10 UNIFACS';
    pedagogicalFeedback = 'Parabéns! Sua resposta abordou os principais pilares teóricos exigidos pelos professores. Você utilizou a terminologia técnica correta e fundamentou bem o raciocínio.';
  } else if (finalScore >= 7.0) {
    scoreTier = 'good';
    scoreTitle = '👏 Muito Bom! Acima da Média de Aprovação';
    pedagogicalFeedback = 'Ótima resposta! Você demonstrou domínio dos conceitos centrais. Para fechar nota máxima na folha de prova, certifique-se de incluir os pequenos detalhes conceituais apontados abaixo.';
  } else if (finalScore >= 5.0) {
    scoreTier = 'average';
    scoreTitle = '⚠️ Na Média! Precisa Enriquecer Detalhes';
    pedagogicalFeedback = 'Você entendeu a ideia geral da questão, mas sua resposta ainda está resumida ou deixou de citar termos essenciais que o professor vai procurar na hora da correção manual.';
  } else {
    scoreTier = 'insufficient';
    scoreTitle = '❌ Resposta Incompleta para Prova Discursiva';
    pedagogicalFeedback = 'A resposta está muito breve ou não contemplou os termos técnicos fundamentais exigidos pela banca. Leia o gabarito oficial e tente reescrever usando os tópicos indicados.';
  }

  const strengths = matchedKeywords.map(k => `Citou: ${k.split(/[/(:•]+/)[0].trim()}`);
  const improvements = missingKeywords.map(k => `Faltou citar: ${k.split(/[/(:•]+/)[0].trim()}`);

  return {
    matchedKeywords,
    missingKeywords,
    coveragePercent,
    wordCount,
    suggestedScore: finalScore,
    scoreTier,
    scoreTitle,
    pedagogicalFeedback,
    strengths,
    improvements
  };
}
