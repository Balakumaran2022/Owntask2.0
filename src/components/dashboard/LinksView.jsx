import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ExternalLink, Hash, Search, Trash2 } from 'lucide-react';

export default function LinksView({ bookmarks, setBookmarks, bookmarkTitle, setBookmarkTitle, bookmarkUrl, setBookmarkUrl, bookmarkCategory, setBookmarkCategory, handleAddBookmark, isMobile }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div className="dash-page-header" style={{ marginBottom: 0 }}>
          <h2>Links Hub</h2>
          <p>Your curated knowledge base of essential references and tools.</p>
        </div>

        <form onSubmit={handleAddBookmark} style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
          <select
            value={bookmarkCategory}
            onChange={e => setBookmarkCategory(e.target.value)}
            className="dash-input"
            style={{ width: '120px' }}
          >
            <option value="Work">Work</option>
            <option value="Tools">Tools</option>
            <option value="References">References</option>
            <option value="Inspo">Inspo</option>
          </select>
          <input
            className="dash-input"
            style={{ width: '180px' }}
            placeholder="Title..."
            value={bookmarkTitle}
            onChange={e => setBookmarkTitle(e.target.value)}
          />
          <input
            className="dash-input"
            style={{ width: '220px' }}
            placeholder="https://..."
            value={bookmarkUrl}
            onChange={e => setBookmarkUrl(e.target.value)}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="dash-btn dash-btn-primary"
          >
            <Plus size={15} /> Save
          </motion.button>
        </form>
      </div>

      {/* Filter Row */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        {['All', 'Work', 'Tools', 'References', 'Inspo'].map((cat, i) => (
          <button key={cat} style={{
            padding: '0.35rem 0.8rem', borderRadius: '20px',
            background: i === 0 ? 'rgba(99,102,241,0.15)' : 'rgba(255,255,255,0.04)',
            color: i === 0 ? '#2cc085' : '#94a3b8',
            border: `1px solid ${i === 0 ? 'rgba(99,102,241,0.3)' : 'rgba(255,255,255,0.08)'}`,
            fontSize: '0.72rem', fontWeight: 700, cursor: 'pointer', transition: 'all 0.2s',
          }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
        <AnimatePresence>
          {bookmarks.map((b, i) => (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ delay: i * 0.05 }}
              className="glass-card"
              style={{
                display: 'flex', flexDirection: 'column',
                padding: '1.25rem', position: 'relative',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                  padding: '0.2rem 0.6rem', borderRadius: '6px',
                  background: 'rgba(255,255,255,0.06)', color: '#94a3b8',
                  fontSize: '0.65rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em'
                }}>
                  <Hash size={10} /> {b.category}
                </span>
                
                <button
                  onClick={() => setBookmarks(prev => prev.filter(x => x.id !== b.id))}
                  style={{
                    background: 'transparent', border: 'none', color: '#64748b', cursor: 'pointer',
                    padding: '0.2rem', transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f87171'}
                  onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
                >
                  <Trash2 size={14} />
                </button>
              </div>

              <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#e2e8f0', margin: '0 0 0.4rem 0', lineHeight: 1.3 }}>
                {b.title}
              </h4>

              <a
                href={b.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex', alignItems: 'center', gap: '0.4rem',
                  fontSize: '0.78rem', color: '#2cc085', textDecoration: 'none',
                  marginTop: 'auto', paddingTop: '1rem'
                }}
                onMouseEnter={e => e.currentTarget.style.textDecoration = 'underline'}
                onMouseLeave={e => e.currentTarget.style.textDecoration = 'none'}
              >
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {b.url.replace(/^https?:\/\//, '')}
                </span>
                <ExternalLink size={12} style={{ flexShrink: 0 }} />
              </a>
            </motion.div>
          ))}
        </AnimatePresence>

        {bookmarks.length === 0 && (
          <div className="glass-card" style={{ padding: '3rem 2rem', textAlign: 'center', gridColumn: '1/-1' }}>
            <Search size={36} style={{ color: '#334155', margin: '0 auto 1rem', display: 'block' }} />
            <p style={{ color: '#64748b', fontWeight: 600 }}>No links saved yet.</p>
          </div>
        )}
      </div>
    </div>
  );
}
