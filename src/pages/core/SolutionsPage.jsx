import React from 'react';
import { motion } from 'framer-motion';
import { Headset, Settings, Briefcase, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

const solutions = [
  {
    id: 'support',
    icon: Headset,
    title: 'Customer Support Teams',
    painPoints: ['High volume tickets', 'Fragmented customer data', 'Slow response times'],
    solution: 'Unified ticket routing, AI-suggested responses, and integrated customer histories.',
    features: ['Shared Inboxes', 'SLA Tracking', 'AI Triage'],
  },
  {
    id: 'ops',
    icon: Settings,
    title: 'Operations Managers',
    painPoints: ['Manual data entry', 'Bottlenecked approvals', 'Zero cross-functional visibility'],
    solution: 'Automated workflows, custom dashboards, and real-time bottleneck alerts.',
    features: ['Workflow Automations', 'Custom Reporting', 'Resource Allocation'],
  },
  {
    id: 'projects',
    icon: Briefcase,
    title: 'Project Teams & Agencies',
    painPoints: ['Scope creep', 'Scattered assets', 'Missed deadlines'],
    solution: 'Centralized task management, client collaboration portals, and automated progress tracking.',
    features: ['Kanban Boards', 'Time Tracking', 'File Versioning'],
  },
  {
    id: 'compliance',
    icon: ShieldCheck,
    title: 'IT & Compliance Teams',
    painPoints: ['Shadow IT', 'Insecure data sharing', 'Auditing nightmares'],
    solution: 'Enterprise-grade security, granular access controls, and automated audit logs.',
    features: ['Role-Based Access Control', 'SSO Integration', 'Compliance Reporting'],
  }
];

const stats = [
  { value: '50+', label: 'Workflow Templates' },
  { value: '99.9%', label: 'Task Visibility' },
  { value: '21 Event', label: 'Audit Trail' },
  { value: '100%', label: 'Cross-Team Alignment' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
};

export default function SolutionsPage() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky navbar
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-[1200px]">
        
        {/* Header Block */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-[800px] mx-auto mb-12"
        >
        
          <h1 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Built for the work your team <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">actually does.</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10">
            Built for teams that demand visibility, accountability, and intelligent execution across every workflow.
          </p>

          {/* Statistics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 border-t border-white/5">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center justify-center p-4">
                <strong className="text-3xl md:text-4xl font-black font-serif text-foreground mb-2 tracking-tight">
                  {stat.value}
                </strong>
                <span className="text-xs uppercase tracking-widest text-primary font-bold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Navigation Tabs removed as requested */}

        {/* Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {solutions.map((sol) => {
            const Icon = sol.icon;
            return (
              <motion.div
                key={sol.id}
                id={sol.id}
                variants={cardVariants}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 60px rgba(0,255,120,0.15)',
                  borderColor: 'rgba(0,255,120,0.4)'
                }}
                className="relative flex flex-col p-6 md:p-8 rounded-[32px] bg-white/[0.02] backdrop-blur-xl border border-white/5 transition-all duration-300 scroll-mt-[180px]"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-[18px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                    <Icon size={26} strokeWidth={2} />
                  </div>
                  <h2 className="text-2xl font-bold font-serif text-foreground leading-tight">{sol.title}</h2>
                </div>

                {/* Pain Points */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Common Challenges</h3>
                  <ul className="space-y-3">
                    {sol.painPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[0.95rem] text-foreground/80">
                        <span className="w-1.5 h-1.5 mt-2 rounded-full bg-red-500/80 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solution */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">The ownTask Solution</h3>
                  <p className="text-[1.05rem] text-foreground leading-relaxed">
                    {sol.solution}
                  </p>
                </div>

                <div className="mt-auto pt-5 border-t border-white/5">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {sol.features.map((feat, idx) => (
                      <span key={idx} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm font-medium">
                        <CheckCircle2 size={14} />
                        {feat}
                      </span>
                    ))}
                  </div>

                  <button className="group flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors cursor-pointer bg-transparent border-none p-0 text-base">
                    Learn more
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
