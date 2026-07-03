import React from 'react';
import { BookOpen, Terminal, Presentation, FileText, PlayCircle, Rss } from 'lucide-react';

const resources = [
  { icon: BookOpen, title: 'Documentation', desc: 'Comprehensive guides to configuring and mastering OwnTasks.' },
  { icon: Terminal, title: 'API Reference', desc: 'Build custom integrations with our robust REST & GraphQL APIs.' },
  { icon: Presentation, title: 'Case Studies', desc: 'Discover how Fortune 500 companies scale with our platform.' },
  { icon: PlayCircle, title: 'Tutorials', desc: 'Video walkthroughs of advanced workflows and automations.' },
  { icon: Rss, title: 'Blog', desc: 'Industry insights, productivity strategies, and engineering deep dives.' },
  { icon: FileText, title: 'Release Notes', desc: 'Detailed changelogs and updates for every new platform version.' }
];

export default function ResourcesPage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Developer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Resources</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            Everything you need to integrate, deploy, and master the OwnTasks ecosystem. Built by engineers, for engineers.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((res, idx) => (
            <a 
              href="#" 
              key={idx}
              className="group p-8 rounded-[2rem] bg-[#0D0D1C]/60 border border-primary/10 hover:border-primary/40 backdrop-blur-md transition-all duration-300 hover:bg-primary/5 flex flex-col no-underline"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                <res.icon size={24} />
              </div>
              
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-3 group-hover:text-primary transition-colors">
                {res.title}
              </h3>
              
              <p className="text-primary/60 leading-relaxed text-sm">
                {res.desc}
              </p>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
