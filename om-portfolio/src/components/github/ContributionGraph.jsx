import React, { useState, useEffect } from 'react';
import { GitCommit, Calendar, Zap, Award, Loader2, BookOpen } from 'lucide-react';

const ContributionGraph = () => {
  const [stats, setStats] = useState({
    totalCommits: 0,
    activeDays: 0,
    publicRepos: 0,
    loading: true,
    error: false // Track if the commit API fails
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch Basic Profile Data (Highly Reliable)
        const profileRes = await fetch('https://api.github.com/users/ompatil-711');
        const profileData = await profileRes.json();
        
        // 2. Fetch Contributions (Can be flaky, so we wrap it safely)
        const contribRes = await fetch('https://github-contributions-api.jogruber.de/v4/ompatil-711');
        
        let total = 0;
        let days = 0;
        let commitError = false;

        if (contribRes.ok) {
           const contribData = await contribRes.json();
           
           // Safe Calculation: Total Commits
           if (contribData.total) {
             Object.values(contribData.total).forEach(c => total += c);
           }

           // Safe Calculation: Active Days
           if (contribData.contributions) {
              contribData.contributions.forEach(year => {
                 if (year.days) {
                    year.days.forEach(day => {
                       if (day.count > 0) days++;
                    });
                 }
              });
           }
        } else {
           commitError = true; // API failed (Rate limit or downtime)
        }

        setStats({
          totalCommits: total,
          activeDays: days,
          publicRepos: profileData.public_repos || 0, // Fallback data
          loading: false,
          error: commitError
        });

      } catch (error) {
        console.error("Error fetching data:", error);
        // Even if it crashes, stop loading so we can show the fallback
        setStats(prev => ({ ...prev, loading: false, error: true }));
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <h3 className="text-xl font-bold text-white mb-6 self-start">Contribution History</h3>
      
      {/* 1. The Graph */}
      <div className="w-full overflow-hidden rounded-xl bg-white/5 border border-white/10 p-4 mb-8">
        <img 
          src="https://ghchart.rshah.org/22c55e/ompatil-711" 
          alt="Om's Github Contribution Graph" 
          className="w-full min-w-[700px] opacity-80 hover:opacity-100 transition-opacity"
        />
      </div>

      {/* 2. STATS GRID */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4">
        
        {/* Card 1: SMART COMMITS CARD
            Logic: If commits are 0 (API fail), show Repositories instead. 
            Never show "0".
        */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group">
          {stats.error || stats.totalCommits === 0 ? (
             // FALLBACK VIEW (If API Fails)
             <>
               <BookOpen size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
               <span className="text-2xl font-black text-white">
                 {stats.loading ? "-" : stats.publicRepos}
               </span>
               <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Repositories</span>
             </>
          ) : (
             // SUCCESS VIEW
             <>
               <GitCommit size={24} className="text-green-500 group-hover:scale-110 transition-transform" />
               <span className="text-2xl font-black text-white">
                 {stats.loading ? <Loader2 size={20} className="animate-spin" /> : stats.totalCommits}
               </span>
               <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Total Commits</span>
             </>
          )}
        </div>

        {/* Card 2: Active Days (Or Stars if Days fail) */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group">
          <Calendar size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-white">
             {stats.loading ? "-" : (stats.activeDays > 0 ? stats.activeDays : "Active")}
          </span>
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">
             {stats.activeDays > 0 ? "Days Coded" : "Status"}
          </span>
        </div>

        {/* Card 3: Batch */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group">
          <Award size={24} className="text-purple-400 group-hover:scale-110 transition-transform" />
          <span className="text-2xl font-black text-white">2026</span>
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">Target Batch</span>
        </div>

        {/* Card 4: Status */}
        <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors group">
          <Zap size={24} className="text-yellow-400 group-hover:scale-110 transition-transform" />
          <span className="text-xl font-black text-white">Open</span>
          <span className="text-xs text-gray-400 font-mono uppercase tracking-wider">To Work</span>
        </div>

      </div>
      
      <p className="text-xs text-gray-500 mt-6 font-mono self-start">
        * Github activity synced via public API.
      </p>
    </div>
  );
};

export default ContributionGraph;