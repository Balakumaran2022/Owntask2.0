import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Folder, ClipboardList, Palette, TestTube2, User, Calendar, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const focusStats = [
  { value: '3x', label: 'Projects Aligned', color: 'from-sky-500/[0.22] via-blue-600/[0.1] to-transparent', border: 'border-sky-400/50', glow: 'shadow-[0_15px_35px_rgba(14,165,233,0.25)]', textGlow: 'from-sky-400 via-blue-300 to-white' },
  { value: '100%', label: 'Focused Workflow', color: 'from-indigo-500/[0.22] via-purple-600/[0.1] to-transparent', border: 'border-indigo-400/50', glow: 'shadow-[0_15px_35px_rgba(99,102,241,0.25)]', textGlow: 'from-indigo-400 via-purple-300 to-white' },
  { value: '< 2 min', label: 'Setup Time', color: 'from-emerald-500/[0.22] via-teal-600/[0.1] to-transparent', border: 'border-emerald-400/50', glow: 'shadow-[0_15px_35px_rgba(52,211,153,0.25)]', textGlow: 'from-emerald-400 via-teal-300 to-white' },
];

function ExecutionFlowBox() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-[24px] p-5 sm:p-6 bg-[#090B16]/95 backdrop-blur-2xl border border-indigo-500/40 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_30px_rgba(99,102,241,0.2)] transition-all duration-500 w-full max-w-[500px] mx-auto cursor-default flex flex-col gap-4 font-sans ring-1 ring-white/10"
      aria-label="Execution flow preview"
    >

      {/* Ambient background glow orbs */}
      <div className="absolute top-0 right-0 w-56 h-56 bg-indigo-500/15 rounded-full blur-[70px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-emerald-500/15 rounded-full blur-[50px] pointer-events-none" />

      {/* Section 1: Project Header */}
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-white font-black text-sm sm:text-base">
            <div className="p-2 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-[0_0_10px_rgba(251,191,36,0.5)]">
              <Folder size={17} className="fill-white/20" />
            </div>
            <span>Website Redesign</span>
          </div>
          <span className="px-3 py-0.5 rounded-full bg-white/10 border border-white/20 text-white font-mono font-extrabold text-xs shadow-sm">
            [75%]
          </span>
        </div>
        
        <div className="flex items-center gap-3 mt-0.5">
          <div className="flex-1 h-2.5 sm:h-3 rounded-full bg-white/10 overflow-hidden border border-white/15 shadow-inner relative">
            <motion.div 
              initial={{ width: '0%' }} 
              animate={{ width: '75%' }} 
              transition={{ duration: 1.5, ease: 'easeOut' }} 
              className="h-full rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" 
              style={{ width: '75%' }}
            />
          </div>
          <span className="text-white/90 text-xs font-extrabold whitespace-nowrap bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
            18/24 tasks
          </span>
        </div>
        
        <div className="flex items-center justify-between text-xs text-white/80 font-semibold pt-0">
          <span>SLA Compliance: <strong className="text-white font-black ml-1">94%</strong></span>
          <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-extrabold shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)] animate-pulse" />
            Green Status
          </span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-0.5 relative z-10" />

      {/* Section 2: Tasks List */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:border-white/25 transition-all group shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-orange-500/15 border border-orange-500/30 text-orange-400">
              <ClipboardList size={15} />
            </div>
            <span className="font-bold text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors">Backend Architecture</span>
          </div>
          <span className="text-xs font-extrabold text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/30 shadow-sm">
            [In Progress]
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:border-white/25 transition-all group shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-rose-500/15 border border-rose-500/30 text-rose-400">
              <Palette size={15} />
            </div>
            <span className="font-bold text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors">UI/UX Design System</span>
          </div>
          <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shadow-sm">
            [Done ✓]
          </span>
        </div>

        <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] hover:border-white/25 transition-all group shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              <TestTube2 size={15} />
            </div>
            <span className="font-bold text-xs sm:text-sm text-white/90 group-hover:text-white transition-colors">QA & Integration Tests</span>
          </div>
          <span className="text-xs font-extrabold text-white/70 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/15">
            [To Do]
          </span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/15 to-transparent my-0.5 relative z-10" />

      {/* Section 3: Highlighted Task Card */}
      <div className="relative z-10 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-indigo-500/[0.2] via-purple-500/[0.1] to-transparent border border-indigo-400/50 shadow-xl flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <span className="text-indigo-300 text-[10px] sm:text-xs font-mono font-extrabold uppercase tracking-widest bg-indigo-500/20 px-2.5 py-0.5 rounded-full border border-indigo-500/30">
            TSK-7A9B2C1D
          </span>
          <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-[10px] sm:text-xs font-black shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_6px_rgba(239,68,68,0.8)] animate-ping" />
            Highest Priority
          </span>
        </div>
        
        <h3 className="text-white font-black text-sm sm:text-base leading-snug">
          Redesign Customer Onboarding Flow
        </h3>

        <div className="flex flex-wrap items-center justify-between gap-2 pt-0.5">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold text-white/80 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">
              <div className="w-4 h-4 rounded-full bg-sky-500 flex items-center justify-center text-white font-black text-[9px]">JD</div>
              John D.
            </div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-300 bg-rose-500/10 px-2.5 py-0.5 rounded-full border border-rose-500/30">
              <Calendar size={12} className="text-rose-400" />
              Due Jul 5
            </div>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-xs font-extrabold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
              80% Done
            </span>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}

