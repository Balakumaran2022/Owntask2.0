import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FolderPlus, 
  Layers, 
  Settings, 
  Sliders, 
  Database,
  ArrowRight,
  CheckCircle2,
  Code,
  Users,
  Compass,
  Grid
} from 'lucide-react';

const categories = [
  { id: 'all', label: 'All Templates' },
  { id: 'eng', label: 'Engineering' },
  { id: 'ops', label: 'HR & Operations' },
  { id: 'cs', label: 'Customer Success' }
];

const templateLibrary = [
  { 
    id: 'bug', 
    emoji: '🐛', 
    title: 'Bug Tracker', 
    category: 'eng', 
    desc: 'Track software issues, status states, and releases.', 
    statuses: ['To Do', 'In Progress', 'QA', 'Done'],
    fields: ['Severity', 'Browser', 'PR Link'] 
  },
  { 
    id: 'backlog', 
    emoji: '🎯', 
    title: 'Feature Backlog', 
    category: 'eng', 
    desc: 'Prioritize feature requests and map release cycles.', 
    statuses: ['Draft', 'Approved', 'Planned', 'In Dev'],
    fields: ['Impact Rank', 'Est Hours', 'Product Manager']
  },
  { 
    id: 'onboard', 
    emoji: '🧑‍💼', 
    title: 'Customer Onboarding', 
    category: 'cs', 
    desc: 'Coordinate account delivery and onboarding workflows.', 
    statuses: ['Contract Signed', 'Kickoff', 'Training', 'Active'],
    fields: ['Client Name', 'Account Size', 'CS Lead']
  },
  { 
    id: 'hr', 
    emoji: '📋', 
    title: 'HR Requests', 
    category: 'ops', 
    desc: 'Manage internal onboarding, evaluations, and queries.', 
    statuses: ['Submitted', 'Review', 'Approval', 'Resolved'],
    fields: ['Department', 'Requester Name', 'Approval Level']
  },
  { 
    id: 'it', 
    emoji: '🔧', 
    title: 'IT Support Tickets', 
    category: 'ops', 
    desc: 'Enforce service SLA metrics on technical incidents.', 
    statuses: ['New Ticket', 'Assigned', 'Pending Client', 'Closed'],
    fields: ['Priority Tier', 'SLA Hours', 'Assigned Specialist']
  }
];

