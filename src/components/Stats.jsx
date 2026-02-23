import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Counter } from './Counter'

const STATS = [
  { number: 150, suffix: 'B', prefix: '$', label: 'Remote Patient Monitoring TAM' },
  { number: 94, suffix: '%', label: 'Early Detection Accuracy Rate' },
  { number: 48, suffix: 'hr', label: 'Avg. Alert to Critical Response' },
  { number: 3.2, suffix: 'x', decimals: 1, label: 'Reduction in Hospital Readmissions' },
];

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='hero-stats'>
      <div className="mx-auto -translate-y-6  relative z-10 w-[90%]">
        <div ref={ref} className="max-w-[1200px] mx-auto grid bg-black/90 backdrop-blur-2xl shadow-2xl hover:shadow-2xl hover:shadow-black/50 rounded-2xl grid-cols-2 lg:grid-cols-4 border border-white/10 relative overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`relative z-10 text-center py-6 md:py-10 px-6 `}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.8 }}
            >
              <div className="font-mono text-4xl md:text-5xl font-black text-accent mb-3">
                <Counter 
                  value={stat.number} 
                  decimals={stat.decimals || 0} 
                  prefix={stat.prefix || ''} 
                  suffix={stat.suffix || ''} 
                  inView={inView} 
                />
              </div>
              <div className="text-white/60 text-[0.65rem] md:text-[0.75rem] font-bold uppercase tracking-[0.25em] leading-relaxed">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats