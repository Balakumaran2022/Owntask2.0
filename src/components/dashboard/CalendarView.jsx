import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAYS = ['MON 29', 'TUE 30', 'WED 1', 'THU 2', 'FRI 3', 'SAT 4', 'SUN 5'];
const HOURS = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const TODAY = 'TUE 30';

const EVENTS = [
  { day: 'TUE 30', hour: 10, title: 'Team Standup', color: '#2cc085' },
  { day: 'TUE 30', hour: 17, title: 'AI Align', color: '#a78bfa' },
  { day: 'WED 1',  hour: 14, title: 'Sprint Review', color: '#34d399' },
];

export default function CalendarView({ isMobile }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="dash-page-header" style={{ marginBottom: 0 }}>
          <h2>Calendar</h2>
          <p>AI-powered planner & Google Calendar sync.</p>
        </div>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button className="dash-btn dash-btn-ghost" style={{ padding: '0.45rem 0.75rem' }}><ChevronLeft size={15} /></button>
          <button className="dash-btn dash-btn-ghost" style={{ padding: '0.45rem 1rem', fontSize: '0.8rem', fontWeight: 700 }}>Jun 29 – Jul 5, 2026</button>
          <button className="dash-btn dash-btn-ghost" style={{ padding: '0.45rem 0.75rem' }}><ChevronRight size={15} /></button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card"
        style={{ overflow: 'auto', padding: '0' }}
      >
        <div style={{
          display: 'grid',
          gridTemplateColumns: `64px repeat(${DAYS.length}, minmax(90px, 1fr))`,
          minWidth: '660px',
        }}>
          {/* Header row */}
          <div style={{ padding: '0.75rem', borderBottom: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }} />
          {DAYS.map(day => (
            <div key={day} style={{
              padding: '0.75rem 0.5rem',
              textAlign: 'center',
              fontSize: '0.72rem', fontWeight: 800,
              color: day === TODAY ? '#2cc085' : '#64748b',
              background: day === TODAY ? 'rgba(99,102,241,0.06)' : 'rgba(255,255,255,0.02)',
              borderLeft: '1px solid rgba(255,255,255,0.06)',
              borderBottom: '1px solid rgba(255,255,255,0.06)',
            }}>
              {day}
              {day === TODAY && (
                <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#2cc085', margin: '4px auto 0', boxShadow: '0 0 6px #2cc085' }} />
              )}
            </div>
          ))}

          {/* Hour rows */}
          {HOURS.map(hour => (
            <React.Fragment key={hour}>
              <div style={{
                padding: '0 0.5rem',
                borderRight: '1px solid rgba(255,255,255,0.06)',
                borderBottom: '1px solid rgba(255,255,255,0.04)',
                fontSize: '0.65rem', color: '#334155',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-end',
                paddingTop: '0.4rem',
                minHeight: '56px',
              }}>
                {hour}:00
              </div>

              {DAYS.map(day => {
                const event = EVENTS.find(e => e.day === day && e.hour === hour);
                return (
                  <div key={day} style={{
                    borderLeft: '1px solid rgba(255,255,255,0.04)',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    background: day === TODAY ? 'rgba(99,102,241,0.02)' : 'transparent',
                    position: 'relative',
                    minHeight: '56px',
                  }}>
                    {event && (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        style={{
                          position: 'absolute', inset: '4px',
                          background: `${event.color}20`,
                          border: `1px solid ${event.color}40`,
                          borderLeft: `3px solid ${event.color}`,
                          borderRadius: '6px',
                          padding: '4px 8px',
                          fontSize: '0.68rem', fontWeight: 700,
                          color: event.color,
                          cursor: 'pointer',
                          display: 'flex', flexDirection: 'column', justifyContent: 'center',
                        }}
                      >
                        <span>{event.title}</span>
                        <span style={{ fontWeight: 400, opacity: 0.7 }}>{hour}:00</span>
                      </motion.div>
                    )}
                  </div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
