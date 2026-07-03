import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, PenTool } from 'lucide-react';

const LEFT_DAYS = [
  { key: 'monday', label: 'Monday' },
  { key: 'tuesday', label: 'Tuesday', today: true },
  { key: 'wednesday', label: 'Wednesday' },
];

const RIGHT_DAYS = [
  { key: 'thursday', label: 'Thursday' },
  { key: 'friday', label: 'Friday' },
  { key: 'saturday', label: 'Saturday', weekend: true },
  { key: 'sunday', label: 'Sunday', weekend: true },
];

export default function DiaryView({ diaryNotes, handleDiaryChange, isMobile }) {
  const renderDay = (day) => (
    <div key={day.key} style={{ marginBottom: '1.5rem', position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
        <h4 style={{ 
          fontFamily: '"Newsreader", "Playfair Display", serif', 
          fontSize: '1.2rem', 
          fontWeight: 700, 
          color: day.weekend ? '#94a3b8' : '#334155',
          margin: 0,
          fontStyle: 'italic'
        }}>
          {day.label}
        </h4>
        {day.today && (
          <span style={{ fontSize: '0.65rem', fontWeight: 800, color: '#2cc085', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            Today
          </span>
        )}
      </div>
      
      <textarea
        value={diaryNotes[day.key] || ''}
        onChange={e => handleDiaryChange(day.key, e.target.value)}
        placeholder={`Dear Diary, on ${day.label}...`}
        style={{
          width: '100%',
          background: 'transparent',
          border: 'none',
          borderBottom: '1px solid rgba(0,0,0,0.1)',
          color: '#1e293b',
          fontSize: '0.95rem',
          lineHeight: '1.8rem',
          resize: 'none',
          outline: 'none',
          minHeight: '80px',
          fontFamily: 'Inter, sans-serif'
        }}
      />
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', alignItems: 'center' }}>
      
      {/* Diary Header */}
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <h2 style={{ fontFamily: '"Newsreader", serif', fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem 0' }}>Personal Diary</h2>
        <p style={{ color: '#94a3b8', margin: 0 }}>June 29 — July 5, 2026</p>
      </div>

      {/* Book Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          width: '100%',
          maxWidth: '1000px',
          background: '#2d3748', // Leather cover color
          borderRadius: '16px',
          padding: '12px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 2px 5px rgba(255,255,255,0.1)',
          position: 'relative'
        }}
      >
        {/* The Pages Spread */}
        <div style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          background: '#f8fafc', // Paper color
          borderRadius: '8px',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 20px rgba(0,0,0,0.05)',
          position: 'relative'
        }}>
          
          {/* Center Binding Crease (Only on desktop) */}
          {!isMobile && (
            <div style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: '50%',
              width: '40px',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 20%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.08) 80%, transparent 100%)',
              zIndex: 10,
              pointerEvents: 'none'
            }} />
          )}

          {/* Left Page */}
          <div style={{
            flex: 1,
            padding: isMobile ? '2rem 1.5rem' : '3rem 4rem 3rem 3rem',
            position: 'relative'
          }}>
            {/* Lined paper background pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(transparent 95%, rgba(0,0,0,0.04) 100%)',
              backgroundSize: '100% 1.8rem',
              pointerEvents: 'none',
              marginTop: '3.5rem'
            }} />
            
            <div style={{ position: 'relative', zIndex: 5 }}>
              {LEFT_DAYS.map(renderDay)}
            </div>
          </div>

          {/* Right Page */}
          <div style={{
            flex: 1,
            padding: isMobile ? '2rem 1.5rem' : '3rem 3rem 3rem 4rem',
            position: 'relative',
            borderLeft: isMobile ? 'none' : '1px solid rgba(0,0,0,0.05)'
          }}>
            {/* Lined paper background pattern */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(transparent 95%, rgba(0,0,0,0.04) 100%)',
              backgroundSize: '100% 1.8rem',
              pointerEvents: 'none',
              marginTop: '3.5rem'
            }} />
            
            <div style={{ position: 'relative', zIndex: 5 }}>
              {RIGHT_DAYS.map(renderDay)}
              
              {/* AI Reflection Block embedded in the right page */}
              <div style={{
                marginTop: '3rem',
                padding: '1.5rem',
                background: 'rgba(99,102,241,0.05)',
                border: '1px dashed rgba(99,102,241,0.3)',
                borderRadius: '8px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  <Sparkles size={16} style={{ color: '#0284c7' }} />
                  <h5 style={{ margin: 0, color: '#0284c7', fontWeight: 800, fontSize: '0.85rem' }}>AI Reflection</h5>
                </div>
                <p style={{ margin: 0, color: '#334155', fontSize: '0.85rem', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "You've had a strong focus on team alignment this week. Your entries indicate productive standups but slight frustration with GitLab delays. Consider blocking out Focus time on Thursday to clear the backlog."
                </p>
              </div>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
