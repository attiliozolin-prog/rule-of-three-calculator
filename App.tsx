import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Language } from './types';
import { CONTENT } from './constants';

import SimpleCalculator from './components/SimpleCalculator';
import CompoundCalculator from './components/CompoundCalculator';
import AdPlaceholder from './components/AdPlaceholder';
import SeoContent from './components/SeoContent';

import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import About from './pages/About';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.EN);
  const [tab, setTab] = useState<'simple' | 'compound'>('simple');

  useEffect(() => {
    const browserLang = navigator.language.slice(0, 2);
    if (browserLang === 'pt') setLang(Language.PT);
    else if (browserLang === 'es') setLang(Language.ES);
    else if (browserLang === 'fr') setLang(Language.FR);
    else setLang(Language.EN);
  }, []);

  useEffect(() => {
    const content = CONTENT[lang];
    document.title = `${content.title} | ${content.subtitle}`;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.metaDescription);
    }

    document.documentElement.lang = lang;
  }, [lang]);

  const t = CONTENT[lang];

  return (
    <BrowserRouter>
      <main className="min-h-screen flex flex-col font-sans bg-slate-50 text-gray-900 pb-20">

        {/* Header */}
        <nav className="w-full bg-white border-b border-gray-100 px-6 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-nubank-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                %
              </div>
              <span className="text-xl font-bold text-gray-800 hidden sm:block">
                {t.title}
              </span>
            </Link>

            <select
              value={lang}
              onChange={(e) => setLang(e.target.value as Language)}
              className="bg-gray-100 rounded-lg px-2 py-1 text-sm font-semibold"
            >
              <option value={Language.EN}>EN</option>
              <option value={Language.PT}>PT</option>
              <option value={Language.ES}>ES</option>
              <option value={Language.FR}>FR</option>
            </select>
          </div>
        </nav>

        <Routes>
          {/* HOME */}
          <Route
            path="/"
            element={
              <>
                <header className="px-6 py-12 text-center">
                  <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
                    {t.title}
                  </h1>
                  <p className="text-lg text-gray-500">{t.subtitle}</p>
                </header>

                <AdPlaceholder t={t} location="top" />

                <div className="flex justify-center mb-8">
                  <button onClick={() => setTab('simple')} className="px-4 py-2">
                    {t.simpleTab}
                  </button>
                  <button onClick={() => setTab('compound')} className="px-4 py-2">
                    {t.compoundTab}
                  </button>
                </div>

                <div className="px-4">
                  {tab === 'simple' ? (
                    <SimpleCalculator t={t} />
                  ) : (
                    <CompoundCalculator t={t} />
                  )}
                </div>

                <AdPlaceholder t={t} location="bottom" />
                <SeoContent t={t} />
              </>
            }
          />

          {/* LEGAL PAGES */}
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Footer */}
        <footer className="mt-auto py-8 text-center text-sm text-gray-400 space-x-4">
          <Link to="/about">Sobre</Link>
          <Link to="/privacy">Privacidade</Link>
          <Link to="/terms">Termos</Link>
        </footer>

      </main>
    </BrowserRouter>
  );
};

export default App;
