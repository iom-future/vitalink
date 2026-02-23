import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Watch, Brain, Link, LayoutDashboard, ChevronLeft, ChevronRight, Hand, Plus } from 'lucide-react';
import StarBorder from './StarBorder';

const STEPS = [
  {
    id: 'vitasense',
    eyebrow: 'VitaSense Wearables',
    title: 'Health Data That Never Sleeps.',
    icon: <Watch size={32} />,
    bgColor: 'bg-emerald-100',
    iconColor: 'text-emerald-500',
    dotColor: 'bg-emerald-500',
    description: 'Our network of FDA-ready IoT wearables — glucose monitors, cardiac patches, blood pressure sensors, and smart rings — streams continuous biometric data 24 hours a day, 7 days a week. No buttons to press. No readings to log. Just a constant, unbroken picture of how your body is actually doing.',
  },
  {
    id: 'vitaai',
    eyebrow: 'VitaAI Clinical Intelligence',
    title: 'Your Personal Health AI. Working Every Second You Breathe.',
    icon: <Brain size={32} />,
    bgColor: 'bg-blue-100',
    iconColor: 'text-blue-500',
    dotColor: 'bg-blue-500',
    description: "Vitalink's AI engine analyses thousands of biometric data points in real time, detecting subtle shifts in health patterns that precede clinical events. When a concern is identified, the right clinician is alerted immediately — with a full contextual summary and a recommended course of action. Faster decisions. Better outcomes.",
  },
  {
    id: 'vitachain',
    eyebrow: 'VitaChain Health Record',
    title: 'Your Health History. Owned By You — Not a Hospital.',
    icon: <Link size={32} />,
    bgColor: 'bg-violet-100',
    iconColor: 'text-violet-500',
    dotColor: 'bg-violet-500',
    description: 'Every reading, every alert, every clinical note is stored in a patient-owned blockchain health wallet — encrypted, immutable, and fully under your control. Share access with any clinician in seconds. Revoke it just as fast. And for the first time, receive micro-payments when your anonymized data contributes to medical research — because your health story has value, and you should benefit from it.',
  },
  {
    id: 'vitadash',
    eyebrow: 'VitaDash Clinical Portal',
    title: 'Every Patient. Every Reading. One Unified View.',
    icon: <LayoutDashboard size={32} />,
    bgColor: 'bg-cyan-100',
    iconColor: 'text-cyan-500',
    dotColor: 'bg-cyan-500',
    description: 'Clinicians and care teams access a live dashboard showing real-time patient vitals, AI-generated risk scores, trend analysis, and smart alert queues — prioritized by urgency so the most critical patients always rise to the top. Integrates directly with existing EHR systems via FHIR-compliant APIs. No workflow disruption. Just better information.',
  },
];

const slideIn = (direction = 'left', i = 0) => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -25 : 25 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
});

function StepCard({ step, index, isCarousel = false }) {
  const cardRef = useRef(null);
  const { scrollXProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center", "end start"]
  });

  // Center-pop: Only scale up the focused card
  const scale = useTransform(scrollXProgress, [0, 0.5, 1], [1, 1.05, 1]);

  const CardContent = (
    <div className={`${step.bgColor} rounded-2xl p-6 md:p-10 shadow-[inset_0_2px_10px_rgba(255,255,255,0.8)] h-full border border-secondary/5 relative overflow-hidden flex flex-col group hover:border-primary/20 transition-all duration-500`}>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/40 rounded-full -mr-20 -mt-20 blur-3xl transition-opacity group-hover:opacity-100 opacity-60"></div>
      
      {/* Background Icon Effect - Moved to Top Right & More Visible */}
      <div className={`absolute -top-10 -right-10 ${step.iconColor} opacity-[0.1] group-hover:opacity-[0.15] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none`}>
        {React.cloneElement(step.icon, { size: 240, strokeWidth: 1 })}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        <div className="text-[0.65rem] font-bold tracking-[0.25em] uppercase text-secondary/60 mb-4">
          {step.eyebrow}
        </div>
        <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-secondary leading-[1.1]">
          {step.title}
        </h3>
        <p className="text-secondary/80 text-base leading-relaxed mt-auto">
          {step.description}
        </p>
      </div>
    </div>
  );

  if (isCarousel) {
    return (
      <motion.div
        ref={cardRef}
        style={{ scale }}
        className="min-w-full snap-center py-6 px-6"
      >
        {CardContent}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={slideIn(index % 2 === 0 ? 'left' : 'right', index)}
      className="h-full"
    >
      {CardContent}
    </motion.div>
  );
}

