import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, ArrowRight, PlayCircle, Download, User } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="py-16 md:py-24 relative">
      {/* Urgency Banner */}
      <div className="bg-primary py-3 mb-8 sm:mb-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <p className="text-secondary text-[0.7rem] sm:text-xs font-black uppercase tracking-[0.2em] text-center">
            Early access slots for Q3 2026 clinical onboarding are limited. Apply now to secure your institution's position.
          </p>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left: Content */}
          <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
                  Better Care Starts With Better Information. <br className="hidden md:block" /> Start Monitoring Today.
                </h2>
                <p className="text-text-muted text-base md:text-lg mb-12 leading-relaxed max-w-[650px] mx-auto lg:mx-0">
                  Whether you are a clinician, hospital network, or patient — Vitalink was built for you. Setup takes less than 24 hours. The first early warning could come within days.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
                  <div className="flex items-center gap-3 text-secondary font-bold">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <Mail size={18} />
                    </div>
                    hello@vitalink.io
                  </div>
                  <div className="flex items-center gap-3 text-secondary font-bold">
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                      <Phone size={18} />
                    </div>
                    +1 (650) 000-VITA
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right: Modern Form Card */}
            <div className="flex-1 w-full max-w-[550px]">
              <motion.div
                className="glass-card-light p-8 md:p-10 relative overflow-hidden"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              >
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Request Your Free Clinical Demo</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input type="text" placeholder="Full Name" className="w-full px-5 py-3.5 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40 bg-white/50" />
                  </div>
                  <div>
                    <input type="email" placeholder="Work Email" className="w-full px-5 py-3.5 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40 bg-white/50" />
                  </div>
                </div>
                <div>
                  <input type="text" placeholder="Institution / Hospital" className="w-full px-5 py-3.5 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40 bg-white/50" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <select defaultValue="" className="w-full px-5 py-3.5 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white/50 appearance-none">
                    <option value="" disabled>Select Your Role</option>
                    <option>Clinician</option>
                    <option>Hospital Admin</option>
                    <option>Researcher</option>
                    <option>Other</option>
                  </select>
                  <input type="number" placeholder="No. of Patients to Monitor" className="w-full px-5 py-3.5 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40 bg-white/50" />
                </div>
                <button type="submit" className="btn-teal w-full justify-center group mt-2 h-14 text-sm sm:text-base font-semibold tracking-widest">
                  Schedule My Demo
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform ml-2" />
                </button>
                <p className="text-center text-text-muted text-[0.65rem] font-bold uppercase tracking-wider mt-4">
                  HIPAA-compliant. Your data is never sold or shared without consent. <br /> No credit card required. Cancel any time.
                </p>
              </form>
            </motion.div>

            {/* Secondary CTA Links */}
            <div className="mt-12 flex flex-col gap-5 px-4">
              <a href="#" className="flex items-center gap-4 text-sm font-black text-secondary hover:text-primary transition-colors group">
                <PlayCircle size={20} className="text-primary" />
                <span>Watch a 4-Minute Clinical Walkthrough</span>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="#" className="flex items-center gap-4 text-sm font-black text-secondary hover:text-primary transition-colors group">
                <Download size={20} className="text-primary" />
                <span>Download the Clinical Evidence Summary (PDF)</span>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
              <a href="#" className="flex items-center gap-4 text-sm font-black text-secondary hover:text-primary transition-colors group">
                <User size={20} className="text-primary" />
                <span>I'm a Patient — Learn About Vitalink for Me</span>
                <ArrowRight size={14} className="ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
