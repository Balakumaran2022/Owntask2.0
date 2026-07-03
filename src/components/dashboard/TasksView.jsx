import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Trash2 } from 'lucide-react';

const COLS = [
  { id: 'todo',        label: 'To Do',       color: '#f87171', dot: '#f87171' },
  { id: 'in-progress', label: 'In Progress',  color: '#2cc085', dot: '#2cc085' },
  { id: 'done',        label: 'Completed',    color: '#34d399', dot: '#34d399' },
];

export default function TasksView({ tasks, setTasks, newTaskTitle, setNewTaskTitle, handleAddTask, isMobile }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="dash-page-header" style={{ marginBottom: 0 }}>
          <h2>Tasks</h2>
          <p>Manage and advance your workspace checklist.</p>
        </div>

        <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '0.6rem' }}>
          <input
            className="dash-input"
            style={{ width: '260px' }}
            placeholder="New task..."
            value={newTaskTitle}
            onChange={e => setNewTaskTitle(e.target.value)}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="dash-btn dash-btn-primary"
          >
            <Plus size={15} /> Add Task
          </motion.button>
        </form>
      </div>

      {/* Kanban Board */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1rem' }}>
        {COLS.map(col => {
          const items = tasks.filter(t => t.status === col.id);
          return (
            <div key={col.id} className="kanban-col">
              {/* Column Header */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: col.dot, flexShrink: 0, boxShadow: `0 0 6px ${col.dot}80` }} />
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                    {col.label}
                  </span>
                </div>
                <span style={{
                  minWidth: '22px', height: '22px', borderRadius: '6px', padding: '0 0.4rem',
                  background: `${col.dot}18`, border: `1px solid ${col.dot}30`,
                  color: col.dot, fontSize: '0.7rem', fontWeight: 800,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {items.length}
                </span>
              </div>

              {/* Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                <AnimatePresence>
                  {items.map((t, i) => (
                    <motion.div
                      key={t.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: i * 0.04 }}
                      className="task-item"
                    >
                      <div style={{ fontSize: '0.6rem', fontWeight: 800, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.35rem' }}>
                        {t.category || 'Work'}
                      </div>
                      <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#e2e8f0', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                        {t.title}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem' }}>
                        <span className={`dash-badge ${
                          t.priority === 'High' || t.priority === 'AI Suggested' ? 'dash-badge-purple' : 'dash-badge-gray'
                        }`}>
                          {t.priority}
                        </span>
                        <div style={{ display: 'flex', gap: '0.35rem' }}>
                          <button
                            onClick={() => setTasks(prev => prev.filter(x => x.id !== t.id))}
                            className="dash-btn dash-btn-danger"
                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem', borderRadius: '6px' }}
                          >
                            <Trash2 size={11} />
                          </button>
                          {col.id !== 'todo' && (
                            <button
                              onClick={() => setTasks(prev => prev.map(x => x.id === t.id ? { ...x, status: col.id === 'done' ? 'in-progress' : 'todo' } : x))}
                              className="dash-btn dash-btn-ghost"
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem', borderRadius: '6px' }}
                            >
                              ←
                            </button>
                          )}
                          {col.id !== 'done' && (
                            <button
                              onClick={() => setTasks(prev => prev.map(x => x.id === t.id ? { ...x, status: col.id === 'todo' ? 'in-progress' : 'done' } : x))}
                              className="dash-btn dash-btn-primary"
                              style={{ padding: '0.25rem 0.5rem', fontSize: '0.7rem', borderRadius: '6px' }}
                            >
                              →
                            </button>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {items.length === 0 && (
                  <div style={{
                    padding: '1.5rem',
                    textAlign: 'center',
                    color: '#334155',
                    fontSize: '0.78rem',
                    border: '1px dashed rgba(255,255,255,0.06)',
                    borderRadius: '10px',
                  }}>
                    No tasks here
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
