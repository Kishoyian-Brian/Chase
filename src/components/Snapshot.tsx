import React, { useState, useEffect } from 'react';
import { CreditCard } from 'lucide-react';

export default function Snapshot() {
  const [cardUsage, setCardUsage] = useState(0);

  useEffect(() => {
    // Generate a random amount between $1,000 and $10,000
    const randomAmount = Math.floor(Math.random() * 9000) + 1000;
    setCardUsage(randomAmount);
  }, []);

  return (
    <div className="px-6 pb-4">
      <div className="bg-white rounded-xl border border-gray-200 p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-medium text-black">Snapshot</span>
              <span className="text-xs bg-gray-100 text-gray-600 rounded px-2 py-0.5">1 min read</span>
            </div>
            <p className="text-sm text-gray-500">Your card usage is <span className="font-semibold">${cardUsage.toLocaleString()}</span> this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}