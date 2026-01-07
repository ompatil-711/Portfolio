import React from 'react';

const ContributionGraph = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <h3 className="text-xl font-bold text-white mb-6 self-start">Contribution History</h3>
      
      <div className="w-full overflow-x-auto p-4 rounded-xl bg-white/5 border border-white/10 scrollbar-hide">
        {/* This fetches your REAL graph from GitHub.
            Color: 22c55e (Your Green Brand Color)
            User: ompatil-711
        */}
        <img 
          src="https://ghchart.rshah.org/22c55e/ompatil-711" 
          alt="Om's Github Contribution Graph" 
          className="min-w-[700px] w-full"
        />
      </div>
      
      <p className="text-xs text-gray-500 mt-4 font-mono">
        * Data is fetched in real-time from GitHub.
      </p>
    </div>
  );
};

export default ContributionGraph;