import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BookDemoForm from '../../components/forms/BookDemoForm';
import { ArrowRight, CheckCircle2, Users, Clock, Shield } from 'lucide-react';

const perks = [
  { icon: Clock,        text: '15-min personalised walkthrough' },
  { icon: Users,        text: 'For teams of 1 to 500+'          },
  { icon: Shield,       text: 'No credit card required'         },
  { icon: CheckCircle2, text: 'Cancel anytime, no lock-in'      },
];

export default function GetStarted() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="pt-28 pb-24 min-h-[100vh] flex flex-col items-center justify-center bg-transparent relative overflow-hidden">
      {/* Background glow blobs */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-y-1/3 -translate-x-1/3" />

      <div className="container mx-auto px-5 w-full max-w-[820px] relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-8"
        >
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest mb-5">
            Get Early Access
          </span>
          <h1 className="text-foreground text-3xl md:text-4xl font-black mb-3 tracking-tight leading-tight">
            Book your live demo
          </h1>
          <p className="text-muted-foreground text-sm md:text-base mx-auto max-w-[500px] leading-relaxed">
            See OwnTasks in action — a personalised 15-minute walkthrough built around your team's workflow.
          </p>
        </motion.div>

        {/* Perks row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {perks.map(({ icon: Icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/15 text-muted-foreground text-xs font-bold"
            >
              <Icon size={13} className="text-primary shrink-0" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Button → Form toggle */}
        <AnimatePresence mode="wait">
          {!showForm ? (
            /* ── Button state ── */
            <motion.div
              key="btn"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-3"
            >
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px rgba(99,102,241,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setShowForm(true)}
                className="flex items-center gap-2 px-10 py-4 bg-primary text-[#050e09] font-black text-lg rounded-2xl cursor-pointer border-none transition-all"
              >
                Book Demo
                <ArrowRight size={20} className="stroke-[3]" />
              </motion.button>
              <p className="text-[0.7rem] text-muted-foreground tracking-wide">
                No credit card required &nbsp;·&nbsp; 15-minute session &nbsp;·&nbsp; Personalised walkthrough
              </p>
            </motion.div>
          ) : (
            /* ── Form state ── */
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <BookDemoForm />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
