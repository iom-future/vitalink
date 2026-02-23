import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Play } from 'lucide-react';

const STATS = [
  { number: '$150B', label: 'Market Opportunity' },
  { number: '94%', label: 'Detection Accuracy' },
  { number: '48hr', label: 'Response Lead Time' },
  { number: '3.2x', label: 'Readmission Reduction' },
];

const TRUST_BADGES = [
  'HIPAA Certified',
  'FDA Class II Ready',
  'SOC 2 Type II',
  'ISO 27001',
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }),
};

import Threads from './Threads';

export default function Hero({ bannerVisible }) {
  return (
    <section id="hero" className={`relative min-h-[90vh] flex flex-col justify-center overflow-hidden pb-6 bg-teal-light transition-all duration-500 ${bannerVisible ? 'pt-[130px]' : 'pt-[80px]'}`}>
      <div className="absolute inset-0 pointer-events-none opacity-60">
      
        {/* Soft bottom fade to blend with next section */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto w-full">
        <motion.span
          className="eyebrow"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          The future of patient monitoring is here
        </motion.span>

        <motion.h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] text-secondary font-black max-w-[1000px] mx-auto mb-6 tracking-tight leading-[1.05]"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
        >
          Your Patient's Health, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_8s_linear_infinite]">
            Monitored in Real Time.
          </span>
         
        </motion.h1>

        <motion.p
          className="text-secondary/80 text-lg md:text-2xl max-w-[800px] mx-auto mb-6 leading-relaxed font-medium"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
        >
          Vitalink connects wearable IoT devices, AI-powered health analytics, and patient-owned blockchain health records into one seamless platform — giving clinicians the live insight they need and patients the privacy they deserve.
        </motion.p>

        <motion.p
          className="text-secondary/50 text-[0.85rem] md:text-[1rem] max-w-[850px] mx-auto mb-8 leading-relaxed italic"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2.5}
        >
          HIPAA-certified • Trusted by physicians, hospital networks, and research institutions • Built with patients — not just for them
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-6"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
        >
          <a href="#cta" className="btn-teal justify-center group px-10">
            Start Monitoring Now 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works" className="btn-outline-dark justify-center group px-10 bg-white">
            <Play size={18} className="fill-current" />
            See It In Action
          </a>
        </motion.div>

        <motion.div
          className="relative overflow-hidden w-full opacity-40 hover:opacity-100 transition-opacity duration-500 mask-fade py-4"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
        >
          <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
            {[...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES].map((badge, idx) => (
              <span key={`${badge}-${idx}`} className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase">
                <ShieldCheck size={14} className="text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Stats Bar */}
    
    </section>
  );
}
