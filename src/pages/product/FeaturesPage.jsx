import React from 'react';
import { Hash, ListTodo, Paperclip, Eye, Sliders, User, Columns, ShieldAlert, Pin, Activity, Repeat, UserCheck } from 'lucide-react';

const features = [
  {
    icon: Hash,
    title: 'Auto Readable Task IDs',
    desc: 'TSK-XXXXXXXX auto-generated. Citable in emails and reports.',
    useCase: 'Operations team referencing individual tasks directly in emails and daily standups.'
  },
  {
    icon: ListTodo,
    title: 'Checklists with Completion Tracking',
    desc: 'Sub-items with who completed them and when.',
    useCase: 'Quality assurance checklist item marked completed by test engineer at 3:14 PM.'
  },
  {
    icon: Paperclip,
    title: 'File Attachments',
    desc: 'File name, type, size, timestamp, uploader tracked.',
    useCase: 'Attaching project logs with full visibility of uploader and filesize for security audits.'
  },
  {
    icon: Eye,
    title: 'Tags & Task Watchers',
    desc: 'Tag for grouping, watchers get updates without ownership.',
    useCase: 'Operations director watches a critical server migration task to receive updates without taking ownership.'
  },
  {
    icon: Sliders,
    title: '5-Level Priority System',
    desc: 'Highest/High/Normal/Low/Lowest with auto priorityRank.',
    useCase: 'System SLA automatically adjusting task priority level based on priorityRank.'
  },
  {
    icon: User,
    title: 'Customer Record Linking',
    desc: 'Link task to customer for support context.',
    useCase: 'B2B support desk linking a critical database bug to the customer profile for tracking.'
  },
  {
    icon: Columns,
    title: 'Dual Board Types',
    desc: 'Task Board (projects) + Ticket Board (support/helpdesk).',
    useCase: 'Marketing sprints run on a Task Board, while incoming IT tickets run on a Ticket Board.'
  },
  {
    icon: ShieldAlert,
    title: 'Role-Based Access Control',
    desc: 'Owner/Admin/Member/Teammate + Open/Restricted projects.',
    useCase: 'Restricting external contractors access to sensitive internal core modules.'
  },
  {
    icon: Pin,
    title: 'Project Defaults & Smart Presets',
    desc: 'SLA hours per priority, default assignee, auto-checklist.',
    useCase: 'Newly created project auto-configures SLA hours and default checklists instantly.'
  },
  {
    icon: Activity,
    title: 'Project Timeline & Health Cache',
    desc: 'Health auto-tracks: total, completed, overdue, SLA rate.',
    useCase: 'Executive manager views the health cache dashboard to spot overdue tasks instantly.'
  },
  {
    icon: Repeat,
    title: 'Recurring Task Engine',
    desc: 'Daily/weekly/monthly/yearly/custom, skip weekends/holidays.',
    useCase: 'Financial reporting task auto-generated on the first day of every month, skipping holidays.'
  },
  {
    icon: UserCheck,
    title: 'Round-Robin Team Assignment',
    desc: 'Tasks auto-distributed in round-robin across team members.',
    useCase: 'Even workload distribution among support agents for incoming client tickets.'
  }
];

export default function FeaturesPage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10 bg-transparent">
      {/* Background glow orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-3xl md:text-5xl font-black text-[#F1F5F9] tracking-tight mb-6 leading-tight">
            Every feature your team needs. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Nothing they don't.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#94A3B8] leading-relaxed">
            A comprehensive suite of powerful tools designed to bring order, velocity, and accountability to complex enterprise operations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-3xl bg-[#0D0D1C]/60 border border-white/10 hover:border-primary/45 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(99,102,241,0.08)] flex flex-col h-full relative overflow-hidden"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
            >
              {/* Subtle hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500 relative z-10 border border-primary/20">
                <feat.icon size={26} />
              </div>
              
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-3 relative z-10">
                {feat.title}
              </h3>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 flex-grow relative z-10">
                {feat.desc}
              </p>
              
              <div className="pt-5 border-t border-white/5 mt-auto relative z-10">
                <p className="text-[0.62rem] font-black text-primary/40 uppercase tracking-widest mb-1.5">
                  Enterprise Use Case
                </p>
                <p className="text-xs text-[#94A3B8]/80 italic font-medium leading-relaxed">
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