export default function HowItWorks() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    if (!containerRef.current) return;
    const scrollPosition = e.target.scrollLeft;
    const cardWidth = e.target.offsetWidth;
    const index = Math.round(scrollPosition / cardWidth);
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  return (
    <section id="how-it-works" className="py-16 md:py-24 lg:py-32 bg-teal-light/30 overflow-hidden">
      <div className="max-w-[1240px] mx-auto ">
        <div className="text-center mb-10 lg:mb-16 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="eyebrow">How Vitalink Works</span>
            <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight px-6 text-secondary">
              Continuous Care. <br className="sm:hidden" /> Complete Transparency. <br className="sm:hidden" /> Total Control.
            </h2>
            <p className="text-text-muted text-base md:text-lg max-w-[800px] mx-auto leading-relaxed">
              Vitalink is built on three layers that work together seamlessly — IoT wearables that capture health data around the
              clock, AI models that turn raw readings into meaningful clinical insight, and a patient-owned blockchain health record
              that keeps data secure, private, and always accessible.
            </p>
          </motion.div>
        </div>

        {/* Carousel for < lg */}
        <div className="lg:hidden relative">
          {/* Dots Indicator at the Top */}
          <div className="flex flex-col items-center mb-8">
            <div className="flex justify-center gap-3 mb-3">
              {STEPS.map((step, index) => (
                <div 
                  key={step.id}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    activeIndex === index 
                      ? `w-8 ${step.dotColor}` 
                      : 'w-2 bg-secondary/10'
                  }`}
                />
              ))}
            </div>
            <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-secondary/40">
              Swipe to explore
            </span>
          </div>

          <div 
            ref={containerRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto snap-x snap-mandatory no-scrollbar pb-4"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none' 
            }}
          >
            {STEPS.map((step) => (
              <StepCard key={step.id} step={step} isCarousel={true} />
            ))}
          </div>
        </div>

        {/* Grid for lg+ */}
        <div className="hidden lg:grid grid-cols-2 gap-12 lg:gap-16 px-6">
          {STEPS.map((step, idx) => (
            <StepCard key={step.id} step={step} index={idx} />
          ))}
        </div>

        {/* Convergence Banner */}
        <div className="mt-8 md:mt-16 relative px-6">
          <div className="max-w-4xl mx-auto">
            <StarBorder color="#044e47" speed="6s" thickness={8} className="shadow-2xl">
              <div className="bg-black/95 backdrop-blur-2xl rounded-[20px] p-8 md:p-12">
                {/* Icons Row */}
                <div className="flex flex-col items-center justify-center gap-6 sm:gap-12">
                  <div className="flex items-center justify-center gap-4 sm:gap-12">
                    {/* IoT */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-4 group"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-emerald-500 flex items-center justify-center text-white shadow-[0_0_40px_rgba(16,185,129,0.15)] border border-emerald-400/30 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all duration-500">
                        <Watch size={40} strokeWidth={1.5} className="md:size-12" />
                      </div>
                      <div className="text-center">
                        <span className="block font-black text-xl md:text-2xl tracking-tighter uppercase text-white group-hover:text-emerald-400 transition-colors">IoT</span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-emerald-500/60 opacity-0 group-hover:opacity-100 transition-opacity">Vitasense</span>
                      </div>
                    </motion.div>

                    <Plus className="text-white/20" size={24} strokeWidth={1} />

                    {/* AI */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex flex-col items-center gap-4 group"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-blue-500 flex items-center justify-center text-white shadow-[0_0_40px_rgba(59,130,246,0.15)] border border-blue-400/30 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)] transition-all duration-500">
                        <Brain size={40} strokeWidth={1.5} className="md:size-12" />
                      </div>
                      <div className="text-center">
                        <span className="block font-black text-xl md:text-2xl tracking-tighter uppercase text-white group-hover:text-blue-400 transition-colors">AI</span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-blue-500/60 opacity-0 group-hover:opacity-100 transition-opacity">VitaAI</span>
                      </div>
                    </motion.div>

                    {/* Desktop Plus */}
                    <Plus className="hidden sm:block text-white/20" size={24} strokeWidth={1} />

                    {/* Desktop Blockchain */}
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="hidden sm:flex flex-col items-center gap-4 group"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-violet-500 flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,92,246,0.15)] border border-violet-400/30 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-all duration-500">
                        <Link size={40} strokeWidth={1.5} className="md:size-12" />
                      </div>
                      <div className="text-center">
                        <span className="block font-black text-xl md:text-2xl tracking-tighter uppercase text-white group-hover:text-violet-400 transition-colors">Blockchain</span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-violet-500/60 opacity-0 group-hover:opacity-100 transition-opacity">Vitachain</span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile Mobile Blockchain Row */}
                  <div className="sm:hidden flex flex-col items-center gap-6">
                    <Plus className="text-white/20" size={24} strokeWidth={1} />
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="flex flex-col items-center gap-4 group"
                    >
                      <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-violet-500 flex items-center justify-center text-white shadow-[0_0_40px_rgba(139,92,246,0.15)] border border-violet-400/30 group-hover:scale-110 group-hover:shadow-[0_0_50px_rgba(139,92,246,0.3)] transition-all duration-500">
                        <Link size={40} strokeWidth={1.5} className="md:size-12" />
                      </div>
                      <div className="text-center">
                        <span className="block font-black text-xl md:text-2xl tracking-tighter uppercase text-white group-hover:text-violet-400 transition-colors">Blockchain</span>
                        <span className="text-[0.6rem] font-bold uppercase tracking-widest text-violet-500/60 opacity-0 group-hover:opacity-100 transition-opacity">Vitachain</span>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Tagline */}
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mt-8 md:mt-10"
                >
                  <p className="text-white/80 font-bold text-lg md:text-xl tracking-tight italic">
                    Not three separate tools. <span className="text-primary not-italic">One connected system</span>{' '}
                    that captures your health, understands it, and protects it — every single day.
                  </p>
                </motion.div>
              </div>
            </StarBorder>
          </div>
        </div>

      </div>
    </section>
  );
}
