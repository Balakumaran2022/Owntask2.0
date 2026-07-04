import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Task Hierarchy', value: '3 Levels Deep' },
  { label: 'Audit Events', value: '21 Types' },
  { label: 'Priority Levels', value: '5' },
  { label: 'SLA Tracking', value: 'Deadline + Status' },
  { label: 'Task Boards', value: 'Dual Board Types' }
];

const StatCard = ({ stat }) => (
  <motion.div 
    whileHover={{ y: -6, scale: 1.05, borderColor: 'rgba(99,102,241,0.5)', backgroundColor: 'rgba(13,13,28,0.9)' }}
    className="group relative flex-shrink-0 flex flex-col items-center justify-center w-[260px] p-6 rounded-[20px] bg-[#0D0D1C]/80 border border-white/[0.06] backdrop-blur-xl shadow-lg mx-3 transition-all cursor-default overflow-hidden"
  >
    {/* Glowing top accent line */}
    <div className="absolute top-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <span className="relative z-10 text-white font-black text-[1.35rem] tracking-tight mb-1.5 whitespace-nowrap group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-[#8b5cf6] transition-all">{stat.value}</span>
    <span className="relative z-10 text-muted-foreground/80 text-[0.7rem] font-bold uppercase tracking-[0.15em] whitespace-nowrap group-hover:text-white/80 transition-colors">{stat.label}</span>
  </motion.div>
);

export default function StatsStrip() {
  return (
    <section className="relative z-20 w-full py-12 overflow-hidden bg-transparent">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: scroll-left 35s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Subtle lighting behind the cards */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative flex overflow-hidden">
         {/* Edge fading masks */}
         <div 
           className="absolute inset-0 z-10 pointer-events-none" 
           style={{ background: 'linear-gradient(to right, #07070F 0%, transparent 15%, transparent 85%, #07070F 100%)' }} 
         />
         
         <div className="marquee-container py-4">
           {/* 4 sets of stats so when it shifts 50% it loops seamlessly */}
           {[...stats, ...stats, ...stats, ...stats].map((stat, idx) => (
             <StatCard key={idx} stat={stat} />
           ))}
         </div>
      </div>
    </section>
  );
}
