import React from 'react';
import { Layers, Clock, Repeat, CheckCircle, FileText, Users, Hash, Library, Shield, BarChart2, Copy, Link as LinkIcon, Eye, Activity, Bell } from 'lucide-react';

const features = [
  { icon: Layers, title: 'Dual Board Types', desc: 'Seamlessly switch between Task and Ticket boards for versatile management.', useCase: 'Operations managing both project tasks and support tickets.' },
  { icon: Clock, title: 'Two-Level SLA', desc: 'Granular SLA tracking at both project and individual task levels.', useCase: 'Enterprise compliance and strict client delivery timelines.' },
  { icon: Repeat, title: 'Smart Recurring Tasks', desc: 'Automate repetitive workflows with complex custom scheduling.', useCase: 'Monthly financial reporting and routine maintenance.' },
  { icon: CheckCircle, title: 'Approval Workflow', desc: 'Multi-stage approval gates before task progression or completion.', useCase: 'Legal document review and financial expenditure approvals.' },
  { icon: FileText, title: 'Full Audit Trail', desc: 'Immutable logging of every action, edit, and state change.', useCase: 'Regulatory compliance and strict internal security policies.' },
  { icon: Users, title: 'Round Robin Assignment', desc: 'Automatically distribute workload evenly across team members.', useCase: 'High-volume customer support and IT helpdesks.' },
  { icon: Hash, title: 'Custom Fields', desc: 'Adapt the platform to your specific data requirements and terminology.', useCase: 'Tracking custom industry metrics and specialized KPIs.' },
  { icon: Library, title: 'Task Library', desc: 'Save and reuse standardized task templates for rapid deployment.', useCase: 'Standardized onboarding flows and repeatable campaigns.' },
  { icon: Shield, title: 'Role Based Access', desc: 'Enterprise-grade granular permissions and access controls.', useCase: 'Isolating contractor access from sensitive internal data.' },
  { icon: BarChart2, title: 'Real Time Analytics', desc: 'Live dashboards tracking velocity, blockages, and team health.', useCase: 'Executive oversight and capacity planning.' },
  { icon: Copy, title: 'Bulk Operations', desc: 'Modify, assign, or transition thousands of tasks simultaneously.', useCase: 'Large scale project migrations and reorganization.' },
  { icon: LinkIcon, title: 'Customer Linking', desc: 'Tie tasks directly to CRM profiles and external client entities.', useCase: 'Client success management and B2B issue tracking.' },
  { icon: Eye, title: 'Human Readable IDs', desc: 'Short, memorable alphanumeric IDs for every task and ticket.', useCase: 'Quick verbal communication and cross-team referencing.' },
  { icon: Activity, title: 'Project Health Cache', desc: 'Instant AI-driven assessment of project trajectory and risks.', useCase: 'Early warning system for project managers and directors.' },
  { icon: Bell, title: 'Push Notifications', desc: 'Real-time multi-channel alerts for critical blockers and SLA breaches.', useCase: 'Immediate response teams and incident management.' }
];

export default function FeaturesPage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Every feature your team needs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Nothing they don't.</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            A comprehensive suite of powerful tools designed to bring order, velocity, and accountability to complex enterprise operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-3xl bg-[#0D0D1C]/60 border border-primary/10 hover:border-primary/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.1)] flex flex-col h-full relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10">
                <feat.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-3 relative z-10">
                {feat.title}
              </h3>
              
              <p className="text-primary/60 leading-relaxed mb-6 flex-grow relative z-10">
                {feat.desc}
              </p>
              
              <div className="pt-5 border-t border-primary/10 mt-auto relative z-10">
                <p className="text-[0.75rem] font-bold text-primary/40 uppercase tracking-widest mb-2">
                  Enterprise Use Case
                </p>
                <p className="text-sm text-primary/70 italic">
                  "{feat.useCase}"
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
