import { CreditCard, ArrowLeftRight, TrendingUp, Menu } from 'lucide-react';

export default function BottomNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3">
      <div className="flex justify-between items-center">
        <button className="flex flex-col items-center space-y-1">
          <CreditCard className="w-6 h-6 text-blue-600" />
          <span className="text-xs text-blue-600 font-medium">Accounts</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1">
          <ArrowLeftRight className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500">Pay & transfer</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1">
          <TrendingUp className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500">Plan & track</span>
        </button>
        
        <button className="flex flex-col items-center space-y-1">
          <Menu className="w-6 h-6 text-gray-500" />
          <span className="text-xs text-gray-500">More</span>
        </button>
      </div>
    </div>
  );
}