import { Language, Translations } from './types';

export const CONTENT: Record<Language, Translations> = {
  [Language.PT]: {
    title: "Calculadora de Regra de 3",
    subtitle: "Simples, rápida e online.",
    metaDescription:
      "A melhor calculadora de Regra de 3 Simples e Composta. Cálculo automático, design intuitivo e explicação passo a passo. Grátis e sem cadastro.",
    simpleTab: "Simples",
    compoundTab: "Composta",
    labelA: "Se eu tenho (A)",
    labelB: "e recebo (B)",
    labelC: "Então com (C)",
    labelX: "eu recebo (X)",
    explanationTitle: "Entenda o cálculo",
    explanationText:
      "Multiplicamos os valores cruzados e dividimos pelo valor restante.",
    formula: "X = (B × C) ÷ A",
    result: "Resultado",
    faqTitle: "Perguntas Frequentes",
    adLabel: "Espaço Publicitário",
    compoundLabels: {
      group1: "Situação 1 (Conhecida)",
      group2: "Situação 2 (A descobrir)",
      var1: "Processo A",
      var2: "Processo B",
      var3: "Resultado",
    },
    faqContent: [
      {
        question: "O que é Regra de 3?",
        answer:
          "É um método matemático para encontrar um quarto valor desconhecido quando já conhecemos três números que são proporcionais entre si.",
      },
      {
        question: "Quando usar?",
        answer:
          "Use para converter moedas, ajustar receitas, calcular velocidades, distâncias ou qualquer relação proporcional direta.",
      },
    ],
  },

  [Language.EN]: {
    title: "Rule of Three Calculator",
    subtitle: "Simple, fast and online.",
    metaDescription:
      "The best Simple and Compound Rule of Three calculator. Automatic calculation, intuitive design, and step-by-step explanation. Free and instant.",
    simpleTab: "Simple",
    compoundTab: "Compound",
    labelA: "If I have (A)",
    labelB: "and I get (B)",
    labelC: "Then with (C)",
    labelX: "I will get (X)",
    explanationTitle: "How it works",
    explanationText:
      "Multiply the cross values and divide by the remaining value.",
    formula: "X = (B × C) ÷ A",
    result: "Result",
    faqTitle: "Frequently Asked Questions",
    adLabel: "Advertisement",
    compoundLabels: {
      group1: "Scenario 1 (Known)",
      group2: "Scenario 2 (Target)",
      var1: "Process A",
      var2: "Process B",
      var3: "Result",
    },
    faqContent: [
      {
        question: "What is the Rule of Three?",
        answer:
          "It is a mathematical method to solve for a fourth missing value based on three known numbers that are proportional to each other.",
      },
      {
        question: "When to use it?",
        answer:
          "Use it for currency conversion, recipe adjustments, speed/distance calculations, or any direct proportional relationship.",
      },
    ],
  },

  [Language.ES]: {
    title: "Calculadora Regla de Tres",
    subtitle: "Simple, rápida y en línea.",
    metaDescription:
      "La mejor calculadora de Regla de Tres Simple y Compuesta. Cálculo automático, diseño intuitivo y explicación paso a paso. Gratis.",
    simpleTab: "Simple",
    compoundTab: "Compuesta",
    labelA: "Si tengo (A)",
    labelB: "y obtengo (B)",
    labelC: "Entonces con (C)",
    labelX: "obtengo (X)",
    explanationTitle: "Entiende el cálculo",
    explanationText:
      "Multiplicamos los valores cruzados y dividimos por el valor restante.",
    formula: "X = (B × C) ÷ A",
    result: "Resultado",
    faqTitle: "Preguntas Frecuentes",
    adLabel: "Anuncio",
    compoundLabels: {
      group1: "Situación 1 (Conocida)",
      group2: "Situación 2 (A descubrir)",
      var1: "Proceso A",
      var2: "Proceso B",
      var3: "Resultado",
    },
    faqContent: [
      {
        question: "¿Qué es la Regla de Tres?",
        answer:
          "Es un método matemático para encontrar un cuarto valor desconocido cuando ya conocemos tres números que son proporcionales entre sí.",
      },
      {
        question: "¿Cuándo usarla?",
        answer:
          "Úsala para conversión de divisas, ajustar recetas, calcular velocidades, distancias o cualquier relación proporcional directa.",
      },
    ],
  },

  [Language.FR]: {
    title: "Calculateur de règle de trois",
    subtitle: "Simple, rapide et en ligne.",
    metaDescription:
      "Le meilleur calculateur de règle de trois simple et composée. Calcul automatique, design intuitif et explication étape par étape. Gratuit.",
    simpleTab: "Simple",
    compoundTab: "Composée",
    labelA: "Si j’ai (A)",
    labelB: "et j’obtiens (B)",
    labelC: "Alors avec (C)",
    labelX: "j’obtiens (X)",
    explanationTitle: "Comprendre le calcul",
    explanationText:
      "Nous multiplions les valeurs croisées et divisons par la valeur restante.",
    formula: "X = (B × C) ÷ A",
    result: "Résultat",
    faqTitle: "Questions fréquentes",
    adLabel: "Publicité",
    compoundLabels: {
      group1: "Situation 1 (Connue)",
      group2: "Situation 2 (À déterminer)",
      var1: "Processus A",
      var2: "Processus B",
      var3: "Résultat",
    },
    faqContent: [
      {
        question: "Qu’est-ce que la règle de trois ?",
        answer:
          "C’est une méthode mathématique qui permet de trouver une valeur inconnue à partir de trois valeurs proportionnelles connues.",
      },
      {
        question: "Quand l’utiliser ?",
        answer:
          "Utilisez-la pour convertir des devises, ajuster des recettes, calculer des vitesses, des distances ou toute relation proportionnelle directe.",
      },
    ],
  },
};