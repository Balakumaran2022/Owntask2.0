import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Pause, Play, FolderGit2, Zap, Target } from 'lucide-react';

function StatRing({ value, max, color, size = 120 }) {
  const r = 45;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  const offset = circ * (1 - pct);
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
      <circle cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="8" />
      <circle cx="50" cy="50" r={r} fill="none" stroke={color} strokeWidth="8"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round"
        style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.16,1,0.3,1)' }}
      />
    </svg>
  );
}

export default function FocusView({ timerActive, timeLeft, toggleTimer, selectTimerDuration, formatTime, projects }) {
  const pct = (1500 - timeLeft) / 1500;
  const r = 88;
  const circ = 2 * Math.PI * r;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      {/* Header */}
      <div className="dash-page-header">
        <h2>Focus</h2>
        <p>Your dedicated deep work session center.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '1.5rem' }}>

        {/* Timer Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', gridColumn: 'span 1' }}
        >
          <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            Focus Session
          </div>

          {/* SVG Ring Timer */}
          <div style={{ position: 'relative', width: '200px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="200" height="200" viewBox="0 0 200 200" style={{ position: 'absolute', inset: 0, transform: 'rotate(-90deg)' }}>
              <circle cx="100" cy="100" r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="10" />
              <circle cx="100" cy="100" r={r} fill="none"
                stroke="url(#timerGrad)"
                strokeWidth="10"
                strokeDasharray={circ}
                strokeDashoffset={circ * (1 - pct)}
                strokeLinecap="round"
                style={{ transition: 'stroke-dashoffset 0.8s ease' }}
              />
              <defs>
                <linearGradient id="timerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2cc085" />
                  <stop offset="100%" stopColor="#a78bfa" />
                </linearGradient>
              </defs>
            </svg>

            {timerActive && (
              <motion.div
                style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
                }}
                animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            )}

            <div style={{ textAlign: 'center', zIndex: 1 }}>
              <div style={{ fontSize: '2.6rem', fontWeight: 900, color: '#e2e8f0', letterSpacing: '-0.04em', lineHeight: 1 }}>
                {formatTime(timeLeft)}
              </div>
              <div style={{ fontSize: '0.7rem', color: '#475569', marginTop: '0.25rem' }}>
                {timerActive ? 'in session' : 'ready'}
              </div>
            </div>
          </div>

          {/* Duration presets */}
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            {[15, 25, 50].map(m => (
              <button
                key={m}
                onClick={() => selectTimerDuration(m)}
                style={{
                  padding: '0.3rem 0.7rem',
                  borderRadius: '8px',
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  background: timeLeft === m * 60 ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.05)',
                  color: timeLeft === m * 60 ? '#2cc085' : '#64748b',
                  border: `1px solid ${timeLeft === m * 60 ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.08)'}`,
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
              >
                {m}m
              </button>
            ))}
          </div>

          <motion.button
            onClick={toggleTimer}
            whileHover={{ scale: 1.03, boxShadow: '0 8px 28px rgba(99,102,241,0.4)' }}
            whileTap={{ scale: 0.97 }}
            style={{
              width: '100%',
              padding: '0.75rem',
              borderRadius: '12px',
              background: timerActive
                ? 'rgba(248,113,113,0.12)'
                : 'linear-gradient(135deg, #2cc085, #10b981)',
              border: timerActive ? '1px solid rgba(248,113,113,0.25)' : 'none',
              color: timerActive ? '#f87171' : '#030712',
              fontWeight: 800, fontSize: '0.9rem',
              cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              boxShadow: timerActive ? 'none' : '0 4px 16px rgba(99,102,241,0.3)',
            }}
          >
            {timerActive ? <><Pause size={16} /> Pause</> : <><Play size={16} /> Start Session</>}
          </motion.button>
        </motion.div>

        {/* Projects Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card"
          style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FolderGit2 size={16} style={{ color: '#2cc085' }} />
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Projects Health
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <StatRing value={projects.filter(p => p.status === 'Active').length} max={projects.length || 1} color="#2cc085" size={90} />
              <div style={{
                position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.2rem', fontWeight: 900, color: '#e2e8f0',
              }}>
                {projects.filter(p => p.status === 'Active').length}
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
              {[
                { dot: '#34d399', label: 'Active', count: projects.filter(p => p.status === 'Active').length },
                { dot: '#fbbf24', label: 'Paused', count: projects.filter(p => p.status === 'Paused').length },
                { dot: '#f87171', label: 'Critical', count: 0 },
              ].map(({ dot, label, count }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: dot, display: 'inline-block', flexShrink: 0 }} />
                  <span>{count} {label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {projects.slice(0, 3).map(p => (
              <div key={p.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.6rem 0.85rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '10px',
                border: '1px solid rgba(255,255,255,0.06)',
              }}>
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#e2e8f0' }}>{p.name}</span>
                <span className={`dash-badge ${p.status === 'Active' ? 'dash-badge-green' : 'dash-badge-yellow'}`}>
                  {p.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Pulse */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card"
          style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Zap size={15} style={{ color: '#fbbf24' }} />
            <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              AI Priority Pulse
            </span>
          </div>

          {[
            { label: 'Focus score', value: 87, color: '#2cc085' },
            { label: 'Task velocity', value: 72, color: '#a78bfa' },
            { label: 'Completion', value: 54, color: '#34d399' },
          ].map(({ label, value, color }) => (
            <div key={label}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>{label}</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color }}>{value}%</span>
              </div>
              <div style={{ height: '8px', borderRadius: '99px', background: 'rgba(255,255,255,0.06)' }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  style={{ height: '100%', borderRadius: '99px', background: color, boxShadow: `0 0 8px ${color}60` }}
                />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 'auto', padding: '0.85rem', background: 'rgba(99,102,241,0.05)', borderRadius: '12px', border: '1px solid rgba(99,102,241,0.12)' }}>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
              <Target size={14} style={{ color: '#2cc085', flexShrink: 0, marginTop: '0.1rem' }} />
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Your focus score is above average today. Keep the session going for maximum output.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
