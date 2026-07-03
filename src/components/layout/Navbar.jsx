import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features',            path: '/features'  },
  { label: 'Analytics',           path: '/analytics' },
  { label: 'Use Cases',           path: '/solutions' },
  { label: 'Pricing',             path: '/pricing'   },
  { label: 'About',               path: '/about'     }
];

export default function Navbar({ onOpenLogin, onOpenDemo }) {
  const [scrolled,     setScrolled]     = useState(false);
  const [isMobile,     setIsMobile]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const sections = NAV_LINKS.map(link => link.path.replace(/^\//, '') || 'home');

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      let currentSection = 'home';
      const scrollPosition = window.scrollY + 100; // offset for navbar height
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1200);
      if (window.innerWidth > 1200) setMobileOpen(false);
    };

    handleScroll();
    handleResize();
    window.addEventListener('scroll',  handleScroll);
    window.addEventListener('resize',  handleResize);
    return () => {
      window.removeEventListener('scroll',  handleScroll);
      window.removeEventListener('resize',  handleResize);
    };
  }, []);

  const handleClick = (e, path) => {
    // Remove specific React Router navigation for Analytics to keep it as a single page scrolling section


    e.preventDefault();
    const id = path.replace(/^\//, '') || 'home';
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[100] flex items-center transition-all duration-300 ease-out px-5 md:px-8 ${
          scrolled
            ? 'h-[72px] shadow-xl'
            : 'h-[80px] bg-transparent border-b-transparent'
        }`}
        style={scrolled ? {
          background: 'rgba(18, 18, 40, 0.6)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(255,255,255,0.07)'
        } : {}}
      >
        <div className="w-full max-w-[1240px] mx-auto flex items-center justify-between gap-4">
          {/* ── Logo ── */}
          <Link to="/" onClick={(e) => handleClick(e, '/')} className="flex items-center shrink-0 no-underline gap-2">
            <img src="/official-logo.png" alt="ownTask" className="w-8 h-8 object-contain" />
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              <span className="text-white">own</span><span className="text-primary">Task</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links ── */}
          {!isMobile && (
            <nav className="flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const linkId = link.path.replace(/^\//, '') || 'home';
                const isActive = activeSection === linkId;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleClick(e, link.path)}
                    className={`relative px-3 py-2 text-[14px] font-bold tracking-wide transition-colors duration-200 whitespace-nowrap no-underline ${
                      isActive ? 'text-white' : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute bottom-1 left-3 right-3 h-[2px] bg-white rounded-full glow-white"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>
          )}

          {/* ── Desktop CTA Buttons ── */}
          {!isMobile && (
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenLogin}
                className="px-3 py-1.5 text-[14px] font-bold text-muted-foreground hover:text-primary transition-colors duration-200 cursor-pointer bg-transparent border-none"
              >
                Sign In
              </button>
              <motion.button
                onClick={onOpenDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-sm !rounded-full !px-5 text-white bg-primary hover:bg-primary/90 font-bold border-none transition-all duration-200"
              >
                Get Started →
              </motion.button>
            </div>
          )}

          {/* ── Mobile: Sign In + Hamburger ── */}
          {isMobile && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-primary/20 bg-primary/5 text-primary transition-all"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          )}
        </div>
      </motion.header>

      {/* ── Mobile Slide-Down Menu ── */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-[98] bg-black/50 backdrop-blur-sm"
            />

            {/* Menu Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed top-[76px] left-0 right-0 z-[99] bg-background/98 backdrop-blur-[24px] border-b border-primary/15 px-5 py-4 flex flex-col gap-1"
            >
              {NAV_LINKS.map((link) => {
                const linkId = link.path.replace(/^\//, '') || 'home';
                const isActive = activeSection === linkId;
                return (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={(e) => handleClick(e, link.path)}
                    className={`block px-4 py-3 text-base font-bold rounded-xl transition-all no-underline ${
                      isActive
                        ? 'text-primary bg-primary/10 border border-primary/20'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <div className="pt-2 border-t border-primary/10 mt-1 flex flex-col gap-2">
                <button
                  onClick={() => { setMobileOpen(false); onOpenLogin(); }}
                  className="w-full py-3 text-base font-extrabold border border-primary/20 text-primary bg-primary/5 rounded-xl transition-all cursor-pointer"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => { setMobileOpen(false); onOpenDemo(); }}
                  className="w-full btn !rounded-full mt-2 text-[#050e09] font-black border-none transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #34d399 0%, #6366f1 100%)', boxShadow: '0 0 12px rgba(52,211,153,0.2)' }}
                >
                  Get Started →
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
