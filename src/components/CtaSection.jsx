import React from 'react';
import { motion } from 'framer-motion';

export default function CtaSection() {
  return (
    <section id="cta" className="py-24 lg:py-32 bg-surface-light overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Urgency Banner */}
        <motion.div 
          className="bg-primary text-white text-center py-5 px-8 rounded-2xl mb-20 shadow-[0_20px_40px_rgba(13,148,136,0.25)] font-bold text-lg md:text-xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Early access slots for Q3 2026 clinical onboarding are limited. Apply now.
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 text-center lg:text-left">
            <motion.h2 
              className="text-[clamp(2.5rem,5vw,3.8rem)] font-bold mb-8 leading-[1.1]"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Better Care Starts With Better Information.<br /> <span className="text-primary italic">Start Monitoring Today.</span>
            </motion.h2>
            <motion.p 
              className="text-text-muted text-xl max-w-[580px] mb-10 leading-relaxed mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Whether you are a clinician looking to save lives, a hospital system seeking efficiency, or a patient wanting control — Vitalink sets up in less than 24 hours.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center lg:justify-start gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a href="#" className="font-bold text-primary hover:text-primary-dark transition-colors border-b-2 border-primary/20 pb-1">Clinical Walkthrough</a>
              <a href="#" className="font-bold text-primary hover:text-primary-dark transition-colors border-b-2 border-primary/20 pb-1">Clinical Evidence PDF</a>
              <a href="#" className="font-bold text-primary hover:text-primary-dark transition-colors border-b-2 border-primary/20 pb-1">I'm a Patient</a>
            </motion.div>
          </div>

          <motion.div 
            className="flex-1 w-full max-w-[560px]"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="glass-card-light p-8 md:p-12 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h3 className="text-2xl font-bold mb-8">Schedule a Demo</h3>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">Full Name</label>
                  <input type="text" placeholder="Dr. Jane Doe" className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-text-primary mb-2">Work Email</label>
                  <input type="email" placeholder="jane.doe@healthnetwork.org" className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Institution</label>
                    <input type="text" placeholder="General Hospital" className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all placeholder:text-text-muted/40" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-text-primary mb-2">Role</label>
                    <select className="w-full px-5 py-4 rounded-xl border border-primary/10 focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all bg-white appearance-none">
                      <option>Clinician</option>
                      <option>Hospital Admin</option>
                      <option>Researcher</option>
                      <option>Investor</option>
                    </select>
                  </div>
                </div>
                <button type="button" className="btn-primary w-full py-5 text-lg justify-center mt-4">
                  Schedule My Demo →
                </button>
              </form>

              <div className="mt-8 text-center">
                <p className="text-xs text-text-muted font-medium flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                  HIPAA-compliant. Your data is never sold. No credit card required.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
