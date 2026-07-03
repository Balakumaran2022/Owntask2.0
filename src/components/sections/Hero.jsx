import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Folder, ClipboardList, Palette, TestTube2, User, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const focusStats = [
  { value: '3x', label: 'Projects aligned' },
  { value: '100%', label: 'Focused workflow' },
  { value: '< 2 min', label: 'Setup time' },
];

function ExecutionFlowBox() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        y: -4, 
        scale: 1.02,
        rotateY: -3,
        rotateX: 2.5,
        boxShadow: '0 30px 75px rgba(0,0,0,0.6), 0 0 50px rgba(99,102,241,0.22)',
        borderColor: 'rgba(99, 102, 241, 0.35)'
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformStyle: 'preserve-3d', perspective: '1200px' }}
      className="relative overflow-hidden rounded-[22px] p-5 bg-[#0B0D17]/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 w-full max-w-[480px] mx-auto cursor-pointer flex flex-col gap-3.5 font-sans"
      aria-label="Execution flow preview"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

      {/* Section 1: Project */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
           <div className="flex items-center gap-2 text-foreground font-bold text-base">
             <Folder size={18} className="text-yellow-400 fill-yellow-400/20" />
             Website Redesign
           </div>
           <span className="text-muted-foreground text-xs font-bold tracking-widest">[75%]</span>
        </div>
        
        <div className="flex items-center gap-3 mt-0.5">
           <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden flex border border-white/5">
              <motion.div initial={{ width: 0 }} animate={{ width: '75%' }} transition={{ duration: 1.5, ease: 'easeOut' }} className="h-full bg-foreground shadow-[0_0_10px_rgba(255,255,255,0.3)] relative">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSI+PC9yZWN0Pgo8L3N2Zz4=')] opacity-30 mix-blend-overlay" />
              </motion.div>
           </div>
           <span className="text-muted-foreground text-xs font-medium whitespace-nowrap">18/24 tasks</span>
        </div>
        
        <div className="flex items-center gap-2 text-xs text-muted-foreground font-medium mt-0.5">
           SLA Compliance: <span className="text-foreground ml-1">94%</span>
           <span className="flex items-center gap-1 ml-2 text-emerald-400 font-bold">
             <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
             Green
           </span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2 relative z-10" />

      {/* Section 2: Tasks List */}
      <div className="relative z-10 flex flex-col gap-2.5">
        <div className="flex items-center justify-between group">
           <div className="flex items-center gap-2.5">
             <ClipboardList size={16} className="text-orange-300" />
             <span className="font-semibold text-sm text-foreground/90 group-hover:text-foreground transition-colors">Backend</span>
           </div>
           <span className="text-xs font-bold text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded border border-blue-400/20">[In Progress]</span>
        </div>

        <div className="flex items-center justify-between group">
           <div className="flex items-center gap-2.5">
             <Palette size={16} className="text-rose-400" />
             <span className="font-semibold text-sm text-foreground/90 group-hover:text-foreground transition-colors">Design</span>
           </div>
           <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/20">[Done ✓]</span>
        </div>

        <div className="flex items-center justify-between group">
           <div className="flex items-center gap-2.5">
             <TestTube2 size={16} className="text-cyan-400" />
             <span className="font-semibold text-sm text-foreground/90 group-hover:text-foreground transition-colors">QA</span>
           </div>
           <span className="text-xs font-bold text-muted-foreground bg-white/5 px-2 py-0.5 rounded border border-white/10">[To Do]</span>
        </div>
      </div>

      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-2 relative z-10" />

      {/* Section 3: Task Focus */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="flex items-center justify-between">
           <span className="text-muted-foreground text-xs font-mono font-bold tracking-wider">TSK-7A9B2C1D</span>
           <span className="flex items-center gap-1.5 text-xs font-bold text-foreground">
             <span className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.8)] animate-pulse" />
             Highest
           </span>
        </div>
        
        <h3 className="text-foreground font-bold text-sm leading-snug">
          Redesign customer onboarding
        </h3>

        <div className="flex flex-wrap items-center gap-4 mt-0.5">
           <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
             <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400"><User size={12} /></div>
             John D.
           </div>
           <div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
             <Calendar size={12} className="text-red-400" />
             Jul 5
           </div>
        </div>
        
        <div className="flex items-center gap-2.5 mt-1">
           <span className="text-[11px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">[In Progress]</span>
           <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden flex border border-white/5">
              <motion.div initial={{ width: 0 }} animate={{ width: '80%' }} transition={{ duration: 1.5, ease: 'easeOut', delay: 0.3 }} className="h-full bg-primary" />
           </div>
           <span className="text-muted-foreground text-[11px] font-bold">80%</span>
        </div>
      </div>
    </motion.aside>
  );
}

