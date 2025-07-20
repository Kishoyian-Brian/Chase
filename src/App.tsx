
import Header from './components/Header';
import QuickActions from './components/QuickActions';
import Snapshot from './components/Snapshot';
import Accounts from './components/Accounts';
import BottomNavigation from './components/ButtomNavigation';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-sm mx-auto bg-white min-h-screen relative">
        {/* Main Content */}
        <div className="pb-20">
          <Header />
          <QuickActions />
          <Snapshot />
          <Accounts />
        </div>
        
        {/* Bottom Navigation */}
        <BottomNavigation />
      </div>
    </div>
  );
}

export default App;