import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { Terminal, Cpu, Layers, Github } from 'lucide-react';

// Import Components
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import BentoGrid from './components/BentoGrid';
import Card from './components/ProjectCard';
import ContributionGraph from './components/github/ContributionGraph';
import LanguagesBar from './components/github/LanguagesBar';
import PinnedRepos from './components/github/PinnedRepos';

const GITHUB_USERNAME = "ompatil-711";

const App = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });

  const projects = [
    { title: "ZenChat", description: "A high-concurrency messaging engine designed for scale.", tags: ["React", "Node.js", "Redis"], color: "bg-purple-500", icon: Terminal },
    { title: "Agro-Aid AI", description: "Precision agriculture system powered by Machine Learning.", tags: ["Python", "FastAPI", "Docker"], color: "bg-cyan-500", icon: Cpu },
    { title: "Sentiment Engine", description: "Deep Learning research project comparing BiLSTM and Transformer architectures.", tags: ["NLP", "TensorFlow"], color: "bg-pink-500", icon: Layers }
  ];

  return (
    <main className="relative min-h-screen bg-[#030014] font-sans text-white selection:bg-green-500/30">
      <FloatingNav githubUsername={GITHUB_USERNAME} />

      {/* BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      <Hero />
      <TechMarquee />
      <BentoGrid />

      {/* PROJECTS SECTION */}
      <div id="projects" ref={container} className="relative z-10 mt-32 mb-32 scroll-mt-20">
        {projects.map((project, i) => {
          const targetScale = 1 - ( (projects.length - i) * 0.05 );
          return <Card key={i} i={i} {...project} progress={scrollYProgress} range={[i * 0.25, 1]} targetScale={targetScale} />
        })}
      </div>

      {/* GITHUB SECTION */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-[#030014]/80 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto px-6">
           <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-full bg-white/5 border border-white/10"><Github className="text-white w-6 h-6" /></div>
              <div><h2 className="text-2xl font-bold text-white tracking-tight">Code Activity</h2><p className="text-sm text-gray-400 font-mono uppercase tracking-widest">Live statistics for @{GITHUB_USERNAME}</p></div>
           </div>
           <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden">
               <ContributionGraph />
               <LanguagesBar />
               <PinnedRepos />
           </div>
           <div className="max-w-2xl mx-auto text-center mt-32 pb-20">
             <h2 className="text-[12vw] md:text-[12rem] font-black tracking-tighter mb-8 hover:text-green-400 transition-colors leading-[0.8] opacity-50">LET'S<br/>TALK.</h2>
             <div className="mt-16 text-xs text-gray-600 font-mono uppercase tracking-[0.5em]">© 2026 Om Patil. Inspired by Mane Architecture.</div>
           </div>
        </div>
      </section>
    </main>
  );
};

export default App;