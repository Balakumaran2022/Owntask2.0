import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'STARTER',
    subtitle: 'Free forever · no card needed',
    price: { monthly: '$0', yearly: '$0' },
    period: 'Free Forever',
    color: '#64748B',
    borderGlow: 'border-white/10',
    buttonText: 'Get Started',
    buttonStyle: 'bg-white/10 hover:bg-white/20 text-white',
    features: [
      { text: '3 Projects', active: true },
      { text: '5 Team Members', active: true },
      { text: 'Task Boards Included', active: true },
      { text: 'Basic Recurring Tasks', active: true },
      { text: 'Basic Analytics', active: true },
      { text: '30 Days Audit Trail', active: true },
      { text: 'Community Support', active: true },
      { text: 'Ticket Boards & SLA Tracking', active: false },
      { text: 'Approval Workflows', active: false },
      { text: 'Bulk CSV Upload Engine', active: false },
    ],
  },
  {
    name: 'GROWTH',
    subtitle: 'recommended for teams',
    badge: '⭐ MOST POPULAR',
    price: { monthly: '$49', yearly: '$39' },
    period: 'Per User / Month',
    color: '#6366F1',
    borderGlow: 'border-2 border-[#7c3aed] shadow-[0_0_35px_rgba(124,58,237,0.35)] lg:scale-[1.03]',
    buttonText: 'Get Started',
    buttonStyle: 'bg-gradient-to-r from-primary via-[#8B5CF6] to-[#EC4899] text-white shadow-[0_0_25px_rgba(99,102,241,0.5)] hover:brightness-110',
    features: [
      { text: 'Unlimited Projects', active: true },
      { text: 'Up to 50 Team Members', active: true },
      { text: 'Task Boards + Ticket Boards', active: true },
      { text: 'Full SLA Tracking (Deadline + Status)', active: true },
      { text: 'Full Recurring Tasks Engine', active: true },
      { text: 'Approval Workflow', active: true },
      { text: 'Custom Fields & Task Library', active: true },
      { text: 'Bulk CSV Upload Engine', active: true },
      { text: 'Advanced Analytics & 1-Yr Audit', active: true },
      { text: 'Email Support & Escalation Config', active: true },
    ],
  },
  {
    name: 'ENTERPRISE',
    subtitle: 'for large organisations',
    price: { monthly: 'Custom', yearly: 'Custom' },
    period: 'Contact Us',
    color: '#8B5CF6',
    borderGlow: 'border-purple-500/30',
    buttonText: 'Contact Us',
    buttonStyle: 'bg-white/10 hover:bg-white/20 text-white border border-purple-500/40',
    features: [
      { text: 'Unlimited Projects', active: true },
      { text: 'Unlimited Team Members', active: true },
      { text: 'Everything in Growth Tier', active: true },
      { text: 'Unlimited Audit Trail Retention', active: true },
      { text: 'Advanced Analytics + Export', active: true },
      { text: 'Custom Role Configuration', active: true },
      { text: 'Dedicated Onboarding', active: true },
      { text: 'SLA & Compliance Reporting', active: true },
      { text: 'Dedicated Account Manager', active: true },
      { text: 'Custom MSA & Security Review', active: true },
    ],
  }
];

