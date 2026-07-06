import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Features',            path: '/features'  },
  { label: 'Analytics',           path: '/analytics' },
  { label: 'Use Cases',           path: '/use-cases' },
  { label: 'Pricing',             path: '/pricing'   }
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
      // Use mid-screen viewport trigger for precise active section detection
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
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

      // If scrolled to the bottom, highlight the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        currentSection = sections[sections.length - 1];
      }

      setActiveSection(currentSection);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
      if (window.innerWidth > 1024) setMobileOpen(false);
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
    const id = path.replace(/^\//, '') || 'home';
    const element = document.getElementById(id);
    if (element && location.pathname === '/') {
      e.preventDefault();
      const y = element.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      {/* Floating Rectangular Rounded Navbar */}
      <div className="fixed top-0 left-0 right-0 z-[1000] flex justify-center pt-4 px-4 pointer-events-none">
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto w-full max-w-[1100px] relative flex items-center justify-between gap-4 px-5 py-3 rounded-2xl transition-all duration-300"
          style={{
            background: scrolled
              ? 'rgba(10, 10, 22, 0.92)'
              : 'rgba(10, 10, 22, 0.75)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: scrolled
              ? '1px solid rgba(99, 102, 241, 0.25)'
              : '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: scrolled
              ? '0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(99,102,241,0.15), inset 0 1px 0 rgba(255,255,255,0.06)'
              : '0 4px 24px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          {/* ── Logo ── */}
          <Link to="/" onClick={(e) => handleClick(e, '/')} className="flex items-center shrink-0 no-underline gap-2">
            <img src="/official-logo.png" alt="ownTask" className="w-8 h-8 object-contain" />
            <span className="text-xl md:text-2xl font-black italic tracking-tight">
              <span className="text-white">own</span><span className="text-primary">Task</span>
            </span>
          </Link>

          {/* ── Desktop Nav Links — Absolutely Centered ── */}
          {!isMobile && (
            <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-0.5">
              {NAV_LINKS.map((link) => {
                const linkId = link.path.replace(/^\//, '') || 'home';
                const isActive = location.pathname === link.path || activeSection === linkId;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={(e) => handleClick(e, link.path)}
                    className={`relative px-4 py-2 text-[13.5px] font-bold tracking-wide transition-all duration-200 whitespace-nowrap no-underline rounded-xl ${
                      isActive
                        ? 'active text-white bg-white/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]'
                        : 'text-white/55 hover:text-white hover:bg-white/[0.05]'
                    }`}
                    style={isActive ? { color: '#FFFFFF' } : {}}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className="absolute bottom-1 left-4 right-4 h-[2px] bg-gradient-to-r from-indigo-400 to-violet-400 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>
          )}

          {/* ── Desktop CTA Buttons ── */}
          {!isMobile && (
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={onOpenLogin}
                className="px-3.5 py-1.5 text-[13.5px] font-bold text-white/55 hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none rounded-xl hover:bg-white/[0.05]"
              >
                Sign In
              </button>
              <motion.button
                onClick={onOpenDemo}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    '0 0 14px rgba(99,102,241,0.4)',
                    '0 0 26px rgba(99,102,241,0.75)',
                    '0 0 14px rgba(99,102,241,0.4)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="px-5 py-2 rounded-xl text-white text-[13.5px] font-extrabold bg-gradient-to-r from-indigo-500 to-violet-600 hover:brightness-110 border-none transition-all duration-200 cursor-pointer"
              >
                Get Started →
              </motion.button>
            </div>
          )}

          {/* ── Mobile Hamburger ── */}
          {isMobile && (
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(prev => !prev)}
                className="flex items-center justify-center w-9 h-9 rounded-xl border border-white/15 bg-white/[0.06] text-white/80 hover:text-white hover:bg-white/[0.12] transition-all cursor-pointer"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          )}
        </motion.header>
      </div>

      {/* ── Mobile Slide-In Full-Screen Menu ── */}
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
              className="fixed inset-0 z-[998] bg-black/80 backdrop-blur-md"
              style={{ zIndex: 998 }}
            />

            {/* Full-Screen Slide-In Menu Panel */}
            <motion.div
              key="mobile-menu"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-0 z-[999] w-full h-screen bg-[#0A0A18]/98 backdrop-blur-3xl px-8 pt-28 pb-12 flex flex-col justify-between overflow-y-auto"
              style={{ zIndex: 999 }}
            >
              {/* Navigation Links */}
              <div className="flex flex-col gap-4 mt-6">
                {NAV_LINKS.map((link) => {
                  const linkId = link.path.replace(/^\//, '') || 'home';
                  const isActive = location.pathname === link.path || activeSection === linkId;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={(e) => handleClick(e, link.path)}
                      className={`flex items-center justify-between py-4 text-2xl md:text-3xl font-black transition-all no-underline border-b border-white/10 ${
                        isActive
                          ? 'active text-white pl-4 border-l-4 border-l-primary bg-primary/10 rounded-r-2xl'
                          : 'text-white/60 hover:text-white hover:pl-2'
                      }`}
                      style={isActive ? { color: '#FFFFFF' } : {}}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="text-primary text-sm font-mono uppercase tracking-widest">Active</span>}
                    </Link>
                  );
                })}
              </div>

              {/* Bottom CTA Buttons */}
              <div className="flex flex-col gap-4 pt-6 border-t border-white/10 mt-auto">
                <button
                  onClick={() => { setMobileOpen(false); onOpenLogin(); }}
                  className="w-full py-4 text-lg font-extrabold border border-white/20 text-white bg-white/5 hover:bg-white/10 rounded-2xl transition-all cursor-pointer active:scale-[0.98]"
                >
                  Sign In
                </button>
                <button 
                  onClick={() => { setMobileOpen(false); onOpenDemo(); }}
                  className="w-full py-4 rounded-2xl text-white text-lg font-black border-none transition-all duration-200 cursor-pointer active:scale-[0.98]"
                  style={{ background: 'linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)', boxShadow: '0 0 25px rgba(99,102,241,0.5)' }}
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
