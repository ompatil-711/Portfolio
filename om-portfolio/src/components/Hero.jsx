import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Shield, Activity, FileText, Mail, Github, Linkedin, Check } from 'lucide-react';

const Hero = () => {
  // --- PARALLAX LOGIC ---
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  // --- BACKGROUND PARTICLES ---
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }));

  // --- TERMINAL TYPING LOGIC ---
  const [text, setText] = useState("");
  const fullText = "> INITIALIZING... CONNECTING_TO_SERVER... ";
  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) i = 0;
    }, 150);
    return () => clearInterval(typing);
  }, []);

  // --- COPY EMAIL LOGIC ---
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    // UPDATED: Your specific email address
    navigator.clipboard.writeText("ompatilll.001@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#030014]"
    >
      
      {/* === BACKGROUND LAYERS === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px]" />
        <motion.div animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]" />
        {particles.map((p) => (
          <motion.div key={p.id} initial={{ top: "100%", left: `${p.x}%`, opacity: 0 }} animate={{ top: "-10%", opacity: [0, 1, 0] }} transition={{ duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }} className="absolute bg-white/20 rounded-full" style={{ width: p.size, height: p.size }} />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10" />
      </div>


      {/* === MAIN CONTENT === */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Ready to Deploy</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-7xl md:text-[9.5rem] font-black leading-[0.8] tracking-tighter text-white uppercase italic">
              OM <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 not-italic">PATIL</span>
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="space-y-6 border-l-2 border-white/10 pl-8">
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              I am a <span className="text-white font-medium">Full Stack Engineer</span> building scalable web applications and resilient backend systems.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Full Stack', 'MERN', 'Data Structures', 'System Design'].map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="flex items-center gap-6 pt-4">
            <a href="#projects" className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs tracking-widest rounded-2xl transition-all hover:bg-green-400 hover:scale-105 hover:shadow-[0_0_30px_#22c55e60]">
              EXPLORE WORKS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: THE COMMAND HUB CARD */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative w-full max-w-[420px] aspect-[4/5] group">
            <div className="absolute inset-0 bg-purple-500/10 rounded-[4rem] blur-3xl transform translate-z-[-40px]" />
            <div className="absolute inset-0 rounded-[3.5rem] bg-[#0a0a0a] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl overflow-hidden p-8 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                    <Terminal size={16} className="text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-[9px] font-mono text-gray-500 uppercase tracking-widest">ID: SDE-PROFILE</h4>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest animate-pulse">Scanning...</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-green-500/10 border border-green-500/20">
                  <Activity size={12} className="text-green-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-green-500 font-bold uppercase tracking-tighter">Online</span>
                </div>
              </div>

              {/* Photo Area */}
              <div className="flex flex-col items-center relative z-20 my-4">
                <div className="relative mb-6">
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -inset-6 border border-white/5 rounded-full" />
                  <motion.div animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className="absolute -inset-2 border-2 border-dotted border-green-500/20 rounded-full" />
                  
                  <div className="relative w-36 h-36 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl">
                    <img src="YOUR_STUDIO_PNG_PATH" alt="Om Patil" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
                  </div>
                  <div className="absolute -bottom-3 -right-3 p-2 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-xl flex items-center gap-2">
                    <Sparkles size={14} className="text-yellow-400 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase italic">Full Stack Engineer</h3>
              </div>

              {/* === COMMAND GRID (Updated Links) === */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                 
                 {/* RESUME BUTTON */}
                 <a 
                   href="/Om_Patil_Resume.pdf" 
                   target="_blank" 
                   className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3 cursor-pointer"
                 >
                    <div className="p-1.5 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300">
                       <FileText size={14} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[8px] font-mono text-gray-500 uppercase">Artifact</span>
                       <span className="text-[9px] font-bold text-white uppercase tracking-wider">Resume</span>
                    </div>
                 </a>
                 
                 {/* EMAIL BUTTON */}
                 <button onClick={handleCopy} className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3 cursor-pointer">
                    <div className="p-1.5 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300">
                       {copied ? <Check size={14} /> : <Mail size={14} />}
                    </div>
                    <div className="flex flex-col text-left">
                       <span className="text-[8px] font-mono text-gray-500 uppercase">Contact</span>
                       <span className="text-[9px] font-bold text-white uppercase tracking-wider">{copied ? "Copied!" : "Email"}</span>
                    </div>
                 </button>

                 {/* GITHUB BUTTON */}
                 <a 
                    href="https://github.com/ompatil-711" 
                    target="_blank" 
                    rel="noreferrer"
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3"
                 >
                    <div className="p-1.5 bg-gray-500/20 rounded-lg text-gray-300 group-hover:text-white">
                       <Github size={14} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[8px] font-mono text-gray-500 uppercase">Repo</span>
                       <span className="text-[9px] font-bold text-white uppercase tracking-wider">GitHub</span>
                    </div>
                 </a>

                 {/* LINKEDIN BUTTON */}
                 <a 
                    href="https://www.linkedin.com/in/om-patil-57820a248/" 
                    target="_blank"
                    rel="noreferrer" 
                    className="group p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-3"
                 >
                    <div className="p-1.5 bg-blue-600/20 rounded-lg text-blue-500 group-hover:text-blue-400">
                       <Linkedin size={14} />
                    </div>
                    <div className="flex flex-col">
                       <span className="text-[8px] font-mono text-gray-500 uppercase">Connect</span>
                       <span className="text-[9px] font-bold text-white uppercase tracking-wider">LinkedIn</span>
                    </div>
                 </a>
              </div>

              {/* Terminal Footer */}
              <div className="mt-auto pt-4 border-t border-white/5">
                 <div className="p-3 bg-black/50 rounded-lg border border-white/5 font-mono text-[9px] text-green-500/80 overflow-hidden whitespace-nowrap">
                    {text}<span className="animate-pulse">_</span>
                 </div>
              </div>

            </div>

            {/* Floating Tag */}
            <motion.div style={{ transform: "translateZ(60px)" }} className="absolute -bottom-4 -right-4 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl hidden md:block group-hover:-translate-y-2 transition-transform">
              <div className="flex items-center gap-2 text-white">
                <Shield size={14} className="text-green-500 shadow-[0_0_10px_#22c55e]" />
                <span className="text-[9px] font-mono tracking-widest uppercase font-black italic">Verified_Core</span>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;