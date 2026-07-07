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
    gradient: 'from-blue-500/[0.18] via-indigo-500/[0.07] to-transparent',
    border: 'border-blue-500/30',
    topBar: 'from-blue-400 via-indigo-400 to-transparent',
    iconBg: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-300',
    iconGlow: '0 0 22px rgba(59,130,246,0.5)',
    cardGlow: '0 8px 32px rgba(59,130,246,0.15)',
    tagText: '📁 Audit Trail',
    tagStyle: 'bg-blue-500/12 border-blue-500/30 text-blue-400',
  },
  {
    icon: Tag,
    title: 'Tags & Task Watchers',
    desc: "Tag tasks for custom grouping and cross-board searching. Add watchers to keep stakeholders informed without giving them ownership. Watchers receive updates but aren't responsible for completion.",
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 22px rgba(52,211,153,0.5)',
    cardGlow: '0 8px 32px rgba(52,211,153,0.12)',
    tagText: '🏷️ Visibility',
    tagStyle: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: Star,
    title: '5-Level Priority System',
    desc: 'Highest · High · Normal · Low · Lowest — with an automatic numeric priorityRank calculated behind the scenes. SLA hours can be configured per priority level per project.',
    gradient: 'from-blue-500/[0.18] via-indigo-500/[0.07] to-transparent',
    border: 'border-blue-500/30',
    topBar: 'from-blue-400 via-indigo-400 to-transparent',
    iconBg: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-300',
    iconGlow: '0 0 22px rgba(59,130,246,0.5)',
    cardGlow: '0 8px 32px rgba(59,130,246,0.15)',
    tagText: '★ Intelligence',
    tagStyle: 'bg-blue-500/12 border-blue-500/30 text-blue-400',
  },
  {
    icon: Link2,
    title: 'Customer Record Linking',
    desc: 'Link any task to a customer record. Support teams can create and track customer-facing tasks directly from conversation context — bridging task management with customer data.',
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 22px rgba(52,211,153,0.5)',
    cardGlow: '0 8px 32px rgba(52,211,153,0.12)',
    tagText: '🔗 CRM Bridge',
    tagStyle: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: LayoutGrid,
    title: 'Dual Board Types',
    desc: 'Choose Task Board for project-style work or Ticket Board for support/helpdesk pipelines. Ticket boards unlock escalation configuration: auto-escalate to a senior team after a defined number of hours.',
    gradient: 'from-blue-500/[0.18] via-indigo-500/[0.07] to-transparent',
    border: 'border-blue-500/30',
    topBar: 'from-blue-400 via-indigo-400 to-transparent',
    iconBg: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-300',
    iconGlow: '0 0 22px rgba(59,130,246,0.5)',
    cardGlow: '0 8px 32px rgba(59,130,246,0.15)',
    tagText: '📋 Flexibility',
    tagStyle: 'bg-blue-500/12 border-blue-500/30 text-blue-400',
  },
  {
    icon: Users,
    title: 'Role-Based Access Control',
    desc: 'Project roles: Owner / Admin / Member / Teammate. Project visibility: Open (everyone in the org) or Restricted (only specified users or teams). Restricted members see only their own tasks.',
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 22px rgba(52,211,153,0.5)',
    cardGlow: '0 8px 32px rgba(52,211,153,0.12)',
    tagText: '🔒 Security',
    tagStyle: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: Settings2,
    title: 'Project Defaults & Smart Presets',
    desc: 'Set project-level defaults: default priority, default SLA hours per priority, default assignee team, auto-reminders, and default checklists. Every task created inherits these — no repeated setup.',
    gradient: 'from-blue-500/[0.18] via-indigo-500/[0.07] to-transparent',
    border: 'border-blue-500/30',
    topBar: 'from-blue-400 via-indigo-400 to-transparent',
    iconBg: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-300',
    iconGlow: '0 0 22px rgba(59,130,246,0.5)',
    cardGlow: '0 8px 32px rgba(59,130,246,0.15)',
    tagText: '⚙️ Automation',
    tagStyle: 'bg-blue-500/12 border-blue-500/30 text-blue-400',
  },
  {
    icon: Activity,
    title: 'Project Timeline & Health Cache',
    desc: 'Every project tracks its own health automatically: total tasks, completed, overdue, SLA breached count, completion rate, SLA compliance rate. Set a start and target date. Health updates in real time.',
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 22px rgba(52,211,153,0.5)',
    cardGlow: '0 8px 32px rgba(52,211,153,0.12)',
    tagText: '📊 Real Time',
    tagStyle: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Task Engine',
    desc: 'Daily, weekly, monthly, yearly, or fully custom. Skip weekends. Skip holidays. Configure end conditions: never, after N occurrences, or by a specific date. Instances generate automatically with dynamic due dates.',
    gradient: 'from-blue-500/[0.18] via-indigo-500/[0.07] to-transparent',
    border: 'border-blue-500/30',
    topBar: 'from-blue-400 via-indigo-400 to-transparent',
    iconBg: 'bg-blue-500/20 border-blue-500/40',
    iconColor: 'text-blue-300',
    iconGlow: '0 0 22px rgba(59,130,246,0.5)',
    cardGlow: '0 8px 32px rgba(59,130,246,0.15)',
    tagText: '∞ Recurring',
    tagStyle: 'bg-blue-500/12 border-blue-500/30 text-blue-400',
  },
  {
    icon: Shuffle,
    title: 'Round-Robin Team Assignment',
    desc: 'When a task is assigned to a team, the system automatically distributes it in round-robin order across team members. No manual load balancing. No favouritism. Equitable distribution, always.',
    gradient: 'from-emerald-500/[0.18] via-teal-500/[0.07] to-transparent',
    border: 'border-emerald-500/30',
    topBar: 'from-emerald-400 via-teal-400 to-transparent',
    iconBg: 'bg-emerald-500/20 border-emerald-500/40',
    iconColor: 'text-emerald-300',
    iconGlow: '0 0 22px rgba(52,211,153,0.5)',
    cardGlow: '0 8px 32px rgba(52,211,153,0.12)',
    tagText: '⚖️ Fair Load',
    tagStyle: 'bg-emerald-500/12 border-emerald-500/30 text-emerald-400',
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

        {/* Core Hierarchy Section */}
        <div className="mb-32">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/15 rounded-full bg-white/[0.04] backdrop-blur-xl text-white/60 text-xs font-extrabold tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_6px_rgba(99,102,241,0.8)]" />
              Core Architecture
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-black tracking-tight leading-tight mb-5"
            >
              <span className="text-white">Core Hierarchy.</span><br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">Perfect clarity at any scale.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.16 }}
              className="text-white/50 text-base sm:text-lg max-w-xl mx-auto leading-relaxed"
            >
              How ownTask structures your workspaces to maintain perfect clarity at any scale.
            </motion.p>
          </div>

          <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#0c0a1a]/95 to-[#05040a]/95 backdrop-blur-2xl border border-white/[0.05] rounded-[32px] p-8 md:p-14 shadow-[0_30px_80px_rgba(0,0,0,0.6)] overflow-x-auto">
            <div className="flex flex-col font-sans relative min-w-[500px]">
              
              {/* Organisation */}
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.3)]">
                  <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] px-5 py-2.5 rounded-xl">
                  <span className="text-white font-bold text-[17px] tracking-wide">Organisation</span>
                </div>
              </div>

              {/* Project */}
              <div className="flex items-center ml-[19px] border-l-2 border-white/10 py-5">
                <div className="w-8 h-[2px] bg-white/10" />
                <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.3)] shrink-0 mr-4">
                  <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] px-5 py-2.5 rounded-xl flex items-center gap-3 flex-wrap">
                  <span className="text-white font-bold text-[17px] tracking-wide">Project</span>
                  <span className="text-blue-200/50 text-sm bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">(Task Board OR Ticket Board)</span>
                </div>
              </div>

              {/* Subject */}
              <div className="flex items-center ml-[72px] border-l-2 border-white/10 py-5">
                <div className="w-8 h-[2px] bg-white/10" />
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(16,185,129,0.3)] shrink-0 mr-4">
                  <svg className="w-5 h-5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 3h18v18H3z"></path><path d="M9 3v18"></path><path d="M9 12h12"></path></svg>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] px-5 py-2.5 rounded-xl flex items-center gap-3 flex-wrap">
                  <span className="text-white font-bold text-[17px] tracking-wide">Subject</span>
                  <span className="text-emerald-200/50 text-sm bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">(e.g., Design, Backend, QA)</span>
                </div>
              </div>

              {/* Task */}
              <div className="flex items-center ml-[125px] border-l-2 border-white/10 py-5">
                <div className="w-8 h-[2px] bg-white/10" />
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.3)] shrink-0 mr-4">
                  <svg className="w-5 h-5 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] px-5 py-2.5 rounded-xl flex items-center gap-3 flex-wrap">
                  <span className="text-white font-bold text-[17px] tracking-wide">Task</span>
                </div>
              </div>

              {/* Subtask */}
              <div className="flex items-center ml-[178px] border-l-2 border-white/10 pt-5 rounded-bl-[16px]">
                <div className="w-8 h-[2px] bg-white/10" />
                <div className="w-10 h-10 rounded-xl bg-rose-500/20 border border-rose-500/40 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.3)] shrink-0 mr-4">
                  <svg className="w-5 h-5 text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path><path d="M9 12l2 2 4-4"></path></svg>
                </div>
                <div className="bg-white/[0.02] border border-white/[0.05] px-5 py-2.5 rounded-xl flex items-center gap-3 flex-wrap">
                  <span className="text-white font-bold text-[17px] tracking-wide">Subtask</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-white/15 rounded-full bg-white/[0.04] backdrop-blur-xl text-white/60 text-xs font-extrabold tracking-widest uppercase"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Nothing they don't.</span>
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
              className={`group relative overflow-hidden p-6 md:p-7 rounded-3xl bg-[#0e0e1e]/95 bg-gradient-to-br ${f.gradient} border ${f.border} flex flex-col gap-4 cursor-default transition-all duration-300`}
              style={{ boxShadow: f.cardGlow }}
            >
              {/* Ambient glow orb */}
              <div className="absolute -top-8 -right-8 w-36 h-36 rounded-full blur-[60px] opacity-20 pointer-events-none"
                style={{ background: `radial-gradient(circle, white 0%, transparent 70%)` }} />

              {/* Top Row: Icon + Number */}
              <div className="flex items-start justify-between">
                {/* Glowing Icon Box */}
                <div
                  id={`feature-icon-${f.title.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`w-12 h-12 sm:w-[52px] sm:h-[52px] rounded-2xl border flex items-center justify-center shrink-0 ${f.iconBg} ${f.iconColor} transition-transform duration-300 group-hover:scale-110`}
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
