import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles, Sun, FolderGit2, CheckSquare, Calendar,
  MessageSquare, BookOpen, Book, Link as LinkIcon, Mic,
  Settings, FileCode, LogOut, ChevronLeft, ChevronRight,
  Zap
} from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Focus',       icon: Sparkles,      group: 'main' },
  { name: 'My Day',      icon: Sun,           group: 'main' },
  { name: 'Projects',    icon: FolderGit2,    group: 'main' },
  { name: 'Tasks',       icon: CheckSquare,   group: 'main' },
  { name: 'Calendar',    icon: Calendar,      group: 'main' },
  { name: 'Chat',        icon: MessageSquare, group: 'main' },
  { name: 'Notebook',    icon: BookOpen,      group: 'tools' },
  { name: 'Diary',       icon: Book,          group: 'tools' },
  { name: 'Links',       icon: LinkIcon,      group: 'tools' },
  { name: 'Voice Memos', icon: Mic,           group: 'tools' },
  { name: 'Settings',    icon: Settings,      group: 'system' },
  { name: 'API Docs',    icon: FileCode,      group: 'system' },
];

export default function DashboardSidebar({ activeTab, setActiveTab, collapsed, setCollapsed, onLogout, isMobile, mobileOpen }) {
  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {isMobile && mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setCollapsed(true)}
            style={{
              position: 'fixed', inset: 0, zIndex: 49,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(4px)',
            }}
          />
        )}
      </AnimatePresence>

      <aside
        className={`dash-sidebar${collapsed && !isMobile ? ' collapsed' : ''}${isMobile && mobileOpen ? ' mobile-open' : ''}`}
        style={{ zIndex: 50 }}
      >
        {/* Logo + Collapse Toggle */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed && !isMobile ? 'center' : 'space-between',
          padding: collapsed && !isMobile ? '1.1rem 0' : '1.1rem 1rem',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
          minHeight: '56px',
          flexShrink: 0,
        }}>
          <AnimatePresence mode="wait">
            {(!collapsed || isMobile) && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -8 }}
                transition={{ duration: 0.2 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}
              >
                <img src="/logo.png" alt="OwnTasks" style={{ height: '28px', objectFit: 'contain', display: 'block' }} />
              </motion.div>
            )}
          </AnimatePresence>

          {collapsed && !isMobile && (
            <div style={{ width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
              <img src="/logo.png" alt="OwnTasks" style={{ height: '24px', objectFit: 'contain', objectPosition: 'left center' }} />
            </div>
          )}

          {!isMobile && (
            <button
              onClick={() => setCollapsed(p => !p)}
              style={{
                width: '24px', height: '24px', borderRadius: '6px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#64748b', cursor: 'pointer', flexShrink: 0,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e2e8f0'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
              onMouseLeave={e => { e.currentTarget.style.color = '#64748b'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'; }}
            >
              {collapsed ? <ChevronRight size={13} /> : <ChevronLeft size={13} />}
            </button>
          )}
        </div>

        {/* Nav Items */}
        <nav style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', padding: '0.75rem 0', display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {['main', 'tools', 'system'].map(group => {
            const items = NAV_ITEMS.filter(i => i.group === group);
            const labels = { main: 'Workspace', tools: 'Tools', system: 'System' };
            return (
              <div key={group}>
                <AnimatePresence>
                  {(!collapsed || isMobile) && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      style={{
                        padding: '0.5rem 1.35rem 0.25rem',
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.12em',
                        color: 'rgba(255,255,255,0.2)',
                      }}
                    >
                      {labels[group]}
                    </motion.div>
                  )}
                </AnimatePresence>

                {items.map(({ name, icon: Icon }) => {
                  const isActive = activeTab === name;
                  return (
                    <motion.button
                      key={name}
                      onClick={() => setActiveTab(name)}
                      whileTap={{ scale: 0.97 }}
                      className={`sidebar-nav-item${isActive ? ' active' : ''}`}
                      style={{
                        justifyContent: collapsed && !isMobile ? 'center' : 'flex-start',
                        padding: collapsed && !isMobile ? '0.6rem' : '0.6rem 0.85rem',
                        margin: '0 0.5rem',
                      }}
                      title={collapsed && !isMobile ? name : undefined}
                    >
                      <Icon size={17} style={{ flexShrink: 0 }} />
                      <AnimatePresence>
                        {(!collapsed || isMobile) && (
                          <motion.span
                            initial={{ opacity: 0, width: 0 }}
                            animate={{ opacity: 1, width: 'auto' }}
                            exit={{ opacity: 0, width: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                          >
                            {name}
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  );
                })}
              </div>
            );
          })}
        </nav>

        {/* Bottom: Workspace + Logout */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.05)',
          padding: '0.75rem 0.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.4rem',
          flexShrink: 0,
        }}>
          <AnimatePresence>
            {(!collapsed || isMobile) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  padding: '0.6rem 0.85rem',
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255,255,255,0.06)',
                  margin: '0',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{
                    width: '26px', height: '26px', borderRadius: '8px', flexShrink: 0,
                    background: 'linear-gradient(135deg, #2cc085, #a78bfa)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.7rem', fontWeight: 900, color: '#030712',
                  }}>
                    B
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#e2e8f0', lineHeight: 1.2 }}>Workspace</div>
                    <div style={{ fontSize: '0.62rem', color: '#64748b' }}>OwnTasks</div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={onLogout}
            className="sidebar-nav-item"
            style={{
              justifyContent: collapsed && !isMobile ? 'center' : 'flex-start',
              padding: collapsed && !isMobile ? '0.6rem' : '0.6rem 0.85rem',
              color: '#f87171',
              margin: '0',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(248,113,113,0.08)'; e.currentTarget.style.borderColor = 'rgba(248,113,113,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = ''; e.currentTarget.style.borderColor = 'transparent'; }}
            title={collapsed && !isMobile ? 'Sign Out' : undefined}
          >
            <LogOut size={16} style={{ flexShrink: 0 }} />
            <AnimatePresence>
              {(!collapsed || isMobile) && (
                <motion.span
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}
                >
                  Sign Out
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </aside>
    </>
  );
}
