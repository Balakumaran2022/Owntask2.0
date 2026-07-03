import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CTA() {
  return (
    <section id="cta" className="relative py-24 lg:py-32 bg-gradient-to-b from-transparent via-[#0A0A18]/50 to-[#0A0A18] overflow-hidden border-t border-white/5">
      {/* Background glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[700px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#34d399]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-[#8b5cf6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center max-w-[860px] mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#34d399] animate-pulse" />
            Free to get started — no commitment
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-6"
          >
            <span className="text-white">Your team deserves better than </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">spreadsheets.</span>
          </motion.h2>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Set up ownTask in minutes. Import your existing tasks via CSV. No migration headaches.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.28 }}
            className="flex flex-col items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(52,211,153,0.35)' }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-10 py-4 font-black text-lg rounded-2xl cursor-pointer border-none transition-all text-[#050e09]"
              style={{ background: 'linear-gradient(135deg, #34d399 0%, #6366f1 100%)', boxShadow: '0 0 20px rgba(52,211,153,0.2)' }}
            >
              Start Free — No Credit Card Required
              <ArrowRight size={20} className="stroke-[3]" />
            </motion.button>

            {/* Trust badges */}
            <div className="flex items-center gap-6 flex-wrap justify-center mt-2">
              {[
                'No credit card required',
                '15-minute setup',
                'CSV import ready',
              ].map((item, i) => (
                <span key={i} className="flex items-center gap-2 text-xs text-white/45 font-medium">
                  <CheckCircle2 size={14} className="text-[#34d399]" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
