import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';

const plans = [
  {
    name: 'BASIC',
    price: { monthly: '$24.99', yearly: '$19.99' },
    color: '#1d74c4',
    features: [
      { text: 'Visual Kanban boards', active: true },
      { text: 'Basic calendar planning', active: true },
      { text: 'AI Meeting Analysis', active: false },
      { text: 'Git integration & sync', active: false },
    ],
  },
  {
    name: 'STANDARD',
    price: { monthly: '$49.99', yearly: '$39.99' },
    color: '#27ae60',
    features: [
      { text: 'Visual Kanban boards', active: true },
      { text: 'Advanced calendar planning', active: true },
      { text: 'AI Meeting Analysis', active: true },
      { text: 'Git integration & sync', active: false },
    ],
  },
  {
    name: 'PREMIUM',
    price: { monthly: '$74.99', yearly: '$59.99' },
    color: '#76419f',
    features: [
      { text: 'Visual Kanban boards', active: true },
      { text: 'Advanced calendar planning', active: true },
      { text: 'AI Meeting Analysis', active: true },
      { text: 'Git integration & sync', active: true },
    ],
  }
];

const compareTable = [
  { feature: 'Projects', basic: '5', standard: '25', premium: 'Unlimited' },
  { feature: 'Tasks', basic: '500', standard: 'Unlimited', premium: 'Unlimited' },
  { feature: 'Kanban + List view', basic: '✓', standard: '✓', premium: '✓' },
  { feature: 'Comments & Attachments', basic: '✓', standard: '✓', premium: '✓' },
  { feature: 'AI Automation (System key)', basic: '✗', standard: '100 req/mo', premium: 'Unlimited' },
  { feature: 'Custom AI Models (Own API key)', basic: '✗', standard: '✗', premium: 'Unlimited' },
  { feature: 'Meeting Analysis (OCR)', basic: '✗', standard: '✓', premium: 'Unlimited' },
];