export default function Hero({ onOpenLogin, onOpenDemo }) {
  return (
    <section id="hero" className="relative overflow-hidden pt-5 pb-8 lg:pt-7 lg:pb-12 min-h-0 flex items-center">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] items-center gap-10 lg:gap-[80px]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start gap-6 text-left font-sans"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs md:text-sm font-semibold tracking-wide uppercase shadow-[0_0_15px_rgba(99,102,241,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,1)] animate-pulse" />
              Enterprise Task Intelligence
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight leading-[1.2] max-w-[700px] text-white">
              Stop managing tasks.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-[#6366f1] to-[#8b5cf6]">
                Start managing outcomes.
              </span>
            </h1>

            <p className="max-w-[560px] text-slate-300 text-base md:text-lg leading-relaxed font-normal">
              ownTask is the only task platform that combines project hierarchy, SLA enforcement, recurring automation, approval workflows, and real-time analytics — without the complexity of enterprise tools.
            </p>

            <div className="flex flex-col gap-3 mt-1 w-full">
              <div className="flex items-center gap-3.5 flex-wrap">
                <motion.button
                  onClick={onOpenDemo}
                  whileHover={{ scale: 1.04, boxShadow: '0 0 25px rgba(99,102,241,0.6)' }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-primary !rounded-full !text-sm md:!text-base !font-semibold !px-7 !py-3.5 shadow-[0_6px_20px_rgba(99,102,241,0.35)] transition-all"
                >
                  Get Started Free →
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.04, backgroundColor: 'rgba(255,255,255,0.08)', borderColor: 'rgba(99,102,241,0.5)' }}
                  whileTap={{ scale: 0.96 }}
                  className="btn btn-outline !rounded-full !text-sm md:!text-base !font-semibold !px-7 !py-3.5 border border-white/20 text-white backdrop-blur-md transition-all"
                >
                  See Features
                </motion.button>
              </div>
              <div className="flex items-center gap-5 text-xs md:text-sm text-slate-400 font-medium pl-1 pt-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold text-base">✓</span> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 font-bold text-base">✓</span> Setup in minutes
                </span>
              </div>
            </div>

            {/* Staggered load-in & interactive hover stats */}
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
              className="grid grid-cols-3 gap-2.5 w-full max-w-[480px] mt-2"
            >
              {focusStats.map((stat) => (
                <motion.div 
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 15 },
                    show: { opacity: 1, y: 0 }
                  }}
                  whileHover={{ y: -4, boxShadow: '0 0 28px rgba(99,102,241,0.22), 0 0 0 1px rgba(99,102,241,0.28)' }}
                  style={{
                    position: 'relative',
                    background: 'rgba(6,14,9,0.75)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(99,102,241,0.10)',
                    borderRadius: '14px',
                    padding: '0.65rem 0.75rem 0.6rem',
                    overflow: 'hidden',
                    cursor: 'default',
                    boxShadow: '0 0 20px rgba(99,102,241,0.13)',
                    transition: 'box-shadow 0.28s ease, transform 0.28s ease',
                  }}
                >
                  <strong style={{
                    display: 'block',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    marginBottom: '0.3rem',
                    background: 'linear-gradient(135deg, #2cc085, #5eeab0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    letterSpacing: '-0.02em',
                  }}>{stat.value}</strong>
                  {/* Thin divider */}
                  <div style={{ height: '1px', background: 'rgba(99,102,241,0.10)', marginBottom: '0.28rem' }} />
                  <span style={{
                    display: 'block',
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'rgba(140,195,170,0.55)',
                    lineHeight: 1.3,
                  }}>{stat.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <ExecutionFlowBox />
        </div>
      </div>
    </section>
  );
}
