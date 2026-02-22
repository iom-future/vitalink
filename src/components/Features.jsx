import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Zap, Shield, Share2, PanelLeft, LineChart } from 'lucide-react';

const FEATURES = [
  {
    icon: <Activity />,
    title: 'Continuous Monitoring',
    description: 'Capture vital signs without interruption. Clinical-grade sensors ensure you see the full context of patient health, 24/7.',
  },
  {
    icon: <Zap />,
    title: '72hr Warning System',
    description: 'Our clinical AI detects early signs of physiological deterioration up to three days before a critical event occurs.',
  },
  {
    icon: <Shield />,
    title: 'Sovereign Health Wallet',
    description: 'Data security meets ownership. Patients control their medical records via encrypted blockchain identity.',
  },
  {
    icon: <Share2 />,
    title: 'Enterprise EHR Sync',
    description: 'Native FHIR integration for Epic, Cerner, and Athenahealth. Monitoring data lives directly in your clinical workflow.',
  },
  {
    icon: <PanelLeft />,
    title: 'Population Dashboard',
    description: 'Triage entire patient groups in seconds. Risk-stratified views help clinicians prioritize care efficiently.',
  },
  {
    icon: <LineChart />,
    title: 'Research Marketplace',
    description: 'Empower medical research. Patients can opt-in to share anonymized data and earn rewards securely.',
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
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Features() {
  return (
    <section id="features" className="py-24 lg:py-40 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Medical Precision</span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-8 leading-[1.1] tracking-tight">
              Designed For Safety. Built For Scale.
            </h2>
            <p className="text-text-muted text-xl max-w-[800px] mx-auto leading-relaxed">
              Vitalink replaces fragmented, reactive care with a unified clinical intelligence layer that bridges the gap between hospital and home.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className="mb-8 w-14 h-14 rounded-2xl bg-surface-light flex items-center justify-center text-primary group-hover:scale-110 transition-all duration-500 shadow-sm border border-secondary/5">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight text-secondary group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-text-muted text-lg leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