export default function Pricing({ onOpenLogin }) {
  const [billing, setBilling] = useState('monthly');

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    }
  };

  return (
    <section id="pricing" className="relative pt-14 pb-24 bg-transparent">
      <div className="container mx-auto px-5 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10"> 
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-black text-[#F1F5F9] tracking-tight mb-6"
          >
            Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">transparent pricing.</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-[500px] mx-auto mb-6"
          >
            Ready to take control of your projects? Choose the plan calibrated for your speed.
          </motion.p>

          {/* Toggle switcher */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center bg-white/5 border border-border p-1 rounded-xl shadow-lg"
          >
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${billing === 'monthly' ? 'bg-primary text-white shadow-md' : 'bg-transparent text-muted-foreground hover:text-foreground'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('yearly')}
              className={`px-5 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${billing === 'yearly' ? 'bg-primary text-white shadow-md' : 'bg-transparent text-muted-foreground hover:text-foreground'}`}
            >
              Yearly
            </button>
            <span className="text-xs text-primary font-bold px-3">
              Save ~20%
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch max-w-[1200px] mx-auto mb-24 p-4"
        >
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                boxShadow: `0 25px 60px rgba(0,0,0,0.4), 0 0 40px ${plan.color}40`
              }}
              className="bg-white rounded-[24px] flex flex-col relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.3)] transition-all duration-400 ease-out border border-white/10"
            >
              {/* Overlapping Badge */}
              <div 
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[1px] bg-white text-base font-black uppercase tracking-widest px-10 py-2.5 rounded-b-[16px] z-10 shadow-sm"
                style={{ color: plan.color }}
              >
                {plan.name}
              </div>

              {/* Top Colored Section */}
              <div 
                className="pt-[4.5rem] px-4 pb-12 relative flex flex-col items-center justify-center text-white"
                style={{ background: plan.color }}
              >
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billing}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3 }}
                    className="text-[3.4rem] font-black leading-none"
                  >
                    {billing === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-base font-medium opacity-90 mt-1">
                  Per Month
                </span>
                
                {/* SVG Wave */}
                <svg 
                  viewBox="0 0 1440 320" 
                  className="absolute -bottom-[1px] left-0 w-full h-auto translate-y-[1px]"
                >
                  <path fill="#ffffff" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,144C672,149,768,203,864,229.3C960,256,1056,256,1152,229.3C1248,203,1344,149,1392,122.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                  <path fill="#ffffff" fillOpacity="0.4" d="M0,128L48,149.3C96,171,192,213,288,218.7C384,224,480,192,576,192C672,192,768,224,864,245.3C960,267,1056,277,1152,256C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
              </div>

              {/* Bottom White Section - Feature List */}
              <div className="px-8 pb-10 flex flex-col flex-1">
                <ul className="list-none p-0 my-4 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li 
                      key={fIdx} 
                      className={`flex items-center gap-4 py-4 text-gray-600 text-sm font-medium ${fIdx !== plan.features.length - 1 ? 'border-b border-gray-200' : ''}`}
                    >
                      {feature.active ? (
                        <Check size={20} strokeWidth={3} color={plan.color} className="shrink-0" />
                      ) : (
                        <X size={20} strokeWidth={3} color="#ef4444" className="shrink-0" />
                      )}
                      {feature.text}
                    </li>
                  ))}
                </ul>

                {/* Select Plan Button */}
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: `0 10px 20px ${plan.color}40` }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open('https://razorpay.com/', '_blank')}
                  className="w-full text-white border-none rounded-xl p-4 text-base font-extrabold cursor-pointer transition-all uppercase tracking-widest mt-2"
                  style={{ background: plan.color }}
                >
                  Select Plan
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Comparison Table matching the pill layout image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-[1000px] mx-auto px-4 py-8"
        >
          <div className="overflow-x-auto pb-8">
            <div className="min-w-[700px] flex flex-col gap-3">
              {/* Header Row */}
              <div className="flex rounded-t-[24px] overflow-hidden mb-2">
                <div className="flex-[1.5] bg-[#1e3a5f] text-white py-7 px-10 flex items-center font-extrabold tracking-widest text-lg">
                  PRICING TABLE
                </div>
                <div className="flex-1 text-white py-6 px-4 flex flex-col items-center justify-center" style={{ background: plans[0].color }}>
                  <div className="text-3xl font-extrabold leading-none">{billing === 'monthly' ? plans[0].price.monthly : plans[0].price.yearly}<span className="text-base">/m</span></div>
                  <div className="text-sm font-bold uppercase mt-1.5 tracking-widest">{plans[0].name}</div>
                </div>
                <div className="flex-1 text-white py-6 px-4 flex flex-col items-center justify-center" style={{ background: plans[1].color }}>
                  <div className="text-3xl font-extrabold leading-none">{billing === 'monthly' ? plans[1].price.monthly : plans[1].price.yearly}<span className="text-base">/m</span></div>
                  <div className="text-sm font-bold uppercase mt-1.5 tracking-widest">{plans[1].name}</div>
                </div>
                <div className="flex-1 text-white py-6 px-4 flex flex-col items-center justify-center" style={{ background: plans[2].color }}>
                  <div className="text-3xl font-extrabold leading-none">{billing === 'monthly' ? plans[2].price.monthly : plans[2].price.yearly}<span className="text-base">/m</span></div>
                  <div className="text-sm font-bold uppercase mt-1.5 tracking-widest">{plans[2].name}</div>
                </div>
              </div>

              {/* Rows */}
              {compareTable.map((row, rIdx) => (
                <div key={rIdx} className="flex bg-white rounded-full shadow-sm items-center hover:shadow-md transition-shadow">
                  <div className="flex-[1.5] py-5 px-10 text-gray-700 font-bold text-sm">
                    {row.feature}
                  </div>
                  <div className="flex-1 py-5 px-4 flex justify-center">
                    {row.basic === '✓' ? <Check size={22} strokeWidth={3} color={plans[0].color} /> : row.basic === '✗' ? <X size={22} strokeWidth={3} color="#ef4444" /> : <span className="text-gray-700 font-bold text-sm">{row.basic}</span>}
                  </div>
                  <div className="flex-1 py-5 px-4 flex justify-center">
                    {row.standard === '✓' ? <Check size={22} strokeWidth={3} color={plans[1].color} /> : row.standard === '✗' ? <X size={22} strokeWidth={3} color="#ef4444" /> : <span className="text-gray-700 font-bold text-sm">{row.standard}</span>}
                  </div>
                  <div className="flex-1 py-5 px-4 flex justify-center">
                    {row.premium === '✓' ? <Check size={22} strokeWidth={3} color={plans[2].color} /> : row.premium === '✗' ? <X size={22} strokeWidth={3} color="#ef4444" /> : <span className="text-gray-700 font-bold text-sm">{row.premium}</span>}
                  </div>
                </div>
              ))}

              {/* Footer Buttons */}
              <div className="flex mt-6 items-center">
                <div className="flex-[1.5]"></div>
                <div className="flex-1 flex justify-center">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.open('https://razorpay.com/', '_blank')} className="text-white border-none rounded-full py-3.5 px-10 font-extrabold cursor-pointer shadow-md uppercase tracking-wide hover:brightness-110 transition-all" style={{ background: plans[0].color }}>BUY NOW</motion.button>
                </div>
                <div className="flex-1 flex justify-center">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.open('https://razorpay.com/', '_blank')} className="text-white border-none rounded-full py-3.5 px-10 font-extrabold cursor-pointer shadow-md uppercase tracking-wide hover:brightness-110 transition-all" style={{ background: plans[1].color }}>BUY NOW</motion.button>
                </div>
                <div className="flex-1 flex justify-center">
                  <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.open('https://razorpay.com/', '_blank')} className="text-white border-none rounded-full py-3.5 px-10 font-extrabold cursor-pointer shadow-md uppercase tracking-wide hover:brightness-110 transition-all" style={{ background: plans[2].color }}>BUY NOW</motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