export default function Templates() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [installingId, setInstallingId] = useState(null);
  const [installedIds, setInstalledIds] = useState([]);

  const handleInstall = (id) => {
    if (installedIds.includes(id) || installingId) return;
    
    setInstallingId(id);
    
    // Simulate setup steps
    setTimeout(() => {
      setInstallingId(null);
      setInstalledIds(prev => [...prev, id]);
    }, 2800);
  };

  const filteredTemplates = activeCategory === 'all' 
    ? templateLibrary 
    : templateLibrary.filter(t => t.category === activeCategory);

  return (
    <section className="relative z-10 py-24 lg:py-32 overflow-hidden bg-transparent">
      {/* Background glow light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[550px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">
        
        {/* Centered Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide"
          >
            <Grid size={13} className="animate-pulse" />
            <span>Modular Workflows</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-[2.25rem] lg:text-[2.5rem] tracking-tight leading-tight font-sans font-extrabold mb-5"
          >
            <span className="text-white">Start from a proven template. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Not from scratch.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
          >
            The task library is a curated collection of pre-built subject templates for common business workflows. Install any template with one click — it automatically creates:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Library Browser Mock */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[620px] rounded-[32px] overflow-hidden border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.65)] relative"
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
                  <span className="text-sm md:text-base font-bold font-sans text-white/85 tracking-wide">Workflow Template Library</span>
                </div>
                <span className="text-[10px] font-mono text-white/20 tracking-wider">v1.2.4</span>
              </div>

              {/* Browser Body Grid */}
              <div className="grid grid-cols-[160px_1fr] min-h-[380px] text-left">
                
                {/* Browser Sidebar Categories */}
                <div className="border-r border-white/[0.05] p-3.5 flex flex-col gap-1 bg-white/[0.01]">
                  <div className="flex items-center gap-2 px-2.5 py-2 mb-2">
                    <Compass size={13} className="text-primary" />
                    <span className="text-[10px] font-black text-white/30 uppercase tracking-wider">Explore</span>
                  </div>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-bold transition-all ${
                        activeCategory === cat.id 
                          ? 'bg-white/10 text-white shadow-md' 
                          : 'text-white/40 hover:text-white/70 hover:bg-white/[0.02]'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Templates Grid Viewer */}
                <div className="p-5 overflow-y-auto max-h-[420px] flex flex-col gap-3 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  
                  {/* Webkit scrollbar hiding rule */}
                  <style>{`
                    .scrollbar-none::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>

                  <AnimatePresence mode="popLayout">
                    {filteredTemplates.map((template) => {
                      const isInstalling = installingId === template.id;
                      const isInstalled = installedIds.includes(template.id);
                      
                      return (
                        <motion.div
                          layout
                          key={template.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.95 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          transition={{ duration: 0.3 }}
                          className="group p-4 rounded-2xl bg-[#0D0D1C]/80 border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-4 relative overflow-hidden shadow-md"
                        >
                          {/* Glowing top accent line */}
                          <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {/* Shimmer overlay */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          {/* Installation step loader overlay */}
                          {isInstalling && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-[#0A0A15]/95 flex flex-col items-center justify-center p-3 text-center z-20"
                            >
                              <div className="w-6 h-6 border-2 border-primary border-t-transparent rounded-full animate-spin mb-2" />
                              <span className="text-[10px] font-mono text-white/50 tracking-wider">
                                Generating pipeline, statuses, fields...
                              </span>
                            </motion.div>
                          )}

                          {/* Template Emoji */}
                          <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-xl shrink-0 border border-white/5">
                            {template.emoji}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-white font-bold text-sm leading-snug">{template.title}</h4>
                            <p className="text-white/45 text-[11px] leading-relaxed mt-0.5">{template.desc}</p>
                            
                            {/* Workflow state badges */}
                            <div className="flex items-center gap-1.5 mt-2.5 flex-wrap">
                              {template.statuses.map((s, idx) => (
                                <span key={idx} className="px-1.5 py-0.5 rounded text-[8px] font-bold font-mono tracking-wide bg-white/5 text-white/40 border border-white/5">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Install CTA Button */}
                          <button
                            onClick={() => handleInstall(template.id)}
                            disabled={isInstalled || installingId}
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-bold shrink-0 self-center transition-all ${
                              isInstalled
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 cursor-default'
                                : 'bg-primary text-black hover:scale-105 active:scale-95 cursor-pointer shadow-md'
                            }`}
                          >
                            {isInstalled ? 'Installed ✓' : 'Install'}
                          </button>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>

                </div>

              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Description content */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Bullet List */}
            <div className="flex flex-col gap-6">
              {[
                { title: 'The Project', desc: 'Pre-creates project scope, access parameters, and default parameters.' },
                { title: 'The Subject(s)', desc: 'Defines task classifications and categories instantly.' },
                { title: 'The Full Status Workflow', desc: 'Installs customizable status progression flows.' },
                { title: 'Custom Fields', desc: 'Sets up typed metadata properties unique to that workspace.' },
                { title: 'Default Settings', desc: 'Pre-configures watchers, assignees, and SLA hours.' },
              ].map((bullet, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 8, scale: 1.01 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.01] hover:bg-[#0D0D1C]/60 border border-transparent hover:border-white/10 transition-all group cursor-default"
                >
                  <div className="w-7 h-7 rounded-xl bg-primary/10 flex items-center justify-center mt-0.5 shrink-0 group-hover:scale-105 transition-transform border border-primary/20">
                    <CheckCircle2 size={16} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base md:text-lg leading-snug group-hover:text-primary transition-colors">
                      {bullet.title}
                    </h4>
                    <p className="text-white/55 text-sm md:text-base mt-1 leading-relaxed">
                      {bullet.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
