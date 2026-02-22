import React from 'react';
import { motion } from 'framer-motion';

const FEATURES = [
  {
    icon: '📊',
    title: 'Continuous 24/7 Biometric Monitoring',
    description: 'Capture vital signs without interruption. No more snapshots—see the full movie of your patient’s health with high-resolution continuous data.',
  },
  {
    icon: '🚨',
    title: 'AI Early Warning Alerts',
    description: 'Detect physiological deterioration up to 72 hours before critical events. Predict, don’t just react, to cardiac and respiratory failure.',
  },
  {
    icon: '💼',
    title: 'Patient-Owned Blockchain Health Wallet',
    description: 'Data security meets data sovereignty. Patients own their private keys and consent to data sharing on a per-session basis.',
  },
  {
    icon: '🔄',
    title: 'FHIR-Compliant EHR Integration',
    description: 'Enterprise-ready connectors for Epic, Cerner, and Athenahealth. No new passwords, no double-entry—just better data where you need it.',
  },
  {
    icon: '📱',
    title: 'Multi-Patient Clinical Dashboard',
    description: 'Triage your entire patient population in seconds. Risk-stratified views help clinicians focus on the patients who need them most right now.',
  },
  {
    icon: '📈',
    title: 'Anonymized Data Marketplace',
    description: 'Turn health data into research breakthroughs. Participate in the global data economy while maintaining total privacy and earning rewards.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="eyebrow"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            WHAT VITALINK DOES FOR YOU
          </motion.span>
          <motion.h2 
            className="text-[clamp(2.2rem,4vw,3rem)] font-bold mb-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Every Feature Designed With One Question in Mind:<br /> Is the Patient Safe Right Now?
          </motion.h2>
          <motion.p 
            className="text-text-muted text-lg max-w-[720px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Vitalink replaces fragmented monitoring with a unified intelligence layer that scales across any hospital system or home environment.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group p-10 rounded-2xl border border-primary/5 bg-surface-light/30 hover:bg-white hover:border-primary/20 hover:shadow-[0_20px_40px_rgba(13,148,136,0.08)] transition-all duration-400"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-text-primary group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
