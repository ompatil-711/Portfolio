import React, { useState, useEffect } from 'react';

const LanguagesBar = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const fetchLanguages = async () => {
      try {
        const response = await fetch('https://api.github.com/users/ompatil-711/repos?per_page=100');
        const data = await response.json();
        
        // Calculate Language Usage Frequency
        const langMap = {};
        let total = 0;

        data.forEach(repo => {
          if (repo.language) {
            langMap[repo.language] = (langMap[repo.language] || 0) + 1;
            total++;
          }
        });

        // Convert to array and sort by usage
        const langArray = Object.keys(langMap)
          .map(lang => ({
            name: lang,
            count: langMap[lang],
            percent: ((langMap[lang] / total) * 100).toFixed(1)
          }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5); // Take top 5

        setLanguages(langArray);
      } catch (error) {
        console.error("Error fetching languages:", error);
      }
    };

    fetchLanguages();
  }, []);

  // Color mapping for common languages
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    "C++": "#f34b7d",
    Java: "#b07219",
    // Fallback color
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