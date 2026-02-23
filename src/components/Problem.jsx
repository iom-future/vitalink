import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Database, Lock, ArrowUpRight } from 'lucide-react';

const PROBLEMS = [
  {
    icon: <Activity className="text-red-500" size={24} />,
    title: 'Monitoring Gaps Between Visits',
    desc: "The average patient sees their doctor fewer than 4 times a year. Chronic conditions like diabetes, heart disease, and hypertension change daily. What happens in the 361 days between visits goes completely unrecorded.",
  },
  {
    icon: <Database className="text-red-500" size={24} />,
    title: 'Fragmented, Inaccessible Health Data',
    desc: "A patient's health history lives across a dozen different systems — each one siloed, incompatible, and inaccessible when it matters most. No single clinician ever sees the full picture.",
  },
  {
    icon: <Lock className="text-red-500" size={24} />,
    title: 'Patients Have No Ownership of Their Data',
    desc: "Health data is one of the most valuable assets a person generates — yet patients have zero control, zero visibility, and zero financial benefit from how it is used, shared, or sold by healthcare institutions.",
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
    <section id="problem" className="py-16 md:py-24 lg:py-32 ">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-10">
        <motion.div 
          className="text-center"
          variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
        >
          <span className="eyebrow-red">The Problem We Exist To Solve</span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
            Healthcare reacts to illness.<br className="hidden md:inline" /> We exist to prevent it.
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-[850px] mx-auto leading-relaxed">
           Every year, millions of preventable hospital admissions occur because warning signs went undetected between clinical
visits. Patients leave appointments with no continuous oversight. Clinicians rely on snapshot data — a blood pressure
reading, a single ECG — to make decisions about conditions that evolve over days and weeks. The system wasn't
designed for continuous care. Vitalink is.
          </p>
        </motion.div>
      </div>

      {/* Problem Cards */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 md:mb-20">
          {PROBLEMS.map((p, i) => (
            <motion.div
              key={p.title}
              className="p-8 md:p-10 rounded-2xl relative border-4 border-white bg-[#F5F5F7] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(239,68,68,0.1)_0,rgba(239,68,68,0)_50%,rgba(239,68,68,0)_100%)] hover:border-red-500/10 transition-all duration-500 hover:shadow-clinical-hover group overflow-hidden"
              variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i}
            >
              {/* Background Icon Effect */}
              <div className="absolute -bottom-10 -right-10 text-red-500 opacity-[0.07] group-hover:opacity-[0.1] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
                {React.cloneElement(p.icon, { size: 240, strokeWidth: 1.5 })}
              </div>

             
              <h3 className="text-2xl font-black mb-4 tracking-tight text-secondary relative z-10 leading-tight">{p.title}</h3>
              <p className="text-text-muted leading-relaxed mb-8 relative z-10">{p.desc}</p>
              <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-red-500 opacity-0 group-hover:opacity-100 transition-opacity relative z-10 uppercase tracking-widest">
                Learn how we solve it <ArrowUpRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pull Quote - STAYS DARK */}
        <motion.div
          className="bg-black/95 backdrop-blur-2xl shadow-2xl rounded-2xl py-12 md:py-16 px-10 md:px-24 text-white border border-white/10 relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 space-y-10">
            {PULL_STATS.map((s, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 border-b border-white/5 pb-10 last:border-none">
                <span className="text-accent font-black text-4xl md:text-5xl font-mono tracking-tighter shrink-0">{s.highlight}</span>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">{s.text}</p>
              </div>
            ))}
            <p className="text-white font-black text-3xl md:text-4xl pt-8 tracking-tight leading-tight">
              The technology is ready. <br className="sm:hidden" /> The platform is Vitalink.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
