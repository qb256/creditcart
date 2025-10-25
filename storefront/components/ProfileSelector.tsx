// Profile Selector Component for Enhancement #1
'use client';

import { useState } from 'react';

interface ProductVariant {
  id: string;
  title: string;
  metadata?: {
    credit_score_range?: string;
    income_range?: string;
  };
}

interface ProfileSelectorProps {
  variants: ProductVariant[];
  onSelect: (creditScore: string, income: string) => void;
}

export function ProfileSelector({ variants, onSelect }: ProfileSelectorProps) {
  // Extract unique credit score and income ranges from variants
  const creditScores = [...new Set(variants.map(v => v.metadata?.credit_score_range).filter(Boolean))];
  const incomeRanges = [...new Set(variants.map(v => v.metadata?.income_range).filter(Boolean))];

  const [selectedCredit, setSelectedCredit] = useState(creditScores[0] || '');
  const [selectedIncome, setSelectedIncome] = useState(incomeRanges[0] || '');

  const handleCreditChange = (value: string) => {
    setSelectedCredit(value);
    onSelect(value, selectedIncome);
  };

  const handleIncomeChange = (value: string) => {
    setSelectedIncome(value);
    onSelect(selectedCredit, value);
  };

  return (
    <div className="space-y-6">
      {/* Credit Score Selector */}
      <div>
        <label className="block text-sm font-semibold mb-2">Credit Score Range</label>
        <select
          value={selectedCredit}
          onChange={(e) => handleCreditChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none"
        >
          {creditScores.map((score) => (
            <option key={score} value={score}>
              {score}
            </option>
          ))}
        </select>
      </div>

      {/* Income Range Selector */}
      <div>
        <label className="block text-sm font-semibold mb-2">Annual Income Range</label>
        <select
          value={selectedIncome}
          onChange={(e) => handleIncomeChange(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-navy focus:outline-none"
        >
          {incomeRanges.map((income) => (
            <option key={income} value={income}>
              {income}
            </option>
          ))}
        </select>
      </div>

      <p className="text-xs text-gray-500">
        * Soft inquiry only - will not affect your credit score
      </p>
    </div>
  );
}
