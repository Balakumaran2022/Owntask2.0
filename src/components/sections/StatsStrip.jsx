import React from 'react';
import { motion } from 'framer-motion';

const statsRow1 = [
  { label: 'Task Hierarchy', value: '3 Levels Deep', glow: 'rgba(99, 102, 241, 0.25)' },
  { label: 'Audit Events', value: '21 Types', glow: 'rgba(139, 92, 246, 0.25)' },
  { label: 'Priority Levels', value: '5', glow: 'rgba(236, 72, 153, 0.25)' },
  { label: 'SLA Tracking', value: 'Deadline + Status', glow: 'rgba(56, 189, 248, 0.25)' },
  { label: 'Task Boards', value: 'Dual Board Types', glow: 'rgba(52, 211, 153, 0.25)' },
  { label: 'Approval Gates', value: 'Multi-Stage', glow: 'rgba(251, 191, 36, 0.25)' },
];

const statsRow2 = [
  { label: 'Recurring Tasks', value: 'Smart Automation', glow: 'rgba(52, 211, 153, 0.25)' },
  { label: 'Audit Trail', value: 'Immutable Logs', glow: 'rgba(56, 189, 248, 0.25)' },
  { label: 'Access Control', value: 'Role Based', glow: 'rgba(236, 72, 153, 0.25)' },
  { label: 'Live Dashboards', value: 'Real Time Health', glow: 'rgba(139, 92, 246, 0.25)' },
  { label: 'Workload Distribution', value: 'Round Robin', glow: 'rgba(99, 102, 241, 0.25)' },
  { label: 'Customization', value: 'Custom Fields', glow: 'rgba(251, 191, 36, 0.25)' },
];

const StatCard = ({ stat, id }) => (
  <motion.div 
    id={id}
    whileHover={{ y: -3, scale: 1.025 }}
    className="group relative flex-shrink-0 flex flex-col items-center justify-center w-[175px] py-3 px-2 rounded-xl bg-[#0A0A16]/90 border backdrop-blur-2xl mx-2 transition-all duration-300 cursor-default overflow-hidden"
    style={{ 
      boxShadow: `0 0 12px ${stat.glow}, inset 0 0 8px rgba(255,255,255,0.02)`,
      borderColor: 'rgba(99, 102, 241, 0.3)'
    }}
  >
    {/* Glowing top accent line */}
    <div className="absolute top-0 left-4 right-4 h-[1.5px] rounded-full bg-gradient-to-r from-transparent via-indigo-400 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
    
    <span className="relative z-10 text-sm sm:text-base font-black tracking-tight mb-0.5 whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white via-indigo-200 to-white drop-shadow-sm">
      {stat.value}
    </span>
    
    <div className="w-8 h-[1px] bg-gradient-to-r from-transparent via-indigo-400/25 to-transparent my-1" />
    
    <span className="relative z-10 text-indigo-300 text-[9px] font-extrabold uppercase tracking-widest whitespace-nowrap group-hover:text-white transition-colors">
      {stat.label}
    </span>
  </motion.div>
);

export default function StatsStrip() {
  return (
    <section id="stats-strip-section" className="relative z-20 w-full py-6 overflow-hidden bg-transparent">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .marquee-left {
          display: flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
        }
        .marquee-right {
          display: flex;
          width: max-content;
          animation: scroll-right 35s linear infinite;
        }
        .marquee-left:hover, .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Subtle lighting behind the cards */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none" />
      
      <div className="relative flex flex-col gap-5 overflow-hidden">
         {/* Edge fading masks */}
         <div 
           className="absolute inset-0 z-10 pointer-events-none" 
           style={{ background: 'linear-gradient(to right, #07070F 0%, transparent 12%, transparent 88%, #07070F 100%)' }} 
         />
         
         {/* Row 1: Left to Right */}
         <div className="marquee-right py-2">
           {[...statsRow1, ...statsRow1, ...statsRow1, ...statsRow1].map((stat, idx) => (
             <StatCard key={`r1-${idx}`} stat={stat} id={`stat-card-row1-${stat.label.toLowerCase().replace(/\s+/g, '-')}-${idx}`} />
           ))}
         </div>

         {/* Row 2: Right to Left */}
         <div className="marquee-left py-2">
           {[...statsRow2, ...statsRow2, ...statsRow2, ...statsRow2].map((stat, idx) => (
             <StatCard key={`r2-${idx}`} stat={stat} id={`stat-card-row2-${stat.label.toLowerCase().replace(/\s+/g, '-')}-${idx}`} />
           ))}
         </div>
      </div>
    </section>
  );
}
