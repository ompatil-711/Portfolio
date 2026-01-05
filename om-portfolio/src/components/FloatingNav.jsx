import { motion } from 'framer-motion';
import { Home, User, Briefcase, Github, Linkedin, Mail } from 'lucide-react';

const FloatingNav = ({ githubUsername }) => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto">
    <motion.div 
      initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1, type: "spring" }}
      className="flex items-center gap-6 px-6 py-3 rounded-full bg-[#0a0a0a]/80 border border-white/10 backdrop-blur-xl shadow-2xl"
    >
      <a href="#" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Home size={20} /></a>
      <a href="#about" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><User size={20} /></a>
      <a href="#projects" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Briefcase size={20} /></a>
      <div className="w-[1px] h-4 bg-white/20" />
      <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Github size={20} /></a>
      <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Linkedin size={20} /></a>
      <a href="mailto:om@example.com" className="text-gray-400 hover:text-white hover:scale-110 transition-all"><Mail size={20} /></a>
    </motion.div>
  </div>
);

export default FloatingNav;