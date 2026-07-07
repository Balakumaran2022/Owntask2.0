import React from 'react';
import { Link } from 'react-router-dom';
import { FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaGlobe, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

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
    <footer className="relative z-10 py-12 px-4 md:px-8 bg-transparent overflow-hidden">
      <div className="container mx-auto max-w-[1100px]">
        
        {/* ── Single Grid 1 Rounded Layout ── */}
        <div className="bg-[#0D0D1C]/90 border border-white/10 rounded-[32px] p-6 md:p-10 backdrop-blur-xl shadow-2xl flex flex-col gap-8">
          
          {/* Top Row: Logo (Italic) + Compact Description + Powered by Badge */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start max-w-md">
              <a href="/" onClick={(e) => handleClick(e, '/')} className="flex items-center gap-2.5 no-underline mb-2.5">
                <img src="/official-logo.png" alt="ownTask" className="w-10 h-10 rounded-full object-cover shadow-md shadow-primary/20" />
                <span className="text-2xl md:text-3xl font-black italic tracking-tight">
                  <span className="text-white">own</span><span className="text-primary">Task</span>
                </span>
              </a>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed m-0 mb-4 font-normal">
                Intelligent task management for growing business teams. Built for visibility, SLA tracking, and accountability.
              </p>
              
              {/* Contact details near description */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-xs md:text-sm font-semibold text-white/80">
                <a href="mailto:hello@ieyalsolutions.com" className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 hover:text-white transition-all no-underline shadow-sm">
                  <FaEnvelope className="text-primary text-sm shrink-0" />
                  <span>hello@ieyalsolutions.com</span>
                </a>
                <a href="tel:+919791467587" className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/10 hover:text-white transition-all no-underline shadow-sm">
                  <FaPhoneAlt className="text-primary text-sm shrink-0" />
                  <span>+91 9791467587</span>
                </a>
              </div>
            </div>

            {/* Compact Powered by Card */}
            <a
              href="https://ownchat.app/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-[#13132B]/80 border border-white/10 hover:border-primary/50 transition-all duration-300 no-underline group shadow-md shrink-0"
            >
              <div className="flex flex-col text-left">
                <span className="text-[9px] uppercase font-extrabold tracking-[0.16em] text-white/40 group-hover:text-primary transition-colors leading-none mb-1">
                  Powered by
                </span>
                <div className="h-6 flex items-center">
                  <img src="/ieyal-logo.png" alt="iEyal Solutions" className="h-full object-contain brightness-110" />
                </div>
              </div>
              <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 group-hover:bg-primary/20 group-hover:border-primary/30 flex items-center justify-center text-white/60 group-hover:text-white transition-all duration-300">
                <span className="text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 font-mono leading-none">↗</span>
              </div>
            </a>
          </div>

          {/* Middle Row: Single Grid 1 Navigation & Legal Links */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-3 text-xs md:text-sm font-semibold text-white/70">
            <a href="#features" onClick={(e) => handleClick(e, 'features')} className="hover:text-white transition-colors no-underline">Features</a>
            <span className="text-white/20">·</span>
            <a href="#analytics" onClick={(e) => handleClick(e, 'analytics')} className="hover:text-white transition-colors no-underline">Analytics</a>
            <span className="text-white/20">·</span>
            <a href="#use-cases" onClick={(e) => handleClick(e, 'use-cases')} className="hover:text-white transition-colors no-underline">Use Cases</a>
            <span className="text-white/20">·</span>
            <a href="#pricing" onClick={(e) => handleClick(e, 'pricing')} className="hover:text-white transition-colors no-underline">Pricing</a>
            <span className="text-white/20">·</span>

            <Link to="/legal/privacy" className="hover:text-white transition-colors no-underline">Privacy Policy</Link>
            <span className="text-white/20">·</span>
            <Link to="/legal/terms" className="hover:text-white transition-colors no-underline">Terms of Service</Link>
            <span className="text-white/20">·</span>
            <button onClick={() => { localStorage.removeItem('owntask_cookie_consent'); window.location.reload(); }} className="hover:text-white transition-colors no-underline bg-transparent border-none text-white/70 hover:text-white cursor-pointer font-semibold p-0 text-xs md:text-sm">Cookie Settings</button>
          </div>

          {/* Bottom Row: Copyright + Social Icons */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 text-xs md:text-sm text-white/50 font-medium">
            <div>
              © 2026 iEyal Solutions. All rights reserved.
            </div>
            <div className="flex items-center gap-2.5 flex-wrap justify-center">
              <a href="https://ieyalsolutions.com" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300" title="Website">
                <FaGlobe size={18} />
              </a>
              <a href="https://facebook.com/ieyalsolutions" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300" title="Facebook">
                <FaFacebook size={18} />
              </a>
              <a href="https://instagram.com/ieyal_solutions?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300" title="Instagram">
                <FaInstagram size={18} />
              </a>
              <a href="https://www.youtube.com/@ieyalsolutions" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300" title="YouTube">
                <FaYoutube size={18} />
              </a>
              <a href="https://linkedin.com/company/ieyalsolutions" target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/[0.04] border border-white/10 text-white/60 hover:text-white hover:bg-white/[0.08] hover:border-white/20 hover:scale-105 transition-all duration-300" title="LinkedIn">
                <FaLinkedin size={18} />
              </a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}


