import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

const Card = ({ i, title, description, tags, icon: Icon, color, progress, range, targetScale, image, repoLink, demoLink }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: container, 
    offset: ['start end', 'start start'] 
  });
  
  const scale = useTransform(progress, range, [1, targetScale]);
  
  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
      <motion.div 
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} 
        className="relative h-[550px] w-full max-w-[1000px] rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden group flex flex-col md:flex-row"
      >
        
        {/* --- DYNAMIC GLOW EFFECT --- */}
        <div 
          className="absolute -top-[20%] -right-[20%] w-[500px] h-[500px] rounded-full blur-[100px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none"
          style={{ backgroundColor: color }}
        />

        {/* --- LEFT PANEL: CONTENT --- */}
        <div className="w-full md:w-1/2 p-8 md:p-10 flex flex-col h-full relative z-10">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div 
                className="p-2.5 rounded-xl border border-white/10" 
                style={{ backgroundColor: `${color}15`, borderColor: `${color}30` }} // Dynamic background opacity
              >
                <Icon size={20} style={{ color: color }} />
              </div>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter leading-none">{title}</h2>
            </div>
          </div>

          {/* Description */}
          <div className="flex-1">
            <p className="text-lg text-gray-400 leading-relaxed mb-8 font-light">
              {description}
            </p>
            
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
               {tags.map(tag => (
                 <span 
                   key={tag} 
                   className="px-3 py-1 rounded-lg border border-white/10 text-[10px] font-mono font-bold text-gray-400 uppercase tracking-widest hover:text-white hover:border-white/30 transition-colors"
                 >
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-auto pt-6 border-t border-white/5 flex items-center gap-4">
            <a 
              href={repoLink || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-all group/btn"
            >
              <Github size={14} className="text-gray-400 group-hover/btn:text-white transition-colors" /> 
              Source
            </a>
            
            <a 
              href={demoLink || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-black border border-white text-xs font-bold uppercase tracking-widest hover:bg-gray-200 transition-all"
            >
              <ExternalLink size={14} /> 
              Live Demo
            </a>
          </div>
        </div>

        {/* --- RIGHT PANEL: VISUAL / IMAGE --- */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden bg-black/20 border-l border-white/5 group-hover:border-white/10 transition-colors">
            
            {/* Placeholder / Image Logic */}
            <div className="absolute inset-0 flex items-center justify-center">
              {image ? (
                <img 
                   src={image} 
                   alt={title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                /* Fallback "System UI" Pattern if no image is provided */
                <div className="w-full h-full relative bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:16px_16px]">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-64 h-40 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col p-4 shadow-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:scale-105">
                         {/* Mock UI Header */}
                         <div className="flex gap-2 mb-3">
                           <div className="w-2 h-2 rounded-full bg-red-500/50" />
                           <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                           <div className="w-2 h-2 rounded-full bg-green-500/50" />
                         </div>
                         {/* Mock UI Lines */}
                         <div className="space-y-2">
                           <div className="h-2 w-3/4 bg-white/10 rounded-full" />
                           <div className="h-2 w-1/2 bg-white/10 rounded-full" />
                           <div className="h-2 w-full bg-white/10 rounded-full" />
                         </div>
                         <div className="mt-auto flex justify-end">
                            <ArrowUpRight size={16} className="text-white/20" />
                         </div>
                      </div>
                   </div>
                </div>
              )}
            </div>
            
            {/* Overlay Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
        </div>

      </motion.div>
    </div>
  )
}

export default Card;