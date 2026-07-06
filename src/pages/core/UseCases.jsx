import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Headphones, Settings, Briefcase, Users, RotateCw, ShieldCheck,
  Clock, BarChart2, CheckCircle, AlertTriangle, Layers, Zap,
  ChevronRight, ArrowRight, Timer, UserCheck, TrendingUp,
  Calendar, Folder, ClipboardCheck, GitBranch, Database, Eye, Rocket
} from 'lucide-react';

const USE_CASES = [
  {
    id: 'support',
    emoji: '🎧',
    tag: 'Customer Support',
    icon: <Headphones size={22} />,
    color: 'from-sky-500 to-blue-600',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
    iconColor: 'text-sky-400',
    tagBg: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    title: 'Customer Support Teams',
    headline: 'Resolve faster. Breach nothing.',
    description: 'Track every inbound request from open to resolved — with SLA timers running on every ticket. Admins get real-time breach visibility. Agents see only their own queue.',
    bullets: [
      { icon: <Clock size={14} />, text: 'SLA countdown per ticket — breach alerts before it&apos;s too late' },
      { icon: <RotateCw size={14} />, text: 'Recurring tasks for daily check-ins, escalation reviews, shift handoffs' },
      { icon: <Users size={14} />, text: 'Role-scoped views — agents see their queue, managers see everything' },
      { icon: <BarChart2 size={14} />, text: 'Real-time analytics: on-time rate, overdue count, SLA compliance %' },
    ],
    stat: { val: '94.2%', label: 'avg SLA compliance' },
  },
  {
    id: 'operations',
    emoji: '⚙️',
    tag: 'Operations',
    icon: <Settings size={22} />,
    color: 'from-sky-500 to-blue-600',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
    iconColor: 'text-sky-400',
    tagBg: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    title: 'Operations Managers',
    headline: 'Run processes. Not spreadsheets.',
    description: 'Automate recurring operational workflows — from daily standup tasks to weekly compliance checks. Every process has an owner, a due date, and a status you can trust.',
    bullets: [
      { icon: <RotateCw size={14} />, text: 'Recurring task series for daily, weekly, monthly operations' },
      { icon: <CheckCircle size={14} />, text: 'Custom status workflows tailored to your operational process' },
      { icon: <ShieldCheck size={14} />, text: 'Compliance tracking per subject — audit-ready at any time' },
      { icon: <Layers size={14} />, text: 'Multi-project visibility across all departments in one workspace' },
    ],
    stat: { val: '3× faster', label: 'process completion' },
  },
  {
    id: 'agencies',
    emoji: '🚀',
    tag: 'Project Management',
    icon: <Rocket size={22} />,
    color: 'from-sky-500 to-blue-600',
    border: 'border-sky-500/20',
    bg: 'bg-sky-500/5',
    iconColor: 'text-sky-400',
    tagBg: 'bg-sky-500/10 border-sky-500/20 text-sky-400',
    title: 'Project-Based Agencies',
    headline: 'Every client. Every deadline. Under control.',
    description: 'Run multiple client projects in isolated workspaces — each with its own subjects, statuses, assignees, and SLA rules. One platform, zero context switching.',
    bullets: [
      { icon: <Briefcase size={14} />, text: 'Isolated project workspaces per client — no cross-contamination' },
      { icon: <Zap size={14} />, text: 'Install pre-built templates in one click — instant project scaffold' },
      { icon: <AlertTriangle size={14} />, text: 'Overdue task alerts and bulk status updates across projects' },
      { icon: <BarChart2 size={14} />, text: 'Cross-project analytics filtered by subject, assignee, or date' },
    ],
    stat: { val: '12 min', label: 'avg project setup time' },
  },
];

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('support');

  useEffect(() => {
    document.title = "OwnTasks | Intelligent Command Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "See how support teams, ops managers, and agencies use ownTask to manage SLAs, recurring processes, and multi-project oversight.";
  }, []);

  const active = USE_CASES.find(u => u.id === activeTab);

  return (
    <div className="relative z-10 w-full bg-transparent py-20 lg:py-28 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-sky-500/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">

        {/* ── HERO HEADER ── */}
        <div className="mb-16 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-primary/20 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
          >
            <Users size={12} />
            <span>Real-World Solutions</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.1] mb-6"
          >
            Built for the work your team{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
              actually does.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/55 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            See how customer support teams, operations managers, and project-based agencies use ownTask to manage SLAs, recurring processes, multi-project tracking, and compliance.
          </motion.p>
        </div>

        {/* ── TAB SWITCHER ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {USE_CASES.map(uc => (
            <button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border ${
                activeTab === uc.id
                  ? `${uc.tagBg} shadow-lg`
                  : 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              <span>{uc.emoji}</span>
              {uc.tag}
            </button>
          ))}
        </motion.div>

        {/* ── ACTIVE USE CASE PANEL ── */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className={`rounded-3xl border ${active.border} ${active.bg} p-8 md:p-12 shadow-2xl flex flex-col`}
        >
          {/* Centered Header */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold mb-6 ${active.tagBg} shadow-md`}>
              {active.icon}
              {active.title}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              {active.headline}
            </h2>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {active.description}
            </p>
          </div>

          {/* Two columns below centered header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-6">
            {/* Left: Modern glassmorphic feature cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {active.bullets.map((b, i) => {
                const bulletStyle = 'bg-gradient-to-br from-sky-500/[0.15] via-blue-500/[0.05] to-transparent border-sky-500/30 hover:border-sky-400/60 hover:from-sky-500/[0.22] hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(14,165,233,0.25)]';

                return (
                  <motion.div
                    key={`${activeTab}-bullet-${i}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25, delay: i * 0.06 }}
                    className={`p-6 rounded-3xl border transition-all duration-300 flex items-start gap-4 shadow-xl group relative overflow-hidden ${bulletStyle}`}
                  >
                    {/* Hover top glow bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${active.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                    {/* Glowing Icon Badge */}
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${active.color} shadow-lg shrink-0 text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 flex items-center justify-center`}>
                      <span className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]">
                        {React.cloneElement(b.icon, { size: 20 })}
                      </span>
                    </div>

                    {/* Text content */}
                    <span className="text-white text-base font-bold leading-relaxed pt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                      {b.text}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Right: Stat callout & Works Great With cards */}
            <div className="lg:col-span-5 flex flex-col gap-5 w-full">
              {/* Hero Stat Card */}
              <div
                className="flex-1 p-8 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl group hover:-translate-y-1 bg-gradient-to-br from-sky-500/[0.25] via-blue-600/[0.12] to-transparent border-sky-400/50 hover:border-sky-400/80 shadow-[0_20px_40px_rgba(14,165,233,0.3)]"
              >
                {/* Ambient background glow */}
                <div className={`absolute -inset-10 bg-gradient-to-br ${active.color} blur-3xl opacity-25 group-hover:opacity-45 transition-opacity duration-500 pointer-events-none`} />
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${active.color}`} />

                <span className={`text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br ${active.color} mb-3 drop-shadow-sm group-hover:scale-105 transition-transform duration-300`}>
                  {active.stat.val}
                </span>
                <span className="text-white/90 text-sm sm:text-base font-extrabold uppercase tracking-widest font-mono">
                  {active.stat.label}
                </span>
              </div>

              {/* Works Great With Card */}
              <div
                className="p-7 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-between shadow-xl group hover:-translate-y-1 bg-gradient-to-br from-sky-500/[0.12] via-blue-600/[0.04] to-transparent border-sky-500/30 hover:border-sky-400/50"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${active.color} animate-pulse`} />
                  <p className="text-white/80 text-xs font-mono uppercase tracking-widest font-extrabold">
                    Works Great With
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {['SLA Tracking', 'Recurring Tasks', 'Custom Workflows', 'Role-Based Access'].map((f, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.06] border border-white/10 hover:bg-white/[0.12] hover:border-white/25 transition-all text-xs sm:text-sm text-white font-bold shadow-sm"
                    >
                      <div className={`w-6 h-6 rounded-lg bg-gradient-to-br ${active.color} flex items-center justify-center text-white shrink-0 shadow-sm`}>
                        <CheckCircle size={14} />
                      </div>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── ALL CARDS GRID (always visible below) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {USE_CASES.map((uc, idx) => {
            const isActive = activeTab === uc.id;
            const cardBgStyle = isActive
              ? 'bg-gradient-to-br from-sky-500/[0.22] via-blue-600/[0.12] to-transparent border-sky-400/60 shadow-[0_20px_50px_rgba(14,165,233,0.3)] ring-2 ring-sky-400/70 -translate-y-2'
              : 'bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-white/[0.01] border-white/15 hover:border-sky-400/50 hover:from-sky-500/[0.15] hover:to-transparent shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(14,165,233,0.25)] hover:-translate-y-1.5';

            return (
              <motion.button
                key={uc.id}
                onClick={() => setActiveTab(uc.id)}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group text-center p-8 sm:p-10 rounded-3xl border transition-all duration-300 relative overflow-hidden flex flex-col items-center justify-between ${cardBgStyle}`}
              >
                {/* Glowing Top Border Bar */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${uc.color} ${isActive ? 'opacity-100 shadow-[0_0_20px_currentColor]' : 'opacity-40 group-hover:opacity-100'} transition-all duration-500`} />

                {/* Ambient Background Glow Orb */}
                <div className={`absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br ${uc.color} blur-3xl ${isActive ? 'opacity-35' : 'opacity-15 group-hover:opacity-30'} transition-opacity duration-500 pointer-events-none`} />

                {/* Floating Glowing Icon Container */}
                <div className="relative mb-6 mt-2">
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${uc.color} blur-xl opacity-40 group-hover:opacity-85 transition-opacity duration-300`} />
                  <div className={`relative w-20 h-20 rounded-3xl bg-gradient-to-br ${uc.color} p-0.5 shadow-2xl group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300`}>
                    <div className="w-full h-full bg-[#0D0D1A]/95 rounded-[22px] flex items-center justify-center shadow-inner">
                      <span className={`${uc.iconColor} drop-shadow-[0_0_15px_currentColor]`}>
                        {React.cloneElement(uc.icon, { size: 38 })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tag & Title & Description */}
                <div className="w-full">
                  <span className={`inline-block px-3.5 py-1 rounded-full text-xs font-mono font-extrabold uppercase tracking-wider mb-4 ${uc.tagBg} shadow-sm`}>
                    {uc.tag}
                  </span>
                  <h3 className="text-white font-black text-xl sm:text-2xl mb-3.5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
                    {uc.title}
                  </h3>
                  <p className="text-white/75 text-sm sm:text-base leading-relaxed line-clamp-3 max-w-sm mx-auto font-medium mb-8">
                    {uc.description}
                  </p>
                </div>

                {/* Interactive CTA Button */}
                <div
                  className={`w-full max-w-[220px] py-3.5 px-6 rounded-full font-extrabold text-xs sm:text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md ${
                    isActive
                      ? `bg-gradient-to-r ${uc.color} text-white shadow-[0_5px_25px_rgba(0,0,0,0.5)] scale-105 ring-1 ring-white/20`
                      : `bg-white/[0.08] border border-white/15 text-white/90 group-hover:bg-gradient-to-r group-hover:${uc.color} group-hover:border-transparent group-hover:text-white group-hover:shadow-lg`
                  }`}
                >
                  <span>{isActive ? 'Active View' : 'Explore Use Case'}</span>
                  <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* ─── CUSTOMER SUPPORT DEEP DIVE ─── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-24 w-full"
        >
          {/* Section divider */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* ── CENTERED HEADER & PROBLEM STATEMENT ── */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(56,189,248,0.15)]">
              <Headphones size={14} />
              <span>🎧 Customer Support</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Turn your inbox into an<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-400 to-indigo-500">accountable ticket system.</span>
            </h2>

            {/* Scenario narrative card */}
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-mono font-bold uppercase tracking-widest mb-3">The Problem</span>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A support team managing 200+ tickets a day. Tickets fall through cracks. Agents have uneven workloads. There&apos;s no visibility into who&apos;s overloaded or which priority tickets are being ignored.
              </p>
            </div>
          </div>

          {/* ── TWO-COLUMN GRID: MODERN CARDS & MOCK BOARD ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* LEFT: MODERN SOLUTION CARDS (2x3 GRID) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2.5 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                <p className="text-xs font-mono text-white/70 uppercase tracking-widest font-extrabold">How ownTask Solves It</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Layers size={20} />, color: 'text-sky-400', bg: 'bg-sky-500/20 border-sky-500/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]', title: 'Ticket Board project', desc: 'Create a structured project for "Customer Support" with custom statuses, fields, and subjects.' },
                  { icon: <Users size={20} />, color: 'text-indigo-400', bg: 'bg-indigo-500/20 border-indigo-500/40 shadow-[0_0_15px_rgba(129,140,248,0.2)]', title: 'Round-robin assignment', desc: 'Auto-assign incoming tickets across agents — equitable workloads, automatically.' },
                  { icon: <Timer size={20} />, color: 'text-amber-400', bg: 'bg-amber-500/20 border-amber-500/40 shadow-[0_0_15px_rgba(251,191,36,0.2)]', title: 'SLA by priority', desc: 'Highest = 2h · High = 4h · Normal = 8h · Low = 24h — configured once, enforced always.' },
                  { icon: <AlertTriangle size={20} />, color: 'text-rose-400', bg: 'bg-rose-500/20 border-rose-500/40 shadow-[0_0_15px_rgba(251,113,133,0.2)]', title: 'Status-based SLA alerts', desc: 'Alert when a ticket stays "In Review" beyond 2 hours — catch stalled work before breach.' },
                  { icon: <TrendingUp size={20} />, color: 'text-emerald-400', bg: 'bg-emerald-500/20 border-emerald-500/40 shadow-[0_0_15px_rgba(52,211,153,0.2)]', title: 'Auto-escalation', desc: 'Auto-escalate to senior team if not resolved within 4 hours — no manual monitoring needed.' },
                  { icon: <UserCheck size={20} />, color: 'text-violet-400', bg: 'bg-violet-500/20 border-violet-500/40 shadow-[0_0_15px_rgba(167,139,250,0.2)]', title: 'Customer linking + analytics', desc: 'Every ticket connected to a customer record. Pull completion rate, on-time rate, and SLA compliance.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] hover:from-white/[0.14] hover:to-white/[0.05] hover:border-white/30 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                  >
                    {/* Subtle top inner glow line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      <div className={`w-12 h-12 rounded-2xl border ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <span className={item.color}>{item.icon}</span>
                      </div>
                      <h4 className="text-white font-extrabold text-base mb-2 group-hover:text-sky-300 transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: KANBAN MOCK */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-6 w-full"
            >
              {/* Board header */}
              <div className="p-6 rounded-t-3xl border border-white/15 bg-gradient-to-r from-[#0D0D1A] to-[#121226] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-sky-400 animate-pulse shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
                  <span className="text-white text-lg font-black tracking-wide">Ticket Board</span>
                </div>
                <span className="text-xs font-mono font-bold text-sky-300 bg-sky-500/20 border border-sky-400/30 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(56,189,248,0.2)]">Customer Support</span>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 rounded-b-3xl border-x border-b border-white/15 bg-[#090912]/95 shadow-2xl">

                {/* To Do */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <span className="text-xs font-mono font-extrabold text-white/60 uppercase tracking-widest">To Do</span>
                    <span className="text-xs font-bold text-white/70 bg-white/10 px-2.5 py-0.5 rounded-full border border-white/15">3</span>
                  </div>
                  {[
                    { id: 'TKT-081', title: 'Login broken on mobile', badge: 'Highest', color: 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow-[0_0_10px_rgba(244,63,94,0.2)]' },
                    { id: 'TKT-082', title: 'Payment gateway timeout', badge: 'High', color: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]' },
                    { id: 'TKT-083', title: 'CSV export corrupted', badge: 'Normal', color: 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.2)]' },
                  ].map(t => (
                    <div key={t.id} className="p-4 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.04] hover:border-white/25 transition-all duration-200 flex flex-col gap-2.5 shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border ${t.color}`}>{t.badge}</span>
                        <span className="text-[10px] text-white/40 font-mono font-bold group-hover:text-white/70 transition-colors">{t.id}</span>
                      </div>
                      <p className="text-white/95 text-xs sm:text-sm font-bold leading-snug group-hover:text-sky-300 transition-colors">{t.title}</p>
                    </div>
                  ))}
                </div>

                {/* In Progress */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <span className="text-xs font-mono font-extrabold text-indigo-400 uppercase tracking-widest">In Progress</span>
                    <span className="text-xs font-bold text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded-full border border-indigo-500/30">2</span>
                  </div>
                  {[
                    { id: 'TKT-077', title: 'API key not generating', badge: 'High', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_10px_rgba(245,158,11,0.2)]', agent: 'John D.', sla: '2h 14m', slaColor: 'text-amber-400' },
                    { id: 'TKT-079', title: 'Notification emails delayed', badge: 'Normal', badgeColor: 'bg-blue-500/20 text-blue-300 border-blue-500/40 shadow-[0_0_10px_rgba(59,130,246,0.2)]', agent: 'Jane D.', sla: '6h 02m', slaColor: 'text-emerald-400' },
                  ].map(t => (
                    <div key={t.id} className="p-4 rounded-2xl border border-indigo-500/30 bg-gradient-to-b from-indigo-500/[0.12] to-indigo-500/[0.03] hover:from-indigo-500/[0.18] hover:to-indigo-500/[0.06] transition-all duration-200 flex flex-col gap-2.5 shadow-md group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-md border ${t.badgeColor}`}>{t.badge}</span>
                        <span className="text-[10px] text-indigo-300/60 font-mono font-bold group-hover:text-indigo-200 transition-colors">{t.id}</span>
                      </div>
                      <p className="text-white text-xs sm:text-sm font-extrabold leading-snug group-hover:text-indigo-300 transition-colors">{t.title}</p>
                      <div className="flex items-center justify-between mt-1 pt-2 border-t border-white/10">
                        <span className="text-[11px] text-white/60 font-mono font-bold">{t.agent}</span>
                        <div className="flex items-center gap-1.5 bg-black/30 px-2 py-0.5 rounded-md border border-white/5">
                          <Timer size={12} className={t.slaColor} />
                          <span className={`text-[10px] font-extrabold font-mono ${t.slaColor}`}>{t.sla}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resolved */}
                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between mb-1 px-1">
                    <span className="text-xs font-mono font-extrabold text-emerald-400 uppercase tracking-widest">Resolved</span>
                    <span className="text-xs font-bold text-emerald-300 bg-emerald-500/20 px-2.5 py-0.5 rounded-full border border-emerald-500/30">5</span>
                  </div>
                  {[
                    { id: 'TKT-071', title: 'Dashboard not loading' },
                    { id: 'TKT-072', title: '2FA reset request' },
                    { id: 'TKT-073', title: 'Bulk import failed' },
                    { id: 'TKT-074', title: 'Wrong email sent' },
                    { id: 'TKT-075', title: 'Account merge issue' },
                  ].map(t => (
                    <div key={t.id} className="p-3.5 rounded-2xl border border-emerald-500/20 bg-gradient-to-b from-emerald-500/[0.08] to-emerald-500/[0.02] hover:from-emerald-500/[0.14] hover:to-emerald-500/[0.04] transition-all flex flex-col gap-1.5 shadow-sm group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 min-w-0">
                          <CheckCircle size={14} className="text-emerald-400 shrink-0 group-hover:scale-110 transition-transform" />
                          <p className="text-white/85 text-xs sm:text-sm font-bold leading-snug truncate group-hover:text-emerald-300 transition-colors">{t.title}</p>
                        </div>
                      </div>
                      <span className="text-[10px] text-white/40 font-mono pl-5 font-bold">{t.id}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Board footer stats */}
              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { label: 'SLA Compliance', val: '94.2%', color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent', shadow: 'shadow-[0_10px_25px_rgba(52,211,153,0.15)]' },
                  { label: 'Avg Resolve Time', val: '3.4h', color: 'text-sky-400', border: 'border-sky-500/30', bg: 'bg-gradient-to-br from-sky-500/20 via-sky-500/5 to-transparent', shadow: 'shadow-[0_10px_25px_rgba(56,189,248,0.15)]' },
                  { label: 'Overdue', val: '1', color: 'text-rose-400', border: 'border-rose-500/30', bg: 'bg-gradient-to-br from-rose-500/20 via-rose-500/5 to-transparent', shadow: 'shadow-[0_10px_25px_rgba(244,63,94,0.15)]' },
                ].map((s, i) => (
                  <div key={i} className={`p-5 rounded-3xl border ${s.border} ${s.bg} text-center ${s.shadow} backdrop-blur-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group`}>
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                    <p className={`text-2xl sm:text-3xl font-black font-mono ${s.color} drop-shadow-[0_0_12px_currentColor]`}>{s.val}</p>
                    <p className="text-xs font-bold text-white/70 mt-1.5 uppercase tracking-wider">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ─────────────────────────────────────────── */}
        {/* ── OPERATIONS TEAMS SECTION ── */}
        {/* ─────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-24 w-full"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* ── CENTERED HEADER & PROBLEM STATEMENT ── */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(16,185,129,0.15)]">
              <Settings size={14} />
              <span>⚙️ Operations</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Automate the processes your<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">team runs every week.</span>
            </h2>

            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-mono font-bold uppercase tracking-widest mb-3">The Problem</span>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                An ops manager running the same 12-step process every Monday. Different team members responsible for different steps. Some forget. Some do it wrong. No accountability trail exists.
              </p>
            </div>
          </div>

          {/* ── TWO-COLUMN GRID: MODERN CARDS & MOCK BOARD ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* LEFT: MODERN SOLUTION CARDS (2x3 GRID) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2.5 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <p className="text-xs font-mono text-white/70 uppercase tracking-widest font-extrabold">How ownTask Solves It</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <RotateCw size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Weekly recurring tasks', desc: 'Create a recurring task per process step with skip-weekends enabled — auto-fires every Monday.' },
                  { icon: <Users size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Round-robin rotation', desc: 'Rotate assignees automatically across your team so no one gets overloaded week after week.' },
                  { icon: <ClipboardCheck size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Default checklists', desc: 'Each step has sub-items the assignee must check off before the task can be closed.' },
                  { icon: <ShieldCheck size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Approval workflows', desc: 'Enable sign-off requirements on final-step tasks — nothing closes without the right person approving.' },
                  { icon: <Database size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Full audit trail', desc: 'Every change logged — who did what, when, with before/after field values. Always compliance-ready.' },
                  { icon: <BarChart2 size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Project health cache', desc: 'Ops completion rate updated every morning — at-a-glance team health before standup.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] hover:from-white/[0.14] hover:to-white/[0.05] hover:border-white/30 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      <div className={`w-12 h-12 rounded-2xl border ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <span className={item.color}>{item.icon}</span>
                      </div>
                      <h4 className="text-white font-extrabold text-base mb-2 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: RECURRING CONFIG MOCK */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="lg:col-span-6 w-full"
            >
              {/* Panel header */}
              <div className="p-6 rounded-t-3xl border border-white/15 bg-gradient-to-r from-[#0D0D1A] to-[#0a1024] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
                  <span className="text-white text-lg font-black tracking-wide">Recurring Task Config</span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-300 bg-blue-500/20 border border-blue-500/30 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">Monday Process</span>
              </div>

              {/* Config rows */}
              <div className="p-6 rounded-b-3xl border-x border-b border-white/15 bg-[#090912]/95 flex flex-col gap-0 divide-y divide-white/10 shadow-2xl">
                {[
                  { label: 'Frequency', value: 'Weekly', icon: <RotateCw size={16} className="text-blue-400" /> },
                  { label: 'Every', value: '1 week', icon: <Calendar size={16} className="text-blue-400" /> },
                  { label: 'Days', value: 'Mon, Wed, Fri', icon: <Calendar size={16} className="text-blue-400" />, highlight: true },
                  { label: 'Skip weekends', value: '✓ Enabled', icon: <CheckCircle size={16} className="text-emerald-400" />, valueColor: 'text-emerald-400 font-bold' },
                  { label: 'End', value: 'Never', icon: <Clock size={16} className="text-white/40" /> },
                  { label: 'Next due', value: 'Jul 7, 09:00', icon: <Timer size={16} className="text-sky-400" />, valueColor: 'text-sky-300 font-extrabold' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-4 hover:bg-white/[0.02] px-2 rounded-xl transition-colors">
                    <div className="flex items-center gap-3">
                      {row.icon}
                      <span className="text-white/70 text-xs sm:text-sm font-bold">{row.label}</span>
                    </div>
                    <span className={`text-xs sm:text-sm font-bold ${row.valueColor || 'text-white'} ${row.highlight ? 'bg-blue-500/20 border border-blue-500/40 text-blue-300 px-3.5 py-1 rounded-full text-xs shadow-md' : ''}`}>
                      {row.value}
                    </span>
                  </div>
                ))}

                {/* Assignee round-robin */}
                <div className="pt-5 pb-3 px-2">
                  <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3 font-extrabold">Round-Robin Assignees</p>
                  <div className="flex gap-3">
                    {['JD', 'AM', 'KR', 'SB'].map((initials, i) => (
                      <div key={i} className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-500/30 to-sky-600/30 border border-blue-400/40 flex items-center justify-center text-xs font-extrabold text-blue-300 shadow-[0_4px_12px_rgba(59,130,246,0.2)] hover:scale-110 transition-transform cursor-pointer">
                        {initials}
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-2xl bg-white/[0.05] border border-white/15 flex items-center justify-center text-xs text-white/70 font-extrabold hover:bg-white/10 transition-colors cursor-pointer">+2</div>
                  </div>
                </div>

                {/* Checklist preview */}
                <div className="pt-5 pb-3 px-2">
                  <p className="text-xs font-mono text-white/50 uppercase tracking-widest mb-3 font-extrabold">Default Checklist</p>
                  <div className="flex flex-col gap-2.5">
                    {[
                      { done: true, label: 'Review incoming requests' },
                      { done: true, label: 'Update status board' },
                      { done: false, label: 'Send weekly ops summary' },
                      { done: false, label: 'Approve pending sign-offs' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-3.5 p-3 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.06] hover:border-white/15 transition-all shadow-sm cursor-pointer">
                        <div className={`w-5 h-5 rounded-lg border flex items-center justify-center shrink-0 ${
                          item.done ? 'bg-emerald-500/20 border-emerald-500/60 shadow-[0_0_10px_rgba(16,185,129,0.4)]' : 'border-white/20 bg-white/[0.05]'
                        }`}>
                          {item.done && <CheckCircle size={13} className="text-emerald-400" />}
                        </div>
                        <span className={`text-xs sm:text-sm font-bold ${item.done ? 'text-white/40 line-through' : 'text-white/90'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Approval + audit footer */}
                <div className="pt-5 mt-2 grid grid-cols-1 sm:grid-cols-2 gap-4 px-2">
                  <div className="p-4 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent flex items-center gap-3 shadow-[0_4px_15px_rgba(59,130,246,0.15)] group hover:scale-102 transition-transform">
                    <ClipboardCheck size={18} className="text-blue-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-blue-200 font-extrabold">Approval required on close</span>
                  </div>
                  <div className="p-4 rounded-2xl border border-white/15 bg-gradient-to-br from-white/10 via-white/5 to-transparent flex items-center gap-3 shadow-md group hover:scale-102 transition-transform">
                    <Database size={18} className="text-sky-400 shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-xs sm:text-sm text-white font-extrabold">Full audit trail logged</span>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ─────────────────────────────────────────── */}
        {/* ── PROJECT TEAMS & AGENCIES SECTION ── */}
        {/* ─────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-24 pb-16 w-full"
        >
          <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16" />

          {/* ── CENTERED HEADER & PROBLEM STATEMENT ── */}
          <div className="text-center max-w-4xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-wide shadow-[0_0_20px_rgba(59,130,246,0.15)]">
              <Briefcase size={14} />
              <span>🎯 Project Teams</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
              Full visibility across every<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">client project, all at once.</span>
            </h2>

            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.04] via-white/[0.02] to-white/[0.04] shadow-[0_10px_30px_rgba(0,0,0,0.3)] text-center">
              <span className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 text-[11px] font-mono font-bold uppercase tracking-widest mb-3">The Problem</span>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
                A dev agency managing 8 active client projects. No single view of which projects are healthy, which are at risk, and where the team&apos;s time is going. PMs are always asking engineers for updates.
              </p>
            </div>
          </div>

          {/* ── TWO-COLUMN GRID: MODERN CARDS & MOCK BOARD ── */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* LEFT: MODERN SOLUTION CARDS (2x3 GRID) */}
            <div className="lg:col-span-6 flex flex-col gap-5">
              <div className="flex items-center gap-2.5 px-2">
                <div className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                <p className="text-xs font-mono text-white/70 uppercase tracking-widest font-extrabold">How ownTask Solves It</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: <Folder size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'One project per client', desc: 'Each client gets an isolated workspace with its own team access, statuses, and settings.' },
                  { icon: <Layers size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Subjects as work streams', desc: 'Group tasks into Design, Backend, QA, Deployment subjects — each with its own workflow.' },
                  { icon: <GitBranch size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Custom fields per subject', desc: '"PR Link", "Browser Tested", "Design File URL" — typed metadata unique to that workstream.' },
                  { icon: <Zap size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Template library', desc: 'Install Bug Tracker, Feature Backlog, or Sprint Board templates — full project scaffolding in one click.' },
                  { icon: <Eye size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Restricted visibility', desc: 'Each client project is visible only to its assigned team — zero cross-client data leakage.' },
                  { icon: <BarChart2 size={20} />, color: 'text-blue-400', bg: 'bg-blue-500/20 border-blue-500/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]', title: 'Live project health', desc: 'Completion rate, overdue count, and SLA compliance per client — updated in real time, no manual reporting.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="p-5 rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] hover:from-white/[0.14] hover:to-white/[0.05] hover:border-white/30 transition-all duration-300 shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] group hover:-translate-y-1.5 flex flex-col justify-between relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div>
                      <div className={`w-12 h-12 rounded-2xl border ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <span className={item.color}>{item.icon}</span>
                      </div>
                      <h4 className="text-white font-extrabold text-base mb-2 group-hover:text-blue-300 transition-colors flex items-center justify-between">
                        <span>{item.title}</span>
                      </h4>
                      <p className="text-white/70 text-xs sm:text-sm leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: MULTI-PROJECT HEALTH MOCK */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-6 w-full"
            >
              {/* Panel header */}
              <div className="p-6 rounded-t-3xl border border-white/15 bg-gradient-to-r from-[#0D0D1A] to-[#0d162d] flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-3.5 h-3.5 rounded-full bg-blue-500 animate-pulse shadow-[0_0_12px_rgba(59,130,246,0.9)]" />
                  <span className="text-white text-lg font-black tracking-wide">Project Health Overview</span>
                </div>
                <span className="text-xs font-mono font-bold text-blue-300 bg-blue-500/20 border border-blue-500/30 px-3.5 py-1.5 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]">8 active projects</span>
              </div>

              {/* Project cards */}
              <div className="p-6 rounded-b-3xl border-x border-b border-white/15 bg-[#090912]/95 flex flex-col gap-4 shadow-2xl">
                {[
                  { name: 'Acme Corp Redesign',    pct: 75, tasks: 84,  overdue: 2,  sla: '97.1%', status: 'On Track',   dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]', bar: 'from-sky-500 via-blue-400 to-sky-300',     border: 'border-blue-500/30', bg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent' },
                  { name: 'Beta App v2.0',         pct: 45, tasks: 112, overdue: 9,  sla: '81.4%', status: 'At Risk',    dot: 'bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]',   bar: 'from-sky-500 via-blue-400 to-sky-300',     border: 'border-blue-500/30', bg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent' },
                  { name: 'Gamma Support Portal',  pct: 91, tasks: 56,  overdue: 0,  sla: '99.6%', status: 'On Track',   dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]', bar: 'from-sky-500 via-blue-400 to-sky-300',     border: 'border-blue-500/30', bg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent' },
                  { name: 'Delta Marketing Site',  pct: 30, tasks: 67,  overdue: 14, sla: '68.2%', status: 'Critical',   dot: 'bg-rose-400 shadow-[0_0_10px_rgba(251,113,133,0.9)]',    bar: 'from-sky-500 via-blue-400 to-sky-300',     border: 'border-blue-500/30', bg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent' },
                  { name: 'Epsilon iOS App',       pct: 62, tasks: 98,  overdue: 4,  sla: '89.3%', status: 'On Track',   dot: 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]', bar: 'from-sky-500 via-blue-400 to-sky-300',     border: 'border-blue-500/30', bg: 'bg-gradient-to-r from-blue-500/10 via-blue-500/5 to-transparent' },
                ].map((proj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className={`p-5 rounded-2xl border ${proj.border} ${proj.bg} hover:bg-white/[0.08] hover:border-white/40 transition-all duration-300 flex flex-col gap-3.5 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer group`}
                  >
                    {/* Title row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                          <Folder size={16} className="text-blue-500 shrink-0" />
                        </div>
                        <span className="text-white text-sm sm:text-base font-extrabold truncate group-hover:text-blue-200 transition-colors">{proj.name}</span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 bg-black/40 px-3 py-1 rounded-full border border-white/15 shadow-inner">
                        <div className={`w-2 h-2 rounded-full ${proj.dot}`} />
                        <span className={`text-xs font-black tracking-wide ${
                          proj.status === 'Critical' ? 'text-rose-400' :
                          proj.status === 'At Risk' ? 'text-amber-400' : 'text-emerald-400'
                        }`}>{proj.status}</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-2.5 rounded-full bg-black/50 overflow-hidden p-0.5 border border-white/10 shadow-inner">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proj.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.08 }}
                        className={`h-full rounded-full bg-gradient-to-r ${proj.bar} shadow-sm`}
                      />
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center justify-between text-xs font-mono pt-1">
                      <span className="text-white/60 font-bold">{proj.tasks} tasks</span>
                      <span className="text-white font-extrabold">{proj.pct}% complete</span>
                      <span className={proj.overdue > 0 ? 'text-rose-300 font-extrabold bg-rose-500/20 px-2.5 py-0.5 rounded-full border border-rose-500/40 shadow-sm' : 'text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20'}>
                        {proj.overdue > 0 ? `${proj.overdue} overdue` : '✓ No overdue'}
                      </span>
                      <span className="text-white/60 font-bold">SLA <span className="text-white font-black">{proj.sla}</span></span>
                    </div>
                  </motion.div>
                ))}

                {/* Remaining projects stub */}
                <div className="p-4 rounded-2xl border border-white/15 bg-white/[0.03] flex items-center justify-center gap-2 text-white/60 text-xs font-mono font-extrabold hover:bg-white/[0.08] hover:text-white transition-all cursor-pointer shadow-sm">
                  + 3 more active projects (View All &rarr;)
                </div>
              </div>

              {/* Footer priority/capacity note */}
              <div className="mt-4 p-5 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 via-blue-500/5 to-transparent flex items-center gap-4 shadow-lg group hover:scale-101 transition-transform">
                <div className="flex -space-x-2 shrink-0">
                  {['bg-rose-500','bg-amber-500','bg-blue-500','bg-slate-500','bg-emerald-500'].map((c,i) => (
                    <div key={i} className={`w-5 h-5 rounded-full ${c} border-2 border-[#090912] shadow-md group-hover:scale-110 transition-transform`} style={{ transitionDelay: `${i * 30}ms` }} />
                  ))}
                </div>
                <span className="text-xs sm:text-sm font-extrabold text-white/90 leading-snug">
                  5-level priority + estimated hours — team capacity & workload planning built directly in
                </span>
              </div>
            </motion.div>

          </div>
        </motion.section>


      </div>
    </div>
  );
}