const compareTable = [
  { feature: 'Projects', starter: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Team Members', starter: '5', pro: '50', enterprise: 'Unlimited' },
  { feature: 'Task Boards', starter: '✓', pro: '✓', enterprise: '✓' },
  { feature: 'Ticket Boards', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'SLA Tracking', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Status-Based SLA', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Recurring Tasks', starter: 'Basic', pro: 'Full', enterprise: 'Full' },
  { feature: 'Approval Workflow', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Custom Fields', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Task Library', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Bulk Upload', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Advanced' },
  { feature: 'Audit Trail', starter: '30 days', pro: '1 year', enterprise: 'Unlimited' },
  { feature: 'Escalation Config', starter: '✗', pro: '✓', enterprise: '✓' },
  { feature: 'Support', starter: 'Community', pro: 'Email', enterprise: 'Dedicated' },
];

const faqData = [
  {
    q: 'Can I import tasks from Jira, Asana, or Trello?',
    a: 'Yes! In the Pro and Enterprise tiers, ownTask includes a Bulk CSV Upload engine with intelligent column mapping and auto-validation. You can export your data from Jira, Asana, or Trello and import thousands of tasks with custom fields, priorities, and SLAs in seconds.'
  },
  {
    q: 'Do subtasks count against task or project limits?',
    a: 'No. Subtasks are structured sub-items within a task and do not count against your task or project limits in any tier. In Pro and Enterprise, you have unlimited projects and tasks anyway!'
  },
  {
    q: 'Is the approval workflow suitable for compliance-sensitive environments?',
    a: 'Absolutely. Every approval request, decision (approved/rejected/changes requested), timestamp, and reviewer comment is logged directly into the tamper-evident 21-event audit trail, ensuring full SOC2 and enterprise compliance readiness.'
  },
  {
    q: 'Can I set different SLA hours for different priority levels?',
    a: 'Yes. You can configure custom deadline SLA hours and status-based SLA thresholds independently for Highest, High, Normal, Low, and Lowest priorities at the project level, ensuring critical bugs trigger alerts immediately while routine enhancements have standard timelines.'
  },
  {
    q: 'What happens when a recurring task is missed?',
    a: 'If a recurring task is not completed by its dynamic due date, ownTask flags it as overdue, logs an SLA breach event in the audit trail, and notifies the project admins. The recurring engine continues generating future occurrences based on your configured rules without getting stuck.'
  }
];

export default function Pricing({ onOpenLogin, onOpenDemo }) {
  const [billing, setBilling] = useState('monthly');
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="pricing" className="relative pt-16 pb-28 bg-transparent z-10">
      <div className="container mx-auto px-5 lg:px-8 max-w-[1240px]">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 border border-primary/30 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wide"
          >
            <Sparkles size={14} className="animate-spin" />
            Transparent Investment
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-5"
          >
            Transparent pricing. <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#8B5CF6] to-[#EC4899]">No surprises.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg sm:text-2xl max-w-[700px] mx-auto mb-10 font-normal not-italic leading-relaxed"
          >
            Transparent pricing from free to enterprise. SLA tracking, recurring tasks, approval workflows, and full analytics.
          </motion.p>

          {/* Billing Switcher (Updated for Monthly / Annual save 20%) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center bg-[#0D0D1C]/90 border border-white/10 p-1.5 rounded-2xl backdrop-blur-md shadow-xl"
          >
            <button
              onClick={() => setBilling('monthly')}
              className={`px-7 py-3 text-base font-bold rounded-xl transition-all duration-300 cursor-pointer border-none ${billing === 'monthly' ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-transparent text-muted-foreground hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-7 py-3 text-base font-bold rounded-xl transition-all duration-300 cursor-pointer border-none flex items-center gap-2 ${billing === 'yearly' ? 'bg-primary text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]' : 'bg-transparent text-muted-foreground hover:text-white'}`}
            >
              <span>Annual</span>
              <span className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full border transition-all ${billing === 'yearly' ? 'bg-white/20 text-white border-white/30' : 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30'}`}>
                save 20%
              </span>
            </button>
          </motion.div>
        </div>

        {/* Interactive Slideshow / Plan Focus Selector */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          <span className="text-xs font-mono font-bold text-white/50 uppercase tracking-widest mr-2">Plan Slideshow:</span>
          {plans.map((p, idx) => (
            <button
              key={p.name}
              onClick={() => {
                const el = document.getElementById(`plan-card-${idx}`);
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
              }}
              className={`px-4 py-1.5 rounded-xl text-xs font-black tracking-wide uppercase transition-all cursor-pointer border ${
                idx === 1 
                  ? 'bg-gradient-to-r from-primary to-purple-600 text-white border-primary shadow-[0_0_15px_rgba(99,102,241,0.4)] scale-105' 
                  : 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {p.name} {p.badge ? '⭐' : ''}
            </button>
          ))}
        </div>

        {/* 3 Pricing Cards (Increased Width via max-w-[1520px] & Slideshow Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-16 overflow-x-auto pb-4 scrollbar-none" style={{ scrollbarWidth: 'none' }}>
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              id={`plan-card-${idx}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -8, scale: idx === 1 ? 1.03 : 1.02 }}
              className={`group relative rounded-3xl uiverse-card border ${plan.borderGlow} p-9 flex flex-col justify-between backdrop-blur-xl transition-all duration-500 w-full min-w-[320px] ${idx === 1 ? 'z-20 lg:-translate-y-4 uiverse-card-active shadow-[0_25px_80px_rgba(124,58,237,0.45)]' : 'z-10 shadow-[0_15px_50px_rgba(0,0,0,0.5)]'}`}
            >
              {/* Uiverse Animated Rotating Glow Border */}
              <div className="uiverse-card-border" />

              {/* Recommended Badge for Pro */}
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-[#EC4899] text-white text-sm font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-[0_0_20px_rgba(236,72,153,0.6)] z-20">
                  {plan.badge}
                </div>
              )}

              {/* Top info */}
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight">{plan.name}</h3>
                  <span className="w-4 h-4 rounded-full" style={{ background: plan.color, boxShadow: `0 0 14px ${plan.color}` }} />
                </div>
                <p className="text-muted-foreground/90 text-lg md:text-xl font-semibold not-italic mb-8 min-h-[52px] leading-snug">{plan.subtitle}</p>

                <div className="mb-9 pb-9 border-b border-white/[0.1]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-5xl md:text-6xl font-black text-white tracking-tight">
                      {billing === 'monthly' ? plan.price.monthly : plan.price.yearly}
                    </span>
                    {plan.price.monthly !== '$0' && plan.price.monthly !== 'Custom' && (
                      <span className="text-muted-foreground text-lg md:text-xl font-bold">/user/mo</span>
                    )}
                  </div>
                  <span className="text-base md:text-lg font-bold text-primary/90 uppercase tracking-wider mt-2 block">
                    {plan.period}
                  </span>
                </div>

                {/* Feature checklist */}
                <ul className="list-none p-0 m-0 flex flex-col gap-4 mb-10">
                  {plan.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-4 text-base md:text-lg font-bold text-white/95">
                      {f.active ? (
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5 border border-primary/50 text-primary shadow-[0_0_12px_rgba(99,102,241,0.4)]">
                          <Check size={16} strokeWidth={3} />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center shrink-0 mt-0.5 text-white/20">
                          <X size={16} strokeWidth={3} />
                        </div>
                      )}
                      <span className={f.active ? 'text-white leading-snug' : 'text-white/30 line-through leading-snug'}>{f.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  if (plan.name === 'ENTERPRISE') {
                    if (onOpenDemo || onOpenLogin) (onOpenDemo || onOpenLogin)();
                  } else {
                    window.location.href = 'https://razorpay.com/?utm_source=bing&utm_medium=cpc&utm_campaign=&utm_adgroup=&utm_content=RPSME-Brand-050724&utm_term=razorpay&utm_gclid=&utm_campaignID=580151510&utm_adgroupID=1260041977203200&utm_adID=&utm_network=o&utm_device=c&msclkid=7b7948332aeb1d3cedd4227be092bd89';
                  }
                }}
                className={`relative z-10 w-full py-4.5 rounded-2xl font-black text-lg md:text-xl uppercase tracking-wider cursor-pointer transition-all border-none ${plan.name === 'GROWTH' ? 'uiverse-btn' : plan.buttonStyle}`}
              >
                {plan.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison Table (Reduced Height via Compact Padding py-2.5) */}
        <div className="mb-12">
          <div 
            className="overflow-x-auto rounded-3xl backdrop-blur-xl bg-[#080814]/80 shadow-2xl"
            style={{ 
              boxShadow: '0 0 50px rgba(99,102,241,0.1)', 
              border: '1px solid rgba(255,255,255,0.08)' 
            }}
          >
            <table className="w-full text-left border-collapse min-w-[900px] font-sans antialiased">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3.5 px-5 text-base md:text-lg font-black text-white uppercase tracking-wider w-1/3 bg-[#0c0c16]">
                    <span className="text-primary mr-2">⚡</span> Compare Plans
                  </th>
                  <th className="py-3.5 px-5 text-sm md:text-base font-extrabold text-white/90 uppercase tracking-wider text-center w-2/9 bg-[#0c0c16]">Starter</th>
                  <th className="py-3.5 px-5 text-sm md:text-base font-extrabold text-primary uppercase tracking-wider text-center w-2/9 bg-[#171330]">Growth ⭐</th>
                  <th className="py-3.5 px-5 text-sm md:text-base font-extrabold text-purple-300 uppercase tracking-wider text-center w-2/9 bg-[#0c0c16]">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.08]">
                {compareTable.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-white/[0.04] transition-all duration-300">
                    <td className="py-2.5 px-5 text-sm md:text-base text-[#F1F5F9] font-semibold">{row.feature}</td>
                    <td className="py-2.5 px-5 text-sm md:text-base font-semibold text-center text-white/90">
                      {row.starter === '✓' ? (
                        <Check size={18} className="text-emerald-400 mx-auto" strokeWidth={3} />
                      ) : row.starter === '✗' ? (
                        <X size={18} className="text-red-400/90 mx-auto" strokeWidth={3} />
                      ) : (
                        <span className="text-amber-400 font-bold">{row.starter}</span>
                      )}
                    </td>
                    <td className="py-2.5 px-5 text-sm md:text-base font-bold text-center text-primary bg-primary/[0.04]">
                      {row.pro === '✓' ? (
                        <Check size={18} className="text-emerald-400 mx-auto" strokeWidth={3} />
                      ) : row.pro === '✗' ? (
                        <X size={18} className="text-red-400/90 mx-auto" strokeWidth={3} />
                      ) : (
                        row.pro
                      )}
                    </td>
                    <td className="py-2.5 px-5 text-sm md:text-base font-bold text-center text-purple-300">
                      {row.enterprise === '✓' ? (
                        <Check size={18} className="text-emerald-400 mx-auto" strokeWidth={3} />
                      ) : row.enterprise === '✗' ? (
                        <X size={18} className="text-red-400/90 mx-auto" strokeWidth={3} />
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
                {/* CTA Button Row */}
                <tr className="bg-white/[0.02]">
                  <td className="py-3.5 px-5 text-sm md:text-base font-semibold text-[#d1d5db]">Ready to get started?</td>
                  <td className="py-3.5 px-5 text-center">
                    <button
                      onClick={() => window.location.href = 'https://razorpay.com/?utm_source=bing&utm_medium=cpc&utm_campaign=&utm_adgroup=&utm_content=RPSME-Brand-050724&utm_term=razorpay&utm_gclid=&utm_campaignID=580151510&utm_adgroupID=1260041977203200&utm_adID=&utm_network=o&utm_device=c&msclkid=7b7948332aeb1d3cedd4227be092bd89'}
                      className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm transition-all duration-300 cursor-pointer border-none"
                    >
                      Get Started
                    </button>
                  </td>
                  <td className="py-3.5 px-5 text-center bg-primary/[0.04]">
                    <button
                      onClick={() => window.location.href = 'https://razorpay.com/?utm_source=bing&utm_medium=cpc&utm_campaign=&utm_adgroup=&utm_content=RPSME-Brand-050724&utm_term=razorpay&utm_gclid=&utm_campaignID=580151510&utm_adgroupID=1260041977203200&utm_adID=&utm_network=o&utm_device=c&msclkid=7b7948332aeb1d3cedd4227be092bd89'}
                      className="px-4 py-2 rounded-xl bg-primary text-white font-black text-xs md:text-sm shadow-md hover:brightness-110 transition-all duration-300 cursor-pointer border-none"
                    >
                      Get Started
                    </button>
                  </td>
                  <td className="py-3.5 px-5 text-center">
                    <button
                      onClick={onOpenDemo || onOpenLogin}
                      className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/35 text-purple-300 font-bold text-xs md:text-sm border border-purple-500/40 transition-all duration-300 cursor-pointer"
                    >
                      Contact Us
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Pricing FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-[850px] mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={14} className="text-primary" />
              Frequently Asked Questions
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white">Got Questions? We Have Answers.</h3>
          </div>

          <div className="flex flex-col gap-4">
            {faqData.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'bg-[#121228]/95 border-primary/50 shadow-[0_0_25px_rgba(99,102,241,0.15)]' : 'bg-[#0D0D1C]/80 border-white/[0.06] hover:border-white/20'}`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full py-6 px-7 flex items-center justify-between text-left cursor-pointer bg-transparent border-none text-white font-black text-lg md:text-xl gap-4"
                  >
                    <span>{faq.q}</span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-white/5 text-white/60'}`}>
                      <ChevronDown size={18} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-7 pb-7 pt-1 text-muted-foreground text-base md:text-lg leading-relaxed border-t border-white/5 font-normal not-italic">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
