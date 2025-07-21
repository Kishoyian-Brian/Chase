import React from 'react';
import { Wifi, CreditCard, User } from 'lucide-react';

export default function Header() {
  // Get current date formatted as 'Month Day, Year'
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  return (
    <div className="bg-white">
      {/* Top Bar with Icons */}
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex items-center space-x-4">
          {/* Chat bubble with plus badge SVG */}
          <span className="relative inline-block">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-gray-800"><path d="M21 11.5a8.38 8.38 0 0 1-1.9 5.4c-.5.6-.7 1.3-.6 2.1.2 1.1-1 2-2 1.6-1.5-.6-3.2-1.1-4.5-1.1-4.4 0-8-2.7-8-6.1S6.6 7.5 11 7.5s8 2.7 8 6.1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 12h.01M12 12h.01M16 12h.01" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            <span className="absolute -top-1 -right-1 bg-white rounded-full p-0.5 border border-gray-300">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="6" fill="#2563eb"/><path d="M6 3v6M3 6h6" stroke="#fff" stroke-width="1.2" stroke-linecap="round"/></svg>
            </span>
          </span>
          <CreditCard className="w-6 h-6 text-gray-800" />
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div className="w-12 h-12 flex items-center justify-center">
            {/* Official Chase Bank logo image */}
            <img src="https://logos-world.net/wp-content/uploads/2020/11/Chase-Emblem.png" alt="Chase Bank Logo" className="w-10 h-10 object-contain" />
          </div>
        </div>
        <div>
          <User className="w-6 h-6 text-gray-800" />
        </div>
      </div>
      {/* Greeting and Date */}
      <div className="px-6 pb-4">
        <h1 className="text-2xl font-semibold text-black mb-1">Good morning</h1>
        <p className="text-gray-500 text-sm">{formattedDate}</p>
      </div>
    </div>
  );
}