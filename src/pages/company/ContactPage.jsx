import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="pt-[140px] pb-24 md:pt-[180px] md:pb-32 px-5 min-h-screen relative font-sans z-10">
      <div className="container mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-black text-[#F1F5F9] tracking-tight mb-6">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#8B5CF6]">Touch</span>
          </h1>
          <p className="text-xl text-primary/60 leading-relaxed">
            Ready to transform your enterprise operations? Our team is here to help you build the perfect workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="bg-[#0D0D1C]/80 p-8 md:p-12 rounded-[2.5rem] border border-primary/20 backdrop-blur-xl shadow-[0_0_80px_rgba(99,102,241,0.05)]">
            <h3 className="text-2xl font-bold text-[#F1F5F9] mb-8">Send us a message</h3>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">First Name</label>
                  <input type="text" className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Last Name</label>
                  <input type="text" className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Work Email</label>
                <input type="email" className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-primary/60 uppercase tracking-widest">Message</label>
                <textarea rows="4" className="bg-primary/5 border border-primary/20 rounded-xl px-4 py-3 text-[#F1F5F9] focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your requirements..."></textarea>
              </div>

              <button className="mt-4 bg-primary hover:bg-[#8B5CF6] text-black font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                Send Message <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Right Column: Details & Demo */}
          <div className="flex flex-col gap-12">
            
            {/* Demo CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent p-10 rounded-[2.5rem] border border-primary/20">
              <h3 className="text-2xl font-bold text-[#F1F5F9] mb-4">Book a Live Demo</h3>
              <p className="text-primary/70 mb-8 leading-relaxed">
                See OwnTasks in action. Schedule a 30-minute personalized walkthrough with an operations expert.
              </p>
              <button className="w-full bg-[#e8f5ef] hover:bg-white text-black font-bold py-4 rounded-xl transition-colors">
                Schedule Demo
              </button>
            </div>

            {/* Company Info */}
            <div className="flex flex-col gap-8">
              <h3 className="text-xl font-bold text-[#F1F5F9] border-b border-primary/10 pb-4">Global Headquarters</h3>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><MapPin size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#F1F5F9] mb-1">
                    <a 
                      href="https://www.google.com/maps/search/?api=1&query=10°46'38.3%22N+79°38'04.4%22E"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#F1F5F9] hover:text-primary transition-colors no-underline flex items-center gap-2"
                    >
                      Ieyal Solutions <ArrowRight size={14} />
                    </a>
                  </h4>
                  <p className="text-primary/60 leading-relaxed text-sm mt-2">
                    80/5, Nethaji Road, North street,<br />
                    Thiruvarur, Tamil Nadu 610001,<br />
                    India.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Phone size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#F1F5F9] mb-1">Phone</h4>
                  <a href="tel:+919791467587" className="text-primary/60 hover:text-primary transition-colors text-sm">
                    +91 97914 67587
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary"><Mail size={24} /></div>
                <div>
                  <h4 className="font-bold text-[#F1F5F9] mb-1">Email</h4>
                  <a href="mailto:contact@ieyalsolutions.com" className="text-primary/60 hover:text-primary transition-colors text-sm">
                    contact@ieyalsolutions.com
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
