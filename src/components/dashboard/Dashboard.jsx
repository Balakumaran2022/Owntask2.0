import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  LayoutGrid, CheckSquare, Activity, Calendar, Folder, Filter, RefreshCw, 
  Clipboard, Clock, AlertTriangle, Check, Trophy, LogOut, ChevronLeft, 
  ChevronRight, Plus, X, Trash2, User, Users, ShieldAlert, Settings, ArrowRight, ArrowLeft 
} from 'lucide-react';
import "../../styles/dashboard.css";

// Initial set of enterprise tasks
const INITIAL_TASKS = [
  {
    id: 'TSK-084920',
    title: 'Integrate Stripe Payment Gateway',
    desc: 'Implement credit card billing and checkout flow in the main web application.',
    priority: 'Highest',
    status: 'In Progress',
    assignedTo: 'Sarah Jenkins',
    dueDate: '2026-07-10',
    progress: 45,
    slaDeadline: '2026-07-09 18:00',
    slaBreached: false,
    taskType: 'customer',
    customerId: 'cust_902'
  },
  {
    id: 'TSK-039482',
    title: 'Resolve memory leak in WebSocket connection',
    desc: 'Debug node process crash during peak loads due to socket memory allocation.',
    priority: 'Highest',
    status: 'Not Started',
    assignedTo: 'Michael Chang',
    dueDate: '2026-07-04', // past date
    progress: 0,
    slaDeadline: '2026-07-04 14:00',
    slaBreached: true,
    taskType: 'internal'
  },
  {
    id: 'TSK-092815',
    title: 'Setup B2B Customer Onboarding workflow',
    desc: 'Build standard checklists and templates for newly registered enterprise companies.',
    priority: 'Normal',
    status: 'Done',
    assignedTo: 'Jessica Rivera',
    dueDate: '2026-07-05',
    progress: 100,
    slaDeadline: '2026-07-05 17:00',
    slaBreached: false,
    taskType: 'customer',
    customerId: 'cust_401'
  },
  {
    id: 'TSK-029481',
    title: 'Draft annual security compliance audit report',
    desc: 'Synthesize audit logs and role-based permissions metrics for the regulatory board.',
    priority: 'High',
    status: 'Waiting',
    assignedTo: 'David Miller',
    dueDate: '2026-07-15',
    progress: 20,
    slaDeadline: '2026-07-14 12:00',
    slaBreached: false,
    taskType: 'internal'
  },
  {
    id: 'TSK-058291',
    title: 'Configure Round-Robin Support Assignment',
    desc: 'Evenly distribute customer support tickets across active operators.',
    priority: 'Normal',
    status: 'In Progress',
    assignedTo: 'Sarah Jenkins',
    dueDate: '2026-07-09',
    progress: 60,
    slaDeadline: '2026-07-08 10:00',
    slaBreached: false,
    taskType: 'customer',
    customerId: 'cust_221'
  }
];

const PROJECT_OPTIONS = [
  { value: 'All Projects', label: 'All Projects' },
  { value: 'Development', label: 'Development' }
];

const PERIOD_OPTIONS = [
  { value: 'Today', label: 'Today' },
  { value: 'Yesterday', label: 'Yesterday' },
  { value: 'Last 7 days', label: 'Last 7 days' },
  { value: 'Current week', label: 'Current week' },
  { value: 'Last week', label: 'Last week' },
  { value: 'Current month', label: 'Current month' },
  { value: 'Last month', label: 'Last month' },
  { value: 'Current year', label: 'Current year' }
];

const SUBJECT_OPTIONS = [
  { value: 'All Subjects', label: 'All Subjects' },
  { value: 'Back End Tasks', label: 'Back End Tasks' },
  { value: 'dev team', label: 'dev team' },
  { value: 'TEST_AUTO_SEC_SUB_1', label: 'TEST_AUTO_SEC_SUB_1' },
  { value: 'TEST_AUTO_SEC_SUB_2', label: 'TEST_AUTO_SEC_SUB_2' }
];

