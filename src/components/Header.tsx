import React from 'react';
import { Wifi, CreditCard, User, MessageSquare } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white">
      {/* Top Bar with Icons */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center space-x-4">
          {/* Bubble chat SVG icon */}
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-700"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4c-.5.6-.7 1.3-.6 2.1.2 1.1-1 2-2 1.6-1.5-.6-3.2-1.1-4.5-1.1-4.4 0-8-2.7-8-6.1S6.6 7.5 11 7.5s8 2.7 8 6.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          <CreditCard className="w-6 h-6 text-gray-700" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            {/* Pie-chart style SVG icon */}
            <svg width="60" height="60" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g>
                <path d="M90 90V20A70 70 0 0 1 160 90Z" fill="#3886E1"/>
                <path d="M90 90L160 90A70 70 0 0 1 130 150Z" fill="#3886E1" fill-opacity="0.8"/>
                <path d="M90 90L130 150A70 70 0 0 1 50 150Z" fill="#1EC6FA"/>
                <path d="M90 90L50 150A70 70 0 0 1 20 90Z" fill="#6CF3FF"/>
                <path d="M90 90L20 90A70 70 0 0 1 50 30Z" fill="#1EC6FA"/>
                <path d="M90 90L50 30A70 70 0 0 1 90 20Z" fill="#2DCCFD"/>
                <circle cx="90" cy="90" r="40" fill="#F7F7F7"/>
              </g>
            </svg>
          </div>
        </div>
        <div>
          <User className="w-6 h-6 text-gray-700" />
        </div>
      </div>
      {/* Greeting and Date */}
      <div className="px-6 pb-4">
        <h1 className="text-2xl font-semibold text-black mb-1">Good morning</h1>
        <p className="text-gray-500 text-sm">August 31, 2024</p>
      </div>
    </div>
  );
}