import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

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
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Glow lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-5"
          >
            <span className="text-white">Frequently Asked </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.18 }}
            className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Everything you need to know about how ownTask operates and adapts to your workflow.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="rounded-2xl border transition-all duration-300 overflow-hidden bg-white/[0.01] border-white/[0.05] hover:border-white/10"
                style={{ 
                  backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.01)',
                  boxShadow: isOpen ? '0 8px 32px rgba(0, 0, 0, 0.2)' : 'none'
                }}
              >
                {/* Header Question Trigger */}
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 md:py-6 flex items-center justify-between text-left gap-4 cursor-pointer bg-transparent border-none"
                >
                  <span className={`font-bold text-base md:text-lg transition-colors duration-200 ${
                    isOpen ? 'text-white' : 'text-white/70'
                  }`}>
                    {faq.question}
                  </span>
                  
                  {/* Expand/Collapse Icon */}
                  <div className={`w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 shrink-0 transition-all duration-300 ${
                    isOpen ? 'rotate-180 border-primary/20 text-primary' : 'text-white/30'
                  }`}>
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                  </div>
                </button>

                {/* Answer Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 md:pb-7 text-sm md:text-base text-white/50 leading-relaxed border-t border-white/[0.03] pt-4">
                        {faq.answer}
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
