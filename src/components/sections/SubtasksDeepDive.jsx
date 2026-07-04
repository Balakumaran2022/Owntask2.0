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
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[700px] h-[500px] bg-primary/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Centered Header Section */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-[#8b5cf6]/30 rounded-full bg-[#8b5cf6]/10 text-[#a78bfa] text-xs font-bold tracking-wide"
          >
            <Settings2 size={13} className="animate-pulse" />
            <span>Modular Task Hierarchy</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-6"
          >
            <span className="text-white">Break big work </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">into traceable pieces.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white/55 text-base md:text-lg leading-relaxed"
          >
            Subtasks share the exact same model schema as parent tasks. No performance overhead, no separate systems to manage, and no extra learning curves. Every subtask is a fully-featured item with its own assignees, priorities, status flows, and due dates.
          </motion.p>
        </div>

        {/* Split Layout Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Feature Description Bullets */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="flex flex-col gap-6">
              {[
                { 
                  title: 'Live Parent Counters', 
                  desc: 'Track progress at a glance with real-time subtaskCount and completedSubtaskCount properties.',
                  color: 'group-hover:text-emerald-400'
                },
                { 
                  title: 'Custom Completion Rules', 
                  desc: 'Enforce policies: Manual (parent stays open) or All (parent auto-closes when the final subtask resolves).',
                  color: 'group-hover:text-violet-400'
                },
                { 
                  title: 'Push-on-Assign Alerts', 
                  desc: 'Instant notifications dispatch to watchers and assignees the second a subtask is delegated.',
                  color: 'group-hover:text-amber-400'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative flex gap-4 p-5 rounded-2xl bg-[#0D0D1C]/80 border border-white/[0.06] hover:border-white/15 transition-all group overflow-hidden shadow-lg"
                >
                  {/* Glowing top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  <div className="relative z-10 w-7 h-7 rounded-xl bg-white/5 flex items-center justify-center mt-0.5 group-hover:scale-110 group-hover:bg-primary/10 transition-all border border-white/5">
                    <ChevronRight size={16} className="text-primary group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <div className="relative z-10">
                    <h4 className="text-white font-bold text-base md:text-lg group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#8b5cf6] transition-all">
                      {item.title}
                    </h4>
                    <p className="text-white/45 text-sm mt-1.5 leading-relaxed group-hover:text-white/70 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Subtask Engine Mock */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[570px] rounded-[32px] overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.65)] relative"
              style={{ background: 'linear-gradient(160deg, #090911 0%, #0d0d1b 100%)' }}
            >
              {/* Chrome header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
                <div className="flex items-center gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-400/40 border border-red-400/60" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-400/40 border border-amber-400/60" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/40 border border-emerald-400/60" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="text-xs font-mono text-white/40">Subtask Engine Mock</span>
                </div>
                <span className="text-[10px] font-mono text-emerald-400/80 tracking-wider">TSK-4089</span>
              </div>

              {/* Mock UI Content */}
              <div className="p-4 md:p-5 flex flex-col gap-4 relative">
                
                {/* Simulated Push Notification Toast */}
                <AnimatePresence>
                  {showNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -20, scale: 0.95 }}
                      className="absolute top-3 left-4 right-4 z-25 p-3 rounded-xl bg-[#14142B]/95 border border-primary/20 shadow-2xl flex items-start gap-2.5 backdrop-blur-md"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 shrink-0">
                        <Bell size={14} className="text-primary animate-bounce" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-[11px] font-bold text-white">Subtask Assigned</h4>
                        <p className="text-[10px] text-white/50 mt-0.5">Alice K. was assigned to "Perform security compliance audit"</p>
                      </div>
                      <span className="text-[8px] font-mono text-white/30">Just now</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Parent Task Header Card */}
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-3">
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">Parent Task</span>
                      <h3 className="text-white font-bold text-base mt-0.5">Setup Production API Environment</h3>
                    </div>
                    
                    {/* Parent Status Badge */}
                    <motion.span
                      animate={{
                        color: parentStatus === 'Completed' ? '#34d399' : '#a78bfa',
                        borderColor: parentStatus === 'Completed' ? 'rgba(52,211,153,0.3)' : 'rgba(167,139,250,0.3)',
                        backgroundColor: parentStatus === 'Completed' ? 'rgba(52,211,153,0.06)' : 'rgba(167,139,250,0.06)'
                      }}
                      className="px-2 py-0.5 rounded border text-[10px] font-bold font-mono tracking-wide"
                    >
                      {parentStatus}
                    </motion.span>
                  </div>

                  {/* Subtask Counters */}
                  <div className="flex items-center justify-between text-[11px] border-t border-white/[0.04] pt-2">
                    <div className="flex items-center gap-3 text-white/50">
                      <div>
                        <span className="font-mono text-white/20 mr-1">subtaskCount:</span>
                        <span className="font-bold text-white/80">{totalCount}</span>
                      </div>
                      <div>
                        <span className="font-mono text-white/20 mr-1">completedSubtaskCount:</span>
                        <span className="font-bold text-white/80 tabular-nums">{completedCount}</span>
                      </div>
                    </div>
                    <span className="text-primary font-bold tabular-nums">{Math.round(progressPercent)}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      animate={{ width: `${progressPercent}%` }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="absolute inset-y-0 left-0 rounded-full"
                      style={{ 
                        background: 'linear-gradient(90deg, #34d399, #8b5cf6)', 
                        boxShadow: '0 0 10px rgba(52,211,153,0.4)' 
                      }}
                    />
                  </div>
                </div>

                {/* Subtasks Hierarchy List */}
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">Traceable Subtasks</span>
                  {subtasks.map((task) => (
                    <motion.div
                      key={task.id}
                      animate={{
                        opacity: task.done ? 0.75 : 1,
                        borderColor: task.done ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.07)'
                      }}
                      className="p-2.5 rounded-xl border bg-white/[0.01] flex items-center justify-between gap-4 transition-all duration-300 hover:bg-white/[0.02]"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="cursor-pointer text-primary">
                          {task.done ? (
                            <CheckCircle2 size={16} className="text-emerald-400" />
                          ) : (
                            <Square size={16} className="text-white/20 hover:text-white/40" />
                          )}
                        </div>
                        <span className={`text-xs text-white/80 ${task.done ? 'line-through text-white/40' : ''}`}>
                          {task.text}
                        </span>
                      </div>

                      {/* Subtask fields meta tags */}
                      <div className="flex items-center gap-2">
                        <span className={`px-1.5 py-0.5 rounded text-[8px] font-bold font-mono tracking-wide ${
                          task.priority === 'Highest' || task.priority === 'High' 
                            ? 'text-red-400 bg-red-400/10 border border-red-400/20' 
                            : 'text-white/30 bg-white/5 border border-white/10'
                        }`}>
                          {task.priority}
                        </span>
                        <div className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[8px] text-white/45 bg-white/5 border border-white/5">
                          <User size={9} />
                          <span>{task.assignee}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Rule configuration selector */}
                <div className="mt-2 pt-3 border-t border-white/[0.05] flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <Sliders size={12} className="text-primary" />
                      <span className="text-[10px] text-white/40 uppercase tracking-widest font-black">Completion Rule Policy</span>
                    </div>
                    <div className="flex rounded-lg bg-white/5 p-0.5 border border-white/10">
                      <button
                        onClick={() => setCompletionRule('manual')}
                        className={`px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wide transition-all ${
                          completionRule === 'manual' 
                            ? 'bg-primary text-black shadow-md' 
                            : 'text-white/40 hover:text-white/70'
                        }`}
                      >
                        Manual
                      </button>
                      <button
                        onClick={() => setCompletionRule('all')}
                        className={`px-2 py-0.5 rounded-md text-[9px] font-bold tracking-wide transition-all ${
                          completionRule === 'all' 
                            ? 'bg-primary text-black shadow-md' 
                            : 'text-white/40 hover:text-white/70'
                        }`}
                      >
                        All
                      </button>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-white/75 font-medium leading-relaxed mt-1">
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
