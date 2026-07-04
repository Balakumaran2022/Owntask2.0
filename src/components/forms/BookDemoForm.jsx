import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const inputCls =
  'w-full bg-[#0a120c] border border-[#1a3324] rounded-xl px-3.5 py-2 text-[#d1dfd7] text-xs md:text-sm placeholder:text-[#3d5e4b] outline-none transition-all focus:border-primary/60 focus:bg-[#0c160f] focus:ring-2 focus:ring-primary/10';

const labelCls = 'text-[0.62rem] font-black text-[#628f78] uppercase tracking-widest mb-1 block';

const selectStyle = {
  backgroundImage:
    'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'%23628f78\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M19 9l-7 7-7-7\'%3E%3C/path%3E%3C/svg%3E")',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 0.75rem center',
  backgroundSize: '0.9rem',
};

export default function BookDemoForm() {
  const [formData, setFormData] = useState({
    fullName:     '',
    email:        '',
    phone:        '',
    company:      '',
    jobTitle:     '',
    companySize:  '1-10',
    industry:     '',
    useCase:      '',
    preferredDay: '',
    source:       '',
    message:      '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="w-full">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="p-5 md:p-6 w-full"
          >
            {/* Header */}
            <div className="mb-4 pb-3 border-b border-[#13281c] pr-8">
              <h3 className="text-base md:text-lg font-black text-white m-0 tracking-tight">Book a Live Demo</h3>
              <p className="text-xs text-[#628f78] m-0 mt-0.5">Get a personalized 15-min walkthrough with our product specialists.</p>
            </div>

            {/* Row 1 — Full Name + Work Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className={labelCls}>Full Name *</label>
                <input
                  type="text" name="fullName" required
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Work Email *</label>
                <input
                  type="email" name="email" required
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Row 2 — Phone + Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className={labelCls}>Phone Number</label>
                <input
                  type="tel" name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Company Name</label>
                <input
                  type="text" name="company"
                  placeholder="Acme Corp"
                  value={formData.company}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
            </div>

            {/* Row 3 — Job Title + Company Size */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className={labelCls}>Job Title</label>
                <input
                  type="text" name="jobTitle"
                  placeholder="Product Manager"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Team / Company Size</label>
                <select
                  name="companySize"
                  value={formData.companySize}
                  onChange={handleChange}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={selectStyle}
                >
                  <option value="1-10">1 – 10 employees</option>
                  <option value="11-50">11 – 50 employees</option>
                  <option value="51-200">51 – 200 employees</option>
                  <option value="201-500">201 – 500 employees</option>
                  <option value="500+">500+ employees</option>
                </select>
              </div>
            </div>

            {/* Row 4 — Industry + Primary Use Case */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className={labelCls}>Industry</label>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={selectStyle}
                >
                  <option value="">Select your industry</option>
                  <option value="software">Software / SaaS</option>
                  <option value="finance">Finance / Fintech</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="ecommerce">E-Commerce / Retail</option>
                  <option value="education">Education / EdTech</option>
                  <option value="agency">Agency / Consulting</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>Primary Use Case</label>
                <select
                  name="useCase"
                  value={formData.useCase}
                  onChange={handleChange}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={selectStyle}
                >
                  <option value="">What will you use it for?</option>
                  <option value="task-mgmt">Task Management</option>
                  <option value="project-mgmt">Project Management</option>
                  <option value="team-collab">Team Collaboration</option>
                  <option value="git-workflow">Git Workflow Sync</option>
                  <option value="ai-planning">AI Meeting & Planning</option>
                  <option value="all-in-one">All-in-One Workspace</option>
                </select>
              </div>
            </div>

            {/* Row 5 — Preferred Demo Day + How did you hear */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
              <div>
                <label className={labelCls}>Preferred Demo Day</label>
                <select
                  name="preferredDay"
                  value={formData.preferredDay}
                  onChange={handleChange}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={selectStyle}
                >
                  <option value="">Any day works</option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                </select>
              </div>
              <div>
                <label className={labelCls}>How did you hear about us?</label>
                <select
                  name="source"
                  value={formData.source}
                  onChange={handleChange}
                  className={`${inputCls} cursor-pointer appearance-none`}
                  style={selectStyle}
                >
                  <option value="">Select source</option>
                  <option value="google">Google Search</option>
                  <option value="twitter">Twitter / X</option>
                  <option value="linkedin">LinkedIn</option>
                  <option value="friend">Friend / Colleague</option>
                  <option value="producthunt">Product Hunt</option>
                  <option value="blog">Blog / Article</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Row 6 — Additional Message */}
            <div className="mb-4">
              <label className={labelCls}>Anything you'd like us to know?</label>
              <textarea
                name="message"
                rows={2}
                placeholder="Tell us about your current workflow challenges or specific features you'd like to see..."
                value={formData.message}
                onChange={handleChange}
                className={`${inputCls} resize-none`}
              />
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ scale: 1.01, boxShadow: '0 0 25px rgba(99,102,241,0.4)' }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-primary hover:bg-[#34d399] text-[#050e09] font-black rounded-xl py-3 text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              Book Demo — It's Free
              <ArrowRight size={16} className="stroke-[3]" />
            </motion.button>

            <p className="text-center text-[0.65rem] text-muted-foreground mt-2.5 tracking-wide m-0">
              No credit card required &nbsp;·&nbsp; 15-minute session &nbsp;·&nbsp; Personalised walkthrough
            </p>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-center p-8 w-full"
          >
            <CheckCircle2 size={64} className="text-primary mx-auto mb-5 drop-shadow-[0_0_18px_rgba(99,102,241,0.5)]" />
            <h3 className="text-2xl md:text-3xl font-black text-foreground mb-3">Demo Request Received!</h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-[460px] mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. A confirmation has been sent to{' '}
              <strong className="text-white">{formData.email}</strong>. Our team will reach out within 24 hours to confirm your slot.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
