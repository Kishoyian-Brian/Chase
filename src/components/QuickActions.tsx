import React from 'react';

export default function QuickActions() {
  return (
    <div className="px-6 pb-2 flex items-center gap-2 overflow-x-auto">
      <button className="w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 bg-white text-blue-500 text-lg font-semibold shadow-sm">
        +
      </button>
      <button className="flex items-center rounded-full bg-white border border-gray-200 shadow-sm px-3 py-1.5 text-xs font-medium text-blue-500 hover:bg-blue-50 whitespace-nowrap">
        Send | Zelle®
      </button>
      <button className="flex items-center rounded-full bg-white border border-gray-200 shadow-sm px-3 py-1.5 text-xs font-medium text-blue-500 hover:bg-blue-50 whitespace-nowrap">
        Deposit checks
      </button>
      <button className="flex items-center rounded-full bg-white border border-gray-200 shadow-sm px-3 py-1.5 text-xs font-medium text-blue-500 hover:bg-blue-50 whitespace-nowrap">
        Pay bills
      </button>
    </div>
  );
}
