import React, { useState, useEffect } from 'react';
import { Book, Star, GitFork, ExternalLink, Loader2 } from 'lucide-react';

const PinnedRepos = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  // UPDATED: This list now matches your GitHub profile screenshot exactly
  const PRIORITY_NAMES = [
    "ompatil-711",             // 1. Your Profile Repo
    ".coding",                 // 2. DSA / C++
    "Mini_Project-JavaScript", // 3. JS Projects
    "Agro-Aid-Portfolio",      // 4. Agro Aid
    "ZenChat",                 // 5. ZenChat
    "Portfolio"                // 6. This Portfolio
  ];

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // Fetch all repos
        const response = await fetch('https://api.github.com/users/ompatil-711/repos?sort=updated&per_page=100');
        const allRepos = await response.json();
        
        // Filter specifically for the repos in our PRIORITY list
        // This ensures we get exactly the 6 you want, in the right order
        const pinnedRepos = [];
        
        PRIORITY_NAMES.forEach(name => {
          const repo = allRepos.find(r => r.name === name);
          if (repo) {
            pinnedRepos.push(repo);
          }
        });

        setRepos(pinnedRepos);
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