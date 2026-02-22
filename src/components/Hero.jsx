import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { number: '$150B', label: 'Remote Patient Monitoring TAM' },
  { number: '94%', label: 'Early Detection Accuracy Rate' },
  { number: '48hr', label: 'Avg. Alert to Clinical Response' },
  { number: '3.2x', label: 'Reduction in Hospital Readmissions' },
];

const TRUST_BADGES = [
  'HIPAA Certified',
  'FDA Class II Ready',
  'SOC 2 Type II',
  'ISO 27001',
];

const CheckIcon = () => (
  <svg className="w-[18px] h-[18px] text-primary shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 12l2 2 4-4" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

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

      // Animated teal gradient orbs
      const orbs = [
        { x: w * 0.2 + Math.sin(t * 0.3) * 80, y: h * 0.3 + Math.cos(t * 0.2) * 60, r: 320, color: 'rgba(13,148,136,0.12)' },
        { x: w * 0.75 + Math.cos(t * 0.25) * 100, y: h * 0.6 + Math.sin(t * 0.35) * 50, r: 280, color: 'rgba(103,232,249,0.08)' },
        { x: w * 0.5 + Math.sin(t * 0.4) * 60, y: h * 0.15 + Math.cos(t * 0.15) * 40, r: 200, color: 'rgba(13,148,136,0.06)' },
      ];

      for (const orb of orbs) {
        const grad = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.r);
        grad.addColorStop(0, orb.color);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
      }

      t += 0.008;
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' } }),
};

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center bg-secondary overflow-hidden pt-[120px]">
      <HeroBg />

      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto w-full">
        <motion.span
          className="eyebrow eyebrow-light"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
        >
          THE FUTURE OF PATIENT MONITORING IS HERE
        </motion.span>

        <motion.h1
          className="text-[clamp(2.2rem,5vw,3.8rem)] text-white font-black max-w-[900px] mx-auto mb-6"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
        >
          Your Patient's Health,{' '}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Monitored in Real Time.
          </span>{' '}
          Acted On Before It's Too Late.
        </motion.h1>

        <motion.p
          className="text-white/60 text-lg max-w-[640px] mx-auto mb-3 leading-relaxed"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
        >
          Vitalink connects IoT wearables, clinical-grade AI, and blockchain-secured health records into one
          seamless remote patient monitoring platform — giving clinicians continuous insight and patients total
          ownership of their data.
        </motion.p>

        <motion.p
          className="text-white/35 text-sm mb-9"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
        >
          HIPAA-certified · Trusted by physicians · Built with patients
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center mb-11 flex-wrap"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4}
        >
          <a href="#cta" className="btn-primary">Start Monitoring Free →</a>
          <a href="#how-it-works" className="btn-outline">See It In Action</a>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center flex-wrap"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={5}
        >
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="flex items-center gap-2 text-white/50 text-sm font-medium">
              <CheckIcon />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Stats Bar */}
      <div className="bg-black/35 border-t border-white/[0.06] mt-16 relative z-10">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.number}
              className={`text-center py-10 px-5 ${
                i < STATS.length - 1 ? 'border-b sm:border-b lg:border-b-0 lg:border-r border-white/[0.06]' : ''
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
            >
              <div className="font-mono text-[clamp(1.6rem,3vw,2.4rem)] font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-white/45 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
