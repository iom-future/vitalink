import React, { useRef } from 'react';
import { Quote } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { Counter } from './Counter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const PROOF_STATS = [
  { number: 94, suffix: '%', label: 'AI early warning accuracy rate' },
  { number: 3.2, suffix: 'x', decimals: 1, label: 'Fewer preventable readmissions' },
  { number: 200, suffix: '+', label: 'Clinicians in early access' },
  { number: 0, prefix: '$', label: 'Patient data sold without consent' },
];

const TESTIMONIALS = [
  {
    name: 'Dr. Anita Sharma',
    role: 'Interventional Cardiologist',
    org: 'Mount Sinai Affiliate',
    quote: 'I have been practising cardiology for 22 years. Vitalink is the first tool that has genuinely changed the way I practice. I intercepted a cardiac event in a patient 58 hours before it would have landed them in the ER. That is not a feature. That is a life.',
  },
  {
    name: 'Marcus T.',
    role: 'Patient',
    org: 'Chronic Disease Management Program',
    quote: "I have type 1 diabetes. For the first time in my life I feel like someone is watching over me — not a machine, not an algorithm, but a system that actually understands my body and gets the right information to my care team before I even know something is wrong.",
  },
  {
    name: 'Dr. Rachel Okonkwo',
    role: 'Chief Medical Officer',
    org: 'Regional Health Network',
    quote: 'The blockchain health wallet was the feature that sold our hospital board. Our patients asked for data ownership for years. Vitalink delivered it — and the EHR integration made the rollout seamless. We were live in three weeks.',
  },
];

const LOGOS = ['EPIC', 'CERNER', 'ATHENA', 'MAYO CLINIC', 'CLEVELAND CLINIC'];

export default function SocialProof() {
  const containerRef = useRef(null);
  const { ref: statsInViewRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useGSAP(() => {
    // Header Animation
    gsap.from(".proof-header", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".proof-header",
        start: "top 85%",
        toggleActions: "play none none reverse",
      }
    });

    // Stats Cards Animation (Unified Right Entry + Group Trigger)
    gsap.fromTo(".stat-card",
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
          trigger: ".stat-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );

    // Testimonials Animation (Unified Right Entry + Group Trigger)
    gsap.fromTo(".testimonial-card",
      {
        x: 60,
        y: 30,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".testimonial-card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="social-proof" ref={containerRef} className="py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="proof-header text-center mb-10 lg:mb-16 px-4">
          <span className="eyebrow">WHAT CLINICIANS AND PATIENTS ARE SAYING</span>
          <h2 className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
            Medicine Changes When You Can See What's Really Happening.
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-[850px] mx-auto leading-relaxed">
            Early access clinicians, patients, and hospital systems share what continuous monitoring with Vitalink has meant for them — and their patients.
          </p>
        </div>

        <div ref={statsInViewRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12 md:mb-20">
          {PROOF_STATS.map((stat, i) => (
            <div 
              key={i}
              className="stat-card p-6 rounded-2xl bg-slate-200/50 border border-secondary/5 text-center shadow-[inset_0_2px_10px_rgba(255,255,255,0.8)] relative overflow-hidden group hover:border-primary/20 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/60 rounded-full -mr-10 -mt-10 blur-2xl transition-opacity group-hover:opacity-100 opacity-60"></div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-mono font-bold text-primary mb-3 tracking-tighter">
                  <Counter 
                    value={stat.number} 
                    decimals={stat.decimals || 0} 
                    prefix={stat.prefix || ''} 
                    suffix={stat.suffix || ''} 
                    inView={statsInView} 
                  />
                </div>
                <div className="text-secondary/60 text-[0.65rem] font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8 md:mb-16">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="testimonial-card flex flex-col items-start p-2"
            >
              <div className="mb-10 p-4 rounded-2xl bg-primary/5 text-primary">
                <Quote size={20} className="fill-current opacity-20" />
              </div>
              <p className="text-secondary text-xl font-black leading-relaxed mb-10 flex-grow tracking-tight">
                "{t.quote}"
              </p>
              <div className="flex flex-col">
                <span className="font-semibold text-secondary text-xl">{t.name}</span>
                <span className="text-primary font-bold text-sm tracking-tight mb-1">{t.role}</span>
                <span className="text-text-muted text-xs font-bold uppercase tracking-widest leading-none">{t.org}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Logo Strip */}
        <div className="pt-16 md:pt-24 border-t border-secondary/5 text-center">
          <p className="text-text-muted/40 text-[0.65rem] font-bold tracking-[0.3em] uppercase mb-10 lg:mb-12 px-6">
            Integrated With the Systems Your Team Already Uses
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale saturate-0">
            {LOGOS.map((logo, i) => (
              <span key={i} className="text-xl md:text-2xl font-black text-secondary tracking-tighter">
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
