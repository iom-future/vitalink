import React from 'react'
import { motion } from 'framer-motion'
const STATS = [
  { number: '$150B', label: 'Market Opportunity' },
  { number: '94%', label: 'Detection Accuracy' },
  { number: '48hr', label: 'Response Lead Time' },
  { number: '3.2x', label: 'Readmission Reduction' },
];

function Stats() {
  return (
    <div className='hero-stats'>
          <div className="mx-auto -translate-y-8  relative z-10 w-[90%]">
        <div className="max-w-[1200px] mx-auto grid bg-black/90 backdrop-blur-2xl shadow-2xl hover:shadow-2xl hover:shadow-black/50 rounded-2xl grid-cols-2 lg:grid-cols-4 border border-white/10 relative overflow-hidden">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.number}
              className={`relative z-10 text-center py-6 md:py-8 px-4 `}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.8 }}
            >
              <div className="font-mono text-3xl md:text-4xl font-black text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-white/80 text-[0.7rem] font-bold uppercase tracking-[0.2em]">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats