import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Lock, ArrowUpRight } from 'lucide-react';

const PROBLEMS = [
  {
    icon: <Activity className="text-primary" size={24} />,
    title: 'Snapshot-Based Care',
    desc: "Patients see their doctor fewer than 4 times per year on average. 361 days of vital health data remain invisible, leaving clinicians to make critical decisions based on snapshots, not the full story.",
  },
  {
    icon: <Database className="text-primary" size={24} />,
    title: 'Data Fragmentation',
    desc: 'Health records are siloed across EMRs, labs, and specialists. No single entity has the full picture, leading to dangerous treatment overlaps and delayed interventions.',
  },
  {
    icon: <Lock className="text-primary" size={24} />,
    title: 'Zero Patient Agency',
    desc: 'Patients generate the data but have no control over it. They lack visibility, portability, or the ability to benefit from the records they create.',
  },
];

const PULL_STATS = [
  { highlight: '1 in 5', text: 'US adults live with a chronic condition that goes unmonitored between clinical visits.' },
  { highlight: '$320B', text: 'is lost annually to preventable hospital admissions caused by late-stage reactivity.' },
  { highlight: '78%', text: 'of patients are ready for continuous monitoring, yet the infrastructure hasn’t existed until now.' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ 
    opacity: 1, 
    y: 0, 
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }),
};

export default function Problem() {
  return (
    <section id="problem" className="py-24 lg:py-40 ">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-24">
        <motion.div 
          className="text-center"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <span className="eyebrow">The Crisis of Reactivity</span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-bold mb-8 leading-[1.1] tracking-tight">
            Healthcare reacts to illness.<br className="hidden md:inline" /> We exist to prevent it.
          </h2>
          <p className="text-text-muted text-xl max-w-[800px] mx-auto leading-relaxed">
            The gap between clinical visits is costing lives. Vitalink creates a continuous thread of care, ensuring no patient is left unmonitored.
          </p>
        </motion.div>
      </div>

      {/* Problem Cards */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-10 rounded-[32px] border border-secondary/5 bg-surface-light/50 hover:bg-white hover:border-primary/10 transition-all duration-500 hover:shadow-clinical-hover group"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            >
              <div className="w-14 h-14 rounded-2xl bg-white border border-secondary/5 shadow-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 tracking-tight">{p.title}</h3>
              <p className="text-text-muted leading-relaxed mb-6">{p.desc}</p>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn how we solve it <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pull Quote - STAYS DARK */}
        <motion.div
          className="bg-secondary rounded-[40px] py-16 px-10 md:px-20 text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 space-y-8">
            {PULL_STATS.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 border-b border-white/5 pb-8 last:border-none">
                <span className="text-accent font-bold text-3xl md:text-4xl font-mono tracking-tighter shrink-0">{s.highlight}</span>
                <p className="text-white/70 text-lg md:text-xl leading-relaxed">{s.text}</p>
              </div>
            ))}
            <p className="text-white font-black text-2xl md:text-3xl pt-8 tracking-tight">
              The technology is ready. The platform is Vitalink.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
