import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, Zap, Shield, Building2, ArrowRight, Star } from 'lucide-react';

const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    price: 'Free',
    period: 'forever · no card needed',
    badge: null,
    bestFor: 'Individuals and small teams',
    btnLabel: 'Start Free →',
    features: [
      { text: 'Up to 3 Projects', on: true },
      { text: 'Up to 5 Team Members', on: true },
      { text: 'Task Board (unlimited tasks)', on: true },
      { text: 'Recurring Tasks (basic)', on: true },
      { text: 'Priority & Due Dates', on: true },
      { text: 'Checklists & Attachments', on: true },
      { text: '30-day Audit Trail', on: true },
      { text: 'SLA Tracking', on: false },
      { text: 'Ticket Board', on: false },
      { text: 'Approval Workflow', on: false },
      { text: 'Custom Fields', on: false },
      { text: 'Analytics Dashboard', on: false },
      { text: 'Bulk Upload', on: false },
    ],
  },
  {
    id: 'growth',
    name: 'Growth',
    price: 'Contact Us',
    period: 'recommended for teams',
    badge: 'Recommended',
    bestFor: 'Growing teams and businesses',
    btnLabel: 'Contact Us →',
    features: [
      { text: 'Unlimited Projects', on: true },
      { text: 'Up to 50 Team Members', on: true },
      { text: 'Task Board + Ticket Board', on: true },
      { text: 'Full SLA Tracking (Deadline + Status-based)', on: true },
      { text: 'Approval Workflow', on: true },
      { text: 'Custom Fields per Subject', on: true },
      { text: 'Task Library & Templates', on: true },
      { text: 'Round-Robin Assignment', on: true },
      { text: 'Bulk CSV Upload', on: true },
      { text: 'Advanced Analytics Dashboard', on: true },
      { text: '1-Year Audit Trail', on: true },
      { text: 'Escalation Configuration', on: true },
      { text: 'Email Support', on: true },
    ],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 'Contact Us',
    period: 'for large organisations',
    badge: null,
    bestFor: 'Large organisations with compliance needs',
    btnLabel: 'Contact Sales →',
    features: [
      { text: 'Everything in Growth', on: true },
      { text: 'Unlimited Team Members', on: true },
      { text: 'Unlimited Audit Trail Retention', on: true },
      { text: 'Analytics Export (CSV/JSON)', on: true },
      { text: 'Custom Role Configuration', on: true },
      { text: 'Dedicated Onboarding', on: true },
      { text: 'SLA & Compliance Reporting', on: true },
      { text: 'Dedicated Account Manager', on: true },
      { text: 'Priority Support (SLA-backed)', on: true },
    ],
  },
];

const COMPARISON = [
  { category: 'All Features', features: [
    { name: 'Projects',             free: '3',         pro: 'Unlimited', ent: 'Unlimited' },
    { name: 'Team Members',         free: '5',         pro: '50',        ent: 'Unlimited' },
    { name: 'Task Boards',          free: true,        pro: true,        ent: true },
    { name: 'Ticket Boards',        free: false,       pro: true,        ent: true },
    { name: 'SLA Tracking',         free: false,       pro: true,        ent: true },
    { name: 'Status-Based SLA',     free: false,       pro: true,        ent: true },
    { name: 'Recurring Tasks',      free: 'Basic',     pro: 'Full',      ent: 'Full' },
    { name: 'Approval Workflow',    free: false,       pro: true,        ent: true },
    { name: 'Custom Fields',        free: false,       pro: true,        ent: true },
    { name: 'Task Library',         free: false,       pro: true,        ent: true },
    { name: 'Bulk Upload',          free: false,       pro: true,        ent: true },
    { name: 'Analytics',            free: false,       pro: 'Advanced',  ent: 'Advanced' },
    { name: 'Audit Trail',          free: '30 days',   pro: '1 year',    ent: 'Unlimited' },
    { name: 'Escalation Config',    free: false,       pro: true,        ent: true },
    { name: 'Support',              free: 'Community', pro: 'Email',     ent: 'Dedicated' },
  ]},
];

