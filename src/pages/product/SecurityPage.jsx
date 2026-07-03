import React from 'react';
import { Lock, ShieldAlert, Database, Server, Key, FileCheck, HardDrive, Network } from 'lucide-react';

const securityFeatures = [
  { icon: Lock, title: 'Military-Grade Encryption', desc: 'All data is encrypted at rest using AES-256 and in transit via TLS 1.3, ensuring your information remains exclusively yours.' },
  { icon: Key, title: 'Role Based Access Control', desc: 'Granular permissions framework allowing precise control over who can view, edit, or approve specific datasets and tasks.' },
  { icon: Database, title: 'Immutable Audit Logs', desc: 'Every action is cryptographically logged and time-stamped. No edits, no deletions—complete accountability and traceability.' },
  { icon: Server, title: 'Secure Infrastructure', desc: 'Hosted on top-tier cloud providers with physically secured data centers, DDOS protection, and continuous network monitoring.' },
  { icon: HardDrive, title: 'Backup & Recovery Strategy', desc: 'Real-time database replication with automated geo-redundant backups and verified disaster recovery procedures.' },
  { icon: FileCheck, title: 'Compliance Controls', desc: 'Built to support SOC2, GDPR, and HIPAA compliance requirements with dedicated tools for data residency and export.' }
];

export default function SecurityPage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Security</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            Security is not a feature; it is our foundation. OwnTasks is engineered from the ground up to protect your most sensitive operational data.
          </p>
        </div>

        {/* Security Architecture Illustration (CSS/Icons) */}
        <div className="mb-24 relative max-w-4xl mx-auto p-12 rounded-[2.5rem] border border-primary/20 bg-gradient-to-b from-[#0D0D1C] to-transparent overflow-hidden">
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%)] blur-2xl"></div>
           
           <h3 className="text-center text-primary/50 text-sm font-bold uppercase tracking-widest mb-10">Zero-Trust Architecture</h3>
           
           <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 relative z-10">
             
             {/* Client */}
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                 <ShieldAlert size={32} />
               </div>
               <div className="text-center">
                 <div className="font-bold text-[#F1F5F9]">Client</div>
                 <div className="text-xs text-primary/60">MFA & SSO</div>
               </div>
             </div>
             
             {/* Connection */}
             <div className="hidden md:flex flex-col items-center">
                <Network className="text-primary/40 mb-2" />
                <div className="h-[2px] w-24 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10"></div>
                <div className="text-[10px] text-primary/40 mt-2 uppercase">TLS 1.3 Tunnel</div>
             </div>
             
             {/* Application Layer */}
             <div className="flex flex-col items-center">
               <div className="w-20 h-20 rounded-3xl bg-primary/20 border border-primary/50 flex items-center justify-center text-primary mb-4 shadow-[0_0_30px_rgba(99,102,241,0.25)] relative">
                 <Server size={40} />
                 <div className="absolute -top-2 -right-2 bg-[#6366F1] w-4 h-4 rounded-full border-2 border-[#030806] animate-pulse"></div>
               </div>
               <div className="text-center">
                 <div className="font-bold text-[#F1F5F9]">Compute</div>
                 <div className="text-xs text-primary/60">Isolated Tenants</div>
               </div>
             </div>

             {/* Connection */}
             <div className="hidden md:flex flex-col items-center">
                <Lock className="text-primary/40 mb-2" />
                <div className="h-[2px] w-24 bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10"></div>
                <div className="text-[10px] text-primary/40 mt-2 uppercase">VPC Network</div>
             </div>

             {/* Database */}
             <div className="flex flex-col items-center">
               <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary mb-4 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                 <Database size={32} />
               </div>
               <div className="text-center">
                 <div className="font-bold text-[#F1F5F9]">Storage</div>
                 <div className="text-xs text-primary/60">AES-256 Encrypted</div>
               </div>
             </div>

           </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {securityFeatures.map((feat, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-[#0D0D1C]/40 border border-primary/10 hover:border-primary/30 transition-all">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                <feat.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#F1F5F9] mb-3">{feat.title}</h3>
              <p className="text-primary/60 leading-relaxed text-sm">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
