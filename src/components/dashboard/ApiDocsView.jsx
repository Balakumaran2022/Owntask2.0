import React from 'react';
import { motion } from 'framer-motion';
import { FileCode, Terminal, Copy } from 'lucide-react';

export default function ApiDocsView({ isMobile }) {
  const curlExample = `curl -X POST https://api.owntasks.com/v1/tasks \\
  -H "Authorization: Bearer ot_sk_4918" \\
  -H "Content-Type: application/json" \\
  -d '{
    "title": "Validate production release",
    "priority": "High",
    "category": "Ops"
  }'`;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="dash-page-header">
        <h2>API Integration Hub</h2>
        <p>Connect and push tasks, reflections, and repository status directly to your workspace.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: '2rem' }}>
        
        {/* Documentation Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card"
            style={{ padding: '2rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{ padding: '0.2rem 0.5rem', borderRadius: '6px', background: 'rgba(52,211,153,0.15)', color: '#34d399', fontSize: '0.7rem', fontWeight: 800 }}>POST</span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#e2e8f0', margin: 0 }}>/v1/tasks</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.6, margin: '0 0 1.5rem' }}>
              Creates a new task in your workspace. You can assign priorities, categories, and custom metadata.
            </p>

            <h4 style={{ fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>Parameters</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px', padding: '1rem' }}>
              {[
                { name: 'title', type: 'string', req: true, desc: 'The title of the task.' },
                { name: 'priority', type: 'enum', req: false, desc: '"High", "Normal", "Low", or "AI Suggested"' },
                { name: 'category', type: 'string', req: false, desc: 'Custom category grouping.' },
              ].map(param => (
                <div key={param.name} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '1rem', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <code style={{ color: '#2cc085', fontFamily: 'monospace' }}>{param.name}</code>
                    {param.req && <span style={{ color: '#f87171', fontSize: '0.7rem' }}>*</span>}
                  </div>
                  <div style={{ color: '#94a3b8' }}>
                    {param.desc} <span style={{ color: '#64748b', fontSize: '0.75rem' }}>({param.type})</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Code Example Area (Stripe style) */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ position: 'sticky', top: '80px', height: 'fit-content' }}
        >
          <div className="glass-card" style={{ padding: 0, overflow: 'hidden', background: '#07080f' }}>
            <div style={{
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              background: 'rgba(255,255,255,0.02)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600 }}>
                <Terminal size={14} /> cURL
              </div>
              <button style={{
                background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.7rem'
              }}>
                <Copy size={12} /> Copy
              </button>
            </div>
            
            <pre style={{
              margin: 0, padding: '1.5rem',
              fontSize: '0.8rem', fontFamily: 'monospace',
              color: '#cbd5e1', lineHeight: 1.6,
              overflowX: 'auto',
            }}>
              {curlExample}
            </pre>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
