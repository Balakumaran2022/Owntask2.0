import React from 'react';
import { motion } from 'framer-motion';
import {
  Hash, CheckSquare, Paperclip, Tag, Star, Link2,
  LayoutGrid, Users, Settings2, Activity, RefreshCw, Shuffle
} from 'lucide-react';

const features = [
  {
    icon: Hash,
    emoji: "🗂️",
    title: "Auto Readable Task IDs",
    desc: "Every task gets a unique human-readable ID — ",
    code: "TSK-7A9B2C1D",
    descEnd: " — auto-generated on creation. Reference tasks in emails, chats, and reports without confusion or copy-paste errors.",
    color: "from-blue-500/20 to-indigo-500/10",
    border: "border-blue-500/20",
    icon_color: "text-blue-400"
  },
  {
    icon: CheckSquare,
    emoji: "✅",
    title: "Checklists with Completion Tracking",
    desc: "Add sub-step checklists to any task. Each item tracks: completion status, who completed it, and when. Default checklists can be set at the project or subject level — applied automatically to new tasks.",
    color: "from-emerald-500/20 to-teal-500/10",
    border: "border-emerald-500/20",
    icon_color: "text-emerald-400"
  },
  {
    icon: Paperclip,
    emoji: "🔗",
    title: "File Attachments",
    desc: "Attach files directly to tasks. The system tracks file name, type, size, upload timestamp, and who uploaded — all retrievable through the audit trail. Full file history, always.",
    color: "from-violet-500/20 to-purple-500/10",
    border: "border-violet-500/20",
    icon_color: "text-violet-400"
  },
  {
    icon: Tag,
    emoji: "🏷️",
    title: "Tags & Task Watchers",
    desc: "Tag tasks for custom grouping and cross-board searching. Add watchers to keep stakeholders informed without giving them ownership. Watchers receive updates but aren't responsible for completion.",
    color: "from-amber-500/20 to-orange-500/10",
    border: "border-amber-500/20",
    icon_color: "text-amber-400"
  },
  {
    icon: Star,
    emoji: "⭐",
    title: "5-Level Priority System",
    desc: "Highest · High · Normal · Low · Lowest — with an automatic numeric ",
    code: "priorityRank",
    descEnd: " calculated behind the scenes. Tasks sort intelligently, and SLA hours can be configured per priority level per project.",
    color: "from-yellow-500/20 to-amber-500/10",
    border: "border-yellow-500/20",
    icon_color: "text-yellow-400"
  },
  {
    icon: Link2,
    emoji: "🔗",
    title: "Customer Record Linking",
    desc: "Link any task to a customer record. Support teams can create and track customer-facing tasks directly from conversation context — bridging task management with customer data.",
    color: "from-cyan-500/20 to-blue-500/10",
    border: "border-cyan-500/20",
    icon_color: "text-cyan-400"
  },
  {
    icon: LayoutGrid,
    emoji: "📋",
    title: "Dual Board Types",
    desc: "Choose Task Board for project-style work or Ticket Board for support/helpdesk pipelines. Ticket boards unlock escalation configuration: auto-escalate to a senior team after a defined number of hours.",
    color: "from-pink-500/20 to-rose-500/10",
    border: "border-pink-500/20",
    icon_color: "text-pink-400"
  },
  {
    icon: Users,
    emoji: "👥",
    title: "Role-Based Access Control",
    desc: "Project roles: Owner / Admin / Member / Teammate. Project visibility: Open (everyone in the org) or Restricted (only specified users or teams). Restricted members see only their own tasks.",
    color: "from-teal-500/20 to-emerald-500/10",
    border: "border-teal-500/20",
    icon_color: "text-teal-400"
  },
  {
    icon: Settings2,
    emoji: "📌",
    title: "Project Defaults & Smart Presets",
    desc: "Set project-level defaults: default priority, default SLA hours per priority, default assignee team, auto-reminders, and default checklists. Every task created in the project inherits these — no repeated setup.",
    color: "from-indigo-500/20 to-violet-500/10",
    border: "border-indigo-500/20",
    icon_color: "text-indigo-400"
  },
  {
    icon: Activity,
    emoji: "🔧",
    title: "Project Timeline & Health Cache",
    desc: "Every project tracks its own health automatically: total tasks, completed, overdue, SLA breached count, completion rate, SLA compliance rate. Set a project start and target date. Health updates in real time.",
    color: "from-green-500/20 to-emerald-500/10",
    border: "border-green-500/20",
    icon_color: "text-green-400"
  },
  {
    icon: RefreshCw,
    emoji: "🔄",
    title: "Recurring Task Engine",
    desc: "Daily, weekly, monthly, yearly, or fully custom. Skip weekends. Skip holidays. Configure end conditions: never, after N occurrences, or by a specific date. Instances generate automatically with dynamic due dates.",
    color: "from-orange-500/20 to-amber-500/10",
    border: "border-orange-500/20",
    icon_color: "text-orange-400"
  },
  {
    icon: Shuffle,
    emoji: "🤖",
    title: "Round-Robin Team Assignment",
    desc: "When a task is assigned to a team, the system automatically distributes it in round-robin order across team members. No manual load balancing. No favouritism. Equitable distribution, always.",
    color: "from-purple-500/20 to-pink-500/10",
    border: "border-purple-500/20",
    icon_color: "text-purple-400"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative z-10 pt-10 pb-24 lg:pt-14 lg:pb-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">

        {/* Hero Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            12 Core Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] font-sans font-extrabold tracking-tight leading-tight mb-6"
          >
            <span className="text-white">Every feature your team needs.</span><br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Nothing they don't.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed font-normal not-italic"
          >
            A complete business task management platform — not a glorified to-do list.
          </motion.p>
        </div>

        {/* 12-Card Grid */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative p-9 rounded-3xl bg-[#0D0D1C]/80 border border-white/[0.06] backdrop-blur-md flex flex-col gap-5 cursor-default overflow-hidden"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
            >
              {/* Glowing top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#34d399]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#34d399]/[0.04] to-[#8b5cf6]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Glow blob */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: [0, -8, 8, 0] }}
                transition={{ duration: 0.4 }}
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#34d399]/15 to-[#8b5cf6]/10 flex items-center justify-center border border-[#34d399]/20 shadow-[0_0_20px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_28px_rgba(52,211,153,0.25)] transition-all duration-300"
              >
                <f.icon size={24} className="text-[#34d399] group-hover:text-white transition-colors duration-300" />
              </motion.div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#34d399] group-hover:to-[#8b5cf6] transition-all duration-300">
                {f.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {f.desc}
                {f.code && (
                  <code className="text-xs font-mono bg-white/10 text-white/80 px-1.5 py-0.5 rounded mx-0.5">{f.code}</code>
                )}
                {f.descEnd}
              </p>

              {/* Card number badge */}
              <div className="absolute top-5 right-6 text-sm text-white/10 font-black font-mono group-hover:text-[#34d399]/30 transition-colors duration-300">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