export default function Hero({ onOpenLogin, onOpenDemo }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-2 pb-6 lg:pt-4 lg:pb-8 flex items-center w-full">
      <div className="container mx-auto px-6 md:px-12 max-w-[1400px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-[1.05fr_0.95fr] items-center gap-6 lg:gap-8 xl:gap-10 w-full">
          {/* Left Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-3 text-left font-sans w-full"
          >
            {/* Glowing Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/40 bg-gradient-to-r from-sky-500/15 via-indigo-500/15 to-purple-500/15 text-sky-300 text-xs font-extrabold tracking-wider uppercase shadow-[0_0_20px_rgba(56,189,248,0.2)] backdrop-blur-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_#38bdf8] animate-pulse" />
              Enterprise Task Intelligence
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.12] max-w-[640px] text-white">
              Stop managing tasks.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-indigo-400 to-pink-400 drop-shadow-[0_2px_15px_rgba(99,102,241,0.5)]">
                Start managing outcomes.
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-white/85 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[580px] font-medium">
              ownTask is the only task platform that combines project hierarchy, SLA enforcement, recurring automation, approval workflows, and real-time analytics — without the complexity of enterprise tools.
            </p>

            {/* CTA Buttons & Trust Checks */}
            <div className="flex flex-col gap-3 mt-1 w-full">
              <div className="flex items-center gap-3.5 flex-wrap">
                <motion.button
                  onClick={onOpenDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="group relative inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm sm:text-base font-black text-white bg-gradient-to-r from-sky-500 via-indigo-600 to-pink-500 shadow-[0_8px_25px_rgba(99,102,241,0.4)] hover:shadow-[0_15px_40px_rgba(99,102,241,0.7)] transition-all duration-300 cursor-pointer overflow-hidden border border-white/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started Free <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </motion.button>

                <motion.button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.96 }}
                  className="group inline-flex items-center justify-center px-7 py-3.5 rounded-full text-sm sm:text-base font-extrabold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 hover:border-white/40 shadow-lg backdrop-blur-xl transition-all duration-300 cursor-pointer"
                >
                  See Features
                </motion.button>
              </div>

              {/* Trust Checkmarks */}
              <div className="flex items-center gap-5 text-xs sm:text-sm text-white/90 font-extrabold pt-0.5">
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-[10px] sm:text-xs shadow-[0_0_8px_rgba(52,211,153,0.6)]">✓</span> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-black text-[10px] sm:text-xs shadow-[0_0_8px_rgba(52,211,153,0.6)]">✓</span> Setup in minutes
                </span>
              </div>
            </div>

            {/* 3 Focus Stat Cards */}
            <motion.div 
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              initial="hidden"
              animate="show"
              className="grid grid-cols-3 gap-2.5 w-full max-w-[500px] mt-1 sm:mt-2"
            >
              {focusStats.map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className={`group relative bg-gradient-to-br ${stat.color} ${stat.border} border rounded-xl p-3 sm:p-3.5 overflow-hidden backdrop-blur-xl transition-all duration-300 cursor-default flex flex-col justify-between ${stat.glow}`}
                >
                  {/* Glowing top accent strip */}
                  <div className="absolute top-0 left-3 right-3 h-1 rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-70 group-hover:opacity-100 transition-opacity" />
                  
                  <strong className={`block text-lg sm:text-xl font-black leading-none mb-0.5 text-transparent bg-clip-text bg-gradient-to-r ${stat.textGlow} tracking-tight drop-shadow-md`}>
                    {stat.value}
                  </strong>
                  
                  <div className="h-[1px] bg-gradient-to-r from-white/30 via-white/10 to-transparent my-1" />
                  
                  <span className="block text-[9px] sm:text-[11px] font-extrabold uppercase tracking-wider text-white/90 leading-tight">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Hero Command Center Board */}
          <ExecutionFlowBox />
        </div>
      </div>
    </section>
  );
}
