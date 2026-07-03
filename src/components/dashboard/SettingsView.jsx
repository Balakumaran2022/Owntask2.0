import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Bell, Palette, Globe, Shield, CreditCard, ChevronRight } from 'lucide-react';

const SECTIONS = [
  { id: 'general', icon: User, label: 'General' },
  { id: 'workspace', icon: Globe, label: 'Workspace' },
  { id: 'appearance', icon: Palette, label: 'Appearance' },
  { id: 'notifications', icon: Bell, label: 'Notifications' },
  { id: 'security', icon: Shield, label: 'Security' },
  { id: 'billing', icon: CreditCard, label: 'Billing' },
];

export default function SettingsView({ isMobile }) {
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', height: '100%' }}>
      <div className="dash-page-header" style={{ marginBottom: 0 }}>
        <h2>Settings</h2>
        <p>Manage your account, workspace, and preferences.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '240px 1fr', gap: '2rem', alignItems: 'start' }}>
        
        {/* Left Nav */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {SECTIONS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveSection(id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                padding: '0.75rem 1rem', borderRadius: '10px',
                background: activeSection === id ? 'rgba(255,255,255,0.06)' : 'transparent',
                color: activeSection === id ? '#e2e8f0' : '#64748b',
                fontSize: '0.85rem', fontWeight: 600,
                border: 'none', cursor: 'pointer', textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (activeSection !== id) e.currentTarget.style.color = '#e2e8f0'; }}
              onMouseLeave={e => { if (activeSection !== id) e.currentTarget.style.color = '#64748b'; }}
            >
              <Icon size={16} style={{ color: activeSection === id ? '#2cc085' : 'currentColor' }} />
              <span style={{ flex: 1 }}>{label}</span>
              {activeSection === id && <ChevronRight size={14} style={{ color: '#475569' }} />}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            {activeSection === 'general' && (
              <>
                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#e2e8f0', margin: '0 0 1.5rem' }}>Profile Information</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', maxWidth: '400px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem' }}>Full Name</label>
                      <input className="dash-input" defaultValue="Balakumaran" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem' }}>Email Address</label>
                      <input className="dash-input" defaultValue="balakumarancse2022@gmail.com" />
                    </div>
                  </div>
                  <div style={{ marginTop: '2rem' }}>
                    <button className="dash-btn dash-btn-primary">Save Changes</button>
                  </div>
                </div>

                <div className="glass-card" style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#e2e8f0', margin: '0 0 1.5rem' }}>Language & Region</h3>
                  <div style={{ maxWidth: '400px' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', marginBottom: '0.5rem' }}>Language</label>
                    <select className="dash-input" defaultValue="en">
                      <option value="en">English (Default)</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                    </select>
                  </div>
                </div>
              </>
            )}

            {activeSection === 'workspace' && (
              <div className="glass-card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#e2e8f0', margin: '0 0 1.5rem' }}>Work Schedule</h3>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '1.5rem' }}>Set your working days and hours for AI task planning.</p>
                
                <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
                  {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => {
                    const isWorkday = day !== 'Sat' && day !== 'Sun';
                    return (
                      <label key={day} style={{
                        display: 'flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 1rem', borderRadius: '8px',
                        background: isWorkday ? 'rgba(99,102,241,0.1)' : 'rgba(255,255,255,0.02)',
                        border: `1px solid ${isWorkday ? 'rgba(99,102,241,0.2)' : 'rgba(255,255,255,0.06)'}`,
                        color: isWorkday ? '#2cc085' : '#64748b',
                        fontSize: '0.8rem', fontWeight: 700, cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}>
                        <input type="checkbox" defaultChecked={isWorkday} style={{ accentColor: '#2cc085' }} />
                        {day}
                      </label>
                    );
                  })}
                </div>
                <button className="dash-btn dash-btn-primary">Update Schedule</button>
              </div>
            )}

            {['appearance', 'notifications', 'security', 'billing'].includes(activeSection) && (
              <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <Settings size={36} style={{ color: '#334155', margin: '0 auto 1rem', display: 'block' }} />
                <p style={{ color: '#64748b', fontWeight: 600 }}>{SECTIONS.find(s => s.id === activeSection).label} settings coming soon.</p>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </div>
  );
}
