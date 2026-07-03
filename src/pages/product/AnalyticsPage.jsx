import React from 'react';
import { Target, Clock, Users, AlertCircle, Activity, Box } from 'lucide-react';

const widgets = [
  { icon: Target, title: 'Completion Rate', value: '98.4%', trend: '+2.1%', desc: 'Tasks completed vs assigned this quarter.' },
  { icon: Clock, title: 'SLA Compliance', value: '99.9%', trend: '+0.4%', desc: 'Tickets resolved within strict SLA bounds.' },
  { icon: Users, title: 'Team Performance', value: '142', trend: '+12', desc: 'Average task velocity per team member.' },
  { icon: AlertCircle, title: 'Overdue Tasks', value: '0.2%', trend: '-1.5%', desc: 'Tasks breaching target deadline.' },
  { icon: Activity, title: 'Project Health Score', value: '94/100', trend: '+5', desc: 'AI composite score across all active portfolios.' },
  { icon: Box, title: 'Resource Utilization', value: '87%', trend: 'Optimal', desc: 'Current workforce capacity allocation.' }
];

export default function AnalyticsPage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Analytics</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            Unprecedented visibility into your organization's operational velocity and health through beautiful, real-time dashboards.
          </p>
        </div>

        {/* Dashboard Preview Frame */}
        <div className="relative rounded-[2.5rem] border border-primary/20 bg-[#07070F]/80 backdrop-blur-xl p-8 md:p-12 shadow-[0_0_80px_rgba(99,102,241,0.05)] mb-16 overflow-hidden">
          
          {/* Glassmorphism Header */}
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-primary/10">
            <div>
              <h2 className="text-2xl font-bold text-[#F1F5F9]">Executive Overview</h2>
              <p className="text-primary/50 text-sm mt-1">Live organizational metrics</p>
            </div>
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
              <div className="h-3 w-3 rounded-full bg-primary/80"></div>
            </div>
          </div>

          {/* Widgets Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {widgets.map((widget, idx) => (
              <div key={idx} className="bg-primary/5 rounded-3xl p-6 border border-primary/10 hover:bg-primary/10 transition-colors">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <widget.icon size={24} />
                  </div>
                  <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold border border-primary/20">
                    {widget.trend}
                  </div>
                </div>
                
                <h3 className="text-primary/60 text-sm font-semibold uppercase tracking-wider mb-2">
                  {widget.title}
                </h3>
                <div className="text-4xl font-black text-[#F1F5F9] mb-3">
                  {widget.value}
                </div>
                <p className="text-primary/40 text-sm">
                  {widget.desc}
                </p>
              </div>
            ))}
          </div>
          
          {/* Faux Graph Area */}
          <div className="mt-6 h-64 rounded-3xl bg-gradient-to-t from-primary/5 to-transparent border border-primary/10 relative overflow-hidden flex items-end">
             {/* Decorative graph bars */}
             <div className="absolute inset-0 flex items-end justify-around px-8 pb-8 gap-4 opacity-40">
                {[40, 70, 45, 90, 65, 80, 100, 75, 50, 85, 60, 95].map((h, i) => (
                  <div key={i} className="w-full bg-primary rounded-t-sm transition-all duration-1000 ease-out hover:bg-[#8B5CF6]" style={{ height: `${h}%` }}></div>
                ))}
             </div>
             <div className="absolute top-6 left-8 text-primary/60 font-medium">Velocity over time</div>
          </div>
        </div>

      </div>
    </div>
  );
}
