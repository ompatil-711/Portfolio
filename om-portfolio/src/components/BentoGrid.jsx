import { Globe, Code2, Zap, Terminal, Database, Layout, Server, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Stagger effect for children
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-left"
      >
        <h2 className="text-xs font-bold text-green-500 uppercase tracking-[0.5em] mb-4">
          Technical Arsenal
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
          BUILT FOR PERFORMANCE. <br /> GROUNDED IN LOGIC.
        </h3>
      </motion.div>

      {/* 3-COLUMN LAYOUT */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto"
      >
        
        {/* 1. FULL STACK (Dominant Card) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-2 p-10 rounded-3xl bg-[#0a0a0a] border border-white/10 group hover:border-green-500/30 transition-colors duration-500 relative overflow-hidden flex flex-col justify-between min-h-[280px]"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
             <Layout size={200} className="text-green-500" />
          </div>
          <div className="z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Globe className="text-green-500" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Full Stack Development</h3>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              I build scalable web applications using the <strong>MERN Stack</strong> (MongoDB, Express, React, Node.js). Experienced in handling REST APIs and integrating <strong>Microservices</strong> architecture.
            </p>
          </div>
        </motion.div>

        {/* 2. DSA & LOGIC (Strongest Suit) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-1 p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-colors duration-500 flex flex-col justify-between min-h-[280px] group"
        >
          <div className="p-4 w-fit rounded-xl bg-blue-500/10 border border-blue-500/20 group-hover:scale-110 transition-transform duration-500">
            <Code2 className="text-blue-500" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-3 uppercase tracking-tight">DSA & C++</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Certified in <strong>Data Structures & Algorithms</strong>. I prioritize efficient memory management and optimized logic using <strong>C++</strong>.
            </p>
          </div>
        </motion.div>

        {/* 3. DATABASE (SQL + Mongo) */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-colors duration-500 group"
        >
          <div className="flex items-center gap-4 mb-4">
            <Database className="text-cyan-500 group-hover:rotate-12 transition-transform duration-500" size={24} />
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">Data Persistence</h3>
          </div>
          <p className="text-gray-400 text-sm">
             Proficient in both <strong>SQL (MySQL)</strong> and <strong>NoSQL (MongoDB)</strong>. Experience with <strong>Redis</strong> for caching.
          </p>
        </motion.div>

        {/* 4. REAL-TIME & BACKEND */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-yellow-500/30 transition-colors duration-500 group"
        >
           <div className="flex items-center gap-4 mb-4">
            <Zap className="text-yellow-500 group-hover:scale-110 transition-transform duration-500" size={24} />
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">Real-Time</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Building live interaction systems using <strong>Socket.io</strong> and message queues like <strong>RabbitMQ</strong>.
          </p>
        </motion.div>

        {/* 5. ESSENTIAL TOOLS */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="p-6 rounded-3xl bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-colors duration-500 group"
        >
           <div className="flex items-center gap-4 mb-4">
            <Terminal className="text-purple-500 group-hover:-translate-y-1 transition-transform duration-500" size={24} />
            <h3 className="text-lg font-bold text-white uppercase tracking-tight">Tools</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Streamlining development with <strong>Git/GitHub</strong>, <strong>Postman</strong> for API testing, and VS Code.
          </p>
        </motion.div>

        {/* 6. LOGIC & DEV BANNER */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          className="md:col-span-3 p-8 rounded-3xl bg-gradient-to-r from-[#0a0a0a] to-[#050505] border border-white/5 hover:border-white/10 transition-colors duration-500 flex items-center justify-between relative overflow-hidden group"
        >
          <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
             <div className="p-4 bg-white/5 rounded-full border border-white/10">
                <Cpu className="text-white" size={32} />
             </div>
             <div>
                <h3 className="text-xl font-bold text-white italic tracking-tight">"Logic-driven & Development-ready."</h3>
                <p className="text-gray-500 text-sm mt-1">
                   Leveraging <strong>C++</strong> for structured algorithmic problem-solving and <strong>JavaScript</strong> for dynamic application development.
                </p>
             </div>
          </div>
          {/* Decorative Background Icon */}
          <Server size={180} className="text-white/[0.02] absolute -right-10 -bottom-10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
        </motion.div>

      </motion.div>
    </section>
  )
}

export default BentoGrid;