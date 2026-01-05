import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink, Terminal, Cpu, Layers } from 'lucide-react';

// --- CONFIGURATION ---
const GITHUB_USERNAME = "ompatil-711";

// --- CARD COMPONENT ---
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
        className="flex flex-col relative h-[500px] w-[1000px] rounded-3xl border border-white/10 bg-[#0a0a0a]/90 backdrop-blur-xl shadow-2xl overflow-hidden"
      >
        <div className={`absolute top-0 left-0 w-full h-2 ${color}`} />
        
        <div className="p-12 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-bold text-white">{title}</h2>
            <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
               <Icon size={24} className="text-white" />
            </div>
          </div>
          
          <div className="flex-1">
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">
              {description}
            </p>
            <div className="flex gap-3 flex-wrap">
               {tags.map(tag => (
                 <span key={tag} className="px-4 py-2 rounded-lg border border-white/10 text-sm font-medium text-gray-300 bg-white/5 hover:bg-white/10 transition-colors">
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-6">
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white transition-colors">
              <Github size={20} /> Source Code
            </a>
            <a href="#" className="flex items-center gap-2 font-bold text-gray-300 hover:text-white transition-colors">
              <ExternalLink size={20} /> Live Demo
            </a>
          </div>
        </div>

        {/* Ambient Glow */}
        <div className={`absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full blur-[120px] opacity-10 ${color}`} />
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
      description: "A high-concurrency messaging engine designed for scale. Capable of handling 10k+ concurrent connections with sub-100ms latency using RabbitMQ message queues and Socket.io streams.",
      tags: ["React", "Node.js", "RabbitMQ", "Redis", "Socket.io"],
      color: "bg-purple-500",
      icon: Terminal
    },
    {
      title: "Agro-Aid AI",
      description: "Precision agriculture system powered by Machine Learning. Integrates a Random Forest classifier to analyze soil metrics (NPK, pH) and serve crop recommendations via a REST API.",
      tags: ["Python", "Scikit-Learn", "FastAPI", "React", "Docker"],
      color: "bg-cyan-500",
      icon: Cpu
    },
    {
      title: "Sentiment Engine",
      description: "Deep Learning research project comparing BiLSTM and Transformer architectures for real-time sentiment analysis on large-scale social data sets.",
      tags: ["Deep Learning", "NLP", "TensorFlow", "Python"],
      color: "bg-pink-500",
      icon: Layers
    }
  ];

  return (
    <main className="relative min-h-screen bg-[#030014] selection:bg-purple-500/30 font-sans text-white">
      
      {/* BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-20" />
        <motion.div 
          animate={{ x: [0, 100, -100, 0], y: [0, -100, 100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ x: [0, -150, 150, 0], y: [0, 150, -150, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 h-screen flex flex-col justify-center px-6 items-center text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 blur-[80px] opacity-20" />
          <h1 className="relative text-7xl md:text-9xl font-bold tracking-tighter mb-6 bg-gradient-to-b from-white via-white to-white/50 bg-clip-text text-transparent">
            OM PATIL
          </h1>
        </motion.div>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed z-10">
          Full Stack Engineer. <br /> Designing systems that <span className="text-purple-400 font-bold">think</span> and interfaces that <span className="text-cyan-400 font-bold">breathe</span>.
        </motion.p>
        <motion.div animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-12 text-sm text-gray-500 font-mono flex flex-col items-center gap-2">
          SCROLL TO EXPLORE
          <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent" />
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <div ref={container} className="relative z-10 mt-[10vh] mb-[10vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05 );
          return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })}
      </div>

      {/* GITHUB STATS SECTION (Crash-Proof Hybrid) */}
      <section className="relative z-10 py-32 border-t border-white/10 bg-[#030014]/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 text-center">
           <h2 className="text-4xl font-bold mb-12 text-white">Code Activity</h2>
           
           <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-20">
             
             {/* Card 1: Contributions + REAL GRAPH IMAGE */}
             <div className="p-8 rounded-3xl bg-[#0d1117] border border-white/10 text-left hover:border-green-500/50 transition-colors shadow-2xl overflow-hidden">
                
                {/* Header */}
                <div className="flex items-center gap-3 mb-6 relative z-10">
                  <Github className="text-green-400" />
                  <h3 className="font-bold text-lg text-white">GitHub Contributions</h3>
                </div>

                {/* Hardcoded Stats (Safe) */}
                <div className="grid grid-cols-2 gap-6 mb-8 relative z-10">
                  <div>
                    <div className="text-3xl font-bold text-white mb-1">2026</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Target Batch</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400 mb-1">Active</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">Status</div>
                  </div>
                </div>

                {/* THE GRAPH (SVG Image - 100% Safe) */}
                <div className="relative z-10">
                  <img 
                    src={`https://ghchart.rshah.org/39d353/${GITHUB_USERNAME}`} 
                    alt="GitHub Contribution Graph"
                    className="w-full opacity-90 hover:opacity-100 transition-opacity"
                    style={{ minHeight: '100px' }} // Prevents layout shift
                  />
                  <p className="text-[10px] text-gray-500 mt-3 font-mono">
                    * Live data sourced from {GITHUB_USERNAME}
                  </p>
                </div>

             </div>

             {/* Card 2: Top Languages (Manual Animation - 100% Safe) */}
             <div className="p-8 rounded-3xl bg-[#0d1117] border border-white/10 text-left hover:border-blue-500/30 transition-colors shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <Cpu className="text-blue-400" />
                  <h3 className="font-bold text-lg text-white">Top Languages</h3>
                </div>
                <div className="space-y-4">
                  {/* JS */}
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-300">
                      <span>JavaScript / TypeScript</span>
                      <span className="text-blue-400">55%</span>
                    </div>
                    <div className="h-2 bg-[#161b22] rounded-full overflow-hidden">
                      <motion.div initial={{ width: 0 }} whileInView={{ width: "55%" }} transition={{ duration: 1, delay: 0.2 }} className="h-full bg-blue-500" />
                    </div>
                  </div>
                  {/* Python */}
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-300">
                      <span>Python (ML)</span>
                      <span className="text-green-400">30%</span>
                    </div>
                    <div className="h-2 bg-[#161b22] rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: "30%" }} transition={{ duration: 1, delay: 0.3 }} className="h-full bg-green-500" />
                    </div>
                  </div>
                  {/* C++ */}
                  <div>
                    <div className="flex justify-between text-sm mb-1 text-gray-300">
                      <span>C++ (DSA)</span>
                      <span className="text-purple-400">15%</span>
                    </div>
                    <div className="h-2 bg-[#161b22] rounded-full overflow-hidden">
                       <motion.div initial={{ width: 0 }} whileInView={{ width: "15%" }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-purple-500" />
                    </div>
                  </div>
                </div>
             </div>

           </div>

           {/* Footer Links */}
           <div className="max-w-3xl mx-auto">
             <h3 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 hover:text-green-400 transition-colors cursor-pointer text-white">
               <a href="mailto:om@example.com">Let's Build.</a>
             </h3>
             <div className="flex justify-center gap-12 text-lg font-medium text-gray-400">
               <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
               <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
               <a href="#" className="hover:text-white transition-colors">Resume</a>
             </div>
           </div>
           
           <div className="mt-20 text-sm text-gray-600">
             © 2026 Om Patil. Engineered with React & Framer Motion.
           </div>
        </div>
      </section>
      
    </main>
  );
};

export default App;