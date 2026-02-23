import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, FileText, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section id="cta" className="py-32 lg:py-48 ">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          {/* Left: Urgency / Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="eyebrow">Instant Deployment</span>
              <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
                Ready to standardize your standard of care?
              </h2>
              <p className="text-text-muted text-lg md:text-xl mb-12 leading-relaxed max-w-[650px] mx-auto lg:mx-0">
                Vitalink is currently in limited early access for hospital networks and private practices in the US. Secure your place in the future of healthcare.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Mail size={18} />
                  </div>
                  partners@vitalink.ai
                </div>
                <div className="flex items-center gap-3 text-secondary font-bold">
                  <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                    <Phone size={18} />
                  </div>
                  +1 (555) VITA-LNK
                </div>
              </div>

              <div className="mt-16 p-8 rounded-2xl bg-surface-light border border-secondary/5 flex flex-col sm:flex-row items-center gap-8">
                <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                  <FileText size={28} />
                </div>
                <div className="text-center sm:text-left">
                  <p className="font-black text-secondary text-lg">Download Our Research Whitepaper</p>
                  <p className="text-text-muted text-sm">Deep dive into our AI detection methodology.</p>
                </div>
                <a href="#" className="text-primary font-black text-sm uppercase tracking-[0.2em] hover:translate-x-1 transition-transform sm:ml-auto">
                  Read Now 
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Modern Form */}
          <div className="flex-1 w-full max-w-[500px]">
            <motion.div
              className="glass-card-light p-12! md:p-16! relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-8 tracking-tight">Request a Clinical Demo</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
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
                <button type="submit" className="btn-teal w-full justify-center group mt-4">
                  Request Access
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <p className="text-center text-text-muted text-xs font-medium">
                  By submitting, you agree to our <a href="#" className="underline">Terms of Service</a>.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
