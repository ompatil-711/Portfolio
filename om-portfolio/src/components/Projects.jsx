import { useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';
import ProjectCard from './ProjectCard'; 
import { MessageCircle, Leaf, Award, CheckCircle2, Cpu, Code2, Globe, ExternalLink, Cloud, Network, BarChart3 } from 'lucide-react'; 

// --- PROJECTS DATA ---
const projects = [
  {
    title: "ZenChat",
    description: "A fault-tolerant, real-time messaging platform. I engineered a backend with self-healing RabbitMQ consumers to ensure 99.9% uptime and used Socket.io for bi-directional communication. Solved complex CORS issues to bridge Vercel (Frontend) and Render (Backend).",
    tags: ["React", "Node.js", "Socket.io", "RabbitMQ", "MERN"],
    color: "#22c55e", 
    icon: MessageCircle,
    repoLink: "https://github.com/ompatil-711", 
    demoLink: "https://zenchat.online", 
    image: "/ZenChat.png" // <--- UPDATED PATH
  },
  {
    title: "Agro-Aid",
    description: "Precision agriculture system featuring ML models with 95% accuracy for crop yield prediction. Integrated a Google Translate widget for real-time multi-language support and engineered weather forecasting with 80%+ precision for smart irrigation.",
    tags: ["JavaScript", "Machine Learning", "HTML5/CSS3", "API Integration"],
    color: "#eab308", 
    icon: Leaf,
    repoLink: "https://github.com/ompatil-711/Agro-Aid-Portfolio", 
    demoLink: "https://ompatil-711.github.io/Agro-Aid-Portfolio/", 
    image: "/Agro-Aid.png" // <--- UPDATED PATH
  }
];

// --- CERTIFICATIONS DATA ---
const certifications = [
  // 1. CODING NINJA
  {
    title: "DSA in C++",
    issuer: "Coding Ninja",
    desc: "Excellence Certificate (Above 90%) in Data Structures & Algorithms.",
    date: "2024",
    icon: Code2,
    color: "from-blue-500 to-cyan-500",
    link: "https://certificate.codingninjas.com/verify/af621ae460dca168"
  },
  
  // 2. SMARTBRIDGE
  {
    title: "Full Stack Development",
    issuer: "SmartBridge",
    desc: "Hands-on MERN stack development and deployment certification.",
    date: "2024",
    icon: Globe,
    color: "from-green-500 to-emerald-500",
    link: "https://skillwallet.smartinternz.com/guided_projects/certificates/23ad3e314e2a2b43b4c720507cec0723"
  },

  // 3. REMAINING (Chronological)
  {
    title: "Cloud Computing Architecture", 
    issuer: "NPTEL (IIT Madras)",
    desc: "Comprehensive study of cloud virtualization, distributed systems, and scalable infrastructure.",
    date: "2024",
    icon: Cloud,
    color: "from-cyan-500 to-blue-600",
    link: "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S35290289730616908.pdf"
  },
  {
    title: "Network Engineering Fundamentals", 
    issuer: "Google",
    desc: "Deep dive into TCP/IP protocols, DNS, routing, and physical layer infrastructure.",
    date: "2024",
    icon: Network,
    color: "from-indigo-500 to-purple-600",
    link: "https://www.coursera.org/account/accomplishments/verify/E24QUH5QAUCP"
  },
  {
    title: "Generative AI Engineering", 
    issuer: "IBM Watsonx",
    desc: "Certified in Generative AI fundamentals, prompt engineering, and model application.",
    date: "2025",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/82c78a4846b94cd1ab4cea57c4f49da9"
  },
  {
    title: "Data-Driven Marketing Analysis", 
    issuer: "NPTEL (IIT Kharagpur)",
    desc: "Statistical analysis of market trends and consumer behavior modeling using data analytics.",
    date: "2025",
    icon: BarChart3,
    color: "from-orange-500 to-red-600",
    link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM1/Ecertificates/110/noc25-mg45/Course/NPTEL25MG45S124280272404713432.pdf"
  }
];

// --- INTERNAL COMPONENT: STACKING CERT CARD ---
const CertCard = ({ i, title, issuer, desc, date, icon: Icon, color, link, progress, range, targetScale }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'start start'] });
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-[35vh] flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, top: `calc(10vh + ${i * 25}px)` }} 
        className={`relative flex flex-col w-full max-w-[800px] p-8 rounded-3xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.3)] overflow-hidden group hover:border-white/20 transition-colors z-10`}
      >
        {/* Dynamic Gradient Border/Glow */}
        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${color}`} />
        
        <div className="flex justify-between items-start mb-6">
           <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-white/5 border border-white/10`}>
                 <Icon size={24} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
                <p className="text-sm font-mono text-blue-400">{issuer}</p>
              </div>
           </div>
           
           {/* View Certificate Button */}
           <a 
             href={link} 
             target="_blank" 
             rel="noreferrer"
             className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer z-20"
           >
             <ExternalLink size={12} /> View Credential
           </a>
        </div>

        <p className="text-lg text-gray-400 font-light leading-relaxed mb-6">
           {desc}
        </p>

        <div className="mt-auto flex justify-between items-center">
           <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-green-500">
             <CheckCircle2 size={14} /> Verified Credential
           </div>
           <span className="text-xs font-mono text-gray-600">{date}</span>
        </div>

      </motion.div>
    </div>
  )
}


// --- MAIN COMPONENT ---
const Projects = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <div className="relative">
      
      {/* 1. PROJECTS SECTION (Correct ID applied) */}
      <section id="projects" className="mt-32 mb-32 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 mb-16">
           <h2 className="text-xs font-bold text-green-500 uppercase tracking-[0.5em] mb-4">
              Selected Works
           </h2>
           <h3 className="text-4xl md:text-5xl font-black text-white tracking-tighter italic">
              ENGINEERING <br /> REAL-WORLD SOLUTIONS.
           </h3>
        </div>

        <div className="flex flex-col gap-12">
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      {/* 2. CERTIFICATIONS SECTION (Correct ID applied) */}
      <section id="certifications" ref={container} className="relative pb-64 scroll-mt-20"> 
         
         {/* Background Connector Line */}
         <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent z-0" />

         <div className="max-w-7xl mx-auto px-6 mb-10 text-center relative z-10">
             <h2 className="text-xs font-bold text-blue-500 uppercase tracking-[0.5em] mb-4">
               Qualifications
             </h2>
             <h3 className="text-4xl font-black text-white tracking-tighter italic">
               CERTIFIED EXPERTISE.
             </h3>
         </div>

         {certifications.map((cert, i) => {
           const targetScale = 1 - ((certifications.length - i) * 0.05);
           return (
             <CertCard 
               key={i} 
               i={i} 
               {...cert} 
               progress={scrollYProgress} 
               range={[i * 0.25, 1]} 
               targetScale={targetScale} 
             />
           );
         })}

         {/* BLENDING GRADIENT OVERLAY */}
         <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#030014] to-transparent z-20 pointer-events-none" />
      </section>
      
    </div>
  );
};

export default Projects;