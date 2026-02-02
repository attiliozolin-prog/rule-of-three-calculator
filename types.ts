export enum Language {
  PT = 'pt',
  EN = 'en',
  ES = 'es',
  FR = 'fr',
}

export interface Translations {
  title: string;
  subtitle: string;
  metaDescription: string;
  simpleTab: string;
  compoundTab: string;
  labelA: string;
  labelB: string;
  labelC: string;
  labelX: string;
  explanationTitle: string;
  explanationText: string;
  formula: string;
  result: string;
  faqTitle: string;
  faqContent: { question: string; answer: string }[];
  adLabel: string;
  compoundLabels: {
    group1: string;
    group2: string;
    var1: string;
    var2: string;
    var3: string;
  };
}

export interface CalculatorState {
  a: string;
  b: string;
  c: string;
  x: number | null;
}

export interface CompoundState {
  a1: string;
  b1: string;
  r1: string;
  a2: string;
  b2: string;
  x: number | null;
}