import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
  Headphones, Settings, Briefcase, Users, RotateCw, ShieldCheck,
  Clock, BarChart2, CheckCircle, AlertTriangle, Layers, Zap,
  ChevronRight, ArrowRight, Timer, UserCheck, TrendingUp,
  Calendar, Folder, ClipboardCheck, GitBranch, Database, Eye
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
    color: 'from-amber-500 to-orange-600',
    border: 'border-amber-500/20',
    bg: 'bg-amber-500/5',
    iconColor: 'text-amber-400',
    tagBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
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
    emoji: '🏗️',
    tag: 'Project Management',
    icon: <Briefcase size={22} />,
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/20',
    bg: 'bg-violet-500/5',
    iconColor: 'text-violet-400',
    tagBg: 'bg-violet-500/10 border-violet-500/20 text-violet-400',
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
    document.title = "ownTask Use Cases — Support Teams, Operations & Project Management";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "See how customer support teams, operations managers, and project-based agencies use ownTask to manage SLAs, recurring processes, multi-project tracking, and compliance.";
  }, []);

  const active = USE_CASES.find(u => u.id === activeTab);

  return (
    <div className="relative z-10 w-full bg-transparent py-20 lg:py-28 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] bg-primary/[0.04] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-sky-500/[0.04] rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">

        {/* ── HERO HEADER ── */}
        <div className="mb-16">
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
            className="text-white/55 text-lg leading-relaxed max-w-2xl"
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
          className="flex flex-wrap gap-2 mb-10"
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
          className={`rounded-3xl border ${active.border} ${active.bg} p-8 md:p-12 backdrop-blur-xl flex flex-col lg:flex-row gap-12 items-start shadow-2xl`}
        >
          {/* LEFT */}
          <div className="flex-1 min-w-0">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold mb-6 ${active.tagBg}`}>
              {active.icon}
              {active.title}
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              {active.headline}
            </h2>
            <p className="text-white/60 text-base leading-relaxed mb-8 max-w-lg">
              {active.description}
            </p>

            <div className="flex flex-col gap-4">
              {active.bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="flex items-start gap-3"
                >
                  <span className={`mt-0.5 shrink-0 ${active.iconColor}`}>{b.icon}</span>
                  <span className="text-white/75 text-sm leading-snug">{b.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — stat callout */}
          <div className="lg:w-[280px] shrink-0 flex flex-col gap-5">
            <div className={`p-7 rounded-2xl border ${active.border} bg-white/[0.03] flex flex-col items-center text-center`}>
              <span className={`text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br ${active.color} mb-2`}>
                {active.stat.val}
              </span>
              <span className="text-white/50 text-sm font-medium">{active.stat.label}</span>
            </div>

            <div className="p-5 rounded-2xl border border-white/[0.05] bg-white/[0.01] flex flex-col gap-3">
              <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Works great with</p>
              {['SLA Tracking', 'Recurring Tasks', 'Custom Workflows', 'Role-Based Access'].map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/70">
                  <ChevronRight size={12} className={active.iconColor} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── ALL CARDS GRID (always visible below) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {USE_CASES.map((uc, idx) => (
            <motion.button
              key={uc.id}
              onClick={() => setActiveTab(uc.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className={`group text-left p-6 rounded-2xl border transition-all duration-300 ${
                activeTab === uc.id
                  ? `${uc.bg} ${uc.border} shadow-lg`
                  : 'bg-white/[0.01] border-white/[0.05] hover:bg-white/[0.04] hover:border-white/10'
              }`}
            >
              <div className={`text-3xl mb-4`}>{uc.emoji}</div>
              <h3 className="text-white font-bold text-base mb-2">{uc.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed line-clamp-3">{uc.description}</p>
              <div className={`flex items-center gap-1 text-xs font-bold mt-4 ${uc.iconColor} opacity-0 group-hover:opacity-100 transition-opacity`}>
                Explore <ArrowRight size={12} />
              </div>
            </motion.button>
          ))}
        </div>

        {/* ─── CUSTOMER SUPPORT DEEP DIVE ─── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 w-full"
        >
          {/* Section divider */}
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest shrink-0">Detailed Use Case</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* ── LEFT: TEXT ── */}
            <div>
              {/* Tag badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 text-sky-400 text-xs font-bold tracking-wide">
                <Headphones size={13} />
                <span>🎧 Customer Support</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                Turn your inbox into an<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">accountable ticket system.</span>
              </h2>

              {/* Scenario narrative */}
              <div className="p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] mb-8">
                <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-3">The Problem</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  A support team managing 200+ tickets a day. Tickets fall through cracks. Agents have uneven workloads. There&apos;s no visibility into who&apos;s overloaded or which priority tickets are being ignored.
                </p>
              </div>

              {/* Solution bullets */}
              <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-5">How ownTask Solves It</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Layers size={15} />, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', title: 'Ticket Board project', desc: 'Create a structured project for "Customer Support" with custom statuses, fields, and subjects.' },
                  { icon: <Users size={15} />, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20', title: 'Round-robin assignment', desc: 'Auto-assign incoming tickets across agents — equitable workloads, automatically.' },
                  { icon: <Timer size={15} />, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', title: 'SLA by priority', desc: 'Highest = 2h · High = 4h · Normal = 8h · Low = 24h — configured once, enforced always.' },
                  { icon: <AlertTriangle size={15} />, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', title: 'Status-based SLA alerts', desc: 'Alert when a ticket stays "In Review" beyond 2 hours — catch stalled work before breach.' },
                  { icon: <TrendingUp size={15} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', title: 'Auto-escalation', desc: 'Auto-escalate to senior team if not resolved within 4 hours — no manual monitoring needed.' },
                  { icon: <UserCheck size={15} />, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', title: 'Customer linking + analytics', desc: 'Every ticket connected to a customer record. Pull per-agent completion rate, on-time rate, and SLA compliance.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${item.bg}`}>
                      <span className={item.color}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{item.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: KANBAN MOCK ── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              {/* Board header */}
              <div className="p-4 rounded-t-2xl border border-white/[0.07] bg-[#0D0D1A] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span className="text-white/80 text-sm font-bold">Ticket Board</span>
                </div>
                <span className="text-[10px] font-mono text-white/30 bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">Customer Support</span>
              </div>

              {/* Kanban columns */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-b-2xl border-x border-b border-white/[0.07] bg-[#090912]/90 backdrop-blur-xl">

                {/* To Do */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-white/40 uppercase tracking-widest">To Do</span>
                    <span className="text-[10px] font-bold text-white/40 bg-white/[0.04] px-1.5 py-0.5 rounded-full border border-white/[0.06]">3</span>
                  </div>
                  {[
                    { id: 'TKT-081', title: 'Login broken on mobile', badge: 'Highest', color: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
                    { id: 'TKT-082', title: 'Payment gateway timeout', badge: 'High', color: 'bg-amber-500/20 text-amber-400 border-amber-500/30' },
                    { id: 'TKT-083', title: 'CSV export corrupted', badge: 'Normal', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
                  ].map(t => (
                    <div key={t.id} className="p-3 rounded-xl border border-white/[0.06] bg-white/[0.02] flex flex-col gap-2">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border self-start ${t.color}`}>{t.badge}</span>
                      <p className="text-white/80 text-[11px] font-semibold leading-snug">{t.title}</p>
                      <span className="text-[9px] text-white/25 font-mono">{t.id}</span>
                    </div>
                  ))}
                </div>

                {/* In Progress */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-indigo-400 uppercase tracking-widest">In Progress</span>
                    <span className="text-[10px] font-bold text-indigo-400 bg-indigo-500/10 px-1.5 py-0.5 rounded-full border border-indigo-500/20">2</span>
                  </div>
                  {[
                    { id: 'TKT-077', title: 'API key not generating', badge: 'High', badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30', agent: 'John D.', sla: '2h 14m', slaColor: 'text-amber-400' },
                    { id: 'TKT-079', title: 'Notification emails delayed', badge: 'Normal', badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/30', agent: 'Jane D.', sla: '6h 02m', slaColor: 'text-emerald-400' },
                  ].map(t => (
                    <div key={t.id} className="p-3 rounded-xl border border-indigo-500/15 bg-indigo-500/[0.04] flex flex-col gap-2">
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border self-start ${t.badgeColor}`}>{t.badge}</span>
                      <p className="text-white/85 text-[11px] font-semibold leading-snug">{t.title}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] text-white/30 font-mono">{t.agent}</span>
                        <div className="flex items-center gap-1">
                          <Timer size={9} className={t.slaColor} />
                          <span className={`text-[9px] font-bold font-mono ${t.slaColor}`}>{t.sla}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resolved */}
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">Resolved</span>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded-full border border-emerald-500/20">5</span>
                  </div>
                  {[
                    { id: 'TKT-071', title: 'Dashboard not loading' },
                    { id: 'TKT-072', title: '2FA reset request' },
                    { id: 'TKT-073', title: 'Bulk import failed' },
                    { id: 'TKT-074', title: 'Wrong email sent' },
                    { id: 'TKT-075', title: 'Account merge issue' },
                  ].map(t => (
                    <div key={t.id} className="p-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.03] flex flex-col gap-1.5">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle size={10} className="text-emerald-400 shrink-0" />
                        <p className="text-white/55 text-[11px] font-medium leading-snug">{t.title}</p>
                      </div>
                      <span className="text-[9px] text-white/20 font-mono">{t.id}</span>
                    </div>
                  ))}
                </div>

              </div>

              {/* Board footer stats */}
              <div className="mt-3 grid grid-cols-3 gap-3">
                {[
                  { label: 'SLA Compliance', val: '94.2%', color: 'text-emerald-400' },
                  { label: 'Avg Resolve Time', val: '3.4h', color: 'text-sky-400' },
                  { label: 'Overdue', val: '1', color: 'text-rose-400' },
                ].map((s, i) => (
                  <div key={i} className="p-3 rounded-xl border border-white/[0.05] bg-white/[0.01] text-center">
                    <p className={`text-base font-extrabold font-mono ${s.color}`}>{s.val}</p>
                    <p className="text-[10px] text-white/30 mt-0.5">{s.label}</p>
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
          className="mt-20 w-full"
        >
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest shrink-0">Detailed Use Case</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Recurring Config Mock */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="w-full"
            >
              {/* Panel header */}
              <div className="p-4 rounded-t-2xl border border-white/[0.07] bg-[#0D0D1A] flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                <span className="text-white/80 text-sm font-bold">Recurring Task Config</span>
                <span className="ml-auto text-[10px] font-mono text-white/30 bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">Monday Process</span>
              </div>

              {/* Config rows */}
              <div className="p-6 rounded-b-2xl border-x border-b border-white/[0.07] bg-[#090912]/90 backdrop-blur-xl flex flex-col gap-0 divide-y divide-white/[0.04]">
                {[
                  { label: 'Frequency', value: 'Weekly', icon: <RotateCw size={13} className="text-amber-400" /> },
                  { label: 'Every', value: '1 week', icon: <Calendar size={13} className="text-amber-400" /> },
                  { label: 'Days', value: 'Mon, Wed, Fri', icon: <Calendar size={13} className="text-amber-400" />, highlight: true },
                  { label: 'Skip weekends', value: '✓ Enabled', icon: <CheckCircle size={13} className="text-emerald-400" />, valueColor: 'text-emerald-400' },
                  { label: 'End', value: 'Never', icon: <Clock size={13} className="text-white/30" /> },
                  { label: 'Next due', value: 'Jul 7, 09:00', icon: <Timer size={13} className="text-sky-400" />, valueColor: 'text-sky-400 font-bold' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2.5">
                      {row.icon}
                      <span className="text-white/45 text-xs font-mono">{row.label}</span>
                    </div>
                    <span className={`text-xs font-bold ${row.valueColor || 'text-white/80'} ${row.highlight ? 'bg-amber-500/10 border border-amber-500/20 text-amber-300 px-2 py-0.5 rounded-full text-[10px]' : ''}`}>
                      {row.value}
                    </span>
                  </div>
                ))}

                {/* Assignee round-robin */}
                <div className="pt-4 pb-1">
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Round-Robin Assignees</p>
                  <div className="flex gap-2">
                    {['JD', 'AM', 'KR', 'SB'].map((initials, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-500/30 to-orange-600/30 border border-amber-500/20 flex items-center justify-center text-[10px] font-bold text-amber-300">
                        {initials}
                      </div>
                    ))}
                    <div className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[10px] text-white/30 font-bold">+2</div>
                  </div>
                </div>

                {/* Checklist preview */}
                <div className="pt-4">
                  <p className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-3">Default Checklist</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { done: true, label: 'Review incoming requests' },
                      { done: true, label: 'Update status board' },
                      { done: false, label: 'Send weekly ops summary' },
                      { done: false, label: 'Approve pending sign-offs' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${
                          item.done ? 'bg-emerald-500/20 border-emerald-500/40' : 'border-white/15 bg-white/[0.02]'
                        }`}>
                          {item.done && <CheckCircle size={9} className="text-emerald-400" />}
                        </div>
                        <span className={`text-[11px] ${item.done ? 'text-white/35 line-through' : 'text-white/65'}`}>{item.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Approval + audit footer */}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-xl border border-amber-500/15 bg-amber-500/[0.04] flex items-center gap-2">
                  <ClipboardCheck size={13} className="text-amber-400 shrink-0" />
                  <span className="text-[10px] text-amber-300 font-bold">Approval required on close</span>
                </div>
                <div className="p-3 rounded-xl border border-white/[0.05] bg-white/[0.01] flex items-center gap-2">
                  <Database size={13} className="text-white/40 shrink-0" />
                  <span className="text-[10px] text-white/45 font-bold">Full audit trail logged</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold tracking-wide">
                <Settings size={13} />
                <span>⚙️ Operations</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                Automate the processes your<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500">team runs every week.</span>
              </h2>

              <div className="p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] mb-8">
                <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-3">The Problem</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  An ops manager running the same 12-step process every Monday. Different team members responsible for different steps. Some forget. Some do it wrong. No accountability trail exists.
                </p>
              </div>

              <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-5">How ownTask Solves It</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <RotateCw size={15} />, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', title: 'Weekly recurring tasks', desc: 'Create a recurring task per process step with skip-weekends enabled — auto-fires every Monday.' },
                  { icon: <Users size={15} />, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20', title: 'Round-robin rotation', desc: 'Rotate assignees automatically across your team so no one gets overloaded week after week.' },
                  { icon: <ClipboardCheck size={15} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', title: 'Default checklists', desc: 'Each step has sub-items the assignee must check off before the task can be closed.' },
                  { icon: <ShieldCheck size={15} />, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', title: 'Approval workflows', desc: 'Enable sign-off requirements on final-step tasks — nothing closes without the right person approving.' },
                  { icon: <Database size={15} />, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', title: 'Full audit trail', desc: 'Every change logged — who did what, when, with before/after field values. Always compliance-ready.' },
                  { icon: <BarChart2 size={15} />, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', title: 'Project health cache', desc: 'Ops completion rate updated every morning — at-a-glance team health before standup.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${item.bg}`}>
                      <span className={item.color}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{item.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </motion.section>

        {/* ─────────────────────────────────────────── */}
        {/* ── PROJECT TEAMS & AGENCIES SECTION ── */}
        {/* ─────────────────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 pb-10 w-full"
        >
          <div className="flex items-center gap-4 mb-14">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <span className="text-white/30 text-xs font-mono uppercase tracking-widest shrink-0">Detailed Use Case</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-white/10 to-transparent" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* LEFT: Text */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-400 text-xs font-bold tracking-wide">
                <Briefcase size={13} />
                <span>🎯 Project Teams</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-5">
                Full visibility across every<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-500">client project, all at once.</span>
              </h2>

              <div className="p-5 rounded-2xl border border-white/[0.05] bg-white/[0.02] mb-8">
                <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-3">The Problem</p>
                <p className="text-white/65 text-sm leading-relaxed">
                  A dev agency managing 8 active client projects. No single view of which projects are healthy, which are at risk, and where the team&apos;s time is going. PMs are always asking engineers for updates.
                </p>
              </div>

              <p className="text-xs font-mono text-white/35 uppercase tracking-widest mb-5">How ownTask Solves It</p>
              <div className="flex flex-col gap-4">
                {[
                  { icon: <Folder size={15} />, color: 'text-violet-400', bg: 'bg-violet-500/10 border-violet-500/20', title: 'One project per client', desc: 'Each client gets an isolated workspace with its own team access, statuses, and settings.' },
                  { icon: <Layers size={15} />, color: 'text-indigo-400', bg: 'bg-indigo-500/10 border-indigo-500/20', title: 'Subjects as work streams', desc: 'Group tasks into Design, Backend, QA, Deployment subjects — each with its own workflow.' },
                  { icon: <GitBranch size={15} />, color: 'text-sky-400', bg: 'bg-sky-500/10 border-sky-500/20', title: 'Custom fields per subject', desc: '"PR Link", "Browser Tested", "Design File URL" — typed metadata unique to that workstream.' },
                  { icon: <Zap size={15} />, color: 'text-amber-400', bg: 'bg-amber-500/10 border-amber-500/20', title: 'Template library', desc: 'Install Bug Tracker, Feature Backlog, or Sprint Board templates — full project scaffolding in one click.' },
                  { icon: <Eye size={15} />, color: 'text-rose-400', bg: 'bg-rose-500/10 border-rose-500/20', title: 'Restricted visibility', desc: 'Each client project is visible only to its assigned team — zero cross-client data leakage.' },
                  { icon: <BarChart2 size={15} />, color: 'text-emerald-400', bg: 'bg-emerald-500/10 border-emerald-500/20', title: 'Live project health', desc: 'Completion rate, overdue count, and SLA compliance per client — updated in real time, no manual reporting.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-4"
                  >
                    <div className={`p-2.5 rounded-xl border shrink-0 ${item.bg}`}>
                      <span className={item.color}>{item.icon}</span>
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm mb-0.5">{item.title}</p>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: Multi-project health mock */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              {/* Panel header */}
              <div className="p-4 rounded-t-2xl border border-white/[0.07] bg-[#0D0D1A] flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-violet-500" />
                <span className="text-white/80 text-sm font-bold">Project Health Overview</span>
                <span className="ml-auto text-[10px] font-mono text-white/30 bg-white/[0.03] border border-white/[0.05] px-2 py-0.5 rounded">8 active projects</span>
              </div>

              {/* Project cards */}
              <div className="p-4 rounded-b-2xl border-x border-b border-white/[0.07] bg-[#090912]/90 backdrop-blur-xl flex flex-col gap-3">
                {[
                  { name: 'Acme Corp Redesign',    pct: 75, tasks: 84,  overdue: 2,  sla: '97.1%', status: 'On Track',   dot: 'bg-emerald-400', bar: 'from-emerald-500 to-teal-400',     border: 'border-emerald-500/15', bg: 'bg-emerald-500/[0.04]' },
                  { name: 'Beta App v2.0',         pct: 45, tasks: 112, overdue: 9,  sla: '81.4%', status: 'At Risk',    dot: 'bg-amber-400',   bar: 'from-amber-500 to-orange-400',   border: 'border-amber-500/15',  bg: 'bg-amber-500/[0.04]' },
                  { name: 'Gamma Support Portal',  pct: 91, tasks: 56,  overdue: 0,  sla: '99.6%', status: 'On Track',   dot: 'bg-emerald-400', bar: 'from-emerald-500 to-teal-400',   border: 'border-emerald-500/15', bg: 'bg-emerald-500/[0.04]' },
                  { name: 'Delta Marketing Site',  pct: 30, tasks: 67,  overdue: 14, sla: '68.2%', status: 'Critical',   dot: 'bg-rose-400',    bar: 'from-rose-500 to-pink-500',      border: 'border-rose-500/15',   bg: 'bg-rose-500/[0.04]' },
                  { name: 'Epsilon iOS App',        pct: 62, tasks: 98,  overdue: 4,  sla: '89.3%', status: 'On Track',   dot: 'bg-emerald-400', bar: 'from-sky-500 to-blue-500',       border: 'border-sky-500/15',    bg: 'bg-sky-500/[0.04]' },
                ].map((proj, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.25 + i * 0.07 }}
                    className={`p-4 rounded-xl border ${proj.border} ${proj.bg} flex flex-col gap-3`}
                  >
                    {/* Title row */}
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2 min-w-0">
                        <Folder size={13} className="text-white/40 shrink-0" />
                        <span className="text-white/85 text-xs font-bold truncate">{proj.name}</span>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className={`w-1.5 h-1.5 rounded-full ${proj.dot}`} />
                        <span className={`text-[10px] font-bold ${
                          proj.status === 'Critical' ? 'text-rose-400' :
                          proj.status === 'At Risk' ? 'text-amber-400' : 'text-emerald-400'
                        }`}>{proj.status}</span>
                      </div>
                    </div>

                    {/* Progress bar */}
                    <div className="w-full h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${proj.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 + i * 0.08 }}
                        className={`h-full rounded-full bg-gradient-to-r ${proj.bar}`}
                      />
                    </div>

                    {/* Stats row */}
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-white/40">{proj.tasks} tasks</span>
                      <span className="text-white/70 font-bold">{proj.pct}% complete</span>
                      <span className={proj.overdue > 0 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                        {proj.overdue > 0 ? `${proj.overdue} overdue` : '✓ No overdue'}
                      </span>
                      <span className="text-white/40">SLA {proj.sla}</span>
                    </div>
                  </motion.div>
                ))}

                {/* Remaining projects stub */}
                <div className="p-3 rounded-xl border border-white/[0.04] bg-white/[0.01] flex items-center justify-center gap-2 text-white/25 text-[10px] font-mono">
                  + 3 more projects
                </div>
              </div>

              {/* Footer priority/capacity note */}
              <div className="mt-3 p-4 rounded-xl border border-violet-500/10 bg-violet-500/[0.03] flex items-center gap-3">
                <div className="flex -space-x-1">
                  {['bg-rose-500','bg-amber-500','bg-blue-500','bg-slate-500','bg-emerald-500'].map((c,i) => (
                    <div key={i} className={`w-3 h-3 rounded-full ${c} border border-[#090912]`} />
                  ))}
                </div>
                <span className="text-[11px] text-white/50 leading-snug">
                  5-level priority + estimated hours — capacity planning built in
                </span>
              </div>
            </motion.div>

          </div>
        </motion.section>

        {/* ─── ANIMATED CTA FOOTER ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mt-20 mb-4 overflow-hidden rounded-3xl border border-white/[0.08]"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-600/10 via-primary/10 to-violet-600/10" />

          {/* Animated glow orbs */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-10 -left-10 w-64 h-64 bg-sky-500/20 rounded-full blur-[80px] pointer-events-none"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute -bottom-10 -right-10 w-64 h-64 bg-violet-500/20 rounded-full blur-[80px] pointer-events-none"
          />

          {/* Shimmer top border line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center text-center gap-6 px-8 py-14">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-widest uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Get Started Today
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="text-2xl md:text-3xl font-extrabold text-white leading-tight max-w-xl"
            >
              Every team is different.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-violet-400">
                ownTask adapts.
              </span>
            </motion.p>

            {/* Sub text */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/45 text-sm max-w-md leading-relaxed"
            >
              Built for support teams, ops managers, and agencies — configure your workspace in minutes, not weeks.
            </motion.p>

            {/* Button */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-600 text-white text-sm font-bold shadow-lg shadow-violet-500/20 transition-all"
            >
              Start Free · See All Features
              <span className="text-white/70">→</span>
            </motion.a>

            {/* Trust micro-line */}
            <p className="text-white/25 text-[11px] font-mono">No credit card required · 15-minute setup · Cancel anytime</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
