import React from 'react'

const STATS = [
  { number: '$150B', label: 'Market Opportunity' },
  { number: '94%', label: 'Detection Accuracy' },
  { number: '48hr', label: 'Response Lead Time' },
  { number: '3.2x', label: 'Readmission Reduction' },
];

function Stats() {
  return (
    <div>
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
    </div>
  )
}

export default Stats