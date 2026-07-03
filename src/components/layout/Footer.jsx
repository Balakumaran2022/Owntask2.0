import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaFacebook, FaYoutube, FaGlobe } from 'react-icons/fa';

export default function Footer() {
  const handleClick = (e, id) => {
    if (id.startsWith('http') || id.startsWith('mailto')) return; // Allow external/mail links
    e.preventDefault();
    if (id === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 20;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 10,
        overflow: 'hidden',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        background: 'transparent',
      }}
    >
      <div className="container mx-auto px-6 pt-24 pb-16">
        
        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Logo + About */}
          <div className="flex flex-col gap-4 font-sans">
            <a href="/" onClick={(e) => handleClick(e, '/')} className="flex items-center gap-2 no-underline w-fit">
              <img src="/official-logo.png" alt="ownTask" className="w-7 h-7 object-contain" />
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-white">own</span><span className="text-primary">Task</span>
              </span>
            </a>
            <p className="text-white/50 text-[14px] leading-relaxed mt-1">
              Intelligent task management for growing teams.
            </p>
            <p className="text-white/30 text-[13px] leading-relaxed">
              Part of the iEyal Solutions product family.
            </p>
          </div>

          {/* Column 2: Product */}
          <div className="flex flex-col font-sans">
            <h4 className="text-white/90 font-bold text-[13px] uppercase tracking-widest mb-5">Product</h4>
            <div className="flex flex-col gap-3">
              <a href="#features" onClick={(e) => handleClick(e, 'features')} className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Features</a>
              <a href="#analytics" onClick={(e) => handleClick(e, 'analytics')} className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Analytics</a>
              <a href="#solutions" onClick={(e) => handleClick(e, 'solutions')} className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Use Cases</a>
              <a href="#pricing" onClick={(e) => handleClick(e, 'pricing')} className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Pricing</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Changelog</a>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="flex flex-col font-sans">
            <h4 className="text-white/90 font-bold text-[13px] uppercase tracking-widest mb-5">Company</h4>
            <div className="flex flex-col gap-3">
              <a href="#about" onClick={(e) => handleClick(e, 'about')} className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">About</a>
              <a href="https://ieyalsolutions.com" target="_blank" rel="noreferrer" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">iEyal Solutions</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">ownChat</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">ownCart</a>
              <a href="#" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">ownRewards</a>
            </div>
          </div>

          {/* Column 4: Legal/Contact */}
          <div className="flex flex-col font-sans">
            <h4 className="text-white/90 font-bold text-[13px] uppercase tracking-widest mb-5">Legal & Contact</h4>
            <div className="flex flex-col gap-3">
              <Link to="/legal/privacy" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Privacy Policy</Link>
              <Link to="/legal/terms" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Terms of Service</Link>
              <Link to="/contact" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">Contact Us</Link>
              <a href="mailto:hello@ieyalsolutions.com" className="text-white/50 hover:text-white transition-colors no-underline text-[14px] font-medium">hello@ieyalsolutions.com</a>
            </div>
          </div>

        </div>

        {/* ── Divider ── */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* ── Bottom Section (Copyright + Socials) ── */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 font-sans">
          <div className="text-white/30 text-[13px] font-medium">
            © 2026 iEyal Solutions. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <a href="https://ieyalsolutions.com" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Website">
              <FaGlobe size={18} />
            </a>
            <a href="https://facebook.com/ieyalsolutions" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Facebook">
              <FaFacebook size={18} />
            </a>
            <a href="https://instagram.com/ieyal_solutions?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Instagram">
              <FaInstagram size={18} />
            </a>
            <a href="https://www.youtube.com/@ieyalsolutions" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="YouTube">
              <FaYoutube size={18} />
            </a>
            <a href="https://linkedin.com/company/ieyalsolutions" target="_blank" rel="noreferrer" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="#" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="text-white/40 hover:text-white hover:bg-white/10 p-2.5 rounded-full transition-all" title="GitHub">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
