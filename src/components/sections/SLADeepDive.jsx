import React from 'react';
import { motion } from 'framer-motion';
import { Timer, ShieldCheck, AlertTriangle, CheckCircle2, BarChart2 } from 'lucide-react';

const analytics = [
  { label: 'SLA Tracked Count',      val: '48',   color: 'text-blue-400' },
  { label: 'SLA Breached Count',     val: '3',    color: 'text-red-400' },
  { label: 'Status SLA Alerts Sent', val: '1',    color: 'text-amber-400' },
  { label: 'SLA Completed Count',    val: '42',   color: 'text-emerald-400' },
  { label: 'SLA Compliance Rate',    val: '94.2%',color: 'text-primary' },
];

export default function SLADeepDive() {
  return (
    <section className="relative z-10 pt-10 pb-24 lg:pt-14 lg:pb-32 overflow-hidden bg-transparent">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">

        {/* Section header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-5"
          >
            <span className="text-white">SLA System </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">— Deep Dive</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-white/45 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            SLA tracking that goes beyond a simple deadline.
          </motion.p>
        </div>

        {/* 2×2 Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* TOP LEFT — Level 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.0 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#13122b]/95 via-[#181638]/95 to-[#13122b]/95 border border-emerald-500/40 hover:border-emerald-400 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(16,185,129,0.2)] backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(52,211,153,0.8)]" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center justify-between gap-4 mb-6 relative z-10 flex-wrap">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500/30 to-teal-500/30 flex items-center justify-center border border-emerald-500/50 shadow-[0_0_25px_rgba(52,211,153,0.4)] group-hover:scale-110 transition-all shrink-0">
                  <ShieldCheck size={26} className="text-emerald-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl md:text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-emerald-300 transition-all">
                    Level 1 — Deadline SLA
                  </h3>
                  <span className="text-xs font-mono font-bold text-emerald-300/80 tracking-wide uppercase block">
                    Absolute Time Tracking
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-black font-mono tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-[0_0_12px_rgba(52,211,153,0.3)] uppercase">
                ABSOLUTE
              </span>
            </div>

            <p className="relative z-10 text-white/90 text-sm md:text-base leading-relaxed font-semibold">
              Set an absolute SLA deadline per task. The system tracks when a breach happened (
              <code className="text-xs font-mono bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded-lg border border-emerald-500/30 mx-1 font-bold shadow-sm">slaBreachedAt</code>
              ) and who owned the task at time of breach (
              <code className="text-xs font-mono bg-emerald-950/60 text-emerald-300 px-2 py-0.5 rounded-lg border border-emerald-500/30 mx-1 font-bold shadow-sm">slaBreachedBy</code>
              ). Full breach history in the audit log.
            </p>
          </motion.div>

          {/* TOP RIGHT — Level 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#13122b]/95 via-[#181638]/95 to-[#13122b]/95 border border-amber-500/40 hover:border-amber-400 transition-all duration-500 overflow-hidden shadow-[0_20px_50px_rgba(245,158,11,0.2)] backdrop-blur-2xl"
          >
            <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(245,158,11,0.8)]" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center justify-between gap-4 mb-6 relative z-10 flex-wrap">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/30 to-orange-500/30 flex items-center justify-center border border-amber-500/50 shadow-[0_0_25px_rgba(245,158,11,0.4)] group-hover:scale-110 transition-all shrink-0">
                  <AlertTriangle size={26} className="text-amber-400 group-hover:text-white transition-colors" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl md:text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-amber-300 transition-all">
                    Level 2 — Status-Based SLA
                  </h3>
                  <span className="text-xs font-mono font-bold text-amber-300/80 tracking-wide uppercase block">
                    Dynamic Phase Rules
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-black font-mono tracking-widest bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-[0_0_12px_rgba(245,158,11,0.3)] uppercase">
                DYNAMIC
              </span>
            </div>

            <p className="relative z-10 text-white/90 text-sm md:text-base leading-relaxed font-semibold">
              Set a maximum time a task can stay in any given status (e.g., <span className="text-white font-black underline decoration-amber-400 decoration-2 underline-offset-4">"In Review"</span> must not exceed 4 hours). The system records when the task entered the status (
              <code className="text-xs font-mono bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-500/30 mx-1 font-bold shadow-sm">statusEnteredAt</code>
              ), fires an alert before breach, and logs&nbsp;
              <code className="text-xs font-mono bg-amber-950/60 text-amber-300 px-2 py-0.5 rounded-lg border border-amber-500/30 mx-1 font-bold shadow-sm">statusSlaAlertSent</code>.
            </p>
          </motion.div>

          {/* BOTTOM LEFT — Analytics Tracked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="group relative p-8 rounded-3xl bg-gradient-to-br from-[#13122b]/95 via-[#181638]/95 to-[#13122b]/95 border border-violet-500/40 hover:border-violet-400 transition-all duration-500 shadow-[0_20px_50px_rgba(139,92,246,0.2)] backdrop-blur-2xl flex flex-col justify-between"
          >
            <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-violet-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500 shadow-[0_0_15px_rgba(139,92,246,0.8)]" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/30 to-purple-600/30 flex items-center justify-center border border-violet-500/50 shadow-[0_0_25px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-all shrink-0">
                  <BarChart2 size={26} className="text-violet-300 group-hover:text-white transition-colors" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="text-white font-black text-xl md:text-2xl tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-violet-300 transition-all">
                    Analytics Tracked
                  </h3>
                  <span className="text-xs font-mono font-bold text-violet-300/80 tracking-wide uppercase block">
                    Real-Time SLA Metrics
                  </span>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-[10px] font-black font-mono tracking-widest bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.3)] uppercase">
                METRICS
              </span>
            </div>

            <div className="flex flex-col gap-3.5 relative z-10">
              {analytics.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="flex items-center justify-between py-3.5 px-5 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.09] to-white/[0.06] border border-white/20 hover:border-white/50 transition-all shadow-lg group/row backdrop-blur-xl"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center border border-white/10 group-hover/row:scale-110 transition-transform shadow-sm">
                      <CheckCircle2 size={16} className={a.color} strokeWidth={2.5} />
                    </div>
                    <span className="text-white font-bold text-sm md:text-base group-hover/row:text-white transition-colors">{a.label}</span>
                  </div>
                  <span className={`text-xl md:text-2xl font-black ${a.color} tabular-nums tracking-tight drop-shadow-sm`}>{a.val}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM RIGHT — SLA Compliance Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="group rounded-3xl overflow-hidden border border-white/20 hover:border-emerald-500/50 shadow-[0_24px_60px_rgba(0,0,0,0.7)] transition-all duration-500 bg-gradient-to-br from-[#121226]/95 via-[#161633]/95 to-[#121226]/95 backdrop-blur-2xl flex flex-col justify-between"
          >
            {/* Chrome bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 border border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 border border-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
              <div className="flex items-center gap-2.5 px-3.5 py-1 rounded-xl bg-white/10 border border-white/15 shadow-inner">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                <span className="text-xs font-mono font-bold text-white/80 tracking-wider">SLA Compliance Dashboard</span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-mono text-xs font-black shadow-sm">
                <Timer size={13} className="text-emerald-400 animate-spin-slow" />
                <span>LIVE</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 flex flex-col gap-5 flex-1 justify-between">
              {/* Compliance Rate bar */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/20 shadow-lg flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-white/80 uppercase tracking-widest flex items-center gap-2">
                    <ShieldCheck size={18} className="text-emerald-400" />
                    Compliance Rate
                  </span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200 tabular-nums drop-shadow-sm"
                  >94.2%</motion.span>
                </div>
                <div className="relative h-4 bg-black/40 rounded-full overflow-hidden p-0.5 border border-white/10 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '94.2%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
                    className="absolute inset-y-0.5 left-0.5 rounded-full bg-gradient-to-r from-emerald-400 via-teal-400 to-indigo-500 shadow-[0_0_15px_rgba(52,211,153,0.8)]"
                  />
                </div>
              </div>

              {/* Row 1: Tasks Tracked | Breached */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Tasks Tracked', val: '48', sub: 'total SLA tasks',   cls: 'text-blue-400', border: 'hover:border-blue-400/60', bg: 'from-blue-500/[0.12] to-transparent' },
                  { label: 'Breached',      val: '3',  sub: '6.2% breach rate',  cls: 'text-red-400',  border: 'hover:border-red-400/60',  bg: 'from-red-500/[0.12] to-transparent' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${s.bg} bg-white/[0.05] border border-white/20 ${s.border} transition-all duration-300 flex flex-col gap-1.5 cursor-default shadow-lg group/card`}
                  >
                    <span className="text-xs font-black text-white/60 uppercase tracking-widest group-hover/card:text-white transition-colors">{s.label}</span>
                    <span className={`text-3xl md:text-4xl font-black ${s.cls} tabular-nums drop-shadow-sm`}>{s.val}</span>
                    <span className="text-xs text-white/50 font-bold">{s.sub}</span>
                  </motion.div>
                ))}
              </div>

              {/* Row 2: Status SLA Alerts | Completed w/ SLA */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Status SLA Alerts', val: '1',  sub: 'alert fired today',   cls: 'text-amber-400',   border: 'hover:border-amber-400/60',   bg: 'from-amber-500/[0.12] to-transparent' },
                  { label: 'Completed w/ SLA',  val: '42', sub: 'on-time completions', cls: 'text-emerald-400', border: 'hover:border-emerald-400/60', bg: 'from-emerald-500/[0.12] to-transparent' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.04, y: -2 }}
                    className={`p-5 rounded-2xl bg-gradient-to-br ${s.bg} bg-white/[0.05] border border-white/20 ${s.border} transition-all duration-300 flex flex-col gap-1.5 cursor-default shadow-lg group/card`}
                  >
                    <span className="text-xs font-black text-white/60 uppercase tracking-widest group-hover/card:text-white transition-colors">{s.label}</span>
                    <span className={`text-3xl md:text-4xl font-black ${s.cls} tabular-nums drop-shadow-sm`}>{s.val}</span>
                    <span className="text-xs text-white/50 font-bold">{s.sub}</span>
                  </motion.div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="flex items-center justify-center gap-2.5 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500/15 via-teal-500/20 to-emerald-500/15 border border-emerald-500/40 shadow-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                <span className="text-sm font-black text-emerald-300 tracking-wide uppercase font-mono">Health updates in real time</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
