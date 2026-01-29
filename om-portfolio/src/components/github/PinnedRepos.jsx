import React from 'react';
import { Book, Star, GitFork, ExternalLink } from 'lucide-react';

const PinnedRepos = () => {
  // Hardcoded repositories to bypass API rate limits
  const repos = [
    {
      id: 1,
      name: "ZenChat",
      html_url: "https://github.com/ompatil-711/ZenChat",
      description: "A real-time messaging application built with MERN stack and Socket.io for instant communication.",
      language: "JavaScript",
      stargazers_count: 12,
      forks_count: 4
    },
    {
      id: 2,
      name: "Agro-Aid-Portfolio",
      html_url: "https://github.com/ompatil-711/Agro-Aid-Portfolio",
      description: "AI-powered agricultural assistant designed to help farmers detect crop diseases early.",
      language: "Python",
      stargazers_count: 8,
      forks_count: 2
    },
    {
        id: 3,
        name: "Portfolio",
        html_url: "https://github.com/ompatil-711/Portfolio",
        description: "My personal developer portfolio built with React, Vite, and Tailwind CSS.",
        language: "JavaScript",
        stargazers_count: 5,
        forks_count: 1
    },
    {
        id: 4,
        name: "E-Commerce-API",
        html_url: "https://github.com/ompatil-711/E-Commerce-API", // Example URL, replace if needed
        description: "A robust backend API for e-commerce platforms handling payments and inventory.",
        language: "Node.js",
        stargazers_count: 3,
        forks_count: 0
    }
  ];

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
               <span className="flex items-center gap-1">
                 <Star size={12} /> {repo.stargazers_count}
               </span>
               <span className="flex items-center gap-1">
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