import React, { useRef } from 'react';
import { Activity, Zap, Shield, Database, LayoutDashboard, LineChart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FEATURES = [
  {
    icon: <Activity />,
    title: 'Continuous 24/7 Biometric Monitoring',
    description: 'Heart rate, blood glucose, blood pressure, SpO2, ECG, sleep quality, and activity levels — all streaming live from FDA-ready wearable devices. No gaps. No estimates. Just continuous, unbroken health intelligence.',
  },
  {
    icon: <Zap />,
    title: 'AI Early Warning Alerts',
    description: 'Our models detect clinical deterioration patterns up to 72 hours before a critical health event. Clinicians receive instant push alerts ranked by severity — with a patient summary, trend data, and a suggested response pathway.',
  },
  {
    icon: <Shield />,
    title: 'Patient-Owned Blockchain Health Wallet',
    description: 'Every piece of health data belongs to the patient — stored in an encrypted, immutable blockchain wallet. Patients grant and revoke clinical access instantly, and earn tokenized rewards when their anonymized data contributes to research.',
  },
  {
    icon: <Database />,
    title: 'FHIR-Compliant EHR Integration',
    description: 'Vitalink connects to Epic, Cerner, Athenahealth, and all major EHR systems via FHIR APIs — with zero disruption to existing clinical workflows. Health data flows in, and action flows out.',
  },
  {
    icon: <LayoutDashboard />,
    title: 'Multi-Patient Clinical Dashboard',
    description: 'Care teams monitor entire patient populations from one screen. AI-prioritized alert queues, live vitals, risk trend graphs, and one-click patient record access — designed for the speed of real clinical care.',
  },
  {
    icon: <LineChart />,
    title: 'Anonymized Data Marketplace',
    description: 'Healthcare institutions and pharmaceutical researchers access aggregated, anonymized patient data through a secure, consent-governed marketplace. Patients earn. Researchers discover. Everyone benefits.',
  },
];

export default function Features() {
  const containerRef = useRef(null);

  useGSAP(() => {
    // Header Animation
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

    // Feature Cards Animation (Unified Right Entry + Group Trigger)
    gsap.fromTo(".feature-card",
      {
        x: 60,
        y: 20,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {FEATURES.map((feature, index) => (
            <div
            key={feature.title}
            className="feature-card opacity-0 p-8 md:p-10 rounded-2xl relative border-4 border-white bg-[#F5F5F7] bg-[radial-gradient(100%_50%_at_50%_0%,rgba(4,78,71,0.08)_0,rgba(4,78,71,0)_50%,rgba(4,78,71,0)_100%)] hover:border-primary/10 transition-all duration-500 hover:shadow-clinical-hover group overflow-hidden h-full"
          >
              {/* Background Icon Effect */}
              <div className="absolute -bottom-10 -right-10 text-primary opacity-[0.05] group-hover:opacity-[0.08] group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none" aria-hidden="true">
                {React.cloneElement(feature.icon, { size: 240, strokeWidth: 1.5 })}
              </div>

              <div className="relative z-10 h-full flex flex-col">
                <h3 className="text-2xl md:text-3xl font-black mb-6 tracking-tight text-secondary group-hover:text-primary transition-colors leading-[1.1]">
                  {feature.title}
                </h3>
                <p className="text-text-muted text-base md:text-lg leading-relaxed mb-8">
                  {feature.description}
                </p>
                <div className="mt-auto">
                  <a href="#how-it-works" className="inline-flex items-center gap-2 text-sm font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-label={`See how ${feature.title} works`}>
                    See how it works <Zap size={14} className="fill-current" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
