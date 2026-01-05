import { Github, Star, GitFork } from 'lucide-react';

const PinnedRepos = () => {
  const repos = [
    { name: "ZenChat", desc: "Real-time messaging engine", lang: "TypeScript", color: "bg-[#3178c6]", star: 1, fork: 0 },
    { name: "Agro-Aid", desc: "ML precision agriculture", lang: "Jupyter", color: "bg-[#DA5B0B]", star: 0, fork: 0 },
    { name: "Portfolio", desc: "React Portfolio", lang: "JavaScript", color: "bg-[#f1e05a]", star: 0, fork: 0 },
  ];
  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold text-gray-300 mb-4 uppercase tracking-widest text-[10px]">Top Repositories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {repos.map((repo, i) => (
          <div key={i} className="p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-2 mb-2"><Github size={16} className="text-gray-400 group-hover:text-green-400" /><span className="font-bold text-white text-sm">{repo.name}</span></div>
            <p className="text-xs text-gray-400 mb-4 h-8 line-clamp-2">{repo.desc}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
             <div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${repo.color}`} />{repo.lang}</div>
             <div className="flex gap-2"><span className="flex items-center gap-1"><Star size={12} />{repo.star}</span><span className="flex items-center gap-1"><GitFork size={12} />{repo.fork}</span></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PinnedRepos;