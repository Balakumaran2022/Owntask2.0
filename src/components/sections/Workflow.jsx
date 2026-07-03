import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, CheckSquare } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Capture',
    description: 'Tasks, notes, meetings, and links land in one calm workspace.',
    icon: Target,
    accent: 'from-emerald-500/20 to-teal-500/10',
    borderGlow: 'rgba(52, 211, 153, 0.35)',
    iconBg: 'rgba(99,102,241,0.12)',
    iconBorder: 'rgba(99,102,241,0.22)',
    delay: 0,
  },
  {
    id: '02',
    title: 'Prioritize',
    description: 'AI insights and custom workflows surface the work that matters next.',
    icon: Cpu,
    accent: 'from-primary/25 to-emerald-500/10',
    borderGlow: 'rgba(99,102,241,0.5)',
    iconBg: 'rgba(99,102,241,0.18)',
    iconBorder: 'rgba(99,102,241,0.35)',
    delay: 0.12,
  },
  {
    id: '03',
    title: 'Execute',
    description: 'Kanban, calendar, Git, and focus views keep delivery moving.',
    icon: CheckSquare,
    accent: 'from-teal-500/20 to-emerald-400/10',
    borderGlow: 'rgba(52, 211, 153, 0.35)',
    iconBg: 'rgba(99,102,241,0.12)',
    iconBorder: 'rgba(99,102,241,0.22)',
    delay: 0.24,
  },
];

export default function Workflow() {
  return (
    <section id="workflow" className="relative pt-10 pb-20 bg-transparent overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-5 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
         
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6"
          >
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">execution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-muted-foreground text-base max-w-[500px] mx-auto leading-relaxed"
          >
            A streamlined process from thought to delivery.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 max-w-[1080px] mx-auto">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: step.delay, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{
                  y: -7,
                  boxShadow: `0 24px 56px -8px ${step.borderGlow}, 0 0 0 1px ${step.borderGlow}`,
                }}
                style={{
                  background: 'rgba(8, 18, 12, 0.72)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(99,102,241,0.10)',
                  borderRadius: '24px',
                  padding: '2rem 1.75rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0',
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'default',
                  transition: 'box-shadow 0.35s ease, transform 0.35s ease',
                }}
                className="group"
              >
                {/* Subtle top gradient shimmer stripe */}
                <div
                  className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.accent} opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Faint radial glow in top-right */}
                <div
                  className="absolute -top-8 -right-8 w-36 h-36 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle, ${step.borderGlow} 0%, transparent 70%)`, filter: 'blur(24px)' }}
                />

                {/* Step number — watermark */}
                <div
                  className="absolute bottom-4 right-5 select-none pointer-events-none font-black leading-none"
                  style={{
                    fontSize: '7rem',
                    color: 'rgba(99,102,241,0.055)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                    transition: 'color 0.4s ease',
                  }}
                >
                  {step.id}
                </div>

                {/* Icon */}
                <div
                  className="relative z-10 mb-6 w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: step.iconBg,
                    border: `1.5px solid ${step.iconBorder}`,
                    boxShadow: `0 4px 20px ${step.iconBorder}`,
                  }}
                >
                  <Icon size={24} className="text-primary" strokeWidth={2} />
                </div>

                {/* Step label */}
                <span
                  className="relative z-10 text-[0.62rem] font-black uppercase tracking-[0.2em] mb-1.5"
                  style={{ color: 'rgba(99,102,241,0.55)' }}
                >
                  Step {step.id}
                </span>

                {/* Title */}
                <h3
                  className="relative z-10 text-xl font-black mb-2.5 tracking-tight transition-colors duration-300 group-hover:text-primary"
                  style={{ color: '#e8f5ef' }}
                >
                  {step.title}
                </h3>

                {/* Description */}
                <p
                  className="relative z-10 text-sm leading-relaxed"
                  style={{ color: 'rgba(180, 215, 200, 0.6)', fontWeight: 400 }}
                >
                  {step.description}
                </p>

                {/* Bottom connector line (decorative) */}
                <div
                  className="relative z-10 mt-6 h-px w-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.borderGlow}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
