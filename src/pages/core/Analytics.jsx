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
    document.title = "ownTask Analytics — Real-Time Team & Project Performance Dashboard";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = "ownTask analytics tracks completion rates, on-time delivery, overdue tasks, SLA compliance, and team performance — filterable by project, subject, assignee, and date range.";
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
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 mb-4 px-3 py-1 border border-primary/20 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-wide"
            >
              <BarChart2 size={12} />
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="self-start md:self-center px-4 py-2.5 rounded-xl border border-white/10 hover:border-white/20 bg-white/[0.02] hover:bg-white/[0.04] text-white/80 hover:text-white text-xs font-bold flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw size={13} className={isRefreshing ? "animate-spin" : ""} />
            <span>Refresh Data</span>
          </motion.button>
        </div>

        {/* ─── FILTERS PANEL MOCK ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 flex flex-col gap-3"
        >
          {/* Row 1: Time Periods */}
          <div className="flex flex-wrap items-center gap-2">
            {['Today', 'Last 7 Days', 'Last 30 Days', 'Last 90 Days', 'Custom Range'].map((range) => (
              <button
                key={range}
                onClick={() => setSelectedRange(range)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all border ${
                  selectedRange === range 
                    ? 'bg-primary/20 border-primary/50 text-primary shadow-[0_0_10px_rgba(139,92,246,0.15)]' 
                    : 'bg-white/[0.02] border-white/[0.05] text-white/50 hover:bg-white/[0.06] hover:text-white'
                }`}
              >
                {range}
              </button>
            ))}
          </div>

          {/* Row 2: Category Dropdowns */}
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative group">
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="appearance-none bg-white/[0.02] border border-white/[0.05] rounded-full pl-4 pr-10 py-1.5 text-xs font-bold text-white/70 focus:border-primary/40 focus:text-white focus:outline-none transition-all cursor-pointer group-hover:bg-white/[0.06] group-hover:text-white"
              >
                {mockData.projects.map(p => <option key={p} value={p} className="bg-[#0b0b16] text-white">{p}</option>)}
              </select>
              <ChevronDown size={12} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-white/80" />
            </div>

            <div className="relative group">
              <select
                value={selectedSubject}
                onChange={(e) => setSelectedSubject(e.target.value)}
                className="appearance-none bg-white/[0.02] border border-white/[0.05] rounded-full pl-4 pr-10 py-1.5 text-xs font-bold text-white/70 focus:border-primary/40 focus:text-white focus:outline-none transition-all cursor-pointer group-hover:bg-white/[0.06] group-hover:text-white"
              >
                {mockData.subjects.map(s => <option key={s} value={s} className="bg-[#0b0b16] text-white">{s}</option>)}
              </select>
              <ChevronDown size={12} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-white/80" />
            </div>

            <div className="relative group">
              <select
                value={selectedAssignee}
                onChange={(e) => setSelectedAssignee(e.target.value)}
                className="appearance-none bg-white/[0.02] border border-white/[0.05] rounded-full pl-4 pr-10 py-1.5 text-xs font-bold text-white/70 focus:border-primary/40 focus:text-white focus:outline-none transition-all cursor-pointer group-hover:bg-white/[0.06] group-hover:text-white"
              >
                {mockData.assignees.map(a => <option key={a} value={a} className="bg-[#0b0b16] text-white">{a}</option>)}
              </select>
              <ChevronDown size={12} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none group-hover:text-white/80" />
            </div>
          </div>
        </motion.div>

        {/* ─── METRICS CARDS GRID ─── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Completion Rate', val: 87.4, isPercent: true, trend: '+4.2%', trendDir: '↑', trendColor: 'text-emerald-400', icon: <TrendingUp size={16} />, color: 'text-emerald-400', bg: 'bg-emerald-500/5 border-emerald-500/10' },
            { label: 'On-Time Rate', val: 79.1, isPercent: true, trend: '+2.8%', trendDir: '↑', trendColor: 'text-emerald-400', icon: <CheckCircle size={16} />, color: 'text-indigo-400', bg: 'bg-indigo-500/5 border-indigo-500/10' },
            { label: 'Overdue Tasks', val: 12, isPercent: false, decimals: 0, trend: '-5', trendDir: '↓', trendColor: 'text-emerald-400', icon: <AlertTriangle size={16} />, color: 'text-rose-400', bg: 'bg-rose-500/5 border-rose-500/10' },
            { label: 'SLA Compliance', val: 94.2, isPercent: true, trend: '+1.1%', trendDir: '↑', trendColor: 'text-emerald-400', icon: <Clock size={16} />, color: 'text-primary', bg: 'bg-primary/5 border-primary/10' }
          ].map((card, idx) => (
            <motion.div
              key={card.label}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 + idx * 0.05 }}
              className={`p-5 rounded-2xl border flex flex-col justify-between min-h-[120px] ${card.bg}`}
            >
              <div className="flex items-center justify-between text-white/40">
                <span className="text-[10px] font-mono tracking-wider uppercase font-bold">{card.label}</span>
                <span className={card.color}>{card.icon}</span>
              </div>
              
              <div className="flex items-end gap-3 mt-4">
                <span className="text-3xl md:text-4xl font-extrabold text-white leading-none">
                  <AnimatedCounter value={card.val} decimals={card.decimals !== undefined ? card.decimals : 1} />
                  {card.isPercent ? '%' : ''}
                </span>
                
                <span className={`flex items-center text-xs font-bold ${card.trendColor} mb-1 bg-white/[0.03] px-2 py-0.5 rounded-full border border-white/[0.05]`}>
                  {card.trendDir} {card.trend}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ─── CUSTOM DASHBOARD MOCKUP ─── */}
        <div className="flex flex-col gap-6 w-full">
          {/* Trend Chart Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="w-full p-6 md:p-8 rounded-[24px] border border-white/[0.08] bg-[#0A0A15]/80 backdrop-blur-xl flex flex-col shadow-lg"
          >
            <div className="flex items-center justify-between mb-8">
              <span className="text-sm font-bold text-white/80">Completion Trend (Last 30 Days)</span>
              <span className="text-[10px] text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded uppercase font-mono tracking-widest">Live Sync</span>
            </div>
            
            {/* Hand-coded SVG Line Chart */}
            <div className="relative w-full h-[200px] mt-4 mb-2">
              {/* Grid Lines */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3].map(i => (
                  <div key={i} className="w-full border-t border-white/[0.03]" />
                ))}
              </div>
              
              {/* SVG Curve */}
              <svg viewBox="0 0 800 200" preserveAspectRatio="none" className="absolute inset-0 w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
                  </linearGradient>
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
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M0,180 C100,160 150,190 250,140 C350,90 400,150 500,100 C600,50 700,80 800,30"
                  fill="none"
                  stroke="#8b5cf6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                {/* Data Points */}
                <motion.g 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                >
                  <circle cx="250" cy="140" r="4" fill="#0A0A15" stroke="#34d399" strokeWidth="2" />
                  <circle cx="500" cy="100" r="4" fill="#0A0A15" stroke="#34d399" strokeWidth="2" />
                  <circle cx="800" cy="30" r="5" fill="#0A0A15" stroke="#34d399" strokeWidth="2" className="shadow-[0_0_10px_#34d399]" />
                </motion.g>
              </svg>
            </div>
          </motion.div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* By Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-6 md:p-8 rounded-[24px] border border-white/[0.08] bg-[#0A0A15]/80 backdrop-blur-xl flex flex-col shadow-lg"
            >
              <h3 className="text-sm font-bold text-white/80 mb-6">By Status</h3>
              <div className="flex flex-col gap-5">
                {[
                  { label: 'In Progress', val: 45, max: 100, color: 'bg-indigo-500' },
                  { label: 'To Do', val: 23, max: 100, color: 'bg-slate-500' },
                  { label: 'In Review', val: 12, max: 100, color: 'bg-amber-500' },
                  { label: 'Done', val: 87, max: 100, color: 'bg-emerald-500' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-end text-xs">
                      <span className="text-white/60 font-bold">{stat.label}</span>
                      <span className="text-white font-bold font-mono">{stat.val}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/[0.03] overflow-hidden border border-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.val / stat.max) * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                        className={`h-full rounded-full ${stat.color} shadow-[inset_0_1px_rgba(255,255,255,0.2)]`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* By Priority */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="p-6 md:p-8 rounded-[24px] border border-white/[0.08] bg-[#0A0A15]/80 backdrop-blur-xl flex flex-col shadow-lg"
            >
              <h3 className="text-sm font-bold text-white/80 mb-6">By Priority</h3>
              <div className="flex flex-col gap-5">
                {[
                  { label: 'Highest', val: 8, max: 40, color: 'bg-rose-500' },
                  { label: 'High', val: 15, max: 40, color: 'bg-orange-500' },
                  { label: 'Normal', val: 31, max: 40, color: 'bg-blue-500' },
                  { label: 'Low', val: 18, max: 40, color: 'bg-slate-500' }
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-end text-xs">
                      <span className="text-white/60 font-bold">{stat.label}</span>
                      <span className="text-white font-bold font-mono">{stat.val}</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-white/[0.03] overflow-hidden border border-white/[0.05]">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(stat.val / stat.max) * 100}%` }}
                        transition={{ duration: 1, delay: 0.6 + i * 0.1 }}
                        className={`h-full rounded-full ${stat.color} shadow-[inset_0_1px_rgba(255,255,255,0.2)]`}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Dashboard Metrics',
                icon: <LayoutDashboard className="text-indigo-400" size={24} />,
                color: 'bg-indigo-500/10 border-indigo-500/20',
                desc: 'Real-time counters: Completion Rate, On-Time Rate, Overdue Count, Active Count, Pending Count, To-Do Count, Total Completed, Total Tasks. Filterable by date range, project, subject.'
              },
              {
                title: 'Completion Trend Charts',
                icon: <LineChart className="text-emerald-400" size={24} />,
                color: 'bg-emerald-500/10 border-emerald-500/20',
                desc: 'Daily, weekly, monthly, and yearly granularity. Plot completion over time to spot patterns, compare periods, and predict velocity. Filterable per project or subject.'
              },
              {
                title: 'By Status & Priority Distribution',
                icon: <Layers className="text-amber-400" size={24} />,
                color: 'bg-amber-500/10 border-amber-500/20',
                desc: 'See which statuses are bottlenecks. Which priority level has the most open tasks. Live breakdown grouped by status type and priority — colour-coded for instant reading.'
              },
              {
                title: 'Team Performance Analytics',
                icon: <Users className="text-rose-400" size={24} />,
                color: 'bg-rose-500/10 border-rose-500/20',
                desc: 'Per-agent breakdown: tasks completed, on-time rate, overdue count, SLA compliance. Identify top performers and team members who need support — all in one view.'
              },
              {
                title: 'SLA Analytics',
                icon: <Clock className="text-primary" size={24} />,
                color: 'bg-primary/10 border-primary/20',
                desc: 'Track slaTrackedCount, slaBreachedCount, slaComplianceRate, and statusSlaBreaches. Drill by project, subject, or individual team member. Understand where breaches happen and why.'
              },
              {
                title: 'Recurring Task Health',
                icon: <RotateCw className="text-cyan-400" size={24} />,
                color: 'bg-cyan-500/10 border-cyan-500/20',
                desc: 'Monitor recurring task series: are instances generating on schedule? Are they being completed before the next instance fires? Identify problematic recurring patterns before they become habits.'
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="group p-6 md:p-8 rounded-3xl border border-white/[0.05] bg-[#0A0A15]/60 hover:bg-[#0A0A15]/90 backdrop-blur-xl transition-all duration-300 flex items-start gap-5 hover:border-white/[0.1] shadow-lg"
              >
                <div className={`p-4 rounded-2xl border flex items-center justify-center shrink-0 ${feature.color}`}>
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* ─── ROLE-BASED ACCESS NOTE ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 mb-10 p-6 md:p-8 rounded-3xl border border-primary/20 bg-primary/[0.03] backdrop-blur-xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="p-3 bg-primary/10 border border-primary/20 rounded-xl text-primary shrink-0">
              <ShieldCheck size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-3">Role-Based Access Control</h3>
              <div className="space-y-2 text-sm leading-relaxed text-white/70">
                <p><strong className="text-white">Admins and Owners</strong> see analytics across all tasks and all team members, including SLA metrics.</p>
                <p><strong className="text-white">Team Members</strong> see their own assigned tasks and their own performance metrics only.</p>
                <p className="text-primary mt-3 inline-block font-mono text-xs font-bold tracking-wide uppercase bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">No cross-contamination. No data leakage.</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
