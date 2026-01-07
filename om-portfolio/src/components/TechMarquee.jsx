import { motion } from 'framer-motion';

const TechMarquee = () => {
  const techs = ["C++", "HTML", "CSS", "Javascript", "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "MongoDB", "Docker", "AWS", "M.L"];

  return (
    <div className="w-full py-10 border-y border-white/5 bg-white/[0.02] relative overflow-hidden flex">
      
      {/* 1. Gradient Overlay (Optional: Makes edges fade out) */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#030014] via-transparent to-[#030014] pointer-events-none" />

      {/* 2. The Moving Track */}
      <motion.div
        className="flex whitespace-nowrap"
        // THE LOGIC: Move left by exactly 50% (the width of one full list)
        animate={{ x: "-50%" }}
        transition={{
          duration: 20,     // Speed: Higher number = Slower
          ease: "linear",   // Smooth constant motion
          repeat: Infinity, // Loop forever
        }}
      >
        {/* 3. Render the list TWICE. 
           Why? When the first list moves off-screen, the second one is there to replace it instantly.
           Then the animation resets to 0% invisible to the user. 
        */}
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="text-5xl font-black text-white/5 uppercase tracking-tighter italic px-8">
            {tech}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechMarquee;