import React from 'react';
import { Plus } from 'lucide-react';

export default function QuickActions() {
  return (
    <div className="px-6 pb-2 flex items-center gap-2 overflow-x-auto">
      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 text-xl font-bold shadow-sm">+</button>
      <button className="flex items-center rounded-full bg-white border border-gray-200 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">Send | Zelle®</button>
      <button className="flex items-center rounded-full bg-white border border-gray-200 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">Deposit checks</button>
      <button className="flex items-center rounded-full bg-white border border-gray-200 shadow-sm px-4 py-2 text-sm font-medium text-gray-700 whitespace-nowrap">Pay bills</button>
    </div>
  );
}