
import React from 'react';
import SVAInfographic from './components/SVAInfographic';

const App: React.FC = () => {
  return (
    <div className="relative isolate min-h-screen bg-gradient-to-br from-violet-50 via-rose-50 to-fuchsia-50 text-gray-800 bg-pattern overflow-x-hidden">
      <SVAInfographic />
    </div>
  );
};

export default App;