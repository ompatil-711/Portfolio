import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, Layers, Github, Linkedin, Mail, Copy, Check } from 'lucide-react';

const FloatingNav = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isCopied, setIsCopied] = useState(false);

  // 1. Essentials Navigation
  const navLinks = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' }, // Ensure href matches section ID
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'projects', icon: Layers, label: 'Work', href: '#projects' },
  ];

  // 2. Action Links
  const socialLinks = [
    { id: 'github', icon: Github, href: 'https://github.com/ompatil-711' },
    { id: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/om-patil-57820a248/' },
  ];

  // --- SCROLL SPY LOGIC ---
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Trigger when section is halfway up

      // Find the current section
      let currentSection = 'home';
      
      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
          }
        }
      });

      setActiveTab(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("ompatilll.001@gmail.com");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // Smooth Scroll Handler
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-auto">
      
      {/* Main Container */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200, damping: 20 }}
        className="flex items-center gap-2 p-2 rounded-full bg-[#030014]/80 border border-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]"
      >
        
        {/* --- NAVIGATION GROUP --- */}
        <div className="flex items-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => scrollToSection(e, link.href)} // Smooth Scroll Click
              className="relative flex items-center justify-center px-4 py-3 rounded-full transition-all group cursor-pointer"
            >
              {/* Magnetic Background Pill */}
              {activeTab === link.id && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full border border-white/5"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              
              {/* Icon & Label */}
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

        {/* Vertical Divider */}
        <div className="w-[1px] h-6 bg-white/10 mx-2" />

        {/* --- ACTION GROUP --- */}
        <div className="flex items-center gap-1 pr-1">
           {/* Socials */}
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

           {/* Copy Email Button */}
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