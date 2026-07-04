import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Timer, Repeat } from 'lucide-react';

const differentiators = [
  {
    icon: Layers,
    iconColor: 'text-primary',
    title: 'Project Intelligence',
    description: 'Not just lists. Full hierarchy: Organisation → Project → Subject → Task. Choose Task Board for project work or Ticket Board for support pipelines. Each project gets its own SLA rules, workflows, and team access.',
  },
  {
    icon: Timer,
    iconColor: 'text-emerald-400',
    title: 'SLA That Actually Works',
    description: 'Two levels of SLA enforcement: set an absolute deadline, and set how long a task can stay in any given status. Get alerted before breach — not after. Track compliance rate per project, per team, per person.',
  },
  {
    icon: Repeat,
    iconColor: 'text-orange-400',
    title: 'Recurring Without Rethinking',
    description: 'Daily, weekly, monthly, yearly, or fully custom recurrence. Skip weekends. Skip holidays. Set end conditions. Instances auto-generate with dynamic due dates — no manual work, no missed repeats.',
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function Differentiators() {
  return (
    <section id="differentiators" className="relative z-10 pt-10 pb-20 lg:pt-14 lg:pb-28 overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">
        <div className="text-center mb-16 md:mb-20 flex justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[2.75rem] tracking-tight pb-2 font-sans font-black"
          >
            <span className="text-white">Enterprise </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Capabilities</span>
          </motion.h2>
        </div>

        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {differentiators.map((item, idx) => (
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
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#34d399]/[0.04] to-[#8b5cf6]/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Glow blob */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#34d399]/15 to-[#8b5cf6]/10 flex items-center justify-center border border-[#34d399]/20 shadow-[0_0_20px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_28px_rgba(52,211,153,0.25)] transition-all duration-300">
                <item.icon size={24} className={`${item.iconColor} group-hover:text-white transition-colors duration-300`} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-xl leading-snug group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#34d399] group-hover:to-[#8b5cf6] transition-all duration-300">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-white/50 text-base leading-relaxed group-hover:text-white/70 transition-colors duration-300">
                {item.description}
              </p>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
