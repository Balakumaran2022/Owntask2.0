import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

export default function CTA({ onOpenDemo }) {
  return (
    <section id="cta" className="relative py-16 lg:py-24 bg-transparent overflow-hidden">
      {/* Background ambient glow outside card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="container mx-auto px-5 max-w-[1100px] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[1.75rem] md:rounded-[2.5rem] bg-[#070714]/80 border border-primary/20 p-6 py-8 md:p-14 text-center overflow-hidden shadow-[0_0_80px_rgba(99,102,241,0.08)]"
        >
          {/* Internal ambient glow */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center max-w-[800px] mx-auto">
            {/* Headline */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-sans font-black tracking-tight leading-tight mb-3 text-[#F1F5F9]">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Task Management?</span>
            </h2>
            
            {/* Subheading */}
            <p className="text-primary/60 text-xs md:text-base max-w-2xl mx-auto leading-relaxed mb-6 md:mb-8 font-medium">
              Trusted by businesses automating their projects, workflows, and SLAs with ownTask.
            </p>
            
            {/* Buttons Row */}
            <div className="flex flex-col sm:flex-row items-center gap-3.5 justify-center mb-6 md:mb-8 w-full sm:w-auto">
              {/* Start Free Trial Button */}
              <motion.a
                href="https://workspace.ownchat.app/signup"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(99,102,241,0.5)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-primary text-white transition-all shadow-[0_0_20px_rgba(99,102,241,0.35)] no-underline w-full sm:w-auto border-none cursor-pointer"
              >
                Start Free Trial
                <ArrowRight size={16} className="stroke-[2.5]" />
              </motion.a>
              
              {/* Book a Demo Button */}
              <motion.button
                onClick={onOpenDemo}
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)' }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-center px-8 py-3.5 rounded-xl font-bold text-sm bg-[#131328]/80 text-[#F1F5F9] border border-white/10 transition-all cursor-pointer w-full sm:w-auto"
              >
                Book a Demo
              </motion.button>
            </div>
            
            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-primary/50 font-bold tracking-wide">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-success" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={15} className="text-primary" />
                <span>14-day free trial</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
