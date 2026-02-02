import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import SimpleCalculator from './components/SimpleCalculator';
import CompoundCalculator from './components/CompoundCalculator';
import AdPlaceholder from './components/AdPlaceholder';
import SeoContent from './components/SeoContent';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [tab, setTab] = useState<'simple' | 'compound'>('simple');

  // Detect browser language on first load
  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);

    if (browserLang === 'pt') setLang(Language.PT);
    else if (browserLang === 'es') setLang(Language.ES);
    else if (browserLang === 'fr') setLang(Language.FR);
    else setLang(Language.EN);
  }, []);

  // SEO + i18n effects
  useEffect(() => {
    const content = CONTENT[lang];

    // Title & Meta Description
    document.title = `${content.title} | ${content.subtitle}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.metaDescription);
    }

    // Set <html lang="">
    document.documentElement.lang = lang.toLowerCase();

    // Structured Data (avoid duplicates)
    const existingSchema = document.getElementById('schema-org');
    if (existingSchema) {
      existingSchema.remove();
    }

    const script = document.createElement('script');
    script.id = 'schema-org';
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": content.title,
      "description": content.metaDescription,
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "All"
    });

    document.head.appendChild(script);
  }, [lang]);

  const t = CONTENT[lang];

  return (
    <main className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-900 pb-20">

      {/* Header / Navigation */}
      <nav className="w-full bg-white border-b border-gray-100 px-6 py-4 sticky top-0 z-50 bg-opacity-90 backdrop-blur-md">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-nubank-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              %
            </div>
            {/* NOT an H1 (SEO fix) */}
            <span className="text-xl font-bold tracking-tight text-gray-800 hidden sm:block">
              {t.title}
            </span>
          </div>

          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
            className="bg-gray-100 border-none text-sm font-semibold text-gray-600 rounded-lg px-2 py-1 focus:ring-2 focus:ring-nubank-500 outline-none cursor-pointer"
            aria-label="Language selector"
          >
            <option value={Language.EN}>EN</option>
            <option value={Language.PT}>PT</option>
            <option value={Language.ES}>ES</option>
            <option value={Language.FR}>FR</option>
          </select>
        </div>
      </nav>

      {/* Hero Section (ONLY H1) */}
      <header className="px-6 py-12 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3 tracking-tight">
          {t.title}
        </h1>
        <p className="text-lg text-gray-500 font-medium">
          {t.subtitle}
        </p>
      </header>

      {/* Ad Top */}
      <AdPlaceholder t={t} location="top" />

      {/* Tabs */}
      <div className="flex justify-center mb-8 px-6">
        <div className="bg-gray-200/50 p-1.5 rounded-2xl inline-flex">
          <button
            onClick={() => setTab('simple')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              tab === 'simple'
                ? 'bg-white text-nubank-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t.simpleTab}
          </button>
          <button
            onClick={() => setTab('compound')}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all ${
              tab === 'compound'
                ? 'bg-white text-nubank-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {t.compoundTab}
          </button>
        </div>
      </div>

      {/* Calculator */}
      <div className="px-4">
        {tab === 'simple'
          ? <SimpleCalculator t={t} />
          : <CompoundCalculator t={t} />
        }
      </div>

      {/* Ad Bottom */}
      <AdPlaceholder t={t} location="bottom" />

      {/* SEO Content */}
      <SeoContent t={t} />

      {/* Footer */}
      <footer className="mt-auto text-center py-8 text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} {t.title}. All rights reserved.</p>
      </footer>

    </main>
  );
};

export default App;