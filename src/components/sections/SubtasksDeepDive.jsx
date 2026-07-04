import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckSquare, 
  Square, 
  User, 
  Clock, 
  Bell, 
  Settings2, 
  ArrowUpRight, 
  ChevronRight,
  ShieldAlert,
  Sliders,
  CheckCircle2
} from 'lucide-react';

export default function SubtasksDeepDive() {
  const [completionRule, setCompletionRule] = useState('all'); // 'manual', 'all'
  const [subtasks, setSubtasks] = useState([
    { id: 1, text: 'Design database indexing models', done: true, priority: 'High', assignee: 'Alex M.' },
    { id: 2, text: 'Write endpoint integration unit tests', done: true, priority: 'Normal', assignee: 'Jane D.' },
    { id: 3, text: 'Perform security compliance audit', done: false, priority: 'Highest', assignee: 'Alice K.' },
  ]);
  const [parentStatus, setParentStatus] = useState('In Progress');
  const [showNotification, setShowNotification] = useState(false);

  const completedCount = subtasks.filter(t => t.done).length;
  const totalCount = subtasks.length;
  const progressPercent = (completedCount / totalCount) * 100;

  // Auto-simulation of completing the last subtask
  useEffect(() => {
    const timer = setTimeout(() => {
      // Toggle the last subtask
      setSubtasks(prev => prev.map(t => t.id === 3 ? { ...t, done: true } : t));
      
      // Fire push notification simulation
      setShowNotification(true);
      
      // Auto close parent if completion rule is 'all'
      if (completionRule === 'all') {
        setParentStatus('Completed');
      }
    }, 4000);

    const resetTimer = setTimeout(() => {
      // Reset simulation
      setSubtasks(prev => prev.map(t => t.id === 3 ? { ...t, done: false } : t));
      setParentStatus('In Progress');
      setShowNotification(false);
    }, 9000);

    return () => {
      clearTimeout(timer);
      clearTimeout(resetTimer);
    };
  }, [completionRule]);

  return (
    <section className="relative z-10 py-10 lg:py-14 overflow-hidden bg-transparent">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1420px] relative z-10">
        
        {/* Centered Header Section (Compact for Single Screen) */}
        <div className="text-center mb-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 border border-[#8b5cf6]/30 rounded-full bg-[#8b5cf6]/10 text-[#a78bfa] text-xs font-bold tracking-wide"
          >
            <Settings2 size={13} className="animate-pulse" />
            <span>Modular Task Hierarchy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight font-sans font-extrabold mb-3"
          >
            <span className="text-white">Break big work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">into traceable pieces.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white/65 text-sm md:text-base leading-relaxed font-medium"
          >
            Subtasks share the exact same model schema as parent tasks. No performance overhead, no separate systems to manage, and no extra learning curves. Every subtask is a fully-featured item with its own assignees, priorities, status flows, and due dates.
          </motion.p>
        </div>

        {/* Split Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT: Feature Description Cards (Ultra-Modern Glassmorphic 2026 UI) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-4">
              {[
                { 
                  title: 'Live Parent Counters', 
                  badge: 'LIVE',
                  badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.3)] animate-pulse',
                  desc: 'Track progress at a glance with real-time subtaskCount and completedSubtaskCount properties.',
                  icon: Clock,
                  iconStyle: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/50 text-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.3)]',
                  glow: 'via-emerald-500/80',
                  borderHover: 'hover:border-emerald-500/60'
                },
                { 
                  title: 'Custom Completion Rules', 
                  badge: 'POLICY',
                  badgeColor: 'bg-violet-500/20 text-violet-300 border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)]',
                  desc: 'Enforce policies: Manual (parent stays open) or All (parent auto-closes when the final subtask resolves).',
                  icon: Sliders,
                  iconStyle: 'from-violet-500/20 to-purple-500/20 border-violet-500/50 text-violet-300 shadow-[0_0_20px_rgba(139,92,246,0.3)]',
                  glow: 'via-violet-500/80',
                  borderHover: 'hover:border-violet-500/60'
                },
                { 
                  title: 'Push-on-Assign Alerts', 
                  badge: 'INSTANT',
                  badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)]',
                  desc: 'Instant notifications dispatch to watchers and assignees the second a subtask is delegated.',
                  icon: Bell,
                  iconStyle: 'from-amber-500/20 to-rose-500/20 border-amber-500/50 text-amber-400 shadow-[0_0_20px_rgba(245,158,11,0.3)]',
                  glow: 'via-amber-500/80',
                  borderHover: 'hover:border-amber-500/60'
                }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -4, scale: 1.015 }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`relative flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r from-[#13122b]/95 via-[#181638]/95 to-[#13122b]/95 border border-white/20 ${item.borderHover} transition-all duration-300 group overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-2xl w-full shrink-0 h-auto`}
                  >
                    {/* Glowing top accent line */}
                    <div className={`absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent ${item.glow} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Shimmer overlay */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Glowing Icon Box */}
                    <div className={`relative z-10 w-12 h-12 rounded-2xl bg-gradient-to-br ${item.iconStyle} flex items-center justify-center mt-0.5 group-hover:scale-110 transition-all border shrink-0`}>
                      <Icon size={22} strokeWidth={2.5} />
                    </div>

                    {/* Content */}
                    <div className="relative z-10 flex-1 min-w-0 pr-1">
                      <div className="flex items-center gap-2.5 mb-1.5 flex-wrap">
                        <h4 className="text-white font-black text-base md:text-lg tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all leading-snug">
                          {item.title}
                        </h4>
                        {item.badge && (
                          <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black font-mono tracking-wider border uppercase shadow-sm ${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-white/90 text-xs md:text-sm leading-relaxed font-bold block w-full whitespace-normal break-words">
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Subtask Engine Mock (Compact Single-Page UI) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[620px] rounded-[28px] overflow-hidden border border-white/20 shadow-[0_32px_90px_rgba(0,0,0,0.85)] relative"
              style={{ background: 'linear-gradient(160deg, #13122b 0%, #0d0c1f 100%)' }}
            >
              {/* Chrome header */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#0a0a16]/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/10 border border-white/15 shadow-inner">
                  <span className="text-xs font-mono font-bold text-white/90 tracking-wide">Subtask Engine Mock</span>
                </div>
                <span className="text-[11px] font-mono font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">TSK-4089</span>
              </div>

              {/* Mock UI Content (Compact for Single Screen) */}
              <div className="p-5 md:p-6 flex flex-col gap-4 relative bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
                
                {/* Simulated Push Notification Toast */}
                <AnimatePresence>
                  {showNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="absolute top-3 left-4 right-4 z-25 p-3 rounded-xl bg-[#181636]/95 border border-primary/50 shadow-[0_10px_40px_rgba(99,102,241,0.5)] flex items-start gap-3 backdrop-blur-xl"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/40 shrink-0 shadow-sm">
                        <Bell size={16} className="text-primary animate-bounce" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-[11px] font-black text-white uppercase tracking-wider">Subtask Assigned</h4>
                        <p className="text-xs font-medium text-white/85 mt-0.5 truncate">Alice K. was assigned to "Perform security compliance audit"</p>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20 shrink-0">Just now</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Parent Task Header Card (Compact Glassmorphic Gradient) */}
                <div className="p-4 md:p-5 rounded-2xl bg-gradient-to-br from-[#1c1a3e]/90 via-[#161432]/90 to-[#121028]/90 border border-primary/40 flex flex-col gap-3.5 shadow-[0_15px_40px_rgba(99,102,241,0.25)] backdrop-blur-xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-emerald-400 to-purple-500 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
                  
                  <div className="flex justify-between items-start gap-3 pt-0.5">
                    <div>
                      <span className="text-[11px] font-mono font-black text-primary tracking-widest uppercase block mb-0.5">Parent Task</span>
                      <h3 className="text-white font-black text-base md:text-lg tracking-wide">Setup Production API Environment</h3>
                    </div>
                    
                    {/* Parent Status Badge */}
                    <motion.span
                      animate={{
                        color: parentStatus === 'Completed' ? '#34d399' : '#e9d5ff',
                        borderColor: parentStatus === 'Completed' ? 'rgba(52,211,153,0.6)' : 'rgba(192,132,252,0.6)',
                        backgroundColor: parentStatus === 'Completed' ? 'rgba(52,211,153,0.2)' : 'rgba(168,85,247,0.2)'
                      }}
                      className="px-3 py-0.5 rounded-full border text-[11px] font-black font-mono tracking-wider shadow-[0_0_15px_rgba(168,85,247,0.3)] uppercase shrink-0"
                    >
                      {parentStatus}
                    </motion.span>
                  </div>

                  {/* Subtask Counters */}
                  <div className="flex items-center justify-between text-xs font-mono border-t border-white/15 pt-3">
                    <div className="flex items-center gap-3 text-white/90 flex-wrap">
                      <div className="bg-white/10 px-3 py-1 rounded-lg border border-white/15 shadow-sm">
                        <span className="text-white/60 mr-1">subtaskCount:</span>
                        <span className="font-black text-white">{totalCount}</span>
                      </div>
                      <div className="bg-white/10 px-3 py-1 rounded-lg border border-white/15 shadow-sm">
                        <span className="text-white/60 mr-1">completed:</span>
                        <span className="font-black text-emerald-400 tabular-nums">{completedCount}</span>
                      </div>
                    </div>
                    <span className="text-white font-black text-xs tabular-nums bg-gradient-to-r from-primary to-indigo-600 px-3 py-1 rounded-lg shadow-[0_0_15px_rgba(99,102,241,0.4)]">{Math.round(progressPercent)}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-2 bg-white/10 rounded-full overflow-hidden shadow-inner p-0.5">
                    <motion.div
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ 
                        background: 'linear-gradient(90deg, #34d399, #8b5cf6)', 
                        boxShadow: '0 0 20px rgba(52,211,153,0.8)' 
                      }}
                    />
                  </div>
                </div>

                {/* Subtasks Hierarchy List (Compact High Visibility Cards) */}
                <div className="flex flex-col gap-2">
                  <span className="text-[11px] font-mono font-black text-white/80 tracking-widest uppercase flex items-center gap-1.5">
                    <span>Traceable Subtasks</span>
                  </span>
                  {subtasks.map((task) => (
                    <motion.div
                      key={task.id}
                      animate={{
                        opacity: task.done ? 0.9 : 1,
                        borderColor: task.done ? 'rgba(52,211,153,0.4)' : 'rgba(255,255,255,0.2)'
                      }}
                      className={`p-3 rounded-xl border flex items-center justify-between gap-3 transition-all duration-300 shadow-lg backdrop-blur-md ${
                        task.done 
                          ? 'bg-emerald-950/20 border-emerald-500/40 hover:bg-emerald-950/30' 
                          : 'bg-[#181636]/80 border-white/20 hover:bg-[#201d48]/90 hover:border-white/35'
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0 pr-2">
                        <div className="cursor-pointer text-primary transition-transform hover:scale-110 shrink-0">
                          {task.done ? (
                            <CheckCircle2 size={18} className="text-emerald-400 stroke-[2.5]" />
                          ) : (
                            <Square size={18} className="text-white/50 hover:text-white" />
                          )}
                        </div>
                        <span className={`text-xs md:text-sm font-bold tracking-wide truncate ${task.done ? 'line-through text-white/60' : 'text-white'}`}>
                          {task.text}
                        </span>
                      </div>

                      {/* Subtask fields meta tags */}
                      <div className="flex items-center gap-2 shrink-0">
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-black font-mono tracking-wider uppercase shadow-sm ${
                          task.priority === 'Highest' || task.priority === 'High' 
                            ? 'text-red-300 bg-red-500/20 border border-red-500/40' 
                            : 'text-white/80 bg-white/10 border border-white/20'
                        }`}>
                          {task.priority}
                        </span>
                        <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-bold text-white/90 bg-white/10 border border-white/20 shadow-sm">
                          <User size={11} className="text-primary" />
                          <span>{task.assignee}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Rule configuration selector (Compact Single-Page Deck) */}
                <div className="mt-1 p-4 rounded-xl bg-gradient-to-r from-primary/15 via-indigo-500/10 to-purple-500/15 border border-primary/30 shadow-inner flex flex-col gap-2">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <Sliders size={15} className="text-primary" />
                      <span className="text-[11px] text-white uppercase tracking-widest font-black font-mono">Completion Rule Policy</span>
                    </div>
                    <div className="flex rounded-lg bg-white/10 p-0.5 border border-white/15 shadow-inner">
                      <button
                        onClick={() => setCompletionRule('manual')}
                        className={`px-3 py-1 rounded-md text-[11px] font-black tracking-wide transition-all cursor-pointer ${
                          completionRule === 'manual' 
                            ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-primary/50 scale-105' 
                            : 'text-white/70 hover:text-white'
                        }`}
                      >
                        Manual
                      </button>
                      <button
                        onClick={() => setCompletionRule('all')}
                        className={`px-3 py-1 rounded-md text-[11px] font-black tracking-wide transition-all cursor-pointer ${
                          completionRule === 'all' 
                            ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] border border-primary/50 scale-105' 
                            : 'text-white/70 hover:text-white'
                        }`}
                      >
                        All
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-white/90 font-semibold leading-normal bg-[#0f0e24]/80 p-2.5 rounded-lg border border-white/15 shadow-sm">
                    {completionRule === 'all' 
                      ? '🔒 ALL: Parent task automatically morphs to "Completed" when the last subtask is closed.'
                      : '⚙️ MANUAL: Parent task stays in its current status even if all subtasks are finished.'
                    }
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
