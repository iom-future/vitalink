import React, { useRef } from 'react';
import { ArrowUpRight, Activity, AlertCircle, Database } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Counter } from './Counter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PROBLEMS = [
  {
    icon: <AlertCircle />,
    title: 'Snapshot Data Gaps',
    desc: 'Traditional care depends on single measurements. But health happens between clinical visits. Vitalink captures the full story.',
  },
  {
    icon: <Activity />,
    title: 'Reactive Treatment',
    desc: 'Waiting for symptoms means waiting for damage. Our AI identifies deterioration markers 72 hours before a crisis occurs.',
  },
  {
    icon: <Database />,
    title: 'Data Silos & Privacy',
    desc: 'Health records are scattered and sold. Vitalink puts patients in control with a secure, blockchain-backed health wallet.',
  },
];

const PULL_STATS = [
  { 
    number: 1, 
    suffix: ' in 5', 
    text: 'US adults live with a chronic condition that goes unmonitored between clinical visits.' 
  },
  { 
    number: 320, 
    prefix: '$', 
    suffix: 'B', 
    text: 'is lost annually to preventable hospital admissions caused by late-stage reactivity.' 
  },
  { 
    number: 78, 
    suffix: '%', 
    text: 'of patients are ready for continuous monitoring, yet the infrastructure hasn’t existed until now.' 
  },
];

export default function Problem() {
  const containerRef = useRef(null);
  const { ref: statsInViewRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useGSAP(() => {
    // Header Animation
    gsap.from(".problem-header", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".problem-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    // Problem Cards Animation
    const cards = gsap.utils.toArray(".problem-card");
    cards.forEach((card, i) => {
      gsap.from(card, {
        x: i % 2 === 0 ? -30 : 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });

    // Pull Quote Background
    gsap.from(".pull-quote-bg", {
      scale: 0.98,
      opacity: 0,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".pull-quote-bg",
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    // Pull Quote Stats
    const statsRows = gsap.utils.toArray(".stat-row");
    statsRows.forEach((row, i) => {
      gsap.from(row, {
        x: i % 2 === 0 ? -25 : 25,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: row,
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="problem" ref={containerRef} className="py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-6 mb-10">
        <div className="problem-header text-center">
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
        </div>
      </div>

      {/* Problem Cards */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 md:mb-20">
          {PROBLEMS.map((p, i) => (
            <div
              key={p.title}
              className="problem-card p-8 md:p-10 rounded-2xl relative border-4 border-white bg-[#F5F5F7] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(239,68,68,0.1)_0,rgba(239,68,68,0)_50%,rgba(239,68,68,0)_100%)] hover:border-red-500/10 transition-all duration-500 hover:shadow-clinical-hover group overflow-hidden"
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
            </div>
          ))}
        </div>

        {/* Pull Quote - STAYS DARK */}
        <div
          ref={statsInViewRef}
          className="pull-quote-bg bg-black/95 backdrop-blur-2xl shadow-2xl rounded-2xl py-12 md:py-16 px-10 md:px-24 text-white border border-white/10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="relative z-10 space-y-10">
            {PULL_STATS.map((s, i) => (
              <div 
                key={i} 
                className="stat-row flex flex-col md:flex-row md:items-center gap-6 md:gap-12 border-b border-white/5 pb-10 last:border-none"
              >
                <span className="text-accent font-black text-4xl md:text-5xl font-mono tracking-tighter shrink-0">
                  {s.number ? (
                    <Counter 
                      value={s.number} 
                      prefix={s.prefix || ''} 
                      suffix={s.suffix || ''} 
                      inView={statsInView} 
                    />
                  ) : (
                    s.highlight
                  )}
                </span>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed">{s.text}</p>
              </div>
            ))}
            <p 
              className="text-white font-black text-3xl md:text-4xl pt-8 tracking-tight leading-tight"
            >
              The technology is ready. <br className="sm:hidden" /> The platform is Vitalink.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
