import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Target, Zap, Eye, Sparkles, ShieldCheck, Server, Heart, MessageCircle, CheckSquare, ShoppingCart, Gift } from 'lucide-react';

export default function About() {
  useEffect(() => {
    document.title = "About ownTask — Built by iEyal Solutions";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { 
      m = document.createElement('meta'); 
      m.name = "description"; 
      document.head.appendChild(m); 
    }
    m.content = "ownTask is built by iEyal Solutions — a software company dedicated to focused, practical tools for growing businesses. Learn our story and mission.";
  }, []);

  return (
    <div className="relative z-10 w-full bg-transparent py-20 lg:py-32 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-bold uppercase tracking-widest mb-6 shadow-xl backdrop-blur-md"
          >
            <Code size={14} className="text-primary" />
            <span>Built by iEyal Solutions</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-8"
          >
            We build software that works the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">way your team does.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed max-w-3xl mx-auto space-y-6 text-justify"
          >
            <p>
              <strong className="text-white">iEyal Solutions</strong> is a software company that builds focused, practical products for growing businesses. We don't build bloated enterprise suites with features no one uses. We build tools that solve real problems, work reliably at scale, and feel good to use every day.
            </p>
            <p>
              ownTask was born from a real frustration: managing customer-facing tasks inside support workflows with no SLA visibility, no recurring automation, and no accountability trail. We built ownTask to fix that — and kept building until it was the most complete task management platform we'd ever seen for business teams.
            </p>
          </motion.div>
        </div>

        {/* Mission / Story Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Target className="text-emerald-400" size={24} />,
              title: "Our Mission",
              desc: "To give every business team the visibility, accountability, and automation they need to do their best work."
            },
            {
              icon: <Eye className="text-sky-400" size={24} />,
              title: "Our Vision",
              desc: "A world where no task is missed, no SLA is breached silently, and no team member is left without clarity on what they own."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white/[0.02] border border-white/[0.05] rounded-3xl p-8 hover:bg-white/[0.04] transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.05] flex items-center justify-center mb-6 shadow-inner">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spacer before Values */}
        <div className="w-full py-16 md:py-24" />

        {/* Our Values Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Our Values</h2>
          <p className="text-white/50 text-lg">The core principles that drive every feature we build.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Sparkles className="text-pink-400" size={24} />,
              title: "Simplicity",
              desc: "Powerful features shouldn't require a manual. Everything in ownTask has an obvious purpose and a clear outcome."
            },
            {
              icon: <ShieldCheck className="text-emerald-400" size={24} />,
              title: "Accountability",
              desc: "The audit trail, the SLA system, the approval workflow — these aren't enterprise extras. They're the core. Every action is traceable."
            },
            {
              icon: <Server className="text-violet-400" size={24} />,
              title: "Reliability",
              desc: "Built for scale. Multi-tenant from day one. Role-based access at every level. Your data stays yours."
            },
            {
              icon: <Heart className="text-rose-400" size={24} />,
              title: "Team-First",
              desc: "We build for the people doing the work, not just the people watching the dashboards. Round-robin, push notifications, reminders — all for the doers."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="bg-white/[0.015] border border-white/[0.04] rounded-3xl p-7 hover:bg-white/[0.03] hover:border-white/[0.08] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Spacer before Ecosystem */}
        <div className="w-full py-16 md:py-24" />

        {/* Product Ecosystem Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">Part of a bigger picture.</h2>
          <p className="text-white/50 text-lg">ownTask is one of four products built by iEyal Solutions for modern businesses.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              id: 'ownchat',
              icon: <MessageCircle className="text-cyan-400" size={24} />,
              title: "ownChat",
              badge: null,
              desc: "Multi-channel chatbot automation. WhatsApp, Instagram, and beyond. Workflow builder, AI agents, analytics.",
              color: "border-cyan-400/30",
              bg: "bg-cyan-400/[0.04]"
            },
            {
              id: 'owntask',
              icon: <CheckSquare className="text-primary" size={24} />,
              title: "ownTask",
              badge: "You are here",
              desc: "Enterprise task and project management. SLA, recurring, approval workflow, analytics.",
              color: "border-primary/50 shadow-[0_0_40px_rgba(139,92,246,0.15)]",
              bg: "bg-primary/[0.06]"
            },
            {
              id: 'owncart',
              icon: <ShoppingCart className="text-emerald-400" size={24} />,
              title: "ownCart",
              badge: null,
              desc: "Smart cart and order management for e-commerce and POS-connected businesses.",
              color: "border-emerald-400/30",
              bg: "bg-emerald-400/[0.04]"
            },
            {
              id: 'ownrewards',
              icon: <Gift className="text-amber-400" size={24} />,
              title: "ownRewards",
              badge: null,
              desc: "Loyalty engine. Points, referrals, redemption rules, tiered rewards, and ROI analytics.",
              color: "border-amber-400/30",
              bg: "bg-amber-400/[0.04]"
            }
          ].map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className={`relative bg-white/[0.015] border ${item.color} rounded-3xl p-7 hover:bg-white/[0.03] transition-all duration-300 group`}
            >
              {item.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-[10px] font-extrabold tracking-widest uppercase shadow-lg shadow-primary/30">
                  {item.badge}
                </div>
              )}
              <div className={`w-12 h-12 rounded-2xl ${item.bg} border ${item.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
