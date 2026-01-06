import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Shield, Globe, Cpu, Layers, Code2 } from 'lucide-react';

const Hero = () => {
  // --- PARALLAX CARD LOGIC ---
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

  // --- DYNAMIC BACKGROUND PARTICLES ---
  // We create an array of 20 particles with random positions
  const particles = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // Random horizontal %
    y: Math.random() * 100, // Random vertical start %
    size: Math.random() * 3 + 1, // Random size
    duration: Math.random() * 10 + 10, // Random speed (10s to 20s)
    delay: Math.random() * 5,
  }));

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#030014]"
    >
      
      {/* === DYNAMIC BACKGROUND SYSTEM === */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* 1. Static Grid (Base Layer) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* 2. Breathing Gradient Orbs (Moving Light) */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" 
        />

        {/* 3. Floating Data Particles (The Dynamic Part) */}
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ top: "100%", left: `${p.x}%`, opacity: 0 }}
            animate={{ top: "-10%", opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
            className="absolute bg-white/10 rounded-full"
            style={{ width: p.size, height: p.size }}
          />
        ))}

        {/* 4. Bottom Fade (Seamless Blend) */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030014] to-transparent z-10" />
      </div>


      {/* === CONTENT GRID === */}
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* LEFT: INFO & TECH STACK */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.5)]"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">System Online: v2026</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              className="text-7xl md:text-[9.5rem] font-black leading-[0.8] tracking-tighter text-white uppercase italic"
            >
              OM <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/20 not-italic">PATIL</span>
            </motion.h1>
          </div>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="space-y-6 border-l-2 border-white/10 pl-8"
          >
            <p className="text-xl text-gray-400 max-w-xl leading-relaxed">
              I am a <span className="text-white font-medium">Systems Engineer</span> focused on architecting high-concurrency backend engines and scalable digital infrastructure.
            </p>
            
            {/* Clean Tech Stack Tags */}
            <div className="flex flex-wrap gap-3">
              {['Node.js', 'React', 'Python', 'Docker', 'Redis', 'AWS'].map((tech, i) => (
                <motion.span 
                  key={tech} 
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 + (i * 0.05) }}
                  className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono text-gray-400 uppercase tracking-widest hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex items-center gap-6 pt-4"
          >
            <a href="#projects" className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs tracking-widest rounded-2xl transition-all hover:bg-green-400 hover:scale-105 hover:shadow-[0_0_30px_#22c55e60]">
              EXPLORE WORKS <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: FLOATING 3D ARTIFACT */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[420px] aspect-[4/5] group"
          >
            {/* Card Depth Glow */}
            <div className="absolute inset-0 bg-purple-500/10 rounded-[4rem] blur-3xl transform translate-z-[-40px]" />
            
            {/* Main Card */}
            <div className="absolute inset-0 rounded-[3.5rem] bg-[#0a0a0a] border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.6)] backdrop-blur-3xl overflow-hidden p-8 flex flex-col justify-between">
              
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Terminal size={14} className="text-gray-500" />
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest font-bold italic">Node_ID: 711</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Layers size={16} className="text-white/40" />
                </div>
              </div>

              {/* Central Photo */}
              <div className="flex flex-col items-center">
                <div className="relative mb-6">
                  {/* Glowing Ring behind photo */}
                  <div className="absolute inset-0 bg-green-500/20 rounded-full blur-2xl group-hover:bg-green-500/30 transition-all duration-700" />
                  <div className="relative w-48 h-48 rounded-full border border-white/10 overflow-hidden bg-gradient-to-b from-white/5 to-transparent shadow-2xl">
                    <img 
                      src="YOUR_STUDIO_PNG_PATH" 
                      alt="Om Patil" 
                      className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 p-3 bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-xl z-20">
                    <Sparkles size={18} className="text-yellow-400 animate-pulse" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tighter uppercase leading-none italic">Software Lead</h3>
                <div className="flex items-center gap-2 mt-2">
                   <Globe size={10} className="text-gray-600" />
                   <span className="text-[9px] font-mono text-gray-600 uppercase tracking-[0.2em]">Based in India</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="grid grid-cols-2 gap-3 pt-8 border-t border-white/5">
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-1 transition-colors hover:bg-white/[0.05]">
                   <div className="flex items-center gap-2">
                      <Cpu size={12} className="text-blue-400" />
                      <span className="text-[9px] font-mono text-gray-600 uppercase font-bold">Engine</span>
                   </div>
                   <span className="text-xs font-bold text-white uppercase tracking-tighter">Scalability</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 flex flex-col gap-1 transition-colors hover:bg-white/[0.05]">
                   <div className="flex items-center gap-2">
                      <Code2 size={12} className="text-purple-400" />
                      <span className="text-[9px] font-mono text-gray-600 uppercase font-bold">Code</span>
                   </div>
                   <span className="text-xs font-bold text-white uppercase tracking-tighter">Architecture</span>
                </div>
              </div>
            </div>

            {/* Floating Info Tag (3D Popout) */}
            <motion.div 
              style={{ transform: "translateZ(60px)" }}
              className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl hidden md:block group-hover:-translate-y-2 transition-transform duration-500"
            >
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