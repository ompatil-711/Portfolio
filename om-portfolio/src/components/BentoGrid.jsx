import { Globe, Cpu, Terminal, Zap, Server, ShieldCheck, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const BentoGrid = () => {
  return (
    <section id="about" className="py-32 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="mb-16 text-left">
        <h2 className="text-xs font-bold text-green-500 uppercase tracking-[0.5em] mb-4">
          Core Expertise
        </h2>
        <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
          BRIDGING COMPLEXITY <br /> WITH SCALABILITY.
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">
        
        {/* Full Stack Main Card */}
        <div className="md:col-span-2 md:row-span-2 p-10 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 flex flex-col justify-end group hover:border-green-500/30 transition-all duration-500 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:opacity-20 transition-opacity">
             <Layers size={150} className="text-green-500" />
          </div>
          <div className="z-10">
            <Globe className="text-green-500 mb-6" size={48} />
            <h3 className="text-3xl font-bold text-white mb-4 uppercase tracking-tighter">Full Stack Engineering</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              I architect end-to-end digital ecosystems. From responsive React frontends to robust Node.js backends, I ensure every layer is optimized for the modern web.
            </p>
          </div>
        </div>

        {/* Real-time Infrastructure - Dedicated Card */}
        <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all flex items-center gap-8 group">
          <div className="p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20 group-hover:scale-110 transition-transform">
            <Zap className="text-purple-500" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tight">Real-time Data Systems</h3>
            <p className="text-gray-400 text-sm">
              Implementing low-latency communication using **WebSockets (Socket.io)** and managing high-concurrency event streams.
            </p>
          </div>
        </div>

        {/* Distributed Messaging / Redis */}
        <div className="md:col-span-1 p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-blue-500/30 transition-all flex flex-col justify-between group">
          <Database className="text-blue-500 group-hover:rotate-12 transition-transform" size={32} />
          <div>
            <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Backend Scaling</h3>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Redis • RabbitMQ</p>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="md:col-span-1 p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-pink-500/30 transition-all flex flex-col justify-between group">
          <Server className="text-pink-500 group-hover:-translate-y-1 transition-transform" size={32} />
          <div>
            <h3 className="text-lg font-bold text-white mb-1 tracking-tight">Infrastructure</h3>
            <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">Docker • AWS</p>
          </div>
        </div>

        {/* Security & Clean Code */}
        <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/5 hover:border-green-400/20 transition-all flex items-center justify-between overflow-hidden relative">
          <div className="z-10">
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tighter italic">"Clean code is my default."</h3>
            <p className="text-gray-500 text-sm italic">Scalable patterns, TypeScript type-safety, and secure API design.</p>
          </div>
          <ShieldCheck size={100} className="text-white/5 absolute -right-4 -bottom-4 rotate-12" />
        </div>

        {/* Machine Learning Integration */}
        <div className="md:col-span-2 p-8 rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 hover:border-cyan-500/30 transition-all flex items-center gap-6 group">
          <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/20">
            <Cpu className="text-cyan-500" size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-tight">ML Integration</h3>
            <p className="text-gray-400 text-sm">
              Embedding predictive intelligence into applications using Python-based AI frameworks.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default BentoGrid;