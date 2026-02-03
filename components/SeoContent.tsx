import React from 'react';
import { Translations } from '../types';

interface SeoContentProps {
  t: Translations;
}

const SeoContent: React.FC<SeoContentProps> = ({ t }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-16 space-y-12">

      {/* Explanatory Content */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          {t.explanationTitle}
        </h2>

        <p className="text-gray-700 leading-relaxed">
          {t.explanationText}
        </p>

        <p className="text-gray-700 leading-relaxed">
          <strong>{t.formula}</strong>
        </p>
      </div>

      {/* FAQ Section */}
      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-gray-900">
          {t.faqTitle}
        </h2>

        <div className="space-y-8">
          {t.faqContent.map((item, index) => (
            <article key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </div>

    </section>
  );
};

export default SeoContent;
