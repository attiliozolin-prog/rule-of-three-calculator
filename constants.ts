import { Language, Translations } from './types';

export const CONTENT: Record<Language, Translations> = {
  [Language.PT]: {
    title: "Calculadora de Regra de 3 Simples e Composta",
    subtitle: "Calcule regra de 3 online de forma rápida e fácil.",
    metaDescription:
      "Calculadora de Regra de 3 Simples e Composta online. Faça cálculos rápidos, automáticos e gratuitos com explicação passo a passo.",
    simpleTab: "Simples",
    compoundTab: "Composta",
    labelA: "Se eu tenho (A)",
    labelB: "e recebo (B)",
    labelC: "Então com (C)",
    labelX: "eu recebo (X)",
    explanationTitle: "Entenda o cálculo",
    explanationText:
      "Multiplicamos os valores cruzados e dividimos pelo valor restante para encontrar o resultado.",
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
          "A Regra de 3 é um método matemático usado para descobrir um valor desconhecido a partir de três valores proporcionais conhecidos.",
      },
      {
        question: "Quando usar a Regra de 3?",
        answer:
          "Use a Regra de 3 para cálculos de proporção, como conversão de valores, ajuste de receitas, cálculos de velocidade, tempo ou distância.",
      },
    ],
  },

  [Language.EN]: {
    title: "Rule of Three Calculator – Simple and Compound",
    subtitle: "Solve rule of three calculations online in seconds.",
    metaDescription:
      "Online Rule of Three calculator for simple and compound problems. Fast, automatic and free with clear step-by-step explanation.",
    simpleTab: "Simple",
    compoundTab: "Compound",
    labelA: "If I have (A)",
    labelB: "and I get (B)",
    labelC: "Then with (C)",
    labelX: "I will get (X)",
    explanationTitle: "How it works",
    explanationText:
      "We multiply the cross values and divide by the remaining value to get the result.",
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
          "The Rule of Three is a mathematical method used to calculate an unknown value based on three known proportional values.",
      },
      {
        question: "When should I use it?",
        answer:
          "Use it for proportional calculations such as currency conversion, recipe scaling, speed, distance or time calculations.",
      },
    ],
  },

  [Language.ES]: {
    title: "Calculadora de Regla de Tres Simple y Compuesta",
    subtitle: "Calcula la regla de tres en línea de forma rápida.",
    metaDescription:
      "Calculadora de Regla de Tres Simple y Compuesta en línea. Cálculos automáticos, rápidos y gratuitos con explicación clara.",
    simpleTab: "Simple",
    compoundTab: "Compuesta",
    labelA: "Si tengo (A)",
    labelB: "y obtengo (B)",
    labelC: "Entonces con (C)",
    labelX: "obtengo (X)",
    explanationTitle: "Entiende el cálculo",
    explanationText:
      "Multiplicamos los valores cruzados y dividimos por el valor restante para obtener el resultado.",
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
          "La Regla de Tres es un método matemático que permite calcular un valor desconocido a partir de tres valores proporcionales conocidos.",
      },
      {
        question: "¿Cuándo utilizarla?",
        answer:
          "Se utiliza para cálculos proporcionales como conversiones, recetas, velocidades, distancias o tiempos.",
      },
    ],
  },

  [Language.FR]: {
    title: "Calculateur de règle de trois simple et composée",
    subtitle: "Calculez la règle de trois en ligne facilement.",
    metaDescription:
      "Calculateur de règle de trois simple et composée en ligne. Rapide, gratuit et automatique avec explication claire.",
    simpleTab: "Simple",
    compoundTab: "Composée",
    labelA: "Si j’ai (A)",
    labelB: "et j’obtiens (B)",
    labelC: "Alors avec (C)",
    labelX: "j’obtiens (X)",
    explanationTitle: "Comprendre le calcul",
    explanationText:
      "Nous multiplions les valeurs croisées et divisons par la valeur restante pour obtenir le résultat.",
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
          "La règle de trois est une méthode mathématique utilisée pour calculer une valeur inconnue à partir de trois valeurs proportionnelles connues.",
      },
      {
        question: "Quand l’utiliser ?",
        answer:
          "Elle est utilisée pour les calculs de proportion comme les conversions, les recettes, les vitesses, les distances ou le temps.",
      },
    ],
  },
};
