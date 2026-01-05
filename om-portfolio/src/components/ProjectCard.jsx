import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Card = ({ i, title, description, tags, icon: Icon, color, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'start start'] });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0 px-4">
      <motion.div style={{ scale, top: `calc(-5vh + ${i * 25}px)` }} className="flex flex-col relative h-[500px] w-full max-w-[1000px] rounded-[2.5rem] border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden group">
        <div className={`absolute top-0 left-0 w-full h-1 ${color}`} />
        <div className="p-12 flex flex-col h-full relative z-10">
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-bold text-white group-hover:text-green-400 transition-colors tracking-tighter uppercase leading-none">{title}</h2>
            <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}><Icon size={24} className="text-white" /></div>
          </div>
          <div className="flex-1">
            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-8">{description}</p>
            <div className="flex gap-2 flex-wrap">
               {tags.map(tag => (<span key={tag} className="px-4 py-1.5 rounded-full border border-white/10 text-[10px] font-mono font-bold text-gray-300 bg-white/5 uppercase tracking-widest">{tag}</span>))}
            </div>
          </div>
          <div className="mt-auto pt-8 border-t border-white/10 flex items-center gap-8">
            <a href="#" className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"><Github size={18} /> Source Code</a>
            <a href="#" className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest text-gray-400 hover:text-white transition-colors"><ExternalLink size={18} /> Live Demo</a>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Card;