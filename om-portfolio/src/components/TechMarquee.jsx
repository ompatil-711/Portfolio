import { motion } from 'framer-motion';

const TechMarquee = () => {
  const techs = ["C++","HTML", "CSS" , "Javascript" , "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "MongoDB", "Docker", "AWS","M.L"];
  return (
    <div className="w-full py-8 border-y border-white/5 bg-white/[0.02] relative overflow-hidden flex">
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] pointer-events-none" />
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 whitespace-nowrap px-4"
      >
        {[...techs, ...techs, ...techs].map((tech, i) => (
          <div key={i} className="text-4xl md:text-6xl font-black text-white/5 uppercase tracking-tighter italic px-4">
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;