import React, { useState, useEffect } from 'react';
import { Translations } from '../types';
import ResultExplanation from './ResultExplanation';

interface SimpleCalculatorProps {
  t: Translations;
}

const SimpleCalculator: React.FC<SimpleCalculatorProps> = ({ t }) => {
  const [values, setValues] = useState({ a: '', b: '', c: '' });
  const [result, setResult] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  // Focus simulation state for styling
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    const a = parseFloat(values.a);
    const b = parseFloat(values.b);
    const c = parseFloat(values.c);

    if (!isNaN(a) && !isNaN(b) && !isNaN(c) && a !== 0) {
      const x = (b * c) / a;
      // Limit decimals for clean UI, but keep precision reasonable
      const formatted = Math.round(x * 10000) / 10000; 
      setResult(formatted);
    } else {
      setResult(null);
    }
  }, [values]);

  const handleChange = (field: 'a' | 'b' | 'c') => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    // Allow numbers and one decimal point
    if (val === '' || /^-?\d*\.?\d*$/.test(val)) {
      setValues(prev => ({ ...prev, [field]: val }));
    }
  };

  const inputClass = (field: string) => `
    w-full bg-gray-50 text-gray-900 text-xl md:text-2xl font-semibold px-4 py-5 rounded-xl border-2 transition-all duration-200 outline-none
    ${focused === field ? 'border-nubank-500 bg-white shadow-lg ring-4 ring-nubank-500/10' : 'border-transparent hover:bg-gray-100'}
  `;

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      
      {/* Container simulating the structure of Rule of 3 */}
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden border border-white">
        
        {/* Mobile: Stacked | Desktop: Grid 2x2 with Arrow in middle */}
        <div className="p-6 md:p-10 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-12 items-center">
            
            {/* Group 1: A -> B */}
            <div className="space-y-8 md:space-y-12">
              <div className="relative group">
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-2 ml-1">
                  {t.labelA}
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={values.a}
                  onChange={handleChange('a')}
                  onFocus={() => setFocused('a')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('a')}
                  placeholder="10"
                />
              </div>

              <div className="relative group">
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-2 ml-1">
                  {t.labelC}
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={values.c}
                  onChange={handleChange('c')}
                  onFocus={() => setFocused('c')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('c')}
                  placeholder="5"
                />
              </div>
            </div>

            {/* Visual Arrow Connector (Hidden on small mobile, visible on larger) */}
            <div className="hidden md:flex flex-col items-center justify-center h-full space-y-20 opacity-20">
              <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              <svg className="w-8 h-8 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Mobile Arrow Divider */}
            <div className="md:hidden flex justify-center py-2 opacity-20">
               <svg className="w-6 h-6 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>

            {/* Group 2: C -> X */}
            <div className="space-y-8 md:space-y-12">
               <div className="relative group">
                <label className="block text-xs uppercase tracking-wider font-bold text-gray-400 mb-2 ml-1">
                  {t.labelB}
                </label>
                <input
                  type="number"
                  inputMode="decimal"
                  value={values.b}
                  onChange={handleChange('b')}
                  onFocus={() => setFocused('b')}
                  onBlur={() => setFocused(null)}
                  className={inputClass('b')}
                  placeholder="100"
                />
              </div>

              <div className="relative">
                <label className="block text-xs uppercase tracking-wider font-bold text-nubank-500 mb-2 ml-1">
                  {t.labelX}
                </label>
                <div className={`
                  w-full min-h-[72px] flex items-center px-4 py-5 rounded-xl border-2 transition-all duration-300
                  ${result !== null ? 'bg-nubank-500 border-nubank-600 shadow-xl shadow-nubank-500/30' : 'bg-gray-100 border-transparent'}
                `}>
                  <span className={`text-2xl md:text-3xl font-bold ${result !== null ? 'text-white' : 'text-gray-400'}`}>
                    {result !== null ? result : '...'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <ResultExplanation 
            t={t} 
            a={values.a} 
            b={values.b} 
            c={values.c} 
            x={result}
            isVisible={showExplanation}
            onToggle={() => setShowExplanation(!showExplanation)}
          />

        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
