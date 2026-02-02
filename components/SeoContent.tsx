import React from 'react';
import { Translations } from '../types';

interface SeoContentProps {
  t: Translations;
}

const SeoContent: React.FC<SeoContentProps> = ({ t }) => {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{t.faqTitle}</h2>
      
      <div className="space-y-8">
        {t.faqContent.map((item, index) => (
          <article key={index} className="prose prose-violet max-w-none">
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
  );
};

export default SeoContent;
