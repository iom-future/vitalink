import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { Counter } from './Counter'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { number: 150, suffix: 'B', prefix: '$', label: 'Remote Patient Monitoring TAM' },
  { number: 94, suffix: '%', label: 'Early Detection Accuracy Rate' },
  { number: 48, suffix: 'hr', label: 'Avg. Alert to Critical Response' },
  { number: 3.2, suffix: 'x', decimals: 1, label: 'Reduction in Hospital Readmissions' },
];

function Stats() {
  const containerRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useGSAP(() => {
    // Stat Items Animation (Unified Right Entry + Group Trigger)
    gsap.fromTo(".stat-item",
      {
        x: 40,
        y: 20,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".stat-item",
          start: "top 95%",
          once: true,
          toggleActions: "play none none none",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section className='hero-stats relative z-20 overflow-x-clip' ref={containerRef} aria-label="Key Statistics">
      <div className="mx-auto -translate-y-8 relative w-[90%] max-w-[1200px]">
        <div 
          ref={ref} 
          className="grid bg-black/90 backdrop-blur-2xl shadow-2xl hover:shadow-black/50 rounded-2xl grid-cols-2 lg:grid-cols-4 border border-white/10 relative lg:gap-8 gap-2 px-2 overflow-hidden transition-all duration-500"
        >
          {STATS.map((stat, i) => (
            <div 
              key={i} 
              className="stat-item opacity-0 text-center py-8 md:py-12 group"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats