import React from 'react';
import { motion } from 'framer-motion';

const PROBLEMS = [
  {
    icon: '📉',
    title: 'Monitoring Gaps Between Visits',
    desc: "The average patient sees their doctor fewer than 4 times per year. That's over 361 days where vital health data goes completely unrecorded — days where early warnings are missed and conditions quietly worsen.",
  },
  {
    icon: '🔀',
    title: 'Fragmented, Inaccessible Health Data',
    desc: 'Patient records are scattered across siloed EMR systems, labs, pharmacies, and specialists. No single clinician sees the full picture — leading to duplicated tests, conflicting treatments, and dangerous blind spots.',
  },
  {
    icon: '🔒',
    title: 'Patients Have No Ownership of Their Data',
    desc: "Patients generate the most intimate data in existence — their health — yet have zero control over how it's stored, shared, or monetized. They can't access it, port it, or financially benefit from it.",
  },
];

const PULL_STATS = [
  { highlight: '1 in 5', text: 'US adults lives with a chronic condition that could benefit from continuous remote monitoring.' },
  { highlight: '$320B', text: 'is spent annually on preventable hospital admissions — the direct cost of a healthcare system that waits for crises instead of preventing them.' },
  { highlight: '78%', text: 'of patients say they would use a wearable health device if the data went directly to their care team — but current systems make that connection nearly impossible.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' } }),
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-28 bg-surface-light">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <motion.span className="eyebrow" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}>
          THE PROBLEM WE EXIST TO SOLVE
        </motion.span>
        <motion.h2
          className="text-[clamp(2rem,4vw,3rem)] font-bold mb-5"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
        >
          Healthcare reacts to illness. It rarely prevents it.<br className="hidden md:inline" /> That gap is costing lives.
        </motion.h2>
        <motion.p
          className="text-text-muted text-lg max-w-[720px] mx-auto mb-14 leading-relaxed"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
        >
          Most patients are monitored a handful of times per year — in snapshot-based, reactive visits. Between those visits, critical changes go unnoticed, preventable conditions spiral, and patients feel invisible to the system meant to protect them.
        </motion.p>
      </div>

      {/* Problem Cards */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-16">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              className="bg-white border border-primary/10 rounded-2xl p-9 transition-all duration-400 hover:border-primary hover:shadow-[0_0_30px_rgba(13,148,136,0.1)] hover:-translate-y-1.5"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            >
              <div className="w-13 h-13 rounded-[14px] bg-primary/8 flex items-center justify-center mb-5 text-2xl">
                {p.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-primary">{p.title}</h3>
              <p className="text-text-muted text-[0.95rem] leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pull Quote */}
        <motion.div
          className="bg-secondary rounded-3xl py-14 px-8 md:px-12 text-white"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {PULL_STATS.map((s, i) => (
            <p key={i} className="text-white/65 text-base lg:text-lg leading-relaxed mb-5">
              <span className="text-accent font-bold text-xl lg:text-2xl font-mono">{s.highlight}</span>{' '}
              {s.text}
            </p>
          ))}
          <p className="text-white font-bold text-lg lg:text-xl mt-7">
            The demand is undeniable. The technology is ready. The platform is Vitalink.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
