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

const slideIn = (direction = 'left', i = 0) => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'left' ? -20 : 20 
  },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { 
      delay: i * 0.1, 
      duration: 1, 
      ease: [0.22, 1, 0.36, 1] 
    } 
  },
});

function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='hero-stats relative z-20'>
      <div className="mx-auto -translate-y-8 relative w-[90%] max-w-[1200px]">
        <div 
          ref={ref} 
          className="grid bg-black/90 backdrop-blur-2xl shadow-2xl hover:shadow-black/50 rounded-2xl grid-cols-2 lg:grid-cols-4 border border-white/10 relative overflow-hidden transition-all duration-500"
        >
          {STATS.map((stat, i) => (
            <motion.div 
              key={i} 
              className="text-center py-8 md:py-12 group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideIn(i % 2 === 0 ? 'left' : 'right', i)}
            >
              <div className="font-mono text-4xl md:text-5xl font-black text-accent mb-2 group-hover:scale-110 transition-transform duration-500">
                <Counter 
                  value={stat.number} 
                  decimals={stat.decimals || 0} 
                  prefix={stat.prefix || ''} 
                  suffix={stat.suffix || ''} 
                  inView={inView} 
                />
              </div>
              <div className="text-[0.6rem] md:text-[0.7rem] font-black text-white/50 uppercase tracking-[0.25em] leading-tight group-hover:text-accent transition-colors">
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