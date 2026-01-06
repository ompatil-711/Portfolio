import React from 'react';
import { Github, Mail, ArrowUpRight, ArrowUp, Linkedin } from 'lucide-react';

// Import Components
import FloatingNav from './components/FloatingNav';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import BentoGrid from './components/BentoGrid';
import Projects from './components/Projects';
import ContributionGraph from './components/github/ContributionGraph';
import LanguagesBar from './components/github/LanguagesBar';
import PinnedRepos from './components/github/PinnedRepos';

const GITHUB_USERNAME = "ompatil-711";

const App = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="relative min-h-screen bg-[#030014] font-sans text-white selection:bg-green-500/30">
      
      {/* 1. NAVIGATION */}
      <FloatingNav />

      {/* 2. GLOBAL BACKGROUND TEXTURE */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px]" />
      </div>

      {/* 3. HERO SECTION */}
      <Hero />
      
      {/* 4. TECH SCROLLER */}
      <TechMarquee />
      
      {/* 5. ABOUT / SKILLS GRID */}
      <BentoGrid />

      {/* 6. PROJECTS & CERTIFICATIONS */}
      <Projects />

      {/* 7. GITHUB STATS SECTION */}
      <section className="relative z-10 py-32 border-t border-white/5 bg-[#030014]/80 backdrop-blur-3xl">
        <div className="max-w-6xl mx-auto px-6">
           <div className="flex items-center gap-4 mb-10">
              <div className="p-3 rounded-full bg-white/5 border border-white/10">
                <Github className="text-white w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white tracking-tight">Code Activity</h2>
                <p className="text-sm text-gray-400 font-mono uppercase tracking-widest">Live statistics for @{GITHUB_USERNAME}</p>
              </div>
           </div>
           <div className="p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-2xl relative overflow-hidden">
               <ContributionGraph />
               <LanguagesBar />
               <PinnedRepos />
           </div>
        </div>
      </section>

      {/* 8. FOOTER SECTION */}
      <footer className="relative z-10 bg-[#020010] border-t border-white/10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            
            {/* Left: CTA & Info */}
            <div className="space-y-6">
               <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  Open to work
               </div>
               <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]">
                 LET'S<br />
                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">BUILD.</span>
               </h2>
               
               {/* --- UPDATED CONFIDENT TEXT --- */}
               <p className="text-gray-400 max-w-sm text-lg leading-relaxed">
                 Seeking <strong>SDE & Full Stack</strong> roles for the 2026 batch. <br />
                 Focused on building scalable, user-centric systems.
               </p>
               
               <div className="pt-4">
                 <a href="mailto:ompatilll.001@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                   <Mail size={20} /> Say Hello
                 </a>
               </div>
            </div>

            {/* Right: Quick Links */}
            <div className="flex flex-col gap-6 items-start md:items-end min-w-[200px]">
               <a href="https://linkedin.com/in/om-patil-57820a248/" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  LinkedIn <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
               </a>
               <a href="https://github.com/ompatil-711" target="_blank" rel="noreferrer" className="group flex items-center gap-3 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  GitHub <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
               </a>
               <a href="mailto:ompatilll.001@gmail.com" className="group flex items-center gap-3 text-xl font-bold text-gray-400 hover:text-white transition-colors">
                  Email <ArrowUpRight size={20} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
               </a>
               
               <button onClick={scrollToTop} className="mt-8 flex items-center gap-2 text-sm font-mono text-green-500 hover:text-green-400 uppercase tracking-widest transition-colors">
                  Back to Top <ArrowUp size={16} />
               </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-[0.2em]">
             <span>© 2026 Om Patil. All Rights Reserved.</span>
             <span>Designed & Engineered in India</span>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default App;