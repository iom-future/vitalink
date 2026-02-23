import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import HowItWorksPage from './pages/HowItWorksPage';
import PatientsPage from './pages/PatientsPage';
import CliniciansPage from './pages/CliniciansPage';
import HospitalsPage from './pages/HospitalsPage';
import ResearchPage from './pages/ResearchPage';
import PricingPage from './pages/PricingPage';

function App() {
  const [bannerVisible, setBannerVisible] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout bannerVisible={bannerVisible} onBannerClose={() => setBannerVisible(false)} />}>
          <Route index element={<Home bannerVisible={bannerVisible} />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="for-patients" element={<PatientsPage />} />
          <Route path="for-clinicians" element={<CliniciansPage />} />
          <Route path="for-hospitals" element={<HospitalsPage />} />
          <Route path="research" element={<ResearchPage />} />
          <Route path="pricing" element={<PricingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;