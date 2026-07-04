import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, Sparkles } from 'lucide-react';

const faqs = [
  {
    question: "Can I import tasks from Jira, Asana, or Trello?",
    answer: "Yes. Use our CSV bulk upload to import tasks. Rows with missing fields go into Draft state so you can fix and promote them without losing data."
  },
  {
    question: "Do subtasks count against task or project limits?",
    answer: "No. Only parent tasks count against limits. Subtasks are unlimited within any parent task."
  },
  {
    question: "Is the approval workflow suitable for compliance-sensitive environments?",
    answer: "Yes. Approval status (none → pending → approved), requester, approver, and timestamps are all stored and included in the immutable audit trail."
  },
  {
    question: "Can I set different SLA hours for different priority levels?",
    answer: "Yes. At the project level, you can configure SLA hours separately for Highest, High, Normal, Low, and Lowest priority tasks."
  },
  {
    question: "What happens when a recurring task is missed?",
    answer: "The system tracks overDueMailSent and slaBreached on instances. Missed instances appear in the overdue analytics immediately. The next instance still generates on schedule."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Default open first question for better UX

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent font-sans">
      {/* Ambient glow blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[600px] h-[400px] bg-purple-600/[0.06] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 via-purple-500/15 to-primary/15 border border-primary/25 text-primary text-xs font-black uppercase tracking-widest shadow-[0_0_20px_rgba(99,102,241,0.2)]"
          >
            <Sparkles size={14} className="animate-pulse text-amber-400" />
            <span>Got Questions?</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight font-extrabold mb-5 text-white"
          >
            Frequently Asked{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-300 to-purple-400">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about how ownTask operates and adapts to your workflow.
          </motion.p>
        </div>

        {/* Accordion Cards */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.07 }}
                className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? 'bg-gradient-to-br from-[#181636] via-[#13122b] to-[#1c1a3e] border-primary/60 shadow-[0_20px_60px_rgba(99,102,241,0.35)] scale-[1.01]'
                    : 'bg-[#13122b]/90 backdrop-blur-xl border-white/20 hover:border-primary/50 hover:bg-[#1a1838] shadow-lg hover:shadow-2xl'
                }`}
              >
                {/* Header Question Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left gap-4 cursor-pointer bg-transparent border-none focus:outline-none"
                >
                  <div className="flex items-center gap-4 md:gap-5 flex-1">
                    {/* Number Badge */}
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-mono font-black text-xs md:text-sm shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gradient-to-br from-primary to-purple-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-105' 
                        : 'bg-white/10 border border-white/15 text-white/80 group-hover:border-primary/50 group-hover:text-primary group-hover:bg-primary/10 shadow-sm'
                    }`}>
                      0{idx + 1}
                    </div>

                    {/* Question Text */}
                    <span className={`font-extrabold text-base md:text-lg transition-colors duration-200 leading-snug ${
                      isOpen ? 'text-white' : 'text-white/90 group-hover:text-white'
                    }`}>
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Expand/Collapse Icon */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${
                    isOpen 
                      ? 'bg-primary/20 text-primary border border-primary/40 rotate-180 shadow-[0_0_15px_rgba(99,102,241,0.3)]' 
                      : 'bg-white/[0.03] border border-white/[0.08] text-white/40 group-hover:bg-white/[0.08] group-hover:text-white'
                  }`}>
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-7 pt-1 flex gap-4 md:gap-5">
                        <div className="w-1 rounded-full bg-gradient-to-b from-primary via-indigo-400 to-purple-500 shrink-0 opacity-80 ml-5" />
                        <p className="text-sm md:text-base text-white/70 leading-relaxed font-medium pr-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
