import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Plus, Trash2, MoreHorizontal } from 'lucide-react';

export default function ProjectsView({ projects, setProjects, newProjectName, setNewProjectName, handleAddProject, isMobile }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="dash-page-header" style={{ marginBottom: 0 }}>
          <h2>Projects</h2>
          <p>Track, manage and deliver your active projects.</p>
        </div>

        <form onSubmit={handleAddProject} style={{ display: 'flex', gap: '0.6rem' }}>
          <input
            className="dash-input"
            style={{ width: '220px' }}
            placeholder="New project name..."
            value={newProjectName}
            onChange={e => setNewProjectName(e.target.value)}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="dash-btn dash-btn-primary"
          >
            <Plus size={15} /> Add
          </motion.button>
        </form>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        <AnimatePresence>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)' }}
              className="glass-card"
              style={{
                padding: '1.4rem',
                display: 'flex', flexDirection: 'column', gap: '1rem',
                cursor: 'default', position: 'relative', overflow: 'hidden',
              }}
            >
              {/* Gradient top accent */}
              <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                background: p.status === 'Active'
                  ? 'linear-gradient(90deg, #2cc085, #a78bfa)'
                  : 'linear-gradient(90deg, #fbbf24, #f87171)',
              }} />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                  width: '38px', height: '38px', borderRadius: '10px', flexShrink: 0,
                  background: p.status === 'Active'
                    ? 'rgba(99,102,241,0.12)'
                    : 'rgba(251,191,36,0.10)',
                  border: `1px solid ${p.status === 'Active' ? 'rgba(99,102,241,0.2)' : 'rgba(251,191,36,0.2)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <FolderGit2 size={18} style={{ color: p.status === 'Active' ? '#2cc085' : '#fbbf24' }} />
                </div>

                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span className={`dash-badge ${p.status === 'Active' ? 'dash-badge-blue' : 'dash-badge-yellow'}`}>
                    {p.status}
                  </span>
                  <button
                    onClick={() => setProjects(prev => prev.filter(x => x.id !== p.id))}
                    style={{
                      width: '26px', height: '26px', borderRadius: '6px', border: 'none',
                      background: 'rgba(248,113,113,0.08)', color: '#f87171', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(248,113,113,0.18)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'rgba(248,113,113,0.08)'}
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#e2e8f0', margin: 0, lineHeight: 1.3 }}>
                  {p.name}
                </h3>
                <p style={{ fontSize: '0.72rem', color: '#475569', marginTop: '0.3rem' }}>
                  Updated just now · 0 open tasks
                </p>
              </div>

              {/* Mock progress bar */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: '#475569', marginBottom: '0.35rem' }}>
                  <span>Progress</span>
                  <span>{p.status === 'Active' ? '45%' : '12%'}</span>
                </div>
                <div style={{ height: '4px', borderRadius: '99px', background: 'rgba(255,255,255,0.06)' }}>
                  <div style={{
                    height: '100%', borderRadius: '99px',
                    width: p.status === 'Active' ? '45%' : '12%',
                    background: p.status === 'Active' ? 'linear-gradient(90deg, #2cc085, #a78bfa)' : '#fbbf24',
                  }} />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {projects.length === 0 && (
          <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', gridColumn: '1/-1' }}>
            <FolderGit2 size={36} style={{ color: '#334155', margin: '0 auto 1rem', display: 'block' }} />
            <p style={{ color: '#64748b', fontWeight: 600 }}>No projects yet.</p>
            <p style={{ color: '#475569', fontSize: '0.82rem', marginTop: '0.35rem' }}>Add your first project above to get started.</p>
          </div>
        )}
      </div>
    </div>
  );
}
