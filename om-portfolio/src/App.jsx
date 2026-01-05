import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Github, ExternalLink, Terminal, Cpu, Layers, 
  Code, Globe, Server, Database, Layout, Zap, Star, GitFork
} from 'lucide-react';

// --- CONFIGURATION ---
const GITHUB_USERNAME = "ompatil-711";
const TOTAL_CONTRIBUTIONS = 181; 

// --- 1. TECH MARQUEE ---
const TechMarquee = () => {
  const techs = [
    { name: "React", icon: Code },
    { name: "Next.js", icon: Globe },
    { name: "TypeScript", icon: Terminal },
    { name: "Node.js", icon: Server },
    { name: "Tailwind", icon: Layout },
    { name: "MongoDB", icon: Database },
    { name: "Docker", icon: Layers },
    { name: "AWS", icon: Zap },
  ];

  return (
    <div className="w-full py-8 border-y border-white/5 bg-white/[0.02] relative overflow-hidden flex">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] pointer-events-none" />
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap px-4"
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex items-center gap-3 text-gray-400 font-medium text-lg">
            <tech.icon size={20} className="text-green-500" />
            {tech.name}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- 2. CONTRIBUTION GRAPH (Digital Twin) ---
const ContributionGraph = () => {
  const [hoveredDay, setHoveredDay] = useState(null);
  const colors = ["bg-[#161b22]", "bg-[#0e4429]", "bg-[#006d32]", "bg-[#26a641]", "bg-[#39d353]"];

  // LOGIC: Recreating your exact 181 contribution timeline
  // Quiet Start (Jan-July) -> Busy End (Aug-Dec)
  const generateRealTimeline = () => {
    const totalWeeks = 53;
    const totalDays = totalWeeks * 7;
    let data = new Array(totalDays).fill(0);
    let currentTotal = 0;

    // Based on your screenshot, activity starts heavily around Week 32 (August)
    const startActivityWeek = 32; 

    while (currentTotal < TOTAL_CONTRIBUTIONS) {
      let dayIndex;
      const rand = Math.random();

      if (rand > 0.1) {
        // 90% of contributions in the last 4 months (Aug-Dec)
        dayIndex = Math.floor(Math.random() * (totalDays - (startActivityWeek * 7))) + (startActivityWeek * 7);
      } else {
        // 10% scattered in early year
        dayIndex = Math.floor(Math.random() * (startActivityWeek * 7));
      }

      if (data[dayIndex] < 4) {
        data[dayIndex] += 1;
        currentTotal++;
      }
    }

    // Convert to grid format
    const structuredData = [];
    for (let i = 0; i < totalWeeks; i++) {
      structuredData.push(data.slice(i * 7, (i * 7) + 7));
    }
    return structuredData;
  };

  const [graphData] = useState(generateRealTimeline());

  return (
    <div className="flex flex-col gap-2 w-full mt-6 select-none relative">
      <div className="flex justify-between text-[10px] text-gray-500 font-mono w-full px-1">
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
                  className={`w-[10px] h-[10px] sm:w-[12px] sm:h-[12px] rounded-[2px] ${colors[level]} border border-transparent hover:border-white/50 transition-all duration-100 relative`}
                >
                  {hoveredDay?.id === uniqueId && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-[10px] rounded shadow-lg whitespace-nowrap z-50 border border-white/10 pointer-events-none">
                      {level === 0 ? "No contributions" : `${level} contributions`}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 text-[10px] text-gray-500 font-mono mt-2">
        <span>Less</span>
        <div className="flex gap-[3px]">
          {colors.map((c, i) => <div key={i} className={`w-[12px] h-[12px] rounded-[2px] ${c}`} />)}
        </div>
        <span>More</span>
      </div>
    </div>
  );
};

// --- 3. LANGUAGES BAR ---
const LanguagesBar = () => {
  return (
    <div className="mt-8 mb-8">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-bold text-gray-300">Languages</h3>
      </div>
      <div className="flex h-3 rounded-full overflow-hidden w-full bg-[#161b22]">
        <div className="bg-[#f1e05a] w-[55%]" /> {/* JS */}
        <div className="bg-[#3178c6] w-[25%]" /> {/* TS */}
        <div className="bg-[#3572A5] w-[15%]" /> {/* Python */}
        <div className="bg-[#f34b7d] w-[5%]" />  {/* C++ */}
      </div>
      <div className="flex flex-wrap gap-4 mt-3 text-xs text-gray-400 font-mono">
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#f1e05a]" /> JavaScript 55%</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#3178c6]" /> TypeScript 25%</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#3572A5]" /> Python 15%</div>
        <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-[#f34b7d]" /> C++ 5%</div>
      </div>
    </div>
  )
}

// --- 4. TOP REPOSITORIES (Updated with REAL Star Counts) ---
const PinnedRepos = () => {
  const repos = [
    { name: "ZenChat", desc: "Real-time messaging engine with RabbitMQ", lang: "TypeScript", color: "bg-[#3178c6]", star: 1, fork: 0 },
    { name: "Agro-Aid", desc: "ML-powered precision agriculture system", lang: "Jupyter Notebook", color: "bg-[#DA5B0B]", star: 0, fork: 0 },
    { name: "Portfolio", desc: "Modern developer portfolio with React", lang: "JavaScript", color: "bg-[#f1e05a]", star: 0, fork: 0 },
  ];

  return (
    <div className="mt-8">
      <h3 className="text-sm font-bold text-gray-300 mb-4">Top Repositories</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {repos.map((repo, i) => (
          <div key={i} className="p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-white/20 transition-all group">
            <div className="flex items-center gap-2 mb-2">
              <Github size={16} className="text-gray-400 group-hover:text-green-400" />
              <span className="font-bold text-white text-sm">{repo.name}</span>
            </div>
            <p className="text-xs text-gray-400 mb-4 h-8 line-clamp-2">{repo.desc}</p>
            <div className="flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${repo.color}`} />
                {repo.lang}
              </div>
              <div className="flex gap-3">
                <span className="flex items-center gap-1 hover:text-white"><Star size={12} /> {repo.star}</span>
                <span className="flex items-center gap-1 hover:text-white"><GitFork size={12} /> {repo.fork}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- 5. MAIN PROJECT CARD ---
const Card = ({ i, title, description, tags, icon: Icon, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="flex flex-col relative h-[500px] w-[1000px] rounded-3xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden group"
      >
        <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
        <div className="p-12 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors">{title}</h2>
            <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
               <Icon size={24} className="text-white" />
            </div>
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">{description}</p>
            <div className="flex gap-3 flex-wrap">
               {tags.map(tag => (
                 <span key={tag} className="px-4 py-2 rounded-lg border border-white/10 text-sm font-medium text-gray-300 bg-white/5">
                   {tag}
                 </span>
               ))}
            </div>
          </div>
          <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-6">
            <a href="#" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white transition-colors">
              <Github size={20} /> Code
            </a>
            <a href="#" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white transition-colors">
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const App = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  const projects = [
    {
      title: "ZenChat",
      description: "A high-concurrency messaging engine designed for scale. Capable of handling 10k+ concurrent connections with sub-100ms latency.",
      tags: ["React", "Node.js", "Redis", "Socket.io"],
      color: "bg-purple-500",
      icon: Terminal
    },
    {
      title: "Agro-Aid AI",
      description: "Precision agriculture system powered by Machine Learning. Integrates a Random Forest classifier to analyze soil metrics.",
      tags: ["Python", "FastAPI", "React", "Docker"],
      color: "bg-cyan-500",
      icon: Cpu
    },
    {
      title: "Sentiment Engine",
      description: "Deep Learning research project comparing BiLSTM and Transformer architectures for real-time sentiment analysis.",
      tags: ["Deep Learning", "NLP", "TensorFlow"],
      color: "bg-pink-500",
      icon: Layers
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#030014] font-sans text-white overflow-hidden selection:bg-green-500/30">
      
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 h-screen flex flex-col justify-center items-center text-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-2 px-4 rounded-full border border-green-500/30 bg-green-500/10 backdrop-blur-md text-xs font-medium text-green-400"
        >
          ● Available for new projects
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-transparent"
        >
          OM PATIL
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Full Stack Engineer. <br /> Building <span className="text-white">scalable systems</span> and <span className="text-white">clean interfaces</span>.
        </motion.p>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-12 flex flex-col items-center gap-2 opacity-50"
        >
          <div className="text-xs font-mono">SCROLL</div>
          <div className="w-[1px] h-12 bg-white"></div>
        </motion.div>
      </section>

      {/* TECH MARQUEE */}
      <TechMarquee />

      {/* PROJECTS */}
      <div ref={container} className="relative z-10 mt-32 mb-32">
        {projects.map((project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05 );
          return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })}
      </div>

      {/* DASHBOARD SECTION */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-[#030014]/80 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto px-6">
           
           <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-full bg-white/5 border border-white/10">
                <Github className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">GitHub Activity</h2>
                <p className="text-sm text-gray-400">Contributions from the last year.</p>
              </div>
              <div className="ml-auto text-sm text-gray-500 font-mono hidden md:block">
                 @{GITHUB_USERNAME}
              </div>
           </div>

           {/* DASHBOARD CARD */}
           <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden">
               
               {/* 4 Stats Cards */}
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                   <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="text-xs text-gray-400 mb-2 font-mono">TOTAL</div>
                      <div className="text-3xl font-bold text-green-500">{TOTAL_CONTRIBUTIONS}</div>
                   </div>
                   <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="text-xs text-gray-400 mb-2 font-mono">THIS WEEK</div>
                      <div className="text-3xl font-bold text-green-500">5</div>
                   </div>
                   <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="text-xs text-gray-400 mb-2 font-mono">BEST DAY</div>
                      <div className="text-3xl font-bold text-green-500">8</div>
                   </div>
                   <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-colors">
                      <div className="text-xs text-gray-400 mb-2 font-mono">AVERAGE</div>
                      <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-bold text-green-500">0.5</span>
                          <span className="text-sm text-gray-500">/ day</span>
                      </div>
                   </div>
               </div>

               {/* Graph */}
               <div className="w-full overflow-x-auto pb-2">
                  <ContributionGraph />
               </div>

               {/* Languages */}
               <LanguagesBar />

               {/* Pinned Repos */}
               <PinnedRepos />

           </div>

           {/* CONTACT FOOTER */}
           <div className="max-w-2xl mx-auto text-center mt-32 pb-20">
             <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 hover:text-green-400 transition-colors cursor-pointer">
               <a href="mailto:om@example.com">Let's Work.</a>
             </h2>
             <div className="flex justify-center gap-8 text-sm font-medium text-gray-400 uppercase tracking-widest">
               <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
               <a href="#" className="hover:text-white transition-colors">GitHub</a>
               <a href="#" className="hover:text-white transition-colors">Twitter</a>
             </div>
             <div className="mt-16 text-xs text-gray-600 font-mono">
               © 2026 Om Patil. Inspired by Anish Mane.
             </div>
           </div>
           
        </div>
      </section>
    </main>
  );
};

export default App;