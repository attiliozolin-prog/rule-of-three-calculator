import React from 'react';
import { Translations } from '../types';

interface SeoContentProps {
  t: Translations;
}

const SeoContent: React.FC<SeoContentProps> = ({ t }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-16">

      {/* ===== Educational Intro ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          O que é a Regra de 3?
        </h2>
        <p className="text-gray-600 leading-relaxed">
          A Regra de 3 é um método matemático utilizado para descobrir um valor
          desconhecido a partir de outros três valores que mantêm uma relação
          proporcional entre si. É uma ferramenta simples, porém extremamente
          útil no dia a dia, em estudos, no trabalho e em situações práticas.
        </p>
      </section>

      {/* ===== How it works ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Como funciona o cálculo?
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          No caso da Regra de 3 simples, identificamos duas grandezas
          proporcionais. Em seguida, multiplicamos os valores cruzados e
          dividimos pelo valor restante para encontrar o resultado desejado.
        </p>
        <p className="text-gray-700 font-semibold">
          Fórmula:
        </p>
        <p className="text-gray-800 font-mono mt-1">
          X = (B × C) ÷ A
        </p>
      </section>

      {/* ===== Practical examples ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Exemplos práticos de uso
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Ajustar quantidades em receitas culinárias.</li>
          <li>Converter valores proporcionais, como custo por unidade.</li>
          <li>Calcular tempo, distância ou velocidade.</li>
          <li>Resolver exercícios escolares e acadêmicos.</li>
        </ul>
      </section>

      {/* ===== Simple vs Compound ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Regra de 3 simples x Regra de 3 composta
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          A Regra de 3 simples envolve apenas duas grandezas proporcionais.
          Já a Regra de 3 composta é utilizada quando há três ou mais grandezas
          relacionadas, exigindo uma análise mais cuidadosa antes do cálculo.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Esta calculadora permite resolver ambos os casos de forma automática,
          reduzindo erros e tornando o processo mais rápido e confiável.
        </p>
      </section>

      {/* ===== History ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Origem e história da Regra de 3
        </h2>
        <p className="text-gray-600 leading-relaxed mb-3">
          A Regra de 3 não possui um autor único. Seu uso é registrado desde a
          Antiguidade, especialmente em práticas comerciais, onde era necessário
          calcular proporções de preços, pesos e quantidades de mercadorias.
        </p>
        <p className="text-gray-600 leading-relaxed mb-3">
          Durante a Idade Média, o método foi amplamente difundido por matemáticos
          árabes e, posteriormente, por estudiosos europeus. Antes mesmo da
          popularização da álgebra moderna, a Regra de 3 já era considerada uma
          ferramenta essencial para cálculos do cotidiano.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Até hoje, ela continua sendo ensinada como uma das bases do raciocínio
          matemático proporcional, justamente por sua simplicidade e eficiência.
        </p>
      </section>

      {/* ===== FAQ ===== */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t.faqTitle}
        </h2>

        <div className="space-y-8">
          {t.faqContent.map((item, index) => (
            <article key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </section>

    </section>
  );
};

export default SeoContent;
