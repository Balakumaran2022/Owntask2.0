import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Save, History, Sparkles, Languages, Bold, Italic, List, Type } from 'lucide-react';

export default function NotebookView({ noteTitle, setNoteTitle, noteContent, setNoteContent }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: 'calc(100vh - 120px)' }}>
      <div className="dash-page-header" style={{ marginBottom: 0 }}>
        <h2>Notebook</h2>
        <p>Your premium workspace for thoughts, meetings, and strategy.</p>
      </div>

      {/* Editor Container */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          overflow: 'hidden',
          padding: 0,
        }}
      >
        {/* Editor Toolbar */}
        <div style={{
          padding: '0.75rem 1.25rem',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {[
              { icon: Type, label: 'Text' },
              { icon: Bold, label: 'Bold' },
              { icon: Italic, label: 'Italic' },
              { icon: List, label: 'List' },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                style={{
                  width: '32px', height: '32px', borderRadius: '8px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: 'transparent', border: '1px solid transparent',
                  color: '#94a3b8', cursor: 'pointer', transition: 'all 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#e2e8f0'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
              >
                <Icon size={15} />
              </button>
            ))}
            
            <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)', margin: '0 0.2rem' }} />

            <button
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0 0.75rem', borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(167,139,250,0.15), rgba(99,102,241,0.1))',
                border: '1px solid rgba(167,139,250,0.25)',
                color: '#a78bfa', fontSize: '0.75rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.filter = 'brightness(1.15)'}
              onMouseLeave={e => e.currentTarget.style.filter = 'brightness(1)'}
            >
              <Sparkles size={13} />
              AI Rewrite
            </button>
            <button
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                padding: '0 0.75rem', borderRadius: '8px',
                background: 'transparent', border: '1px solid transparent',
                color: '#94a3b8', fontSize: '0.75rem', fontWeight: 700,
                cursor: 'pointer', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = '#e2e8f0'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
            >
              <Languages size={13} />
              Translate
            </button>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Last edited 2 mins ago</span>
            <button style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              padding: '0.4rem 0.75rem', borderRadius: '8px',
              background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)',
              color: '#e2e8f0', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer',
            }}>
              <History size={13} /> History
            </button>
          </div>
        </div>

        {/* Paper Area */}
        <div style={{
          position: 'relative',
          flex: 1,
          background: '#07080f',
          overflowY: 'auto',
          padding: '2rem 10% 4rem',
        }}>
          {/* subtle paper lines background */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
            backgroundSize: '100% 2.4rem',
            pointerEvents: 'none',
            marginTop: '2.4rem'
          }} />

          <div style={{ position: 'relative', zIndex: 5, maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            <input
              type="text"
              placeholder="Untitled"
              value={noteTitle}
              onChange={e => setNoteTitle(e.target.value)}
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: '#f8fafc', fontSize: '2.2rem', fontWeight: 800,
                letterSpacing: '-0.03em', width: '100%',
                padding: '1rem 0',
              }}
            />
            
            <textarea
              placeholder="Press '/' for commands or start typing..."
              value={noteContent}
              onChange={e => setNoteContent(e.target.value)}
              style={{
                background: 'transparent', border: 'none', outline: 'none',
                color: '#cbd5e1', fontSize: '1.05rem', lineHeight: '2.4rem',
                width: '100%', minHeight: '500px', resize: 'none',
                padding: '0', margin: '0',
                fontFamily: 'Inter, sans-serif'
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
