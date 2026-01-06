import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Sparkles, ArrowRight, Terminal, Shield, Globe, Cpu } from 'lucide-react';

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
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        
        {/* LEFT: CONTENT SECTION */}
        <div className="lg:col-span-6 space-y-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-white/10 bg-white/5 backdrop-blur-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-mono text-gray-400 uppercase tracking-[0.2em]">Available for projects</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="text-7xl md:text-[9rem] font-black leading-[0.8] tracking-tighter text-white uppercase italic"
          >
            OM <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/20 not-italic">PATIL</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-md leading-relaxed"
          >
            Crafting <span className="text-white">robust backends</span> and intelligent systems. Focused on performance and clean architecture.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="flex items-center gap-8 pt-4"
          >
            <a href="#projects" className="group flex items-center gap-4 px-10 py-5 bg-white text-black font-black text-xs tracking-widest rounded-xl transition-all hover:bg-green-400">
              VIEW WORK <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* RIGHT: THE REFINED 3D ARTIFACT CARD */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full max-w-[400px] aspect-[4/5] cursor-default"
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-white/5 rounded-[4rem] blur-2xl transform translate-z-[-40px]" />
            
            {/* Main Card Body */}
            <div className="absolute inset-0 rounded-[3rem] bg-[#0d0d0d] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl p-10 flex flex-col justify-between">
              
              {/* Top Section */}
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Full Stack</h4>
                  <p className="text-lg font-bold text-white tracking-tight">Software Engineer</p>
                </div>
                <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                  <Terminal size={18} className="text-white" />
                </div>
              </div>

              {/* Central Photo */}
              <div className="flex justify-center relative">
                <div className="w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl">
                  <img 
                    src="YOUR_STUDIO_PNG_PATH" 
                    alt="Om Patil" 
                    className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0" 
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 p-3 bg-black border border-white/10 rounded-2xl shadow-xl">
                    <Sparkles size={18} className="text-yellow-400 animate-pulse" />
                </div>
              </div>

              {/* Bottom Details Section */}
              <div className="grid grid-cols-2 gap-4 pt-8 border-t border-white/5">
                <div className="flex items-center gap-3">
                  <Globe size={14} className="text-gray-500" />
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Cpu size={14} className="text-gray-500" />
                  <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Node.js / React</span>
                </div>
              </div>
            </div>

            {/* Floating Glass Tag */}
            <motion.div 
              style={{ transform: "translateZ(50px)" }}
              className="absolute -bottom-6 -right-6 p-5 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl shadow-2xl hidden md:block"
            >
              <div className="flex items-center gap-3">
                <Shield size={16} className="text-green-400" />
                <span className="text-[9px] font-mono text-white tracking-widest uppercase font-black">Verified Dev</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;