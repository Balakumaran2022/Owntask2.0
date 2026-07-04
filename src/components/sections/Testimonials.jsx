import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';

const testimonials = [
  {
    quote: "ownTask's SLA tracking helped us cut overdue tickets by 60% in the first month. The status-based SLA alerts are something we've never seen in other tools.",
    name: "Sarah Jenkins",
    role: "Operations Manager",
    company: "SaaS Company"
  },
  {
    quote: "The audit trail is the reason we chose ownTask. We can trace every change, every status update, every assignment — which is critical for our compliance reporting.",
    name: "Michael Chang",
    role: "IT Manager",
    company: "FinTech Company"
  },
  {
    quote: "Recurring tasks with skip-weekends changed how our support team works. We no longer think about creating tasks — they just appear, assigned, with checklists ready.",
    name: "Jessica Rivera",
    role: "Support Lead",
    company: "E-Commerce Brand"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1 }
};

export default function Testimonials() {
  return (
    <section className="relative z-10 py-20 lg:py-28 overflow-hidden bg-transparent">
      {/* Glow blobs */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1420px] relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 via-purple-500/15 to-primary/15 border border-primary/30 text-primary text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.25)]"
          >
            <Sparkles size={14} className="animate-pulse text-amber-400" />
            <span>Customer Stories</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-sans font-extrabold mb-4"
          >
            <span className="text-white">Loved by modern </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] via-indigo-300 to-[#8b5cf6]">business teams.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/65 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium"
          >
            See how organizations across SaaS, FinTech, and E-Commerce rely on ownTask to streamline operations and enforce SLAs.
          </motion.p>
        </div>

        {/* 3 Cards in a Row (Modern Glassmorphic UI) */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-7 md:p-8 rounded-3xl bg-[#13122b]/90 border border-white/20 hover:border-primary/60 hover:bg-[#1a1838] transition-all duration-300 flex flex-col justify-between gap-6 cursor-default overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.65)] backdrop-blur-xl w-full"
            >
              {/* Glowing top accent line */}
              <div className="absolute top-0 left-8 right-8 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/[0.08] via-transparent to-emerald-500/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              {/* Glow blob */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="flex flex-col gap-5 relative z-10">
                {/* Quote icon + 5 Star Rating */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/30 to-indigo-600/30 flex items-center justify-center border border-primary/40 shadow-[0_0_20px_rgba(99,102,241,0.3)] group-hover:scale-110 group-hover:from-primary group-hover:to-purple-600 transition-all duration-300 shrink-0">
                    <Quote size={20} className="text-white group-hover:scale-105 transition-transform" />
                  </div>
                  
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full border border-white/15 shadow-inner">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star key={i} size={15} className="fill-[#34d399] text-[#34d399] drop-shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                    ))}
                  </div>
                </div>

                {/* Quote text */}
                <p className="text-white/90 text-base md:text-lg leading-relaxed italic group-hover:text-white transition-colors duration-300">
                  "{t.quote}"
                </p>
              </div>

              {/* Divider + Name, Role, Company Type */}
              <div className="border-t border-white/15 pt-5 flex flex-col gap-1.5 relative z-10 mt-auto">
                <h4 className="text-white font-black text-lg md:text-xl tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                  {t.name}
                </h4>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-primary font-bold text-xs md:text-sm tracking-wide">{t.role}</span>
                  <span className="text-white/40 font-bold">·</span>
                  <span className="text-emerald-400 font-mono font-bold text-xs bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 shadow-sm uppercase">
                    {t.company}
                  </span>
                </div>
              </div>

              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
