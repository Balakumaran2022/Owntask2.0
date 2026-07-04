import React from 'react';
import { motion } from 'framer-motion';
import {
  Hash, CheckSquare, Paperclip, Tag, Star, Link2,
  LayoutGrid, Users, Settings2, Activity, RefreshCw, Shuffle
} from 'lucide-react';

const features = [
  {
    icon: Hash,
    title: 'Auto Readable Task IDs',
    desc: 'Every task gets a unique human-readable ID — ',
    code: 'TSK-7A9B2C1D',
    descEnd: ' — auto-generated on creation. Reference tasks in emails, chats, and reports without confusion.',
    gradient: 'from-blue-500/[0.18] via-indigo-500/[0.07] to-transparent',
    border: 'border-blue-500/30',
    topBar: 'from-blue-400 via-indigo-400 to-transparent',
    iconBg: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-300',
    iconGlow: '0 0 22px rgba(59,130,246,0.5)',
    cardGlow: '0 8px 32px rgba(59,130,246,0.15)',
    tagText: '# Identification',
    tagStyle: 'bg-blue-500/12 border-blue-500/30 text-blue-400',
  },
  {
    icon: CheckSquare,
    title: 'Checklists with Completion Tracking',
    desc: 'Add sub-step checklists to any task. Each item tracks: completion status, who completed it, and when. Default checklists can be set at the project or subject level.',
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 22px rgba(52,211,153,0.5)',
    cardGlow: '0 8px 32px rgba(52,211,153,0.12)',
    tagText: '✓ Accountability',
    tagStyle: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: Paperclip,
    title: 'File Attachments',
    desc: 'Attach files directly to tasks. The system tracks file name, type, size, upload timestamp, and who uploaded — all retrievable through the audit trail. Full file history, always.',
    gradient: 'from-violet-500/[0.18] via-purple-500/[0.07] to-transparent',
    border: 'border-violet-500/30',
    topBar: 'from-violet-400 via-purple-400 to-transparent',
    iconBg: 'bg-violet-500/20 border-violet-500/40',
    iconColor: 'text-violet-300',
    iconGlow: '0 0 22px rgba(139,92,246,0.5)',
    cardGlow: '0 8px 32px rgba(139,92,246,0.15)',
    tagText: '📁 Audit Trail',
    tagStyle: 'bg-violet-500/12 border-violet-500/30 text-violet-400',
  },
  {
    icon: Tag,
    title: 'Tags & Task Watchers',
    desc: "Tag tasks for custom grouping and cross-board searching. Add watchers to keep stakeholders informed without giving them ownership. Watchers receive updates but aren't responsible for completion.",
    gradient: 'from-amber-500/[0.16] via-orange-500/[0.07] to-transparent',
    border: 'border-amber-500/30',
    topBar: 'from-amber-400 via-orange-400 to-transparent',
    iconBg: 'bg-amber-500/20 border-amber-500/40',
    iconColor: 'text-amber-300',
    iconGlow: '0 0 22px rgba(251,191,36,0.5)',
    cardGlow: '0 8px 32px rgba(251,191,36,0.12)',
    tagText: '🏷️ Visibility',
    tagStyle: 'bg-amber-500/12 border-amber-500/30 text-amber-400',
  },
  {
    icon: Star,
    title: '5-Level Priority System',
    desc: 'Highest · High · Normal · Low · Lowest — with an automatic numeric ',
    code: 'priorityRank',
    descEnd: ' calculated behind the scenes. SLA hours can be configured per priority level per project.',
    gradient: 'from-yellow-500/[0.16] via-amber-500/[0.07] to-transparent',
    border: 'border-yellow-500/30',
    topBar: 'from-yellow-400 via-amber-400 to-transparent',
    iconBg: 'bg-yellow-500/20 border-yellow-500/40',
    iconColor: 'text-yellow-300',
    iconGlow: '0 0 22px rgba(234,179,8,0.5)',
    cardGlow: '0 8px 32px rgba(234,179,8,0.12)',
    tagText: '★ Intelligence',
    tagStyle: 'bg-yellow-500/12 border-yellow-500/30 text-yellow-400',
  },
  {
    icon: Link2,
    title: 'Customer Record Linking',
    desc: 'Link any task to a customer record. Support teams can create and track customer-facing tasks directly from conversation context — bridging task management with customer data.',
    gradient: 'from-cyan-500/[0.18] via-sky-500/[0.07] to-transparent',
    border: 'border-cyan-500/30',
    topBar: 'from-cyan-400 via-sky-400 to-transparent',
    iconBg: 'bg-cyan-500/20 border-cyan-500/40',
    iconColor: 'text-cyan-300',
    iconGlow: '0 0 22px rgba(34,211,238,0.5)',
    cardGlow: '0 8px 32px rgba(34,211,238,0.12)',
    tagText: '🔗 CRM Bridge',
    tagStyle: 'bg-cyan-500/12 border-cyan-500/30 text-cyan-400',
  },
  {
    icon: LayoutGrid,
    title: 'Dual Board Types',
    desc: 'Choose Task Board for project-style work or Ticket Board for support/helpdesk pipelines. Ticket boards unlock escalation configuration: auto-escalate to a senior team after a defined number of hours.',
    gradient: 'from-pink-500/[0.18] via-rose-500/[0.07] to-transparent',
    border: 'border-pink-500/30',
    topBar: 'from-pink-400 via-rose-400 to-transparent',
    iconBg: 'bg-pink-500/20 border-pink-500/40',
    iconColor: 'text-pink-300',
    iconGlow: '0 0 22px rgba(236,72,153,0.5)',
    cardGlow: '0 8px 32px rgba(236,72,153,0.12)',
    tagText: '📋 Flexibility',
    tagStyle: 'bg-pink-500/12 border-pink-500/30 text-pink-400',
  },
  {
    icon: Users,
    title: 'Role-Based Access Control',
    desc: 'Project roles: Owner / Admin / Member / Teammate. Project visibility: Open (everyone in the org) or Restricted (only specified users or teams). Restricted members see only their own tasks.',
    gradient: 'from-teal-500/[0.18] via-emerald-500/[0.07] to-transparent',
    border: 'border-teal-500/30',
    topBar: 'from-teal-400 via-emerald-400 to-transparent',
    iconBg: 'bg-teal-500/20 border-teal-500/40',
    iconColor: 'text-teal-300',
    iconGlow: '0 0 22px rgba(20,184,166,0.5)',
    cardGlow: '0 8px 32px rgba(20,184,166,0.12)',
    tagText: '🔒 Security',
    tagStyle: 'bg-teal-500/12 border-teal-500/30 text-teal-400',
  },
  {
    icon: Settings2,
    title: 'Project Defaults & Smart Presets',
    desc: 'Set project-level defaults: default priority, default SLA hours per priority, default assignee team, auto-reminders, and default checklists. Every task created inherits these — no repeated setup.',
    gradient: 'from-indigo-500/[0.18] via-violet-500/[0.07] to-transparent',
    border: 'border-indigo-500/30',
    topBar: 'from-indigo-400 via-violet-400 to-transparent',
    iconBg: 'bg-indigo-500/20 border-indigo-500/40',
    iconColor: 'text-indigo-300',
    iconGlow: '0 0 22px rgba(99,102,241,0.5)',
    cardGlow: '0 8px 32px rgba(99,102,241,0.15)',
    tagText: '⚙️ Automation',
    tagStyle: 'bg-indigo-500/12 border-indigo-500/30 text-indigo-400',
  },
  {
    icon: Activity,
    title: 'Project Timeline & Health Cache',
    desc: 'Every project tracks its own health automatically: total tasks, completed, overdue, SLA breached count, completion rate, SLA compliance rate. Set a start and target date. Health updates in real time.',
    gradient: 'from-green-500/[0.18] via-emerald-500/[0.07] to-transparent',
    border: 'border-green-500/30',
    topBar: 'from-green-400 via-emerald-400 to-transparent',
    iconBg: 'bg-green-500/20 border-green-500/40',
    iconColor: 'text-green-300',
    iconGlow: '0 0 22px rgba(34,197,94,0.5)',
    cardGlow: '0 8px 32px rgba(34,197,94,0.12)',
    tagText: '📊 Real Time',
    tagStyle: 'bg-green-500/12 border-green-500/30 text-green-400',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Task Engine',
    desc: 'Daily, weekly, monthly, yearly, or fully custom. Skip weekends. Skip holidays. Configure end conditions: never, after N occurrences, or by a specific date. Instances generate automatically with dynamic due dates.',
    gradient: 'from-orange-500/[0.18] via-amber-500/[0.07] to-transparent',
    border: 'border-orange-500/30',
    topBar: 'from-orange-400 via-amber-400 to-transparent',
    iconBg: 'bg-orange-500/20 border-orange-500/40',
    iconColor: 'text-orange-300',
    iconGlow: '0 0 22px rgba(249,115,22,0.5)',
    cardGlow: '0 8px 32px rgba(249,115,22,0.12)',
    tagText: '∞ Recurring',
    tagStyle: 'bg-orange-500/12 border-orange-500/30 text-orange-400',
  },
  {
    icon: Shuffle,
    title: 'Round-Robin Team Assignment',
    desc: 'When a task is assigned to a team, the system automatically distributes it in round-robin order across team members. No manual load balancing. No favouritism. Equitable distribution, always.',
    gradient: 'from-purple-500/[0.18] via-pink-500/[0.07] to-transparent',
    border: 'border-purple-500/30',
    topBar: 'from-purple-400 via-pink-400 to-transparent',
    iconBg: 'bg-purple-500/20 border-purple-500/40',
    iconColor: 'text-purple-300',
    iconGlow: '0 0 22px rgba(168,85,247,0.5)',
    cardGlow: '0 8px 32px rgba(168,85,247,0.15)',
    tagText: '⚖️ Fair Load',
    tagStyle: 'bg-purple-500/12 border-purple-500/30 text-purple-400',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative z-10 pt-10 pb-24 lg:pt-14 lg:pb-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/15 rounded-full bg-white/[0.04] backdrop-blur-xl text-white/60 text-xs font-extrabold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_rgba(139,92,246,0.8)]" />
            12 Core Features
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-black tracking-tight leading-tight mb-5"
          >
            <span className="text-white">Every feature your team needs.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Nothing they don't.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16 }}
            className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
          >
            A complete business task management platform — not a glorified to-do list.
          </motion.p>
        </div>

        {/* 12-Card Grid */}
        <motion.div
          id="features-cards-grid"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              id={`feature-card-${f.title.toLowerCase().replace(/\s+/g, '-')}`}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -7, scale: 1.025 }}
              className={`group relative overflow-hidden p-6 md:p-7 rounded-3xl bg-gradient-to-br ${f.gradient} border ${f.border} backdrop-blur-2xl flex flex-col gap-4 cursor-default transition-all duration-300`}
              style={{ boxShadow: f.cardGlow }}
            >
              {/* Always-visible top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-[2.5px] rounded-b-none rounded-t-3xl bg-gradient-to-r ${f.topBar} opacity-75 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Ambient glow orb */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-[60px] opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, white 0%, transparent 70%)` }} />

              {/* Top Row: Icon + Number */}
              <div className="flex items-start justify-between">
                {/* Glowing Icon Box */}
                <div
                  id={`feature-icon-${f.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-13 h-13 w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-2xl border flex items-center justify-center shrink-0 ${f.iconBg} ${f.iconColor} transition-transform duration-300 group-hover:scale-110`}
                  style={{ boxShadow: f.iconGlow }}
                >
                  <f.icon size={24} />
                </div>

                {/* Card number */}
                <span id={`feature-number-${f.title.toLowerCase().replace(/\s+/g, '-')}`} className={`text-sm font-black font-mono ${f.iconColor} opacity-40 group-hover:opacity-90 transition-opacity duration-300 mt-1`}>
                  {String(idx + 1).padStart(2, '0')}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-white font-black text-lg leading-snug tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all duration-300">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed group-hover:text-white/75 transition-colors duration-300 flex-1">
                {f.desc}
                {f.code && (
                  <code className="text-[11px] font-mono bg-white/12 text-white/90 font-bold px-1.5 py-0.5 rounded-md mx-0.5 border border-white/15">{f.code}</code>
                )}
                {f.descEnd}
              </p>

              {/* Bottom tag pill */}
              <div id={`feature-tag-${f.title.toLowerCase().replace(/\s+/g, '-')}`} className={`self-start inline-flex items-center px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-widest border ${f.tagStyle}`}>
                {f.tagText}
              </div>

              {/* Bottom shimmer line */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
