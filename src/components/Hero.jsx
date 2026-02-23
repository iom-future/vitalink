import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const slideIn = (direction = 'left', i = 0) => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -30 : 30 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 1.2, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
});

export default function Hero({ bannerVisible }) {
  return (
    <section id="hero" className={`relative min-h-[90vh] flex flex-col justify-center overflow-hidden pb-6 bg-teal-light transition-all duration-500 ${bannerVisible ? 'pt-[170px]' : 'pt-[80px]'}`}>
      <div className="absolute inset-0 pointer-events-none opacity-60">
        {/* <Threads /> */}
        {/* Soft bottom fade to blend with next section */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto w-full">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          The future of patient monitoring is here
        </motion.span>

        <motion.h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] text-secondary font-black max-w-[1000px] mx-auto mb-6 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Patient's Health, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_8s_linear_infinite]">
            Monitored in Real Time.
          </span>
          <br className="hidden sm:block" />
          <span className="text-primary/90">Acted On Before It's Too Late.</span>
        </motion.h1>

        <motion.p
          className="text-secondary/80 text-lg md:text-2xl max-w-[800px] mx-auto mb-6 leading-relaxed font-medium"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Vitalink connects wearable IoT devices, AI-powered health analytics, and patient-owned blockchain health records into one seamless platform — giving clinicians the live insight they need and patients the privacy they deserve.
        </motion.p>

        <motion.p
          className="text-secondary/50 text-[0.85rem] md:text-[1rem] max-w-[850px] mx-auto mb-8 leading-relaxed italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          HIPAA-certified • Trusted by physicians, hospital networks, and research institutions • Built with patients — not just for them
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link to="/pricing" className="btn-teal justify-center group px-10">
            Start Monitoring Now 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/how-it-works" className="btn-outline-dark justify-center px-10">
            <Play size={18} className="fill-current" />
            See It In Action
          </Link>
        </motion.div>

        <motion.div
          className="relative overflow-hidden w-full opacity-40 hover:opacity-100 transition-opacity duration-500 mask-fade py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
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
