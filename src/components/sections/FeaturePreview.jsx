import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Columns, Timer, History, LineChart,
  User, Calendar, CheckCircle2, AlertCircle,
  AlertTriangle, Play, ChevronRight, TrendingUp
} from 'lucide-react';

const tabs = [
  { id: 'board',     label: 'Task Board',     icon: <Columns size={19} />,   desc: 'Visualise work across columns' },
  { id: 'sla',       label: 'SLA Dashboard',  icon: <Timer size={19} />,     desc: 'Track compliance in real-time' },
  { id: 'audit',     label: 'Audit Timeline', icon: <History size={19} />,   desc: 'Every change, immutably logged' },
  { id: 'analytics', label: 'Analytics',      icon: <LineChart size={19} />, desc: 'Data-driven performance insights' },
];

/* ─── TASK BOARD ─── */
const TaskCard = ({ title, priority, date, progress, badgeClass }) => (
  <motion.div
    whileHover={{ y: -3, scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="bg-[#0A0A14] border border-white/[0.07] rounded-2xl p-6 flex flex-col gap-5 cursor-pointer group hover:border-primary/25 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12)] transition-all duration-300 min-h-[140px] justify-between"
  >
    <div className="flex justify-between items-start">
      <span className={`text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-xl border ${badgeClass}`}>{priority}</span>
      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-[#34d399]/20 flex items-center justify-center border border-white/10 shadow-inner">
        <User size={17} className="text-primary" />
      </div>
    </div>
    <strong className="text-[1rem] font-semibold leading-snug text-white/90 group-hover:text-white transition-colors">{title}</strong>
    <div className="flex flex-col gap-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1.5 text-sm text-white/40 font-medium">
          <Calendar size={13} /> {date}
        </div>
        <span className="text-sm font-mono text-white/30 font-bold">{progress}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
          className="h-full rounded-full bg-gradient-to-r from-[#34d399] to-primary shadow-[0_0_8px_rgba(52,211,153,0.4)]"
        />
      </div>
    </div>
  </motion.div>
);

const TabBoard = () => (
  <div className="grid grid-cols-3 gap-5 p-7 lg:p-9 h-full">
    {[
      {
        label: 'To Do', dot: 'bg-slate-500', count: 2, countCls: 'bg-white/5 border-white/5 text-white/30',
        cards: [
          { title: 'Update API docs',      priority: 'Normal',  badgeClass: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5',  date: 'Jul 8',  progress: 0 },
          { title: 'Design system audit',  priority: 'Low',     badgeClass: 'text-emerald-400 border-emerald-400/20 bg-emerald-400/5', date: 'Jul 12', progress: 0 },
        ]
      },
      {
        label: 'In Progress', dot: 'bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]', count: 2, countCls: 'bg-primary/10 border-primary/20 text-primary',
        cards: [
          { title: 'Hero section redesign', priority: 'High',    badgeClass: 'text-orange-400 border-orange-400/20 bg-orange-400/5', date: 'Jul 5', progress: 60 },
          { title: 'Stripe integration',    priority: 'Highest', badgeClass: 'text-red-400 border-red-400/20 bg-red-400/5',          date: 'Jul 6', progress: 30 },
        ]
      },
      {
        label: 'Done', dot: 'bg-emerald-400', count: 2, countCls: 'bg-white/5 border-white/5 text-white/30', opacity: 'opacity-55 hover:opacity-90 transition-opacity duration-300',
        cards: [
          { title: 'Navbar styling', priority: 'Normal',  badgeClass: 'text-indigo-400 border-indigo-400/20 bg-indigo-400/5', date: 'Jul 2', progress: 100 },
          { title: 'Fix auth bug',   priority: 'Highest', badgeClass: 'text-red-400 border-red-400/20 bg-red-400/5',          date: 'Jul 1', progress: 100 },
        ]
      }
    ].map((col, ci) => (
      <div key={ci} className={`flex flex-col gap-4 ${col.opacity || ''}`}>
        <div className="flex items-center gap-2 mb-1">
          <span className={`w-2.5 h-2.5 rounded-full ${col.dot}`} />
          <span className="text-sm font-bold text-white/50 uppercase tracking-widest">{col.label}</span>
          <span className={`ml-auto text-xs border px-2 py-0.5 rounded-md font-mono ${col.countCls}`}>{col.count}</span>
        </div>
        {col.cards.map((c, i) => <TaskCard key={i} {...c} />)}
      </div>
    ))}
  </div>
);

/* ─── SLA DASHBOARD ─── */
const TabSLA = () => (
  <div className="flex flex-col md:flex-row items-center justify-center gap-14 p-10 lg:p-14 h-full min-h-[500px]">
    {/* Ring */}
    <div className="relative w-64 h-64 flex items-center justify-center shrink-0">
      <svg className="absolute inset-0 w-full h-full -rotate-90">
        <circle cx="128" cy="128" r="110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="16" />
        <motion.circle
          initial={{ strokeDasharray: '0 692' }}
          animate={{ strokeDasharray: '651 692' }}
          transition={{ duration: 2, ease: 'easeOut' }}
          cx="128" cy="128" r="110" fill="none"
          stroke="url(#ringGrad2)" strokeWidth="16" strokeLinecap="round"
          style={{ filter: 'drop-shadow(0 0 16px rgba(52,211,153,0.4))' }}
        />
        <defs>
          <linearGradient id="ringGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col items-center text-center z-10">
        <motion.span
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl font-black bg-gradient-to-r from-[#34d399] to-[#8b5cf6] bg-clip-text text-transparent leading-none"
        >94.2<span className="text-3xl">%</span></motion.span>
        <span className="text-[0.65rem] font-bold text-white/35 uppercase tracking-widest mt-3">SLA Compliance</span>
      </div>
    </div>

    {/* Metrics */}
    <div className="flex flex-col gap-4 w-full max-w-[320px]">
      {[
        { icon: <CheckCircle2 size={20} className="text-emerald-400"/>, label: 'Completed',    val: 42, cls: 'border-emerald-500/20 bg-emerald-500/5',  valCls: 'text-emerald-400' },
        { icon: <Play size={20} className="text-blue-400 fill-blue-400/30"/>, label: 'Tracked',       val: 48, cls: 'border-blue-500/20 bg-blue-500/5',      valCls: 'text-blue-400' },
        { icon: <AlertTriangle size={20} className="text-amber-400"/>, label: 'Status Alerts', val: 1,  cls: 'border-amber-500/20 bg-amber-500/5',     valCls: 'text-amber-400' },
        { icon: <AlertCircle size={20} className="text-red-400"/>,    label: 'Breached',      val: 3,  cls: 'border-red-500/20 bg-red-500/5',         valCls: 'text-red-400' },
      ].map((m, i) => (
        <motion.div
          key={i}
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.15 * i + 0.4, ease: [0.16, 1, 0.3, 1] }}
          className={`flex items-center justify-between px-7 py-5 rounded-2xl border ${m.cls} backdrop-blur-sm hover:scale-[1.02] transition-transform duration-200 cursor-default min-h-[72px]`}
        >
          <span className="text-base font-semibold text-white/85 flex items-center gap-3">{m.icon}{m.label}</span>
          <span className={`text-4xl font-black ${m.valCls} tabular-nums`}>{m.val}</span>
        </motion.div>
      ))}
    </div>
  </div>
);

/* ─── AUDIT TIMELINE ─── */
const TabAudit = () => {
  const events = [
    {
      dotText: '✓',
      dotBg: '#10B981',
      actionType: 'STATUS_CHANGE',
      performedBy: 'John Doe',
      performedAt: 'Jul 1, 14:25',
      oldValue: 'In Progress',
      oldBg: 'rgba(239,68,68,0.15)',
      oldColor: '#EF4444',
      newValue: 'Done',
      newBg: 'rgba(16,185,129,0.15)',
      newColor: '#10B981',
      actionStyle: { background: 'rgba(16,185,129,0.2)', color: '#10B981', borderColor: 'rgba(16,185,129,0.4)' }
    },
    {
      dotText: '👤',
      dotBg: '#3B82F6',
      actionType: 'ASSIGN',
      performedBy: 'Admin',
      performedAt: 'Jul 1, 10:12',
      oldValue: 'Unassigned',
      oldBg: 'rgba(148,163,184,0.15)',
      oldColor: '#94A3B8',
      newValue: 'Sarah K.',
      newBg: 'rgba(59,130,246,0.15)',
      newColor: '#3B82F6',
      actionStyle: { background: 'rgba(59,130,246,0.2)', color: '#3B82F6', borderColor: 'rgba(59,130,246,0.4)' }
    },
    {
      dotText: '📅',
      dotBg: '#F59E0B',
      actionType: 'DUE_DATE_CHANGE',
      performedBy: 'John Doe',
      performedAt: 'Jun 30, 16:40',
      oldValue: 'Jul 5',
      oldBg: 'rgba(245,158,11,0.15)',
      oldColor: '#F59E0B',
      newValue: 'Jul 8',
      newBg: 'rgba(16,185,129,0.15)',
      newColor: '#10B981',
      actionStyle: { background: 'rgba(245,158,11,0.2)', color: '#F59E0B', borderColor: 'rgba(245,158,11,0.4)' }
    },
    {
      dotText: '✨',
      dotBg: '#6366F1',
      actionType: 'CREATE',
      performedBy: 'System',
      performedAt: 'Jun 30, 09:00',
      oldValue: 'Draft',
      oldBg: 'rgba(148,163,184,0.15)',
      oldColor: '#94A3B8',
      newValue: 'Task Created',
      newBg: 'rgba(99,102,241,0.15)',
      newColor: '#6366F1',
      actionStyle: { background: 'rgba(99,102,241,0.2)', color: '#6366F1', borderColor: 'rgba(99,102,241,0.4)' }
    }
  ];

  return (
    <div className="p-8 lg:p-12 max-w-[700px] mx-auto flex flex-col gap-6">
      {events.map((ev, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -28 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.12, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="timeline-item flex gap-5 relative group bg-[#0A0A14]/80 border border-white/[0.07] rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 shadow-lg"
        >
          <div className="timeline-line flex flex-col items-center relative">
            <div className="timeline-dot w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shadow-md z-10 shrink-0" style={{ background: ev.dotBg, color: '#FFFFFF' }}>
              {ev.dotText}
            </div>
            {i !== events.length - 1 && (
              <div className="timeline-connector w-[2px] flex-grow my-2" style={{ background: 'rgba(255,255,255,0.07)' }} />
            )}
          </div>
          <div className="timeline-content flex-grow flex flex-col gap-3">
            <div className="timeline-header flex items-center justify-between flex-wrap gap-2">
              <span className="action-type text-[0.68rem] font-black uppercase tracking-widest px-2.5 py-1 rounded-md border" style={ev.actionStyle}>{ev.actionType}</span>
              <span className="performed-by text-sm font-semibold text-white/90 mr-auto ml-2">{ev.performedBy}</span>
              <span className="performed-at text-xs font-mono text-white/40">{ev.performedAt}</span>
            </div>
            <div className="timeline-change flex items-center gap-3 text-sm font-bold pt-1">
              <span className="old-value px-3 py-1 rounded-lg text-xs font-extrabold" style={{ background: ev.oldBg, color: ev.oldColor }}>{ev.oldValue}</span>
              <span className="text-white/40 font-mono">→</span>
              <span className="new-value px-3 py-1 rounded-lg text-xs font-extrabold" style={{ background: ev.newBg, color: ev.newColor }}>{ev.newValue}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

/* ─── ANALYTICS ─── */
const TabAnalytics = () => (
  <div className="p-7 lg:p-10 flex flex-col gap-8 h-full justify-center">
    <div className="grid grid-cols-3 gap-5">
      {[
        { label: 'Completion Rate', val: '87.4%', sub: '+4.2% vs last month', cls: 'text-emerald-400', glow: 'rgba(52,211,153,0.12)', icon: <TrendingUp size={16} className="text-emerald-400" /> },
        { label: 'On-Time Rate',    val: '79.1%', sub: '+1.8% vs last month', cls: 'text-primary',     glow: 'rgba(99,102,241,0.12)',  icon: <TrendingUp size={16} className="text-primary" /> },
        { label: 'Overdue Tasks',   val: '12',    sub: '−3 vs last month',    cls: 'text-red-400',     glow: 'rgba(248,113,113,0.12)', icon: <AlertCircle size={16} className="text-red-400" /> },
      ].map((s, i) => (
        <motion.div
          key={i}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: i * 0.1 + 0.1, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3, scale: 1.02 }}
          className="p-7 rounded-2xl bg-[#0A0A14] border border-white/[0.07] flex flex-col gap-4 hover:border-white/12 transition-all duration-300 cursor-default min-h-[160px] justify-between"
          style={{ boxShadow: `0 4px 32px ${s.glow}` }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-black text-white/40 uppercase tracking-widest">{s.label}</span>
            {s.icon}
          </div>
          <span className={`text-5xl font-black ${s.cls} tabular-nums`}>{s.val}</span>
          <span className="text-sm text-white/35 font-medium">{s.sub}</span>
        </motion.div>
      ))}
    </div>

    <div className="relative h-48 lg:h-56 w-full rounded-2xl bg-[#0A0A14] border border-white/[0.05] overflow-hidden p-4">
      <div className="text-xs font-black text-white/25 uppercase tracking-widest mb-3">Velocity over time</div>
      <div className="relative h-36 lg:h-40">
        <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="chartFill2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#34d399" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#34d399" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chartLine2" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          <path d="M 0 80 C 20 65, 35 55, 50 48 C 65 41, 80 25, 100 10 L 100 100 L 0 100 Z" fill="url(#chartFill2)" />
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
            d="M 0 80 C 20 65, 35 55, 50 48 C 65 41, 80 25, 100 10"
            fill="none" stroke="url(#chartLine2)" strokeWidth="2.5" strokeLinecap="round"
            style={{ filter: 'drop-shadow(0 0 8px rgba(52,211,153,0.4))' }}
          />
        </svg>
        {[
          { top: '80%', left: '0%' },
          { top: '48%', left: '50%' },
          { top: '10%', left: '100%' },
        ].map((pos, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className="absolute w-3 h-3 rounded-full bg-white shadow-[0_0_12px_rgba(255,255,255,0.9)] -translate-x-1/2 -translate-y-1/2 ring-2 ring-[#0A0A14]"
            style={{ top: pos.top, left: pos.left }}
          />
        ))}
      </div>
    </div>
  </div>
);

/* ─── MAIN ─── */
export default function FeaturePreview() {
  const [activeTab, setActiveTab] = useState('board');

  return (
    <section className="relative z-10 pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden bg-transparent">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1300px] relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            Live Interface Preview
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-[2.75rem] tracking-tight mb-5 font-sans font-black"
          >
            <span className="text-white">See it in </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">action</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed"
          >
            Explore the powerful interfaces that give your team unprecedented control.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full lg:w-[280px] shrink-0 flex flex-row lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
            {tabs.map((tab, i) => (
              <motion.button
                key={tab.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-4 px-5 py-5 rounded-2xl text-left transition-all duration-300 shrink-0 whitespace-nowrap cursor-pointer border overflow-hidden ${
                  activeTab === tab.id
                    ? 'bg-[#0D0D1C] border-primary/25 text-white shadow-[0_0_32px_rgba(99,102,241,0.18)]'
                    : 'bg-white/[0.02] border-white/[0.05] text-white/35 hover:bg-white/[0.04] hover:text-white/65 hover:border-white/10'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tabAccent"
                    className="absolute left-0 top-4 bottom-4 w-[3px] rounded-full bg-gradient-to-b from-[#34d399] to-[#8b5cf6]"
                  />
                )}
                <span className={`shrink-0 ${activeTab === tab.id ? 'text-[#34d399]' : ''}`}>{tab.icon}</span>
                <div className="flex flex-col min-w-0">
                  <span className="font-bold text-base">{tab.label}</span>
                  <span className="text-xs text-white/30 hidden lg:block leading-none mt-0.5 truncate">{tab.desc}</span>
                </div>
                {activeTab === tab.id && <ChevronRight size={16} className="ml-auto text-primary hidden lg:block shrink-0" />}
              </motion.button>
            ))}
          </div>

          {/* Window */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 rounded-[32px] overflow-hidden border border-white/[0.08] shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
            style={{ background: 'linear-gradient(160deg, #0a0a12 0%, #0e0e1c 100%)' }}
          >
            {/* Browser chrome */}
            <div className="flex items-center justify-between px-7 py-4 border-b border-white/[0.05] bg-white/[0.01]">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400/50 border border-red-400/70 hover:bg-red-400 transition-colors cursor-pointer" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/50 border border-amber-400/70 hover:bg-amber-400 transition-colors cursor-pointer" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/50 border border-emerald-400/70 hover:bg-emerald-400 transition-colors cursor-pointer" />
              </div>
              <div className="flex items-center gap-2.5 px-5 py-2 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                <span className="text-sm font-mono text-white/50 tracking-wide">app.owntask.io</span>
              </div>
              <div className="text-[0.65rem] font-mono text-white/15 tracking-wider uppercase">
                {tabs.find(t => t.id === activeTab)?.label}
              </div>
            </div>

            {/* Content */}
            <div className="min-h-[560px] relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 14, scale: 0.99 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -14, scale: 0.99 }}
                  transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeTab === 'board'     && <TabBoard />}
                  {activeTab === 'sla'       && <TabSLA />}
                  {activeTab === 'audit'     && <TabAudit />}
                  {activeTab === 'analytics' && <TabAnalytics />}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
