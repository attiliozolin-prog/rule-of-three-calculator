import React, { useState, useEffect } from 'react';
import { Translations } from '../types';

interface CompoundCalculatorProps {
  t: Translations;
}

const CompoundCalculator: React.FC<CompoundCalculatorProps> = ({ t }) => {
  // Scenario: A1 produces R1 in B1 time.
  //           A2 produces X in B2 time.
  // Simple direct proportionality implementation for UX simplicity
  const [values, setValues] = useState({
    a1: '', b1: '', r1: '',
    a2: '', b2: ''
  });
  const [result, setResult] = useState<number | null>(null);
  const [focused, setFocused] = useState<string | null>(null);

  useEffect(() => {
    // Basic Compound Formula (assuming direct proportionality for simplicity of the "general" tool)
    // If 2 people (a1) paint 1 wall (b1) in 4 hours (r1)
    // Then 4 people (a2) paint 2 walls (b2) in X hours?
    // This requires knowing the relationship types.
    // TO KEEP IT SIMPLE & USABLE (as per prompt):
    // We will use the format: (Process A * Process B) -> Result.
    // Row 1: A1 * B1 = R1
    // Row 2: A2 * B2 = X
    // Formula: X = (R1 * A2 * B2) / (A1 * B1)
    
    // Let's go with the standard "Production" model which covers 90% of cases.
    // (A1 * Time1) / Production1 = (A2 * Time2) / Production2
    // We solve for Production2 (X) or Time2 (X).
    
    // Let's simplify to a purely multiplicative model:
    // Row 1 inputs -> Outcome 1
    // Row 2 inputs -> Outcome X
    // X = (Outcome1 * Row2Product) / Row1Product

    const v = {
      a1: parseFloat(values.a1),
      b1: parseFloat(values.b1),
      r1: parseFloat(values.r1),
      a2: parseFloat(values.a2),
      b2: parseFloat(values.b2),
    };

    if (!Object.values(v).some(isNaN) && v.a1 !== 0 && v.b1 !== 0) {
      // Logic: (A2 * B2 * R1) / (A1 * B1)
      const x = (v.a2 * v.b2 * v.r1) / (v.a1 * v.b1);
      setResult(Math.round(x * 10000) / 10000);
    } else {
      setResult(null);
    }
  }, [values]);

  const handleChange = (field: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    if (val === '' || /^-?\d*\.?\d*$/.test(val)) {
      setValues(prev => ({ ...prev, [field]: val }));
    }
  };

  const inputClass = (field: string) => `
    w-full bg-gray-50 text-gray-900 text-lg font-semibold px-3 py-3 rounded-lg border-2 transition-all duration-200 outline-none
    ${focused === field ? 'border-nubank-500 bg-white shadow-md' : 'border-transparent hover:bg-gray-100'}
  `;

  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in">
      <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-6 md:p-10 border border-white">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Row 1: Knowns */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 border-b pb-2">
                {t.compoundLabels.group1}
             </h3>
             
             <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-bold mb-1 block">{t.compoundLabels.var1}</label>
                  <input type="number" value={values.a1} onChange={handleChange('a1')} onFocus={() => setFocused('a1')} onBlur={() => setFocused(null)} className={inputClass('a1')} placeholder="2" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-bold mb-1 block">{t.compoundLabels.var2}</label>
                  <input type="number" value={values.b1} onChange={handleChange('b1')} onFocus={() => setFocused('b1')} onBlur={() => setFocused(null)} className={inputClass('b1')} placeholder="5" />
                </div>
             </div>
             
             <div className="flex items-center justify-center text-gray-300 py-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
             </div>

             <div>
                <label className="text-xs text-gray-400 font-bold mb-1 block">{t.compoundLabels.var3}</label>
                <input type="number" value={values.r1} onChange={handleChange('r1')} onFocus={() => setFocused('r1')} onBlur={() => setFocused(null)} className={inputClass('r1')} placeholder="100" />
             </div>
          </div>

          {/* Row 2: Unknown */}
          <div className="space-y-4">
             <h3 className="text-sm font-bold text-nubank-500 uppercase tracking-wider mb-6 border-b border-nubank-100 pb-2">
                {t.compoundLabels.group2}
             </h3>
             
             <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-400 font-bold mb-1 block">{t.compoundLabels.var1}</label>
                  <input type="number" value={values.a2} onChange={handleChange('a2')} onFocus={() => setFocused('a2')} onBlur={() => setFocused(null)} className={inputClass('a2')} placeholder="4" />
                </div>
                <div>
                  <label className="text-xs text-gray-400 font-bold mb-1 block">{t.compoundLabels.var2}</label>
                  <input type="number" value={values.b2} onChange={handleChange('b2')} onFocus={() => setFocused('b2')} onBlur={() => setFocused(null)} className={inputClass('b2')} placeholder="10" />
                </div>
             </div>

             <div className="flex items-center justify-center text-gray-300 py-1">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
             </div>

             <div>
                <label className="text-xs text-nubank-500 font-bold mb-1 block">{t.compoundLabels.var3}</label>
                <div className={`w-full flex items-center px-3 py-3 rounded-lg border-2 transition-all duration-300 min-h-[52px] ${result !== null ? 'bg-nubank-500 border-nubank-600 shadow-lg' : 'bg-gray-100 border-transparent'}`}>
                  <span className={`text-xl font-bold ${result !== null ? 'text-white' : 'text-gray-400'}`}>
                    {result !== null ? result : '...'}
                  </span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompoundCalculator;
