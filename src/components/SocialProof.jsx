import React from 'react';
import { motion } from 'framer-motion';

const PROOF_STATS = [
  { num: '94%', label: 'AI early warning accuracy' },
  { num: '3.2x', label: 'fewer preventable readmissions' },
  { num: '200+', label: 'clinicians in early access' },
  { num: '$0', label: 'patient data sold without consent' },
];

const TESTIMONIALS = [
  {
    name: 'Dr. Anita Sharma',
    role: 'Interventional Cardiologist, Mount Sinai Affiliate',
    quote: 'Vitalink intercepted a major cardiac event in a high-risk patient 58 hours before they would have been symptomatic. This is the difference between a routine intervention and a clinical emergency.',
  },
  {
    name: 'Marcus T.',
    role: 'Patient, Chronic Disease Management',
    quote: "Living with Type 1 diabetes, I've always felt like I was on my own between appointments. Vitalink changed that. I feel monitored, understood, and finally, I own my data.",
  },
  {
    name: 'Dr. Rachel Okonkwo',
    role: 'CMO, Regional Health Network',
    quote: 'The blockchain wallet sold the board. Total data sovereignty for patients combined with live FHIR integration for our staff. We went live in 3 weeks.',
  },
];

const LOGOS = ['Logo 1', 'Logo 2', 'Logo 3', 'Logo 4', 'Logo 5'];

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 lg:py-32 bg-secondary text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.span 
            className="eyebrow eyebrow-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHAT CLINICIANS AND PATIENTS ARE SAYING
          </motion.span>
          <motion.h2 
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Medicine Changes When You Can See<br /> What's Really Happening.
          </motion.h2>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {PROOF_STATS.map((stat, i) => (
            <motion.div 
              key={i}
              className="text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-mono font-bold text-accent mb-3">{stat.num}</div>
              <div className="text-white/50 text-sm md:text-base leading-tight uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-10 flex flex-col items-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
            >
              <div className="text-accent text-4xl mb-6">"</div>
              <p className="text-white/80 text-lg italic leading-relaxed mb-8 flex-grow">
                {t.quote}
              </p>
              <div>
                <div className="font-bold text-white text-lg">{t.name}</div>
                <div className="text-accent text-sm mt-1">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="pt-20 border-t border-white/[0.08] text-center">
          <p className="text-white/30 text-sm mb-12 font-medium tracking-widest uppercase">
            Integrated With the Systems Your Team Already Uses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            {LOGOS.map((logo, i) => (
              <div key={i} className="w-32 h-10 bg-white/20 rounded-lg flex items-center justify-center font-bold text-xs">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
