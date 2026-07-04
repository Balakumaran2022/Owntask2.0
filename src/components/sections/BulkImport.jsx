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
        </div>        {/* Browser Mock Wrapper (High Visibility & Modern UI) */}
        <div className="max-w-5xl mx-auto">
          <div className="w-full rounded-[32px] overflow-hidden border border-white/20 shadow-[0_32px_90px_rgba(0,0,0,0.85)] relative"
            style={{ background: 'linear-gradient(160deg, #13122b 0%, #0d0c1f 100%)' }}
          >
            {/* Chrome Header */}
            <div className="flex items-center justify-between px-7 py-4.5 border-b border-white/10 bg-[#0a0a16]/80 backdrop-blur-md">
              <div className="flex items-center gap-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-amber-500/80 border border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <div className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 border border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
              </div>
              <div className="flex items-center gap-2.5 px-4 py-1.5 rounded-xl bg-white/10 border border-white/15 shadow-inner">
                <FileSpreadsheet size={15} className="text-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white/90">csv_importer_q3_release.csv</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono font-bold text-white/60 bg-white/5 px-3 py-1 rounded-lg border border-white/10">Rows: 149</span>
                {draftRowFixed && (
                  <button 
                    onClick={handleReset}
                    className="text-xs font-mono font-bold text-primary hover:text-white transition-colors bg-primary/10 hover:bg-primary/20 px-3 py-1 rounded-lg border border-primary/30 cursor-pointer shadow-sm"
                  >
                    Reset Demo
                  </button>
                )}
              </div>
            </div>

            {/* Mock Dashboard Layout */}
            <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
              
              {/* LEFT COLUMN: Import Status & Validation List (col-span-7) */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-xs font-mono font-black text-white/70 tracking-widest uppercase flex items-center gap-2">
                    <Database size={15} className="text-primary" />
                    <span>Upload Validation Summary</span>
                  </span>
                  <span className="text-xs font-extrabold text-[#34d399] bg-[#34d399]/15 border border-[#34d399]/30 px-3 py-1 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.25)]">
                    {draftRowFixed ? '✓ 100% Validated' : '⚠️ Issues Found (1)'}
                  </span>
                </div>

                {/* Validated Rows (High Visibility Modern Cards) */}
                <div className="flex flex-col gap-3.5">
                  {[
                    { row: 1, title: 'Database index migration', status: 'Active', desc: 'Valid row structure' },
                    { row: 2, title: 'API Gateway endpoint setup', status: 'Active', desc: 'Valid row structure' },
                    { row: 3, title: 'Client onboarding walkthrough', status: 'Active', desc: 'Valid row structure' }
                  ].map((item) => (
                    <div key={item.row} className="p-4 rounded-2xl border border-white/15 bg-white/[0.06] hover:bg-white/[0.1] hover:border-white/25 transition-all duration-300 flex items-center justify-between gap-4 shadow-lg backdrop-blur-md group">
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.3)] group-hover:scale-110 transition-transform">
                          <Check size={16} className="stroke-[3]" />
                        </div>
                        <div>
                          <h5 className="text-white font-extrabold text-sm md:text-base tracking-wide">{`Row #${item.row}: ${item.title}`}</h5>
                          <span className="text-xs text-white/65 font-mono mt-0.5 block">{item.desc}</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full text-[10px] font-black font-mono tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm">
                        {item.status}
                      </span>
                    </div>
                  ))}

                  {/* Warning / Draft Row (High Visibility & Neon Glow) */}
                  <motion.div 
                    animate={{
                      borderColor: draftRowFixed ? 'rgba(52,211,153,0.5)' : 'rgba(239,68,68,0.6)',
                      backgroundColor: draftRowFixed ? 'rgba(52,211,153,0.12)' : 'rgba(239,68,68,0.16)',
                      boxShadow: draftRowFixed ? '0 0 30px rgba(52,211,153,0.25)' : '0 0 30px rgba(239,68,68,0.35)'
                    }}
                    className="p-4 rounded-2xl border flex items-center justify-between gap-4 relative overflow-hidden transition-all duration-300 backdrop-blur-md"
                  >
                    <div className="flex items-center gap-3.5">
                      <motion.div 
                        animate={{
                          backgroundColor: draftRowFixed ? 'rgba(52,211,153,0.25)' : 'rgba(239,68,68,0.25)',
                          borderColor: draftRowFixed ? 'rgba(52,211,153,0.5)' : 'rgba(239,68,68,0.5)',
                          color: draftRowFixed ? '#34d399' : '#f87171'
                        }}
                        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border shadow-md"
                      >
                        {draftRowFixed ? <Check size={16} className="stroke-[3]" /> : <AlertCircle size={16} />}
                      </motion.div>
                      <div>
                        <h5 className="text-white font-black text-sm md:text-base tracking-wide">Row #4: Set up SSL Certs</h5>
                        <AnimatePresence mode="wait">
                          {draftRowFixed ? (
                            <motion.span 
                              key="valid" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }}
                              className="text-xs text-emerald-300 font-mono font-bold block mt-1"
                            >
                              ✓ Validated & promoted to Active
                            </motion.span>
                          ) : (
                            <motion.span 
                              key="invalid" 
                              initial={{ opacity: 0 }} 
                              animate={{ opacity: 1 }}
                              className="text-xs text-red-300 font-mono font-extrabold block mt-1"
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
                        color: draftRowFixed ? '#34d399' : '#fca5a5',
                        borderColor: draftRowFixed ? 'rgba(52,211,153,0.5)' : 'rgba(239,68,68,0.5)',
                        backgroundColor: draftRowFixed ? 'rgba(52,211,153,0.2)' : 'rgba(239,68,68,0.25)'
                      }}
                      className="px-3 py-1 rounded-full text-[10px] font-black font-mono tracking-wider border shadow-sm uppercase"
                    >
                      {draftRowFixed ? 'Active' : 'Draft'}
                    </motion.span>
                  </motion.div>
                </div>
              </div>

              {/* RIGHT COLUMN: Interactive Draft Resolution Panel (col-span-5) */}
              <div className="lg:col-span-5 border-t lg:border-t-0 lg:border-l border-white/15 pt-6 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                
                {/* Panel Header */}
                <div className="flex flex-col gap-2 pb-3 border-b border-white/10">
                  <span className="text-xs font-mono font-black text-primary tracking-widest uppercase flex items-center gap-1.5">
                    <Sliders size={14} />
                    <span>Promote Draft Task</span>
                  </span>
                  <h4 className="text-white font-black text-base md:text-lg">Resolve Row #4 Validation Error</h4>
                  <p className="text-white/70 text-xs leading-relaxed font-medium">
                    Set the missing required parameters to release this item from the Draft backlog.
                  </p>
                </div>

                {/* Form Input fields (High Visibility & Crisp Contrast) */}
                <div className="my-6 flex flex-col gap-5">
                  <div>
                    <label className="text-xs font-mono font-bold text-white/80 block mb-2 uppercase tracking-wider">Set Assignee (Required)</label>
                    <select
                      value={selectedAssignee}
                      onChange={(e) => setSelectedAssignee(e.target.value)}
                      disabled={draftRowFixed}
                      className="w-full bg-white/10 border border-white/25 rounded-2xl px-4 py-3.5 text-sm text-white font-bold focus:border-primary focus:bg-white/15 focus:outline-none transition-all disabled:opacity-50 cursor-pointer shadow-inner"
                    >
                      <option value="" className="bg-[#0f0e24] text-white/60 font-medium">-- Choose Assignee --</option>
                      <option value="Alex" className="bg-[#0f0e24] text-white font-bold">Alex M. (Eng Lead)</option>
                      <option value="Jane" className="bg-[#0f0e24] text-white font-bold">Jane D. (QA Lead)</option>
                      <option value="Alice" className="bg-[#0f0e24] text-white font-bold">Alice K. (Sec Auditor)</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-mono font-bold text-white/80 block mb-2 uppercase tracking-wider">Task Status</label>
                    <input 
                      type="text" 
                      value={bulkStatus}
                      disabled 
                      className="w-full bg-white/5 border border-white/15 rounded-2xl px-4 py-3.5 text-sm text-white/60 font-mono font-bold" 
                    />
                  </div>
                </div>

                {/* Action Trigger Button */}
                <div className="flex flex-col gap-3.5">
                  <button
                    onClick={handlePromote}
                    disabled={!selectedAssignee || draftRowFixed || isPromoting}
                    className={`w-full py-4 rounded-2xl text-sm font-black transition-all relative overflow-hidden flex items-center justify-center gap-2.5 shadow-xl ${
                      draftRowFixed
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default shadow-[0_0_25px_rgba(52,211,153,0.3)]'
                        : !selectedAssignee
                        ? 'bg-white/10 text-white/40 border border-white/10 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary via-indigo-500 to-purple-600 text-white hover:brightness-110 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_0_30px_rgba(99,102,241,0.6)] border-none'
                    }`}
                  >
                    {isPromoting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Promoting Row...</span>
                      </>
                    ) : draftRowFixed ? (
                      <>
                        <Check size={18} className="stroke-[3]" />
                        <span>Promoted to Active Task</span>
                      </>
                    ) : (
                      <>
                        <span>Promote to Active Task</span>
                        <ArrowUpRight size={18} />
                      </>
                    )}
                  </button>

                  {/* Bulk metadata counters */}
                  <div className="flex items-center justify-between text-xs font-mono font-bold text-white/60 px-2 mt-1">
                    <span>Selected: {selectedCount} / 149</span>
                    <span className="text-primary">Action: Promote</span>
                  </div>
                </div>

              </div>

            </div>

            {/* Footer summary */}
            <div className="px-8 py-4.5 border-t border-white/10 bg-[#0a0a16]/90 backdrop-blur-md flex items-center justify-between text-xs font-mono font-bold text-white/70">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                <span>Bulk Engine Status: Operational</span>
              </div>
              <span className="text-emerald-400 font-extrabold">Processing rate: 500 rows/sec</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
