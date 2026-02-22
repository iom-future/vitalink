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

/* Animated gradient mesh background */
function HeroBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;
      ctx.clearRect(0, 0, w, h);

      // Subtler orbs for Apple aesthetic
      const orbs = [
        { x: w * 0.2 + Math.sin(t * 0.2) * 100, y: h * 0.3 + Math.cos(t * 0.15) * 80, r: 400, color: 'rgba(13,148,136,0.1)' },
        { x: w * 0.8 + Math.cos(t * 0.1) * 120, y: h * 0.7 + Math.sin(t * 0.25) * 60, r: 350, color: 'rgba(103,232,249,0.06)' },
        { x: w * 0.5 + Math.sin(t * 0.3) * 80, y: h * 0.2 + Math.cos(t * 0.1) * 50, r: 300, color: 'rgba(13,148,136,0.04)' },
      ];

      for (const orb of orbs) {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      t += 0.005;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }),
};

export default function Hero({ bannerVisible }) {
  return (
    <section id="hero" className={`relative min-h-[95vh] flex flex-col justify-center overflow-hidden pb-10 transition-all duration-500 ${bannerVisible ? 'pt-[150px]' : 'pt-[90px]'}`}>
      <div className="absolute bottom-0 left-0 right-0 top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      {/* <HeroBg /> */}

      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto w-full">
        <motion.span
          className="eyebrow"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          The future of patient monitoring is here
        </motion.span>

        <motion.h1
          className="text-[clamp(2.5rem,6vw,4.5rem)] text-secondary font-black max-w-[1000px] mx-auto mb-8 tracking-tight leading-[1.05]"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
        >
          Your Patient's Health,{' '}
          <span className="bg-gradient-to-r !font-primary from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_8s_linear_infinite]">
            Monitored in Real Time.
          </span>
         
        </motion.h1>

        <motion.p
          className="text-secondary/70 text-base md:text-2xl max-w-[720px] mx-auto mb-4 leading-relaxed font-medium"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
        >
          Vitalink connects wearable IoT devices, AI-powered health analytics, and patient owned  block-chain health records into one seamless platform - giving clinicians the live insight they need and patients the privacy they deserve
        </motion.p>

    <motion.p
          className="text-gray- font-primary text-sm md:text-lg max-w-[720px] mx-auto mb-10 leading-relaxed font-medium"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
        >
          HIPAA-certified, Trusted by physicians, hospital networks, and research institutions. Built  with patients - not just for them
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
        >
          <a href="#cta" className="btn-teal justify-center group px-10">
            Start Monitoring Now 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#how-it-works" className="btn-outline-dark justify-center group px-10">
            <Play size={18} className="fill-current" />
            See It In Action
          </a>
        </motion.div>

        <motion.div
          className="flex gap-8 justify-center flex-wrap opacity-40 hover:opacity-100 transition-opacity duration-500"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
        >
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase">
              <ShieldCheck size={14} className="text-primary" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="mt-auto pt-20 relative z-10 w-full">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 lg:grid-cols-4 border-t border-secondary/10">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.number}
              className={`text-center py-12 px-6 ${
                i < STATS.length - 1 ? 'border-r border-secondary/10' : ''
              }`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1, duration: 1 }}
            >
              <div className="font-mono text-3xl md:text-4xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-secondary/40 text-[0.7rem] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
