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
      className="relative overflow-hidden rounded-[24px] p-6 bg-[#0B0D17]/90 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 w-full max-w-[500px] mx-auto lg:translate-y-8 cursor-pointer flex flex-col gap-5"
      aria-label="Execution flow preview"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-[60px] pointer-events-none" />

      {/* Project Health Card */}
      <div className="project-card relative z-10">
        <div className="project-header">
          <span className="project-icon">📁</span>
          <span className="project-name">Website Redesign</span>
          <span className="project-status active">Active</span>
        </div>
        <div className="health-grid">
          <div className="health-item">
            <span className="health-label">Total Tasks</span>
            <span className="health-value">24</span>
          </div>
          <div className="health-item">
            <span className="health-label">Completed</span>
            <span className="health-value success">18 (75%)</span>
          </div>
          <div className="health-item">
            <span className="health-label">Overdue</span>
            <span className="health-value warning">2</span>
          </div>
          <div className="health-item">
            <span className="health-label">SLA Breached</span>
            <span className="health-value error">1</span>
          </div>
        </div>
        <div className="health-bar">
          <div className="health-bar-fill" style={{ width: '75%', background: 'linear-gradient(90deg, #6366F1, #10B981)' }}></div>
        </div>
      </div>

      {/* Task Card */}
      <div className="task-card relative z-10">
        <div className="task-header">
          <span className="task-id">TSK-7A9B2C1D</span>
          <span className="priority-badge highest">Highest</span>
        </div>
        <p className="task-title">Redesign customer onboarding flow</p>
        <div className="task-meta">
          <span>📅 Jul 5</span>
          <span>👤 John D.</span>
          <span className="sla-badge">⏱ SLA</span>
        </div>
        <div className="task-progress">
          <div className="progress-label">
            <span>In Progress</span>
            <span>80%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: '80%', background: '#3B82F6' }}></div>
          </div>
        </div>
        <div className="task-footer">
          <span>✓ 3/5 checklist</span>
          <span>📎 2 files</span>
        </div>
      </div>

      {/* Audit Timeline Entry */}
      <div className="timeline-item relative z-10">
        <div className="timeline-line">
          <div className="timeline-dot" style={{ background: '#10B981' }}>✓</div>
          <div className="timeline-connector" style={{ background: 'rgba(255,255,255,0.07)' }}></div>
        </div>
        <div className="timeline-content">
          <div className="timeline-header">
            <span className="action-type">STATUS_CHANGE</span>
            <span className="performed-by">John Doe</span>
            <span className="performed-at">Jul 1, 14:25</span>
          </div>
          <div className="timeline-change">
            <span className="old-value" style={{ background: 'rgba(239,68,68,0.15)', color: '#EF4444' }}>In Progress</span>
            <span>→</span>
            <span className="new-value" style={{ background: 'rgba(16,185,129,0.15)', color: '#10B981' }}>Done</span>
          </div>
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
            className="flex flex-col items-start gap-5 text-left"
          >
            <div className="inline-flex items-center gap-2 w-fit px-3 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,0.9)] animate-pulse" />
              Enterprise Task Intelligence
            </div>

            <h1 className="text-4xl md:text-[3rem] lg:text-[3.5rem] font-sans font-extrabold tracking-tight leading-[1.15] max-w-[800px]">
              <span className="text-white whitespace-nowrap">Stop managing tasks.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6] whitespace-nowrap">
                Start managing outcomes.
              </span>
            </h1>

            <p className="max-w-[580px] text-muted-foreground text-xl leading-relaxed">
              ownTask is the only task platform that combines project hierarchy, SLA enforcement, recurring automation, approval workflows, and real-time analytics — without the complexity of enterprise tools.
            </p>

            <div className="flex flex-col gap-2 mt-2">
              <div className="flex items-center gap-4 flex-wrap">
                <motion.button
                  onClick={onOpenDemo}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary btn-lg !rounded-full !text-lg !px-8 !py-4"
                >
                  Get Started Free →
                </motion.button>
                <motion.button
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-outline btn-lg !rounded-full !text-lg !px-8 !py-4"
                >
                  See Features
                </motion.button>
              </div>
              <div className="flex items-center gap-5 text-base text-muted-foreground font-medium pl-1">
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-lg">✓</span> No credit card required
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-emerald-400 text-lg">✓</span> Setup in minutes
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
