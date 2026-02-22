import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CtaSection from './components/CtaSection';
import Footer from './components/Footer';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <div className="min-h-screen ">
      <Navbar bannerVisible={bannerVisible} onBannerClose={() => setBannerVisible(false)} />
      <main>
        <Hero bannerVisible={bannerVisible} />
        <Problem />
        <HowItWorks />
        <Features />
        <SocialProof />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;