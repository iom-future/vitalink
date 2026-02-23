import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Watch, Brain, Link, LayoutDashboard, ChevronRight } from 'lucide-react';

const TABS = [
  {
    id: 'vitasense',
    title: 'VitaSense',
    label: 'IoT Sensors',
    subtitle: 'Health Data That Never Sleeps.',
    icon: <Watch size={32} />,
    description: 'Our proprietary medical-grade sensors capture high-fidelity cardiac, respiratory, and metabolic data 24/7. Clinical-grade accuracy in a consumer-friendly form factor ensures patients stay compliant and clinicians stay informed.',
  },
  {
    id: 'vitaai',
    title: 'VitaAI',
    label: 'Clinical Intelligence',
    subtitle: 'Your Personal Health AI.',
    icon: <Brain size={32} />,
    description: 'Transform raw data into life-saving insights. Our AI engine identifies subtle physiological changes up to 72 hours before a critical event occurs, alerting care teams with actionable risk scores and trend analysis.',
  },
  {
    id: 'vitachain',
    title: 'VitaChain',
    label: 'Blockchain Ledger',
    subtitle: 'Your Health History. Owned By You.',
    icon: <Link size={32} />,
    description: 'Built on a decentralized ledger, VitaChain ensures your health data is immutable, private, and portable. Patients gain micro-payments for contributing anonymized data to global research, turning health into a sovereign asset.',
  },
  {
    id: 'vitadash',
    title: 'VitaDash',
    label: 'Clinical Portal',
    subtitle: 'Every Patient. One Unified View.',
    icon: <LayoutDashboard size={32} />,
    description: 'One dashboard for your entire patient population. Seamless FHIR integration with Epic, Cerner, and Athenahealth means monitoring data lives where you work, reducing burnout and improving outcomes.',
  },
];

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-40 bg-teal-light/30 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">How Vitalink Works</span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold mb-8 leading-[1.1] tracking-tight font-primary">
          Continuous Care. Complete Transparency. Total Control.
            </h2>
            <p className="text-text-muted text-base max-w-[700px] mx-auto leading-relaxed">
         Vitalink is built on three layers that work together seamlessly — IoT wearables that capture health data around the
clock, AI models that turn raw readings into meaningful clinical insight, and a patient-owned blockchain health record
that keeps data secure, private, and always accessible. Together, they create a system where care never stops — even
when the appointment does.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Vertical Tab Navigation */}
          <div className="w-full lg:w-[350px] flex flex-col gap-3">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`group text-left p-6 rounded-[24px] transition-all duration-400 border flex items-center justify-between ${
                  activeTab.id === tab.id
                    ? 'bg-white border-primary/20 shadow-clinical-hover translate-x-2'
                    : 'bg-transparent border-transparent text-text-muted hover:bg-white/50 hover:translate-x-1'
                }`}
              >
                <div>
                  <div className={`text-sm font-bold tracking-widest uppercase mb-1 transition-colors ${activeTab.id === tab.id ? 'text-primary' : 'text-text-muted'}`}>
                    {tab.title}
                  </div>
                  <div className={`font-bold text-lg tracking-tight font-primary ${activeTab.id === tab.id ? 'text-secondary' : 'text-text-muted/60'}`}>
                    {tab.label}
                  </div>
                </div>
                <ChevronRight size={18} className={`transition-all ${activeTab.id === tab.id ? 'text-primary' : 'text-text-muted/20 opacity-0 group-hover:opacity-100'}`} />
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="flex-1 min-h-[500px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white rounded-[40px] p-10 md:p-16 shadow-clinical h-full border border-secondary/5 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-3xl bg-surface-light flex items-center justify-center text-primary mb-10 shadow-sm">
                    {activeTab.icon}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 tracking-tight text-secondary">
                    {activeTab.title}: {activeTab.label}
                  </h3>
                  <p className="text-primary font-bold text-xl mb-8 flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-primary/20"></span>
                    {activeTab.subtitle}
                  </p>
                  <p className="text-text-muted text-xl leading-relaxed max-w-[600px]">
                    {activeTab.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Convergence Banner */}
        <motion.div 
          className="mt-24 p-1 rounded-full bg-gradient-to-r from-primary/5 via-primary/20 to-primary/5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-full py-8 px-12 flex flex-col md:flex-row items-center justify-center gap-6 text-center">
            <span className="flex items-center gap-2 text-primary font-black tracking-tighter text-2xl uppercase">
              IoT <span className="text-secondary/20 font-light">+</span> AI <span className="text-secondary/20 font-light">+</span> BLOCKCHAIN
            </span>
            <span className="hidden md:block w-px h-8 bg-secondary/10"></span>
            <p className="text-secondary font-bold text-lg tracking-tight italic opacity-70">
              Not three separate tools. One connected intelligence layer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
