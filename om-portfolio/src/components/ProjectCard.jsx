// FILE: src/components/ProjectCard.jsx
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const ProjectCard = ({ title, description, tags, icon: Icon, color, image, repoLink, demoLink }) => {
  
  return (
    <div className="w-full flex items-center justify-center py-12 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col md:flex-row relative min-h-[550px] w-full max-w-[1100px] rounded-[2rem] border border-white/10 bg-[#0a0a0a] shadow-[0_0_50px_rgba(0,0,0,0.2)] overflow-hidden group"
      >
        
        {/* --- LEFT PANEL: INFO --- */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col h-full relative z-10 border-r border-white/5 bg-[#0a0a0a]">
           <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-4">
               <div className="p-3 rounded-xl bg-white/5 border border-white/10" style={{ borderColor: `${color}40` }}>
                 <Icon size={28} style={{ color: color }} />
               </div>
               <h2 className="text-4xl font-black text-white uppercase tracking-tighter">{title}</h2>
            </div>
          </div>

          <div className="flex-1 pr-4 flex flex-col justify-center">
            <p className="text-lg text-gray-400 leading-relaxed mb-8 font-light">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
               {tags.map(tag => (
                 <span key={tag} className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono font-bold text-gray-300 uppercase tracking-widest">
                   {tag}
                 </span>
               ))}
            </div>
          </div>

          <div className="mt-auto flex items-center gap-6 pt-6 md:pt-0">
            <a href={repoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-white transition-colors">
              <Github size={16} /> Source
            </a>
            {demoLink && (
              <a href={demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-400 hover:text-green-300 transition-colors">
                <ExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* --- RIGHT PANEL: VISUAL --- */}
        <div className="w-full md:w-1/2 min-h-[300px] md:min-h-full bg-gradient-to-br from-black to-[#050505] relative overflow-hidden group-hover:bg-[#0f0f0f] transition-colors duration-500">
           
           {/* Dynamic Background Pattern */}
           <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
           
           <div className="absolute inset-0 flex items-center justify-center p-8">
              {image ? (
                <img src={image} alt={title} className="rounded-xl border border-white/10 shadow-2xl transform group-hover:scale-105 group-hover:-rotate-1 transition-transform duration-500 object-cover w-full h-auto max-h-full" />
              ) : (
                // Fallback "Code Window" illustration
                <div className="w-full max-w-sm p-4 rounded-xl bg-[#0a0a0a] border border-white/10 shadow-2xl group-hover:border-white/20 transition-colors">
                   <div className="flex gap-2 mb-4">
                     <div className="w-3 h-3 rounded-full bg-red-500/50" />
                     <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                     <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   </div>
                   <div className="space-y-3 opacity-50">
                     <div className="h-2 w-3/4 bg-white/20 rounded-full" />
                     <div className="h-2 w-1/2 bg-white/20 rounded-full" />
                     <div className="h-2 w-full bg-white/20 rounded-full" />
                     <div className="h-2 w-5/6 bg-white/20 rounded-full" />
                   </div>
                   <div className="mt-12 flex justify-center">
                      <Code2 size={64} className="text-white/5" />
                   </div>
                </div>
              )}
           </div>
        </div>

      </motion.div>
    </div>
  )
}

export default ProjectCard;