import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  UploadCloud, 
  CheckCircle2, 
  AlertCircle, 
  UserPlus, 
  Sliders, 
  FileSpreadsheet,
  Check,
  ChevronRight,
  Database,
  ArrowUpRight
} from 'lucide-react';

export default function BulkImport() {
  const [selectedAssignee, setSelectedAssignee] = useState('');
  const [draftRowFixed, setDraftRowFixed] = useState(false);
  const [isPromoting, setIsPromoting] = useState(false);
  const [bulkStatus, setBulkStatus] = useState('Draft'); // 'Draft' or 'Active'
  const [selectedCount, setSelectedCount] = useState(148);

  const handlePromote = () => {
    if (!selectedAssignee || draftRowFixed || isPromoting) return;
    setIsPromoting(true);
    setTimeout(() => {
      setIsPromoting(false);
      setDraftRowFixed(true);
      setBulkStatus('Active');
      setSelectedCount(prev => prev + 1);
    }, 2000);
  };

  const handleReset = () => {
    setDraftRowFixed(false);
    setSelectedAssignee('');
    setBulkStatus('Draft');
    setSelectedCount(148);
  };

  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Background glow light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-5"
          >
            <span className="text-white">Handle hundreds of tasks </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">at once.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white/55 text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Import tasks via CSV bulk upload. Rows with missing required fields are automatically placed into <span className="text-white font-bold">Backlog/Draft</span> state — with an automated warning flagging which fields are missing. Fix and promote drafts to active tasks at any time. Bulk update, bulk status change, and bulk assignments are all supported.
          </motion.p>
        </div>

        {/* Browser Mock Wrapper */}
        <div className="max-w-4xl mx-auto">
          <div className="w-full rounded-[32px] overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.65)] relative"
            style={{ background: 'linear-gradient(160deg, #090911 0%, #0d0d1b 100%)' }}
          >
            {/* Chrome Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.05]">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-red-400/40 border border-red-400/60" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-400/40 border border-amber-400/60" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-400/40 border border-emerald-400/60" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                <FileSpreadsheet size={13} className="text-emerald-400" />
                <span className="text-xs font-mono text-white/40">csv_importer_q3_release.csv</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono text-white/30">Rows: 149</span>
                {draftRowFixed && (
                  <button 
                    onClick={handleReset}
                    className="text-[9px] font-mono text-primary hover:text-white transition-colors bg-transparent border-none cursor-pointer"
                  >
                    Reset Demo
                  </button>
                )}
              </div>
            </div>

            {/* Mock Dashboard Layout */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              
              {/* LEFT COLUMN: Import Status & Validation List (col-span-7) */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Upload Validation Summary</span>
                  <span className="text-xs font-bold text-[#34d399] bg-[#34d399]/10 border border-[#34d399]/20 px-2 py-0.5 rounded">
                    {draftRowFixed ? '100% Validated' : 'Issues Found (1)'}
                  </span>
                </div>

                {/* Validated Rows */}
                <div className="flex flex-col gap-3">
                  {[
                    { row: 1, title: 'Database index migration', status: 'Active', desc: 'Valid row structure' },
                    { row: 2, title: 'API Gateway endpoint setup', status: 'Active', desc: 'Valid row structure' },
                    { row: 3, title: 'Client onboarding walkthrough', status: 'Active', desc: 'Valid row structure' }
                  ].map((item) => (
                    <div key={item.row} className="p-3.5 rounded-xl border border-white/[0.03] bg-white/[0.01] flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg bg-[#34d399]/10 border border-[#34d399]/20 flex items-center justify-center text-[#34d399]">
                          <Check size={14} className="stroke-[3]" />
                        </div>
                        <div>
                          <h5 className="text-white/80 font-bold text-xs">Row #{item.row}: {item.title}</h5>
                          <span className="text-[10px] text-white/30 font-mono">{item.desc}</span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[8px] font-bold font-mono tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {item.status}
                      </span>
                    </div>
                  ))}

                  {/* Warning / Draft Row */}
                  <motion.div 
                    animate={{
                      borderColor: draftRowFixed ? 'rgba(255,255,255,0.03)' : 'rgba(239,68,68,0.25)',
                      backgroundColor: draftRowFixed ? 'rgba(255,255,255,0.01)' : 'rgba(239,68,68,0.02)'
                    }}
                    className="p-3.5 rounded-xl border flex items-center justify-between gap-4 relative overflow-hidden transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div 
                        animate={{
                          backgroundColor: draftRowFixed ? 'rgba(52,211,153,0.1)' : 'rgba(239,68,68,0.1)',
                          borderColor: draftRowFixed ? 'rgba(52,211,153,0.2)' : 'rgba(239,68,68,0.2)',
                          color: draftRowFixed ? '#34d399' : '#f87171'
                        }}
                        className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border"
                      >
                        {draftRowFixed ? <Check size={14} className="stroke-[3]" /> : <AlertCircle size={14} />}
                      </motion.div>
                      <div>
                        <h5 className="text-white/80 font-bold text-xs">Row #4: Set up SSL Certs</h5>
                        <AnimatePresence mode="wait">
                          {draftRowFixed ? (
                            <motion.span 
                              key="valid" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }}
                              className="text-[10px] text-white/30 font-mono block mt-0.5"
                            >
                              Validated & promoted
                            </motion.span>
                          ) : (
                            <motion.span 
                              key="invalid" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }}
                              className="text-[10px] text-red-400 font-mono font-bold block mt-0.5"
                            >
                              ⚠️ Missing required field: Assignee
                            </motion.span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Badge */}
                    <motion.span
                      animate={{
                        color: draftRowFixed ? '#34d399' : '#f59e0b',
                        borderColor: draftRowFixed ? 'rgba(52,211,153,0.2)' : 'rgba(245,158,11,0.2)',
                        backgroundColor: draftRowFixed ? 'rgba(52,211,153,0.05)' : 'rgba(245,158,11,0.05)'
                      }}
                      className="px-2 py-0.5 rounded text-[8px] font-bold font-mono tracking-wide border transition-all duration-300"
                    >
                      {draftRowFixed ? 'Active' : 'Draft'}
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Draft Resolution Panel (col-span-5) */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/[0.05] pt-6 lg:pt-0 lg:pl-6 flex flex-col justify-between">
                
                {/* Panel Header */}
                <div className="flex flex-col gap-2">
                  <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">Promote Draft Task</span>
                  <h4 className="text-white font-bold text-sm">Resolve Row #4 Validation Error</h4>
                  <p className="text-white/45 text-xs leading-relaxed">
                    Set the missing required parameters to release this item from the Draft backlog.
                  </p>
                </div>

                {/* Form Input fields */}
                <div className="my-6 flex flex-col gap-4">
                  <div>
                    <label className="text-[10px] font-mono text-white/40 block mb-1.5 uppercase">Set Assignee (Required)</label>
                    <select
                      value={selectedAssignee}
                      onChange={(e) => setSelectedAssignee(e.target.value)}
                      disabled={draftRowFixed}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-3 py-2 text-xs text-white/80 focus:border-primary/50 focus:outline-none transition-all disabled:opacity-50 cursor-pointer"
                    >
                      <option value="" className="bg-[#0b0b16] text-white/60">-- Choose Assignee --</option>
                      <option value="Alex" className="bg-[#0b0b16] text-white/90">Alex M. (Eng Lead)</option>
                      <option value="Jane" className="bg-[#0b0b16] text-white/90">Jane D. (QA Lead)</option>
                      <option value="Alice" className="bg-[#0b0b16] text-white/90">Alice K. (Sec Auditor)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono text-white/40 block mb-1.5 uppercase">Task Status</label>
                    <input 
                      type="text" 
                      value={bulkStatus}
                      disabled 
                      className="w-full bg-white/[0.01] border border-white/[0.04] rounded-xl px-3 py-2 text-xs text-white/30 font-mono" 
                    />
                  </div>
                </div>

                {/* Action Trigger Button */}
                <div className="flex flex-col gap-3">
                  <button
                    onClick={handlePromote}
                    disabled={!selectedAssignee || draftRowFixed || isPromoting}
                    className={`w-full py-3 rounded-xl text-xs font-bold transition-all relative overflow-hidden flex items-center justify-center gap-2 ${
                      draftRowFixed
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-default'
                        : !selectedAssignee
                        ? 'bg-white/5 text-white/20 border border-white/5 cursor-not-allowed'
                        : 'bg-primary text-black hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-lg'
                    }`}
                  >
                    {isPromoting ? (
                      <>
                        <div className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Promoting Row...</span>
                      </>
                    ) : draftRowFixed ? (
                      <>
                        <Check size={14} className="stroke-[3]" />
                        <span>Promoted to Active</span>
                      </>
                    ) : (
                      <>
                        <span>Promote to Active Task</span>
                        <ArrowUpRight size={13} />
                      </>
                    )}
                  </button>

                  {/* Bulk metadata counters */}
                  <div className="flex items-center justify-between text-[9px] font-mono text-white/35 px-1 mt-1">
                    <span>Selected: {selectedCount} / 149</span>
                    <span>Action: Promote</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Footer summary */}
            <div className="px-6 py-4 border-t border-white/[0.05] bg-white/[0.01] flex items-center justify-between text-[10px] font-mono text-white/45">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Bulk Engine Status: Operational</span>
              </div>
              <span>Processing rate: 500 rows/sec</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
