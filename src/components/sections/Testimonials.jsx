import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "ownTask's SLA tracking helped us cut overdue tickets by 60% in the first month. The status-based SLA alerts are something we've never seen in other tools.",
    role: "Operations Manager",
    company: "SaaS Company"
  },
  {
    quote: "The audit trail is the reason we chose ownTask. We can trace every change, every status update, every assignment — which is critical for our compliance reporting.",
    role: "IT Manager",
    company: "FinTech Company"
  },
  {
    quote: "Recurring tasks with skip-weekends changed how our support team works. We no longer think about creating tasks — they just appear, assigned, with checklists ready.",
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
    <section className="relative z-10 py-20 lg:py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[2.75rem] tracking-tight pb-2 font-sans font-black"
          >
            <span className="text-white">Trusted by </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">teams</span>
          </motion.h2>
        </div>

        {/* Cards */}
        <motion.div
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          {testimonials.map((t, idx) => (
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

              {/* Quote icon + stars */}
              <div className="flex items-center justify-between">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#34d399]/15 to-[#8b5cf6]/10 flex items-center justify-center border border-[#34d399]/20 shadow-[0_0_20px_rgba(52,211,153,0.1)] group-hover:shadow-[0_0_28px_rgba(52,211,153,0.25)] transition-all duration-300">
                  <Quote size={22} className="text-[#34d399] group-hover:text-white transition-colors duration-300" />
                </div>
                <div className="flex gap-1">
                  {[1,2,3,4,5].map(i => (
                    <Star key={i} size={15} className="fill-[#34d399] text-[#34d399]" />
                  ))}
                </div>
              </div>

              {/* Quote text */}
              <p className="text-white/60 text-base leading-relaxed italic group-hover:text-white/80 transition-colors duration-300 flex-1">
                "{t.quote}"
              </p>

              {/* Divider + author */}
              <div className="border-t border-white/[0.06] pt-5 flex flex-col gap-1">
                <span className="text-white font-bold text-base group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#34d399] group-hover:to-[#8b5cf6] transition-all duration-300">{t.role}</span>
                <span className="text-[#8b5cf6] text-sm font-bold tracking-wide uppercase">{t.company}</span>
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
