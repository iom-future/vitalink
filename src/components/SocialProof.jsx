import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const PROOF_STATS = [
  { num: '94%', label: 'AI Detection Accuracy' },
  { num: '3.2x', label: 'Reduction in Readmissions' },
  { num: '200+', label: 'Clinicians in Network' },
  { num: 'Live', label: 'in 14 US States' },
];

const TESTIMONIALS = [
  {
    name: 'Dr. Anita Sharma',
    role: 'Interventional Cardiologist',
    org: 'Mount Sinai Affiliate',
    quote: 'Vitalink intercepted a major cardiac event in a high-risk patient 58 hours before they would have been symptomatic. This is the difference between reactive and proactive medicine.',
  },
  {
    name: 'Marcus T.',
    role: 'Type 1 Diabetes Patient',
    org: 'Chronic Disease Management',
    quote: "Living with chronic disease often feels like navigating a dark room. Vitalink turned the lights on. I feel monitored, safe, and for the first time, I own my data.",
  },
  {
    name: 'Dr. Rachel Okonkwo',
    role: 'Chief Medical Officer',
    org: 'Regional Health Network',
    quote: 'The data sovereignty feature sold the board. Total patient ownership combined with native integration into our clinical workflow. We went live in three weeks.',
  },
];

const LOGOS = ['EPIC', 'CERNER', 'ATHENA', 'MAYO CLINIC', 'CLEVELAND CLINIC'];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-32 lg:py-48 ">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Real Impact</span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
              Evidence-Based Confidence.
            </h2>
            <p className="text-text-muted text-lg md:text-xl max-w-[850px] mx-auto leading-relaxed">
              Medicine changes when you can see what is really happening. Join the network of clinicians redefining the standard of care.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {PROOF_STATS.map((stat, i) => (
            <motion.div 
              key={i}
              className="p-8 rounded-2xl bg-teal-light/20 border border-primary/5 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
            >
              <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-3 tracking-tighter">{stat.num}</div>
              <div className="text-secondary/60 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-start p-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 1 }}
            >
              <div className="mb-10 p-4 rounded-2xl bg-primary/5 text-primary">
                <Quote size={20} className="fill-current opacity-20" />
              </div>
              <p className="text-secondary text-xl font-black leading-relaxed mb-10 flex-grow tracking-tight">
                "{t.quote}"
              </p>
              <div className="flex flex-col">
                <span className="font-black text-secondary text-xl">{t.name}</span>
                <span className="text-primary font-bold text-sm tracking-tight mb-1">{t.role}</span>
                <span className="text-text-muted text-xs font-bold uppercase tracking-widest leading-none">{t.org}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="pt-32 border-t border-secondary/5 text-center">
          <p className="text-text-muted/40 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-16 px-6">
            Trusted Integration partners 
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0">
            {LOGOS.map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-secondary tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
