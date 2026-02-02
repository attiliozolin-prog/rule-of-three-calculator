import React from 'react';
import { Translations } from '../types';

interface ResultExplanationProps {
  t: Translations;
  a: string;
  b: string;
  c: string;
  x: number | null;
  isVisible: boolean;
  onToggle: () => void;
}

const ResultExplanation: React.FC<ResultExplanationProps> = ({ t, a, b, c, x, isVisible, onToggle }) => {
  if (x === null) return null;

  return (
    <div className="mt-6 w-full max-w-lg mx-auto">
      <button 
        onClick={onToggle}
        className="text-nubank-600 text-sm font-medium hover:text-nubank-700 hover:underline transition-all flex items-center gap-1 mx-auto"
      >
        <span>{isVisible ? 'Hide calculation' : t.explanationTitle}</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isVisible ? 'rotate-180' : ''}`} 
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isVisible && (
        <div className="mt-4 bg-gray-50 border border-gray-100 rounded-xl p-5 animate-fade-in-down">
          <p className="text-gray-600 text-sm mb-3 font-medium">{t.explanationText}</p>
          
          <div className="font-mono text-center bg-white p-3 rounded-lg border border-gray-200 shadow-sm text-gray-800">
            <div className="mb-2 text-xs text-gray-400 uppercase tracking-widest">{t.formula}</div>
            <div className="text-lg">
              X = ({b} × {c}) ÷ {a}
            </div>
            <div className="text-nubank-600 font-bold mt-2">
              X = {x}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultExplanation;
