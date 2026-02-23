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
    <section id="features" className="py-32 lg:py-48 ">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 lg:mb-32 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">Medical Precision</span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
              Designed For Safety. <br className="sm:hidden" /> Built For Scale.
            </h2>
            <p className="text-text-muted text-lg md:text-xl max-w-[850px] mx-auto leading-relaxed">
              Vitalink replaces fragmented, reactive care with a unified clinical intelligence layer that bridges the gap between hospital and home.
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`p-12 rounded-2xl relative border-4 border-white bg-[#F5F5F7] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] hover:border-primary/10 transition-all duration-500 hover:shadow-clinical-hover group overflow-hidden ${
                index === 0 || index === 3 || index === 4 ? 'lg:col-span-2' : 'lg:col-span-1'
              }`}
            >
              {/* Background Icon Effect */}
              <div className="absolute -bottom-10 -right-10 text-primary opacity-[0.05] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                {React.cloneElement(feature.icon, { size: 240, strokeWidth: 1.5 })}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-secondary group-hover:text-primary transition-colors leading-[1.1]">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    See how it works <Zap size={14} className="fill-current" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
