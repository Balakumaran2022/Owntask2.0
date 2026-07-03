import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Hash, 
  Calendar, 
  List, 
  Globe, 
  Lock, 
  CheckCircle2, 
  ChevronRight,
  GitPullRequest,
  Briefcase,
  Users,
  Settings
} from 'lucide-react';

export default function CustomFields() {
  const [selectedSubject, setSelectedSubject] = useState('bug'); // 'bug', 'hr', 'client'

  const subjects = {
    bug: {
      name: 'Bug Tracker',
      desc: 'Software development tracking pipelines',
      color: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/20 text-emerald-400',
      fields: [
        { label: 'Severity', type: 'DROPDOWN', val: 'Critical', icon: List, typeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
        { label: 'Browser', type: 'TEXT', val: 'Chrome v124', icon: FileText, typeColor: 'text-blue-400 bg-blue-400/10 border-blue-500/20' },
        { label: 'PR Link', type: 'URL', val: 'github.com/owntask/pull/842', icon: Globe, typeColor: 'text-pink-400 bg-pink-400/10 border-pink-500/20' },
      ]
    },
    hr: {
      name: 'HR Request',
      desc: 'Internal personnel onboarding and reviews',
      color: 'from-violet-500/20 to-purple-500/10 border-violet-500/20 text-violet-400',
      fields: [
        { label: 'Department', type: 'DROPDOWN', val: 'Engineering', icon: List, typeColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
        { label: 'Requester Name', type: 'TEXT', val: 'John Doe', icon: FileText, typeColor: 'text-blue-400 bg-blue-400/10 border-blue-500/20' },
        { label: 'Approval Level', type: 'NUMBER', val: 'L3 Lead', icon: Hash, typeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20' },
      ]
    },
    client: {
      name: 'Client Project',
      desc: 'External account delivery workflows',
      color: 'from-pink-500/20 to-rose-500/10 border-pink-500/20 text-pink-400',
      fields: [
        { label: 'Client Name', type: 'TEXT', val: 'Acme Corp', icon: FileText, typeColor: 'text-blue-400 bg-blue-400/10 border-blue-500/20' },
        { label: 'Budget', type: 'NUMBER', val: '$12,500', icon: Hash, typeColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20' },
        { label: 'Design File URL', type: 'URL', val: 'figma.com/file/owntask-design', icon: Globe, typeColor: 'text-pink-400 bg-pink-400/10 border-pink-500/20' },
      ]
    }
  };

  const currentSubject = subjects[selectedSubject];

  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[500px] h-[300px] bg-violet-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Split Layout: Description Left, UI Simulator Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Description content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Section Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-emerald-500/30 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold tracking-wide self-start"
            >
              <Settings size={13} className="animate-pulse" />
              <span>Extensible Data Architecture</span>
            </motion.div>

            {/* Section Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-6"
            >
              <span className="text-white">Every business has unique data. </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">ownTask adapts.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="text-white/55 text-base md:text-lg mb-8 leading-relaxed"
            >
              Custom fields are defined per subject — your pipeline type determines which fields appear. Every field is fully typed, structured, and configured for consistent rendering across your team's workspace:
            </motion.p>

            {/* Bullet List */}
            <div className="flex flex-col gap-4 mb-8">
              {[
                { title: 'Typed System', desc: 'Text, number, date, dropdowns, links, and more.' },
                { title: 'Required Validation', desc: 'Mark fields as mandatory or optional to enforce proper data hygiene.' },
                { title: 'Default Values & Hints', desc: 'Provide sensible presets and helpful hint texts for users.' },
                { title: 'Consistent Render Order', desc: 'Order fields sequentially to build predictable, logical forms.' },
              ].map((bullet, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="w-5 h-5 rounded-md bg-emerald-500/10 flex items-center justify-center mt-1 shrink-0 group-hover:scale-105 transition-transform border border-emerald-500/20">
                    <CheckCircle2 size={13} className="text-[#34d399]" />
                  </div>
                  <div>
                    <h4 className="text-white/80 font-bold text-sm leading-snug">{bullet.title}</h4>
                    <p className="text-white/45 text-xs mt-0.5 leading-relaxed">{bullet.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Performance highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-center gap-3.5"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 flex items-center justify-center border border-indigo-500/20">
                <CheckCircle2 size={18} className="text-primary" />
              </div>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                Values are stored directly on the task record for fast querying. <span className="text-white font-bold">No relational joins, absolutely no performance slowdowns.</span>
              </p>
            </motion.div>

          </div>

          {/* RIGHT: UI Simulator with field type badges */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[500px] p-6 md:p-8 rounded-[32px] bg-[#0D0D1C]/80 border border-white/[0.06] relative overflow-hidden"
              style={{ boxShadow: '0 12px 40px rgba(0,0,0,0.5)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/[0.02] to-transparent pointer-events-none" />

              {/* Subject Selectors (Pipeline choice tabs) */}
              <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex items-center gap-2 mb-8 border-b border-white/[0.05] pb-5 overflow-x-auto hide-scrollbar" style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                {Object.keys(subjects).map((key) => (
                  <button
                    key={key}
                    onClick={() => setSelectedSubject(key)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all border ${
                      selectedSubject === key 
                        ? 'bg-white/10 text-white border-white/20 shadow-lg' 
                        : 'bg-white/[0.02] text-white/40 border-white/[0.04] hover:text-white/70 hover:bg-white/[0.04]'
                    }`}
                  >
                    {subjects[key].name}
                  </button>
                ))}
              </div>

              {/* Dynamic Task Form Mock */}
              <div className="flex flex-col gap-5 min-h-[300px]">
                
                {/* Static Task Fields Header */}
                <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                  <div>
                    <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">Subject Type</span>
                    <h3 className="text-white font-bold text-base mt-0.5">{currentSubject.name}</h3>
                  </div>
                  <span className="text-xs font-mono text-white/40">{currentSubject.desc}</span>
                </div>

                <div className="flex flex-col gap-4">
                  <span className="text-[9px] font-mono text-white/30 tracking-widest uppercase">Custom Field Variables</span>
                  
                  {/* Custom Fields Morphing Area */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedSubject}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.35, ease: 'easeInOut' }}
                      className="flex flex-col gap-4.5"
                    >
                      {currentSubject.fields.map((field, idx) => (
                        <div key={idx} className="p-4 rounded-2xl bg-[#070711]/60 border border-white/[0.05] flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/[0.06]">
                              <field.icon size={16} className="text-white/60" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-white/70 block leading-snug">{field.label}</span>
                              <span className="text-[11px] text-white/35 font-mono leading-none mt-0.5 block">{field.val}</span>
                            </div>
                          </div>

                          {/* Field Type Badge */}
                          <span className={`px-2.5 py-1 rounded-lg border text-[9px] font-black font-mono tracking-widest uppercase ${field.typeColor}`}>
                            {field.type}
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>

                </div>

              </div>

              {/* Footer info: Values are stored directly on record */}
              <div className="mt-8 pt-5 border-t border-white/[0.05] flex items-center justify-between text-[10px] font-mono text-white/45">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>No Relational Joins</span>
                </div>
                <span>fastQuery: active</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