function CustomSelect({ value, onChange, options, icon: Icon, placeholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="pl-10 pr-8 py-1.5 bg-[#0D0D1C]/80 border border-white/10 hover:border-white/20 rounded-xl text-xs font-bold text-[#D1DFD7] transition-all flex items-center gap-1.5 cursor-pointer relative min-w-[140px] text-left select-none outline-none"
      >
        {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50" size={13} />}
        <span>{value || placeholder}</span>
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-primary/60 transition-transform duration-200" style={{ transform: isOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)' }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3 stroke-[2.5]">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 4 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-1 z-50 min-w-[160px] bg-[#0D0D1C] border border-white/10 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <div className="py-1 max-h-60 overflow-y-auto">
              {options.map((opt) => {
                const isSelected = opt.value === value;
                return (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onChange(opt.value);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-[11px] font-bold transition-colors cursor-pointer select-none flex items-center justify-between outline-none border-none
                      ${isSelected 
                        ? 'text-white bg-primary/20' 
                        : 'text-white/60 hover:text-white hover:bg-white/[0.04]'
                      }
                    `}
                  >
                    <span>{opt.label}</span>
                    {isSelected && (
                      <span className="text-primary text-[10px]">✓</span>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Dashboard({ onLogout }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [activeTab, setActiveTab] = useState('Overview');
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Dropdown states
  const [selectedProject, setSelectedProject] = useState('All Projects');
  const [selectedPeriod, setSelectedPeriod] = useState('Today');
  const [selectedSubject, setSelectedSubject] = useState('All Subjects');

  // Form states for creating new tasks
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [newPriority, setNewPriority] = useState('Normal');
  const [newStatus, setNewStatus] = useState('Not Started');
  const [newAssignee, setNewAssignee] = useState('Sarah Jenkins');
  const [newSlaEnabled, setNewSlaEnabled] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setMobileMenuOpen(false);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate dynamic metrics based on task state
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.status === 'Done').length;
  const openTasks = tasks.filter(t => t.status !== 'Done').length;
  const overdueTasks = tasks.filter(t => {
    if (t.status === 'Done') return false;
    if (!t.dueDate) return false;
    return new Date(t.dueDate) < new Date();
  }).length;

  const successRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // SLA calculations
  const slaTracked = tasks.filter(t => t.slaDeadline).length;
  const slaBreached = tasks.filter(t => t.slaBreached).length;
  const slaCompleted = tasks.filter(t => t.status === 'Done' && t.slaDeadline && !t.slaBreached).length;
  const slaCompliance = slaTracked > 0 ? Math.round(((slaTracked - slaBreached) / slaTracked) * 100) : 100;

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 850);
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const randomId = `TSK-${Math.floor(100000 + Math.random() * 900000)}`;
    const createdTask = {
      id: randomId,
      title: newTitle,
      desc: newDesc || 'No description provided.',
      priority: newPriority,
      status: newStatus,
      assignedTo: newAssignee,
      dueDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
      progress: newStatus === 'Done' ? 100 : newStatus === 'In Progress' ? 50 : 0,
      slaDeadline: newSlaEnabled ? new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString().replace('T', ' ').substring(0, 16) : null,
      slaBreached: false,
      taskType: 'internal'
    };

    setTasks(prev => [createdTask, ...prev]);
    setNewTitle('');
    setNewDesc('');
    setNewPriority('Normal');
    setNewStatus('Not Started');
    setShowCreateForm(false);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
  };

  const moveTaskStatus = (taskId, direction) => {
    const statuses = ['Not Started', 'In Progress', 'Waiting', 'Done'];
    setTasks(prev => prev.map(t => {
      if (t.id !== taskId) return t;
      const currentIndex = statuses.indexOf(t.status);
      let nextIndex = currentIndex + direction;
      if (nextIndex < 0) nextIndex = 0;
      if (nextIndex >= statuses.length) nextIndex = statuses.length - 1;
      
      const newStat = statuses[nextIndex];
      return {
        ...t,
        status: newStat,
        progress: newStat === 'Done' ? 100 : newStat === 'In Progress' ? 50 : t.progress
      };
    }));
  };

  return (
    <div className="flex min-h-screen bg-transparent text-[#F1F5F9] font-sans relative overflow-hidden">
      
      {/* ── Sidebar ── */}
      <aside 
        className={`fixed top-0 left-0 bottom-0 z-50 bg-[#070710]/95 border-r border-white/5 backdrop-blur-xl transition-all duration-300 flex flex-col
          ${collapsed ? 'w-[76px]' : 'w-[260px]'}
          ${isMobile && !mobileMenuOpen ? '-translate-x-full' : 'translate-x-0'}
        `}
      >
        {/* Sidebar Header Logo */}
        <Link to="/" className="flex items-center gap-2.5 px-5 py-5 border-b border-white/5 h-[72px] flex-shrink-0 no-underline cursor-pointer" title="Go to homepage">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-[#8B5CF6] flex items-center justify-center text-white font-black text-sm shadow-[0_0_20px_rgba(99,102,241,0.3)] flex-shrink-0">
            ✓
          </div>
          {!collapsed && (
            <span className="font-sans font-black text-lg text-white tracking-tight leading-none select-none">
              ownTask<span className="text-primary">.</span>
            </span>
          )}
        </Link>

        {/* Sidebar Navigation Items */}
        <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto">
          {[
            { id: 'Overview', name: 'Dashboard', icon: LayoutGrid },
            { id: 'Tasks', name: 'Tasks', icon: CheckSquare },
            { id: 'Analytics', name: 'Analytics', icon: Activity }
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  if (isMobile) setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 relative group cursor-pointer
                  ${isActive 
                    ? 'text-white bg-primary/10 border border-primary/20 shadow-[inset_0_0_12px_rgba(99,102,241,0.06)]' 
                    : 'text-primary/60 border border-transparent hover:text-white hover:bg-white/5'
                  }
                `}
              >
                {isActive && (
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 rounded-r-md bg-primary" />
                )}
                <item.icon size={18} className={isActive ? 'text-primary' : 'text-primary/50 group-hover:text-white transition-colors'} />
                {!collapsed && <span>{item.name}</span>}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Bottom Workspace Info */}
        <div className="p-3 border-t border-white/5 space-y-3">
          <div className="flex items-center gap-3 p-2 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-[#8B5CF6] flex items-center justify-center font-bold text-xs text-white relative flex-shrink-0">
              B
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border border-[#070710]" />
            </div>
            {!collapsed && (
              <div className="min-w-0">
                <p className="text-xs font-bold text-white truncate">iEyal Workspace</p>
                <p className="text-[0.62rem] text-primary/50 font-bold truncate">Enterprise Tier</p>
              </div>
            )}
          </div>

          <div className="flex gap-1.5">
            <button 
              onClick={onLogout}
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-white/10 hover:border-red-500/30 bg-white/[0.02] hover:bg-red-500/5 text-primary/60 hover:text-red-400 font-bold text-xs transition-all cursor-pointer"
            >
              <LogOut size={14} />
              {!collapsed && <span>Sign Out</span>}
            </button>

            {!isMobile && (
              <button 
                onClick={() => setCollapsed(!collapsed)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 text-primary/50 hover:text-white transition-all cursor-pointer"
              >
                {collapsed ? <ChevronRight size={15} /> : <ChevronLeft size={15} />}
              </button>
            )}
          </div>
        </div>
      </aside>

      {/* ── Overlay for mobile menu ── */}
      {isMobile && mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#05050A]/70 backdrop-blur-sm z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* ── Main Panel ── */}
      <div className={`flex-1 min-h-screen flex flex-col transition-all duration-300 ${collapsed ? 'pl-[76px]' : 'pl-[260px]'} ${isMobile ? 'pl-0' : ''}`}>
        
        {/* Topbar Header */}
        <header className="h-[72px] border-b border-white/5 bg-[#070710]/40 backdrop-blur-md px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-3">
            {isMobile && (
              <button 
                onClick={() => setMobileMenuOpen(true)}
                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            )}
            <div>
              <h1 className="text-lg md:text-xl font-black text-white m-0 tracking-tight">{activeTab}</h1>
              <p className="text-[0.68rem] md:text-xs text-primary/50 font-bold m-0 mt-0.5 uppercase tracking-wide">
                {activeTab === 'Overview' && 'Overall performance overview'}
                {activeTab === 'Tasks' && 'Sprint boards & pipeline tracking'}
                {activeTab === 'Analytics' && 'Operational SLA & compliance reports'}
              </p>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Project Filter */}
            <div className="hidden md:block">
              <CustomSelect 
                value={selectedProject} 
                onChange={setSelectedProject} 
                options={PROJECT_OPTIONS} 
                icon={Folder} 
                placeholder="All Projects" 
              />
            </div>

            {/* Period Filter */}
            <div>
              <CustomSelect 
                value={selectedPeriod} 
                onChange={setSelectedPeriod} 
                options={PERIOD_OPTIONS} 
                icon={Calendar} 
                placeholder="Today" 
              />
            </div>

            {/* Subject Filter */}
            <div className="hidden lg:block">
              <CustomSelect 
                value={selectedSubject} 
                onChange={setSelectedSubject} 
                options={SUBJECT_OPTIONS} 
                icon={Filter} 
                placeholder="All Subjects" 
              />
            </div>

            {/* Refresh Button */}
            <button 
              onClick={handleRefresh}
              className={`w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-white transition-all cursor-pointer ${isRefreshing ? 'rotate-spin' : ''}`}
            >
              <RefreshCw size={14} className={isRefreshing ? 'animate-spin text-primary' : ''} />
            </button>
          </div>
        </header>

        {/* main scrolling content */}
        <main className="flex-1 overflow-y-auto p-6 relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              {/* ── Tab: Overview ── */}
              {activeTab === 'Overview' && (
                <div className="space-y-8 pb-12">
                  {/* Cards Row 1 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {/* Card 1: Total Tasks */}
                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-[1.75rem] relative overflow-hidden shadow-sm">
                      <p className="text-[0.62rem] font-black text-primary/50 uppercase tracking-wider mb-2">Total Tasks</p>
                      <h2 className="text-4xl font-extrabold text-white mb-4">0</h2>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[0.68rem] font-bold">
                        ✓ All completed
                      </div>
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#94A3B8]">
                        <Clipboard size={16} />
                      </div>
                    </div>

                    {/* Card 2: SLA Targets */}
                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-[1.75rem] relative overflow-hidden shadow-sm">
                      <p className="text-[0.62rem] font-black text-primary/50 uppercase tracking-wider mb-2">SLA Targets</p>
                      <h2 className="text-4xl font-extrabold text-white mb-4">0</h2>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[0.68rem] font-bold">
                        ✓ No active targets
                      </div>
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#94A3B8]">
                        <Activity size={16} />
                      </div>
                    </div>

                    {/* Card 3: SLA Breaches */}
                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-[1.75rem] relative overflow-hidden shadow-sm">
                      <p className="text-[0.62rem] font-black text-primary/50 uppercase tracking-wider mb-2">SLA Breaches</p>
                      <h2 className="text-4xl font-extrabold text-white mb-4">0</h2>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[0.68rem] font-bold">
                        ✓ No active breaches
                      </div>
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-[#94A3B8]">
                        <Clock size={16} />
                      </div>
                    </div>

                    {/* Card 4: SLA Fails */}
                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-[1.75rem] relative overflow-hidden shadow-sm">
                      <p className="text-[0.62rem] font-black text-primary/50 uppercase tracking-wider mb-2">SLA Fails</p>
                      <h2 className="text-4xl font-extrabold text-red-500 mb-4">20</h2>
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-400 text-[0.68rem] font-bold">
                        100% compliance target
                      </div>
                      <div className="absolute top-6 right-6 w-9 h-9 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                        <AlertTriangle size={16} />
                      </div>
                    </div>
                  </div>

                  {/* SLA Monitoring Block */}
                  <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-[2.25rem] p-6 md:p-8">
                    <div className="flex items-center gap-2.5 mb-6">
                      <Clock className="text-primary animate-pulse" size={20} />
                      <div>
                        <h3 className="text-base md:text-lg font-black text-white m-0 tracking-tight">SLA Performance</h3>
                        <p className="text-[0.62rem] text-primary/50 font-black tracking-widest uppercase m-0 mt-0.5">Service Level Agreement Monitoring</p>
                      </div>
                    </div>

                    {/* SLA Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {/* SLA Met */}
                      <div className="bg-[#070710]/60 border border-white/10 p-5 rounded-2xl relative">
                        <p className="text-[0.6rem] font-black text-primary/50 uppercase tracking-wider mb-1.5">Total Met</p>
                        <h3 className="text-3xl font-extrabold text-white mb-3">0</h3>
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full">
                          ✓ No active targets
                        </span>
                        <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* SLA Breached */}
                      <div className="bg-[#070710]/60 border border-white/10 p-5 rounded-2xl relative">
                        <p className="text-[0.6rem] font-black text-primary/50 uppercase tracking-wider mb-1.5">Total Breached</p>
                        <h3 className="text-3xl font-extrabold text-white mb-3">0</h3>
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full">
                          ✓ No active breaches
                        </span>
                        <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <AlertTriangle size={14} />
                        </div>
                      </div>

                      {/* Total Escalated */}
                      <div className="bg-[#070710]/60 border border-white/10 p-5 rounded-2xl relative">
                        <p className="text-[0.6rem] font-black text-primary/50 uppercase tracking-wider mb-1.5">Total Escalated</p>
                        <h3 className="text-3xl font-extrabold text-white mb-3">0</h3>
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-full">
                          ✓ No escalated tasks
                        </span>
                        <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                          <Check size={14} strokeWidth={2.5} />
                        </div>
                      </div>

                      {/* SLA Compliance */}
                      <div className="bg-[#070710]/60 border border-white/10 p-5 rounded-2xl relative">
                        <p className="text-[0.6rem] font-black text-primary/50 uppercase tracking-wider mb-1.5">SLA Compliance</p>
                        <h3 className="text-3xl font-extrabold text-red-500 mb-3">0%</h3>
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider bg-red-500/10 text-red-400 px-2.5 py-1 rounded-full">
                          100% compliance target
                        </span>
                        <div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
                          <Trophy size={14} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity Details & Weekly Progress */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Activity Details Chart */}
                    <div className="lg:col-span-8 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-sm font-black text-white uppercase tracking-wider">Activity Details</h3>
                        <div className="flex items-center gap-2 bg-[#070710] p-1 rounded-lg border border-white/10">
                          <span className="px-2 py-0.5 text-[10px] font-bold text-white bg-primary rounded-md">Activity</span>
                          <span className="px-2 py-0.5 text-[10px] font-bold text-white/50">Weekly Progress</span>
                        </div>
                      </div>
                      <div className="h-44 w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <line x1="0" y1="20" x2="100" y2="20" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="40" x2="100" y2="40" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="60" x2="100" y2="60" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="80" x2="100" y2="80" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          {/* Flat Activity Line */}
                          <line x1="0" y1="90" x2="100" y2="90" stroke="#3b82f6" strokeWidth="2" strokeDasharray="2 2" />
                        </svg>
                      </div>
                      <div className="flex justify-between text-[0.62rem] text-primary/50 font-bold uppercase tracking-wider mt-4">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    {/* Weekly Progress */}
                    <div className="lg:col-span-4 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between text-center">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider text-left mb-6">Weekly Progress</h3>
                      <div className="flex-1 flex flex-col items-center justify-center py-4">
                        <div className="w-24 h-24 rounded-full border-4 border-white/5 flex items-center justify-center text-white/30 text-xs font-mono font-bold">
                          No progress
                        </div>
                      </div>
                      <p className="text-[0.68rem] text-white/40 font-bold mt-4">No data logged for the current period</p>
                    </div>
                  </div>

                  {/* Dashboard Timeline */}
                  <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-[2.25rem] p-6 md:p-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider mb-6">Dashboard Timeline</h3>
                    <div className="h-28 w-full relative">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.02)" strokeWidth="0.5" />
                        <line x1="0" y1="90" x2="100" y2="90" stroke="#3b82f6" strokeWidth="1.5" />
                      </svg>
                    </div>
                    <div className="flex justify-between text-[0.62rem] text-primary/50 font-bold uppercase tracking-wider mt-4">
                      <span>Jan</span>
                      <span>Feb</span>
                      <span>Mar</span>
                      <span>Apr</span>
                      <span>May</span>
                      <span>Jun</span>
                      <span>Jul</span>
                    </div>
                  </div>

                  {/* Team Performance: Agent Scorecard & Team Scoreboard */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Agent Scorecard */}
                    <div className="lg:col-span-8 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Agent Scorecard</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-white/5 text-primary/50 font-bold uppercase tracking-wider">
                              <th className="pb-3">Agent</th>
                              <th className="pb-3">Status</th>
                              <th className="pb-3">Progress</th>
                              <th className="pb-3">SLA</th>
                              <th className="pb-3 text-right">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b border-white/5">
                              <td colSpan="5" className="py-8 text-center text-white/30 font-bold">No agents active in this queue</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Team Scoreboard */}
                    <div className="lg:col-span-4 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Team Scoreboard</h3>
                      <div className="flex-1 flex items-center justify-center py-6 text-white/30 font-bold text-xs">
                        No scores recorded
                      </div>
                    </div>
                  </div>

                  {/* Work Categories Health: Unassigned Analytics & Subject Summary */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Unassigned Analytics */}
                    <div className="lg:col-span-4 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between text-center">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider text-left mb-6">Unassigned Analytics</h3>
                      <div className="flex-1 flex flex-col items-center justify-center py-4">
                        <h2 className="text-5xl font-extrabold text-white mb-2">0</h2>
                        <span className="text-[0.62rem] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">
                          ✓ No unassigned tasks
                        </span>
                      </div>
                    </div>

                    {/* Subject Summary */}
                    <div className="lg:col-span-8 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Subject Summary</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse">
                          <thead>
                            <tr className="border-b border-white/5 text-primary/50 font-bold uppercase tracking-wider">
                              <th className="pb-3">Subject</th>
                              <th className="pb-3">Tasks</th>
                              <th className="pb-3">Status</th>
                              <th className="pb-3 text-right">Completion</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-white/5">
                            {[
                              { name: 'Engineering', count: 0, status: 'On Track' },
                              { name: 'QA Testing', count: 0, status: 'On Track' },
                              { name: 'Operations', count: 0, status: 'On Track' },
                              { name: 'Marketing', count: 0, status: 'On Track' }
                            ].map((sub, i) => (
                              <tr key={i} className="hover:bg-white/[0.02]">
                                <td className="py-3 font-bold text-white">{sub.name}</td>
                                <td className="py-3 text-[#94A3B8] font-semibold">{sub.count}</td>
                                <td className="py-3 text-emerald-400 font-semibold">{sub.status}</td>
                                <td className="py-3 text-right font-black text-[#94A3B8]">0%</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Top Resource Ranking & Strategic Insights */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Top Resource Ranking */}
                    <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Top Resource Ranking</h3>
                      <div className="py-8 text-center text-white/30 font-bold text-xs">
                        No resource data available
                      </div>
                    </div>

                    {/* Strategic Insights */}
                    <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Strategic Insights</h3>
                      <div className="py-8 text-center text-white/30 font-bold text-xs">
                        No insights generated yet
                      </div>
                    </div>
                  </div>

                  {/* Volume Comparison & Top Performers */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    {/* Volume Comparison */}
                    <div className="lg:col-span-8 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Volume Comparison</h3>
                      <div className="py-8 text-center text-white/30 font-bold text-xs">
                        No volume data to display
                      </div>
                    </div>

                    {/* Top Performers */}
                    <div className="lg:col-span-4 bg-[#0D0D1C]/40 border border-white/5 rounded-3xl p-6 flex flex-col justify-between">
                      <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Top Performers</h3>
                      <div className="flex-1 flex items-center justify-center py-6 text-white/30 font-bold text-xs">
                        No data
                      </div>
                    </div>
                  </div>

                  {/* Activity Actions */}
                  <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-[2.25rem] p-6 md:p-8">
                    <h3 className="text-sm font-black text-white uppercase tracking-wider mb-6">Activity Actions</h3>
                    <div className="py-8 text-center text-white/30 font-bold text-xs">
                      No activity actions recorded
                    </div>
                  </div>
                </div>
              )}

              {/* ── Tab: Tasks ── */}
              {activeTab === 'Tasks' && (
                <div className="space-y-6">
                  {/* Action Bar */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">Task Board</h3>
                    <button 
                      onClick={() => setShowCreateForm(!showCreateForm)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary hover:brightness-110 text-white font-bold text-xs transition-all cursor-pointer border-none"
                    >
                      {showCreateForm ? <X size={14} /> : <Plus size={14} />}
                      <span>{showCreateForm ? 'Cancel' : 'Create Task'}</span>
                    </button>
                  </div>

                  {/* Inline Creation Form */}
                  <AnimatePresence>
                    {showCreateForm && (
                      <motion.form 
                        onSubmit={handleCreateTask}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-[#0D0D1C]/70 border border-white/10 rounded-2xl p-5 md:p-6 space-y-4 overflow-hidden relative"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[0.62rem] font-black uppercase text-primary/50 tracking-wider mb-1 block">Task Title *</label>
                            <input 
                              type="text" required placeholder="e.g. Write integration docs"
                              value={newTitle} onChange={e => setNewTitle(e.target.value)}
                              className="w-full bg-[#070710] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-primary"
                            />
                          </div>
                          <div>
                            <label className="text-[0.62rem] font-black uppercase text-primary/50 tracking-wider mb-1 block">Description</label>
                            <input 
                              type="text" placeholder="Short description of expectations"
                              value={newDesc} onChange={e => setNewDesc(e.target.value)}
                              className="w-full bg-[#070710] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-primary"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          <div>
                            <label className="text-[0.62rem] font-black uppercase text-primary/50 tracking-wider mb-1 block">Priority</label>
                            <select 
                              value={newPriority} onChange={e => setNewPriority(e.target.value)}
                              className="w-full bg-[#070710] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-primary appearance-none"
                            >
                              <option>Highest</option>
                              <option>High</option>
                              <option>Normal</option>
                              <option>Low</option>
                              <option>Lowest</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[0.62rem] font-black uppercase text-primary/50 tracking-wider mb-1 block">Status</label>
                            <select 
                              value={newStatus} onChange={e => setNewStatus(e.target.value)}
                              className="w-full bg-[#070710] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-primary appearance-none"
                            >
                              <option>Not Started</option>
                              <option>In Progress</option>
                              <option>Waiting</option>
                              <option>Done</option>
                            </select>
                          </div>
                          <div>
                            <label className="text-[0.62rem] font-black uppercase text-primary/50 tracking-wider mb-1 block">Assignee</label>
                            <select 
                              value={newAssignee} onChange={e => setNewAssignee(e.target.value)}
                              className="w-full bg-[#070710] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white outline-none focus:border-primary appearance-none"
                            >
                              <option>Sarah Jenkins</option>
                              <option>Michael Chang</option>
                              <option>Jessica Rivera</option>
                              <option>David Miller</option>
                            </select>
                          </div>
                          <div className="flex items-center gap-2 pt-6">
                            <input 
                              type="checkbox" id="sla"
                              checked={newSlaEnabled} onChange={e => setNewSlaEnabled(e.target.checked)}
                              className="w-4 h-4 accent-primary bg-transparent rounded border-white/10 focus:ring-primary"
                            />
                            <label htmlFor="sla" className="text-xs text-[#94A3B8] font-bold cursor-pointer selection:bg-transparent">Track SLA Countdown</label>
                          </div>
                        </div>

                        <div className="flex justify-end pt-2">
                          <button 
                            type="submit"
                            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-primary to-[#8B5CF6] hover:brightness-110 font-bold text-xs text-white cursor-pointer border-none"
                          >
                            Save Task
                          </button>
                        </div>
                      </motion.form>
                    )}
                  </AnimatePresence>

                  {/* Kanban Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
                    {['Not Started', 'In Progress', 'Waiting', 'Done'].map((colStatus) => {
                      const colTasks = tasks.filter(t => t.status === colStatus);
                      return (
                        <div 
                          key={colStatus}
                          className="bg-[#0D0D1C]/45 border border-white/5 rounded-2xl p-4 flex flex-col min-h-[400px] backdrop-blur-md"
                        >
                          <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                            <span className="text-xs font-black uppercase text-primary/75 tracking-wider">{colStatus}</span>
                            <span className="text-[0.62rem] font-bold px-2 py-0.5 rounded-md bg-white/[0.04] text-white/55 border border-white/5">
                              {colTasks.length}
                            </span>
                          </div>

                          <div className="space-y-3 flex-1 overflow-y-auto">
                            {colTasks.map((task) => (
                              <div 
                                key={task.id}
                                className="bg-[#121228]/85 border border-white/5 hover:border-primary/30 p-4 rounded-xl hover:-translate-y-1 transition-all duration-300 shadow-sm relative group"
                              >
                                {/* Header Info */}
                                <div className="flex items-center justify-between mb-2">
                                  <span className="font-mono text-[0.68rem] font-bold text-primary/80 bg-primary/10 px-2 py-0.5 rounded-md">
                                    {task.id}
                                  </span>
                                  
                                  {/* Delete button (visible on hover) */}
                                  <button 
                                    onClick={() => handleDeleteTask(task.id)}
                                    className="text-white/30 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer border-none bg-transparent"
                                  >
                                    <Trash2 size={13} />
                                  </button>
                                </div>

                                <h4 className="text-xs font-bold text-white mb-1.5 leading-snug">{task.title}</h4>
                                <p className="text-[0.68rem] text-[#94A3B8] line-clamp-2 mb-3 leading-normal">{task.desc}</p>

                                {/* Badges */}
                                <div className="flex items-center gap-1.5 flex-wrap mb-3.5">
                                  <span className={`text-[0.58rem] font-black uppercase px-2 py-0.5 rounded-md border
                                    ${task.priority === 'Highest' && 'bg-rose-500/10 text-rose-400 border-rose-500/20'}
                                    ${task.priority === 'High' && 'bg-amber-500/10 text-amber-400 border-amber-500/20'}
                                    ${task.priority === 'Normal' && 'bg-primary/10 text-primary-light border-primary/20'}
                                    ${task.priority === 'Low' && 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}
                                    ${task.priority === 'Lowest' && 'bg-slate-500/10 text-slate-400 border-slate-500/20'}
                                  `}>
                                    {task.priority}
                                  </span>
                                  {task.slaDeadline && (
                                    <span className={`text-[0.58rem] font-black uppercase px-2 py-0.5 rounded-md border flex items-center gap-1
                                      ${task.slaBreached ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' : 'bg-primary/10 text-primary-light border-primary/20'}
                                    `}>
                                      <Clock size={10} />
                                      {task.slaBreached ? 'Breached' : 'SLA Active'}
                                    </span>
                                  )}
                                </div>

                                {/* Footer Assignment / Progress */}
                                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                                  <div className="flex items-center gap-1 text-[0.65rem] text-[#94A3B8] font-bold">
                                    <User size={11} className="text-primary/50" />
                                    <span>{task.assignedTo.split(' ')[0]}</span>
                                  </div>

                                  {/* Quick Status Adjustments */}
                                  <div className="flex items-center gap-1">
                                    <button 
                                      onClick={() => moveTaskStatus(task.id, -1)}
                                      disabled={colStatus === 'Not Started'}
                                      className="w-5 h-5 rounded bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer border-none"
                                    >
                                      <ArrowLeft size={11} />
                                    </button>
                                    <button 
                                      onClick={() => moveTaskStatus(task.id, 1)}
                                      disabled={colStatus === 'Done'}
                                      className="w-5 h-5 rounded bg-white/[0.04] hover:bg-white/[0.08] flex items-center justify-center text-[#94A3B8] hover:text-white disabled:opacity-30 disabled:pointer-events-none cursor-pointer border-none"
                                    >
                                      <ArrowRight size={11} />
                                    </button>
                                  </div>
                                </div>

                              </div>
                            ))}
                            {colTasks.length === 0 && (
                              <div className="h-28 rounded-xl border border-dashed border-white/5 flex items-center justify-center text-[0.68rem] text-primary/30 font-bold select-none">
                                No tasks
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* ── Tab: Analytics ── */}
              {activeTab === 'Analytics' && (
                <div className="space-y-6">
                  {/* Stats circles */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-black uppercase text-primary/50 tracking-wider mb-1">SLA Compliance Rate</h4>
                        <h2 className="text-3xl font-extrabold text-white">{slaCompliance}%</h2>
                        <p className="text-[0.68rem] text-emerald-400 mt-1 font-bold">Target threshold exceeds 85%</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-emerald-500/20 border-t-emerald-500 flex items-center justify-center text-xs font-black text-white">
                        {slaCompliance}%
                      </div>
                    </div>

                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-black uppercase text-primary/50 tracking-wider mb-1">Overall Completion Rate</h4>
                        <h2 className="text-3xl font-extrabold text-white">{successRate}%</h2>
                        <p className="text-[0.68rem] text-primary mt-1 font-bold">Calculated from {completedTasks}/{totalTasks} tasks</p>
                      </div>
                      <div className="w-16 h-16 rounded-full border-4 border-primary/20 border-t-primary flex items-center justify-center text-xs font-black text-white">
                        {successRate}%
                      </div>
                    </div>

                    <div className="bg-[#0D0D1C]/60 border border-white/10 p-6 rounded-2xl flex items-center justify-between">
                      <div>
                        <h4 className="text-xs font-black uppercase text-primary/50 tracking-wider mb-1">Active SLA Breaches</h4>
                        <h2 className="text-3xl font-extrabold text-[#EF4444]">{slaBreached}</h2>
                        <p className="text-[0.68rem] text-rose-400 mt-1 font-bold">Requires urgent investigation</p>
                      </div>
                      <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center text-[#EF4444] border border-rose-500/20">
                        <AlertTriangle size={24} />
                      </div>
                    </div>
                  </div>

                  {/* Velocity Graph + Priority Distribution */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Completion Velocity (Interactive SVG Line Graph) */}
                    <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-2xl p-6">
                      <h4 className="text-xs font-black uppercase text-primary/50 tracking-wider mb-6">Task Completion Velocity</h4>
                      
                      <div className="h-48 w-full relative">
                        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          {/* Grid Lines */}
                          <line x1="0" y1="25" x2="100" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          <line x1="0" y1="75" x2="100" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                          
                          {/* Glow area */}
                          <path 
                            d="M0,100 L0,70 L20,50 L40,85 L60,40 L80,25 L100,10 L100,100 Z" 
                            fill="url(#velocityGlow)" 
                          />
                          {/* Core line */}
                          <path 
                            d="M0,70 L20,50 L40,85 L60,40 L80,25 L100,10" 
                            fill="none" 
                            stroke="url(#velocityGradient)" 
                            strokeWidth="2" 
                            strokeLinecap="round"
                          />
                          
                          {/* Definitions */}
                          <defs>
                            <linearGradient id="velocityGradient" x1="0" y1="0" x2="1" y2="0">
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                            <linearGradient id="velocityGlow" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.15)" />
                              <stop offset="100%" stopColor="rgba(99, 102, 241, 0)" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </div>

                      <div className="flex justify-between text-[0.62rem] text-primary/50 font-bold uppercase tracking-wider mt-4">
                        <span>Mon</span>
                        <span>Tue</span>
                        <span>Wed</span>
                        <span>Thu</span>
                        <span>Fri</span>
                        <span>Sat</span>
                        <span>Sun</span>
                      </div>
                    </div>

                    {/* Priority Breakdown */}
                    <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-2xl p-6 space-y-4">
                      <h4 className="text-xs font-black uppercase text-primary/50 tracking-wider mb-2">Priority Weighting Distribution</h4>
                      
                      {[
                        { label: 'Highest', count: tasks.filter(t => t.priority === 'Highest').length, color: 'bg-rose-500' },
                        { label: 'High', count: tasks.filter(t => t.priority === 'High').length, color: 'bg-amber-500' },
                        { label: 'Normal', count: tasks.filter(t => t.priority === 'Normal').length, color: 'bg-primary' },
                        { label: 'Low', count: tasks.filter(t => t.priority === 'Low').length, color: 'bg-emerald-500' },
                        { label: 'Lowest', count: tasks.filter(t => t.priority === 'Lowest').length, color: 'bg-slate-500' }
                      ].map((item) => {
                        const pct = totalTasks > 0 ? Math.round((item.count / totalTasks) * 100) : 0;
                        return (
                          <div key={item.label} className="space-y-1">
                            <div className="flex justify-between text-xs">
                              <span className="font-bold text-white/90">{item.label}</span>
                              <span className="text-[#94A3B8] font-semibold">{item.count} tasks ({pct}%)</span>
                            </div>
                            <div className="h-2 w-full bg-white/[0.03] border border-white/5 rounded-full overflow-hidden">
                              <motion.div 
                                className={`h-full ${item.color}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${pct}%` }}
                                transition={{ duration: 0.8 }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Agent performance table */}
                  <div className="bg-[#0D0D1C]/40 border border-white/5 rounded-2xl p-6">
                    <h4 className="text-xs font-black uppercase text-primary/50 tracking-wider mb-4">Team Performance Standings</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-white/5 text-primary/50 font-bold uppercase tracking-wider">
                            <th className="pb-3 pl-2">Agent</th>
                            <th className="pb-3">Assigned Tasks</th>
                            <th className="pb-3">Completed</th>
                            <th className="pb-3">SLA Breaches</th>
                            <th className="pb-3 pr-2 text-right">Compliance Rate</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {[
                            { name: 'Sarah Jenkins', role: 'Developer', assigned: tasks.filter(t => t.assignedTo === 'Sarah Jenkins').length, completed: tasks.filter(t => t.assignedTo === 'Sarah Jenkins' && t.status === 'Done').length, breach: tasks.filter(t => t.assignedTo === 'Sarah Jenkins' && t.slaBreached).length },
                            { name: 'Michael Chang', role: 'Support Lead', assigned: tasks.filter(t => t.assignedTo === 'Michael Chang').length, completed: tasks.filter(t => t.assignedTo === 'Michael Chang' && t.status === 'Done').length, breach: tasks.filter(t => t.assignedTo === 'Michael Chang' && t.slaBreached).length },
                            { name: 'Jessica Rivera', role: 'QA Lead', assigned: tasks.filter(t => t.assignedTo === 'Jessica Rivera').length, completed: tasks.filter(t => t.assignedTo === 'Jessica Rivera' && t.status === 'Done').length, breach: tasks.filter(t => t.assignedTo === 'Jessica Rivera' && t.slaBreached).length },
                            { name: 'David Miller', role: 'Ops Engineer', assigned: tasks.filter(t => t.assignedTo === 'David Miller').length, completed: tasks.filter(t => t.assignedTo === 'David Miller' && t.status === 'Done').length, breach: tasks.filter(t => t.assignedTo === 'David Miller' && t.slaBreached).length }
                          ].map((agent) => {
                            const compliance = agent.assigned > 0 ? Math.round(((agent.assigned - agent.breach) / agent.assigned) * 100) : 100;
                            return (
                              <tr key={agent.name} className="hover:bg-white/[0.02]">
                                <td className="py-3 pl-2 font-bold text-white">{agent.name}</td>
                                <td className="py-3 text-[#94A3B8] font-semibold">{agent.assigned}</td>
                                <td className="py-3 text-[#94A3B8] font-semibold">{agent.completed}</td>
                                <td className={`py-3 font-semibold ${agent.breach > 0 ? 'text-[#EF4444]' : 'text-[#94A3B8]'}`}>{agent.breach}</td>
                                <td className={`py-3 pr-2 text-right font-black ${compliance >= 85 ? 'text-emerald-400' : 'text-[#EF4444]'}`}>{compliance}%</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

    </div>
  );
}
