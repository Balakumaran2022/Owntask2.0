import React from 'react';
import { motion } from 'framer-motion';

const integrationsList = [
  { name: 'GitLab', desc: 'Sync merge requests & issues.' },
  { name: 'GitHub', desc: 'Auto link commit updates.' },
  { name: 'Slack', desc: 'Post daily telemetry reports.' },
  { name: 'Zapier', desc: 'Connect 5,000+ custom systems.' },
  { name: 'Google Calendar', desc: 'Schedule week planning.' },
  { name: 'Notion', desc: 'Enrich page references.' },
];

function getLogo(name) {
  switch (name) {
    case 'GitLab':
      return (
        <svg viewBox="0 0 500 500" width="26" height="26">
          <path fill="#e24329" d="m282.08 469.3l-1.69-5.18-120.76-371.72h280.74l-120.76 371.72-17.53 5.18z"/>
          <path fill="#fc6d26" d="m282.08 469.3l-17.53 5.18a3.1 3.1 0 0 1-3.69 0l-17.53-5.18-120.76-371.72h275.52z"/>
          <path fill="#fca326" d="m141.22 92.4h-126.9a2.72 2.72 0 0 0-2 4.41l146.43 147.28z"/>
          <path fill="#e24329" d="m141.22 92.4l17.53 151.69-143-147.28a2.72 2.72 0 0 1 2.37-4.41z"/>
          <path fill="#fca326" d="m358.78 92.4h126.9a2.72 2.72 0 0 1 2 4.41l-146.43 147.28z"/>
          <path fill="#e24329" d="m358.78 92.4l-17.53 151.69 143-147.28a2.72 2.72 0 0 0-2.37-4.41z"/>
        </svg>
      );
    case 'GitHub':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26" fill="#ffffff">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.76-1.604-2.665-.305-5.467-1.334-5.467-5.93 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.874.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'Slack':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path fill="#36C5F0" d="M5 14a2 2 0 1 0 0 4h2v-4H5zm0-5a2 2 0 1 0 0 4h5a2 2 0 1 0 0-4H5z"/>
          <path fill="#2EB67D" d="M14 5a2 2 0 1 0-4 0v2h4V5zm-5 0a2 2 0 1 0 4 0v5a2 2 0 1 0-4 0V5z"/>
          <path fill="#E01E5A" d="M19 10a2 2 0 1 0 0-4h-2v4h2zm0 5a2 2 0 1 0 0-4h-5a2 2 0 1 0 0 4h5z"/>
          <path fill="#ECB22E" d="M10 19a2 2 0 1 0 4 0v-2h-4v2zm5 0a2 2 0 1 0-4 0v-5a2 2 0 1 0 4 0v5z"/>
        </svg>
      );
    case 'Zapier':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <g stroke="#FF4A00" strokeWidth="3.2" strokeLinecap="round">
            <line x1="12" y1="12" x2="12" y2="3.5" />
            <line x1="12" y1="12" x2="20.08" y2="9.37" />
            <line x1="12" y1="12" x2="17.00" y2="18.88" />
            <line x1="12" y1="12" x2="7.00" y2="18.88" />
            <line x1="12" y1="12" x2="3.92" y2="9.37" />
          </g>
        </svg>
      );
    case 'Google Calendar':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path fill="#4285F4" d="M20 2H4c-1.1 0-2 .9-2 2v4h20V4c0-1.1-.9-2-2-2z"/>
          <path fill="#FFF" d="M2 8h20v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V8z"/>
          <path fill="#0F9D58" d="M2 8h2v12H2z"/>
          <path fill="#EA4335" d="M20 8h2v12h-2z"/>
          <path fill="#F4B400" d="M4 18h16v2H4z"/>
          <text x="12" y="16" fill="#4285F4" fontSize="8" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">31</text>
        </svg>
      );
    case 'Notion':
      return (
        <svg viewBox="0 0 24 24" width="26" height="26">
          <path fill="#ffffff" d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"/>
        </svg>
      );
    default:
      return null;
  }
}

export default function Integrations() {
  return (
    <section id="integrations" className="relative pt-10 pb-20 bg-transparent overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[140px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="container mx-auto relative z-10 px-5">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">connect seamlessly.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-[600px] mx-auto leading-relaxed">
            OwnTasks plays nicely with the tools you already rely on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {integrationsList.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative bg-[#0D0D1C]/80 backdrop-blur-xl border border-white/[0.06] rounded-3xl p-6 md:p-8 flex flex-col items-start gap-5 hover:border-primary/40 hover:shadow-[0_20px_50px_rgba(99,102,241,0.22)] transition-all cursor-pointer group overflow-hidden"
            >
              {/* Glowing top accent line */}
              <div className="absolute top-0 left-6 right-6 h-[2px] rounded-full bg-gradient-to-r from-transparent via-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* Shimmer overlay */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/[0.05] to-[#8b5cf6]/[0.05] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="bg-background/80 w-14 h-14 flex items-center justify-center rounded-2xl border border-primary/10 group-hover:border-primary/30 group-hover:bg-primary/5 transition-all shadow-inner">
                {getLogo(item.name)}
              </div>
              <div>
                <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {item.name}
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
