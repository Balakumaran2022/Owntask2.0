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
    <section className="relative z-10 py-10 lg:py-14 overflow-hidden bg-transparent">
      {/* Background glow light */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[550px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1420px] relative z-10">
        
        {/* Centered Section Header (Compact for Single Screen) */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-3 px-3.5 py-1 border border-primary/30 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-wide"
          >
            <Grid size={13} className="animate-pulse" />
            <span>Modular Workflows</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl lg:text-4xl tracking-tight leading-tight font-sans font-extrabold mb-3"
          >
            <span className="text-white">Start from a proven template. </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#8b5cf6]">Not from scratch.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="text-white/65 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium"
          >
            The task library is a curated collection of pre-built subject templates for common business workflows. Install any template with one click — it automatically creates:
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* LEFT COLUMN: Library Browser Mock (High Visibility & Increased Width) */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-[780px] rounded-[28px] overflow-hidden border border-white/20 shadow-[0_32px_90px_rgba(0,0,0,0.85)] relative"
              style={{ background: 'linear-gradient(160deg, #13122b 0%, #0d0c1f 100%)' }}
            >
              {/* Chrome Header */}
              <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-[#0a0a16]/80 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80 border border-red-400 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80 border border-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80 border border-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
                </div>
                <div className="flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/10 border border-white/15 shadow-inner">
                  <span className="text-xs md:text-sm font-extrabold font-sans text-white tracking-wide">Workflow Template Library</span>
                </div>
                <span className="text-[11px] font-mono font-black text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-lg border border-emerald-500/30">v1.2.4</span>
              </div>

              {/* Browser Body Grid (Reduced Height for Single Page Viewability) */}
              <div className="grid grid-cols-[135px_1fr] min-h-[380px] text-left bg-gradient-to-b from-transparent via-white/[0.01] to-transparent">
                
                {/* Browser Sidebar Categories */}
                <div className="border-r border-white/10 p-2.5 flex flex-col gap-1 bg-[#0a0a16]/60 backdrop-blur-md">
                  <div className="flex items-center gap-2 px-2 py-1 mb-1">
                    <Compass size={14} className="text-primary animate-spin-slow" />
                    <span className="text-[11px] font-mono font-black text-white/70 uppercase tracking-widest">Explore</span>
                  </div>
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`px-3 py-1.5 rounded-xl text-left text-xs font-black transition-all cursor-pointer ${
                        activeCategory === cat.id 
                          ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-[1.02]' 
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* Templates Grid Viewer (Compact max-h-[420px] with shrink-0 to prevent vertical clipping) */}
                <div className="p-3.5 overflow-y-auto max-h-[420px] flex flex-col gap-2.5 scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                  
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
                          whileHover={{ y: -2, scale: 1.01 }}
                          transition={{ duration: 0.25 }}
                          className="group p-3.5 rounded-2xl bg-[#13122b]/95 border border-white/20 hover:border-primary/60 hover:bg-[#1a1838] transition-all duration-300 flex items-start gap-3 relative overflow-hidden shadow-xl backdrop-blur-md w-full shrink-0 h-auto min-h-0"
                        >
                          {/* Glowing top accent line */}
                          <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          {/* Shimmer overlay */}
                          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                          
                          {/* Installation step loader overlay */}
                          {isInstalling && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="absolute inset-0 bg-[#0f0e24]/95 flex flex-col items-center justify-center p-3 text-center z-20 backdrop-blur-md"
                            >
                              <div className="w-6 h-6 border-3 border-primary border-t-transparent rounded-full animate-spin mb-1.5" />
                              <span className="text-xs font-mono font-bold text-white tracking-wider">
                                Generating pipeline, statuses, fields...
                              </span>
                            </motion.div>
                          )}

                          {/* Template Emoji */}
                          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-lg shrink-0 border border-white/15 shadow-sm group-hover:scale-110 group-hover:bg-primary/20 transition-all mt-0.5">
                            {template.emoji}
                          </div>

                          {/* Info (Maximized Subtitle Visibility without Vertical Bloat) */}
                          <div className="flex-1 min-w-0 pr-1">
                            <h4 className="text-white font-black text-sm md:text-base tracking-wide group-hover:text-primary transition-colors leading-snug">{template.title}</h4>
                            <p className="text-white/90 text-xs leading-relaxed mt-1 font-bold block w-full whitespace-normal break-words">{template.desc}</p>
                            
                            {/* Workflow state badges */}
                            <div className="flex items-center gap-1 mt-2 flex-wrap">
                              {template.statuses.map((s, idx) => (
                                <span key={idx} className="px-2 py-0.5 rounded-full text-[9px] font-black font-mono tracking-wider bg-white/10 text-white/90 border border-white/20 shadow-sm uppercase">
                                  {s}
                                </span>
                              ))}
                            </div>
                          </div>

                          {/* Install CTA Button */}
                          <button
                            onClick={() => handleInstall(template.id)}
                            disabled={isInstalled || installingId}
                            className={`px-3 py-1.5 rounded-xl text-xs font-black shrink-0 self-center transition-all shadow-md ${
                              isInstalled
                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 cursor-default shadow-[0_0_15px_rgba(52,211,153,0.3)]'
                                : 'bg-gradient-to-r from-primary via-indigo-500 to-purple-600 text-white hover:scale-105 active:scale-95 cursor-pointer shadow-[0_0_20px_rgba(99,102,241,0.5)] border-none'
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

          {/* RIGHT COLUMN: Feature Cards (Compact Single-Page UI) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* Bullet List */}
            <div className="flex flex-col gap-2.5">
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
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-[#13122b]/90 border border-white/20 hover:border-primary/60 hover:bg-[#1a1838] transition-all duration-300 group cursor-default shadow-xl backdrop-blur-md relative overflow-hidden w-full shrink-0 h-auto"
                >
                  {/* Glowing top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center mt-0.5 shrink-0 group-hover:scale-110 group-hover:bg-primary/30 transition-all border border-primary/40 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                    <CheckCircle2 size={16} className="text-primary stroke-[2.5]" />
                  </div>
                  <div className="flex-1 min-w-0 pr-1">
                    <h4 className="text-white font-extrabold text-sm md:text-base leading-snug tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-primary transition-all">
                      {bullet.title}
                    </h4>
                    <p className="text-white/85 text-xs mt-0.5 leading-relaxed font-semibold block w-full">
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
