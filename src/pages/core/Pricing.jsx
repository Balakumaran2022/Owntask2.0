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
    bestFor: 'individuals and small teams',
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
    badge: '⭐ MOST POPULAR',
    bestFor: 'growing teams and businesses',
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
    bestFor: 'large organisations with compliance needs',
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
  if (val === true)  return <CheckCircle size={22} className="text-emerald-400 mx-auto" strokeWidth={3} />;
  if (val === false) return <X size={22} className="text-red-400/90 mx-auto" strokeWidth={3} />;
  return <span className="text-amber-400 font-semibold text-base">{val}</span>;
};

export default function Pricing({ onOpenLogin, onOpenDemo }) {
  const [billing, setBilling] = useState('monthly');
  const [expandedPlans, setExpandedPlans] = useState({});

  const togglePlanFeatures = (planId) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planId]: !prev[planId]
    }));
  };

  useEffect(() => {
    document.title = "OwnTasks | Intelligent Command Center";
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

        {/* ── PRICING CARDS (Ultra-Modern Glassmorphic UI) ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto items-stretch">
          {PLANS.map((plan, idx) => {
            const isFeatured = plan.id === 'growth';
            const isEnt      = plan.id === 'enterprise';

            const cardBg = 'bg-gradient-to-b from-[#0c1a2e]/95 via-[#071324]/95 to-[#040c17]/95';
              
            const border = isFeatured 
              ? 'border-2 border-primary shadow-[0_0_40px_rgba(59,130,246,0.25)] hover:shadow-[0_0_55px_rgba(59,130,246,0.35)]' 
              : 'border border-primary/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:shadow-[0_0_45px_rgba(59,130,246,0.25)]';

            const priceClr = 'text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-primary';
              
            const nameClr  = 'text-primary';
            const divClr   = 'bg-gradient-to-r from-transparent via-primary/50 to-transparent';
            const featClr  = 'text-white/90 font-semibold';
            const checkOff = 'text-white/25';
            
            const btnClass = isFeatured
              ? 'bg-gradient-to-r from-primary via-blue-500 to-emerald-600 hover:brightness-110 text-white font-black shadow-[0_0_20px_rgba(59,130,246,0.35)]'
              : 'bg-primary/20 hover:bg-primary/35 text-blue-200 border border-primary/40 font-extrabold shadow-md';
              
            const scale = isFeatured ? 'lg:scale-[1.03] z-10' : '';

            const price = plan.price === '$18' && billing === 'annual' ? '$14' : plan.price;
            const isExpanded = expandedPlans[plan.id];
            const visibleFeatures = isExpanded ? plan.features : plan.features.slice(0, 5);

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative flex flex-col rounded-[24px] ${border} ${cardBg} ${scale} p-6 transition-all duration-500 hover:-translate-y-1`}
              >
                {/* Popular badge */}
                {plan.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full bg-gradient-to-r from-primary via-blue-500 to-emerald-600 text-white text-[10px] font-black tracking-widest uppercase shadow-[0_0_20px_rgba(59,130,246,0.5)] border border-white/20">
                    {plan.badge}
                  </div>
                )}

                {/* Plan name */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className={`text-lg font-black uppercase tracking-wider ${nameClr}`}>{plan.name}</h3>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full font-bold font-mono bg-primary/20 text-primary border border-primary/30">
                    {plan.id === 'growth' ? 'Popular' : plan.id === 'enterprise' ? 'Pro' : 'Free'}
                  </span>
                </div>

                {/* Price */}
                <div className="my-2">
                  <div className="flex items-baseline gap-1">
                    <span className={`text-4xl sm:text-[2.75rem] font-black leading-none ${priceClr}`}>{price}</span>
                  </div>
                  {plan.id === 'growth' && billing === 'annual' && plan.price !== 'Contact Us' && (
                    <p className="text-emerald-400 text-[10px] font-bold mt-1">✓ Save $48/seat/year</p>
                  )}
                  <p className="text-[10px] text-white/50 font-mono mt-1">
                    {plan.price === 'Custom' ? 'custom SLA & billing' : plan.period}
                  </p>
                </div>

                {/* Divider */}
                <div className={`w-full h-px ${divClr} my-4`} />

                {/* Features */}
                <div className="flex flex-col gap-2 mb-6 flex-1">
                  {visibleFeatures.map((f, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <div className={`w-[18px] h-[18px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105 ${
                        f.on
                          ? 'bg-primary/20 border border-primary text-primary shadow-[0_0_8px_rgba(59,130,246,0.3)]'
                          : 'bg-white/5 border border-white/10 text-white/20'
                      }`}>
                        {f.on && (
                          <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                            <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                      <span className={`text-xs ${f.on ? featClr : checkOff}`}>{f.text}</span>
                    </div>
                  ))}
                  
                  {plan.features.length > 5 && (
                    <button
                      onClick={() => togglePlanFeatures(plan.id)}
                      className="self-start text-[11px] font-bold mt-1.5 cursor-pointer bg-transparent border-none p-0 hover:underline transition-colors text-primary hover:text-blue-300"
                    >
                      {isExpanded ? 'Show Less' : 'Show All'}
                    </button>
                  )}
                </div>

                {/* Select button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => {
                    if (plan.id === 'enterprise') {
                      if (onOpenDemo || onOpenLogin) (onOpenDemo || onOpenLogin)();
                    } else {
                      window.location.href = 'https://razorpay.com/?utm_source=bing&utm_medium=cpc&utm_campaign=&utm_adgroup=&utm_content=RPSME-Brand-050724&utm_term=razorpay&utm_gclid=&utm_campaignID=580151510&utm_adgroupID=1260041977203200&utm_adID=&utm_network=o&utm_device=c&msclkid=7b7948332aeb1d3cedd4227be092bd89';
                    }
                  }}
                  className={`w-full py-3.5 rounded-xl text-xs transition-all cursor-pointer ${btnClass}`}
                >
                  {plan.btnLabel}
                </motion.button>
              </motion.div>
            );
          })}
        </div>


        {/* ── FEATURE COMPARISON TABLE (Modern Glassmorphic UI) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="overflow-x-auto rounded-[32px] shadow-[0_25px_70px_rgba(0,0,0,0.6)] border border-white/10 bg-gradient-to-b from-[#110e24]/90 via-[#0a0816]/95 to-[#07060f]/95">
            <div className="w-full">
              {/* Table header */}
              <div className="grid grid-cols-4 border-b border-white/15 px-8 py-6 bg-[#0c0a1a]/80 items-center">
                <div className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-xl bg-primary/20 border border-primary/40 flex items-center justify-center text-primary text-base shadow-[0_0_15px_rgba(99,102,241,0.4)]">⚡</span>
                  <span>Compare Plans</span>
                </div>
                {['Starter', 'Growth ⭐', 'Enterprise'].map((h, i) => (
                  <div key={i} className={`text-lg font-extrabold text-center ${i === 1 ? 'text-primary bg-primary/10 py-2 rounded-2xl border border-primary/30 shadow-sm' : i === 2 ? 'text-purple-300' : 'text-white/80'}`}>{h}</div>
                ))}
              </div>

              {COMPARISON.map((group, gi) => (
                <div key={gi}>
                  {group.features.map((feat, fi) => (
                    <div
                      key={fi}
                      className={`grid grid-cols-4 items-center px-8 py-5 border-b border-white/[0.06] hover:bg-white/[0.04] transition-all duration-300`}
                    >
                      <span className="text-[#e2e8f0] font-semibold text-base">{feat.name}</span>
                      <div className="text-center"><Cell val={feat.free} /></div>
                      <div className="text-center"><Cell val={feat.pro} /></div>
                      <div className="text-center"><Cell val={feat.ent} /></div>
                    </div>
                  ))}
                </div>
              ))}
              
              {/* CTA Button Row */}
              <div className="grid grid-cols-4 items-center px-8 py-7 bg-white/[0.02] border-t border-white/10">
                <span className="text-lg font-bold text-white">Ready to get started?</span>
                <div className="text-center">
                  <button
                    onClick={() => window.location.href = 'https://razorpay.com/?utm_source=bing&utm_medium=cpc&utm_campaign=&utm_adgroup=&utm_content=RPSME-Brand-050724&utm_term=razorpay&utm_gclid=&utm_campaignID=580151510&utm_adgroupID=1260041977203200&utm_adID=&utm_network=o&utm_device=c&msclkid=7b7948332aeb1d3cedd4227be092bd89'}
                    className="px-6 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-all duration-300 cursor-pointer border border-white/10 shadow-sm"
                  >
                    Get Started
                  </button>
                </div>
                <div className="text-center bg-primary/[0.05] py-2.5 rounded-2xl border border-primary/20">
                  <button
                    onClick={() => window.location.href = 'https://razorpay.com/?utm_source=bing&utm_medium=cpc&utm_campaign=&utm_adgroup=&utm_content=RPSME-Brand-050724&utm_term=razorpay&utm_gclid=&utm_campaignID=580151510&utm_adgroupID=1260041977203200&utm_adID=&utm_network=o&utm_device=c&msclkid=7b7948332aeb1d3cedd4227be092bd89'}
                    className="px-7 py-3 rounded-2xl bg-gradient-to-r from-primary via-indigo-500 to-purple-600 text-white font-black text-sm shadow-[0_0_20px_rgba(99,102,241,0.5)] hover:brightness-110 transition-all duration-300 cursor-pointer border-none"
                  >
                    Get Started
                  </button>
                </div>
                <div className="text-center">
                  <button
                    onClick={onOpenDemo || onOpenLogin}
                    className="px-6 py-3 rounded-2xl bg-purple-500/20 hover:bg-purple-500/35 text-purple-200 font-bold text-sm border border-purple-500/40 transition-all duration-300 cursor-pointer shadow-sm"
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
}
