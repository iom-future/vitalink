import React, { useRef } from 'react';
import { ShieldCheck, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const TRUST_BADGES = [
  'HIPAA Certified',
  'FDA Class II Ready',
  'SOC 2 Type II',
  'ISO 27001',
];

export default function Hero({ bannerVisible }) {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.fromTo(".hero-eyebrow", 
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "back.out(1.2)" }
    )
    .fromTo(".hero-title", 
      { x: 60, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "back.out(1.2)" },
      "-=0.5"
    )
    .fromTo(".hero-description", 
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
      "-=0.7"
    )
    .fromTo(".hero-badges", 
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" },
      "-=0.8"
    )
    .fromTo(".hero-btns", 
      { x: 30, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "back.out(1.4)" },
      "-=0.6"
    )
    .fromTo(".hero-marquee", 
      { opacity: 0 },
      { opacity: 1, duration: 1, ease: "power2.out" },
      "-=0.4"
    );
  }, { scope: containerRef });

  return (
    <section id="hero" ref={containerRef} className={`relative min-h-[90vh] flex flex-col justify-center overflow-hidden pb-6 bg-teal-light transition-all duration-500 ${bannerVisible ? 'pt-[170px]' : 'pt-[80px]'}`}>
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-white/90 pointer-events-none" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-[1200px] mx-auto w-full">
        <span className="hero-eyebrow opacity-0 eyebrow ">
          The future of patient monitoring is here
        </span>

        <h1 className="hero-title opacity-0 text-[clamp(2.5rem,6vw,4.5rem)] text-secondary font-black max-w-[1000px] mx-auto mb-6 tracking-tight leading-[1.05]">
          Your Patient's Health, <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradientShift_8s_linear_infinite]">
            Monitored in Real Time.
          </span>
          <br className="hidden sm:block" />
          <span className="text-primary/90">Acted On Before It's Too Late.</span>
        </h1>

        <p className="hero-description opacity-0 text-secondary/80 text-lg md:text-2xl max-w-[800px] mx-auto mb-6 leading-relaxed font-medium">
          Vitalink connects wearable IoT devices, AI-powered health analytics, and patient-owned blockchain health records into one seamless platform — giving clinicians the live insight they need and patients the privacy they deserve.
        </p>

        <p className="hero-badges opacity-0 text-secondary/50 text-[0.85rem] md:text-[1rem] max-w-[850px] mx-auto mb-8 leading-relaxed italic">
          HIPAA-certified • Trusted by physicians, hospital networks, and research institutions • Built with patients — not just for them
        </p>

        <div className="hero-btns opacity-0 flex flex-col sm:flex-row gap-5 justify-center mb-6">
          <Link to="/pricing" className="btn-teal sm:w-[40%] lg:w-[30%] justify-center group px-10">
            Start Monitoring Now 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/how-it-works" className="btn-outline-dark sm:w-[40%] lg:w-[30%] justify-center group px-10">
            <Play size={18} className="fill-current" />
            See It In Action
          </Link>
        </div>

        <div className="hero-marquee opacity-0 relative overflow-hidden w-full hover:opacity-100 transition-opacity duration-500 mask-fade py-4">
          <div className="flex gap-16 animate-[marquee_30s_linear_infinite] whitespace-nowrap w-max">
            {[...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES, ...TRUST_BADGES].map((badge, idx) => (
              <span key={`${badge}-${idx}`} className="flex items-center gap-2 text-secondary text-xs font-bold tracking-widest uppercase">
                <ShieldCheck size={14} className="text-primary" />
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
