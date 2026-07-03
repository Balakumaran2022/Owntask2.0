import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, CheckSquare, BarChart3 } from 'lucide-react';

const steps = [
  {
    number: "1",
    icon: FolderKanban,
    title: "Create Projects & Subjects",
    desc: "Name your project, pick a board type (Task or Ticket Board), configure defaults: priority, SLA hours per priority level, auto-assignee, reminder timing, and default checklist. Your workflow is set once — applied to every task automatically."
  },
  {
    number: "2",
    icon: CheckSquare,
    title: "Assign & Track Tasks",
    desc: "Every task gets a readable ID (TSK-XXXXXXXX). Assign to agents or teams — with round-robin distribution built in. Add subtasks, checklist items, file attachments, custom fields, watchers, and tags. Push notifications fire automatically."
  },
  {
    number: "3",
    icon: BarChart3,
    title: "See the Full Picture",
    desc: "The analytics dashboard shows real-time completion rate, on-time %, overdue count, and SLA compliance. Drill into team performance to see who's ahead and who needs support. Project health updates automatically."
  }
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-20 lg:py-32 overflow-hidden bg-transparent">
      <div className="container mx-auto px-5 md:px-8 max-w-[1240px]">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-[2.75rem] tracking-tight pb-2 font-serif font-black"
            style={{ fontFamily: '"Playfair Display", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif' }}
          >
            <span className="text-white">How </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">ownTask</span>
            <span className="text-white"> works</span>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Dashed line connecting steps (Desktop only) */}
          <div className="hidden md:block absolute top-[44px] left-[16%] right-[16%] h-[2px] border-t-[3px] border-dashed border-primary/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: idx * 0.2, duration: 0.6 }}
                className="flex flex-col items-center text-center relative group"
              >
                {/* Number Circle */}
                <div className="w-[88px] h-[88px] rounded-full bg-[#0D0D1C] border-[3px] border-[#13132B] flex items-center justify-center mb-8 relative shadow-lg group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.25)] transition-all duration-500">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />
                  <span className="text-2xl font-black text-white relative z-10">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex items-center gap-3 mb-4 text-white">
                  <step.icon size={22} className="text-[#34d399]" />
                  <h3 className="text-xl font-bold">{step.title}</h3>
                </div>

                <p className="text-muted-foreground leading-relaxed text-[0.95rem] max-w-[340px]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
