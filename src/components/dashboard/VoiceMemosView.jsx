import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Play, Pause, Trash2, AudioLines, FileText } from 'lucide-react';

export default function VoiceMemosView({ memos, setMemos, memoTitle, setMemoTitle, handleAddMemo, isMobile }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="dash-page-header" style={{ marginBottom: 0 }}>
          <h2>Voice Memos</h2>
          <p>Record audio, get instant transcripts, and extract AI tasks.</p>
        </div>

        <form onSubmit={handleAddMemo} style={{ display: 'flex', gap: '0.6rem' }}>
          <input
            className="dash-input"
            style={{ width: '240px' }}
            placeholder="New memo title..."
            value={memoTitle}
            onChange={e => setMemoTitle(e.target.value)}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="dash-btn dash-btn-primary"
            style={{ background: 'linear-gradient(135deg, #f43f5e, #fb7185)', boxShadow: '0 4px 14px rgba(244,63,94,0.25)', color: '#fff' }}
          >
            <Mic size={15} /> Record
          </motion.button>
        </form>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '360px 1fr', gap: '1.5rem' }}>
        
        {/* Left: Recordings List */}
        <div className="glass-card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', minHeight: '400px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '0.85rem', fontWeight: 800, color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em', margin: 0 }}>
              Recent Recordings
            </h3>
            <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700 }}>{memos.length} total</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <AnimatePresence>
              {memos.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '0.85rem',
                    padding: '0.85rem 1rem',
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '12px', cursor: 'pointer', transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; }}
                >
                  <button style={{
                    width: '32px', height: '32px', borderRadius: '50%',
                    background: 'rgba(244,63,94,0.1)', color: '#f43f5e',
                    border: '1px solid rgba(244,63,94,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, cursor: 'pointer',
                  }}>
                    <Play size={14} style={{ marginLeft: '2px' }} />
                  </button>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {m.title}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '0.15rem' }}>
                      {m.date} · {m.duration}
                    </div>
                  </div>
                  <button
                    onClick={(e) => { e.stopPropagation(); setMemos(prev => prev.filter(x => x.id !== m.id)); }}
                    style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: '0.2rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                    onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                  >
                    <Trash2 size={14} />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>

            {memos.length === 0 && (
              <div style={{ padding: '2rem 1rem', textAlign: 'center', color: '#64748b', fontSize: '0.85rem' }}>
                No recordings found.
              </div>
            )}
          </div>
        </div>

        {/* Right: Player / Transcript Area */}
        <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', minHeight: '400px', overflow: 'hidden' }}>
          {memos.length > 0 ? (
            <>
              {/* Player Header */}
              <div style={{ padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: 'linear-gradient(135deg, #f43f5e, #fb7185)',
                  boxShadow: '0 4px 14px rgba(244,63,94,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff',
                }}>
                  <Play size={20} style={{ marginLeft: '4px' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#e2e8f0', margin: 0 }}>{memos[0].title}</h3>
                  <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0.2rem 0 0 0' }}>{memos[0].date} · {memos[0].duration}</p>
                </div>
              </div>

              {/* Waveform Fake */}
              <div style={{ padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <AudioLines size={64} style={{ color: 'rgba(244,63,94,0.2)' }} />
              </div>

              {/* Transcript */}
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#a78bfa', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  <FileText size={14} /> AI Transcript Summary
                </div>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  "We need to prioritize the GitLab MR #42 today before the sprint review. Let's also make sure to block out some time for deep work this afternoon to finalize the API documentation."
                </p>
                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.75rem' }}>
                  <button className="dash-btn dash-btn-ghost" style={{ flex: 1, fontSize: '0.75rem' }}>Copy Transcript</button>
                  <button className="dash-btn dash-btn-ghost" style={{ flex: 1, fontSize: '0.75rem', color: '#2cc085', borderColor: 'rgba(99,102,241,0.3)' }}>Extract Tasks</button>
                </div>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, color: '#475569', gap: '1rem' }}>
              <Mic size={48} style={{ opacity: 0.5 }} />
              <p style={{ fontSize: '0.9rem' }}>Select a memo to view transcript.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
