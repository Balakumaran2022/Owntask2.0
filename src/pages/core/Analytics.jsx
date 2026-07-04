import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BarChart2, 
  Filter, 
  Calendar, 
  TrendingUp, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  RefreshCw,
  Search,
  User,
  Folder,
  Tag,
  LayoutDashboard,
  LineChart,
  Layers,
  Users,
  RotateCw,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

const AnimatedCounter = ({ value, duration = 1.5, decimals = 1 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp = null;
          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(easeOut * value);
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };
          window.requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{count.toFixed(decimals)}</span>;
};

const mockData = {
  projects: ['All Projects', 'Website Redesign', 'Mobile App', 'Marketing Campaign'],
  subjects: ['All Subjects', 'Bug Tracker', 'Feature Backlog', 'HR Requests', 'IT Support'],
  assignees: ['All Assignees', 'John D.', 'Alex M.', 'Jane D.', 'Alice K.'],
  ranges: ['Last 7 Days', 'Last 30 Days', 'Last 90 Days'],
  
  metrics: {
    'All Projects': { rate: '92.4%', onTime: '96.8%', overdue: '2', compliance: '98.1%' },
    'Website Redesign': { rate: '94.2%', onTime: '98.0%', overdue: '0', compliance: '99.2%' },
    'Mobile App': { rate: '89.1%', onTime: '94.5%', overdue: '2', compliance: '96.0%' },
    'Marketing Campaign': { rate: '95.0%', onTime: '97.2%', overdue: '0', compliance: '98.5%' }
  },

  subjectMetrics: [
    { name: 'Bug Tracker', completed: 48, total: 52, rate: 92.3 },
    { name: 'Feature Backlog', completed: 32, total: 36, rate: 88.8 },
    { name: 'HR Requests', completed: 15, total: 15, rate: 100 },
    { name: 'IT Support', completed: 27, total: 29, rate: 93.1 }
  ],

  teamPerformance: [
    { name: 'John D.', role: 'Full Stack', completed: 34, compliance: '98.2%', avgTime: '4.2 hrs' },
    { name: 'Alex M.', role: 'Eng Lead', completed: 28, compliance: '99.0%', avgTime: '3.8 hrs' },
    { name: 'Jane D.', role: 'QA Lead', completed: 41, compliance: '97.5%', avgTime: '2.5 hrs' },
    { name: 'Alice K.', role: 'Sec Auditor', completed: 19, compliance: '100%', avgTime: '5.1 hrs' }
  ]
};

