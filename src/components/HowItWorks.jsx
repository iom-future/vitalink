import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TABS = [
  {
    id: 'vitasense',
    title: 'VitaSense Wearables',
    subtitle: 'Health Data That Never Sleeps.',
    icon: '⌚',
    description: 'Our proprietary IoT sensors capture high-fidelity cardiac, respiratory, and metabolic data 24/7. Clinical-grade accuracy in a consumer-friendly form factor ensures patients stay compliant and clinicians stay informed.',
  },
  {
    id: 'vitaai',
    title: 'VitaAI Clinical Intelligence',
    subtitle: 'Your Personal Health AI. Working Every Second You Breathe.',
    icon: '🧠',
    description: 'Transform raw data into life-saving insights. Our AI engine identifies subtle physiological changes up to 72 hours before a critical event occurs, alerting care teams with actionable risk scores and trend analysis.',
  },
  {
    id: 'vitachain',
    title: 'VitaChain Health Record',
    subtitle: 'Your Health History. Owned By You.',
    icon: '⛓️',
    description: 'Built on a decentralized ledger, VitaChain ensures your health data is immutable, private, and portable. Patients gain micro-payments for contributing anonymized data to global research, turning health into an asset.',
  },
  {
    id: 'vitadash',
    title: 'VitaDash Clinical Portal',
    subtitle: 'Every Patient. Every Reading. One Unified View.',
    icon: '🖥️',
    description: 'One dashboard for your entire patient population. Seamless FHIR integration with Epic, Cerner, and Athenahealth means monitoring data lives where you work, reducing burnout and improving outcomes.',
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-secondary text-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <motion.span 
            className="eyebrow eyebrow-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            HOW VITALINK WORKS
          </motion.span>
          <motion.h2 
            className="text-[clamp(2.2rem,5vw,3.5rem)] font-bold mb-6 mt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Continuous Care. Complete Transparency. Total Control.
          </motion.h2>
          <motion.p 
            className="text-white/60 text-lg max-w-[720px] mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Vitalink is built on three foundational layers that work in perfect harmony to bridge the gap between patients and clinicians.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                activeTab.id === tab.id
                  ? 'bg-primary border-primary text-white shadow-[0_0_24px_rgba(13,148,136,0.35)]'
                  : 'bg-transparent border-white/10 text-white/50 hover:border-white/30 hover:text-white'
              }`}
            >
              {tab.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="max-w-[900px] mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="glass-card flex flex-col items-center text-center p-8 md:p-16"
            >
              <div className="text-6xl mb-8 animate-[float_4s_easeInOut_infinite]">{activeTab.icon}</div>
              <h3 className="text-3xl font-bold mb-3">{activeTab.title}</h3>
              <p className="text-accent font-medium italic text-lg mb-8">{activeTab.subtitle}</p>
              <p className="text-white/70 text-lg leading-relaxed">{activeTab.description}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Convergence Banner */}
        <motion.div 
          className="mt-20 bg-gradient-to-r from-primary to-surface-dark rounded-3xl p-10 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h4 className="text-xl md:text-2xl font-bold text-white tracking-wide">
            IoT + AI + Blockchain — Not three separate tools. One connected system.
          </h4>
        </motion.div>
      </div>
    </section>
  );
}
