import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Bell, Plus, Menu, Command, Sparkles, X } from 'lucide-react';

export default function DashboardTopBar({ activeTab, collapsed, onMenuClick, isMobile }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchVal, setSearchVal] = useState('');

  return (
    <header className={`dash-topbar${collapsed && !isMobile ? ' collapsed' : ''}`}>

      {/* Left: menu + breadcrumb */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flex: 1 }}>
        {isMobile && (
          <button
            onClick={onMenuClick}
            style={{
              width: '34px', height: '34px', borderRadius: '9px', flexShrink: 0,
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.08)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#94a3b8', cursor: 'pointer',
            }}
          >
            <Menu size={16} />
          </button>
        )}

        {/* Search bar */}
        <div style={{ position: 'relative', flex: 1, maxWidth: '420px' }}>
          <div
            onClick={() => setSearchOpen(true)}
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              padding: '0.45rem 0.9rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
          >
            <Search size={14} style={{ color: '#64748b', flexShrink: 0 }} />
            <span style={{ fontSize: '0.82rem', color: '#475569', flex: 1 }}>
              {searchOpen ? (
                <input
                  autoFocus
                  value={searchVal}
                  onChange={e => setSearchVal(e.target.value)}
                  onBlur={() => { setSearchOpen(false); setSearchVal(''); }}
                  placeholder="Search anything..."
                  style={{ background: 'none', border: 'none', outline: 'none', color: '#e2e8f0', fontSize: '0.82rem', width: '100%' }}
                />
              ) : (
                'Search...'
              )}
            </span>
            {!searchOpen && (
              <kbd style={{
                display: 'flex', alignItems: 'center', gap: '2px',
                padding: '0.1rem 0.4rem', borderRadius: '5px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                fontSize: '0.62rem', color: '#475569', fontFamily: 'monospace', flexShrink: 0,
              }}>
                <Command size={9} />K
              </kbd>
            )}
          </div>
        </div>
      </div>

      {/* Center: page name */}
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTab}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2 }}
            style={{ fontSize: '0.82rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.02em' }}
          >
            {activeTab}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Right: actions */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>

        {/* AI Button */}
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          style={{
            display: 'flex', alignItems: 'center', gap: '0.4rem',
            padding: '0.4rem 0.85rem',
            background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(167,139,250,0.12))',
            border: '1px solid rgba(99,102,241,0.25)',
            borderRadius: '10px',
            color: '#2cc085',
            fontSize: '0.75rem', fontWeight: 700,
            cursor: 'pointer',
            boxShadow: '0 0 14px rgba(99,102,241,0.1)',
          }}
        >
          <Sparkles size={13} />
          {!isMobile && 'AI'}
        </motion.button>

        {/* Notifications */}
        <div style={{ position: 'relative' }}>
          <button style={{
            width: '34px', height: '34px', borderRadius: '9px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.08)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#64748b', cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
          >
            <Bell size={15} />
          </button>
          <span style={{
            position: 'absolute', top: '6px', right: '7px',
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#2cc085',
            boxShadow: '0 0 6px rgba(99,102,241,0.8)',
            border: '1.5px solid #07080f',
          }} />
        </div>

        {/* Quick Create */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            width: '34px', height: '34px', borderRadius: '9px',
            background: 'linear-gradient(135deg, #2cc085, #10b981)',
            border: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#030712', cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(99,102,241,0.3)',
          }}
        >
          <Plus size={17} strokeWidth={2.5} />
        </motion.button>

        {/* Avatar */}
        <div style={{
          width: '32px', height: '32px', borderRadius: '9px', flexShrink: 0,
          background: 'linear-gradient(135deg, #2cc085, #a78bfa)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.75rem', fontWeight: 900, color: '#030712',
          cursor: 'pointer',
          border: '2px solid rgba(99,102,241,0.3)',
        }}>
          B
        </div>
      </div>
    </header>
  );
}
