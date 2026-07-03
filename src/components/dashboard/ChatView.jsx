import React, { useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Sparkles, Bot } from 'lucide-react';

export default function ChatView({ messages, chatInput, setChatInput, handleSendMessage }) {
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div className="dash-page-header">
        <h2>AI Chat</h2>
        <p>Your context-aware AI co-pilot. Ask anything about your workspace.</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          display: 'grid',
          gridTemplateColumns: '220px 1fr',
          gap: '0',
          height: '68vh',
          overflow: 'hidden',
          borderRadius: '20px',
          border: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(255,255,255,0.02)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Sidebar */}
        <div style={{
          borderRight: '1px solid rgba(255,255,255,0.06)',
          padding: '1rem',
          display: 'flex', flexDirection: 'column', gap: '0.75rem',
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#334155', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '0 0.25rem' }}>
            Conversations
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '0.6rem',
            padding: '0.65rem 0.85rem', borderRadius: '10px',
            background: 'rgba(99,102,241,0.1)',
            border: '1px solid rgba(99,102,241,0.2)',
            color: '#2cc085', fontSize: '0.82rem', fontWeight: 700,
            cursor: 'pointer', textAlign: 'left',
          }}>
            <Sparkles size={14} />
            AI Co-pilot Chat
          </button>
        </div>

        {/* Chat area */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
          {/* Messages */}
          <div style={{ flex: 1, padding: '1.25rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <AnimatePresence initial={false}>
              {messages.map(msg => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    display: 'flex',
                    justifyContent: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                    gap: '0.6rem',
                    alignItems: 'flex-end',
                  }}
                >
                  {msg.sender !== 'You' && (
                    <div style={{
                      width: '28px', height: '28px', borderRadius: '8px', flexShrink: 0,
                      background: 'linear-gradient(135deg, rgba(99,102,241,0.2), rgba(167,139,250,0.2))',
                      border: '1px solid rgba(99,102,241,0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Bot size={14} style={{ color: '#2cc085' }} />
                    </div>
                  )}

                  <div style={{ maxWidth: '72%' }}>
                    <div style={{
                      padding: '0.75rem 1rem',
                      borderRadius: msg.sender === 'You' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                      background: msg.sender === 'You'
                        ? 'linear-gradient(135deg, rgba(99,102,241,0.18), rgba(16,185,129,0.14))'
                        : 'rgba(255,255,255,0.05)',
                      border: msg.sender === 'You'
                        ? '1px solid rgba(99,102,241,0.25)'
                        : '1px solid rgba(255,255,255,0.08)',
                    }}>
                      <p style={{ fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
                        {msg.text}
                      </p>
                    </div>
                    <div style={{ fontSize: '0.62rem', color: '#334155', marginTop: '0.25rem', textAlign: msg.sender === 'You' ? 'right' : 'left', padding: '0 0.25rem' }}>
                      {msg.time}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSendMessage}
            style={{
              padding: '1rem',
              borderTop: '1px solid rgba(255,255,255,0.06)',
              display: 'flex', gap: '0.6rem',
              background: 'rgba(0,0,0,0.2)',
            }}
          >
            <input
              className="dash-input"
              placeholder="Message AI Co-pilot... (try: 'add task review PR')"
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
            />
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="dash-btn dash-btn-primary"
              style={{ padding: '0.6rem 1rem', flexShrink: 0 }}
            >
              <Send size={15} />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
