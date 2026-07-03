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
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.0 }}
            className="group relative p-8 rounded-3xl bg-[#0D0D1C]/80 border border-white/[0.06] overflow-hidden hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
          >
            <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 flex items-center justify-center border border-emerald-500/20">
                <ShieldCheck size={22} className="text-emerald-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Level 1 — Deadline SLA</h3>
            </div>
            <p className="text-white/55 text-base leading-relaxed">
              Set an absolute SLA deadline per task. The system tracks when a breach happened (
              <code className="text-xs font-mono bg-white/10 text-emerald-300/90 px-1.5 py-0.5 rounded mx-0.5">slaBreachedAt</code>
              ) and who owned the task at time of breach (
              <code className="text-xs font-mono bg-white/10 text-emerald-300/90 px-1.5 py-0.5 rounded mx-0.5">slaBreachedBy</code>
              ). Full breach history in the audit log.
            </p>
          </motion.div>

          {/* TOP RIGHT — Level 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="group relative p-8 rounded-3xl bg-[#0D0D1C]/80 border border-white/[0.06] overflow-hidden hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-1"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
          >
            <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-amber-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/10 flex items-center justify-center border border-amber-500/20">
                <AlertTriangle size={22} className="text-amber-400" />
              </div>
              <h3 className="text-white font-bold text-xl">Level 2 — Status-Based SLA</h3>
            </div>
            <p className="text-white/55 text-base leading-relaxed">
              Set a maximum time a task can stay in any given status (e.g., <span className="text-white/75 font-semibold">"In Review"</span> must not exceed 4 hours). The system records when the task entered the status (
              <code className="text-xs font-mono bg-white/10 text-amber-300/90 px-1.5 py-0.5 rounded mx-0.5">statusEnteredAt</code>
              ), fires an alert before breach, and logs&nbsp;
              <code className="text-xs font-mono bg-white/10 text-amber-300/90 px-1.5 py-0.5 rounded mx-0.5">statusSlaAlertSent</code>.
            </p>
          </motion.div>

          {/* BOTTOM LEFT — Analytics Tracked */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="p-8 rounded-3xl bg-[#0D0D1C]/80 border border-white/[0.06] hover:-translate-y-1 transition-all duration-300"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-violet-500/10 flex items-center justify-center border border-primary/20">
                <BarChart2 size={22} className="text-primary" />
              </div>
              <h3 className="text-white font-bold text-xl">Analytics Tracked</h3>
            </div>
            <div className="flex flex-col gap-3">
              {analytics.map((a, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 + 0.2 }}
                  className="flex items-center justify-between py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.04] hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={15} className={a.color} />
                    <span className="text-white/65 text-sm font-medium">{a.label}</span>
                  </div>
                  <span className={`text-lg font-black ${a.color} tabular-nums`}>{a.val}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* BOTTOM RIGHT — SLA Compliance Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_24px_60px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300"
            style={{ background: 'linear-gradient(160deg, #0a0a12 0%, #0e0e1c 100%)' }}
          >
            {/* Chrome bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400/40 border border-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-amber-400/40 border border-amber-400/60" />
                <div className="w-3 h-3 rounded-full bg-emerald-400/40 border border-emerald-400/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="text-xs font-mono text-white/40">SLA Compliance Dashboard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Timer size={13} className="text-emerald-400" />
                <span className="text-xs font-mono text-white/20">LIVE</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="p-6 flex flex-col gap-5">
              {/* Compliance Rate bar */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white/50 uppercase tracking-widest">Compliance Rate</span>
                  <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-3xl font-black text-emerald-400 tabular-nums"
                  >94.2%</motion.span>
                </div>
                <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '94.2%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.8, ease: 'easeOut', delay: 0.4 }}
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #34d399, #8b5cf6)', boxShadow: '0 0 12px rgba(52,211,153,0.5)' }}
                  />
                </div>
              </div>

              {/* Row 1: Tasks Tracked | Breached */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Tasks Tracked', val: '48', sub: 'total SLA tasks',   cls: 'text-blue-400', glow: 'rgba(96,165,250,0.1)' },
                  { label: 'Breached',      val: '3',  sub: '6.2% breach rate',  cls: 'text-red-400',  glow: 'rgba(248,113,113,0.1)' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1.5 cursor-default hover:border-white/10 transition-all"
                    style={{ boxShadow: `0 4px 16px ${s.glow}` }}
                  >
                    <span className="text-[0.65rem] font-black text-white/30 uppercase tracking-widest">{s.label}</span>
                    <span className={`text-3xl font-black ${s.cls} tabular-nums`}>{s.val}</span>
                    <span className="text-[0.65rem] text-white/25 font-medium">{s.sub}</span>
                  </motion.div>
                ))}
              </div>

              {/* Row 2: Status SLA Alerts | Completed w/ SLA — centered */}
              <div className="flex justify-center gap-4">
                {[
                  { label: 'Status SLA Alerts', val: '1',  sub: 'alert fired today',   cls: 'text-amber-400',   glow: 'rgba(251,191,36,0.1)' },
                  { label: 'Completed w/ SLA',  val: '42', sub: 'on-time completions', cls: 'text-emerald-400', glow: 'rgba(52,211,153,0.1)' },
                ].map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    whileHover={{ scale: 1.03 }}
                    className="w-[calc(50%-8px)] p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] flex flex-col gap-1.5 cursor-default hover:border-white/10 transition-all"
                    style={{ boxShadow: `0 4px 16px ${s.glow}` }}
                  >
                    <span className="text-[0.65rem] font-black text-white/30 uppercase tracking-widest">{s.label}</span>
                    <span className={`text-3xl font-black ${s.cls} tabular-nums`}>{s.val}</span>
                    <span className="text-[0.65rem] text-white/25 font-medium">{s.sub}</span>
                  </motion.div>
                ))}
              </div>

              {/* Live indicator */}
              <div className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-500/5 border border-emerald-500/15">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-400/70">Health updates in real time</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
