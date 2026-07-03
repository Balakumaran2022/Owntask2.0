import React from 'react';
import { motion } from 'framer-motion';
import { Sun, CheckCircle2, Circle, Sparkles } from 'lucide-react';

const today = new Date().toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' });

const AI_SUGGESTIONS = [
  'Review GitLab MR #42 before standup',
  'Block 2 hrs for deep work this afternoon',
  'Follow up on sprint planning notes',
];

export default function MyDayView({ tasks, setTasks }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '760px' }}>
      <div className="dash-page-header">
        <h2>My Day</h2>
        <p>{today} — Move through today's highest-impact work.</p>
      </div>

      {/* AI Suggestions */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card glass-card-blue"
        style={{ padding: '1.25rem' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem' }}>
          <Sparkles size={15} style={{ color: '#2cc085' }} />
          <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2cc085', textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            AI Suggestions for Today
          </span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {AI_SUGGESTIONS.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2cc085', flexShrink: 0 }} />
              <span style={{ fontSize: '0.82rem', color: '#94a3b8' }}>{s}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Task List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {tasks.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card"
            style={{ padding: '3rem 2rem', textAlign: 'center' }}
          >
            <Sun size={36} style={{ color: '#2cc085', margin: '0 auto 1rem', display: 'block', opacity: 0.4 }} />
            <p style={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 600 }}>Your day is clear.</p>
            <p style={{ color: '#475569', fontSize: '0.8rem', marginTop: '0.35rem' }}>Add tasks from the Tasks tab.</p>
          </motion.div>
        ) : (
          tasks.map((t, i) => {
            const isDone = t.status === 'done';
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => !isDone && setTasks(prev => prev.map(x => x.id === t.id ? { ...x, status: 'done' } : x))}
                className="glass-card"
                style={{
                  padding: '1rem 1.25rem',
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  cursor: isDone ? 'default' : 'pointer',
                  opacity: isDone ? 0.6 : 1,
                  borderColor: isDone ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.07)',
                }}
              >
                {isDone
                  ? <CheckCircle2 size={20} style={{ color: '#34d399', flexShrink: 0 }} />
                  : <Circle size={20} style={{ color: '#475569', flexShrink: 0 }} />
                }
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{
                    fontSize: '0.88rem', fontWeight: 600, color: isDone ? '#64748b' : '#e2e8f0',
                    textDecoration: isDone ? 'line-through' : 'none',
                    whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                  }}>
                    {t.title}
                  </div>
                  <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '0.15rem' }}>
                    {t.category} · {t.priority}
                  </div>
                </div>
                <span className={`dash-badge ${
                  isDone ? 'dash-badge-green'
                  : t.priority === 'High' ? 'dash-badge-red'
                  : t.status === 'in-progress' ? 'dash-badge-blue'
                  : 'dash-badge-gray'
                }`}>
                  {isDone ? 'Done' : t.status === 'in-progress' ? 'Active' : t.priority}
                </span>
              </motion.div>
            );
          })
        )}
      </div>
    </div>
  );
}
