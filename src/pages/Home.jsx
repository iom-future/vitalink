import React from 'react';
import Hero from '../components/Hero';
import Stats from "../components/Stats"
import Problem from '../components/Problem';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import SocialProof from '../components/SocialProof';
import CtaSection from '../components/CtaSection';

export default function Home({ bannerVisible }) {
  return (
    <>
      <Hero bannerVisible={bannerVisible} />
      <Stats />
      <Problem />
      <HowItWorks />
      <Features />
      <SocialProof />
      <CtaSection />
    </>
  );
}
