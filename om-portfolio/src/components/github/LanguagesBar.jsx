import React from 'react';

const LanguagesBar = () => {
  // Hardcoded data to bypass API rate limits
  const languages = [
    { name: 'JavaScript', percent: 45.5, count: 50 },
    { name: 'HTML', percent: 25.0, count: 30 },
    { name: 'CSS', percent: 20.0, count: 25 },
    { name: 'Python', percent: 5.5, count: 10 },
    { name: 'Java', percent: 4.0, count: 5 }
  ];

  // Color mapping for common languages
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    "C++": "#f34b7d",
    Java: "#b07219",
    default: "#ccc"
  };

  return (
    <div className="w-full py-6 border-b border-white/5">
       <h3 className="text-xl font-bold text-white mb-4">Most Used Languages</h3>
       
       {/* The Bar */}
       <div className="flex w-full h-3 rounded-full overflow-hidden mb-4">
          {languages.map((lang) => (
            <div 
              key={lang.name}
              style={{ width: `${lang.percent}%`, backgroundColor: colors[lang.name] || colors.default }}
              className="h-full"
            />
          ))}
       </div>

       {/* The Legend */}
       <div className="flex flex-wrap gap-4">
          {languages.map((lang) => (
             <div key={lang.name} className="flex items-center gap-2">
                <div 
                  className="w-3 h-3 rounded-full" 
                  style={{ backgroundColor: colors[lang.name] || colors.default }} 
                />
                <span className="text-sm font-bold text-gray-300">{lang.name}</span>
                <span className="text-xs font-mono text-gray-500">{lang.percent}%</span>
             </div>
          ))}
       </div>
    </div>
  );
};

export default LanguagesBar;