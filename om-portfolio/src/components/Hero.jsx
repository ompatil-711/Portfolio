import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Shield, Zap, Code2 } from 'lucide-react';

const Hero = () => {
  // Parallax Mouse Effect Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseY = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXPos = e.clientX - rect.left;
    const mouseYPos = e.clientY - rect.top;
    x.set(mouseXPos / width - 0.5);
    y.set(mouseYPos / height - 0.5);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="relative z-10 min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#020202]"
    >
      {/* 1. Kinetic Background Background (Grid & Glow) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* LEFT: MINIMALIST IMPACT TEXT */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Deployment: v2026.01</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-black leading-[0.8] tracking-tighter text-white uppercase italic"
          >
            OM <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 not-italic">PATIL</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="flex flex-col gap-4 border-l-2 border-white/10 pl-8"
          >
            <p className="text-xl text-gray-400 max-w-md leading-relaxed">
              I develop <span className="text-white">resilient backends</span> and <span className="text-white">scalable systems</span>. Expertly handling sub-100ms latency.
            </p>
            <div className="flex gap-4 text-gray-600">
               <Code2 size={18} /> <Terminal size={18} /> <Shield size={18} />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex items-center gap-8 pt-4"
          >
            <a href="#projects" className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs tracking-widest rounded-xl transition-all hover:bg-green-400 hover:scale-105 active:scale-95">
              GET STARTED <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: THE 3D PARALLAX ARTIFACT */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[440px] aspect-[4/5]"
          >
            {/* Background Layer (Glass Shadow) */}
            <div className="absolute inset-0 bg-white/5 rounded-[4rem] blur-2xl transform translate-z-[-50px]" />
            
            {/* Middle Layer (Main Body) */}
            <div className="absolute inset-0 rounded-[3rem] bg-[#0a0a0a]/90 border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl p-10 flex flex-col justify-between">
              
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h4 className="text-[10px] font-mono text-gray-600 uppercase tracking-widest">Technical Lead</h4>
                  <div className="text-sm font-bold text-white tracking-widest uppercase italic">Node_Engineer</div>
                </div>
                <Zap size={20} className="text-yellow-400" />
              </div>

              {/* Photo Masked in Geometric Shape */}
              <div className="relative flex justify-center">
                <div className="relative w-56 h-56 rounded-full overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-transparent">
                  <img 
                    src="YOUR_STUDIO_PNG_PATH" 
                    alt="Om Patil" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  />
                </div>
              </div>

              {/* Interactive Status Bar */}
              <div className="space-y-4 pt-6 border-t border-white/5">
                <div className="flex justify-between items-center text-[10px] font-mono uppercase tracking-[0.2em] text-gray-500">
                  <span>Logic Capacity</span>
                  <span className="text-white">99%</span>
                </div>
                <div className="w-full h-1 bg-white/5 rounded-full">
                  <motion.div 
                    initial={{ width: 0 }} whileInView={{ width: '99%' }}
                    className="h-full bg-green-500 shadow-[0_0_10px_#22c55e]" 
                  />
                </div>
              </div>
            </div>

            {/* Front Floating Layer (Glass Info Card) */}
            <motion.div 
              style={{ transform: "translateZ(60px)" }}
              className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl hidden md:block"
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                   <span className="text-[10px] font-mono text-white tracking-widest uppercase font-bold">Encrypted_Sync</span>
                </div>
                <p className="text-[9px] text-gray-400 font-mono leading-tight">AUTH: 711-ALPHA-CORE <br /> STATUS: OPERATIONAL</p>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;