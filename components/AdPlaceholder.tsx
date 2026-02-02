import React from 'react';
import { Translations } from '../types';

interface AdPlaceholderProps {
  t: Translations;
  location: 'top' | 'bottom';
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ t, location }) => {
  return (
    <div className={`w-full max-w-4xl mx-auto my-8 px-4 flex justify-center ${location === 'top' ? 'mb-8' : 'mt-12'}`}>
      <div className="w-full h-24 bg-gray-200 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center relative overflow-hidden group">
        <span className="text-gray-400 text-sm font-medium uppercase tracking-wider">{t.adLabel}</span>
        {/* Ad script would be injected here */}
        <div className="absolute inset-0 bg-white/50 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      </div>
    </div>
  );
};

export default AdPlaceholder;
