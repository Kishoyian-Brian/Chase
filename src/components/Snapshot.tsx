import React from 'react';
import { CreditCard } from 'lucide-react';

export default function Snapshot() {
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
            <p className="text-sm text-gray-500">Your card usage is <span className="font-semibold">$6,140</span> this week.</p>
          </div>
        </div>
      </div>
    </div>
  );
}