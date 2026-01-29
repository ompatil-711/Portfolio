import React, { useState, useEffect } from 'react';
import { Book, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';

const PinnedRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. ADD YOUR MISSING REPO NAMES HERE
  // The code will ALWAYS show these specific repos first.
  const PRIORITY_NAMES = [
    "ZenChat", 
    "Agro-Aid-Portfolio", 
    "Portfolio",
    // Add the names of your other 3 repos here exactly as they appear on GitHub:
    // "Project-Name-4",
    // "Project-Name-5",
    // "Project-Name-6"
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch all repos (increased limit to ensure we find everything)
        const response = await fetch('https://api.github.com/users/ompatil-711/repos?sort=updated&per_page=100');
        const allRepos = await response.json();
        
        const priorityRepos = [];
        const otherRepos = [];

        allRepos.forEach(repo => {
          if (PRIORITY_NAMES.includes(repo.name)) {
            priorityRepos.push(repo);
          } else {
            // CHANGE: We now include EVERYTHING (even forks) to make sure you get 6 items
            otherRepos.push(repo);
          }
        });

        // SORTING
        // 1. Sort Priority repos by your manual order
        priorityRepos.sort((a, b) => {
          return PRIORITY_NAMES.indexOf(a.name) - PRIORITY_NAMES.indexOf(b.name);
        });

        // 2. Sort the rest by Stars (so the best remaining ones show up)
        otherRepos.sort((a, b) => b.stargazers_count - a.stargazers_count);

        // COMBINE: Take Priority + Others to get exactly 6
        const finalSelection = [...priorityRepos, ...otherRepos].slice(0, 6);

        setRepos(finalSelection);
      } catch (error) {
        console.error("Error fetching repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-10">
        <Loader2 className="animate-spin text-green-500" size={32} />
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <h3 className="text-xl font-bold text-white mb-6">Pinned Repositories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repos.map((repo) => (
          <a 
            key={repo.id} 
            href={repo.html_url} 
            target="_blank" 
            rel="noreferrer"
            className="group flex flex-col p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-white/10 transition-all"
          >
            <div className="flex items-center justify-between mb-3">
               <div className="flex items-center gap-2 text-white font-bold">
                 <Book size={16} className="text-gray-400 group-hover:text-green-400" />
                 {repo.name}
               </div>
               <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity" />
            </div>

            <p className="text-sm text-gray-400 flex-1 mb-4 line-clamp-2">
              {repo.description || "No description provided."}
            </p>

            <div className="flex items-center gap-4 text-xs font-mono text-gray-500">
               {repo.language && (
                 <span className="flex items-center gap-1">
                   <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                   {repo.language}
                 </span>
               )}
               <span className="flex items-center gap-1 group-hover:text-yellow-400 transition-colors">
                 <Star size={12} /> {repo.stargazers_count}
               </span>
               <span className="flex items-center gap-1 group-hover:text-blue-400 transition-colors">
                 <GitFork size={12} /> {repo.forks_count}
               </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PinnedRepos;