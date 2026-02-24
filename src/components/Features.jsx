import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Feature1 from '../assets/features/feature1.png';
import Feature2 from '../assets/features/feature2.png';
import Feature3 from '../assets/features/feature3.png';
import Feature4 from '../assets/features/feature4.png';
import Feature5 from '../assets/features/feature5.png';
import Feature6 from '../assets/features/feature6.png';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    title: 'Continuous 24/7 Biometric Monitoring',
    description: 'Heart rate, blood glucose, blood pressure, SpO2, ECG, sleep quality, and activity levels — all streaming live from FDA-ready wearable devices. No gaps. No estimates. Just continuous, unbroken health intelligence.',
    image: Feature1,
  },
  {
    title: 'AI Early Warning Alerts',
    description: 'Our models detect clinical deterioration patterns up to 72 hours before a critical health event. Clinicians receive instant push alerts ranked by severity — with a patient summary, trend data, and a suggested response pathway.',
    image: Feature2,
  },
  {
    title: 'Patient-Owned Blockchain Health Wallet',
    description: 'Every piece of health data belongs to the patient — stored in an encrypted, immutable blockchain wallet. Patients grant and revoke clinical access instantly, and earn tokenized rewards when their anonymized data contributes to research.',
    image: Feature3,
  },
  {
    title: 'FHIR-Compliant EHR Integration',
    description: 'Vitalink connects to Epic, Cerner, Athenahealth, and all major EHR systems via FHIR APIs — with zero disruption to existing clinical workflows. Health data flows in, and action flows out.',
    image: Feature4,
  },
  {
    title: 'Multi-Patient Clinical Dashboard',
    description: 'Care teams monitor entire patient populations from one screen. AI-prioritized alert queues, live vitals, risk trend graphs, and one-click patient record access — designed for the speed of real clinical care.',
    image: Feature5,
  },
  {
    title: 'Anonymized Data Marketplace',
    description: 'Healthcare institutions and pharmaceutical researchers access aggregated, anonymized patient data through a secure, consent-governed marketplace. Patients earn. Researchers discover. Everyone benefits.',
    image: Feature6,
  },
];

// Bento grid row configs
// Row 1: 65% / 35%
// Row 2: 50% / 50%
// Row 3: 35% / 65%
const ROWS = [
  { cols: 'md:grid-cols-[65fr_35fr]', features: [0, 1] },
  { cols: 'md:grid-cols-2', features: [2, 3] },
  { cols: 'md:grid-cols-[35fr_65fr]', features: [4, 5] },
];

export default function Features() {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from(".features-header", {
      y: 30,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".features-header",
        start: "top 85%",
        once: true,
        toggleActions: "play none none none",
      }
    });

    gsap.fromTo(".feature-card",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.12,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: ".feature-card",
          start: "top 85%",
          once: true,
          toggleActions: "play none none none",
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="py-16 md:py-24 lg:py-32 overflow-x-clip" aria-labelledby="features-heading">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="features-header text-center mb-10 lg:mb-16 px-4">
          <span className="eyebrow">WHAT VITALINK DOES FOR YOU</span>
          <h2 id="features-heading" className="text-[clamp(2.5rem,5vw,3.5rem)] font-black mb-10 leading-[1.05] tracking-tight text-secondary">
            Every Feature Designed With One Question in Mind: <br className="hidden md:block" /> Is the Patient Safe Right Now?
          </h2>
          <p className="text-text-muted text-base md:text-lg max-w-[850px] mx-auto leading-relaxed">
            From the biometric reading on a patient's wrist to the alert on a clinician's screen — every capability in Vitalink exists to close the gap between what is happening inside the body and the care that responds to it.
          </p>
        </div>

        {/* Bento Grid: per-row grids for precise column ratios */}
        <div className="flex flex-col gap-5">
          {ROWS.map((row, rowIndex) => (
            <div key={rowIndex} className={`grid grid-cols-1 ${row.cols} gap-5`}>
              {row.features.map((featureIndex) => {
                const feature = FEATURES[featureIndex];
                return (
                  <div
                    key={feature.title}
                    className="feature-card opacity-0 relative rounded-3xl overflow-hidden group h-[320px] md:h-[380px]"
                  >
                    {/* Background Image */}
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

                    {/* Text Content - Positioned at bottom */}
                    <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-10">
                      <h3 className="text-xl md:text-2xl font-black mb-3 tracking-tight text-white leading-[1.1]">
                        {feature.title}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed ">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
