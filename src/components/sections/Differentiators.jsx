import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Timer, Repeat } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    title: 'Project Intelligence',
    description: 'Not just lists. Full hierarchy: Organisation → Project → Subject → Task. Choose Task Board for project work or Ticket Board for support pipelines. Each project gets its own SLA rules, workflows, and team access.',
    gradient: 'from-indigo-500/[0.18] via-violet-500/[0.07] to-transparent',
    border: 'border-indigo-500/30',
    topBar: 'from-indigo-400 via-violet-400 to-transparent',
    iconBg: 'bg-indigo-500/20 border-indigo-500/40',
    iconColor: 'text-indigo-300',
    iconGlow: '0 0 24px rgba(99,102,241,0.45)',
    glow: '0 8px 36px rgba(99,102,241,0.18)',
    badge: 'Hierarchy',
    badgeStyle: 'bg-indigo-500/15 border-indigo-500/35 text-indigo-300',
    highlightGradient: 'from-indigo-400 to-violet-400',
    tag: '★ Foundation Layer',
    tagStyle: 'bg-indigo-500/10 border-indigo-500/25 text-indigo-400',
  },
  {
    icon: Timer,
    title: 'SLA That Actually Works',
    description: 'Two levels of SLA enforcement: set an absolute deadline, and set how long a task can stay in any given status. Get alerted before breach — not after. Track compliance rate per project, per team, per person.',
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 24px rgba(52,211,153,0.45)',
    glow: '0 8px 36px rgba(52,211,153,0.15)',
    badge: 'Enforcement',
    badgeStyle: 'bg-emerald-500/15 border-emerald-500/35 text-emerald-300',
    highlightGradient: 'from-emerald-400 to-teal-400',
    tag: '⚡ Zero Breach',
    tagStyle: 'bg-emerald-500/10 border-emerald-500/25 text-emerald-400',
  },
  {
    icon: Repeat,
    title: 'Recurring Without Rethinking',
    description: 'Daily, weekly, monthly, yearly, or fully custom recurrence. Skip weekends. Skip holidays. Set end conditions. Instances auto-generate with dynamic due dates — no manual work, no missed repeats.',
    gradient: 'from-amber-500/[0.16] via-orange-500/[0.07] to-transparent',
    border: 'border-amber-500/30',
    topBar: 'from-amber-400 via-orange-400 to-transparent',
    iconBg: 'bg-amber-500/20 border-amber-500/40',
    iconColor: 'text-amber-300',
    iconGlow: '0 0 24px rgba(251,191,36,0.45)',
    glow: '0 8px 36px rgba(251,191,36,0.12)',
    badge: 'Automation',
    badgeStyle: 'bg-amber-500/15 border-amber-500/35 text-amber-300',
    highlightGradient: 'from-amber-400 to-orange-400',
    tag: '∞ Auto-Generate',
    tagStyle: 'bg-amber-500/10 border-amber-500/25 text-amber-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Differentiators() {
  return (
    <section id="differentiators" className="relative z-10 pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20 flex flex-col items-center gap-3">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl text-white/50 text-xs font-extrabold uppercase tracking-widest"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
            Why ownTask
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl md:text-[2.75rem] tracking-tight pb-2 font-sans font-black"
          >
            <span className="text-white">Enterprise </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Capabilities</span>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <motion.div
          id="differentiators-cards-grid"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {differentiators.map((item, idx) => (
            <motion.div
              key={idx}
              id={`differentiator-card-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              variants={cardVariants}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.025 }}
              className={`group relative overflow-hidden p-7 md:p-8 rounded-3xl bg-gradient-to-br ${item.gradient} border ${item.border} backdrop-blur-2xl flex flex-col gap-5 cursor-default transition-all duration-300`}
              style={{ boxShadow: item.glow }}
            >
              {/* Ambient glow orb top-right */}
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-30 blur-[50px] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${item.iconColor.replace('text-', '')} 0%, transparent 70%)` }} />

              {/* Top Row: Icon + Badge */}
              <div className="flex items-start justify-between">
                {/* Icon box */}
                <div
                  id={`differentiator-icon-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 ${item.iconBg} ${item.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: item.iconGlow }}
                >
                  <item.icon size={26} />
                </div>

                {/* Badge pill */}
                <span id={`differentiator-badge-${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${item.badgeStyle}`}>
                  {item.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className={`text-white font-black text-xl leading-snug tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${item.highlightGradient} transition-all duration-300`}>
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300 flex-1">
                {item.description}
              </p>

              {/* Bottom tag */}
              <div id={`differentiator-tag-${item.title.toLowerCase().replace(/\s+/g, '-')}`} className={`self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold border ${item.tagStyle}`}>
                {item.tag}
              </div>

              {/* Bottom separator glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
