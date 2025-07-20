
import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

export default function Accounts() {
  const [checking, setChecking] = useState(37663.74);
  const [savings, setSavings] = useState(5025.00);

  useEffect(() => {
    const interval = setInterval(() => {
      setChecking(prev => {
        const change = (Math.random() - 0.5) * 1000;
        return Math.max(0, +(prev + change).toFixed(2));
      });
      setSavings(prev => {
        const change = (Math.random() - 0.5) * 200;
        return Math.max(0, +(prev + change).toFixed(2));
      });
    }, 60000); // 1 minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-6">
      <div className="mb-2">
        <h2 className="text-base font-semibold text-black">Accounts</h2>
      </div>
      <div className="space-y-2">
        {/* Bank Accounts Header */}
        <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-sm">Bank accounts (2)</div>
        {/* Checking Account */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-1">
          <span className="text-xs text-gray-500">TOTAL CHECKING (...9509)</span>
          <span className="text-2xl font-semibold text-black">${checking.toLocaleString()}</span>
          <span className="text-xs text-gray-500">Available balance</span>
        </div>
        {/* Savings Account */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col gap-1">
          <span className="text-xs text-gray-500">CHASE SAVINGS (...9873)</span>
          <span className="text-2xl font-semibold text-black">${savings.toLocaleString()}</span>
          <span className="text-xs text-gray-500">Available balance</span>
        </div>
        {/* Link External Accounts */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-between cursor-pointer">
          <span className="text-gray-600 text-sm">Link external accounts</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </div>
  );
}