export default function Analytics() {
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');
  const [selectedAssignee, setSelectedAssignee] = useState('All Assignees');
  const [selectedRange, setSelectedRange] = useState('Last 30 Days');
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    // Inject SEO tags dynamically
    document.title = "OwnTasks | Intelligent Command Center";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "ownTask analytics tracks completion rates, on-time delivery, SLA compliance, and team performance — filterable by project, subject, and date range.";
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1200);
  };

  const projectStats = mockData.metrics[selectedProject] || mockData.metrics['All Projects'];

  // Filtered lists
  const filteredTeam = mockData.teamPerformance.filter(member => {
    const matchesAssignee = selectedAssignee === 'All Assignees' || member.name === selectedAssignee;
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          member.role.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesAssignee && matchesSearch;
  });

  const filteredSubjects = mockData.subjectMetrics.filter(subj => {
    return selectedSubject === 'All Subjects' || subj.name === selectedSubject;
  });

  return (
    <div className="relative z-10 w-full min-h-screen bg-transparent py-16 lg:py-24 text-left">
      
      {/* Background glow lights */}
      <div className="absolute top-1/4 left-1/4 -translate-y-1/2 w-[700px] h-[550px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Page Header */}
        <div id="analytics-header-section" className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 border border-indigo-500/40 rounded-full bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-transparent text-indigo-300 text-xs font-extrabold tracking-wider uppercase shadow-[0_0_20px_rgba(99,102,241,0.2)] backdrop-blur-xl"
            >
              <BarChart2 size={13} />
              <span>Performance Intelligence</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-3xl mb-4"
            >
              Know exactly where your team stands — <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">at any moment.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white/55 text-base md:text-lg max-w-2xl leading-relaxed mt-2"
            >
              ownTask's analytics engine tracks every task, every team member, every SLA — and surfaces the insights that drive better decisions.
            </motion.p>
          </div>

          <motion.button
            id="analytics-refresh-button"
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="self-start md:self-start mt-1 flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/15 hover:border-indigo-500/40 bg-white/[0.04] hover:bg-indigo-500/10 text-white/70 hover:text-white text-xs font-extrabold transition-all duration-300 cursor-pointer disabled:opacity-40 backdrop-blur-xl shadow-sm"
            style={{ boxShadow: isRefreshing ? '0 0 15px rgba(99,102,241,0.3)' : undefined }}
          >
            <RefreshCw size={13} className={isRefreshing ? "animate-spin text-indigo-400" : "text-white/60"} />
            <span>Refresh Data</span>
          </motion.button>
        </div>

        {/* ─── FILTERS PANEL ─── */}
        <motion.div
          id="analytics-filters-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] backdrop-blur-xl flex flex-col gap-3"
        >
          {/* Row 1: Time Period Pills */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/30 mr-1 flex items-center gap-1">
              <Calendar size={10} /> Period
            </span>
            {['Today', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'].map((range) => (
              <button
                key={range}
                id={`analytics-period-button-${range.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setSelectedRange(range)}
                className={`px-4 py-1.5 rounded-full text-xs font-extrabold transition-all duration-200 border ${
                  selectedRange === range
                    ? 'bg-gradient-to-r from-indigo-500/25 to-violet-500/15 border-indigo-500/50 text-indigo-300 shadow-[0_0_14px_rgba(99,102,241,0.25)]'
                    : 'bg-white/[0.03] border-white/[0.07] text-white/45 hover:bg-white/[0.08] hover:border-white/20 hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Row 2: Dropdowns */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-white/30 mr-1 flex items-center gap-1">
              <Filter size={10} /> Filter
            </span>
            {[
              { id: 'analytics-project-filter', value: selectedProject,  onChange: setSelectedProject,  options: mockData.projects,  icon: <Folder size={11} /> },
              { id: 'analytics-subject-filter', value: selectedSubject,  onChange: setSelectedSubject,  options: mockData.subjects,  icon: <Tag size={11} /> },
              { id: 'analytics-assignee-filter', value: selectedAssignee, onChange: setSelectedAssignee, options: mockData.assignees, icon: <User size={11} /> },
            ].map((dropdown, i) => (
              <div key={i} className="relative group">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 group-hover:text-indigo-400 transition-colors pointer-events-none z-10">
                  {dropdown.icon}
                </div>
                <select
                  id={dropdown.id}
                  value={dropdown.value}
                  onChange={(e) => dropdown.onChange(e.target.value)}
                  className="appearance-none bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-indigo-500/35 rounded-full pl-8 pr-9 py-1.5 text-xs font-extrabold text-white/60 hover:text-white focus:border-indigo-500/50 focus:text-white focus:bg-white/[0.08] focus:outline-none transition-all duration-200 cursor-pointer"
                >
                  {dropdown.options.map(opt => <option key={opt} value={opt} className="bg-[#0b0b16] text-white">{opt}</option>)}
                </select>
                <ChevronDown size={11} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/35 pointer-events-none group-hover:text-indigo-400 transition-colors" />
              </div>
            ))}
          </div>
        </motion.div>

        {/* ─── METRICS CARDS GRID ─── */}
        <div id="analytics-metrics-grid" className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Completion Rate', val: 87.4, isPercent: true, trend: '+4.2%', trendDir: '↑', trendColor: 'text-emerald-400', trendBg: 'bg-emerald-500/10 border-emerald-500/30', icon: <TrendingUp size={18} />, iconBg: 'bg-emerald-500/15 border-emerald-500/30', iconColor: 'text-emerald-400', glow: '0 0 30px rgba(52,211,153,0.2)', topBar: 'from-emerald-400 to-teal-500', valColor: 'text-emerald-100' },
            { label: 'On-Time Rate', val: 79.1, isPercent: true, trend: '+2.8%', trendDir: '↑', trendColor: 'text-indigo-400', trendBg: 'bg-indigo-500/10 border-indigo-500/30', icon: <CheckCircle size={18} />, iconBg: 'bg-indigo-500/15 border-indigo-500/30', iconColor: 'text-indigo-400', glow: '0 0 30px rgba(99,102,241,0.2)', topBar: 'from-indigo-400 to-violet-500', valColor: 'text-indigo-100' },
            { label: 'Overdue Tasks', val: 12, isPercent: false, decimals: 0, trend: '-5', trendDir: '↓', trendColor: 'text-emerald-400', trendBg: 'bg-emerald-500/10 border-emerald-500/30', icon: <AlertTriangle size={18} />, iconBg: 'bg-rose-500/15 border-rose-500/30', iconColor: 'text-rose-400', glow: '0 0 30px rgba(244,63,94,0.15)', topBar: 'from-rose-400 to-pink-500', valColor: 'text-rose-100' },
            { label: 'SLA Compliance', val: 94.2, isPercent: true, trend: '+1.1%', trendDir: '↑', trendColor: 'text-violet-400', trendBg: 'bg-violet-500/10 border-violet-500/30', icon: <Clock size={18} />, iconBg: 'bg-violet-500/15 border-violet-500/30', iconColor: 'text-violet-400', glow: '0 0 30px rgba(139,92,246,0.2)', topBar: 'from-violet-400 to-purple-600', valColor: 'text-violet-100' }
          ].map((card, idx) => (
            <motion.div
              key={card.label}
              id={`analytics-metric-card-${card.label.toLowerCase().replace(/\s+/g, '-')}`}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -5, scale: 1.03 }}
              transition={{ delay: 0.15 + idx * 0.07 }}
              className="relative group flex flex-col justify-between min-h-[140px] p-5 rounded-2xl bg-[#0A0A15]/90 border border-white/10 backdrop-blur-2xl overflow-hidden cursor-default transition-all duration-300"
              style={{ boxShadow: card.glow }}
            >
              {/* Top gradient accent bar */}
              <div className={`absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r ${card.topBar} opacity-80 group-hover:opacity-100 transition-opacity`} />

              {/* Icon + trend */}
              <div className="flex items-center justify-between">
                <div className={`p-2 rounded-xl border ${card.iconBg} ${card.iconColor} shadow-sm`}>
                  {card.icon}
                </div>
                <span className={`flex items-center gap-1 text-[11px] font-extrabold ${card.trendColor} ${card.trendBg} border px-2 py-0.5 rounded-full`}>
                  {card.trendDir} {card.trend}
                </span>
              </div>

              {/* Value */}
              <div className="mt-4">
                <div className={`text-3xl md:text-4xl font-black leading-none ${card.valColor}`}>
                  <AnimatedCounter value={card.val} decimals={card.decimals !== undefined ? card.decimals : 1} />
                  {card.isPercent ? '%' : ''}
                </div>
                <div className="text-[10px] font-extrabold uppercase tracking-widest text-white/40 mt-2">{card.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── CUSTOM DASHBOARD MOCKUP ─── */}
        <div className="flex flex-col gap-5 w-full">

          {/* Trend Chart Panel */}
          <motion.div
            id="analytics-trend-chart-panel"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -3 }}
            transition={{ delay: 0.3 }}
            className="relative w-full p-6 md:p-8 rounded-3xl border border-violet-500/25 bg-gradient-to-br from-violet-500/[0.1] via-[#0A0A15]/90 to-[#0A0A15]/80 backdrop-blur-2xl flex flex-col overflow-hidden transition-all duration-300"
            style={{ boxShadow: '0 8px 32px rgba(139,92,246,0.12)' }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-emerald-400 opacity-70" />
            {/* Ambient glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/8 rounded-full blur-[80px] pointer-events-none" />

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div>
                <span className="text-base font-black text-white tracking-tight">Completion Trend</span>
                <span className="ml-2 text-white/40 text-sm font-medium">Last 30 Days</span>
              </div>
              <span id="analytics-trend-sync-badge" className="flex items-center gap-1.5 text-[10px] text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full font-mono font-extrabold tracking-widest uppercase shadow-[0_0_10px_rgba(52,211,153,0.15)]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                Live Sync
              </span>
            </div>

            {/* SVG Line Chart */}
            <div className="relative w-full h-[200px] mt-2 mb-1">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4].map(i => (
                  <div key={i} className="w-full border-t border-white/[0.04]" />
                ))}
              </div>

              {/* SVG Curve */}
              <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                  </linearGradient>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="50%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                  </filter>
                </defs>
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  d="M0,180 C100,160 150,190 250,140 C350,90 400,150 500,100 C600,50 700,80 800,30 L800,200 L0,200 Z"
                  fill="url(#chartGradient)"
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.8, ease: "easeInOut" }}
                  d="M0,180 C100,160 150,190 250,140 C350,90 400,150 500,100 C600,50 700,80 800,30"
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  filter="url(#glow)"
                />
                {/* Data Points */}
                <motion.g
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                >
                  <circle cx="250" cy="140" r="5" fill="#0A0A15" stroke="#34d399" strokeWidth="2.5" />
                  <circle cx="500" cy="100" r="5" fill="#0A0A15" stroke="#34d399" strokeWidth="2.5" />
                  <circle cx="800" cy="30" r="6" fill="#0A0A15" stroke="#34d399" strokeWidth="2.5" filter="url(#glow)" />
                </motion.g>
              </svg>
            </div>
          </motion.div>

          {/* 2-Column Grid: By Status + By Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">

            {/* By Status */}
            <motion.div
              id="analytics-by-status-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ delay: 0.4 }}
              className="relative overflow-hidden p-6 md:p-7 rounded-3xl border border-indigo-500/25 bg-gradient-to-br from-indigo-500/[0.12] via-[#0A0A15]/90 to-[#0A0A15]/80 backdrop-blur-2xl flex flex-col transition-all duration-300"
              style={{ boxShadow: '0 8px 28px rgba(99,102,241,0.12)' }}
            >
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-indigo-400 via-violet-400 to-transparent opacity-70" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/8 rounded-full blur-[60px] pointer-events-none" />

              <h3 className="text-base font-black text-white tracking-tight mb-5 relative z-10">By Status</h3>
              <div className="flex flex-col gap-4 relative z-10">
                {[
                  { label: 'In Progress', val: 45, max: 100, bar: 'from-indigo-400 to-violet-500', glow: 'rgba(99,102,241,0.5)', dot: 'bg-indigo-400' },
                  { label: 'To Do',       val: 23, max: 100, bar: 'from-slate-400 to-slate-500',  glow: 'rgba(148,163,184,0.4)', dot: 'bg-slate-400' },
                  { label: 'In Review',   val: 12, max: 100, bar: 'from-amber-400 to-orange-500', glow: 'rgba(251,191,36,0.5)',  dot: 'bg-amber-400' },
                  { label: 'Done',        val: 87, max: 100, bar: 'from-emerald-400 to-teal-500', glow: 'rgba(52,211,153,0.5)', dot: 'bg-emerald-400' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="flex items-center gap-1.5 text-white/70 font-bold">
                        <span className={`w-2 h-2 rounded-full ${stat.dot}`} />
                        {stat.label}
                      </span>
                      <span className="text-white font-extrabold font-mono">{stat.val}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden border border-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.val / stat.max) * 100}%` }}
                        transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`}
                        style={{ boxShadow: `0 0 8px ${stat.glow}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* By Priority */}
            <motion.div
              id="analytics-by-priority-panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ delay: 0.5 }}
              className="relative overflow-hidden p-6 md:p-7 rounded-3xl border border-rose-500/25 bg-gradient-to-br from-rose-500/[0.1] via-[#0A0A15]/90 to-[#0A0A15]/80 backdrop-blur-2xl flex flex-col transition-all duration-300"
              style={{ boxShadow: '0 8px 28px rgba(244,63,94,0.1)' }}
            >
              <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-rose-400 via-orange-400 to-transparent opacity-70" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-rose-500/8 rounded-full blur-[60px] pointer-events-none" />

              <h3 className="text-base font-black text-white tracking-tight mb-5 relative z-10">By Priority</h3>
              <div className="flex flex-col gap-4 relative z-10">
                {[
                  { label: 'Highest', val: 8,  max: 40, bar: 'from-rose-400 to-pink-500',    glow: 'rgba(244,63,94,0.55)',   dot: 'bg-rose-400' },
                  { label: 'High',    val: 15, max: 40, bar: 'from-orange-400 to-amber-500', glow: 'rgba(251,146,60,0.55)',  dot: 'bg-orange-400' },
                  { label: 'Normal',  val: 31, max: 40, bar: 'from-blue-400 to-indigo-500',  glow: 'rgba(59,130,246,0.5)',   dot: 'bg-blue-400' },
                  { label: 'Low',     val: 18, max: 40, bar: 'from-slate-400 to-slate-500',  glow: 'rgba(148,163,184,0.35)', dot: 'bg-slate-400' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-1.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="flex items-center gap-1.5 text-white/70 font-bold">
                        <span className={`w-2 h-2 rounded-full ${stat.dot}`} />
                        {stat.label}
                      </span>
                      <span className="text-white font-extrabold font-mono">{stat.val}</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/[0.05] overflow-hidden border border-white/[0.06]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.val / stat.max) * 100}%` }}
                        transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: 'easeOut' }}
                        className={`h-full rounded-full bg-gradient-to-r ${stat.bar}`}
                        style={{ boxShadow: `0 0 8px ${stat.glow}` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

        </div>

        {/* ─── SIX ANALYTICS FEATURES ─── */}
        <div className="mt-24 mb-10">
          <div className="mb-12 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Powerful Analytics Capabilities
            </h2>
            <p className="text-white/50 text-sm mt-3 max-w-2xl leading-relaxed">
              Deep-dive into every aspect of your team's workflow with precision metrics designed for modern teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                title: 'Dashboard Metrics',
                icon: <LayoutDashboard size={26} />,
                gradient: 'from-indigo-500/[0.18] via-indigo-500/[0.05] to-transparent',
                border: 'border-indigo-500/30',
                iconBg: 'bg-indigo-500/20 border-indigo-500/40',
                iconColor: 'text-indigo-300',
                topBar: 'from-indigo-400 to-violet-500',
                glow: '0 8px 30px rgba(99,102,241,0.15)',
                desc: 'Real-time counters: Completion Rate, On-Time Rate, Overdue Count, Active Count, Pending Count, To-Do Count, Total Completed, Total Tasks. Filterable by date range, project, subject.'
              },
              {
                title: 'Completion Trend Charts',
                icon: <LineChart size={26} />,
                gradient: 'from-emerald-500/[0.18] via-emerald-500/[0.05] to-transparent',
                border: 'border-emerald-500/30',
                iconBg: 'bg-emerald-500/20 border-emerald-500/40',
                iconColor: 'text-emerald-300',
                topBar: 'from-emerald-400 to-teal-500',
                glow: '0 8px 30px rgba(52,211,153,0.15)',
                desc: 'Daily, weekly, monthly, and yearly granularity. Plot completion over time to spot patterns, compare periods, and predict velocity. Filterable per project or subject.'
              },
              {
                title: 'By Status & Priority Distribution',
                icon: <Layers size={26} />,
                gradient: 'from-amber-500/[0.18] via-amber-500/[0.05] to-transparent',
                border: 'border-amber-500/30',
                iconBg: 'bg-amber-500/20 border-amber-500/40',
                iconColor: 'text-amber-300',
                topBar: 'from-amber-400 to-orange-500',
                glow: '0 8px 30px rgba(251,191,36,0.12)',
                desc: 'See which statuses are bottlenecks. Which priority level has the most open tasks. Live breakdown grouped by status type and priority — colour-coded for instant reading.'
              },
              {
                title: 'Team Performance Analytics',
                icon: <Users size={26} />,
                gradient: 'from-rose-500/[0.18] via-rose-500/[0.05] to-transparent',
                border: 'border-rose-500/30',
                iconBg: 'bg-rose-500/20 border-rose-500/40',
                iconColor: 'text-rose-300',
                topBar: 'from-rose-400 to-pink-500',
                glow: '0 8px 30px rgba(244,63,94,0.12)',
                desc: 'Per-agent breakdown: tasks completed, on-time rate, overdue count, SLA compliance. Identify top performers and team members who need support — all in one view.'
              },
              {
                title: 'SLA Analytics',
                icon: <Clock size={26} />,
                gradient: 'from-violet-500/[0.18] via-violet-500/[0.05] to-transparent',
                border: 'border-violet-500/30',
                iconBg: 'bg-violet-500/20 border-violet-500/40',
                iconColor: 'text-violet-300',
                topBar: 'from-violet-400 to-purple-600',
                glow: '0 8px 30px rgba(139,92,246,0.15)',
                desc: 'Track slaTrackedCount, slaBreachedCount, slaComplianceRate, and statusSlaBreaches. Drill by project, subject, or individual team member. Understand where breaches happen and why.'
              },
              {
                title: 'Recurring Task Health',
                icon: <RotateCw size={26} />,
                gradient: 'from-cyan-500/[0.18] via-cyan-500/[0.05] to-transparent',
                border: 'border-cyan-500/30',
                iconBg: 'bg-cyan-500/20 border-cyan-500/40',
                iconColor: 'text-cyan-300',
                topBar: 'from-cyan-400 to-sky-500',
                glow: '0 8px 30px rgba(34,211,238,0.12)',
                desc: 'Monitor recurring task series: are instances generating on schedule? Are they being completed before the next instance fires? Identify problematic recurring patterns before they become habits.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.08 }}
                className={`group relative overflow-hidden p-6 md:p-7 rounded-3xl bg-gradient-to-br ${feature.gradient} ${feature.border} border backdrop-blur-2xl flex flex-col gap-4 cursor-default transition-all duration-300`}
                style={{ boxShadow: feature.glow }}
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r ${feature.topBar} opacity-70 group-hover:opacity-100 transition-opacity`} />

                {/* Icon */}
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${feature.iconBg} ${feature.iconColor} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  {feature.icon}
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-base md:text-lg font-black text-white mb-2 tracking-tight">{feature.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* ─── ROLE-BASED ACCESS NOTE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -4, scale: 1.01 }}
          viewport={{ once: true }}
          className="mt-6 mb-10 relative overflow-hidden rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-500/[0.15] via-indigo-500/[0.07] to-transparent backdrop-blur-2xl cursor-default transition-all duration-300"
          style={{ boxShadow: '0 10px 40px rgba(139,92,246,0.2), inset 0 0 40px rgba(139,92,246,0.04)' }}
        >
          {/* Top glowing accent bar */}
          <div className="absolute top-0 left-5 right-5 h-[2px] rounded-full bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-500 opacity-80" />

          {/* Ambient glow orbs */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 rounded-full blur-[90px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-500/10 rounded-full blur-[70px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 p-6 md:p-8 flex flex-col sm:flex-row items-start gap-6">
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl border border-violet-500/40 bg-violet-500/20 flex items-center justify-center text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] shrink-0">
              <ShieldCheck size={28} />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-4 flex-1">
              <h3 className="text-xl font-black text-white tracking-tight">Role-Based Access Control</h3>

              <div className="flex flex-col gap-3">
                {/* Admin row */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-colors">
                  <span className="px-2.5 py-0.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 text-[10px] font-extrabold uppercase tracking-widest whitespace-nowrap shrink-0 mt-0.5">Admins & Owners</span>
                  <p className="text-white/70 text-sm leading-relaxed">See analytics across <strong className="text-white font-bold">all tasks</strong> and all team members, including SLA metrics.</p>
                </div>

                {/* Team Member row */}
                <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.07] transition-colors">
                  <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-[10px] font-extrabold uppercase tracking-widest whitespace-nowrap shrink-0 mt-0.5">Team Members</span>
                  <p className="text-white/70 text-sm leading-relaxed">See only their <strong className="text-white font-bold">own assigned tasks</strong> and their own performance metrics.</p>
                </div>
              </div>

              {/* Security badge */}
              <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full bg-gradient-to-r from-violet-500/20 to-indigo-500/20 border border-violet-500/40 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_6px_rgba(139,92,246,0.8)] animate-pulse" />
                <span className="text-violet-300 font-mono text-[11px] font-extrabold uppercase tracking-widest">No cross-contamination. No data leakage.</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
