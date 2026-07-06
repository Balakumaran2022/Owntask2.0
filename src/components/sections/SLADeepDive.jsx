import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, ShieldCheck, AlertTriangle, Clock, Bell } from 'lucide-react';

export default function SLADeepDive() {
  const [activeTicket, setActiveTicket] = useState(0);

  // Active SLA Tickets data for the interactive live dashboard
  const activeTickets = [
    {
      id: 'TSK-104',
      title: 'API Gateway Timeout Investigation',
      status: 'In Review',
      timeLeft: '32m remaining',
      priority: 'Highest',
      slaType: 'Status SLA (Max 2h)',
      level: 'alert',
      pct: 26,
    },
    {
      id: 'TSK-210',
      title: 'Customer Billing Dispute Escalation',
      status: 'In QA',
      timeLeft: '1h 45m remaining',
      priority: 'High',
      slaType: 'Deadline SLA (Total 4h)',
      level: 'normal',
      pct: 68,
    },
    {
      id: 'TSK-182',
      title: 'Quarterly SOC2 Audit Pre-Check',
      status: 'Pending Approval',
      timeLeft: '4h 12m remaining',
      priority: 'Normal',
      slaType: 'Deadline SLA (Total 24h)',
      level: 'normal',
      pct: 85,
    }
  ];

  return (
    <section className="relative z-10 pt-16 pb-24 lg:pt-24 lg:pb-32 overflow-hidden bg-transparent font-sans">
      {/* Ambient glow blobs - strictly Blue */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[400px] bg-blue-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-[500px] h-[350px] bg-blue-600/[0.03] rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border border-blue-500/25 bg-blue-500/10 text-blue-400 text-xs font-black uppercase tracking-widest"
          >
            <Timer size={14} className="animate-pulse" />
            <span>Guaranteed Timelines</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight mb-5"
          >
            <span className="text-white">Enterprise-Grade </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-sky-400">SLA System</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Track completion targets dynamically. Guard response phases, trigger alerts before breach, and log every event immutably.
          </motion.p>
        </div>

        {/* Split Layout: Narrative & Interactive Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* LEFT: SLA Capability Narrative */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6">
            
            {/* Feature 1: Deadline SLA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-blue-500/40 transition-all duration-300 group cursor-default"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                  <ShieldCheck size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5 group-hover:text-blue-300 transition-colors">Level 1 — Absolute Deadline SLA</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Configure custom overall target hours for completion based on project and priority levels. The system dynamically monitors progress and marks warnings automatically.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2: Status SLA */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-blue-500/40 transition-all duration-300 group cursor-default"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5 group-hover:text-blue-300 transition-colors">Level 2 — Status-Based Phase SLA</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Set limits for specific steps (e.g. "In Review" must not exceed 4 hours). Avoid bottlenecks by tracking phase durations and flagging stuck tickets in real time.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3: Smart Warning Actions */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/10 hover:border-blue-500/40 transition-all duration-300 group cursor-default"
            >
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shrink-0 text-blue-400 group-hover:bg-blue-500/20 group-hover:scale-105 transition-all">
                  <AlertTriangle size={22} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg mb-1.5 group-hover:text-blue-300 transition-colors">Automated Escalations & Warnings</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    Send automated warnings to assignees, notify team leads via email or hooks, and auto-elevate ticket priority dynamically when SLA thresholds are crossed.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: Live High-Fidelity SLA Dashboard Mockup */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl border border-white/10 bg-[#0c0c1a]/90 shadow-2xl flex flex-col overflow-hidden h-full"
            >
              {/* Chrome Mock Window Bar */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60 border border-red-500/30" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60 border border-yellow-500/30" />
                  <div className="w-3 h-3 rounded-full bg-blue-500/60 border border-blue-500/30" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-white/5 border border-white/10 shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-bold text-white/70 uppercase tracking-widest">SLA CONTROL PANEL</span>
                </div>
                <span className="text-[10px] font-mono font-black text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/25">LIVE</span>
              </div>

              {/* Control Panel Grid */}
              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
                
                {/* Gauge & Main SLA stats (Left Side of mockup) */}
                <div className="md:col-span-5 flex flex-col justify-between gap-6 border-r-0 md:border-r border-white/5 md:pr-6">
                  
                  {/* Gauge */}
                  <div className="flex flex-col items-center justify-center text-center p-4 bg-white/[0.02] border border-white/[0.05] rounded-2xl relative overflow-hidden">
                    <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,0.03)" strokeWidth="8" fill="none" />
                      {/* Active path */}
                      <motion.circle 
                        cx="50" 
                        cy="50" 
                        r="42" 
                        stroke="#3b82f6" 
                        strokeWidth="8" 
                        fill="none" 
                        strokeDasharray="263.8"
                        initial={{ strokeDashoffset: 263.8 }}
                        whileInView={{ strokeDashoffset: 263.8 * (1 - 0.942) }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: 'easeOut' }}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center mt-3">
                      <span className="text-3xl font-black text-white leading-none">94.2%</span>
                      <span className="text-[9px] font-extrabold text-white/50 uppercase tracking-widest mt-1">SLA MET</span>
                    </div>
                  </div>

                  {/* Micro stats cards */}
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center py-2 px-3 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                      <span className="text-xs text-white/60 font-bold">Tracked Tasks</span>
                      <span className="text-sm font-black text-white font-mono">48</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                      <span className="text-xs text-white/60 font-bold">SLA Breaches</span>
                      <span className="text-sm font-black text-blue-400 font-mono">0</span>
                    </div>
                    <div className="flex justify-between items-center py-2 px-3 bg-white/[0.02] border border-white/[0.04] rounded-xl">
                      <span className="text-xs text-white/60 font-bold">Warnings Fired</span>
                      <span className="text-sm font-black text-blue-400 font-mono">1</span>
                    </div>
                  </div>

                </div>

                {/* Live Ticket Monitors (Right Side of mockup) */}
                <div className="md:col-span-7 flex flex-col gap-4">
                  <span className="text-xs font-mono font-black text-white/40 uppercase tracking-wider block">Active SLA Monitors</span>
                  
                  {activeTickets.map((t, idx) => {
                    const isSelected = activeTicket === idx;
                    
                    return (
                      <div
                        key={t.id}
                        onClick={() => setActiveTicket(idx)}
                        className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col gap-2.5 relative ${
                          isSelected 
                            ? 'bg-blue-500/10 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)] scale-[1.01]' 
                            : 'bg-white/[0.02] border-white/5 hover:border-white/10 hover:bg-white/[0.04]'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono font-extrabold text-blue-400">{t.id}</span>
                            <span className={`text-[9px] font-black uppercase px-2 py-0.5 rounded ${
                              t.priority === 'Highest' 
                                ? 'bg-red-500/15 text-red-400' 
                                : t.priority === 'High' 
                                ? 'bg-orange-500/15 text-orange-400' 
                                : 'bg-blue-500/15 text-blue-400'
                            }`}>{t.priority}</span>
                          </div>
                          <span className="text-[10px] font-mono font-black flex items-center gap-1 text-blue-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                            {t.timeLeft}
                          </span>
                        </div>

                        <h4 className="text-white font-bold text-xs truncate">{t.title}</h4>

                        <div className="flex items-center justify-between text-[9px] font-mono text-white/50">
                          <span>{t.slaType}</span>
                          <span className="text-white/80 font-black">{t.status}</span>
                        </div>

                        {/* Visual Progress Bar */}
                        <div className="h-1 bg-black/40 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-blue-500 transition-all duration-500"
                            style={{ width: `${t.pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}

                </div>

              </div>

              {/* Live activity feed bar */}
              <div className="flex items-center gap-3 px-6 py-4 border-t border-white/5 bg-black/20 text-[11px] font-mono text-white/55">
                <Bell size={13} className="text-blue-400 shrink-0 animate-bounce" />
                <div className="truncate flex-1">
                  <span className="text-white/80 font-bold">Activity:</span> Warning alert triggered for TSK-104. Priority raised to Highest.
                </div>
                <span className="text-[10px] text-white/30 shrink-0 font-bold">Just Now</span>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
