import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  XCircle, 
  PlusCircle, 
  HelpCircle, 
  Clock, 
  ArrowRight, 
  ArrowDown, 
  Lock, 
  User, 
  ShieldCheck,
  RefreshCw,
  GitCommit
} from 'lucide-react';

export default function ApprovalsDeepDive() {
  const [activeStep, setActiveStep] = useState(0);
  const [approvalDecision, setApprovalDecision] = useState('none'); // 'none', 'approved', 'rejected'

  // Animate the flow steps automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % 5;
        if (next === 0) {
          setApprovalDecision('none');
        } else if (next === 3) {
          // Randomly decide approved or rejected for demonstration
          setApprovalDecision(Math.random() > 0.4 ? 'approved' : 'rejected');
        }
        return next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          {/* Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-6"
          >
            <span className="text-white">Nothing moves forward </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-[#8b5cf6]">without the right sign-off.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white/55 text-base md:text-lg leading-relaxed"
          >
            Enable approval on any individual task. Seamlessly bind critical transitions to verified review workflows. The system meticulously tracks auditing parameters:
          </motion.p>
        </div>

        {/* Auditing Metadata Trackers Grid (Ultra-Modern Glassmorphic 2026 UI) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { 
              label: 'Who requested approval and when', 
              icon: User,
              badge: 'REQUESTER',
              badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]',
              iconStyle: 'from-violet-500/20 to-purple-500/20 border-violet-500/50 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]',
              glow: 'via-violet-500/80',
              borderHover: 'hover:border-violet-500/60'
            },
            { 
              label: 'Who approved and when', 
              icon: ShieldCheck,
              badge: 'APPROVER',
              badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.3)]',
              iconStyle: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]',
              glow: 'via-emerald-500/80',
              borderHover: 'hover:border-emerald-500/60'
            },
            { 
              label: 'Approval status: None → Pending → Approved', 
              icon: Clock,
              badge: 'LIFECYCLE',
              badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]',
              iconStyle: 'from-amber-500/20 to-rose-500/20 border-amber-500/50 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
              glow: 'via-amber-500/80',
              borderHover: 'hover:border-amber-500/60'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                className={`relative flex flex-col justify-between p-6 rounded-3xl bg-gradient-to-br from-[#13122b]/95 via-[#181638]/95 to-[#13122b]/95 border border-white/20 ${item.borderHover} transition-all duration-300 group cursor-default overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl`}
              >
                {/* Glowing top accent line */}
                <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer overlay */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Top Row: Glowing Icon Box + Badge */}
                <div className="flex items-center justify-between gap-3 mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconStyle} flex items-center justify-center group-hover:scale-110 transition-all border shadow-sm shrink-0`}>
                    <Icon size={22} strokeWidth={2.5} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-black font-mono tracking-wider border uppercase shadow-sm ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                {/* Text Label */}
                <span className="relative z-10 text-white font-black text-base md:text-lg leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Project-Level Settings Callout Card (Ultra-Modern Glassmorphic 2026 UI) */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-[#16133a]/95 via-[#1e1a4f]/95 to-[#16133a]/95 border border-violet-500/40 hover:border-violet-400 transition-all duration-500 overflow-hidden shadow-[0_20px_60px_rgba(139,92,246,0.25)] backdrop-blur-2xl"
          >
            {/* Glowing top accent line */}
            <div className="absolute top-0 left-10 right-10 h-[2px] rounded-full bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
            
            {/* Background watermark lock */}
            <div className="absolute -top-6 -right-6 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <Lock size={160} className="text-violet-400" />
            </div>

            {/* Shimmer overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Left Box: Glowing Icon + Title + Badge */}
            <div className="relative z-10 flex items-center gap-4 shrink-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-600/30 flex items-center justify-center border border-violet-500/50 shadow-[0_0_25px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-all">
                <Lock size={26} className="text-violet-300 group-hover:text-white transition-colors" strokeWidth={2.5} />
              </div>
              <div>
                <div className="flex items-center gap-2.5 mb-1 flex-wrap">
                  <h3 className="text-white font-black text-xl md:text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-300 transition-all">
                    Project-Level Gates
                  </h3>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black font-mono tracking-widest bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)] uppercase">
                    ENFORCED
                  </span>
                </div>
                <span className="text-xs font-mono font-bold text-violet-300/80 tracking-wide uppercase block">
                  Strict Governance Mode
                </span>
              </div>
            </div>

            {/* Right Box: Description */}
            <p className="relative z-10 text-white/90 text-sm md:text-base leading-relaxed font-semibold max-w-xl">
              Configure which status acts as the <span className="text-white font-black underline decoration-violet-400 decoration-2 underline-offset-4">"Waiting for Approval"</span> gate. Status transitions can be enforced in order — ensuring absolutely no skipping steps.
            </p>
          </motion.div>
        </div>

        {/* BOTTOM (Topic End): Landscape Flow Diagram Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full p-4 md:p-5 rounded-3xl bg-[#0D0D1C]/80 border border-white/[0.06] relative overflow-hidden"
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
        >
          {/* Card shimmer */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-500/[0.01] to-transparent pointer-events-none" />

          {/* Landscape Flow Layout */}
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 md:gap-2 relative z-10">
            
            {/* Step 0: Task Created */}
            <div className="flex-1">
              <motion.div
                animate={{
                  x: activeStep === 0 ? [ -8, 0 ] : 0,
                  scale: activeStep === 0 ? [ 0.98, 1 ] : 1,
                  borderColor: activeStep === 0 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(255, 255, 255, 0.06)',
                  boxShadow: activeStep === 0 ? '0 0 16px rgba(139, 92, 246, 0.15)' : 'none',
                  backgroundColor: activeStep === 0 ? 'rgba(139, 92, 246, 0.05)' : 'rgba(255, 255, 255, 0.02)'
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="p-3 md:p-4 rounded-2xl border text-center transition-all duration-300 relative overflow-hidden min-h-[75px] md:min-h-[80px] flex flex-col justify-center items-center"
              >
                {activeStep === 0 && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent pointer-events-none"
                  />
                )}
                <PlusCircle size={20} className={`mb-1.5 transition-colors duration-300 ${activeStep === 0 ? 'text-violet-400' : 'text-white/30'}`} />
                <span className={`text-xs font-semibold transition-colors duration-300 ${activeStep === 0 ? 'text-white' : 'text-white/40'}`}>
                  Task Created
                </span>
              </motion.div>
            </div>

            {/* Connecting Arrow 1 */}
            <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
              <ArrowRight size={18} className={`hidden md:block transition-colors duration-300 ${activeStep > 0 ? 'text-violet-400' : 'text-white/10'}`} />
              <ArrowDown size={18} className={`block md:hidden transition-colors duration-300 ${activeStep > 0 ? 'text-violet-400' : 'text-white/10'}`} />
            </div>

            {/* Step 1: Requires Approval? */}
            <div className="flex-1">
              <motion.div
                animate={{
                  x: activeStep === 1 ? [ -8, 0 ] : 0,
                  scale: activeStep === 1 ? [ 0.98, 1 ] : 1,
                  borderColor: activeStep === 1 ? 'rgba(139, 92, 246, 0.4)' : 'rgba(255, 255, 255, 0.06)',
                  boxShadow: activeStep === 1 ? '0 0 16px rgba(139, 92, 246, 0.15)' : 'none',
                  backgroundColor: activeStep === 1 ? 'rgba(139, 92, 246, 0.05)' : 'rgba(255, 255, 255, 0.02)'
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="p-3 md:p-4 rounded-2xl border text-center transition-all duration-300 relative overflow-hidden min-h-[75px] md:min-h-[80px] flex flex-col justify-center items-center"
              >
                {activeStep === 1 && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent pointer-events-none"
                  />
                )}
                <HelpCircle size={20} className={`mb-1.5 transition-colors duration-300 ${activeStep === 1 ? 'text-violet-400' : 'text-white/30'}`} />
                <span className={`text-xs font-semibold transition-colors duration-300 ${activeStep === 1 ? 'text-white' : 'text-white/40'}`}>
                  Requires Approval?
                </span>
              </motion.div>
            </div>

            {/* Connecting Arrow 2 */}
            <div className="flex flex-col items-center justify-center shrink-0 py-1 md:py-0">
              <span className={`text-[9px] font-bold font-mono tracking-wider mb-0.5 transition-colors duration-300 ${activeStep > 1 ? 'text-emerald-400' : 'text-white/10'}`}>
                YES
              </span>
              <ArrowRight size={18} className={`hidden md:block transition-colors duration-300 ${activeStep > 1 ? 'text-violet-400' : 'text-white/10'}`} />
              <ArrowDown size={18} className={`block md:hidden transition-colors duration-300 ${activeStep > 1 ? 'text-violet-400' : 'text-white/10'}`} />
            </div>

            {/* Step 2: Pending Approval */}
            <div className="flex-1">
              <motion.div
                animate={{
                  x: activeStep === 2 ? [ -8, 0 ] : 0,
                  scale: activeStep === 2 ? [ 0.98, 1 ] : 1,
                  borderColor: activeStep === 2 ? 'rgba(245, 158, 11, 0.4)' : 'rgba(255, 255, 255, 0.06)',
                  boxShadow: activeStep === 2 ? '0 0 16px rgba(245, 158, 11, 0.15)' : 'none',
                  backgroundColor: activeStep === 2 ? 'rgba(245, 158, 11, 0.05)' : 'rgba(255, 255, 255, 0.02)'
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="p-3 md:p-4 rounded-2xl border text-center transition-all duration-300 relative overflow-hidden min-h-[75px] md:min-h-[80px] flex flex-col justify-center items-center"
              >
                {activeStep === 2 && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent pointer-events-none"
                  />
                )}
                <Clock size={20} className={`mb-1.5 transition-colors duration-300 ${activeStep === 2 ? 'text-amber-400 animate-pulse' : 'text-white/30'}`} />
                <span className={`text-xs font-semibold transition-colors duration-300 ${activeStep === 2 ? 'text-white' : 'text-white/40'}`}>
                  Pending Approval
                </span>
              </motion.div>
            </div>

            {/* Connecting Arrow 3 */}
            <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
              <ArrowRight size={18} className={`hidden md:block transition-colors duration-300 ${activeStep > 2 ? 'text-violet-400' : 'text-white/10'}`} />
              <ArrowDown size={18} className={`block md:hidden transition-colors duration-300 ${activeStep > 2 ? 'text-violet-400' : 'text-white/10'}`} />
            </div>

            {/* Step 3: Approved / Rejected */}
            <div className="flex-1">
              <motion.div
                animate={{
                  x: activeStep === 3 ? [ -8, 0 ] : 0,
                  scale: activeStep === 3 ? [ 0.98, 1 ] : 1,
                  borderColor: activeStep === 3 
                    ? (approvalDecision === 'approved' ? 'rgba(52, 211, 153, 0.4)' : 'rgba(248, 113, 113, 0.4)')
                    : 'rgba(255, 255, 255, 0.06)',
                  boxShadow: activeStep === 3 
                    ? (approvalDecision === 'approved' ? '0 0 16px rgba(52, 211, 153, 0.15)' : '0 0 16px rgba(248, 113, 113, 0.15)')
                    : 'none',
                  backgroundColor: activeStep === 3 
                    ? (approvalDecision === 'approved' ? 'rgba(52, 211, 153, 0.05)' : 'rgba(248, 113, 113, 0.05)')
                    : 'rgba(255, 255, 255, 0.02)'
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="p-3 md:p-4 rounded-2xl border text-center transition-all duration-300 relative overflow-hidden min-h-[75px] md:min-h-[80px] flex flex-col justify-center items-center"
              >
                {activeStep === 3 && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                      approvalDecision === 'approved' ? 'via-emerald-400/25' : 'via-red-400/25'
                    } to-transparent pointer-events-none`}
                  />
                )}
                <div className="flex justify-center gap-2 mb-1.5">
                  <CheckCircle2 size={16} className={`transition-colors duration-300 ${
                    activeStep === 3 && approvalDecision === 'approved' ? 'text-emerald-400' : 'text-white/20'
                  }`} />
                  <XCircle size={16} className={`transition-colors duration-300 ${
                    activeStep === 3 && approvalDecision === 'rejected' ? 'text-red-400' : 'text-white/20'
                  }`} />
                </div>
                <span className={`text-xs font-semibold transition-colors duration-300 ${
                  activeStep === 3 
                    ? (approvalDecision === 'approved' ? 'text-emerald-300' : 'text-red-300') 
                    : 'text-white/40'
                }`}>
                  {activeStep === 3 
                    ? (approvalDecision === 'approved' ? 'Approved' : 'Rejected') 
                    : 'Approved / Rejected'
                  }
                </span>
              </motion.div>
            </div>

            {/* Connecting Arrow 4 */}
            <div className="flex items-center justify-center shrink-0 py-1 md:py-0">
              <ArrowRight size={18} className={`hidden md:block transition-colors duration-300 ${activeStep > 3 ? 'text-violet-400' : 'text-white/10'}`} />
              <ArrowDown size={18} className={`block md:hidden transition-colors duration-300 ${activeStep > 3 ? 'text-violet-400' : 'text-white/10'}`} />
            </div>

            {/* Step 4: Proceeds / Returns */}
            <div className="flex-1">
              <motion.div
                animate={{
                  x: activeStep === 4 ? [ -8, 0 ] : 0,
                  scale: activeStep === 4 ? [ 0.98, 1 ] : 1,
                  borderColor: activeStep === 4 
                    ? (approvalDecision === 'approved' ? 'rgba(52, 211, 153, 0.4)' : 'rgba(248, 113, 113, 0.4)')
                    : 'rgba(255, 255, 255, 0.06)',
                  boxShadow: activeStep === 4 
                    ? (approvalDecision === 'approved' ? '0 0 16px rgba(52, 211, 153, 0.15)' : '0 0 16px rgba(248, 113, 113, 0.15)')
                    : 'none',
                  backgroundColor: activeStep === 4 
                    ? (approvalDecision === 'approved' ? 'rgba(52, 211, 153, 0.05)' : 'rgba(248, 113, 113, 0.05)')
                    : 'rgba(255, 255, 255, 0.02)'
                }}
                transition={{ type: 'spring', stiffness: 150, damping: 15 }}
                className="p-3 md:p-4 rounded-2xl border text-center transition-all duration-300 relative overflow-hidden min-h-[75px] md:min-h-[80px] flex flex-col justify-center items-center"
              >
                {activeStep === 4 && (
                  <motion.div
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                      approvalDecision === 'approved' ? 'via-emerald-400/25' : 'via-red-400/25'
                    } to-transparent pointer-events-none`}
                  />
                )}
                <GitCommit size={20} className={`mb-1.5 transition-colors duration-300 ${
                  activeStep === 4 
                    ? (approvalDecision === 'approved' ? 'text-emerald-400' : 'text-red-400') 
                    : 'text-white/30'
                }`} />
                <span className={`text-xs font-semibold transition-colors duration-300 ${
                  activeStep === 4 
                    ? (approvalDecision === 'approved' ? 'text-white' : 'text-white') 
                    : 'text-white/40'
                }`}>
                  {activeStep === 4 
                    ? (approvalDecision === 'approved' ? 'Proceeds to Next' : 'Returns to Workflow') 
                    : 'Proceeds / Returns'
                  }
                </span>
              </motion.div>
            </div>

          </div>

          {/* Footer Details Card: Title Last (At the very bottom) */}
          <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-violet-400 animate-pulse" />
              <span className="text-xs font-mono text-white/40 tracking-wider uppercase">Live Lifecycle Simulator</span>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <div className="flex items-center gap-2 text-[11px] font-mono">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span className="text-white/50">Strict Order Enforcement</span>
              </div>
              <div className="text-[11px] font-mono text-[#8b5cf6] font-semibold">
                Gate: waiting_approval
              </div>
              <button 
                onClick={() => {
                  setActiveStep(0);
                  setApprovalDecision('none');
                }}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-white/55 hover:text-white hover:bg-white/10 transition-all active:scale-95"
                title="Reset Simulation"
              >
                <RefreshCw size={11} className="animate-spin-slow" />
                <span>Reset</span>
              </button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
