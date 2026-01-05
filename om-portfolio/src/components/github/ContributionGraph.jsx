import React, { useState } from 'react';

const ContributionGraph = () => {
  const [hoveredDay, setHoveredDay] = useState(null);
  const colors = ["bg-[#161b22]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"];
  
  // Digitally recreated pattern from your screenshots (Quiet Jan-Jul -> Busy Aug-Dec)
  const generatePattern = () => {
    const totalWeeks = 53;
    let data = [];
    for (let i = 0; i < totalWeeks; i++) {
      data.push(Array.from({ length: 7 }, (_, dIndex) => {
        const rand = Math.random();
        if (i < 30) return rand > 0.98 ? 1 : 0; // Quiet period
        if (i < 45) return rand > 0.7 ? Math.floor(rand * 3) + 1 : 0; // Moderate period
        return rand > 0.4 ? Math.floor(rand * 4) + 1 : 1; // Heavy period (End of year)
      }));
    }
    return data;
  };

  const [graphData] = useState(generatePattern());

  return (
    <div className="flex flex-col gap-2 w-full mt-6 select-none relative">
      <div className="flex justify-between text-[10px] text-gray-500 font-mono w-full px-1 uppercase tracking-tighter">
        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
      </div>
      <div className="flex gap-[3px] overflow-hidden h-[100px] flex-row items-center">
        {graphData.map((week, wIndex) => (
          <div key={wIndex} className="flex flex-col gap-[3px]">
            {week.map((level, dIndex) => {
              const uniqueId = `${wIndex}-${dIndex}`;
              return (
                <div 
                  key={dIndex}
                  onMouseEnter={() => setHoveredDay({ id: uniqueId, level })}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px] ${colors[level]} border border-transparent hover:border-white/50 transition-all relative`}
                >
                  {hoveredDay?.id === uniqueId && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded shadow-lg z-50 border border-white/10 pointer-events-none whitespace-nowrap">
                      {level === 0 ? "No contributions" : `${level} contributions`}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContributionGraph;