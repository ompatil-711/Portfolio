import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Layers, Github, Linkedin, Mail, Check, Award } from 'lucide-react';

const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isCopied, setIsCopied] = useState(false);

  // Define your sections here
  const navLinks = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' },
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'projects', icon: Layers, label: 'Work', href: '#projects' },
    { id: 'certifications', icon: Award, label: 'Certs', href: '#certifications' },
  ];

  const socialLinks = [
    { id: 'github', icon: Github, href: 'https://github.com/ompatil-711' },
    { id: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/om-patil-57820a248/' },
  ];

  // --- ROBUST SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      // 1. Force "Home" if we are very close to the top (handling mobile bounce)
      if (window.scrollY < 100) {
        setActiveTab('home');
        return;
      }

      // 2. Find which section is closest to the center of the viewport
      let currentSection = 'home';
      let minDistance = Infinity;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Distance from the center of the viewport (window.innerHeight / 2) to the center of the section
          const sectionCenter = rect.top + rect.height / 2;
          const viewportCenter = window.innerHeight / 2;
          const distance = Math.abs(viewportCenter - sectionCenter);

          if (distance < minDistance) {
            minDistance = distance;
            currentSection = link.id;
          }
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ompatilll.001@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      // Smooth scroll with offset for the fixed header
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto">
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center gap-2 p-2 rounded-full bg-[#030014]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)}
              className="relative flex items-center justify-center px-4 py-3 rounded-full transition-all group cursor-pointer"
            >
              {activeTab === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              <div className="relative z-10 flex items-center gap-2">
                 <link.icon 
                   size={18} 
                   className={`transition-colors duration-300 ${activeTab === link.id ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`} 
                 />
                 <AnimatePresence>
                   {activeTab === link.id && (
                     <motion.span 
                       initial={{ opacity: 0, width: 0, overflow: 'hidden' }} 
                       animate={{ opacity: 1, width: 'auto' }}
                       exit={{ opacity: 0, width: 0 }}
                       className="text-[11px] font-bold text-white whitespace-nowrap overflow-hidden"
                     >
                       {link.label}
                     </motion.span>
                   )}
                 </AnimatePresence>
              </div>
            </a>
          ))}
        </div>

        <div className="w-[1px] h-6 bg-white/10 mx-2" />

        <div className="flex items-center gap-1 pr-1">
           {socialLinks.map((social) => (
             <a
               key={social.id}
               href={social.href}
               target="_blank"
               rel="noreferrer"
               className="p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all"
             >
                <social.icon size={18} />
             </a>
           ))}

           <button
             onClick={handleCopyEmail}
             className="relative p-3 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-all group"
           >
              {isCopied ? <Check size={18} className="text-green-500" /> : <Mail size={18} />}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black border border-white/10 rounded-md text-[9px] text-white opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {isCopied ? "Copied!" : "Copy Email"}
              </span>
           </button>
        </div>
      </motion.div>
    </div>
  );
};

export default FloatingNav;