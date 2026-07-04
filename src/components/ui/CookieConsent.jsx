import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Shield, ChevronRight, X, Check, Sliders, Lock } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always required
    analytics: true,
    marketing: false,
    personalization: true
  });

  useEffect(() => {
    const consent = localStorage.getItem('owntask_cookie_consent');
    if (!consent) {
      // Show after a brief 800ms delay for smooth entrance
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('owntask_cookie_consent', 'accepted_all');
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem('owntask_cookie_consent', 'rejected_all');
    setIsVisible(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('owntask_cookie_consent', JSON.stringify(preferences));
    setIsVisible(false);
    setShowPreferences(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Fixed Bottom Cookie Banner (Matching screenshot with 2026 Glassmorphism) */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-[3000] max-w-[1240px] mx-auto p-6 md:p-8 rounded-3xl bg-gradient-to-r from-[#0d1026]/95 via-[#111638]/95 to-[#0d1026]/95 border border-white/15 hover:border-blue-500/40 shadow-[0_25px_70px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300"
          >
            {/* Top Glowing Accent Bar */}
            <div className="absolute top-0 left-10 right-10 h-[2px] rounded-full bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-80 shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
              
              {/* Left Side: Icon Box + Text Content */}
              <div className="flex items-start gap-5 flex-1 pr-0 lg:pr-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0 mt-0.5">
                  <Plus size={24} strokeWidth={2.5} />
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-black text-lg md:text-xl tracking-tight mb-1.5 flex items-center gap-2.5 flex-wrap">
                    We Value Your Privacy
                    <span className="px-2 py-0.5 rounded-full text-[9px] font-black font-mono tracking-widest bg-blue-500/20 text-blue-300 border border-blue-500/40 uppercase">
                      GDPR COMPLIANT
                    </span>
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-medium mb-3">
                    We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking <span className="text-white font-bold">"Accept All"</span>, you consent to our use of cookies. You can customize your preferences by clicking <span className="text-white font-bold">"Manage Preferences"</span>.
                  </p>
                  <button
                    onClick={() => setShowPreferences(true)}
                    className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 text-xs sm:text-sm font-bold tracking-wide transition-colors group cursor-pointer border-none bg-transparent p-0"
                  >
                    <span>Learn more about our cookie policy</span>
                    <ChevronRight size={15} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Right Side: Action Buttons */}
              <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0 pt-2 lg:pt-0 border-t lg:border-t-0 border-white/[0.08]">
                <button
                  onClick={() => setShowPreferences(true)}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer text-center whitespace-nowrap"
                >
                  Manage Preferences
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-white/[0.05] hover:bg-white/10 border border-white/15 text-white/90 hover:text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 active:scale-95 cursor-pointer text-center whitespace-nowrap"
                >
                  Reject All
                </button>
                <button
                  onClick={handleAcceptAll}
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs sm:text-sm font-black tracking-wide shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all duration-300 active:scale-95 cursor-pointer text-center whitespace-nowrap"
                >
                  Accept All
                </button>
              </div>

            </div>
          </motion.div>

          {/* Manage Preferences Modal */}
          <AnimatePresence>
            {showPreferences && (
              <div className="fixed inset-0 z-[4000] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-md"
                  onClick={() => setShowPreferences(false)}
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  className="relative z-10 w-full max-w-2xl p-6 sm:p-8 rounded-3xl bg-[#0e1128] border border-white/20 shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden text-left"
                >
                  <div className="flex items-center justify-between pb-5 mb-6 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                        <Sliders size={20} />
                      </div>
                      <div>
                        <h3 className="text-white font-black text-lg sm:text-xl">Cookie Preferences</h3>
                        <span className="text-xs text-white/50 font-medium">Customize your data sharing permissions</span>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowPreferences(false)}
                      className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors cursor-pointer"
                    >
                      <X size={18} />
                    </button>
                  </div>

                  <div className="flex flex-col gap-4 max-h-[60vh] overflow-y-auto pr-2 mb-6" style={{ scrollbarWidth: 'thin' }}>
                    {/* Essential */}
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="text-white font-bold text-sm">Essential Cookies</h4>
                          <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                            ALWAYS ACTIVE
                          </span>
                        </div>
                        <p className="text-white/60 text-xs leading-relaxed">
                          Required for core functionality, security, user authentication, and network stability. Cannot be disabled.
                        </p>
                      </div>
                      <div className="w-11 h-6 rounded-full bg-emerald-500/40 border border-emerald-400/50 flex items-center justify-end px-1 cursor-not-allowed shrink-0">
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm flex items-center justify-center">
                          <Check size={10} className="text-emerald-600 stroke-[3]" />
                        </div>
                      </div>
                    </div>

                    {/* Analytics */}
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">Analytics & Performance</h4>
                        <p className="text-white/60 text-xs leading-relaxed">
                          Helps us understand how visitors interact with ownTask by collecting anonymous metrics and usage patterns.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPreferences(p => ({ ...p, analytics: !p.analytics }))}
                        className={`w-11 h-6 rounded-full transition-colors duration-300 flex items-center px-1 cursor-pointer shrink-0 border ${
                          preferences.analytics ? 'bg-blue-600 border-blue-400 justify-end' : 'bg-white/10 border-white/20 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>

                    {/* Personalization */}
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">Personalization & Features</h4>
                        <p className="text-white/60 text-xs leading-relaxed">
                          Allows the site to remember choices you make (such as theme preferences and dashboard views) for a tailored experience.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPreferences(p => ({ ...p, personalization: !p.personalization }))}
                        className={`w-11 h-6 rounded-full transition-colors duration-300 flex items-center px-1 cursor-pointer shrink-0 border ${
                          preferences.personalization ? 'bg-blue-600 border-blue-400 justify-end' : 'bg-white/10 border-white/20 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>

                    {/* Marketing */}
                    <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-white font-bold text-sm mb-1">Marketing & Targeting</h4>
                        <p className="text-white/60 text-xs leading-relaxed">
                          Used to deliver promotional advertisements relevant to your interests across third-party networks and platforms.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setPreferences(p => ({ ...p, marketing: !p.marketing }))}
                        className={`w-11 h-6 rounded-full transition-colors duration-300 flex items-center px-1 cursor-pointer shrink-0 border ${
                          preferences.marketing ? 'bg-blue-600 border-blue-400 justify-end' : 'bg-white/10 border-white/20 justify-start'
                        }`}
                      >
                        <div className="w-4 h-4 rounded-full bg-white shadow-sm" />
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                    <button
                      onClick={handleRejectAll}
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs sm:text-sm font-bold transition-all cursor-pointer"
                    >
                      Reject All
                    </button>
                    <button
                      onClick={handleSavePreferences}
                      className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs sm:text-sm font-black shadow-[0_0_20px_rgba(59,130,246,0.6)] transition-all cursor-pointer"
                    >
                      Save Preferences
                    </button>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
}