const Cell = ({ val }) => {
  if (val === true)  return <CheckCircle size={16} className="text-emerald-400 mx-auto" />;
  if (val === false) return <X size={14} className="text-white/15 mx-auto" />;
  return <span className="text-white/70 text-xs font-mono">{val}</span>;
};

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

  useEffect(() => {
    document.title = "ownTask Pricing — Transparent Plans for Teams of All Sizes";
    let m = document.querySelector('meta[name="description"]');
    if (!m) { m = document.createElement('meta'); m.name = "description"; document.head.appendChild(m); }
    m.content = "ownTask pricing for every team size. Start free, scale with SLA tracking, recurring tasks, approvals, and enterprise access controls.";
  }, []);

  return (
    <div className="relative z-10 w-full bg-transparent py-20 lg:py-28 overflow-hidden">

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-primary/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] bg-violet-500/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 max-w-[1240px] relative z-10">

        {/* ── HERO ── */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-primary/20 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase"
          >
            <Shield size={12} />
            <span>Pricing</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.05] mb-5"
          >
            Transparent pricing.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-violet-400">
              No surprises.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-8"
          >
            Start free, scale with SLA tracking, recurring tasks, approvals, and enterprise access controls.
          </motion.p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="inline-flex items-center gap-1 p-1 rounded-full border border-white/[0.07] bg-white/[0.03]"
          >
            {['monthly', 'annual'].map(b => (
              <button
                key={b}
                onClick={() => setBilling(b)}
                className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  billing === b
                    ? 'bg-primary/20 border border-primary/30 text-primary'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                {b === 'annual' ? 'Annual (save 20%)' : 'Monthly'}
              </button>
            ))}
          </motion.div>
        </div>

        {/* ── PRICING CARDS ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 items-stretch">
          {PLANS.map((plan, idx) => {
            const isFeatured = plan.id === 'growth';
            const isEnt      = plan.id === 'enterprise';

            const cardBg   = isFeatured ? 'bg-[#4F6CF7]'         : isEnt ? 'bg-[#9B5EA2]'        : 'bg-white/[0.04]';
            const border   = isFeatured ? 'border-[#6B84FF]/40'  : isEnt ? 'border-[#B87CC0]/40' : 'border-white/[0.08]';
            const priceClr = isFeatured ? 'text-white'           : isEnt ? 'text-white'           : 'text-primary';
            const nameClr  = 'text-white';
            const divClr   = isFeatured ? 'bg-white/20'          : isEnt ? 'bg-white/20'          : 'bg-white/10';
            const featClr  = isFeatured || isEnt ? 'text-white/90' : 'text-white/75';
            const checkActive  = isFeatured || isEnt ? 'text-white'        : 'text-primary';
            const checkOff     = isFeatured || isEnt ? 'text-white/25'     : 'text-white/15';
            const btnClass     = isFeatured || isEnt
              ? 'bg-white text-gray-900 hover:bg-white/90 font-extrabold'
              : 'bg-primary text-white hover:bg-primary/80 font-extrabold shadow-lg shadow-primary/30';
            const shadow = isFeatured
              ? 'shadow-[0_20px_60px_rgba(79,108,247,0.35)]'
              : isEnt ? 'shadow-[0_20px_60px_rgba(155,94,162,0.3)]' : 'shadow-lg';
            const scale = '';

            const price = plan.price === '$18' && billing === 'annual' ? '$14' : plan.price;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col rounded-[24px] border ${border} ${cardBg} ${shadow} ${scale} p-5 backdrop-blur-xl transition-transform duration-300`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-white text-[#4F6CF7] text-[10px] font-extrabold tracking-widest uppercase shadow-lg">
                    {plan.badge}
                  </div>
                )}

                {/* Plan name — centered */}
                <h3 className={`text-center text-base font-extrabold mb-2 ${nameClr}`}>{plan.name}</h3>

                {/* Price — large centered */}
                <div className="text-center mb-1">
                  <span className={`text-5xl font-extrabold leading-none ${priceClr}`}>{price}</span>
                </div>
                {plan.id === 'growth' && billing === 'annual' && plan.price !== 'Contact Us' && (
                  <p className="text-center text-white/60 text-[10px] font-bold mb-1">Save $48/seat/year</p>
                )}
                <p className={`text-center text-[11px] mb-4 ${isFeatured || isEnt ? 'text-white/50' : 'text-white/35'} font-mono`}>
                  {plan.price === 'Custom' ? 'contact us' : plan.period}
                </p>

                {/* Divider */}
                <div className={`w-full h-px ${divClr} mb-4`} />

                {/* Features */}
                <div className="flex flex-col gap-2.5 mb-5 flex-1">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center shrink-0 ${
                        f.on
                          ? (isFeatured || isEnt ? 'border-white bg-white/20' : 'border-primary bg-primary/10')
                          : (isFeatured || isEnt ? 'border-white/20 bg-white/5' : 'border-white/10 bg-transparent')
                      }`}>
                        {f.on && (
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4 7L8 3" stroke={isFeatured || isEnt ? 'white' : 'var(--color-primary, #8b5cf6)'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span className={`text-xs ${f.on ? featClr : checkOff}`}>{f.text}</span>
                    </div>
                  ))}
                </div>

                {/* Select button */}
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`w-full py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${btnClass}`}
                >
                  {plan.id === 'enterprise' ? 'Contact Sales' : plan.id === 'free' ? 'Start Free' : 'Get Started'}
                </motion.button>
              </motion.div>
            );
          })}
        </div>


        {/* ── FEATURE COMPARISON TABLE ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-base font-bold text-white/60 text-center mb-5 uppercase tracking-widest font-mono">Compare Plans</h2>

          <div className="rounded-3xl border border-white/[0.07] overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 bg-white/[0.03] border-b border-white/[0.05] px-4 py-2">
              <div className="text-[10px] font-mono text-white/25 uppercase tracking-widest">Feature</div>
              {['Starter', 'Pro', 'Enterprise'].map((h, i) => (
                <div key={i} className={`text-[10px] font-bold text-center ${i === 1 ? 'text-primary' : i === 2 ? 'text-violet-400' : 'text-white/40'}`}>{h}</div>
              ))}
            </div>

            {COMPARISON.map((group, gi) => (
              <div key={gi}>
                {/* Category row */}
                <div className="px-5 py-2 bg-white/[0.015] border-b border-white/[0.04]">
                  <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">{group.category}</span>
                </div>
                {group.features.map((feat, fi) => (
                  <div
                    key={fi}
                    className={`grid grid-cols-4 items-center px-4 py-2 border-b border-white/[0.03] ${fi % 2 === 0 ? '' : 'bg-white/[0.01]'}`}
                  >
                    <span className="text-white/55 text-[11px]">{feat.name}</span>
                    <div className="text-center"><Cell val={feat.free} /></div>
                    <div className="text-center"><Cell val={feat.pro} /></div>
                    <div className="text-center"><Cell val={feat.ent} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>


      </div>
    </div>
  );
}
