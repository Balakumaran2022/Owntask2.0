import React from 'react';
import { Building2, FolderKanban, Columns, Ticket, Briefcase, CheckSquare, ListChecks } from 'lucide-react';

const HierarchyNode = ({ icon: Icon, title, desc, delay, isLast }) => (
  <div className="relative flex items-start gap-6 group">
    {/* Animated glowing vertical line to next node */}
    {!isLast && (
      <div className="absolute left-[27px] top-[60px] bottom-[-20px] w-[2px] bg-primary/10">
        <div 
          className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
          style={{
            animation: 'flowDown 2s infinite linear',
            animationDelay: `${delay}s`
          }}
        />
      </div>
    )}

    {/* Horizontal connection line from parent if not root */}
    {delay > 0 && (
      <div className="absolute left-[-20px] top-[27px] w-[30px] h-[2px] bg-primary/20" />
    )}

    {/* Node Icon Box */}
    <div className="relative z-10 w-14 h-14 rounded-2xl bg-[#0D0D1C] border border-primary/20 flex items-center justify-center shrink-0 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-300">
      <Icon className="text-primary group-hover:scale-110 transition-transform" size={24} />
      <div className="absolute inset-0 bg-primary/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Node Content */}
    <div className="bg-[#0D0D1C]/60 border border-primary/10 rounded-2xl p-6 flex-grow backdrop-blur-sm group-hover:bg-primary/5 transition-colors mt-[-4px]">
      <h3 className="text-xl font-bold text-[#F1F5F9] mb-2 flex items-center gap-3">
        {title}
      </h3>
      <p className="text-primary/60 text-sm leading-relaxed">
        {desc}
      </p>
    </div>
  </div>
);

export default function ArchitecturePage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10">
      <style>{`
        @keyframes flowDown {
          0% { top: -30%; opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
      
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Intelligent Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Architecture</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            An enterprise-grade, multi-tenant task and project management platform built inside the OwnChat ecosystem.
          </p>
        </div>

        <div className="flex justify-center items-start pt-10">
          
          {/* Visual Hierarchy */}
          <div className="relative">
            {/* Background ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col gap-6 relative">
              <HierarchyNode 
                icon={Building2} 
                title="Organisation" 
                desc="Unified workspace with centralized governance."
                delay={0}
              />
              
              <div className="pl-12 flex flex-col gap-6 relative">
                <div className="absolute left-[27px] top-[-24px] bottom-[40px] w-[2px] bg-primary/20" />
                
                <HierarchyNode 
                  icon={FolderKanban} 
                  title="Project" 
                  desc="High-level initiative or business portfolio."
                  delay={0.5}
                />
                
                <div className="pl-12 flex flex-col gap-6 relative">
                  <div className="absolute left-[27px] top-[-24px] bottom-[40px] w-[2px] bg-primary/20" />
                  
                  {/* Split branches for Task / Ticket boards */}
                  <div className="grid grid-cols-1 gap-6 relative">
                    <HierarchyNode 
                      icon={Columns} 
                      title="Task Board" 
                      desc="Delivery-focused work and sprints."
                      delay={1.0}
                      isLast={true}
                    />
                    
                    <HierarchyNode 
                      icon={Ticket} 
                      title="Ticket Board" 
                      desc="Support, service, and SLA workflows."
                      delay={1.0}
                    />
                    
                    <div className="pl-12 flex flex-col gap-6 relative">
                      <div className="absolute left-[27px] top-[-24px] bottom-[40px] w-[2px] bg-primary/20" />
                      
                      <HierarchyNode 
                        icon={Briefcase} 
                        title="Subject" 
                        desc="Functional workstreams (e.g. Design, Engineering)."
                        delay={1.5}
                      />
                      
                      <div className="pl-12 flex flex-col gap-6 relative">
                        <div className="absolute left-[27px] top-[-24px] bottom-[40px] w-[2px] bg-primary/20" />
                        
                        <HierarchyNode 
                          icon={CheckSquare} 
                          title="Task" 
                          desc="Actionable unit of work with owners and deadlines."
                          delay={2.0}
                        />
                        
                        <div className="pl-12 flex flex-col gap-6 relative">
                          <div className="absolute left-[27px] top-[-24px] bottom-[40px] w-[2px] bg-primary/20" />
                          
                          <HierarchyNode 
                            icon={ListChecks} 
                            title="Subtask" 
                            desc="Granular execution steps for larger deliverables."
                            delay={2.5}
                            isLast={true}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
