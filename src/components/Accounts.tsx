import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function Accounts() {
  // Generate a random amount between 5,000 and 20,000 and format with commas
  const amount = (Math.random() * 15000 + 5000).toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // Random account types
  const accountTypes = ['Total Checking', 'Savings', 'Business Checking', 'Student Account', 'Joint Account'];
  const accountType = accountTypes[Math.floor(Math.random() * accountTypes.length)];

  // Random last 4 digits
  const lastFour = Math.floor(1000 + Math.random() * 9000); // ensures 4 digits like 5830

  return (
    <div className="px-4 pt-4">
      <div className="mb-2 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Accounts</h2>
        {/* Three-dot menu icon */}
        <button className="text-gray-400 hover:text-gray-600 p-1 rounded-full focus:outline-none">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        {/* 1. Blue Header */}
        <div className="bg-blue-800 text-white px-4 py-2 font-medium text-sm rounded-t-2xl">
          Bank accounts (1)
        </div>

        {/* 2. Left: Account Type */}
        <div className="px-4 pt-8 pb-4 flex items-center">
          <div className="flex-1 text-base text-gray-700 font-medium">
            {accountType} (...{lastFour})
          </div>
        </div>

        {/* 3. Right: Amount and Balance */}
        <div className="px-4 flex flex-col items-end justify-center min-w-[160px] mt-8 mb-4">
          <span className="text-3xl font-semibold text-black">${amount}</span>
          <span className="text-base text-gray-500 mt-1">Available balance</span>
        </div>

        {/* 4. Link External Accounts Row */}
        <button className="w-full flex items-center justify-between px-4 py-4 border-t border-gray-100 bg-gray-50 hover:bg-gray-100 focus:outline-none">
          <span className="text-gray-800 text-base">Link external accounts</span>
          <ChevronRight className="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
